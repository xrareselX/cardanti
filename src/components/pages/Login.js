import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import { auth } from "../../../src/firebase";
import EyeFill from '../../assets/icons/EyeFill';
import EyeSlashFill from '../../assets/icons/EyeSlahFill';
import AuthDetails from '../../AuthDetails';

function Login() {

    const {t, i18n} = useTranslation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [emailError, setEmailError] = useState(true);
    const [emailErrorMessage, setEmailErrorMessage] = useState("Acest câmp este obligatoriu");
    const [passwordError, setPasswordError] = useState(true);
    const [passwordErrorMessage, setPasswordErrorMessage] = useState("Acest câmp este obligatoriu");

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
      }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        if(event.target.value == ""){
            setEmailErrorMessage("Acest câmp este obligatoriu");
            setEmailError(true);
        }
        else if(!isValidEmail(email)){
            setEmailErrorMessage("Acesta trebuie să fie o adresă de email");
            setEmailError(true);
        } else {
            setEmailError(false);
        }
    }
    const handleEmailBlur = (event) => {
        if(event.target.value == ""){
            setEmailErrorMessage("Acest câmp este obligatoriu");
            setEmailError(true);
        }
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        if(event.target.value.length < 8){
            setPasswordErrorMessage("Parola trebuie să aibă cel puțin 8 caractere");
            setPasswordError(true);
        }
        else {
            setPasswordError(false);
        }
    }
    const handlePasswordBlur = (event) => {
        if(event.target.value.length == 0){
            setPasswordErrorMessage("Acest câmp este obligatoriu");
            setPasswordError(true);
        }
    }

    const handleSubmit = (event) => {
    event.preventDefault(); // so that the page doens t get reloaded = this is the default for forms but this is react
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        console.log(userCredential);
    }).catch((error) => {
        console.log(error);
    })
  };//MAI TRER SA FACI ALEA CU ROSU LA ERORI la input forms

    if (isLoggedIn) {
        return <p>You are logged in!</p>;
    }

  return (
    <div className='fix-content'>
        <div>
            <section className='content content-fixed content-auth'>
                <div className='container'>
                    <div className='media align-items-stretch justify-content-center ht-100p pos-relative'>
                        <div className='form-wrapper w-75'>
                            <div className='div-wrapper'>
                                <h2 className="mb-5">{t("login.h2")}</h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <input type="email" className="form-control" id="email" value={email} 
                                        placeholder={t("login.email")} onChange={handleEmailChange} onBlur={handleEmailBlur} required/>
                                        {emailError && (
                                            // <div className='error'>Acest câmp este obligatoriu </div>
                                            <div className='error'>{emailErrorMessage} </div>
                                        )}
                                        {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                                    </div>
                                    <div className="form-group">
                                        <input type={showPassword ? "text" : "password"} className="form-control" id="password" value={password} placeholder={t("login.pass")}
                                         onChange={handlePasswordChange} onBlur={handlePasswordBlur} required/>
                                        {showPassword ? <EyeSlashFill className="show-password" onClick={() => setShowPassword(false)}/> :
                                         <EyeFill className="show-password" onClick={() => setShowPassword(true)}/>}
                                         {passwordError && (
                                             <div className='error'>{passwordErrorMessage}</div>
                                         )}
                                        {/* <small id="emailHelp" className="form-text text-muted">We'll never share your pass with anyone else.</small> */}
                                    </div>
                                    <button type="submit" className='btn btn-green btn-block'>{t("login.submit-btn")}</button>
                                </form>
                                {/* <AuthDetails /> */}
                                <div className='d-flex justify-content-center mt-3'>
                                    <Link to="/forgotten-pass">{t("login.forgotten-pass")}</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
}

export default Login;