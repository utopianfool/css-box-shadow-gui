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
const boxTab = document.querySelector('#box-tab');
const boxShape = document.querySelector('.box-shape');
const boxShapeResults = document.querySelector('.box-shape-output');

boxTab.addEventListener('click', function() {
    boxShape.classList.toggle('enabled');
    boxShapeResults.classList.toggle('visible');
});

document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', inputChanged);
});

const xPosition = document.querySelector('#result-x-position');
const yPosition = document.querySelector('#result-y-position');
const blur = document.querySelector('#result-blur');
const spread = document.querySelector('#result-spread');
const shadowColour = document.querySelector('#result-shadow-colour');
const insetCheckbox = document.querySelector('#inset');
const insetShadow = document.querySelector('#result-inset');
const boxHeight = document.querySelector('#result-height');
const boxWidth = document.querySelector('#result-width');
const borderRadius = document.querySelector('#result-border-radius');


function inputChanged(e) {
    document.documentElement.style.setProperty(
        `--${e.target.name}`,
        e.target.value
    )
    // Update box shadow results
    if(e.target.name == 'x-position') {
        xPosition.textContent = e.target.value;
    }
    if(e.target.name == 'y-position') {
        yPosition.textContent = e.target.value;
    }
    if(e.target.name == 'blur') {
        blur.textContent = e.target.value;
    }
    if(e.target.name == 'spread') {
        spread.textContent = e.target.value;
    }
    if(e.target.name == 'shadow-colour') {
        shadowColour.textContent = e.target.value;
    }
    // Update box shape
    if(e.target.name == 'height') {
        boxHeight.textContent = e.target.value;
    }
    if(e.target.name == 'width') {
        boxWidth.textContent = e.target.value;
    }
    if(e.target.name == 'border-radius') {
        borderRadius.textContent = e.target.value;
    }
    // Update inset checkbox
    if(insetCheckbox.checked == true) {
        document.documentElement.style.setProperty(
            `--inset`,
            'inset'
        )
        insetShadow.textContent = ' inset';
    }
    if(insetCheckbox.checked == false) {
        document.documentElement.style.setProperty(
            `--inset`,
            
        )
        insetShadow.textContent = '';
    }
}

const app = () => {
    navSlide();
    projectsList();
}

app();