import { Component } from "react";
import { Overlay,ModalWindow } from "./Modal.styled";

export class Modal extends Component{
    componentDidMount() {
        window.addEventListener('keydown', this.onKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.onKeyDown);
    }

    onKeyDown = evt => evt.code === 'Escape' && this.props.onClose();
    onBackdropClick = evt => evt.currentTarget === evt.target && this.props.onClose;

    render() {
        return (
          <Overlay onClick={this.onBackdropClick}>
            <ModalWindow>
              <img src={this.props.url} alt="" />
            </ModalWindow>
          </Overlay>
        );
    }
}