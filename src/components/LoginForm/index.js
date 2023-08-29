import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {
  AppContainer,
  FormContainer,
  LoginLogo,
  InputContainer,
  UserInput,
  InputLabel,
  LoginButton,
  SubmitError,
  CheckboxContainer,
  ShowPassword,
  Checkbox,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: '',
    showErrorMsg: false,
    onCheckBox: false,
  }

  onChangeUserInput = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeCheckBox = () => {
    const {onCheckBox} = this.state
    this.setState({onCheckBox: !onCheckBox})
  }

  onSuccessFrom = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    history.replace('/')
  }

  onFailureForm = error => [
    this.setState({showErrorMsg: true, errorMsg: error}),
  ]

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(apiUrl, options)
    console.log(response)
    const data = await response.json()

    if (response.ok === true) {
      this.onSuccessFrom(data.jwt_token)
    } else {
      this.onFailureForm(data.error_msg)
    }
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <InputLabel htmlFor="username">USERNAME</InputLabel>
        <UserInput
          type="text"
          id="username"
          value={username}
          name="username"
          oonChange={this.onChangeUserInput}
          placeholder="Username"
        />
      </>
    )
  }

  renderPasswordFeild = () => {
    const {password, onCheckBox} = this.state
    const inputType = onCheckBox ? 'text' : 'password'
    return (
      <>
        <InputLabel htmlFor="password">PASSWORD</InputLabel>
        <UserInput
          type={inputType}
          id="password"
          value={password}
          name="password"
          onChange={this.onChangePassword}
          placeholder="Password"
        />
        <CheckboxContainer>
          <Checkbox
            type="Checkbox"
            id="checkbox"
            onChange={this.onChangeCheckBox}
          />
          <ShowPassword htmlFor="checkbox">Show Password</ShowPassword>
        </CheckboxContainer>
      </>
    )
  }

  render() {
    const {showErrorMsg, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <AppContainer>
        <FormContainer onSubmit={this.onSubmitForm}>
          <LoginLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <InputContainer>{this.renderUsernameField()}</InputContainer>
          <InputContainer>{this.renderPasswordFeild()}</InputContainer>
          <LoginButton type="button">Login</LoginButton>
          {showErrorMsg && <SubmitError>*{errorMsg}</SubmitError>}
        </FormContainer>
      </AppContainer>
    )
  }
}
export default LoginForm
