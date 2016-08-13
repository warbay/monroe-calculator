var bob = {
  first_name:"bob",
  last_name:"connor",
  username:"bcl",
  age:5,
  email:"bc@em.l",
  phone:10,
  full_name:function(){
    return this.first_name+"🍆"+this.last_name
  }
}

var hi =function(number_of_times){
  while(number_of_times>0){
    alert("hi")
    number_of_times=number_of_times-1
  }
}
hi(5)
