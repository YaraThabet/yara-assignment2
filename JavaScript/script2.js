let number =[1,2,3,4,5];

function sum(number){
    let total =number.reduce((all,num)=> all+num,0);//all المجموع ,num الارقام , 0 اول قيمة 
    let middle= total/number.length; //المجموع تقسيم طول عدد الارقام رح يعطينا متوسط الارقام 
    return {total,middle};
}
console.log("Total and Middle",sum(number));
