import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 350px;
`

export const LoginLogo = styled.img`
  width: 180px;
  align-self: center;
  margin-bottom: 15px;
`
export const InputContainer = styled.div`
  width: 100%;
  margin-top: 15px;
`
export const Label = styled.label`
  text-align: left;
  align-self: flex-start;
  font-size: 14px;
  padding: 0px 20px 15px 0px;
  font-family: Roboto;
  color: ${props => (props.theme === 'dark' ? 'white' : '#475569')};
  font-weight: 600;
`

export const UserInput = styled.input`
  font-family: 'Roboto';
  font-size: 15px;
  color: #475569;
  outline: none;
  padding: 8px;
  width: 100%;
  border: 1px solid #95a3b8;
  border-radius: 4px;
  margin-top: 5px;
`

export const InputLabel = styled.label`
  font-size: 12px;
  font-family: 'Roboto';
  color: #475569;
  font-weight: bold;
`

export const LoginButton = styled.button`
  width: 100%;
  margin-top: 12px;
  padding: 7px 0px 7px 0px;
  border-radius: 8px;
  border: none;
  background-color: #3b82f6;
  color: #ffffff;
  font-weight: 500;
  font-family: Roboto;
  font-size: 15px;
`
export const SubmitError = styled.p`
  color: #ff0000;
  margin: 0px;
  font-size: 14px;
  padding-top: 6px;
  font-weight: 400;
`
export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 12px;
`
export const ShowPassword = styled.label`
  font-family: 'Roboto';
  font-size: 15px;
  color: #1e293b;
`
export const Checkbox = styled.input`
  width: 15px;
  height: 15px;
  margin-right: 5px;
`
