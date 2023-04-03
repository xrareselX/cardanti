function Contact(){
    return(
        <div className="d-flex w-100 container contact-container flex-wrap justify-content-center align-items-center text-align-center">
            <div className="row contact-message mb-5 py-5">
                <div className="col-12 text-center">
                    <h2 className="mb-4 custom-h2 text-center">Pentru orice sugestie sau problemă, vă rugăm să nu ezitați să ne contactați prin email</h2>
                    <a href="mailto:contact@cardanti.com" className="btn btn-green mb-4">Contact</a>
                    <h2 className="mb-4 custom-h2 text-center">Sau sunați-ne la numărul de telefon următor</h2>
                    <h2 className="text-center custom-h2">0756111544</h2>
                </div>
            </div>
            <div className="row w-100 company-info mb-5 flex-grow-1 text-left">
                <div className="col-md-12">
                    <h2 className="mb-4 custom-h2">Informații Companie</h2> 
                    <p><strong>CUI:</strong> 42178829</p>
                    <p><strong>Numărul de ordine în registrul comerțului:</strong> J40/1118/30.01.2020</p> 
                    <p><strong>Adresă:</strong> Bucharest, Calea Victoriei, No. 155, Block D1, 9th Floor</p>
                </div>
            </div>
            <div className="row w-100 text-left mb-5">
                <h2 className="w-100 mb-4">Distribuitori</h2> 
                <div className="col-md-4 card py-2">
                    <h3>Bulgaria</h3> 
                    <div>
                        <strong>Companie:</strong> BTII CO.
                    </div>
                    <div>
                        <strong>Email:</strong> btiigroup@cardanti.com
                    </div>
                    <div>
                        <strong>Mobil:</strong> 00359889936007
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Contact;