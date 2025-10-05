import React from 'react';

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Add Expenditure</h3>
        <form>
          {/* Add form fields here */}
        </form>
        <div className="modal-actions">
          <button className="btn btn-success">Save</button>
          <button className="btn btn-secondary" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;