import { Container, SignInText, Background } from "./style";
import { Input } from "../../Components/Input";
import {FiMail, FiLock, FiUser, FiArrowLeft} from 'react-icons/fi'
import { ButtonFill } from "../../Components/ButtonFill";
import { ButtonText } from "../../Components/ButtonText";


export function SignUp(){
  return(
    <Container>
      <SignInText>
        <h2>RocketMovies</h2>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        
        <h3>Crie sua conta</h3>
        <form>
          <Input placeholder="Nome" icon={FiUser}/>
          <Input placeholder="E-mail" icon={FiMail}/>
          <Input placeholder="Senha" icon={FiLock}/>
          <ButtonFill isPink title='Cadastrar'/>
          <ButtonText title='Voltar para o login' icon={FiArrowLeft}/>
        </form>
      </SignInText>
      <Background/>

    </Container>
  )
}