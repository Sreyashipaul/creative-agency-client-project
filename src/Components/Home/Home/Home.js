import React from 'react';
import Feedback from 'react-bootstrap/esm/Feedback';
import Client from '../Client/Client';
import Footer from '../Footer/Footer';
import HeaderContent from '../HeaderContent/HeaderContent';
import ProvideServices from '../ProvideServices/ProvideServices';
import WorkSlider from '../WorkSlider/WorkSlider';


const Home = () => {
    return (
        <div>
         <HeaderContent> </HeaderContent>
         <Client></Client>
         <br/>
         <br/>
         <ProvideServices></ProvideServices>
         <WorkSlider></WorkSlider>
         <Feedback> </Feedback>
         <Footer></Footer>
        </div>
    );
};

export default Home;