// task
// revise let & const & var diff
let str="Diksha";
console.log(str);
//let str="Waghmare";....error
{
const arr=[1,6,4,9];
console.log(arr);
}
//arr[2]=5
//console.log(arr);//error


// arrow function & prev function diff
function mul(){    //using prev function
    let a=3*5;
    console.log(a);
}
mul();

mulnum = () =>{    //using arrow function
   console.log(5*8);
}
mulnum();


// create multiple, division, subtraction function with fat arrow
mul=()=>5*3;
div=()=>6/3;
sub=()=> 6-3;
console.log(mul(), div(), sub());

// array helper functions: map, filter, find, some, reduce, every
const num = [8,9,3,5,2,1];
//map
const newnum=num.map(function (e,i,a){
    return e*2;
});
console.log(newnum)
//filter
const resultFilter = num.filter((e) => {
    return e !=8;
  });
console.log(resultFilter)
//find
const exfind=num.find(e=> {
    return e >2;
});
console.log(exfind)
//some
const exSome = num.some((item) => {
    return item >= 10;
  });
  console.log(exSome)
//reduce
const exReduce = num.reduce((sum, num) => {
    console.log(sum);
    console.log(num);
    return sum + num;
  });
//every
const exEvery = num.every((item) => {
    return item >= 5;
  });
  console.log(exEvery);


// task: use e6
// 1.check if all the property values(firstName) in an array of object is same or not
const student= [
    {
        firstName: 'Diksha',
        id: 1,
        age: 23
    }, {
        firstName: 'ABCD',
        id: 2,
        age: 21
    }, {
        firstName: 'Diksha',
        id: 3,
        age: 23
    }
]
//console.log(student[0].firstName)
let a=student.filter((n)=>{
    return (n.firstName=="Diksha");
});
console.log(a);

// 2. get the value of the first element in an array that has value greater than 20
let arr=[5,8,7,35,23.5,12,45,89];
let n1=arr.find((e)=>{
    return e>20;
});
console.log(n1);

// 3. get the value of the first element in an array that has value less than 20
let n2=arr.find((e)=>{
    return e<20;
});
console.log(n2);

// 4. filter data based on a id(property) in an array of objects: pick any random id value
 let val=student.filter((e)=>{
    return e.id==2;
})
console.log(val);

// 5. round off all the decimal numbers in an array and sum all the values [9.8, 9.7, 4.5, 3.4]
let arr1=[9.8, 9.7, 4.5, 3.4];
let newarr1=arr1.map(Math.round);
console.log(newarr1);
let b=newarr1.reduce((sum,no)=> sum+no);
console.log(b);

// 6.get all the person name based on age greater than and equal to 18, eligible to vote
let person=[{
    firstName: 'joe',
    age: 24
}, {
    firstName: 'alina',
    age: 12
},
{
    firstName: 'alex',
    age: 20
}
]
let eligible=person.filter((e)=> e.age>=18).map((e)=>e.firstName);
console.log("eligible to vote- "+eligible);

// 7. sum all the elements of an array [90, 89, 56, 45]
let arr2=[90, 89, 56, 45];
const sumofele = arr2.reduce((sum, num) =>sum + num);
console.log(sumofele);

// 8. check element is odd or even in an array [90, 89, 56, 45]
const oddevenele=arr2.filter((e)=>{
    if (e%2==0){
        console.log(e+" is even value ")
    }
    else{
        console.log(e+ " is odd value ")
    }
})

// 9. sum of all the salaries and display final sum value
let empSalary=[{
    salary: 56000
},
{
    salary: 90000
}]
const salaryVal=empSalary.map((e)=> e.salary);
const salarySum=salaryVal.reduce((e,n)=> e+n);
console.log(salaryVal);
console.log(salarySum);

// 10. concat all array elements ['red', 'pink', 'orange', 'red']: 'redpinkorangered'
let strArr=['red', 'pink', 'orange', 'red']
console.log(strArr.join(""))


//task
//create a class Car: city(),specialFeature()
//name, brand, color, manufacture
class Car{
    constructor(name,brand,color,manufacture){
        this.name=name;
        this.brand=brand;
        this.color=color;
        this.manufacture=manufacture;
    }
    city(city) {
        console.log(this.name + " " + city);
    }
    specialFeature(speed){
        console.log(this.name+" "+speed)
    }
}
 const Car1 = new Car("BMW", "Luxuri vehicals","Brown", 1916); //creating an instance for a object
 console.log(Car1);
 Car1.city("Mumbai");
 Car1.specialFeature(1500000, 200);

 const Car2 = new Car("Tesla", "Luxuri Electric vehicals","Black", 2003); //creating an instance for a object
 console.log(Car2);
 Car2.city("Mumbai");
 Car2.specialFeature(2000000, 300);

//create a class Book: type_of_book()
//no. of pages, type of pages, author
class Book{
    constructor(pages, Tpages, author){
        this.no_pages=pages;
        this.type_pages=Tpages;
        this.author=author;
    }
    type_of_book(Btype){
        console.log(Btype)
    }
}
 let book1=new Book(200, "middle", "ABC");
 console.log(book1);
 book1.type_of_book("Nature");

//create a class Animal: walk(), eat(), climb()
//gender, name, disease
class Animal{
    constructor(gender, name, disease){
        this.gender=gender;
        this.name=name;
        this.disease=disease;
    }
    walk(w){
        console.log(w);
    }
    eat(e){
        console.log(e);
    }
    climb(c){
        console.log(c);
    }
}
let animal1=new Animal("male","Dog","Canine distemper");
console.log(animal1);
