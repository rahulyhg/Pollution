// JavaScript Document
var firstapp = angular.module('firstapp', [
    'ngRoute',
    'phonecatControllers',
    'templateservicemod',
    'navigationservice'
]);

firstapp.config(
    function ($routeProvider, uiSelectConfig) {

        //        uiSelectConfig.theme = 'bootstrap';
        //        uiSelectConfig.resetSearchInput = true;
        //        uiSelectConfig.appendToBody = true;


        $routeProvider.
        when('/login', {
            templateUrl: 'views/template.html',
            controller: 'login'
        }).
        when('/home', {
            templateUrl: 'views/template.html',
            controller: 'home'
        }).
        when('/user', {
                templateUrl: 'views/template.html',
                controller: 'UserCtrl'
            }).when('/createuser', {
                templateUrl: 'views/template.html',
                controller: 'createUserCtrl'
            }).when('/edituser/:id', {
                templateUrl: 'views/template.html',
                controller: 'editUserCtrl'
            }).when('/images', {
                templateUrl: 'views/template.html',
                controller: 'ImagesCtrl'
            }).when('/createimages', {
                templateUrl: 'views/template.html',
                controller: 'createImagesCtrl'
            }).when('/editimages/:id', {
                templateUrl: 'views/template.html',
                controller: 'editImagesCtrl'
            }).when('/imagetype', {
                templateUrl: 'views/template.html',
                controller: 'ImageTypeCtrl'
            }).when('/createimagetype', {
                templateUrl: 'views/template.html',
                controller: 'createImageTypeCtrl'
            }).when('/editimagetype/:id', {
                templateUrl: 'views/template.html',
                controller: 'editImageTypeCtrl'
            }).when('/result', {
                templateUrl: 'views/template.html',
                controller: 'ResultCtrl'
            }).when('/createresult', {
                templateUrl: 'views/template.html',
                controller: 'createResultCtrl'
            }).when('/editresult/:id', {
                templateUrl: 'views/template.html',
                controller: 'editResultCtrl'
            }). //Add New Path

        otherwise({
            redirectTo: '/login'
        });
    });
firstapp.filter('uploadpath', function () {
    return function (input) {
        return adminurl + "user/resize?file=" + input;
    };
});

firstapp.directive('array', function () {
    return {
        restrict: 'EA',
        scope: {
            GalleryStructure: "=objval",
            EditVal: "=editval",
            ModelObj: "=modelobj"
        },
        replace: false,
        templateUrl: "views/directive/array.html",
        link: function ($scope, element, attr) {
            console.log($scope.EditVal);
            var GalleryStructure = $scope.GalleryStructure;
            var EditVal = $scope.EditVal;
            $scope.label = attr.label;
            $scope.GalleryStrucObj = {};
            $scope.GalleryStrucObj.keyOf = _.pluck(GalleryStructure, "name");
            $scope.GalleryStrucObj.structure = GalleryStructure;
            $scope.GalleryStrucObj.valuesOf = [];
            $scope.GalleryStrucObj.valuesOf = EditVal;
            $scope.GalleryStrucObj.nullObj = {};
            _.each($scope.GalleryStrucObj.keyOf, function (n, key) {
                $scope.GalleryStrucObj.nullObj[n] = "";
            });
            $scope.GalleryStrucObj.add = function () {
                $scope.GalleryStrucObj.valuesOf.push(_.clone($scope.GalleryStrucObj.nullObj, true));
            };
            $scope.GalleryStrucObj.remove = function (obj) {
                var objkey = _.remove($scope.GalleryStrucObj.valuesOf, obj);
            };
            $scope.EditVal = $scope.GalleryStrucObj.valuesOf;
        }
    }
});

firstapp.directive('createovalidation', function () {
    return {
        restrict: 'EA',
        replace: false,
        link: function ($scope, element, attr) {
            $element = $(element);
            var validation = $scope[attr.createovalidation].structure[attr.objkey].validation;
            _.each(validation, function (n) {
                var m = n.split("=");
                if (!m[1]) {
                    m[1] = "";
                }
                $element.attr(m[0], m[1]);
            });
        }
    }
});


firstapp.directive('capitalizeFirst', function ($parse) {
    return {
        require: 'ngModel',
        link: function (scope, element, attrs, modelCtrl) {
            var capitalize = function (inputValue) {
                if (inputValue === undefined) {
                    inputValue = '';
                }
                var capitalized = inputValue.charAt(0).toUpperCase() +
                    inputValue.substring(1);
                if (capitalized !== inputValue) {
                    modelCtrl.$setViewValue(capitalized);
                    modelCtrl.$render();
                }
                return capitalized;
            }
            modelCtrl.$parsers.push(capitalize);
            capitalize($parse(attrs.ngModel)(scope)); // capitalize initial value
        }
    };
});
firstapp.filter('touppercase', function () {
    return function (input) {
        var firstletter = input.substr(0, 1);
        var remaining = input.substr(1);
        return firstletter.toUpperCase() + remaining;
    };
})

firstapp.filter('uploadpath', function ($http) {
    return function (input) {
        if (input)
            return "http://timesbappa.com/uploadfile/getuserimage?file=" + input;
    };
});
firstapp.directive('capitalizeFirst', function ($parse) {
    return {
        require: 'ngModel',
        link: function (scope, element, attrs, modelCtrl) {
            var capitalize = function (inputValue) {
                if (inputValue === undefined) {
                    inputValue = '';
                }
                var capitalized = inputValue.charAt(0).toUpperCase() +
                    inputValue.substring(1);
                if (capitalized !== inputValue) {
                    modelCtrl.$setViewValue(capitalized);
                    modelCtrl.$render();
                }
                return capitalized;
            }
            modelCtrl.$parsers.push(capitalize);
            capitalize($parse(attrs.ngModel)(scope)); // capitalize initial value
        }
    };
});
firstapp.filter('touppercase', function () {
    return function (input) {
        var firstletter = input.substr(0, 1);
        var remaining = input.substr(1);
        return firstletter.toUpperCase() + remaining;
    };
});