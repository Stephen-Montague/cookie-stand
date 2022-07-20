'use strict';


// Globals
let operatingHours = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
let hoursToStrings = ['6am', '7am','8am', '9am','10am', '11am','12pm',
  '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let stores = [];

// Store Constructor

function Store(location, minCustPerHour, maxCustPerHour, avgSalePerCust) {
  this.location = location;
  this.minCustomerPerHour = minCustPerHour;
  this.maxCustomerPerHour = maxCustPerHour;
  this.avgSalePerCutomer = avgSalePerCust;
  this.simulatedSales = [];
  this.simSalesTotal = null;

  stores.push(this);
}


// Prototypes Functions

Store.prototype.setSimulatedSales = function() {
  this.simulatedSales = []; // Clear any previous simulation.
  for (let i = 0; i < operatingHours.length; i++){
    this.simulatedSales.push(this.getHourlySale());
  }
};
Store.prototype.getHourlySale = function(){
  return (this.avgSalePerCutomer * this.getRandomHourlyCustomerCount());
};
Store.prototype.getRandomHourlyCustomerCount = function(){
  return getRandomIntInclusive(this.minCustomerPerHour, this.maxCustomerPerHour);
};
Store.prototype.displaySales = function(){
  // Append store name
  let storeName = document.createElement('p');
  storeName.innerText = this.location;
  document.body.appendChild(storeName);

  // Append hourly sales
  let uListElem = document.createElement('ul');
  document.body.appendChild(uListElem);
  for (let i = 0; i < this.simulatedSales.length; i++){
    let hourlySale = document.createElement('li');
    hourlySale.innerText = this.getSalesString(i);
    document.body.appendChild(hourlySale);
  }
  // Append total
  let totalSale = document.createElement('li');
  totalSale.innerText = `Total: ${Math.round(this.simSalesTotal)} cookies`;
  document.body.appendChild(totalSale);
};
Store.prototype.getSalesString = function(index){
  let saleCount = String(Math.round(this.simulatedSales[index]));
  let militaryTime = operatingHours[index];
  let meridiem = militaryTime < 12? 'am' : 'pm';
  let time = (militaryTime % 12 > 0)? (militaryTime % 12) : 12; // Midnight, noon 12 not 0.
  return `${time}${meridiem}: ${saleCount} cookies`;
};
// End Prototype Functions


// Main Script

new Store('Seattle', 23, 65, 6.3);
new Store('Tokyo', 3, 24, 1.2);
new Store('Dubai', 11, 38, 3.7);
new Store('Paris', 20, 38, 2.3);
new Store('Lima', 2, 16, 4.6);

for (let i = 0; i < stores.length; i++){
  stores[i].setSimulatedSales();
  stores[i].simSalesTotal = sumArray(stores[i].simulatedSales);
  stores[i].displaySales();
}

// Utility Functions

// Source: MDN
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function sumArray(array){
  let sum = 0;
  for (let i = 0; i < array.length; i++){
    sum += array[i];
  }
  return sum;
}
