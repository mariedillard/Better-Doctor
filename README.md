# _**A Better Doctor**_

#### _03/29/2019_

#### By _**Marie Dillard**_

## Description
_A simple web app to help you find a range of doctor's in the Seattle area._

### Specs
* _A user should be able to enter a medical issue to receive a list of doctors in the Portland area that fit the search query._
    Input: "arthritis" 
    Output: "Doctors Available"
* _A user should be able to to enter a name to receive a list of doctors in the Portland area that fit the search query._
    Input: "arthritis"
    Output: Practice Name: Arthritis and Pain Clinic of Seattle
            Practitioner: Jane Doe MD 
            Street Address: Seattle WA 666 666th Ave NW 982101
            Phone number: (555) 555-5555
            Website: notarealwebsitefornotarealdoctor.net
            Accepting New Patients: true 
* _If the query response includes any doctors, the following information should be included about each doctor: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients (the API provides this data)._
    Input: "arthritis"
    Output: Practice Name: Arthritis and Pain Clinic of Seattle
            Practitioner: Jane Doe MD 
            Street Address: Seattle WA 666 666th Ave NW 982101
            Phone number: (555) 555-5555
            Website: notarealwebsitefornotarealdoctor.net
            Accepting New Patients: true 
* _If the API call results in an error (any message not a 200 OK), the application should return a notification that states what the error is._
    Input: Error in api key authentication. 
    Output: Returns relevant error message.
* _If the query response doesn't include any doctors (for instance, if no doctors meet the search criteria), the application should return a notification that states that no doctors meet the criteria. (This is not an error so it should be handled separately from any errors.)_
    Input: "not a real illness" 
    Output: "No Doctors Available"

## Known Bugs
_No known bugs._

## Setup instructions
* _Install Node.Js_
* _Clone repository to your desktop using "$ git clone https://github.com/milkybot/Better-Doctor.git"_
* _Navigate into folder and run "$ npm i" to add all packages and dependencies._
* _Navigate into folder and run "$ npm run start"._

## Technologies Used
* _HTML/CSS_
* _JQuery & Javascript_
* _Node.js_
* _Jasmine_
* _Karma_

### License

Copyright (c) 2019 **_milkybot_**
