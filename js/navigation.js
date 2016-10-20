var adminurl = "http://104.155.129.33:93/";
// if (isproduction) {
//     adminURL = "http://www.wohlig.co.in/demo/index.php";
// } else {
//     adminURL = "http://localhost/demo/index.php";
// }
var imgpath = adminurl + "upload/readFile";
var uploadurl = adminurl + "upload/";
var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function($http) {
    var navigation = [{
        name: "Home",
        classis: "active",
        anchor: "home",
        subnav: [{
            name: "Subnav1",
            classis: "active",
            anchor: "home"
        }]
    }, {
        name: "Form",
        classis: "active",
        anchor: "form",
        subnav: []
    }];

    return {
        getnav: function() {
            return navigation;
        },
        makeactive: function(menuname) {
            for (var i = 0; i < navigation.length; i++) {
                if (navigation[i].name == menuname) {
                    navigation[i].classis = "active";
                } else {
                    navigation[i].classis = "";
                }
            }
            return menuname;
        },
        getHome: function(callback) {
      console.log('nevigate');
            $http({
                url: adminurl + 'Home/search',
                method: 'POST',
                withCredentials: true
            }).success(callback);
        },
        getCategory : function(callback) {
      // console.log('nevigate');
            $http({
                url: adminurl + 'Category/search',
                method: 'POST',
                withCredentials: true
            }).success(callback);
        },

    };
});
