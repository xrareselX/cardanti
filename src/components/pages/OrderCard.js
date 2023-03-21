import roImg from "../../countries/ro.svg";
// import { ColorPicker } from '@wellbees/color-picker-input'
import Swatcher from "../Swatcher";

function OrderCard() {

    return (
        <div className="fix-content">
            <div id="top" style={{backgroundColor: "rgb(29, 30, 33)"}}>
                <section className="order-card-cont">
                    <div className="w-100 customizer-cont">
                        <div className="row triggers">
                            <div className="card-type d-flex justify-content-center">
                                <div  className="trigger active">Design</div>
                                <div  className="separator"></div>
                                <div  className="trigger">Portrait</div>
                            </div>
                        </div>
                        <div>
                            <div className="main-content w-100">
                                <div className="col-3 menu d-flex flex-column justify-content-center mt-3 align-items-center">
                                    <div className="personalize w-100 d-flex flex-column align-items-center">
                                        <div className="w-100 text-white mb-3">
                                            <span class="text-center d-block mb-2" style={{fontSize: "20px", color: "rgb(143, 144, 160)"}}>Material:</span>
                                            <div className="w-100 customizer-actions row justify-content-center btn-group">
                                                <button className="col-4 btn text-white text-center btn-green">PVC</button>
                                                <button className="col-4 btn text-white text-center btn-dark">CARBON</button>
                                                <button className="col-4 btn text-white text-center btn-dark">METAL</button>
                                            </div>
                                            <div className="w-100 row justify-content-center">
                                                <div  className="material-color selected" style={{backgroundColor: "rgb(238, 238, 238)"}}></div>
                                                <div  className="material-color" style={{backgroundColor: "rgb(216, 29, 52)"}}></div>
                                                <div  className="material-color" style={{backgroundColor: "rgb(34, 34, 34)"}}></div>
                                                <div  className="material-color" style={{backgroundColor: "rgb(19, 67, 153)"}}></div>
                                            </div>
                                        </div>
                                        <div className="w-100">
                                            <div className="form-group animated">
                                                <div className="d-flex flex-row">
                                                    <label  for="name">Nume</label>
                                                    <input  id="name" type="text" name="name" className="form-control me-1" /> 
                                                    <div className="name-buttons">
                                                        <button className="name-button btn btn-green"> - </button>
                                                        <button className="name-button btn btn-green"> + </button>
                                                        <Swatcher id="name-color" />
                                                    </div>
                                                </div>
                                                <div className="errors">

                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-100">
                                            <div className="form-group animated">
                                                <div className="d-flex flex-row">
                                                    <label  for="role">Rol</label>
                                                    <input  id="role" type="text" name="name" className="form-control me-1" /> 
                                                    <div className="name-buttons">
                                                        <button className="name-button btn btn-green"> - </button>
                                                        <button className="name-button btn btn-green"> + </button>
                                                        <Swatcher id="role-color" />
                                                    </div>
                                                </div>
                                                <div className="errors">

                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-100">
                                            <div className="form-group animated">
                                                <div className="d-flex flex-row">
                                                    <label  for="company">Companie</label>
                                                    <input  id="company" type="text" name="name" className="form-control me-1" /> 
                                                    <div className="name-buttons">
                                                        <button className="name-button btn btn-green"> - </button>
                                                        <button className="name-button btn btn-green"> + </button>
                                                        <Swatcher id="company-color" />
                                                    </div>
                                                </div>
                                                <div className="errors">

                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-100 mb-2">
                                            <span class="text-center d-block mb-2" style={{fontSize: "20px", color: "rgb(143, 144, 160)"}}>Logo-ul tău:</span>
                                            <div className="logo-list">
                                                <div className="logo-list-item">
                                                    <span className="logo-list-text">EMPTY</span>
                                                </div>
                                                <div className="logo-list-item selected">
                                                    <img src={roImg} className="round-icon" />
                                                </div>
                                                <div className="logo-list-item">
                                                    <span className="logo-list-text">CUSTOM</span>
                                                </div>
                                            </div>
                                            <div className="logo-color-select text-center d-flex justify-content-center align-items-center" >
                                                <label for="logo-color" className="me-2" style={{color: "#c8c8c8"}}>Logo color:</label>
                                                <Swatcher id="logo-color" />
                                            </div>
                                        </div>
                                        <div className="w-100 text-white display-flex flex-column align-items-center">
                                            <span className="text-center d-block mt-2" style={{fontSize: "20px", color: " rgb(143, 144, 160)"}}>Stilul de imprimare:</span>
                                            <div className="w-100 customizer-actions row justify-content-center btn-group">
                                                <button class="col-6 btn text-white btn-green">Flat</button> 
                                                <button className="col-6 btn text-white btn-dark">Emboss</button>
                                            </div>
                                        </div>
                                        <div className="asta cu dialogul"></div>
                                    </div>
                                    <div className="customizer-actions w-100 mt-3 row justify-content-center">
                                        <button className="btn btn-green w-50 d-inline col" style={{marginRight: "10px"}}>Adaugă în coș</button>
                                        <div className="col">
                                            <div className="price">
                                                <span className="amount">240  </span>
                                                <span className="currency">lei</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-9 result main-content-cards">
                                    <div className="row">
                                        <div className="col-12 px-md-2">
                                            <div className="carousel-container">
                                                <div className="flip-it">
                                                    <div className="flip-it-buttons customizer-actions row justify-content-center btn-group">
                                                        <button className="col-6 btn text-white btn-green">Față</button> 
                                                        <button className="col-6 btn text-white btn-dark">Spate</button>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="card-name">
                                                                <h3 className="product-title" style={{display: "flex", 
                                                                alignItems: "flex-end", justifyContent: "center"}}>
                                                                    The Shift Personalized
                                                                </h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

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

export default OrderCard;