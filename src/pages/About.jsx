import React from "react";
import AboutHeader from "../components/aboutHeader/AboutHeader";
import Founded from "../components/founded/Founded";
import Staff from "../components/staff/Staff";
import Testimonials from "../components/testimonials/Testimonials";

function About() {
  return (
    <div>
      <AboutHeader />
      <Founded />
      <Staff />
      <Testimonials />
    </div>
  );
}

export default About;
