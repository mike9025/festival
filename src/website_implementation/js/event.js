



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
                event.photo = "https://deco7140sem22023.s3.amazonaws.com/event_photos/orca_YQtzNXS.jpg"
            }

            const markup = `
               <div class="card" >
                   <img src="${event.photo}" alt="${event.name}">
                   <div class="container" onclick="goToDetail()">
                       <h4><b>${event.name}</b></h4>
                       <p>${event.description}</p>
                       
                   </div>
                   <button class="join-btn" onclick="goToJoin()" >Join</button>
               </div>
           `;
            const cardContainer = document.querySelector('.card-container');
            cardContainer.insertAdjacentHTML('beforeend', markup);

          
            
        });
    });
    
    function goToJoin() {
       
        window.location.href = 'join.html';
    }
    function goToDetail() {
        
        window.location.href = 'event_detail.html';
    }