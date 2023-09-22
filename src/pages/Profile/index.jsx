import { useState } from "react";
import { Container, Avatar } from "./style";
import { Input } from "../../Components/Input";
import { ButtonText } from "../../Components/ButtonText";
import {FiUser, FiMail, FiLock, FiArrowLeft, FiCamera} from "react-icons/fi"
import { ButtonFill } from "../../Components/ButtonFill";
import {useAuth} from "../../hooks/auth";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import {api} from "../../services/api";

export function Profile(){
  const {user, updateProfile} = useAuth();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState();
  const [passwordNew, setPasswordNew] = useState();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  async function handleUpdate(){
    const user = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld
    }

    await updateProfile({user, avatarFile})
  }

  function handleChangeAvatar(event){
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview)
  }

  return(
    <Container>
      <header>
        <ButtonText title="Voltar" icon={FiArrowLeft} nav="/"/>
      </header>

      <form>
        <Avatar>
          <img src={avatar} alt="Imagem usuário" />
          <label htmlFor="avatar">
            <FiCamera/>
            <input  id="avatar" type="file" onChange={handleChangeAvatar}/>
          </label>
        </Avatar>
        

        <Input placeholder='User' type="text" icon={FiUser} value={name} onChange={e => setName(e.target.value)}/>
        <Input placeholder='E-mail' type="text" icon={FiMail} value={email} onChange={e => setEmail(e.target.value)}/>
        <Input placeholder='Senha atual' type="password" icon={FiLock} onChange={e => setPasswordOld(e.target.value)}/>
        <Input placeholder='Nova senha' type="password" icon={FiLock} onChange={e => setPasswordNew(e.target.value)}/>
        <ButtonFill title="Salvar" isPink onClick={handleUpdate}/>
      </form>

    </Container>
  )
}