import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useTranslation } from "react-i18next";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { auth } from "../../../src/firebase";
import EyeFill from '../../assets/icons/EyeFill';
import EyeSlashFill from '../../assets/icons/EyeSlahFill';

function Login(props) {
    
    const navigate = useNavigate();
    const {t, i18n} = useTranslation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
        if(event.target.value === ""){
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
        if(event.target.value === ""){
            setEmailErrorMessage("Acest câmp este obligatoriu");
            setEmailError(true);
        }
    }// onBlur pt a invata functionalitati

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        if(event.target.value === ""){
            setPasswordErrorMessage("Acest câmp este obligatoriu");
            setPasswordError(true);
        }
        else if(event.target.value.length < 8){
            setPasswordErrorMessage("Parola trebuie să aibă cel puțin 8 caractere");
            setPasswordError(true);
        }
        else {
            setPasswordError(false);
        }
    }
    const handlePasswordBlur = (event) => {
        if(event.target.value.length === 0){
            setPasswordErrorMessage("Acest câmp este obligatoriu");
            setPasswordError(true);
        }
    }

    const handleLogin = async (event) => {
        event.preventDefault(); // default react reloads the page
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/business");
            alert("User logged in successfully!");
        } catch (error) {
            if (error.code === "auth/user-not-found") {
                alert("Wrong user");
            } else if (error.code === "auth/wrong-password") {
                alert("Wrong password");
            } else
            alert("Login error");
            console.dir(error);
        }
    };

    if(props.user){
        return <Navigate to={"/"} replace />
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
                                <form onSubmit={handleLogin}>
                                    <div className="form-group">
                                        <input type="email" className="form-control" id="email" value={email} 
                                        placeholder={t("login.email")} onChange={handleEmailChange} onBlur={handleEmailBlur} required/>
                                        {emailError && (
                                            <div className='error'>{emailErrorMessage} </div>
                                        )}
                                    </div>
                                    <div className="form-group">
                                        <input type={showPassword ? "text" : "password"} className="form-control" id="password" value={password} placeholder={t("login.pass")}
                                         onChange={handlePasswordChange} onBlur={handlePasswordBlur} required/>
                                        {showPassword ? <EyeSlashFill className="show-password" onClick={() => setShowPassword(false)}/> :
                                         <EyeFill className="show-password" onClick={() => setShowPassword(true)}/>}
                                         {passwordError && (
                                             <div className='error'>{passwordErrorMessage}</div>
                                         )}
                                    </div>
                                    <button type="submit" className='btn btn-green btn-block'>{t("login.submit-btn")}</button>
                                </form>
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