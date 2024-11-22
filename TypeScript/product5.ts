
function isemail(email:string) : boolean {//رح اجيب اذاالنتيجه true او false
let shecEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;//^يعني ان يبدا النص من بداية   ,[a-zA-Z0-9._-] الارقام والرمز التي يمكن ان يقبلها اسم الامستخدم 
return shecEmail.test(email);
}
console.log(isemail("yara@gmail.com"));//رح اجيب اذاالنتيجه true او false