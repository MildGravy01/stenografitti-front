import styled from "styled-components";
import AuthBackground from "../../assets/AuthBackground.png";

export const PageWrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
background-image: url(${AuthBackground});
background-size: cover;
`;

export const AuthWindow = styled.div`
background-color: #D9D9D9;
border-radius: 10px;
min-width: 150px;
min-height: 200px;
display: flex;
width: 30%;
flex-direction: column;
align-items: center;
gap: 20px;
`;

export const WindowHeader = styled.div`
background-color: #737373;
border-radius: 10px 10px 0px 0px;
height: 60px;
display: flex;
width: 100%;
justify-content: center;
align-items: center;
h3{
    font-family: "Raleway";
    margin: 0;
    font-size: 24px;
    color: white;
    font-weight: 200;
}
`;
export const InputHolder = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  .buttonHolder {
    padding-bottom: 20px;
    box-sizing: border-box;
    flex-direction: column;
    display: flex;
    gap: 10px;
  }
`;