---
layout: default
---

# IgnacioGaldames.github.io

Este es el sitio web oficial de I.A. Galdames, un escritor de ciencia ficción. El sitio está construido usando Jekyll y se aloja en GitHub Pages.

## Tabla de Contenidos

- [Instalación](#instalación)
- [Uso](#uso)
- [Creación de Nuevas Publicaciones](#creación-de-nuevas-publicaciones)
- [Añadir Enlaces de Redes Sociales](#añadir-enlaces-de-redes-sociales)
- [Personalización](#personalización)
- [Contribuir](#contribuir)
- [Licencia](#licencia)

## Instalación

Para ejecutar este sitio localmente, necesitas tener Ruby y Jekyll instalados.

### Requisitos Previos

- [Ruby](https://www.ruby-lang.org/en/documentation/installation/)
- [Jekyll](https://jekyllrb.com/docs/installation/)

### Clonar el Repositorio

```bash
git clone https://github.com/IgnacioGaldames/IgnacioGaldames.github.io.git
cd IgnacioGaldames.github.io
Instalar Dependencias
bash
Copiar código
bundle install
Servir el Sitio Localmente
bash
Copiar código
bundle exec jekyll serve
Abre tu navegador y navega a http://localhost:4000 para ver el sitio.
```
## Uso
Creación de Nuevas Publicaciones
Navega al directorio _posts.
Crea un nuevo archivo Markdown con la siguiente convención de nombres: YYYY-MM-DD-titulo.md.
Añade el siguiente front matter al inicio del archivo:
markdown
Copiar código
---
layout: post
title: "Tu Título de Publicación"
date: YYYY-MM-DD HH:MM:SS +/-TTTT
categories: [categoria1, categoria2]
---
Escribe el contenido de tu publicación debajo del front matter.
Añadir Enlaces de Redes Sociales
Para añadir o actualizar enlaces de redes sociales, edita el archivo _config.yml:

### yaml
Copiar código
social:
  - name: twitter
    url: "https://twitter.com/IAGaldames"
  - name: instagram
    url: "https://www.instagram.com/iagaldames"
  - name: linkedin
    url: "https://www.linkedin.com/in/ignaciogaldames/"
  - name: github
    url: "https://github.com/ignaciogaldames"
  - name: goodreads
    url: "https://www.goodreads.com/author/show/16542460.I_A_Galdames"
Personalización
Cambiar el Footer
El footer está ubicado en _includes/footer.html. Para actualizar el footer con enlaces de redes sociales dinámicamente:

### html
Copiar código

```
<footer class="footer mt-auto py-3 bg-dark text-white">
  <div class="container text-center">
    <div class="mb-3">
      {% for network in site.social %}
        <a href="{{ network.url }}" class="text-white mx-2" target="_blank">
          {% if network.name == 'twitter' %}
            <i class="fab fa-twitter"></i> Twitter
          {% elsif network.name == 'instagram' %}
            <i class="fab fa-instagram"></i> Instagram
          {% elsif network.name == 'linkedin' %}
            <i class="fab fa-linkedin"></i> LinkedIn
          {% elsif network.name == 'github' %}
            <i class="fab fa-github"></i> GitHub
          {% elsif network.name == 'goodreads' %}
            <i class="fab fa-goodreads"></i> Goodreads
          {% endif %}
        </a>
      {% endfor %}
    </div>
    <p>&copy; {{ site.time | date: '%Y' }} I.A. Galdames. Todos los derechos reservados.</p>
  </div>
</footer>
```

### Estilos Personalizados
El CSS personalizado se puede añadir a assets/css/main.css. Por ejemplo, para asegurar que el footer se mantenga en la parte inferior:

### css
Copiar código

```
html, body {
  height: 100%;
}

body {
  display: flex;
  flex-direction: column;
}

.footer {
  margin-top: auto;
}
```
### Contribuir
Haz un fork del repositorio.
Crea una nueva rama (git checkout -b feature-branch).
Realiza tus cambios y haz commit de ellos (git commit -m 'Añadir alguna característica').
Haz push a la rama (git push origin feature-branch).
Abre un Pull Request.
### Licencia
Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.