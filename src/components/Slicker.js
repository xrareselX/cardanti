import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useTranslation } from 'react-i18next';

function Slicker(props) {
    const sliderSettings = {
        slidesToShow: props.slidesToShow,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        centerMode: true,
        initialSlide: props.initialSlide,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 0,
                }
            }

        ]
      };
    
    return(
        <div className='slicker'>
            {/* <Cards /> */}
            <Slider {...sliderSettings}>
                {props.cards.map((card, index) => (
                    <div className='d-flex my-3 col-12 px-4'>
                        <div key={index} className="card-container crd-bg-white h-100">
                            <h3 className='mb-3 text-center'>{card.h3}</h3>
                            <p className='text-center'>{card.p}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
export default Slicker;