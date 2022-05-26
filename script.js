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

                    // For loop to access all rows of data
                    for (i=0; i<environmentData.length; i++) {


                    }

                });

