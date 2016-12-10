//https://www.dropbox.com/s/yusm407e3cfq0s5/ObjectAssessment.js?dl=0

/*
The file is a JavaScript file (You can use SublimeText2 to open it!). In it, 
there is an object that is being declared using the Object Literal method. 
However, err.... there is a problem. Actually, lots of them. Your task this 
week is to clean up this object, making sure all the proper syntax and other 
needed components are included.

Once you have worked through the Object and corrected it, create an html 
file (index.html) that pulls in the JavaScript file (script.js) and console 
logs out the object. Once you have completed that, check the project into 
GitHub under a repo called 'prime_prestudy_05'.

// original object
avengersMovie = {
    name : Avengers;
    runtime : 143 mins;
    releaseYear = 2012;
    "Director" : "Joss Whedon".
}

Problem summary: 
Use commas between properties, not semicolons.
Use a colon between property names and properties.
Don't use periods at the end.
"mins" is not a number. suggest changing the property name.
Would also suggest Director instead of "Director" for a property name, 
	but not required.
*/

avengersMovie = {
	name: "The Avengers",
	runTimeMinutes: 143,
	linkIMDB: "http://www.imdb.com/title/tt0848228/",
	releaseYear: 2012,
	"Director": "Joss Whedon"
};

console.log(avengersMovie);
