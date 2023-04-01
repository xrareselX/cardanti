import { useTranslation } from "react-i18next";
import Img1 from "../../assets/landscape-business1.webp";
import Img2 from "../../assets/business2.webp";
import Img3 from "../../assets/business3.webp";

function Business(){
    const {t, i18n} = useTranslation();
    return (
        <>
        <section className="cover">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <img src={Img1} alt="Cardanti Cover" style={{width: "100%"}}/>
                    </div>
                </div>
            </div>
        </section>
        <section className="usps">
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center flex-wrap">
                        <h2 className="text-center w-100 lighter-gray">{t("business.section2.row.h2")}</h2>
                        <h1 className="text-center w-100 mt-5">{t("business.section2.row.h1")}</h1>
                    </div>
                </div>
            </div>
        </section>
        {/* section 2 will be here */}
        <section>
            <div className="container">
                <div className="pb-5">
                    <div className="col-12 d-flex flex-column align-content-center flex-wrap">
                        <h2 className="text-left mb-4">CSR for companies:</h2>
                        <ul className="list mb-0 text-left">
                            <li>Through our strategic partners, we plant a tree for each of the ecological business cards we sell on cardanti.com</li>
                             <li>We are actively involved in the development of sustainability campaigns and environmentally friendly actions.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center flex-wrap">
                        <h2 className="text-center w-100 lighter-gray">
                            {t("business.section4.h2")}
                            </h2>
                        <h1 className="text-center w-100">{t("business.section4.h1")}</h1>
                    </div>
                </div>
            </div>
        </section>
        <section >
            <div  className="container">
                <div  className="row pb-5">
                    <div  className="col-sm-6 d-flex align-content-center flex-wrap">
                        <h2  className="text-left mb-4">{t("business.section5.row1.h2")}</h2>
                        <ul  className="list mb-0 text-left">
                            <li>{t("business.section5.row1.li1")}</li>
                            <li>{t("business.section5.row1.li2")}</li>
                        </ul>
                    </div>
                    <div  className="col-sm-6 d-flex align-content-center flex-wrap">
                        <img  src={Img2} alt="Business Custom" className="card-image" />
                    </div>
                </div>
                <div  className="row py-5">
                    <div  className="col-sm-6 d-flex align-content-center flex-wrap">
                        <h2  className="text-left mb-4">{t("business.section5.row2.h2")}</h2>
                        <ul  className="list mb-0 text-left">
                            <li>{t("business.section5.row2.li1")}</li>
                            <li>{t("business.section5.row2.li2")}</li>
                        </ul>
                        <a  href="/cardanti_card_design_template-guidelines.ai" download="" className="btn btn-green mb-5">{t("business.section5.btn")}</a>
                    </div>
                    <div  className="col-sm-6 d-flex align-content-center flex-wrap">
                        <img  src={Img3} alt="Business Full Custom" class="card-image" />
                    </div>
                </div>
            </div>
        </section>
        <section >
            <div  className="container">
                <div  className="row">
                    <div  className="col-12 d-flex justify-content-center flex-wrap">
                        <h2 className="text-center w-100 lighter-gray">The ultimate business experience: Cardanti for business</h2> 
                        <h1 className="text-center w-100 custom-h1">Easy to share and fast to close your deal</h1>
                    </div>
                </div>
            </div> 
            <div  className="row my-5">
                <div  className="col-12 text-center">
                    <h2 className="custom-h2">{t("business.section6.h2-1")} <a  href="mailto:business@cardanti.com" target="_blank" style={{textDecoration: "underline"}}>{t("business.section6.h2-2")}</a>
                    </h2>
                </div>
            </div>
        </section>
        </>
    );
}

export default Business;