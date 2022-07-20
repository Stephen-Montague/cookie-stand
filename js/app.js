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
Store.prototype.renderSales = function(tableColumnIndex){
  let tableData = document.createElement('td');
  if (tableColumnIndex === 0){
    tableData.innerText = this.location;
  } else if(tableColumnIndex === lastColumnIndex){
    tableData.innerText = Math.round(this.simSalesTotal);
  } else{
    tableData.innerText = Math.round(this.simulatedSales[tableColumnIndex-1]);
  }
  document.body.appendChild(tableData);
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


let tableColumnCount = hoursToStrings.length + 2;
let firstColumnIndex = 0;
let lastColumnIndex = tableColumnCount-1; 

// Build Table Header
let table = document.getElementById('salesTable');
document.body.appendChild(table);
for (let i = 0; i < tableColumnCount; i++){
  if (i === firstColumnIndex){
    appendToTableHeader(table, '&nbsp;');
  } else if (i === lastColumnIndex){
    appendToTableHeader(table, 'Daily Location Total');
  } else{
    appendToTableHeader(table, hoursToStrings[i-1]);
  }
}

for (let i = 0; i < stores.length; i++){
  stores[i].setSimulatedSales();
  stores[i].simSalesTotal = sumArray(stores[i].simulatedSales);

  let tableRow = document.createElement('tr');
  document.body.appendChild(tableRow);

  for (let j = 0; j < tableColumnCount; j++){
    stores[i].renderSales(j);
  }
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

function appendToTableHeader(table, itemToAppend){
  let tableHeader = document.createElement('th');
  tableHeader.innerHTML = itemToAppend;
  document.body.appendChild(tableHeader);
}
