import { SettingContainer } from "./setting.styles";
import AgeGroupSelect from '../age-group-select/age-group-select.component'
import PriceInput from "../price-input/price-input.component";
import { useContext } from "react";
import { SettingContext } from "../../contexts/setting.context";

const Setting = ({ setting, index }) => {
  const { removeFromSetting } = useContext(SettingContext);
  const removeHandler = () => {
    removeFromSetting(index)
  }
  return (
    <SettingContainer>
      <div className="title">價格設定 - {index+1}</div>
      <div className="input_wrapper">
        <AgeGroupSelect ageRange={setting.ageRange} index={index} />
        <PriceInput index={index} price={setting.price} />
      </div>
      { (index !== 0) && (
        <div
          onClick={removeHandler}
          className="close_btn">
          ✖ 移除
        </div>
      )}
    </SettingContainer>
  )
}

export default Setting;