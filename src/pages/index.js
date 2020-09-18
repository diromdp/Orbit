// Vendors
import React from "react";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Row, Col } from "antd";

// Next
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";

//style
import { Wrapper } from "./style";
SwiperCore.use([Pagination]);

export default function Home({ appName }) {
  return (
    <>
      <Head>
        <title>Home {appName}</title>
      </Head>
      <Layout>
        <Wrapper>
          <Swiper pagination={{ el: ".swiper-pagination", clickable: true }}>
            <SwiperSlide>
              <div className="banner-promo-item">
                <img src="https://via.placeholder.com/375x188" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="banner-promo-item">
                <img src="https://via.placeholder.com/375x188" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="banner-promo-item">
                <img src="https://via.placeholder.com/375x188" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="banner-promo-item">
                <img src="https://via.placeholder.com/375x188" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="banner-promo-item">
                <img src="https://via.placeholder.com/375x188" />
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="content-list">
            <div className="content-list__title">
              <h3>New Room</h3>
              <Link href="#">
                <a>View All</a>
              </Link>
            </div>
            <div className="new-list">
              <Swiper
                freeMode={true}
                centeredSlides={true}
                grabCursor={true}
                breakpoints={{
                  320: {
                    slidesPerView: 2,
                    spaceBetween: 100,
                  },
                  480: {
                    slidesPerView: 1,
                    spaceBetween: 50,
                  },
                  992: {
                    spaceBetween: 20,
                    slidesPerView: 3,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="new-list-item">
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
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="new-list-item">
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
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="new-list-item">
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
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="new-list-item">
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
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="new-list-item">
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
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="content-open">
            <div className="content-open__title">
              <h3>Open Room</h3>
            </div>
            <div className="content-open__content">
              <Row justify="center">
                <Col sm={24} md={12} lg={12}>
                  <div className="content-open__content-item">
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
                  </div>
                </Col>
                <Col sm={24} md={12} lg={12}>
                  <div className="content-open__content-item">
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
                  </div>
                </Col>
                <Col sm={24} md={12} lg={12}>
                  <div className="content-open__content-item">
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
                  </div>
                </Col>
                <Col sm={24} md={12} lg={12}>
                  <div className="content-open__content-item">
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
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Wrapper>
      </Layout>
    </>
  );
}
