import './../styles/Modal.scss'
import React from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#root')

function ModalNotification({
  closeModal,
  NotificationHeader,
  NotificationBody,
  isOpen,
}) {
  // console.log(setIsOpen)
  // console.log(NotificationHeader)
  // console.log(NotificationBody)

  return (
    <Modal isOpen={isOpen} className="s_modal_body" overlayClassName="Overlay">
      <div className="modal-dialog">
        <div className="modal-content">
          {/* Modal Header */}
          <div className="modal-header">
            <p className="modal-title" id="modal_header">
              {NotificationHeader}
            </p>
            <div className="cross-btn" onClick={closeModal}>
              <i className="fa-sharp fa-solid fa-xmark"></i>
            </div>
          </div>
          {/* <!-- Modal body --> */}
          <div className="modal-body" id="modal_body">
            {NotificationBody}
          </div>
          {/* Modal footer */}
          <div className="modal-footer">
            <button
              type="button"
              className="modal-btn"
              id="modal_footer"
              onClick={closeModal}
            >
              確認
            </button>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default ModalNotification
