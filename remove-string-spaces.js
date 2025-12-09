function noSpace(x){
 
   
   let res =""
  for (let i=0;i< x.length;i++){
    if (x[i]!==" "){
      res +=x[i]
    }
  }
  
  return res 
}