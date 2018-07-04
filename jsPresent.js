var Sweets = {
    constructor: function(name, color, weight) {
        this.name = name;
        this.color = color;
        this.weight = weight;
        return this;
    }
}

var Candy = Object.create(Sweets);
Candy.constructor = function(name, color, weight, taste) {
    Sweets.constructor.apply(this, arguments);
    this.taste = taste || [];
    return this;
};

var Lolipop = Object.create(Candy).constructor('Lolipop', 'yellow', 30, ['banana', 'apple']);

var Iriska = Object.create(Candy).constructor('Iriska', 'brown', 50, ['sticky']);

var Chocolate = Object.create(Sweets);
Chocolate.constructor = function(name, color, weight, milk) {
    Sweets.constructor.apply(this, arguments);
    this.milk = milk || [];
    return this;
};

var ChocolateBar = Object.create(Chocolate).constructor('ChocolateBar', 'blue', 100, ['dark']);

var KinderSurprise = Object.create(Chocolate).constructor('Kinder-Surprise', 'red', 45, ['milk']);

var present = [];
present.push(KinderSurprise, ChocolateBar, Lolipop, Iriska);

function compareWeight(presentA, presentB) {
    return presentA.weight - presentB.weight;
}

present.sort(compareWeight);

for (var i = 0; i < present.length; i++) {
    console.log(present[i].name);
}

presentWeight = {
    sum: function() {
        return KinderSurprise.weight + ChocolateBar.weight + Iriska.weight + Lolipop.weight;
    }
}
console.log('The weight of the present is ' + presentWeight.sum() + 'g.');

function found(candyColor) {
    return candyColor.color === 'blue';
}

console.log(present.find(found).name);