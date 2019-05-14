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
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src'])

//Navigation
    document.querySelectorAll('nav a').forEach(function(el, i) {
      el.textContent = siteContent.nav['nav-item-' + i]
      // el.style.color = 'green';
    })

//cta
  //text
    document.querySelector('.cta-text h1').innerHTML = siteContent.cta["h1"].replace(/ /g, " <br> ");

  //button
    document.querySelector('.cta-text button').textContent = siteContent.cta["button"];
  
  //img
    document.getElementById('cta-img').setAttribute('src', siteContent["cta"]["img-src"]);

// top content
 
  //img
    document.getElementById('middle-img').setAttribute('src', siteContent["main-content"]["middle-img-src"]);
  
  //text
    let mainTxt = siteContent['main-content'];
    delete mainTxt['middle-img-src'];
    let i = 0;

    document.querySelectorAll('.text-content').forEach(function(el) {
      el.firstElementChild.textContent = Object.values(mainTxt)[i]
      el.lastElementChild.textContent = Object.values(mainTxt)[Number(i+1)]
      i = i + 2;
    })

//contact
    contact = document.querySelector('.contact');
    for (let i = 0; i < contact.children.length; i++) {
      contact.children[i].textContent = Object.values(siteContent["contact"])[i]
    }

    var contactBr =  document.querySelector('.contact p').innerHTML.replace('Street', 'Street <br />');
    document.querySelector('.contact p').innerHTML = contactBr

//footer
  document.querySelector('footer p').textContent = siteContent.footer['copyright'];


//other

  //append elements
    var navNewElem = document.createElement('a');
    navNewElem.text = 'Industries'
    navNewElem.setAttribute('href', '#')
    document.querySelector('nav').appendChild(navNewElem);

  //prepend elements
    var link = document.createElement("link");
    link.setAttribute('href', 'https://fonts.googleapis.com/icon?family=Material+Icons')
    link.setAttribute('rel', 'stylesheet')
    document.head.appendChild(link);

    var navNewPre= document.createElement('i');
    navNewPre.textContent = 'cloud'
    navNewPre.style.fontSize = '50px'
    navNewPre.style.color = 'lightblue'
    navNewPre.style.textShadow = '2px 2px 4px #000000'
    navNewPre.setAttribute('class', 'material-icons')
    document.querySelector('nav').prepend(navNewPre)

//stretch 
  // button to displa time
    // document.querySelector('.cta-text button').setAttribute('onclick', 'myFunction()')
    // function myFunction() {
    //   var node = document.createElement('li');
    //   var d = new Date();
    //   node.textContent = d
    //   document.querySelector(".cta-text").appendChild(node);
    // }

  //styling
    var style = (function() {
      var style = document.createElement("style");
      style.appendChild(document.createTextNode(""));
      document.head.appendChild(style);
      console.log(style.sheet.cssRules); 
      return style;
    })();

    style.sheet.insertRule('nav a:hover{color:white !important; background-color:green !important;  padding: 10px 10px; margin: 1px;}', 0);
    style.sheet.insertRule('nav{display:flex; align-items:center; justify-content:space-between;  padding: 20px 2%; margin: 1px;}', 1);
    style.sheet.insertRule('nav a{color:green !important; text-decoration: none;}', 2);
