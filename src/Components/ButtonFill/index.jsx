import { Container } from "./style";

export function ButtonFill({icon:Icon, isPink, title, ...rest}){
  return(
    <Container
      type="button"
      {...rest}
      isPink={isPink}
    >
      {Icon && <Icon size={16}/>}
      {title}
    </Container>
  )

}