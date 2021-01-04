import styled from "styled-components";

const Wrapper = styled.div`
padding: 15px;
.clear {
    text-align: right;
    .ant-btn-link {
        span {
            font-family: "Nunito";
            font-style: normal;
            font-weight: bold;
            font-size: 15px;
            line-height: 25px;
            color: #454555;
        }
    }
}
.list {
    .date {
        span {
            font-family: "Nunito";
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 25px;
            color: #454555;
        }
    }
    .list-item {
        background-color: rgb(255, 255, 255) !important;
        box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px !important;
        padding: 10px;
        margin-top: 10px;
        border: 4px;
        margin-bottom: 10px;
        a {
            font-family: "Nunito";
            font-style: normal;
            font-weight: 500;
            font-size: 13px;
            line-height: 25px;
            color: #454555;
        }
    }
}
`;
export default Wrapper;