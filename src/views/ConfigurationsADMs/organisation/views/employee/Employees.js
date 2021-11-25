import { Card, CardHeader, CardBody, CardTitle, CardText, CardLink, Button } from 'reactstrap'

import { Check, Edit } from 'react-feather'
import { FaSort } from "react-icons/fa"
import { useEffect, useState } from 'react'
// ** Store & Actions
import { getListEmployeeRole } from '../../store/action'
import { useDispatch, useSelector } from 'react-redux'
import defaultAvatar from '@src/assets/images/portrait/small/avatar-s-11.jpg'
import Avatar from '@components/avatar'
import { useHistory } from 'react-router'
const List = () => {
    const organisation = useSelector(state => state.organisation)
    const history = useHistory()
    // ** Store Vars
    // dataListRoleEmployee
    const dispatch = useDispatch()
    const [pramEmployees, setpramEmployees] = useState({ pageIndex: 1, pageSize: 10, sortBy: "", sortDirection: 0, searchText: '' })
    useEffect(() => {
        dispatch(getListEmployeeRole({
            keyword: "",
            pageIndex: 1,
            pageSize: 10,
            sort: "",
            direction: ""
        }))
    }, [])
    console.log('2222222222222222222222', organisation.dataListRoleEmployee)
    const handleEditForm = () => {


    }
    const handleShowModal = () => {
        history.push('/configurations-adm/security/roles/create')
    }
    const userAvatar = defaultAvatar
    return (
        <div className="wrapper wrapper-content">
            <div className="row">
                <div className="col-lg-12">
                    <div className="ibox ">
                        <div className="ibox-content">
                            <div className="form-group">
                                <button onClick={() => handleShowModal()} className="btn btn-default" style={{ float: 'right' }}><i className="fa fa-plus" /> Create employee</button>
                            </div>
                            <label className="font-normal">Search employee details</label>
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search for employee..." />
                                <span className="input-group-append">
                                    <button type="button" className="btn btn-default">Search
                                        <i className="fa fa-search" />
                                    </button>
                                </span>
                            </div>
                            <table className="footable table table-stripped" data-page-size={10} data-filter="#filter">
                                <thead>
                                    <tr>
                                        <th data-hide="phone,tablet">Image</th>
                                        <th data-hide="phone,tablet">First name</th>
                                        <th data-hide="phone,tablet">Last name</th>
                                        <th>Email address</th>
                                        <th data-hide="phone,tablet">Language</th>
                                        <th data-hide="phone,tablet">Role name</th>
                                        <th data-hide="phone,tablet">Last login</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        organisation.dataListRoleEmployee.map((item, index) => (
                                            <tr key={index}> 
                                            <td className="client-avatar">
                                                {/* <img alt="image" src="img/a2.jpg" style={{ borderRadius: '0px' }} /> */}
                                                <Avatar img={ item.image && item.image !== null ? item.image : userAvatar} imgHeight='40' imgWidth='40'  />
                                                </td>
                                            <td>{item?.firstName}</td>
                                            <td>{item?.lastName}</td>
                                            <td>{item?.email}</td>
                                            <td>{item?.language}</td>
                                            <td><span className="label">{item?.userRole?.name}</span></td>
                                            <td>{item.lastLogin}</td>
                                            <td>
                                                    <button onClick={() => history.push('/configurations-adm/security/roles/detail')} className="btn btn-white  btn-xs">
                                                        <i className="fa fa-eye text-muted" />
                                                    </button>
                                                    <button onClick={() => handleEdit(item.id)} className="btn btn-white  btn-xs ml-1 mr-1">
                                                        <i className="fa fa-edit text-muted" />
                                                    </button>
                                                    <button className="btn btn-white  btn-xs" data-toggle="modal" data-target="#deleterole">
                                                        <i className="fa fa-trash text-muted" />
                                                    </button>
                                                    <button className="btn btn-white  btn-xs ml-1" data-toggle="modal" data-target="#deleterole">
                                                    <i className="fa fa-ban text-muted" />
                                                    </button>
                                                    
                                                </td>
                                        </tr>
                                        ))
                                    }
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colSpan={10}>
                                            <ul className="pagination justify-content-center" />
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal inmodal" id="disbaleemployee" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content animated bounceInDown">
                        <div className="modal-header">
                            <i className="fa fa-ban modal-icon" />
                            <h4 className="modal-title">Deactivate employee?</h4>
                        </div>
                        <div className="modal-body">
                            <p>Bitte bestätigen Sie die Deaktivierung mit einem Klick auf <b>Mitarbeiter deaktivieren"</b>.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-white" data-dismiss="modal"><i className="fa fa-times" /> Abbrechen</button>
                            <button type="button" className="btn btn-danger"><i className="fa fa-check" /> Mitarbeiter deaktivieren</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal inmodal" id="enableemployee" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content animated bounceInDown">
                        <div className="modal-header">
                            <i className="fa fa-check modal-icon" />
                            <h4 className="modal-title">Mitarbeiter aktivieren?</h4>
                        </div>
                        <div className="modal-body">
                            <p>Bitte bestätigen Sie die Aktivierung mit einem Klick auf <b>Mitarbeiter aktivieren"</b>.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-white" data-dismiss="modal"><i className="fa fa-times" /> Abbrechen</button>
                            <button type="button" className="btn btn-primary"><i className="fa fa-check" /> Mitarbeiter aktivieren</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal inmodal" id="deleteemployee" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content animated bounceInDown">
                        <div className="modal-header">
                            <i className="fa fa-check modal-icon" />
                            <h4 className="modal-title">Mitarbeiter löschen?</h4>
                        </div>
                        <div className="modal-body">
                            <p>Bitte bestätigen Sie die Löschung mit einem Klick auf <b>Mitarbeiter löschen"</b>.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-white" data-dismiss="modal"><i className="fa fa-times" /> Abbrechen</button>
                            <button type="button" className="btn btn-danger"><i className="fa fa-check" /> Mitarbeiter löschen</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default List
