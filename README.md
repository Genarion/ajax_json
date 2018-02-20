# Comunicación mediante AJAX en formato JSON
> Página presentando mediante javascript nativo y jquery los siguientes frameworks: Angular, React, Ember, Backbone, Mercury, Vue, Aurelia.
## Api utilizada
> https://putsreq.com/OlWWm3KmYPTGZhiJHRMo se le pueda pasar el parámetro framework para obtener solo la información concreta.
```javascript
  var data = {
    "frameworks":[
		{
			"nombre":"angular",
			"url":"https://angularjs.org/",
			"imagen":"https://angularjs.org/img/AngularJS-large.png",
			"descripcion":" es un framework de JavaScript de código abierto, mantenido por Google, que se utiliza para crear y mantener aplicaciones web de una sola página. Su objetivo es aumentar las aplicaciones basadas en navegador con capacidad de Modelo Vista Controlador (MVC), en un esfuerzo para hacer que el desarrollo y las pruebas sean más fáciles."
		},
		{
			"nombre":"react",
			"url":"https://reactjs.org/",
			"imagen":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png",
			"descripcion":"es una biblioteca Javascript de código abierto para crear interfaces de usuario con el objetivo de animar al desarrollo de aplicaciones en una sola página. Es mantenido por Facebook, Instagram y una comunidad de desarrolladores independientes y compañías"
		},
		{
			"nombre":"ember",
			"url":"https://emberjs.com/",
			"imagen":"https://emberjs.com/images/tomster-twitter-card.png",
			"descripcion":"EmberJS es un framework bajo el patrón MVC (Modelo-Vista-Controlador) para JavaScript. Con él se pueden desarrollar aplicaciones por el lado del cliente, apoyado en varias bibliotecas JavaScript como jQuery, una librería muy conocida en el mundo del desarrollo, o Handlebars, una alternativa a jQuery que crea plantillas HTML con datos en objetos en formato JSON."
		},
		{
			"nombre":"backbone",
			"url":"http://backbonejs.org/",
			"imagen":"http://backbonejs.org/docs/images/backbone.png",
			"descripcion":" es una herramienta de desarrollo/API para el lenguaje de programación Javascript con un interfaz RESTful por JSON , basada en el paradigma de diseño de aplicaciones Modelo Vista Controlador. Está diseñada para desarrollar aplicaciones de una única página2​ y para mantener las diferentes partes de las aplicaciones web"
		},
		{
			"nombre":"mercury",
			"url":"http://raynos.github.io/mercury/",
			"imagen":"http://www.ifourtechnolab.com/pics/GlossyMercuryLogo.png",
			"descripcion":"Es un framework de Javascript que pretende ser modular, lo que permite combinarlo junto con otros marcos, escrito por Raynos que ha creado varias otras bibliotecas útiles y que parece haber despertado un gran interés por parte de la comunidad"
		},
		{
			"nombre":"vue",
			"url":"https://vuejs.org/",
			"imagen":"https://vuejs.org/images/logo.png",
			"descripcion":"s es una librería javascript para construir interfaces web interactivas, la documentación dice que no es un framework por que solo se especializa en la capa de vista (VM - ViewModel)."
		},
		{
			"nombre":"aurelia",
			"url":"http://aurelia.io/home",
			"imagen":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAOzAAAAJDNiNmIzY2JmLTdmNTQtNDU3Mi05MzY2LTZmODg4MTNkNTkxOQ.png",
			"descripcion":"está construido a través de una serie de bibliotecas que colaboran unas con otras. Tomadas en conjunto, forman un marco potente y robusto para la construcción aplicaciones monopágina"
		}
	]
};

if(request.params.framework) {
    alt = data.frameworks.filter( function(data){ return new RegExp(request.params.framework).test(data.nombre) && request.params.framework.length > 0; } );
    msg = alt[0];
    if (alt.length === 0){
        response.status  = 204;
    }
}else{
    msg = { 'frameworks': data.frameworks.map( function(x){ return x.nombre }) };
}
response.body = msg;
```
