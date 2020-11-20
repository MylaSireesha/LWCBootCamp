import { LightningElement } from 'lwc';

export default class ForEachDemo extends LightningElement 
{
    contactsList =   [
        {Name:"John Smith", Id:"C1",Email:"john@test.com"} 
        ,{Name:"Ann J ", Id:"C2",Email:"Ann@test.com"},
         {Name:"Immanuel ", Id:"C3",Email:"Immanuel@test.com"} 
        ]; 
}