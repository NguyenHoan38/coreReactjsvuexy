import { Card, CardHeader, CardBody, CardTitle, CardText, CardLink, Button } from 'reactstrap'
import {Check, Edit} from 'react-feather'
const List = () => {
    const handleEditForm = () => {
        
    }
  return (
    <div className="card">
        <div className="wrapper wrapper-content">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="ibox ">
                            <div className="ibox-content">
                                <h2>Contact details</h2>
                                <hr/>
                                <div className="form-group row">
                                    <div className="col-sm-12">
                                        <div className="row">
                                            <label className="col-sm-2 col-form-label">Contact owner</label>
                                            <div className="col-md-4">
                                                <input type="text" disabled value="Company A" className="form-control"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-12">
                                        <div className="row">
                                            <label className="col-sm-2 col-form-label">Salutation</label>
                                            <div className="col-md-4">
                                                <input type="text" disabled value="Mr." className="form-control" />
                                            </div>
                                            <label className="col-sm-2 col-form-label">E-Mail address</label>
                                            <div className="col-md-4">
                                                <input type="text" disabled value="benjamin.stuber@transpora.io"
                                                    className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-12">
                                        <div className="row">
                                            <label className="col-sm-2 col-form-label">First name</label>
                                            <div className="col-md-4">
                                                <input type="text" disabled value="Benjamin" className="form-control" />
                                            </div>
                                            <label className="col-sm-2 col-form-label">Last name</label>
                                            <div className="col-md-4">
                                                <input type="text" disabled value="Stuber" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-12">
                                        <div className="row">
                                            <label className="col-sm-2 col-form-label">Phone number</label>
                                            <div className="col-md-4">
                                                <input type="text" disabled={false} value="+41 31 123 45 67"
                                                    className="form-control" />
                                            </div>
                                            <label className="col-sm-2 col-form-label">Mobile number</label>
                                            <div className="col-md-4">
                                                <input type="text" disabled value="+41 79 432 48 21"
                                                    className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr/>
                                <div className="form-group row">
                                    <div className="col-sm-12">
                                        <button 
                                            className="btn btn-primary btn-sm" type="submit" style={{float:'right'}} onClick={() => handleEditForm()}>
                                           <Edit size={14}/> 
                                           <span className='align-middle ml-25'>Edit Contact</span>
                                        </button>
                                        {/* <Button.Ripple outline color='primary' style={{float:'right'}}>
                                        <Edit size={14}/> 
                                        <span className='align-middle ml-25'> Edit Contact</span>
                                        </Button.Ripple> */}
                                        {/* <Button.Ripple outline color='primary' style={{float:'right', marginRight:'4px'}}>
                                        <Edit size={14}/> 
                                        <span className='align-middle ml-25'>Back to contacts</span>
                                        </Button.Ripple> */}
                                        <button 
                                            className="btn btn-default btn-sm" style={{float:'right', marginRight:'4px'}} >
                                             <Edit size={14}/> 
                                            <span className='align-middle ml-25'>Back to contacts</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default List
