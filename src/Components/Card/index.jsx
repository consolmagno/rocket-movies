import { Container } from "./style";
import { Rank } from "../Rank"
import {Tag} from "../Tag"


export function Card({MovieTitle, Grade, children, TagTitle }){
  return(
    <Container>
      <h3>{MovieTitle}</h3>
      <Rank grade={Grade}/>
      <div className="text_card">
        <p>{children}</p>
      </div>
      <div className="tags">
        <Tag title={TagTitle}/>
        <Tag title={TagTitle}/>
      </div>

    </Container>
  )
}