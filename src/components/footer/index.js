import React, { useState, useEffect } from "react";
import { Wrapper } from "./style";
import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import Link from "next/link";
const menu = (
<Menu>
    <Menu.Item key="1">
        Indonesia
    </Menu.Item>
    <Menu.Item key="2">
        English
    </Menu.Item>
</Menu>
);
const Footer = ({title, url}) => {
    return (
      <>
        <footer>
            <Wrapper>
                <div className="container">
                    <div className="logo-footer">
                        <div className="row">
                            <div className="col-6 col-sm-6 col-lg-10">
                                <img src="/img/logo-heksa-dark.svg" />
                            </div>
                            <div className="col-6 col-sm-6 col-lg-2">
                            <Dropdown overlay={menu}>
                                <Button>
                                    <img src="/img/icon-flag-indonesia.svg"/>
                                    Indonesia 
                                    <DownOutlined />
                                </Button>
                            </Dropdown>
                            </div>
                        </div>
                    </div>
                    <div className="list-footer">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="menu-footer">
                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <a>Fitur</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>Produk</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>Jangkauan</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>Promo</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>Bantuan</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>Login</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>Blog</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="sosmed-footer">
                                    <ul>
                                        <li>
                                            <span>
                                                Ikuti Kami  
                                            </span>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>
                                                    <img src="/img/icon-facebook-black.svg"/>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>
                                                    <img src="/img/icon-twitter-black.svg"/>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>
                                                    <img src="/img/icon-instagram-black.svg"/>
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copyright">
                        <div className="row">
                            <div className="col-lg-7">
                                <span className="copy-text">Copyright © 2020 PT Telekomunikasi Selular. All right reserved.</span>
                            </div>
                            <div className="col-lg-5">
                                <div className="copy-link">
                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <a>Download Panduan Brand</a>
                                            </Link>
                                        </li>
                                        <li>|</li>
                                        <li>
                                            <Link href="#">
                                                <a>Syarat dan Ketentuan</a>
                                            </Link>
                                        </li>
                                        <li>|</li>
                                        <li>
                                            <Link href="#">
                                                <a>Kebijakan Privasi</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </footer>
      </>
    );
  };
  
  export default Footer;