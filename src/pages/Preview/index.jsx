import {FiArrowLeft, FiClock} from "react-icons/fi"
import { Container, Content, Description, Tags} from "./style"
import { Header } from "../../Components/Header"
import { ButtonText } from "../../Components/ButtonText"
import { Section } from "../../Components/Section"
import { Rank } from "../../Components/Rank"
import { Tag } from "../../Components/Tag"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { api } from "../../services/api"
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import {useAuth} from "../../hooks/auth";

export function Preview(){
  const {user} = useAuth();
  const [data, setData] = useState();
  const [userData, setUserData] = useState();

  const params = useParams();
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
  
  
  // useEffect(() => {
  //   async function fetchUserData() {
  //     try {
  //       const responseNotes = await api.get(`/notes/${params.id}`);
  //       setData(responseNotes.data);
  //       const response = await api.get(`/users/${responseNotes.data.user_id}`);
  //       setUserData(response.data)
  //       console.log(userData.user)
  //     } catch (err) {
  //       console.log('error:', err)
  //     }
  //   }
  //   fetchUserData()    
  // }, [])

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data)
    }
    fetchNotes()
  }, [])



  return(
    <Container>
        <Header></Header>
        {
          data &&
          <main>
          <Content>
          <ButtonText icon={FiArrowLeft} title="Voltar" nav="/"/>
            <header>
              <h1>{data.title}</h1>
              <Rank grade={data.rating}/>
            </header>
              

            <Description>
              <img src={avatarUrl} alt={user.name} />
              <span>{user.name}</span>
              <FiClock color="#FF859B"/>
              <span>{data.created_at}</span>
            </Description> 

            {
              data.tags && 
              <Tags>
                {
                  data.tags.map( tag => (
                    <Tag
                    key={String(tag.id)} 
                    title={tag.name}
                    />
                  ))
                }
              </Tags>
            }

            <p>{data.description}</p>
          </Content>
          </main>
        }
        
    </Container>
  )
}