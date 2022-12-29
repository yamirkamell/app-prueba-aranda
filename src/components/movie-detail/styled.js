import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons'; 

const Container = styled.SafeAreaView`
  flex: 1;
`;

const ContainerMain = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  width: 100%;
  height: 100%; 
`;

const ContainerHeader = styled.View`
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
  width: 80px;
  margin: 20px;
`;

const ContainerTitle = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 20px 0 10px 0;

`;

const IconHeader = styled(Ionicons)`
  margin-top: 2px;
`;

const TitleComponent = styled.Text`
  color: #ed7d31;
`;

const ContainerMovie = styled.View`
  flex-direction: column; 
  background-color: #fff;
  width: 90%;
  border-radius: 20px;
  border-width: 1px;
  border-color: #ed7d31;
  padding: 20px;
  margin-top: 10px;
`;

const FlatListContent = styled.FlatList`
  width: 90%;
  margin-bottom: 20px;
`;

const TitleMovie = styled.Text`
  color: #ed7d31;
`;

const ImageMovie = styled.Image`
  width: 130px;
  height: 180px; 
  align-self: center;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
`;

export {
  Container,
  ContainerMain,
  ContainerHeader,
  ContainerTitle,
  IconHeader,
  TitleComponent,
  ContainerMovie,
  FlatListContent,
  TitleMovie,
  ImageMovie
}

