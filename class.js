class Vehicle {
  constructor(numberOfWheels, brand, milesCovered, model, yearMade, status) {
    this._numberOfWheels = numberOfWheels;
    this._brand = brand;
    this._milesCovered = milesCovered;
    this._model = model;
    this._yearMade = yearMade;
    this._status = status;
  }

  get price() {
    console.log( this.carPrice());
  }

  get details() {
    console.log(this.vehicleDetails());
  }

  vehicleDetails() {
    return this._brand + " with " + this._numberOfWheels + " and a milage limit of " + this._milesCovered;
  }

  carPrice () {
    return this._yearMade * this._milesCovered;
  }
}

class Car extends Vehicle {

  getprice() {
    console.log(this.carPrice());
  }

  getdetails() {
    console.log(this.vehicleDetails());
  }

  vehicleDetails() {
    return this._brand + " with " + this._numberOfWheels + " wheels"+ " and a milage limit of " + this._milesCovered;
  }

  carPrice() {
    return this._numberOfWheels * this._milesCovered;
  }
}

const ride = new Car(40, 'Mercedes', 8000, 'Linkin Park', 2006, 'Old');
console.log(ride.details);

module.exports = { Car };