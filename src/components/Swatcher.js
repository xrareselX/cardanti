import { useEffect, useRef, useState } from "react";
import { TwitterPicker } from "react-color";

function Swatcher(props) {

    const [displaySwatch, setDisplaySwatch] = useState(false);
    const [colorValue, setColorValue] = useState("#ffffff");

    let swatchRef = useRef();
    let swatchTriggerRef = useRef();

    function onClickSwatchHandler () {
        setDisplaySwatch(!displaySwatch);
    }
    function swatcherChangeHandler(color) {
        setDisplaySwatch(false);
        setColorValue(color.hex);
        const elements = document.getElementsByClassName(props.for);
        if(props.for == "card-logo")
        {
            for(let element of elements){
                element.style.fill = color.hex;
            }

        } else {
            for(let element of elements){
                element.style.color = color.hex;
            }
        }
    }
    useEffect(() => {
        document.addEventListener("mousedown", (event) => {
            if(!swatchRef.current.contains(event.target) && !swatchTriggerRef.current.contains(event.target)) {
                setDisplaySwatch(false);
            }
        });
    });

    return (
        <div id={props.id} className="swatches">
            <div ref={swatchTriggerRef} className="swatcher-display-color" style={{backgroundColor: `${colorValue}`,
             width: "42px", height: "42px", borderRadius: "10px"}} onClick={onClickSwatchHandler}>
             </div>
            {displaySwatch && <div ref={swatchRef} className="color-swatcher-container"><TwitterPicker onChange={swatcherChangeHandler} /> </div>}
        </div>
    );
}
 export default Swatcher;