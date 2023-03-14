import { Container } from "./style";

export function ButtonText({icon:Icon, title, ...rest }){
  return(
    <Container>
      <a href="/">
      {Icon && <Icon size={16}/>}
      {title}
      </a>
    </Container>
  )
}