import Modal from 'react-modal';
import { Component } from 'react';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

class ModalWindow extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { isModalOpen } = this.state;
    return (
      <div>
        <button onClick={this.openModal}>Open Modal</button>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <p>I am a modal window</p>
          <button onClick={this.closeModal}>close</button>
        </Modal>
      </div>
    );
  }
}

export default ModalWindow;

// import Modal from 'react-modal';

// const customStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//     maxWidth: 'calc(100% - 48px)',
//     maxHeight: 'calc(100% - 24px)',
//   },

//   overlay: {
//     position: 'fixed',
//     top: '0',
//     left: '0',
//     width: '100vw',
//     height: '100vh',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.8)',
//     zIndex: '1200',
//   },
// };

// Modal.setAppElement('#root');

// const ModalWindow = ({ isModalOpen, closeModal, srcModal, altModal }) => {
//   return (
//     <Modal
//       isOpen={isModalOpen}
//       onRequestClose={closeModal}
//       style={customStyles}
//     >
//       <div>
//         <img src={srcModal} alt={altModal} />
//         <button onClick={closeModal}>close</button>
//       </div>
//     </Modal>
//   );
// };

// export default ModalWindow;
