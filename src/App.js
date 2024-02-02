import { AppContainer } from './App.styles';
import AddSetting from './components/add-setting/add-setting.component';
import SettingList from './components/setting-list/setting-list.component';
function App() {
  return (
    <AppContainer>
      <SettingList/>
      <AddSetting />
    </AppContainer>
  );
}

export default App;
