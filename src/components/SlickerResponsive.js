function SlickerResponsive(props){
    return (
        <div className="regular-slider">
            {props.cards.map((card, index) => (
                    <div className='d-flex my-3 col-12 px-4'>
                        <div key={index} className="card-container crd-bg-white h-100">
                            <h3 className='mb-3 text-center'>{card.h3}</h3>
                            <p className="text-center">{card.p}</p>
                        </div>
                    </div>
            ))}
        </div>
    );
}
export default SlickerResponsive;