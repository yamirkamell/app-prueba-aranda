import { 
  Container, 
  ContainerMain, 
  ContainerHeader, 
  IconHeader, 
  TitleComponent,
  ContainerMovie,
  TitleMovie,
  ImageMovie 
} from './styled';

const MovieDetail = ({navigation, route}) => {
  const data = route.params.data;

  return (
    <Container>
      <ContainerMain>
        <ContainerHeader onClick={() => {navigation.goBack()}}>
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
      </ContainerMain>
    </Container>
  );
}

export default MovieDetail;
