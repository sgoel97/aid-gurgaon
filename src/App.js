import React from "react";

import {
  Splash,
  About,
  Mission,
  People,
  Initiatives,
  Children,
  Volunteer,
  Donate,
} from "./pages";

import Layout from "./components/layout";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

import "./css/app.css";

function App() {
  return (
    <Layout>
      <Navbar />

      {/* Splash Page */}
      <Splash />

      {/* About Us */}
      <About />

      {/* Our Mission */}
      <Mission />

      {/* Who We Are */}
      <People />

      {/* Education at the Doorstep */}
      <Initiatives />

      {/* Challenges for Children */}
      <Children />

      {/* Volunteer With Us */}
      <Volunteer />

      {/* Donate Today */}
      <Donate />

      <Footer />
    </Layout>
  );
}

export default App;
