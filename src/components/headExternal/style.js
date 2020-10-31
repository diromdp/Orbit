import syled from "styled-components";

export const Wrapper = syled.div`
  height: auto;
  left: 0px;
  top: 0px;
  background: #fff;
  width: 100%;
  padding: 15px;
  position: relative;
  z-index: 9;
  .navbar {
    .back-to {
      .las {
        color: #454555;
        @media (min-width: 992px) {
        font-size: 24px;
        }
        @media (min-width: 768px) and (max-width: 991px) {
        font-size: 20px;
        }
        @media (max-width: 414px) {
        font-size: 20px;
        }
      }
    }
  }
`;
