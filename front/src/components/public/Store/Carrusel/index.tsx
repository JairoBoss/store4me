import { Carousel } from "react-bootstrap";

const Carrusel = () => {
require('../index.css')
  return (
    <div style={{ paddingTop: "67px" }}>
      <Carousel fade indicators={false} nextLabel={""} prevLabel={""} >
        <Carousel.Item >
          <img
            className="d-block w-100"
            src="https://lezada.jamstacktemplates.dev/assets/images/hero-slider/hero-slider-one/2.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Primera</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://lezada.jamstacktemplates.dev/assets/images/hero-slider/hero-slider-one/1.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Segunda</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://lezada.jamstacktemplates.dev/assets/images/hero-slider/hero-slider-one/3.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Tercera</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default Carrusel;
