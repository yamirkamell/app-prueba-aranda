import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons'; 
import { Video } from 'expo-av';

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

const ContainerHeader = styled.Pressable`
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
  width: 80px;
  margin: 20px;
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

const ContainerVideo = styled.View`
  width: 100%;
  align-items: center;
`;

const VideoComponent = styled(Video)`
  width: 90%;
  margin-top: 10px;
  height: 200px;
  border-radius: 10px;
`;

export {
  Container,
  ContainerMain,
  ContainerHeader,
  IconHeader,
  TitleComponent,
  ContainerMovie,
  TitleMovie,
  ImageMovie,
  ContainerVideo,
  VideoComponent
}
