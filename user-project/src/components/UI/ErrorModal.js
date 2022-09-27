import "./ErrorModal.css";
import Card from "./Card";
import React from "react";
import ReactDOM from 'react-dom'

const Backdrop = props =>{
    return <div onClick={props.onAcceptErrorBackdrop} className = "backdrop"/>
}

const ModalOverlay = props=>{
return <Card className="modal">
      <header className="header">
        <h2>{props.titleModal}</h2>
      </header>
      <div className="content">
        <p>{props.messageModal}</p>
      </div>
      <footer className="actions">
        <button onClick={props.onAcceptErrorModal}>Okay</button>
      </footer>
    </Card>
}

function ErrorModal(props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop onAcceptErrorBackdrop= {props.onAcceptError}/>, document.getElementById('backdrop-root'))}
      {ReactDOM.createPortal(<ModalOverlay titleModal={props.title} messageModal = {props.message} onAcceptErrorModal= {props.onAcceptError}/>, document.getElementById('overlay-root'))}
    </React.Fragment>
  );
}

export default ErrorModal;
