import { LightningElement, api} from 'lwc';

export default class ParentChildOne extends LightningElement 
{

    @api selectbox1 = '';
    @api selectbox2 = '';
    @api selectbox3 = '';
    @api refreshflag = false;
    @api refreshcmpchild(event)
    {
        this.selectbox1 = '';
        this.selectbox2 = '';
        this.selectbox3 = '';
        this.refreshflag = !this.refreshflag;
    }
    @api handlechild1(event)
    {
        console.log('@@@@@');
        const select1 = event.detail;
        if(select1 == 'Select')
        {
           this.selectbox1 = 'Deselected'; 
        }
        else if(select1 == 'Deselect')
        {
            this.selectbox1 = 'Selected'; 
        }
        const selectedEvent1 = new CustomEvent("myclick1", {
            detail: this.selectbox1
          });
      
          // Dispatches the event.
          this.dispatchEvent(selectedEvent1);
          console.log('####');
          
    }
    @api handlechild2(event)
    {
        const select1 = event.detail;
        if(select1 == 'Select')
        {
           this.selectbox2 = 'Deselected'; 
        }
        else if(select1 == 'Deselect')
        {
            this.selectbox2 = 'Selected'; 
        }
        const selectedEvent2 = new CustomEvent("myclick2", {
            detail: this.selectbox2
          });
      
          // Dispatches the event.
          this.dispatchEvent(selectedEvent2);
        
    }
    @api handlechild3(event)
    {
        const select1 = event.detail;
        if(select1 == 'Select')
        {
           this.selectbox3 = 'Deselected'; 
        }
        else if(select1 == 'Deselect')
        {
            this.selectbox3 = 'Selected'; 
        }
        const selectedEvent3 = new CustomEvent("myclick3", {
            detail: this.selectbox3
          });
      
          // Dispatches the event.
          this.dispatchEvent(selectedEvent3);
        
    }
    
    
}