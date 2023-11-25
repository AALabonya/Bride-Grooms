import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";
const Banner = () => {
    return (
        <div className="w-full text-center ">
        <Carousel>
              <div>
                  <img src="https://i.ibb.co/kJHCVgV/banner5.jpg " />
                 
              </div>
              <div>
                  <img src="https://i.ibb.co/fCRcsZb/banner1.jpg" />
                 
              </div>
              <div>
                  <img src="https://i.ibb.co/dWxdH0j/banner3.jpg" />
                
              </div>
              <div>
                  <img src="https://i.ibb.co/bLxFcY2/banner2.jpg" />
                 
              </div>
              <div>
                  <img src="https://i.ibb.co/fkDd8P9/banner4.webp" />
                  
              </div>
              <div>
                  <img src="https://i.ibb.co/wp6Hj4x/groom-black-tuxedo-hugs-tender-stunning-bride-while-they-stand-8353-8050.jpg" />
              </div>
          </Carousel>
    </div>
    );
};

export default Banner;