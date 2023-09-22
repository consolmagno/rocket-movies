import { Container, Profile } from "./style";
import { Input } from "../Input";
import {useAuth} from "../../hooks/auth";
import { Link } from "react-router-dom";
import {api} from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

export function Header(){
  const { signOut, user } = useAuth();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  return(
    <Container>
      <h1>RocketMovies</h1>

      <Input placeholder='Pesquisar pelo título'/>
      
      <Profile to='/profile'>
      <div>
          <strong>{user.name}</strong>
          <span onClick={signOut}>sair</span>
      </div>
      <Link to={"/profile"}>
        <img src={avatarUrl} alt={user.name} />
      </Link>
      </Profile>
    </Container>
  )
}