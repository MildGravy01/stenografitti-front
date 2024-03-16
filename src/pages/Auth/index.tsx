import { Button, Input } from "antd";
import { AuthWindow, InputHolder, PageWrapper, WindowHeader } from "./styles";
import { useState } from "react";
import { IAuthForm } from "./types";
import { useRootStore } from "../../contexts/RootStoreContext";

export const AuthPage = () => {
    const {authStore} = useRootStore();
    const [authForm, setAuthForm] = useState<IAuthForm>({email: 'johndoe@example.com', password: 'secret'});
    return(
    <PageWrapper>
        <AuthWindow>
                <WindowHeader>
                    <h3>Авторизация</h3>
                </WindowHeader>
                <InputHolder>
                   <Input placeholder="E-mail" value={authForm.email} onChange={(e) => setAuthForm({...authForm, email: e.target.value})}></Input>
                   <Input placeholder="Пароль" value={authForm.password} onChange={(e) => setAuthForm({...authForm, password: e.target.value})}></Input>
                  <div className="buttonHolder">
                  {/* <Button type="text" className="regButton">
                    Нужна регистрация?
                   </Button> */}
                  <Button type="primary" onClick={() => authStore.login(authForm.email, authForm.password)}>
                    Вход
                   </Button>
                  </div>
                </InputHolder>
        </AuthWindow>
    </PageWrapper>
    );
}