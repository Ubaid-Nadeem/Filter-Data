let text = prompt();
let currentdays = ['Monday', 'teusday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let currentmonths=['January','February','March','April','May','June','July','August','September','October','November','December']
let Name = [];
let currency = [];
let time = [];
let date = [];
let day = [];
let month = [];
let useremail = [];

text = text.split(' ');
document.write(`<h1 style="text-align:center; font-family: sans-serif; color: red;">Result Check in Console`);

for (let i = 0; i < text.length; i++) {
    for (let j = 0; j < text[i].length; j++) {
        if (text[i][j] === '$') {
            currency.push(text[i]);
        }
        
        
        if (text[i][j] === '@') {
            useremail.push(text[i]);
        }
        if (text[i][j] === '/') {
            date.push(text[i]);
        }
        if (text[i][j] === ':') {
            time.push(text[i]+' '+text[i+1]);
        }
        if(text[i] ==='Monday' ||text[i] ==='Tuesday' || text[i] ==='Wednesday' || text[i] ==='Thusrday' || text[i] ==='Friday' || text[i] ==='Saturday' || text[i] ==='Sunday'){
             day.push(text[i]);

        }
       if(text[i]==='Hamza' || text[i]==='Huzaifa' ||text[i]==='Alyan'   ){
           Name.push(text[i]);
       }
    }

    for(k=0; k<currentmonths.length; k++ ){
        if(text[i]===currentmonths[k]){
            month.push(text[i]);
        }
    }
    // Name.push(text[i]);

}
console.log(currency);
console.log(useremail);
console.log(date);
console.log(Name);
console.log(time);
console.log(day);
console.log(month);
console.log(Name);





























// for(let i=0; i<text.length; i++){
// //  console.log(currentmonths[i]);   
//  for(let j=0; j<=currentmonths.length; j++){
//      if(text[i]===currentmonths[j]){
//      day.push(currentmonths[j]);
//      }
//  }   
// }


// for(let i=0; i<text.length; i++){
// //  console.log(text[i])
//  for(let j=0; j<text[i].length; j++){
// if(text[i][j]==='$'){
// currency.push(text[i]);
// }
//  }   
// }

// for(let i=0; i<text.length; i++){
//     //  console.log(text[i])
//      for(let j=0; j<text[i].length; j++){
//     if(text[i][j]==='/'){
//     date.push(text[i]);
//     }
//      }   
//     }


// for(let i=0; i<text.length; i++){
//     //  console.log(text[i])
//      for(let j=0; j<text[i].length; j++){
//     if(text[i][j]==='@'){
//     useremail.push(text[i]);
//     }
//      }   
//     }


// for(let i=0; i<text.length; i++){
//      for(let j=0; j<text[i].length; j++){

//         if(text[i][j]===':' ){
//     time.push(text[i] + ' ' +text[i+1] );
//     }
//      }   
//     }
// console.log(day);
// console.log(currency);
// console.log(date);
// console.log(useremail);
// console.log(time)