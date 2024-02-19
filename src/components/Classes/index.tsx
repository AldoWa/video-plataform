import { Class } from "@/types";
import CardClass from "../CardClass";
import { Diviser, List, Title, Wrapper } from "./style";
import { compareDateToNow, formatDate } from "@/utils/date";

interface ClassesProps {
  classes: Class[];
  handleChangeClass: (id: string) => void;
  actualClassId: string;
}

const Classes = ({ classes, handleChangeClass, actualClassId }: ClassesProps) => {
  return (
    <Wrapper>
      <Title>Aulas</Title>
      <Diviser />
      <List>
        { classes.map((item, index) => (
          <li key={item.id}>
            <CardClass 
              date={formatDate(item.date)}
              isReleased={compareDateToNow(item.date)}
              title={item.title}
              selected={actualClassId === item.id}
              handleChangeClass={handleChangeClass}
              id={item.id}
            />
          </li>
        ))}
      </List>
    </Wrapper>
  );
}

export default Classes;