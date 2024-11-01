// part of navbar
import React, { useState } from "react";

import { useTranslation } from "react-i18next";
import {Us} from 'react-flags-select'

import "/node_modules/flag-icons/css/flag-icons.min.css";
import roImg from "../countries/ro.svg";
import roImgProbe from "../countries/footer_ro.svg";
import usImg from "../assets/flag_icons/usa.svg";
import deImg from "../assets/flag_icons/de.svg";

function LanguageSwitcher() {

  const {t,  i18n } = useTranslation();
  const [isActive, setIsActive]= useState(false);

    return(
        <div className="locale-selector" onClick={(e) => setIsActive(!isActive)}>
                {i18n.language == "ro" && (
                <img src={roImg} className="round-icon" />
                )}
                {i18n.language == "en" && (
                <img src={usImg} className="round-icon" />
                )}
                {i18n.language == "de" && (
                <img src={deImg} className="round-icon" />
                )}
            {/* {isActive &&( */}
            <ul className="loc-switcher">
                <li className="loc-switcher-special"></li>
                {i18n.language != "en" && (
                <li className="loc-switcher-item" onClick={(e) => i18n.changeLanguage("en")}>
                    <img src={usImg} className="round-icon" />
                    English
                </li>
                )}
                {i18n.language != "ro" && (
                <li className="loc-switcher-item" onClick={(e) => i18n.changeLanguage("ro")}>
                    <img src={roImg} className="round-icon" />
                    Română
                    </li>
                )}
                {i18n.language != "de" && (
                <li className="loc-switcher-item" onClick={(e) => i18n.changeLanguage("de")}>
                    <img src={deImg} className="round-icon" />
                    Deutsche
                </li>
                )}
            </ul>
            {/* )} */}
        </div>
    );
}

export default LanguageSwitcher;