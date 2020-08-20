
function showEvents() {
    
    fetch('http://localhost:3000/events', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then((res) => res.json())
        .then((data) => {
            
            let output = '<h2></h2>';
            data.forEach((event) => {
                const {EventTitle, SpeakerName, SpeakerEmail, id, StartTime, EndTime, EventLocation, ImageSpeaker } = event;
                const nameImg = ImageSpeaker.split('\\')
                const urlImg = `images/schedule/${nameImg[nameImg.length - 1]}`;
                output +=
                `<div>
                    <div class="st-content">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-lg-3 col-12">
                                            <div class="sc-pic">
                                                <img src="${urlImg}" alt="image_speaker">
                                            </div>
                                        </div>
                                        <div class="col-lg-5 col-md-6">
                                            <div class="sc-text">
                                                <h4 id="event-name-display">${EventTitle}</h4>
                                                <ul>
                                                    <li><i class="fa fa-user"></i>${SpeakerName}</li>
                                                    <li><i class="fa fa-envelope"></i> <a href="#"> ${SpeakerEmail} </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-6">
                                            <ul class="sc-widget">
                                                <li><i class="far fa-clock"></i>${StartTime} - ${EndTime}</li>
                                                <li><i class="fa fa-map-marker"></i>${EventLocation}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                 </div>`;
                document.getElementById('output').innerHTML = output;
            });
        });
}

