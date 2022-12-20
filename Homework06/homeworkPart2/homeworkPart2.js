let row = parseInt(prompt("Enter rows: "))
let column = parseInt(prompt("Enter columns: "))

function createTable(rows, columns) {
  let table = document.createElement("table");
  let tblBody = document.createElement("tbody");

  for (let i = 0; i < rows; i++) {
      let row = document.createElement("tr");

      for (let j = 0; j < columns; j++) {
          let cell = document.createElement("td");
          let cellText = document.createTextNode("Row-" + (i+1) + " Column-" + (j+1));
          cell.appendChild(cellText);
          row.appendChild(cell);
          cell.style.border = "2px solid black"
      }
      tblBody.appendChild(row);
  }
  table.appendChild(tblBody);
  document.body.appendChild(table);
  table.style.border = "1px solid black"
} 
createTable(row, column);
