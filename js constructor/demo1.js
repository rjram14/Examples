function class_one(arg1,arg2,arg3){
    this.var_One = arg1;
    this.var_Two = arg2;
    this.var_Three = arg3;
 

};
let obj1 =new class_one('monu','rj','ramnewas');
console.log(obj1.var_One, obj1.var_Two,obj1.var_Three );