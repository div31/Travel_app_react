import React from 'react';
import Header from '../Header/Header';
import {Container, Row, Col} from 'react-bootstrap';
import './Home.css';
import MainSection from './MainSection/MainSection';
import PopularDestination from '../PopularDestination/PopularDestination';
import SpecialOffers from '../SpecialOffers/SpecialOffers';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import Blog from '../Blog/Blog';

function Home() {
    


    return (
        <div>
            
            <Header/>
            
            <section>
                <img className="home__image" alt="" src="img-main-4.jpg"/>
                <MainSection />
            </section>
            <section>
                <Container>
            <div className="py-5">
                    <h2 className="main__text">Popular Destinations</h2>
                    <hr className="break__line"/>
                    <p className="main__para">From historical cities to natural splendours, come see the best of the world!</p>
                <Row className="justify-content-md-center">
                    <Col xs={12} md={4} className="my-1">
                        <PopularDestination 
                            id="1"
                            image="img-main-1.jpg"
                            title="lorem ipsum"
                            text="lorem ipsum dolor sit"
                        />
                    </Col>
                    <Col xs={12} md={4} className="my-1">
                        <PopularDestination 
                            id="2"
                            image="img-main-2.jpg"
                            title="lorem ipsum"
                            text="lorem ipsum dolor sit"
                        />
                    </Col>
                    <Col xs={12} md={4} className="my-1">
                        <PopularDestination 
                            id="3"
                            image="img-main-3.jpg"
                            title="lorem ipsum"
                            text="lorem ipsum dolor sit"
                        />
                    </Col>
                </Row>
                
                </div>
                </Container>
            </section>
            <section>
                <Container>
                    <div className="py-5">
                     
                            <h2 className="main__text">Special Offers</h2>
                            <hr className="break__line"/>
                            <p className="main__para">Check Out Our Special Offers!</p>
                
                        <Row className="justify-content-md-center">
                            <Col xs={12} md={4} className="my-4">
                                <SpecialOffers 
                                    id="4"
                                    image="img-offer-1.jpg"
                                    title="Mumbai, India"
                                    price={35000}
                                />
                            </Col>
                            <Col xs={12} md={4} className="my-4">
                                <SpecialOffers 
                                    id="5"
                                    image="img-offer-2.jpg"
                                    title="Bali, Indonesia"
                                    price={50000}
                                />
                            </Col>
                            <Col xs={12} md={4} className="my-4">
                                <SpecialOffers 
                                    id="6"
                                    image="img-offer-3.jpg"
                                    title="Paris, France"
                                    price={135000}
                                />
                            </Col>
                        </Row>
                </div>
                </Container>
                
            </section>

            <section>
                <Container>
                    <div className="py-5">
                        <h2 className="main__text">Blogs</h2>
                        <hr className="break__line"/>
                        <p className="main__para">Check Out Our Amazing Blogs!</p>
                        <Blog />
                    </div>
                </Container>
            </section>

            

            <footer className="about__section">
                <Container>
                    <h2 className="text-center">About Us</h2>
                    <Row>
                        <Col xs={6} md={3}>
                            <Row>
                            <h3 className="my-3">TravelGram</h3>
                            </Row> 
                            <Row>
                                <FacebookIcon className="mx-2"/> 
                                <InstagramIcon className="mx-2"/> 
                                <TwitterIcon className="mx-2"/>
                            </Row>
                        </Col>
                        <Col xs={6} md={3}>
                            <Row>
                                <h5 className="second__column">Home</h5>
                            </Row>
                            <Row>
                                <h5>Tours</h5>
                            </Row>
                            <Row>
                                <h5>Explore</h5>
                            </Row>
                            <Row>
                                <h5>Blog</h5>
                            </Row>
                        </Col>
                        <Col xs={6} md={3}>
                            <Row>
                                <h5 className="second__column">Destinations</h5>
                            </Row>
                            <Row>
                                <h5>Supports</h5>
                            </Row>
                            <Row>
                                <h5>Terms and Conditions</h5>
                            </Row>
                            <Row>
                                <h5>Privacy</h5>
                            </Row>
                        </Col>
                        <Col xs={6} md={3}>
                            <Row>
                                <h4 className="my-3">Contact Us</h4>
                            </Row>
                            <Row>
                                <h5>+23 3455 7890</h5>
                            </Row>
                            <Row>
                                <h5>service@travelgram.com</h5>
                            </Row>
        
                        </Col>
                    </Row>
                   
                </Container>
            </footer>
    
        </div>
    )
}

export default Home
