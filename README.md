# Zendesk Hide Ticket Forms Based On Organisation


Hi everyone!
This is pretty specific post on something that I got asked to look into recently and really struggled to find much of help. 
I did come across this thread (https://support.zendesk.com/hc/en-us/articles/204579603-Hide-ticket-forms-based-on-user-s-organization-Professional-Add-on-and-Enterprise-), but nothing worked quite the way we wanted it to, so we came up with the following, its not pretty but it works around the slightly odd way Zendesk deals with the select box.

This is designed to affect the create new request page of Zendesk UI, specifically affecting the dropdown where the user can select what type of request they want to raise.

This will change it so that users can only raise requests they are allowed to based on the organisation they belong to, without having to pay for the Zendesk Brands features.

## What to expect
If a user isn't logged in or isn't attached to an organisation, then they will be redirected to a default form. Whose ticket ID can be specified by replacing the DEFAULTTICKETID in the code.

A user who is logged in, who belongs to an organisation or organisations, which has been setup as per the Setup section below, will only be able to see the types of tickets they are allowed to create, based on what forms their organisation has.

If the user only has 1 allowed type of ticket, they will be redirected to this form and the dropdown will be hidden, seen as they only have one available option.

## Setup
For this to work you need to have added the ID's of the forms a user can access to the organisation as tags. (You can still include other tags, this won't affect those).

These ID's can be found as the last part of URL when editing the form.

You need to replace MYCOMPANY (or the newRequestURL) with the URL of your zendesk UI where users can raise a new request.

You also need to replace DEFAULTTICKETID, with the ID of the form you want non logged in users or users without an organisation to be able to raise, a generic type of request anyone could raise.
