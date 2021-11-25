import { Card, CardHeader, CardBody, CardTitle, CardText, CardLink, Button } from 'reactstrap'

import { Check, Edit } from 'react-feather'
import { FaSort, FaCaretUp, FaCaretDown } from "react-icons/fa"
import { useEffect, useState } from 'react'
// ** Store & Actions
// import { getListEmployeeRole } from '../../store/action'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { getListListRoles, getLisRoleByID, getLisRolePermissions } from '../../store/action'
const List = () => {
    const security = useSelector(state => state.security)
    const history = useHistory()
    // ** Store Vars
    const dispatch = useDispatch()
    const [pramListRoles, setPramListRoles] = useState({ pageIndex: 1, pageSize: 10, sortBy: "", sortDirection: '', sortDirection: '', searchText: '' })
    const [sort, setSort] = useState({type: 1, title: ''})
    const [search, setSearch] = useState('')
    useEffect(() => {
        dispatch(getListListRoles(pramListRoles))
    }, [pramListRoles])
    
    const handleEditForm = () => {

    }
    const handleSearch = () => {
        setPramListRoles({...pramListRoles, searchText: search})
        // dispatch(getListListRoles(pramListRoles))
    }
    const createRole = () => {
        history.push('/configurations-adm/security/roles/create')
    }
    const handleSort = (type, title) => {
        setSort({
            type,
            title
        })
        setPramListRoles({ ...pramListRoles, sortDirection: type === 1 ? 'desc' : 'asc', sortBy: title })
    }
    const IconSort = ({ type, title }) => {
        if (sort.title === title) {
            if (sort.type === 0) {
                return <FaCaretUp className="cursor-pointer" onClick={() => handleSort(1, title)} />
            } else {
                return <FaCaretDown className="cursor-pointer" onClick={() => handleSort(0, title)} />
            }

        } else {
            return <FaSort className="cursor-pointer" onClick={() => handleSort(1, title)} />
        }
    }
    const handleShowForm = (id) =>  {
        dispatch(getLisRoleByID(id))
        dispatch(getLisRolePermissions())
        history.push('/configurations-adm/security/roles/detail')
    }
    return (
        <div className="card">
            <div className="ibox ">
                <div className="ibox-content">
                    <div className="form-group">
                        <button onClick={() => createRole()} className="btn btn-default" style={{ float: 'right' }}><i className="fa fa-plus" /> Create new role</button>
                    </div>
                    <label className="font-normal">Search role details</label>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search for role..." value={search}  onChange={(e) => setSearch(e.target.value)}/>
                        <span className="input-group-append">
                            <button type="button" className="btn btn-default" onClick={() => handleSearch()}>Search
                                <i className="fa fa-search" />
                            </button>
                        </span>
                    </div>
                    <table className="footable table table-stripped" data-page-size={10} data-filter="#filter">
                        <thead>
                            <tr>
                                <th>Role name <IconSort title="name" type={-1} handleSort={handleSort} />  </th>
                                <th data-hide="phone,tablet">Assigned users <IconSort title="userCount" type={-1} handleSort={handleSort} /></th>
                                <th data-hide="phone,tablet">Visibility <IconSort title="isInternal" type={-1} handleSort={handleSort} /></th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                security.dataListRoles.map((item, index) => (
                                    <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>
                                        {item.userCount} Users
                                    </td>
                                    <td>
                                        <span type="button" className={`label ${item.isInternal ? 'label-danger' : 'label-primary'}`}>{item.visibility}</span>
                                    </td>
                                    <td>
                                        <button onClick={() => handleShowForm(item.id)} className="btn btn-white  btn-xs">
                                            <i className="fa fa-eye text-muted" />
                                        </button>
                                        <button onClick={() =>  history.push('/configurations-adm/security/roles/edit')} className="btn btn-white  btn-xs ml-1 mr-1">
                                            <i className="fa fa-edit text-muted" />
                                        </button>
                                        <button className="btn btn-white  btn-xs" data-toggle="modal" data-target="#deleterole">
                                            <i className="fa fa-trash text-muted" />
                                        </button>
                                    </td>
                                </tr>
                                ))
                            }

                            {/* <tr>
                                <td>Support Agent</td>
                                <td>
                                    3 Users
                                </td>
                                <td>
                                    <span type="button" className="label label-danger">Internal</span>
                                </td>
                                <td>
                                    <button  className="btn btn-white  btn-xs">
                                        <i className="fa fa-eye text-muted" />
                                    </button>
                                    <button  className="btn btn-white  btn-xs ml-1 mr-1">
                                        <i className="fa fa-edit text-muted" />
                                    </button>
                                    <button className="btn btn-white  btn-xs" data-toggle="modal" data-target="#deleterole">
                                        <i className="fa fa-trash text-muted" />
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>Company Administrator</td>
                                <td>
                                    3 Users
                                </td>
                                <td>
                                    <span type="button" className="label label-primary">External</span>
                                </td>
                                <td>
                                    <button  className="btn btn-white  btn-xs">
                                        <i className="fa fa-eye text-muted"  />
                                    </button>
                                    <button  className="btn btn-white  btn-xs ml-1 mr-1">
                                        <i className="fa fa-edit text-muted" />
                                    </button>
                                    <button className="btn btn-white  btn-xs" data-toggle="modal" data-target="#deleterole">
                                        <i className="fa fa-trash text-muted" />
                                    </button>
                                </td>
                            </tr> */}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan={9}>
                                    <ul className="pagination justify-content-center" />
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default List
