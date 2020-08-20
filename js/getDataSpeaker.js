
function showInformationSpeakers() {
   
    fetch('http://localhost:3000/speakers', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then((res) => res.json())
        .then((data) => {
            
            let output = '';
            data.forEach((speaker) => {
                const { ImageSpeaker,SpeakerName, SpeakerRole } = speaker;
                const nameImg  = ImageSpeaker.split('\\')
                const  urlImg = `images/team-member/${nameImg[nameImg.length - 1]}`;
                output +=
                `
                <div class="member-item">
                    <img src="${urlImg}" alt="member">
                    <div class="mi-social">
                        <div class="mi-social-inner">
                            <a href="https://www.facebook.com/" class="fab fa-facebook-f"></a>
                            <a href="https://www.instagram.com/?hl=vi" class="fab fa-instagram"></a>
                            <a href="https://twitter.com/?lang=vi" class="fab fa-twitter"></a>
                            <a href="https://www.linkedin.com/" class="fab fa-linkedin-in"></a>
                        </div>
                    </div>
                    <div class="mi-text">
                        <h5>${SpeakerName}</h5>
                        <span>${SpeakerRole}</span>
                    </div>
                </div>
                `;
                document.getElementById('showinformember').innerHTML = output;
            });
        });
}
