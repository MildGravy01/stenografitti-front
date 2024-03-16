import { StyledHeader } from "./styles";
import { useRootStore } from "../../contexts/RootStoreContext";
import { Dropdown, MenuProps } from "antd";
import { User } from "../User";
import { LogoutOutlined, PlusCircleOutlined, UnorderedListOutlined } from "@ant-design/icons";

export const Header = () => {
  const { authStore } = useRootStore();
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a href="/upload">
          <PlusCircleOutlined /> Новая стенограмма
        </a>
      ),
    },
    {
        key: '2',
        label: (
          <a href="/myOrders">
            <UnorderedListOutlined /> Мои стенограммы
          </a>
        ),
      },
      {
        key: '3',
        label: (
          <a  onClick={() => authStore.logout()}>
            <LogoutOutlined /> Выйти 
          </a>
        ),
      }
    ]
  return (
    <StyledHeader>
      <h1>Стенографист</h1>
      {authStore.isAuth &&
      <Dropdown menu={{items}}>
      <div className="userHolder">
           <User user={authStore.userName} />
      </div>
      </Dropdown>
      }
    </StyledHeader>
  );
};
