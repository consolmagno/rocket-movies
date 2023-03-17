import { Container } from "./style";
import { Link } from "react-router-dom";

export function ButtonText({icon:Icon, title, nav, ...rest }){
  return(
    <Container>
      <Link to={nav}>
      {Icon && <Icon size={16}/>}
      {title}
      </Link>
    </Container>
  )
}