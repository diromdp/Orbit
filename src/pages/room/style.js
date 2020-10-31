import styled from "styled-components";

export const Wrapper = styled.div`
  .slick-dots {
    bottom: 25px;
  }

  .content-room {
    margin-bottom: 75px;
    &__title {
      padding: 15px;
      border-bottom: 2px solid #eeeeef;
      h1 {
        @media (min-width: 992px) {
          font-size: 24px;
        }
        @media (min-width: 768px) and (max-width: 991px) {
          font-size: 20px;
        }
        @media (max-width: 414px) {
          font-size: 16px;
        }
        color: #454555;
        font-family: Nunito;
        font-style: normal;
        font-weight: bold;
        margin: 0px;
        padding: 0px;
      }
      &-detail {
        display: flex;
        flex: 1 0;
        flex-wrap: wrap;
        span {
          font-family: Nunito;
          font-style: normal;
          font-weight: normal;
          color: #454555;
          @media (min-width: 992px) {
            font-size: 20px;
          }
          @media (min-width: 768px) and (max-width: 991px) {
            font-size: 18px;
          }
          @media (max-width: 414px) {
            font-size: 14px;
          }
        }
        .dots {
          margin-left: 5px;
          margin-right: 5px;
        }
        a {
          font-family: Nunito;
          font-style: normal;
          font-weight: normal;
          color: #454555;
          text-decoration: underline;
          @media (min-width: 992px) {
            font-size: 20px;
          }
          @media (min-width: 768px) and (max-width: 991px) {
            font-size: 18px;
          }
          @media (max-width: 414px) {
            font-size: 14px;
          }
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
    &__users {
      &-name {
        padding: 15px;
        justify-content: space-between;
        display: flex;
        .name {
          color: rgb(34, 34, 34);
          font-family: Nunito;
          font-weight: 600;
          width: 70%;
          line-height: 20px;
          margin-bottom: 4px;
          @media (min-width: 992px) {
            font-size: 24px;
          }
          @media (min-width: 768px) and (max-width: 991px) {
            font-size: 20px;
          }
          @media (max-width: 414px) {
            font-size: 16px;
          }
        }
        img {
          display: block;
          width: 48px;
          border-radius: 50%;
          height: 48px;
        }
      }
      &-fasili {
        padding: 0px 15px 15px 15px;
        border-bottom: 2px solid #eeeeef;
        ul {
          display: flex;
          margin: 0px;
          li {
            margin-right: 5px;
            &:last-child {
              margin-right: 0px;ss
            }
          }
        }
      }
      &-moredetail {
        border-bottom: 2px solid #eeeeef;
        .more {
          padding: 15px;
          h2 {
            font-family: Nunito;
            font-style: normal;
            font-weight: bold;
            line-height: 22px;
            text-transform: uppercase;
            color: #454555;
            @media (min-width: 992px) {
              font-size: 24px;
            }
            @media (min-width: 768px) and (max-width: 991px) {
              font-size: 20px;
            }
            @media (max-width: 414px) {
              font-size: 16px;
            }
          }
          .desc {
            p {
              font-family: Nunito;
              font-style: normal;
              font-weight: normal;
  
              text-align: justify;
              color: #888892;
              @media (min-width: 992px) {
                font-size: 20px;
              }
              @media (min-width: 768px) and (max-width: 991px) {
                font-size: 18px;
              }
              @media (max-width: 414px) {
                font-size: 14px;
              }
            }
            h4 {
              font-family: Nunito;
              font-style: normal;
              font-weight: 700;
  
              @media (min-width: 992px) {
                font-size: 20px;
              }
              @media (min-width: 768px) and (max-width: 991px) {
                font-size: 18px;
              }
              @media (max-width: 414px) {
                font-size: 14px;
              }
            }
            span {
              font-family: Nunito;
              font-style: normal;
              font-weight: normal;
  
              color: #888892;
              text-align: justify;
              @media (min-width: 992px) {
                font-size: 20px;
              }
              @media (min-width: 768px) and (max-width: 991px) {
                font-size: 18px;
              }
              @media (max-width: 414px) {
                font-size: 14px;
              }
            }
            ol {
              list-style-type: circle;
              margin: 0px;
              padding-left: 20px;
              li {
                font-family: Nunito;
                font-style: normal;
                font-weight: normal;
    
                color: #888892;
                @media (min-width: 992px) {
                  font-size: 20px;
                }
                @media (min-width: 768px) and (max-width: 991px) {
                  font-size: 18px;
                }
                @media (max-width: 414px) {
                  font-size: 14px;
                }
              }
            }
          }
        }
      }
      &-contact {
        .btn-contact {
          padding: 15px;
          a {
            cursor: pointer;
            display: inline-block;
            margin: 0px;
            position: relative;
            text-align: center;
            text-decoration: none;
            -ms-touch-action: manipulation;
            touch-action: manipulation;
            font-size: 16px;
            line-height: 20px;
            font-weight: 600;
            border-radius: 8px;
            border-width: 1px;
            border-style: solid;
            outline: none;
            padding-top: 13px;
            padding-bottom: 13px;
            padding-left: 23px;
            padding-right: 23px;
            -webkit-transition: box-shadow 0.2s ease, -webkit-transform 0.1s ease, transform 0.1s ease;
            -moz-transition: box-shadow 0.2s ease, transform 0.1s ease;
            transition: box-shadow 0.2s ease, -ms-transform 0.1s ease, -webkit-transform 0.1s ease, transform 0.1s ease;
            border-color: #222222;
            background: #FFFFFF;
            color: #222222;
            width: 100%;
          }            
        }
        .content {
          display: flex;
          justify-content: space-between;
          .img-profile {
            padding-right: 15px;
            padding-top: 15px;
            img {
              display: block;
              width: 48px;
              border-radius: 50%;
              height: 48px;s
            }        
          }
          .text-contact {
            padding-left: 15px;
            padding-top: 15px;
            h2 {
              font-family: Nunito;
              font-style: normal;
              font-weight: bold;
              line-height: 22px;
              color: #454555;
              @media (min-width: 992px) {
                font-size: 24px;
              }
              @media (min-width: 768px) and (max-width: 991px) {
                font-size: 20px;
              }
              @media (max-width: 414px) {
                font-size: 16px;
              }
            }
            &__join {
              font-weight: 400 ;
              font-size: 12px;
              @media (min-width: 992px) {
                font-size: 16px;
              }
              @media (min-width: 768px) and (max-width: 991px) {
                font-size: 14px;
              }
              @media (max-width: 414px) {
                font-size: 12px;
              }
              line-height: 18px;
              padding-top: 8px;
              display: block;
            }
            &__very {
              font-weight: 300;
              line-height: 18px;
              padding-top: 8px;
              display: block;
              strong {
                font-weight: 300;
              }
              @media (min-width: 992px) {
                font-size: 20px;
              }
              @media (min-width: 768px) and (max-width: 991px) {
                font-size: 18px;
              }
              @media (max-width: 414px) {
                font-size: 14px;
              }
              .las {
                color: #FF5C75;
                margin-right: 5px;
              }
            }
            
          }
        }
      }
    }
  }
`;
