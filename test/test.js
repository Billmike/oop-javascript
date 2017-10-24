const expect = require('chai').expect;
const app = require('../class.js');

describe('Class App', () => {
    describe('Vehicle Class', () => {
        it('Should create a class', () => {
            const trial = new app.Car(4, 'Mercedes', 40000, 'Lincoln', 1990, 'New');
            expect(trial).to.be.an('object');
        });
        it('Should return the details of the car', () => {
            const trial = new app.Car(4, 'Mercedes', 40000, 'Lombardo', 1990, 'New');
            expect(trial.getdetails()).to.not.be.an('array');
        });
    })
})