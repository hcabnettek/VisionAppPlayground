define(['vision/vision'], function(vision){ 
	vision.run(['$templateCache', function($templateCache) {
	  'use strict';

  $templateCache.put('/templates/projects.detail.html',
    "<div>\n" +
    "\t<h2>{{project.name}}</h2>\n" +
    "\t<h3>{{project.user}}</h3>\n" +
    "\t<div>\n" +
    "\t\t<small>Created:&nbsp;</small>\n" +
    "\t\t<em>\n" +
    "\t\t\t<span ng-bind=\"project.created | amDateFormat:'dddd, MMMM Do YYYY, h:mm:ss a'\"></span>\n" +
    "\t\t</em>\n" +
    "\t</div>\n" +
    "\t\n" +
    "\t<ul>\n" +
    "\t\t<li ng-repeat=\"repositories in project.repositories\">\n" +
    "\t\t\t<a href=\"#\">foo</a>\n" +
    "\t\t</li>\n" +
    "\t</ul>\n" +
    "</div>"
  );


  $templateCache.put('/templates/projects.html',
    "<h2>Projects</h2>\n" +
    "<div ui-view></div>\n" +
    "<br/>\n" +
    "<a id=\"showForm\" class=\"btn btn-block btn-primary\" href=\"#add\">Add project</a>"
  );


  $templateCache.put('/templates/projects.list.html',
    "<ul id=\"projects-list\"  class=\"nav nav-list\">\n" +
    "\t<li ng-repeat=\"project in projects\">\n" +
    "\t\t<a ui-sref=\"projects.detail({projectId: project._id})\">{{project.name}}</a>\n" +
    "\t\t<button class=\"delete btn btn-mini btn-primary list-btn\">del</button>\n" +
    "\t\t<button class=\"edit btn btn-mini btn-primary list-btn spacer \">edit</button>\n" +
    "\t</li>\n" +
    "</ul>\n"
  );


  $templateCache.put('/templates/repositories.list.html',
    "<ul id=\"repositories-list\"  class=\"nav nav-list\">\n" +
    "\t<li ng-repeat=\"repo in repos\">\n" +
    "\t\t<label class=\"checkbox inline\">\n" +
    "\t\t\t<input id={{repo.id}} type=\"checkbox\" {{repo.enabled}} value=\"{{repo.name}}\">\n" +
    "\t\t\t<h4 class=\"media-heading repoItem\">{{repo.name}}</h4>\n" +
    "\t\t\t<small>{{repo.description}}</small>\n" +
    "\t\t</label>\n" +
    "\t</li>\n" +
    "</ul>"
  );
}]);});