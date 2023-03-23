import { useState } from "react";


function InputComponent(props){

    const [isFocused, setIsFocused] = useState(false);
    // const [isInput, setIsInput] = useState(false);

    function onBlurHandle(e){
        if(e.currentTarget.value=='')
            setIsFocused(false);
    }

    function onFocusHandle(e) {
        setIsFocused(true);
    }
    return(
        <>
        <label  for={props.inputId} className={isFocused ? "focused" : ""}>{props.label}</label>
        <input  id={props.inputId} type={props.inputType} name={props.inputName} className="form-control me-1"
        onFocus={onFocusHandle} onBlur={onBlurHandle} onChange={props.onChange} /> 
        </>
    );
}

export default InputComponent;