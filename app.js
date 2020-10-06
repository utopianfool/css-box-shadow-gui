/* Navigation */
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const social = document.querySelector('.social-links');
    // get all nav links
    const navLinks = document.querySelectorAll('.nav-links li');
    const socialLinks = document.querySelectorAll('.social-links a');

    // Toggle nav
    burger.addEventListener('click', function() {
        nav.classList.toggle('nav-active');
        social.classList.toggle('nav-active');

        
        // Animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.3}s`; // add delay at end
            }
        });

        socialLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.3}s`; // add delay at end
            }
        });

        // Animate burger
        burger.classList.toggle('toggle');
    });

}

/* Use fetch api to get list of projects hosted elsewhere */
const projectsList = () => {

    var address = config.api; // Use config.js to hide api
    // Get json data from url
    const proxy = 'https://cors-anywhere.herokuapp.com/'; // use proxy to fix cors on localhost
    const url = `${proxy}${address}`;


    fetch(url) 
        .then(response => {
            return response.json();
        })
        .then(data => {
            // console.log(data);
            appendData(data);
        })
        .catch(function (error) {
            console.log(error);
        });
    function appendData(data) {
        var subMenu = document.querySelector('.sub-menu');
        for(var i = 0; i < data.length; i++) {
            var listItem = document.createElement('li');
            listItem.innerHTML = '<a target="_blank" rel="noopener" title="' + data[i].description + '" href="' + data[i].link_url + '">' + data[i].link_text + '</a>';
            subMenu.appendChild(listItem);
        }
    } // https://howtocreateapps.com/fetch-and-display-json-html-javascript/

}

/* CSS box shadow visual representation app */
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', inputChanged);
});

function inputChanged(e) {
    document.documentElement.style.setProperty(
        `--${e.target.name}`,
        e.target.value
    )
}

// keep it tidy by invoking smaller functions inside of app function
const app = () => {
    navSlide();
    projectsList();
}

app();