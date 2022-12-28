import styled from 'styled-components/native';
import { MaterialIcons  } from '@expo/vector-icons'; 

const Container = styled.SafeAreaView`
  flex: 1;
`;

const ContainerScrollView = styled.ScrollView`
  flex: 1;
  flex-direction: column;
  background-color: #fff;
  width: 100%;
  height: 100%; 
`;

const ContainerHeader = styled.View`
  width: 90%;
  margin-top: 20px;
`;

const ContainerTitle = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 20px 0 10px 0;

`;

const IconHeader = styled(MaterialIcons)`
  margin-left: 10px;
  margin-top: 2px;
`;

const TitleComponent = styled.Text`
  font-size: 24px;
  color: #ed7d31;
`;

const ContainerMovie = styled.View`
  flex-direction: row; 
  justify-content: space-around; 
  align-items: center;
  background-color: #fff;
  width: 90%;
  height: 70px; 
  border-radius: 20px;
  border-width: 1px;
  border-color: #ed7d31;
  padding: 20px;
  margin-top: 10px;
`;

export {
  Container,
  ContainerScrollView,
  ContainerHeader,
  ContainerTitle,
  IconHeader,
  TitleComponent,
  ContainerMovie
}

