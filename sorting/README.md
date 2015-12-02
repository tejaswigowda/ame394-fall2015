#Usage

* Clone this repo
* Run  ``` node server.js ```
* Open [http://localhost:8080](http://localhost:8080) in your browser.


#Hints

## Sorting

* Complete functions ```insertionSort``` and ```bubbleSort``` in ```server.js```
* Check if all the right responses are generated for ```getSortedJSON``` at the client.
* Example of server url request : ```./getSortedJSON?alg=selection&key=id```
* In ```index.html``` use ```loadURL()``` to load server data asynchronously via ```getSortedJSON```.


## Filtering

* No need to change ```server.js``` (for filtering).
* Generate the markup for Filter Dropdown -- 1. Parse the feed. 2. Get a unique list of all tags and categories. Note: edit ```getAllTags()```, ```getAllCats()``` and ```populateFilters()```
* You might want to add classes to each ```listItem```.
* Complete the ```filteredChanged()``` function to update the view when a filter is changed. --- Make sure it works for "all" Tags and Categories.
