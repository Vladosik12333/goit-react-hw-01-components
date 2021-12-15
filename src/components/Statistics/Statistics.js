import propTypes from "prop-types";
import { Section, Title, List, ItemList, Label } from "./Statistics.styled.jsx";

export default function Statistics({ title, stats }) {
  return (
    <Section>
      {title && <Title>{title}</Title>}
      <List>
        {stats.map(({ id, label, percentage }) => {
          return (
            <ItemList key={id}>
              <Label>{label} </Label>
              <Label>{percentage} </Label>
            </ItemList>
          );
        })}
      </List>
    </Section>
  );
}

Statistics.propTypes = {
  title: propTypes.string,
  stats: propTypes.array,
};
