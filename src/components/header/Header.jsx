import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import writer_woman from '../../pictures/writer_woman.jpg';
const Header = () => {
    return (
        <>
            <div className='header_ul'>
                <div className="container_">
                    <ul>
                        <li> <Link to={"/"}>Home</Link> </li>
                        <li> <Link to={"/aboutme"}>About Me</Link> </li>
                        <li> <Link to={"/books"}>Books</Link> </li>
                        <li> <Link to={"/contactme"}>Contact Me</Link> </li>
                    </ul>
                </div>

            </div>
           <Link to={"/aboutme"}><img src={writer_woman} alt="writer_woman_pic" /></Link> 


        </>
    )
}

export default Header