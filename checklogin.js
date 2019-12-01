var users = [{
'username' : 'gopi.nelluru@gmail.com',
'password' : 'gopi.nani3'},
{
'username' : 'gopi.nani3@gmail.com',
'password' : '9949504990'
},{
'username' : 'nani.nllr@gmail.com',
'password' : '9160165397'
}]
var checklogin = function(email,password,users){
var a = false
var b = false
for(x in users){
if(users[x]['username']==email){
      if(users[x]['password']==password){
      a=true
      b=true
      break;
      }
      else{
      a=true
      b=false
      break;
      }
   
}
else{
a=false
b=false
break;
}
}
if(a==true&&b==true){
alert("You are logged in")
} else if(a==true&&b==false){
alert("Incorrect password")
}else{
alert("User not found")
}
}
var email = prompt("enter username")
var password = prompt("enter password")
checklogin(email,password,users)
