import React from "react";
import Hero from "./Hero";
import About from "./About";
import Menu from "./Menu";
import Reservation from "./Reservation";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "./Footer";
const Home = () => {
  return (
    <div>
      <Hero> </Hero>
      <About></About>
      <Menu></Menu>
      <Reservation></Reservation>
      <Testimonials></Testimonials>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
