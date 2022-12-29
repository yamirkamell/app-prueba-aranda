import { useRef } from 'react';
import { 
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
} from './styled';

const MovieDetail = ({navigation, route}) => {
  const data = route.params.data;
  const video = useRef(null);

  return (
    <Container>
      <ContainerMain>
        <ContainerHeader onPress={() => {navigation.goBack()}}>
          <IconHeader name="chevron-back" size={24} color="#ed7d31" />
          <TitleComponent>back</TitleComponent>
        </ContainerHeader>
        <ContainerMovie>
          <TitleMovie>Titulo: {data.title}</TitleMovie>
          <ImageMovie
          source={{uri: data.image}}
          />
          <TitleMovie>Descripción: {data.description !== undefined ? data.description : 'Descripción tendencias'}</TitleMovie>
        </ContainerMovie>
        <ContainerVideo>
          <VideoComponent
            ref={video}
            source={{
              uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
            }}
            useNativeControls
            resizeMode="contain"
            isLooping={true}
          />
        </ContainerVideo>
      </ContainerMain>
    </Container>
  );
}

export default MovieDetail;
