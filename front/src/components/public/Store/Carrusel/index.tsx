import { Carousel } from "react-bootstrap";

const Carrusel = () => {
require('../index.css')
  return (
    <div style={{ paddingTop: "67px" }}>
      <Carousel fade indicators={false} nextLabel={""} prevLabel={""} >
        <Carousel.Item >
          <img
            className="d-block w-100"
            src="https://i0.wp.com/www.hiddencorners.com.mx/wp-content/uploads/2018/09/Cover_Alebrijes_HC-e1536905038802.jpg?w=1440"
            alt="First slide"
          />
          {/* <Carousel.Caption>
            <h3>Primera</h3>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i0.wp.com/www.hiddencorners.com.mx/wp-content/uploads/2018/09/Oaxaca_Alebrijes_HC6-e1536905503539.jpg?w=1440"
            alt="Second slide"
          />

          {/* <Carousel.Caption>
            <h3>Segunda</h3>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i0.wp.com/www.hiddencorners.com.mx/wp-content/uploads/2018/09/Oaxaca_Alebrijes_HC3-e1536905085762.jpg?resize=960%2C640"
            alt="Third slide"
          />

          {/* <Carousel.Caption>
            <h3>Tercera</h3>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default Carrusel;
