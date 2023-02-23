import { Container, Title } from "./style";
import { Rank } from "../Rank";

export function Section({title, children}){
  return(
    <Container>
      <Title>
        <h2>{title}</h2>
        <Rank/>
      </Title>
      {children}
    </Container>
  )
}