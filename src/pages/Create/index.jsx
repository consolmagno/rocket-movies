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

export function Create(){
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  function handleAddTag(){
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  }

  function handleDeleteTag(deleted){
    setTags(prevState => prevState.filter(tag => tag !== deleted));
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
            <Input placeholder="Título"/>
            <Input placeholder="Sua nota (de 0 a 5)"/>
          </div>
          <TextArea placeholder="Observações"/>
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
            <ButtonFill  isPink title="Salvar alterações"/>
          </div>
        </Form>

      </main>
    </Container>
  )
}

