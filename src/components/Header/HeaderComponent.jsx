import React, { useEffect, useState } from "react";
import "../Header/header.css";
import "@fontsource/roboto/700.css";
import EmailIcon from "@mui/icons-material/Email";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import logo1 from "../../assets/google-play.png";
import logo2 from "../../assets/app-store.png";
import { Button } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo_header from "../../assets/logo-image.png";
import english from "../../assets/english.png";
import { Link } from "react-router-dom";
function HeaderComponent() {

  return (
    <div className="navbar roboto-medium">
      <div className="top">
        <div className="container">
          <div className="wrapper">
            <div className="left">
              <span>
                <EmailIcon />
                contact@greenlines-dp.com.vn
              </span>
              <span>
                <PhoneEnabledIcon />
                Ticket Hotlines: 0988 009 579
              </span>
            </div>
            <div className="right">
              <span>
                <YouTubeIcon />
              </span>
              <span>
                <FacebookIcon />
              </span>
              <img src={logo1} alt="" />
              <img src={logo2} alt="" />

                <Link to="/login" style={{ textDecoration: "none" }}>
                  <Button
                    style={{
                      background: "none",
                      color: "white",
                      border: "none",
                    }}
                  >
                    Đăng nhập
                  </Button>
                </Link>
              
            </div>
          </div>
        </div>
      </div>
      <div className="bottom roboto-medium">
        <div className="container " style={{ width: "100%" }}>
          <Navbar expand="lg">
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Brand href="#" style={{ padding: "1rem 0", margin: "0" }}>
              <Link to="/">
                <img src={logo_header} alt="" />
              </Link>
            </Navbar.Brand>

            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="ms-auto me-auto my-2 my-lg-0 gap-4"
                style={{ maxHeight: "auto", padding: "1rem 0" }}
                navbarScroll
              >
                <Nav.Link href="#action1">TRANG CHỦ</Nav.Link>
                <Nav.Link href="#action2">COMBO</Nav.Link>
                <Nav.Link href="#action3">GIỚI THIỆU</Nav.Link>
                <NavDropdown title="DỊCH VỤ" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">
                    TÀU HAI THÂN
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    TÀU RIB RX
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action5">ĐẠI LÝ</NavDropdown.Item>
                  <NavDropdown.Item href="#action5">
                    CHỤP ẢNH CƯỚI DU THUYỀN
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action5">
                    TIỆC SINH NHẬT TRÊN DU THUYỀN
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action5">
                    TUAR DU NGOẠN TRÊN SÔNG SÀI GÒN
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#action3">KHUYẾN MÃI</Nav.Link>
                <Nav.Link href="#action3">TIN TỨC</Nav.Link>
                <Nav.Link href="#action3">LIÊN HỆ</Nav.Link>
                <Nav.Link href="#action3">TÌM KIẾM VÉ</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Form className="d-flex">
              <Button
                variant="outline-success"
                style={{
                  border: "none",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={english} alt="" />
              </Button>
            </Form>
          </Navbar>
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;
