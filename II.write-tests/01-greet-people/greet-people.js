const greetPeople = (people) => {
  const greeting = "Hello ";

  const greetingPeople = people.map((result) => `${greeting}${result}`);

  return greetingPeople;
};

module.exports = greetPeople;

/*
  Let's trace this piece of code - what is the value of result with this input

  var mentors = ['Irina', 'Ashleigh', 'Etza'];
  var result = greetPeople(mentors)
*/
