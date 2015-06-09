$(document).ready(function() {
    firstProblem();
	secondProblem();
	thirdProblem();
	fourthProblem();
	fifthProblem();
	sixthProblem();
});

var arr_people = [];

if (!Array.prototype.find) {
  Array.prototype.find = function(predicate) {
    if (this == null) {
      throw new TypeError('Array.prototype.find called on null or undefined');
    }
    if (typeof predicate !== 'function') {
      throw new TypeError('predicate must be a function');
    }
    var list = Object(this);
    var length = list.length >>> 0;
    var thisArg = arguments[1];
    var value;

    for (var i = 0; i < length; i++) {
      value = list[i];
      if (predicate.call(thisArg, value, i, list)) {
        return value;
      }
    }
    return undefined;
  };
}

//Problem 1
function  firstProblem(){
	console.log('Problem 1. Make person');
	function createPerson(firstName, lastName, age, gender) {
		return {
			firstName: firstName,
			lastName: lastName,
			age: age,
			gender: setGender(gender)
			}
		}
	function setGender(gender) {
		if(gender){
			return 'female';
		} else {
			return 'male';
		}
	}
	var person_1 = createPerson('Asen', 'Asenov', 22, false),
		person_2 = createPerson('Alisia', 'Asenova', 25, true),
		person_3 = createPerson('Ivan', 'Ivanov', 42, false),
		person_4 = createPerson('Geogri', 'Georgiev', 2, false),
		person_5 = createPerson('Gergana', 'Petrova', 26, true),
		person_6 = createPerson('Silviya', 'Dimitrova', 62, true),
		person_7 = createPerson('Atanas', 'Anastasov', 20, false),
		person_8 = createPerson('Kaloyan', 'Kostov', 82, false),
		person_9 = createPerson('Sonya', 'Grigorova', 45, true),
		person_10 = createPerson('Yoana', 'Zhechva', 15, true);
	arr_people.push(person_1, person_2, person_3, person_4, person_5, person_6, person_7, person_8, person_9, person_10);
	arr_people.forEach(function(person){
		console.log(person);
	});
};// end of function

//Problem 2
function  secondProblem(){
	console.log('\nProblem 2. People of age');
	var result = arr_people.every(function(person){
		person.age >= 18;
	});
	console.log('\tThere are only people of age of 18 in the array in Problem 1: ' + result)
};// end of function

//Problem 3
function  thirdProblem(){
	console.log('\nProblem 3. Underage people\n\tAll underaged people from the array in Problem 1 are:');
	arr_people.filter(function(person){
		return person.age < 18;
	}).forEach(function(person){
		console.log(person);
	});
};// end of function

//Problem 4
function  fourthProblem(){
	console.log('\nProblem 4. Average age of females');
	var females,
		sum,
		average;
	females = arr_people.filter(function(person){
		return person.gender = 'female';
	});
	sum = arr_people.reduce(function(sum, person){
		return sum + person.age;
	}, 0);
	average = sum / females.length;
	console.log('\tThe average age of all females from the array in Problem 1 is : ' + average);
};// end of function

//Problem 5
function  fifthProblem(){
	console.log('\nProblem 5. Youngest person');
	var youngest = arr_people.sort(function(max, min){
		return max.age - min.age;
	}).find(function(person){
		return person;
	});
	console.log('\tThe youngest person from the arry in Problem 1 is: ' + youngest.firstName + ' ' + youngest.lastName +
		' at age of ' + youngest.age);
};// end of function

//Problem 6
function  sixthProblem(){
	console.log('\nProblem 6 Group people');
	var groups = arr_people.reduce(function(gr, person){
		var letter = person.firstName[0];
		if (gr[letter]) {
			gr[letter].push(person);
		} else {
			gr[letter] = [person];
		}

		return gr;
	}, {});
	console.log(groups)
};// end of function
