// const sum=(num1,num2,num3)=>
// {
//     console.log("sum=", (num1+num2+num3));
// }
// sum(22,23,22);

const sum=(num1,num2,num3)=>
{
    console.log("sum=", (num1+num2+num3));
}
let value=[22,23,22,34];
sum(...value);