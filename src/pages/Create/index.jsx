import { FiArrowLeft} from "react-icons/fi"
import { Container, Form } from "./style";
import { Header } from "../../Components/Header";
import { Section } from "../../Components/Section";
import {ButtonText} from "../../Components/ButtonText"
import { Input } from "../../Components/Input";
import { TextArea } from "../../Components/TextArea";
import { MovieItem } from "../../Components/MovieItem";
import { ButtonFill } from "../../Components/ButtonFill";

export function Create(){
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
              <MovieItem value="React"/>
              <MovieItem isNew placeholder="Novo Marcador"/>
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

