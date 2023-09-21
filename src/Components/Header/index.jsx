import { Container, Profile } from "./style";
import { Input } from "../Input";
import {useAuth} from "../../hooks/auth"
import { Link } from "react-router-dom";

export function Header(){
  const { signOut } = useAuth();

  return(
    <Container>
      <h1>RocketMovies</h1>

      <Input placeholder='Pesquisar pelo título'/>
      
      <Profile to='/profile'>
      <div>
          <strong>Sofia Consolmagno</strong>
          <span onClick={signOut}>sair</span>
      </div>
      <Link to={"/profile"}>
        <img src="https://github.com/consolmagno.png" alt="Imagem do Usuário" />
      </Link>
      </Profile>
    </Container>
  )
}