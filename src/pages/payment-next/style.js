import styled from "styled-components";

const Wrapper = styled.div`
  .payment-list {
    &__ins {
      .ant-collapse {
        border: 0px;
        .ant-collapse-item {
          background: #fff;
          .ant-collapse-header {
            font-family: Nunito;
            font-style: normal;
            font-weight: 600;
            line-height: 22px;
            font-size: 16px;
            color: #454555;
          }
          .ant-collapse-content {
            .ant-collapse-content-box {
              padding: 15px;
              ul {
                margin: 0;
                padding-left: 15px;
                list-style-type: decimal;
                li {
                  font-family: Nunito;
                  font-style: normal;
                  font-weight: 500;
                  line-height: 22px;
                  font-size: 14px;
                  color: #454555;
                }
              }
            }
          }
        }
      }
    }
    &__va {
      padding: 15px;
      text-align: center;
      h3 {
        font-family: Nunito;
        font-style: normal;
        font-weight: bold;
        line-height: 22px;
        font-size: 16px;
        margin-bottom: 10px;
        color: #454555;
      }
      .num-va {
        color: #ff5c75;
        font-size: 18px;
        font-family: Nunito;
        font-style: normal;
        font-weight: 600;
        margin-bottom: 10px;
      }
      .btn-va {
        .ant-btn {
          border: 1px solid #f1635d;
          height: 43px;
          padding: 4px 15px;
          font-size: 15px;
          border-radius: 2px;
          color: #f1635d;
          background: #fff;
          border-color: #f1635d;
          border-radius: 5px;
        }
      }
    }
  }
  .payment-btn {
    position: fixed;
    bottom: 0px;
    padding: 10px;
    background : #fff;
    @media (min-width: 992px) {
      width: 720px;
    }
    @media (min-width: 768px) and (max-width: 991px) {
      width: 100%;
    }
    @media (max-width: 414px) {
      width: 100%;

    }
    .ant-btn-primary {
      background: linear-gradient(270deg, #f99c96 0%, #f1635d 100%);
      box-shadow: 0px 7px 15px rgba(241, 99, 93, 0.259615);
      border-radius: 10px;
      border-color: #f99c96;
      height: 40px;
      width: 100%;
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
  .divider {
    display: block;
    width: 100%;
    height: 8px;
    background: #eeeeef;
  }
`;
export default Wrapper;