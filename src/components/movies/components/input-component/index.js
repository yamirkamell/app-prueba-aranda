import { ContainerComponent, ContainerIcon, Input } from './styled';
import { FontAwesome } from '@expo/vector-icons';

const InputComponent = (props) => {
  const { placeholder, search, setSearch } = props;

  const handleChangeInput = (value) => {
    const regex = new RegExp("^[a-zA-Z ]+$");
    if (regex.test(value)) {
      setSearch(value.trim());
    } 
  }

  return (
    <ContainerComponent>
      <Input placeholder={placeholder} onChangeText={handleChangeInput} value={search}/>
      <ContainerIcon>
        <FontAwesome name="search" size={18} color="white"/>
      </ContainerIcon>
    </ContainerComponent>
  )
};

export default InputComponent;