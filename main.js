// Part One - Querying DOM Elements

/*
Write a function that puts a line through the text of the first <li> in the unordered "Arguments" list (<ul). Since this function always does the same thing, it requires no parameters!
Now call it! The first list item (<li>) should get what's known as a "strikethrough" style.
*/
function strikethrough (){
    let argumentItem1 = document.querySelector('li');
    argumentItem1.style.textDecoration = 'line-through';
}

strikethrough();

/*
Write a function that takes in a string representing an DOM element's id and a string representing a url. The function should set the image with that id to have that url as its image source.
Now use that function to set the three images in the Image Area section to show three images of your choice. You'll need three separate calls to your function!
*/

function setImages (id, url){

    let image = document.querySelector(`#${id}`);
    image.src = url;
    //adjust height as needed
    image.style.height = '600px'
}

setImages('image-1', 'https://i.etsystatic.com/33590105/r/il/cf48f2/3702886717/il_794xN.3702886717_3x6h.jpg');
setImages('image-2', 'https://i.etsystatic.com/33590105/r/il/b3a0d0/3816736215/il_794xN.3816736215_darg.jpg');
setImages('image-3', 'https://i.etsystatic.com/33590105/r/il/6e913a/3656878266/il_794xN.3656878266_k3xl.jpg');

/*
This next function also doesn't require any parameters: write a function that always removes the first <li> from the Arguments <ul>
Now use it to remove the first two items from that list. You'll need to call it twice!
*/

function removeItem (){
    let removeItem = document.querySelector('li')
    removeItem.remove()
}

removeItem();
removeItem();

/*
Write a function that takes in two strings, one representing a font size and one representing an id, and sets the thing with that id to have that size for its text.
Try using it to change the size of any text on the page.
*/

function fontChanges (fontSize, id){
    let font2Change = document.querySelector(id)
    font2Change.style.fontSize = fontSize
}

fontChanges('48px', '#heading')

/*
Write a function that takes in a DOM element and appends it to the Arguments <ul>.
Let's use it! Create an image element in Javascript and pass it into your function.
*/

function appendsArguments (element){
   let myArguments = document.querySelector('#arguments')

    myArguments.appendChild(element)
    //adjusted for sanity sake
    image.style.height = '300px'
}

let image = document.createElement('img')
image.src = "https://i.etsystatic.com/10853708/r/il/3e8e9e/1058232497/il_794xN.1058232497_seuu.jpg"

appendsArguments (image)

/*
Write a function that takes in an image element and modifies its height to be 30 pixels.
Let's use it. Query an image element and then pass it into the function.
*/

function adjustImage(image){
    let myImage = document.querySelector(image)
    myImage.style.height = "30px"
}

adjustImage('#image-2')

/*
Write a function that takes in an element and gives it the class invisible.
Now query an element on the page and pass it into that function. You should see it disappear! (feel free to check the CSS file to see how this class works.)
*/

function spookyElements(element){
    let myElement = document.querySelector(element)
    myElement.style.opacity = 0;
    myElement.className = 'invisible'
}

spookyElements('h1')

/*
Write a function that takes in text and returns a new <li> with the given text parameter as its innerText.
Test it! Somewhere below this function, call it. Store the returned DOM element in a variable, then append it to the page (use your first function from part 2)
*/

function innerTexts(text){
    let newLI = document.createElement('li')
    newLI.innerText = text
    return newLI
}

let newItem = innerTexts('New text goes here!')
appendsArguments(newItem)

/*
Write a function that takes in two strings, one representing a header size and one some text, and returns a new header of that size (e.g., a '3' for the first parameter should result in an <h3>) with that text in it.
Test it by calling it with a header size and some text, storing the return value in a variable, then appending it to the page (again, use your first function from part 2).
*/

function headers (size, text){
    let newHeader = `h${size}`
    let header = document.createElement(newHeader)
    header.innerText = text
    return header
}

let newHeader = headers(3, 'New text goes here!')
appendsArguments(newHeader)