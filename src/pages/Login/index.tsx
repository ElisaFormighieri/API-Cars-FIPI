import {Logo, SearchCar, LogoContainer, ImageLogin, Container, WelcomeLogin, LeftContent, FormContainer, ToDoLogin, EmailAddress, Input, Password, RedPhaseContainer, RememberPassword, LostPassword, Button, CreateAnAccount, Checkbox} from './styles'
import { useNavigate } from 'react-router-dom';

export function Login (){
  const navigate = useNavigate();

return (

    <Container>

      <LeftContent>
        <LogoContainer>
          <Logo src = '/assets/images/logo.png' alt = 'Logo'/>
          <SearchCar> SearchCar </SearchCar>
        </LogoContainer>

        <FormContainer>
          <WelcomeLogin>Bem-vindo à SearchCar</WelcomeLogin>
          <ToDoLogin>Faça o login para acessar sua conta.</ToDoLogin>
          <EmailAddress>Endereço de email</EmailAddress>
          <Input  placeholder="@mail.com"/>
          <Password>Senha</Password>
          <Input placeholder="senha"/>
        </FormContainer>

        <RedPhaseContainer>
          <Checkbox type="checkbox" />
          <RememberPassword>Lembrar minha senha</RememberPassword>
          <LostPassword>Esqueceu a senha? </LostPassword>
        </RedPhaseContainer>

        <FormContainer>
          <Button onClick={() => navigate ('/Home')}>
              Entrar
          </Button>
          <CreateAnAccount>Ainda não tem uma conta? <p>Criar Conta</p> </CreateAnAccount>
        </FormContainer>

      </LeftContent>
     

      <ImageLogin />
     
    </Container>
    
)
}