// Vendors
import React from "react";

// Next
import Head from "next/head";
import dynamic from "next/dynamic";
import Link from "next/link";

// Component
import Layout from "../../components/layout2";

const Heads = dynamic(() => import("../../components/head"));
const SlideRoom = dynamic(() =>
  import("../../components/hoc/RoomDetail/SlideRoom")
);
const ButtonPayout = dynamic(() => import("../../components/hoc/ButtonPayout"));

//style
import { Wrapper } from "./style";

export default function Room({ appName }) {
  return (
    <>
      <Head>
        <title>Detail Room{appName}</title>
      </Head>
      <Layout>
        <Heads />
        <Wrapper>
          <SlideRoom />
          <div className="content-room">
            <div className="content-room__title">
              <h1>A Gorgeous Apartment with Amazing Views</h1>
              <div className="content-room__title-detail">
                <div className="rate">
                  <img src="/img/star.svg" />
                  <span>
                    4.89 <b>(439)</b>
                  </span>
                </div>
                <span className="dots">.</span>
                <span className="list">HosTeladan</span>
                <span className="dots">.</span>
                <span className="address">
                  <Link href="/">
                    <a>Jalan Raya Seminyak, Kuta, Bali, Indonesia</a>
                  </Link>
                </span>
              </div>
            </div>
            <div className="content-room__users">
              <div className="content-room__users-name">
                <span className="name">
                  Seluruh apartemen dilayani oleh Francisca
                </span>
                <img src="https://via.placeholder.com/48x48" />
              </div>
              <div className="content-room__users-fasili">
                <ul>
                  <li>
                    <span>2 tamu</span>
                  </li>
                  <li>
                    <span className="dots">·</span>
                  </li>
                  <li>
                    <span>Studio</span>
                  </li>
                  <li>
                    <span className="dots">·</span>
                  </li>
                  <li>
                    <span>1 tempat tidur</span>
                  </li>
                  <li>
                    <span className="dots">·</span>
                  </li>
                  <li>
                    <span>1 kamar mandi</span>
                  </li>
                </ul>
              </div>
              <div className="content-room__users-moredetail">
                <div className="more">
                  <h2>Tentang tempat ini</h2>
                  <div className="desc">
                    <p>
                      This apartment, which is located in Pluit, has easy access
                      to strategic locations such as Pasar Muara Angke.
                    </p>
                    <p>
                      The 21.25 apartment has is the perfect choice for those of
                      you who want to stay at fully-equipped living.
                    </p>
                    <h4>Tempat</h4>
                    <p>
                      ATM On Site, Basketball Court, Cafe, Fitness Center,
                      Jogging Track, Laundry (Charge), Playground, Restaurant,
                      Supermarket, Swimming Pool would give you an remarkable
                      experience of staying. Facilitated with 01 bed, Queen Bed
                      (160x200) covered with star-hotel quality linen, air
                      conditioner (AC), television, free Wi-Fi access in room,
                      toiletries, and kitchenware.
                    </p>
                    <h4>Akses Tamu</h4>
                    <span>Facilities:</span>
                    <ol>
                      <li>Access Card</li>
                      <li>Free Wi-Fi</li>
                      <li>Complimentary Bottled Water</li>
                      <li>
                        Kitchen: Stove, Refrigerator, Kitchenware, Rice Cooker,
                        Electric Kettle
                      </li>
                      <li>Bathroom: Toiletries, Water Heater</li>
                    </ol>
                    <span>Building Facilities:</span>
                    <ol>
                      <li>Swimming Pool</li>
                      <li>Fitness Center</li>
                      <li>ATM On Site</li>
                      <li>Basketball Court</li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="content-room__users-contact">
                <div className="content">
                  <div className="text-contact">
                    <h2>Dilayani Oleh Mimi</h2>
                    <span className="text-contact__join">
                      Bergabung sejak Mei 2019
                    </span>
                    <span className="text-contact__very">
                      <i className="las la-shield-alt"></i>
                      <strong>Identitas terverifikasi</strong>
                    </span>
                  </div>
                  <div className="img-profile">
                    <img src="https://via.placeholder.com/48x48" />
                  </div>
                </div>
                <div className="btn-contact">
                  <Link href="">
                    <a>Hubungi tuan rumah</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <ButtonPayout/>
        </Wrapper>
      </Layout>
    </>
  );
}
