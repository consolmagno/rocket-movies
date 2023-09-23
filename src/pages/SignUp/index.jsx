import { useState } from "react";
import { Container, SignInText, Background } from "./style";
import { Input } from "../../Components/Input";
import {FiMail, FiLock, FiUser, FiArrowLeft} from 'react-icons/fi'
import { ButtonFill } from "../../Components/ButtonFill";
import { ButtonText } from "../../Components/ButtonText";
import { useNavigate } from "react-router-dom";

import {api} from "../../services/api"


export function SignUp(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp(e){
    e.preventDefault()
    if(!name || !email || !password){
      return alert("Preencha todos os campos!");
    }

    api.post("/users", {name, email, password})
    .then(() => {
      alert("Usuário cadastrado com sucesso!");
      navigate(-1)
    })
    .catch( error =>{
      if(error.response){
        alert(error.response.data.message)
      } else{
        alert("Não foi possível cadastrar")
      }
    });
  }

  return(
    <Container>
      <SignInText>
        <h2>RocketMovies</h2>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        
        <h3>Crie sua conta</h3>
        <form>
          <Input placeholder="Nome" type="text" icon={FiUser} onChange = {e => setName(e.target.value)}/>
          <Input placeholder="E-mail" type="text" icon={FiMail} onChange = {e => setEmail(e.target.value)}/>
          <Input placeholder="Senha" type="password" icon={FiLock} onChange = {e => setPassword(e.target.value)}/>
          <ButtonFill isPink title='Cadastrar'  onClick={e => handleSignUp(e)}/>
          <ButtonText title='Voltar para o login' icon={FiArrowLeft} nav="/"/>
        </form>
      </SignInText>
      <Background/>

    </Container>
  )
}