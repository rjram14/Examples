function robot(name){
    this.name=name;
    this.legs =2;
    this.color='White'
}

var pepper = new robot('Pepper')

function human(name){
    this.name=name;
    this.city="NewYork"
}

var john = new human('John')


human.prototype = new robot()
var john = new human('John')
john
human {name: "John", city: "NewYork"}
john.legs
2
john.color
"White"

//////Es6//////
class geo{
    constructor(lat,long){
        this.lat = lat
        this.long = long;
    }
}


class Country extends geo{
    constructor(name,capital, lat,long){
        super(lat,long)
        this.name = name
        this.capital = capital;
    }
}
