import Link from 'next/link';
import React from 'react';
import styles from '../styles/Navbar.module.css';
import { useRouter } from 'next/router';

const Navbar = () => {
    const router = useRouter();
    const logoutfn = () => {
        localStorage.removeItem('loginStatus');
        localStorage.removeItem('name');
        localStorage.removeItem('username');
        router.reload('/courses');
    }
    return (
        <div className={styles.navigation}>
            <div className='container-fluid'>
                <div className='container'>
                    <div className='row'>
                        <nav className="navbar navbar-expand-lg">
                            <div className="container-fluid">
                                <a className="navbar-brand" href="#">
                                    <img src='icon.png' />
                                </a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <Link href="/">Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link href="/about">About</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link href="/products">Products</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link href="/facilities">Facilities</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link href="/contact">Contact</Link>
                                        </li>
                                    </ul>
                                    <form className="d-flex" role="search">
                                        <button className="btn btn-outline-success" type="submit">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                            </svg>
                                        </button>
                                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                                    </form>
                                    <ul className="navbar-nav mb-2 mb-lg-0 align-items-center">
                                        <li className="nav-item">
                                            <Link href="/login">Login</Link>
                                        </li>
                                        <li className="nav-item">
                                            <button onClick={logoutfn}>Logout</button>
                                        </li>
                                        <li className="nav-item">
                                            <Link href="/registration">Register</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar