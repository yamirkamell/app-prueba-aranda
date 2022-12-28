import styled from 'styled-components/native';

const ContainerComponent = styled.View`
  margin-top: 10px;
  height: 35px;
  flex-direction: row;
  align-items: center;
  border-style: solid;
  border-width: 1px;
  border-color: #ed7d31;
  border-radius: 25px;  
  padding: 10px;
  width: 100%;
`;

const Input = styled.TextInput`
  color: #ed7d31; 
  border: 0;
  outline: none;
  width: 75%;
`;

const ContainerIcon = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: -1px;
  height: 35px;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  background-color: #ed7d31;
  width: 15%;
`;

export {
  ContainerComponent,
  ContainerIcon,
  Input
};