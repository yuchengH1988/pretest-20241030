import { useContext } from 'react';
import { SettingContext } from '../../contexts/setting.context';
import { SettingListContainer } from "./setting-list.styles";
import Setting from "../setting/setting.component";

const SettingList = () => {
  const { settings } = useContext(SettingContext);

  return (
    <SettingListContainer>
      { settings && (
        settings.map((setting, index) => {
          return (
            <Setting setting={setting} key={index} index={index} />
          );
        })
      )}
    </SettingListContainer>
  )
}

export default SettingList;
