const ObtenerProgramas = new Promise((resolve, reject) => {
    const api = `https://api.themoviedb.org/3/tv/popular?api_key=9b2a8312890d22034abbef2a8b6caac7&language=en-US&page=1`;
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
  
  ObtenerProgramas.then(
    (programa) => html(programa),
    (error) => console.error(new Error("Hubo un clavo" + error))
  );
   function html(progra){
      let obhtml='';
      progra.forEach(element => {
        obhtml+=`<img src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2${element.poster_path}"></img><br>Titulo: ${element.title}<br>Titulo Original: ${element.original_title}<br> Fecha de Lanzamiento: ${element.release_date}<br>`
         
      });
      const contenedor=document.querySelector("#app");
      contenedor.innerHTML=obhtml;
      console.log(obhtml);
  }
  