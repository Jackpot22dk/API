import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container">
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink end className="nav-link" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <span className="nav-link dropdown-toggle" data-bs-toggle="dropdown">JSONPlaceholder</span>
                            <ul className="dropdown-menu">
                                <li><NavLink className="dropdown-item" to="/user">Find en user</NavLink></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <span className="nav-link dropdown-toggle" data-bs-toggle="dropdown">SWAPI</span>
                            <ul className="dropdown-menu">
                                <li><NavLink className="dropdown-item" to="/species">Species</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/starships">Starships</NavLink></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/News">NEWS</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/Games">GAMES</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/Facts">Facts</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/Weather">Weather</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/Weathermap">Weathermap</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/Steam">Steam</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <span className="nav-link dropdown-toggle" data-bs-toggle="dropdown">AIRTABLE</span>
                            <ul className="dropdown-menu">
                                <li><NavLink className="dropdown-item" to="/Indkoebsliste">Indkoeb</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/IndkoeblisteCreate">Indkoebcreate</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/IndkoeblisteAdmin">IndkoebAdmin</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/IndkoeblisteEdit">IndkoeblisteEdit</NavLink></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <span className="nav-link dropdown-toggle" data-bs-toggle="dropdown">LOCALEHOST</span>
                            <ul className="dropdown-menu">
                            <NavLink className="nav-link" aria-current="page" to="/Products">Products</NavLink>
                            <NavLink className="nav-link" aria-current="page" to="/ProductsAdmin">Opret Produkt</NavLink>
                            <NavLink className="nav-link" aria-current="page" to="/ProductsAdminCreate">Products Edit/DEL</NavLink>
                            <NavLink className="nav-link" aria-current="page" to="/ProductsAdminEdit">Product id edit</NavLink>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/Haveservice">Haveservice</NavLink>
                        </li>
                       
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
