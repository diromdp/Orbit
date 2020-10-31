import styled from "styled-components";

export const Wrapper = styled.div`
  main {
    background: #fff;
    .login-page {
      padding: 25px;
      &__header {
        text-align: center;
        margin: 0 auto;
        margin-bottom: 30px;
        img {
          width: 70px;
          height: 88px;
          display: block;
          margin: 0 auto;
        }
        .welcome {
          margin-top: 10px;
          h1 {
            font-family: Nunito;
            font-style: normal;
            font-weight: bold;
            font-size: 32px;
            line-height: 44px;
            text-align: center;
            color: #454555;
            margin: 0px;
          }
          p {
            margin-top: 7px;
            margin-bottom: 0px;
            font-family: Nunito;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 19px;
            text-align: center;
            color: #454555;
          }
        }
      }
      &__body {
        .confirm {
          width: 100%;
          background: rgba(238, 238, 239, 0.5);
          border-radius: 16px;
          border: 0px;
          height: 98px;
          display: flex;
          padding: 30px;
          outline: none;
          cursor: pointer;
          img {
            margin-right: 20px;
          }
          .text {
            text-align: left;
            .text-title {
              display: block;
              font-family: Nunito;
              font-style: normal;
              font-weight: normal;
              font-size: 16px;
              line-height: 22px;
              color: #888892;
            }
            .text-email {
              display: block;
              font-family: Nunito;
              font-style: normal;
              font-weight: bold;
              font-size: 18px;
              line-height: 25px;
              color: #454555;
            }
          }
        }
      }
    }
  }
`;
