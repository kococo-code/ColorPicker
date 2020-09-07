import { observable } from 'mobx';
import createToast from '../util/createToast';
const color = observable({
  colorID : '',
  valid : false,
  changeColorID(target : string){
    this.colorID = target;
    const ColorBackground : any = document.getElementsByClassName('ColorBackground')[0];
    if(this.colorID.length === 7){
      const ColorFiletring : string = '1234567890ABCDEFabcdef';
      for(let i = 0 ; i < this.colorID.length ; i++){
        if(i===0){
            if(this.colorID.charAt(i) !=='#'){
                createToast('error','Invalid Input First Must Be Insert #');
            }
        }
        else{
            if(ColorFiletring.indexOf(this.colorID.charAt(i)) === -1){
                createToast('error',`Invalid Input "${this.colorID.charAt(i)}", Place Of ${i}`);
            }
        }
      }
      
      ColorBackground.style = `background : ${this.colorID} ; transition : all .8s;`
    }
    else{
        ColorBackground.style = `background : white ; transition : all .8s;`
    }
  }
  
});

export { color };