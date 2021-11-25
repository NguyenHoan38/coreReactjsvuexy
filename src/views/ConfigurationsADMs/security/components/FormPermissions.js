import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import Flatpickr from 'react-flatpickr'
import Select from "react-select"
import { useForm, Controller } from 'react-hook-form'
import classnames from 'classnames'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { selectThemeColors, isObjEmpty } from '@utils'
import moment from 'moment'
import { Card, CardHeader, CardTitle, CardBody, Button, Form, FormGroup, Label, Input, FormFeedback, CustomInput  } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
// ** Store & Actions
import { createMaintenanceWinDow } from '../../security/store/action'
// ** Styles
import 'react-slidedown/lib/slidedown.css'
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/flatpickr/flatpickr.scss'
import '@styles/base/pages/app-invoice.scss'
const colourOptions = [
    { value: '1', label: 'Primary', color: '#00B8D9', isFixed: true },
    { value: '2', label: 'Secondary', color: '#0052CC' },
    { value: '3', label: 'Success', color: '#0052CC' },
    { value: '4', label: 'Danger', color: '#0052CC' },
    { value: '5', label: 'Warning', color: '#0052CC' },
    { value: '6', label: 'Info', color: '#0052CC' }
]
const statusOptions = [
    { value: '1', label: 'Inactive', color: '#00B8D9', isFixed: true },
    { value: '2', label: 'Active', color: '#0052CC' }
]
const winDowTypeMessge = "winDowType is a required field"
const statusMessge = "status is a required field"
const SignupSchema = yup.object().shape({
    winDowTile: yup.string().required('winDowTile is a required field')
})
function FormMaintenance({checkForm }) {
    const [data, setData] = useState(null)
    const [picker, setPicker] = useState(new Date())
    const [isActive, setIsActive] = useState(false)
    const inputEl = useRef()
    // ** Store Vars
    const dispatch = useDispatch()
    const { control, register, errors, handleSubmit, reset } = useForm({
        resolver: yupResolver(SignupSchema),
        defaultValues: {
            winDowTile: "",
            visibility: null,
            status: null,
            fromDate: "",
            fromTime: "",
            toDate: "",
            toTime: "",
            message: ""
        }
    })
    const onSubmit = (data) => {
        moment(data.toDate[0]).format('MM-DD-YYYY')
        moment(data.toTime[0]).format('h:mm')
        if (isObjEmpty(errors)) {
            if (0 === 0) {
                dispatch(
                    createMaintenanceWinDow({
                        winDowTile: data.winDowTile,
                        winDowType: data.winDowType.value,
                        status: data.winDowType.value,
                        fromDate: `${moment(data.fromDate[0]).format('MM-DD-YYYY')}:${moment(data.fromTime[0]).format('h:mm')}`,
                        toDate: `${moment(data.toDate[0]).format('MM-DD-YYYY')}:${moment(data.toTime[0]).format('h:mm')}`,
                        message: data.message
                    })
                ).then(res => {
                    if (res && res.data && res.data && res.data.success) {
                        // props.hideSidebar()
                        // dispatch(getAllData())
                        // toast.success(
                        //     <ToastContent title={'Successful new creation!'} />,
                        //     { transition: Slide, hideProgressBar: true, autoClose: 2000 }
                        // )
                    }
                })
            } else {
                dispatch(
                    updateProject({

                    })
                ).then(res => {
                    if (res && res.data && res.data && res.data.success) {
                        // props.hideSidebar()
                        // dispatch(getAllData())
                        // toast.success(
                        //     <ToastContent title={'Update Successful!'} />,
                        //     { transition: Slide, hideProgressBar: true, autoClose: 2000 }
                        // )
                    }
                })
            }

        }
    }
    console.log('222222222222 errors', errors.status)
    const handleFakeData = () => {
        reset({
            winDowTile: "call from api"
        })
    }
    return (
        <div className="wrapper wrapper-content">
            <div className="row">
                <div className="col-lg-12">
                    <div className="ibox ">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="ibox-content">
                                <div className="form-group">
                                    <h2>Role &amp; Permissions</h2>
                                </div>
                                <hr />
                                <div className="form-group row" style={{ marginBottom: '20px' }}>
                                    <label className="col-sm-2 col-form-label">Role name</label>
                                    <div className="col-sm-10">
                                        <div className="row">
                                            <div className="col-md-12">
                                                {/* <input type="text" className="form-control" /> */}
                                                <Input
                                                    id='nameRole'
                                                    name='nameRole'
                                                    innerRef={register({ required: true })}
                                                    invalid={errors.nameRole && true}
                                                    placeholder='Bruce'
                                                />
                                                {errors.nameRole && <p className="errors-form">{errors.nameRole.message}</p>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-2 col-form-label">Visibility</label>
                                    <div className="col-sm-10">
                                        <div className="row">
                                            <div className="col-md-12">
                                                 <Controller
                                                    isClearable
                                                    as={Select}
                                                    id='visibility'
                                                    control={control}
                                                    name='visibility'
                                                    options={colourOptions}
                                                    classNamePrefix='select'
                                                    theme={selectThemeColors}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="form-group row align-items-center">
                                    <label className="col-sm-2 col-form-label">Role &amp; permission management</label>
                                    <div className="col-sm-2">
                                        <div className="i-checks">
                                            <CustomInput
                                                type='checkbox'
                                                className='custom-control-Primary'
                                                id='createNew'
                                                label='Create new role &amp; permissions'
                                                defaultChecked
                                                inline
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-2">
                                        <div className="i-checks">
                                            <CustomInput
                                                type='checkbox'
                                                className='custom-control-Primary'
                                                id='ReadRole'
                                                label='Read role &amp; permissions'
                                                defaultChecked
                                                inline
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-2">
                                        <div className="i-checks">
                                            <CustomInput
                                                type='checkbox'
                                                className='custom-control-Primary'
                                                id='updaterole'
                                                label='Update role &amp; permissions'
                                                defaultChecked
                                                inline
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-2">
                                        <div className="i-checks">
                                            <CustomInput
                                                type='checkbox'
                                                className='custom-control-Primary'
                                                id='deleteRole'
                                                label='Delete role &amp; permissions'
                                                defaultChecked
                                                inline
                                            />
                                        </div>
                                    </div>
                                </div>
                         
                                <hr />

                                <button className="btn btn-transporayellow" style={{ float: 'right' }}>
                                    {checkForm === 'create' ? (<><i className="fa fa-save" /> Save role</>) : (<><i class="fa fa-edit" /> Edit role</>)}
                                </button>
                                <button className="btn btn-defualt" style={{ float: 'right', marginRight: '4px', backgroundColor: 'rgb(239, 239, 239)' }}><i className="fa fa-arrow-left" /> Back to roles &amp; permissions</button><br /><br />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormMaintenance