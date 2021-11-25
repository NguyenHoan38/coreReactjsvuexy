import { useSkin } from '@hooks/useSkin'
import { Link, Redirect, useHistory } from 'react-router-dom'
import { useState, useContext, Fragment } from 'react'
import classnames from 'classnames'
import Select from 'react-select'
import InputPasswordToggle from '@components/input-password-toggle'
import { Row, Col, CardTitle, CardText, Form, FormGroup, Label, Input, CustomInput, Button, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap'
import { AbilityContext } from '@src/utility/context/Can'
import { useDispatch } from 'react-redux'
import { getHomeRouteForLoggedInUser, isObjEmpty } from '@utils'
import Avatar from '@components/avatar'
import { useForm } from 'react-hook-form'
import '@styles/base/pages/page-auth.scss'
import axios from '../../../utility/hooks/axios'
import { handleLogin } from '@store/actions/auth'
import { toast, Slide } from 'react-toastify'
import useJwt from '@src/auth/jwt/useJwt'
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
const Register = () => {
    const [skin, setSkin] = useSkin()
    const { register, errors, handleSubmit } = useForm()
    const [basicModal, setBasicModal] = useState(false)
    const illustration = skin === 'dark' ? 'login-v2-dark.svg' : 'login-v2.svg',
        source = require(`@src/assets/images/pages/${illustration}`).default
    const ability = useContext(AbilityContext)
    const dispatch = useDispatch()
    const history = useHistory()
    const [username, setUserName] = useState('demo@gmail.com')
    const [password, setPassword] = useState('123456Aa@')
    const [rememberLogin, setRememberLogin] = useState(false)
    const [returnUrl, setReturnUrl] = useState('')
    const colourOptions = [
        { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
        { value: 'blue', label: 'Blue', color: '#0052CC' },
        { value: 'purple', label: 'Purple', color: '#5243AA' },
        { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
        { value: 'orange', label: 'Orange', color: '#FF8B00' },
        { value: 'yellow', label: 'Yellow', color: '#FFC400' },
        { value: 'green', label: 'Green', color: '#36B37E' },
        { value: 'forest', label: 'Forest', color: '#00875A' },
        { value: 'slate', label: 'Slate', color: '#253858' },
        { value: 'silver', label: 'Silver', color: '#666666' }
    ]
    const onSubmit = data => {
        // setBasicModal(!basicModal)
        if (isObjEmpty(errors)) {
            // setBasicModal(!basicModal)
            useJwt
                .login({ username, password, rememberLogin, returnUrl }).then(res => {
                    dispatch(handleLogin(res.data))
                    history.push(getHomeRouteForLoggedInUser('admin'))
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
            <div className="fix-margin-left-login">
                <div className="login-box-body">
                    <div className="login-logo text-center">
                        <a ><img src="https://dashboard.transpora.io/assets/img/transpora.png" alt="" className="img-responsive" /></a>
                    </div>
                    <p className="text-center" style={{ color: '#303030' }}>Create New Account</p>
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
                            <Select
                                className="basic-single"
                                classNamePrefix="select"
                                // defaultValue={colourOptions[1]}
                                name="color"
                                options={colourOptions}
                            />
                        </FormGroup>
                        <FormGroup>
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
                        <div className="row">
                            <div className="col-8">
                                <FormGroup>
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
                            </div>
                            <div className="col-4">
                                <FormGroup>
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
                            </div>
                            <div className="col-4">
                                <FormGroup>
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
                            </div>
                            <div className="col-8">
                                <FormGroup>
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
                            </div>
                        </div>
                        <FormGroup>
                            <Select
                                className="basic-single"
                                classNamePrefix="select"
                                // defaultValue={colourOptions[1]}
                                name="color"
                                options={colourOptions}
                            />
                        </FormGroup>
                        <FormGroup>
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
                        <Button.Ripple type='submit' color='primary' block>
                            Sign in
                        </Button.Ripple>
                    </Form>
                    {/* <a className="text-primary">Forget Password</a><br /> */}
                    <a className="text-center text-primary d-block mt-2">No account yet? Register now!</a>
                </div>
            </div>
            <OTP basicModal={basicModal} handelClick={handelClick} />
        </div>
    )
}

export default Register
