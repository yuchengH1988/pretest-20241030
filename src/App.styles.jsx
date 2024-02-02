import styled from 'styled-components';

export const AppContainer = styled.div`
  max-width: 90vw;
  margin: 0 auto 50px;

  @media (min-width: 640px) {
    max-width: 80vw;
  }
  @media (min-width: 800px) {
    max-width: 600px;
  }
`
