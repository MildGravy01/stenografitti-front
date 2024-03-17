import styled from "styled-components";

export const StyledBackground = styled.div`
display: grid;
flex-direction: column;
min-height: 100px;
padding: 10px;
overflow-y: scroll;
gap: 50px;
.messageRow{
    width: 100%;
    position: relative;
    height: max-content;
}
`;