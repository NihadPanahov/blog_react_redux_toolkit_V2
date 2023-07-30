import React from 'react';
import { useSelector } from 'react-redux';
import contactme from '../pages/contactme.scss';
import bg_image from '../pictures/bg_image.jpg';
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";

const ContactMe = () => {
  const count = useSelector((state) => state.counter.value);

  return (
    <>
      <div className="contact_me_div">

        <h1><BsInstagram /></h1>
        <div className="fb"><h1><FaFacebookF /></h1></div>
        <div className="tw"><h1><AiOutlineTwitter /></h1></div>

        <span> <i>Number of books purchased: <b>{count}</b> </i> </span>
      </div>
    </>
  )
}

export default ContactMe