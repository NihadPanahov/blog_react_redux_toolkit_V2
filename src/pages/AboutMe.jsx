import React from 'react';
import { Link } from 'react-router-dom';
import './aboutme.scss';

const AboutMe = () => {
  return (
    <>
      <div className='about_me_section'>
        <div className="container_">
          <p>
            <u> <b>Hi there, I'm Anna and I'm a writer.</b>  </u> I've been passionate about writing for as long as I can remember. There's something magical about the way words can paint pictures in your mind and transport you to another world. As a child, I was always scribbling away in notebooks, creating stories and characters that I could bring to life on the page.

            Writing has always been a way for me to express myself and make sense of the world around me. I love nothing more than getting lost in a story and exploring the lives of the characters I create. Whether I'm writing fiction or non-fiction, my aim is always to tell a compelling story that resonates with my readers.

            I believe that everyone has a story to tell, and I feel incredibly lucky that I get to share mine with the world. Writing can be a lonely pursuit, but it's also incredibly rewarding. When someone tells me that my writing has touched them in some way, it makes all the hard work and long hours worthwhile.

            When I'm not writing, you can usually find me curled up with a good book or exploring the great outdoors. I'm a keen hiker and love nothing more than getting out into nature and soaking up the beauty of the world around me.

            Thanks for taking the time to get to know me a little better. I hope that my writing will continue to inspire and entertain readers for many years to come.
          </p>
        </div>

      </div>

      <button className='btn_book'><Link to={"/Books"}>Buy my books</Link></button>
    </>

  )
}

export default AboutMe