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
      // console.log('nevigate');
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
        getTestimonial : function(callback) {
      // console.log('nevigate');
            $http({
                url: adminurl + 'Testimonial/Search',
                method: 'POST',
                withCredentials: true
            }).success(callback);
        },
        getBlog : function(callback) {
      // console.log('nevigate');
            $http({
                url: adminurl + 'Blog/search',
                method: 'POST',
                withCredentials: true
            }).success(callback);
        },
        getRelatedBlogs : function(id,callback) {
      // console.log('nevigate');
            $http({
                url: adminurl + 'Blog/getOneBlog',
                method: 'POST',
                withCredentials: true,
                data: {
                    _id: id
                }
            }).success(callback);
        },
        getOneBlog : function(id, callback) {
      // console.log('nevigate');
            $http({
                url: adminurl + 'Blog/getOneBlog',
                method: 'POST',
                withCredentials: true,
                data: {
                    _id: id
                }
            }).success(callback);
        },
        getPartner : function(callback) {
      // console.log('nevigate');
            $http({
                url: adminurl + 'Partner/search',
                method: 'POST',
                withCredentials: true
            }).success(callback);
        },
        getClients : function(callback) {
      // console.log('nevigate');
            $http({
                url: adminurl + 'Client/search',
                method: 'POST',
                withCredentials: true
            }).success(callback);
        },
        saveContact : function(request,callback) {
      // console.log('nevigate');
            $http({
                url: adminurl + 'Contact/save',
                method: 'POST',
                withCredentials: true,
                data:request
            }).success(callback);
        },
        getAllBrand : function(callback) {
      // console.log('nevigate');
            $http({
                url: adminurl + 'Brand/Search',
                method: 'POST',
                withCredentials: true

            }).success(callback);
        },
        getAllAgency : function(callback) {
      // console.log('nevigate');
            $http({
                url: adminurl + 'Agency/search',
                method: 'POST',
                withCredentials: true

            }).success(callback);
        },

    };
});
