'use strict';

var node = document.createElement('style');
//node.innerHTML = '.siteLinks ul li:first-child,.siteLinks .languageSwitcher{display:none;}'; // hide redundant links in hamburger menu
node.innerHTML += '.content {display:none;}'; // hide wikipedia panel
node.innerHTML += '.relatedLibrarian.content,.relatedTopics.content,.researchGuides.content {display:block;}' // show relevant panels

// To add more CSS, use lines like this:
// node.innerHTML += '.selector { font-size: large }';

document.body.appendChild(node);

// Fix off-campus login link to redirect to current search results after login.
// We're going to depend on Summon's dependence on jQuery here.
var fixBannerLink = function () {
  // This is a terrible hack, but if FastClick exists, the Summon AngularJS app
  // is loaded.
  if (FastClick) {
    $('.vpnBanner.customAuthBanner div a')
      .attr('href', 'https://ucsf.idm.oclc.org/login?qurl=' + encodeURIComponent(location.href));
  } else {
    // Also a terrible hack: poll again in 100ms
    setTimeout(fixBannerLink, 100);
  }
}

$().ready(fixBannerLink);
