import React from 'react';
import './Modal.css'; // Importing CSS for styling

interface ModalProps {
  isOpen: boolean; // Determines if the modal is open
  onClose: () => void; // Function to close the modal
  title: string; // Title of the modal
  children: React.ReactNode; // Content of the modal
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null; // If modal is not open, return null

  return (
    <div className="modal-overlay"> {/* Overlay for the modal */}
      <div className="modal-content"> {/* Modal content container */}
        <div className="modal-header"> {/* Header section */}
          <h2>{title}</h2>
          <button className="close-button" onClick={onClose}>X</button> {/* Close button */}
        </div>
        <div className="modal-body"> {/* Body section */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal; // Default export of the Modal component