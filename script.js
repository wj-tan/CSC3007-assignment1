// Api link for data gov environment data
const apiUrl = 'https://api.data.gov.sg/v1/environment/psi'
var environmentData = null;
var table = document.getElementById("table")

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {

        // Store Json data in environmentData variable
        environmentData = data.items[0].readings
        console.log(environmentData)

        console.log(environmentData["no2_one_hour_max"])


        // const col_arr =[]
        // const col_national = []


        var west = null;
        var national = null;
        var east = null;
        var central = null;
        var south = null;
        var north = null;

        Object.keys(environmentData).map(key =>{
            //console.log(environmentData[key]);

            // Generate a new row for the table for each iteration
            var row = table.insertRow();

            // Insert a new cell into each of the col
            var colMetric = row.insertCell();
            var colNational = row.insertCell();
            var colCentral = row.insertCell();
            var colWest = row.insertCell();
            var colEast = row.insertCell();
            var colNorth = row.insertCell();
            var colSouth = row.insertCell();

            colMetric.innerHTML = key
            colNational.innerHTML = environmentData[key].national
            colCentral.innerHTML = environmentData[key].central
            colWest.innerHTML = environmentData[key].west
            colEast.innerHTML = environmentData[key].east
            colNorth.innerHTML = environmentData[key].north
            colSouth.innerHTML = environmentData[key].south


            // const a = {dog : 1}

            // key : dog
            // value : 1

            // a["dog"
        })

        Object.values(environmentData).map(value=>{
            console.log(value);
        })
        // for (var key in environmentData) {
        //     console.log("key", key);
        //     //json_value = {west:1,east:2}



        //     console.log("data", environmentData[key]);
        //     var json_value = environmentData[key];
        //     console.log(json_value["west"])
        // }

        // // For loop to access all rows of data
        // for (i=0; i<environmentData.length; i++) {

        //     // Generate a new row for the table for each iteration
        //     var row = table.insertRow();

        //     // Insert a new cell into each of the col
        //     var col1 = row.insertCell();
        //     var col2 = row.insertCell();
        //     var col3 = row.insertCell();
        //     var col4 = row.insertCell();
        //     var col5 = row.insertCell();
        //     var col6 = row.insertCell();
        //     var col7 = row.insertCell();

        //     // col1.innerHTML = environmentData[i];


        // }

    });

