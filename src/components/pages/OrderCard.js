import roImg from "../../countries/ro.svg";
// import { ColorPicker } from '@wellbees/color-picker-input'
import Swatcher from "../Swatcher";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Navigation } from "swiper";
import { useRef, useState } from "react";
import InputComponent from "../InputComponent";
import CardantiC from "../../assets/icons/CardantiC";

// PVC front imports
import pvcImages from "../../assets/pvc-front/pvcImport";

// PVC back imports
import pvcBackImages from "../../assets/pvc-back/pvcBackImport";

// Carbon front imports
import carbonImages from "../../assets/carbon-front/carbonImport";

// Carbon back imports
import carbonBackImages from "../../assets/carbon-back/carbonBackImport";

// Metal front imports

import metalImages from "../../assets/metal-front/metalImport";

// Metal back imports

import metalBackImages from "../../assets/metal-back/metalBackImport";
import UploadModal from "../UploadModal";


function OrderCard() {
    const pvcInitialSlide = 3;
    const carbonInitialSlide = 1;
    const metalInitialSlide = 1;

    const [isFlipped, setIsFlipped] = useState(false);
    const [nameSize, setNameSize] = useState(10);
    const [roleSize, setRoleSize] = useState(8);
    const [companySize, setCompanySize] = useState(8);
    const [emptyLogo, setEmptyLogo] = useState(false);
    const [cardantiLogo, setCardantiLogo] = useState(true);
    const [isPVC, setIsPVC] = useState(true);
    const [isCarbon, setIsCarbon] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [isPortrait, setIsPortrait] = useState(false);
    
    function closeModalHandle(){
        setShowModal(false);
    }

    const pvcCards = [
        {
            "title": "The Personal Touch Persolanized",
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
    const carbonCards = [
        {
            "title": "Carbon Gold",
            "img-source" : carbonImages.GoldCarbonImg,
            "img-back" : carbonBackImages.GoldCarbonImg
        },
        {
            "title": "Carbon Black",
            "img-source" : carbonImages.BlackCarbonImg,
            "img-back" : carbonBackImages.BlackCarbonImg
        },
        {
            "title": "Carbon Silver",
            "img-source" : carbonImages.SilverCarbonImg,
            "img-back" : carbonBackImages.SilverCarbonImg
        }
    ];

    const metalCards = [
        {
            "title": "Metal Gold",
            "img-source" : metalImages.GoldMetalImg,
            "img-back" : metalBackImages.GoldMetalImg
        },
        {
            "title": "Metal Black",
            "img-source" : metalImages.BlackMetalImg,
            "img-back" : "back text" 
        },
        {
            "title": "Metal Gun Brushed",
            "img-source" : metalImages.SilverMetalImg,
            "img-back" : "back text" 
        }
    ];
    function onClickPvcHandle(){
        setIsPVC(true);
        setIsCarbon(false);
    }

    function onClickCarbonHandle(){
        setIsPVC(false);
        setIsCarbon(true);
    }

    function onClickMetalHandle(){
        setIsPVC(false);
        setIsCarbon(false);
    }

    function displayCardTitle(){
        const element = document.getElementsByClassName("swiper-slide-active")[0];
        let title = element.title;
        const TitleElement = document.getElementsByClassName("product-title")[0];
        TitleElement.innerHTML = title;
    }

    function slideOnClickHandler(e) {
        const hasClass = e.currentTarget.classList.contains('show-side');
        if (hasClass) {
            e.currentTarget.classList.remove("show-side");
        }else{
            e.currentTarget.className += " show-side";
        }
    }

    let toggleFrontRef = useRef();
    let toggleBackRef = useRef();

    function nameOnChangeHandle(e){
        const elements = document.getElementsByClassName("name");
        for(let element of elements){
            element.innerHTML = e.target.value;
        }
    }
    function roleOnChangeHandle(e){
        const elements = document.getElementsByClassName("role");
        for(let element of elements){
            element.innerHTML = e.target.value;
        }
    }
    function companyOnChangeHandle(e){
        const elements = document.getElementsByClassName("company");
        for(let element of elements){
            element.innerHTML = e.target.value;
        }
    }

    function removeClassNamefromAllElements(className, removeClassName){
        const elements = document.getElementsByClassName(className);
        for(let element of elements){
            element.classList.remove(removeClassName);
        }
    }

    function setLogoOnClickHandleEmpty(e){
        removeClassNamefromAllElements("logo-list-item", "selected");
        e.currentTarget.className += " selected";
        setEmptyLogo(true);
        setCardantiLogo(false);
    }

    function setLogoOnClickHandleCardanti(e){
        removeClassNamefromAllElements("logo-list-item", "selected");
        e.currentTarget.className += " selected";
        setEmptyLogo(false);
        setCardantiLogo(true);
    }
    
    function setLogoOnClickHandleCustom(e){
        removeClassNamefromAllElements("logo-list-item", "selected");
        e.currentTarget.className += " selected";
        setEmptyLogo(false);
        setCardantiLogo(false);
        setShowModal(true);
    }

    return (
        <>
        <div className="fix-content">
            <div id="top" style={{backgroundColor: "rgb(29, 30, 33)"}}>
                <section className="order-card-cont">
                    <div className="w-100 customizer-cont">
                        <div className="row triggers">
                            <div className="card-type d-flex justify-content-center">
                                <div  className={"trigger " + (!isPortrait ? "active" : "")} onClick={() => setIsPortrait(false)}>Design</div>
                                <div  className="separator"></div>
                                <div  className={"trigger " + (isPortrait ? "active" : "")} onClick={() => setIsPortrait(true)}>Portrait</div>
                            </div>
                        </div>
                            {!isPortrait && (
                        <div>
                            <div className="main-content w-100">
                                <div className="col-md-3 menu d-flex flex-column justify-content-center mt-3 align-items-center">
                                    <div className="personalize w-100 d-flex flex-column align-items-center">
                                        <div className="w-100 text-white mb-3">
                                            <span class="text-center d-block mb-2" style={{fontSize: "20px", color: "rgb(143, 144, 160)"}}>Material:</span>
                                            <div className="w-100 customizer-actions row justify-content-center btn-group">
                                                <button className={"col-4 btn text-white btn-card-material text-center btn-dark" + (isPVC ? " btn-green" : "")} 
                                                onClick={onClickPvcHandle}>PVC</button>
                                                <button className={"col-4 btn text-white btn-card-material text-center btn-dark" + (isCarbon ? " btn-green" : "")}
                                                onClick={onClickCarbonHandle}>CARBON</button>
                                                <button className={"col-4 btn text-white btn-card-material text-center btn-dark" + (!isPVC && !isCarbon? " btn-green" : "")} onClick={onClickMetalHandle}>METAL</button>
                                            </div>
                                            {isPVC && (
                                                <div className="w-100 row justify-content-center">
                                                    <div  className="material-color selected" style={{backgroundColor: "rgb(238, 238, 238)"}}></div>
                                                    <div  className="material-color" style={{backgroundColor: "rgb(216, 29, 52)"}}></div>
                                                    <div  className="material-color" style={{backgroundColor: "rgb(34, 34, 34)"}}></div>
                                                    <div  className="material-color" style={{backgroundColor: "rgb(19, 67, 153)"}}></div>
                                                </div>
                                                )}
                                        </div>
                                        <div className="w-100">
                                            <div className="form-group animated">
                                                <div className="d-flex flex-row">
                                                    <InputComponent  inputId="name" inputType="text" inputName="name" label="Nume"
                                                    onChange={nameOnChangeHandle}/>
                                                    <div className="name-buttons">
                                                        <button className="name-button btn btn-green" onClick={() => setNameSize(nameSize-1)}> - </button>
                                                        <button className="name-button btn btn-green" onClick={() => setNameSize(nameSize+1)}> + </button>
                                                        <Swatcher id="name-color" for="name"/>
                                                    </div>
                                                </div>
                                                <div className="errors">

                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-100">
                                            <div className="form-group animated">
                                                <div className="d-flex flex-row ">
                                                    <InputComponent inputId="role" inputType="text" inputName="role" label="Rol"
                                                     onChange={roleOnChangeHandle}/>
                                                    <div className="name-buttons">
                                                        <button className="name-button btn btn-green" onClick={() => setRoleSize(roleSize-1)}> - </button>
                                                        <button className="name-button btn btn-green" onClick={() => setRoleSize(roleSize+1)}> + </button>
                                                        <Swatcher id="role-color" for="role"/>
                                                    </div>
                                                </div>
                                                <div className="errors">

                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-100">
                                            <div className="form-group animated">
                                                <div className="d-flex flex-row">
                                                    <InputComponent inputId="company" inputType="text" inputName="company" label="Companie"
                                                     onChange={companyOnChangeHandle}/>
                                                    <div className="name-buttons">
                                                        <button className="name-button btn btn-green" onClick={() => setCompanySize(companySize-1)}> - </button>
                                                        <button className="name-button btn btn-green" onClick={() => setCompanySize(companySize+1)}> + </button>
                                                        <Swatcher id="company-color" for="company"/>
                                                    </div>
                                                </div>
                                                <div className="errors">

                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-100 mb-2">
                                            <span class="text-center d-block mb-2" style={{fontSize: "20px", color: "rgb(143, 144, 160)"}}>Logo-ul tău:</span>
                                            <div className="logo-list">
                                                <div className="logo-list-item" onClick={setLogoOnClickHandleEmpty}>
                                                    <span className="logo-list-text">EMPTY</span>
                                                </div>
                                                <div className="logo-list-item selected" onClick={setLogoOnClickHandleCardanti}>
                                                    <CardantiC />
                                                </div>
                                                <div className="logo-list-item" onClick={setLogoOnClickHandleCustom}>
                                                    <span className="logo-list-text">CUSTOM</span>
                                                </div>
                                            </div>
                                            <div className="logo-color-select text-center d-flex justify-content-center align-items-center" >
                                                <label for="logo-color" className="me-2" style={{color: "#c8c8c8"}}>Logo color:</label>
                                                <Swatcher id="logo-color" for="card-logo"/>
                                            </div>
                                        </div>
                                        <div className="w-100 text-white display-flex flex-column align-items-center">
                                            <span className="text-center d-block mt-2" style={{fontSize: "20px", color: " rgb(143, 144, 160)"}}>Stilul de imprimare:</span>
                                            <div className="w-100 customizer-actions row justify-content-center btn-group">
                                                <button class="col-6 btn text-white btn-green">Flat</button> 
                                                <button className="col-6 btn text-white btn-dark">Emboss</button>
                                            </div>
                                        </div>
                                        {showModal && (
                                            <UploadModal onCloseHandle={closeModalHandle} />
                                         )}
                                    </div>
                                    <div className="customizer-actions w-100 mt-3 row justify-content-center">
                                        <button className="btn btn-green w-50 d-inline col" style={{marginRight: "10px"}}>Adaugă în coș</button>
                                        <div className="col">
                                            <div className="price">
                                                <span className="amount">240  </span>
                                                <span className="currency">lei</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-9 result main-content-cards">
                                    <div className="row">
                                        <div className="col-12 px-md-2">
                                            <div className="carousel-container">
                                                <div className="flip-it">
                                                        <div className="flip-it-buttons text-center customizer-actions">
                                                            <button ref={toggleFrontRef} className={"btn text-white " + (isFlipped ? "btn-dark" : "btn-green")}
                                                            onClick={() => setIsFlipped(false)}
                                                            >Față</button> 
                                                            <button ref={toggleBackRef} className={"btn text-white "+ (!isFlipped ? "btn-dark" : "btn-green")} 
                                                            onClick={() => setIsFlipped(true)}
                                                            >Spate</button>
                                                        </div>
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="card-name">
                                                                <h3 className="product-title" style={{display: "flex", 
                                                                alignItems: "flex-end", justifyContent: "center"}}>
                                                                </h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="carousel-3d-container order-card-carousel">
                                                    {isPVC && (
                                                        <Swiper navigation={true} modules={[EffectCoverflow, Navigation]} className="mySwiper"
                                                            rewind={true} 
                                                            // loop={true}
                                                            initialSlide={pvcInitialSlide}
                                                            centeredSlides={true}
                                                            effect={"coverflow"} 
                                                            coverflowEffect={{
                                                                rotate: 55,
                                                                stretch: 20,
                                                                depth: 100,
                                                                modifier: 1,
                                                                slideShadows: true
                                                            }}
                                                            slidesPerView={"auto"}
                                                            onSlideChangeTransitionStart={displayCardTitle}
                                                        >
                                                            {pvcCards.map((pvcCard, index) =>(
                                                                <SwiperSlide className={isFlipped? "flipped": ""} onClick={slideOnClickHandler}
                                                                    title={pvcCard.title} >
                                                                        <div className="card__face card__face--front">
                                                                            <div className="card-logo" >
                                                                                {cardantiLogo && !emptyLogo && (
                                                                                    <div className="card-logo-svg">
                                                                                        <CardantiC/>    
                                                                                    </div>
                                                                                    )}
                                                                                {!cardantiLogo && !emptyLogo && (
                                                                                    <div className="card-logo-svg text-white" >
                                                                                        <div className="card-logo">
                                                                                            <div className="card-logo-placeholder" style={{borderColor: "rgba(255, 255, 255, 0.6)"}}>
                                                                                                <span style={{color: "rgba(255, 255, 255, 0.6)"}}>
                                                                                                    Logo-ul tău
                                                                                                </span>
                                                                                            </div>
                                                                                            <div className="preview w-100 d-flex justify-content-center" style={{overflow: "hidden"}}>
                                                                                                <canvas width="200" height="80" style={{visibility: "visible"}}>
                                                                                                </canvas>
                                                                                            </div>
                                                                                        </div>  
                                                                                    </div>
                                                                                    )}
                                                                            </div>
                                                                            <img style={{ width: "100%"}} src={pvcCard["img-source"]} alt="" />
                                                                            <div className="custom-data">
                                                                                <div  className="name-data card-inner-text name" style={{color: "white", fontSize: `${nameSize}pt`}}>
                                                                                </div>
                                                                                <div  className="role-data card-inner-text role" style={{color: "white", fontSize: `${roleSize}pt`}}>
                                                                                </div>
                                                                                <div  className="company-data card-inner-text company" style={{color: "white", fontSize: `${companySize}pt`}}>
                                                                                </div>
                                                                            </div>
                                                                         </div>
                                                                    <div className="card__face card__face--back text-white">
                                                                        <img style={{ width: "100%"}} 
                                                                        src={pvcCard["img-back"]} alt="" />
                                                                    </div>
                                                                </SwiperSlide>
                                                            ))
                                                            }
                                                        </Swiper>
                                                    )}
                                                    {isCarbon && (
                                                        <Swiper navigation={true} modules={[EffectCoverflow, Navigation]} className="mySwiper"
                                                        rewind={true} 
                                                        initialSlide={carbonInitialSlide}
                                                        centeredSlides={true}
                                                        effect={"coverflow"} 
                                                        coverflowEffect={{
                                                            rotate: 55,
                                                            stretch: 20,
                                                            depth: 100,
                                                            modifier: 1,
                                                            slideShadows: true
                                                        }}
                                                        slidesPerView={"auto"}
                                                        onSlideChangeTransitionStart={displayCardTitle}
                                                        >
                                                        {carbonCards.map((carbonCard, index) =>(
                                                            <SwiperSlide className={isFlipped? "flipped": ""} onClick={slideOnClickHandler}
                                                                title={carbonCard.title} >
                                                                <div className="card__face card__face--front">
                                                                    <div className="card-logo" >
                                                                        {cardantiLogo && !emptyLogo && (
                                                                            <div className="card-logo-svg">
                                                                                <CardantiC/>    
                                                                            </div>
                                                                        )}
                                                                        {!cardantiLogo && !emptyLogo && (
                                                                            <div className="card-logo-svg text-white">
                                                                                custom    
                                                                            </div>
                                                                            )}
                                                                        </div>
                                                                    <img style={{ width: "100%"}} 
                                                                        src={carbonCard["img-source"]} alt="" />
                                                                    <div className="custom-data">
                                                                        <div  className="name-data card-inner-text name" style={{color: "white", fontSize: `${nameSize}pt`}}>
                                                                        </div>
                                                                        <div  className="role-data card-inner-text role" style={{color: "white", fontSize: `${roleSize}pt`}}>
                                                                        </div>
                                                                        <div  className="company-data card-inner-text company" style={{color: "white", fontSize: `${companySize}pt`}}>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="card__face card__face--back text-white">
                                                                    <img style={{ width: "100%"}} 
                                                                        src={carbonCard["img-back"]} alt="" />
                                                                </div>
                                                            </SwiperSlide>
                                                        ))
                                                        }
                                                    </Swiper>
                                                    )}
                                                    {!isPVC && !isCarbon && (
                                                        <Swiper navigation={true} modules={[EffectCoverflow, Navigation]} className="mySwiper"
                                                        rewind={true} 
                                                        initialSlide={metalInitialSlide}
                                                        centeredSlides={true}
                                                        effect={"coverflow"} 
                                                        coverflowEffect={{
                                                            rotate: 55,
                                                            stretch: 20,
                                                            depth: 100,
                                                            modifier: 1,
                                                            slideShadows: true
                                                        }}
                                                        slidesPerView={"auto"}
                                                        onSlideChangeTransitionStart={displayCardTitle}
                                                        >
                                                        {metalCards.map((metalCard, index) =>(
                                                            <SwiperSlide className={isFlipped? "flipped": ""} onClick={slideOnClickHandler}
                                                                title={metalCard.title} >
                                                                <div className="card__face card__face--front">
                                                                    <div className="card-logo" >
                                                                        {cardantiLogo && !emptyLogo && (
                                                                            <div className="card-logo-svg">
                                                                                <CardantiC/>    
                                                                            </div>
                                                                            )}
                                                                        {!cardantiLogo && !emptyLogo && (
                                                                            <div className="card-logo-svg text-white">
                                                                                custom    
                                                                            </div>
                                                                            )}
                                                                    </div>
                                                                    <img style={{ width: "100%"}} 
                                                                        src={metalCard["img-source"]} alt="" />
                                                                    <div className="custom-data">
                                                                        <div  className="name-data card-inner-text name" style={{color: "white", fontSize: `${nameSize}pt`}}>
                                                                        </div>
                                                                        <div  className="role-data card-inner-text role" style={{color: "white", fontSize: `${roleSize}pt`}}>
                                                                        </div>
                                                                        <div  className="company-data card-inner-text company" style={{color: "white", fontSize: `${companySize}pt`}}>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="card__face card__face--back text-white">
                                                                <img style={{ width: "100%"}} 
                                                                        src={metalCard["img-back"]} alt="" />
                                                                </div>
                                                            </SwiperSlide>
                                                        ))
                                                        }
                                                    </Swiper>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        )}
                        {isPortrait && (
                            <div  id="top" className="row" style={{backgroundColor: "rgb(29, 30, 33)"}}>
                                <section className="order-card-cont">
                                    <div  className="container-fluid customizer-wrapper">
                                        <div  id="customizer" className="row customizer-row">
                                            <div  className="col-12">
                                                <div  className="row">
                                                    <div  className="col-12 mb-4">
                                                        <div  className="card-name mb-3 text-center">
                                                            <h3  className="col-12 product-title" style={{display: "flex", alignItems: "flex-end", justifyContent: "center"}}>
                                                                CB Limited Edition
                                                            </h3>
                                                            <span className="">ediție limitată</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row-reverse w-100 main-content-tailored">
                                                    <div className="row result col-9 customizer justify-content-center">
                                                        
                                                    </div>
                                                    <div className="d-flex menu flex-column col-3 personalize mb-4 justify-content-center align-items-center">
                                                        <div>
                                                            <div className="form-group animated">
                                                                <InputComponent inputId="portrait-name" inputType="text" inputName="name" label="Nume și prenume"
                                                                // onChange={portraitNameOnChangeHandle} 
                                                                />
                                                                {/* <label for="name">Nume si prenume</label>
                                                                <input  id="name" type="text" name="name" className="form-control" /> */}
                                                            </div>
                                                            <div className="form-group animated">
                                                                <InputComponent inputId="portrait-role" inputType="text" inputName="role" label="Rol"
                                                                    // onChange={portraitRoleOnChangeHandle} 
                                                                />
                                                                {/* <label for="role">Rol</label>
                                                                <input id="role" type="text" name="role" className="form-control" /> */}
                                                            </div>
                                                            <div className="form-group animated">
                                                            <InputComponent inputId="portrait-company" inputType="text" inputName="company" label="Companie"
                                                                    // onChange={portraitCompanyOnChangeHandle} 
                                                                />
                                                                {/* <label  for="company">Companie</label>
                                                                <input  id="company" type="text" name="company" className="form-control" /> */}
                                                            </div>
                                                        </div>
                                                        <div className="customizer-actions row justify-content-center">
                                                            <a  className="btn btn-green" style={{marginRight: "10px"}}>Adaugă în coș</a>
                                                            <div className="">
                                                                <div className="price">
                                                                    <span className="amount">289</span>
                                                                    <span className="currency">lei</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        )}
                    </div>  {/*  width 100 customizer-cont*/}
                </section>
            </div>
        </div>
        
        </>

    );
}

export default OrderCard;