'use strict'

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('Grey-theme')

    var className = document.body.className;
    if(className == "Orange-theme") {
        this.textContent = "Orange";
    }
    else {
        this.textContent = "Grey";
    }
    console.log('current class name: ' + className);
});