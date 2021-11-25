import { useSkin } from '@hooks/useSkin'
import { Link, Redirect, useHistory } from 'react-router-dom'
import { useState, useContext, Fragment } from 'react'
import classnames from 'classnames'
import InputPasswordToggle from '@components/input-password-toggle'
import { Row, Col, CardTitle, CardText, Form, FormGroup, Label, Input, CustomInput, Button, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap'
import { AbilityContext } from '@src/utility/context/Can'
import { useDispatch, useSelector } from 'react-redux'
import { getHomeRouteForLoggedInUser, isObjEmpty } from '@utils'
import Avatar from '@components/avatar'
import { useForm } from 'react-hook-form'
import '@styles/base/pages/page-auth.scss'
import axios from '../../../utility/hooks/axios'
import { handleLogin } from '@store/actions/auth'
import { setLoading } from './../../../../src/redux/actions/common'
import { toast, Slide } from 'react-toastify'
import useJwt from '@src/auth/jwt/useJwt'
import UILoader from '@components/ui-loader'
// import Spinner from '/@core/components/spinner/Fallback-spinner'
import Spinner from './../../../@core/components/spinner/Fallback-spinner'
import { Facebook, Twitter, Mail, GitHub, HelpCircle, Coffee, User, Eye } from 'react-feather'
import OTP from '../components/OTP'
const ToastContent = ({ name, role }) => (
  <Fragment>
    <div className='toastify-header'>
      <div className='title-wrapper'>
        <Avatar size='sm' color='success' icon={<Coffee size={12} />} />
        <h6 className='toast-title font-weight-bold'>Welcome, {name}</h6>
      </div>
    </div>
    <div className='toastify-body'>
      <span>You have successfully logged in as an {role} user to Vuexy. Now you can start to explore. Enjoy!</span>
    </div>
  </Fragment>
)
const Login = () => {
  const [skin, setSkin] = useSkin()
  const { register, errors, handleSubmit } = useForm()
  const [basicModal, setBasicModal] = useState(false)
  const illustration = skin === 'dark' ? 'login-v2-dark.svg' : 'login-v2.svg',
    source = require(`@src/assets/images/pages/${illustration}`).default
  const ability = useContext(AbilityContext)
  const dispatch = useDispatch()
  const history = useHistory()
  const [username, setUserName] = useState('tanpq@sphinxjsc.com')
  const [password, setPassword] = useState('Shin@1993')
  const [rememberLogin, setRememberLogin] = useState(false)
  const [returnUrl, setReturnUrl] = useState('')
  const common = useSelector(state => state.common)
  const onSubmit = data => {
    
    if (isObjEmpty(errors)) {
      // setBasicModal(!basicModal)
      dispatch(setLoading(true))
        useJwt
        .login({ username, password, rememberLogin, returnUrl }).then(res => {
          console.log('222222222222222', res)
          // if( )
        dispatch(handleLogin(res.data))
        history.push(getHomeRouteForLoggedInUser('admin'))
        dispatch(setLoading(false))
      })
      // const data = {
      //   ability: [
      //     {
      //       action: "manage",
      //       subject: "all"
      //     }
      //   ],
      //   accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjM1MzI2ODY5LCJleHAiOjE2MzUzMjc0Njl9.DrjO4d3bIbx757Nr4V_N1f98pAT3TWjTE3geuq0cBPs',
      //   avatar: "/static/media/avatar-s-11.1d46cc62.jpg",
      //   email: "admin@demo.com",
      //   extras: { eCommerceCartItemsCount: 5 },
      //   fullName: "John Doe",
      //   id: 1,
      //   refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjM1MzI2ODY5LCJleHAiOjE2MzUzMjc0Njl9.SV0o1cyN8vj-AQuU-c9vb_ev4YNlcMliUbRUm1G3Xos",
      //   role: "admin",
      //   username: "johndoe"
      // }

      // dispatch(handleLogin(data))
      // ability.update(data.ability)
      // history.push(getHomeRouteForLoggedInUser('admin'))
      // toast.success(
      //   <ToastContent name={data.fullName || data.username || 'John Doe'} role={data.role || 'admin'} />,
      //   { transition: Slide, hideProgressBar: true, autoClose: 2000 }
      // )
      // handelClick()
    }
  }
  function handelClick() {
    setBasicModal(!basicModal)
  }
  return (
    <div className='auth-wrapper1'>
       <UILoader blocking={common.isLoading} loader={<Spinner />}>
      <div className="fix-margin-left-login">
        <div className="login-box-body">
          <div className="login-logo text-center">
            <a ><img src="https://dashboard.transpora.io/assets/img/transpora.png" alt="" className="img-responsive" /></a>
          </div>
          <Form className='auth-login-form mt-2' onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <Label for='login-email'> User Name</Label>
              <InputGroup>
                <Input
                  autoFocus
                  type='text'
                  value={username}
                  id='login-email'
                  name='login-email'
                  placeholder='john@example.com'
                  onChange={e => setUserName(e.target.value)}
                  className={classnames({ 'is-invalid': errors['login-email'] })}
                  innerRef={register({ required: true, validate: value => value !== '' })}
                />
                <InputGroupAddon addonType='append' >
                  <InputGroupText className='cursor-pointer'> <User size={15} /></InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <div className='d-flex justify-content-between'>
                <Label className='form-label' for='login-password'>
                  Password
                </Label>
                <Link to='/forgot-password'>
                  <small>Forgot Password?</small>
                </Link>
              </div>
              <InputPasswordToggle
                value={password}
                id='login-password'
                name='login-password'
                className='input-group-merge'
                onChange={e => setPassword(e.target.value)}
                className={classnames({ 'is-invalid': errors['login-password'] })}
                innerRef={register({ required: true, validate: value => value !== '' })}
              />
            </FormGroup>
            <FormGroup>
              <CustomInput type='checkbox' className='custom-control-Primary' id='remember-me' label='Remember Me' onChange={(e) => setRememberLogin(e.target.checked)} />
            </FormGroup>
            <Button.Ripple type='submit' color='primary' block>
              Sign in
            </Button.Ripple>
          </Form>
          {/* <a className="text-primary">Forget Password</a><br /> */}
          <Link className="text-center text-primary d-block mt-2" to='/register'>No account yet? Register now!</Link>
        </div>
      </div>
       </UILoader>
      <OTP basicModal={basicModal} handelClick={handelClick} />
    </div>
  )
}

export default Login
