import syled from "styled-components";

export const Wrapper = syled.div`
font-family: 'Mulish', sans-serif;
   background: #fff;
  .navbar-burger {
    @media (min-width: 992px) {
        display: none;
    }
    @media (min-width: 768px) and (max-width: 991px) {
        display: block;
    }
    @media (max-width: 414px) {
        display: block;
    }
  }
  .navbar {
    background: #fff;
    padding: 15px;
    .nav-item {
        .nav-link {
            color: #000;
            padding-left: 18px;
            padding-right: 18px;
            text-decoration: none;
            font-size: 20px;
            font-family: 'Mulish', sans-serif;

        }
    }
    .btn-nav-mobile {
        padding: 12px 26px;
        justify-content: center;
        align-items: center;
        border: 1px solid #646464;
        border-radius: 30px;
        font-family: 'Mulish', sans-serif;
        font-weight: 600;
        color: #000;
        text-decoration: none;
        width: 90px;
        @media (min-width: 992px) {
            display: none;
        }
        @media (max-width: 414px) {
            display: block;
        }
        text-align: center;
        &:hover {
            background-color: #ebebeb;
            -webkit-transition: .4s;
            transition: .4s;
            
        }
    }
    .btn-nav {
        padding: 12px 26px;
        justify-content: center;
        align-items: center;
        border: 1px solid #646464;
        border-radius: 30px;
        font-family: 'Mulish', sans-serif;
        font-weight: 600;
        color: #000;
        text-decoration: none;
        width: 160px;
        @media (min-width: 992px) {
            display: block;
        }
        @media (max-width: 414px) {
            display: none;
        }
        text-align: center;
        &:hover {
            background-color: #ebebeb;
            -webkit-transition: .4s;
            transition: .4s;
            
        }
    }
    .navbar-brand {
        @media (max-width: 414px) {
            margin: 0 auto;
        }
        img {
            @media (min-width: 992px) {
                width: 108px;
                height: 100%;
            }
            @media (min-width: 768px) and (max-width: 991px) {
                height: 35px;
                width: 135px;
            }
            @media (max-width: 414px) {
                height: 35px;
                width: 135px;
            }
            
        }
    }
  }
`;
