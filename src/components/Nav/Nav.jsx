import { Link } from "react-router-dom";
import { useState } from "react";
import home from '../../IMG/home2.png'
import list from '../../IMG/list.png'
import collection from '../../IMG/literature.png'
import './Nav.css'
import Hamburger from "../Hamburger/Hamburger";

const Nav = ({ addedBooks, addedCollections }) => {

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    }

    return (
        <div className="nav-div">

            <div className="menu">
                <Link to="/"><img className="homeImg" src={home} alt='home' /></Link>
                {addedBooks.length > 0 ?
                    <Link to="/list"><img className="listImg" src={list} alt='list' /></Link>
                    : null
                }
                {addedCollections.length > 0 ?
                    <Link to="/collections"><img className="collectionImg" src={collection} alt='collection' /></Link>
                    : null
                }
            </div>

            <div className="hamburger" onClick={toggleHamburger}>
                <div className="hamburgerWrapper">
                    <Hamburger isOpen={hamburgerOpen} />
                    <h2>MENU</h2>
                </div>
            </div>

            <div className="mobileMenu" style={hamburgerOpen ? { display: 'inline' } : { display: 'none' }}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    {addedBooks.length > 0 ?
                        <li><Link to="/list">Book List</Link></li> : null
                    }
                    {addedCollections.length > 0 ?
                        <li><Link to="/collections">Collections</Link></li> : null
                    }
                </ul>
            </div>
        </div>
    )
}

export default Nav