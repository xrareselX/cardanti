// part of navbar
import React, { useState } from "react";

import { useTranslation } from "react-i18next";
import {Us} from 'react-flags-select'

import "/node_modules/flag-icons/css/flag-icons.min.css";
import roImg from "../countries/ro.svg";
import usImg from "../countries/us.svg";
import deImg from "../countries/de.svg";

function LanguageSwitcher() {

  const {t,  i18n } = useTranslation();
  const [isActive, setIsActive]= useState(false);

//   return (
//     <div className="select">
//       <select
//         value={i18n.language}
//         onChange={(e) =>
//           i18n.changeLanguage(e.target.value)
//         }
//       >
//         <option value="en">
//         <span class="fi fi-gr fis"></span>
//             English</option>
//         <option value="ro">Ro</option>
//         <option><i class='fa fa-heart' aria-hidden='true'></i>&#xf2bb; address cardOption3</option>
//       </select>
//     </div>
//   );
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
            {isActive &&(
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
            )}
        </div>
    );
}

export default LanguageSwitcher;