function class_one(){
    this.sub_one = "reactjs";
    this.sub_two = "nodejs";
    this.sub_three = "mongoDB";

    this.getsubOne = function(){
        return  this.sub_one ;
    };
    this.getsubTwo = function(){
        return  this.sub_two ;
    };
    this.getsubThree = function(){
        return  this.sub_three ;
    };
};
let obj = new class_one();
console.log(obj.getsubOne(),
            obj.getsubTwo(),
            obj.getsubThree());
