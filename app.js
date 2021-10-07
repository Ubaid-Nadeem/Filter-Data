let text = prompt();
let currentdays = ['Monday', 'Teusday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let currentmonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
let Name = [];
let currency = [];
let time = [];
let date = [];
let day = [];
let month = [];
let useremail = [];

text = text.split(' ');
// document.write(`<h1 style="text-align:center; font-family: sans-serif; color: red;">Result Check in Console`);

for (let i = 0; i < text.length; i++) {
    if (text[i].indexOf('@') !== -1) {
        useremail.push(text[i]);
    }
    else if (text[i].indexOf('/') !== -1) {
        date.push(text[i])
    }

    else if(text[i].indexOf('$') !== -1){
        currency.push(text[i]);
    }

    else if(text[i].indexOf(':') !== -1){
        time.push(text[i]+' '+text[i+1])
    }

else if(currentdays.indexOf(text[i])!== -1){
    day.push(text[i]);
}
else if(currentmonths.indexOf(text[i]) !== -1 ){
    month.push(text[i]);
}
else if(text[i] !== 'PM' && text[i] !=='AM'){
    Name.push(text[i]);
}
}

console.log(useremail);
console.log(date);
console.log(currency);
console.log(time)
console.log(day)
console.log(month)
console.log(Name)



document.write(`<table border="1">`)
document.write(`<tr><th>Name</th><th>Email</th><th>Price</th><th>Month</th><th>Day</th><th>Date</th><th>Time</th>`)
for(let j=0; j<time.length; j++){
    
    document.write(`<tr><td>${Name[j] || ' '}</td><td>${useremail[j] || ' '}</td><td>${currency[j] || ' '}</td><td>${month[j] || ' '}</td><td>${day[j] || ' '}<td>${date[j] || ' '}</td> <td>${time[j] || ' '}</td></tr>`)
}







// second Method



// for (let i = 0; i < text.length; i++) {
//     for (let j = 0; j < text[i].length; j++) {
//         if (text[i][j] === '$') {
//             currency.push(text[i]);
//         }


//         if (text[i][j] === '@') {
//             useremail.push(text[i]);
//         }
//         if (text[i][j] === '/') {
//             date.push(text[i]);
//         }
//         if (text[i][j] === ':') {
//             time.push(text[i]+' '+text[i+1]);
//         }
//         if(text[i] ==='Monday' ||text[i] ==='Tuesday' || text[i] ==='Wednesday' || text[i] ==='Thusrday' || text[i] ==='Friday' || text[i] ==='Saturday' || text[i] ==='Sunday'){
//              day.push(text[i]);

//         }
//        if(text[i]==='Hamza' || text[i]==='Huzaifa' ||text[i]==='Alyan'   ){
//            Name.push(text[i]);
//        }
//     }

//     for(k=0; k<currentmonths.length; k++ ){
//         if(text[i]===currentmonths[k]){
//             month.push(text[i]);
//         }
//     }
//     // Name.push(text[i]);

// }
// console.log(currency);
// console.log(useremail);
// console.log(date);
// console.log(Name);
// console.log(time);
// console.log(day);
// console.log(month);
// console.log(Name);






















//Third Method  





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