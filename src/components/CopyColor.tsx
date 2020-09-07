import React from 'react';
import { useObserver } from 'mobx-react';
import useStore from '../context/useStore';
import createToast from '../util/createToast';

function CopyColor(){
    const { color} = useStore();
    function handleOnClick(event : React.MouseEvent<HTMLElement>){
        if(color.colorID.length === 7){
            navigator.clipboard.writeText(color.colorID);
            createToast('info','Copied!')
        }
    }
    return useObserver(()=>(
            <button className="ColorCopyButton" onClick={handleOnClick}>Copy</button>
    ))
}
export default CopyColor;