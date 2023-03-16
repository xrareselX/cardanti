import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";
import Button from "react-bootstrap/Button"
import { useState } from "react";



function Nav() {

    const [isScrolled, setIsScroller] = useState(false);

    const addScrolledClass = () => {
        const scrollValue = document.documentElement.scrollTop;
        if (scrollValue > 0) {
            setIsScroller(true);
        } else{
            setIsScroller(false);
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
                {/* <ul className="navbar-nav mr-auto">
                    <li className="nav-item active"><Link className="nav-link" to="/about-us">Despre noi</Link></li>
                    <li><Link className="nav-link" to='/new-meetup'>Business</Link></li>
                    <li><Link className="nav-link" to='/favorites'>Cum funcționează</Link></li>
                    <li><Link className="nav-link" to='/new-meetup'>Întrebări frecvente</Link></li>
                    <li><Link className="nav-link" to='/new-meetup'>Limba steag</Link></li>
                    <li><Link className="nav-link" to='/new-meetup'>Login</Link></li>
                    <li><Link className="nav-link" to='/buy-now'>Cumpără acum</Link></li>
                </ul> */}
                <div className="navbar-nav navbar-right"> 
                    <div className="top-links navbar-nav"> {/** navbar-nav ofera flex-direction: row */}
                        <Link className="top-link" to="/about-us">{t('nav.aboutUs')}</Link>
                        <Link className="top-link" to='/new-meetup'>Business</Link>
                        <Link className="top-link" to='/favorites'>{t('nav.how-it-works')}</Link>
                        <Link className="top-link" to='/new-meetup'>{t('nav.questions')}</Link>
                    </div>
                        <Link className="" to='/new-meetup'>Limba steag selector</Link>
                        <Link className="btn-login" to='/login'>{t('nav.login')}</Link>
                        <Link to="buy-now">
                            <Button className="btn-green btn-small btn-uppercase">
                                {t("nav.buy-now")}
                            </Button>
                        </Link>
                </div>
            </div>
        {/* </nav> */}
        </div>
    </header>
    );
}

export default Nav;