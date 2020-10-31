import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  max-height: 100px;
  background-color: #ffffff;
  box-shadow: 0px 8px 28px rgba(0, 0, 0, 0.28);
  min-height: 80px;
  @media (min-width: 992px) {
    width: 720px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 100%;
  }
  @media (max-width: 414px) {
    width: 100%;
  }
  .content {
    display: flex;
    justify-content: space-between;
    padding-right: 20px;
    padding-left: 20px;
    padding-top: 25px;
    &_price {
      span {
        display: block;
        color: #454555;
        font-size: 18px;
        line-height: 24px;
      }
    }
    &_button {
      .ant-btn-primary {
        background: linear-gradient(270deg, #f99c96 0%, #f1635d 100%);
        box-shadow: 0px 7px 15px rgba(241, 99, 93, 0.259615);
        border-radius: 10px;
        border-color: #f99c96;
        height: 40px;
        span {
          font-family: Nunito;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 22px;
          text-align: center;
          color: #ffffff;
        }
      }
    }
  }
`;
