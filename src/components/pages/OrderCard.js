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

import pvcImages from "../../assets/pvc-front/pvcImport";
import pvcBackImages from "../../assets/pvc-back/pvcBackImport";
import carbonImages from "../../assets/carbon-front/carbonImport";
import carbonBackImages from "../../assets/carbon-back/carbonBackImport";
import metalImages from "../../assets/metal-front/metalImport";
import metalBackImages from "../../assets/metal-back/metalBackImport";
import portraitFront from "../../assets/portrait/portrait-front.png";
import portraitBack from "../../assets/portrait/portrait-back.png";
import embossImg from "../../assets/emboss.png";

import UploadModal from "../UploadModal";
import SwiperComponent from "../SwiperComponent";
import SwiperComponent1 from "../SwiperComponent1";
import EmbossModal from "../EmbossModal";
import { useTranslation } from "react-i18next";


function OrderCard() {
    const pvcInitialSlide = 3;
    const carbonInitialSlide = 1;
    const metalInitialSlide = 1;

    const {t, i18n} = useTranslation();
    const [isFlipped, setIsFlipped] = useState(false);
    const [isPortraitFlipped, setIsPortraitFlipped] = useState(false);
    const [nameSize, setNameSize] = useState(10);
    const [roleSize, setRoleSize] = useState(8);
    const [companySize, setCompanySize] = useState(8);
    const [emptyLogo, setEmptyLogo] = useState(false);
    const [cardantiLogo, setCardantiLogo] = useState(true);
    const [isPVC, setIsPVC] = useState(true);
    const [isCarbon, setIsCarbon] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [isPortrait, setIsPortrait] = useState(false);
    const [displayPortraitSeparator, setDisplayPortraitSeparator] = useState(false);    
    const [displayFlipModal, setDisplayFlipModal] = useState(true);   
    const [nameText, setNameText] = useState(""); 
    const [roleText, setRoleText] = useState(""); 
    const [companyText, setCompanyText] = useState(""); 
    const [sideColor, setSideColor] = useState("rgb(238, 238, 238)"); 
    const [isEmboss, setIsEmboss] = useState(false); 
    const [isOpenEmbossModal, setIsOpenEmbossModal] = useState(false); 

    function closeModalHandle(){
        setShowModal(false);
    }
    function closeEmbossModalHandle(){
        setIsOpenEmbossModal(false);
    }
    function flipModalClickedHandle(){
        setDisplayFlipModal(false);
        const elements = document.getElementsByClassName("swiper-slide-active");
        elements[0].current.className += " show-side";
    }

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
            "img-back" : metalBackImages.BlackMetalImg 
        },
        {
            "title": "Metal Gun Brushed",
            "img-source" : metalImages.SilverMetalImg,
            "img-back" : metalBackImages.SilverMetalImg
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
        setNameText(e.target.value);
    }
    function portraitNameOnChangeHandle(e){
        const elements = document.getElementsByClassName("portrait-name-data");
        for(let element of elements){
            element.innerHTML = e.target.value;
        }
    }
    function roleOnChangeHandle(e){
        setRoleText(e.target.value);
    }
    function portraitRoleOnChangeHandle(e){
        setDisplayPortraitSeparator(true);
        const elements = document.getElementsByClassName("portrait-role-data");
        for(let element of elements){
            element.innerHTML = e.target.value;
        }
        if(e.currentTarget.value == "")
            setDisplayPortraitSeparator(false);
    }
    function companyOnChangeHandle(e){
        setCompanyText(e.target.value);
    }
    function portraitCompanyOnChangeHandle(e){
        setDisplayPortraitSeparator(true);
        const elements = document.getElementsByClassName("portrait-company-data");
        for(let element of elements){
            element.innerHTML = e.target.value;
        }
        if(e.currentTarget.value == "")
            setDisplayPortraitSeparator(false);
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
                <section className="order-card-cont" style={{marginRight: "0"}}>
                    <div className="w-100 customizer-cont">
                        <div className="container-fluid">
                        <div className="row triggers" style={{marginRight: "0"}}>
                            <div className="card-type d-flex justify-content-center">
                                <div  className={"trigger " + (!isPortrait ? "active" : "")} onClick={() => setIsPortrait(false)}>Design</div>
                                <div  className="separator"></div>
                                <div  className={"trigger " + (isPortrait ? "active" : "")} onClick={() => setIsPortrait(true)}>Portrait</div>
                            </div>
                        </div>
                        </div>
                            {!isPortrait && (
                        <div>
                            <div className="main-content w-100">
                                <div className="col-12 col-md-3 order-2 order-md-1 menu d-flex flex-column justify-content-center mt-md-3 align-items-center">
                                    <div className="personalize w-100 d-flex flex-column align-items-center">
                                        <div className="w-100 text-white mb-3">
                                            <span class="text-center d-block mb-2" style={{fontSize: "20px", color: "rgb(143, 144, 160)"}}>Material:</span>
                                            <div className="mx-auto w-100 customizer-actions row justify-content-center btn-group">
                                                <button className={"col-4 btn text-white btn-card-material text-center btn-dark" + (isPVC ? " btn-green" : "")} 
                                                onClick={onClickPvcHandle}>PVC</button>
                                                <button className={"col-4 btn text-white btn-card-material text-center btn-dark" + (isCarbon ? " btn-green" : "")}
                                                onClick={onClickCarbonHandle}>CARBON</button>
                                                <button className={"col-4 btn text-white btn-card-material text-center btn-dark" + (!isPVC && !isCarbon? " btn-green" : "")}
                                                 onClick={onClickMetalHandle}>METAL</button>
                                            </div>
                                            {isPVC && (
                                                  <div className="w-100 row justify-content-center">
                                                  {[{ color: "rgb(238, 238, 238)" }, { color: "rgb(216, 29, 52)" }, { color: "rgb(34, 34, 34)" }, { color: "rgb(19, 67, 153)" }]
                                                  .map((item, index) => (
                                                    <div
                                                      key={index}
                                                      className={`material-color ${sideColor === item.color ? "selected" : ""}`}
                                                      style={{ backgroundColor: item.color }}
                                                      onClick={() => setSideColor(item.color)}
                                                    />
                                                  ))}
                                                </div>
                                                )}
                                        </div>
                                        <div className="w-100">
                                            <div className="form-group animated">
                                                <div className="d-flex flex-row">
                                                    <InputComponent  inputId="name" inputType="text" inputName="name" label={t('order_card.inputs.name')}
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
                                                    <InputComponent inputId="role" inputType="text" inputName="role" label={t('order_card.inputs.role')}
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
                                                    <InputComponent inputId="company" inputType="text" inputName="company" label={t('order_card.inputs.company')}
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
                                        <div className="w-100 text-white d-flex flex-column align-items-center">
                                            <span className="text-center d-block mt-2" style={{fontSize: "20px", color: " rgb(143, 144, 160)"}}>{t("order_card.print_style")}</span>
                                            <div className="mx-auto w-100 customizer-actions row justify-content-center btn-group">
                                                <button className={`col-6 btn text-white `  + (isEmboss ? `btn-dark` : `btn-green`)} onClick={() => setIsEmboss(false)}>Flat</button> 
                                                <button className={`col-6 btn text-white ` + (isEmboss ? `btn-green` : `btn-dark`)} onClick={() => setIsEmboss(true)}>Emboss</button>
                                            </div>
                                            {isEmboss && (
                                            <div className="w-75" style={{textAlign: "center"}}>
                                                <span className="d-block" style={{fontSize: "16px", color: "rgb(143, 144, 160)"}}>Apasă pe butonul de mai jos pentru e vedea un exemplu cu un card Emboss</span> 
                                                <div className="el-image" style={{width: "100px", height: "100px"}}>
                                                    <img src={embossImg} className="el-image__inner el-image__preview" onClick={() => setIsOpenEmbossModal(true)}/>
                                                </div>
                                            </div>
                                                )}
                                                {isOpenEmbossModal && (
                                                    <EmbossModal onCloseHandle={closeEmbossModalHandle}/>
                                                )}
                                        </div>
                                        {showModal && (
                                            <UploadModal onCloseHandle={closeModalHandle} />
                                         )}
                                    </div>
                                    <div className="customizer-actions w-100 mt-3 row justify-content-center">
                                        <button className="btn btn-green w-50 d-inline col-5" style={{marginRight: "10px"}}>{t("order_card.add_to_cart_btn")}</button>
                                        <div className="col-4">
                                            <div className="price">
                                                <span className="amount">{isEmboss? "310" : "240"}</span>
                                                <span className="currency">lei</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-9 order-1 order-md-2 result main-content-cards">
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
                                                    <div className="container-fluid">
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
                                                </div>
                                                <div className="carousel-3d-container order-card-carousel">
                                                    {isPVC && (
                                                        <SwiperComponent1 Cards={pvcCards} nameSize={nameSize} roleSize={roleSize} companySize={companySize} initialSlide={pvcInitialSlide}
                                                            displayCardTitle={displayCardTitle} isFlipped={isFlipped} slideOnClickHandler={slideOnClickHandler} cardantiLogo={cardantiLogo}
                                                            emptyLogo={emptyLogo} displayFlipModal={displayFlipModal} flipModalClickedHandle={flipModalClickedHandle}
                                                            nameText={nameText} roleText={roleText} companyText={companyText} useThickness={1} sideColor={sideColor} overlayClass=""/>
                                                    )}
                                                    {isCarbon && (
                                                        <SwiperComponent1 Cards={carbonCards} nameSize={nameSize} roleSize={roleSize} companySize={companySize} initialSlide={carbonInitialSlide}
                                                            displayCardTitle={displayCardTitle} isFlipped={isFlipped} slideOnClickHandler={slideOnClickHandler} cardantiLogo={cardantiLogo}
                                                            emptyLogo={emptyLogo} displayFlipModal={displayFlipModal} flipModalClickedHandle={flipModalClickedHandle}
                                                            nameText={nameText} roleText={roleText} companyText={companyText} overlayClass="notPVC"/>
                                                    )}
                                                    {!isPVC && !isCarbon && (
                                                         <SwiperComponent1 Cards={metalCards} nameSize={nameSize} roleSize={roleSize} companySize={companySize} initialSlide={metalInitialSlide}
                                                            displayCardTitle={displayCardTitle} isFlipped={isFlipped} slideOnClickHandler={slideOnClickHandler} cardantiLogo={cardantiLogo}
                                                            emptyLogo={emptyLogo} displayFlipModal={displayFlipModal} flipModalClickedHandle={flipModalClickedHandle}
                                                            nameText={nameText} roleText={roleText} companyText={companyText} overlayClass="notPVC"/>
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
                                                <div className="d-flex flex-column flex-xl-row-reverse w-100 main-content-tailored align-items-center align-items-xl-stretch">
                                                    <div className="row result col-12 col-md-9 customizer justify-content-center">
                                                        <div className="col-12 customizer-card">
                                                            <div className="pulse"></div>
                                                            <div className="customizer-container d-flex justify-content-center align-items-center">
                                                                <div className="flip-it-portrait" onClick={() => setIsPortraitFlipped(!isPortraitFlipped)}>
                                                                    <svg fill="rgba(255,255,255,.8)" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
                                                                        xmlnsXlink="http://www.w3.org/1999/xlink" width="80" x="0px" y="0px" viewBox="0 0 151.4 99.7" 
                                                                        style={{enableBackground: "new 0 0 151.4 99.7"}} xmlSpace="preserve" className="">
                                                                        <path d="M50.1,55.8c-11.8-3.1-19.6-8.3-19.6-14.2c0-5.3,6.2-10,16-13.2V27C31,31.3,20.7,39,20.7,47.8c0,9.5,12,17.7,29.5,21.8v7.6
                                                                            l13.5-13.5L50.1,50.2V55.8z"></path>
                                                                        <path d="M113.9,30.2v-8L106,30l7.8,7.8v-5.4c4.4,2.7,6.9,5.8,6.9,9.1c0,7.5-12.5,13.8-29.9,16.2v13.7c23-3,39.8-12.4,39.8-23.6
                                                                            C130.7,40.9,124.2,34.6,113.9,30.2z"></path>
                                                                    </svg>
                                                                </div>
                                                                    <div role="dialogue"></div> {/* aici vine modal ul*/}
                                                                    <div className={"flip-card "+ (isPortraitFlipped ? "flip-portrait" : "")}>
                                                                            {/* aica cu thickness cred ca e doar pt design nu si portret*/}
                                                                            <div className="portrait-card__face portrait-card__face--front">
                                                                                <div className="logo-container"></div>
                                                                                <div className="card-logo" style={{width: "72px"}}>
                                                                                    <a href="" className="logo-control prev">
                                                                                        <span>
                                                                                            <svg width="15" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" 
                                                                                                className="svg-inline--fa fa-chevron-left fa-w-3">
                                                                                                <path fill="currentColor" d="M238.475 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L50.053 256 245.546 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L10.454 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z">
                                                                                                </path>
                                                                                            </svg>
                                                                                        </span>
                                                                                    </a>
                                                                                    <div className="card-logo-svg-portrait">
                                                                                        <CardantiC width="50px" />
                                                                                    </div>
                                                                                     {/*aici sub vine ala de upload */}
                                                                                     <div className="logo-overlay"></div> 
                                                                                    <a href="" className="logo-control next">
                                                                                        <span>
                                                                                            <svg width="15" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" 
                                                                                                className="svg-inline--fa fa-chevron-right fa-w-3">
                                                                                                    <path fill="currentColor" d="M17.525 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L205.947 256 10.454 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L34.495 36.465c-4.686-4.687-12.284-4.687-16.97 0z">
                                                                                                    </path>
                                                                                            </svg>
                                                                                        </span>
                                                                                    </a>
                                                                                </div>
                                                                                <img src={portraitFront} alt="" style={{width: "100%"}}/>
                                                                                <div className="custom-data">
                                                                                    <div  className="portrait-name-data card-inner-text" style={{color: "white", fontSize: "20px"}}>
                                                                                    </div>
                                                                                    {displayPortraitSeparator && (
                                                                                        <div className="spacer-data" style={{borderColor:"white"}}></div>
                                                                                    )}
                                                                                    <div  className="portrait-role-data card-inner-text" style={{color: "white", fontSize: "13px", fontWeight: "300"}}>
                                                                                    </div>
                                                                                    <div  className="portrait-company-data card-inner-text" style={{color: "white", fontSize: "13px", fontWeight: "300"}}>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="portrait-uploader portrait">
                                                                                    <div className="upload-icon">
                                                                                        <svg data-v-004c43ba="" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 120 120" style={{enableBackground: "new 0 0 120 120"}} xmlSpace="preserve" className="">
                                                                                            <path stroke="#ffffff" stroke-width="0.65" stroke-miterlimit="10" fill="none" d="M119.3,120c0.1-4.4,0.2-8.8,0.3-13.1c0-2.4,0.1-4.9-0.1-7.3c-0.5-4.6-1.9-8.8-4.8-12.5
                                                                                                c-1-1.3-2.4-2.3-3.9-2.9c-8.6-3.4-17.1-6.9-25.7-10.2c-2.1-0.8-4-2.2-5.4-3.9c-0.9-1.1-2-2.1-3.4-2.7c-0.2-0.1-0.4-0.4-0.4-0.6
                                                                                                c-0.3-2.2-0.5-4.5,0.6-6.6c1.3-2.6,2.2-5.4,2.8-8.3c0-0.1,0.1-0.3,0.1-0.5c0.2,0.1,0.3,0.2,0.4,0.3c0.5,0.4,1.1,0.4,1.4-0.1
                                                                                                c0.5-0.6,1-1.3,1.3-2.1c0.6-1.7,1-3.3,1.5-5c0.5-1.8,1-3.6,1.5-5.5c0.1-0.5,0.3-1,0.3-1.5c0-1.5-0.8-2.1-2.5-2
                                                                                                c0.3-1.5,0.7-3.1,0.9-4.6c1.1-7.8-1-14.8-6.1-20.7c-2.8-3.2-6.4-4.8-10.5-5.7C63.6,3.7,60,2.9,56.2,2.9c0,0-1.5-0.1-2.2-0.1
                                                                                                c-0.7,0-1.3,0-2,0.1c-0.9,0.2-1.9,0.6-2.8,0.8c0.3-0.3,0.5-0.6,0.8-0.9c-2.2,1.1-4.4,2-5.2,4.7c-0.1,0.4-0.4,0.4-0.7,0.4
                                                                                                c-2.3,0.3-4.3,1.4-6,3c-0.1,0.1-0.1,0.1-0.3,0.4c0.6-0.2,1-0.4,1.4-0.6c-1.7,1.6-2.6,3.5-2.6,5.8c0.1-0.2,0.3-0.4,0.4-0.6
                                                                                                c-1.9,6.7-0.9,13.2,1,19.7c-1.9,0.1-2.3,0.6-2.5,2.4c-0.1,1.8,0.2,3.5,0.9,5.1c0.4,0.9,0.6,1.9,1,2.8c0.5,1.3,0.9,2.7,1.4,4
                                                                                                c0.3,0.6,0.7,1.1,1.2,1.6c0.4,0.4,1,0.6,1.6,0.2c0.1,0.2,0.1,0.3,0.2,0.5c0.5,2.7,1.5,5.3,2.8,7.8c0.3,0.6,0.5,1.4,0.5,2
                                                                                                c0,1.8-0.1,3.7-0.3,5.5c0,0.3-0.3,0.6-0.5,0.7c-1.7,0.9-3.2,2-4.5,3.5c-0.8,1-1.9,1.7-3,2.2c-7.1,3.1-14.2,5.8-21.5,8.1
                                                                                                c-2.1,0.7-4.1,1.7-6,2.7c-4,2.1-6.8,5.8-7.7,10.2c-0.7,3.5-1,7-1.1,10.5c0,0.7-0.1,1.4-0.1,2.2l0,12.2"></path><path data-v-004c43ba="" stroke="#ffffff" stroke-width="0.65" stroke-miterlimit="10" fill="none" d="M59.6,80.6c-6.7,0-12.2,5.5-12.2,12.2c0,6.7,5.5,12.2,12.2,12.2s12.2-5.5,12.2-12.2
                                                                                                    C71.8,86.1,66.3,80.6,59.6,80.6z"></path>
                                                                                                <polygon fill="#ffffff" points="66.4,93.1 59.9,93.1 59.9,99.5 59.3,99.5 59.3,93.1 52.9,93.1 52.9,92.5 59.3,92.5 59.3,86 59.9,86
                                                                                                    59.9,92.5 66.4,92.5 "></polygon>
                                                                                        </svg>
                                                                                        <span className="load-text text-white d-block w-100 mb-1 sb-text">{t("order_card.add_picture_w_you")}</span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="portrait-card__face portrait-card__face--back">
                                                                                <img src={portraitBack} alt="" style={{width: "100%"}}/>
                                                                            </div>
                                                                    </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex menu flex-column col-12 col-md-3 personalize mb-4 justify-content-center align-items-center">
                                                        <div>
                                                            <div className="form-group animated">
                                                                <InputComponent inputId="portrait-name" inputType="text" inputName="name" label={t('order_card.inputs.first_and_last_name')}
                                                                onChange={portraitNameOnChangeHandle} 
                                                                />
                                                            </div>
                                                            <div className="form-group animated">
                                                                <InputComponent inputId="portrait-role" inputType="text" inputName="role" label={t('order_card.inputs.role')}
                                                                    onChange={portraitRoleOnChangeHandle}
                                                                />
                                                            </div>
                                                            <div className="form-group animated">
                                                            <InputComponent inputId="portrait-company" inputType="text" inputName="company" label={t('order_card.inputs.company')}
                                                                    onChange={portraitCompanyOnChangeHandle} 
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="customizer-actions row w-100 justify-content-center text-center text-align-center"style={{marginBottom: "80px"}}>
                                                            <button  className="offset-1 col-3 btn btn-green w-50 " style={{marginRight: "10px"}}>{t("order_card.add_to_cart_btn")}</button>
                                                            <div className="col-3" style={{padding: "0px"}}>
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