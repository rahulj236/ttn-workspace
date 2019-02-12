var obj1 = {
    Name: "Rahul jain",
    id:2,
    arr:[2,4,6],
    compitancy:"MEAN"
};
var obj2 = {};
for(i in obj1){
    obj2[i]=obj1[i];
};
console.log("Details in object1:");
for(key in obj1){
    console.log(key+":"+obj1[key]);
}

console.log("\n"+"Details in object2:");
for(key in obj2){
    console.log(key+":"+obj2[key]);
}


