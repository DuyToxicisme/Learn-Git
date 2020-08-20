

// Time counting
var time_counting = new Date("August 10,2020 9:21:00").getTime();
var countDown = setInterval(run, 1000);
function run() {
    let now = new Date().getTime();
    let timeRest = time_counting - now;

    let day = Math.floor(timeRest / (1000 * 60 * 60 * 24));
    // day.toString();
    let hours = Math.floor(timeRest % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));

    let minute = Math.floor(timeRest % (1000 * 60 * 60) / (1000 * 60));

    let seconds = Math.floor(timeRest % (1000 * 60) / (1000));
    if (day < 10) {
        day = "0" + day;
    }
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minute < 10) {
        minute = "0" + minute;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    document.getElementById('day').innerHTML = day;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minute;
    document.getElementById('seconds').innerHTML = seconds;
    if (timeRest <= 0) {
        clearInterval(countDown);
        time.innerHTML = "";
    }
}

const list_events = document.getElementsByClassName('nav-link');

// list_events.addEventListener('click', function(){
    
// });

//Previous Loader
setTimeout(function () {
    $('.loading_bg').fadeToggle();
}, 1000);


// Move to top
const mybutton = document.getElementById("btn-move-top");

window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
function topFunction() {
    document.documentElement.scrollTop = 0;
}

// Page Admin  display infor user
var index = 1;
function ShowInforUser() {
    index++;
    if (index % 2 == 0) {
        document.getElementById('infor-user').style.display = "block";
    } else {
        document.getElementById('infor-user').style.display = "none";
    }
}

const showDropdownEvent = document.getElementById('list-event');
showDropdownEvent.addEventListener('click', function () {
    let Dropdown_event = document.getElementById('dropdown-event');

    if (Dropdown_event.style.display == "none") {
        Dropdown_event.style.display = "block";
    } else {
        Dropdown_event.style.display = "none";
    }
});

const showDropdownColor = document.getElementById('list-color');
showDropdownColor.addEventListener('click', function () {
    let Dropdown_color = document.getElementById('dropdown-color');

    if (Dropdown_color.style.display == "none") {
        Dropdown_color.style.display = "block";
        Dropdown_color.style.display.transitionDelay = "1s";
    } else {
        Dropdown_color.style.display = "none";
    }
});

const showDropdownSpeaker = document.getElementById('list-speaker');
showDropdownSpeaker.addEventListener('click', function () {
    let Dropdown_speaker= document.getElementById('dropdown-speaker');

    if (Dropdown_speaker.style.display == "none") {
        Dropdown_speaker.style.display = "block";
        Dropdown_speaker.style.display.transitionDelay = "1s";
    } else {
        Dropdown_speaker.style.display = "none";
    }
});

const showDropdownTicket = document.getElementById('list-ticket');
showDropdownTicket.addEventListener('click', function () {
    let Dropdown_ticket= document.getElementById('dropdown-ticket');

    if (Dropdown_ticket.style.display == "none") {
        Dropdown_ticket.style.display = "block";
        Dropdown_ticket.style.display.transitionDelay = "1s";
    } else {
        Dropdown_ticket.style.display = "none";
    }
});

const errorname = document.getElementById('errorName');
var event_name;
function checkError() {
    event_name = document.getElementById('event-title').value;
    let speaker_name = document.getElementById('speaker-name').value;
    // Speaker name
    let speaker_email = document.getElementById('speaker-email').value;

    let event_location = document.getElementById('event-place').value;
    // event Location
    let start_time = document.getElementById('ST-input').value;
    // Start time
    let end_time = document.getElementById('ET-input').value;
    //End Time
    let inpImage = document.getElementById('preview-image').value;
    // Input Image
    if (event_name == "") {
        errorname.innerHTML = 'Please input event name';
    } else {
        errorname.innerHTML = '';
    }

    if (speaker_name === "") {
        document.getElementById('errorNameSpeaker').innerHTML = 'Please input speaker name';
    } else {
        document.getElementById('errorNameSpeaker').innerHTML = '';
    }

    if (speaker_email === "") {
        document.getElementById('errorEmail').innerHTML = 'Please input speaker email';
    } else {
        document.getElementById('errorEmail').innerHTML = '';
    }

    if (event_location === "") {
        document.getElementById('errorLocation').innerHTML = 'Please input event location';
    } else {
        document.getElementById('errorLocation').innerHTML = '';
    }

    if (start_time === "") {
        document.getElementById('errorTimeStart').innerHTML = 'Please input start time';
    } else {
        document.getElementById('errorTimeStart').innerHTML = '';
    }

    if (end_time === "") {
        document.getElementById('errorTimeEnd').innerHTML = 'Please input end time';
    } else {
        document.getElementById('errorTimeEnd').innerHTML = '';
    }
    if (inpImage === "") {
        document.getElementById('errorUploadImage').innerHTML = 'Please choose image from your computer!';
    } else {
        document.getElementById('errorUploadImage').innerHTML = '';
    }
}

function ShowFormLocatonEvent() {
    let valueLocation = document.getElementById('location').value;
    if (valueLocation === "To be announce") {
        document.getElementById('Event-location').style.display = "block";
    } else {
        document.getElementById('Event-location').style.display = "none";
    }
}

function CheckContent() {
    let checkBox = document.getElementById('btn-check');
    if (checkBox.checked == true) {
        checkError();
    }
}

function showVerticalNav() {
    index++;
    let showNav = document.getElementById('vertical-nav');
    if (index % 2 == 0) {
        showNav.style.display = "block";
    } else {
        showNav.style.display = "none";
    }
}
// Page admin preview image speaker

document.getElementById('preview-image').addEventListener('change', function preview_image(event) {
    const reader = new FileReader();
    reader.onload = function () {
        let output = document.getElementById('output_image');
        output.src = reader.result;
    }
    reader.readAsDataURL(event.target.files[0]);
});

// Page buy ticket

function BillMoney() {
    let amount = document.getElementById('quantity-ticket').value;
    let TotalMoney = 1;
    TotalMoney = amount * 50;
    document.getElementById('price').innerHTML = TotalMoney;
}

// $(".owl-carousel").owlCarousel({
//     margin: 10,
//     responsiveClass:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         480:{
//             items:3
//         },
//         720:{
//             items:4
//         },
//         840:{
//             items:5
//         },
//         960:{
//             items:6
//         }
//     }
// });

//Show Slider
// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     if (n > slides.length) { slideIndex = 1 }
//     if (n < 1) { slideIndex = slides.length }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slides[slideIndex - 1].style.display = "block";
// }

// Set color page admin


