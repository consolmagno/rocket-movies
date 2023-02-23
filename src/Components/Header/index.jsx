import { Container, Profile } from "./style";
import { Input } from "../Input";

export function Header(){
  return(
    <Container>
      <h1>RocketMovies</h1>

      <Input placeholder='Pesquisar pelo título'/>
      
      <Profile>
      <div>
          <strong>Sofia Consolmagno</strong>
          <span>sair</span>
      </div>
          <img src="https://github.com/consolmagno.png" alt="Imagem do Usuário" />
      </Profile>
    </Container>
  )
}