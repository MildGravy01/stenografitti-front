import styled from "styled-components";

export const PageWrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
`;
export const DocumentContainer = styled.div`
width: 70%;
display: flex;
background-color: #F6F6F6;
min-height: 300px;
height: max-content;
flex-direction: column;
font-family: "Raleway";
font-size: 15px;
box-sizing: border-box;
gap: 10px;
margin-top: 10px;
pre{
    width: 100%;
    white-space: pre-wrap; 
    padding: 10px 20px;
    box-sizing: border-box;
}
p{
    margin: 0;
    box-sizing: border-box;
    padding: 5px 20px;
}
.loadingHolder{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
}
`;

export const DocumentHeader = styled.div`
 background-color: #D0D0D0;
 display: flex;
 align-items: center;
 width: 100%;
 min-height: 70px;
 border-radius: 10px 10px 0px 0px;
 padding: 5px 20px;
 box-sizing: border-box;
 justify-content: space-between;
`;