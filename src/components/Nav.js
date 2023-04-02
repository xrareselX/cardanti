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
import CardantiC from "../assets/icons/CardantiC";
import CardantiName from "../assets/icons/CardantiName";


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
        <a className="" href="/"><CardantiC width="30"/><CardantiName width="90" className="logo-long"/></a>
        </div>
            <button className="navbar-toggler" type="button" dataToggle="collapse" dataTarget="#navbarSupportedContent" ariaControls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-right collapse navbar-collapse"  id="navbarSupportedContent">
                <div className="navbar-nav navbar-right"> 
                    <div className="top-links navbar-nav"> {/** navbar-nav ofera flex-direction: row */}
                        <Link className="top-link" to="/about-us">{t('nav.aboutUs')}</Link>
                        <Link className="top-link" to='/business'>Business</Link>
                        <Link className="top-link" to='/how_it_works'>{t('nav.how-it-works')}</Link>
                        <Link className="top-link" to='https://help.cardanti.com/help' target="_blank">{t('nav.questions')}</Link>
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