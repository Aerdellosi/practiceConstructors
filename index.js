//BUSINESS LOGIC____make the database

function City(name, address, landmark, timeOfYear) {
    
    this.name = name;
    this.address = address;
    this.landmark = landmark;
    this.timeOfYear = timeOfYear;
}

function CitiesDB() {
    this.city = {};
    this.currentID = 0;
}

    //UI LOGIC____display output

    function listCities(pastCitiesToDisplay){
        let citiesDiv = document.querySelector('div#cities');
        
        citiesDiv.innerText = null;
        
        const ulElement = document.createElement("ul");

        Object.keys(pastCitiesToDisplay.city).forEach(function(key) {
            
            const city = pastCitiesToDisplay.findCity(key);
            const liElement = document.createElement("li");
            
            liElement.append(city.fullName());
            console.log(liElement);
           
            liElement.setAttribute("id", city.id);
            ulElement.append(liElement);

       
        });
        citiesDiv.append(ulElement);

    }


City.prototype.fullName =  function(){
    return this.name;
}

CitiesDB.prototype.addCity = function (city) {
    city.id = this.assignID();
    this.city[city.id] = city;
}

CitiesDB.prototype.findCity = function (id) {
if(this.city[id] !== undefined)
{
    return this.city[id];
}
return false;

}


CitiesDB.prototype.assignID = function () {
    this.currentID+=1;
    return this.currentID;
}

let citiesDB = new CitiesDB();


//BUSINESS LOGIC____create input to objects

   



//BUSINESS LOGIC____add objects to database
function displayCityDetails(event){

const city = citiesDB.findCity(event.target.id);
document.querySelector(".address").innerText = city.address;
document.querySelector(".landmark").innerText = city.landmark;
document.querySelector(".time").innerText = city.timeOfYear;

document.querySelector("div#cities-details").removeAttribute("class");

}


window.onload = function () {

    //UI LOGIC____collect input
    let addNewCityForm = document.getElementById("addCity");

    addNewCityForm.addEventListener("submit", function(e) {
        e.preventDefault();

        let cityName = document.getElementById("newCityName").value;
        let cityAddress = document.getElementById("newCityAddress").value;
        let cityLandmark = document.getElementById("newCityLandmark").value;
        let cityTimeOfYear = document.getElementById("newCityTimeOfYear").value;

        let newCity = new City(cityName, cityAddress, cityLandmark, cityTimeOfYear);
        citiesDB.addCity(newCity);
        listCities(citiesDB);  

    });

    document.querySelector("div#cities").addEventListener("click", displayCityDetails);


   





    //create div then create list, then list elements in it with...
    

    






    //UI LOGIC____add event listener
    //UI LOGIC____output after event





}
