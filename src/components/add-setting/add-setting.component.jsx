import { useContext } from 'react';
import { SettingContext } from '../../contexts/setting.context';

import { AddSettingContainer } from "./add-setting.styles";
const AddSetting = () => {
  const { addToSetting, isFinished } = useContext(SettingContext);
  return (
    <>
      {
        !isFinished && (
          <AddSettingContainer
            onClick={addToSetting} >
            ＋新增價格設定
          </AddSettingContainer>
        )
      }
    </>
  )
}

export default AddSetting;