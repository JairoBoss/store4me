const Pago = require("../models/pago.model.js");
const axios = require("axios");
const { param } = require("express/lib/request");

exports.crearOrden = async (req, res) => {
  const Nombres = req.body.Nombres;
  const cantidad = req.body.cantidad;
  const order = {
    intent: "CAPTURE",
    purchase_units: [
      {
        amount: {
          currency_code: "MXN",
          value: cantidad,
        },
        description: "Compra en store4me",
      },
    ],
    application_context: {
      brand_name: `Store4Me`,
      landing_page: "LOGIN",
      user_action: "PAY_NOW",
      return_url: "https://store4me-nodejs-api.herokuapp.com/api/pagos/validando-orden",
      cancel_url: "https://store4me-nodejs-api.herokuapp.com/api/pagos/cancelando-orden",
    },
  };
  const params = new URLSearchParams();
  params.append("grant_type", "client_credentials");
  const {
    data: { access_token },
  } = await axios.post(
    "https://api-m.sandbox.paypal.com/v1/oauth2/token",
    params,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      auth: {
        username: process.env.PAYPAL_API_CLIENT,
        password: process.env.PAYPAL_API_SECRECT,
      },
    }
  );
  const response = await axios.post(
    "https://api-m.sandbox.paypal.com/v2/checkout/orders",
    order,
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  );
  let idPaypal = response.data.id;
  let data = await new Pago({
    Nombres: Nombres,
    cantidad: cantidad,
    Productos: req.body.Productos,
    Apellidos: req.body.Apellidos,
    Email: req.body.Email,
    Telefono: req.body.Telefono,
    Calle: req.body.Calle,
    Colonia: req.body.Colonia,
    Pais: req.body.Pais,
    Ciudad: req.body.Ciudad,
    Estado: req.body.Estado,
    Indicacion: req.body.Indicacion,
    IdPaypal: response.data.id,
    Pagado: false,
  });
  // console.log(data)

  data
    .save()
    .then((data) => {})
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          `Ocurrio un error al tratar de crear la compra`,
      });
    });

  res.json(response.data);
};

exports.validarOrden = async (req, res) => {
  const { token } = req.query;

  try {
    const params = new URLSearchParams();
    params.append("grant_type", "client_credentials");
    const {
      data: { access_token },
    } = await axios.post(
      "https://api-m.sandbox.paypal.com/v1/oauth2/token",
      params,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        auth: {
          username: process.env.PAYPAL_API_CLIENT,
          password: process.env.PAYPAL_API_SECRECT,
        },
      }
    );
    const response = await axios.post(
      `https://api-m.sandbox.paypal.com/v2/checkout/orders/${token}/capture`,
      {},
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );
    let datos = {
      Pagado: true,
    };
    const actualizaPago = await Pago.findOneAndUpdate(
      { IdPaypal: token },
      datos
    );

    return res.redirect("http://localhost:3000/gracias-por-comprar");
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Peto" });
  }
};

exports.cancelarOrden = (req, res) => {
  return res.redirect("http://localhost:3000/");
};
