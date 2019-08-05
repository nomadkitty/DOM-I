const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navItem = document.querySelectorAll('nav a');
navItem[0].textContent = siteContent.nav["nav-item-1"];
navItem[1].textContent = siteContent.nav["nav-item-2"];
navItem[2].textContent = siteContent.nav["nav-item-3"];
navItem[3].textContent = siteContent.nav["nav-item-4"];
navItem[4].textContent = siteContent.nav["nav-item-5"];
navItem[5].textContent = siteContent.nav["nav-item-6"];
navItem.forEach(items => {items.style.color = 'green';});

let ctaH1 = document.querySelector('.cta-text h1');
ctaH1.textContent = siteContent.cta.h1;
ctaH1.style.color = "green";

let ctaBtn = document.querySelector('.cta-text button');
ctaBtn.textContent = siteContent.cta.button;
ctaBtn.style.backgroundColor = 'pink';
ctaBtn.style.border = 'none';
ctaBtn.style.borderRadius ='5px';
ctaBtn.style.color = 'lightyellow';

let ctaImg = document.getElementById('cta-img');
ctaImg.src = siteContent.cta["img-src"];

let mainContent = document.querySelector('.main-content');
mainContent.style.borderTop = '2px dashed pink';
mainContent.style.borderBottom ='2px dashed pink';

let textContentH4 = document.querySelectorAll('.text-content h4');
textContentH4[0].textContent = siteContent["main-content"]["features-h4"];
textContentH4[1].textContent = siteContent["main-content"]["about-h4"];
textContentH4[2].textContent = siteContent["main-content"]["services-h4"];
textContentH4[3].textContent = siteContent["main-content"]["product-h4"];
textContentH4[4].textContent = siteContent["main-content"]["vision-h4"];
textContentH4.forEach(items =>{items.style.color ='green';});

let textContentP = document.querySelectorAll('.text-content p');
textContentP[0].textContent = siteContent["main-content"]["features-content"];
textContentP[1].textContent = siteContent["main-content"]["about-content"];
textContentP[2].textContent = siteContent["main-content"]["services-content"];
textContentP[3].textContent = siteContent["main-content"]["product-content"];
textContentP[4].textContent = siteContent["main-content"]["vision-content"];

let middleImg = document.getElementById('middle-img');
middleImg.src = siteContent["main-content"]["middle-img-src"];

let contactH4 = document.querySelector('.contact h4');
contactH4.textContent = siteContent.contact["contact-h4"];
contactH4.style.color = 'green';

// siteContent.contact.address.split(' ');
// siteContent.contact.address.splice(3,0, '<br>');
let contactP = document.querySelectorAll('.contact p');
contactP[0].textContent = siteContent.contact.address; 
contactP[0].style.width = '20%';
// contactP[0].style.wordBreak = 'normal';
contactP[1].textContent = siteContent.contact.phone;
contactP[2].textContent = siteContent.contact.email;

let footerP = document.querySelector('footer p');
footerP.textContent = siteContent.footer.copyright;
footerP.style.color = 'green';

let newfrontA = document.createElement('a');
let newBackA = document.createElement('a');
newfrontA.textContent = 'Home';
newBackA.textContent = 'Team';
newfrontA.style.color = 'green';
newBackA.style.color = 'green';

let newNav = document.querySelector('nav');
newNav.prepend(newfrontA);
newNav.appendChild(newBackA);

