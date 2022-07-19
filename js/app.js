'use strict';

// Per curriculum, each store location is a unique object literal.
// Expect to refactor into generic store objects that each have location & other properties. 
let seattleStore = {
  location: 'Seattle',
  minCustomerPerHour: 23,
  maxCustomerPerHour: 65,
  avgSalePerCutomer: 6.3,
  simulatedSales: [],
  simSalesTotal: null,
  setSimulatedSales(){
    this.simulatedSales = [];  // Clear any previous simulation.
    for (let i = 0; i < operatingHours.length; i++){
      this.simulatedSales.push(this.getHourlySale());
    }
  },
  getHourlySale(){
    return (this.avgSalePerCutomer * this.getRandomHourlyCustomerCount());
  },
  getRandomHourlyCustomerCount(){
    return getRandomIntInclusive(this.minCustomerPerHour, this.maxCustomerPerHour);
  },
  displaySales(){
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
  },
  getSalesString(index){
    let saleCount = String(Math.round(this.simulatedSales[index]));
    let militaryTime = operatingHours[index];
    let time = (militaryTime % 12)? (militaryTime % 12) : 12; // Make noon 12, not zero.
    let meridiem = militaryTime < 12? 'am' : 'pm';
    return `${time}${meridiem}: ${saleCount} cookies`;
  }
};

let tokyoStore = {
  location: 'Tokyo',
  minCustomerPerHour: 3,
  maxCustomerPerHour: 24,
  avgSalePerCutomer: 1.2,
  simulatedSales: [],
  setSimulatedSales(){
    this.simulatedSales = [];  // Clear any previous simulation.
    for (let i = 0; i < operatingHours.length; i++){
      this.simulatedSales.push(this.getHourlySale());
    }
  },
  getHourlySale(){
    return (this.avgSalePerCutomer * this.getRandomHourlyCustomerCount());
  },
  getRandomHourlyCustomerCount(){
    return getRandomIntInclusive(this.minCustomerPerHour, this.maxCustomerPerHour);
  },
  displaySales(){
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
  },
  getSalesString(index){
    let saleCount = String(Math.round(this.simulatedSales[index]));
    let militaryTime = operatingHours[index];
    let time = (militaryTime % 12)? (militaryTime % 12) : 12; // Make noon 12, not zero.
    let meridiem = militaryTime < 12? 'am' : 'pm';
    return `${time}${meridiem}: ${saleCount} cookies`;
  }
};

let dubaiStore = {
  location: 'Dubai',
  minCustomerPerHour: 11,
  maxCustomerPerHour: 38,
  avgSalePerCutomer: 3.7,
  simulatedSales: [],
  setSimulatedSales(){
    this.simulatedSales = [];  // Clear any previous simulation.
    for (let i = 0; i < operatingHours.length; i++){
      this.simulatedSales.push(this.getHourlySale());
    }
  },
  getHourlySale(){
    return (this.avgSalePerCutomer * this.getRandomHourlyCustomerCount());
  },
  getRandomHourlyCustomerCount(){
    return getRandomIntInclusive(this.minCustomerPerHour, this.maxCustomerPerHour);
  },
  displaySales(){
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
  },
  getSalesString(index){
    let saleCount = String(Math.round(this.simulatedSales[index]));
    let militaryTime = operatingHours[index];
    let time = (militaryTime % 12)? (militaryTime % 12) : 12; // Make noon 12, not zero.
    let meridiem = militaryTime < 12? 'am' : 'pm';
    return `${time}${meridiem}: ${saleCount} cookies`;
  }
};

let parisStore = {
  location: 'Paris',
  minCustomerPerHour: 20,
  maxCustomerPerHour: 38,
  avgSalePerCutomer: 2.3,
  simulatedSales: [],
  setSimulatedSales(){
    this.simulatedSales = [];  // Clear any previous simulation.
    for (let i = 0; i < operatingHours.length; i++){
      this.simulatedSales.push(this.getHourlySale());
    }
  },
  getHourlySale(){
    return (this.avgSalePerCutomer * this.getRandomHourlyCustomerCount());
  },
  getRandomHourlyCustomerCount(){
    return getRandomIntInclusive(this.minCustomerPerHour, this.maxCustomerPerHour);
  },
  displaySales(){
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
  },
  getSalesString(index){
    let saleCount = String(Math.round(this.simulatedSales[index]));
    let militaryTime = operatingHours[index];
    let time = (militaryTime % 12)? (militaryTime % 12) : 12; // Make noon 12, not zero.
    let meridiem = militaryTime < 12? 'am' : 'pm';
    return `${time}${meridiem}: ${saleCount} cookies`;
  }
};

let limaStore = {
  location: 'Lima',
  minCustomerPerHour: 2,
  maxCustomerPerHour: 16,
  avgSalePerCutomer: 4.6,
  simulatedSales: [],
  setSimulatedSales(){
    this.simulatedSales = [];  // Clear any previous simulation.
    for (let i = 0; i < operatingHours.length; i++){
      this.simulatedSales.push(this.getHourlySale());
    }
  },
  getHourlySale(){
    return (this.avgSalePerCutomer * this.getRandomHourlyCustomerCount());
  },
  getRandomHourlyCustomerCount(){
    return getRandomIntInclusive(this.minCustomerPerHour, this.maxCustomerPerHour);
  },
  displaySales(){
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
  },
  getSalesString(index){
    let saleCount = String(Math.round(this.simulatedSales[index]));
    let militaryTime = operatingHours[index];
    let meridiem = militaryTime < 12? 'am' : 'pm';
    let time = (militaryTime % 12 > 0)? (militaryTime % 12) : 12; // Use 12 for noon, midnight.
    return `${time}${meridiem}: ${saleCount} cookies`;
  }
};

// Main Script

let stores = [seattleStore, tokyoStore, dubaiStore, parisStore, limaStore];
let operatingHours = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

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
};
