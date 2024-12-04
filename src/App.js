import React from "react"; 
import "bootstrap/dist/css/bootstrap.min.css";
import "./GlobalStyles/glbStyles.css";
import HeaderComponent from "./components/Header/HeaderComponent.jsx";
import Home from "../src/page/home/Home.jsx";
import FooterComponent from "./components/Footer/FooterComponent.jsx";
import { Layout } from "antd";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Content } from "antd/es/layout/layout.js";


function App() {
  return (
    <BrowserRouter>
      <Layout style={{backgroundColor:"#FFF"}}>
        <HeaderComponent></HeaderComponent>
        <Content>
          <Routes>
            <Route path="/" element={<Home />}></Route>

          </Routes>
        </Content>

        <FooterComponent></FooterComponent>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
