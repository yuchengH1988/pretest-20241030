import { useContext } from "react";
import { SettingContext } from "../../contexts/setting.context";
import { PriceInputContainer } from "./price-input.styles";
import { ErrorMsgContainer } from "../error-msg/error-msg.styles";

const PriceInput = ({ index, price }) => {
  const { setPrice } = useContext(SettingContext)
  const inputHandler = (event) => {
    setPrice(index, event.target.value.replace(/,/g, ""))
  }
  return (
    <PriceInputContainer>
      <div className="input_title">入住費用 (每人每晚)</div>
      <div className="price_input_wrapper">
        <div className="coin">TWD</div>
        <input
          type="text"
          placeholder="請輸入費用"
          value={addComma(price)}
          pattern="([0-9]+.{0,1}[0-9]*,{0,1})*[0-9]"
          onChange={inputHandler}
          />
        { price === '' && (
          <ErrorMsgContainer>不可以為空白</ErrorMsgContainer>
        )}
      </div>
      <div className="notes">輸入 0 表示免費</div>
    </PriceInputContainer>
  )
}
export default PriceInput;

const addComma = (number = 0) => {
  if (!number) return number
  const commaRegex = /(?<!\.\d*)(\d)(?=(?:\d{3})+\b)/g
  const fixInputRegex = /(?!\.)\D|^[0](?=\d)|(?<=\.\d*)\./g
  return number.replace(fixInputRegex, "").replace(commaRegex, "$1,")
}
