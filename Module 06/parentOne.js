import { LightningElement,api } from 'lwc';

export default class ParentOne extends LightningElement
 {
     @api count1 = 0;
     @api count2 = 0;
     @api count3 = 0;
     @api result = 0;

     @api select1 = '';
     @api select2 = '';
     @api select3 = '';
     @api refreshcmp = false;
     @api handleClick(event)
     {
        this.refreshcmp = !this.refreshcmp;
        this.result = 0;
        this.count1 = 0;
        this.count2 = 0;
        this.count3 = 0;
        this.template.querySelector('c-parent-child-one').refreshcmpchild(event);
        
     }
     
    handlechild1(event)
    {
        this.select1 = event.detail;
        if(this.select1 == 'Selected')
        {
           this.count1++; 
           this.result++;
        }
        else if(this.select1 == 'Deselected')
        {
            this.count1--; 
            this.result--;
        }
        
    }
    handlechild2(event)
    {
        this.select1 = event.detail;
        if(this.select1 == 'Selected')
        {
           this.count2++; 
           this.result++;
        }
        else if(this.select1 == 'Deselected')
        {
            this.count2--; 
            this.result--;
        }
    }
    handlechild3(event)
    {
        this.select1 = event.detail;
        if(this.select1 == 'Selected')
        {
           this.count3++; 
           this.result++;
        }
        else if(this.select1 == 'Deselected')
        {
            this.count3--; 
            this.result--;
        }
    }
 }