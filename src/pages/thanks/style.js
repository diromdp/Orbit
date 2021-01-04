import styled from "styled-components";

const Wrapper = styled.div`
text-align: center; 
.done-payment {
    position: fixed;
    bottom: 0px;
    padding: 10px;
    background: #fff;
    @media (min-width: 992px) {
    width: 720px;
    }
    @media (min-width: 768px) and (max-width: 991px) {
    width: 100%;
    }
    @media (max-width: 414px) {
    width: 100%;

    }
    .ant-btn {
        display: block;
        background: linear-gradient(270deg,#f99c96 0%,#f1635d 100%);
        box-shadow: 0px 7px 15px rgba(241,99,93,0.259615);
        border-radius: 10px;
        border-color: #f99c96;
        height: 40px;
        width: 100%;
    }
}
.success-payment {
    margin-top: 80px;
    padding: 15px;
    h1 {
        font-family: "Nunito";
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 25px;
        color: #454555;
        text-transform: uppercase;
    }
    h2 {
        font-family: "Nunito";
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 25px;
        color: #454555;
        text-transform: uppercase; 
        margin-bottom: 50px;
    }
    img {
        margin: auto;
        margin-bottom: 50px;
        width: auto;
        height: 100%;
        display: block;
    }
    p {
        font-family: "Nunito";
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 25px;
        color: #454555;
    }
    .btn-booking {
        border: 2px dashed;
        border-radius: 40px;
        padding: 10px;
        height: 50px;
        margin-top: 30px;
        font-family: "Nunito";
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 25px;
        color: #454555;
    }
    
}
`;
export default Wrapper;