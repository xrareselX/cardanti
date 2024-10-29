import { useTranslation } from "react-i18next";
import { useRef, useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLocation } from "react-router-dom";
import CardantiC from "../assets/icons/CardantiC";
import CardantiName from "../assets/icons/CardantiName";


function Navigation(props) {

    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileNav, setMobileNav] = useState(false);

    let deviceWidth = useRef(window.innerWidth);
    deviceWidth = deviceWidth.current;
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
        <header className={(location.pathname != "/order-card"  ? "sticky-top " : "no-sticky ") + "navbar navbar-header navbar-header-fixed " +(isScrolled ? "scrolled " : " ")
         + (mobileNav ? "navbar-nav-show" :"")
         }>
            <div className="container">
                <div className="navbar-brand">
                    <a href="/" className="logo">
                    <CardantiC width="30"/>
                    <CardantiName width="90" className="logo-long"/>
                     </a>
                </div>
                {/* for mobile */}
                {deviceWidth < 600 && (
                <div id="navbarMenu" className="navbar-menu-wrapper">
                    <div className="navbar-menu-header">
                        <a href="/" className="df-logo nuxt-link-exact-active nuxt-link-active" aria-current="page">
                            <CardantiC width="30"/> <CardantiName id="logo-long" width="90"/>
                        </a> 
                        <a id="mainMenuClose"
                        onClick={(e) => {
                            e.preventDefault()
                            setMobileNav(false)}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#fff" 
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-x">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                 <line x1="6" y1="6" x2="18" y2="18"></line>
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
                            {props.user ? (
                                <a href="/">
                                <button className="btn btn-sm w-75 btn-outline-secondary text-uppercase"  onClick={props.handleLogout}>{t('nav.logout')}</button>
                            </a>
                            ) : (
                            <a href="/login">
                                <button className="btn btn-sm w-75 btn-outline-secondary text-uppercase">{t('nav.login')}</button>
                            </a>
                            )}
                            
                        </li>
                        <li className="nav-item text-center">
                            <a href="/order-card">
                                <button className="btn btn-sm w-75 btn-green text-uppercase btn-order-card">{t('nav.buy-now')}</button>
                            </a>
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
                        <LanguageSwitcher />
                    {deviceWidth < 600 && (
                        <div class="toggle-dropdown">
                            <a id="mainMenuOpen" href="" className="burger-menu" onClick={(e) => {
                            e.preventDefault()
                            setMobileNav(!mobileNav)}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu">
                                    <line x1="3" y1="12" x2="21" y2="12"></line>
                                    <line x1="3" y1="6" x2="21" y2="6"></line>
                                    <line x1="3" y1="18" x2="21" y2="18"></line>
                                </svg>
                            </a>
                        </div>
                    )}
                    {deviceWidth >= 600 && (
                        <> 
                        {props.user ? (
                            <button className="btn btn-sm btn-login" onClick={props.handleLogout} >{t('nav.logout')} </button>
                        ): (
                            <a className="btn btn-sm btn-login" href="/login">{t('nav.login')}</a>
                        )}
                            {location.pathname != "/order-card" && (
                                <a href="/order-card">
                                    <button className="btn btn-sm btn-green btn-uppercase btn-order-card" >{t("nav.buy-now")}</button>
                                </a>
                            )}
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Navigation;