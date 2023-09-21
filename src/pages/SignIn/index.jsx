import { Container, SignInText, Background } from "./style";
import { Input } from "../../Components/Input";
import {FiMail, FiLock} from 'react-icons/fi'
import { ButtonFill } from "../../Components/ButtonFill";
import { ButtonText } from "../../Components/ButtonText";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";

export function SignIn(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {signIn} = useAuth();

  function handleSignIn(){
    signIn({email, password});
  }

  return(
    <Container>
      <SignInText>
        <h2>RocketMovies</h2>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        
        <h3>Faça seu login</h3>
        <form>
          <Input placeholder="E-mail" icon={FiMail} onChange={e => setEmail(e.target.value)}/>
          <Input placeholder="Senha" icon={FiLock} onChange={e => setPassword(e.target.value)}/>
          <ButtonFill isPink title='Entrar' onClick={handleSignIn}/>
          <ButtonText title='Criar conta' nav="/register"/>
        </form>
      </SignInText>
      <Background/>

    </Container>
  )
}