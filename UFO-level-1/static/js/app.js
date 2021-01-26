//data from data.js
var tableData = data;

// Call tbody tag for data insert
var table_Body = d3.select("tbody");
var ufo_Table = d3.select("table");

//Call the table class and link to the html
var tClass = d3.select("class", "table table-striped");
ufo_Table.attr("class", "table table-striped");

// Creating Table and put in data using append
function Table_set_up(sighting) {
    sighting.forEach((row) => {var tRow = table_Body.append("tr");
        Object.entries(row).forEach(([, value]) => {var column = tRow.append("td");
            column.text(value);
        });
    });
};

Table_set_up(tableData);


// listen for events and search through the date/time column to find rows that match user input

var filter_Button = d3.select("#filter-btn");
var date_Input = d3.select("#datetime");

filter_Button.on("click", function() {
    d3.event.preventDefault(); 

    table_Body.html("");
    
    var input_Value = date_Input.property("value");

    var filtered_table = tableData.filter(tableData => tableData.datetime === input_Value);

    Table_set_up(filtered_table);
});