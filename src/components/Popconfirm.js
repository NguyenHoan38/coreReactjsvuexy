import React from 'react'
import PropTypes from 'prop-types'


function Popconfirm(props) {
    return (
        <div>
            <Modal isOpen={props.basicModal} toggle={() => props.handelClick()} className='  modal-dialog-centered'>
                <h4>fsfsfsfffsfsfsf</h4>
            </Modal>
        </div>
    )
}

export default Popconfirm