import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 70px;
  display: block;
  .confirm-payment {
    &__detail-room {
      display: flex;
      padding-left: 15px;
      padding-right: 15px;
      padding-bottom: 15px;
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
      color: #454555;
      font-size: 1em !important;
      font-weight: 700;
      margin: 0px !important;
      padding: 0px !important;
    }
    .divider {
      display: block;
      width: 100%;
      height: 8px;
      background: #eeeeef;
    }
  }
`;
