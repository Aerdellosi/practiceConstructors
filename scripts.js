// // Business Logic for AddressBook ---------
// function AddressBook() {
//     this.contacts = {};
//     this.currentId = 0;
//   }
  
//   AddressBook.prototype.addContact = function(contact) {
//     contact.id = this.assignId();
//     this.contacts[contact.id] = contact;
//   };
  
//   AddressBook.prototype.assignId = function() {
//     this.currentId += 1;
//     return this.currentId;
//   };
  
//   AddressBook.prototype.findContact = function(id) {
//     if (this.contacts[id] !== undefined) {
//       return this.contacts[id];
//     }
//     return false;
//   };
  
//   AddressBook.prototype.deleteContact = function(id) {
//     if (this.contacts[id] === undefined) {
//       return false;
//     }
//     delete this.contacts[id];
//     return true;
//   };
  
//   // Business Logic for Contacts ---------
//   function Contact(firstName, lastName, phoneNumber) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.phoneNumber = phoneNumber;
//   }
  
//   Contact.prototype.fullName = function() {
//     return this.firstName + " " + this.lastName;
//   };


//DESTINATIONS --> City --> Seattle, landmarks, time of year, location, notes, 


function City(address, landmark, timeOfYear) {
    this.address = address;
    this.landmark = landmark;
    this.timeOfYear = timeOfYear;
}

function CitiesDB() {
    this.city = {};
    this.currentID = -1;
}

CitiesDB.prototype.addCity = function (city) {
    city.id = this.assignID();
    this.city[city.id] = city;
}

CitiesDB.prototype.assignID = function () {
    this.currentID+=1;
    return this.currentID;
}

let Seattle = new City("400 Broad St.", "Space Needle", "January thru April");
let Portland = new City("SW Council Crest Dr.", "Council Crest", "April to October");
let Paris = new City("112 Rue du Faubourg Saint-Honore", "Epicure", "October to Christmas");

let citiesDB = new CitiesDB();

citiesDB.addCity(Seattle);
citiesDB.addCity(Portland);
citiesDB.addCity(Paris);

console.log(citiesDB.city[2]);
