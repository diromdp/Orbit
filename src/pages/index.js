// Vendors
import React from "react";
import { Row, Col } from "antd";
import Slider from "react-slick";

// Next
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";

//style
import Wrapper from "./style";

export default function Home({ appName }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <>
      <Head>
        <title>Home {appName}</title>
      </Head>
      <Layout>
        <Wrapper>
          <Slider {...settings}>
            <div className="banner-promo-item">
              <img src="https://via.placeholder.com/375x188" />
            </div>
            <div className="banner-promo-item">
              <img src="https://via.placeholder.com/375x188" />
            </div>
            <div className="banner-promo-item">
              <img src="https://via.placeholder.com/375x188" />
            </div>
            <div className="banner-promo-item">
              <img src="https://via.placeholder.com/375x188" />
            </div>
            <div className="banner-promo-item">
              <img src="https://via.placeholder.com/375x188" />
            </div>
          </Slider>
          <div className="content-list">
            <div className="content-list__title">
              <h3>New Room</h3>
              <Link href="/new-room">
                <a>View All</a>
              </Link>
            </div>
            <div className="new-list">
              <Link href="/room">
                <a className="new-list-item">
                  <div className="label-status">New</div>
                  <img
                    className="img-new"
                    src="https://via.placeholder.com/213x120"
                  />
                  <div className="new-list-item__content">
                    <h3>Rp 200.000</h3>
                    <p>514 Beach 139th St #B6 Rock away Park, NY 11694</p>
                    <div className="new-list-item__content-icon">
                      <div className="icon-list">
                        <img src="/img/bathtub.png" />
                        <span>1</span>
                      </div>
                      <div className="icon-list">
                        <img src="/img/bed.png" />
                        <span>1</span>
                      </div>
                      <div className="icon-list">
                        <img src="/img/square.png" />
                        <span>1</span>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
              <Link href="/room">
                <a className="new-list-item">
                  <div className="label-status">New</div>
                  <img
                    className="img-new"
                    src="https://via.placeholder.com/213x120"
                  />
                  <div className="new-list-item__content">
                    <h3>Rp 200.000</h3>
                    <p>514 Beach 139th St #B6 Rock away Park, NY 11694</p>
                    <div className="new-list-item__content-icon">
                      <div className="icon-list">
                        <img src="/img/bathtub.png" />
                        <span>1</span>
                      </div>
                      <div className="icon-list">
                        <img src="/img/bed.png" />
                        <span>1</span>
                      </div>
                      <div className="icon-list">
                        <img src="/img/square.png" />
                        <span>1</span>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
              <Link href="/room">
                <a className="new-list-item">
                  <div className="label-status">New</div>
                  <img
                    className="img-new"
                    src="https://via.placeholder.com/213x120"
                  />
                  <div className="new-list-item__content">
                    <h3>Rp 200.000</h3>
                    <p>514 Beach 139th St #B6 Rock away Park, NY 11694</p>
                    <div className="new-list-item__content-icon">
                      <div className="icon-list">
                        <img src="/img/bathtub.png" />
                        <span>1</span>
                      </div>
                      <div className="icon-list">
                        <img src="/img/bed.png" />
                        <span>1</span>
                      </div>
                      <div className="icon-list">
                        <img src="/img/square.png" />
                        <span>1</span>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className="content-open">
            <div className="content-open__title">
              <h3>Open Room</h3>
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
      </Layout>
    </>
  );
}
