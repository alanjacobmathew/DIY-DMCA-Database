/* Initialising typeahead-standalone.js: https://typeahead.digitalfortress.tech/ (MIT) */
		  
typeahead({
    input: document.querySelector('.searchterm'),
    source: {
    prefetch: {
        url: "https://raw.githubusercontent.com/alanjacobmathew/DIY-DMCA-Database/main/data_source/data.json",
        },
    identifier: 'name',
    transform: (data) => { 
    return data.src;
    }

},

debounceRemote: 200,
highlight: true,
className: 'typeahead-sgst',
minLength: 2,
preventSubmit: false,
hint: true,
autoSelect: true,
templates: {
    suggestion: (dmca) => (
    `<div  class="single-item"  >
    <div class="company_name">${dmca.name}</div>
    </div>`
    ),
    
header: () => 'Website Name',
notFound: () => 'Sorry, that website is not in our database <br> Please report it <a href="#"> here</a> ',

},
onSubmit: (e, selectedSuggestion) => {


if (selectedSuggestion) {
var myJSON = JSON.stringify(selectedSuggestion);
var sto=JSON.parse(myJSON);
//console.log(sto.name);

document.getElementById('enterArg').innerHTML = '';
document.getElementById('myData').innerHTML = ''; /* To clear data when input gets new data  */
var mainContainer = document.getElementById("myData");
var div = document.createElement("div");

div.innerHTML = '<b>Name</b>: ' + sto.name + "<br><br>" + '<b>URL:</b> <br>' + sto.url + "<br><br>" + '<b>DMCA Complier:</b> ' + sto.complier + "<br><br>" + '<b>DMCA Email:</b> <br>' + sto.email ;
mainContainer.appendChild(div);
}

}



});	 

/** End  typeahead-standalone.js : https://typeahead.digitalfortress.tech/ **/

 
