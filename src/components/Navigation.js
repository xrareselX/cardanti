import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";
import Button from "react-bootstrap/Button"
import { useRef, useState } from "react";
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
    const [showNav, setShowNav] = useState(false);
    // const [isMobile, setIsMobile] = useState(false);

    let deviceWidth = useRef(window.innerWidth);
    // function checkIfMobile(){
        deviceWidth = deviceWidth.current;
        // if(deviceWidth < 600)
            // setIsMobile(true);
    // }
    function toggleNav(){
        setShowNav(!showNav);
    }
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
        <header className={"sticky-top navbar navbar-header navbar-header-fixed " +(isScrolled ? "scrolled" : "")}>
            <div className="container">
                <div className="navbar-brand">
                    <a href="/" className="logo">
                    <CardantiC width="30"/>
                    <CardantiName width="90" className="logo-long"/>
                     </a>
                </div>
                {deviceWidth < 600 && (
                <div id="navbarMenu" className="navbar-menu-wrapper">
                    <div className="navbar-menu-header">
                        <a href="/" className="df-logo nuxt-link-exact-active nuxt-link-active" aria-current="page">
                            <CardantiC width="30"/> <CardantiName id="logo-long" width="90"/>
                        </a> 
                        <a id="mainMenuClose">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#fff" 
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-x">
                                <line x1="18" y1="6" x2="6" y2="18"></line> <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </a>
                    </div>
                    <ul className="nav navbar-menu">
                        <li className="nav-item"><a href="/about-us" className="nav-link">{t('nav.aboutUs')}</a></li>
                        <li className="nav-item"><a href="/business" className="nav-link">Business</a></li>
                        <li className="nav-item"><a href="/#how_it_works" className="nav-link">{t('nav.how-it-works')}</a></li>
                        <li className="nav-item"><a href="https://help.cardanti.com" target="_blank" className="nav-link">{t('nav.questions')}</a></li>
                        <li className="nav-item mb-3"><a href="/contact" className="nav-link">Contact</a></li> 
                        <li className="nav-item text-center">
                            <button className="btn btn-sm w-75 btn-outline-secondary text-uppercase">{t('nav.login')}</button>
                        </li>
                        <li className="nav-item text-center">
                            <button className="btn btn-sm w-75 btn-green text-uppercase">{t('nav.buy-now')}</button>
                        </li>
                    </ul>
                </div>
                )}
                <div className="navbar-right">
                    {deviceWidth >= 600 && (
                        <div className="top-links">
                            <a href="/about-us" className="top-link">{t('nav.aboutUs')}</a>
                            <a href="/business" className="top-link">Business</a> 
                            <a href="/how_it_works" className="top-link">{t('nav.how-it-works')}</a> 
                            <a href="https://help.cardanti.com/" target="_blank" className="top-link">{t('nav.questions')}</a>
                        </div> 
                    )}
                    <div className="locale-selector">
                        <LanguageSwitcher />
                    </div>
                    {deviceWidth < 600 && (
                        <div class="toggle-dropdown">
                            <a id="mainMenuOpen" href="" class="burger-menu">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu">
                                    <line x1="3" y1="12" x2="21" y2="12"></line>
                                    <line x1="3" y1="6" x2="21" y2="6"></line>
                                    <line x1="3" y1="18" x2="21" y2="18"></line>
                                </svg>
                            </a>
                        </div>
                        // <button style={{borderStyle: "none"}} className="navbar-toggler" type="button" dataToggle="collapse" dataTarget="#navbarSupportedContent" ariaControls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        //     <span style={{color: "red"}} className="navbar-toggler-icon"></span>
                        // </button>
                    )}
                    {deviceWidth >= 600 && (
                        <> 
                            <a className="btn btn-sm btn-login">{t('nav.login')}</a>
                            <button className="btn btn-sm btn-green btn-uppercase btn-order-card">{t("nav.buy-now")}</button>
                        </>
                    )}
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