import styled from 'styled-components';

export const PriceInputContainer = styled.div`
  display: block;
  color: #999;
  font-weight: bolder;
  margin: 10px 0;
  .price_input_wrapper {
    display: flex;
    position: relative;
    line-height: 2rem;
    margin: 10px 0 32px;
    
    > input {
      flex-grow: 1;
      border: 1px solid #DE592E;
      color: #444;
      border-radius: 0 5px 5px 0;
      padding: 0 10px;
      option {
        padding: none;
      }
      &:focus {
        outline: 0;
      }
    }
    .coin {
      width: 50px;
      text-align: center;
      border: 1px solid #999;
      padding: 2.5px;
      border-radius: 5px 0 0 5px;
      border-right: 0;
      background-color: #eee;
    }
  }
  .notes {
    font-size: 14px;
    text-align: right;
  }
  
`
