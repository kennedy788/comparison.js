const firstFavNumb = 26; 

const secondFavNumb = 13; 

console.log("Greater than:", firstFavNumb > secondFavNumb);

console.log("Less than:", firstFavNumb < secondFavNumb);

console.log("Greater than or equal to:", firstFavNumb >=
secondFavNumb); 
console.log("Less than or equal to:", firstFavNumb <= secondFavNumb); 
console.log("Strict equality:", firstFavNumb === secondFavNumb); 
console.log("Loose equality:", firstFavNumb == secondFavNumb); 
console.log("Strict inequality:", firstFavNumb !== secondFavNumb); 
console.log("Loose inequality:", firstFavNumb != secondFavNumb); 

// AND, OR, and NOT comparisons 
 const isPositive = firstFavNumb > 0; 
 const isEven = firstFavNumb % 2 === 0; 
 console.log("AND:", isPositive && isEven); 
 console.log("NOT:", !isPositive); 
 console.log("OR:", isPositive || isEven);
