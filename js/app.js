// JavaScript Document
var firstapp = angular.module('firstapp', [
    'ui.router',
    'phonecatControllers',
    'templateservicemod',
    'navigationservice',
    'pascalprecht.translate',
    'angulartics',
    'angulartics.google.analytics',
    'ui.select'
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
            url: "/workshop-detail",
            templateUrl: "views/template.html",
            controller: 'WorkshopCtrl'
        })
        .state('brainwave', {
            url: "/brainwave-detail",
            templateUrl: "views/template.html",
            controller: 'BrainwaveCtrl'
        })
        // .state('media', {
        //     url: "/media",
        //     templateUrl: "views/template.html",
        //     controller: 'MediaCtrl'
        // })
        .state('we-believe', {
            url: "/we-believe",
            templateUrl: "views/template.html",
            controller: 'WeBelieveCtrl'
        })

        .state('blog', {
            url: "/blog/:name",
            templateUrl: "views/template.html",
            controller: 'BlogCtrl',
            params: {
                id: '/:id',
                index: '/:index'
            }
        })
        .state('blog-detail', {
            url: "/blog-detail/:name/:id",
            templateUrl: "views/template.html",
            controller: 'IndividualBlogCtrl'
        })
        .state('contact-us', {
            url: "/contact-us",
            templateUrl: "views/template.html",
            controller: 'ContactCtrl'
        })
        .state('awesomeness', {
            url: "/awesomeness",
            templateUrl: "views/template.html",
            controller: 'AwesomenessCtrl'
        })
        .state('homeid', {
            url: "/:id",
            templateUrl: "views/template.html",
            controller: 'HomeCtrl'
        })


    ;
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
                // $element.after("<img src='img/loading.gif' class='loading' />");
                var $loading = $element.next(".loading");
                $element.load(function () {
                    $loading.remove();
                    $(this).addClass("doneLoading");
                });blog-detail
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

firstapp.directive('scrolldown', function ($compile, $parse) {
    return {
        restrict: 'EA',
        replace: false,
        link: function ($scope, element, attrs) {
            var $element = $(element);
            // var windowHeight = $(window).height();
            $scope.scrollDown = function () {
                $('html,body').animate({
                        scrollTop: $(".second").offset().top
                    },
                    'slow');
            }
        }
    };
});

firstapp.filter('uploadpath', function () {
    return function (input, width, height, style, defaultFlag) {
        //console.log(width, height, style, defaultFlag)
        var other = "";
        if (width && width !== "") {
            other += "&width=" + width;
        }
        if (height && height !== "") {
            other += "&height=" + height;
        }
        if (style && style !== "") {
            other += "&style=" + style;
        }
        if (input) {
            if (input.indexOf('https://') == -1) {
                return imgpath + "?file=" + input + other;
            } else {
                return input;
            }
        } else {
            if (defaultFlag === false) {
                return "img/sf-handball.png";

            } else {
                return "img/noimage.png";

            }
        }
    };
});
firstapp.filter('shorten', function () {
    return function (value, limit) {
        if (value)
            if (value.length < limit) {
                return value;
            } else {
                return value.slice(0, limit - 2) + "..";

            }

    };
});

firstapp.filter('rawHtml', ['$sce',
    function ($sce) {
        return function (val) {
            return $sce.trustAsHtml(val);
        };
    }
]);
firstapp.filter('urlEncode', [function () {
    return window.encodeURIComponent;
}]);
firstapp.config(function ($translateProvider) {
    $translateProvider.translations('en', LanguageEnglish);
    $translateProvider.translations('hi', LanguageHindi);
    $translateProvider.preferredLanguage('en');
});