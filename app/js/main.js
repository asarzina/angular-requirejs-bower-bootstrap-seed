require.config({
	paths: {
		// Core libraries
		angular: '../bower_components/angular/angular',
		text: '../bower_components/requirejs-text/text',
		domReady: '../bower_components/requirejs-domready/domReady',
		// Plugins
		jquery: '../bower_components/jquery/jquery',
		bootstrap: '../bower_components/bootstrap/dist/js/bootstrap'
	},
	baseUrl: 'js',
	shim: {
		'angular' : {'exports' : 'angular'},
		'angularMocks': {deps:['angular'], 'exports':'angular.mock'},
		'jquery' : {'exports' : 'jquery'},
		'bootstrap': ['jquery']
	},
	priority: [
		"angular"
	]
});

require( [
	'angular',
	'app',
	'domReady', 
	'routes'
], function(angular, app, domReady, routes) {
	'use strict';
		domReady(function() {
			angular.bootstrap(document, [app['name']]);
		});
});
