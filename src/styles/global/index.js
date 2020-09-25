import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

font-family: 'Nunito', sans-serif;

    .container {
        @media (min-width: 992px) {
            width: 720px;
        }
        @media (min-width: 768px) and (max-width: 991px) {
            width: 100%
        }
        margin-right: auto;
        margin-left: auto;
    }
    .slick-dots {
        
    }
`;
