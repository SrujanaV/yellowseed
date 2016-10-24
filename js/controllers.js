angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider', 'ksSwiper', ])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout, $state, $filter) {
    $scope.template = TemplateService.changecontent("home"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Home"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    NavigationService.getHome(function(data) {
        // console.log(data);
        $scope.home = data.data.results;
        console.log($scope.home[0].banner);
        $scope.home.banner = $filter('uploadpath')($scope.home[0].banner);

        // console.log($scope.getHome);
    });
    NavigationService.getTestimonial(function(data) {
        // console.log(data);
        $scope.testimonial = data.data.results;
        // console.log($scope.testimonial);
    });
    NavigationService.getBlog(function(data) {

        $scope.blog = data.data.results;

    });
    NavigationService.getPartner(function(data) {

        $scope.blog = data.data.results;

    });
    NavigationService.getClients(function(data) {

        $scope.client = data.data.results;
        $scope.client = _.chunk($scope.client, 9);
        for (var i = 0; i < $scope.client.length; i++) {
            $scope.client[i] = _.chunk($scope.client[i], 3);
            // console.log($scope.client);
        }
        console.log($scope.client);

    });

    $scope.formSubmitted = false;
    $scope.formData = {};
    $scope.submitForm = function(formData) {
        NavigationService.saveContact($scope.formData, function(data) {
            if (data.value === true) {
                $scope.formSubmitted = true;
            }
        });
    };


    $scope.blogs = [
        'img/home-page/b1.jpg',
        'img/home-page/b2.png',
        'img/home-page/b3.png',

        'img/home-page/b1.jpg',
        'img/home-page/b2.png',
        'img/home-page/b3.png',

        'img/home-page/b1.jpg',
        'img/home-page/b2.png',
        'img/home-page/b3.png',
    ];


    $scope.AllClients = [
        'img/home-page/clients/1.png',
        'img/home-page/clients/2.jpg',
        'img/home-page/clients/3.jpg',
        'img/home-page/clients/4.jpg',
        'img/home-page/clients/5.jpg',
        'img/home-page/clients/6.jpg',
        'img/home-page/clients/7.jpg',
        'img/home-page/clients/8.jpg',
        'img/home-page/clients/9.jpg',

        'img/home-page/clients/1.png',
        'img/home-page/clients/2.jpg',
        'img/home-page/clients/3.jpg',
        'img/home-page/clients/4.jpg',
        'img/home-page/clients/5.jpg',
        'img/home-page/clients/6.jpg',
        'img/home-page/clients/7.jpg',
        'img/home-page/clients/8.jpg',
        'img/home-page/clients/9.jpg',

        'img/home-page/clients/1.png',
        'img/home-page/clients/2.jpg',
        'img/home-page/clients/3.jpg',
        'img/home-page/clients/4.jpg',
        'img/home-page/clients/5.jpg',
        'img/home-page/clients/6.jpg',
        'img/home-page/clients/7.jpg',
        'img/home-page/clients/8.jpg',
        'img/home-page/clients/9.jpg',

        'img/home-page/clients/1.png',
        'img/home-page/clients/2.jpg',
        'img/home-page/clients/3.jpg',
        'img/home-page/clients/4.jpg',
        'img/home-page/clients/5.jpg',
        'img/home-page/clients/6.jpg',
        'img/home-page/clients/7.jpg',
        'img/home-page/clients/8.jpg',
        'img/home-page/clients/9.jpg',
    ];
    // NavigationService.getClients(function (data) {
    // $scope.AllClients = data;
    $scope.client = _.chunk($scope.client, 9);
    for (var i = 0; i < $scope.client.length; i++) {
        $scope.client[i] = _.chunk($scope.client[i], 3);
        // console.log($scope.client);
    }
    console.log($scope.client);
    // console.log($scope.AllClients);
    // })

    $scope.testimon = [{
        id: 0,
        name: "Ashish Jain -Director,Medgini",
        para: "We are very pleased with our decision to use Yellow Seed. We had excellent support from the team for the content required for our website. To successfully implement an extensive website content task, we needed a versatile, well-structured and proven company to do it; Yellow Seed has proved to be all of this and more. "
    }, {
        id: 1,
        name: "Ashish Jain -Director,Medgini",
        para: "We are very pleased with our decision to use Yellow Seed. We had excellent support from the team for the content required for our website. To successfully implement an extensive website content task, we needed a versatile, well-structured and proven company to do it; Yellow Seed has proved to be all of this and more. "
    }, {
        id: 2,
        name: "Ashish Jain -Director,Medgini",
        para: "We are very pleased with our decision to use Yellow Seed. We had excellent support from the team for the content required for our website. To successfully implement an extensive website content task, we needed a versatile, well-structured and proven company to do it; Yellow Seed has proved to be all of this and more. "
    }, {
        id: 3,
        name: "Ashish Jain -Director,Medgini",
        para: "We are very pleased with our decision to use Yellow Seed. We had excellent support from the team for the content required for our website. To successfully implement an extensive website content task, we needed a versatile, well-structured and proven company to do it; Yellow Seed has proved to be all of this and more. "
    }];


    $scope.section = {
        head: "views/section/section.html",
        zero: "views/section/section0.html",
        one: "views/section/section1.html",
        two: "views/section/section2.html",
        three: "views/section/section3.html",
        four: "views/section/section4.html",
        five: "views/section/section5.html",
        six: "views/section/section6.html",
        seven: "views/section/section7.html",
        eight: "views/section/section8.html",
    };

    $scope.changePage = function(text) {
        console.log(text);
        var length = $(".fp-section").length;
        console.log(length);
        console.log($(".fp-section"));
        // if (typeof $.fn.fullpage.destroy == 'function') {
        //   $.fn.fullpage.destroy('all');
        // }
        if (length === 0) {
            $('.fullpage').fullpage();
        }
        console.log(text);
        $scope.homeval = text;
        switch (text) {
            case "contact":
                $.fn.fullpage.moveTo(8);
                break;
            case "contact":
                $.fn.fullpage.moveTo(7);
                break;
            case "brainwave":
                $.fn.fullpage.moveTo(6);
                break;
            case "workshop":
                $.fn.fullpage.moveTo(5);
                break;
            case "client":
                $.fn.fullpage.moveTo(4);
                break;
            case "about":
                $.fn.fullpage.moveTo(3);
                break;
            case "what":
                $.fn.fullpage.moveTo(2);
                break;
            case "home":
                $.fn.fullpage.moveTo(1);
                break;
            default:
                $.fn.fullpage.moveTo(1);
                break;
        }
    };

    // $scope.$on('$viewContentLoaded', function () {
    //     $timeout(function () {
    //         $('body').addClass('fp-');
    //         $scope.changePage($stateParams.id);
    //     }, 1000);
    // });

})

.controller('FormCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("form"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Form"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.formSubmitted = false;

    $scope.submitForm = function(data) {
        console.log(data);
        $scope.formSubmitted = true;
    }
})

.controller('ContentStrategyCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("content-strategy");
    $scope.menutitle = NavigationService.makeactive("Content Strategy");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

})

.controller('DigitalCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("digital");
    $scope.menutitle = NavigationService.makeactive("Digital");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

})

.controller('BrandedContentCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("branded-content");
    $scope.menutitle = NavigationService.makeactive("Branded Content");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

})

.controller('InternalCommunicationCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("internal-communication");
    $scope.menutitle = NavigationService.makeactive("Internal Communication");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

})

.controller('DesignCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("design");
    $scope.menutitle = NavigationService.makeactive("Design");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

})

.controller('TheStudioCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("the-studio");
    $scope.menutitle = NavigationService.makeactive("The Studio");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

})

.controller('WorkshopCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("workshop");
    $scope.menutitle = NavigationService.makeactive("Workshop");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

})

.controller('BrainwaveCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("brainwave");
    $scope.menutitle = NavigationService.makeactive("Brainwave");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

})

.controller('MediaCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("media");
    $scope.menutitle = NavigationService.makeactive("Media");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.medias = [
        'img/home-page/clients/1.png',
        'img/home-page/clients/2.jpg',
        'img/home-page/clients/3.jpg',
        'img/home-page/clients/4.jpg',
        'img/home-page/clients/5.jpg',
        'img/home-page/clients/6.jpg',
        'img/home-page/clients/7.jpg',
        'img/home-page/clients/8.jpg',
        'img/home-page/clients/9.jpg',
        'img/home-page/clients/1.png',
        'img/home-page/clients/2.jpg',
        'img/home-page/clients/3.jpg',
        'img/home-page/clients/4.jpg',
        'img/home-page/clients/5.jpg',
        'img/home-page/clients/6.jpg',
        'img/home-page/clients/1.png',
        'img/home-page/clients/2.jpg',
        'img/home-page/clients/3.jpg',
        'img/home-page/clients/4.jpg',
        'img/home-page/clients/5.jpg',
        'img/home-page/clients/6.jpg',
        'img/home-page/clients/7.jpg',
        'img/home-page/clients/8.jpg',
        'img/home-page/clients/9.jpg',
        'img/home-page/clients/1.png',
        'img/home-page/clients/2.jpg',
        'img/home-page/clients/3.jpg',
        'img/home-page/clients/4.jpg',
        'img/home-page/clients/5.jpg',
        'img/home-page/clients/6.jpg',

        'img/home-page/clients/1.png',
        'img/home-page/clients/2.jpg',
        'img/home-page/clients/3.jpg',
        'img/home-page/clients/4.jpg',
        'img/home-page/clients/5.jpg',
        'img/home-page/clients/6.jpg',
        'img/home-page/clients/7.jpg',
        'img/home-page/clients/8.jpg',
        'img/home-page/clients/9.jpg',
        'img/home-page/clients/1.png',
        'img/home-page/clients/2.jpg',
        'img/home-page/clients/3.jpg',
        'img/home-page/clients/4.jpg',
        'img/home-page/clients/5.jpg',
        'img/home-page/clients/6.jpg',

        'img/home-page/clients/1.png',
        'img/home-page/clients/2.jpg',
        'img/home-page/clients/3.jpg',
        'img/home-page/clients/4.jpg',
        'img/home-page/clients/5.jpg',
        'img/home-page/clients/6.jpg',
        'img/home-page/clients/7.jpg',
        'img/home-page/clients/8.jpg',
        'img/home-page/clients/9.jpg',
        'img/home-page/clients/1.png',
        'img/home-page/clients/2.jpg',
        'img/home-page/clients/3.jpg',
        'img/home-page/clients/4.jpg',
        'img/home-page/clients/5.jpg',
        'img/home-page/clients/6.jpg',
    ];
    $scope.medias = _.chunk($scope.medias, 15);
    for (var i = 0; i < $scope.medias.length; i++) {
        $scope.medias[i] = _.chunk($scope.medias[i], 5);
        console.log($scope.medias);
    }
    console.log("this is client");
    console.log($scope.medias);

})

.controller('WeBelieveCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("we-believe");
    $scope.menutitle = NavigationService.makeactive("We Believe");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

})

.controller('BlogCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("blog");
    $scope.menutitle = NavigationService.makeactive("Blog");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    NavigationService.getBlog(function(data) {

        $scope.blog = data.data.results;
        console.log($scope.blog);

    });
    $scope.tabs = 'media';
    $scope.classp = 'active-tab';
    $scope.classv = '';

    $scope.oneAtATime = true;

    TemplateService.menu = "";
    $scope.tabchanges = function(tabs, a) {

        $scope.tabs = tabs;
        if (a == 1) {

            $scope.classp = "active-tab";
            $scope.classv = '';

        } else {

            $scope.classp = '';
            $scope.classv = "active-tab";
        }
    };


    $scope.blogcontent = [{

        blogname: "Media"

    }, {

        blogname: "Content Works"

    }, {

        blogname: "People Matter"

    }, {

        blogname: "Content Workshop"

    }, {

        blogname: "Right Brain"

    }, {

        blogname: "Reviews"

    }, {

        blogname: "Live Well"

    }];

})

.controller('IndividualBlogCtrl', function($scope, TemplateService, NavigationService, $timeout, $state, $stateParams) {
    $scope.template = TemplateService.changecontent("individual-blog");
    $scope.menutitle = NavigationService.makeactive("Individual Blog");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.blogDetail = function() {
        NavigationService.getOneBlog($stateParams.id, function(data) {
            $scope.getone = data.data.blog;
            $scope.rel = data.data.related;
            // $scope.getRelatedBlogs = data.data;
            console.log(data.data);
        });
    }

    $scope.blogDetail();


})

.controller('AwsomenessCtrl', function($scope, TemplateService, NavigationService, $timeout, $uibModal) {
    $scope.template = TemplateService.changecontent("awsomeness");
    $scope.menutitle = NavigationService.makeactive("awsomeness");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.detail = {};
    NavigationService.getAllBrand(function(data) {

        $scope.brand = data.data.results;
        $scope.brand = _.chunk($scope.brand, 9);
        for (var i = 0; i < $scope.brand.length; i++) {
            $scope.brand[i] = _.chunk($scope.brand[i], 3);
            console.log($scope.brand);
        }


    });
    NavigationService.getAllAgency(function(data) {

        $scope.agency = data.data.results;
        $scope.agency = _.chunk($scope.agency, 9);
        for (var i = 0; i < $scope.agency.length; i++) {
            $scope.agency[i] = _.chunk($scope.agency[i], 3);
            console.log($scope.agency);
        }
        console.log($scope.client);

    });

    $scope.awsomebrands = [{
        img: "img/home-page/clients/1.png",
    }, {
        img: "img/home-page/clients/1.png",
    }, {
        img: "img/home-page/clients/1.png",
    }, {
        img: "img/home-page/clients/1.png",
    }, {
        img: "img/home-page/clients/1.png",
    }, {
        img: "img/home-page/clients/1.png"
    }, {
        img: "img/home-page/clients/1.png",
    }, {
        img: "img/home-page/clients/1.png",
    }, {
        img: "img/home-page/clients/1.png",
    }, {
        img: "img/home-page/clients/1.png",
    }, {
        img: "img/home-page/clients/1.png",
    }, {
        img: "img/home-page/clients/1.png",
    }, {
        img: "img/home-page/clients/1.png",
    }, {
        img: "img/home-page/clients/1.png",
    }, {
        img: "img/home-page/clients/1.png"
    }, {
        img: "img/home-page/clients/1.png",
    }, {
        img: "img/home-page/clients/1.png",
    }, {
        img: "img/home-page/clients/1.png",
    }];

    $scope.awsomebrands = _.chunk($scope.awsomebrands, 9);
    for (var i = 0; i < $scope.awsomebrands.length; i++) {
        $scope.awsomebrands[i] = _.chunk($scope.awsomebrands[i], 3);
    };

    $scope.openBrand = function(selected) {
      console.log(selected);
      $scope.detail = selected;
        $uibModal.open({
            animation: true,
            templateUrl: 'views/modal/brand.html',
            scope: $scope,
            size: 'lg',
            windowClass: "brand-modal"
        });
    };

})

.controller('headerctrl', function($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService;
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        $(window).scrollTop(0);
    });
    $.fancybox.close(true);

    NavigationService.getCategory(function(data) {
        console.log(data);
        $scope.Category = data.data.results;
        console.log(data.data.results);
    });

})

.controller('languageCtrl', function($scope, TemplateService, $translate, $rootScope) {

    $scope.changeLanguage = function() {
        console.log("Language CLicked");

        if (!$.jStorage.get("language")) {
            $translate.use("hi");
            $.jStorage.set("language", "hi");
        } else {
            if ($.jStorage.get("language") == "en") {
                $translate.use("hi");
                $.jStorage.set("language", "hi");
            } else {
                $translate.use("en");
                $.jStorage.set("language", "en");
            }
        }
        //  $rootScope.$apply();
    };


})

;
