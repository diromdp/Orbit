import React, { useState, useEffect } from "react";
import { Wrapper } from "./style";
import { Row, Col } from "antd";
import Link from "next/link";


const NewListing = () => {
  return (
    <>
      <Wrapper>
        <div className="content-open">
          <div className="content-open__title">
            <h3>New Room</h3>
          </div>
          <div className="content-open__content">
            <Col sm={24} md={12} lg={12}>
              <Link href="/room">
                <a className="content-open__content-item">
                  <img src="https://via.placeholder.com/343x155" />
                  <div className="desc">
                    <div className="label-content">
                      <div className="label-item">NEW</div>
                      <div className="label-item">OPEN HOUSE</div>
                    </div>
                    <h2>RP 120.000,-</h2>
                    <p>514 Beach 139th St #B6 Rock away Park, NY</p>
                    <span>
                      Open: <strong>1</strong>-<strong>2pm</strong>
                    </span>
                  </div>
                </a>
              </Link>
            </Col>
            <Col sm={24} md={12} lg={12}>
              <Link href="/room">
                <a className="content-open__content-item">
                  <img src="https://via.placeholder.com/343x155" />
                  <div className="desc">
                    <div className="label-content">
                      <div className="label-item">NEW</div>
                      <div className="label-item">OPEN HOUSE</div>
                    </div>
                    <h2>RP 120.000,-</h2>
                    <p>514 Beach 139th St #B6 Rock away Park, NY</p>
                    <span>
                      Open: <strong>1</strong>-<strong>2pm</strong>
                    </span>
                  </div>
                </a>
              </Link>
            </Col>
            <Col sm={24} md={12} lg={12}>
              <Link href="/room">
                <a className="content-open__content-item">
                  <img src="https://via.placeholder.com/343x155" />
                  <div className="desc">
                    <div className="label-content">
                      <div className="label-item">NEW</div>
                      <div className="label-item">OPEN HOUSE</div>
                    </div>
                    <h2>RP 120.000,-</h2>
                    <p>514 Beach 139th St #B6 Rock away Park, NY</p>
                    <span>
                      Open: <strong>1</strong>-<strong>2pm</strong>
                    </span>
                  </div>
                </a>
              </Link>
            </Col>
            <Col sm={24} md={12} lg={12}>
              <Link href="/room">
                <a className="content-open__content-item">
                  <img src="https://via.placeholder.com/343x155" />
                  <div className="desc">
                    <div className="label-content">
                      <div className="label-item">NEW</div>
                      <div className="label-item">OPEN HOUSE</div>
                    </div>
                    <h2>RP 120.000,-</h2>
                    <p>514 Beach 139th St #B6 Rock away Park, NY</p>
                    <span>
                      Open: <strong>1</strong>-<strong>2pm</strong>
                    </span>
                  </div>
                </a>
              </Link>
            </Col>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default NewListing;
