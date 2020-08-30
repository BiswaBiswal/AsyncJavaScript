console.log("before");
const user=getUser(5,(user)=>{
    console.log('User',user);
    name=user.name;
    jobs=getjobs(name,(jobs)=>{
        console.log(jobs);
    });
    
}); 

console.log("after");

function getUser(id,callback){
    setTimeout(() => {
        const user={
        "id":id,
        "name":"Bish"
    };
       callback(user);
    }, 2000);
}


function getjobs(name,callback){
    setTimeout(() => {
        callback(['painter','athelete','designer']);
 //      callback(user);
    }, 2000);
}