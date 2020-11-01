import React, { useState, useEffect } from "react";
import { Wrapper } from "./style";
import { Row, Col, Button } from "antd";
import Link from "next/link";
const ButtonPayout = () => {
  return (
    <>
      <Wrapper>
        <div className="content">
          <div className="content_price">
            <span><strong>Rp 300.000</strong> / malam</span>
          </div>
          <div className="content_button">
          <Link href="/confirm-payment">
            <Button onClick="" type="primary">
              Periksa Ketersediaan
            </Button>
          </Link>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default ButtonPayout;
