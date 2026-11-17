---
layout: profile
permalink: /
title: Doudou Yu
description: Doudou Yu is a postdoctoral fellow in the Department of Genome Sciences at the University of Washington, studying the biology of aging using multiomics data.
redirect_from:
  - /about/
  - /about.html
---

<section class="hero" id="about" aria-labelledby="intro-title">
  <div class="identity">
    <h1 id="intro-title">Doudou Yu</h1>
    <button class="pronunciation-toggle" type="button" aria-label="Show name pronunciation" aria-controls="pronunciation-note" aria-expanded="false" title="How to pronounce Doudou">
      <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5 6 9H3v6h3l5 4V5Z"/><path d="M15 8a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14"/></svg>
    </button>
  </div>
  <p class="pronunciation" id="pronunciation-note" hidden>Pronounced <span>“dough-dough”</span> — like pizza dough :D<br>or “dodo,” like the bird (aww)</p>
  <p class="role"><strong>Postdoctoral fellow, Department of Genome Sciences, University of Washington</strong></p>
  <div class="bio">
    <p>I study the biology of aging from multi-omic data, working with Drs. <a href="https://scholar.google.com/citations?user=plt2_DsAAAAJ&amp;hl=en">Bill Noble</a> and <a href="https://scholar.google.com/citations?user=icweOB0AAAAJ&amp;hl=en">Mike MacCoss</a>.</p>
    <p>Before my postdoctoral work, I did my PhD in <a href="https://scholar.google.com/citations?user=tBgoNfUAAAAJ&amp;hl=en">Dr. Ashley Webb’s lab</a> — first at Brown University and later at the Buck Institute for Research on Aging. I earned my bachelor’s degree in biology through the <a href="https://en.zhiyuan.sjtu.edu.cn/">Zhiyuan Honors Program at Shanghai Jiao Tong University</a> and my master’s degree in data science through <a href="https://graduateschool.brown.edu/academics-research/distinctive-opportunities/open-graduate-education">Brown’s Open Graduate Education program</a>.</p>
    <p>My research is supported by the <a href="https://www.nia.nih.gov/research/training/f99-k00-predoctoral-postdoctoral-transition-award">NIH/NIA F99/K00 fellowship</a>, for which I am very grateful.</p>
  </div>

</section>

<section class="section research-section" id="research" aria-labelledby="research-title">
  <div class="section-heading">
    <h2 id="research-title">Research</h2>
  </div>
  <div class="research-topics">
    <a href="#publications" data-research-filter="aging-brain"><h3>The aging brain</h3><p>I study the hypothalamus, a brain–body interface involved in homeostasis and energy metabolism, and its role in aging and Alzheimer’s disease using single-cell multiomics and MRI volumetric data.</p></a>
    <a href="#publications" data-research-filter="computational-biology"><h3>Computational biology</h3><p>Interpretable machine learning models and pipelines to predict age and disease states and discover new potential mechanisms for aging.</p></a>
    <a href="#publications" data-research-filter="perturbations"><h3>Perturbations</h3><p>I am interested in perturbations that might recover youthful states, including in vivo epigenetic reprogramming to restore young profiles in aged tissues.</p></a>
  </div>

</section>

<section class="section publications-section" id="publications" aria-labelledby="publications-title">
  <div class="section-heading section-heading-inline">
    <h2 id="publications-title">Selected publications</h2>
    <a class="text-link" href="{{ site.author.googlescholar }}">Full list on Google Scholar <span aria-hidden="true">↗</span></a>
  </div>
  {% include publication-legend.html %}
  {% include publication-filters.html %}
  <h3 class="publication-group" data-publication-group="preprint">Preprints &amp; forthcoming</h3>
  {% assign preprints = site.data.selected_publications | where: 'category', 'preprint' %}
  {% for work in preprints %}{% include publication-entry.html work=work %}{% endfor %}
  <h3 class="publication-group" data-publication-group="publication">Journal articles</h3>
  {% assign papers = site.data.selected_publications | where: 'category', 'publication' %}
  {% for work in papers %}{% include publication-entry.html work=work %}{% endfor %}
</section>

<section class="section contact-section" id="contact" aria-labelledby="contact-title">
  <div><h2 id="contact-title">Contact</h2><p>Feel free to reach out and chat about science, hiking, running, coffee, pets, and more!</p></div>
  <div class="contact-links">
    <a class="contact-email" href="mailto:{{ site.author.email }}">Email <span aria-hidden="true">↗</span></a>
    <nav aria-label="Academic and social profiles">
      <a href="{{ site.author.googlescholar }}">Google Scholar</a>
      <a href="https://github.com/{{ site.author.github }}">GitHub</a>
      <a href="https://www.linkedin.com/in/doudou-yu-b8a034111/">LinkedIn</a>
      <a href="https://bsky.app/profile/{{ site.author.bluesky }}">Bluesky</a>
      <a href="https://twitter.com/{{ site.author.twitter }}">Twitter</a>
    </nav>
  </div>
</section>
