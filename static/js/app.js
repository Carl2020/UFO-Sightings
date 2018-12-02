// from data.js
var tableData = data;

// declare variable for filtering the table and set its initial value
var filteredData = tableData;

// Select the submit button
var submit = d3.select("#filter-btn");
// create event listener

submit.on("click", function() {
  // Prevent the page from refreshing
    d3.event.preventDefault();

    // clear out any previous data in the table
    d3.select("tbody").selectAll("tr").remove();

  // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

  // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
 
   
    if (inputValue === "" || inputValue === "Full Table") {
        filteredData = tableData
        }
        else filteredData = tableData.filter(ufoReport => ufoReport.datetime === inputValue);
        
    console.log(inputValue)
    console.log(filteredData)
 
// add table values from the filteredData set using forEach to loop through all data and append to the table.
   
    
    filteredData.forEach((ufoReport) => {
        var tbody = d3.select("tbody");
        var row = tbody.append("tr");
        Object.entries(ufoReport).forEach(([key, value]) => {
            var cell = tbody.append("td");
            cell.text(value);
        });

    });
});


