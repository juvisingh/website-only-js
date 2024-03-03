var navbar = document.createElement("div");
navbar.id = "navbar";


var navbarElement1 = document.createElement("a");
navbarElement1.href = ""
navbarElement1.style.color = "black";
navbarElement1.style.textDecoration = "none"
navbarElement1.id = "gallery"
navbarElement1.innerHTML = "Gallery"
navbar.appendChild(navbarElement1);


var navbarElement2 = document.createElement("a");
navbarElement2.style.textDecoration = "none"
navbarElement2.href = ""
navbarElement2.id = "logo"
navbarElement2.innerHTML = "<img src='./logo.png' alt='logo' id = 'logoo'>"
navbar.appendChild(navbarElement2);


var navbarElement3 = document.createElement("a");
navbarElement3.style.textDecoration = "none";
navbarElement3.style.color = "black";
navbarElement3.href = ""
navbarElement3.id = "shop"
navbarElement3.innerHTML = "Shop"
navbar.appendChild(navbarElement3);


document.body.appendChild(navbar);
document.body.style.backgroundColor = "#A07855FF"
document.getElementById("logoo").style.width = "175px";
document.getElementById("logoo").style.height = "175px";
document.getElementById("navbar").style.display = "flex";
document.getElementById("navbar").style.padding = "20px";
document.getElementById("navbar").style.color = "black";
document.getElementById("navbar").style.justifyContent = "space-evenly";
document.getElementById("navbar").style.fontSize = "40px";
document.getElementById("navbar").style.alignItems = "center";
document.getElementById('navbar').style.backgroundColor = "#D4B996FF"

var mainBodyContent = document.createElement('div')
mainBodyContent.id = "grid"
mainBodyContent.style.display = "grid"
mainBodyContent.style.padding = "10px"
mainBodyContent.style.gridTemplateColumns = "[f] 50% [s] 50% [end]"
mainBodyContent.style.gridTemplateRows = "[first] auto [end]"

var bodyImage = document.createElement("span");
bodyImage.innerHTML = "<img src='./main.jpg' alt='mainAd' id = 'mainImage'>"
mainBodyContent.appendChild(bodyImage);

var nikeContent = document.createElement("span")
nikeContent.innerHTML = "<h1 id='nike'>Nike, a global athletic apparel and footwear giant, is renowned for its commitment to innovation, performance, and inspiration. Founded in 1964, the company's overarching goal is to bring inspiration and innovation to every athlete worldwide. Embracing a broad definition of 'athlete' that includes anyone with a body, Nike strives to create cutting-edge products that enhance athletic performance across diverse sports and activities. The brand is synonymous with excellence and strives to foster a culture of sustainability, aiming to have a positive impact on the planet. With a focus on social responsibility and inclusivity, Nike continually pushes boundaries, transcending the realms of sport to empower individuals to reach their full potential.</h1>"
mainBodyContent.appendChild(nikeContent);

document.body.appendChild(mainBodyContent);
document.getElementById("mainImage").style.gridRow = "f/s"
document.getElementById("mainImage").style.gridRow = "first/end"
document.getElementById("mainImage").style.width = "-webkit-fill-available"
document.getElementById("mainImage").style.padding = "20px"
document.getElementById("nike").style.textAlign = "center"
document.getElementById("nike").style.padding = "20px"
document.getElementById("nike").style.color = "white"
document.getElementById("nike").style.fontSize = "1.71vw"
document.getElementById("nike").style.width = "-webkit-fill-available"
document.getElementById("nike").style.display = "flex"
document.getElementById("nike").style.alignItems = "center"

var footer = document.createElement('footer')
footer.id = "footer"
footer.style.backgroundColor = "#D4B996FF"

var fElement1 = document.createElement('span')
fElement1.innerHTML = "<p>All rights reserved to &copy;Nike 2023</p>"
footer.appendChild(fElement1);

var fElement2 = document.createElement('span')
footer.appendChild(fElement2);

var contact = document.createElement('a')
contact.href = ""
contact.id = 'contactUs'
contact.innerHTML = "Contact Us"
fElement2.appendChild(contact);

document.body.appendChild(footer)
document.getElementById('footer').style.display = 'flex'
document.getElementById("footer").style.justifyContent = "space-evenly";
document.getElementById("footer").style.fontSize = "20px";
document.getElementById("footer").style.alignItems = "center";
document.getElementById('contactUs').style.color = "black"

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
  