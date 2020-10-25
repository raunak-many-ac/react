import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 22.5%;
  margin-right: 6em;
  width: 60%;
  height: 100%;

  @media (max-width: 1400px){
    width: 70%;
    margin-right: 0em;
  }

  @media (max-width: 768px){
    margin-left: 5%;
    margin-right: 0em;
    width: 80%;
  }
`;

export const DetailContainer = styled.div`
  display: flex;
`;

