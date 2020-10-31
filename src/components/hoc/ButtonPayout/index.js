import React, { useState, useEffect } from "react";
import { Wrapper } from "./style";
import { Row, Col, Button } from "antd";

const ButtonPayout = () => {
  return (
    <>
      <Wrapper>
        <div className="content">
          <div className="content_price">
            <span><strong>Rp 300.000</strong> / malam</span>
          </div>
          <div className="content_button">
            <Button type="primary">
              Periksa Ketersediaan
            </Button>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default ButtonPayout;
