public with sharing class AccContactsController {
   @AuraEnabled(cacheable=true)
   public static List<Contact> getContacts(String accId)
   {
      return[select Id,AccountId,Name,Lastname,Email,Phone from Contact where AccountId=:accId]; 
   }
}
