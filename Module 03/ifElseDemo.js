import { LightningElement } from 'lwc';
import TOM_LOGO from '@salesforce/resourceUrl/ResourceTom';
import JERRY_LOGO from '@salesforce/resourceUrl/ResourceJerry';
export default class IfElseDemo extends LightningElement
 {
      TomImagesrc = TOM_LOGO;
      JerryImagesrc = JERRY_LOGO;
      displayTom = false;
      handleClick() {
       this.displayTom = !this.displayTom; 
    }
 
}