



const my_website_code = 'Pete123'
const queryParams = {
    website_code: my_website_code,
}
const baseURL = "https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/community_events/";
const queryString = new URLSearchParams(queryParams).toString();
const urlWithParams = baseURL + "?" + queryString;
const requestOptions = {
    method: 'GET',
    redirect: 'follow'
};
fetch(urlWithParams, requestOptions)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        data.forEach(event => {
            photo = event.photo
            if (event.photo == null) {
                photo = "https://deco7140sem22023.s3.amazonaws.com/event_photos/orca_YQtzNXS.jpg"
            }

            const markup = `
               <div class="card" >
                   <img src="${photo}" alt="${event.name}">
                   <div class="container" onclick="goToDetail()">
                       <h4><b>${event.name}</b></h4>
                       <p>${event.description}</p>
                       
                   </div>
                   <button class="join-btn" onclick="goToJoin()" >Join</button>
               </div>
           `;
            const cardContainer = document.querySelector('.card-container');
            cardContainer.insertAdjacentHTML('beforeend', markup);

            sessionStorage.setItem('event_name', event.name);
           
            sessionStorage.setItem('event_photo', photo);
            sessionStorage.setItem('event_description', event.description);
            sessionStorage.setItem('event_location', event.location);
            sessionStorage.setItem('event_organizer', event.organizer);
            sessionStorage.setItem('event_type', event.event_type);

        });
    });

function goToJoin() {

    window.location.href = 'join.html';
}
function goToDetail() {

    window.location.href = 'event_detail.html';
}