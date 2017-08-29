// Simple Java OOP program that creates a simple Bio of a user
function PersonalData(firstName, lastName, age, gender, personalInterests) {
    this.name = {
      firstName,
      lastName
    };
    this.age = age;
    this.gender = gender;
    this.personalInterests = personalInterests;
    this.bio = function() {
      console.log(this.name.firstName + ' ' + this.name.lastName + ' is ' + this.age + ' years old. He likes ' + this.personalInterests[0] + ' and ' + this.personalInterests[1] + '.');
    };
    this.greeting = function() {
      console.log('Hi there! I\'m ' + this.name.firstName + '.');
    };
  }

  const newPerson = new PersonalData('Samantha', 'Briggs', 32, 'Female', ['Swimming', 'Reading', 'Singing']);