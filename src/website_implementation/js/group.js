

const fakedata = [
    {
        "id": 19,
        "name": "Brisbane Yoga Enthusiasts Group",
        "location": "Morningside Forest",
        "organiser": "Morningside Community Wellness Collective",
        "event_type": "Group Activity",
        "description": "A group for yoga enthusiasts in Brisbane who love practicing yoga in the serene environment of Morningside Forest. Join us for a peaceful and rejuvenating experience in nature.",
        "date_time": "2023-10-21T17:30:00+10:00",
        "photo": "https://images.pexels.com/photos/2035066/pexels-photo-2035066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "website_code": "Pete123"
    },
    {
        "id": 38,
        "name": "Brissy Meditation Group",
        "location": "St Lucia lakes",
        "organiser": "Morningside Community Wellness Collective",
        "event_type": "Group Activity",
        "description": "A group for meditation enthusiasts in Brisbane who enjoy practicing meditation in the tranquil setting of St Lucia lakes. Join us for a calming and mindful experience in nature.",
        "date_time": "2023-10-21T17:30:00+10:00",
        "photo": "https://images.pexels.com/photos/2597205/pexels-photo-2597205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "website_code": "Pete123"
    },
    {
        "id": 502,
        "name": "We Love Coding",
        "location": "Morningside Forest",
        "organiser": "Morningside Community Wellness Collective",
        "event_type": "Group Activity",
        "description": "A group for coding enthusiasts in Brisbane who are passionate about programming and love to explore different coding languages and technologies. Join us to enhance your coding skills and collaborate with fellow developers.",
        "date_time": "2023-10-21T17:30:00+10:00",
        "photo": "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "website_code": "Pete123"
    },
    {
        "id": 479,
        "name": "Basketball Friendly Meetup Group",
        "location": "Morningside Forest",
        "organiser": "Morningside Community Wellness Collective",
        "event_type": "Group Activity",
        "description": "A group for basketball enthusiasts in Brisbane who love playing friendly basketball games in the beautiful surroundings of Morningside Forest. Join us for some fun, exercise, and friendly competition.",
        "date_time": "2023-10-21T17:30:00+10:00",
        "photo": "https://images.pexels.com/photos/69773/uss-nimitz-basketball-silhouettes-sea-69773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "website_code": "Pete123"
    }
];


fakedata.forEach(event => {
    photo = event.photo
    if (event.photo == null) {
        event.photo = "https://deco7140sem22023.s3.amazonaws.com/event_photos/orca_YQtzNXS.jpg"
    }

    const markup = `
               <div class="card" >
                   <img src="${event.photo}" alt="${event.name}">
                   <div class="container" >
                       <h4><b>${event.name}</b></h4>
                       <p>${event.description}</p>
                       
                   </div>
                   
               </div>
           `;
    const cardContainer = document.querySelector('.card-container');
    cardContainer.insertAdjacentHTML('beforeend', markup);



});


function goToJoin() {

    window.location.href = 'join.html';
}
function goToDetail() {

    window.location.href = 'event_detail.html';
}

