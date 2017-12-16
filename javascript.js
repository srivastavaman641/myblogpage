    var store=function(){

      var json={"firstname":document.getElementById("form1").firstname.value,"username":document.getElementById("form1").username.value,"password":document.getElementById("form1").password.value}

 //var x = JSON.parse((localStorage.getItem("user"));
 if(localStorage.getItem("user")==null)
 {
  var array=[];
  array.push(json);
  array=JSON.stringify(array)
  localStorage.setItem("user",array);
}
else {
    //var array1=[];
    var array1=JSON.parse(localStorage.getItem("user"));
   // array1=(array1);
   for(var i=0;i<array1.length;i++)
   {
    if((array1[i].username==document.getElementById("form1").username.value) && (array1[i].password==document.getElementById("form1").password.value))
    {
      alert("User already exists");
      return false;
    }
  }
  array1.push(json);
  array1=JSON.stringify(array1);
  localStorage.setItem("user",array1);
  alert("Successfully Registered");
  return true;
}
}
function logout(){
  document.getElementById("btn1").style.display="block";
        document.getElementById("btn2").style.display="block";
document.getElementById("btn3").style.display="none";
document.getElementById("t1").style.display="none";
}

  function multiple(){
    var arr=[];
    arr=localStorage.getItem("user");
    arr=JSON.parse(arr);
    for(var i=0;i<arr.length;i++)
    {
      if((arr[i].username==document.getElementById("form2").user1.value) && (arr[i].password==document.getElementById("form2").pass1.value))
      {
        alert("login Successful");
        document.getElementById("btn1").style.display="none";
        document.getElementById("btn2").style.display="none";
        document.getElementById("btn3").style.display="block";
        document.getElementById("t1").style.display="block";
        document.getElementById("t1").innerHTML="Hello "+document.getElementById("form2").user1.value;

        return true;
      }
    }
    alert("wrong credentials");
    return false;
  }

  function blog(x)
  {
    console.log(x);
    localStorage.setItem("id",x);
    console.log(x);
  }
  var xhttp=new XMLHttpRequest();
  var obj=[];
  xhttp.onreadystatechange=function(){

   if(this.readyState==4 && this.status==200){
    obj=JSON.parse(this.responseText)
    console.log(obj);
    for(var i=0;i<3;i++)
    {
     var j=i+1;
     var id="card"+j;
     var x="a"+j;
     var y="b"+j;
     var z="span"+j;
     document.getElementById(id).innerHTML=obj[i].title;
     document.getElementById(x).innerHTML=obj[i].content;
     document.getElementById(y).src=obj[i].imageUrl;
     document.getElementById(z).innerHTML=obj[i].id;

   }
 }
}

xhttp.open("GET","http://www.koushikmln.com:7500/blogs",true);
xhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xhttp.send();
