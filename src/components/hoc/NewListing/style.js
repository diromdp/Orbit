import styled from "styled-components";

export const Wrapper = styled.div`
  margin-bottom: 80px;
  .content-open {
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 20px;
    &__title {
      h3 {
        font-family: Nunito;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 25px;
        color: #454555;
      }
    }
    &__content {
      &-item {
        margin-bottom: 18px;
        background: #ffffff;
        box-shadow: 0px 7px 20px rgba(0, 0, 0, 0.08);
        border-radius: 12px;
        @media (min-width: 992px) {
          width: 320px;
          margin: 0 auto;
        }
        @media (min-width: 768px) and (max-width: 991px) {
          width: 320px;
          margin: 0 auto;
        }
        @media (max-width: 414px) {
        }
        img {
          width: 100%;
          border-top-right-radius: 16px;
          border-top-left-radius: 16px;
        }
        .desc {
          padding: 10px;
          @media (min-width: 992px) {
            margin-bottom: 18px;
          }
          @media (min-width: 768px) and (max-width: 991px) {
            margin-bottom: 18px;
          }
          @media (max-width: 414px) {
          }
          h2 {
            font-family: Nunito;
            font-style: normal;
            font-weight: bold;
            font-size: 18px;
            line-height: 25px;
            color: #454555;
          }
          p {
            font-family: Nunito;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 19px;
            color: #888892;
          }
          span {
            font-family: Nunito;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 19px;
            color: #888892;
          }
          .label-content {
            display: flex;
            padding-bottom: 10px;
            .label-item {
              background: #f7a085;
              border-radius: 12px;
              font-family: "Nunito";
              font-style: normal;
              font-weight: bold;
              font-size: 12px;
              line-height: 16px;
              display: flex;
              align-items: center;
              text-align: center;
              text-transform: uppercase;
              color: #ffffff;
              padding: 5px 10px;
              margin-right: 10px;
            }
          }
        }
      }
    }
  }
`;
