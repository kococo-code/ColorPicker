import React from 'react';
import useStore from '../context/useStore';
import { useObserver } from 'mobx-react';
import CopyColor from './CopyColor';
function InputForm(){
    const { color } = useStore();
    function onChange(event : React.ChangeEvent<HTMLInputElement>){
        color.changeColorID(event.target.value);
    }
    return useObserver(()=>(
        <div id="InputForm">
            <input type="text" placeholder="color" onChange={onChange}></input>
            <CopyColor></CopyColor>
        </div>
    ))
}
export default InputForm;