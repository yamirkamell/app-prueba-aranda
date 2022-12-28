import { ContainerComponent, ContainerIcon, Input } from './styled';
import { FontAwesome } from '@expo/vector-icons';

const InputComponent = (props) => {
  const { placeholder, search, setSearch } = props;
  return (
    <ContainerComponent>
      <Input placeholder={placeholder} onChangeText={setSearch} value={search} />
      <ContainerIcon>
        <FontAwesome name="search" size={18} color="white" />
      </ContainerIcon>
    </ContainerComponent>
  )
};

export default InputComponent;