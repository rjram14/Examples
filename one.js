//javascript challange
//1) Example

function getVal(){
	val = 10;
	var val ; 
	return val;
	
};
console.log(getVal());
console.log(this.val);
//10
// undefined

//2) Example

console.log(0=='0');//true
console.log(0==[]);//true
console.log([]=='0');//false

//3) Example
let num = 100;
let str = '100';
console.log(num == str);  //true
console.log(num === str);  //false
console.log(num >= str);   //true
console.log(num <= str);   //true

//4) Example
let name = "js iqtest";
let fullname = "rj ramnewa";
if(name > fullname){
    console.log(name);
}else{
    console.log(fullname);
}

// rj ramnewa

//5) Example
let obj = {
    name = "rjram";
    fullname = "ramnewassingh";
};
delete obj["name"];
console.log(obj["name"]);        //undefined
console.log(typeof(obj.name));   //undefined


//6) Example
let num = 10 ;   
let val = 2 ;
let multiply = val-- * ++num;
let add = --val + num++;
console.log(multiply);    //22
console.log(add);         //11
/**
 num++  => does not increase 
 ++num  => increase by 1 
 val--  => does not decrease
 --val  => decrease by 1 
 */



//7) Example
let array = [1 ,2];
let newArray = array;

let arr = [1 ,2];
console.log(array == array);        //true 
console.log(array == newArray);     //true
console.log(array == arr);          //false
console.log(arr == newArray);       //false
/**
 let "newArray" will take the same reference of the let "array" occupied in memory because
 of both have same reference and true.
 we compare for other comparison variable "arr" have different allocated in memory -- false 
 */


//7) Example
function add(val) {
    return val + 10; 
};
let multi = function (val) {
    return val * 10;
};
console.log(add(2));          //12
console.log(multi(2));        //20
console.log(add(multi(2)));   //30



//8)Example
const dessert = {type: 'pie'};
dessert.type = 'pudding';
console.log(dessert.type);       //pudding


//9)Example
which od the following is an incorrect way to define an arrow function that return an empty object?
ans=> ()=>({})



//10)Example
let a = ['dog','cat','hen'];
a[100] = 'fox';
console.log(a.length);        //101

//11)Example
console.log([]==[]);          //false


--------------------------------------------------
function addTax(total) {
    return total *1.05;
    
};
addTax = 50;                   //50



//12)Example

function sayHello() {
    console.log("hello");
};
console.log(sayHello.prototype);    // an object with constructor property


//13)Example
 let name = (function getName() {
     const name = "rjram";
     return name;
     
 })();
 console.log(name);                  //rjram
 console.log(typeof(name));          //string



//14)Example
let a = '99';
let b = '099';
console.log(a==b);          //false
console.log(a===b);         //false
console.log(a>=b);          //true(a and b both are the strings so its compares 1st charactre here 9 > 0 so its true )
console.log(a<=b);          //false(a and b both are the strings so its compares 1st charactre here 9 > 0 so its false )

 
//15)Example

let array = [1,2,3,4];
array.pop();
array.shift();
array.push(5);
console.log(array.length);   //3("pop" delete last element and  "shift" delete 1st element and "push" add one element)
array[10]=10;
console.log(array.length);   //11




//16)Example
let num = 1;
let bool = true;
console.log(typeof(num));               //number
console.log(typeof(bool));              //boolean
console.log(typeof(typeof(num)));       //string
console.log(typeof(typeof(bool)));      //string

//17)Example
let lastname = "singh";
let firstname = "ramnewas";
[lastname,firstname] = [firstname, lastname];
console.log(lastname);                       //ramnewas
console.log(firstname);                      //singh




//18)Example
function getName(){
    name = "rjram";
    var fullname = "ramnewas singh";    
};
console.log(this.name);                //undefinded
getName();
console.log(name);                     //rjram
console.log(fullname);                 //Uncaught ReferenceError: fullname is not defined



//19)Example
let add = 1+1;
console.log(add);                   //2
let trueAdd = 1 +true;
let falseSub = 1 - false;
console.log(trueAdd);              //2
console.log(falseSub);             //1

//20)Example
let array = ['a' ,'b','c'];
console.log(array.length);           //  3
let newArray = array;
newArray.length = 0;
console.log(newArray.length);        // 0
console.log(array.length);           // 0


//21)Example
this.num = 5;
const data = {
    add : function () {
        return this.num +10        
    },
    num : 10    
};
console.log(this.num);                //  5 
console.log(data.add());              // 20

//22)Example
var name = 'rjram';
    name = 'ramnewas';
console.log(name);                     //  SyntaxError: Identifier 'name' has already been declared
let fullname = 'ramnewas singh';
    fullname = 'rjram14';
console.log(fullname);                // rjram14
const js = 'ram';
      js = 'rjram005';
console.log(js);                      // SyntaxError: Identifier 'js' has already been declared



//23)Example
let a = '5' - 3;
console.log(a);                     //2
let b = 2+1+'5';
console.log(b);                     //35


//24)Example
let obj = {name : 'rjram'}
console.log(obj['name']);       //rjram
let data = obj;
obj['name'] = 'ramnewas';

console.log(obj['name']);       //ramnewas
console.log(data['name']);     //undefined


//25)Example
let obj = {name : 'rjram',val : '100'};
let {name , val : num} = obj;
obj['name']= 'ramnewas';
console.log(name);                   //rjram
console.log(num);                    //100


//26)Example
var name = 'rj';
this.name = 'ram';                   //doubt (ram)
console.log(name);
let fullname = 'ramnewas';
this.name = 'ramnewas singh';
console.log(fullname);             //ramnewas



//27)Example
let obj = {
    name : 'rjram',
    value : 20,
    add(val){
        console.log(this.value);         //20
        function number(val){
            return val * this.value;
        };
        return number(val);
    };
};
console.log(obj.add(10));              //NaN





//28)Example
 