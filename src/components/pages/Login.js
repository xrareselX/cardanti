import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import { auth } from "../../../src/firebase";
import AuthDetails from '../../AuthDetails';

function Login() {

    const {t, i18n} = useTranslation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleEmailChange = (event) => setEmail(event.target.value);
    const handlePasswordChange = (event) => setPassword(event.target.value);

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
                                        placeholder={t("login.email")} onChange={handleEmailChange} required/>
                                        <div className='error'></div>
                                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" id="password" value={password}
                                        placeholder={t("login.pass")} onChange={handlePasswordChange} required/>
                                        <div className='error'></div>
                                        <small id="emailHelp" className="form-text text-muted">We'll never share your pass with anyone else.</small>
                                    </div>
                                    <button type="submit" className='btn btn-green btn-block'>{t("login.submit-btn")}</button>
                                </form>
                                <AuthDetails />
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