var mySwiper;
angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider', 'ksSwiper', 'duScroll', 'ui.select'])

    .controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout, $state, $filter, $stateParams, $document, $location, $window) {
        $scope.template = TemplateService.changecontent("home"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("Home"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        TemplateService.removeLoaderOn(5);
        $scope.template.header = "";
        TemplateService.banner = "";
        $scope.menutitle = NavigationService.makeactive($stateParams.id);
        NavigationService.getHome(function (data) {
            if (data.value) {
                $scope.home = data.data.results;
                if ($scope.home.length > 0 && $scope.home[0].banner) {
                    $scope.home.banner = $filter('uploadpath')($scope.home[0].banner);
                    TemplateService.removeLoader();
                }

            }
        });
        NavigationService.getTestimonial(function (data) {
            if (data.value) {
                $scope.testimonial = data.data.results;
                TemplateService.removeLoader();
            }

        });
        NavigationService.getBlog(function (data) {
            if (data.value) {
                $scope.blog = data.data.results;
                TemplateService.removeLoader();
            }
        });
        NavigationService.getPartner(function (data) {
            if (data.value) {
                $scope.partners = data.data.results;
                $scope.partners = _.chunk($scope.partners, 9);
                for (var i = 0; i < $scope.partners.length; i++) {
                    $scope.partners[i] = _.chunk($scope.partners[i], 3);
                }

                //for mobile
                $scope.partnersxs = data.data.results;
                $scope.partnersxs = _.chunk($scope.partnersxs, 4);
                for (var i = 0; i < $scope.partners.length; i++) {
                    $scope.partnersxs[i] = _.chunk($scope.partnersxs[i], 2);
                }
                TemplateService.removeLoader();
            }
        });
        NavigationService.getClients(function (data) {
            if (data.value) {
                $scope.client = data.data.results;
                $scope.client = _.chunk($scope.client, 9);
                for (var i = 0; i < $scope.client.length; i++) {
                    $scope.client[i] = _.chunk($scope.client[i], 3);
                }

                // for mobile slider
                $scope.clientxs = data.data.results;
                $scope.clientxs = _.chunk($scope.clientxs, 4);
                for (var i = 0; i < $scope.clientxs.length; i++) {
                    $scope.clientxs[i] = _.chunk($scope.clientxs[i], 2);
                }
                TemplateService.removeLoader();
            }
        });



        $scope.inIndividualBlog = function (id, name) {
            $scope.name = name.replace(/(?!\w|\s)./g, '').replace(/\s/g, '').replace(/^(\s*)([\W\w]*)(\b\s*$)/g, '$2').toLowerCase();
            $scope.id = id;
            $state.go('blog-detail', {
                'name': $scope.name,
                'id': $scope.id
            });
        }



        $scope.formSubmitted = false;
        $scope.formData = {};
        $scope.submitForm = function (formData) {
            formData.category = formData.categories.name;
            NavigationService.saveContact($scope.formData, function (data) {
                if (data.value === true) {
                    $scope.formSubmitted = true;
                }
            });
        };
        if (!$scope.formData) {
            $scope.formData = {};
        }
        $scope.itemArray = [{
                id: 1,
                name: 'Content Strategy & Wisdom'
            },
            {
                id: 2,
                name: 'Digital'
            },
            {
                id: 3,
                name: 'Branded Content'
            },
            {
                id: 4,
                name: 'Corporate Communications'
            },
            {
                id: 5,
                name: 'The Studio'
            },
            {
                id: 6,
                name: 'Design'
            }
        ];
        $scope.selected = {
            value: $scope.itemArray[0]
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
        // $scope.client = _.chunk($scope.client, 9);
        // for (var i = 0; i < $scope.client.length; i++) {
        //     $scope.client[i] = _.chunk($scope.client[i], 3);
        // }
        // })


        //Our clients
        $scope.showHead1 = true;
        $scope.showHead2 = false;
        $scope.showHeading1 = function () {
            $scope.showHead1 = false;
            $scope.showHead2 = true;
        };


        $scope.showHeading2 = function () {
            $scope.showHead1 = true;
            $scope.showHead2 = false;
        };

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
        }];

        $scope.goto = function () {
            console.log("inside this function");
        }

        function makeAnimation(id) {
            if (_.isEmpty(id)) {
                id = "home";
            }
            var someElement = angular.element(document.getElementById(id));
            $document.scrollToElement(someElement, 70, 2000);
        }

        $scope.$on('$viewContentLoaded', function (event) {
            setTimeout(function () {
                makeAnimation($stateParams.id);
            }, 3000);
        });


        // $(window).scroll(function () {
        //     console.log("position", $('#wedo').position().top);
        //     var top = this.scrollY,
        //         left = this.scrollX;
        //         console.log("top", top);
        //     if (top >= $('#wedo').position().top) {
        //         var host = $window.location.host;
        //         var landingUrl = '/#/wedo';
        //         event.preventDefault();
        //         $window.location.href = landingUrl;
        //     }
        // });

        $scope.changeURL = function (id) {
            $scope.menutitle = NavigationService.makeactive(id);
            $state.transitionTo('homeid', {
                id: id
            }, {
                notify: false
            });
            makeAnimation(id);
            $location.replace();
        };

        angular.module('myApp', ['duScroll']).
        run(function ($rootScope) {
            if (!window.history || !history.replaceState) {
                return;
            }
            $rootScope.$on('duScrollspy:changeURL', function ($event, $element, $target) {
                //Automaticly update location
                var hash = $element.prop('hash');
                if (hash) {
                    history.replaceState(null, null, hash);
                }
            });
        });

        $scope.section = {
            header: "views/header.html",
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
            nine: "views/section/section9.html",
        };
        $scope.showList = false;
        $scope.showDropdown = function () {
            console.log("hi");
            $scope.showList = !$scope.showList;
            $timeout(function () {
                $('html, body').animate({
                    scrollTop: $('.dropdown-info').offset().top - 100
                }, 3000);
            }, 500);
        }
        // $scope.$on('$viewContentLoaded', function () {
        //     $timeout(function () {
        //         $(window).scroll(function () {
        //             var scroller = $(document).scrollTop();
        //             var height = $(window).height() + $(window).height();
        //             if (height <= scroller) {
        //                 $('body').addClass('show-header');

        //             } else {
        //                 $('body').removeClass('show-header');

        //             }
        //         });
        //     }, 1000);
        // });
        //for header scroll scss change
        $(window).scroll(function () {
            if ($(document).scrollTop() > 150) {
                $("body").addClass("show-header");
            } else {
                $("body").removeClass("show-header");
            }
        });

        // $timeout(function () {
        //     mySwiper = new Swiper('.swiper-container', {
        //         slidesPerView: 3,
        //         spaceBetween: 20,
        //         slidesPerGroup: 3,
        //         loop: true,
        //         loopFillGroupWithBlank: false,
        //         pagination: {
        //           el: '.swiper-pagination',
        //           clickable: true,
        //         },
        //         navigation: {
        //           nextEl: '.swiper-button-next',
        //           prevEl: '.swiper-button-prev',
        //         },
        //     });
        // }, 1000);


    })

    .controller('ErrorPageCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("error-page"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("error-page"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.formSubmitted = false;

        $scope.submitForm = function (data) {
            $scope.formSubmitted = true;
        }
    })

    .controller('FormCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("form"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("Form"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.formSubmitted = false;

        $scope.submitForm = function (data) {
            $scope.formSubmitted = true;
        }
    })

    .controller('ContentStrategyCtrl', function ($scope, TemplateService, NavigationService, $timeout, $location) {
        $scope.template = TemplateService.changecontent("content-strategy");
        $scope.menutitle = NavigationService.makeactive("Content Strategy");
        TemplateService.title = $scope.menutitle;
        TemplateService.footer = "";
        TemplateService.banner = "views/footer1.html";
        $scope.navigation = NavigationService.getnav();
        $scope.changeURL = function (id) {
            $location.path("" + id);
        };

    })
    .controller('ErrorPageCtrl', function ($scope, TemplateService, NavigationService, $timeout, $location) {
        $scope.template = TemplateService.changecontent("404");
        $scope.menutitle = NavigationService.makeactive("Error");
        TemplateService.title = $scope.menutitle;
        TemplateService.header = "";
        TemplateService.footer = "";
    })
    .controller('SitemapCtrl', function ($scope, TemplateService, NavigationService, $timeout, $location) {
        $scope.template = TemplateService.changecontent("sitemap");
        $scope.menutitle = NavigationService.makeactive("Sitemap");
        TemplateService.title = $scope.menutitle;
        TemplateService.footer = "";
        TemplateService.banner = "views/footer1.html";
        $scope.navigation = NavigationService.getnav();
        $scope.changeURL = function (id) {
            $location.path("" + id);
        };
    })
    .controller('DigitalCtrl', function ($scope, TemplateService, NavigationService, $timeout, $location) {
        $scope.template = TemplateService.changecontent("digital");
        $scope.menutitle = NavigationService.makeactive("Digital");
        TemplateService.title = $scope.menutitle;
        TemplateService.footer = "";
        TemplateService.banner = "views/footer1.html";
        $scope.navigation = NavigationService.getnav();
        $scope.changeURL = function (id) {
            $location.path("" + id);
        };

    })

    .controller('BrandedContentCtrl', function ($scope, TemplateService, NavigationService, $timeout, $location) {
        $scope.template = TemplateService.changecontent("branded-content");
        $scope.menutitle = NavigationService.makeactive("Branded Content");
        TemplateService.title = $scope.menutitle;
        TemplateService.footer = "";
        TemplateService.banner = "views/footer1.html";
        $scope.navigation = NavigationService.getnav();
        $scope.changeURL = function (id) {
            $location.path("" + id);
        };

    })

    .controller('InternalCommunicationCtrl', function ($scope, TemplateService, NavigationService, $timeout, $location) {
        $scope.template = TemplateService.changecontent("internal-communication");
        $scope.menutitle = NavigationService.makeactive("Internal Communication");
        TemplateService.title = $scope.menutitle;
        TemplateService.footer = "";
        TemplateService.banner = "views/footer1.html";
        $scope.navigation = NavigationService.getnav();
        $scope.changeURL = function (id) {
            $location.path("" + id);
        };

    })

    .controller('DesignCtrl', function ($scope, TemplateService, NavigationService, $timeout, $location) {
        $scope.template = TemplateService.changecontent("design");
        $scope.menutitle = NavigationService.makeactive("Design");
        TemplateService.title = $scope.menutitle;
        TemplateService.footer = "";
        TemplateService.banner = "views/footer1.html";
        $scope.navigation = NavigationService.getnav();
        $scope.changeURL = function (id) {
            $location.path("" + id);
        };

    })

    .controller('TheStudioCtrl', function ($scope, TemplateService, NavigationService, $timeout, $location) {
        $scope.template = TemplateService.changecontent("the-studio");
        $scope.menutitle = NavigationService.makeactive("The Studio");
        TemplateService.title = $scope.menutitle;
        TemplateService.footer = "";
        TemplateService.banner = "views/footer1.html";
        $scope.navigation = NavigationService.getnav();
        $scope.changeURL = function (id) {
            $location.path("" + id);
        };

    })

    .controller('WorkshopCtrl', function ($scope, TemplateService, NavigationService, $timeout, $location) {
        $scope.template = TemplateService.changecontent("workshop");
        $scope.menutitle = NavigationService.makeactive("Workshop");
        TemplateService.title = $scope.menutitle;
        TemplateService.footer = "";
        TemplateService.banner = "views/footer1.html";
        $scope.navigation = NavigationService.getnav();
        $scope.changeURL = function (id) {
            $location.path("" + id);
        };

    })

    .controller('BrainwaveCtrl', function ($scope, TemplateService, NavigationService, $timeout, $location) {
        $scope.template = TemplateService.changecontent("brainwave");
        $scope.menutitle = NavigationService.makeactive("Brainwave");
        TemplateService.title = $scope.menutitle;
        TemplateService.footer = "";
        TemplateService.banner = "views/footer1.html";
        $scope.navigation = NavigationService.getnav();
        $scope.changeURL = function (id) {
            $location.path("" + id);
        };

    })

    .controller('MediaCtrl', function ($scope, TemplateService, NavigationService, $timeout, $location, $stateParams, $state) {
        $scope.template = TemplateService.changecontent("media");
        $scope.menutitle = NavigationService.makeactive("Media");
        TemplateService.title = $scope.menutitle;
        TemplateService.footer = "";
        TemplateService.banner = "views/footer1.html";
        $scope.navigation = NavigationService.getnav();
        $scope.changeURL = function (id) {
            $location.path("" + id);
        };

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
        }
        $scope.inIndividualBlog = function (id, name) {
            $scope.name = name.replace(/(?!\w|\s)./g, '').replace(/\s/g, '').replace(/^(\s*)([\W\w]*)(\b\s*$)/g, '$2').toLowerCase();
            $scope.id = id;
            $state.go('blog-detail', {
                'name': $scope.name,
                'id': $scope.id
            });
        };

        $scope.inBlog = function (id, name, index) {
            $scope.name = name.replace(/(?!\w|\s)./g, '').replace(/\s/g, '').replace(/^(\s*)([\W\w]*)(\b\s*$)/g, '$2').toLowerCase();
            $scope.id = id;
            $scope.index = index;
            $state.go('blog', {
                name: $scope.name,
                id: $scope.id,
                index: $scope.index
            });
        };

        $scope.b_name = $stateParams.name;

        $scope.blogDetail = function () {
            NavigationService.getOneBlog($stateParams.id, function (data) {
                if (data.value) {
                    $scope.getone = data.data.blog;
                    $scope.rel = data.data.related;
                    // $scope.getRelatedBlogs = data.data;
                    TemplateService.removeLoader();
                }

            });
        }


        $scope.blogDetail();

        NavigationService.getTag(function (data) {
            if (data.value) {
                $scope.blog = data.data.results;
                // $scope.tabchanges($scope.blog[0]._id, 0);
                TemplateService.removeLoader();
            }
        });

        $timeout(function () {
            mySwiper = new Swiper('.swiper-container', {
                slidesPerView: 3,
                spaceBetween: 0,
                slidesPerGroup: 3,
                loop: true,
                loopFillGroupWithBlank: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        }, 1000);
    })

    .controller('WeBelieveCtrl', function ($scope, TemplateService, NavigationService, $timeout, $location) {
        $scope.template = TemplateService.changecontent("we-believe");
        $scope.menutitle = NavigationService.makeactive("We Believe");
        TemplateService.title = $scope.menutitle;
        TemplateService.footer = "";
        TemplateService.banner = "views/footer1.html";
        $scope.navigation = NavigationService.getnav();
        $scope.changeURL = function (id) {
            $location.path("" + id);
        };
    })

    .controller('BlogCtrl', function ($scope, TemplateService, NavigationService, $timeout, $location, $stateParams, $state) {
        $scope.template = TemplateService.changecontent("blog");
        $scope.menutitle = NavigationService.makeactive("Blog");
        TemplateService.title = $scope.menutitle;
        TemplateService.footer = "";
        TemplateService.banner = "views/footer1.html";
        $scope.navigation = NavigationService.getnav();
        TemplateService.removeLoaderOn(2);
        // NavigationService.getBlog(function(data) {
        //
        //     $scope.blog = data.data.results;
        //
        // });


        $timeout(function () {
            mySwiper = new Swiper('.swiper-container', {
                slidesPerView: 3,
                spaceBetween: 0,
                slidesPerGroup: 3,
                loop: true,
                loopFillGroupWithBlank: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        }, 1000);


        $scope.inBlog = function (id, name, index) {
            $scope.name = name.replace(/(?!\w|\s)./g, '').replace(/\s/g, '').replace(/^(\s*)([\W\w]*)(\b\s*$)/g, '$2').toLowerCase();
            $scope.id = id;
            $scope.index = index;
            $state.go('blog', {
                name: $scope.name,
                id: $scope.id,
                index: $scope.index
            });
        }





        $scope.changeURL = function (id) {
            $location.path("" + id);
        };

        NavigationService.getTag(function (data) {
            if (data.value) {
                $scope.blog = data.data.results;

                if ($stateParams.id != '/:id' && $stateParams.index != '/:index') {
                    $scope.id = $stateParams.id;
                    $scope.index = $stateParams.index;
                    $scope.name = $stateParams.name;
                    $scope.tabchanges($scope.id, $scope.index);
                } else {
                    $scope.tabchanges($scope.blog[0]._id, 0);
                }
                TemplateService.removeLoader();
            }
        });

        $scope.tabchanges = function (tab, indexid) {
            console.log("tab indexid", tab, indexid);
            _.each($scope.blog, function (key) {
                key.activetab = false;
            });
            $scope.blog[indexid].activetab = true;
            NavigationService.getTagBlog(tab, function (data) {
                if (data.value) {
                    $scope.getoneBlogs = data.data;
                    TemplateService.removeLoader();
                }

            });

            $scope.mediaValue = $stateParams.name;

            if ($scope.mediaValue == "mediainthenews") {
                var tab = '5b00bddf7cb61b715b072b75';
                NavigationService.getTagBlog(tab, function (data) {
                    if (data.value) {
                        $scope.getoneBlogs = data.data;
                        TemplateService.removeLoader();
                    }

                });
                // $('#tab-slider').ScrollTo();
                $('html, body').animate({
                    scrollTop: $("#tab-slider").offset().top
                }, 1000);
                $scope.blog[0].activetab = false;
                $scope.blog[1].activetab = false;
                $scope.blog[3].activetab = false;
                $scope.blog[2].activetab = true;
            }

            // $scope.tabs = tab;
            //         if (a == 1) {
            //             $scope.classp = "active-tab";
            //             $scope.classv = '';
            //
            //         } else {
            //
            //             $scope.classp = '';
            //             $scope.classv = "active-tab";
            //         }
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
        $scope.inIndividualBlog = function (id, name) {
            $scope.name = name.replace(/(?!\w|\s)./g, '').replace(/\s/g, '').replace(/^(\s*)([\W\w]*)(\b\s*$)/g, '$2').toLowerCase();
            $scope.id = id;
            $state.go('blog-detail', {
                'name': $scope.name,
                'id': $scope.id
            });
        }
    })

    .controller('IndividualBlogCtrl', function ($scope, TemplateService, NavigationService, $timeout, $location, $state, $stateParams) {
        $scope.template = TemplateService.changecontent("blog-detail");
        $scope.menutitle = NavigationService.makeactive("Individual Blog");
        TemplateService.title = $scope.menutitle;
        TemplateService.footer = "";
        TemplateService.banner = "views/footer1.html";
        $scope.myUrl = $location.absUrl();
        $scope.navigation = NavigationService.getnav();
        TemplateService.removeLoaderOn(2);
        $scope.changeURL = function (id) {
            $location.path("" + id);
        };

        $scope.inIndividualBlog = function (id, name) {
            $scope.name = name.replace(/(?!\w|\s)./g, '').replace(/\s/g, '').replace(/^(\s*)([\W\w]*)(\b\s*$)/g, '$2').toLowerCase();
            $scope.id = id;
            $state.go('blog-detail', {
                'name': $scope.name,
                'id': $scope.id
            });
        };

        $scope.inBlog = function (id, name, index) {
            $scope.name = name.replace(/(?!\w|\s)./g, '').replace(/\s/g, '').replace(/^(\s*)([\W\w]*)(\b\s*$)/g, '$2').toLowerCase();
            $scope.id = id;
            $scope.index = index;
            $state.go('blog', {
                name: $scope.name,
                id: $scope.id,
                index: $scope.index
            });
        };

        $scope.b_name = $stateParams.name;

        $scope.blogDetail = function () {
            NavigationService.getOneBlog($stateParams.id, function (data) {
                if (data.value) {
                    $scope.getone = data.data.blog;
                    $scope.rel = data.data.related;
                    // $scope.getRelatedBlogs = data.data;
                    TemplateService.removeLoader();
                }

            });
        }


        $scope.blogDetail();

        NavigationService.getTag(function (data) {
            if (data.value) {
                $scope.blog = data.data.results;
                // $scope.tabchanges($scope.blog[0]._id, 0);
                TemplateService.removeLoader();
            }
        });

        $timeout(function () {
            mySwiper = new Swiper('.swiper-container', {
                slidesPerView: 3,
                spaceBetween: 0,
                slidesPerGroup: 3,
                loop: true,
                loopFillGroupWithBlank: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        }, 1000);
    })

    .controller('AwesomenessCtrl', function ($scope, TemplateService, NavigationService, $timeout, $location, $uibModal) {
        $scope.template = TemplateService.changecontent("awesomeness");
        $scope.menutitle = NavigationService.makeactive("Awesomeness");
        TemplateService.title = $scope.menutitle;
        TemplateService.footer = "";
        TemplateService.banner = "views/footer1.html";
        $scope.navigation = NavigationService.getnav();
        TemplateService.removeLoaderOn(2);
        $scope.detail = {};
        NavigationService.getAllBrand(function (data) {
            if (data.value) {
                $scope.brand = data.data.results;
                $scope.brand = _.orderBy($scope.brand, ['order'], ['desc']);
                $scope.brand = _.chunk($scope.brand, 3);
                // for (var i = 0; i < $scope.brand.length; i++) {
                //     $scope.brand[i] = _.chunk($scope.brand[i], 3);
                // }
                TemplateService.removeLoader();
            }
        });
        // NavigationService.getAllBrand(function (data) {
        //     if (data.value) {
        //         $scope.brands = data.data.results;
        //         $scope.brands = _.orderBy($scope.brands, ['order'], ['desc']);
        //         // $scope.brands = _.chunk($scope.brands, 4);
        //         for (var i = 0; i < $scope.brands.length; i++) {
        //             $scope.brands[i] = _.chunk($scope.brands[i], 2);
        //         }
        //         TemplateService.removeLoader();
        //     }
        // });

        $scope.changeURL = function (id) {
            $location.path("" + id);
        };


        NavigationService.getAllAgency(function (data) {
            if (data.value) {
                $scope.agency = data.data.results;
                $scope.agency = _.orderBy($scope.agency, ['order'], ['desc']);
                $scope.agency = _.chunk($scope.agency, 3);
                // for (var i = 0; i < $scope.agency.length; i++) {
                //     $scope.agency[i] = _.chunk($scope.agency[i], 3);
                // }
                TemplateService.removeLoader();
            }
        });

        // NavigationService.getAllAgency(function (data) {
        //     if (data.value) {
        //         $scope.agencies = data.data.results;
        //         $scope.agencies = _.orderBy($scope.agencies, ['order'], ['desc']);
        //         $scope.agencies = _.chunk($scope.agencies, 4);
        //         for (var i = 0; i < $scope.agencies.length; i++) {
        //             $scope.agencies[i] = _.chunk($scope.agencies[i], 2);
        //         }
        //         TemplateService.removeLoader();
        //     }
        // });

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

        $scope.openBrand = function (selected) {
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

    .controller('ContactCtrl', function ($scope, TemplateService, NavigationService, $timeout, $location) {
        $scope.template = TemplateService.changecontent("contact_us");
        $scope.menutitle = NavigationService.makeactive("contact_us");
        TemplateService.title = $scope.menutitle;
        TemplateService.footer = "";
        TemplateService.banner = "views/footer1.html";
        $scope.navigation = NavigationService.getnav();
        $scope.changeURL = function (id) {
            $location.path("" + id);
        };
        $scope.itemArray = [
            // {
            //     id: 1,
            //     name: 'Category*'
            // },
            {
                id: 2,
                name: 'Digital'
            },
            {
                id: 3,
                name: 'Branded Content'
            },
            {
                id: 4,
                name: 'Corporate Communications'
            },
            {
                id: 5,
                name: 'The Studio'
            },
        ];
        $scope.selected = {
            value: $scope.itemArray[0]
        };
        $scope.formSubmitted = false;
        $scope.formData = {};
        $scope.submitForm = function (formData) {
            formData.category = formData.categories.name;
            NavigationService.saveContact($scope.formData, function (data) {
                if (data.value === true) {
                    $scope.formSubmitted = true;
                }
            });
        };

    })

    .controller('headerctrl', function ($scope, TemplateService) {
        $scope.template = TemplateService;
        $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            $(window).scrollTop(0);
        });
        $.fancybox.close(true);
        $scope.oneAtATime = true;

        // NavigationService.getCategory(function(data) {
        //     $scope.Category = data.data.results;
        // });
    })



    .controller('languageCtrl', function ($scope, TemplateService, $translate, $rootScope) {

        $scope.changeLanguage = function () {

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


    });