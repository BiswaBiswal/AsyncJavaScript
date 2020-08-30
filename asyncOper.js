console.log("before");
const user=getUser();
console.log(user)
//console.log(user) 
console.log("after");

function getUser(){
    setTimeout(() => {
        const user={
        "id":1,
        "name":"Bish"
    };
       return user;
    }, 2000);
    return 1;
}