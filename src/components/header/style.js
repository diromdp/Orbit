import styled from "styled-components";

export const Wrapper = styled.div`
  height: 88px;
  left: 0px;
  top: 0px;
  background: #262c7c;
  width: 100%;
  padding: 15px;
  .brand-web {
    a {
      img {
        width: 152px;
        height: 54px;
      }
      &:hover {
        text-decoration: none;
      }
    }
  }
`;

export const Nav = styled.div`
  padding-top: 15px;
  ul {
    display: flex;
    justify-content: flex-end;
    padding: 0px;
    .list-item {
      margin-right: 36px;
      &:last-child {
        margin-right: 0px;
      }
      a {
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        letter-spacing: 0.2px;
        color: #bec1e0;
      }
    }
  }
`;
