import CardClass from "../CardClass";
import { Diviser, List, Title, Wrapper } from "./style";

const Classes = () => {
  return (
    <Wrapper>
      <Title>Aulas</Title>
      <Diviser />
      <List>
        <li>
          <CardClass 
            isReleased={true}
            title="Criando o projeto e realizando o setup inicial"
            selected
          />
        </li>
        <li>
          <CardClass 
            isReleased={false}
            title="Criando o projeto e realizando o setup inicial"
          />
        </li>
        <li>
          <CardClass 
            isReleased={false}
            title="Criando o projeto e realizando o setup inicial"
          />
        </li>
        <li>
          <CardClass 
            isReleased={false}
            title="Criando o projeto e realizando o setup inicial"
          />
        </li>
      </List>
    </Wrapper>
  );
}

export default Classes;