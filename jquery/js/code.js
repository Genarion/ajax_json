{
  $menuNode = $('#menu');
  $contentNode = $('#content');

  const API = 'https://putsreq.com/OlWWm3KmYPTGZhiJHRMo';

  let getFrameworks = function(param){
    let $request = $.getJSON( param ? API + '?framework=' + param : API)
    .fail(function( data ){
      $contentNode.html('<p class="error">Hubo un problema en la petición.</p>');
    })
    .done(function( data ) {
      if( $request.status === 204 ){
        $contentNode.html('<p class="error">Hubo un problema en la petición.</p>');
      }else if( !param ){
        $.each( data.frameworks, function( i, item ) {
          $menuNode.append( '<p>' + item + '</p>');
        });
        $( '#menu > p' ).on('click', function(){ getFrameworks( $( this ).text() ); } );
      }else if( param ){
        $.each( data, function( i, item ) {
          $contentNode.html( '<h3>' + data.nombre + '</h3>'+
                              '<img src="' + data.imagen + '" alt="">'+
                              '<p>' + data.descripcion + '</p>'+
                              '<a href="' + data.url + '"></a>');
        });
      }

    });
  };

  getFrameworks();
  getFrameworks('angular');
}
