document.getElementById('btn-append-speaker').addEventListener('click', postDataSpeaker);

function postDataSpeaker(e) {
    e.preventDefault();

    let inp_image = document.getElementById('preview-image').value;
    let speakerName = document.getElementById('speaker-name').value;
    let speakerRole = document.getElementById('speaker-role').value;

    fetch('http://localhost:3000/speakers', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            ImageSpeaker: inp_image,
            SpeakerName: speakerName,
            SpeakerRole: speakerRole
        })
    })
        .then((res) => res.json())
        .then((data) => console.log(data))
}