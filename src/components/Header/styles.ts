import styled from "styled-components";

export const StyledHeader = styled.div`
    h1{
        font-family: "Raleway";
        font-weight: 300;
        font-size: 27px;
        color: white;
        margin: 0;
    }
    .userHolder{
        position: absolute;
        right: 10px;
    }
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(90deg, rgba(0,145,165,1) 20%, rgba(0,195,207,1) 48%, rgba(17,174,184,1) 100%);
    width: 100%;
    box-sizing: border-box;
    height: 60px;
`;
