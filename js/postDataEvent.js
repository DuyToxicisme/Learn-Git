// Post form data events to localhost

document.getElementById('postDataEvent').addEventListener('submit', postDataEvent);

function postDataEvent(e) {
    e.preventDefault();

    let titleEvent = document.getElementById('event-title').value;
    let speakerName = document.getElementById('speaker-name').value;
    let speakerEmail = document.getElementById('speaker-email').value;
    let event_location = document.getElementById('event-place').value;
    let start_time = document.getElementById('ST-input').value;
    let end_time = document.getElementById('ET-input').value;
    let inp_image = document.getElementById('preview-image').value;

    fetch('http://localhost:3000/events', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            EventTitle: titleEvent, SpeakerName: speakerName,
            SpeakerEmail: speakerEmail, StartTime: start_time, EndTime: end_time, 
            EventLocation: event_location, ImageSpeaker: inp_image
        })
    })
        .then((res) => res.json())
        .then((data) => console.log(data))
}

