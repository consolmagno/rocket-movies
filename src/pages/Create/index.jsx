import { FiArrowLeft} from "react-icons/fi"
import { Container, Form } from "./style";
import { Header } from "../../Components/Header";
import { Section } from "../../Components/Section";
import {ButtonText} from "../../Components/ButtonText"
import { Input } from "../../Components/Input";
import { TextArea } from "../../Components/TextArea";

export function Create(){
  return(
    <Container>
      <Header/>

      <main>
        <Form>
          <header>
            <ButtonText  icon={FiArrowLeft} title="Voltar"/>
            <h1>Novo filme</h1>
          </header>
          <div>
            <Input placeholder="Título"/>
            <Input placeholder="Sua nota (de 0 a 5)"/>
          </div>
            <TextArea placeholder="Observações"/>
        </Form>
      </main>
    </Container>
  )
}

