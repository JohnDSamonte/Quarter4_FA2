function check(event) {
  event.preventDefault();
 
  let n1 = document.getElementById("num1").value;
  let n2 = document.getElementById("num2").value;
            
  n1 = Number(n1);
  n2 = Number(n2);

  if ((n1 < 2) || (n1 > 10) || (n2 < 2) || (n2 > 10)) {
    alert("Please enter numbers between 2 and 10");
    return false;
  }
  loop(n1, n2);
  return false;
}

function loop(num1, num2) {
  let output = "<table border='1'>";
  for (let g = 1; g <= num1; g++) {
    output += "<tr>";
    for (let i = 1; i <= num2; i++) {
      output += `<td>${g * i}</td>`;
    }
    output += "</tr>";
  }
  output += "</table>";
  document.getElementById("output").innerHTML = output;
}