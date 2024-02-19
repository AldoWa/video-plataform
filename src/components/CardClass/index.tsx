import { Type, Data, Text, Title, Wrapper, Container } from "./style"
import Jail from '@/assets/icons/jail.svg'
import Check from '@/assets/icons/check.svg'

interface CardClassProps  {
  isReleased: boolean;
  title: string;
  selected?: boolean;
  handleChangeClass: (id: string) => void;
  id: string;
  date: string;
}

const Relesead = () => {
  return (
    <Text type="released">
      <Check /> Conteúdo liberado
    </Text>
  )
}

const Blocked = () => {
  return (
    <Text type="blocked">
      <Jail /> Em breve
    </Text>
  )
}

const CardClass = ({ isReleased, title, handleChangeClass, id, date, selected = false }: CardClassProps ) => {
  const type = isReleased ? 'released' : 'blocked'
  return (
    <Container>
      <Data>{date}</Data>
      <Wrapper selected={selected} disabled={!isReleased} onClick={() => handleChangeClass(id)}>
        <div className="flex justify-between items-center w-full">
          { isReleased ? <Relesead /> : <Blocked /> }
          <Type type={type}>Aula Pratica</Type>
        </div>
        <Title>{ title }</Title>
      </Wrapper>
    </Container>
  )
} 

export default CardClass