import Button from "react-bootstrap/Button"
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function AboutUs() {

    const {t, i18n} = useTranslation();

    return (
        <section style={{paddingTop: "90px"}}>
            <div className="container">
                <div className="row mb-5">
                    <div className="col-12 text-center">
                        <h1>{t("about-us.title")}</h1>
                    </div>
                </div> {/** end row */}
                <div className="row">
                    <div className="col-12 col-md-6 offset-md-3 align-content-center justify-content-center justify-content-md-start d-flex flex-wrap my-4">
                        <h2 className="custom-h2">{t("about-us.part1.h1")}</h2>
                        <p className="text-left">
                        {t("about-us.part1.1-paragraph")}
                        </p>
                        <p className="text-left">
                        {t("about-us.part1.2-paragraph")}
                        </p>
                        <p className="text-left mb-5">
                        {t("about-us.part1.3-paragraph")}
                        </p>
                        <h2 className="custom-h2">{t("about-us.part2.h1")}</h2>
                        <p className="text-left">
                        {t("about-us.part2.1-paragraph")}
                        </p>
                        <p className="text-left">
                        {t("about-us.part2.2-paragraph")}
                        </p>
                        <p className="text-left">
                        {t("about-us.part2.3-paragraph")}
                        </p>
                        <p className="text-left mb-5">
                        {t("about-us.part2.4-paragraph")}
                        </p>
                        <h2 className="custom-h2">{t("about-us.part3.h1")}</h2>
                        <p className="text-left mb-5">
                        {t("about-us.part3.1-paragraph")}
                        </p>
                    </div>
                </div> {/** end row */}
                <div className="row mb-5">
                    <div className="col-12 text-center">
                        <Link to="/how_it_works">
                            <Button className="btn-green">
                                {t("about-us.how-it-works-btn")}
                            </Button>
                        </Link>

                    </div>{/** end col-12 */}
                </div>{/** end row */}
            </div>
        </section>
    );
}

export default AboutUs;