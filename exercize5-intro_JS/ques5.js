var Employee = [
    {
        name: "Rahul",
        age: 21,
        salary: 15100,
        DOB: "17-February-1997"
    },
    {
        name: "Nitika",
        age: 18,
        salary: 100,
        DOB: "29-October-2000"
    },
    {
        name: "Ekta",
        age: 21,
        salary: 500,
        DOB: "29-October-1997"
    },
    {
        name: "Amit",
        age: 22,
        salary: 999,
        DOB: "2-October-1996"
    },
    {
        name: "Kunark",
        age: 29,
        salary: 115100,
        DOB: "12-February-1990"
    },
    {
        name:"Vishaka",
        age:39,
        salary:515100,
        DOB:"17-March-1980"
    },
    {
        name:"Shivani",
        age:38,
        salary:415100,
        DOB:"17-April-1981"
    }
]

console.log("List of objects of Employee:");
Employee.forEach(function(emp){
    console.log(emp);
})

// filter employee with salary greater than 5000
console.log("employees with salary greater than 5000");
Employee.filter(function(emp){
    if(emp.salary>5000){
        console.log(emp);
    }
})

// grouping employee on the basis of age
console.log("grouped by age:")
var age_10to20=[];
var age_20to30=[];
var age_30to40=[];
Employee.map(function(emp){
    if(emp.age < 20 && emp.age >= 10){
        age_10to20.push(emp);
    }else if(emp.age < 30 && emp.age >= 20){
        age_20to30.push(emp);
    }else{
        age_30to40.push(emp);
    }
})

console.log("Employee in age group of 10 to 20 ");
age_10to20.forEach(function(element){
    console.log(element);
});

console.log("Employee in age group of 20 to 30 ");
age_20to30.forEach(function(element){
    console.log(element);
});

console.log("Employee in age group of 30 to 40 ");
age_30to40.forEach(function(element){
    console.log(element);
});

//fetch employees with salary less than 1000 and age greater than 20. Then give them an increment 5 times their salary.
var updateSalary = Employee.map(function(emp){
   if(emp.salary<1000 && emp.age>20){
       emp.salary*=5;
   }
   return emp; 
})

console.log("updated Salaries...");
updateSalary.forEach(function(emp){
    console.log(emp);
})
