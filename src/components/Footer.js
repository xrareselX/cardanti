import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTiktok, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";
import Form from "react-bootstrap/Form";
import ReactFlagsSelect from "react-flags-select";
import {Us} from "react-flags-select";
import Select from "react-select";
import { useState } from "react";

function Footer() {

    // data is used for footer country Select, not for Form.Select
    const data = [
        {
            value: "en",
            text: 'English',
            icon: <img src="https://flagcdn.com/us.svg" width="20"/>
          },
          {
            value: "ro",
            text: 'Română',
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-circle" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
            </svg>
          },
          {
            value: "it",
            text: 'Italiano',
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
            </svg>
          },
          {
            value: "de",
            text: 'Right Arrow',
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
            </svg>
          }
    ];
    const {selectedOption, setSelectedOption} = useState(null);
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
                                <option value="en" >English</option>
                                <option value="ro" selected>Română</option>
                                <option value="it" >Italiano</option>
                                <option value="es" >Español</option>
                                <option value="de" >Deutsche</option>
                            </Form.Select>
                            {/* <Select value={selectedOption} options={data} className="custom-select" 
                             onChange={changeLanguageHandler} defaultValue="ro"
                             getOptionLabel={e => (
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                  {e.icon}
                                  <span style={{ marginLeft: 5 }}>{e.text}</span>
                                </div>
                              )} 
                                >
                                
                            </Select> */}
                        </div>
                    </div>
                    <div className="col-12 col-sm-8 mb-4 order-sm-3">
                        <div className="d-flex justify-content-center justify-content-sm-end footer-links">
                            <Link to='https://help.cardanti.com/help' target='_blank'>Ajutor</Link>
                            <Link to='/privacy-policy'>Politica de confidențialitate</Link>
                            <Link to='/terms-and-condition'>Termeni și condiții</Link>
                            <Link to='/contact'>Contact</Link>
                            {/* <ReactFlagsSelect countries={["US", "RO", "IT", "ES", "DE"]} customLabels={{"DE":"UVYFCT"}}
                                    selected={"ro"}
                                    onSelect={changeLanguageHandler}
                                />; */}
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
                        
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
      </svg>
                        <Us /> */}
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;