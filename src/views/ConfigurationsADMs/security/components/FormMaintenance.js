import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import Flatpickr from 'react-flatpickr'
import Select from "react-select"
import { useForm, Controller } from 'react-hook-form'
import classnames from 'classnames'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { selectThemeColors, isObjEmpty, convertDateTime } from '@utils'
import moment from 'moment'
import { Card, CardHeader, CardTitle, CardBody, Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap'
import ToastContent from './../../../../../src/components/ToastContent'
import { toast, Slide } from 'react-toastify'
import { useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
// ** Store & Actions
import { createMaintenanceWinDow, getListWinDowType, updateMaintenanceWinDow } from '../../security/store/action'
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
    { value: 1, label: 'Inactive', color: '#00B8D9', isFixed: true },
    { value: 2, label: 'Active', color: '#0052CC' }
]
const winDowTypeMessge = "winDowType is a required field"
const statusMessge = "status is a required field"
const SignupSchema = yup.object().shape({
    winDowTile: yup.string().required('winDowTile is a required field')
})
function FormMaintenance({ checkForm }) {
    const security = useSelector(state => state.security)
    const history = useHistory()
    const [data, setData] = useState(null)
    const [picker, setPicker] = useState(new Date())
    const [isActive, setIsActive] = useState(false)
    // const []
    const inputEl = useRef()
    // ** Store Vars
    const dispatch = useDispatch()
    const { control, register, errors, handleSubmit, reset } = useForm({
        resolver: yupResolver(SignupSchema),
        defaultValues: {
            winDowTile: "",
            winDowType: null,
            status: null,
            fromDate: "",
            fromTime: "",
            toDate: "",
            toTime: "",
            message: ""
        }
    })
    const handleFakeData = () => {
        reset({
            winDowTile: security.dataMaintenanceByID.winDowTitle,
            winDowType: security.dataListWindowType.find(res => res.id === security.dataMaintenanceByID.winDowType_Id),
            status: statusOptions.find(res => res.value === security.dataMaintenanceByID.status),
            fromDate: moment(security.dataMaintenanceByID.fromDate).format('DD-MM-YYYY'),
            fromTime: moment(security.dataMaintenanceByID.fromDate).format('hh:mm:ss'),
            toDate: moment(security.dataMaintenanceByID.toDate).format('DD-MM-YYYY'),
            toTime: moment(security.dataMaintenanceByID.toTime).format('hh:mm:ss'),
            message: security.dataMaintenanceByID.message
        })
    }
    useEffect(() => {
        dispatch(getListWinDowType())
    }, [security.dataListWindowType.length])

    useEffect(() => {
        if (security.dataMaintenanceByID?.id) {
            handleFakeData()
        }
    }, [security.dataMaintenanceByID])
    const handleBackRoute = () => {
        history.push('/configurations-adm/security/maintenance')
    }
    const isArray = (data) => {
        let result = ""
        if (data && Array.isArray(data)) {
            result = data[0]
        } else {
            result = data
        }
        return result
    }
    const onSubmit = (data) => {
        if (isObjEmpty(errors)) {
            const fromDate = isArray(data.fromDate)
            const fromTime = isArray(data.fromTime)
            const toDate = isArray(data.toDate)
            const toTime = isArray(data.toTime)
            if (checkForm === 'create') {

                dispatch(
                    createMaintenanceWinDow({
                        id: 0,
                        winDowsTitle: data.winDowTile,
                        winDowsType_Id: data.winDowType.value,
                        status: data.winDowType.value,
                        fromDate: convertDateTime(`${moment(fromDate).format('YYYY-MM-DD')} ${moment(fromTime).format('hh:mm:ss')}`),
                        toDate: convertDateTime(`${moment(toDate).format('YYYY-MM-DD')} ${moment(toTime).format('hh:mm:ss')}`),
                        message: data.message
                    })
                ).then(res => {
                    if (res && res.data && res.data && res.data.success) {
                        history.push('/configurations-adm/security/maintenance')
                        toast.success(
                            <ToastContent title={'The maintenance window was created successfully.'} />,
                            { transition: Slide, hideProgressBar: true, autoClose: 2000 }
                        )

                    }
                })
            } else {
                dispatch(
                    updateMaintenanceWinDow({
                        id: security.dataMaintenanceByID?.id,
                        winDowsTitle: data?.winDowTile,
                        winDowsType_Id: data?.winDowType?.value,
                        status: data?.winDowType?.value,
                        fromDate: convertDateTime(`${moment(fromDate).format('YYYY-MM-DD')} ${moment(data.fromTime[0]).format('hh:mm:ss')}`),
                        toDate: convertDateTime(`${moment(toDate).format('YYYY-MM-DD')} ${moment(data.toTime[0]).format('hh:mm:ss')}`),
                        message: data?.message
                    })
                ).then(res => {
                    if (res && res.data && res.data && res.data.success) {
                        history.push('/configurations-adm/security/maintenance')
                        toast.success(
                            <ToastContent title={'Role was successfully updated.'} />,
                            { transition: Slide, hideProgressBar: true, autoClose: 2000 }
                        )
                    }
                })
            }

        }
    }
    return (
        <div className="wrapper wrapper-content">
            <div className="row">
                <div className="col-lg-12">
                    <div className="ibox ">
                        <form onSubmit={handleSubmit(onSubmit)} className="maintenance-window">
                            <div className="ibox-content">
                                <div className="form-group">
                                    <h2>Edit Maintenance Window</h2>
                                </div>
                                <hr />
                                <div className="form-group row">
                                    <label className="col-sm-2 col-form-label">Window titlesdd</label>
                                    <div className="col-sm-10">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <Input
                                                    id='winDowTile'
                                                    name='winDowTile'
                                                    innerRef={register({ required: true })}
                                                    invalid={errors.winDowTile && true}
                                                    placeholder='Bruce'
                                                    disabled={checkForm === 'edit'}
                                                />
                                                {errors.winDowTile && <p className="errors-form">{errors.winDowTile.message}</p>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-2 col-form-label">Type</label>
                                    <div className="col-sm-10">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <Controller
                                                    isClearable
                                                    as={<Select disabled={checkForm === 'edit'} />}
                                                    id='winDowType'
                                                    control={control}
                                                    name='winDowType'
                                                    options={security.dataListWindowType}
                                                    classNamePrefix='select'
                                                    theme={selectThemeColors}

                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-2 col-form-label">Status</label>
                                    <div className="col-sm-10">

                                        <div className="row">
                                            <div className="col-md-12">
                                                <Controller
                                                    isClearable
                                                    as={Select}
                                                    id='status'
                                                    control={control}
                                                    name='status'
                                                    options={statusOptions}
                                                    classNamePrefix='select'
                                                    theme={selectThemeColors}
                                                    disabled={checkForm === 'edit'}
                                                />

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-sm-2 col-form-label">From date &amp; time</label>

                                    <div className="col-sm-2">
                                        <div className={`input-group date ${isActive ? 'active' : ''}`}>
                                            <span className="input-group-addon">
                                                <i className="fa fa-calendar" />
                                            </span>
                                            <Controller
                                                disabled={checkForm === 'edit'}
                                                as={Flatpickr}
                                                control={control}
                                                id='fromDate'
                                                name='fromDate'
                                                className='form-control invoice-edit-input date-picker active-input'
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-2">
                                        <div className="input-group date">
                                            <span className="input-group-addon">
                                                <i className="fa fa-calendar" />
                                            </span>
                                            <Controller
                                                disabled={checkForm === 'edit'}
                                                as={Flatpickr}
                                                control={control}
                                                id='fromTime'
                                                options={{
                                                    enableTime: true,
                                                    noCalendar: true,
                                                    dateFormat: 'H:i',
                                                    time_24hr: true
                                                }}
                                                name='fromTime'
                                                className='form-control invoice-edit-input date-picker active-input'
                                            />
                                        </div>
                                    </div>
                                    <label className="col-sm-2 col-form-label">To date &amp; time</label>
                                    <div className="col-sm-2">
                                        <div className="input-group date">
                                            <span className="input-group-addon">
                                                <i className="fa fa-calendar" />
                                            </span>
                                            <Controller
                                                disabled={checkForm === 'edit'}
                                                as={Flatpickr}
                                                control={control}
                                                id='toDate'
                                                name='toDate'
                                                className='form-control invoice-edit-input date-picker active-input'

                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-2">
                                        <div className="input-group date">
                                            <span className="input-group-addon">
                                                <i className="fa fa-calendar" />
                                            </span>
                                            <Controller
                                                disabled={checkForm === 'edit'}
                                                as={Flatpickr}
                                                control={control}
                                                id='toTime'
                                                options={{
                                                    enableTime: true,
                                                    noCalendar: true,
                                                    dateFormat: 'H:i',
                                                    time_24hr: true
                                                }}
                                                name='toTime'
                                                className='form-control invoice-edit-input date-picker active-input'
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-2 col-form-label">Message</label>
                                    <div className="col-sm-10">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <Input disabled={checkForm === 'edit'} innerRef={register({ required: true })}
                                                    invalid={errors.winDowTile && true}
                                                    type='textarea' name='message' id='message' rows='3' placeholder='Floating Label' style={{ height: '250px' }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <button type="submit" className="btn btn-primary" style={{ float: 'right' }}><i className="fa fa-save" /> Save maintenance window</button>
                                <button onClick={() => handleBackRoute()} type="button" className="btn btn-defualt" style={{ float: 'right', marginRight: '4px' }}><i className="fa fa-arrow-left" /> Back to maintenance windows</button><br /><br />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormMaintenance