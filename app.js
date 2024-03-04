//creates the div for the navbar
var navbar = document.createElement("div");
//gives the navbar div the id of "navbar", which will be used for css later
navbar.id = "navbar";

//creates the first element of the navbar div, which will be a clickable word
var navbarElement1 = document.createElement("a");
//just a placeholder as of right now so it is still clickable
navbarElement1.href = ""
//makes the color of the text black
navbarElement1.style.color = "black";
//removes the underline of the text
navbarElement1.style.textDecoration = "none"
//gives an id to the element which will be used for styling later
navbarElement1.id = "gallery"
//gives the a tag some inner html (which is the text)
navbarElement1.innerHTML = "Gallery"
//appends the new gallery link to the navbar
navbar.appendChild(navbarElement1);

//creates the first element of the navbar div, which will be a clickable word
var navbarElement2 = document.createElement("a");
//removes the underline or any weird styling with the image
navbarElement2.style.textDecoration = "none"
//just a placeholder as of right now so it is still clickable
navbarElement2.href = ""
//gives an id to the element which will be used for styling later
navbarElement2.id = "logo"
//gives the a tag some inner html, which is basically an image with an id
navbarElement2.innerHTML = "<img src='./logo.png' alt='logo' id = 'logoo'>"
//appends the image to the navbar
navbar.appendChild(navbarElement2);

//creates the second element of the navbar div, which will be a clickable word
var navbarElement3 = document.createElement("a");
//removes the underline of the text
navbarElement3.style.textDecoration = "none";
//makes the color of the text black
navbarElement3.style.color = "black";
//just a placeholder as of right now so it is still clickable
navbarElement3.href = ""
//gives an id to the element which will be used for styling later
navbarElement3.id = "shop"
//gives the a tag some inner html (which is the text)
navbarElement3.innerHTML = "Shop"
//appends the new shop link to the navbar
navbar.appendChild(navbarElement3);

//appends the entire navbar and its elements to the body itself
document.body.appendChild(navbar);
//backs the navbar background into a mocha brown
document.body.style.backgroundColor = "#A07855FF"
//the following gives some style and css to the image in the navbar. It gives it a certain height and width
document.getElementById("logoo").style.width = "100px";
document.getElementById("logoo").style.height = "100px";
//the following gives the navbar some css and sets the display as flex, so the elements can be spaced-evenly. It also gives some color choices and other minor css details as well.
document.getElementById("navbar").style.display = "flex";
document.getElementById("navbar").style.padding = "20px";
document.getElementById("navbar").style.color = "black";
document.getElementById("navbar").style.justifyContent = "space-evenly";
document.getElementById("navbar").style.fontSize = "35px";
document.getElementById("navbar").style.alignItems = "center";
document.getElementById('navbar').style.backgroundColor = "#D4B996FF"

//this is the creation of the div that will contain all the main content of the page
var mainBodyContent = document.createElement('div')
//gives an id to the main body content, which will be used for styling later
mainBodyContent.id = "grid"
//sets the body display to grid
mainBodyContent.style.display = "grid"
mainBodyContent.style.padding = "10px"
//sets the rows and columns for the grid, where the image and the text will go
mainBodyContent.style.gridTemplateColumns = "[f] 50% [s] 50% [end]"
mainBodyContent.style.gridTemplateRows = "[first] auto [end]"

//creates the span tag for the image that will be in in the main content are
var bodyImage = document.createElement("span");
//adds the image tag and the image source to the span tag
bodyImage.innerHTML = "<img src='./main.jpg' alt='mainAd' id = 'mainImage'>"
//appends this new tag and its content to the main body content area
mainBodyContent.appendChild(bodyImage);

//creates the span tag where the text for the main body area will go to
var nikeContent = document.createElement("span")
//adds the inner html and h1 tag to the span tag, displaying an AD for Nike
nikeContent.innerHTML = "<h1 id='nike'>Nike, a global athletic apparel and footwear giant, is renowned for its commitment to innovation, performance, and inspiration. Founded in 1964, the company's overarching goal is to bring inspiration and innovation to every athlete worldwide. Embracing a broad definition of 'athlete' that includes anyone with a body, Nike strives to create cutting-edge products that enhance athletic performance across diverse sports and activities. The brand is synonymous with excellence and strives to foster a culture of sustainability, aiming to have a positive impact on the planet. With a focus on social responsibility and inclusivity, Nike continually pushes boundaries, transcending the realms of sport to empower individuals to reach their full potential.</h1>"
//appends this new tag and its content to the main body content area
mainBodyContent.appendChild(nikeContent);

//appends the entirty of the main body content, such as the image and text, to the body of the page
document.body.appendChild(mainBodyContent);
//adds the grid rows and columns to the image, giving it proper placing
document.getElementById("mainImage").style.gridRow = "f/s"
document.getElementById("mainImage").style.gridColumn = "first/end"
document.getElementById("mainImage").style.width = "-webkit-fill-available"
document.getElementById("mainImage").style.padding = "20px"
//makes the content be aligned in the middle for the text. The rest also adds css to the h1 tag and text
document.getElementById("nike").style.textAlign = "center"
document.getElementById("nike").style.padding = "20px"
document.getElementById("nike").style.color = "white"
document.getElementById("nike").style.fontSize = "1.71vw"
document.getElementById("nike").style.width = "-webkit-fill-available"
document.getElementById("nike").style.display = "flex"
document.getElementById("nike").style.alignItems = "center"
//makes the h1 tag be unbolded
document.getElementById("nike").style.fontWeight = "normal"

//creates the footer element
var footer = document.createElement('footer')
//gives it the id, which will be used for styling later
footer.id = "footer"
//gives the footer the light mocha background color
footer.style.backgroundColor = "#D4B996FF"

//creates the new span tag for the copyright text
var fElement1 = document.createElement('span')
//adds the copyright text to the span tag
fElement1.innerHTML = "<p>All rights reserved to &copy;Nike 2023</p>"
//appends this tag and text to the footer
footer.appendChild(fElement1);

//added to create a span tag where the clickable contact us page will be located
var fElement2 = document.createElement('span')
//appends this span tag to the footer
footer.appendChild(fElement2);

//creates an a tag
var contact = document.createElement('a')
//just a placeholder as of right now so it is still clickable
contact.href = ""
//gives it an id, which will be used for styling later
contact.id = 'contactUs'
//adds the inner html, which is the text in this case, to the a tag
contact.innerHTML = "Contact Us"
//appends the a tag to the span tag that was created earlier
fElement2.appendChild(contact);

//appends the entire footers and its elements to the body
document.body.appendChild(footer)
//the following is styling for the footer. It makes the footer display flex and spaces the elemnts evenly and does other things.
document.getElementById('footer').style.display = 'flex'
document.getElementById("footer").style.justifyContent = "space-evenly";
document.getElementById("footer").style.fontSize = "20px";
document.getElementById("footer").style.alignItems = "center";
document.getElementById('contactUs').style.color = "black"

//the following are eventlisteners for the a tags (navbar and footer contact us link). 
//when the links are hovered over, the color changes and when the mouseover is gone, it goes back to the normal color.
navbarElement1.addEventListener('mouseover', () => {
    navbarElement1.style.color = 'red';
});
navbarElement1.addEventListener('mouseout', () => {
    navbarElement1.style.color = 'black';
});

navbarElement2.addEventListener('mouseover', () => {
    navbarElement2.style.color = 'red';
});
navbarElement2.addEventListener('mouseout', () => {
    navbarElement2.style.color = 'black';
});

navbarElement3.addEventListener('mouseover', () => {
    navbarElement3.style.color = 'red';
});
navbarElement3.addEventListener('mouseout', () => {
    navbarElement3.style.color = 'black';
});

contact.addEventListener('mouseover', () => {
    contact.style.color = 'red';
});
contact.addEventListener('mouseout', () => {
    contact.style.color = 'black';
});
  