(function () {
  'use strict';
  var publicationFilters = document.querySelector('.publication-filters');
  if (publicationFilters) {
    var publications = Array.prototype.slice.call(document.querySelectorAll('[data-research-topics]'));
    var filterButtons = Array.prototype.slice.call(publicationFilters.querySelectorAll('[data-publication-filter]'));
    var publicationGroups = Array.prototype.slice.call(document.querySelectorAll('[data-publication-group]'));
    var filterStatus = publicationFilters.querySelector('.publication-filter-status');

    function filterPublications(topic) {
      var selectedButton = filterButtons.find(function (control) {
        return control.dataset.publicationFilter === topic;
      });
      if (!selectedButton) return;

      var visibleCount = 0;
      publications.forEach(function (publication) {
        var matches = topic === 'all' || publication.dataset.researchTopics.split(/\s+/).indexOf(topic) !== -1;
        publication.hidden = !matches;
        if (matches) visibleCount += 1;
      });
      publicationGroups.forEach(function (heading) {
        heading.hidden = !publications.some(function (publication) {
          return !publication.hidden && publication.dataset.publicationCategory === heading.dataset.publicationGroup;
        });
      });
      filterButtons.forEach(function (control) {
        control.setAttribute('aria-pressed', String(control === selectedButton));
      });
      if (filterStatus) {
        filterStatus.textContent = topic === 'all'
          ? 'Showing all ' + visibleCount + ' papers'
          : selectedButton.textContent.trim() + ': ' + visibleCount + (visibleCount === 1 ? ' paper' : ' papers');
      }
    }

    filterButtons.forEach(function (control) {
      control.addEventListener('click', function () {
        filterPublications(control.dataset.publicationFilter);
      });
    });
    document.querySelectorAll('[data-research-filter]').forEach(function (link) {
      link.addEventListener('click', function () {
        filterPublications(link.dataset.researchFilter);
      });
    });
    publicationFilters.hidden = false;
    filterPublications('all');
  }
  var pronunciationButton = document.querySelector('.pronunciation-toggle');
  var pronunciationNote = document.getElementById('pronunciation-note');
  if (pronunciationButton && pronunciationNote) {
    function setPronunciation(open) {
      pronunciationNote.hidden = !open;
      pronunciationButton.setAttribute('aria-expanded', String(open));
      pronunciationButton.setAttribute('aria-label', (open ? 'Hide' : 'Show') + ' name pronunciation');
    }
    pronunciationButton.addEventListener('click', function () {
      setPronunciation(pronunciationNote.hidden);
    });
    pronunciationButton.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') setPronunciation(false);
    });
  }
  var button = document.querySelector('.theme-toggle');
  if (!button) return;
  function showTheme(theme) {
    document.documentElement.dataset.theme = theme;
    var label = theme === 'dark' ? 'Switch to day mode' : 'Switch to night mode';
    button.setAttribute('aria-label', label);
    button.setAttribute('title', label);
  }
  showTheme(document.documentElement.dataset.theme || 'light');
  button.hidden = false;
  button.addEventListener('click', function () {
    var theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    showTheme(theme);
    try { localStorage.setItem('doudou-theme', theme); } catch (e) {}
  });
}());
