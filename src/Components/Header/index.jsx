import { Container, Profile } from "./style";
import { Input } from "../Input";
import {useAuth} from "../../hooks/auth";
import { Link } from "react-router-dom";
import {api} from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { useState, useEffect } from "react";

export function Header(){
  const { signOut, user } = useAuth();
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState([]);

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  useEffect(() =>{
    async function fetchNotes(){
      const response = await api.get(`/notes?title=${search}`)
      setNotes(response.data)
    }
    fetchNotes();
  }, [search]);

  return(
    <Container>
      <h1>RocketMovies</h1>

      <Input 
        placeholder='Pesquisar pelo título'
        onChange = {(e) => setSearch(e.target.value)}
      />
      
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