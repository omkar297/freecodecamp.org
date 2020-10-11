let ones = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
let tens = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
let hundreds = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
let thousands = ['', 'M', 'MM', 'MMM', 'MMMM'];

function convertToRoman(num) {
    let romanNumeral = "";

    //  SPLIT
    let stringNumber = num.toString();

    // Pad the stringNumber with 0's until it's 4 in length
    while (stringNumber.length < 4){
        stringNumber = "0" + stringNumber;
    }

    // Split the numbers up so we can identify how many numbers of 
    // that type exist. e.g 0 thousands, 3 hundreds, 1 ten, 0 ones
    let numberArray = stringNumber.split("");

    // CONVERT
    let thousandsText = thousands[numberArray[0]];
    let hundredsText = hundreds[numberArray[1]];
    let tensText = tens[numberArray[2]];
    let onesText = ones[numberArray[3]];

    // JOIN
    romanNumeral = thousandsText + hundredsText + tensText + onesText;
    return romanNumeral;
}

convertToRoman(36);