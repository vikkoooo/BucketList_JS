/*
1. 	Create a <p> using the createElement method. When you have a reference to your new element, 
	change its innerText to something that you would like to have on your bucket list, and then append
	it to the DOM with the appendChild method. Where does this element go? How can you get it do be 
	added directly after the already existing <p>.
*/
const newParagraph1 = document.createElement("p");
newParagraph1.innerText = "Go to Fjäderholmarna";
const bucketList = document.querySelector(".list");
bucketList.appendChild(newParagraph1);

/*
2. 	Create another <p> with an item you would like to have on you bucket list. This time add it to the DOM, 
	right after your existing <p>-tags with the help of the insertAdjecentElement method. This method accepts a 
	position argument. Which value should that argument have?
	
	- afterbegin
	- afterend
	- beforebegin
	- beforeend

	Try them out!
*/
const newParagraph2 = document.createElement("p");
newParagraph2.innerText = "Run sub 36 min on 10K";
const place = document.querySelector(".list");
place.insertAdjacentElement("beforeend", newParagraph2);

/*
3. 	innerHTML is an interesting property that exists on HTML elements. 
	With that property we can get and set the inner HTML of a HTML element very easy. 
	Try to get (or do you already have it?) the inner HTML from the element that contains
	 all the <p>-tags of your bucket list. Log that to the console.
*/
const bucketListInner = bucketList.innerHTML;
console.log(bucketListInner);

/*
4. 	In order to set the innerHTML of an element we need to create a string that 
	contains the HTML code that we want to add to the DOM. It can look something like this:

	"<div>This is a div element as a string</div>";
	
	Now create that string that contains a new item that you want to add to your bucket list.
*/
const myStr = "<p>Vandra i fjällen med tält</p>";
console.log(myStr);

/*
5. 	Set the innerHTML of the list with the new item you just created. What happens when you do that?
*/
// bucketList.innerHTML = myStr;

/*
6.	Comment out that previous line(s) of code and the three items that you had before you should exist again.
	  How can you add that last item and still keep the three other ones? There is a method 
	  that is very similar to the insertAdjecentElement that will take your HTML string and add it
		to the list. Try to add your new item to the beginning of the list. 
*/
// bucketList.innerHTML += myStr; // Solution 1
bucketList.insertAdjacentHTML("afterbegin", myStr); // Solution 2

