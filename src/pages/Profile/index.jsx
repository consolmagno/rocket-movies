import { Container, Avatar } from "./style";
import { Input } from "../../Components/Input";
import { ButtonText } from "../../Components/ButtonText";
import {FiUser, FiMail, FiLock, FiArrowLeft, FiCamera} from "react-icons/fi"
import { ButtonFill } from "../../Components/ButtonFill";

export function Profile(){
  return(
    <Container>
      <header>
        <ButtonText title="Voltar" icon={FiArrowLeft} nav="/"/>
      </header>

      <form>
        <Avatar>
          <img src="https://github.com/consolmagno.png" alt="Imagem usuário" />
          <label htmlFor="avatar">
            <FiCamera/>
            <input  id="avatar" type="file"/>
          </label>
        </Avatar>
        

        <Input placeholder='User' icon={FiUser}/>
        <Input placeholder='E-mail' icon={FiMail}/>
        <Input placeholder='Senha atual' icon={FiLock}/>
        <Input placeholder='Nova senha' icon={FiLock}/>
        <ButtonFill title="Salvar" isPink/>
      </form>

    </Container>
  )
}