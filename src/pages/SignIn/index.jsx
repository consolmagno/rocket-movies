import { Container, SignInText, Background } from "./style";
import { Input } from "../../Components/Input";
import {FiMail, FiLock} from 'react-icons/fi'
import { ButtonFill } from "../../Components/ButtonFill";
import { ButtonText } from "../../Components/ButtonText";


export function SignIn(){
  return(
    <Container>
      <SignInText>
        <h2>RocketMovies</h2>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        
        <h3>Faça seu login</h3>
        <form>
          <Input placeholder="E-mail" icon={FiMail}/>
          <Input placeholder="Senha" icon={FiLock}/>
          <ButtonFill isPink title='Entrar'/>
          <ButtonText title='Criar conta'/>
        </form>
      </SignInText>
      <Background/>

    </Container>
  )
}