'use strict';

/**
 * @ngdoc overview
 * @name newappApp
 * @description
 * # newappApp
 *
 * Main module of the application.
 */
var app = angular
  .module('app', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
            templateUrl: 'app/dashboard/dashboard.html',
            controller: 'dashboardCtrl'
        })
        .when('/frontend', {
            templateUrl: 'app/frontend/frontend.html',
            controller: 'frontendCtrl'
        })
        .when('/charts', {
            templateUrl: 'app/charts/charts/charts.html',
            controller: 'chartsCtrl'
        })
        .when('/financial-charts', {
            templateUrl: 'app/charts/financialCharts/financialCharts.html',
            controller: 'financialChartsCtrl'
        })
        .when('/ui-animations', {
            templateUrl: 'app/uiElements/animations/animations.html',
            controller: 'animationsCtrl'
        })
        .when('/ui-buttons', {
            templateUrl: 'app/uiElements/buttons/buttons.html',
            controller: 'buttonsCtrl'
        })
        .when('/ui-components', {
            templateUrl: 'app/uiElements/components/components.html',
            controller: 'componentsCtrl'
        })
        .when('/ui-helperClasses', {
            templateUrl: 'app/uiElements/helperClasses/helperClasses.html',
            controller: 'helperClassesCtrl'
        })
        .when('/ui-icons', {
            templateUrl: 'app/uiElements/icons/icons.html',
            controller: 'iconsCtrl'
        })
        .when('/ui-modals', {
            templateUrl: 'app/uiElements/modals/modals.html',
            controller: 'modalsCtrl'
        })
        .when('/ui-nestableList', {
            templateUrl: 'app/uiElements/nestableList/nestableList.html',
            controller: 'nestableListCtrl'
        })
        .when('/ui-notifications', {
            templateUrl: 'app/uiElements/notifications/notifications.html',
            controller: 'notificationsCtrl'
        })
        .when('/ui-portlets', {
            templateUrl: 'app/uiElements/portlets/portlets.html',
            controller: 'portletsCtrl'
        })
        .when('/ui-tabs', {
            templateUrl: 'app/uiElements/tabs/tabs.html',
            controller: 'tabsCtrl'
        })
        .when('/ui-treeView', {
            templateUrl: 'app/uiElements/treeView/treeView.html',
            controller: 'treeViewCtrl'
        })
        .when('/ui-typography', {
            templateUrl: 'app/uiElements/typography/typography.html',
            controller: 'typographyCtrl'
        })
        .when('/email-templates', {
            templateUrl: 'app/mailbox/mailbox-templates.html',
            controller: 'mailboxTemplatesCtrl'
        })
          .when('/forms-elements', {
              templateUrl: 'app/forms/elements/elements.html',
              controller: 'elementsCtrl'
          })
             .when('/forms-validation', {
                 templateUrl: 'app/forms/validation/validation.html',
                 controller: 'elementsCtrl'
             })
            .when('/forms-plugins', {
                templateUrl: 'app/forms/plugins/plugins.html',
                controller: 'pluginsCtrl'
            })
          .when('/forms-wizard', {
              templateUrl: 'app/forms/wizard/wizard.html',
              controller: 'wizardCtrl'
          })
          .when('/forms-sliders', {
              templateUrl: 'app/forms/sliders/sliders.html',
              controller: 'slidersCtrl'
          })
          .when('/forms-editors', {
              templateUrl: 'app/forms/editors/editors.html',
              controller: 'editorsCtrl'
          })
            .when('/forms-input-masks', {
                templateUrl: 'app/forms/inputMasks/inputMasks.html',
                controller: 'inputMasksCtrl'
            })

           //medias
        .when('/medias-croping', {
            templateUrl: 'app/medias/croping/croping.html',
            controller: 'cropingCtrl'
        })
        .when('/medias-hover', {
            templateUrl: 'app/medias/hover/hover.html',
            controller: 'hoverCtrl'
        })
        .when('/medias-sortable', {
            templateUrl: 'app/medias/sortable/sortable.html',
            controller: 'sortableCtrl'
        })
          //pages
        .when('/pages-blank', {
            templateUrl: 'app/pages/blank/blank.html',
            controller: 'blankCtrl'
        })
        .when('/pages-contact', {
            templateUrl: 'app/pages/contact/contact.html',
            controller: 'contactCtrl'
        })
        .when('/pages-timeline', {
            templateUrl: 'app/pages/timeline/timeline.html',
            controller: 'timelineCtrl'
        })
             //ecommerce
        .when('/ecom-cart', {
            templateUrl: 'app/ecommerce/cart/cart.html',
            controller: 'cartCtrl'
        })
        .when('/ecom-invoice', {
            templateUrl: 'app/ecommerce/invoice/invoice.html',
            controller: 'invoiceCtrl'
        })
        .when('/ecom-pricingTable', {
            templateUrl: 'app/ecommerce/pricingTable/pricingTable.html',
            controller: 'pricingTableCtrl'
        })
          //extra
        .when('/extra-fullCalendar', {
            templateUrl: 'app/extra/fullCalendar/fullCalendar.html',
            controller: 'fullCalendarCtrl'
        })
        .when('/extra-google', {
            templateUrl: 'app/extra/google/google.html',
            controller: 'googleCtrl'
        })
        .when('/extra-slider', {
            templateUrl: 'app/extra/slider/slider.html',
            controller: 'sliderCtrl'
        })
        .when('/extra-vector', {
            templateUrl: 'app/extra/vector/vector.html',
            controller: 'vectorCtrl'
        })
        .when('/extra-widgets', {
            templateUrl: 'app/extra/widgets/widgets.html',
            controller: 'widgetsCtrl'
        })
          //tables
        .when('/tables-dynamic', {
            templateUrl: 'app/tables/dynamic/dynamic.html',
            controller: 'dynamicCtrl'
        })
        .when('/tables-editable', {
            templateUrl: 'app/tables/editable/editable.html',
            controller: 'editableCtrl'
        })
        .when('/tables-filter', {
            templateUrl: 'app/tables/filter/filter.html',
            controller: 'filterCtrl'
        })
        .when('/tables-styling', {
            templateUrl: 'app/tables/styling/styling.html',
            controller: 'stylingCtrl'
        })
          //user
        .when('/user-profile', {
            templateUrl: 'app/user/profile/profile.html',
            controller: 'profileCtrl'
        })
        .when('/user-sessionTimeout', {
            templateUrl: 'app/user/sessionTimeout/sessionTimeout.html',
            controller: 'sessionTimeoutCtrl'
        })
          //layout
        .when('/layout-api', {
            templateUrl: 'app/layout/api.html',
            controller: 'apiCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
  });


// Route State Load Spinner(used on page or content load)
app.directive('ngSpinnerLoader', ['$rootScope',
    function($rootScope) {
        return {
            link: function(scope, element, attrs) {
                // by defult hide the spinner bar
                element.addClass('hide'); // hide spinner bar by default
                // display the spinner bar whenever the route changes(the content part started loading)
                $rootScope.$on('$routeChangeStart', function() {
                    element.removeClass('hide'); // show spinner bar
                });
                // hide the spinner bar on rounte change success(after the content loaded)
                $rootScope.$on('$routeChangeSuccess', function() {
                    setTimeout(function(){
                        element.addClass('hide'); // hide spinner bar
                    },500);
                    $("html, body").animate({
                        scrollTop: 0
                    }, 500);   
                });
            }
        };
    }
])