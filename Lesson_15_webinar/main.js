console.log("hello");

// this - ?

let person = {
    // this.name, this.saySomething
    name: "Chuck Norris",
    saySomething:function (){
        console.log("Hello! Said - "+this.name);
    }
};
person.saySomething();

let person2 = {
    // this.name, this.saySomething
    name: "Brad Pit",
    saySomething:function (){
        console.log("Hello! Said - "+this.name);
    }
};
person2.saySomething();

// DRY - don't repeat yourself

let personAbstract = {
    // this.name, this.saySomething
    saySomething:function (){
        console.log("Hello! Said - "+this.name);
    }
};
personAbstract.saySomething.call({name:"Gal Gadot :)"});

personAbstract.name = "Some new";
personAbstract.saySomething();

const arr = [1, 2, 3, 4, 5, 6, 7];
arr.forEach(function (value){
    console.log("someone say - "+value);
});

let personCountAbstract = {
    // this.name, this.saySomething
    saySomething:function (){
        console.log("Hello! Said - "+this.name);
    },
    count:function (arr){
        //this.name +++
        console.log(this.name);
        let functionForCycle = counterFun.bind(this)
        arr.forEach(functionForCycle);
    }
};

let counterFun = function (value){
    console.log(this.name+" say - "+value);
}

personCountAbstract.count(arr);
personCountAbstract.count.call({name:"Vasya"},arr);