window.onload = showTableSpeakers;

function showTableSpeakers(e) {
    e.preventDefault();

    fetch('http://localhost:3000/speakers', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
        .then((res) => res.json())
        .then((data) => {   
            let tableSpeakers = `
            <tr>
                <th><i class="fas fa-users"></i></th>
                <th>Name Speaker</th>
                <th>Role Speaker</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            `;
            data.forEach((speaker) => {
                const {ImageSpeaker, SpeakerName, id, SpeakerRole } = speaker;
                const nameImg  = ImageSpeaker.split('\\')
                const urlImg = `/images/team-member/${nameImg[nameImg.length - 1]}`;
                
                tableSpeakers +=
                    `
                    <tr class="speaker-info">
                        <td><img src="${urlImg}"></td>
                        <td>${SpeakerName}</td>
                        <td>${SpeakerRole}</td>
                        <td> <a href="#" class="fas fa-edit" onclick="UpdateDataSpeaker(${id})" ></a></td> 
                        <td> <a href="#" class="fas fa-trash-alt" onclick="DeleteDataSpeaker(${id})"></a></td> 
                    </tr>
                    
                    `
                document.getElementById('table-speakers').innerHTML = tableSpeakers;
            });
        });
}

function DeleteDataSpeaker(id) {
  fetch('http://localhost:3000/speakers/' + id , {
    method: 'DELETE',
  })
    .then(res => res.json()) 
    .then(res => console.log(res))
}


function UpdateDataSpeaker(id) {
    let inpUpdateImg = document.getElementById('preview-image').value;
    let inpUpdateNameSpeaker = document.getElementById('speaker-name').value;
    let inpUpdateRoleSpeaker = document.getElementById('speaker-role').value;
    
    fetch('http://localhost:3000/speakers/' + id, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            ImageSpeaker: inpUpdateImg,
            SpeakerName: inpUpdateNameSpeaker,
            SpeakerRole: inpUpdateRoleSpeaker
        })
    })
        .then((res) => res.json())
        .then((data) => console.log(data))

}

document.getElementById('btn-saveChange').addEventListener('click', UpdateDataSpeaker);

