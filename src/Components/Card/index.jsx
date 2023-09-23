import { Container } from "./style";
import { Rank } from "../Rank"
import {Tag} from "../Tag"


export function Card({MovieTitle, Grade, children, data, ...rest }){
  return(
    <Container {...rest}>
      <h3>{MovieTitle}</h3>
      <Rank grade={Grade}/>
      <div className="text_card">
        <p>{children}</p>
      </div>
      {  data.tags &&
         <div className="tags">
          {
            data.tags.map(tag => <Tag key={tag.id} title={tag.name}/>)
          }
         </div>
      }
    </Container>
  )
}