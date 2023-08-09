let students=[
    {id:"10001",name:"Vishal",prn:21410035},
    {id:"80002",name:"Vishal1",prn:21410036},
    {id:"30008",name:"Vishal2",prn:21410037},
    {id:"90007",name:"Vishal3",prn:21410038},
    {id:"40009",name:"Vishal4",prn:21410039},
]

const newArray = students.filter((curValue) => {
    if (curValue.name)
        return true;
    else
        return false;
});

console.log(newArray);

// const newArray = [];

// for (let i = 0; i < students.length; ++i){
//     if (students[i].id % 2 == 0) {
//         newArray.push(students[i]);
//     }
// }

// console.log(newArray);

const names = students
    .filter((curValue)=>curValue.prn===21410035)
    .map((curValue, index, array) => {
    return `<li>${curValue.name}</li>`;
});  
console.log(names);