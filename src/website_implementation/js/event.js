


  
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
           data.forEach(event => {
               const markup = `<li>${event.name}</li>`;
               document.querySelector('ul').insertAdjacentHTML('beforeend', markup);
               
           });
           console.log(data)
       });