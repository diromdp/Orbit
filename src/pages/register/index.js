// Vendors
import React from "react";
import { Form, Input, Button, Checkbox } from "antd";

// Next
import Head from "next/head";
import dynamic from "next/dynamic";
import Link from 'next/link';

//style
import Wrapper from "./style";

//component
const Heads = dynamic(() => import("../../components/headExternal"));

export default function Regist({ appName }) {
  return (
    <>
      <Head>
        <title>Register {appName}</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Mobile Configurations */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0 user-scalable=no"
        />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="GOOGLEBOT" content="index follow" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="google-site-verification"
          content="jGgc8PucdJuqZ2rfOb35bKBqOjkhFIJTFDWSykydy_M"
        />
        <link rel="shortcut icon" href="#" />
        <link rel="apple-touch-icon-precomposed" sizes="144x144" href="#" />
        <link rel="icon" type="image/png" href="#" sizes="32x32" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"></link>
      </Head>
      <Wrapper>
        <div className="container">
          <main>
            <Heads/>
            <div className="login-page">
              <div className="login-page__header">
                <img src="/img/logo.png" />
                <div className="welcome">
                  <h1>Sign up!</h1>
                  <p>Create an account to get start.</p>
                </div>
              </div>
              <div className="login-page__body">
                <Form
                 
                  name="login"
                  layout="vertical"
                >
                  <Form.Item
                    label="Full Name"
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: "name",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "lambora@gmai.com",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>
                  <Form.Item
                    label="Confirm Password"
                    name="cpassword"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>
                  
                  <Form.Item className="d-block">
                    <Button type="primary" htmlType="submit">
                      Register
                    </Button>
                  </Form.Item>
                </Form>
                
                <div className="regist-link">
                  <span>Have an account?</span>
                  <Link href="#">
                    <a>Log in</a>
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </Wrapper>
    </>
  );
}
