import { Container } from "./style";

export function ButtonFill({icon:Icon, isPink, title, ...rest}){
  return(
    <Container
      type="button"
      isPink={isPink}
    >
      {Icon && <Icon size={16}/>}
      {title}
    </Container>
  )

}