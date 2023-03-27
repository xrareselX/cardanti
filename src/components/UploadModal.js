
// cv de genu in order card sa pui daca se display model ul si transmiti asta ca parametru in params

function UploadModal(){
    return (
        <div role="dialog" className="modal-mask">
            <div className="modal-overlay"></div>
            <div className="modal-wrapper" style={{maxWidth: "490px"}}>
                <div className="modal-container" style={{overflowY: "auto"}}>
                    <div className="close-modal">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" role="img" 
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" class="svg-inline--fa fa-times fa-w-11">
                            <path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" class="">
                            </path>
                        </svg>
                    </div> 
                    <div class="modal-body">
                        <div className="upload-modal-content">
                            <div className="canvas-cont">
                                <div  className="canvas-content">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65" width="60" height="60" 
                                    className="ml-2 mb-4"><path fill="#000" 
                                    d="M32.5,1A31.5,31.5,0,1,1,1,32.5,31.54,31.54,0,0,1,32.5,1m0-1A32.5,32.5,0,1,0,65,32.5,32.5,32.5,0,0,0,32.5,0h0Z"
                                        className="cls-1"></path>
                                        <polygon fill="#000" 
                                        points="41.91 28.2 32.59 18.65 23.09 28.39 24.17 29.44 31.87 21.54 31.87 40.05 33.37 40.05 33.37 21.59 40.83 29.25 41.91 28.2" className="cls-1">
                                    </polygon>
                                    <polygon fill="#000" 
                                    points="40.66 40.35 40.66 44.35 24.34 44.35 24.34 40.35 22.34 40.35 22.34 44.35 22.34 46.35 24.34 46.35 40.66 46.35 42.66 46.35 42.66 44.35 42.66 40.35 40.66 40.35" className="cls-1">
                                    </polygon>
                                    </svg>
                                    <p className="w-100">Apasă iconița sau trage o imagine aici</p>
                                </div>
                                <canvas height="80" className="canvas"></canvas>
                            </div>
                            <div className="guidelines">
                                <p className="mb-0">Vă rugăm să țineți cont de faptul că produsul finit va arata mai bine decât previzualizarea, întrucât fiecare carte de vizită Cardanti este realizată manual de echipa noastră de design.
                                </p>
                            </div>
                            {/* <input type="file" /> */}
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UploadModal;