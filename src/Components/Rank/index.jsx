import {FiStar} from "react-icons/fi"
import { Container } from "./style";

export function Rank({grade}){
  return(
    <Container grade={grade}>
      <FiStar/>
      <FiStar/>
      <FiStar/>
      <FiStar/>
      <FiStar/>
    </Container>
  )

}
