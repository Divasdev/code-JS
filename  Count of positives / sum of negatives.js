function countPositivesSumNegatives(input) {

   // memory (must live OUTSIDE the loop)
let positive_total=0;
let negative_total=0;
    // handle empty or null input
   if (!input || input.length===0){
      return [];
    }
// loop through the whole array
  for ( let i=0; i<input.length; i++){
   if(input[i]> 0){
     positive_total = positive_total + 1;

    } else if( input[i]<0) {
      negative_total=negative_total + input[i]
    } 
    
    
   
  }
  
  
  return [positive_total,negative_total];
  
  }

