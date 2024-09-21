//the data set
var people = [
    {
        "id": 1,
        "name": "Ruthy Mathiassen",
        "birthdate": "8/26/1980",
        "children": 2,
        "country": "Japan",
        "can_program": false
    },
    {
        "id": 2,
        "name": "Amie Corinton",
        "birthdate": "7/7/1999",
        "children": 5,
        "country": "Tanzania",
        "can_program": false
    },
    {
        "id": 3,
        "name": "Melany Garlant",
        "birthdate": "7/1/1956",
        "children": 0,
        "country": "Bangladesh",
        "can_program": true
    },
    {
        "id": 4,
        "name": "Britni Dumphy",
        "birthdate": "7/7/1971",
        "children": 0,
        "country": "Indonesia",
        "can_program": true
    },
    {
        "id": 5,
        "name": "Glynis Dulinty",
        "birthdate": "8/23/1967",
        "children": 5,
        "country": "France",
        "can_program": false
    },
    {
        "id": 6,
        "name": "Averil Burgan",
        "birthdate": "3/11/1993",
        "children": 5,
        "country": "Indonesia",
        "can_program": true
    },
    {
        "id": 7,
        "name": "Sandra Insull",
        "birthdate": "12/14/1968",
        "children": 2,
        "country": "Indonesia",
        "can_program": false
    },
    {
        "id": 8,
        "name": "Celinda Pinder",
        "birthdate": "7/13/1986",
        "children": 3,
        "country": "Russia",
        "can_program": true
    },
    {
        "id": 9,
        "name": "Hammad Fleischmann",
        "birthdate": "9/30/1956",
        "children": 5,
        "country": "Indonesia",
        "can_program": true
    },
    {
        "id": 10,
        "name": "L;urette Surr",
        "birthdate": "2/10/2004",
        "children": 2,
        "country": "Brazil",
        "can_program": true
    }
];
//calculating the total number of children using a simple for ... of loop
var totalChildren = 0;
for (var _i = 0, people_1 = people; _i < people_1.length; _i++) {
    var person = people_1[_i];
    totalChildren += person.children;
}
//output the result
console.log("The total number of children for all people is: ".concat(totalChildren));
//function to calculate age
// I used a forEach loop tp iterate over each person in the people array
//for each person, i use console.log to output a string the format "name: birthdate"
people.forEach(function (person) {
    console.log("".concat(person.name, ": ").concat(person.birthdate));
});
//output properties for each person
people.forEach(function (person) {
    console.log("name: ".concat(person.name, " Birth Date: ").concat(person.birthdate, " Children: ").concat(person.birthdate, " Country: ").concat(person.country, " Can program: ").concat(person.can_program ? 'Yes' : 'No'));
});
