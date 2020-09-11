import React from "react";
import { Wrapper, Nav } from "./style";
import { Row, Col } from "antd";
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
      <Wrapper>
        <div className="container">
          <Row>
            <Col span={4}>
              <div className="brand-web">
                <a href="#">
                  <img src="/img/logo.png" />
                </a>
              </div>
            </Col>
            <Col span={20}>
                <Nav>
                    <ul>
                        <li className="list-item">
                          <Link href="/">
                            <a>Home</a>
                          </Link>
                        </li>
                        <li className="list-item">
                          <Link href="/">
                            <a>Our Result</a>
                          </Link>
                        </li>
                        <li className="list-item">
                          <Link href="/">
                            <a>Exterior</a>
                          </Link>
                        </li>
                        <li className="list-item">
                          <Link href="/">
                            <a>Interior</a>
                          </Link>
                        </li>
                        <li className="list-item">
                          <Link href="/">
                            <a>About Us</a>
                          </Link>
                        </li>
                        <li className="list-item">
                          <Link href="/">
                            <a>Contact Us</a>
                          </Link>
                        </li>
                    </ul>
                </Nav>
            </Col>
          </Row>
        </div>
      </Wrapper>
    </>
  );
};

export default Navbar;
