import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";
import Button from "react-bootstrap/Button"
import { useState } from "react";
import Dropdown from "./Dropdown";
import LanguageSwitcher from "./LanguageSwitcher";
import {ReactComponent as FirstIcon} from "../countries/ro.svg";
import { useLocation } from "react-router-dom";


function Nav() {

    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);

    const addScrolledClass = () => {
        const scrollValue = document.documentElement.scrollTop;
        if (scrollValue > 0) {
            setIsScrolled(true);
        } else{
            setIsScrolled(false);
        }
    }
    window.addEventListener("scroll", addScrolledClass);
    const {t, i18n} = useTranslation();

    return (
        <header className={"sticky-top navbar navbar-expand-lg navbar-header " + (isScrolled ? "scrolled" : "")}>
            <div className="container">
        {/* <nav className="navbar navbar-expand-lg navbar-header"> */}
        <div className="navbar-brand">
        <a class="" href="/"><FontAwesomeIcon icon={faTiktok} size=""/>Cardanti</a>
        </div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-right collapse navbar-collapse"  id="navbarSupportedContent">
                <div className="navbar-nav navbar-right"> 
                    <div className="top-links navbar-nav"> {/** navbar-nav ofera flex-direction: row */}
                        <Link className="top-link" to="/about-us">{t('nav.aboutUs')}</Link>
                        <Link className="top-link" to='/business'>Business</Link>
                        <Link className="top-link" to='/favorites'>{t('nav.how-it-works')}</Link>
                        <Link className="top-link" to='/new-meetup'>{t('nav.questions')}</Link>
                        {/* <Link className="top-link" to='/new-meetup'>{location.pathname}</Link> */}
                    </div>
                        <LanguageSwitcher />
                        <Link className="btn-login" to='/login'>{t('nav.login')}</Link>
                        {location.pathname != "/order-card" && (
                            <Link to="order-card">
                                <Button className="btn-green btn-small btn-uppercase">
                                    {t("nav.buy-now")}
                                </Button>
                            </Link>
                        )}
                </div>
            </div>
        {/* </nav> */}
        </div>
    </header>
    );
}

export default Nav;