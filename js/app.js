// JavaScript Document
var firstapp = angular.module('firstapp', [
    'ui.router',
    'phonecatControllers',
    'templateservicemod',
    'navigationservice',
    'pascalprecht.translate',
    'angulartics',
    'angulartics.google.analytics'
]);

firstapp.config(function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
    // for http request with session
    $httpProvider.defaults.withCredentials = true;
    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: "views/template.html",
            controller: 'HomeCtrl'
        })
        .state('form', {
            url: "/form",
            templateUrl: "views/template.html",
            controller: 'FormCtrl'
        })
        .state('content-strategy', {
            url: "/content-strategy",
            templateUrl: "views/template.html",
            controller: 'ContentStrategyCtrl'
        })
        .state('digital', {
            url: "/digital",
            templateUrl: "views/template.html",
            controller: 'DigitalCtrl'
        })
        .state('branded-content', {
            url: "/branded-content",
            templateUrl: "views/template.html",
            controller: 'BrandedContentCtrl'
        })
        .state('internal-communication', {
            url: "/internal-communication",
            templateUrl: "views/template.html",
            controller: 'InternalCommunicationCtrl'
        })
        .state('design', {
            url: "/design",
            templateUrl: "views/template.html",
            controller: 'DesignCtrl'
        })
        .state('the-studio', {
            url: "/the-studio",
            templateUrl: "views/template.html",
            controller: 'TheStudioCtrl'
        })
        .state('workshop', {
            url: "/workshop",
            templateUrl: "views/template.html",
            controller: 'WorkshopCtrl'
        })
        .state('brainwave', {
            url: "/brainwave",
            templateUrl: "views/template.html",
            controller: 'BrainwaveCtrl'
        })
        .state('media', {
            url: "/media",
            templateUrl: "views/template.html",
            controller: 'MediaCtrl'
        })
        .state('we-believe', {
            url: "/we-believe",
            templateUrl: "views/template.html",
            controller: 'WeBelieveCtrl'
        })
        .state('blog', {
            url: "/blog",
            templateUrl: "views/template.html",
            controller: 'BlogCtrl'
        })
        .state('individual-blog', {
            url: "/individual-blog",
            templateUrl: "views/template.html",
            controller: 'IndividualBlogCtrl'
        })
        .state('awsomeness', {
            url: "/awsomeness",
            templateUrl: "views/template.html",
            controller: 'AwsomenessCtrl'
        });
    $urlRouterProvider.otherwise("/");
    $locationProvider.html5Mode(isproduction);
});


firstapp.directive('img', function ($compile, $parse) {
    return {
        restrict: 'E',
        replace: false,
        link: function ($scope, element, attrs) {
            var $element = $(element);
            if (!attrs.noloading) {
                $element.after("<img src='img/loading.gif' class='loading' />");
                var $loading = $element.next(".loading");
                $element.load(function () {
                    $loading.remove();
                    $(this).addClass("doneLoading");
                });
            } else {
                $($element).addClass("doneLoading");
            }
        }
    };
});

firstapp.directive('fancybox', function ($document) {
    return {
        restrict: 'EA',
        replace: false,
        link: function (scope, element, attr) {
            var $element = $(element);
            var target;
            if (attr.rel) {
                target = $("[rel='" + attr.rel + "']");
            } else {
                target = element;
            }

            target.fancybox({
                openEffect: 'fade',
                closeEffect: 'fade',
                closeBtn: true,
                padding: 0,
                helpers: {
                    media: {}
                }
            });
        }
    };
});

firstapp.directive('autoHeight', function ($compile, $parse) {
    return {
        restrict: 'EA',
        replace: false,
        link: function ($scope, element, attrs) {
            var $element = $(element);
            var windowHeight = $(window).height();
            $element.css("min-height", windowHeight);
        }
    };
});

firstapp.config(function ($translateProvider) {
    $translateProvider.translations('en', LanguageEnglish);
    $translateProvider.translations('hi', LanguageHindi);
    $translateProvider.preferredLanguage('en');
});