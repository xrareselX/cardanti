import { useState } from "react";
import { useTranslation } from "react-i18next";
import Img1 from "../../assets/how_it_works/1.webp";
function How_it_works() {
    const {t, i18n} = useTranslation();
    const [isGif1, setIsGif1] = useState(false);
    const [isGif2, setIsGif2] = useState(false);
    const [isGif3, setIsGif3] = useState(false);

    function disableGif1() {
        setTimeout(function(){
            setIsGif1(false);
        },5000);
    }
    function disableGif2() {
        setTimeout(function(){
            setIsGif2(false);
        },6000);
    }
    function disableGif3() {
        setTimeout(function(){
            setIsGif3(false);
        },6500);
    }
    return (
        <>
        <section className="cover">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 d-flex align-content-center flex-wrap justify-content-start my-4">
                        <h1 className="mb-4 text-start">{t("how_it_works.section1.h1-1")}<br/>{t("how_it_works.section1.h1-2")}</h1>
                        <h2 className="mb-5 text-start">{t("how_it_works.section1.h2")}</h2>
                        <div className="d-flex align-items-start justify-content-start flex-wrap">
                            <a href="/order-card" className="btn btn-green me-4 btn-uppercase mb-3">{t("how_it_works.section1.a1")}</a>
                            <a href="#how_it_works" className="btn btn-outline-secondary btn-border mb-3">{t("how_it_works.section1.a2")}</a>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <img src={Img1} alt="Cardanti Cover"/>
                    </div>
                </div>
            </div>
        </section>
        <section className="usps">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4 d-flex my-3">
                        <div className="card-container crd-bg-white d-flex justify-content-center flex-column text-center"
                        onMouseEnter={() => setIsGif1(true)} onMouseLeave={disableGif1}>
                            <img src={isGif1 ? "https://cardanti.com/_nuxt/img/timeless.e92154d.gif" : "https://cardanti.com/_nuxt/img/timeless.a085555.webp"} 
                            data-alt="timeless" alt="Timeless app" className="card-img" />
                            <h3 className="mb-3">{t("how_it_works.section2.card1.h3")}</h3>
                            <p>{t("how_it_works.section2.card1.p")}</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 d-flex my-3">
                        <div className="card-container crd-bg-white d-flex justify-content-center flex-column text-center"
                        onMouseEnter={() => setIsGif2(true)} onMouseLeave={disableGif2}>
                        <img src={isGif2 ? "https://cardanti.com/_nuxt/img/one-app.4296b8c.gif" : "https://cardanti.com/_nuxt/img/one-app.bc89224.webp"} 
                        data-alt="one-app" alt="One app. No tap" className="card-img"/>
                            <h3 className="mb-3">{t("how_it_works.section2.card2.h3")}</h3>
                            <p>{t("how_it_works.section2.card1.p")}</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 d-flex my-3">
                        <div className="card-container crd-bg-white d-flex justify-content-center flex-column text-center"
                        onMouseEnter={() => setIsGif3(true)} onMouseLeave={disableGif3}>
                            <img src={isGif3 ? "https://cardanti.com/_nuxt/img/socials.3c41e8f.gif" :"https://cardanti.com/_nuxt/img/socials.ea99dc6.webp"} data-alt="socials" alt="One business profile" className="card-img"/>
                            <h3 className="mb-3">{t("how_it_works.section2.card3.h3")}</h3>
                            <p>{t("how_it_works.section2.card3.p")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="how_it_works">
            <div className="container my-5">
                <div className="row">
                    <div className="col-12 px-0"
                     style={{position: "relative"}}
                     >
                        <img src="https://cardanti.com/_nuxt/img/thumbnail-video.456af09.jpg" alt="" style={{width: "100%"}}/>
                        <div className="video-container">
                            <iframe id="youtube-vue-player-soma" frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="One Tap, No App. The Smart Business Card everyone can use." width="100%" height="100%" src="https://www.youtube.com/embed/LOd77m6pxwc?autoplay=1&amp;loop=1&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fcardanti.com&amp;widgetid=1"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="proposals">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>{t("how_it_works.section4.h1")}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 d-flex my-3 flex-wrap justify-content-center">
                        <div className="card-container">
                            <div className="card-title">
                                <h2><span>{t("how_it_works.section4.part1.h2")}</span>
                                    <strong className="cardanti-opt-text">{t("how_it_works.section4.part1.strong")}</strong>
                                </h2>
                            </div>
                            <div className="card-content">
                                <div className="card-img">
                                    <img src="https://cardanti.com/_nuxt/img/emerald-green.230189a.webp" alt="" className="w-100"/>
                                </div> 
                                <ul className="text-start mx-auto list">
                                    <li>{t("how_it_works.section4.part1.li1")}</li>
                                    <li>{t("how_it_works.section4.part1.li2")}</li>
                                    <li>{t("how_it_works.section4.part1.li3")}</li>
                                </ul> 
                                <div className="d-flex flex-row justify-content-center">
                                    <a href="/order-card">
                                        <button className="btn btn-green text-uppercase me-2">{t("how_it_works.section4.part1.btn1")}</button>
                                    </a>
                                    <a href="/personal" className="">
                                        <button className="btn btn-border d-flex align-items-center">{t("how_it_works.section4.part1.btn2")}</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className="col-md-6 d-flex my-3 flex-wrap justify-content-center">
                        <div className="card-container">
                            <div className="card-title">
                                <h2><span>{t("how_it_works.section4.part2.h2")}</span>
                                    <strong className="cardanti-opt-text">{t("how_it_works.section4.part2.strong")}</strong>
                                </h2>
                            </div>
                            <div className="card-content">
                                <div className="card-img">
                                    <img src="https://cardanti.com/_nuxt/img/zoidpay-blue.518de7b.webp" alt="" className="w-100"/>
                                </div>
                                <ul className="text-start mx-auto list">
                                    <li>{t("how_it_works.section4.part2.li1")}</li> 
                                    <li>{t("how_it_works.section4.part2.li2")}</li> 
                                    <li>{t("how_it_works.section4.part2.li3")}</li>
                                </ul> 
                                <div className="d-flex flex-row justify-content-center">
                                    <a href="/order-card">
                                        <button className="btn btn-green text-uppercase me-2">{t("how_it_works.section4.part2.btn1")}</button>
                                    </a>
                                    <a href="/business" className="">
                                        <button className="btn btn-border d-flex align-items-center">{t("how_it_works.section4.part2.btn2")}</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
export default How_it_works;