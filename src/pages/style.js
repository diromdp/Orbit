import styled from "styled-components";

const Wrapper = styled.div`
main {
    margin-top: 140px;
    background: url('/img/bg-login-desktop.webp');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
    @media (min-width: 992px) {
        height: 700px;
    }
    @media (max-width: 414px) {
    }
    display: block;
}
.content-desc {
    @media (min-width: 992px) {
    }
    @media (max-width: 414px) {
        margin-top: 20px;
        height: 620px;
    }
    &__item {
        border-bottom: 1px solid rgb(230, 230, 230);
        padding-top: 32px;
        padding-bottom: 32px;
        display: flex;
        .item-img {
            margin-right: 24px;
            height: 72px;
            width: 72px;
            img {
                height: 72px;
                width: 72px;
            }
        }
        .item-content {
            h4 {
                color: rgb(26, 26, 26);
                font-size: 16px;
                font-style: normal;
                letter-spacing: normal;
                margin-bottom: 5px;
                font-weight: 600;
                font-family: 'Mulish', sans-serif;
            }
            p {
                font-style: normal;
                letter-spacing: normal;
                color: rgb(100, 100, 100);
                font-size: 16px;
                line-height: 24px;
                font-family: 'Mulish', sans-serif;
            }
        }
    }
}
.content-login {
    .card-login {
        box-shadow: rgba(32,32,35,0.15) 0px 3px 15px;
        max-width: 448px;
        border-radius: 16px;
        padding: 40px 48px;
        background: #fff;
        float: right;
        width: 100%;
        .desc {
            h1 {
                font-size: 34px;
                font-weight: 700;
                font-family: 'Mulish', sans-serif;
                margin-bottom: 20px;
                color: #000;
                text-align: center;
            }
            .text-login {
                font-size: 24px;
                margin-bottom: 44px;
                color: #000;
                font-weight: 500;
                font-family: 'Mulish', sans-serif;
                @media (max-width: 414px) {
                    text-align: center;
                }
            }
            .input-content {
                
            }
            label {
                color: rgb(170, 170, 170);
                font-family: 'Mulish', sans-serif;
                font-size: 16px;
                font-weight: 500;
                position: absolute;
                top: 0;
            }
            div.input-login {
                margin-bottom: 20px
            }
            
            input.input-login {
                border-bottom-color: rgb(100, 100, 100);
                border-bottom-width: 1px;
                color: rgb(0, 0, 0);
                font-family: 'Mulish', sans-serif;
                font-size: 16px;
                outline-color: rgba(255, 255, 255, 0.1);
                outline-width: 0px;
                padding-bottom: 6px;
                padding-top: 6px;
                outline: 0px;
                &:focus {
                    outline: 0px !important;
                }
            }
            
        }
        .content-sosmed {
            text-align: center;
            span {
                color: rgb(26, 26, 26);
                font-family: 'Mulish', sans-serif;
                font-size: 18px;
                margin-bottom: 24px;
                font-weight: 600;
                text-align: center;
                display: block;
            }
            .list {
                display: flex;
                justify-content: center;
                .list-item {
                    align-items: center;
                    background-color: rgb(255, 255, 255);
                    border-radius: 32px;
                    box-shadow: rgba(32, 32, 35, 0.15) 0px 3px 15px;
                    height: 48px;
                    justify-content: center;
                    margin-right: 16px;
                    cursor: pointer;
                    margin-left: 16px;
                    width: 48px;
                    -webkit-box-align: center;
                    -webkit-box-pack: center;
                    img {
                        height: 24px;
                        width: 24px;
                        display:block;
                        margin: 0 auto;
                        margin-top: 13px;
                    }
                }
            }
        }
        .btn-login {
            margin-bottom: 48px;
            margin-top: 24px;

            button {
                align-items: center;
                background-color: rgb(255, 76, 71);
                border-radius: 24px;
                height: 48px;
                justify-content: center;
                margin-bottom: 48px;
                margin-top: 24px;
                -webkit-box-align: center;
                -webkit-box-pack: center;
                color: rgb(255, 255, 255);
                font-family: 'Mulish', sans-serif;
                font-size: 18px;
                font-weight: 600;
                text-align: center;
                border: 0px;
                width: 100%;
            }
        }
    }
}
`;
export default Wrapper;