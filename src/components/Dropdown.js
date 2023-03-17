import { useState } from "react";


function Dropdown () {

    const [isActive, setIsActive]= useState(false);
    // tre sa dai display in dropdown la toate countries in afara de cea pe care o ai selectata/curenta
    let countries = ["ro", "en", "de", "it", "es"];
    // console.log(document.getElementById("ro"));
    return (
        <div className="dropdown">
            <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>Choose one</div>
            {isActive && (
                <div className="dropdown-content">
                    <div className="dropdown-item" id="ro" data-value="ro"> Romania</div>
                    <div className="dropdown-item"> Vue</div>
                    <div className="dropdown-item"> Angular</div>
                </div>
            )}
        </div>
    );
}
export default Dropdown;