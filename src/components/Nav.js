import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";

function Nav() {
    return (
        <header className="navbar navbar-expand-lg navbar-header">
        {/* <nav className="navbar navbar-expand-lg navbar-header"> */}
        <a class="navbar-brand" href="/"><FontAwesomeIcon icon={faTiktok} size=""/>Cardanti</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse navbar-right"  id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/about-us">Despre noi</Link>
                        </li>  {/* nu merg astea pt ca nu sunt in contextul de routing ai pe stackoverflow detalii */}
                        <li><Link className="nav-link" to='/new-meetup'>Business</Link></li>
                        <li><Link className="nav-link" to='/favorites'>Cum funcționează
                        <span></span>
                        </Link></li>
                        <li><Link className="nav-link" to='/new-meetup'>Întrebări frecvente</Link></li>
                        <li><Link className="nav-link" to='/new-meetup'>Limba steag</Link></li>
                        <li><Link className="nav-link" to='/new-meetup'>Login</Link></li>
                        <li><Link className="nav-link" to='/buy-now'>Cumpără acum</Link></li>
                </ul>
            </div>
        {/* </nav> */}
    </header>
    );
}

export default Nav;