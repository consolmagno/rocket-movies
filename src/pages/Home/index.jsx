import {FiPlus} from "react-icons/fi"
import { Container, Content, NewMovie } from "./style";
import {Header} from "../../Components/Header"
import {ButtonFill} from "../../Components/ButtonFill"
import { Card } from "../../Components/Card";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function Home(){
  const [tags, setTags] = useState([]);
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handlePreview(id){
    navigate(`/preview/${id}`)
  }

  useEffect(() =>{
    async function fetchTags(){
      const response = await api.get("/tags");
      setTags(response.data)
    }
    fetchTags();
  }, []);

  useEffect(() =>{
    async function fetchNotes(){
      const response = await api.get(`/notes?title=${search}`)
      setNotes(response.data)
    }
    fetchNotes();
  }, [search]);

  return(
    <Container>
      <Header/>
      <Content>
        <header>
          <h1>Meus filmes</h1>
          <NewMovie to="/create">
            <FiPlus/>
            Adicionar filme
          </NewMovie>
        </header>
        <main>
          <div className="cards">
            {
              notes.map(note => (
                <Card 
                  key={String(note.id)}
                  onClick={() => handlePreview(note.id)} 
                  MovieTitle={note.title} 
                  Grade={note.rating} 
                  data={note} >
               {note.description}
              </Card>
              ))
            }
          </div>
        </main>
      </Content>
    </Container>
  )
}