import roImg from "../countries/footer_ro.svg";
import usImg from "../countries/footer_en.svg";
import deImg from "../countries/footer_de.svg";
import Message from "../assets/icons/Message";
import { useRef, useState } from "react";
import DownArrow from "../assets/icons/DownArrow";
import { useTranslation } from "react-i18next";

function FooterLanguageSelect(props) {

    const {t,  i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState("Română"); 
    const menuRef = useRef(null);
    const selectRef = useRef(null);

    const options = [
        { value: 'ro', label: 'Română', flag: roImg },
        { value: 'en', label: 'English', flag: usImg },
        { value: 'de', label: 'Deutsch', flag: deImg },
      ];

      const handleOptionClick = (value, label) => {
        setSelectedCountry(label);
        setIsOpen(false);
        i18n.changeLanguage(value);
      };
    const closeOpenMenu = (e)=>{
        if(menuRef.current && isOpen && !menuRef.current.contains(e.target) && !selectRef.current.contains(e.target)){
            setIsOpen(false)
        }
    }
    document.addEventListener('mousedown', closeOpenMenu)
  return (
    <div className="custom-select">
    <span ref={selectRef} className="selected-value" onClick={() => setIsOpen(!isOpen)}>
      <Message className="svg-message" />
      {/* {selectedCountry} */}
      {i18n.language == "ro" ? "Română":""}
      {i18n.language == "en" ? "English":""}
      {i18n.language == "de" ? "Deutsch":""}
      <DownArrow className={`svg-arrow ` +  (isOpen ? "rotate-svg" :"")}/>
    </span>
    <div ref={menuRef} className={`options-container ${isOpen ? 'active' : ''}`}>
      <ul className="options-list">
        {options.map((option) => (
          <li
            key={option.value}
            className="option"
            onClick={() => handleOptionClick(option.value, option.label)}
          >
            <img src={option.flag}/>
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  </div>
  );
}
export default FooterLanguageSelect;