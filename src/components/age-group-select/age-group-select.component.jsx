import { useContext } from "react";
import { SettingContext } from "../../contexts/setting.context";
import { AgeGroupContainer } from "./age-group-select.styles";
import { ErrorMsgContainer } from "../error-msg/error-msg.styles";

const numberArray = Array(21).join().split(',').map(function () { return this.i++ }, { i: 0 });


const AgeGroupSelect = ({ ageRange, index }) => {
  let [begin, end] = ageRange;

  // 處理儲存
  const { setAgeGroup, isAgeOverLap } = useContext(SettingContext);
  const inputBeginHandler = (event) => {
    begin = parseInt(event.target.value);
    setAgeGroupHandler();
  }
  const inputEndHandler = (event) => {
    end = parseInt(event.target.value);
    setAgeGroupHandler();
  }
  const setAgeGroupHandler = () => {
    if (begin === '' || end === '' ) return;
    setAgeGroup(index, [begin, end]);
  }

  return (
    <AgeGroupContainer>
      <div className="input_title">年齡</div>
      <div className="age_input_wrapper">
        <select value={begin} onChange={inputBeginHandler}>
        {
            numberArray.filter(number => number <= end).map((value, index) => {
            return (
              <option value={value} key={index}>
                {value}
                </option>
            )
          })
        }
        </select>
        <div className="dash">~</div>
        <select value={end} onChange={inputEndHandler}>
          {
            numberArray.filter(number => number >= begin).map((value, index) => {
              return (
                <option value={value} key={index}>
                  {value}
                </option>
              )
            })
          }
        </select>
        {isAgeOverLap && (
          <ErrorMsgContainer>年齡區間不可重疊</ErrorMsgContainer>
        )}
      </div>
    </AgeGroupContainer>
  )
};
export default AgeGroupSelect;
