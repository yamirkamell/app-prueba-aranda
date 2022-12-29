import { ActivityIndicator } from 'react-native';
import InputComponent from './components/input-component';
import MoviesServices from '../../services/movies';
import { 
  Container, 
  ContainerMain, 
  ContainerHeader, 
  ContainerTitle, 
  ContainerMovie, 
  IconHeader, 
  TitleComponent, 
  FlatListContent, 
  TitleMovie, 
  ImageMovie 
} from './styled';
import { MaterialIcons } from '@expo/vector-icons';

const Movies = ({navigation}) => {
  const {
    search,
    setSearch,
    movies,
    moviesFilter,
    loading,
    LoadMoreItems
  } = MoviesServices();

  const onPressMovieDetail = (item) => {
    navigation.navigate("MovieDetail", {data:item});
    console.log('hello');
  }

  const renderItem = ({item}) => {
    return (
      <ContainerMovie onPress={() => {onPressMovieDetail(item)}}>
        <TitleMovie>{item.title}</TitleMovie>
        <ImageMovie
        source={{uri: item.image}}
         />
      </ContainerMovie>
    )
  }

  const renderLoader = () => {
    return (
      <View>
        <ActivityIndicator size="large" color="#ed7d31" />
      </View>
    )
  }

  return (
    <Container>
      {loading ? <ActivityIndicator size="large" color="#ed7d31" />
      :
      <ContainerMain>
        <ContainerHeader>
          <InputComponent placeholder='Search' search={search} setSearch={setSearch}/>
          {movies.length !== 0 ? 
            <ContainerTitle>
              <TitleComponent>Tendencias</TitleComponent>
              <IconHeader name="stars" size={25} color="#ed7d31" />
            </ContainerTitle>
          : null
          }
        </ContainerHeader>
          {movies.length === 0 && moviesFilter.length === 0 ? 
            <ContainerTitle>
              <MaterialIcons name="sms-failed" size={24} color="#ed7d31" />
              <TitleComponent>No hay resultados!</TitleComponent>
            </ContainerTitle>
          : null
          }
          <FlatListContent 
            data={search.length < 3 ? movies : moviesFilter} 
            renderItem={renderItem}
            keyExtractor={item => item.id}
            listFooterComponent={renderLoader}
            onEndReached={LoadMoreItems}
          />
      </ContainerMain>
      }
    </Container>
  );
}

export default Movies;
