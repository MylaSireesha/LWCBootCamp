import { LightningElement, api, track } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
export default class QuickCreateNavigation extends NavigationMixin(LightningElement)
 {
    @api selectedOption;
    @api accflag = false;
    @api conflag = false;
    @api optyflag = false;
    @api accountId;
    @api contactId;
    @api optyId;

    @api createaccount()
    {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'new'
            },
        });
    }
    @api createcontact()
    {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'new'
            },
        });
    }
    @api createopportunity()
    {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Opportunity',
                actionName: 'new'
            },
        });
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
               
    }
    @api changeHandler(event) 
    {
        const field = event.target.name;
        if (field === 'optionSelect')
         {
            this.selectedOption = event.target.value;
            console.log('^^^^^&&&'+this.selectedOption);
            if(this.selectedOption == 'Account')
            {
               this.accflag = true;
               this.conflag = false;
               this.optyflag = false;
            } else if(this.selectedOption == 'Contact')
            {
                this.conflag = true;
                this.accflag = false;
                this.optyflag = false;
            } else if(this.selectedOption == 'Opportunity')
            {
                this.optyflag = true;
                this.accflag = false;
                this.conflag = false;
            }else if(this.selectedOption == 'None')
            {
                this.accflag = false;
                this.conflag = false;
                this.optyflag = false; 
            }
            
            
         } 
    }

 }