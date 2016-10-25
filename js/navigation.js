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
    var navigation = [ {
        name: "What We Do",
        classis: "active",
         anchor: "wedo",
    target: "_self",
    },{
        name: "About Us",
        classis: "active",
         anchor: "abouts",
    target: "_self",
    },{
        name: " Clients",
        classis: "active",
         anchor: "clients",
    target: "_self",
    }, {
        name: "Testimonials",
        classis: "active",
         anchor: "testimonials",
    target: "_self",
    },{
        name: "Blog",
        classis: "active",
         anchor: "testimonials",
    target: "_self",
    },
     {
        name: "Workshops",
        classis: "active",
         anchor: "workshop",
    target: "_self",
    },
     {
        name: "Brainwave",
        classis: "active",
         anchor: "brainwave",
    target: "_self",
    },{
    name: " Contact Us",
    classis: "active",
    anchor: "contact",
    target: "_self",
  },{
        name: "Media",
        classis: "active",
         anchor: "media",
    target: "_self",
    }
    ];

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
        getTag : function(callback) {
      // console.log('nevigate');
            $http({
                url: adminurl + 'Tag/search',
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
        getTagBlog : function(data,callback) {
      // console.log('nevigate');
            $http({
                url: adminurl + 'Blog/getOneBlog',
                method: 'POST',
                withCredentials: true,
                data: data
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
