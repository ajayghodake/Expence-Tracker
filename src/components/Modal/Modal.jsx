import './Modal.module.css'
import Modal from 'react-modal'

Modal.setAppElement("#root");
export default function ModalComponent({isOpen, setIsOpen, children}) {

    const modelStyles ={
        content: {
            width : '95%',
            maxWidth: '572px',
            top: '50%',
            left: '50%',
            transform: 'translateX(-50%) translateY(-50%)',
            height: 'fit-content',
            maxHeight: '90vh',
            background : 'rgba(239, 239, 239, 0.85)',
            border: '0',
            borderRadius : '15px',
            padding:'2rem',
        }
    }

    const handleClose = () => {
        setIsOpen(false);
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={handleClose}
            shouldCloseOnOverlayClick={true}
            style={modelStyles}
        >
            {children}
        </Modal>
    )
}
