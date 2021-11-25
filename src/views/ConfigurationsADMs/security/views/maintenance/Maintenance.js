import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { getListMaintenance, getMaintenanceById } from '../../store/action'
import { FaSort, FaCaretDown, FaCaretUp } from "react-icons/fa"
import PaginationSeparated from '../../../../../../src/components/pagination/index'
function Maintenance(props) {
    // ** Store Vars
    const dispatch = useDispatch()
    const history = useHistory()
    const handleShowFormCreate = () => {
        history.push('/configurations-adm/security/maintenance/create')
    }
    const security = useSelector(state => state.security)
    const [pramListMaintenance, setPramListMaintenance] = useState({ pageIndex: 1, pageSize: 10, search: "", status: 0, sortDirection: '', sortCriteria: '' })
    const [sort, setSort] = useState({
        type: 1,
        title: ''
    })

    function getOS() {
        console.log("Da goi vap")
        const unknown = '-'
        // screen
        const screenSize = ''
        if (screen.width) {
            const width = (screen.width) ? screen.width : ''
            const height = (screen.height) ? screen.height : ''
            const screenSize = `''  ${width}  " x "  ${height}`
        }

        // browser
        const nVer = navigator.appVersion
        const nAgt = navigator.userAgent
        let browser = navigator.appName
        let version = `'' + ${parseFloat(navigator.appVersion)}`
        let majorVersion = parseInt(navigator.appVersion, 10)

        let nameOffset, verOffset, ix

        // Opera
        if ((verOffset = nAgt.indexOf('Opera')) !== -1) {
            browser = 'Opera'
            version = nAgt.substring(verOffset + 6)
            if ((verOffset = nAgt.indexOf('Version')) !== -1) {
                version = nAgt.substring(verOffset + 8)
            }
        }
        // Opera Next
        if ((verOffset = nAgt.indexOf('OPR')) !== -1) {
            browser = 'Opera'
            version = nAgt.substring(verOffset + 4)
        } else if ((verOffset = nAgt.indexOf('Edge')) !== -1) {
            browser = 'Microsoft Legacy Edge'
            version = nAgt.substring(verOffset + 5)
        } else if ((verOffset = nAgt.indexOf('Edg')) !== -1) {
            browser = 'Microsoft Edge'
            version = nAgt.substring(verOffset + 4)
        } else if ((verOffset = nAgt.indexOf('MSIE')) !== -1) {
            browser = 'Microsoft Internet Explorer'
            version = nAgt.substring(verOffset + 5)
        } else if ((verOffset = nAgt.indexOf('Chrome')) !== -1) {
            browser = 'Chrome'
            version = nAgt.substring(verOffset + 7)
        } else if ((verOffset = nAgt.indexOf('Safari')) !== -1) {
            browser = 'Safari'
            version = nAgt.substring(verOffset + 7)
            if ((verOffset = nAgt.indexOf('Version')) !== -1) {
                version = nAgt.substring(verOffset + 8)
            }
        } else if ((verOffset = nAgt.indexOf('Firefox')) !== -1) {
            browser = 'Firefox'
            version = nAgt.substring(verOffset + 8)
        } else if (nAgt.indexOf('Trident/') !== -1) {
            browser = 'Microsoft Internet Explorer'
            version = nAgt.substring(nAgt.indexOf('rv:') + 3)
        } else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
            browser = nAgt.substring(nameOffset, verOffset)
            version = nAgt.substring(verOffset + 1)
            if (browser.toLowerCase() === browser.toUpperCase()) {
                browser = navigator.appName
            }
        }
        // trim the version string
        if ((ix = version.indexOf('')) !== -1) version = version.substring(0, ix)
        if ((ix = version.indexOf(' ')) !== -1) version = version.substring(0, ix)
        if ((ix = version.indexOf(')')) !== -1) version = version.substring(0, ix)

        majorVersion = parseInt(`${version}`, 10)
        if (isNaN(majorVersion)) {
            version = parseFloat(navigator.appVersion)
            majorVersion = parseInt(navigator.appVersion, 10)
        }

        // mobile version
        const mobile = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(nVer)

        // cookie
        let cookieEnabled = (navigator.cookieEnabled)

        if (typeof navigator.cookieEnabled === 'undefined' && !cookieEnabled) {
            document.cookie = 'testcookie'
            cookieEnabled = (document.cookie.indexOf('testcookie') !== -1)
        }

        // system
        let os = unknown
        const clientStrings = [
            { s: 'Windows 10', r: /(Windows 10.0|Windows NT 10.0)/ },
            { s: 'Windows 8.1', r: /(Windows 8.1|Windows NT 6.3)/ },
            { s: 'Windows 8', r: /(Windows 8|Windows NT 6.2)/ },
            { s: 'Windows 7', r: /(Windows 7|Windows NT 6.1)/ },
            { s: 'Windows Vista', r: /Windows NT 6.0/ },
            { s: 'Windows Server 2003', r: /Windows NT 5.2/ },
            { s: 'Windows XP', r: /(Windows NT 5.1|Windows XP)/ },
            { s: 'Windows 2000', r: /(Windows NT 5.0|Windows 2000)/ },
            { s: 'Windows ME', r: /(Win 9x 4.90|Windows ME)/ },
            { s: 'Windows 98', r: /(Windows 98|Win98)/ },
            { s: 'Windows 95', r: /(Windows 95|Win95|Windows_95)/ },
            { s: 'Windows NT 4.0', r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/ },
            { s: 'Windows CE', r: /Windows CE/ },
            { s: 'Windows 3.11', r: /Win16/ },
            { s: 'Android', r: /Android/ },
            { s: 'Open BSD', r: /OpenBSD/ },
            { s: 'Sun OS', r: /SunOS/ },
            { s: 'Chrome OS', r: /CrOS/ },
            { s: 'Linux', r: /(Linux|X11(?!.*CrOS))/ },
            { s: 'iOS', r: /(iPhone|iPad|iPod)/ },
            { s: 'Mac OS X', r: /Mac OS X/ },
            { s: 'Mac OS', r: /(Mac OS|MacPPC|MacIntel|Mac_PowerPC|Macintosh)/ },
            { s: 'QNX', r: /QNX/ },
            { s: 'UNIX', r: /UNIX/ },
            { s: 'BeOS', r: /BeOS/ },
            { s: 'OS/2', r: /OS\/2/ },
            { s: 'Search Bot', r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/ }
        ]
        for (const id in clientStrings) {
            const cs = clientStrings[id]
            if (cs.r.test(nAgt)) {
                os = cs.s
                break
            }
        }

        let osVersion = unknown

        if (/Windows/.test(os)) {
            osVersion = /Windows (.*)/.exec(os)[1]
            os = 'Windows'
        }

        switch (os) {
            case 'Mac OS':
            case 'Mac OS X':
            case 'Android':
                osVersion = /(?:Android|Mac OS|Mac OS X|MacPPC|MacIntel|Mac_PowerPC|Macintosh) ([\.\_\d]+)/.exec(nAgt)[1]
                break

            case 'iOS':
                osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer)
                osVersion = `${osVersion[1]}.${osVersion[2]}.${(osVersion[3] | 0)}`
                break
        }

        // flash (you'll need to include swfobject)
        /* script src="//ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js" */
        let flashVersion = 'no check'
        if (typeof swfobject !== 'undefined') {
            const fv = swfobject.getFlashPlayerVersion()
            if (fv.major > 0) {
                flashVersion = `${fv.major}.${fv.minor} r${fv.release}`
            } else {
                flashVersion = unknown
            }
        }

        return {
            browser,
            os,
            osVersion,
            mobile
        }
    }

    useEffect(() => {
        dispatch(getListMaintenance(pramListMaintenance))
    }, [pramListMaintenance])
    const handleSort = (type, title) => {
        setSort({
            type,
            title
        })
        setPramListMaintenance({ ...pramListMaintenance, sortDirection: type === 1 ? 'desc' : 'asc', sortCriteria: title })
    }
    const handleEdit = (id) => {
        dispatch(getMaintenanceById(id))
        history.push('/configurations-adm/security/maintenance/edit')
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
    return (
        <div className="wrapper wrapper-content">
            {/* <IconSort /> */}
            <div className="row">
                <div className="col-lg-12">

                    <div className="ibox ">
                        <div className="ibox-content">
                            <div className="form-group">
                                <button onClick={() => handleShowFormCreate()} className="btn btn-default" style={{ float: 'right' }}><i className="fa fa-plus" /> Create maintenance window</button>
                            </div>
                            <div className="form-group">
                                <label className="col-form-label" htmlFor="product_name">Search maintenance window details</label>
                                <input type="text" id="activetender" name="activetender" onChange={(e) => setPramListMaintenance({ ...pramListMaintenance, search: e.target.value })} className="form-control" />
                            </div>
                            <table className="footable table table-stripped" data-page-size={10} data-filter="#filter">
                                <thead>
                                    <tr>
                                        <th>Window title <IconSort type={-1} title="windowtitle" handleSort={handleSort} /> </th>
                                        <th data-hide="phone,tablet">From date &amp time <IconSort title="fromdate" type={-1} handleSort={handleSort} />  </th>
                                        <th data-hide="phone,tablet">To date &amp time <IconSort title="todate" type={-1} handleSort={handleSort} /></th>
                                        <th data-hide="phone,tablet">Window type <IconSort type={-1} title="windowtype" handleSort={handleSort} /></th>
                                        <th data-hide="phone,tablet">Status <IconSort type={-1} title="status" handleSort={handleSort} /></th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        security?.dataListMaintenance.map((item, index) => (
                                            <tr>
                                                <td>{item.winDowsTitle}</td>
                                                <td>{item.fromDate}</td>
                                                <td>{item.toDate}</td>
                                                <td><span className="label label-primary">{item.winDowsType}</span></td>
                                                <td>
                                                    <span type="button" className={`label  ${item.status ? 'label-primary' : 'label-danger'}`}>{item.status === 2 ? 'Enabled' : 'Disabled'}</span>
                                                </td>
                                                <td>
                                                    <button  onClick={() => handleEdit(item.id) } className="btn btn-white  btn-xs">
                                                        <i className="fa fa-eye text-muted" />
                                                    </button>
                                                    <button onClick={() => handleEdit(item.id)} className="btn btn-white  btn-xs ml-1 mr-1">
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
                                        <td>Maintenance window 2</td>
                                        <td>26.08.2021, 17:00 Uhr</td>
                                        <td>27.08.2021, 05:00 Uhr</td>
                                        <td><span className="label label-secondary">Secondary</span></td>
                                        <td>
                                            <span type="button" className="label label-danger">Disabled</span>
                                        </td>
                                        <td>
                                            <button onClick={() => history.push('/configurations-adm/security/roles/detail')} className="btn btn-white  btn-xs">
                                                <i className="fa fa-eye text-muted" />
                                            </button>
                                            <button onClick={() => history.push('/configurations-adm/security/roles/edit')} className="btn btn-white  btn-xs ml-1 mr-1">
                                                <i className="fa fa-edit text-muted" />
                                            </button>
                                            <button className="btn btn-white  btn-xs" data-toggle="modal" data-target="#deleterole">
                                                <i className="fa fa-trash text-muted" />
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Maintenance window 2</td>
                                        <td>26.08.2021, 17:00 Uhr</td>
                                        <td>27.08.2021, 05:00 Uhr</td>
                                        <td><span className="label label-success">Success</span></td>
                                        <td>
                                            <span type="button" className="label label-danger">Disabled</span>
                                        </td>
                                        <td>
                                            <button onClick={() => history.push('/configurations-adm/security/roles/detail')} className="btn btn-white  btn-xs">
                                                <i className="fa fa-eye text-muted" />
                                            </button>
                                            <button onClick={() => history.push('/configurations-adm/security/roles/edit')} className="btn btn-white  btn-xs ml-1 mr-1">
                                                <i className="fa fa-edit text-muted" />
                                            </button>
                                            <button className="btn btn-white  btn-xs" data-toggle="modal" data-target="#deleterole">
                                                <i className="fa fa-trash text-muted" />
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Maintenance window 2</td>
                                        <td>26.08.2021, 17:00 Uhr</td>
                                        <td>27.08.2021, 05:00 Uhr</td>
                                        <td><span className="label label-danger">Danger</span></td>
                                        <td>
                                            <span type="button" className="label label-danger">Disabled</span>
                                        </td>
                                        <td>
                                            <button className="btn btn-white btn-bitbucket btn-xs">
                                                <i className="fa fa-eye" />
                                            </button>
                                            <button className="btn btn-white btn-bitbucket btn-xs">
                                                <i className="fa fa-edit" />
                                            </button>
                                            <button className="btn btn-white btn-bitbucket btn-xs" data-toggle="modal" data-target="#disablewindow">
                                                <i className="fa fa-ban" />
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Maintenance window 2</td>
                                        <td>26.08.2021, 17:00 Uhr</td>
                                        <td>27.08.2021, 05:00 Uhr</td>
                                        <td><span className="label label-warning">Warning</span></td>
                                        <td>
                                            <span type="button" className="label label-danger">Disabled</span>
                                        </td>
                                        <td>
                                            <button className="btn btn-white btn-bitbucket btn-xs">
                                                <i className="fa fa-eye" />
                                            </button>
                                            <button className="btn btn-white btn-bitbucket btn-xs">
                                                <i className="fa fa-edit" />
                                            </button>
                                            <button className="btn btn-white btn-bitbucket btn-xs" data-toggle="modal" data-target="#disablewindow">
                                                <i className="fa fa-ban" />
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Maintenance window 2</td>
                                        <td>26.08.2021, 17:00 Uhr</td>
                                        <td>27.08.2021, 05:00 Uhr</td>
                                        <td><span className="label label-info">Info</span></td>
                                        <td>
                                            <span type="button" className="label label-danger">Disabled</span>
                                        </td>
                                        <td>
                                            <button className="btn btn-white btn-bitbucket btn-xs">
                                                <i className="fa fa-eye" />
                                            </button>
                                            <button className="btn btn-white btn-bitbucket btn-xs">
                                                <i className="fa fa-edit" />
                                            </button>
                                            <button className="btn btn-white btn-bitbucket btn-xs" data-toggle="modal" data-target="#disablewindow">
                                                <i className="fa fa-ban" />
                                            </button>
                                        </td>
                                    </tr> */}
                                </tbody>
                                {/* <PaginationSeparated /> */}
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
            </div>
        </div >
    )
}

export default Maintenance