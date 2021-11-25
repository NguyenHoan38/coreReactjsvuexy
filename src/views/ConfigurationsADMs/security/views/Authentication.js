import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { getListMultiAuthenticatorSettings, updateMultiAuthenticatorSettings } from '../store/action'
import { useDispatch, useSelector } from 'react-redux'

function Authentication(props) {

    const dispatch = useDispatch()
    const security = useSelector(state => state.security)
    useEffect(() => {
        dispatch(getListMultiAuthenticatorSettings())
    }, [])
    const handleStatus = async(e, item) => {
       const result  =  await dispatch(updateMultiAuthenticatorSettings({id:item.id, status: e}))
       if (result && result.data && result.data.success) {
        dispatch(getListMultiAuthenticatorSettings())
       }
    }
    return (
        <div className="wrapper wrapper-content">
            <div className="row">
                <div className="col-lg-12">
                    <div className="ibox ">
                        <div className="ibox-content">
                            <h2 className="color-titlte">Multi factor authentication settings</h2>
                            <hr />
                            {security.dataListAuthenticaon.map((item, index) => (
                                <div key={index}>
                                    <div className="form-group row">
                                        <label className="col-sm-11 col-form-label"><p>{item.authenticationName}</p></label>
                                        <div className="col-sm-1">
                                            <div className="switch">
                                                <div className="onoffswitch">
                                                    <input type="checkbox" defaultChecked={item.status} className="onoffswitch-checkbox" id={`${index}`} onChange={(e) => handleStatus(e.target.checked, item)} />
                                                    <label className="onoffswitch-label" htmlFor={`${index}`}>
                                                        <span className="onoffswitch-inner" />
                                                        <span className="onoffswitch-switch" />
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                            ))}

                            {/* <div className="form-group row">
                                <label className="col-sm-11 col-form-label"><p>Microsoft Authenticator (2 factor authentication)</p></label>
                                <div className="col-sm-1">
                                    <div className="switch">
                                        <div className="onoffswitch">
                                            <input type="checkbox" defaultChecked className="onoffswitch-checkbox" id="example2" />
                                            <label className="onoffswitch-label" htmlFor="example2">
                                                <span className="onoffswitch-inner" />
                                                <span className="onoffswitch-switch" />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="form-group row">
                                <label className="col-sm-11 col-form-label"><p>Mail authentication (2 factor authentication)</p></label>
                                <div className="col-sm-1">
                                    <div className="switch">
                                        <div className="onoffswitch">
                                            <input type="checkbox" defaultChecked className="onoffswitch-checkbox" id="example3" />
                                            <label className="onoffswitch-label" htmlFor="example3">
                                                <span className="onoffswitch-inner" />
                                                <span className="onoffswitch-switch" />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="form-group row">
                                <label className="col-sm-11 col-form-label"><p>Mobile App push notification authentication (2 factor authentication)</p></label>
                                <div className="col-sm-1">
                                    <div className="switch">
                                        <div className="onoffswitch">
                                            <input type="checkbox" defaultChecked className="onoffswitch-checkbox" id="example4" />
                                            <label className="onoffswitch-label" htmlFor="example4">
                                                <span className="onoffswitch-inner" />
                                                <span className="onoffswitch-switch" />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="form-group row">
                                <label className="col-sm-11 col-form-label"><p>QR-Code authentication (2 factor authentication)</p></label>
                                <div className="col-sm-1">
                                    <div className="switch">
                                        <div className="onoffswitch">
                                            <input type="checkbox" defaultChecked className="onoffswitch-checkbox" id="example5" />
                                            <label className="onoffswitch-label" htmlFor="example5">
                                                <span className="onoffswitch-inner" />
                                                <span className="onoffswitch-switch" />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Authentication