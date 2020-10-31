import styled from "styled-components";

export const Wrapper = styled.div`
  .payment-list {
    &__item {
      padding: 15px;
      display: flex;
      justify-content: space-between;
      .text {
        display: block;
        img {
          width: 64px;
          height: 46px;
        }
      }
      .link {
        font-size: 24px;
        font-family: inherit;
        font-style: inherit;
        line-height: 40px;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        cursor: pointer;
        -webkit-user-select: auto;
        -moz-user-select: auto;
        -ms-user-select: auto;
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
        -webkit-text-decoration: underline;
        text-decoration: underline;
        border-radius: 4px;
        outline: none;
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
