import React from 'react';
import { useSelector } from 'react-redux';
import Modal from './Modal';
import ModalNotice from './ModalNotice';

function PopUp(props) {
    const step=useSelector(state=>state.step);
    const modalState = useSelector(state => state.modal.active);
    const getModalNotice=()=>{
        if(step===2){
            return <ModalNotice/>
        }
    }
    const getModalItem=()=>{
        if(modalState===true){
            return <Modal/>
        }
    }
    return (
        <div className="popup-container">
            {getModalNotice()}
            {getModalItem()}
        </div>
    );
}

export default PopUp;