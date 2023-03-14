import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTiktok, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";
import Form from "react-bootstrap/Form";
import ReactFlagsSelect from "react-flags-select";
import {Us} from "react-flags-select";

function Footer() {

    const { t, i18n } = useTranslation();
    //Creating a method to change the language onChange from select box
  const changeLanguageHandler = (e) => {
    const languageValue = e.target.value
    i18n.changeLanguage(languageValue);
  }
    return (
        <footer>
            <div className="container">
                <div className="row pt-3 mb-2">
                    <div className="col-12 col-sm-4 mb-4 order-sm-1 d-flex justify-content-center">
                        <div className="align-items-center flex-grow-0 pl-2 select-language">
                             {/* Select box to change language */}
                            <Form.Select className="custom-select"  onChange={changeLanguageHandler}>
                                <option value="en" > English</option>
                                <option value="ro" selected>Română</option>
                                <option value="it" >Italiano</option>
                                <option value="es" >Español</option>
                                <option value="de" >Deutsche</option>
                            </Form.Select>
                        </div>
                    </div>
                    <div className="col-12 col-sm-8 mb-4 order-sm-3">
                        <div className="d-flex justify-content-center justify-content-sm-end footer-links">
                            <Link to='https://help.cardanti.com/help' target='_blank'>Ajutor</Link>
                            <Link to='/privacy-policy'>Politica de confidențialitate</Link>
                            <Link to='/terms-and-condition'>Termeni și condiții</Link>
                            <Link to='/contact'>Contact</Link>
                            <ReactFlagsSelect countries={["US", "RO", "IT", "ES", "DE"]} customLabels={{"DE":"UVYFCT"}}
    selected={"ro"}
    onSelect={changeLanguageHandler}
  />;
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mb-4 text-left d-flex justify-content-center">
                        <Link target="_blank" className="social-link">
                            <FontAwesomeIcon icon={faInstagram} size="xl"/>
                        </Link>
                        <Link target="_blank" className="social-link">
                            <FontAwesomeIcon icon={faFacebook} size="xl"/>
                        </Link>
                        <Link target="_blank" className="social-link">
                            <FontAwesomeIcon icon={faLinkedin} size="xl"/>
                        </Link>
                        <Link target="_blank" className="social-link">
                            <FontAwesomeIcon icon={faTwitter} size="xl"/>
                        </Link>
                        <Link target="_blank" className="social-link">
                            <FontAwesomeIcon icon={faTiktok} size="xl"/>
                        </Link>
                        <Link target="_blank" className="social-link">
                            <FontAwesomeIcon icon={faTiktok} size="xl"/>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row copyright">
                    <div className="col-12 text-center">
                        @ Cardanti 2020
                        <Us />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;