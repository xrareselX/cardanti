import roImg from "../countries/footer_ro.svg";
import usImg from "../countries/footer_en.svg";
import deImg from "../countries/footer_de.svg";
import Message from "../assets/icons/Message";
import { useState } from "react";
import DownArrow from "../assets/icons/DownArrow";
import { useTranslation } from "react-i18next";
function FooterLanguageSelect(props) {
    const {t,  i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState("Română"); 
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
  return (
    <div className="custom-select">
    <span className="selected-value" onClick={() => setIsOpen(!isOpen)}>
      <Message className="svg-message" />
      {selectedCountry}
      <DownArrow className={`svg-arrow ` +  (isOpen ? "rotate-svg" :"")}/>
    </span>
    <div className={`options-container ${isOpen ? 'active' : ''}`}>
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