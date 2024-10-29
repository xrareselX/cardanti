import { useRef } from "react";
import { useTranslation } from "react-i18next";
import Img1 from "../../assets/how_it_works/1.webp";
import Img2 from "../../assets/personal/personal1.jpg";
import Img3 from "../../assets/personal/personal2.jpg";
import Slicker from "../Slicker";
import SlickerResponsive from "../SlickerResponsive";


function Personal(){
    const windowWidth = useRef(window.innerWidth);
    const {t, i18n} = useTranslation();

    const cards = [
        {
            h3: t("personal.section3.cards.card1.h3"),
            p: t("personal.section3.cards.card1.p")
        },
        {
            h3: t("personal.section3.cards.card2.h3"),
            p: t("personal.section3.cards.card2.p")
        },
        {
            h3: t("personal.section3.cards.card3.h3"),
            p: t("personal.section3.cards.card3.p")
        },
        {
            h3: t("personal.section3.cards.card4.h3"),
            p: t("personal.section3.cards.card4.p")
        }
    ]
    return (
        <div>
            <section className="cover">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 d-flex align-content-center flex-wrap justify-content-start">
                            <h1 className="mb-4 text-left">Cardanti – Cartea ta de vizită personalizată</h1> 
                            <h2 className="mb-5 text-left">O singură carte de vizită care întâlnește toate nevoile tale</h2>
                        </div> 
                        <div className="col-12 col-md-6">
                            <img src={Img1} alt="Cardanti Cover"/>
                        </div>
                    </div>
                </div>
            </section> 
            <section style={{maxHeight: "1200px"}}>
                <div className="container my-md-2 my-5">
                    <div className="row">
                        <div className="col-12 px-0">
                            <div className="video-overlay flex-wrap align-content-center" style={{maxHeight: "min-content"}}>
                                <div className="d-flex align-content-center flex-wrap align-items-center row w-100">
                                    <div className="col-md-5 mb-md-0 mb-4">
                                        <div className="w-100">
                                            <h1 className="text-left">Cardanti Personal</h1>
                                        </div> 
                                        <h2 className="text-start mb-4 mb-sm-5">Cardanti îi oferă printr-un simplu gest partenerului tău de discuție datele tale de contact. Informațiile sunt afișate direct în browser, fără a mai pierde timp în instalarea unei aplicații externe.</h2>
                                        <div className="d-flex justify-content-start w-100">
                                            <button className="btn btn-border d-flex align-items-center">
                                                <svg version="1.1" width="32" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" xmlSpace="preserve" className="mr-2">
                                                    <circle fill="#25BCB5" cx="49" cy="50" r="45"></circle> 
                                                    <path fill="#FFFFFF" d="M36.84,30.05v39.89c0,3.57,4.22,5.46,6.89,3.08l22.34-19.95c1.84-1.64,1.84-4.52,0-6.17L43.73,26.97C41.06,24.59,36.84,26.48,36.84,30.05z"></path>
                                                </svg>
                                                Vezi cum funcționează
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-md-7">
                                        <img src={Img2} alt="" className="d-block" style={{width: "100%"}}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
            <section className="usps">
                <div className="container">
                    <div className="row">
                        <div className="col-12 mb-3">
                            <h2 className="text-center">Beneficii – o experiență de network completă</h2>
                        </div>
                    </div>
                    <div className="slicker-slider slick-initialized">
                        {/* slicker */}
                    { (windowWidth.current > 800) && (
                        <Slicker cards={cards} slidesToShow={3} initialSlide={0}/>
                     )} 
                    { (windowWidth.current <= 800) && (
                        <SlickerResponsive cards={cards}/>
                     )} 
                    </div>
                </div> 
            </section>
            <section className="story-for-you d-flex justify-content-center align-items-center" style={{padding: "0px" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 px-0">
                            <div className="video-overlay flex-wrap align-content-center">
                                <div className="d-flex align-content-center flex-wrap align-items-center row w-100">
                                    <div className="col-md-5 mb-md-0 mb-4">
                                        <div className="w-100">
                                            <h1 className="text-start">Povestea Cardanti for You:</h1>
                                        </div>
                                        <div className="text-start">
                                            <ul className="list">
                                                <li>Socializarea este fără limite prezentă atât în viața personală, cât și în planul profesional, iar cartea ta de vizită Cardanti te face memorabil în orice întâlnire</li>
                                                <li>Adopți o nouă modalitate de sharing – trimiți datele de contact printr-un singur gest</li> 
                                                <li>Prin partenerii noștri strategici plantăm câte un copac pentru fiecare dintre cărţile de vizită ecologice pe care le vindem pe cardanti.com</li> 
                                                <li>Suntem implicați activi în dezvoltarea campaniilor de sustenabilitate și acțiuni prietenoase cu mediului</li>
                                            </ul>
                                        </div>
                                    </div> 
                                    <div className="col-md-7">
                                        <img src={Img3} alt="" className="d-block rounded w-100" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12 mb-3">
                            <h2 className="text-center" style={{fontSize: "1.6rem"}}>Noua ta carte de network – ești cu un pas înaintea tehnologiei</h2>
                            <p className="text-center">Investește în tine, află mai multe despre Cardanti Personal</p>
                            <div className="d-flex align-items-center justify-content-center flex-wrap">
                                <a href="/order-card" className="btn btn-green mr-4 btn-uppercase mb-3">Cumpără acum</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </div>
    );
}
export default Personal;