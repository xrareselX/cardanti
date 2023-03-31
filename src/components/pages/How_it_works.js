import { useRef } from "react";
import { useTranslation } from "react-i18next";
import Img1 from "../../assets/how_it_works/1.webp";
function How_it_works() {
    const {t, i18n} = useTranslation();
    // const delay = ms => new Promise(res => setTimeout(res, ms));
    // const sleep = async (milliseconds) => {
    //     await new Promise(resolve => {
    //         return setTimeout(resolve, milliseconds)
    //     });
    // };
    // const gifAnimation = async (e) => {
    //     e.currentTarget.src="https://cardanti.com/_nuxt/img/timeless.e92154d.gif"
    //     await sleep(5000);
    //     e.currentTarget.src="https://cardanti.com/_nuxt/img/timeless.a085555.webp"
    // }
    // async function gifAnimation(e){
    //     e.currentTarget.src="https://cardanti.com/_nuxt/img/timeless.e92154d.gif"
    //     // await delay(5000);
    //     e.currentTarget.src="https://cardanti.com/_nuxt/img/timeless.a085555.webp"
    // }
    let img1Ref = useRef();
    function gifAnimation(){
        img1Ref.current.src = "https://cardanti.com/_nuxt/img/timeless.e92154d.gif";
        setTimeout(function(){
            // console.log("I am the third log after 5 seconds");
            img1Ref.current.src = "https://cardanti.com/_nuxt/img/timeless.a085555.webp";
        },5000);
        // console.log(img1Ref.current.src);
        // console.log("ddd");
    }
    function gifAnimationLeave(){
        setTimeout(function(){
            img1Ref.current.src = "https://cardanti.com/_nuxt/img/timeless.a085555.webp";
            // console.log("I am the third log after 5 seconds");
        },5000);
        // console.log(img1Ref.current.src);
        // console.log("ddd");
    }
    return (
        <>
        <section className="cover">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 d-flex align-content-center flex-wrap justify-content-start my-4">
                        <h1 className="mb-4 text-left">{t("how_it_works.section1.h1-1")}<br/>{t("how_it_works.section1.h1-2")}</h1>
                        <h2 className="mb-5 text-left">{t("how_it_works.section1.h2")}</h2>
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
        <section class="usps">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-4 d-flex my-3">
                        <div class="card-container crd-bg-white d-flex justify-content-center flex-column text-center"
                        // onMouseOver={gifAnimation}>
                        onMouseEnter={gifAnimation}
                        // onMouseLeave={gifAnimationLeave}
                        >
                            <img ref={img1Ref} src="https://cardanti.com/_nuxt/img/timeless.a085555.webp" data-alt="timeless" alt="Timeless app" class="card-img"
                            // onMouseOver={(e) => {e.currentTarget.src="https://cardanti.com/_nuxt/img/timeless.e92154d.gif"}}
                            // onMouseOver={gifAnimation}
                            // onMouseOut={(e) => {e.currentTarget.src="https://cardanti.com/_nuxt/img/timeless.a085555.webp"}}/>
                            /* <img src="https://cardanti.com/_nuxt/img/timeless.e92154d.gif" data-alt="timeless" alt="Timeless app" class="card-img animating"></img> */
                            />
                            <h3 class="mb-3">{t("how_it_works.section2.card1.h3")}</h3>
                            <p>{t("how_it_works.section2.card1.p")}</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-4 d-flex my-3">
                        <div class="card-container crd-bg-white d-flex justify-content-center flex-column text-center">
                        <img src="https://cardanti.com/_nuxt/img/one-app.bc89224.webp" data-alt="one-app" alt="One app. No tap" class="card-img"/>
                            <h3 class="mb-3">{t("how_it_works.section2.card2.h3")}</h3>
                            <p>{t("how_it_works.section2.card1.p")}</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-4 d-flex my-3">
                        <div class="card-container crd-bg-white d-flex justify-content-center flex-column text-center">
                            <img src="https://cardanti.com/_nuxt/img/socials.ea99dc6.webp" data-alt="socials" alt="One business profile" class="card-img"/>
                            <h3 class="mb-3">{t("how_it_works.section2.card3.h3")}</h3>
                            <p>{t("how_it_works.section2.card3.p")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
export default How_it_works;