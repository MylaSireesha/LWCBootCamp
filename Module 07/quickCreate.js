import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class QuickCreate extends LightningElement 
{
    @api accountId;
    @api showFieldAccFlag = false;

    @api contactId;
    @api showFieldConFlag = false;

    @api optyId;
    @api showFieldoptyFlag = false;
    @api showAllFieldsacc(event)
    {
         this.showFieldAccFlag =! this.showFieldAccFlag;
    }
    @api showAllFieldscontact(event)
    {
         this.showFieldConFlag =! this.showFieldConFlag;
    }
    @api showAllFieldsopty(event)
    {
         this.showFieldoptyFlag =! this.showFieldoptyFlag;
    }
    handlesuccessacc(event) 
    {
        this.accountId = event.detail.id;
        
        const toastEvent = new ShowToastEvent({ 
            title: 'Account ', 
            message: 'Account Created Successfully!!!', 
            variant: 'success' 
        }); 
        this.dispatchEvent( toastEvent ); 
        
        this.handleresetacc(event);
       
    }
    handlesuccesscontact(event) 
    {
        this.contactId = event.detail.id;
        
        const toastEvent = new ShowToastEvent({ 
            title: 'Contact ', 
            message: 'Contact Created Successfully!!!', 
            variant: 'success' 
        }); 
        this.dispatchEvent( toastEvent ); 
        
        this.handleresetcontact(event);
       
    }
    handlesuccessopty(event) 
    {
        this.optyId = event.detail.id;
        
        const toastEvent = new ShowToastEvent({ 
            title: 'Opportunity ', 
            message: 'Opportunity Created Successfully!!!', 
            variant: 'success' 
        }); 
        this.dispatchEvent( toastEvent ); 
        
        this.handleresetopty(event);
       
    }
    
    @api handleresetacc(event)
    {
        const inputfields = this.template.querySelectorAll('lightning-input-field' );
           if(inputfields)
           {
               inputfields.forEach(field=>
                {field.reset();}
                );
           }
        
    }
    @api handleresetcontact(event)
    {
        const inputfields = this.template.querySelectorAll('lightning-input-field' );
           if(inputfields)
           {
               inputfields.forEach(field=>
                {field.reset();}
                );
           }
        
    }
    @api handleresetopty(event)
    {
        const inputfields = this.template.querySelectorAll('lightning-input-field' );
           if(inputfields)
           {
               inputfields.forEach(field=>
                {field.reset();}
                );
           }
        
    }
}