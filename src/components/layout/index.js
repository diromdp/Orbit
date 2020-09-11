import React from 'react';
import Head from 'next/head';
import { BodyWrapper } from './style';
import Header from '../header';
import Footer from '../footer';

const Layout = ({children}) => {

    return(
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                {/* Mobile Configurations */}
                <meta name="viewport" content="width=device-width, initial-scale=1.0 user-scalable=no" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black" />
                <meta name="GOOGLEBOT" content="index follow" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="google-site-verification" content="jGgc8PucdJuqZ2rfOb35bKBqOjkhFIJTFDWSykydy_M" />
                <link rel="shortcut icon" href="#" />
                <link
                    rel="apple-touch-icon-precomposed"
                    sizes="144x144"
                    href="#"
                />
                <link
                    rel="icon"
                    type="image/png"
                    href="#"
                    sizes="32x32"
                />
                <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700" rel="stylesheet" />
        </Head>
        <BodyWrapper>
            <Header />
            {children}
            <Footer />
        </BodyWrapper>
        </>
    )
}

export default Layout;