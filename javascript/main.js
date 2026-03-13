var a = {
    init: function(){
       $(()=> { //STARTS JQUERY WHEN DOM IS READY
        // Code to run when the DOM is ready
        })

    },

    changeStatusBlurb:updateText=>{
        $('#statusBlurb').text(updateText);
    },
    displayData:(data)=>{
        
        console.log("displaying data", data);
        
        try {
            // Convert JSON object to string
            const jsonString = JSON.stringify(data);

            console.log("JSON String:", jsonString);

            // Pretty-print with indentation (2 spaces)
            const prettyString = JSON.stringify(data, null, 2);
            console.log("Pretty JSON String:\n", prettyString);
            $('#raw-data').text(prettyString);

        } catch (error) {
            console.error("Error converting JSON to string:", error.message);
        }

    },
    getData:()=>{
        // Example URL returning JSON
        const url = '/output/output.json';

        // Async function to fetch and process JSON
        async function getJsonFromUrl(url) {
            try {
                // Make the HTTP request
                const response = await fetch(url);

                // Check if the response is OK (status 200–299)
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                // Parse the JSON body
                const data = await response.json();

                // Use the data
                console.log('Fetched JSON:', data);
                a.displayData(data);
                return data;

            } catch (error) {
                // Handle network or parsing errors
                console.error('Error fetching JSON:', error.message);
                return null;
            }
        }

        // Call the function

        getJsonFromUrl(url);
        console.log('end');
    },
    selectDashboards: ()=> {
        $('#button-1').click(btn => { 
            $('#button-1').text('1 you clicked me');
            a.changeStatusBlurb('YOU CLICKED BUTTON 1');
        });

        $('#button-2').click(()=>{
            $('#button-2').text('2 you clicked me');
            a.changeStatusBlurb('YOU CLICKED BUTTON TWO');
        });

        $('#button-3').click(()=>{
            $('#button-3').text('3 you clicked me');
            a.changeStatusBlurb('YOU CLICKED BUTTON THREE');
        });
    },
}

var main = function(){
    a.init();
    a.selectDashboards();
    a.getData();
}

main();