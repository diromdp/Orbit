import syled from "styled-components";

export const Wrapper = syled.div`
    align-items: center;
    background-color: rgb(26, 26, 26);
    flex-direction: column;
    -webkit-box-align: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    position: absolute;
    width: 100%;
    .logo-footer {
        @media (min-width: 992px) {
            border-bottom: 1px solid rgb(255,255,255);
            padding-bottom: 32px;

        }
        @media (max-width: 414px) {
        }
        img {
            height: 50px;
            width: 108px;
            display: block;
        }
        flex-direction: row;
        padding-top: 40px;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        .ant-dropdown-trigger {
            background-color: rgb(0, 0, 0);
            border-color: rgb(255, 255, 255);
            border-radius: 50px;
            border-width: 1px;
            height: 40px;
            display: flex;
            width: 160px;
            img {
                height: 24px;
                width: 24px;
                border-radius: 50%;
                display: block;
                margin-right: 10px;
            }
            span {
                color: rgb(255, 255, 255);
                font-family: 'Mulish', sans-serif;
                font-size: 16px;
                font-style: normal;
                letter-spacing: normal;
                line-height: 28px;
            }
        }
    }
    .copyright {
        margin-top: 40px;
        margin-bottom: 40px;
        .copy-text {
            color: rgb(255, 255, 255);
            font-family: 'Mulish', sans-serif;
            font-size: 12px;
            font-style: normal;
            letter-spacing: normal;
            @media (max-width: 414px) {
                margin-bottom: 16px;
                margin-top: 36px;  
                display: block
            }
        }
        .copy-link {
            ul {
                display: flex;
                li {
                    color: rgb(255, 255, 255);
                    font-family: 'Mulish', sans-serif;
                    font-size: 12px;
                    font-style: normal;
                    letter-spacing: normal;
                    margin-right: 16px;
                    &:last-child {
                        margin-right: 0px;
                    }
                    a {
                        color: rgb(255, 255, 255);
                        font-family: 'Mulish', sans-serif;
                        font-size: 12px;
                        font-style: normal;
                        letter-spacing: normal;
                    }
                }
            }
        }
    }
    .list-footer {
        margin-top: 40px;   
        .menu-footer {
            @media (min-width: 992px) {
    
            }
            @media (max-width: 414px) {
                border-bottom: 1px solid rgb(255,255,255);
                padding-bottom: 26px;
                margin-bottom:26px;
            }
            ul {
                @media (min-width: 992px) {
                    display: flex;
                }
                @media (max-width: 414px) {
                    display: block;
                }
                li {
                    @media (min-width: 992px) {
                        margin-right: 40px;
                    }
                    @media (max-width: 414px) {
                        margin-bottom: 10px;
                    }
                    &:last-child {
                        margin: 0px;
                    }
                    a {
                        color: rgb(255, 255, 255);
                        font-family: 'Mulish', sans-serif;
                        font-size: 16px;
                        font-style: normal;
                        letter-spacing: normal;
                    }
                }
            }
        }
        .sosmed-footer {
            ul {
                display:flex;
                justify-content: flex-end;
                li {
                    margin-right: 24px;              
                    line-height: 30px;
                    span {
                        color: rgb(255, 255, 255);
                        font-family: 'Mulish', sans-serif;
                        font-size: 16px;
                        font-style: normal;
                        letter-spacing: normal;
                    }
                    &:fist-child {
                        margin-top: 40px;
                    }
                    &:last-child {
                        margin-right: 0px;
                    }
                }
                
            }
        }
    }
`;