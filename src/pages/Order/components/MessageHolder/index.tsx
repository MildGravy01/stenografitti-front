import { Message } from "../Message";
import { StyledBackground } from "./styles";
import { Button } from "antd";
import { IMessage } from "../../../../stores/MessageStore/types";

interface IMessageHolderProps{
    chat: IMessage[];
    handleSendMessage: (message: string) => void;
    isBusy: boolean;
}

export const MessageHolder = ({chat, handleSendMessage, isBusy}: IMessageHolderProps) => {

  return (
    <>
    <StyledBackground>
      {chat.map((message) => (
        <Message
          timestamp={message.timestamp}
          isMine={message.isMine}
        >
          {message.text}
        </Message>
      ))}
    </StyledBackground>
    <Button onClick={() => handleSendMessage('О чем был текст?')} disabled={isBusy}>О чем был текст?</Button>
    <Button onClick={() => handleSendMessage('Кто что сказал?')} disabled={isBusy}>Кто что сказал?</Button>
    <Button onClick={() => handleSendMessage('Какие были поручения?')} disabled={isBusy}>Какие были поручения?</Button>
    <Button onClick={() => handleSendMessage('Кто присутствовал на встрече?')} disabled={isBusy}>Кто присутствовал на встрече?</Button>
    </>
  );
};
