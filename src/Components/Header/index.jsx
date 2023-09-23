import { Container, Profile } from "./style";
import {useAuth} from "../../hooks/auth";
import { Link } from "react-router-dom";
import {api} from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { useNavigate } from "react-router-dom";

export function Header({children}){
  const { signOut, user } = useAuth();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  const navigate = useNavigate();

  function handleLogout() {
    const confirm = window.confirm("Tem certeza que deseja sair?")
    console.log(confirm)
        if(confirm){
            navigate("/");
            signOut();
        }
    }

  return(
    <Container>
      <h1>RocketMovies</h1>
      {children}
      <Profile to='/profile'>
      <div>
          <strong>{user.name}</strong>
          <span onClick={handleLogout}>sair</span>
      </div>
      <Link to={"/profile"}>
        <img src={avatarUrl} alt={user.name} />
      </Link>
      </Profile>
    </Container>
  )
}