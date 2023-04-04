import Carousel from 'react-spring-3d-carousel';
function CardCarousel3d(props) {
    // AICI E ALTFEL CA SLIDES AU O STRUCTURA A LOR NU POTI FOLOSI CE VREI TU
    const pvcCards = [
        {
            "title": "The Personal Touch Personalized",
            "img-source" : pvcImages.PersonalImg,
            "img-back" : pvcBackImages.PersonalImg
        },
        {
            "title": "The Sift Personalized",
            "img-source" : pvcImages.ShiftImg,
            "img-back" : pvcBackImages.ShiftImg
        },
        {
            "title": "The Canvas Personalized",
            "img-source" : pvcImages.CanvasImg,
            "img-back" : pvcBackImages.CanvasImg
        },
        {
            "title": "The Breach Personalized",
            "img-source" : pvcImages.BreachImg,
            "img-back" : pvcBackImages.BreachImg
        },
        {
            "title": "The Visionary Personalized",
            "img-source" : pvcImages.VisionaryImg,
            "img-back" : pvcBackImages.VisionaryImg
        },
        {
            "title": "The Origin Personalized",
            "img-source" : pvcImages.OriginImg,
            "img-back" : pvcBackImages.OriginImg
        },
        {
            "title": "The New Beginnings Personalized",
            "img-source" : pvcImages.BeginningsImg,
            "img-back" : pvcBackImages.BeginningsImg
        }
    ];
    return (
     <Carousel slides={props.cards} />
    );
  }
  