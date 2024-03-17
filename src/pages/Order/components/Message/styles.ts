import styled from "styled-components";

export const StyledMessage = styled.div<{isMine: boolean}>`
 background-color: ${({isMine}) => isMine ? "#7EBE74" : "#979797"};
 font-family: "Raleway";
 position: relative;
 border-radius: 20px;
 padding: 15px 5px;
 box-sizing: border-box;
 display: flex;
 min-height: 10px;
 max-width: 70%;
 font-size: 14px;
 justify-self: ${({isMine}) => isMine ? "right" : "left"};
 overflow-x: hidden;
 word-break: break-word;
 .date{
    position: absolute;
    font-size: 10px;
    ${({isMine}) => isMine ? "right: 5px;" : "left: 5px;"};
    bottom: -5px;
 }
`;