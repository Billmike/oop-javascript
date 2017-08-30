// Simple Java OOP program that creates a simple Bio of a user
class Vehicle {
  constructor(numberOfWheels, brand, milesCovered, model, yearManufacutured, soldOn) {

    let _numberOfWheels = numberOfWheels;
    let _brand = brand;
    let _milesCovered = milesCovered;
    let _model = model;
    let _yearManufactured = yearManufacutured;
    let _soldOn = soldOn;

    this.salePrice = () => {
      if (_soldOn !== null) {
        return 0;
      }
      else {
        return 70000 * _numberOfWheels;
      }
    }

    this.purchasePrice = () => {
      if (_soldOn !== null) {
        return 0;
      }
      else {
        return _baseSaleCost - _milesCovered;
      }
    }

    class Car extends Vehicle {
      constructor(numberOfWheels, brand, milesCovered, model, yearManufacutured, soldOn) {

        let _numberOfWheels = numberOfWheels;
        let _brand = brand;
        let _milesCovered = milesCovered;
        let _model = model;
        let _yearManufactured = yearManufacutured;
        let _soldOn = soldOn;
        let _baseSaleCost = 1000000;
         }
    }

    class Truck extends Vehicle {
      constructor(numberOfWheels, brand, milesCovered, model, yearManufacutured, soldOn) {

        let _numberOfWheels = numberOfWheels;
        let _brand = brand;
        let _milesCovered = milesCovered;
        let _model = model;
        let _yearManufactured = yearManufacutured;
        let _soldOn = soldOn;
        let _baseSaleCost = 5000000;
      }
    }
    
  }
}