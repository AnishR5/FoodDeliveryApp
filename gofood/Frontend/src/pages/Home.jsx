import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Caraousal from "../components/Caraousal";

export default function Home() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <Caraousal />
      </div>
      <div className="m-3">
        <Card />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
