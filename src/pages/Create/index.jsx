import { FiArrowLeft} from "react-icons/fi"
import { Container, Form } from "./style";
import { Header } from "../../Components/Header";
import { Section } from "../../Components/Section";
import {ButtonText} from "../../Components/ButtonText"
import { Input } from "../../Components/Input";
import { TextArea } from "../../Components/TextArea";
import { MovieItem } from "../../Components/MovieItem";
import { ButtonFill } from "../../Components/ButtonFill";
import { useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function Create(){
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState();
  const [description, setDescription] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate()

  function handleAddTag(){
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  }

  function handleDeleteTag(deleted){
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  }

  async function handleNewNote(){
    if(!title){
      return alert("Digite o título da nota")
    }

    if(newTag){
      return alert("Você deixou uma tag no campo, mas não clicou em adicionar.")
    }

    await api.post("/notes", {
      title,
      rating,
      description,
      tags
    });
    alert("Nota criada com sucesso.")
    navigate("/")
  }

  return(
    <Container>
      <Header/>

      <main>
        <Form>
          <header>
            <ButtonText  icon={FiArrowLeft} title="Voltar" nav="/"/>
            <h1>Novo filme</h1>
          </header>
          <div>
            <Input 
              placeholder="Título"
              onChange={e => setTitle(e.target.value)}
            />
            <Input 
              placeholder="Sua nota (de 0 a 5)"
              onChange={e => setRating(e.target.value)}
            />
          </div>
          <TextArea 
            placeholder="Observações"
            onChange={e => setDescription(e.target.value)}
          />
          <Section title="Marcadores">
            <div className="marker">
              {
                tags.map((tag, index) => (
                  <MovieItem
                    key={String(index)} 
                    value={tag}
                    onClick={() => handleDeleteTag(tag)}
                  />
                ))
              }
              <MovieItem 
                isNew 
                placeholder="Novo Marcador"
                onChange={e => setNewTag(e.target.value)}
                value = {newTag}
                onClick={handleAddTag}
              />
            </div>
          </Section>
          <div className="buttons">
            <ButtonFill  title="Excluir filme"/>
            <ButtonFill  
              isPink 
              title="Salvar alterações"
              onClick = {handleNewNote}
            />
          </div>
        </Form>

      </main>
    </Container>
  )
}

