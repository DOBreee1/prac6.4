function calculateSum() {
    var number1 = parseFloat(document.getElementById("number1").value);
    var number2 = parseFloat(document.getElementById("number2").value);
    
    if (isNaN(number1) || isNaN(number2)) {
      alert("Please enter valid numbers.");
      return;
    }
    
    var sum = number1 + number2;
    document.getElementById("result").value = sum;
    // alert("The sum is: " + sum); // If you want to display the result in a dialog window
  }
  