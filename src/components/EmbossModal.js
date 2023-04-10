import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import embossImg from "../assets/emboss.png";
import { faMagnifyingGlassPlus, faMagnifyingGlassMinus, faRotateRight, faRotateLeft, faExpand, faX } from '@fortawesome/free-solid-svg-icons';
function EmbossModal(props){

  const [rotation, setRotation] = useState(0);
  const [scale, setScale] = useState(1);

  const handleZoom = (zoomIn) => {
    const newScale = zoomIn ? scale * 1.1 : scale / 1.1;
    setScale(newScale);
  };

  const handleRotateLeft = () => {
    setRotation(rotation - 90);
  };

  const handleRotateRight = () => {
    setRotation(rotation + 90);
  };

  const handleReset = () => {
    setRotation(0);
    setScale(1);
  };

  return (
    // <div className={`modal ${props.isOpen ? 'show' : ''}`}>
    //     <div className="modal-dialog">
    //         <div className="modal-content">
    //             <div className="modal-header">
    //                 <button type="button" className="close" onClick={() => props.onCloseHandle()}>
    //                 <span>&times;</span>
    //                 </button>
    //             </div>
    //             <div className="modal-body">
    //                 <img src={embossImg} style={{ transform: `scale(${scale}) rotate(${rotation}deg)` }} />
    //             </div>
    //             <div className="modal-footer">
    //                 <button type="button" className="btn btn-secondary" onClick={() => handleZoom(true)}>
    //                     <Plus />
    //                 </button>
    //                 <button type="button" className="btn btn-secondary" onClick={() => handleZoom(false)}>
    //                     {/* <img src={minusIcon} alt="Zoom Out" /> Zoom Out */}
    //                 </button>
    //                 <button type="button" className="btn btn-secondary" onClick={handleRotateLeft}>
    //                     {/* <img src={rotateLeftIcon} alt="Rotate Left" /> Rotate Left */}
    //                 </button>
    //                 <button type="button" className="btn btn-secondary" onClick={handleRotateRight}>
    //                     {/* <img src={rotateRightIcon} alt="Rotate Right" /> Rotate Right                    */}
    //                 </button>
    //                 <button type="button" className="btn btn-secondary" onClick={handleReset}>
    //                     {/* <img src={resetIcon} alt="Reset" /> Reset */}
    //                 </button>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    <div tabindex="-1" className="el-image-viewer__wrapper" style={{zIndex: "2011"}}>
        <div className="el-image-viewer__mask"></div>
        <span className="el-image-viewer__btn el-image-viewer__close" onClick={() => props.onCloseHandle()}>
            <i className="el-icon-close">
                <FontAwesomeIcon icon={faX} />
            </i>
        </span>
        <div className="el-image-viewer__btn el-image-viewer__actions">
            <div className="el-image-viewer__actions__inner">
                <i className="el-icon-zoom-out" onClick={() => handleZoom(false)}> 
                    <FontAwesomeIcon icon={faMagnifyingGlassMinus} />
                </i>
                <i className="el-icon-zoom-in"onClick={() => handleZoom(true)}>
                    <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
                </i>
                <i className="el-image-viewer__actions__divider"></i>
                <i className="el-icon-full-screen" onClick={handleReset}>
                    <FontAwesomeIcon icon={faExpand} />
                </i>
                <i className="el-image-viewer__actions__divider"></i>
                <i className="el-icon-refresh-left" onClick={handleRotateLeft}>
                    <FontAwesomeIcon icon={faRotateLeft} />
                </i>
                <i className="el-icon-refresh-right" onClick={handleRotateRight}>
                    <FontAwesomeIcon icon={faRotateRight} />
                </i>
            </div>
        </div>
        <div className="el-image-viewer__canvas">
            <img src={embossImg} className="el-image-viewer__img" style={{ transform: `scale(${scale}) rotate(${rotation}deg)`, marginLeft: "0px", marginTop: "0px", maxHeight: "100%", maxWidth: "100%", transition: "transform 0.3s ease 0s" }}/>
        </div>
    </div>
  );
};

export default EmbossModal;
