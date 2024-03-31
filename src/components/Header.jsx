import React from 'react'
import { navLinks } from '../data';

function Header() {
  return (
    <header className="header__area">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav className="main__nav d-flex  align-items-center justify-content-between" >
                        <a href="index.html" className="logo">
                            <img src="./assets/images/logo/logo.png" alt="jdev" />
                        </a>
                         {/* menu start  */}
                        <ul className="nav d-flex align-items-center">
                            {
                                navLinks.map((link, index) => {
                                    return (
                                        <li key={index} className="nav__links px-4 px-md-2">
                                            <a href={link.path} className={link.active=='active' ? 'active' : ''}>{link.title}</a>
                                        </li>
                                    )
                                })
                            }
                            <li className="nav__links ps-5 ps-md-3 ">
                                <div className="main__red__button py-2">
                                    <a href="#top" className="">Contact Now</a>
                                </div>
                            </li>

                        </ul>
                        <div className="mobile__nav">
                            <i className="fa-solid fa-bars" id="menu" onclick="showMenu()"></i>
                            <ul className="mobile__menu">
                            {
                                navLinks.map((link, index) => {
                                    return (
                                        <li key={index} className="nav__links px-4 px-md-2">
                                            <a href={link.path} className={link.active=='active' ? 'active' : ''}>{link.title}</a>
                                        </li>
                                    )
                                })
                            }
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header;