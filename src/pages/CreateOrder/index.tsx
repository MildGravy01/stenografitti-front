import { Button, Input, message, Result, Spin, Upload, UploadFile, UploadProps } from "antd";
import { useRootStore } from "../../contexts/RootStoreContext";
import { PageWrapper } from "./styles";
import { useState } from "react";
import { RcFile } from "antd/es/upload";
import { observer } from "mobx-react";

export const CreateOrderPage = observer(() => {
  const { ordersStore } = useRootStore();
  const [fileState, setFile] = useState<RcFile | undefined>(undefined);
  const [nameState, setName] = useState<string| undefined>(undefined);
  const { Dragger } = Upload;
  const props: UploadProps = {
    multiple: false,
    accept: ".mp3,.mp4",
    showUploadList: true,
    maxCount: 1,
    customRequest: () => true,
    onChange(info) {
      setFile(info.file.originFileObj);
    },
  };

  const handleSubmit =() => {
    if(!nameState || !fileState){
        message.error("Вы не заполнили все поля");
        return;
    }
    if(ordersStore.isUploading){
        message.error("Запрос в процессе выполнения");
        return;
    }
    ordersStore.createOrder(nameState, fileState);
  }

  return (
    <PageWrapper>
      <h3>
        Я готов составить стенограмму, введите название и загрузите ваш файл
        сюда👇
      </h3>
      <div className="inputHolder">
        <Input placeholder="Как назовем эту стенограмму?" value={nameState} required onChange={(e) => setName(e.target.value)} />
        {fileState ? (
          <Result
            status="success"
            title="Файл готов к загрузке"
            subTitle={fileState.name}
            extra={[
              <Button key={"1"} onClick={() => setFile(undefined)}>Загрузить другой</Button>,
            ]}
          />
        ) : (
          <Dragger {...props}>
            <p>Щелкните или перетащите файл в эту область, чтобы загрузить</p>
            <p>Вы можете загрузить только один файл.</p>
            <p>Допустимый формат: .mp3, .mp4</p>
          </Dragger>
        )}
        {ordersStore.isUploading ? <Spin size="large"/> : <Button type="primary" onClick={() => handleSubmit()} disabled={ordersStore.isUploading}>Далее</Button> }
      </div>
    </PageWrapper>
  );
});
