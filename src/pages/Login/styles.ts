import styled from 'styled-components'

export const Container = styled.div`
display: flex;

`

export const LeftContent = styled.div`
width: 50%;

`
export const LogoContainer = styled.div`
margin-top: 70px;
margin-bottom: 120px;
display: flex;
align-items: center;
margin-left: 10%;

`

export const Logo = styled.img`
width: 80px;
height: 80px;
margin-bottom: 26px;
`

export const SearchCar = styled.div`
font-family: 'Poppins';
font-weight: 900;
font-size: 40px;
color: #0157AE;
margin-left: -18px;
`

export const FormContainer = styled.div`
display: flex;
flex-direction: column;
margin-left: 20%;
`

export const WelcomeLogin = styled.div`
color: #3C3C3C;
font-family: 'Poppins';
font-size: 38px;
line-height: 45.6px;
font-weight: 600;
`

export const ToDoLogin = styled.div`
color: #A2A2A2;
font-family: 'Poppins';
font-size: 12px;
font-weight: 600;
display: flex;
align-items: center;
margin-top: 6px;
`

export const EmailAddress = styled.div`
color: #7C7C7C;
font-family: 'Poppins';
font-size: 14px;
font-weight: 600;
margin-top: 70px;
letter-spacing: -0.03em;
`

export const Input = styled.input`
::placeholder { 
  color: #A2A2A2;
}
background: #F9F9F9;
border: 1px solid #E6E6E6;
border-radius: 3px;
width: 425px;
height: 36px;
margin-top: 6px;

font-family: 'Poppins';
font-weight: 400;
font-size: 13px;
letter-spacing: -0.03em;
color: #c8c8c8;
`

export const Password = styled.div`
color: #7C7C7C;
font-family: 'Poppins';
font-size: 14px;
font-weight: 600;
margin-top: 40px;
letter-spacing: -0.03em;
`

export const RedPhaseContainer = styled.div`
display: flex;
align-items: center;
margin-left: 20%;
margin-top: 48.5px;
`

export const RememberPassword = styled.div`
color: #0170E1;
font-family: 'Poppins';
font-size: 14px;
font-weight: 500;
margin-left: 10px;
letter-spacing: -0.03em;
`

export const Checkbox = styled.input`
accent-color: #0170E1;
width: 22px;
height: 22px;
`

export const LostPassword = styled.div`
color: #0170E1;
font-family: 'Poppins';
font-size: 14px;
font-weight: 500;
margin-left: 10px;
letter-spacing: -0.03em;
margin-left: 120px;
`

export const Button = styled.div`
background: #0170E1;
cursor: pointer;
width: 425px;
height: 37px;
margin-top: 49.08px;
border-radius: 3px;

font-family: 'Poppins';
font-size: 14px;
display: flex;
align-items: center;
letter-spacing: -0.03em;
line-height: 120%;
justify-content: center;
`

export const CreateAnAccount = styled.div`
color: #7C7C7C;
font-family: 'Poppins';
font-size: 14px;
font-weight: 600;
margin-top: 30px;
letter-spacing: -0.03em;
margin-bottom: 80px;
p {
  color: #0170E1;
  display: inline;
}
`


export const ImageLogin = styled.div`
display: flex;
flex: 1;
min-height: 100vh;
background-image: url('/assets/images/ImageLogin.png');
background-size: cover;
`


