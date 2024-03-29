import { Avatar } from "antd";
import { StyledBackground } from "./style";
import { UserOutlined } from "@ant-design/icons";

export const User = ({ user }: { user?: string }) => {
  return (
    <StyledBackground>
      <Avatar size={44} icon={<UserOutlined />} />
          <p>{user}</p>
          <p className="priority">Priority</p>
    </StyledBackground>
  );
};
