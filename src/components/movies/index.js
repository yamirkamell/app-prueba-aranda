import { useState } from 'react';
import { View, Text } from 'react-native';
import { Container, ContainerScrollView, ContainerHeader, ContainerTitle, IconHeader, TitleComponent, ContainerMovie } from './styled';
import InputComponent from './components/input-component';

const Movies = () => {
  const [search, setSearch] = useState('');

  return (
    <Container>
      <ContainerScrollView contentContainerStyle={{alignItems: 'center'}} >
        <ContainerHeader>
          <InputComponent placeholder='Search' search={search} setSearch={setSearch}/>
          <ContainerTitle>
            <TitleComponent>Tendencias</TitleComponent>
            <IconHeader name="stars" size={25} color="#ed7d31" />
          </ContainerTitle>
        </ContainerHeader>
          <ContainerMovie> 
            <View>
              <Text>{"Welcome"}</Text>
            </View>
          </ContainerMovie>
      </ContainerScrollView>
    </Container>
  );
}

export default Movies;
