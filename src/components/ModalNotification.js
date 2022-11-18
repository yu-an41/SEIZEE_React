import './Modal.scss'
import React from 'react'

function ModalNotification() {
  return (
    <>
      <div className="s_modal_body" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <h4 className="modal-title" id="modal_header">
                登入
              </h4>
              <p className="cross-btn">X</p>
            </div>
            {/* <!-- Modal body --> */}
            <div className="modal-body" id="modal_body">
              登入成功
            </div>
            {/* Modal footer */}
            <div className="modal-footer">
              <button type="button" className="modal-btn" id="modal_footer">
                確認
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ModalNotification
