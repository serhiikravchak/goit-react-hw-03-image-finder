import { Component } from "react";
import { Overlay,ModalWindow, Img } from "./Modal.styled";

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  onBackdropClick = evt => {
    if (evt.currentTarget === evt.target) {
      this.props.onClose();
    }
  }
    

  render() {
    const {link, tags} =this.props
    return (
      <Overlay onClick={this.onBackdropClick}>
        <ModalWindow>
          <Img src={link} alt={tags} />
        </ModalWindow>
      </Overlay>
    );
  }
}