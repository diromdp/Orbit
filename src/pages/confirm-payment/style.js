import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 60px;
  display: block;
  .confirm-payment {
    &__detail-room {
      display: flex;
      padding: 15px;
      .img {
        display: block;
        width: 112px;
        height: 112px;
        border-radius: 15px;
        img {
          border-radius: 15px;
          width: 112px;
          height: 112px;
        }
      }
      .content {
        margin-left: 13px;
        &_exp {
          display: flex;
          div {
            margin-right: 15px;
            color: #454555;
            font-size: 12px;
            line-height: 16px;
            max-height: 16px;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
            &:last-child {
              margin-right: 0px;
            }
          }
        }
        h3 {
          font-family: Nunito;
          font-size: 14px;
          line-height: 18px;
          max-height: 36px;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          word-break: break-word;
          overflow: hidden;
          font-weight: 600;
        }
      }
    }
    &__user {
      padding: 15px;
      h2 {
        font-family: Nunito;
        color: #454555;
        font-size: 1.2em;
        font-weight: 700;
        margin: 0px;
        padding: 0px;
      }

      .item {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
        .item-text {
          &_t {
            font-family: Nunito;
            color: #454555;
            font-size: 1em;
            font-weight: 800;
          }
          &_d {
            color: #454555;
            font-size: 14px;
            line-height: 16px;
            max-height: 16px;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        }
        .item-link {
          a {
            font-size: 1em;
            font-family: inherit;
            font-style: inherit;
            line-height: inherit;
            appearance: none;
            cursor: pointer;
            user-select: auto;
            color: rgb(34, 34, 34);
            font-weight: 600;
            font-variant: inherit;
            background: transparent;
            border-width: 0px;
            border-style: initial;
            border-color: initial;
            border-image: initial;
            margin: 0px;
            padding: 0px;
            text-decoration: underline;
            border-radius: 4px;
            outline: none;
          }
        }
      }
    }
    &__price {
      padding: 15px;
      h2 {
        font-family: Nunito;
        color: #454555;
        font-size: 1.2em;
        font-weight: 700;
        margin: 0px;
        padding: 0px;
      }

      .item {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
        color: #454555;
        font-size: 14px;
        line-height: 16px;
      }
      .item-bold {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
        font-family: Nunito;
        color: #454555;
        font-size: 1em;
        font-weight: 700;
        line-height: 16px;
      }
    }
    .btn-payment {
      margin-top: 5px;
      padding: 15px;
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
  }
`;
