window.onload = showTableEvents;

function showTableEvents(e) {
    e.preventDefault();

    fetch('http://localhost:3000/events', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
        .then((res) => res.json())
        .then((data) => {   
            let tableEvents = `
            <tr>
                <th><i class="fas fa-image"></i></th>
                <th>Name Event</th>
                <th>Name Speaker</th>
                <th>Speaker Email</th>
                <th>Location</th>
                <th>Start</th>
                <th>End</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            `;
            data.forEach((event) => {
                const {EventTitle, SpeakerName, SpeakerEmail, id, StartTime, EndTime, EventLocation, ImageSpeaker } = event;
                const nameImg  = ImageSpeaker.split('\\')
                const urlImg = `/images/schedule/${nameImg[nameImg.length - 1]}`;
                
                tableEvents +=
                    `
                    <tr class="events-info">
                        <td><img src="${urlImg}"></td>
                        <td>${EventTitle}</td>
                        <td>${SpeakerName}</td>
                        <td>${SpeakerEmail}</td>
                        <td>${EventLocation}</td>
                        <td>${StartTime}</td>
                        <td>${EndTime}</td>
                        <td> <a href="#" class="fas fa-edit" onclick="UpdateDataEvent(${id})" ></a></td> 
                        <td> <a href="#" class="fas fa-trash-alt" onclick="DeleteDataEvent(${id})"></a></td> 
                    </tr>
                    `
                document.getElementById('table-events').innerHTML = tableEvents;
            });
        });
}

function DeleteDataEvent(id) {
  fetch('http://localhost:3000/events/' + id , {
    method: 'DELETE',
  })
    .then(res => res.json()) 
    .then(res => console.log(res))
}

// function UpdateDataEvent(id) {
//     fetch('http://localhost:3000/events/' + id , {
//     method: 'PUT',
//   })
//     .then(res => res.json()) 
//     .then(res => console.log(res))
// }
function UpdateDataEvent(id) {
    let inpUpdateImg = document.getElementById('preview-image').value;
    let inpUpdateNameEvent = document.getElementById('event-title').value;
    let inpUpdateNameSpeaker = document.getElementById('speaker-name').value;
    let inpUpdateEmailSpeaker = document.getElementById('speaker-email').value;
    let inpUpdateEventLocation = document.getElementById('event-place').value;
    let inpUpdateStartTime = document.getElementById('ST-input').value;
    let inpUpdateNameEndTime = document.getElementById('ET-input').value;

    
    fetch('http://localhost:3000/events/' + id, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            EventTitle: inpUpdateNameEvent,
            SpeakerName: inpUpdateNameSpeaker,
            SpeakerEmail: inpUpdateEmailSpeaker,
            StartTime: inpUpdateStartTime,
            EndTime: inpUpdateNameEndTime,
            EventLocation: inpUpdateEventLocation,
            ImageSpeaker:inpUpdateImg
        })
    })
        .then((res) => res.json())
        .then((data) => console.log(data))

}
