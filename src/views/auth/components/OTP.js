import { Fragment, useEffect, useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Alert } from 'reactstrap'
import OtpInput from 'react-otp-input'
// import './assets/scss/style.scss'
import './../../../assets/scss/styleOTP.scss'
// import './../../'
// import './assets/scss/style.scss'
const OTP = (props) => {

    const [valueOTP, setValueOTP] = useState('')
    const [isDisabled, setIsDisabled] = useState(false)
    // const [basicModal, setBasicModal] = useState(false)
    const [centeredModal, setCenteredModal] = useState(false)
    const [disabledModal, setDisabledModal] = useState(false)
    const [disabledAnimation, setDisabledAnimation] = useState(false)
    // useEffect(() => {
    //     console.log('22222222222222222')

    //   }, [basicModal !== basicModal])
    return (
        <div className='demo-inline-spacing'>
            <div className='basic-modal'>
                <Modal isOpen={props.basicModal} toggle={() => props.handelClick()} className='  modal-dialog-centered'>
                    <ModalHeader toggle={() => props.handelClick()}>Two Step Verification 💬</ModalHeader>
                    <div className="p-3">
                        <span className="mb-2">We sent a verification code to your mobile. Enter the code from the mobile in the field below.
                        </span>
                        <div className="margin-top--small mb-2">
                            <h6>Type your 6 digit security code</h6>
                            <OtpInput
                                value={valueOTP}
                                onChange={setValueOTP}
                                numInputs={6}
                                separator={<span>-</span>}
                                inputStyle="inputStyle"
                            />
                        </div>

                        <div className="btn-row flex-row-reverse mt-3 ">
                            <Button className="w-100 mb-3" color='primary' disabled={valueOTP.length < 6}>
                                Send
                            </Button>
                        </div>
                        <p className="text-center mt-2">
                            <span>Didn’t get the code?</span><a className="text-primary"><span>&nbsp;Resend</span></a>
                        </p>
                    </div>

                </Modal>
            </div>
        </div>
    )
}
export default OTP
