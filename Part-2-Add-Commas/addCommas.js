
//toLocaleString formats the number according to the local currency, percent, or unit formatting.

function addCommas(number) {
    return number.toLocaleString();
  }

  console.log(addCommas(1234567));  
  console.log(addCommas(90876))