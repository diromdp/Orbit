import React, { useState, useEffect } from "react";
import { Wrapper } from "./style";
import Link from "next/link";

const Head = () => {
  return (
    <>
      <Wrapper>
        <div className="container">
          <nav className="navbar">
            <Link href="#">
              <a className="back-to">
                <i class="las la-angle-left"></i>
              </a>
            </Link>
          </nav>
        </div>
      </Wrapper>
    </>
  );
};

export default Head;
