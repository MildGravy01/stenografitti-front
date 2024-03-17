import { TOrderStatus } from "src/stores/OrdersStore/types";
import styled from "styled-components";


export const OrderItemBackground = styled.div`
  width: 100%;
  background-color: #f2f2f2;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #ebeaea;
  .outerHolder {
    display: flex;
    width: 100%;
    align-items: center;
  }
  .innerHolder{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px;
    p {
        font-family: 'Raleway';
        font-size: 10px;
        padding: 10px 20px;
    }
  }
  .statusTag{
    font-family: 'Raleway';
    font-size: 15px;
  }
  transition: 0.5s all;
  &:hover{
    outline: 2px solid #D9D9D9;
    cursor: pointer;
  }
`;

