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

//Navigation

  // for loop
    // let nav = document.querySelectorAll("nav a");
    // for (i = 0; i < nav.length; i++) {
    //   nav[i].textContent = siteContent.nav["nav-item-" + i]
    // }

  // for each
    document.querySelectorAll("nav a").forEach(function(el, i) {
      el.textContent = siteContent.nav["nav-item-" + i]
    })

//cta
  //text
    document.querySelector('.cta-text h1').innerHTML = siteContent.cta["h1"].replace(/ /g, " <br> ");

  //button
    document.querySelector('.cta-text button').textContent = siteContent.cta["button"];
  
  //img
    // let ctaimg = document.getElementById("cta-img");
    document.getElementById('cta-img').setAttribute('src', siteContent["cta"]["img-src"]);

// top content

  let text = document.querySelectorAll('.text-content');
  
  //img

    document.getElementById('middle-img').setAttribute('src', siteContent["main-content"]["middle-img-src"]);
  
  //text

    let mainTxt = siteContent["main-content"];
    delete mainTxt["middle-img-src"];
    let i = 0;

    document.querySelectorAll(".text-content").forEach(function(el) {
      el.firstElementChild.textContent = Object.values(mainTxt)[i]
      el.lastElementChild.textContent = Object.values(mainTxt)[Number(i+1)]
      i = i + 2;
    })

//contact
    contact = document.querySelector('.contact');
    for (let i = 0; i < contact.children.length; i++) {
      contact.children[i].textContent = Object.values(siteContent["contact"])[i]
    }

    var contactBr =  document.querySelector('.contact p').innerHTML.replace("Street", 'Street <br />');
    document.querySelector('.contact p').innerHTML = contactBr

//footer
  document.querySelector('footer p').textContent = siteContent.footer["copyright"];