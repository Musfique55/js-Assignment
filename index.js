function calculateMoney(ticketSale){
    // You have to write your code here
    if(ticketSale < 0){
        return 'Please Provide Positive Amount';
    }
    const ticketPrice = 120;
    const GuardFee = 500;
    const staffCost = 50;
    const staffs = 8;
    const income = ticketSale * ticketPrice;
    const totalCost = GuardFee + staffs * staffCost;
    const remainingTaka = income - totalCost;
    return remainingTaka;
}


function checkName(name) {
    //write your code here
    if(typeof name !== 'string'){
        return 'invalid';
    }
    const lowerCase = name.toLowerCase();
    const last = lowerCase.charAt(lowerCase.length-1);
    if(last.includes('a') || last.includes('y') || last.includes('i') || last.includes('e') || last.includes('o') || last.includes('u') || last.includes('w')){
        return 'Good Name';
    }else{
        return 'Bad Name';
    }
}

function deleteInvalids(array) {
    // You have to write your code here
    if(!Array.isArray(array)){
        return 'Invalid Array';
    }
    let newArr = [];
    for(let ar of array){
        if(typeof ar === 'number' && !isNaN(ar)){
            newArr.push(ar);
        }
    }
    return newArr;
}

function password(obj) {
    //write your code here
    const length = Object.keys(obj);
    if(length.length !== 3){
        return 'invalid';
    }
    
    const name = obj.name;
    const birthYear = obj.birthYear ; 
    const siteName = obj.siteName[0].toUpperCase() + obj.siteName.slice(1).toLowerCase();
    const string = birthYear.toString();
   
    if(string.length < 4){
        return 'invalid'
    }
    const generatePass = siteName + '#' + name + '@' + string;
    return generatePass;
}


function monthlySavings(arr , livingCost) {
    // You have to write your code here
    if(!Array.isArray(arr)){
        return 'invalid input';
    }else if(typeof livingCost !== 'number'){
        return 'invalid input';
    }

    let income = 0;
    let incomeWithTax = 0;
    for(const ar of arr){
        if(ar >= 3000){
            incomeWithTax+= ar;
            const tax = ar * 20 /100;
            incomeWithTax = incomeWithTax  -  tax;
            income+= incomeWithTax;   
        } else{
            income+= ar;
        }
    }
    // console.log(income);
    const totalSavings  = income - livingCost;
    if(totalSavings >= 0){
        return totalSavings;
    } else{
        return 'earn more';
    }
}
console.log(monthlySavings( [ 900 , 2700 , 3400] , 10000));
