import { LightningElement, track, api } from 'lwc';

export default class GrandParentOne extends LightningElement 
{

     @api buttonColor1 ='success';
     @api buttonColor2 ='success';
     @api buttonColor3 ='success';
   
     @api selectBooleanOne = false;
     @api selectBooleanTwo = false;
     @api selectBooleanThree = false;

     @api buttonLabe1 = 'Select';
     @api buttonLabe2 = 'Select';
     @api buttonLabe3 = 'Select';
     
    @api handleClick1(event) 
    {
        const label = event.target.label;  
        if(label === 'Select')
        {
            this.selectBooleanOne = true; 
            this.buttonLabe1 = 'Deselect';
            this.buttonColor1 = 'destructive';
        }else if(label === 'Deselect')
        {
            this.selectBooleanOne = false; 
            this.buttonLabe1 = 'Select';
            this.buttonColor1 = 'success';
        }
        const selectedEvent1 = new CustomEvent("myclick1", {
            detail: this.buttonLabe1
          });
      
          // Dispatches the event.
          this.dispatchEvent(selectedEvent1);
        
         
     }
    @api handleClick2(event) 
    {
        const label = event.target.label;  
        if(label === 'Select')
        {
            this.selectBooleanTwo = true; 
            this.buttonLabe2 = 'Deselect';
            this.buttonColor2 = 'destructive';
        }else if(label === 'Deselect')
        {
            this.selectBooleanTwo = false; 
            this.buttonLabe2 = 'Select';
            this.buttonColor2 = 'success';
        }
        const selectedEvent2 = new CustomEvent("myclick2", {
            detail: this.buttonLabe2
          });
      
          // Dispatches the event.
          this.dispatchEvent(selectedEvent2);

     }
    @api handleClick3(event) 
    {
        const label = event.target.label;  
        if(label === 'Select')
        {
            this.selectBooleanThree = true; 
            this.buttonLabe3 = 'Deselect';
            this.buttonColor3 ='destructive';
        }else if(label === 'Deselect')
        {
            this.selectBooleanThree = false; 
            this.buttonLabe3 = 'Select';
            this.buttonColor3 ='success';
        }
        const selectedEvent3 = new CustomEvent("myclick3", {
            detail: this.buttonLabe3
          });
      
          // Dispatches the event.
          this.dispatchEvent(selectedEvent3);

     }
     
}