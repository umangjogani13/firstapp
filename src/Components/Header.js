import React from 'react'
import { Link,Outlet } from "react-router-dom";

    const Header = () => {
        return (
          <>
          <header id="header" class="d-flex align-items-center">
            <div class="container d-flex align-items-center justify-content-between">
                <h1 class="logo"><a href="index.html">BizLand<span>.</span></a></h1>
                <a href="index.html" class="logo"><img src="assets/img/logo.png" alt=""/></a>
                <nav id="navbar" class="navbar">
                    <ul>
                        <li><a class="nav-link scrollto active" ><Link to="/">Home</Link></a></li>
                        <li><a class="nav-link scrollto"></a><Link to="/about">About</Link></li>
                        <li><a class="nav-link scrollto"><Link to="/services">Services</Link></a></li>
                        <li><a class="nav-link scrollto "><Link to="/portfolio">Portfolio</Link></a></li>
                        <li><a class="nav-link scrollto"><Link to="/team">Team</Link></a></li>
                        <li class="dropdown"><a href="#"><span>Drop Down</span> <i class="bi bi-chevron-down"></i></a>
                            <ul>
                                <li><a href="#">Drop Down 1</a></li>
                                <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
                                    <ul>
                                        <li><a href="#">Deep Drop Down 1</a></li>
                                        <li><a href="#">Deep Drop Down 2</a></li>
                                        <li><a href="#">Deep Drop Down 3</a></li>
                                        <li><a href="#">Deep Drop Down 4</a></li>
                                        <li><a href="#">Deep Drop Down 5</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Drop Down 2</a></li>
                                <li><a href="#">Drop Down 3</a></li>
                                <li><a href="#">Drop Down 4</a></li>
                            </ul>
                        </li>
                        <li><a class="nav-link scrollto">Contact</a></li>
                    </ul>
                    <i class="bi bi-list mobile-nav-toggle"/>
                </nav>
                <Outlet/>
            </div>
        </header>  
  
          </>
        )
      };
    export default Header
    

           
        
 