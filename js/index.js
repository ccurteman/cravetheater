const TypeWriter = function (txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
}

// Type Method
TypeWriter.prototype.type = function () {
    // Current Index of wordArray
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];
    //console.log(fullTxt);

    // Check if deleting
    if (this.isDeleting) {
        // if deleting, remove a character off txt
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
    let typeSpeed = 150;

    if (this.isDeleting) {
        typeSpeed /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
        typeSpeed = this.wait;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.wordIndex++;
        typeSpeed = 500;
    }

    // If fullTxt is equal to the last word in our array, and the typewriter is on the last letter
    if (fullTxt === 'Theatre Company' && this.txt.slice(-1) === 'y') {
        console.log('finished looping through array');
    } else {
        setTimeout(() => this.type(), typeSpeed);
    }
}

// Init on DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init Application
function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words')); // data-words needs to be parsed
    const wait = txtElement.getAttribute('data-wait');
    let counter = this.counter;
    // Init typewriter
    new TypeWriter(txtElement, words, wait);

}

function slideBanner() {
    console.log('slideBanner');
    let banner = document.getElementById('banner');
    if (banner.className === '' || banner.className === 'slide-down') {
        banner.className = 'slide-top';
    }

    let about = document.getElementById('about');
    for ( let i = 0; i < 100; i++) {
        console.log(about.style.opacity);
        about.style.opacity++;
    }
}
