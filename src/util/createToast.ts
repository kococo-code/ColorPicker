import React, { useEffect } from 'react';
import { create } from 'domain';

interface props{
    ToastType : String,
    ToastMsg : String
}

function createToast(ToastType :String,ToastMsg: String){
    console.log(ToastType);
    const ColorPallate = {
        error : '#E5B3AD',
        info : '#A39CF4'
    }
    const toast : any = document.createElement('li');
    toast.style = `background : ${ToastType === 'error' ? ColorPallate.error : ColorPallate.info } ; color : black; opacity : 1;`;
    toast.textContent = ToastMsg;
    const ToastBox : any = document.getElementsByClassName('ToastBox')[0];
    ToastBox.appendChild(toast);
    const timer = () => setTimeout(() => {
        toast.style = `background : ${ToastType === 'error' ? ColorPallate.error : ColorPallate.info } ; color : black; opacity:0 ;transition : opacity .4s `;
        toast.parentNode.removeChild(toast);
    }, 5500);
    timer();
    clearTimeout(timer());

}
export default createToast;