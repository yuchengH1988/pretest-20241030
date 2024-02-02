import { createContext, useEffect, useState } from 'react';
const initSetting = { ageRange: [0, 20], price: 0 };


export const SettingContext = createContext({
  settings: [],
  addToSetting: () => {},
  removeFromSetting: () => {},
  setPrice: () => {},
  setAgeGroup: () => {},
  isAgeOverLap: false,
  isFinished: false,
});


export const SettingProvider = ({ children }) => {
  const [settings, setSettings] = useState([{ ...initSetting }]);
  const [isAgeOverLap, setAgeOverLap] = useState(false);
  const [isFinished, setFinished] = useState(false);

  useEffect(() => {
    const result = getNumberIntervals(settings.map(({ ageRange }) => { return ageRange }));
    setAgeOverLap(Boolean(result.overlap.length));
    setFinished(
      (result.notInclude.length === 0) &&
      (settings.length > 1) &&
      (result.overlap.length === 0)
    );
  }, [settings]);
  const addToSetting = () => {
    setSettings([...settings, { ...initSetting }]);
  };
  const removeFromSetting = (index) => {
    settings.splice(index, 1)
    setSettings([...settings]);
  };
  const setPrice = (index, value) => {
    settings[index].price = value
    setSettings([...settings])
  };
  const setAgeGroup = (index, value) => {
    settings[index].ageRange = value
    setSettings([...settings])
  };
  const value = {
    settings,
    addToSetting,
    removeFromSetting,
    setPrice,
    setAgeGroup,
    isAgeOverLap,
    isFinished
  };
  return <SettingContext.Provider value={value}>
    {children}
  </SettingContext.Provider>;
}

function getNumberIntervals (array) {
  const result = {
    overlap: [],
    notInclude: []
  }
  const repeatSet = new Set();
  const showedSet = new Set();
  for (const [a, b] of array) {
    for (let i = a;i <= b;i++) {
      if (showedSet.has(i)) {
        repeatSet.add(i);
      } else {
        showedSet.add(i);
      }
    };
  };
  
  let isLastIncluded = undefined;
  let inputArray = [];
  for (let n = 0;n <= 20;n++) {
    if (showedSet.has(n) && !repeatSet.has(n)) continue;
    const [key, isIncluded] = repeatSet.has(n) ? ['overlap', true] : ['notInclude', false];

    if (inputArray.length === 0 || isLastIncluded !== isIncluded) {
      inputArray = [];
      result[key].push(inputArray);
      inputArray.push(n, n);
      isLastIncluded = isIncluded;
    } else {
      inputArray[1] = n;
    };
  };
  return result;
}

