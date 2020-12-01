import { LightningElement, api, wire } from 'lwc';
import getContacts from "@salesforce/apex/AccContactsController.getContacts";
export default class LookupRecords extends LightningElement 
{
    @api selectedRecordId;  
    @api resetflag = false;
    @api disabled = false;
    @api contactsList;
    
    //@wire(getContacts, {accId:'$selectedRecordId'}) contactsList;
    @api onValueSelection(event)
    {
        this.selectedRecordId = event.target.value;
        console.log('&&&&&'+this.selectedRecordId);
        if (this.selectedRecordId != null) {
            getContacts({
                    accId: this.selectedRecordId
                })
                .then(result => {
                    this.contactsList = result;
                    // eslint-disable-next-line no-console
                    console.log('result' + JSON.stringify(result) + this.selectedRecordId);
                })
                .catch(error => {
                    this.error = error;
                });
        }
        this.disabled = true;
    }
   
    @api resetsearch(event)
    {
        this.resetflag =! this.resetflag;
        const field = this.template.querySelector('lightning-input-field');
        if(field)
        {field.reset();}
        this.disabled = false;
        this.contactsList = '';
    }

}