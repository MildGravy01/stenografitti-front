import { StyledMessage } from "./styles";
import {format} from 'date-fns';
export const Message = ({
  children,
  isMine = false,
  timestamp,
}: {
  children: string;
  isMine?: boolean;
  timestamp: string;
}) => {
  const messageDate = new Date(timestamp);
  console.log("MessageDate", messageDate);
  return <StyledMessage isMine={isMine} className="message">{children}<p className="date">{`${format(messageDate,'HH:ss')}`}</p></StyledMessage>;
};
