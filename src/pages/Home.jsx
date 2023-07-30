import React from 'react';
// import Header from '../header/Header'
import '../pages/home.scss';
import w1 from "../pictures/w1.jpg";
import w2 from "../pictures/w2.jpg";
import w3 from "../pictures/w3.jpg";

const Home = () => {
  return (
    // <Header/>
    <>
      <div className='home_div'>
        <div className="container_">
          <div className="first_paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo elit at imperdiet dui accumsan sit. Platea dictumst vestibulum rhoncus est. Et netus et malesuada fames ac turpis. Pellentesque elit eget gravida cum sociis natoque penatibus et magnis. Venenatis cras sed felis eget velit. Interdum varius sit amet mattis vulputate enim. Imperdiet nulla malesuada pellentesque elit. Eu volutpat odio facilisis mauris sit. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis. Elementum pulvinar etiam non quam lacus suspendisse. Arcu bibendum at varius vel. Vel quam elementum pulvinar etiam non quam lacus suspendisse.

            Tincidunt id aliquet risus feugiat.
          </div>
          <img className='w1' src={w1} alt="writing_picture1" />
          <br /><br /> <div className="second_paragraph">
            <i>Convallis convallis tellus id interdum velit laoreet id donec ultrices. Mauris nunc congue nisi vitae suscipit tellus mauris. Maecenas accumsan lacus vel facilisis volutpat est velit egestas dui. Varius vel pharetra vel turpis. Leo duis ut diam quam nulla porttitor massa id. Quis ipsum suspendisse ultrices gravida dictum. Interdum consectetur libero id faucibus. Sed adipiscing diam donec adipiscing. Vitae congue eu consequat ac felis. Ipsum dolor sit amet consectetur adipiscing.

              Pellentesque habitant morbi tristique senectus et netus et malesuada. Euismod elementum nisi quis eleifend quam adipiscing vitae proin. Blandit cursus risus at ultrices mi tempus imperdiet nulla. Fermentum iaculis eu non diam phasellus. Amet nulla facilisi morbi tempus. Pellentesque pulvinar pellentesque habitant morbi. Eu feugiat pretium nibh ipsum consequat nisl vel.</i>
          </div>
          <img className='w2' src={w2} alt="writing_picture2" />

          <br /><br /> <div className="thirth_paragraph">
            <b>Elementum tempus egestas sed sed risus. Dictum non consectetur a erat nam at. Tincidunt id aliquet risus feugiat in ante metus. Ultrices tincidunt arcu non sodales neque sodales ut. Pellentesque sit amet porttitor eget dolor morbi non arcu. Suscipit adipiscing bibendum est ultricies integer quis. Urna condimentum mattis pellentesque id nibh. Elementum curabitur vitae nunc sed velit dignissim sodales. Lacus laoreet non curabitur gravida arcu ac. Ut pharetra sit amet aliquam id diam maecenas ultricies.</b>
          </div>
          <img className='w3' src={w3} alt="writing_picture3" />

        </div>
      </div>

    </>
  )
}

export default Home