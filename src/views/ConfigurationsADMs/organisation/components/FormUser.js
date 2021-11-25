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
import ToastContent from '../../../../components/ToastContent'
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
function FormUser({ checkForm }) {
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
        console.log('status', security.dataMaintenanceByID.status)
        console.log('staus op', statusOptions)
        console.log('22222222222222', statusOptions.find(res => res.value === security.dataMaintenanceByID.status))
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
    const onSubmit = (data) => {

        if (isObjEmpty(errors)) {
            if (checkForm === 'create') {
                dispatch(
                    createMaintenanceWinDow({
                        id: 0,
                        winDowsTitle: data.winDowTile,
                        winDowsType_Id: data.winDowType.value,
                        status: data.winDowType.value,
                        fromDate: convertDateTime(`${moment(data.toDate[0]).format('YYYY-MM-DD')} ${moment(data.toTime[0]).format('hh:mm:ss')}`),
                        toDate: convertDateTime(`${moment(data.toDate[0]).format('YYYY-MM-DD')} ${moment(data.toTime[0]).format('hh:mm:ss')}`),
                        message: data.message
                    })
                ).then(res => {
                    if (res && res.data && res.data && res.data.success) {
                        // props.hideSidebar()
                        // dispatch(getAllData())
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
                        fromDate: convertDateTime(`${moment(data.toDate[0]).format('YYYY-MM-DD')} ${moment(data.toTime[0]).format('hh:mm:ss')}`),
                        toDate: convertDateTime(`${moment(data.toDate[0]).format('YYYY-MM-DD')} ${moment(data.toTime[0]).format('hh:mm:ss')}`),
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
    console.log('222222222222 errors', errors.status)

    return (
        <div className="wrapper wrapper-content">
            <div className="row">
                <div className="col-lg-12">
                    <div className="ibox ">
                        <div className="ibox-content">
                            <h2>User details</h2>
                            <hr />
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">Company*</label>
                                <div className="col-sm-4">
                                    <select className="select2_demo_1 form-control">
                                        <option disabled selected>Please select a company</option>
                                        <option value>Company A</option>
                                        <option value>Company B</option>
                                        <option value>Company C</option>
                                        <option value>Company D</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-12">
                                    <div className="row">
                                        <label className="col-sm-2 col-form-label">Salutation*</label>
                                        <div className="col-sm-4">
                                            <select className="select2_demo_1 form-control">
                                                <option disabled selected>Please select a salutation</option>
                                                <option value>Mr.</option>
                                                <option value>Ms.</option>
                                                <option value>Mrs.</option>
                                            </select>
                                        </div>
                                        <label className="col-sm-2 col-form-label">Job title</label>
                                        <div className="col-md-4">
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-12">
                                    <div className="row">
                                        <label className="col-sm-2 col-form-label">First name*</label>
                                        <div className="col-md-4">
                                            <input type="text" className="form-control" />
                                        </div>
                                        <label className="col-sm-2 col-form-label">Last name*</label>
                                        <div className="col-md-4">
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">Email address*</label>
                                <div className="col-sm-4">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <label className="col-sm-2 col-form-label">Language*</label>
                                <div className="col-sm-4">
                                    <select className="select2_demo_1 form-control">
                                        <option disabled selected>Please select a language</option>
                                        <option value>English</option>
                                        <option value>German</option>
                                        <option value>French</option>
                                        <option value>Italian</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-12">
                                    <div className="row">
                                        <label className="col-sm-2 col-form-label">Phone</label>
                                        <div className="col-md-4">
                                            <input type="text" defaultValue="+41 123 45 67" className="form-control" />
                                        </div>
                                        <label className="col-sm-2 col-form-label">Mobile</label>
                                        <div className="col-md-4">
                                            <input type="text" defaultValue="+41 79 432 48 21" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">Assigned role*</label>
                                <div className="col-sm-4">
                                    <select className="select2_demo_1 form-control">
                                        <option disabled selected>Please select a role</option>
                                        <option value>Global Administrator</option>
                                        <option value>Location Administrator</option>
                                    </select>
                                </div>
                                <label className="col-sm-2 col-form-label">Assigned location*</label>
                                <div className="col-sm-4">
                                    <select className="select2_demo_1 form-control">
                                        <option disabled selected>Please select a location</option>
                                        <option value>Location A</option>
                                        <option value>Location B</option>
                                    </select>
                                </div>
                            </div>
                            <hr />
                            <div className="form-group row">
                                <div className="col-sm-12">
                                    <button className="btn btn-primary btn-sm" type="submit" style={{ float: 'right' }}>
                                        <i className="fa fa-save" /> Save Employee
                                    </button>
                                    <button onclick="window.location.href='employees-read.html'" className="btn btn-default btn-sm" style={{ float: 'right', marginRight: '4px' }}>
                                        <i className="fa fa-chevron-left" /> Back to employees
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormUser