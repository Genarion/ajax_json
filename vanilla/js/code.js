{

  ( function() {
    let menuNode = document.getElementById('menu');
    let contentNode = document.getElementById('content');

    const API = 'https://putsreq.com/OlWWm3KmYPTGZhiJHRMo';

    function showContent(param){

      if( xhr.readyState === XMLHttpRequest.DONE ) {
        if( xhr.status === 200 && !param ){

          JSON.parse( xhr.responseText ).frameworks.forEach( function(value) {
            let paragraphNode = document.createElement("p");
            let textNode = document.createTextNode(value);
            paragraphNode.appendChild(textNode);
            paragraphNode.addEventListener('click', getRequest.bind(this, value));
            menuNode.appendChild(paragraphNode);
          });

        }else if( xhr.status === 200 && param ){
          let data = JSON.parse(xhr.responseText);
          contentNode.innerHTML = '<h3>' + data.nombre + '</h3>'+
                                  '<img src="' + data.imagen + '" alt="">'+
                                  '<p>' + data.descripcion + '</p>'+
                                  '<a href="' + data.url + '"></a>';
        }else{
          contentNode.innerHTML = '<p class="error">Hubo un error en la petición.</p>';
        }
      }

    }

    function getRequest(param){
      xhr = new XMLHttpRequest();

      xhr.onreadystatechange = showContent.bind(this, param);
      xhr.open('GET', param ? API + '?framework=' + param : API, true);
      xhr.send();
    }

    window.addEventListener('load', function(){
      getRequest();

      setTimeout(function () {
        getRequest('angular');
      }, 600);

    });

  })();
}
