import styled from 'styled-components';

export const AgeGroupContainer = styled.div`
  display: block;
  color: #999;
  font-weight: bolder;
  margin: 10px 0;
  .age_input_wrapper {
    position: relative;
    display: flex;
    line-height: 2rem;
    margin: 10px 0 25px;
    > select:first-child {
      border-radius: 5px 0 0 5px;
    }
    > select:last-child {
      border-radius: 0 5px 5px 0;
    }
    > select {
      padding: 0 5px;
      flex-grow: 1;
      border: 1px solid #DE592E;
      color: #444;
      option {
        padding: none;
      }
      &:focus {
        outline: 0;
      }
    }
    .dash {
      width: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #999;
      border-left: none;
      border-right: none;
      padding-bottom: 5px;
      background-color: #eee;
    }
  }
`
