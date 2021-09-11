
const generos=()=>{
    const api2=`https://api.themoviedb.org/3/genre/movie/list?api_key=9b2a8312890d22034abbef2a8b6caac7&language=es-MX`
  
     fetch(api2).then((response)=>{
      if(response.status!==200){
  console.log(`Hay un problemita ${response.status}`);
  return;
      }
      
      response.json().then((data)=>{
        imprimirHTML(data.genres);
      })
    })
  }
  function imprimirHTML(genero){
    let listado='';
    genero.forEach(gener=>{
        if(gener.name==="Comedia"){
            listado+=`<li>${gener.name}<ul id="pelis"></ul></li>`
            
        }else{listado+=`<li>${gener.name}</li>`}
        
    });
   
    const contenedor2=document.querySelector('#app');
    contenedor2.innerHTML=listado;
  }
  generos();

  const ObtenerPeliculas = new Promise((resolve, reject) => {
    const api = `https://api.themoviedb.org/3/movie/upcoming?api_key=9b2a8312890d22034abbef2a8b6caac7&language=es-MXhttps://api.themoviedb.org/3/movie/upcoming?api_key=9b2a8312890d22034abbef2a8b6caac7&language=es-MX`;
    const xhr = new XMLHttpRequest();
  
    xhr.open("GET", api, true);
  
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText).results);
      } else {
        reject(Error(xhr.statusText).header);
      }
    };
  
    xhr.onerror = (error) => reject(error);
  
    xhr.send();
  });
  
  ObtenerPeliculas.then(
    (pelicula) => html(pelicula),
    (error) => console.error(new Error("Hubo un clavo" + error))
  );
   function html(movies){
      let obhtml='';
      movies.forEach(element => {
        element.genre_ids.forEach(element2=>{
          if(element2===35){
            obhtml+=`<li>${element.title}</li>`
          }
        });
         
      });
      console.log(obhtml);
      const contenedor3=document.querySelector('#pelis');
      contenedor3.innerHTML=`<ul>${obhtml}</ul>`;
    }
