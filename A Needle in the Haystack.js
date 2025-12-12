function findNeedle(haystack) {
  // your code here
  
  let haystack_index=0;
  for(i=0; i<haystack.length; i++){
   if (haystack[i]==="needle"){ 
    haystack_index=i
   }
}
     return `found the needle at position ${haystack_index}`;   
}


