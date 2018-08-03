---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults

title: Microcuentos
---

<div class="card-deck">
    {% for post in site.microcuentos %}
        {% include archivo.html %}
    {% endfor %}
</div>
