import styled from "styled-components";

export const PageWrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
overflow-y: scroll;
`;
export const DocumentContainer = styled.div`
width: 70%;
display: flex;
background-color: #F6F6F6;
min-height: 300px;
flex-direction: column;
font-family: "Raleway";
font-size: 15px;
box-sizing: border-box;
gap: 10px;
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