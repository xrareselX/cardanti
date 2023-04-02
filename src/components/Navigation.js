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
import { Navbar, Nav } from "react-bootstrap";


function Navigation() {

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
        <header className="navbar navbar-header navbar-header-fixed">
            <div className="container">
                <div className="navbar-brand">
                    <a href="/" className="logo">
                    cele 2 svg 
                     </a>
                </div>
                <div className="navbar-right">
                    <div className="top-links">
                        <a href="/about-us" className="top-link">{t('nav.aboutUs')}</a>
                        <a href="/business" className="top-link">Business</a> 
                        <a href="/how_it_works" className="top-link">{t('nav.how-it-works')}</a> 
                        <a href="https://help.cardanti.com/" target="_blank" className="top-link">{t('nav.questions')}</a>
                    </div> 
                    <div className="locale-selector">
                        <LanguageSwitcher />
                    </div>
                    <a className="btn btn-sm btn-login">{t('nav.login')}</a>
                    <button className="btn btn-sm btn-green btn-uppercase btn-order-card">{t("nav.buy-now")}</button>
                </div>
            </div>
        </header>
        //  <header className={"sticky-top navbar navbar-expand-lg navbar-header " + (isScrolled ? "scrolled" : "")}>

        //  <div className="container">
        // <div className="navbar-brand">
        // <a className="" href="/"><CardantiC width="30"/><CardantiName width="90" className="logo-long"/></a>
        // </div>
        //     <button className="navbar-toggler" type="button" dataToggle="collapse" dataTarget="#navbarSupportedContent" ariaControls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //         <span className="navbar-toggler-icon"></span>
        //     </button>
        //     <div className="navbar-right collapse navbar-collapse"  id="navbarSupportedContent">
        //         <div className="navbar-nav navbar-right"> 
        //             <div className="top-links navbar-nav">
        //                 <Link className="top-link" to="/about-us">{t('nav.aboutUs')}</Link>
        //                 <Link className="top-link" to='/business'>Business</Link>
        //                 <Link className="top-link" to='/how_it_works'>{t('nav.how-it-works')}</Link>
        //                 <Link className="top-link" to='https://help.cardanti.com/help' target="_blank">{t('nav.questions')}</Link>
        //             </div>
        //                 <LanguageSwitcher />
        //                 <Link className="btn-login" to='/login'>{t('nav.login')}</Link>
        //                 {location.pathname != "/order-card" && (
        //                     <Link to="order-card">
        //                         <Button className="btn-green btn-small btn-uppercase">
        //                             {t("nav.buy-now")}
        //                         </Button>
        //                     </Link>
        //                 )}
        //         </div>
        //     </div>
        // </div> 
    //  </header> 
    );
}

export default Navigation;