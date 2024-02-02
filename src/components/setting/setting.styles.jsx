import styled from 'styled-components';

export const SettingContainer = styled.div`
  position: relative;
  padding: 15px 0;
  .title {
    color: #000;
    margin: 10px 0;
    font-weight: bolder;
  }
  .input_wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  .close_btn {
    position: absolute;
    top: 20px;
    right: 0px;
    color: #DE592E;
    font-weight: bold;
    cursor: pointer;
  }
`
