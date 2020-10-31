import styled from "styled-components";

const Wrapper = styled.div`
  main {
    background: #fff;
    .login-page {
      padding: 25px;
      &__header {
        text-align: center;
        margin: 0 auto;
        margin-bottom: 30px;
        img {
          width: 80px;
          height: 80px;
          display: block;
          margin: 0 auto;
        }
        .welcome {
          margin-top: 40px;
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
        .regist-link {
          margin-top: 35px;
          text-align: center;
          margin-bottom: 10px;
          span {
            font-family: Nunito;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 19px;
            text-align: center;
            color: #454555;
            margin-right: 5px;
          }
          a {
            color: #F1635D;
          }
        }
        .login-external {
          margin-top: 33px;
          .divide {
            position: relative;
            hr {
              display: block;
              background: #eeeeef;
            }
            span {
              display: block;
              position: absolute;
              left: 44%;
              top: -10px;
              background: #ffff;
              padding-right: 20px;
              padding-left: 20px;
            }
          }
          
          .link-external {
            display: flex;
            margin-top: 36px;

            @media (min-width: 992px) {
              justify-content: space-evenly;
            }
            @media (min-width: 768px) and (max-width: 991px) {
              justify-content: space-around;
            }
            @media (max-width: 414px) {
              justify-content: space-around;
            }
            .google {
              background: #ffffff;
              box-shadow: 0px 7px 20px rgba(203, 203, 203, 0.5);
              border-radius: 28px;
              width: 144px;
              height: 48px;
              display: block;
              text-align: center;
              padding: 15px;
              img {
                width: 24px;
                height: 24px;
              }
            }
            .facebook {
              background: #5d65f1;
              border-radius: 28px;
              width: 144px;
              height: 48px;
              display: block;
              text-align: center;
              padding: 15px;
              img {
                width: 24px;
                height: 24px;
              }
            }
          }
        }
        .ant-form-vertical {
          .forget-password {
            font-family: Nunito;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 19px;
            text-align: right;
            margin-top: 16px;
            margin-bottom: 40px;
            color: #888892;
          }
          .ant-form-item {
            .ant-form-item-label {
              label {
                font-family: Nunito !important;
                font-style: normal;
                font-weight: bold;
                font-size: 16px;
                line-height: 22px;
                color: #454555;
              }
            }
            .ant-form-item-control {
              .ant-form-item-control-input {
                .ant-form-item-control-input-content {
                  .ant-btn-primary {
                    background: linear-gradient(
                      270deg,
                      #f99c96 0%,
                      #f1635d 100%
                    );
                    height: 48px;
                    @media (min-width: 992px) {
                      width: 100%;
                    }
                    @media (min-width: 768px) and (max-width: 991px) {
                      width: 100%;
                    }
                    @media (max-width: 414px) {
                      width: 100%;
                    }
                    box-shadow: 0px 7px 15px rgba(241, 99, 93, 0.259615);
                    border-radius: 28px;
                    font-family: Nunito;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 16px;
                    line-height: 22px;
                    text-align: center;
                    color: #ffffff;
                    border: 0px;
                  }
                  .ant-input-affix-wrapper {
                    padding: 0px 10px 0px 0px;
                    border: 1px solid #ecebed;
                    box-sizing: border-box;
                    box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
                    border-radius: 4px;
                    .ant-input {
                      border: 0px;
                      box-shadow: unset;
                    }
                  }
                  .ant-input {
                    background: #ffffff;
                    box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
                    border-radius: 4px;
                    height: 48px;
                    padding: 14px;
                    border: 1px solid #ecebed;

                    color: #454555;
                    &:focus {
                      border-color: #ecebed;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default Wrapper;