---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults

title: Experiencia Laboral
trabajos:
    - nombre_trabajo: Agencia How
      fecha_trabajo: Marzo 2017 | Julio 2017
      cargo_trabajo: Desarrollador Web
      desc_trabajo: Encargado de todos los sitios de la Agencia, tanto en HTML, como en PHP y Wordpress. Desarrollé un sistema de diseño y prototipado, basado en Bootstrap, SASS y PHP para usar elementos reutilizables del código y crear sitios web en menor tiempo. También edité y creé temas en Wordpress.

Tuve Clientes cómo Arquitectura de Chile, Universal Music Chile, Anfiteatro Bellas Artes y Suksa.
      clientes: 
    - nombre_trabajo: Lovit - Nauta
      fecha_trabajo: Julio 2016 | Marzo 2017
      cargo_trabajo: Desarrollador Web
      desc_trabajo: Desarrollo y mantención de sitios web en kohana php, mails en html y landings responsive. Desarrollo de Sitios con Bootstrap, JQuery UI, Jquery Mobile. Desarrollo de landings con PHP. Mantención de sitios web con Wordpress. Creación de sistema de registro con PHP y MYSQL. Desarrollo de banners HTML5.
      clientes: Crush, Coors
    - nombre_trabajo: Cybercenter
      fecha_trabajo: Marzo 2016
      cargo_trabajo: Diseñador Web
      desc_trabajo: Desarrollo y mantención de sitios web en kohana php, mails en html y landings responsive. Desarrollo de Sitios con Bootstrap, JQuery UI, Jquery Mobile.
      clientes: Municipalidad de Las Condes, Municipalidad de Vitacura, Justice
---
<div class="p-4">
 {% for trabajo in page.trabajos %}
    <article class="my-4">
        <h4>{{ trabajo.nombre_trabajo }}</h4>
        <h3><i>{{ trabajo.cargo_trabajo }}</i></h3>
        <p>{{ trabajo.fecha_trabajo }}</p>
        <p>{{ trabajo.desc_trabajo }}</p>
        <p><strong>Clientes:</strong> {{ trabajo.clientes}}</p>
    </article>
    <hr>
 {% endfor %}
 </div>