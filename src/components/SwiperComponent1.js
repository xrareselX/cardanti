import { Swiper, SwiperSlide } from "swiper/react";
import CardantiC from "../assets/icons/CardantiC";
import { EffectCoverflow, Navigation } from "swiper";

function SwiperComponent1(props){
    return (
        <Swiper  navigation={true} modules={[
            EffectCoverflow,
             Navigation]} className="carousel-3d-slider mySwiper"
            rewind={true} 
            // loop={true}
            initialSlide={props.initialSlide} centeredSlides={true} effect={"coverflow"} 
            coverflowEffect={{
                rotate: 55,
                stretch: 20,
                depth: 100,
                modifier: 1,
                slideShadows: false
            }}
            slidesPerView={"auto"}
            // slidesPerView={1}
            onSlideChangeTransitionStart={props.displayCardTitle}
            // breakpoints={{
                // 100: {
                //     width: 250,
                //     slidesPerView: 1
                // },
            //     1200:{
            //         width: 400,
            //         slidesPerView: "auto"
            //     }
            // }}
        >
            {/* {props.displayFlipModal && (
                <div className="flip-it-overlay overlay-tooltip mb-3" onClick={props.flipModalClickedHandle}>
                    <div className="w-100 d-flex justify-content-center">
                    </div> 
                    <p className="text-white">Apasă pe card pentru a îl înclina și a vedea culoarea muchei</p>
                </div>
            )} */}
            {props.Cards.map((card, index) =>(
                <SwiperSlide className={props.isFlipped? "flipped": ""} 
                    onClick={props.slideOnClickHandler}
                    title={card.title}
                        >
                    {/* <div 
                    className={"flip-card-wrapper " + (isFlipped ? "flipped": "")}
                    > */}
                    <div data-id="2015" className="carousel-slide-container container-padding customizer-card d-flex justify-content-center align-items-center">
                        <div className="customizer-container d-flex justify-content-center align-items-center">
                            {/* <img src="/_nuxt/img/cb_card_back.d42342b.png" alt="Catalin Botezatu Card Back" style="opacity: 0;"/> */}
                            <img style={{ width: "100%"}} src={card["img-source"]} alt="" />
                            <div className="image-wrapper align-self-center">
                                <div className="flip-it-overlay overlay-tooltip mb-3">
                                    <div className="w-100 d-flex justify-content-center">
                                        <flip-card></flip-card>
                                    </div>
                                    <p className="text-white">Apasă pe card pentru a îl înclina și a vedea culoarea muchei</p>
                                </div>
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="thickness" style="background-color: rgb(238, 238, 238);"></div> 
                                        <div className="thickness" style="background-color: rgb(238, 238, 238);"></div>
                                        <div className="thickness" style="background-color: rgb(238, 238, 238);"></div>
                                        <div className="flip-card-front">
                                            <div className="card-logo">
                                                <div className="card-logo-svg">
                                                    <CardantiC />
                                                </div> 
                                                <div className="preview w-100 d-flex justify-content-center" style="overflow: hidden;">
                                                    <canvas width="200" height="80" style="visibility: hidden;"></canvas>
                                                </div>
                                            </div>
                                            <img src="https://cardanti.com/_nuxt/img/tech-min.61b519b.webp" className="card-img-main" />
                                            <div className="custom-data">
                                                <div className="name-data card-inner-text name" style="color: white; font-size: 10pt;"></div>
                                                <div className="role-data card-inner-text role" style="color: white; font-size: 8pt;"></div>
                                                <div className="company-data card-inner-text company" style="color: white; font-size: 8pt;"></div>
                                            </div>
                                        </div> 
                                        <div className="flip-card-back">
                                            <img style={{ width: "100%"}} src={card["img-back"]} alt="" />
                                            {/* <img src="https://cardanti.com/_nuxt/img/tech-back-min.54928e8.webp" /> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        {/* aici sub e ala vechi */}
                    {/* <div className="card__face card__face--front">
                        <div className="card-logo" >
                            {props.cardantiLogo && !props.emptyLogo && (
                                <div className="card-logo-svg">
                                    <CardantiC/>    
                                </div>
                                )}
                            {!props.cardantiLogo && !props.emptyLogo && (
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
                        <img style={{ width: "100%"}} src={card["img-source"]} alt="" />
                        <div className="custom-data">
                            <div  className="name-data card-inner-text name" style={{color: "white", fontSize: `${props.nameSize}pt`}}>
                            </div>
                            <div  className="role-data card-inner-text role" style={{color: "white", fontSize: `${props.roleSize}pt`}}>
                            </div>
                            <div  className="company-data card-inner-text company" style={{color: "white", fontSize: `${props.companySize}pt`}}>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="card__face card__face--back text-white">
                        <img style={{ width: "100%"}} 
                        src={card["img-back"]} alt="" />
                    </div> */}
                    {/* below is the wrapper div */}
                    {/* </div> */}
                </SwiperSlide>
            ))
            }
        </Swiper>
    );
}
export default SwiperComponent1;