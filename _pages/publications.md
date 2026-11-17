---
layout: profile
title: Publications
permalink: /publications/
---
<section class="section standalone-section" aria-labelledby="publications-title">
  <h1 id="publications-title">Selected publications</h1>
  <p>For a full publication list, visit <a href="{{ site.author.googlescholar }}">Google Scholar</a>.</p>
  {% include publication-legend.html %}
  {% include publication-filters.html %}
  <h2 class="publication-group" data-publication-group="preprint">Preprints &amp; forthcoming</h2>
  {% assign preprints = site.data.selected_publications | where: 'category', 'preprint' %}
  {% for work in preprints %}{% include publication-entry.html work=work heading_level=3 %}{% endfor %}
  <h2 class="publication-group" data-publication-group="publication">Journal articles</h2>
  {% assign papers = site.data.selected_publications | where: 'category', 'publication' %}
  {% for work in papers %}{% include publication-entry.html work=work heading_level=3 %}{% endfor %}
</section>
