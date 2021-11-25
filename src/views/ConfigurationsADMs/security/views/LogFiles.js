import React from 'react'
import PropTypes from 'prop-types'


function LogFiles(props) {
    return (
        <div>
              <div className="wrapper wrapper-content">
            <div className="row">
                <div className="col-lg-12">
                    <div className="ibox ">
                        <div className="ibox-content">
                            <div className="form-group">
                                <button onclick="location.href='configurations_maintenance_create.html'" className="btn btn-default" style={{ float: 'right' }}><i className="fa fa-download" /> Export datas as Excel file</button>
                            </div>
                            <div className="form-group">
                                <label className="col-form-label" htmlFor="product_name">Search for something specific</label>
                                <input type="text" id="activetender" name="activetender" defaultValue placeholder="Search for something specific..." className="form-control" />
                            </div>
                            <table className="footable table table-stripped" data-page-size={10} data-filter="#filter">
                                <thead>
                                    <tr>
                                        <th>Action description</th>
                                        <th data-hide="phone,tablet">User</th>
                                        <th data-hide="phone,tablet">Application</th>
                                        <th data-hide="phone,tablet">Operating System</th>
                                        <th data-hide="phone,tablet">Location</th>
                                        <th data-hide="phone,tablet">Company</th>
                                        <th data-hide="phone,tablet">Country</th>
                                        <th data-hide="phone,tablet">Date &amp; time</th>
                                        <th>IP-Adress</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Logged into Transpora Dashboard</td>
                                        <td data-hide="phone,tablet">benjamin.stuber@transpora.io</td>
                                        <td data-hide="phone,tablet">Desktop Application</td>
                                        <td data-hide="phone,tablet">Windows 10</td>
                                        <td data-hide="phone,tablet">Location A</td>
                                        <td data-hide="phone,tablet">ARAG Bau AG</td>
                                        <td data-hide="phone,tablet">Switzerland</td>
                                        <td data-hide="phone,tablet">27.08.2021, 05:00 Uhr</td>
                                        <td>47.62.89.103</td>
                                    </tr>
                                    <tr>
                                        <td>Logged into Transpora Dashboard</td>
                                        <td data-hide="phone,tablet">benjamin.stuber@transpora.io</td>
                                        <td data-hide="phone,tablet">Desktop Application</td>
                                        <td data-hide="phone,tablet">Windows 10</td>
                                        <td data-hide="phone,tablet">Location A</td>
                                        <td data-hide="phone,tablet">ARAG Bau AG</td>
                                        <td data-hide="phone,tablet">Switzerland</td>
                                        <td data-hide="phone,tablet">27.08.2021, 05:00 Uhr</td>
                                        <td>47.62.89.103</td>
                                    </tr>
                                    <tr>
                                        <td>Logged into Transpora Dashboard</td>
                                        <td data-hide="phone,tablet">benjamin.stuber@transpora.io</td>
                                        <td data-hide="phone,tablet">Desktop Application</td>
                                        <td data-hide="phone,tablet">Windows 10</td>
                                        <td data-hide="phone,tablet">Location A</td>
                                        <td data-hide="phone,tablet">ARAG Bau AG</td>
                                        <td data-hide="phone,tablet">Switzerland</td>
                                        <td data-hide="phone,tablet">27.08.2021, 05:00 Uhr</td>
                                        <td>47.62.89.103</td>
                                    </tr>
                                    <tr>
                                        <td>Logged into Transpora Dashboard</td>
                                        <td data-hide="phone,tablet">benjamin.stuber@transpora.io</td>
                                        <td data-hide="phone,tablet">Desktop Application</td>
                                        <td data-hide="phone,tablet">Windows 10</td>
                                        <td data-hide="phone,tablet">Location A</td>
                                        <td data-hide="phone,tablet">ARAG Bau AG</td>
                                        <td data-hide="phone,tablet">Switzerland</td>
                                        <td data-hide="phone,tablet">27.08.2021, 05:00 Uhr</td>
                                        <td>47.62.89.103</td>
                                    </tr>
                                    <tr>
                                        <td>Logged into Transpora Dashboard</td>
                                        <td data-hide="phone,tablet">benjamin.stuber@transpora.io</td>
                                        <td data-hide="phone,tablet">Desktop Application</td>
                                        <td data-hide="phone,tablet">Windows 10</td>
                                        <td data-hide="phone,tablet">Location A</td>
                                        <td data-hide="phone,tablet">ARAG Bau AG</td>
                                        <td data-hide="phone,tablet">Switzerland</td>
                                        <td data-hide="phone,tablet">27.08.2021, 05:00 Uhr</td>
                                        <td>47.62.89.103</td>
                                    </tr>
                                    <tr>
                                        <td>Logged into Transpora Dashboard</td>
                                        <td data-hide="phone,tablet">benjamin.stuber@transpora.io</td>
                                        <td data-hide="phone,tablet">Desktop Application</td>
                                        <td data-hide="phone,tablet">Windows 10</td>
                                        <td data-hide="phone,tablet">Location A</td>
                                        <td data-hide="phone,tablet">ARAG Bau AG</td>
                                        <td data-hide="phone,tablet">Switzerland</td>
                                        <td data-hide="phone,tablet">27.08.2021, 05:00 Uhr</td>
                                        <td>47.62.89.103</td>
                                    </tr>
                                    <tr>
                                        <td>Logged into Transpora Dashboard</td>
                                        <td data-hide="phone,tablet">benjamin.stuber@transpora.io</td>
                                        <td data-hide="phone,tablet">Desktop Application</td>
                                        <td data-hide="phone,tablet">Windows 10</td>
                                        <td data-hide="phone,tablet">Location A</td>
                                        <td data-hide="phone,tablet">ARAG Bau AG</td>
                                        <td data-hide="phone,tablet">Switzerland</td>
                                        <td data-hide="phone,tablet">27.08.2021, 05:00 Uhr</td>
                                        <td>47.62.89.103</td>
                                    </tr>
                                    <tr>
                                        <td>Logged into Transpora Dashboard</td>
                                        <td data-hide="phone,tablet">benjamin.stuber@transpora.io</td>
                                        <td data-hide="phone,tablet">Desktop Application</td>
                                        <td data-hide="phone,tablet">Windows 10</td>
                                        <td data-hide="phone,tablet">Location A</td>
                                        <td data-hide="phone,tablet">ARAG Bau AG</td>
                                        <td data-hide="phone,tablet">Switzerland</td>
                                        <td data-hide="phone,tablet">27.08.2021, 05:00 Uhr</td>
                                        <td>47.62.89.103</td>
                                    </tr>
                                    <tr>
                                        <td>Logged into Transpora Dashboard</td>
                                        <td data-hide="phone,tablet">benjamin.stuber@transpora.io</td>
                                        <td data-hide="phone,tablet">Desktop Application</td>
                                        <td data-hide="phone,tablet">Windows 10</td>
                                        <td data-hide="phone,tablet">Location A</td>
                                        <td data-hide="phone,tablet">ARAG Bau AG</td>
                                        <td data-hide="phone,tablet">Switzerland</td>
                                        <td data-hide="phone,tablet">27.08.2021, 05:00 Uhr</td>
                                        <td>47.62.89.103</td>
                                    </tr>
                                    <tr>
                                        <td>Logged into Transpora Dashboard</td>
                                        <td data-hide="phone,tablet">benjamin.stuber@transpora.io</td>
                                        <td data-hide="phone,tablet">Desktop Application</td>
                                        <td data-hide="phone,tablet">Windows 10</td>
                                        <td data-hide="phone,tablet">Location A</td>
                                        <td data-hide="phone,tablet">ARAG Bau AG</td>
                                        <td data-hide="phone,tablet">Switzerland</td>
                                        <td data-hide="phone,tablet">27.08.2021, 05:00 Uhr</td>
                                        <td>47.62.89.103</td>
                                    </tr>
                                    <tr>
                                        <td>Logged into Transpora Dashboard</td>
                                        <td data-hide="phone,tablet">benjamin.stuber@transpora.io</td>
                                        <td data-hide="phone,tablet">Desktop Application</td>
                                        <td data-hide="phone,tablet">Windows 10</td>
                                        <td data-hide="phone,tablet">Location A</td>
                                        <td data-hide="phone,tablet">ARAG Bau AG</td>
                                        <td data-hide="phone,tablet">Switzerland</td>
                                        <td data-hide="phone,tablet">27.08.2021, 05:00 Uhr</td>
                                        <td>47.62.89.103</td>
                                    </tr>
                                    <tr>
                                        <td>Logged into Transpora Dashboard</td>
                                        <td data-hide="phone,tablet">benjamin.stuber@transpora.io</td>
                                        <td data-hide="phone,tablet">Desktop Application</td>
                                        <td data-hide="phone,tablet">Windows 10</td>
                                        <td data-hide="phone,tablet">Location A</td>
                                        <td data-hide="phone,tablet">ARAG Bau AG</td>
                                        <td data-hide="phone,tablet">Switzerland</td>
                                        <td data-hide="phone,tablet">27.08.2021, 05:00 Uhr</td>
                                        <td>47.62.89.103</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default LogFiles