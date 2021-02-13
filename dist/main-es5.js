(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+GGL":
    /*!*****************************************************************!*\
      !*** ./src/app/components/nucleoicons/nucleoicons.component.ts ***!
      \*****************************************************************/

    /*! exports provided: NucleoiconsComponent */

    /***/
    function GGL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NucleoiconsComponent", function () {
        return NucleoiconsComponent;
      });
      /* harmony import */


      var _raw_loader_nucleoicons_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./nucleoicons.component.html */
      "vG3S");
      /* harmony import */


      var _nucleoicons_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./nucleoicons.component.scss */
      "IBmT");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var NucleoiconsComponent = /*#__PURE__*/function () {
        function NucleoiconsComponent(element) {
          _classCallCheck(this, NucleoiconsComponent);

          this.element = element;
        }

        _createClass(NucleoiconsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var navbar = document.getElementsByTagName('app-navbar')[0].children[0];
            navbar.classList.remove('navbar-transparent');
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var navbar = document.getElementsByTagName('app-navbar')[0].children[0];
          }
        }]);

        return NucleoiconsComponent;
      }();

      NucleoiconsComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }];
      };

      NucleoiconsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-nucleoicons',
        template: _raw_loader_nucleoicons_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_nucleoicons_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]])], NucleoiconsComponent);
      /***/
    },

    /***/
    "+PLA":
    /*!***********************************************************!*\
      !*** ./src/app/examples/blogpost/blogpost.component.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function PLA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9ncG9zdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "+XEL":
    /*!*************************************************************************!*\
      !*** ./src/app/components/comments-areas/comments-areas.component.scss ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function XEL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21tZW50cy1hcmVhcy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "+pZr":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/presentation/presentation.component.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function pZr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"wrapper\">\n  <div class=\"page-header clear-filter\">\n    <div class=\"rellax-header rellax-header-sky\" data-rellax-speed=\"-8\">\n      <div class=\"page-header-image\" style=\"background-image: url('assets/img/presentation-page/nuk-pro-back-sky.jpg')\">\n      </div>\n    </div>\n    <div class=\"rellax-header rellax-header-buildings\" data-rellax-speed=\"0\">\n      <div class=\"page-header-image page-header-city\"\n        style=\"background-image: url('assets/img/presentation-page/nuk-pro-buildings.png')\">\n      </div>\n    </div>\n    <div class=\"rellax-text-container rellax-text\">\n      <h1 class=\"h1-seo\" data-rellax-speed=\"-2\">Josh Levy</h1>\n    </div>\n    <h2 class=\"h3-description rellax-text\" data-rellax-speed=\"-1\">Designer. Developer.</h2>\n  </div>\n  <div id=\"skills\" class=\"section section-sections\" data-background-color=\"gray\">\n    <div class=\"container\">\n      <div class=\"col-md-8 ml-auto mr-auto\">\n        <div class=\"section-description text-center\">\n          <h2 class=\"title\">Skills</h2>\n          <div class=\"filter-buttons\">\n            <button [disabled]=\"allSelected\" (click)=\"filterSkills('All')\"\n              class=\"btn btn-primary category-button\">All</button>\n            <button [disabled]=\"frontEndSelected\" (click)=\"filterSkills('Front-End')\"\n              class=\"btn btn-primary category-button\">Front-End</button>\n            <button [disabled]=\"backEndSelected\" (click)=\"filterSkills('Back-End')\"\n              class=\"btn btn-primary category-button\">Back-End</button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"container-fluid\">\n      <div class=\"section-cols\">\n        <div class=\"row\">\n          <ul class=\"skills-list\">\n            <li *ngFor=\"let skill of filteredSkills\" class=\"col-md-3 skill\">\n              <div class=\"card card-profile card-plain\">\n                <div class=\"card-image skill-image\">\n                  <div class=\"img img-raised rounded\">\n                    <img src=\"{{ skill.img }}\" />\n                  </div>\n                </div>\n                <div class=\"card-body\">\n                  <h4 class=\"card-title\">{{ skill.name }}</h4>\n                  <h6 class=\"category\">{{ skill.experience }}</h6>\n                  <button type=\"button\" (click)=\"filterSkills(skill.type)\"\n                    class=\"btn btn-primary btn-round category-button\">{{ skill.type }}</button>\n                </div>\n              </div>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div id=\"projects\" class=\"section section-examples\" data-background-color=\"black\">\n    <div class=\"container\">\n      <div class=\"col-md-8 ml-auto mr-auto text-center\">\n        <div class=\"section-description\">\n          <h2 class=\"title\">Projects</h2>\n        </div>\n      </div>\n      <div class=\"row\">\n        <p-timeline [value]=\"projects\" align=\"alternate\" styleClass=\"timeline-card\">\n          <ng-template pTemplate=\"marker\" let-project>\n            <span class=\"custom-marker p-shadow-2\" [style.backgroundColor]=\"markerColor\">\n              <i class=\"fas fa-code\"></i>\n            </span>\n            <!-- <small class=\"p-text-secondary\">{{ project.date }}</small> -->\n          </ng-template>\n          <ng-template pTemplate=\"opposite\" let-project>\n            <p-card [header]=\"project.name\" [subheader]=\"project.date\">\n              <p class=\"card-description\">{{ project.description }}</p>\n              <a [ngClass]=\"project.deployedUrl === null ? 'no-display' : null\" href=\"{{ project?.deployedUrl }}\" target=\"_blank\"><i v-b-tooltip.hover title=\"View deployed website in a new tab.\" class=\"fas fa-link\"></i></a>\n              <a href=\"{{ project?.githubUrl }}\" target=\"_blank\"><i v-b-tooltip.hover title=\"View GitHub repository in a new tab.\" class=\"fab fa-github\"></i></a>\n            </p-card>\n          </ng-template>\n        </p-timeline>\n      </div>\n    </div>\n  </div>\n  <div id=\"experience\" class=\"section section-sections\" data-background-color=\"gray\">\n    <div class=\"container\">\n      <div class=\"col-md-8 ml-auto mr-auto\">\n        <div class=\"section-description text-center\">\n          <h2 class=\"title\">Work History</h2>\n        </div>\n      </div>\n    </div>\n    <div class=\"container-fluid padded-container\">\n      <div class=\"section-cols\">\n        <div class=\"row\">\n          <app-work-history></app-work-history>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div id=\"resume\" class=\"section section-sections\" data-background-color=\"black\">\n    <div class=\"container\">\n      <div class=\"col-md-8 ml-auto mr-auto\">\n        <div class=\"section-description text-center\">\n          <h2 class=\"title\">Resume</h2>\n          <button pButton pRipple href=\"https://drive.google.com/file/d/1u9kupYDAdh7o_cYGaXCkmdJx4GBGFsRM/view\" target=\"_blank\" type=\"button\" label=\"Download Resume PDF\" class=\"p-button-raised p-button-danger\"></button>\n        </div>\n      </div>\n    </div>\n    <div class=\"container-fluid flex-container\">\n      <div class=\"section-cols\">\n        <div class=\"row \">\n          <div class=\"d-none d-lg-block\">\n            <iframe src=\"https://drive.google.com/file/d/1u9kupYDAdh7o_cYGaXCkmdJx4GBGFsRM/preview\"></iframe>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n<footer class=\"footer \" data-background-color=\"black\">\n  <div class=\"container\">\n    <nav>\n      <ul>\n        <li>\n          <a href=\"https://www.creative-tim.com\">\n            Creative Tim\n          </a>\n        </li>\n        <li>\n          <a href=\"https://www.creative-tim.com/about-us\">\n            About Us\n          </a>\n        </li>\n        <li>\n          <a href=\"http://blog.creative-tim.com\">\n            Blog\n          </a>\n        </li>\n        <li>\n          <a href=\"https://www.creative-tim.com/license\">\n            License\n          </a>\n        </li>\n      </ul>\n    </nav>\n    <div class=\"copyright\">\n      &copy;\n      {{date | date: 'yyyy'}}, Designed by\n      <a href=\"https://www.invisionapp.com\" target=\"_blank\">Invision</a>. Coded by\n      <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a>.\n    </div>\n  </div>\n</footer>\n</div>";
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/joshlevy/Desktop/joshlevy.tech/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0Inq":
    /*!*****************************************************************!*\
      !*** ./src/app/components/typography/typography.component.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function Inq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0eXBvZ3JhcGh5LmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "0n/F":
    /*!*********************************************************!*\
      !*** ./src/app/sections/headers/headers.component.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function nF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXJzLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "1E4i":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/notification/notification.component.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function E4i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div *ngFor=\"let alert of alerts\">\n    <ngb-alert [type]=\"alert.type\"  [dismissible]=\"false\" >\n        <div class=\"container\">\n            <div class=\"alert-wrapper\">\n                <button type=\"button\" name=\"button\" class=\"close\" (click)=\"closeAlert(alert)\">\n                  <span aria-hidden=\"true\">\n                      <i class=\"now-ui-icons ui-1_simple-remove\"></i>\n                  </span>\n                </button>\n                <div class=\"message\">\n                    <ng-container *ngIf=\"alert.icon\">\n                      <div class=\"alert-icon\">\n                          <i class=\"now-ui-icons {{alert.icon}}\"></i>\n                      </div>\n                    </ng-container>\n                    <strong>{{alert.strong}} </strong>{{ alert.message }}\n                </div>\n            </div>\n        </div>\n    </ngb-alert>\n</div>\n";
      /***/
    },

    /***/
    "1RpN":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/basicelements/basicelements.component.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function RpN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"section section-basic\">\n    <div class=\"container\">\n      <h3 class=\"title\">Basic Elements</h3>\n      <h4>Buttons</h4>\n      <p class=\"category\">Pick your style</p>\n      <div class=\"row\">\n          <div class=\"col-md-10\">\n              <button class=\"btn btn-primary\" type=\"button\">Default</button>\n              <button class=\"btn btn-primary btn-round\" type=\"button\">Round</button>\n              <button class=\"btn btn-primary btn-round\" type=\"button\">\n                  <i class=\"now-ui-icons ui-2_favourite-28\"></i> With Icon\n              </button>\n              <button class=\"btn btn-primary btn-icon btn-round\" type=\"button\">\n                  <i class=\"now-ui-icons ui-2_favourite-28\"></i>\n              </button>\n              <button class=\"btn btn-primary btn-simple btn-round\" type=\"button\">Simple</button>\n          </div>\n      </div>\n      <p class=\"category\">Pick your size</p>\n      <div class=\"row\">\n          <div class=\"col-md-10\">\n              <button class=\"btn btn-primary btn-sm\">Small</button>\n              <button class=\"btn btn-primary\">Regular</button>\n              <button class=\"btn btn-primary btn-lg\">Large</button>\n          </div>\n      </div>\n      <p class=\"category\">Pick your color</p>\n      <div class=\"row\">\n          <div class=\"col-md-10\">\n              <button class=\"btn\">Default</button>\n              <button class=\"btn btn-primary\">Primary</button>\n              <button class=\"btn btn-info\">Info</button>\n              <button class=\"btn btn-success\">Success</button>\n              <button class=\"btn btn-warning\">Warning</button>\n              <button class=\"btn btn-danger\">Danger</button>\n              <button class=\"btn btn-neutral\">Neutral</button>\n          </div>\n      </div>\n      <h4>Links</h4>\n      <div class=\"row\">\n          <div class=\"col-md-8\">\n              <button class=\"btn btn-link\">Default</button>\n              <button class=\"btn btn-link btn-primary \">Primary</button>\n              <button class=\"btn btn-link btn-info\">Info</button>\n              <button class=\"btn btn-link btn-success\">Success</button>\n              <button class=\"btn btn-link btn-warning\">Warning</button>\n              <button class=\"btn btn-link btn-danger\">Danger</button>\n          </div>\n      </div>\n      <!--                 social buttons\t\t         -->\n      <div id=\"social-buttons\">\n          <h4>Social Buttons</h4>\n          <div class=\"row\">\n              <div class=\"col-md-4 col-sm-5\">\n                  <p class=\"category\">Default</p>\n                  <button class=\"btn btn-twitter\">\n                      <i class=\"fa fa-twitter\"></i> Connect with Twitter\n                  </button>\n              </div>\n              <div class=\"col-md-1 col-sm-1\">\n                  <p class=\"category\">&nbsp;</p>\n                  <button class=\"btn btn-icon btn-twitter\">\n                      <i class=\"fa fa-twitter\"></i>\n                  </button>\n              </div>\n              <div class=\"col-md-1 col-sm-1\">\n                  <p class=\"category\">&nbsp;</p>\n                  <button class=\"btn btn-icon btn-round btn-twitter\">\n                      <i class=\"fa fa-twitter\"></i>\n                  </button>\n              </div>\n              <div class=\"col-md-1 col-sm-1\">\n                  <p class=\"category\">Neutral</p>\n                  <button class=\"btn btn-icon btn-neutral btn-twitter\">\n                      <i class=\"fa fa-twitter\"></i>\n                  </button>\n              </div>\n              <div class=\"col-md-3 col-sm-4\">\n                  <p class=\"category\">&nbsp;</p>\n                  <button class=\"btn btn-neutral btn-twitter\">\n                      <i class=\"fa fa-twitter\"></i> Connect with Twitter\n                  </button>\n              </div>\n          </div>\n          <div class=\"row\">\n              <div class=\"col-md-4 col-sm-5\">\n                  <button class=\"btn btn-facebook\">\n                      <i class=\"fa fa-facebook-square\"></i> Share · 2.2k\n                  </button>\n              </div>\n              <div class=\"col-md-1 col-sm-1\">\n                  <button class=\"btn btn-icon btn-facebook\">\n                      <i class=\"fa fa-facebook\"> </i>\n                  </button>\n              </div>\n              <div class=\"col-md-1 col-sm-1\">\n                  <button class=\"btn btn-icon btn-round btn-facebook\">\n                      <i class=\"fa fa-facebook\"> </i>\n                  </button>\n              </div>\n              <div class=\"col-md-1 col-sm-1\">\n                  <button class=\"btn btn-icon btn-neutral btn-facebook\">\n                      <i class=\"fa fa-facebook-square\"> </i>\n                  </button>\n              </div>\n              <div class=\"col-md-3 col-sm-4\">\n                  <button class=\"btn btn-neutral btn-facebook\">\n                      <i class=\"fa fa-facebook-square\"></i> Share · 2.2k\n                  </button>\n              </div>\n          </div>\n          <div class=\"row\">\n              <div class=\"col-md-4 col-sm-5\">\n                  <button class=\"btn btn-google\">\n                      <i class=\"fa fa-google\"></i> Share on Google+\n                  </button>\n              </div>\n              <div class=\"col-md-1 col-sm-1\">\n                  <button class=\"btn btn-icon  btn-google\">\n                      <i class=\"fa fa-google\"> </i>\n                  </button>\n              </div>\n              <div class=\"col-md-1 col-sm-1\">\n                  <button class=\"btn btn-icon btn-round btn-google\">\n                      <i class=\"fa fa-google\"> </i>\n                  </button>\n              </div>\n              <div class=\"col-md-1 col-sm-1\">\n                  <button class=\"btn btn-icon btn-neutral btn-google\">\n                      <i class=\"fa fa-google\"> </i>\n                  </button>\n              </div>\n              <div class=\"col-md-3 col-sm-4\">\n                  <button class=\"btn btn-neutral btn-google\">\n                      <i class=\"fa fa-google\"></i> Share on Google+\n                  </button>\n              </div>\n          </div>\n          <div class=\"row\">\n              <div class=\"col-md-4 col-sm-5\">\n                  <button class=\"btn btn-linkedin\">\n                      <i class=\"fa fa-linkedin-square\"></i> Connect with Linkedin\n                  </button>\n              </div>\n              <div class=\"col-md-1 col-sm-1\">\n                  <button class=\"btn btn-icon  btn-linkedin\">\n                      <i class=\"fa fa-linkedin\"></i>\n                  </button>\n              </div>\n              <div class=\"col-md-1 col-sm-1\">\n                  <button class=\"btn btn-icon btn-round btn-linkedin\">\n                      <i class=\"fa fa-linkedin\"></i>\n                  </button>\n              </div>\n              <div class=\"col-md-1 col-sm-1\">\n                  <button class=\"btn btn-icon btn-neutral btn-linkedin\">\n                      <i class=\"fa fa-linkedin-square\"></i>\n                  </button>\n              </div>\n              <div class=\"col-md-3 col-sm-4\">\n                  <button class=\"btn btn-neutral btn-linkedin\">\n                      <i class=\"fa fa-linkedin-square\"></i> Connect with Linkedin\n                  </button>\n              </div>\n          </div>\n          <div class=\"row\">\n              <div class=\"col-md-4 col-sm-5\">\n                  <button class=\"btn btn-pinterest\">\n                      <i class=\"fa fa-pinterest\"></i> Pint it · 212\n                  </button>\n              </div>\n              <div class=\"col-md-1 col-sm-1\">\n                  <button class=\"btn btn-icon btn-pinterest\">\n                      <i class=\"fa fa-pinterest\"></i>\n                  </button>\n              </div>\n              <div class=\"col-md-1 col-sm-1\">\n                  <button class=\"btn btn-icon btn-round btn-pinterest\">\n                      <i class=\"fa fa-pinterest\"></i>\n                  </button>\n              </div>\n              <div class=\"col-md-1 col-sm-1\">\n                  <button class=\"btn btn-icon btn-neutral btn-pinterest\">\n                      <i class=\"fa fa-pinterest\"></i>\n                  </button>\n              </div>\n              <div class=\"col-md-3 col-sm-4\">\n                  <button class=\"btn btn-neutral btn-pinterest\">\n                      <i class=\"fa fa-pinterest\"></i> Pint it · 212\n                  </button>\n              </div>\n          </div>\n          <div class=\"row\">\n              <div class=\"col-md-4 col-sm-5\">\n                  <button class=\"btn btn-youtube\">\n                      <i class=\"fa fa-youtube-play\"></i> View on Youtube\n                  </button>\n              </div>\n              <div class=\"col-md-1 col-sm-1\">\n                  <button class=\"btn btn-icon btn-youtube\">\n                      <i class=\"fa fa-youtube\"> </i>\n                  </button>\n              </div>\n              <div class=\"col-md-1 col-sm-1\">\n                  <button class=\"btn btn-icon btn-round btn-youtube\">\n                      <i class=\"fa fa-youtube\"> </i>\n                  </button>\n              </div>\n              <div class=\"col-md-1 col-sm-1\">\n                  <button class=\"btn btn-icon btn-neutral btn-youtube\">\n                      <i class=\"fa fa-youtube\"> </i>\n                  </button>\n              </div>\n              <div class=\"col-md-3 col-sm-4\">\n                  <button class=\"btn btn-neutral btn-youtube\">\n                      <i class=\"fa fa-youtube-play\"></i> View on Youtube\n                  </button>\n              </div>\n          </div>\n          <div class=\"row\">\n              <div class=\"col-md-4 col-sm-5\">\n                  <button class=\"btn btn-tumblr\">\n                      <i class=\"fa fa-tumblr-square\"></i> Repost\n                  </button>\n              </div>\n              <div class=\"col-md-1 col-sm-1\">\n                  <button class=\"btn btn-icon  btn-tumblr\">\n                      <i class=\"fa fa-tumblr\"> </i>\n                  </button>\n              </div>\n              <div class=\"col-md-1 col-sm-1\">\n                  <button class=\"btn btn-icon btn-round btn-tumblr\">\n                      <i class=\"fa fa-tumblr\"> </i>\n                  </button>\n              </div>\n              <div class=\"col-md-1 col-sm-1\">\n                  <button class=\"btn btn-icon btn-neutral btn-tumblr\">\n                      <i class=\"fa fa-tumblr-square\"> </i>\n                  </button>\n              </div>\n              <div class=\"col-md-3 col-sm-4\">\n                  <button class=\"btn btn-neutral btn-tumblr\">\n                      <i class=\"fa fa-tumblr-square\"></i> Repost\n                  </button>\n              </div>\n          </div>\n          <div class=\"row\">\n              <div class=\"col-md-4 col-sm-5\">\n                  <button class=\"btn btn-github\">\n                      <i class=\"fa fa-github\"></i> Connect with Github\n                  </button>\n              </div>\n              <div class=\"col-md-1 col-sm-1\">\n                  <button class=\"btn btn-icon  btn-github\">\n                      <i class=\"fa fa-github\"></i>\n                  </button>\n              </div>\n              <div class=\"col-md-1 col-sm-1\">\n                  <button class=\"btn btn-icon btn-round btn-github\">\n                      <i class=\"fa fa-github\"></i>\n                  </button>\n              </div>\n              <div class=\"col-md-1 col-sm-1\">\n                  <button class=\"btn btn-icon btn-neutral btn-github\">\n                      <i class=\"fa fa-github\"></i>\n                  </button>\n              </div>\n              <div class=\"col-md-3 col-sm-4\">\n                  <button class=\"btn btn-neutral btn-github\">\n                      <i class=\"fa fa-github\"></i> Connect with Github\n                  </button>\n              </div>\n          </div>\n          <div class=\"row\">\n              <div class=\"col-md-4 col-sm-5\">\n                  <button class=\"btn btn-behance\">\n                      <i class=\"fa fa-behance-square\"></i> Follow us\n                  </button>\n              </div>\n              <div class=\"col-md-1 col-sm-1\">\n                  <button class=\"btn btn-icon  btn-behance\">\n                      <i class=\"fa fa-behance\"></i>\n                  </button>\n              </div>\n              <div class=\"col-md-1 col-sm-1\">\n                  <button class=\"btn btn-icon btn-round btn-behance\">\n                      <i class=\"fa fa-behance\"></i>\n                  </button>\n              </div>\n              <div class=\"col-md-1 col-sm-1\">\n                  <button class=\"btn btn-icon btn-neutral btn-behance\">\n                      <i class=\"fa fa-behance\"></i>\n                  </button>\n              </div>\n              <div class=\"col-md-3 col-sm-4\">\n                  <button class=\"btn btn-neutral btn-behance\">\n                      <i class=\"fa fa-behance-square\"></i> Follow us\n                  </button>\n              </div>\n          </div>\n          <div class=\"row\">\n              <div class=\"col-md-4 col-sm-5\">\n                  <button class=\"btn btn-dribbble\">\n                      <i class=\"fa fa-dribbble\"></i> Find us on Dribble\n                  </button>\n              </div>\n              <div class=\"col-md-1 col-sm-1\">\n                  <button class=\"btn btn-icon  btn-dribbble\">\n                      <i class=\"fa fa-dribbble\"></i>\n                  </button>\n              </div>\n              <div class=\"col-md-1 col-sm-1\">\n                  <button class=\"btn btn-icon btn-round btn-dribbble\">\n                      <i class=\"fa fa-dribbble\"></i>\n                  </button>\n              </div>\n              <div class=\"col-md-1 col-sm-1\">\n                  <button class=\"btn btn-icon btn-neutral btn-dribbble\">\n                      <i class=\"fa fa-dribbble\"></i>\n                  </button>\n              </div>\n              <div class=\"col-md-3 col-sm-4\">\n                  <button class=\"btn btn-neutral btn-dribbble\">\n                      <i class=\"fa fa-dribbble\"></i> Find us on Dribble\n                  </button>\n              </div>\n          </div>\n          <div class=\"row\">\n              <div class=\"col-md-4 col-sm-5\">\n                  <button class=\"btn btn-reddit\">\n                      <i class=\"fa fa-reddit\"></i> Repost · 232\n                  </button>\n              </div>\n              <div class=\"col-md-1 col-sm-1\">\n                  <button class=\"btn btn-icon  btn-reddit\">\n                      <i class=\"fa fa-reddit\"></i>\n                  </button>\n              </div>\n              <div class=\"col-md-1 col-sm-1\">\n                  <button class=\"btn btn-icon btn-round btn-reddit\">\n                      <i class=\"fa fa-reddit\"></i>\n                  </button>\n              </div>\n              <div class=\"col-md-1 col-sm-1\">\n                  <button class=\"btn btn-icon btn-neutral btn-reddit\">\n                      <i class=\"fa fa-reddit\"></i>\n                  </button>\n              </div>\n              <div class=\"col-md-3 col-sm-4\">\n                  <button class=\"btn btn-neutral btn-reddit\">\n                      <i class=\"fa fa-reddit\"></i> Repost · 232\n                  </button>\n              </div>\n          </div>\n      </div>\n      <!--                 end social buttons -->\n      <div class=\"space-70\"></div>\n      <div id=\"inputs\">\n          <h4>Inputs</h4>\n          <p class=\"category\">Form Controls</p>\n          <div class=\"row\">\n              <div class=\"col-sm-6 col-lg-3\">\n                  <div class=\"form-group\">\n                      <input type=\"text\" value=\"\" placeholder=\"Regular\" class=\"form-control\" />\n                  </div>\n              </div>\n              <div class=\"col-sm-6 col-lg-3\">\n                  <div class=\"form-group has-success\">\n                      <input type=\"text\" value=\"Success\" class=\"form-control form-control-success\" />\n                  </div>\n              </div>\n              <div class=\"col-sm-6 col-lg-3\">\n                  <div class=\"form-group has-danger\">\n                      <input type=\"email\" value=\"Error Input\" class=\"form-control form-control-danger\" />\n                  </div>\n              </div>\n              <div class=\"col-sm-6 col-lg-3\">\n                  <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                    <div class=\"input-group-prepend\" >\n                        <span class=\"input-group-text\"><i class=\"fa fa-user-circle\"></i></span>\n                    </div>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Left Font Awesome Icon\" (focus)=\"focus=true\" (blur)=\"focus=false\" >\n                  </div>\n              </div>\n              <div class=\"col-sm-6 col-lg-3\">\n                  <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus1===true}\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Right Nucleo Icon\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\n                    <div class=\"input-group-append\">\n                        <span class=\"input-group-text\"><i class=\"now-ui-icons users_single-02\"></i></span>\n                    </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class=\"space-70\"></div>\n      <div class=\"select\">\n          <div class=\"row\">\n              <div class=\"col-md-6\">\n                  <div class=\"title\">\n                      <h4>Customizable Select</h4>\n                  </div>\n                  <div class=\"row\">\n                      <div class=\"col-lg-6 col-md-8 col-sm-5\">\n                        <angular2-multiselect [data]=\"dropdownList1\" [(ngModel)]=\"selectedItems1\"\n                            [settings]=\"dropdownSettings1\"\n                            (onSelect)=\"onItemSelect($event)\"\n                            (onDeSelect)=\"OnItemDeSelect($event)\"\n                            (onSelectAll)=\"onSelectAll($event)\"\n                            (onDeSelectAll)=\"onDeSelectAll($event)\">\n                        </angular2-multiselect>\n                      </div>\n                      <div class=\"col-lg-6 col-md-8 col-sm-5\">\n                        <angular2-multiselect [data]=\"dropdownList\" [(ngModel)]=\"selectedItems\"\n                            [settings]=\"dropdownSettings\"\n                            (onSelect)=\"onItemSelect($event)\"\n                            (onDeSelect)=\"OnItemDeSelect($event)\"\n                            (onSelectAll)=\"onSelectAll($event)\"\n                            (onDeSelectAll)=\"onDeSelectAll($event)\">\n                        </angular2-multiselect>\n                      </div>\n                  </div>\n              </div>\n              <div class=\"col-md-4\">\n                  <div class=\"title\">\n                      <h4>Dropdown & Dropup</h4>\n                  </div>\n                  <div class=\"row\">\n                      <div class=\"col-lg-5 col-md-8\">\n                        <div ngbDropdown class=\"dropdown\">\n                            <button class=\"btn btn-primary btn-round dropdown-toggle\" ngbDropdownToggle>Dropdown</button>\n                            <div ngbDropdownMenu>\n                              <a class=\"dropdown-item\" href=\"#\">Action</a>\n                              <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                            </div>\n                        </div>\n                      </div>\n                      <div class=\"col-lg-5 col-md-8\">\n                          <div ngbDropdown placement=\"top-right\" class=\"d-inline-block\">\n                            <button class=\"btn btn-primary btn-round dropdown-toggle\" id=\"dropdownBasic2\" ngbDropdownToggle>Toggle dropup</button>\n                            <div ngbDropdownMenu aria-labelledby=\"dropdownBasic2\">\n                              <a class=\"dropdown-item\" href=\"#\">Action</a>\n                              <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                            </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <!--                 end select -->\n      <div class=\"space-70\"></div>\n      <div id=\"textareaTags\">\n          <div class=\"row\">\n              <div class=\"col-md-6\">\n                  <div class=\"title\">\n                      <h4>Textarea</h4>\n                  </div>\n                  <textarea class=\"form-control\" name=\"name\" rows=\"4\" cols=\"80\" placeholder=\"You can write your text here...\"></textarea>\n              </div>\n              <div class=\"col-md-6\">\n                  <div class=\"title\">\n                      <h4>Tags</h4>\n                  </div>\n                  <tag-input [(ngModel)]='tagItems' theme='regular-theme'></tag-input>\n                  <!-- You can change data-color=\"rose\" with one of our colors primary | warning | info | danger | success -->\n              </div>\n          </div>\n      </div>\n      <div class=\"space-70\"></div>\n      <div class=\"row\" id=\"checkRadios\">\n          <div class=\"col-sm-6 col-lg-3\">\n              <p class=\"category\">Checkboxes</p>\n              <div class=\"form-check\">\n                  <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"checkbox\">\n                      <span class=\"form-check-sign\"></span>\n                      Unchecked\n                  </label>\n              </div>\n              <div class=\"form-check\">\n                  <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"checkbox\" checked>\n                      <span class=\"form-check-sign\"></span>\n                      Checked\n                  </label>\n              </div>\n              <div class=\"form-check disabled\">\n                  <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"checkbox\" disabled>\n                      <span class=\"form-check-sign\"></span>\n                      Disabled Unchecked\n                  </label>\n              </div>\n              <div class=\"form-check disabled\">\n                  <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"checkbox\" checked disabled>\n                      <span class=\"form-check-sign\"></span>\n                      Disabled Checked\n                  </label>\n              </div>\n          </div>\n          <div class=\"col-sm-6 col-lg-3\">\n              <p class=\"category\">Radios</p>\n              <div class=\"form-check form-check-radio\">\n                  <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option1\">\n                      <span class=\"form-check-sign\"></span>\n                      Radio is off\n                  </label>\n              </div>\n              <div class=\"form-check form-check-radio\">\n                  <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option2\" checked>\n                      <span class=\"form-check-sign\"></span>\n                      Radio is on\n                  </label>\n              </div>\n              <div class=\"form-check form-check-radio disabled\">\n                  <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios1\" id=\"exampleRadios2\" value=\"option3\" disabled>\n                      <span class=\"form-check-sign\"></span>\n                      Disabled radio is off\n                  </label>\n              </div>\n              <div class=\"form-check form-check-radio disabled\">\n                  <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios1\" id=\"exampleRadios2\" value=\"option4\" disabled checked>\n                      <span class=\"form-check-sign\"></span>\n                      Disabled radio is on\n                  </label>\n              </div>\n          </div>\n          <div class=\"col-sm-6 col-lg-3\">\n              <p class=\"category\">Toggle Buttons</p>\n              <bSwitch\n                  [(ngModel)]=\"state\">\n              </bSwitch>\n              <bSwitch> Toggle is off\n              </bSwitch>\n          </div>\n          <div class=\"col-sm-6 col-lg-3\">\n              <p class=\"category\">Sliders</p>\n              <nouislider class=\"slider\" [min]=\"0\" [max]=\"100\" [step]=\"1\" [(ngModel)]=\"simpleSlider\" [tooltips]=\"true\"></nouislider>\n              <br>\n              <nouislider class=\"slider slider-primary\" [connect]=\"true\" [min]=\"0\" [max]=\"100\" [step]=\"1\" [(ngModel)]=\"doubleSlider\" [tooltips]=\"true\"></nouislider>\n          </div>\n      </div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "28Sn":
    /*!*****************************************************************!*\
      !*** ./src/app/sections/testimonials/testimonials.component.ts ***!
      \*****************************************************************/

    /*! exports provided: TestimonialsComponent */

    /***/
    function Sn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TestimonialsComponent", function () {
        return TestimonialsComponent;
      });
      /* harmony import */


      var _raw_loader_testimonials_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./testimonials.component.html */
      "gdyp");
      /* harmony import */


      var _testimonials_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./testimonials.component.scss */
      "6k9h");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var TestimonialsComponent = /*#__PURE__*/function () {
        function TestimonialsComponent() {
          _classCallCheck(this, TestimonialsComponent);
        }

        _createClass(TestimonialsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TestimonialsComponent;
      }();

      TestimonialsComponent.ctorParameters = function () {
        return [];
      };

      TestimonialsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-testimonials',
        template: _raw_loader_testimonials_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_testimonials_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [])], TestimonialsComponent);
      /***/
    },

    /***/
    "3MQB":
    /*!*********************************************************!*\
      !*** ./src/app/examples/pricing/pricing.component.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function MQB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmljaW5nLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "3PY5":
    /*!*************************************************************!*\
      !*** ./src/app/examples/contactus/contactus.component.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function PY5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0dXMuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "3QTt":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sections/contacts/contacts.component.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function QTt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<div class=\"cd-section\" id=\"contact-us\">\n    <!--     *********    CONTACT US 1     *********      -->\n    <div class=\"contactus-1 section-image\" style=\"background-image: url('assets/img/contact1.jpg')\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-5\">\n                    <h2 class=\"title\">Get in Touch</h2>\n                    <h4 class=\"description\">You need more information? Check what other persons are saying about our product. They are very happy with their purchase.</h4>\n                    <div class=\"info info-horizontal\">\n                        <div class=\"icon icon-primary\">\n                            <i class=\"now-ui-icons location_pin\"></i>\n                        </div>\n                        <div class=\"description\">\n                            <h4 class=\"info-title\">Find us at the office</h4>\n                            <p class=\"description\"> Bld Mihail Kogalniceanu, nr. 8,\n                                <br> 7652 Bucharest,\n                                <br> Romania\n                            </p>\n                        </div>\n                    </div>\n                    <div class=\"info info-horizontal\">\n                        <div class=\"icon icon-primary\">\n                            <i class=\"now-ui-icons tech_mobile\"></i>\n                        </div>\n                        <div class=\"description\">\n                            <h4 class=\"info-title\">Give us a ring</h4>\n                            <p class=\"description\"> Michael Jordan\n                                <br> +40 762 321 762\n                                <br> Mon - Fri, 8:00-22:00\n                            </p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-5 ml-auto mr-auto\">\n                    <div class=\"card card-contact card-raised\">\n                        <form role=\"form\" id=\"contact-form\" method=\"post\">\n                            <div class=\"card-header text-center\">\n                                <h4 class=\"card-title\">Contact Us</h4>\n                            </div>\n                            <div class=\"card-body\">\n                                <div class=\"row\">\n                                    <div class=\"col-md-6 pr-2\">\n                                        <label>First name</label>\n                                        <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                                          <div class=\"input-group-prepend\">\n                                              <span class=\"input-group-text\"><i class=\"now-ui-icons users_circle-08\"></i></span>\n                                          </div>\n                                            <input type=\"text\" class=\"form-control\" placeholder=\"First Name...\" (focus)=\"focus=true\" (blur)=\"focus=false\">\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-6 pl-2\">\n                                        <div class=\"form-group\">\n                                            <label>Last name</label>\n                                            <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus1===true}\">\n                                              <div class=\"input-group-prepend\">\n                                                  <span class=\"input-group-text\"><i class=\"now-ui-icons text_caps-small\"></i></span>\n                                              </div>\n                                                <input type=\"text\" placeholder=\"Last Name...\" class=\"form-control\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label>Email address</label>\n                                    <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus2===true}\">\n                                      <div class=\"input-group-prepend\">\n                                          <span class=\"input-group-text\"><i class=\"now-ui-icons ui-1_email-85\"></i></span>\n                                      </div>\n                                        <input type=\"email\" placeholder=\"Email Here...\" class=\"form-control\" (focus)=\"focus2=true\" (blur)=\"focus2=false\">\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label>Your message</label>\n                                    <textarea name=\"message\" class=\"form-control\" id=\"message\" rows=\"6\"></textarea>\n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"col-md-6\">\n                                      <div class=\"form-check\">\n                                          <label class=\"form-check-label\">\n                                              <input class=\"form-check-input\" type=\"checkbox\">\n                                              <span class=\"form-check-sign\"></span>\n                                              I'm not a robot\n                                          </label>\n                                      </div>\n                                    </div>\n                                    <div class=\"col-md-6\">\n                                        <button type=\"submit\" class=\"btn btn-primary btn-round pull-right\">Send Message</button>\n                                    </div>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END CONTACT US 1      *********      -->\n    <!--     *********    CONTACT US 2     *********      -->\n    <div class=\"contactus-2\">\n        <div id=\"contactUsMap\" class=\"map\">\n            <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [styles]=\"styles\">\n                <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n            </agm-map>\n        </div>\n        <div class=\"col-lg-6 col-md-10\">\n            <div class=\"card card-contact card-raised\">\n                <form role=\"form\" id=\"contact-form1\" method=\"post\">\n                    <div class=\"card-header text-center\">\n                        <h4 class=\"card-title\">Contact Us</h4>\n                    </div>\n                    <div class=\"card-body\">\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <div class=\"info info-horizontal\">\n                                    <div class=\"icon icon-primary\">\n                                        <i class=\"now-ui-icons tech_mobile\"></i>\n                                    </div>\n                                    <div class=\"description\">\n                                        <h5 class=\"info-title\">Give us a ring</h5>\n                                        <p> Michael Jordan\n                                            <br> +40 762 321 762\n                                            <br> Mon - Fri, 8:00-22:00\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <div class=\"info info-horizontal\">\n                                    <div class=\"icon icon-primary\">\n                                        <i class=\"now-ui-icons location_pin\"></i>\n                                    </div>\n                                    <div class=\"description\">\n                                        <h5 class=\"info-title\">Find us at the office</h5>\n                                        <p> Bld Mihail Kogalniceanu, nr. 8,\n                                            <br> 7652 Bucharest,\n                                            <br> Romania\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-6 pr-2\">\n                                <label>Full name</label>\n                                <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus3===true}\">\n                                  <div class=\"input-group-prepend\">\n                                      <span class=\"input-group-text\"><i class=\"now-ui-icons users_circle-08\"></i></span>\n                                  </div>\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"First Name...\"   (focus)=\"focus3=true\" (blur)=\"focus3=false\">\n                                </div>\n                            </div>\n                            <div class=\"col-md-6 pl-2\">\n                                <label>Email address</label>\n                                <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus4===true}\">\n                                  <div class=\"input-group-prepend\">\n                                      <span class=\"input-group-text\"><i class=\"now-ui-icons ui-1_email-85\"></i></span>\n                                  </div>\n                                    <input type=\"email\" placeholder=\"Email Here...\" class=\"form-control\"   (focus)=\"focus4=true\" (blur)=\"focus4=false\">\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                              <div class=\"form-check\">\n                                  <label class=\"form-check-label\">\n                                      <input class=\"form-check-input\" type=\"checkbox\">\n                                      <span class=\"form-check-sign\"></span>\n                                      I'm not a robot\n                                  </label>\n                              </div>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <button type=\"submit\" class=\"btn btn-primary btn-round pull-right\">Send Message</button>\n                            </div>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END CONTACT US 2      *********      -->\n</div>\n";
      /***/
    },

    /***/
    "4R/m":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/typography/typography.component.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function RM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"section\">\n    <div class=\"container\">\n        <h3 class=\"title\">Typography</h3>\n        <div id=\"typography\">\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div class=\"typography-line\">\n                        <h1>\n                            <span>Header 1</span>The Life of Now UI Kit </h1>\n                    </div>\n                    <div class=\"typography-line\">\n                        <h2>\n                            <span>Header 2</span>The Life of Now UI Kit</h2>\n                    </div>\n                    <div class=\"typography-line\">\n                        <h3>\n                            <span>Header 3</span>The Life of Now UI Kit</h3>\n                    </div>\n                    <div class=\"typography-line\">\n                        <h4>\n                            <span>Header 4</span>The Life of Now UI Kit</h4>\n                    </div>\n                    <div class=\"typography-line\">\n                        <h5>\n                            <span>Header 5</span>The Life of Now UI Kit</h5>\n                    </div>\n                    <div class=\"typography-line\">\n                        <h6>\n                            <span>Header 6</span>The Life of Now UI Kit</h6>\n                    </div>\n                    <div class=\"typography-line\">\n                        <p>\n                            <span>Paragraph</span>\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\n                        </p>\n                    </div>\n                    <div class=\"typography-line\">\n                        <span>Quote</span>\n                        <blockquote>\n                            <p class=\"blockquote blockquote-primary\">\n                                \"I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\"\n                                <br>\n                                <br>\n                                <small>\n                                    - Noaa\n                                </small>\n                            </p>\n                        </blockquote>\n                    </div>\n                    <div class=\"typography-line\">\n                        <span>Muted Text</span>\n                        <p class=\"text-muted\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...\n                        </p>\n                    </div>\n                    <div class=\"typography-line\">\n                        <span>Primary Text</span>\n                        <p class=\"text-primary\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>\n                    </div>\n                    <div class=\"typography-line\">\n                        <span>Info Text</span>\n                        <p class=\"text-info\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n                    </div>\n                    <div class=\"typography-line\">\n                        <span>Success Text</span>\n                        <p class=\"text-success\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n                    </div>\n                    <div class=\"typography-line\">\n                        <span>Warning Text</span>\n                        <p class=\"text-warning\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...\n                        </p>\n                    </div>\n                    <div class=\"typography-line\">\n                        <span>Danger Text</span>\n                        <p class=\"text-danger\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n                    </div>\n                    <div class=\"typography-line\">\n                        <h2>\n                            <span>Small Tag</span>\n                            Header with small subtitle\n                            <br>\n                            <small>Use \"small\" tag for the headers</small>\n                        </h2>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"space-50\"></div>\n        <div id=\"images\">\n            <h4>Images</h4>\n            <div class=\"row\">\n                <div class=\"col-sm-2\">\n                    <p class=\"category\">Image</p>\n                    <img src=\"assets/img/julie.jpg\" alt=\"Rounded Image\" class=\"rounded\">\n                </div>\n                <div class=\"col-sm-2\">\n                    <p class=\"category\">Circle Image</p>\n                    <img src=\"assets/img/julie.jpg\" alt=\"Circle Image\" class=\"rounded-circle\">\n                </div>\n                <div class=\"col-sm-2\">\n                    <p class=\"category\">Raised</p>\n                    <img src=\"assets/img/julie.jpg\" alt=\"Raised Image\" class=\"rounded img-raised\">\n                </div>\n                <div class=\"col-sm-2\">\n                    <p class=\"category\">Circle Raised</p>\n                    <img src=\"assets/img/julie.jpg\" alt=\"Thumbnail Image\" class=\"rounded-circle img-raised\">\n                </div>\n            </div>\n        </div>\n      </div>\n    </div>\n";
      /***/
    },

    /***/
    "4V5e":
    /*!*********************************************************************!*\
      !*** ./src/app/components/tables-areas/tables-areas.component.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function V5e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJsZXMtYXJlYXMuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "4Wxn":
    /*!***********************************************************************!*\
      !*** ./src/app/components/basicelements/basicelements.component.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function Wxn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYXNpY2VsZW1lbnRzLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "5QX9":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/examples/login/login.component.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function QX9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"page-header\" filter-color=\"orange\">\n    <div class=\"page-header-image\" style=\"background-image:url(assets/img/login.jpg)\"></div>\n    <div class=\"content-center\">\n        <div class=\"container\">\n            <div class=\"col-md-4 content-center\">\n                <div class=\"card card-login card-plain\">\n                    <form class=\"form\" method=\"\" action=\"\">\n                        <div class=\"card-header text-center\">\n                            <div class=\"logo-container\">\n                                <img src=\"assets/img/now-logo.png\" alt=\"\">\n                            </div>\n                        </div>\n                        <div class=\"card-body\">\n                            <div class=\"input-group form-group-no-border input-lg\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                              <div class=\"input-group-prepend\">\n                                  <span class=\"input-group-text\">  <i class=\"now-ui-icons users_circle-08\"></i></span>\n                              </div>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"First Name...\" (focus)=\"focus=true\" (blur)=\"focus=false\" >\n                            </div>\n                            <div class=\"input-group form-group-no-border input-lg\" [ngClass]=\"{'input-group-focus':focus1===true}\">\n                              <div class=\"input-group-prepend\">\n                                  <span class=\"input-group-text\"><i class=\"now-ui-icons text_caps-small\"></i></span>\n                              </div>\n                                <input type=\"text\" placeholder=\"Last Name...\" class=\"form-control\" (focus)=\"focus1=true\" (blur)=\"focus1=false\"/>\n                            </div>\n                        </div>\n                        <div class=\"card-footer text-center\">\n                            <a href=\"#\" class=\"btn btn-primary btn-round btn-lg btn-block\">Get Started</a>\n                        </div>\n                        <div class=\"pull-left\">\n                            <h6>\n                                <a href=\"#\" class=\"link footer-link\">Create Account</a>\n                            </h6>\n                        </div>\n                        <div class=\"pull-right\">\n                            <h6>\n                                <a href=\"#\" class=\"link footer-link\">Need Help?</a>\n                            </h6>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n    <footer class=\"footer \">\n        <div class=\"container\">\n            <nav>\n                <ul>\n                    <li>\n                        <a href=\"https://www.josh-levy.com\">\n                            Josh Levy\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"https://www.josh-levy.com/about-us\">\n                            About Us\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"http://blog.josh-levy.com\">\n                            Blog\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"https://www.josh-levy.com/license\">\n                            License\n                        </a>\n                    </li>\n                </ul>\n            </nav>\n            <div class=\"copyright\">\n                &copy;\n                {{data | date: 'yyyy'}}, Designed by\n                <a href=\"https://www.invisionapp.com\" target=\"_blank\">Invision</a>. Coded by\n                <a href=\"https://www.josh-levy.com\" target=\"_blank\">Josh Levy</a>.\n            </div>\n        </div>\n    </footer>\n</div>\n";
      /***/
    },

    /***/
    "5v2N":
    /*!*********************************************************************!*\
      !*** ./src/app/components/work-history/work-history.component.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function v2N(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3b3JrLWhpc3RvcnkuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "6cdP":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/examples/register/register.component.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function cdP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"page-header section-image\">\n    <div class=\"page-header-image\" style=\"background-image:url(assets/img/bg18.jpg)\"></div>\n    <div class=\"content\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-4 ml-auto mr-auto\">\n                    <div class=\"info info-horizontal\">\n                        <div class=\"icon icon-primary\">\n                            <i class=\"now-ui-icons media-2_sound-wave\"></i>\n                        </div>\n                        <div class=\"description\">\n                            <h5 class=\"info-title\">Marketing</h5>\n                            <p class=\"description\">\n                                We've created the marketing campaign of the website. It was a very interesting collaboration.\n                            </p>\n                        </div>\n                    </div>\n                    <div class=\"info info-horizontal\">\n                        <div class=\"icon icon-primary\">\n                            <i class=\"now-ui-icons media-1_button-pause\"></i>\n                        </div>\n                        <div class=\"description\">\n                            <h5 class=\"info-title\">Fully Coded in HTML5</h5>\n                            <p class=\"description\">\n                                We've developed the website with HTML5 and CSS3. The client has access to the code using GitHub.\n                            </p>\n                        </div>\n                    </div>\n                    <div class=\"info info-horizontal\">\n                        <div class=\"icon icon-info\">\n                            <i class=\"now-ui-icons users_single-02\"></i>\n                        </div>\n                        <div class=\"description\">\n                            <h5 class=\"info-title\">Built Audience</h5>\n                            <p class=\"description\">\n                                There is also a Fully Customizable CMS Admin Dashboard for this product.\n                            </p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4 mr-auto\">\n                    <div class=\"card card-signup\">\n                        <div class=\"card-body\">\n                            <h4 class=\"card-title text-center\">Register</h4>\n                            <div class=\"social text-center\">\n                                <button class=\"btn btn-icon btn-round btn-twitter\">\n                                    <i class=\"fa fa-twitter\"></i>\n                                </button>\n                                <button class=\"btn btn-icon btn-round btn-dribbble\">\n                                    <i class=\"fa fa-dribbble\"></i>\n                                </button>\n                                <button class=\"btn btn-icon btn-round btn-facebook\">\n                                    <i class=\"fa fa-facebook\"> </i>\n                                </button>\n                                <h5 class=\"card-description\"> or be classical </h5>\n                            </div>\n                            <form class=\"form\" method=\"\" action=\"\">\n                                <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                                  <div class=\"input-group-prepend\">\n                                      <span class=\"input-group-text\">  <i class=\"now-ui-icons users_circle-08\"></i></span>\n                                  </div>\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"First Name...\" (focus)=\"focus=true\" (blur)=\"focus=false\">\n                                </div>\n                                <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus1===true}\">\n                                  <div class=\"input-group-prepend\">\n                                      <span class=\"input-group-text\">  <i class=\"now-ui-icons text_caps-small\"></i></span>\n                                  </div>\n                                    <input type=\"text\" placeholder=\"Last Name...\" class=\"form-control\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\n                                </div>\n                                <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus2===true}\">\n                                  <div class=\"input-group-prepend\">\n                                      <span class=\"input-group-text\"> <i class=\"now-ui-icons ui-1_email-85\"></i></span>\n                                  </div>\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Email...\" (focus)=\"focus2=true\" (blur)=\"focus2=false\">\n                                </div>\n                                <!-- If you want to add a checkbox to this form, uncomment this code -->\n                                <div class=\"form-check\">\n                                    <label class=\"form-check-label\">\n                                        <input class=\"form-check-input\" type=\"checkbox\">\n                                        <span class=\"form-check-sign\"></span>\n                                        I agree to the terms and\n                                        <a href=\"#something\">conditions</a>.\n                                    </label>\n                                </div>\n                                <div class=\"card-footer text-center\">\n                                    <a href=\"#\" class=\"btn btn-primary btn-round btn-lg\">Get Started</a>\n                                </div>\n                            </form>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <footer class=\"footer \">\n        <div class=\"container\">\n            <nav>\n                <ul>\n                    <li>\n                        <a href=\"https://www.josh-levy.com\">\n                            Josh Levy\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"https://www.josh-levy.com/about-us\">\n                            About Us\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"http://blog.josh-levy.com\">\n                            Blog\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"https://www.josh-levy.com/license\">\n                            License\n                        </a>\n                    </li>\n                </ul>\n            </nav>\n            <div class=\"copyright\">\n                &copy;\n                {{data | date: 'yyyy'}}, Designed by\n                <a href=\"https://www.invisionapp.com\" target=\"_blank\">Invision</a>. Coded by\n                <a href=\"https://www.josh-levy.com\" target=\"_blank\">Josh Levy</a>.\n            </div>\n        </div>\n    </footer>\n</div>\n";
      /***/
    },

    /***/
    "6k9h":
    /*!*******************************************************************!*\
      !*** ./src/app/sections/testimonials/testimonials.component.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function k9h(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXN0aW1vbmlhbHMuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "71yw":
    /*!**********************************************************!*\
      !*** ./src/app/presentation/presentation.component.scss ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function yw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".skills-list {\n  list-style-type: none !important;\n  padding: 0 !important;\n  display: flex !important;\n  flex-wrap: wrap;\n  margin-bottom: 100px !important;\n}\n\n.skill-image {\n  height: 300px !important;\n  display: flex !important;\n  justify-content: center !important;\n  align-items: center !important;\n  background-color: #fff !important;\n  transition: all 0.4s ease 0s !important;\n}\n\n.skill-image:hover {\n  transition: all 0.4s ease 0s !important;\n  transform: scale(1.02);\n}\n\n.skill-image .img {\n  height: 300px !important;\n  display: flex !important;\n  justify-content: center !important;\n  align-items: center !important;\n  width: 100% !important;\n  background-color: #fff !important;\n  transition: none !important;\n}\n\n.skill-image .img:hover {\n  transition: none !important;\n  transform: none !important;\n}\n\n.skill-image .img img {\n  height: 100% !important;\n  width: auto !important;\n  display: flex !important;\n  justify-content: center !important;\n  align-items: center !important;\n  padding: 30px !important;\n  background-color: #fff !important;\n  transition: none !important;\n  box-shadow: none;\n}\n\n.skill-image .img img:hover {\n  transition: none !important;\n  transform: none !important;\n  box-shadow: none;\n}\n\n.card-title {\n  font-size: 1.75em !important;\n  font-weight: 700 !important;\n}\n\n.category {\n  font-size: 1.1em !important;\n  font-weight: 700 !important;\n  color: #666 !important;\n}\n\n.category-button {\n  font-size: 1em !important;\n  font-weight: 700 !important;\n  margin-top: 0px !important;\n  background-color: #ae0001 !important;\n}\n\n.card-description {\n  color: #222 !important;\n}\n\n.p-text-secondary {\n  color: #fff !important;\n  font-size: 16px !important;\n  font-weight: 700 !important;\n}\n\n.p-timeline-event {\n  min-height: 300px !important;\n  height: 300px !important;\n}\n\n.timeline-card {\n  margin-bottom: 30px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3ByZXNlbnRhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtBQUNGOztBQUVBO0VBQ0Usd0JBQUE7RUFDQSx3QkFBQTtFQUNBLGtDQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQ0FBQTtFQUNBLHVDQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1Q0FBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx3QkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0NBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUNBQUE7RUFDQSwyQkFBQTtBQUNGOztBQUVBO0VBQ0UsMkJBQUE7RUFDQSwwQkFBQTtBQUNGOztBQUVBO0VBQ0UsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0NBQUE7RUFDQSw4QkFBQTtFQUNBLHdCQUFBO0VBQ0EsaUNBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLDRCQUFBO0VBQ0EsMkJBQUE7QUFDRjs7QUFFQTtFQUNFLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0Esb0NBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7QUFDRjs7QUFFQTtFQUNFLDRCQUFBO0VBQ0Esd0JBQUE7QUFDRjs7QUFFQTtFQUNFLDhCQUFBO0FBQ0YiLCJmaWxlIjoicHJlc2VudGF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNraWxscy1saXN0IHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbi1ib3R0b206IDEwMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5za2lsbC1pbWFnZSB7XG4gIGhlaWdodDogMzAwcHggIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZSAwcyAhaW1wb3J0YW50O1xufVxuXG4uc2tpbGwtaW1hZ2U6aG92ZXIge1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlIDBzICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XG59XG5cbi5za2lsbC1pbWFnZSAuaW1nIHtcbiAgaGVpZ2h0OiAzMDBweCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5za2lsbC1pbWFnZSAuaW1nOmhvdmVyIHtcbiAgdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnNraWxsLWltYWdlIC5pbWcgaW1nIHtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAzMHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uc2tpbGwtaW1hZ2UgLmltZyBpbWc6aG92ZXIge1xuICB0cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS43NWVtICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcbn1cblxuLmNhdGVnb3J5IHtcbiAgZm9udC1zaXplOiAxLjFlbSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNjY2ICFpbXBvcnRhbnQ7XG59XG5cbi5jYXRlZ29yeS1idXR0b24ge1xuICBmb250LXNpemU6IDFlbSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWUwMDAxICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkLWRlc2NyaXB0aW9uIHtcbiAgY29sb3I6ICMyMjIgIWltcG9ydGFudDtcbn1cblxuLnAtdGV4dC1zZWNvbmRhcnkge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xufVxuXG4ucC10aW1lbGluZS1ldmVudCB7XG4gIG1pbi1oZWlnaHQ6IDMwMHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMzAwcHggIWltcG9ydGFudDtcbn1cblxuLnRpbWVsaW5lLWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4ICFpbXBvcnRhbnQ7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "73mm":
    /*!*******************************************************!*\
      !*** ./src/app/examples/pricing/pricing.component.ts ***!
      \*******************************************************/

    /*! exports provided: PricingComponent */

    /***/
    function mm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PricingComponent", function () {
        return PricingComponent;
      });
      /* harmony import */


      var _raw_loader_pricing_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./pricing.component.html */
      "b6Wu");
      /* harmony import */


      var _pricing_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pricing.component.scss */
      "3MQB");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rellax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rellax */
      "HbP6");
      /* harmony import */


      var rellax__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rellax__WEBPACK_IMPORTED_MODULE_3__);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var PricingComponent = /*#__PURE__*/function () {
        function PricingComponent() {
          _classCallCheck(this, PricingComponent);

          this.data = new Date();
        }

        _createClass(PricingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var rellaxHeader = new rellax__WEBPACK_IMPORTED_MODULE_3__('.rellax-header');
            var body = document.getElementsByTagName('body')[0];
            body.classList.add('pricing');
            var navbar = document.getElementsByTagName('nav')[0];
            navbar.classList.add('navbar-transparent');
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var body = document.getElementsByTagName('body')[0];
            body.classList.remove('pricing');
            var navbar = document.getElementsByTagName('nav')[0];
            navbar.classList.remove('navbar-transparent');
          }
        }]);

        return PricingComponent;
      }();

      PricingComponent.ctorParameters = function () {
        return [];
      };

      PricingComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-pricing',
        template: _raw_loader_pricing_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_pricing_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [])], PricingComponent);
      /***/
    },

    /***/
    "7aL3":
    /*!*****************************************************!*\
      !*** ./src/app/components/modal/modal.component.ts ***!
      \*****************************************************/

    /*! exports provided: NgbdModalBasic */

    /***/
    function aL3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgbdModalBasic", function () {
        return NgbdModalBasic;
      });
      /* harmony import */


      var _raw_loader_modal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./modal.component.html */
      "P6R5");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var NgbdModalBasic = /*#__PURE__*/function () {
        function NgbdModalBasic(modalService) {
          _classCallCheck(this, NgbdModalBasic);

          this.modalService = modalService;
        }

        _createClass(NgbdModalBasic, [{
          key: "open",
          value: function open(content, type, modalDimension) {
            var _this = this;

            if (modalDimension === 'sm' && type === 'modal_mini') {
              this.modalService.open(content, {
                windowClass: 'modal-mini modal-primary',
                size: 'sm'
              }).result.then(function (result) {
                _this.closeResult = "Closed with: ".concat(result);
              }, function (reason) {
                _this.closeResult = "Dismissed ".concat(_this.getDismissReason(reason));
              });
            } else if (modalDimension === 'md' && type === 'Login') {
              this.modalService.open(content, {
                windowClass: 'modal-login modal-primary'
              }).result.then(function (result) {
                _this.closeResult = "Closed with: ".concat(result);
              }, function (reason) {
                _this.closeResult = "Dismissed ".concat(_this.getDismissReason(reason));
              });
            } else {
              this.modalService.open(content).result.then(function (result) {
                _this.closeResult = "Closed with: ".concat(result);
              }, function (reason) {
                _this.closeResult = "Dismissed ".concat(_this.getDismissReason(reason));
              });
            }
          }
        }, {
          key: "getDismissReason",
          value: function getDismissReason(reason) {
            if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
              return 'by pressing ESC';
            } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
              return 'by clicking on a backdrop';
            } else {
              return "with: ".concat(reason);
            }
          }
        }]);

        return NgbdModalBasic;
      }();

      NgbdModalBasic.ctorParameters = function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]
        }];
      };

      NgbdModalBasic = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ngbd-modal-component',
        template: _raw_loader_modal_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
      }), __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])], NgbdModalBasic);
      /***/
    },

    /***/
    "7nRJ":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/prefooter-areas/prefooter-areas.component.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function nRJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"section section-pre-footer\" data-background-color=\"gray\">\n    <div id=\"pre-footer-areas\">\n        <div class=\"container\">\n            <div class=\"title\">\n                <h3>Pre-Footer Areas</h3>\n            </div>\n        </div>\n        <!--     *********    SIMPLE SOCIAL LINE     *********      -->\n        <div class=\"social-line social-line-white text-center\">\n            <div class=\"container\">\n                <div class=\"row justify-content-center\">\n                    <div class=\"col-md-12\">\n                        <h4 class=\"title\">Thank you for your support!</h4>\n                    </div>\n                    <a href=\"#\" class=\"btn btn-twitter btn-round\">\n                        <i class=\"fa fa-twitter\"></i> Twitter · 2.5k\n                    </a>\n                    <a href=\"#\" class=\"btn btn-facebook btn-round\">\n                        <i class=\"fa fa-facebook-square\"></i> Facebook · 3.2k\n                    </a>\n                    <a href=\"#\" class=\"btn btn-google btn-round\">\n                        <i class=\"fa fa-google-plus\"></i> Google · 1.2k\n                    </a>\n                    <a href=\"#\" class=\"btn btn-dribbble btn-round\">\n                        <i class=\"fa fa-dribbble\"></i> Dribbble · 1.8k\n                    </a>\n                </div>\n            </div>\n        </div>\n        <!--     *********   SIMPLE SOCIAL LINE     *********      -->\n        <br>\n        <br>\n        <!--     *********    SIMPLE SOCIAL LINE     *********      -->\n        <div class=\"social-line social-line-big-icons social-line-white\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-2\">\n                        <a href=\"#\" class=\"btn btn-neutral btn-icon btn-twitter btn-footer\">\n                            <i class=\"fa fa-twitter\"></i>\n                        </a>\n                    </div>\n                    <div class=\"col-md-2\">\n                        <a href=\"#\" class=\"btn btn-neutral btn-icon btn-facebook btn-footer\">\n                            <i class=\"fa fa-facebook-square\"></i>\n                        </a>\n                    </div>\n                    <div class=\"col-md-2\">\n                        <a href=\"#\" class=\"btn btn-neutral btn-icon btn-google btn-footer\">\n                            <i class=\"fa fa-google-plus\"></i>\n                        </a>\n                    </div>\n                    <div class=\"col-md-2\">\n                        <a href=\"#\" class=\"btn btn-neutral btn-icon btn-dribbble btn-footer\">\n                            <i class=\"fa fa-dribbble\"></i>\n                        </a>\n                    </div>\n                    <div class=\"col-md-2\">\n                        <a href=\"#\" class=\"btn btn-neutral btn-icon btn-youtube btn-footer\">\n                            <i class=\"fa fa-youtube-play\"></i>\n                        </a>\n                    </div>\n                    <div class=\"col-md-2\">\n                        <a href=\"#\" class=\"btn btn-neutral btn-icon btn-instagram btn-footer\">\n                            <i class=\"fa fa-instagram\"></i>\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!--     *********   SIMPLE SOCIAL LINE     *********      -->\n        <br>\n        <br>\n        <!--     *********    SIMPLE BLACK SOCIAL LINE     *********      -->\n        <div class=\"social-line social-line-big-icons social-line-black\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-2\">\n                        <a href=\"#\" class=\"btn btn-simple btn-icon btn-footer\">\n                            <i class=\"fa fa-twitter\"></i>\n                        </a>\n                    </div>\n                    <div class=\"col-md-2\">\n                        <a href=\"#\" class=\"btn btn-simple btn-icon btn-footer\">\n                            <i class=\"fa fa-facebook-square\"></i>\n                        </a>\n                    </div>\n                    <div class=\"col-md-2\">\n                        <a href=\"#\" class=\"btn btn-simple btn-icon btn-footer\">\n                            <i class=\"fa fa-google-plus\"></i>\n                        </a>\n                    </div>\n                    <div class=\"col-md-2\">\n                        <a href=\"#\" class=\"btn btn-simple btn-icon btn-footer\">\n                            <i class=\"fa fa-dribbble\"></i>\n                        </a>\n                    </div>\n                    <div class=\"col-md-2\">\n                        <a href=\"#\" class=\"btn btn-simple btn-icon btn-footer\">\n                            <i class=\"fa fa-youtube-play\"></i>\n                        </a>\n                    </div>\n                    <div class=\"col-md-2\">\n                        <a href=\"#\" class=\"btn btn-simple btn-icon btn-footer\">\n                            <i class=\"fa fa-instagram\"></i>\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <br>\n        <br>\n        <!--     *********   SIMPLE BLACK SOCIAL LINE     *********      -->\n        <br>\n        <br>\n        <!--     *********    SIMPLE SUBSCRIBE LINE     *********      -->\n        <div class=\"subscribe-line subscribe-line-white\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <h4 class=\"title\">Get Tips &amp; Tricks every Week!</h4>\n                        <p class=\"description\">\n                            Join our newsletter and get news in your inbox every week! We hate spam too, so no worries about this.\n                        </p>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"card card-plain card-form-horizontal\">\n                            <div class=\"card-content\">\n                                <form method=\"\" action=\"\">\n                                    <div class=\"row\">\n                                        <div class=\"col-sm-8\">\n                                            <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                                              <div class=\"input-group-prepend\">\n                                                  <span class=\"input-group-text\"><i class=\"now-ui-icons ui-1_email-85\"></i></span>\n                                              </div>\n                                                <input type=\"email\" class=\"form-control\" placeholder=\"Your Email...\"   (focus)=\"focus=true\" (blur)=\"focus=false\">\n                                            </div>\n                                        </div>\n                                        <div class=\"col-sm-4\">\n                                            <button type=\"button\" class=\"btn btn-primary btn-round btn-block\">Subscribe</button>\n                                        </div>\n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!--     *********   SIMPLE SUBSCRIBE LINE     *********      -->\n        <br>\n        <br>\n        <!--     *********    IMAGE SUBSCRIBE LINE     *********      -->\n        <div class=\"subscribe-line subscribe-line-image\" style=\"background-image: url('assets/img/bg7.jpg');\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-6 ml-auto mr-auto\">\n                        <div class=\"text-center\">\n                            <h4 class=\"title\">Subscribe to our Newsletter</h4>\n                            <p class=\"description\">\n                                Join our newsletter and get news in your inbox every week! We hate spam too, so no worries about this.\n                            </p>\n                        </div>\n                        <div class=\"card card-raised card-form-horizontal\">\n                            <div class=\"card-body\">\n                                <form method=\"\" action=\"\">\n                                    <div class=\"row\">\n                                        <div class=\"col-sm-8\">\n                                            <div class=\"input-group\"   [ngClass]=\"{'input-group-focus':focus1===true}\">\n                                              <div class=\"input-group-prepend\">\n                                                  <span class=\"input-group-text\">  <i class=\"now-ui-icons ui-1_email-85\"></i></span>\n                                              </div>\n                                                <input type=\"email\" class=\"form-control\" placeholder=\"Your Email...\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\n                                            </div>\n                                        </div>\n                                        <div class=\"col-sm-4\">\n                                            <button type=\"button\" class=\"btn btn-primary btn-round btn-block\">Subscribe</button>\n                                        </div>\n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!--     *********   IMAGE SUBSCRIBE LINE     *********      -->\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "7pPp":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function pPp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"section section-navbars\">\n    <div class=\"container\" id=\"menu-dropdown\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <h4>Menu</h4>\n                <nav class=\"navbar navbar-expand-lg bg-primary\">\n                    <div class=\"container\">\n                        <a class=\"navbar-brand\" href=\"#\">Menu</a>\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-bar bar1\"></span>\n                            <span class=\"navbar-toggler-bar bar2\"></span>\n                            <span class=\"navbar-toggler-bar bar3\"></span>\n                        </button>\n                        <div class=\"collapse navbar-collapse\" id=\"example-navbar\" data-nav-image=\"assets/img/blurred-image-1.jpg\">\n                            <ul class=\"navbar-nav\">\n                                <li class=\"nav-item active\">\n                                    <a class=\"nav-link\" href=\"#\">\n                                        <p>Link</p>\n                                    </a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"#\">\n                                        <p>Link</p>\n                                    </a>\n                                </li>\n                                <li class=\"nav-item\">\n                                  <div ngbDropdown class=\"dropdown\">\n                                      <a class=\"nav-link dropdown-toggle\" ngbDropdownToggle>\n                                        <p>\n                                            Dropdown\n                                        </p>\n                                      </a>\n                                      <div ngbDropdownMenu class=\"dropdown-menu\">\n                                        <a class=\"dropdown-item\" href=\"#\">Action</a>\n                                        <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                                        <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                                      </div>\n                                  </div>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                </nav>\n            </div>\n            <div class=\"col-md-6\">\n                <h4>Menu with Icons</h4>\n                <nav class=\"navbar navbar-expand-lg bg-info\">\n                    <div class=\"container\">\n                        <a class=\"navbar-brand\" href=\"#\">Icons</a>\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-icons\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-bar bar1\"></span>\n                            <span class=\"navbar-toggler-bar bar2\"></span>\n                            <span class=\"navbar-toggler-bar bar3\"></span>\n                        </button>\n                        <div class=\"collapse navbar-collapse\" id=\"example-navbar-icons\">\n                            <ul class=\"navbar-nav ml-auto\">\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"#\"><i class=\"now-ui-icons ui-1_send\" aria-hidden=\"true\"></i></a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"#\"><i class=\"now-ui-icons users_single-02\" aria-hidden=\"true\"></i></a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <div ngbDropdown class=\"dropdown\">\n                                        <a class=\"nav-link dropdown-toggle\" ngbDropdownToggle>\n                                            <i class=\"now-ui-icons ui-1_settings-gear-63\"></i>\n                                        </a>\n                                        <div ngbDropdownMenu class=\"dropdown-menu dropdown-menu-right\">\n                                            <div class=\"dropdown-header\">Dropdown header</div>\n                                            <a class=\"dropdown-item\">Action</a>\n                                            <a class=\"dropdown-item\">Another action</a>\n                                            <a class=\"dropdown-item\">Something else here</a>\n                                            <div class=\"dropdown-divider\"></div>\n                                            <a class=\"dropdown-item\">Separated link</a>\n                                            <div class=\"dropdown-divider\"></div>\n                                            <a class=\"dropdown-item\">Another separated link</a>\n                                        </div>\n                                    </div>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                </nav>\n            </div>\n        </div>\n        <h4>Navigation</h4>\n    </div>\n    <div id=\"navbar\">\n        <div class=\"navigation-example\" style=\"background-image:url('assets/img/bg7.jpg')\">\n            <!-- Navbar Primary  -->\n            <nav class=\"navbar navbar-expand-lg bg-primary\">\n                <div class=\"container\">\n                    <div class=\"navbar-translate\">\n                        <a class=\"navbar-brand\" href=\"#\">Primary color</a>\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-primary\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-bar bar1\"></span>\n                            <span class=\"navbar-toggler-bar bar2\"></span>\n                            <span class=\"navbar-toggler-bar bar3\"></span>\n                        </button>\n                    </div>\n                    <div class=\"collapse navbar-collapse\" id=\"example-navbar-primary\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item active\">\n                                <a class=\"nav-link\" href=\"#\">\n                                    <i class=\"now-ui-icons objects_globe\"></i>\n                                    <p>Discover</p>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\">\n                                    <i class=\"now-ui-icons users_circle-08\"></i>\n                                    <p>Profile</p>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\">\n                                    <i class=\"now-ui-icons ui-1_settings-gear-63\"></i>\n                                    <p>Settings</p>\n                                </a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <!-- End Navbar Primary -->\n            <!-- Navbar Info -->\n            <nav class=\"navbar navbar-expand-lg bg-info\">\n                <div class=\"container\">\n                    <div class=\"navbar-translate\">\n                        <a class=\"navbar-brand\" href=\"#\">Info Color</a>\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-info\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-bar bar1\"></span>\n                            <span class=\"navbar-toggler-bar bar2\"></span>\n                            <span class=\"navbar-toggler-bar bar3\"></span>\n                        </button>\n                    </div>\n                    <div class=\"collapse navbar-collapse\" id=\"example-navbar-info\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item active\">\n                                <a class=\"nav-link\" href=\"#\">\n                                    <p>Discover</p>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\">\n                                    <p>Profile</p>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\">\n                                    <p>Settings</p>\n                                </a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <!-- End Navbar Info -->\n            <!-- Navbar Success -->\n            <nav class=\"navbar navbar-expand-lg bg-success\">\n                <div class=\"container\">\n                    <div class=\"navbar-translate\">\n                        <a class=\"navbar-brand\" href=\"#\">Success Color</a>\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-success\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-bar bar1\"></span>\n                            <span class=\"navbar-toggler-bar bar2\"></span>\n                            <span class=\"navbar-toggler-bar bar3\"></span>\n                        </button>\n                    </div>\n                    <div class=\"collapse navbar-collapse\" id=\"example-navbar-success\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item active\">\n                                <a class=\"nav-link\" href=\"#\">\n                                    <i class=\"now-ui-icons objects_globe\"></i>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\">\n                                    <i class=\"now-ui-icons users_circle-08\"></i>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\">\n                                    <i class=\"now-ui-icons ui-1_settings-gear-63\"></i>\n                                </a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <!-- End Navbar Success -->\n            <!-- Navbar Warning -->\n            <nav class=\"navbar navbar-expand-lg bg-warning\">\n                <div class=\"container\">\n                    <div class=\"navbar-translate\">\n                        <a class=\"navbar-brand\" href=\"#\">Warning Color</a>\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-warning\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-bar bar1\"></span>\n                            <span class=\"navbar-toggler-bar bar2\"></span>\n                            <span class=\"navbar-toggler-bar bar3\"></span>\n                        </button>\n                    </div>\n                    <div class=\"collapse navbar-collapse\" id=\"example-navbar-warning\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\">\n                                    <i class=\"fa fa-facebook-square\"></i>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\">\n                                    <i class=\"fa fa-twitter\"></i>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\">\n                                    <i class=\"fa fa-google-plus\"></i>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\">\n                                    <i class=\"fa fa-instagram\"></i>\n                                </a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <!-- End Navbar Warning -->\n            <!-- Navbar Danger -->\n            <nav class=\"navbar navbar-expand-lg bg-danger\">\n                <div class=\"container\">\n                    <div class=\"navbar-translate\">\n                        <a class=\"navbar-brand\" href=\"#\">Danger Color</a>\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-danger\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-bar bar1\"></span>\n                            <span class=\"navbar-toggler-bar bar2\"></span>\n                            <span class=\"navbar-toggler-bar bar3\"></span>\n                        </button>\n                    </div>\n                    <div class=\"collapse navbar-collapse\" id=\"example-navbar-danger\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\">\n                                    <i class=\"fa fa-facebook-square\"></i>\n                                    <p>Share</p>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\">\n                                    <i class=\"fa fa-twitter\"></i>\n                                    <p>Tweet</p>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\">\n                                    <i class=\"fa fa-pinterest\"></i>\n                                    <p>Pin</p>\n                                </a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <!-- End Navbar Danger -->\n            <!-- Navbar Transparent -->\n            <nav class=\"navbar navbar-expand-lg navbar-transparent\">\n                <div class=\"container\">\n                    <div class=\"navbar-translate\">\n                        <a class=\"navbar-brand\" href=\"#\">Transparent</a>\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-transparent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-bar bar1\"></span>\n                            <span class=\"navbar-toggler-bar bar2\"></span>\n                            <span class=\"navbar-toggler-bar bar3\"></span>\n                        </button>\n                    </div>\n                    <div class=\"collapse navbar-collapse\" id=\"example-navbar-transparent\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\">\n                                    <i class=\"fa fa-facebook-square\"></i>\n                                    <p>Facebook</p>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\">\n                                    <i class=\"fa fa-twitter\"></i>\n                                    <p>Twitter</p>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\">\n                                    <i class=\"fa fa-instagram\"></i>\n                                    <p>Instagram</p>\n                                </a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <!-- End Navbar Transparent-->\n        </div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "93si":
    /*!****************************************************!*\
      !*** ./src/app/components/components.component.ts ***!
      \****************************************************/

    /*! exports provided: ComponentsComponent */

    /***/
    function si(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComponentsComponent", function () {
        return ComponentsComponent;
      });
      /* harmony import */


      var _raw_loader_components_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./components.component.html */
      "NPo9");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var ComponentsComponent = /*#__PURE__*/function () {
        function ComponentsComponent(renderer, config) {
          _classCallCheck(this, ComponentsComponent);

          this.renderer = renderer;
          this.data = new Date();
          this.page = 4;
          this.page1 = 5;
          this.page2 = 3;
          this.isCollapsed = true;
          this.isCollapsed1 = true;
          this.isCollapsed2 = true;
          this.state_icon_primary = true;
          config.closeOthers = true;
        }

        _createClass(ComponentsComponent, [{
          key: "isWeekend",
          value: function isWeekend(date) {
            var d = new Date(date.year, date.month - 1, date.day);
            return d.getDay() === 0 || d.getDay() === 6;
          }
        }, {
          key: "isDisabled",
          value: function isDisabled(date, current) {
            return date.month !== current.month;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var navbar = document.getElementsByTagName('nav')[0];
            navbar.classList.add('navbar-transparent');
            var body = document.getElementsByTagName('body')[0];
            body.classList.add('index-page');
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var navbar = document.getElementsByTagName('nav')[0];
            navbar.classList.remove('navbar-transparent');
            var body = document.getElementsByTagName('body')[0];
            body.classList.remove('index-page');
          }
        }]);

        return ComponentsComponent;
      }();

      ComponentsComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAccordionConfig"]
        }];
      };

      ComponentsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-components',
        template: _raw_loader_components_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: ["\n    ngb-progressbar {\n        margin-top: 5rem;\n    }\n    "]
      }), __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAccordionConfig"]])], ComponentsComponent);
      /***/
    },

    /***/
    "9GRG":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/examples/landing/landing.component.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function GRG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"wrapper\">\n    <div class=\"page-header page-header-small\">\n        <div class=\"page-header-image rellax-header\" data-rellax-speed=\"-8\" style=\"background-image: url('assets/img/bg26.jpg');\">\n        </div>\n        <div class=\"content-center\">\n            <h1 class=\"title\">This is our great company.</h1>\n            <div class=\"text-center\">\n                <a href=\"#\" class=\"btn btn-primary btn-icon  btn-round\">\n                    <i class=\"fa fa-facebook-square\"></i>\n                </a>\n                <a href=\"#\" class=\"btn btn-primary btn-icon btn-round\">\n                    <i class=\"fa fa-twitter\"></i>\n                </a>\n                <a href=\"#\" class=\"btn btn-primary btn-icon btn-round\">\n                    <i class=\"fa fa-google-plus\"></i>\n                </a>\n            </div>\n        </div>\n    </div>\n    <div class=\"section section-about-us\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                    <h2 class=\"title\">Who we are?</h2>\n                    <h5 class=\"description\">According to the National Oceanic and Atmospheric Administration, Ted, Scambos, NSIDClead scentist, puts the potentially record low maximum sea ice extent tihs year down to low ice extent in the Pacific and a late drop in ice extent in the Barents Sea.</h5>\n                </div>\n            </div>\n            <div class=\"separator separator-primary\"></div>\n            <div class=\"section-story-overview\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <!-- First image on the left side -->\n                        <div class=\"image-container image-left\" style=\"background-image: url('assets/img/bg38.jpg')\">\n                            <p class=\"blockquote blockquote-primary\">\"Over the span of the satellite record, Arctic sea ice has been declining significantly, while sea ice in the Antarctichas increased very slightly\"\n                                <br>\n                                <br>\n                                <small>-NOAA</small>\n                            </p>\n                        </div>\n                        <!-- Second image on the left side of the article -->\n                        <div class=\"image-container image-left-bottom\" style=\"background-image: url('assets/img/bg24.jpg')\"></div>\n                    </div>\n                    <div class=\"col-md-5\">\n                        <!-- First image on the right side, above the article -->\n                        <div class=\"image-container image-right\" style=\"background-image: url('assets/img/bg39.jpg')\"></div>\n                        <h3>So what does the new record for the lowest level of winter ice actually mean</h3>\n                        <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens with climate change. Even if the Arctic continues to be one of the fastest-warming regions of the world, it will always be plunged into bitterly cold polar dark every winter. And year-by-year, for all kinds of natural reasons, there’s huge variety of the state of the ice.\n                        </p>\n                        <p>\n                            For a start, it does not automatically follow that a record amount of ice will melt this summer. More important for determining the size of the annual thaw is the state of the weather as the midnight sun approaches and temperatures rise. But over the more than 30 years of satellite records, scientists have observed a clear pattern of decline, decade-by-decade.\n                        </p>\n                        <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens with climate change. Even if the Arctic continues to be one of the fastest-warming regions of the world, it will always be plunged into bitterly cold polar dark every winter. And year-by-year, for all kinds of natural reasons, there’s huge variety of the state of the ice.\n                        </p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"testimonials-1 section-image\" style=\"background-image: url('assets/img/bg19.jpg')\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-6 ml-auto mr-auto text-center\">\n                    <h2 class=\"title\">What is ALPHA?</h2>\n                    <h4 class=\"description text-white\">If you’re selected for ALPHA you’ll also get 3 tickets, opportunity to access Investor Office Hours and Mentor Hours and much more all for €850.</h4>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <div class=\"card card-testimonial\">\n                        <div class=\"card-avatar\">\n                            <a href=\"#\">\n                                <img class=\"img img-raised\" src=\"assets/img/michael.jpg\">\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <p class=\"card-description\">\n                                The networking at Web Summit is like no other European tech conference.\n                            </p>\n                        </div>\n                        <div class=\"icon icon-primary\">\n                            <i class=\"fa fa-quote-right\"></i>\n                        </div>\n                        <div class=\"card-footer\">\n                            <h4 class=\"card-title\">Michael Elijah</h4>\n                            <p class=\"category\">@michaelelijah</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"card card-testimonial\">\n                        <div class=\"card-avatar\">\n                            <a href=\"#\">\n                                <img class=\"img img-raised\" src=\"assets/img/olivia.jpg\">\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <p class=\"card-description\">\n                                The connections you make at Web Summit are unparalleled, we met users all over the world.\n                            </p>\n                        </div>\n                        <div class=\"icon icon-primary\">\n                            <i class=\"fa fa-quote-right\"></i>\n                        </div>\n                        <div class=\"card-footer\">\n                            <h4 class=\"card-title\">Olivia Harper</h4>\n                            <p class=\"category\">@oliviaharper</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"card card-testimonial\">\n                        <div class=\"card-avatar\">\n                            <a href=\"#\">\n                                <img class=\"img img-raised\" src=\"assets/img/james.jpg\">\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <p class=\"card-description\">\n                                Web Summit will increase your appetite, your inspiration, and your network.\n                            </p>\n                        </div>\n                        <div class=\"icon icon-primary\">\n                            <i class=\"fa fa-quote-right\"></i>\n                        </div>\n                        <div class=\"card-footer\">\n                            <h4 class=\"card-title\">James Logan</h4>\n                            <p class=\"category\">@jameslogan</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"pricing-2\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-6 ml-auto mr-auto text-center\">\n                    <h2 class=\"title\">Pick the best plan for you</h2>\n                    <ngb-tabset type=\"pills\" class=\"nav nav-pills nav-pills-primary justify-content-center\">\n                        <ngb-tab title=\"Legal Entity\">\n                            <ng-template ngbTabContent>\n                            </ng-template>\n                        </ngb-tab>\n                        <ngb-tab title=\"Individual\">\n                            <ng-template ngbTabContent>\n                            </ng-template>\n                        </ngb-tab>\n                    </ngb-tabset>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <div class=\"card card-pricing card-plain\">\n                        <div class=\"card-body\">\n                            <h6 class=\"category\">Enterprise</h6>\n                            <h1 class=\"card-title\">\n                                <small>$</small>59</h1>\n                            <ul>\n                                <li>\n                                    <b>10GB</b> Disk Space</li>\n                                <li>\n                                    <b>100GB</b> Monthly Bandwidth</li>\n                                <li>\n                                    <b>20</b> Email Accounts</li>\n                                <li>\n                                    <b>Unlimited</b> subdomains</li>\n                            </ul>\n                            <a href=\"#\" class=\"btn btn-primary btn-round\">\n                                Sign Up\n                            </a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"card card-pricing card-background card-raised\" style=\"background-image: url('assets/img/pricing2.jpg')\">\n                        <div class=\"card-body\">\n                            <h6 class=\"category text-info\">Professional</h6>\n                            <h1 class=\"card-title\">\n                                <small>$</small>29</h1>\n                            <ul>\n                                <li>\n                                    <b>5GB</b> Disk Space</li>\n                                <li>\n                                    <b>50GB</b> Monthly Bandwidth</li>\n                                <li>\n                                    <b>10</b> Email Accounts</li>\n                                <li>\n                                    <b>Unlimited</b> subdomains</li>\n                            </ul>\n                            <a href=\"#\" class=\"btn btn-neutral btn-round\">\n                                Sign Up\n                            </a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"card card-pricing card-plain\">\n                        <div class=\"card-body\">\n                            <h6 class=\"category\">Standard</h6>\n                            <h1 class=\"card-title\">\n                                <small>$</small>17</h1>\n                            <ul>\n                                <li>\n                                    <b>2GB</b> Disk Space</li>\n                                <li>\n                                    <b>25GB</b> Monthly Bandwidth</li>\n                                <li>\n                                    <b>5</b> Email Accounts</li>\n                                <li>\n                                    <b>Unlimited</b> subdomains</li>\n                            </ul>\n                            <a href=\"#\" class=\"btn btn-primary btn-round\">\n                                Get Started\n                            </a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"section section-contact-us text-center\">\n        <div class=\"container\">\n            <h2 class=\"title\">Want to work with us?</h2>\n            <p class=\"description\">Your project is very important to us.</p>\n            <div class=\"row\">\n                <div class=\"col-lg-6 text-center ml-auto mr-auto col-md-8\">\n                    <div class=\"input-group input-lg\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                      <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\"><i class=\"now-ui-icons users_circle-08\"></i></span>\n                      </div>\n                        <input type=\"text\" class=\"form-control\" placeholder=\"First Name...\" (focus)=\"focus=true\" (blur)=\"focus=false\">\n                    </div>\n                    <div class=\"input-group input-lg\" [ngClass]=\"{'input-group-focus':focus1===true}\">\n                      <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\"><i class=\"now-ui-icons ui-1_email-85\"></i></span>\n                      </div>\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Email...\"   (focus)=\"focus1=true\" (blur)=\"focus1=false\">\n                    </div>\n                    <div class=\"textarea-container\">\n                        <textarea class=\"form-control\" name=\"name\" rows=\"4\" cols=\"80\" placeholder=\"Type a message...\"></textarea>\n                    </div>\n                    <div class=\"send-button\">\n                        <a href=\"#\" class=\"btn btn-primary btn-round btn-block btn-lg\">Send Message</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <footer class=\"footer footer-default \">\n        <div class=\"container\">\n            <nav>\n                <ul>\n                    <li>\n                        <a href=\"https://www.josh-levy.com\">\n                            Josh Levy\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"https://www.josh-levy.com/about-us\">\n                            About Us\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"http://blog.josh-levy.com\">\n                            Blog\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"https://www.josh-levy.com/license\">\n                            License\n                        </a>\n                    </li>\n                </ul>\n            </nav>\n            <div class=\"copyright\">\n                  © {{data | date: 'yyyy'}}, Designed by\n                <a href=\"https://www.invisionapp.com\" target=\"_blank\">Invision</a>. Coded by\n                <a href=\"https://www.josh-levy.com\" target=\"_blank\">Josh Levy</a>.\n            </div>\n        </div>\n    </footer>\n</div>\n";
      /***/
    },

    /***/
    "9ai6":
    /*!*******************************************!*\
      !*** ./src/app/services/skill.service.ts ***!
      \*******************************************/

    /*! exports provided: SkillService */

    /***/
    function ai6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SkillService", function () {
        return SkillService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../environments/environment */
      "AytR");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      }; // const httpOptions = {
      //   headers: new HttpHeaders({
      //     'X-Parse-Application-Id': parseKeys.PARSE_APP_ID,
      //     'X-Parse-REST-API-Key': parseKeys.PARSE_REST_API_KEY,
      //     'Content-Type':  'application/json'
      //   })
      // };


      var apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;

      var SkillService = /*#__PURE__*/function () {
        function SkillService(http) {
          _classCallCheck(this, SkillService);

          this.http = http;
        }

        _createClass(SkillService, [{
          key: "getSkills",
          value: function getSkills() {
            var url = "".concat(apiUrl, "/skills");
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              return res;
            }));
          }
        }, {
          key: "addSkill",
          value: function addSkill() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
            var url = "".concat(apiUrl, "/skills");
            return this.http.post(url, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              console.log(res);
              return res;
            }));
          }
        }]);

        return SkillService;
      }();

      SkillService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
        }];
      };

      SkillService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])], SkillService);
      /***/
    },

    /***/
    "9iB8":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/examples/blogposts/blogposts.component.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function iB8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"wrapper\">\n    <div class=\"page-header page-header-small\">\n        <div class=\"page-header-image rellax-header\" data-rellax-speed=\"-8\" style=\"background-image: url('assets/img/bg44.jpg') ;\">\n        </div>\n        <div class=\"content-center\">\n            <div class=\"row\">\n                <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                    <h2 class=\"title\">A Place for Entrepreneurs to Share and Discover New Stories</h2>\n                    <a href=\"#button\" class=\"btn btn-primary btn-round  btn-icon\">\n                        <i class=\"fa fa-twitter\"></i>\n                    </a>\n                    <a href=\"#button\" class=\"btn btn-primary btn-round  btn-icon\">\n                        <i class=\"fa fa-instagram\"></i>\n                    </a>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"projects-4\">\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-md-6 px-0\">\n                    <div class=\"card card-fashion card-background\" style=\"background-image: url('assets/img/project10.jpg')\">\n                        <div class=\"card-body\">\n                            <div class=\"card-title text-left\">\n                                <h2>\n                                    <a href=\"#\">\n                                        The world's biggest yacht sets sail. It has lasers.\n                                    </a>\n                                </h2>\n                            </div>\n                            <div class=\"card-footer text-left\">\n                                <div class=\"stats\">\n                                    <span>\n                                        <i class=\"now-ui-icons users_circle-08\"></i>Nicholas Deleon\n                                    </span>\n                                    <span>\n                                        <i class=\"now-ui-icons tech_watch-time\"></i> June 2, 2017\n                                    </span>\n                                </div>\n                                <div class=\"stats-link pull-right\">\n                                    <a href=\"#\" class=\"footer-link\">Yachts</a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-3 px-0\">\n                    <div class=\"card card-fashion\">\n                        <div class=\"card-title\">\n                            <a href=\"#\">\n                                <h4>\n                                    <a href=\"#\">\n                                        Why Early Sailors Were Stalled for Millennia in the...\n                                    </a>\n                                </h4>\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <div class=\"card-footer\">\n                                <div class=\"stats\">\n                                    <span>\n                                        <i class=\"now-ui-icons users_circle-08\"></i>Jon Russell\n                                    </span>\n                                    <span>\n                                        <i class=\"now-ui-icons tech_watch-time\"></i> June 2, 2017\n                                    </span>\n                                </div>\n                                <div class=\"stats-link pull-right\">\n                                    <a href=\"#\">Sea</a>&sbquo;\n                                    <a href=\"#\">Magazine</a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-3 px-0\">\n                    <div class=\"card card-fashion card-background\" style=\"background-image: url('assets/img/project11.jpg')\">\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-3 px-0\">\n                    <div class=\"card card-fashion card-background\" style=\"background-image: url('assets/img/project12.jpg')\">\n                    </div>\n                </div>\n                <div class=\"col-md-3 px-0\">\n                    <div class=\"card card-fashion arrow-left\">\n                        <div class=\"card-title\">\n                            <h4>\n                                <a href=\"#\">\n                                    My Depressing Summers in Belize\n                                </a>\n                            </h4>\n                        </div>\n                        <div class=\"card-body\">\n                            <div class=\"card-footer\">\n                                <div class=\"stats\">\n                                    <span>\n                                        <i class=\"now-ui-icons users_circle-08\"></i>John Bruno\n                                    </span>\n                                    <span>\n                                        <i class=\"now-ui-icons tech_watch-time\"></i> June 2, 2017\n                                    </span>\n                                </div>\n                                <div class=\"stats-link pull-right\">\n                                    <a href=\"#\">Opinion</a>&sbquo;\n                                    <a href=\"#\">Outdoor</a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6 px-0\">\n                    <div class=\"card card-fashion card-background\" style=\"background-image: url('assets/img/project13.jpg')\">\n                        <div class=\"card-body\">\n                            <div class=\"card-title text-left\">\n                                <h2>\n                                    <a href=\"#\">China Wants Fish, So Africa Goes Hungry</a>\n                                </h2>\n                            </div>\n                            <div class=\"card-footer text-left\">\n                                <div class=\"stats\">\n                                    <span>\n                                        <i class=\"now-ui-icons users_circle-08\"></i>Joanna Klein\n                                    </span>\n                                    <span>\n                                        <i class=\"now-ui-icons tech_watch-time\"></i> June 2, 2017\n                                    </span>\n                                </div>\n                                <div class=\"stats-link pull-right\">\n                                    <a href=\"#\" class=\"footer-link\">People</a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"main\">\n        <div class=\"container\">\n            <div class=\"section\">\n                <h3 class=\"title text-center\">You may also be interested in</h3>\n                <br />\n                <div class=\"row\">\n                    <div class=\"col-md-4\">\n                        <div class=\"card card-plain card-blog\">\n                            <div class=\"card-image\">\n                                <a href=\"#\">\n                                    <img class=\"img rounded img-raised\" src=\"assets/img/bg5.jpg\" />\n                                </a>\n                            </div>\n                            <div class=\"card-body\">\n                                <h6 class=\"category text-info\">Enterprise</h6>\n                                <h4 class=\"card-title\">\n                                    <a href=\"#\">Autodesk looks to future of 3D printing with Project Escher</a>\n                                </h4>\n                                <p class=\"card-description\">\n                                    Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses.\n                                    <a href=\"#\"> Read More </a>\n                                </p>\n                                <div class=\"author\">\n                                    <img src=\"assets/img/olivia.jpg\" alt=\"...\" class=\"avatar img-raised\" />\n                                    <span>Anna Spark</span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <div class=\"card card-plain card-blog\">\n                            <div class=\"card-image\">\n                                <a href=\"#\">\n                                    <img class=\"img rounded img-raised\" src=\"assets/img/bg27.jpg\" />\n                                </a>\n                            </div>\n                            <div class=\"card-body\">\n                                <h6 class=\"category text-success\">\n                                    Startups\n                                </h6>\n                                <h4 class=\"card-title\">\n                                    <a href=\"#\">Lyft launching cross-platform service this week</a>\n                                </h4>\n                                <p class=\"card-description\">\n                                    Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses.\n                                    <a href=\"#\"> Read More </a>\n                                </p>\n                                <div class=\"author\">\n                                    <img src=\"assets/img/michael.jpg\" alt=\"...\" class=\"avatar img-raised\">\n                                    <span>John Black</span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <div class=\"card card-plain card-blog\">\n                            <div class=\"card-image\">\n                                <a href=\"#\">\n                                    <img class=\"img rounded img-raised\" src=\"assets/img/bg21.jpg\" />\n                                </a>\n                            </div>\n                            <div class=\"card-body\">\n                                <h6 class=\"category text-danger\">\n                                    <i class=\"now-ui-icons media-2_sound-wave\"></i> Enterprise\n                                </h6>\n                                <h4 class=\"card-title\">\n                                    <a href=\"#\">6 insights into the French Fashion landscape</a>\n                                </h4>\n                                <p class=\"card-description\">\n                                    Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses.\n                                    <a href=\"#\"> Read More </a>\n                                </p>\n                                <div class=\"author\">\n                                    <img src=\"assets/img/james.jpg\" alt=\"...\" class=\"avatar img-raised\">\n                                    <span>James Newman</span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"section pt-0 pb-0\">\n            <div class=\"team-3 section-image\" data-parallax=\"true\" style=\"background-image: url('assets/img/bg26.jpg')\">\n                <div class=\"container\">\n                    <div class=\"row\">\n                        <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                            <h2 class=\"title\">Our little team.</h2>\n                            <h4 class=\"description\">\n                                This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information.\n                            </h4>\n                        </div>\n                        <div class=\"col-xl-6 col-lg-7 ml-auto mr-auto\">\n                            <div class=\"card card-profile\">\n                                <div class=\"row\">\n                                    <div class=\"col-md-5\">\n                                        <div class=\"card-image\">\n                                            <a href=\"#\">\n                                                <img class=\"img\" src=\"assets/img/olivia.jpg\">\n                                            </a>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-7\">\n                                        <div class=\"card-body\">\n                                            <h3 class=\"card-title\">Ariana Hazel</h3>\n                                            <h6 class=\"category text-primary\"> Fashion Designer</h6>\n                                            <p class=\"card-description\">\n                                                Happiness resides not in possessions, and not in gold, happiness dwells in the soul...\n                                            </p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-xl-6 col-lg-7 ml-auto mr-auto\">\n                            <div class=\"card card-profile\">\n                                <div class=\"row\">\n                                    <div class=\"col-md-5\">\n                                        <div class=\"card-image\">\n                                            <a href=\"#\">\n                                                <img class=\"img\" src=\"assets/img/james.jpg\">\n                                            </a>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-7\">\n                                        <div class=\"card-body\">\n                                            <h3 class=\"card-title\">Ryan Samuel</h3>\n                                            <h6 class=\"category text-primary\">Financial Examiner</h6>\n                                            <p class=\"card-description\">\n                                                Today you are you! That is truer than true! There is no one alive who is you-er than you!..\n                                            </p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"subscribe-line subscribe-line-white\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <h4 class=\"title\">Get Tips &amp; Tricks every Week!</h4>\n                        <p class=\"description\">\n                            Join our newsletter and get news in your inbox every week! We hate spam too, so no worries about this.\n                        </p>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"card card-plain card-form-horizontal\">\n                            <div class=\"card-content\">\n                                <form method=\"\" action=\"\">\n                                    <div class=\"row\">\n                                        <div class=\"col-sm-8\">\n                                            <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                                              <div class=\"input-group-prepend\">\n                                                  <span class=\"input-group-text\"><i class=\"now-ui-icons ui-1_email-85\"></i></span>\n                                              </div>\n                                                <input type=\"email\" class=\"form-control\" placeholder=\"Your Email...\" (focus)=\"focus=true\" (blur)=\"focus=false\">\n                                            </div>\n                                        </div>\n                                        <div class=\"col-sm-4\">\n                                            <button type=\"button\" class=\"btn btn-primary btn-round btn-block\">Subscribe</button>\n                                        </div>\n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <footer class=\"footer \" data-background-color=\"black\">\n        <div class=\"container\">\n            <div class=\"content\">\n                <div class=\"row\">\n                    <div class=\"col-md-2\">\n                        <h5>About Us</h5>\n                        <ul class=\"links-vertical\">\n                            <li>\n                                <a href=\"#\" class=\"text-muted\">\n                                    Blog\n                                </a>\n                            </li>\n                            <li>\n                                <a href=\"#\" class=\"text-muted\">\n                                    About Us\n                                </a>\n                            </li>\n                            <li>\n                                <a href=\"#\" class=\"text-muted\">\n                                    Presentation\n                                </a>\n                            </li>\n                            <li>\n                                <a href=\"#\" class=\"text-muted\">\n                                    Contact Us\n                                </a>\n                            </li>\n                        </ul>\n                    </div>\n                    <div class=\"col-md-2\">\n                        <h5>Market</h5>\n                        <ul class=\"links-vertical\">\n                            <li>\n                                <a href=\"#\" class=\"text-muted\">\n                                    Sales FAQ\n                                </a>\n                            </li>\n                            <li>\n                                <a href=\"#\" class=\"text-muted\">\n                                    How to Register\n                                </a>\n                            </li>\n                            <li>\n                                <a href=\"#\" class=\"text-muted\">\n                                    Sell Goods\n                                </a>\n                            </li>\n                            <li>\n                                <a href=\"#\" class=\"text-muted\">\n                                    Receive Payment\n                                </a>\n                            </li>\n                            <li>\n                                <a href=\"#\" class=\"text-muted\">\n                                    Transactions Issues\n                                </a>\n                            </li>\n                            <li>\n                                <a href=\"#\" class=\"text-muted\">\n                                    Affiliates Program\n                                </a>\n                            </li>\n                        </ul>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <h5>Social Feed</h5>\n                        <div class=\"social-feed\">\n                            <div class=\"feed-line\">\n                                <i class=\"fa fa-twitter\"></i>\n                                <p>How to handle ethical disagreements with your clients.</p>\n                            </div>\n                            <div class=\"feed-line\">\n                                <i class=\"fa fa-twitter\"></i>\n                                <p>The tangible benefits of designing at 1x pixel density.</p>\n                            </div>\n                            <div class=\"feed-line\">\n                                <i class=\"fa fa-facebook-square\"></i>\n                                <p>A collection of 25 stunning sites that you can use for inspiration.</p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <h5>Follow Us</h5>\n                        <ul class=\"social-buttons\">\n                            <li>\n                                <a href=\"#\" class=\"btn btn-icon btn-neutral btn-twitter btn-round\">\n                                    <i class=\"fa fa-twitter\"></i>\n                                </a>\n                            </li>\n                            <li>\n                                <a href=\"#\" class=\"btn btn-icon btn-neutral btn-facebook btn-round\">\n                                    <i class=\"fa fa-facebook-square\"></i>\n                                </a>\n                            </li>\n                            <li>\n                                <a href=\"#\" class=\"btn btn-icon btn-neutral btn-dribbble btn-round\">\n                                    <i class=\"fa fa-dribbble\"></i>\n                                </a>\n                            </li>\n                            <li>\n                                <a href=\"#\" class=\"btn btn-icon btn-neutral btn-google btn-round\">\n                                    <i class=\"fa fa-google-plus\"></i>\n                                </a>\n                            </li>\n                            <li>\n                                <a href=\"#\" class=\"btn btn-icon btn-neutral btn-instagram btn-round\">\n                                    <i class=\"fa fa-instagram\"></i>\n                                </a>\n                            </li>\n                        </ul>\n                        <h5>\n                            <small>Numbers Don't Lie</small>\n                        </h5>\n                        <h5>14.521\n                            <small class=\"text-muted\">Freelancers</small>\n                        </h5>\n                        <h5>1.423.183\n                            <small class=\"text-muted\">Transactions</small>\n                        </h5>\n                    </div>\n                </div>\n            </div>\n            <hr />\n            <div class=\"copyright\">\n              © {{data | date: 'yyyy'}} Josh Levy All Rights Reserved.\n            </div>\n        </div>\n    </footer>\n</div>\n";
      /***/
    },

    /***/
    "9ldr":
    /*!*******************************************************************!*\
      !*** ./src/app/components/notification/notification.component.ts ***!
      \*******************************************************************/

    /*! exports provided: NotificationComponent */

    /***/
    function ldr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationComponent", function () {
        return NotificationComponent;
      });
      /* harmony import */


      var _raw_loader_notification_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./notification.component.html */
      "1E4i");
      /* harmony import */


      var _notification_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./notification.component.scss */
      "oy3u");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var NotificationComponent = /*#__PURE__*/function () {
        function NotificationComponent() {
          _classCallCheck(this, NotificationComponent);

          this.alerts = [];
          this.alerts.push({
            id: 1,
            type: 'success',
            strong: 'Well done!',
            message: 'You successfully read this important alert message.',
            icon: 'ui-2_like'
          }, {
            id: 2,
            strong: 'Heads up!',
            type: 'info',
            message: 'This is an info alert',
            icon: 'travel_info'
          }, {
            id: 3,
            type: 'warning',
            strong: 'Warning!',
            message: 'This is a warning alert',
            icon: 'ui-1_bell-53'
          }, {
            id: 4,
            type: 'danger',
            strong: 'Oh snap!',
            message: 'This is a danger alert',
            icon: 'objects_support-17'
          });
          this.backup = this.alerts.map(function (alert) {
            return Object.assign({}, alert);
          });
        }

        _createClass(NotificationComponent, [{
          key: "closeAlert",
          value: function closeAlert(alert) {
            var index = this.alerts.indexOf(alert);
            this.alerts.splice(index, 1);
          }
        }]);

        return NotificationComponent;
      }();

      NotificationComponent.ctorParameters = function () {
        return [];
      };

      NotificationComponent.propDecorators = {
        alerts: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      NotificationComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-notification',
        template: _raw_loader_notification_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_notification_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [])], NotificationComponent);
      /***/
    },

    /***/
    "9leZ":
    /*!*************************************************************************!*\
      !*** ./src/app/components/prefooter-areas/prefooter-areas.component.ts ***!
      \*************************************************************************/

    /*! exports provided: PrefooterAreasComponent */

    /***/
    function leZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrefooterAreasComponent", function () {
        return PrefooterAreasComponent;
      });
      /* harmony import */


      var _raw_loader_prefooter_areas_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./prefooter-areas.component.html */
      "7nRJ");
      /* harmony import */


      var _prefooter_areas_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./prefooter-areas.component.scss */
      "noTK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var PrefooterAreasComponent = /*#__PURE__*/function () {
        function PrefooterAreasComponent() {
          _classCallCheck(this, PrefooterAreasComponent);
        }

        _createClass(PrefooterAreasComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PrefooterAreasComponent;
      }();

      PrefooterAreasComponent.ctorParameters = function () {
        return [];
      };

      PrefooterAreasComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-prefooter-areas',
        template: _raw_loader_prefooter_areas_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_prefooter_areas_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [])], PrefooterAreasComponent);
      /***/
    },

    /***/
    "AMS6":
    /*!***********************************************************!*\
      !*** ./src/app/sections/contacts/contacts.component.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function AMS6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0cy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "ARBA":
    /*!*********************************************************!*\
      !*** ./src/app/examples/landing/landing.component.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function ARBA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYW5kaW5nLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "AXTl":
    /*!*******************************************************!*\
      !*** ./src/app/examples/landing/landing.component.ts ***!
      \*******************************************************/

    /*! exports provided: LandingComponent */

    /***/
    function AXTl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LandingComponent", function () {
        return LandingComponent;
      });
      /* harmony import */


      var _raw_loader_landing_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./landing.component.html */
      "9GRG");
      /* harmony import */


      var _landing_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./landing.component.scss */
      "ARBA");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rellax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rellax */
      "HbP6");
      /* harmony import */


      var rellax__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rellax__WEBPACK_IMPORTED_MODULE_3__);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var LandingComponent = /*#__PURE__*/function () {
        function LandingComponent() {
          _classCallCheck(this, LandingComponent);

          this.data = new Date();
        }

        _createClass(LandingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var rellaxHeader = new rellax__WEBPACK_IMPORTED_MODULE_3__('.rellax-header');
            var body = document.getElementsByTagName('body')[0];
            body.classList.add('landing-page');
            var navbar = document.getElementsByTagName('nav')[0];
            navbar.classList.add('navbar-transparent');
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var body = document.getElementsByTagName('body')[0];
            body.classList.remove('landing-page');
            var navbar = document.getElementsByTagName('nav')[0];
            navbar.classList.remove('navbar-transparent');
          }
        }]);

        return LandingComponent;
      }();

      LandingComponent.ctorParameters = function () {
        return [];
      };

      LandingComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-landing',
        template: _raw_loader_landing_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_landing_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [])], LandingComponent);
      /***/
    },

    /***/
    "AjSh":
    /*!***********************************************************************!*\
      !*** ./src/app/components/footers-areas/footers-areas.component.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function AjSh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXJzLWFyZWFzLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "AkPU":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sections/teams/teams.component.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function AkPU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"cd-section\" id=\"teams\">\n    <!--     *********    TEAM 1     *********      -->\n    <div class=\"team-1\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                    <h2 class=\"title\">Our Awesome Team 1</h2>\n                    <h4 class=\"description\">This is the paragraph where you can write more details about your team. Keep you user engaged by providing meaningful information.</h4>\n                </div>\n            </div>\n            <div class=\"row justify-content-center\">\n                <div class=\"col-md-4 ml-1\">\n                    <div class=\"card card-profile card-plain\">\n                        <div class=\"card-avatar\">\n                            <a href=\"#\">\n                                <img class=\"img img-raised\" src=\"assets/img/james.jpg\" />\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <h3 class=\"card-title\">Oliver Atticus</h3>\n                            <h6 class=\"category text-primary\">Web Developer</h6>\n                            <p class=\"card-description\">\n                                If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.\n                            </p>\n                            <div class=\"card-footer\">\n                                <a href=\"#\" class=\"btn btn-icon btn-primary btn-round\"><i class=\"fa fa-facebook-square\"></i></a>\n                                <a href=\"#\" class=\"btn btn-icon btn-primary btn-round\"><i class=\"fa fa-dribbble\"></i></a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4 mr-1\">\n                    <div class=\"card card-profile card-plain\">\n                        <div class=\"card-avatar\">\n                            <a href=\"#\">\n                                <img class=\"img img-raised\" src=\"assets/img/michael.jpg\" />\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <h3 class=\"card-title\">Smith College</h3>\n                            <h6 class=\"category text-primary\">CEO / Co-Founder</h6>\n                            <p class=\"card-description\">\n                                Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.\n                            </p>\n                            <div class=\"card-footer\">\n                                <a href=\"#\" class=\"btn btn-icon btn-primary btn-round\"><i class=\"fa fa-twitter\"></i></a>\n                                <a href=\"#\" class=\"btn btn-icon btn-primary btn-round\"><i class=\"fa fa-facebook-square\"></i></a>\n                                <a href=\"#\" class=\"btn btn-icon btn-primary btn-round\"><i class=\"fa fa-google\"></i></a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4 ml-1 mt-4\">\n                    <div class=\"card card-profile card-plain\">\n                        <div class=\"card-avatar\">\n                            <a href=\"#\">\n                                <img class=\"img img-raised\" src=\"assets/img/emily.jpg\" />\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <h3 class=\"card-title\">Sophia Madison</h3>\n                            <h6 class=\"category text-primary\">Entrepreneur</h6>\n                            <p class=\"card-description\">\n                                Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.\n                            </p>\n                            <div class=\"card-footer\">\n                                <a href=\"#\" class=\"btn btn-icon btn-primary btn-round\"><i class=\"fa fa-twitter\"></i></a>\n                                <a href=\"#\" class=\"btn btn-icon btn-primary btn-round\"><i class=\"fa fa-dribbble\"></i></a>\n                                <a href=\"#\" class=\"btn btn-icon btn-primary btn-round\"><i class=\"fa fa-linkedin\"></i></a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4 mr-1 mt-4\">\n                    <div class=\"card card-profile card-plain\">\n                        <div class=\"card-avatar\">\n                            <a href=\"#\">\n                                <img class=\"img img-raised\" src=\"assets/img/olivia.jpg\" />\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <h3 class=\"card-title\">Emily Chloe</h3>\n                            <h6 class=\"category text-primary\">Entrepreneur</h6>\n                            <p class=\"card-description\">\n                                You know you're in love when you can't fall asleep because reality is finally better than your dreams.\n                            </p>\n                            <div class=\"card-footer\">\n                                <a href=\"#\" class=\"btn btn-icon btn-primary btn-round\"><i class=\"fa fa-google\"></i></a>\n                                <a href=\"#\" class=\"btn btn-icon btn-primary btn-round\"><i class=\"fa fa-dribbble\"></i></a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END TEAM 1      *********      -->\n    <!--     *********    TEAM 2     *********      -->\n    <div class=\"team-2\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                    <h2 class=\"title\">The Executive Team 2</h2>\n                    <h4 class=\"description\">This is the paragraph where you can write more details about your team. Keep you user engaged by providing meaningful information.</h4>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <div class=\"card card-profile card-plain\">\n                        <div class=\"card-image\">\n                            <a href=\"#\">\n                                <img class=\"img img-raised rounded\" src=\"assets/img/examples/card-profile1.jpg\" />\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <h4 class=\"card-title\">Sofia Scarlett</h4>\n                            <h6 class=\"category\">Account Manager</h6>\n                            <div class=\"card-footer\">\n                                <a href=\"#\" class=\"btn btn-icon btn-twitter btn-round\"><i class=\"fa fa-twitter\"></i></a>\n                                <a href=\"#\" class=\"btn btn-icon btn-facebook btn-round\"><i class=\"fa fa-facebook-square\"></i></a>\n                                <a href=\"#\" class=\"btn btn-icon btn-dribbble btn-round\"><i class=\"fa fa-dribbble\"></i></a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"card card-profile card-plain\">\n                        <div class=\"card-image\">\n                            <a href=\"#\">\n                                <img class=\"img img-raised rounded\" src=\"assets/img/examples/card-profile2.jpg\" />\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <h4 class=\"card-title\">Lucas Jacob</h4>\n                            <h6 class=\"category\">Aerospace Engineer</h6>\n                            <div class=\"card-footer\">\n                                <a href=\"#\" class=\"btn btn-icon btn-dribbble btn-round\"><i class=\"fa fa-dribbble\"></i></a>\n                                <a href=\"#\" class=\"btn btn-icon btn-facebook btn-round\"><i class=\"fa fa-facebook-square\"></i></a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"card card-profile card-plain\">\n                        <div class=\"card-image\">\n                            <a href=\"#\">\n                                <img class=\"img img-raised rounded\" src=\"assets/img/examples/card-profile3.jpg\" />\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <h4 class=\"card-title\">Amelia Charlotte</h4>\n                            <h6 class=\"category\">Photographer</h6>\n                            <div class=\"card-footer\">\n                                <a href=\"#\" class=\"btn btn-icon btn-linkedin btn-round\"><i class=\"fa fa-linkedin\"></i></a>\n                                <a href=\"#\" class=\"btn btn-icon btn-twitter btn-round\"><i class=\"fa fa-twitter\"></i></a>\n                                <a href=\"#\" class=\"btn btn-icon btn-dribbble btn-round\"><i class=\"fa fa-dribbble\"></i></a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END TEAM 2      *********      -->\n    <!--     *********    TEAM 3     *********      -->\n    <div class=\"team-3 section-image\" style=\"background-image: url('assets/img/bg21.jpg')\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                    <h2 class=\"title\">The Executive Team 3</h2>\n                    <h4 class=\"description\">This is the paragraph where you can write more details about your team. Keep you user engaged by providing meaningful information.</h4>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-xl-6 col-lg-7 ml-auto mr-auto\">\n                    <div class=\"card card-profile\">\n                        <div class=\"row\">\n                            <div class=\"col-md-5\">\n                                <div class=\"card-image\">\n                                    <a href=\"#\">\n                                        <img class=\"img\" src=\"assets/img/olivia.jpg\" />\n                                    </a>\n                                </div>\n                            </div>\n                            <div class=\"col-md-7\">\n                                <div class=\"card-body\">\n                                    <h3 class=\"card-title\">Ariana Hazel</h3>\n                                    <h6 class=\"category text-primary\"> Fashion Designer</h6>\n                                    <p class=\"card-description\">\n                                        Happiness resides not in possessions, and not in gold, happiness dwells in the soul...\n                                    </p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-xl-6 col-lg-7 ml-auto mr-auto\">\n                    <div class=\"card card-profile\">\n                        <div class=\"row\">\n                            <div class=\"col-md-5\">\n                                <div class=\"card-image\">\n                                    <a href=\"#\">\n                                        <img class=\"img\" src=\"assets/img/james.jpg\" />\n                                    </a>\n                                </div>\n                            </div>\n                            <div class=\"col-md-7\">\n                                <div class=\"card-body\">\n                                    <h3 class=\"card-title\">Ryan Samuel</h3>\n                                    <h6 class=\"category text-primary\">Financial Examiner</h6>\n                                    <p class=\"card-description\">\n                                        Today you are you! That is truer than true! There is no one alive who is you-er than you!..\n                                    </p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-xl-6 col-lg-7 ml-auto mr-auto\">\n                    <div class=\"card card-profile\">\n                        <div class=\"row\">\n                            <div class=\"col-md-5\">\n                                <div class=\"card-image\">\n                                    <a href=\"#\">\n                                        <img class=\"img\" src=\"assets/img/michael.jpg\" />\n                                    </a>\n                                </div>\n                            </div>\n                            <div class=\"col-md-7\">\n                                <div class=\"card-body\">\n                                    <h3 class=\"card-title\">Joshua Jackson</h3>\n                                    <h6 class=\"category text-primary\">Landscape Architect</h6>\n                                    <p class=\"card-description\">\n                                        Success is not final, failure is not fatal: it is the courage to continue that counts...\n                                    </p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-xl-6 col-lg-7 ml-auto mr-auto\">\n                    <div class=\"card card-profile\">\n                        <div class=\"row\">\n                            <div class=\"col-md-5\">\n                                <div class=\"card-image\">\n                                    <a href=\"#\">\n                                        <img class=\"img\" src=\"assets/img/emily.jpg\" />\n                                    </a>\n                                </div>\n                            </div>\n                            <div class=\"col-md-7\">\n                                <div class=\"card-body\">\n                                    <h3 class=\"card-title\">Nora Hazel</h3>\n                                    <h6 class=\"category text-primary\">Legal Secretary</h6>\n                                    <p class=\"card-description\">\n                                        Do not dwell in the past, do not dream of the future, concentrate the mind...\n                                    </p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END TEAM 3      *********      -->\n    <!--     *********    TEAM 4     *********      -->\n    <div class=\"team-4\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                    <h2 class=\"title\">The Executive Team 4</h2>\n                    <h4 class=\"description\">This is the paragraph where you can write more details about your team. Keep you user engaged by providing meaningful information.</h4>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <div class=\"card card-profile card-plain\">\n                        <div class=\"row\">\n                            <div class=\"col-md-5\">\n                                <div class=\"card-image\">\n                                    <a href=\"#\">\n                                        <img class=\"img img-raised rounded\" src=\"assets/img/olivia.jpg\" />\n                                    </a>\n                                </div>\n                            </div>\n                            <div class=\"col-md-7\">\n                                <div class=\"card-body\">\n                                    <h4 class=\"card-title\">Ella Evelyn</h4>\n                                    <h6 class=\"category\">Air Crew Member</h6>\n                                    <p class=\"card-description\">\n                                        Think in the morning. Act in the noon. Eat in the evening. Sleep in the night......\n                                    </p>\n                                    <div class=\"card-footer\">\n                                        <a href=\"#\" class=\"btn btn-icon btn-neutral btn-twitter\"><i class=\"fa fa-twitter\"></i></a>\n                                        <a href=\"#\" class=\"btn btn-icon btn-neutral btn-facebook\"><i class=\"fa fa-facebook-square\"></i></a>\n                                        <a href=\"#\" class=\"btn btn-icon btn-neutral btn-google\"><i class=\"fa fa-google\"></i></a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"card card-profile card-plain\">\n                        <div class=\"row\">\n                            <div class=\"col-md-5\">\n                                <div class=\"card-image\">\n                                    <a href=\"#\">\n                                        <img class=\"img img-raised rounded\" src=\"assets/img/emily.jpg\" />\n                                    </a>\n                                </div>\n                            </div>\n                            <div class=\"col-md-7\">\n                                <div class=\"card-body\">\n                                    <h4 class=\"card-title\">Mila Skylar</h4>\n                                    <h6 class=\"category\">Architect</h6>\n                                    <p class=\"card-description\">\n                                        Love cures people - both the ones who give it and the ones who receive it...\n                                    </p>\n                                    <div class=\"card-footer\">\n                                        <a href=\"#\" class=\"btn btn-icon btn-neutral btn-linkedin\"><i class=\"fa fa-linkedin\"></i></a>\n                                        <a href=\"#\" class=\"btn btn-icon btn-neutral btn-facebook\"><i class=\"fa fa-facebook-square\"></i></a>\n                                        <a href=\"#\" class=\"btn btn-icon btn-neutral btn-dribbble\"><i class=\"fa fa-dribbble\"></i></a>\n                                        <a href=\"#\" class=\"btn btn-icon btn-neutral btn-google\"><i class=\"fa fa-google\"></i></a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"card card-profile card-plain\">\n                        <div class=\"row\">\n                            <div class=\"col-md-5\">\n                                <div class=\"card-image\">\n                                    <a href=\"#\">\n                                        <img class=\"img img-raised rounded\" src=\"assets/img/james.jpg\" />\n                                    </a>\n                                </div>\n                            </div>\n                            <div class=\"col-md-7\">\n                                <div class=\"card-body\">\n                                    <h4 class=\"card-title\">Daniel Carter</h4>\n                                    <h6 class=\"category\">Aviation Inspector</h6>\n                                    <p class=\"card-description\">\n                                        Keep your face always toward the sunshine - and shadows will fall behind you...\n                                    </p>\n                                    <div class=\"card-footer\">\n                                        <a href=\"#\" class=\"btn btn-icon btn-neutral btn-youtube\"><i class=\"fa fa-youtube-play\"></i></a>\n                                        <a href=\"#\" class=\"btn btn-icon btn-neutral btn-twitter\"><i class=\"fa fa-twitter\"></i></a>\n                                        <a href=\"#\" class=\"btn btn-icon btn-neutral btn-instagram\"><i class=\"fa fa-instagram\"></i></a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"card card-profile card-plain\">\n                        <div class=\"row\">\n                            <div class=\"col-md-5\">\n                                <div class=\"card-image\">\n                                    <a href=\"#\">\n                                        <img class=\"img img-raised rounded\" src=\"assets/img/michael.jpg\" />\n                                    </a>\n                                </div>\n                            </div>\n                            <div class=\"col-md-7\">\n                                <div class=\"card-body\">\n                                    <h4 class=\"card-title\">Dylan Wyatt</h4>\n                                    <h6 class=\"category\">Conservation Scientist</h6>\n                                    <p class=\"card-description\">\n                                        There is only one corner of the universe you can be certain of improving, and that's your own self...\n                                    </p>\n                                    <div class=\"card-footer\">\n                                        <a href=\"#\" class=\"btn btn-icon btn-neutral btn-linkedin\"><i class=\"fa fa-linkedin\"></i></a>\n                                        <a href=\"#\" class=\"btn btn-icon btn-neutral btn-facebook\"><i class=\"fa fa-facebook-square\"></i></a>\n                                        <a href=\"#\" class=\"btn btn-icon btn-neutral btn-google\"><i class=\"fa fa-google\"></i></a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END TEAM 4      *********      -->\n    <!--     *********    TEAM 5     *********      -->\n    <div class=\"team-5 section-image\" style=\"background-image: url('assets/img/bg9.jpg')\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                    <h2 class=\"title\">The Executive Team 5</h2>\n                    <h4 class=\"description\">This is the paragraph where you can write more details about your team. Keep you user engaged by providing meaningful information.</h4>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <div class=\"card card-profile\">\n                        <div class=\"card-avatar\">\n                            <a href=\"#\">\n                                <img class=\"img img-raised\" src=\"assets/img/olivia.jpg\" />\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <h3 class=\"card-title\">Natalie Paisley</h3>\n                            <h6 class=\"category text-primary\">Credit Analyst</h6>\n                            <p class=\"card-description\">\n                                Very little is needed to make a happy life; it is all within yourself, in your way of thinking...\n                            </p>\n                            <div class=\"card-footer\">\n                                <a href=\"#\" class=\"btn btn-icon btn-neutral btn-round\"><i class=\"fa fa-linkedin\"></i></a>\n                                <a href=\"#\" class=\"btn btn-icon btn-neutral btn-round\"><i class=\"fa fa-twitter\"></i></a>\n                                <a href=\"#\" class=\"btn btn-icon btn-neutral btn-round\"><i class=\"fa fa-dribbble\"></i></a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"card card-profile\">\n                        <div class=\"card-avatar\">\n                            <a href=\"#\">\n                                <img class=\"img img-raised\" src=\"assets/img/james.jpg\" />\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <h4 class=\"card-title\">Anthony Jackson</h4>\n                            <h6 class=\"category text-primary\">Desktop Publisher</h6>\n                            <p class=\"card-description\">\n                                Let us be grateful to people who make us happy, they are the charming gardeners who make our souls blossom...\n                            </p>\n                            <div class=\"card-footer\">\n                                <a href=\"#\" class=\"btn btn-icon btn-neutral btn-round\"><i class=\"fa fa-dribbble\"></i></a>\n                                <a href=\"#\" class=\"btn btn-icon btn-neutral btn-round\"><i class=\"fa fa-twitter\"></i></a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"card card-profile\">\n                        <div class=\"card-avatar\">\n                            <a href=\"#\">\n                                <img class=\"img img-raised\" src=\"assets/img/emily.jpg\" />\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <h4 class=\"card-title\">Bella Audrey</h4>\n                            <h6 class=\"category text-primary\">Economist</h6>\n                            <p class=\"card-description\">\n                                For it was not into my ear you whispered, but into my heart. It was not my lips you kissed, but my soul...\n                            </p>\n                            <div class=\"card-footer\">\n                                <a href=\"#\" class=\"btn btn-icon btn-neutral btn-round\"><i class=\"fa fa-dribbble\"></i></a>\n                                <a href=\"#\" class=\"btn btn-icon btn-neutral btn-round\"><i class=\"fa fa-twitter\"></i></a>\n                                <a href=\"#\" class=\"btn btn-icon btn-neutral btn-round\"><i class=\"fa fa-pinterest\"></i></a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END TEAM 5      *********      -->\n</div>\n";
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      });

      var environment = {
        production: false,
        apiUrl: "https://joshlevy.herokuapp.com"
      };
      /***/
    },

    /***/
    "BwkF":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tables-areas/tables-areas.component.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function BwkF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"section\">\n    <div class=\"container\">\n      <h3 class=\"title\">Content Areas</h3>\n\n      <div class=\"title\">\n          <h3>\n              <small>Tables</small>\n          </h3>\n      </div>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n              <h4>\n                  <small>Simple Table</small>\n              </h4>\n          </div>\n            <div class=\"col-md-8 ml-auto mr-auto\">\n                <h6>Simple With Actions</h6>\n                <div class=\"card card-plain\">\n                    <div class=\"card-body\">\n                    <div class=\"table-responsive\">\n                        <table class=\"table\">\n                            <thead>\n                                <tr>\n                                  <th class=\"text-center\">{{ tableData1.headerRow[0] }}</th>\n                                  <th>{{ tableData1.headerRow[1] }}</th>\n                                  <th>{{ tableData1.headerRow[2] }}</th>\n                                  <th class=\"text-center\">{{ tableData1.headerRow[3] }}</th>\n                                  <th class=\"text-right\">{{ tableData1.headerRow[4] }}</th>\n                                  <th class=\"text-right\">{{ tableData1.headerRow[5] }}</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let row of tableData1.dataRows\">\n                                    <td class=\"text-center\">{{row[0]}}</td>\n                                    <td>{{row[1]}}</td>\n                                    <td>{{row[2]}}</td>\n                                    <td class=\"text-center\">{{row[3]}}</td>\n                                    <td class=\"text-right\">&euro; {{row[4]}}</td>\n                                    <td class=\"td-actions text-right\">\n                                      <button type=\"button\" ngbTooltip=\"View Profile\" class=\"btn btn-info btn-icon btn-sm {{row[5]}}\">\n                                          <i class=\"now-ui-icons users_single-02\"></i>\n                                      </button>\n                                      <button type=\"button\" ngbTooltip=\"Edit Profile\" class=\"btn btn-success btn-icon btn-sm {{row[5]}}\">\n                                          <i class=\"now-ui-icons ui-2_settings-90\"></i>\n                                      </button>\n                                      <button type=\"button\" ngbTooltip=\"Remove\" class=\"btn btn-danger btn-icon btn-sm {{row[5]}}\">\n                                          <i class=\"now-ui-icons ui-1_simple-remove\"></i>\n                                      </button>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                  </div>\n                </div>\n                <h6>Striped With Checkboxes</h6>\n                <div class=\"card card-plain\">\n                    <div class=\"card-body\">\n                    <div class=\"table-responsive\">\n                        <table class=\"table table-striped\">\n                            <thead>\n                                <tr>\n                                    <th class=\"text-center\">{{ tableData2.headerRow[0] }}</th>\n                                    <th></th>\n                                    <th>{{ tableData2.headerRow[1] }}</th>\n                                    <th>{{ tableData2.headerRow[2] }}</th>\n                                    <th>{{ tableData2.headerRow[3] }}</th>\n                                    <th class=\"text-right\">{{ tableData2.headerRow[4] }}</th>\n                                    <th class=\"text-right\">{{ tableData2.headerRow[5] }}</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let row of tableData2.dataRows\">\n                                    <td class=\"text-center\">{{row.id}}</td>\n                                    <td>\n                                        <div [ngSwitch]=\"row.check\">\n                                            <div *ngSwitchCase=\"true\">\n                                                <div class=\"form-check\">\n                                                    <label class=\"form-check-label\">\n                                                        <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked>\n                                                        <span class=\"form-check-sign\"></span>\n                                                    </label>\n                                                </div>\n                                            </div>\n                                            <div *ngSwitchDefault>\n                                                <div class=\"form-check\">\n                                                    <label class=\"form-check-label\">\n                                                        <input class=\"form-check-input\" type=\"checkbox\" value=\"\" >\n                                                        <span class=\"form-check-sign\"></span>\n                                                    </label>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </td>\n                                    <td>{{row.product_name}}</td>\n                                    <td>{{row.type}}</td>\n                                    <td>{{row.qty}}</td>\n                                    <td class=\"text-right\">&euro; {{row.price}}</td>\n                                    <td class=\"text-right\">&euro; {{row.amount}}</td>\n                                </tr>\n                                <tr>\n                                    <td colspan=\"5\"></td>\n                                    <td class=\"td-total\">\n                                        Total\n                                    </td>\n                                    <td class=\"td-price\">\n                                        {{getTotal1() | currency:'EUR':'symbol':'1.2-2'}}\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                  </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n              <h4>\n                  <small>Shopping Cart Table</small>\n              </h4>\n          </div>\n            <div class=\"col-md-12\">\n              <div class=\"card card-plain\">\n                  <div class=\"card-body\">\n                    <div class=\"table-responsive\">\n                        <table class=\"table table-shopping\">\n                            <thead>\n                                <tr>\n                                    <th class=\"text-center\"></th>\n                                    <th>{{ tableData3.headerRow[2] }}</th>\n                                    <th>{{ tableData3.headerRow[3] }}</th>\n                                    <th>{{ tableData3.headerRow[4] }}</th>\n                                    <th class=\"text-right\">{{ tableData3.headerRow[5] }}</th>\n                                    <th class=\"text-right\">{{ tableData3.headerRow[6] }}</th>\n                                    <th class=\"text-right\">{{ tableData3.headerRow[7] }}</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let row of tableData3.dataRows\">\n                                    <td>\n                                        <div class=\"img-container\">\n                                            <img src=\"assets/img/{{row[0]}}\" alt=\"...\">\n                                        </div>\n                                    </td>\n                                    <td class=\"td-name\">\n                                        <a>{{row[1]}}</a>\n                                        <br />\n                                        <small>{{row[2]}}</small>\n                                    </td>\n                                    <td>{{row[3]}}</td>\n                                    <td>{{row[4]}}</td>\n                                    <td class=\"td-number\"><small>€</small>{{row[5]}}</td>\n                                    <td class=\"td-number\">\n                                        {{row[6]}}\n                                        <div class=\"btn-group\">\n                                            <button class=\"btn btn-info btn-sm\"> <i class=\"now-ui-icons ui-1_simple-delete\"></i> </button>\n                                            <button class=\"btn btn-info btn-sm\"> <i class=\"now-ui-icons ui-1_simple-add\"></i> </button>\n                                        </div>\n                                    </td>\n                                    <td class=\"td-number\">\n                                        <small>€</small>{{row[7]}}\n                                    </td>\n                                    <td class=\"td-actions\">\n                                        <button type=\"button\" placement=\"top\" ngbTooltip=\"Remove item\" class=\"btn btn-neutral\">\n                                            <i class=\"now-ui-icons ui-1_simple-remove\"></i>\n                                        </button>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td colspan=\"3\">\n                                    </td>\n                                    <td class=\"td-total\">\n                                        Total\n                                    </td>\n                                    <td class=\"td-price\">\n                                        {{getTotal2() | currency:'EUR':'symbol':'1.2-2'}}\n                                    </td>\n                                    <td colspan=\"3\" class=\"text-right\">\n                                      <button type=\"button\" class=\"btn btn-info btn-round \" (click)=\"showElements()\">Complete Purchase <i class=\"now-ui-icons arrows-1_minimal-right\"></i>\n                                        </button>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                  </div>\n              </div>\n            </div>\n        </div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "CxlL":
    /*!*********************************************************!*\
      !*** ./src/app/examples/blogpost/blogpost.component.ts ***!
      \*********************************************************/

    /*! exports provided: BlogpostComponent */

    /***/
    function CxlL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BlogpostComponent", function () {
        return BlogpostComponent;
      });
      /* harmony import */


      var _raw_loader_blogpost_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./blogpost.component.html */
      "f9sp");
      /* harmony import */


      var _blogpost_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./blogpost.component.scss */
      "+PLA");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rellax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rellax */
      "HbP6");
      /* harmony import */


      var rellax__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rellax__WEBPACK_IMPORTED_MODULE_3__);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var BlogpostComponent = /*#__PURE__*/function () {
        function BlogpostComponent() {
          _classCallCheck(this, BlogpostComponent);

          this.data = new Date();
        }

        _createClass(BlogpostComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var rellaxHeader = new rellax__WEBPACK_IMPORTED_MODULE_3__('.rellax-header');
            var body = document.getElementsByTagName('body')[0];
            body.classList.add('blog-post');
            var navbar = document.getElementsByTagName('nav')[0];
            navbar.classList.add('navbar-transparent');
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var body = document.getElementsByTagName('body')[0];
            body.classList.remove('blog-post');
            var navbar = document.getElementsByTagName('nav')[0];
            navbar.classList.remove('navbar-transparent');
          }
        }]);

        return BlogpostComponent;
      }();

      BlogpostComponent.ctorParameters = function () {
        return [];
      };

      BlogpostComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-blogpost',
        template: _raw_loader_blogpost_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_blogpost_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [])], BlogpostComponent);
      /***/
    },

    /***/
    "Dz+n":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sections/projects/projects.component.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function DzN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"cd-section\" id=\"projects\">\n    <!--     *********    PROJECTS 1     *********      -->\n    <div class=\"projects-1\">\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                    <h2 class=\"title\">Some of Our Awesome Products - 1</h2>\n                    <ngb-tabset type=\"pills\" class=\"nav nav-pills nav-pills-danger justify-content-center tab-space\">\n                        <ngb-tab title=\"All\">\n                            <ng-template ngbTabContent>\n\n                            </ng-template>\n                        </ngb-tab>\n                        <ngb-tab title=\"History\">\n                            <ng-template ngbTabContent>\n\n                            </ng-template>\n                        </ngb-tab>\n                        <ngb-tab title=\"Satire\">\n                            <ng-template ngbTabContent>\n\n                            </ng-template>\n                        </ngb-tab>\n                        <ngb-tab title=\"Fiction\">\n                            <ng-template ngbTabContent>\n\n                            </ng-template>\n                        </ngb-tab>\n                    </ngb-tabset>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6 px-0\">\n                    <div class=\"card card-background card-background-product card-no-shadow\" style=\"background-image: url('assets/img/project1.jpg')\">\n                        <div class=\"card-body\">\n                            <h6 class=\"category\">History</h6>\n                            <h3 class=\"card-title\">\n                                The City Lost & Found\n                            </h3>\n                            <p class=\"card-description\">\n                                Developed on the occasion of an exhibition of the same name, The City Lost & Found: Capturing New York...\n                            </p>\n                            <a href=\"#\" class=\"btn btn-danger btn-round\">\n                                <i class=\"now-ui-icons ui-1_send\"></i> View Book\n                            </a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6 px-0\">\n                    <div class=\"card card-raised card-background card-background-product card-no-shadow\" style=\"background-image: url('assets/img/project18.jpg')\">\n                        <div class=\"card-body\">\n                            <h6 class=\"category\">Satire</h6>\n                            <h3 class=\"card-title\">A Confederacy of Dunces</h3>\n                            <p class=\"card-description\">\n                                Satires, in the most basic definition, are works making fun of some sort of person or institution...\n                            </p>\n                            <a href=\"#\" class=\"btn btn-neutral btn-round\">\n                                <i class=\"now-ui-icons ui-1_send\"></i> View more\n                            </a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6 px-0\">\n                    <div class=\"card card-background card-background-product card-no-shadow\" style=\"background-image: url('assets/img/project20.jpg')\">\n                        <div class=\"card-body\">\n                            <h6 class=\"category\">Fiction</h6>\n                            <h3 class=\"card-title\">The Sun Also Rises</h3>\n                            <p class=\"card-description\">\n                                The most commonly read works are works of fiction. Fiction books are ones that have been made up...\n                            </p>\n                            <a href=\"#\" class=\"btn btn-neutral btn-round\">\n                                <i class=\"now-ui-icons ui-1_send\"></i> Read Now\n                            </a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6 px-0\">\n                    <div class=\"card card-background card-background-product card-no-shadow\" style=\"background-image: url('assets/img/project19.jpg')\">\n                        <div class=\"card-body\">\n                            <h6 class=\"category\">Basic Civitas</h6>\n                            <h3 class=\"card-title\">The Right Mistake</h3>\n                            <p class=\"card-description\">\n                                Living in South Central L.A., Socrates Fortlow is a sixty-year-old ex-convict, still strong enough to kill men with...\n                            </p>\n                            <a href=\"#\" class=\"btn btn-danger btn-round\">\n                                <i class=\"now-ui-icons ui-1_send\"></i> Read Now\n                            </a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END PROJECTS 1      *********      -->\n    <!--     *********    PROJECTS 2     *********      -->\n    <div class=\"projects-2\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                    <h6 class=\"text-muted\">Our work</h6>\n                    <h2 class=\"title\">Some of Our Awesome Products - 2</h2>\n                    <h5 class=\"description\">This is the paragraph where you can write more details about your projects. Keep you user engaged by providing meaningful information.</h5>\n                    <div class=\"section-space\"></div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <div class=\"card card-plain\">\n                        <a href=\"https://www.josh-levy.com/product/now-ui-kit\" target=\"_blank\">\n                            <div class=\"card-image\">\n                                <img class=\"img-raised rounded\" src=\"http://s3.amazonaws.com/creativetim_bucket/products/38/original/opt_mk_thumbnail.jpg?1458052306\" />\n                            </div>\n                        </a>\n                        <div class=\"card-body\">\n                            <a href=\"https://www.josh-levy.com/product/now-ui-kit\" target=\"_blank\">\n                                <h4 class=\"card-title\">Now UI Kit Free</h4>\n                            </a>\n                            <h6 class=\"category text-primary\">Free UI Kit</h6>\n                            <p class=\"card-description\">\n                                Now UI Kit is a Free Bootstrap UI Kit with a fresh, new design inspired by Google's material design. It's a great pleasure to introduce to you the material concepts in an easy to use and beautiful set of components.\n                            </p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"card card-plain\">\n                        <a href=\"https://www.josh-levy.com/product/light-bootstrap-dashboard-pro\" target=\"_blank\">\n                            <div class=\"card-image\">\n                                <img class=\"img-raised rounded\" src=\"http://s3.amazonaws.com/creativetim_bucket/products/34/original/opt_lbd_pro_thumbnail.jpg?1449352503\" />\n                            </div>\n                        </a>\n                        <div class=\"card-body\">\n                            <a href=\"https://www.josh-levy.com/product/light-bootstrap-dashboard-pro\" target=\"_blank\">\n                                <h4 class=\"card-title\">Light Bootstrap Dashboard</h4>\n                            </a>\n                            <h6 class=\"category text-primary\">Premium Template</h6>\n                            <p class=\"card-description\">\n                                Light Bootstrap Dashboard PRO is a Bootstrap Admin Theme designed to look simple and beautiful. Forget about boring dashboards and grab yourself a copy to kickstart new project!\n                            </p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"card card-plain\">\n                        <a href=\"https://www.josh-levy.com/product/get-shit-done-pro\" target=\"_blank\">\n                            <div class=\"card-image\">\n                                <img class=\"img-raised rounded\" src=\"http://s3.amazonaws.com/creativetim_bucket/products/26/original/opt_gsdk_new_thumbnail.jpg\" />\n                            </div>\n                        </a>\n                        <div class=\"card-body\">\n                            <a href=\"https://www.josh-levy.com/product/get-shit-done-pro\" target=\"_blank\">\n                                <h4 class=\"card-title\">Get Shit Done Kit PRO</h4>\n                            </a>\n                            <h6 class=\"category text-primary\">Premium UI Kit</h6>\n                            <p class=\"card-description\">\n                                Get Shit Done Kit Pro it's a Bootstrap Kit that comes with a huge number of customisable components. They are pixel perfect, light and easy to use and combine with other elements.\n                            </p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END PROJECTS 2      *********      -->\n    <!--     *********    PROJECTS 3     *********      -->\n    <div class=\"projects-3\" data-background-color=\"black\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                    <h6 class=\"category text-muted\">Our work</h6>\n                    <h2 class=\"title\">Some of Our Awesome Projects - 3</h2>\n                </div>\n            </div>\n            <div class=\"section-story-overview\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <div class=\"image-container image-left\" style=\"background-image: url('assets/img/project4.jpg')\">\n                            <!-- First image on the left side -->\n                            <p class=\"blockquote blockquote-primary\">\"Amber Interiors is available to assist in all aspects of a project from start to finish including consulting with Architects and Builders\"\n                            </p>\n                        </div>\n                    </div>\n                    <div class=\"col-md-5\">\n                        <!-- First image on the right side, above the article -->\n                        <div class=\"image-container image-right\" style=\"background-image: url('assets/img/project21.jpg')\">\n                        </div>\n                        <h6 class=\"category text-primary\">Design</h6>\n                        <h4 class=\"card-title\">Coco Kelley</h4>\n                        <p>\n                            Amber Lewis’s interior design blog takes you inside the creative workings of her Los Angeles–based studio. Keep an eye on this website for an industry insider’s point of view.\n                        </p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"section-story-overview\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <!-- First image on the left side -->\n                        <div class=\"image-container image-left\" style=\"background-image: url('assets/img/project24.jpg')\">\n                            <p class=\"blockquote blockquote-primary\">\"We provide a simple, approachable way to decorate your desired space with ease. Each e-décor is completely individualized\"\n                            </p>\n                        </div>\n                    </div>\n                    <div class=\"col-md-5\">\n                        <!-- First image on the right side, above the article -->\n                        <div class=\"image-container image-right\" style=\"background-image: url('assets/img/project23.jpg')\">\n                        </div>\n                        <h6 class=\"category text-primary\">E-Decor</h6>\n                        <h4 class=\"card-title\">Red Trad</h4>\n                        <p>\n                            We designed this new build family home located in Santa Monica with a mission to make the large size of the property, feel cozy, collected, and unique.\n                        </p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END PROJECTS 3      *********      -->\n    <!--     *********    PROJECTS 4     *********      -->\n    <div class=\"projects-4\" data-background-color=\"gray\">\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-md-8 mr-auto ml-auto text-center\">\n                    <h6 class=\"category text-muted\">Our work</h6>\n                    <h2 class=\"title\">Some of Our Awesome Projects - 4</h2>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6 px-0\">\n                    <div class=\"card card-fashion card-background\" style=\"background-image: url('assets/img/project14.jpg')\">\n                        <div class=\"card-body\">\n                            <div class=\"card-title text-left\">\n                                <h2>\n                                    <a href=\"#\">\n                                        The “crazy idea that could lead to a big future commission” project.\n                                    </a>\n                                </h2>\n                            </div>\n                            <div class=\"card-footer text-left\">\n                                <div class=\"stats\">\n                                    <span>\n                                        <i class=\"now-ui-icons objects_globe\"></i>The “Crazy idea” project\n                                    </span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6 px-0\">\n                    <div class=\"card-container\">\n                        <div class=\"card card-fashion\">\n                            <div class=\"card-title\">\n                                <a href=\"#\">\n                                    <h4>\n                                        <a href=\"#\">\n                                            The next time you’re on vacation, take advantage of all the work you can get done...\n                                        </a>\n                                    </h4>\n                                </a>\n                            </div>\n                            <div class=\"card-body\">\n                                <div class=\"card-footer\">\n                                    <div class=\"stats\">\n                                        <span>\n                                            <i class=\"now-ui-icons education_paper\"></i> The “I’m on vacation” project\n                                        </span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"card card-fashion card-background\" style=\"background-image: url('assets/img/project15.jpg')\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6 px-0\">\n                    <div class=\"card-container\">\n                        <div class=\"card card-fashion card-background\" style=\"background-image: url('assets/img/project17.jpg')\">\n                        </div>\n                        <div class=\"card card-fashion arrow-left\">\n                            <div class=\"card-title\">\n                                <h4>\n                                    <a href=\"#\">\n                                        The elements of Agile Project Management have been around for decades...\n                                    </a>\n                                </h4>\n                            </div>\n                            <div class=\"card-body\">\n                                <div class=\"card-footer\">\n                                    <div class=\"stats\">\n                                        <span>\n                                            <i class=\"now-ui-icons design_app\"></i>The \"Agile Project\" project\n                                        </span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6 px-0\">\n                    <div class=\"card card-fashion card-background\" style=\"background-image: url('assets/img/project16.jpg')\">\n                        <div class=\"card-body\">\n                            <div class=\"card-title text-left\">\n                                <h2>\n                                    <a href=\"#\">Performing a Project Premortem</a>\n                                </h2>\n                            </div>\n                            <div class=\"card-footer text-left\">\n                                <div class=\"stats\">\n                                    <span>\n                                        <i class=\"now-ui-icons media-2_sound-wave\"></i>The \"Premortem\" project\n                                    </span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END PROJECTS 4      *********      -->\n    <!--     *********    PROJECTS 5     *********      -->\n    <div class=\"projects-5\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                    <h2 class=\"title\">Some of Our Awesome Projects - 5</h2>\n                    <h4 class=\"description\">This is the paragraph where you can write more details about your projects. Keep you user engaged by providing meaningful information.</h4>\n                    <div class=\"section-space\"></div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-5 ml-auto\">\n                    <div class=\"card card-background card-background-product card-raised\" style=\"background-image: url('assets/img/project8.jpg')\">\n                        <div class=\"card-body\">\n                            <h2 class=\"card-title\">Social Analytics</h2>\n                            <p class=\"card-description\">\n                                Insight to help you create, connect, and convert. Understand Your Audience's Interests, Influence, Interactions, and Intent. Discover emerging topics and influencers to reach new audiences.\n                            </p>\n                            <label class=\"badge badge-neutral\">Analytics</label>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-5 mr-auto\">\n                    <div class=\"info info-horizontal\">\n                        <div class=\"icon icon-danger\">\n                            <i class=\"now-ui-icons ui-2_chat-round\"></i>\n                        </div>\n                        <div class=\"description\">\n                            <h4 class=\"info-title\">Listen to Social Conversations</h4>\n                            <p class=\"description\">\n                                Gain access to the demographics, psychographics, and location of unique people who talk about your brand.\n                            </p>\n                        </div>\n                    </div>\n                    <div class=\"info info-horizontal\">\n                        <div class=\"icon icon-danger\">\n                            <i class=\"now-ui-icons business_chart-pie-36\"></i>\n                        </div>\n                        <div class=\"description\">\n                            <h4 class=\"info-title\">Performance Analyze</h4>\n                            <p class=\"description\">\n                                Unify data from Facebook, Instagram, Twitter, LinkedIn, and Youtube to gain rich insights from easy-to-use reports.\n                            </p>\n                        </div>\n                    </div>\n                    <div class=\"info info-horizontal\">\n                        <div class=\"icon icon-danger\">\n                            <i class=\"now-ui-icons design-2_ruler-pencil\"></i>\n                        </div>\n                        <div class=\"description\">\n                            <h4 class=\"info-title\">Social Conversions</h4>\n                            <p class=\"description\">\n                                Track actions taken on your website that originated from social, and understand the impact on your bottom line.\n                            </p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <hr />\n            <div class=\"row\">\n                <div class=\"col-md-5 ml-auto mt-5\">\n                    <div class=\"info info-horizontal\">\n                        <div class=\"icon icon-warning\">\n                            <i class=\"now-ui-icons users_single-02\"></i>\n                        </div>\n                        <div class=\"description\">\n                            <h4 class=\"info-title\">Work With Any Team</h4>\n                            <p class=\"description\">\n                                Whether it’s for work or even the next family vacation, Trello helps your team.\n                            </p>\n                        </div>\n                    </div>\n                    <div class=\"info info-horizontal\">\n                        <div class=\"icon icon-warning\">\n                            <i class=\"now-ui-icons business_chart-bar-32\"></i>\n                        </div>\n                        <div class=\"description\">\n                            <h4 class=\"info-title\">A Productivity Platform</h4>\n                            <p class=\"description\">\n                                Integrate the apps your team already uses directly into your workflow.\n                            </p>\n                        </div>\n                    </div>\n                    <div class=\"info info-horizontal\">\n                        <div class=\"icon icon-warning\">\n                            <i class=\"now-ui-icons arrows-1_refresh-69\"></i>\n                        </div>\n                        <div class=\"description\">\n                            <h4 class=\"info-title\">Always In Sync</h4>\n                            <p class=\"description\">\n                                No matter where you are, Trello stays in sync across all of your devices.\n                            </p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-5 mr-auto\">\n                    <div class=\"card card-background card-background-product card-raised\" style=\"background-image: url('assets/img/project9.jpg')\">\n                        <div class=\"card-body\">\n                            <h2 class=\"card-title\">Trello lets you work.</h2>\n                            <p class=\"card-description \">\n                                Trello’s boards, lists, and cards enable you to organize and prioritize your projects in a fun, flexible and rewarding way.\n                            </p>\n                            <label class=\"badge badge-neutral\">Trello</label>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END PROJECTS 5      *********      -->\n</div>\n";
      /***/
    },

    /***/
    "E1l7":
    /*!*******************************************************************!*\
      !*** ./src/app/components/tables-areas/tables-areas.component.ts ***!
      \*******************************************************************/

    /*! exports provided: TablesAreasComponent */

    /***/
    function E1l7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TablesAreasComponent", function () {
        return TablesAreasComponent;
      });
      /* harmony import */


      var _raw_loader_tables_areas_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./tables-areas.component.html */
      "BwkF");
      /* harmony import */


      var _tables_areas_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tables-areas.component.scss */
      "4V5e");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var TablesAreasComponent = /*#__PURE__*/function () {
        function TablesAreasComponent() {
          _classCallCheck(this, TablesAreasComponent);
        }

        _createClass(TablesAreasComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.tableData1 = {
              headerRow: ['#', 'Name', 'Job Position', 'Since', 'Salary', 'Actions'],
              dataRows: [['1', 'Andrew Mike', 'Develop', '2013', '99,225', ''], ['2', 'John Doe', 'Design', '2012', '89,241', ''], ['3', 'Alex Mike', 'Design', '2010', '92,144', 'btn-neutral'], ['4', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-neutral'], ['5', 'Paul Dickens', 'Communication', '2015', '69,201', 'btn-round'], ['6', 'Manuel Rico', 'Manager', '2012', '99,201', 'btn-round']]
            };
            this.tableData2 = {
              headerRow: ['#', 'Product Name', 'Type', 'Qty', 'Price', 'Amount'],
              dataRows: [{
                id: 1,
                product_name: 'Moleskine Agenda',
                type: 'Office',
                qty: 25,
                price: '49',
                amount: '1225',
                check: false
              }, {
                id: 2,
                product_name: 'Stabilo Pen',
                type: 'Office',
                qty: 30,
                price: '10',
                amount: '300',
                check: true
              }, {
                id: 3,
                product_name: 'A4 Paper Pack',
                type: 'Office',
                qty: 50,
                price: '10.99',
                amount: '109',
                check: true
              }, {
                id: 4,
                product_name: 'Apple iPad',
                type: 'Meeting',
                qty: 10,
                price: '499.00',
                amount: '4990',
                check: false
              }, {
                id: 5,
                product_name: 'Apple iPhone',
                type: 'Communication',
                qty: 10,
                price: '599.00',
                amount: '5990',
                check: false
              }]
            };
            this.tableData3 = {
              headerRow: ['', '', 'Product', 'Color', 'Size', 'Price', 'QTY', 'Amount'],
              dataRows: [['saint-laurent.jpg', '	Suede Biker Jacket', 'by Saint Laurent', 'Black', 'M', '3390', '1', '3390'], ['balmain.jpg', '	Jersey T-Shirt', 'by Balmain', 'Black', 'M', '499', '2', '998'], ['prada.jpg', 'Slim-Fit Swim Short', 'by Prada', 'Red', 'M', '200', '1', '200']]
            };
          }
        }, {
          key: "getTotal1",
          value: function getTotal1() {
            var total = 0;

            for (var i = 0; i < this.tableData2.dataRows.length; i++) {
              var integer = parseInt(this.tableData2.dataRows[i].amount);
              total += integer;
            }

            return total;
          }
        }, {
          key: "getTotal2",
          value: function getTotal2() {
            var total = 0;

            for (var i = 0; i < this.tableData3.dataRows.length; i++) {
              var integer = parseInt(this.tableData3.dataRows[i][7]);
              total += integer;
            }

            return total;
          }
        }, {
          key: "showElements",
          value: function showElements() {
            for (var i = 0; i < this.tableData3.dataRows.length; i++) {
              console.log(this.tableData3.dataRows[i][1]);
            }
          }
        }]);

        return TablesAreasComponent;
      }();

      TablesAreasComponent.ctorParameters = function () {
        return [];
      };

      TablesAreasComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-tables-areas',
        template: _raw_loader_tables_areas_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tables_areas_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [])], TablesAreasComponent);
      /***/
    },

    /***/
    "EtQq":
    /*!***************************************************!*\
      !*** ./src/app/shared/navbar/navbar.component.ts ***!
      \***************************************************/

    /*! exports provided: NavbarComponent */

    /***/
    function EtQq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
        return NavbarComponent;
      });
      /* harmony import */


      var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "zRkE");
      /* harmony import */


      var _navbar_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./navbar.component.scss */
      "cruu");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! primeng/dynamicdialog */
      "J7/z");
      /* harmony import */


      var app_components_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! app/components/contact/contact.component */
      "G2Gn");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var NavbarComponent = /*#__PURE__*/function () {
        function NavbarComponent(location, element, dialogService, config) {
          _classCallCheck(this, NavbarComponent);

          this.location = location;
          this.element = element;
          this.dialogService = dialogService;
          this.config = config;
          this.sidebarVisible = false;
        }

        _createClass(NavbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var navbar = this.element.nativeElement;
            this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
          }
        }, {
          key: "openContactModal",
          value: function openContactModal() {
            this.ref = this.dialogService.open(app_components_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"], {
              width: '50%'
            });
          }
        }, {
          key: "sidebarOpen",
          value: function sidebarOpen() {
            var toggleButton = this.toggleButton;
            var html = document.getElementsByTagName('html')[0];
            setTimeout(function () {
              toggleButton.classList.add('toggled');
            }, 500);
            html.classList.add('nav-open');
            this.sidebarVisible = true;
          }
        }, {
          key: "sidebarClose",
          value: function sidebarClose() {
            var html = document.getElementsByTagName('html')[0];
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            html.classList.remove('nav-open');
          }
        }, {
          key: "sidebarToggle",
          value: function sidebarToggle() {
            if (this.sidebarVisible === false) {
              this.sidebarOpen();
            } else {
              this.sidebarClose();
            }
          }
        }, {
          key: "isHome",
          value: function isHome() {
            var titlee = this.location.prepareExternalUrl(this.location.path());

            if (titlee === '/home') {
              return true;
            } else {
              return false;
            }
          }
        }, {
          key: "isDocumentation",
          value: function isDocumentation() {
            var titlee = this.location.prepareExternalUrl(this.location.path());

            if (titlee === '/documentation') {
              return true;
            } else {
              return false;
            }
          }
        }]);

        return NavbarComponent;
      }();

      NavbarComponent.ctorParameters = function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_4__["DialogService"]
        }, {
          type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_4__["DynamicDialogConfig"]
        }];
      };

      NavbarComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-navbar',
        template: _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        providers: [primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_4__["DialogService"], primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_4__["DynamicDialogConfig"], app_components_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"]],
        styles: [_navbar_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_4__["DialogService"], primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_4__["DynamicDialogConfig"]])], NavbarComponent);
      /***/
    },

    /***/
    "FNFX":
    /*!*****************************************************!*\
      !*** ./src/app/sections/blogs/blogs.component.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function FNFX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9ncy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "FX1G":
    /*!***********************************************************************!*\
      !*** ./src/app/components/comments-areas/comments-areas.component.ts ***!
      \***********************************************************************/

    /*! exports provided: CommentsAreasComponent */

    /***/
    function FX1G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommentsAreasComponent", function () {
        return CommentsAreasComponent;
      });
      /* harmony import */


      var _raw_loader_comments_areas_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./comments-areas.component.html */
      "K8OV");
      /* harmony import */


      var _comments_areas_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./comments-areas.component.scss */
      "+XEL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var CommentsAreasComponent = /*#__PURE__*/function () {
        function CommentsAreasComponent() {
          _classCallCheck(this, CommentsAreasComponent);

          this.page = 1;
          this.page1 = 3;
        }

        _createClass(CommentsAreasComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CommentsAreasComponent;
      }();

      CommentsAreasComponent.ctorParameters = function () {
        return [];
      };

      CommentsAreasComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-comments-areas',
        template: _raw_loader_comments_areas_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_comments_areas_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [])], CommentsAreasComponent);
      /***/
    },

    /***/
    "G2Gn":
    /*!*********************************************************!*\
      !*** ./src/app/components/contact/contact.component.ts ***!
      \*********************************************************/

    /*! exports provided: ContactComponent */

    /***/
    function G2Gn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
        return ContactComponent;
      });
      /* harmony import */


      var _raw_loader_contact_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./contact.component.html */
      "jmJk");
      /* harmony import */


      var _contact_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./contact.component.scss */
      "P7M0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! primeng/dynamicdialog */
      "J7/z");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var ContactComponent = /*#__PURE__*/function () {
        function ContactComponent(ref, config) {
          _classCallCheck(this, ContactComponent);

          this.ref = ref;
          this.config = config;
        }

        _createClass(ContactComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "closeModal",
          value: function closeModal() {
            this.ref.close();
          }
        }]);

        return ContactComponent;
      }();

      ContactComponent.ctorParameters = function () {
        return [{
          type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_3__["DynamicDialogRef"]
        }, {
          type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_3__["DynamicDialogConfig"]
        }];
      };

      ContactComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-contact',
        template: _raw_loader_contact_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_contact_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_3__["DynamicDialogRef"], primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_3__["DynamicDialogConfig"]])], ContactComponent);
      /***/
    },

    /***/
    "G7Kx":
    /*!*************************************************************!*\
      !*** ./src/app/examples/blogposts/blogposts.component.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function G7Kx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9ncG9zdHMuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "Gdn9":
    /*!*********************************************!*\
      !*** ./src/app/services/product.service.ts ***!
      \*********************************************/

    /*! exports provided: ProductService */

    /***/
    function Gdn9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductService", function () {
        return ProductService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var ProductService = /*#__PURE__*/function () {
        function ProductService(http) {
          _classCallCheck(this, ProductService);

          this.http = http;
          this.status = ['OUTOFSTOCK', 'INSTOCK', 'LOWSTOCK'];
          this.productNames = ['Bamboo Watch', 'Black Watch', 'Blue Band', 'Blue T-Shirt', 'Bracelet', 'Brown Purse', 'Chakra Bracelet', 'Galaxy Earrings', 'Game Controller', 'Gaming Set', 'Gold Phone Case', 'Green Earbuds', 'Green T-Shirt', 'Grey T-Shirt', 'Headphones', 'Light Green T-Shirt', 'Lime Band', 'Mini Speakers', 'Painted Phone Case', 'Pink Band', 'Pink Purse', 'Purple Band', 'Purple Gemstone Necklace', 'Purple T-Shirt', 'Shoes', 'Sneakers', 'Teal T-Shirt', 'Yellow Earbuds', 'Yoga Mat', 'Yoga Set'];
        }

        _createClass(ProductService, [{
          key: "getProductsSmall",
          value: function getProductsSmall() {
            return this.http.get('assets/data/products-small.json').toPromise().then(function (res) {
              return res.data;
            }).then(function (data) {
              return data;
            });
          }
        }, {
          key: "getProducts",
          value: function getProducts() {
            return this.http.get('assets/data/products.json').toPromise().then(function (res) {
              return res.data;
            }).then(function (data) {
              return data;
            });
          }
        }, {
          key: "getProductsWithOrdersSmall",
          value: function getProductsWithOrdersSmall() {
            return this.http.get('assets/data/products-orders-small.json').toPromise().then(function (res) {
              return res.data;
            }).then(function (data) {
              return data;
            });
          }
        }, {
          key: "generatePrduct",
          value: function generatePrduct() {
            var product = {
              id: this.generateId(),
              name: this.generateName(),
              description: 'Product Description',
              price: this.generatePrice(),
              quantity: this.generateQuantity(),
              category: 'Product Category',
              inventoryStatus: this.generateStatus(),
              rating: this.generateRating()
            };
            product.image = product.name.toLocaleLowerCase().split(/[ ,]+/).join('-') + '.jpg';
            return product;
          }
        }, {
          key: "generateId",
          value: function generateId() {
            var text = '';
            var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

            for (var i = 0; i < 5; i++) {
              text += possible.charAt(Math.floor(Math.random() * possible.length));
            }

            return text;
          }
        }, {
          key: "generateName",
          value: function generateName() {
            return this.productNames[Math.floor(Math.random() * Math.floor(30))];
          }
        }, {
          key: "generatePrice",
          value: function generatePrice() {
            return Math.floor(Math.random() * Math.floor(299) + 1);
          }
        }, {
          key: "generateQuantity",
          value: function generateQuantity() {
            return Math.floor(Math.random() * Math.floor(75) + 1);
          }
        }, {
          key: "generateStatus",
          value: function generateStatus() {
            return this.status[Math.floor(Math.random() * Math.floor(3))];
          }
        }, {
          key: "generateRating",
          value: function generateRating() {
            return Math.floor(Math.random() * Math.floor(5) + 1);
          }
        }]);

        return ProductService;
      }();

      ProductService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
        }];
      };

      ProductService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])], ProductService);
      /***/
    },

    /***/
    "I4vR":
    /*!*******************************************************************!*\
      !*** ./src/app/components/work-history/work-history.component.ts ***!
      \*******************************************************************/

    /*! exports provided: WorkHistoryComponent */

    /***/
    function I4vR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WorkHistoryComponent", function () {
        return WorkHistoryComponent;
      });
      /* harmony import */


      var _raw_loader_work_history_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./work-history.component.html */
      "dQ/m");
      /* harmony import */


      var _work_history_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./work-history.component.scss */
      "5v2N");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var app_services_job_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! app/services/job.service */
      "qLOZ");
      /* harmony import */


      var app_services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! app/services/product.service */
      "Gdn9");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var WorkHistoryComponent = /*#__PURE__*/function () {
        function WorkHistoryComponent(jobService, productService) {
          _classCallCheck(this, WorkHistoryComponent);

          this.jobService = jobService;
          this.productService = productService;
          this.jobs = []; // expandedJobs: number[] = [];

          this.expandedJobs = {};
        }

        _createClass(WorkHistoryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getJobs();
            this.getProducts();
          }
        }, {
          key: "getJobs",
          value: function getJobs() {
            var _this2 = this;

            return this.jobService.getJobs().subscribe(function (data) {
              _this2.jobs = data.jobs;

              _this2.jobs.sort(function (a, b) {
                return a.id - b.id;
              });
            });
          }
        }, {
          key: "getProducts",
          value: function getProducts() {
            var _this3 = this;

            this.productService.getProductsWithOrdersSmall().then(function (data) {
              _this3.products = data;
              console.log(_this3.products);
            });
          } // displayDetails(selectedJob) {
          //   let superJenkyJoshArray = [];
          //   this.jobDetails = selectedJob.id;
          //   if (!this.isExpanded(this.jobDetails)) {
          //     this.expandedJobs.push(selectedJob.id);
          //   } else {
          //     for (let i = 0; i < this.expandedJobs.length; i++) {
          //       if (this.expandedJobs[i] !== this.jobDetails) {
          //         superJenkyJoshArray.push(this.expandedJobs[i]);
          //       }
          //     }
          //     this.expandedJobs = superJenkyJoshArray;
          //   }
          //   console.log(this.expandedJobs);
          // }
          // Checking which job details are being displayed from the expandedJobs array
          // displayDetails(selectedJob) {
          //   this.jobDetails = selectedJob.id;
          //   if (!this.isExpanded(this.jobDetails)) {
          //     this.expandedJobs.push(selectedJob.id);
          //   } else {
          //     this.expandedJobs.splice(this.expandedJobs.indexOf(selectedJob.id), 1);
          //   }
          //   console.log(this.expandedJobs);
          // }
          // Object key based tracking

        }, {
          key: "displayDetails",
          value: function displayDetails(selectedJob) {
            this.jobDetails = selectedJob.id;

            if (!this.isExpanded(this.jobDetails)) {
              this.expandedJobs[this.jobDetails] = true;
            } else {
              this.expandedJobs[this.jobDetails] = false;
            }
          }
        }, {
          key: "isExpanded",
          value: function isExpanded(jobId) {
            return this.expandedJobs[jobId];
          }
        }]);

        return WorkHistoryComponent;
      }();

      WorkHistoryComponent.ctorParameters = function () {
        return [{
          type: app_services_job_service__WEBPACK_IMPORTED_MODULE_3__["JobService"]
        }, {
          type: app_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]
        }];
      };

      WorkHistoryComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-work-history',
        template: _raw_loader_work_history_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        providers: [app_services_job_service__WEBPACK_IMPORTED_MODULE_3__["JobService"], app_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]],
        styles: [_work_history_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [app_services_job_service__WEBPACK_IMPORTED_MODULE_3__["JobService"], app_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]])], WorkHistoryComponent);
      /***/
    },

    /***/
    "IBmT":
    /*!*******************************************************************!*\
      !*** ./src/app/components/nucleoicons/nucleoicons.component.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function IBmT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".nucleo-icons-style,\n.nucleo-icons-style,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* .nucleo-icons-style5 display-role reset for older browsers */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection,\nmain {\n  display: block;\n}\n\n.nucleo-icons-style {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/* --------------------------------\n\nNucleo Outline Web Font - nucleoapp.com/\nLicense - nucleoapp.com/license/\nCreated using IcoMoon - icomoon.io\n\n-------------------------------- */\n\n/* --------------------------------\n\nPrimary style\n\n-------------------------------- */\n\n*,\n*::after,\n*::before {\n  box-sizing: border-box;\n}\n\n.nucleo-icons-style {\n  font-size: 62.5%;\n}\n\n.nucleo-icons-style {\n  font-size: 1.6rem;\n  font-family: sans-serif;\n  color: #333333;\n  background: #efefef;\n}\n\na {\n  color: #766acf;\n  text-decoration: none;\n}\n\n/* --------------------------------\n\nMain components\n\n-------------------------------- */\n\nheader {\n  text-align: center;\n  padding: 120px 0 0;\n}\n\nheader h1 {\n  font-size: 1.2rem;\n}\n\nheader p {\n  font-size: 0.9rem;\n  margin-top: 0.6em;\n}\n\nheader a:hover {\n  text-decoration: underline;\n}\n\nsection {\n  width: 90%;\n  max-width: 1200px;\n  margin: 50px auto;\n}\n\nsection h2 {\n  border-bottom: 1px solid #e2e2e2;\n  padding: 0 0 1em 0.2em;\n  margin-bottom: 1em;\n  font-size: 1rem;\n}\n\nul::after {\n  clear: both;\n  content: \"\";\n  display: table;\n}\n\nul li {\n  width: 25%;\n  float: left;\n  padding: 16px 0;\n  text-align: center;\n  border-radius: 0.25em;\n  transition: background 0.2s;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  overflow: hidden;\n}\n\nul li:hover {\n  background: #dbdbdb;\n}\n\nul p,\nul em,\nul input {\n  display: inline-block;\n  font-size: 0.7rem;\n  color: #999999;\n  -webkit-user-select: auto;\n  -moz-user-select: auto;\n  -ms-user-select: auto;\n  user-select: auto;\n  white-space: nowrap;\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  cursor: pointer;\n}\n\nul p {\n  padding: 10px;\n  margin-top: 10px;\n}\n\nul p::-moz-selection, ul em::-moz-selection {\n  background: #766acf;\n  color: #efefef;\n}\n\nul p::selection,\nul em::selection {\n  background: #766acf;\n  color: #efefef;\n}\n\nul em {\n  margin-bottom: 8px;\n}\n\nul em::before {\n  content: \"[\";\n}\n\nul em::after {\n  content: \"]\";\n}\n\nul input {\n  text-align: center;\n  background: transparent;\n  border: none;\n  box-shadow: none;\n  outline: none;\n}\n\n@media only screen and (min-width: 768px) {\n  ul li {\n    width: 20%;\n    float: left;\n  }\n}\n\n@media only screen and (min-width: 1024px) {\n  ul li {\n    width: 12.5%;\n    float: left;\n    padding: 32px 0;\n  }\n}\n\n/* --------------------------------\n\nSmart fixed navigation\n\n-------------------------------- */\n\n#cd-nav ul {\n  /* mobile first */\n  position: fixed;\n  width: 90%;\n  max-width: 400px;\n  max-height: 90%;\n  right: 5%;\n  bottom: 5%;\n  border-radius: 0.25em;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  background: white;\n  visibility: hidden;\n  /* remove overflow:hidden if you want to create a drop-down menu - but then remember to fix/eliminate the list items animation */\n  overflow: hidden;\n  overflow-y: auto;\n  z-index: 1;\n  /* Force Hardware Acceleration in WebKit */\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  transform: scale(0);\n  transform-origin: 100% 100%;\n  transition: transform 0.3s, visibility 0s 0.3s;\n}\n\n#cd-nav ul li {\n  /* Force Hardware Acceleration in WebKit */\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  display: block;\n  width: 100%;\n  padding: 0;\n  text-align: left;\n}\n\n#cd-nav ul li:hover {\n  background-color: #FFF;\n}\n\n#cd-nav ul.is-visible {\n  visibility: visible;\n  transform: scale(1);\n  transition: transform 0.3s, visibility 0s 0s;\n}\n\n#cd-nav li a {\n  display: block;\n  padding: 1em;\n  font-size: 1.2rem;\n  border-bottom: 1px solid #eff2f6;\n}\n\n#cd-nav li a:hover {\n  color: #333333;\n}\n\n#cd-nav li:last-child a {\n  border-bottom: none;\n}\n\n.cd-nav-trigger {\n  position: fixed;\n  bottom: 5%;\n  right: 5%;\n  width: 44px;\n  height: 44px;\n  background: white;\n  border-radius: 0.25em;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  /* image replacement */\n  overflow: hidden;\n  text-indent: 100%;\n  white-space: nowrap;\n  z-index: 2;\n}\n\n.cd-nav-trigger span {\n  /* the span element is used to create the menu icon */\n  position: absolute;\n  display: block;\n  width: 20px;\n  height: 2px;\n  background: #333333;\n  top: 50%;\n  margin-top: -1px;\n  left: 50%;\n  margin-left: -10px;\n  transition: background 0.3s;\n}\n\n.cd-nav-trigger span::before,\n.cd-nav-trigger span::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  background: inherit;\n  width: 100%;\n  height: 100%;\n  /* Force Hardware Acceleration in WebKit */\n  transform: translateZ(0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  transition: transform 0.3s, background 0s;\n}\n\n.cd-nav-trigger span::before {\n  top: -6px;\n  transform: rotate(0);\n}\n\n.cd-nav-trigger span::after {\n  bottom: -6px;\n  transform: rotate(0);\n}\n\n.cd-nav-trigger.menu-is-open {\n  box-shadow: none;\n}\n\n.cd-nav-trigger.menu-is-open span {\n  background: rgba(232, 74, 100, 0);\n}\n\n.cd-nav-trigger.menu-is-open span::before,\n.cd-nav-trigger.menu-is-open span::after {\n  background: #333333;\n}\n\n.cd-nav-trigger.menu-is-open span::before {\n  top: 0;\n  transform: rotate(135deg);\n}\n\n.cd-nav-trigger.menu-is-open span::after {\n  bottom: 0;\n  transform: rotate(225deg);\n}\n\n.now-ui-icons {\n  display: inline-block;\n  font: normal normal normal 32px/1 \"Nucleo Outline\";\n  speak: none;\n  text-transform: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL251Y2xlb2ljb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFpRkksU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtBQUNKOztBQUVBLCtEQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7RUFZSSxjQUFBO0FBQUo7O0FBR0E7RUFDSSxjQUFBO0FBQUo7O0FBR0E7O0VBRUksZ0JBQUE7QUFBSjs7QUFHQTs7RUFFSSxZQUFBO0FBQUo7O0FBR0E7Ozs7RUFJSSxXQUFBO0VBQ0EsYUFBQTtBQUFKOztBQUdBO0VBQ0kseUJBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUtBOzs7Ozs7a0NBQUE7O0FBUUE7Ozs7a0NBQUE7O0FBTUE7OztFQUdJLHNCQUFBO0FBSko7O0FBT0E7RUFDSSxnQkFBQTtBQUpKOztBQU9BO0VBQ0ksaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQUpKOztBQU9BO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0FBSko7O0FBT0E7Ozs7a0NBQUE7O0FBTUE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FBTEo7O0FBUUE7RUFDSSxpQkFBQTtBQUxKOztBQVFBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBQUxKOztBQVFBO0VBQ0ksMEJBQUE7QUFMSjs7QUFRQTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBTEo7O0FBUUE7RUFDSSxnQ0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBTEo7O0FBUUE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFMSjs7QUFRQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFHQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFMSjs7QUFRQTtFQUNJLG1CQUFBO0FBTEo7O0FBUUE7OztFQUdJLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQUxKOztBQVFBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0FBTEo7O0FBUUE7RUFFSSxtQkFBQTtFQUNBLGNBQUE7QUFMSjs7QUFFQTs7RUFFSSxtQkFBQTtFQUNBLGNBQUE7QUFMSjs7QUFRQTtFQUNJLGtCQUFBO0FBTEo7O0FBUUE7RUFDSSxZQUFBO0FBTEo7O0FBUUE7RUFDSSxZQUFBO0FBTEo7O0FBUUE7RUFDSSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQUxKOztBQVFBO0VBQ0k7SUFDSSxVQUFBO0lBQ0EsV0FBQTtFQUxOO0FBQ0Y7O0FBUUE7RUFDSTtJQUNJLFlBQUE7SUFDQSxXQUFBO0lBQ0EsZUFBQTtFQU5OO0FBQ0Y7O0FBU0E7Ozs7a0NBQUE7O0FBTUE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLHVDQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdJQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSwwQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsMkJBQUE7RUFLQSxtQkFBQTtFQUtBLDJCQUFBO0VBR0EsOENBQUE7QUFSSjs7QUFXQTtFQUNJLDBDQUFBO0VBQ0EsbUNBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBUko7O0FBV0E7RUFDSSxzQkFBQTtBQVJKOztBQVdBO0VBQ0ksbUJBQUE7RUFLQSxtQkFBQTtFQUdBLDRDQUFBO0FBUko7O0FBV0E7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7QUFSSjs7QUFXQTtFQUNJLGNBQUE7QUFSSjs7QUFXQTtFQUNJLG1CQUFBO0FBUko7O0FBV0E7RUFDSSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSx1Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQVJKOztBQVdBO0VBQ0kscURBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBR0EsMkJBQUE7QUFSSjs7QUFXQTs7RUFFSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBDQUFBO0VBS0Esd0JBQUE7RUFDQSxtQ0FBQTtFQUNBLDJCQUFBO0VBR0EseUNBQUE7QUFSSjs7QUFXQTtFQUNJLFNBQUE7RUFLQSxvQkFBQTtBQVJKOztBQVdBO0VBQ0ksWUFBQTtFQUtBLG9CQUFBO0FBUko7O0FBV0E7RUFDSSxnQkFBQTtBQVJKOztBQVdBO0VBQ0ksaUNBQUE7QUFSSjs7QUFXQTs7RUFFSSxtQkFBQTtBQVJKOztBQVdBO0VBQ0ksTUFBQTtFQUtBLHlCQUFBO0FBUko7O0FBV0E7RUFDSSxTQUFBO0VBS0EseUJBQUE7QUFSSjs7QUFXQTtFQUNJLHFCQUFBO0VBQ0Esa0RBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0FBUkoiLCJmaWxlIjoibnVjbGVvaWNvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubnVjbGVvLWljb25zLXN0eWxlLFxuLm51Y2xlby1pY29ucy1zdHlsZSxcbmRpdixcbnNwYW4sXG5hcHBsZXQsXG5vYmplY3QsXG5pZnJhbWUsXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYsXG5wLFxuYmxvY2txdW90ZSxcbnByZSxcbmEsXG5hYmJyLFxuYWNyb255bSxcbmFkZHJlc3MsXG5iaWcsXG5jaXRlLFxuY29kZSxcbmRlbCxcbmRmbixcbmVtLFxuaW1nLFxuaW5zLFxua2JkLFxucSxcbnMsXG5zYW1wLFxuc21hbGwsXG5zdHJpa2UsXG5zdHJvbmcsXG5zdWIsXG5zdXAsXG50dCxcbnZhcixcbmIsXG51LFxuaSxcbmNlbnRlcixcbmRsLFxuZHQsXG5kZCxcbm9sLFxudWwsXG5saSxcbmZpZWxkc2V0LFxuZm9ybSxcbmxhYmVsLFxubGVnZW5kLFxudGFibGUsXG5jYXB0aW9uLFxudGJvZHksXG50Zm9vdCxcbnRoZWFkLFxudHIsXG50aCxcbnRkLFxuYXJ0aWNsZSxcbmFzaWRlLFxuY2FudmFzLFxuZGV0YWlscyxcbmVtYmVkLFxuZmlndXJlLFxuZmlnY2FwdGlvbixcbmZvb3RlcixcbmhlYWRlcixcbmhncm91cCxcbm1lbnUsXG5uYXYsXG5vdXRwdXQsXG5ydWJ5LFxuc2VjdGlvbixcbnN1bW1hcnksXG50aW1lLFxubWFyayxcbmF1ZGlvLFxudmlkZW8ge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogMDtcbiAgICBmb250LXNpemU6IDEwMCU7XG4gICAgZm9udDogaW5oZXJpdDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbi8qIC5udWNsZW8taWNvbnMtc3R5bGU1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cblxuYXJ0aWNsZSxcbmFzaWRlLFxuZGV0YWlscyxcbmZpZ2NhcHRpb24sXG5maWd1cmUsXG5mb290ZXIsXG5oZWFkZXIsXG5oZ3JvdXAsXG5tZW51LFxubmF2LFxuc2VjdGlvbixcbm1haW4ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubnVjbGVvLWljb25zLXN0eWxlIHtcbiAgICBsaW5lLWhlaWdodDogMTtcbn1cblxub2wsXG51bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuYmxvY2txdW90ZSxcbnEge1xuICAgIHF1b3Rlczogbm9uZTtcbn1cblxuYmxvY2txdW90ZTpiZWZvcmUsXG5ibG9ja3F1b3RlOmFmdGVyLFxucTpiZWZvcmUsXG5xOmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBjb250ZW50OiBub25lO1xufVxuXG50YWJsZSB7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICBib3JkZXItc3BhY2luZzogMDtcbn1cblxuXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbk51Y2xlbyBPdXRsaW5lIFdlYiBGb250IC0gbnVjbGVvYXBwLmNvbS9cbkxpY2Vuc2UgLSBudWNsZW9hcHAuY29tL2xpY2Vuc2UvXG5DcmVhdGVkIHVzaW5nIEljb01vb24gLSBpY29tb29uLmlvXG5cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblByaW1hcnkgc3R5bGVcblxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuKixcbio6OmFmdGVyLFxuKjo6YmVmb3JlIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4ubnVjbGVvLWljb25zLXN0eWxlIHtcbiAgICBmb250LXNpemU6IDYyLjUlO1xufVxuXG4ubnVjbGVvLWljb25zLXN0eWxlIHtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogIzMzMzMzMztcbiAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xufVxuXG5hIHtcbiAgICBjb2xvcjogIzc2NmFjZjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbk1haW4gY29tcG9uZW50c1xuXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5oZWFkZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMjBweCAwIDA7XG59XG5cbmhlYWRlciBoMSB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbmhlYWRlciBwIHtcbiAgICBmb250LXNpemU6IC45cmVtO1xuICAgIG1hcmdpbi10b3A6IC42ZW07XG59XG5cbmhlYWRlciBhOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuc2VjdGlvbiB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgICBtYXJnaW46IDUwcHggYXV0bztcbn1cblxuc2VjdGlvbiBoMiB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMmUyZTI7XG4gICAgcGFkZGluZzogMCAwIDFlbSAuMmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICBmb250LXNpemU6IDFyZW07XG59XG5cbnVsOjphZnRlciB7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbn1cblxudWwgbGkge1xuICAgIHdpZHRoOiAyNSU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcGFkZGluZzogMTZweCAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAuMjVlbTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycztcbiAgICAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycztcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnM7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG51bCBsaTpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogI2RiZGJkYjtcbn1cblxudWwgcCxcbnVsIGVtLFxudWwgaW5wdXQge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICBjb2xvcjogIzk5OTk5OTtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBhdXRvO1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IGF1dG87XG4gICAgLW1zLXVzZXItc2VsZWN0OiBhdXRvO1xuICAgIHVzZXItc2VsZWN0OiBhdXRvO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbnVsIHAge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxudWwgcDo6c2VsZWN0aW9uLFxudWwgZW06OnNlbGVjdGlvbiB7XG4gICAgYmFja2dyb3VuZDogIzc2NmFjZjtcbiAgICBjb2xvcjogI2VmZWZlZjtcbn1cblxudWwgZW0ge1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxudWwgZW06OmJlZm9yZSB7XG4gICAgY29udGVudDogJ1snO1xufVxuXG51bCBlbTo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICddJztcbn1cblxudWwgaW5wdXQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgdWwgbGkge1xuICAgICAgICB3aWR0aDogMjAlO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgdWwgbGkge1xuICAgICAgICB3aWR0aDogMTIuNSU7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBwYWRkaW5nOiAzMnB4IDA7XG4gICAgfVxufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5TbWFydCBmaXhlZCBuYXZpZ2F0aW9uXG5cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiNjZC1uYXYgdWwge1xuICAgIC8qIG1vYmlsZSBmaXJzdCAqL1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgbWF4LWhlaWdodDogOTAlO1xuICAgIHJpZ2h0OiA1JTtcbiAgICBib3R0b206IDUlO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIC8qIHJlbW92ZSBvdmVyZmxvdzpoaWRkZW4gaWYgeW91IHdhbnQgdG8gY3JlYXRlIGEgZHJvcC1kb3duIG1lbnUgLSBidXQgdGhlbiByZW1lbWJlciB0byBmaXgvZWxpbWluYXRlIHRoZSBsaXN0IGl0ZW1zIGFuaW1hdGlvbiAqL1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICB6LWluZGV4OiAxO1xuICAgIC8qIEZvcmNlIEhhcmR3YXJlIEFjY2VsZXJhdGlvbiBpbiBXZWJLaXQgKi9cbiAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICAtby10cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDEwMCU7XG4gICAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDEwMCU7XG4gICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMTAwJTtcbiAgICAtby10cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDEwMCU7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAxMDAlO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4zcywgdmlzaWJpbGl0eSAwcyAwLjNzO1xuICAgIC1tb3otdHJhbnNpdGlvbjogLW1vei10cmFuc2Zvcm0gMC4zcywgdmlzaWJpbGl0eSAwcyAwLjNzO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzLCB2aXNpYmlsaXR5IDBzIDAuM3M7XG59XG5cbiNjZC1uYXYgdWwgbGkge1xuICAgIC8qIEZvcmNlIEhhcmR3YXJlIEFjY2VsZXJhdGlvbiBpbiBXZWJLaXQgKi9cbiAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4jY2QtbmF2IHVsIGxpOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xufVxuXG4jY2QtbmF2IHVsLmlzLXZpc2libGUge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAtby10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjNzLCB2aXNpYmlsaXR5IDBzIDBzO1xuICAgIC1tb3otdHJhbnNpdGlvbjogLW1vei10cmFuc2Zvcm0gMC4zcywgdmlzaWJpbGl0eSAwcyAwcztcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcywgdmlzaWJpbGl0eSAwcyAwcztcbn1cblxuI2NkLW5hdiBsaSBhIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAxZW07XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZmYyZjY7XG59XG5cbiNjZC1uYXYgbGkgYTpob3ZlciB7XG4gICAgY29sb3I6ICMzMzMzMzM7XG59XG5cbiNjZC1uYXYgbGk6bGFzdC1jaGlsZCBhIHtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4uY2QtbmF2LXRyaWdnZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDUlO1xuICAgIHJpZ2h0OiA1JTtcbiAgICB3aWR0aDogNDRweDtcbiAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAvKiBpbWFnZSByZXBsYWNlbWVudCAqL1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1pbmRlbnQ6IDEwMCU7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB6LWluZGV4OiAyO1xufVxuXG4uY2QtbmF2LXRyaWdnZXIgc3BhbiB7XG4gICAgLyogdGhlIHNwYW4gZWxlbWVudCBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgbWVudSBpY29uICovXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMnB4O1xuICAgIGJhY2tncm91bmQ6ICMzMzMzMzM7XG4gICAgdG9wOiA1MCU7XG4gICAgbWFyZ2luLXRvcDogLTFweDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzO1xuICAgIC1tb3otdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcztcbn1cblxuLmNkLW5hdi10cmlnZ2VyIHNwYW46OmJlZm9yZSxcbi5jZC1uYXYtdHJpZ2dlciBzcGFuOjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgLyogRm9yY2UgSGFyZHdhcmUgQWNjZWxlcmF0aW9uIGluIFdlYktpdCAqL1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjNzLCBiYWNrZ3JvdW5kIDBzO1xuICAgIC1tb3otdHJhbnNpdGlvbjogLW1vei10cmFuc2Zvcm0gMC4zcywgYmFja2dyb3VuZCAwcztcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcywgYmFja2dyb3VuZCAwcztcbn1cblxuLmNkLW5hdi10cmlnZ2VyIHNwYW46OmJlZm9yZSB7XG4gICAgdG9wOiAtNnB4O1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XG59XG5cbi5jZC1uYXYtdHJpZ2dlciBzcGFuOjphZnRlciB7XG4gICAgYm90dG9tOiAtNnB4O1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XG59XG5cbi5jZC1uYXYtdHJpZ2dlci5tZW51LWlzLW9wZW4ge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5jZC1uYXYtdHJpZ2dlci5tZW51LWlzLW9wZW4gc3BhbiB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyMzIsIDc0LCAxMDAsIDApO1xufVxuXG4uY2QtbmF2LXRyaWdnZXIubWVudS1pcy1vcGVuIHNwYW46OmJlZm9yZSxcbi5jZC1uYXYtdHJpZ2dlci5tZW51LWlzLW9wZW4gc3Bhbjo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQ6ICMzMzMzMzM7XG59XG5cbi5jZC1uYXYtdHJpZ2dlci5tZW51LWlzLW9wZW4gc3Bhbjo6YmVmb3JlIHtcbiAgICB0b3A6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XG59XG5cbi5jZC1uYXYtdHJpZ2dlci5tZW51LWlzLW9wZW4gc3Bhbjo6YWZ0ZXIge1xuICAgIGJvdHRvbTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDIyNWRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgyMjVkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyMjVkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDIyNWRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjI1ZGVnKTtcbn1cblxuLm5vdy11aS1pY29ucyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDMycHgvMSAnTnVjbGVvIE91dGxpbmUnO1xuICAgIHNwZWFrOiBub25lO1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "K8OV":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/comments-areas/comments-areas.component.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function K8OV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"section section-nude-gray\">\n    <div class=\"container container-tim\">\n      <div id=\"comments\">\n          <div class=\"title\">\n              <h3>\n                  <small>Comments</small>\n              </h3>\n          </div>\n          <div class=\"row\">\n              <div class=\"col-md-8 ml-auto mr-auto\">\n                  <div class=\"media-area\">\n                      <h3 class=\"title text-center\">\n                          <small>10 Comments</small>\n                      </h3>\n                      <div class=\"media\">\n                          <a class=\"pull-left\" href=\"#\">\n                              <div class=\"avatar\">\n                                  <img class=\"media-object img-raised\" src=\"assets/img/marie.jpg\" alt=\"...\" />\n                              </div>\n                          </a>\n                          <div class=\"media-body\">\n                              <h5 class=\"media-heading\">Tina Andrew\n                                  <small class=\"text-muted\">&middot; 7 minutes ago</small>\n                              </h5>\n                              <p>Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!</p>\n                              <p>All praises and blessings to the families of people who never gave up on dreams. Don't forget, You're Awesome!</p>\n                              <div class=\"media-footer\">\n                                  <a href=\"#\" class=\"btn btn-primary btn-neutral pull-right\" placement=\"top\" ngbTooltip=\"Reply to Comment\">\n                                      <i class=\"now-ui-icons ui-1_send\"></i> Reply\n                                  </a>\n                                  <a href=\"#\" class=\"btn btn-danger btn-neutral pull-right\">\n                                      <i class=\"now-ui-icons ui-2_favourite-28\"></i> 243\n                                  </a>\n                              </div>\n                              <div class=\"media media-post\">\n                                  <a class=\"pull-left author\" href=\"#\">\n                                      <div class=\"avatar\">\n                                          <img class=\"media-object img-raised\" alt=\"64x64\" src=\"assets/img/michael.jpg\">\n                                      </div>\n                                  </a>\n                                  <div class=\"media-body\">\n                                      <textarea class=\"form-control\" placeholder=\"Write a nice reply or go home...\" rows=\"4\"></textarea>\n                                      <div class=\"media-footer\">\n                                          <a href=\"#\" class=\"btn btn-primary pull-right\">\n                                              <i class=\"now-ui-icons ui-1_send\"></i> Reply\n                                          </a>\n                                      </div>\n                                  </div>\n                              </div>\n                          </div>\n                      </div>\n                      <div class=\"media\">\n                          <a class=\"pull-left\" href=\"#\">\n                              <div class=\"avatar\">\n                                  <img class=\"media-object img-raised\" alt=\"Tim Picture\" src=\"assets/img/olivia.jpg\">\n                              </div>\n                          </a>\n                          <div class=\"media-body\">\n                              <h5 class=\"media-heading\">John Camber\n                                  <small class=\"text-muted\">&middot; Yesterday</small>\n                              </h5>\n                              <p>Hello guys, nice to have you on the platform! There will be a lot of great stuff coming soon. We will keep you posted for the latest news.</p>\n                              <p> Don't forget, You're Awesome!</p>\n                              <div class=\"media-footer\">\n                                  <a href=\"#\" class=\"btn btn-primary btn-neutral pull-right\" placement=\"top\" ngbTooltip=\"Reply to Comment\">\n                                      <i class=\"now-ui-icons ui-1_send\"></i> Reply\n                                  </a>\n                                  <a href=\"#\" class=\"btn btn-default btn-neutral pull-right\">\n                                      <i class=\"now-ui-icons ui-2_favourite-28\"></i> 25\n                                  </a>\n                              </div>\n                              <div class=\"media\">\n                                  <a class=\"pull-left\" href=\"#\">\n                                      <div class=\"avatar\">\n                                          <img class=\"media-object img-raised\" alt=\"64x64\" src=\"assets/img/emily.jpg\">\n                                      </div>\n                                  </a>\n                                  <div class=\"media-body\">\n                                      <h5 class=\"media-heading\">Tina Andrew\n                                          <small class=\"text-muted\">&middot; 2 Days Ago</small>\n                                      </h5>\n                                      <p>Hello guys, nice to have you on the platform! There will be a lot of great stuff coming soon. We will keep you posted for the latest news.</p>\n                                      <p> Don't forget, You're Awesome!</p>\n                                      <div class=\"media-footer\">\n                                          <a href=\"#\" class=\"btn btn-primary btn-neutral pull-right\" placement=\"top\" ngbTooltip=\"Reply to Comment\">\n                                              <i class=\"now-ui-icons ui-1_send\"></i> Reply\n                                          </a>\n                                          <a href=\"#\" class=\"btn btn-danger btn-neutral pull-right\">\n                                              <i class=\"now-ui-icons ui-2_favourite-28\"></i> 243\n                                          </a>\n                                      </div>\n                                  </div>\n                              </div>\n                          </div>\n                      </div>\n                      <div class=\"media\">\n                          <a class=\"pull-left\" href=\"#\">\n                              <div class=\"avatar\">\n                                  <img class=\"media-object img-raised\" alt=\"64x64\" src=\"assets/img/james.jpg\">\n                              </div>\n                          </a>\n                          <div class=\"media-body\">\n                              <h5 class=\"media-heading\">Rosa Thompson\n                                  <small class=\"text-muted\">&middot; 2 Days Ago</small>\n                              </h5>\n                              <p>Hello guys, nice to have you on the platform! There will be a lot of great stuff coming soon. We will keep you posted for the latest news.</p>\n                              <p> Don't forget, You're Awesome!</p>\n                              <div class=\"media-footer\">\n                                  <a href=\"#\" class=\"btn btn-primary btn-neutral pull-right\" placement=\"top\" ngbTooltip=\"Reply to Comment\">\n                                      <i class=\"now-ui-icons ui-1_send\"></i> Reply\n                                  </a>\n                                  <a href=\"#\" class=\"btn btn-danger btn-neutral pull-right\">\n                                      <i class=\"now-ui-icons ui-2_favourite-28\"></i> 243\n                                  </a>\n                              </div>\n                          </div>\n                      </div>\n                      <div class=\"pagination pagination-primary justify-content-center\">\n                        <ngb-pagination [collectionSize]=\"60\" [(page)]=\"page1\" [maxSize]=\"5\" [rotate]=\"true\" class=\"pagination-primary\"></ngb-pagination>\n                      </div>\n                  </div>\n                  <h4 class=\"text-center\">Post your comment\n                      <br>\n                      <small class=\"text-muted\">- Logged In User -</small>\n                  </h4>\n                  <div class=\"media media-post\">\n                      <a class=\"pull-left author\" href=\"#\">\n                          <div class=\"avatar\">\n                              <img class=\"media-object img-raised\" alt=\"64x64\" src=\"assets/img/james.jpg\">\n                          </div>\n                      </a>\n                      <div class=\"media-body\">\n                          <textarea class=\"form-control\" placeholder=\"Write some nice stuff or nothing...\" rows=\"6\"></textarea>\n                          <div class=\"media-footer\">\n                              <a href=\"#\" class=\"btn btn-primary btn-wd pull-right\">Post Comment</a>\n                          </div>\n                      </div>\n                  </div>\n                  <!-- end media-post -->\n                  <h4 class=\"text-center\">Post your comment\n                      <br>\n                      <small class=\"text-muted\">- Not Logged In User -</small>\n                  </h4>\n                  <div class=\"media media-post\">\n                      <a class=\"pull-left author\" href=\"#\">\n                          <div class=\"avatar\">\n                              <img class=\"media-object img-raised\" alt=\"64x64\" src=\"assets/img/placeholder.jpg\" />\n                          </div>\n                      </a>\n                      <div class=\"media-body\">\n                          <form class=\"form\">\n                              <div class=\"row\">\n                                  <div class=\"col-md-6\">\n                                      <div class=\"form-group\">\n                                          <input type=\"text\" class=\"form-control\" placeholder=\"Your Name\" />\n                                      </div>\n                                  </div>\n                                  <div class=\"col-md-6\">\n                                      <div class=\"form-group\">\n                                          <input type=\"email\" class=\"form-control\" placeholder=\"Your email\" />\n                                      </div>\n                                  </div>\n                              </div>\n                              <textarea class=\"form-control\" placeholder=\"Write some nice stuff or nothing...\" rows=\"6\"></textarea>\n                              <div class=\"media-footer\">\n                                  <h6 class=\"text-muted\">Sign in with</h6>\n                                  <a href=\"\" class=\"btn btn-icon btn-round btn-twitter\">\n                                      <i class=\"fa fa-twitter\"></i>\n                                  </a>\n                                  <a href=\"\" class=\"btn btn-icon btn-round btn-facebook\">\n                                      <i class=\"fa fa-facebook-square\"></i>\n                                  </a>\n                                  <a href=\"\" class=\"btn btn-icon btn-round btn-google\">\n                                      <i class=\"fa fa-google-plus-square\"></i>\n                                  </a>\n                                  <a href=\"#\" class=\"btn btn-primary pull-right\">Post Comment</a>\n                              </div>\n                          </form>\n                      </div>\n                      <!-- end media-body -->\n                  </div>\n                  <!-- end media-post -->\n              </div>\n          </div>\n      </div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "Lsgy":
    /*!*********************************************************!*\
      !*** ./src/app/examples/aboutus/aboutus.component.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function Lsgy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dHVzLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "LtKs":
    /*!**************************************************!*\
      !*** ./src/app/sections/sections.component.scss ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function LtKs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWN0aW9ucy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "N2N6":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/image-upload/image-upload.component.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function N2N6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"fileinput text-center\" #input>\n    <div [ngClass]=\"{'img-circle':isRound}\" class=\"thumbnail img-raised\">\n        <img src={{state.imagePreviewUrl}} alt=\"...\" />\n    </div>\n    <div>\n        <button class=\"btn btn-raised btn-round btn-default btn-file\" (click)=\"handleClick()\" *ngIf=\"!this.state.file\">Select image</button>\n        <button class=\"btn btn-raised btn-round btn-default btn-file\" (click)=\"handleClick()\" *ngIf=\"this.state.file\">Change</button>\n        <button class=\"btn btn-danger btn-round fileinput-exists\" (click)=\"handleRemove()\" *ngIf=\"this.state.file\"><i class=\"now-ui-icons ui-1_simple-remove\"></i> Remove</button>\n    </div>\n    <input type=\"file\"/>\n</div>\n";
      /***/
    },

    /***/
    "NPo9":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/components.component.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function NPo9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"wrapper\">\n  <div class=\"page-header clear-filter\" filter-color=\"orange\">\n      <div class=\"page-header-image\" data-parallax=\"true\" style=\"background-image: ;\">\n      </div>\n      <div class=\"rellax-header rellax-header-sky\" data-rellax-speed=\"-8\">\n          <div class=\"page-header-image\" style=\"background-image: url('assets/img/presentation-page/nuk-pro-back-sky.jpg')\">\n          </div>\n      </div>\n      <div class=\"rellax-header rellax-header-buildings\" data-rellax-speed=\"0\">\n          <div class=\"page-header-image page-header-city\" style=\"background-image: url('assets/img/presentation-page/nuk-pro-buildings.png')\">\n          </div>\n      </div>\n      <div class=\"rellax-text-container\">\n          <h1 class=\"h1-seo rellax-text\" data-rellax-speed=\"-2\">Components</h1>\n      </div>\n      <h3 class=\"h3-description rellax-text\" data-rellax-speed=\"-1\">A beautiful premium Bootstrap 4 UI Kit.</h3>\n      <h6 class=\"category category-absolute rellax-text\" data-rellax-speed=\"-2\">Designed by\n          <a href=\"https://invisionapp.com/\" target=\"_blank\">\n              <img src=\"assets/img/invision-white-slim.png\" class=\"invision-logo\" />\n          </a>. Coded by\n          <a href=\"https://www.josh-levy.com\" target=\"_blank\">\n              <img src=\"assets/img/josh-levy-white-slim2.png\" class=\"josh-levy-logo\" />\n          </a>.\n      </h6>\n  </div>\n  <div class=\"main\">\n    <div class=\"section section-images\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div class=\"hero-images-container\">\n                        <img src=\"assets/img/hero-image-1.png\" alt=\"\">\n                    </div>\n                    <div class=\"hero-images-container-1\">\n                        <img src=\"assets/img/hero-image-2.png\" alt=\"\">\n                    </div>\n                    <div class=\"hero-images-container-2\">\n                        <img src=\"assets/img/hero-image-3.png\" alt=\"\">\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n      <app-basicelements></app-basicelements>\n      <app-navigation></app-navigation>\n      <div class=\"section section-tabs\">\n          <div class=\"container\">\n              <div class=\"title\">\n                  <h4>Navigation Tabs</h4>\n              </div>\n              <div class=\"row\">\n                  <div class=\"col-md-10 ml-auto col-xl-6 mr-auto\">\n                      <p class=\"category\">Tabs with Icons on Card</p>\n                      <!-- Nav tabs -->\n                      <div class=\"card\">\n                        <div class=\"nav-tabs-navigation\">\n                            <div class=\"nav-tabs-wrapper\">\n                                <ngb-tabset [justify]=\"'center'\" class=\"text-center\">\n                                    <ngb-tab>\n                                      <ng-template ngbTabTitle>\n                                        <i class=\"now-ui-icons objects_umbrella-13\"></i> Home\n                                      </ng-template>\n                                        <ng-template ngbTabContent>\n                                          <p>I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.</p>\n                                        </ng-template>\n                                    </ngb-tab>\n                                    <ngb-tab>\n                                      <ng-template ngbTabTitle>\n                                        <i class=\"now-ui-icons shopping_cart-simple\"></i> Profile\n                                      </ng-template>\n                                        <ng-template ngbTabContent>\n                                            <p> I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. </p>\n                                        </ng-template>\n                                    </ngb-tab>\n                                    <ngb-tab>\n                                      <ng-template ngbTabTitle>\n                                          <i class=\"now-ui-icons shopping_shop\"></i> Messages\n                                      </ng-template>\n                                        <ng-template ngbTabContent>\n                                            <p>I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.</p>\n                                        </ng-template>\n                                    </ngb-tab>\n                                    <ngb-tab>\n                                      <ng-template ngbTabTitle>\n                                        <i class=\"now-ui-icons ui-2_settings-90\"></i> Settings\n                                      </ng-template>\n                                        <ng-template ngbTabContent>\n                                          <p>\n                                              \"I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\"\n                                          </p>\n                                        </ng-template>\n                                    </ngb-tab>\n                                </ngb-tabset>\n                            </div>\n                        </div>\n                      </div>\n                  </div>\n                  <div class=\"col-md-10 ml-auto col-xl-6 mr-auto\">\n                      <p class=\"category\">Tabs with Background on Card</p>\n                      <!-- Tabs with Background on Card -->\n                      <div class=\"card\">\n                        <div class=\"nav-tabs-navigation\" data-tabs-color=\"orange\">\n                            <div class=\"nav-tabs-wrapper\">\n                                <ngb-tabset [justify]=\"'center'\" class=\"text-center\" >\n                                    <ngb-tab title=\"Home\">\n                                      <ng-template ngbTabContent>\n                                        <p>I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.</p>\n                                      </ng-template>\n                                    </ngb-tab>\n                                    <ngb-tab title=\"Profile\">\n                                      <ng-template ngbTabContent>\n                                          <p> I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. </p>\n                                      </ng-template>\n                                    </ngb-tab>\n                                    <ngb-tab title=\"Messages\">\n                                      <ng-template ngbTabContent>\n                                          <p>I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.</p>\n                                      </ng-template>\n                                    </ngb-tab>\n                                    <ngb-tab title=\"Settings\">\n                                        <ng-template ngbTabContent>\n                                          <p>\n                                              \"I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\"\n                                          </p>\n                                        </ng-template>\n                                    </ngb-tab>\n                                </ngb-tabset>\n                            </div>\n                        </div>\n                      </div>\n                      <!-- End Tabs on plain Card -->\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class=\"section section-pills\">\n          <div class=\"container\">\n              <div id=\"navigation-pills\">\n                  <div class=\"title\">\n                      <h4>Navigation Pills</h4>\n                  </div>\n                  <div class=\"row\">\n                      <div class=\"col-md-6\">\n                          <p class=\"category\">Horizontal tabs</p>\n                          <ngb-tabset type=\"pills\" class=\"nav nav-pills nav-pills-primary justify-content-start tab-space\">\n                              <ngb-tab title=\"Profile\">\n                                  <ng-template ngbTabContent>\n                                    Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.\n                                    <br />\n                                    <br /> Dramatically visualize customer directed convergence without revolutionary ROI.\n                                  </ng-template>\n                              </ngb-tab>\n                              <ngb-tab title=\"Settings\">\n                                  <ng-template ngbTabContent>\n                                    Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.\n                                    <br />\n                                    <br />Dramatically maintain clicks-and-mortar solutions without functional solutions.\n                                  </ng-template>\n                              </ngb-tab>\n                              <ngb-tab title=\"Options\">\n                                  <ng-template ngbTabContent>\n                                    Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.\n                                    <br />\n                                    <br />Dynamically innovate resource-leveling customer service for state of the art customer service.\n                                  </ng-template>\n                              </ngb-tab>\n                          </ngb-tabset>\n                      </div>\n                      <div class=\"col-md-6\">\n                          <p class=\"category\">Vertical tabs</p>\n                          <div class=\"nav-pills-navigation\">\n                              <div class=\"nav-pills-wrapper\">\n                                <ngb-tabset type=\"pills\" class=\"nav nav-pills nav-pills-primary vertical-pills\" [orientation]=\"'vertical'\">\n                                    <ngb-tab title=\"Profile\">\n                                        <ng-template ngbTabContent class=\"tab-space\">\n                                          Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.\n                                          <br />\n                                          <br /> Dramatically visualize customer directed convergence without revolutionary ROI.\n                                        </ng-template>\n                                    </ngb-tab>\n                                    <ngb-tab title=\"Settings\">\n                                        <ng-template ngbTabContent>\n                                          Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.\n                                          <br />\n                                          <br />Dramatically maintain clicks-and-mortar solutions without functional solutions.\n                                        </ng-template>\n                                    </ngb-tab>\n                                    <ngb-tab title=\"Options\">\n                                        <ng-template ngbTabContent>\n                                          Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.\n                                          <br />\n                                          <br />Dynamically innovate resource-leveling customer service for state of the art customer service.\n                                        </ng-template>\n                                    </ngb-tab>\n                                </ngb-tabset>\n                              </div>\n                            </div>\n                      </div>\n                  </div>\n                  <div class=\"title\">\n                      <p class=\"category\">With Icons</p>\n                  </div>\n                  <div class=\"row\">\n                      <div class=\"col-md-6\">\n                          <!--\n          color-classes: \"nav-pills-primary\", \"nav-pills-info\", \"nav-pills-success\", \"nav-pills-warning\",\"nav-pills-danger\"\n        -->\n                        <ngb-tabset type=\"pills\" class=\"nav nav-pills nav-pills-primary justify-content-start tab-space nav-pills-icons\">\n                            <ngb-tab>\n                              <ng-template ngbTabTitle>\n                                <i class=\"now-ui-icons objects_umbrella-13\"></i> Home\n                              </ng-template>\n                                <ng-template ngbTabContent>\n                                  Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.\n                                  <br />\n                                  <br /> Dramatically visualize customer directed convergence without revolutionary ROI.\n                                </ng-template>\n                            </ngb-tab>\n                            <ngb-tab>\n                              <ng-template ngbTabTitle>\n                                <i class=\"now-ui-icons shopping_shop\"></i> Messages\n                              </ng-template>\n                                <ng-template ngbTabContent>\n                                  Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.\n                                  <br />\n                                  <br />Dramatically maintain clicks-and-mortar solutions without functional solutions.\n                                </ng-template>\n                            </ngb-tab>\n                            <ngb-tab>\n                              <ng-template ngbTabTitle>\n                                <i class=\"now-ui-icons ui-2_settings-90\"></i> Settings\n                              </ng-template>\n                                <ng-template ngbTabContent>\n                                  Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.\n                                  <br />\n                                  <br />Dynamically innovate resource-leveling customer service for state of the art customer service.\n                                </ng-template>\n                            </ngb-tab>\n                        </ngb-tabset>\n                      </div>\n                      <div class=\"col-md-6\">\n                        <div class=\"nav-pills-navigation\">\n                            <div class=\"nav-pills-wrapper\">\n                              <ngb-tabset type=\"pills\" class=\"nav nav-pills nav-pills-primary vertical-pills nav-pills-icons\" [orientation]=\"'vertical'\">\n                                <ngb-tab>\n                                  <ng-template ngbTabTitle>\n                                    <i class=\"now-ui-icons objects_umbrella-13\"></i> Home\n                                  </ng-template>\n                                    <ng-template ngbTabContent>\n                                      Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.\n                                      <br />\n                                      <br /> Dramatically visualize customer directed convergence without revolutionary ROI.\n                                    </ng-template>\n                                </ngb-tab>\n                                <ngb-tab>\n                                  <ng-template ngbTabTitle>\n                                    <i class=\"now-ui-icons ui-2_settings-90\"></i> Settings\n                                  </ng-template>\n                                  <ng-template ngbTabContent>\n                                    Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.\n                                    <br />\n                                    <br />Dramatically maintain clicks-and-mortar solutions without functional solutions.\n                                  </ng-template>\n                                </ngb-tab>\n                              </ngb-tabset>\n                            </div>\n                          </div>\n                      </div>\n                  </div>\n                  <div class=\"title\">\n                      <p class=\"category\">Just Icons</p>\n                  </div>\n                  <div class=\"row\">\n                      <div class=\"col-md-6\">\n                        <div class=\"nav-pills-navigation\">\n                            <div class=\"nav-pills-wrapper\">\n                              <ngb-tabset type=\"pills\" class=\"nav nav-pills nav-pills-info vertical-pills nav-pills-just-icons\" [orientation]=\"'vertical'\">\n                                <ngb-tab>\n                                  <ng-template ngbTabTitle>\n                                    <i class=\"now-ui-icons objects_umbrella-13\"></i>\n                                  </ng-template>\n                                    <ng-template ngbTabContent>\n                                      Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.\n                                      <br />\n                                      <br /> Dramatically visualize customer directed convergence without revolutionary ROI.\n                                    </ng-template>\n                                </ngb-tab>\n                                <ngb-tab>\n                                  <ng-template ngbTabTitle>\n                                    <i class=\"now-ui-icons ui-2_settings-90\"></i>\n                                  </ng-template>\n                                  <ng-template ngbTabContent>\n                                    Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.\n                                    <br />\n                                    <br />Dramatically maintain clicks-and-mortar solutions without functional solutions.\n                                  </ng-template>\n                                </ngb-tab>\n                              </ngb-tabset>\n                            </div>\n                          </div>\n                      </div>\n                      <div class=\"col-md-6\">\n                          <!--\n          color-classes: \"nav-pills-primary\", \"nav-pills-info\", \"nav-pills-success\", \"nav-pills-warning\",\"nav-pills-danger\"\n        -->\n                      <ngb-tabset type=\"pills\" class=\"nav nav-pills nav-pills-info justify-content-start tab-space nav-pills-just-icons\">\n                          <ngb-tab>\n                            <ng-template ngbTabTitle>\n                              <i class=\"now-ui-icons objects_umbrella-13\"></i>\n                            </ng-template>\n                              <ng-template ngbTabContent>\n                                Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.\n                                <br />\n                                <br /> Dramatically visualize customer directed convergence without revolutionary ROI.\n                              </ng-template>\n                          </ngb-tab>\n                          <ngb-tab>\n                            <ng-template ngbTabTitle>\n                              <i class=\"now-ui-icons shopping_shop\"></i>\n                            </ng-template>\n                              <ng-template ngbTabContent>\n                                Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.\n                                <br />\n                                <br />Dramatically maintain clicks-and-mortar solutions without functional solutions.\n                              </ng-template>\n                          </ngb-tab>\n                          <ngb-tab>\n                            <ng-template ngbTabTitle>\n                              <i class=\"now-ui-icons ui-2_settings-90\"></i>\n                            </ng-template>\n                              <ng-template ngbTabContent>\n                                Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.\n                                <br />\n                                <br />Dynamically innovate resource-leveling customer service for state of the art customer service.\n                              </ng-template>\n                          </ngb-tab>\n                      </ngb-tabset>\n                      </div>\n                  </div>\n                  <!--                 end nav pills -->\n              </div>\n          </div>\n      </div>\n      <div class=\"section section-pagination\">\n          <div class=\"container\">\n              <div class=\"row\">\n                  <div class=\"col-md-6\">\n                      <h4>Progress Bars</h4>\n                      <div class=\"progress-container\">\n                        <span class=\"progress-badge\">Default</span>\n\n                        <ngb-progressbar [value]=\"25\"><span class=\"progress-value\">25%</span></ngb-progressbar><br>\n                      </div>\n                      <div class=\"progress-container progress-primary\">\n                          <span class=\"progress-badge\">Primary</span>\n                          <ngb-progressbar [value]=\"60\"><span class=\"progress-value\">60%</span></ngb-progressbar><br>\n                      </div>\n                      <div class=\"progress-container progress-danger\">\n                          <span class=\"progress-badge\">Danger</span>\n                            <ngb-progressbar [value]=\"60\"><span class=\"progress-value\">60%</span></ngb-progressbar><br>\n                      </div>\n                      <div class=\"progress-container progress-warning\">\n                          <span class=\"progress-badge\">Warning</span>\n                            <ngb-progressbar [value]=\"60\"><span class=\"progress-value\">60%</span></ngb-progressbar><br>\n                      </div>\n                      <div class=\"progress-container progress-success\">\n                          <span class=\"progress-badge\">Success</span>\n                          <ngb-progressbar [value]=\"60\"><span class=\"progress-value\">60%</span></ngb-progressbar><br>\n                      </div>\n                      <div class=\"progress-container progress-info\">\n                          <span class=\"progress-badge\">Info</span>\n                            <ngb-progressbar [value]=\"60\"><span class=\"progress-value\">60%</span></ngb-progressbar><br>\n                      </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                      <h4>Pagination</h4>\n                      <ngb-pagination [collectionSize]=\"50\" [(page)]=\"page\" aria-label=\"Default pagination\" class=\"pagination-primary\"></ngb-pagination>\n                      <br/>\n                      <ngb-pagination [collectionSize]=\"50\" [(page)]=\"page2\" aria-label=\"Default pagination\"></ngb-pagination>\n                      <br/>\n                      <div class=\"pagination-container justify-content-center\">\n                        <ngb-pagination [collectionSize]=\"60\" [(page)]=\"page1\" [maxSize]=\"5\" [rotate]=\"true\" class=\"pagination-info\"></ngb-pagination>\n                      </div>\n                      <br>\n                      <h4>Labels</h4>\n                      <span class=\"badge badge-default\">Default</span>\n                      <span class=\"badge badge-primary\">Primary</span>\n                      <span class=\"badge badge-success\">Success</span>\n                      <span class=\"badge badge-info\">Info</span>\n                      <span class=\"badge badge-warning\">Warning</span>\n                      <span class=\"badge badge-danger\">Danger</span>\n                      <span class=\"badge badge-neutral\">Neutral</span>\n                  </div>\n              </div>\n              <div class=\"space\"></div>\n          </div>\n      </div>\n      <div class=\"section\" id=\"notifications\">\n          <div class=\"container\">\n            <h4>Notifications</h4>\n          </div>\n          <app-notification></app-notification>\n      </div>\n      <app-prefooter-areas></app-prefooter-areas>\n      <app-footers-areas></app-footers-areas>\n      <app-typography></app-typography>\n      <app-tables-areas></app-tables-areas>\n      <app-comments-areas></app-comments-areas>\n      <app-cards-areas></app-cards-areas>\n\n      <div class=\"section section-javascript\" id=\"javascriptComponents\">\n          <div class=\"container\">\n              <h3 class=\"title\">Angular Native Components</h3>\n              <div class=\"row\" id=\"modals\">\n                  <div class=\"col-md-6\">\n                      <h4>Modal</h4>\n                      <ngbd-modal-component></ngbd-modal-component>\n                  </div>\n                  <div class=\"col-md-6\">\n                      <h4>Popovers</h4>\n                      <button type=\"button\" class=\"btn btn-default text-margin\" placement=\"right\"\n                          ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on right\" popoverClass=\"popover-primary\">\n                          On right\n                      </button>\n\n                      <button type=\"button\" class=\"btn btn-default text-margin\" placement=\"top\"\n                          ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on top\">\n                          On top\n                      </button>\n\n                      <button type=\"button\" class=\"btn btn-default text-margin\" placement=\"left\"\n                          ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on left\">\n                          On left\n                      </button>\n\n                      <button type=\"button\" class=\"btn btn-default\" placement=\"bottom\"\n                          ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on bottom\">\n                          On bottom\n                      </button>\n                  </div>\n                  <br />\n                  <br />\n                  <div class=\"col-md-6\">\n                      <h4>Datetimepicker</h4>\n                      <div class=\"row\">\n                          <div class=\"col-md-6\">\n                              <div class=\"datepicker-container\">\n                                  <div class=\"form-group\">\n                                    <input class=\"form-control datetimepicker\" placeholder=\"06/07/2017\"\n                                         name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d=\"ngbDatepicker\" (click)=\"d.toggle()\" data-color=\"orange\">\n                \t\t\t            </div>\n                              </div>\n                          </div>\n                      </div>\n                      <!--                 collapse -->\n                      <div id=\"collapse\">\n                          <div class=\"title\">\n                              <h4>Collapse</h4>\n                          </div>\n                          <div class=\"row\">\n                              <div class=\"col-md-12\">\n                                <ngb-accordion #acc=\"ngbAccordion\" activeIds=\"config-panel-one\" class=\"card-plain\">\n                                    <ngb-panel id=\"config-panel-one\">\n                                        <ng-template ngbPanelTitle>\n                                            <a class=\"collapsed\">\n                                                  Collapsible Group Item #1\n                                              <i class=\"now-ui-icons arrows-1_minimal-down\"></i>\n                                            </a>\n                                        </ng-template>\n                                        <ng-template ngbPanelContent>\n                                              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n                                              aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n                                              sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n                                              craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n                                              occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n                                              labore sustainable VHS.\n                                        </ng-template>\n                                    </ngb-panel>\n                                    <ngb-panel>\n                                        <ng-template ngbPanelTitle>\n                                          <a class=\"collapsed\">\n                                                Collapsible Group Item #2\n                                              <i class=\"now-ui-icons arrows-1_minimal-down\"></i>\n                                          </a>\n                                        </ng-template>\n                                        <ng-template ngbPanelContent>\n                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n                                            aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n                                            sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n                                            craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n                                            occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n                                            labore sustainable VHS.\n                                        </ng-template>\n                                    </ngb-panel>\n                                    <ngb-panel>\n                                        <ng-template ngbPanelTitle>\n                                          <a class=\"collapsed\">\n                                                Collapsible Group Item #3\n                                            <i class=\"now-ui-icons arrows-1_minimal-down\"></i>\n                                          </a>\n                                        </ng-template>\n                                        <ng-template ngbPanelContent>\n                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n                                            aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n                                            sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n                                            craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n                                            occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n                                            labore sustainable VHS.\n                                        </ng-template>\n                                    </ngb-panel>\n                                </ngb-accordion>\n                              </div>\n                          </div>\n                      </div>\n                      <!--                 end collapse -->\n                  </div>\n                  <div class=\"col-md-6\">\n                      <h4>Tooltips</h4>\n                      <button type=\"button\" class=\"btn btn-default btn-tooltip text-margin\" placement=\"right\" ngbTooltip=\"Tooltip on right\">\n                         On right\n                     </button>\n                     <button type=\"button\" class=\"btn btn-default btn-tooltip text-margin\" placement=\"left\" ngbTooltip=\"Tooltip on left\">\n                       On left\n                     </button>\n                      <button type=\"button\" class=\"btn btn-default btn-tooltip text-margin\" placement=\"top\" ngbTooltip=\"Tooltip on top\">\n                         On top\n                      </button>\n                      <button type=\"button\" class=\"btn btn-default btn-tooltip text-margin\" placement=\"bottom\" ngbTooltip=\"Tooltip on bottom\">\n                          On bottom\n                      </button>\n                      <div class=\"clearfix\"></div>\n                      <br>\n                      <br>\n                  </div>\n              <!-- </div>\n            </div> -->\n          </div>\n          <div id=\"file-uploader\">\n              <div class=\"container\">\n                  <div class=\"title\">\n                      <h4>File Uploader</h4>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-md-5 col-sm-8\">\n                        <h4><small>Regular Image</small></h4>\n                        <app-image-upload></app-image-upload>\n                    </div>\n                    <div class=\"col-md-3 col-sm-4\">\n                        <h4><small>Avatar</small></h4>\n                        <app-image-upload [isRound]=\"true\"></app-image-upload>\n                    </div>\n                  </div>\n              </div>\n          </div>\n          <div class=\"section\" id=\"carousel\">\n              <div class=\"container\">\n                  <div class=\"title\">\n                      <h4>Carousel</h4>\n                  </div>\n                  <div class=\"row justify-content-center\">\n                      <div class=\"col-8\">\n                        <ngb-carousel>\n                            <ng-template ngbSlide>\n                              <img class=\"d-block\" src=\"assets/img/bg1.jpg\" alt=\"First slide\">\n                              <div class=\"carousel-caption d-none d-md-block\">\n                                  <h5>Nature, United States</h5>\n                              </div>\n                            </ng-template>\n                            <ng-template ngbSlide>\n                              <img class=\"d-block\" src=\"assets/img/bg3.jpg\" alt=\"Second slide\">\n                              <div class=\"carousel-caption d-none d-md-block\">\n                                  <h5>Somewhere Beyond, United States</h5>\n                              </div>\n                            </ng-template>\n                            <ng-template ngbSlide>\n                              <img class=\"d-block\" src=\"assets/img/bg4.jpg\" alt=\"Third slide\">\n                              <div class=\"carousel-caption d-none d-md-block\">\n                                  <h5>Yellowstone National Park, United States</h5>\n                              </div>\n                            </ng-template>\n                        </ngb-carousel>\n                      </div>\n                  </div>\n              </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"section section-nucleo-icons\">\n          <div class=\"container\">\n              <div class=\"row\">\n                  <div class=\"col-lg-6 col-md-12\">\n                      <h2 class=\"title\">Nucleo Icons</h2>\n                      <h5 class=\"description\">\n                          Now UI Kit comes with 100 custom icons made by our friends from NucleoApp. The official package contains over 2.100 thin icons which are looking great in combination with Now UI Kit Make sure you check all of them and use those that you like the most.\n                      </h5>\n                      <a [routerLink]=\"['/nucleoicons']\" class=\"btn btn-primary btn-round btn-lg\">View Demo Icons</a>\n                      <a href=\"https://nucleoapp.com/?ref=1712\" class=\"btn btn-primary btn-simple btn-round btn-lg\" target=\"_blank\">View All Icons</a>\n                  </div>\n                  <div class=\"col-lg-6 col-md-12\">\n                      <div class=\"icons-container\">\n                          <i class=\"now-ui-icons ui-1_send\"></i>\n                          <i class=\"now-ui-icons ui-2_like\"></i>\n                          <i class=\"now-ui-icons transportation_air-baloon\"></i>\n                          <i class=\"now-ui-icons text_bold\"></i>\n                          <i class=\"now-ui-icons tech_headphones\"></i>\n                          <i class=\"now-ui-icons emoticons_satisfied\"></i>\n                          <i class=\"now-ui-icons shopping_cart-simple\"></i>\n                          <i class=\"now-ui-icons objects_spaceship\"></i>\n                          <i class=\"now-ui-icons media-2_note-03\"></i>\n                          <i class=\"now-ui-icons ui-2_favourite-28\"></i>\n                          <i class=\"now-ui-icons design_palette\"></i>\n                          <i class=\"now-ui-icons clothes_tie-bow\"></i>\n                          <i class=\"now-ui-icons location_pin\"></i>\n                          <i class=\"now-ui-icons objects_key-25\"></i>\n                          <i class=\"now-ui-icons travel_istanbul\"></i>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n  <footer class=\"footer section-dark\">\n      <div class=\"container\">\n          <div class=\"row\">\n              <nav class=\"footer-nav\">\n                  <ul>\n                      <li><a href=\"https://www.josh-levy.com\">Josh Levy</a></li>\n                      <li><a href=\"http://blog.josh-levy.com\">Blog</a></li>\n                      <li><a href=\"https://www.josh-levy.com/license\">Licenses</a></li>\n                  </ul>\n              </nav>\n              <div class=\"credits ml-auto\">\n                  <span class=\"copyright\">\n                      © {{data | date: 'yyyy'}}, made with <i class=\"fa fa-heart heart\"></i> by Josh Levy\n                  </span>\n              </div>\n          </div>\n      </div>\n  </footer>\n\n</div>\n";
      /***/
    },

    /***/
    "P/dO":
    /*!***********************************************************!*\
      !*** ./src/app/sections/projects/projects.component.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function PDO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "P6R5":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal/modal.component.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function P6R5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<button class=\"btn btn-primary text-margin\" (click)=\"open(classic,'' , '')\">\n    <i class=\"now-ui-icons files_single-copy-04\"></i> Classic\n</button>\n<ng-template #classic let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header justify-content-center\">\n        <button type=\"button\" class=\"close\" (click)=\"d('Cross click')\">\n            <i class=\"now-ui-icons ui-1_simple-remove\"></i>\n        </button>\n        <h4 class=\"title title-up\">Modal title</h4>\n    </div>\n    <div class=\"modal-body\">\n        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.\n        </p>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\">Nice Button</button>\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"c('Close click')\">Close</button>\n    </div>\n</ng-template>\n\n<button class=\"btn btn-primary text-margin\" (click)=\"open(modal_mini, 'modal_mini', 'sm')\">\n    <i class=\"now-ui-icons media-1_button-power\"></i> Launch Modal Mini\n</button>\n<ng-template #modal_mini let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header justify-content-center\">\n      <div class=\"modal-profile\">\n          <i class=\"now-ui-icons users_circle-08\"></i>\n      </div>\n  </div>\n  <div class=\"modal-body\">\n      <p>Always have an access to your profile</p>\n  </div>\n  <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-link btn-neutral\">Back</button>\n      <button type=\"button\" class=\"btn btn-link btn-neutral\" (click)=\"c('Close click')\">Close</button>\n  </div>\n</ng-template>\n\n\n<button class=\"btn btn-primary text-margin\" (click)=\"open(Notice, '', '')\">\n    <i class=\"now-ui-icons travel_info\"></i> Notice\n</button>\n<ng-template #Notice let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n      <button type=\"button\" class=\"close\" (click)=\"d('Cross click')\">\n          <i class=\"now-ui-icons ui-1_simple-remove\"></i>\n      </button>\n      <h5 class=\"modal-title\" id=\"myModalLabel\">How Do You Become an Affiliate?</h5>\n  </div>\n  <div class=\"modal-body\">\n      <div class=\"instruction\">\n          <div class=\"row\">\n              <div class=\"col-md-8\">\n                  <strong>1. Register</strong>\n                  <p class=\"description\">The first step is to create an account at\n                      <a href=\"https://www.josh-levy.com/\">Josh Levy</a>. You can choose a social network or go for the classic version, whatever works best for you.</p>\n              </div>\n              <div class=\"col-md-4\">\n                  <div class=\"picture\">\n                      <img src=\"assets/img/pricing1.jpg\" alt=\"Thumbnail Image\" class=\"rounded img-raised\">\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class=\"instruction\">\n          <div class=\"row\">\n              <div class=\"col-md-8\">\n                  <strong>2. Apply</strong>\n                  <p class=\"description\">The first step is to create an account at\n                      <a href=\"https://www.josh-levy.com/\">Josh Levy</a>. You can choose a social network or go for the classic version, whatever works best for you.</p>\n              </div>\n              <div class=\"col-md-4\">\n                  <div class=\"picture\">\n                      <img src=\"assets/img/project9.jpg\" alt=\"Thumbnail Image\" class=\"rounded img-raised\">\n                  </div>\n              </div>\n          </div>\n      </div>\n      <p>If you have more questions, don't hesitate to contact us or send us a tweet @creativetim. We're here to help!</p>\n  </div>\n  <div class=\"modal-footer justify-content-center\">\n      <button type=\"button\" class=\"btn btn-info btn-round\"(click)=\"c('Close click')\">Sounds good!</button>\n  </div>\n</ng-template>\n\n\n<button class=\"btn btn-primary text-margin\" (click)=\"open(Login, 'Login', 'md')\">\n    <i class=\"now-ui-icons users_single-02\"></i> Login Modal\n</button>\n<ng-template #Login let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"card card-login card-plain\">\n      <div class=\"modal-header justify-content-center\">\n          <button type=\"button\" class=\"close\" (click)=\"d('Cross click')\">\n              <i class=\"now-ui-icons ui-1_simple-remove\"></i>\n          </button>\n          <div class=\"header header-primary text-center\">\n              <div class=\"logo-container\">\n                  <img src=\"assets/img/now-logo.png\" alt=\"\">\n              </div>\n          </div>\n      </div>\n      <div class=\"modal-body\">\n          <form class=\"form\" method=\"\" action=\"\">\n              <div class=\"card-content\">\n                  <div class=\"input-group form-group-no-border input-lg\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\"><i class=\"now-ui-icons users_circle-08\"></i></span>\n                    </div>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"First Name...\">\n                  </div>\n                  <div class=\"input-group form-group-no-border input-lg\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\">  <i class=\"now-ui-icons ui-1_lock-circle-open\"></i></span>\n                    </div>\n                      <input type=\"password\" placeholder=\"Password...\" class=\"form-control\">\n                  </div>\n              </div>\n          </form>\n      </div>\n      <div class=\"modal-footer text-center\">\n          <a href=\"#getstart\" class=\"btn btn-neutral btn-round btn-lg btn-block\">Get Started</a>\n      </div>\n  </div>\n</ng-template>\n";
      /***/
    },

    /***/
    "P7M0":
    /*!***********************************************************!*\
      !*** ./src/app/components/contact/contact.component.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function P7M0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "QhSr":
    /*!***************************************************************!*\
      !*** ./src/app/components/typography/typography.component.ts ***!
      \***************************************************************/

    /*! exports provided: TypographyComponent */

    /***/
    function QhSr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyComponent", function () {
        return TypographyComponent;
      });
      /* harmony import */


      var _raw_loader_typography_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./typography.component.html */
      "4R/m");
      /* harmony import */


      var _typography_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./typography.component.scss */
      "0Inq");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var TypographyComponent = /*#__PURE__*/function () {
        function TypographyComponent() {
          _classCallCheck(this, TypographyComponent);
        }

        _createClass(TypographyComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TypographyComponent;
      }();

      TypographyComponent.ctorParameters = function () {
        return [];
      };

      TypographyComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-typography',
        template: _raw_loader_typography_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_typography_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [])], TypographyComponent);
      /***/
    },

    /***/
    "RnhZ":
    /*!**************************************************!*\
      !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function RnhZ(module, exports, __webpack_require__) {
      var map = {
        "./af": "K/tc",
        "./af.js": "K/tc",
        "./ar": "jnO4",
        "./ar-dz": "o1bE",
        "./ar-dz.js": "o1bE",
        "./ar-kw": "Qj4J",
        "./ar-kw.js": "Qj4J",
        "./ar-ly": "HP3h",
        "./ar-ly.js": "HP3h",
        "./ar-ma": "CoRJ",
        "./ar-ma.js": "CoRJ",
        "./ar-sa": "gjCT",
        "./ar-sa.js": "gjCT",
        "./ar-tn": "bYM6",
        "./ar-tn.js": "bYM6",
        "./ar.js": "jnO4",
        "./az": "SFxW",
        "./az.js": "SFxW",
        "./be": "H8ED",
        "./be.js": "H8ED",
        "./bg": "hKrs",
        "./bg.js": "hKrs",
        "./bm": "p/rL",
        "./bm.js": "p/rL",
        "./bn": "kEOa",
        "./bn-bd": "loYQ",
        "./bn-bd.js": "loYQ",
        "./bn.js": "kEOa",
        "./bo": "0mo+",
        "./bo.js": "0mo+",
        "./br": "aIdf",
        "./br.js": "aIdf",
        "./bs": "JVSJ",
        "./bs.js": "JVSJ",
        "./ca": "1xZ4",
        "./ca.js": "1xZ4",
        "./cs": "PA2r",
        "./cs.js": "PA2r",
        "./cv": "A+xa",
        "./cv.js": "A+xa",
        "./cy": "l5ep",
        "./cy.js": "l5ep",
        "./da": "DxQv",
        "./da.js": "DxQv",
        "./de": "tGlX",
        "./de-at": "s+uk",
        "./de-at.js": "s+uk",
        "./de-ch": "u3GI",
        "./de-ch.js": "u3GI",
        "./de.js": "tGlX",
        "./dv": "WYrj",
        "./dv.js": "WYrj",
        "./el": "jUeY",
        "./el.js": "jUeY",
        "./en-au": "Dmvi",
        "./en-au.js": "Dmvi",
        "./en-ca": "OIYi",
        "./en-ca.js": "OIYi",
        "./en-gb": "Oaa7",
        "./en-gb.js": "Oaa7",
        "./en-ie": "4dOw",
        "./en-ie.js": "4dOw",
        "./en-il": "czMo",
        "./en-il.js": "czMo",
        "./en-in": "7C5Q",
        "./en-in.js": "7C5Q",
        "./en-nz": "b1Dy",
        "./en-nz.js": "b1Dy",
        "./en-sg": "t+mt",
        "./en-sg.js": "t+mt",
        "./eo": "Zduo",
        "./eo.js": "Zduo",
        "./es": "iYuL",
        "./es-do": "CjzT",
        "./es-do.js": "CjzT",
        "./es-mx": "tbfe",
        "./es-mx.js": "tbfe",
        "./es-us": "Vclq",
        "./es-us.js": "Vclq",
        "./es.js": "iYuL",
        "./et": "7BjC",
        "./et.js": "7BjC",
        "./eu": "D/JM",
        "./eu.js": "D/JM",
        "./fa": "jfSC",
        "./fa.js": "jfSC",
        "./fi": "gekB",
        "./fi.js": "gekB",
        "./fil": "1ppg",
        "./fil.js": "1ppg",
        "./fo": "ByF4",
        "./fo.js": "ByF4",
        "./fr": "nyYc",
        "./fr-ca": "2fjn",
        "./fr-ca.js": "2fjn",
        "./fr-ch": "Dkky",
        "./fr-ch.js": "Dkky",
        "./fr.js": "nyYc",
        "./fy": "cRix",
        "./fy.js": "cRix",
        "./ga": "USCx",
        "./ga.js": "USCx",
        "./gd": "9rRi",
        "./gd.js": "9rRi",
        "./gl": "iEDd",
        "./gl.js": "iEDd",
        "./gom-deva": "qvJo",
        "./gom-deva.js": "qvJo",
        "./gom-latn": "DKr+",
        "./gom-latn.js": "DKr+",
        "./gu": "4MV3",
        "./gu.js": "4MV3",
        "./he": "x6pH",
        "./he.js": "x6pH",
        "./hi": "3E1r",
        "./hi.js": "3E1r",
        "./hr": "S6ln",
        "./hr.js": "S6ln",
        "./hu": "WxRl",
        "./hu.js": "WxRl",
        "./hy-am": "1rYy",
        "./hy-am.js": "1rYy",
        "./id": "UDhR",
        "./id.js": "UDhR",
        "./is": "BVg3",
        "./is.js": "BVg3",
        "./it": "bpih",
        "./it-ch": "bxKX",
        "./it-ch.js": "bxKX",
        "./it.js": "bpih",
        "./ja": "B55N",
        "./ja.js": "B55N",
        "./jv": "tUCv",
        "./jv.js": "tUCv",
        "./ka": "IBtZ",
        "./ka.js": "IBtZ",
        "./kk": "bXm7",
        "./kk.js": "bXm7",
        "./km": "6B0Y",
        "./km.js": "6B0Y",
        "./kn": "PpIw",
        "./kn.js": "PpIw",
        "./ko": "Ivi+",
        "./ko.js": "Ivi+",
        "./ku": "JCF/",
        "./ku.js": "JCF/",
        "./ky": "lgnt",
        "./ky.js": "lgnt",
        "./lb": "RAwQ",
        "./lb.js": "RAwQ",
        "./lo": "sp3z",
        "./lo.js": "sp3z",
        "./lt": "JvlW",
        "./lt.js": "JvlW",
        "./lv": "uXwI",
        "./lv.js": "uXwI",
        "./me": "KTz0",
        "./me.js": "KTz0",
        "./mi": "aIsn",
        "./mi.js": "aIsn",
        "./mk": "aQkU",
        "./mk.js": "aQkU",
        "./ml": "AvvY",
        "./ml.js": "AvvY",
        "./mn": "lYtQ",
        "./mn.js": "lYtQ",
        "./mr": "Ob0Z",
        "./mr.js": "Ob0Z",
        "./ms": "6+QB",
        "./ms-my": "ZAMP",
        "./ms-my.js": "ZAMP",
        "./ms.js": "6+QB",
        "./mt": "G0Uy",
        "./mt.js": "G0Uy",
        "./my": "honF",
        "./my.js": "honF",
        "./nb": "bOMt",
        "./nb.js": "bOMt",
        "./ne": "OjkT",
        "./ne.js": "OjkT",
        "./nl": "+s0g",
        "./nl-be": "2ykv",
        "./nl-be.js": "2ykv",
        "./nl.js": "+s0g",
        "./nn": "uEye",
        "./nn.js": "uEye",
        "./oc-lnc": "Fnuy",
        "./oc-lnc.js": "Fnuy",
        "./pa-in": "8/+R",
        "./pa-in.js": "8/+R",
        "./pl": "jVdC",
        "./pl.js": "jVdC",
        "./pt": "8mBD",
        "./pt-br": "0tRk",
        "./pt-br.js": "0tRk",
        "./pt.js": "8mBD",
        "./ro": "lyxo",
        "./ro.js": "lyxo",
        "./ru": "lXzo",
        "./ru.js": "lXzo",
        "./sd": "Z4QM",
        "./sd.js": "Z4QM",
        "./se": "//9w",
        "./se.js": "//9w",
        "./si": "7aV9",
        "./si.js": "7aV9",
        "./sk": "e+ae",
        "./sk.js": "e+ae",
        "./sl": "gVVK",
        "./sl.js": "gVVK",
        "./sq": "yPMs",
        "./sq.js": "yPMs",
        "./sr": "zx6S",
        "./sr-cyrl": "E+lV",
        "./sr-cyrl.js": "E+lV",
        "./sr.js": "zx6S",
        "./ss": "Ur1D",
        "./ss.js": "Ur1D",
        "./sv": "X709",
        "./sv.js": "X709",
        "./sw": "dNwA",
        "./sw.js": "dNwA",
        "./ta": "PeUW",
        "./ta.js": "PeUW",
        "./te": "XLvN",
        "./te.js": "XLvN",
        "./tet": "V2x9",
        "./tet.js": "V2x9",
        "./tg": "Oxv6",
        "./tg.js": "Oxv6",
        "./th": "EOgW",
        "./th.js": "EOgW",
        "./tk": "Wv91",
        "./tk.js": "Wv91",
        "./tl-ph": "Dzi0",
        "./tl-ph.js": "Dzi0",
        "./tlh": "z3Vd",
        "./tlh.js": "z3Vd",
        "./tr": "DoHr",
        "./tr.js": "DoHr",
        "./tzl": "z1FC",
        "./tzl.js": "z1FC",
        "./tzm": "wQk9",
        "./tzm-latn": "tT3J",
        "./tzm-latn.js": "tT3J",
        "./tzm.js": "wQk9",
        "./ug-cn": "YRex",
        "./ug-cn.js": "YRex",
        "./uk": "raLr",
        "./uk.js": "raLr",
        "./ur": "UpQW",
        "./ur.js": "UpQW",
        "./uz": "Loxo",
        "./uz-latn": "AQ68",
        "./uz-latn.js": "AQ68",
        "./uz.js": "Loxo",
        "./vi": "KSF8",
        "./vi.js": "KSF8",
        "./x-pseudo": "/X5v",
        "./x-pseudo.js": "/X5v",
        "./yo": "fzPg",
        "./yo.js": "fzPg",
        "./zh-cn": "XDpg",
        "./zh-cn.js": "XDpg",
        "./zh-hk": "SatO",
        "./zh-hk.js": "SatO",
        "./zh-mo": "OmwH",
        "./zh-mo.js": "OmwH",
        "./zh-tw": "kOpN",
        "./zh-tw.js": "kOpN"
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }

      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        return map[req];
      }

      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };

      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      webpackContext.id = "RnhZ";
      /***/
    },

    /***/
    "SsGY":
    /*!*****************************************************!*\
      !*** ./src/app/presentation/presentation.module.ts ***!
      \*****************************************************/

    /*! exports provided: PresentationModule */

    /***/
    function SsGY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PresentationModule", function () {
        return PresentationModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _primeng_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../primeng.module */
      "ThbA");
      /* harmony import */


      var _presentation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./presentation.component */
      "gVBG");
      /* harmony import */


      var app_components_work_history_work_history_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! app/components/work-history/work-history.component */
      "I4vR");
      /* harmony import */


      var app_components_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! app/components/contact/contact.component */
      "G2Gn");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var PresentationModule = function PresentationModule() {
        _classCallCheck(this, PresentationModule);
      };

      PresentationModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], _primeng_module__WEBPACK_IMPORTED_MODULE_6__["PrimeNGBundleModule"]],
        declarations: [_presentation_component__WEBPACK_IMPORTED_MODULE_7__["PresentationComponent"], app_components_work_history_work_history_component__WEBPACK_IMPORTED_MODULE_8__["WorkHistoryComponent"], app_components_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"]],
        exports: [_presentation_component__WEBPACK_IMPORTED_MODULE_7__["PresentationComponent"], app_components_work_history_work_history_component__WEBPACK_IMPORTED_MODULE_8__["WorkHistoryComponent"], app_components_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"]],
        providers: []
      })], PresentationModule);
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component.scss */
      "ynWL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/add/operator/filter */
      "fjAU");
      /* harmony import */


      var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./shared/navbar/navbar.component */
      "EtQq");
      /* harmony import */


      var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! primeng/api */
      "7zfz");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(primengConfig, renderer, router, document, element, location) {
          _classCallCheck(this, AppComponent);

          this.primengConfig = primengConfig;
          this.renderer = renderer;
          this.router = router;
          this.document = document;
          this.element = element;
          this.location = location;
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.primengConfig.ripple = true;
            var navbar = this.element.nativeElement.children[0].children[0];
            this._router = this.router.events.filter(function (event) {
              return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"];
            }).subscribe(function (event) {
              if (_this4.location.path() !== '/sections') {
                if (window.outerWidth > 991) {
                  window.document.children[0].scrollTop = 0;
                } else {
                  window.document.activeElement.scrollTop = 0;
                }
              }

              _this4.navbar.sidebarClose();

              _this4.renderer.listen('window', 'scroll', function (event) {
                var number = window.scrollY;

                var _location = _this4.location.path();

                _location = _location.split('/')[2];

                if (_this4.location.path().split('#')[0] !== '/sections') {
                  if (number > 150 || window.pageYOffset > 150) {
                    // add logic
                    if (_location !== 'register') {
                      navbar.classList.remove('navbar-transparent');
                    }
                  } else if (_location !== 'addproduct' && _location !== 'login' && _location !== 'register' && _this4.location.path() !== '/nucleoicons') {
                    return; // remove logic
                    // navbar.classList.add('navbar-transparent');
                  }
                }
              });
            });
            var ua = window.navigator.userAgent;
            var trident = ua.indexOf('Trident/');

            if (trident > 0) {
              // IE 11 => return version number
              var rv = ua.indexOf('rv:');
              var version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
            }
          }
        }, {
          key: "removeFooter",
          value: function removeFooter() {
            var title = this.location.prepareExternalUrl(this.location.path());
            title = title.slice(1);

            if (title === 'signup' || title === 'nucleoicons') {
              return false;
            } else {
              return true;
            }
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: primeng_api__WEBPACK_IMPORTED_MODULE_7__["PrimeNGConfig"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
        }];
      };

      AppComponent.propDecorators = {
        navbar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: [_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"]]
        }]
      };
      AppComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [primeng_api__WEBPACK_IMPORTED_MODULE_7__["PrimeNGConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], Object, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])], AppComponent);
      /***/
    },

    /***/
    "T1gg":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cards-areas/cards-areas.component.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function T1gg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div id=\"cards\" class=\"section section-cards\" data-background-color=\"gray\">\n    <!--     *********    BLOG CARDS     *********      -->\n    <div class=\"cards\">\n        <div class=\"container\">\n            <div class=\"title\">\n                <h3 class=\"title\">Cards</h3>\n                <h3>\n                    <small>Blog Cards</small>\n                </h3>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6 col-lg-4\">\n                    <div class=\"card\" data-background-color=\"red\">\n                        <div class=\"card-body\">\n                            <h6 class=\"category-social\">\n                                <i class=\"fa fa-fire\"></i> Trending\n                            </h6>\n                            <p class=\"card-description\">\n                                \"The supreme art of war is to subdue the enemy without fighting.\"\n                            </p>\n                            <div class=\"card-footer\">\n                                <div class=\"author\">\n                                    <img src=\"assets/img/julie.jpg\" alt=\"...\" class=\"avatar img-raised\">\n                                    <span>Susan B. Anthony</span>\n                                </div>\n                                <div class=\"stats stats-right\">\n                                    <i class=\"now-ui-icons ui-2_favourite-28\"></i> 10.4K ·\n                                    <i class=\"now-ui-icons files_single-copy-04\"></i> 425\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card card-blog\">\n                        <div class=\"card-image\">\n                            <img class=\"img rounded\" src=\"assets/img/project13.jpg\">\n                        </div>\n                        <div class=\"card-body\">\n                            <h6 class=\"category text-warning\">\n                                <i class=\"now-ui-icons business_bulb-63\"></i> Focus\n                            </h6>\n                            <h5 class=\"card-title\">\n                                <a href=\"#nuk\">Stay Focused: Train Your Brain</a>\n                            </h5>\n                            <p class=\"card-description\">\n                                Our brains are finely attuned to distraction, so today's digital environment makes it especially hard to focus...\n                            </p>\n                        </div>\n                    </div>\n                    <div class=\"card\">\n                        <div class=\"card-body\">\n                            <h6 class=\"category text-danger\">\n                                <i class=\"now-ui-icons media-2_sound-wave\"></i> Trending\n                            </h6>\n                            <h5 class=\"card-title\">\n                                <a href=\"#\">Here Be Dragons</a>\n                            </h5>\n                            <p class=\"card-description\">\n                                An immersive production studio focused on virtual reality content, has closed a $10 million Series A round led by Discovery Communications\n                            </p>\n                            <div class=\"card-footer\">\n                                <div class=\"author\">\n                                    <img src=\"assets/img/olivia.jpg\" alt=\"...\" class=\"avatar img-raised\">\n                                    <span>Lord Alex</span>\n                                </div>\n                                <div class=\"stats stats-right\">\n                                    <i class=\"now-ui-icons ui-2_favourite-28\"></i> 342 ·\n                                    <i class=\"now-ui-icons files_single-copy-04\"></i> 45\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6 col-lg-4\">\n                    <div class=\"card\" data-background-color=\"black\">\n                        <div class=\"card-body content-danger\">\n                            <h6 class=\"category-social\">\n                                <i class=\"fa fa-apple\"></i> New Apps\n                            </h6>\n                            <h4 class=\"card-title\">\n                                <a href=\"#nuk\">FiftyThree Files For Paper</a>\n                            </h4>\n                            <p class=\"card-description\">\n                                Yesterday, as Facebook launched its news reader app Paper, design-focused startup FiftyThree called out Facebook publicly for using their brand name...\n                            </p>\n                            <div class=\"card-footer text-center\">\n                                <a href=\"#\" class=\"btn btn-default btn-round\">Read Article</a>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card card-blog\">\n                        <div class=\"card-image\">\n                            <a href=\"#\">\n                                <img class=\"img rounded\" src=\"assets/img/card-blog2.jpg\">\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <h6 class=\"category text-primary\">Features</h6>\n                            <h5 class=\"card-title\">\n                                That’s One Way To Ditch Your Passenger\n                            </h5>\n                            <p class=\"card-description\">\n                                As near as we can tell, this guy must have thought he was going over backwards and tapped the rear break to bring the nose down...\n                            </p>\n                            <div class=\"card-footer\">\n                                <div class=\"author\">\n                                    <img src=\"assets/img/julie.jpg\" alt=\"...\" class=\"avatar img-raised\">\n                                    <span>Mike John</span>\n                                </div>\n                                <div class=\"stats stats-right\">\n                                    <i class=\"now-ui-icons tech_watch-time\"></i> 5 min read\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card\" data-background-color=\"blue\">\n                        <div class=\"card-body\">\n                            <h6 class=\"category-social\">\n                                <i class=\"fa fa-twitter\"></i> Twitter\n                            </h6>\n                            <p>\n                                \"You Don't Have to Sacrifice Joy to Build a Fabulous Business and Life\"\n                            </p>\n                            <div class=\"card-footer\">\n                                <div class=\"author\">\n                                    <img src=\"assets/img/james.jpg\" alt=\"...\" class=\"avatar img-raised\">\n                                    <span>Tania Andrew</span>\n                                </div>\n                                <div class=\"stats stats-right\">\n                                    <i class=\"now-ui-icons ui-2_favourite-28\"></i> 2.4K ·\n                                    <i class=\"now-ui-icons files_single-copy-04\"></i> 45\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-8 offset-md-2 col-lg-4 offset-lg-0\">\n                    <div class=\"card card-blog\">\n                        <div class=\"card-image\">\n                            <a href=\"#\">\n                                <img class=\"img rounded\" src=\"assets/img/examples/card-blog6.jpg\">\n                            </a>\n                        </div>\n                        <div class=\"card-body text-center\">\n                            <h6 class=\"category text-danger\">\n                                <i class=\"now-ui-icons media-2_sound-wave\"></i> Business\n                            </h6>\n                            <h5 class=\"card-title\">\n                                Axel Springer Spends $343M To Buy Business Insider\n                            </h5>\n                            <p class=\"card-description\">\n                                German media giant Axel Springer has announced it’s acquiring online business news publication Business Inside...\n                            </p>\n                            <div class=\"card-footer\">\n                                <a href=\"#nuk\" class=\"btn btn-primary\">Read Article</a>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card card-blog\">\n                        <div class=\"card-image\">\n                            <img class=\"img rounded\" src=\"assets/img/card-blog3.jpg\">\n                        </div>\n                        <div class=\"card-body\">\n                            <h6 class=\"category text-warning\">\n                                <i class=\"now-ui-icons media-1_camera-compact\"></i> Photo\n                            </h6>\n                            <h5 class=\"card-title\">\n                                <a href=\"#\">Indispensible to nature photography: the hide</a>\n                            </h5>\n                            <div class=\"card-footer\">\n                                <div class=\"stats stats-right\">\n                                    <i class=\"now-ui-icons ui-2_favourite-28\"></i> 342 ·\n                                    <i class=\"now-ui-icons files_single-copy-04\"></i> 45\n                                </div>\n                                <div class=\"author\">\n                                    <img src=\"assets/img/james.jpg\" alt=\"...\" class=\"avatar img-raised\">\n                                    <span>Devin Coldewey</span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-6 px-0\">\n                <div class=\"card card-fashion card-background\" style=\"background-image: url('assets/img/bg26.jpg')\">\n                    <div class=\"card-body\">\n                        <div class=\"card-title text-left\">\n                            <h2>\n                                <a href=\"#\">\n                                    Walk of shame - Latest Urban Trend\n                                </a>\n                            </h2>\n                        </div>\n                        <div class=\"card-footer text-left\">\n                            <div class=\"stats\">\n                                <span>\n                                    <i class=\"now-ui-icons users_circle-08\"></i>Author\n                                </span>\n                                <span>\n                                    <i class=\"now-ui-icons tech_watch-time\"></i> June 2, 2017\n                                </span>\n                            </div>\n                            <div class=\"stats-link pull-right\">\n                                <a href=\"#\" class=\"footer-link\">People</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-6 px-0\">\n                <div class=\"card-container\">\n                    <div class=\"card card-fashion\">\n                        <h4 class=\"card-title\">\n                            <a href=\"#\">\n                                The view from south Texas in one Picture\n                            </a>\n                        </h4>\n                        <div class=\"card-body\">\n                            <div class=\"card-footer\">\n                                <div class=\"stats\">\n                                    <span>\n                                        <i class=\"now-ui-icons users_circle-08\"></i>Author\n                                    </span>\n                                    <span>\n                                        <i class=\"now-ui-icons tech_watch-time\"></i> June 2, 2017\n                                    </span>\n                                </div>\n                                <div class=\"stats-link pull-right\">\n                                    <a href=\"#\">Mountains</a>&sbquo;\n                                    <a href=\"#\">Outdoor</a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card card-fashion card-background\" style=\"background-image: url('http://mvpwp.com/demo/nowwp/wp-content/uploads/sites/6/2017/06/a-james-donovan-180375.jpg')\">\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END BLOG CARDS      *********      -->\n    <!--     *********    PROFILE CARDS     *********      -->\n    <div class=\"cards\">\n        <div class=\"container\">\n            <div class=\"title\">\n                <h3>\n                    <small>Profile Cards</small>\n                </h3>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6 col-lg-3\">\n                    <div class=\"card card-profile\">\n                        <div class=\"card-image\">\n                            <img class=\"img rounded\" src=\"assets/img/julie.jpg\">\n                        </div>\n                        <div class=\"card-body\">\n                            <a href=\"pablo\">\n                                <h4 class=\"card-title\">Julie Andrew</h4>\n                            </a>\n                            <h6 class=\"card-category text-info\">\n                                Web Designer\n                            </h6>\n                            <div class=\"card-footer\">\n                                <a href=\"#\" class=\"btn btn-icon btn-neutral btn-lg btn-twitter\"><i class=\"fa fa-twitter\"></i></a>\n                                <a href=\"#\" class=\"btn btn-icon btn-neutral btn-lg btn-dribbble\"><i class=\"fa fa-dribbble\"></i></a>\n                                <a href=\"#\" class=\"btn btn-icon btn-neutral btn-lg btn-instagram\"><i class=\"fa fa-instagram\"></i></a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6 col-lg-3\">\n                    <div class=\"card card-profile\">\n                        <div class=\"card-avatar\">\n                            <a href=\"#\">\n                                <img class=\"img img-raised\" src=\"assets/img/mike.jpg\">\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <h4 class=\"card-title\">Alec Mike</h4>\n                            <h6 class=\"category text-gray\">\n                                Designer\n                            </h6>\n                            <p class=\"card-description\">\n                                One of the co-founders. Alec drives the technical strategy of the platform, customer support and brand.\n                            </p>\n                            <div class=\"card-footer\">\n                                <a href=\"#\" class=\"btn btn-icon btn-twitter btn-round\"><i class=\"fa fa-twitter\"></i></a>\n                                <a href=\"#\" class=\"btn btn-icon btn-facebook btn-round\"><i class=\"fa fa-facebook-square\"></i></a>\n                                <a href=\"#\" class=\"btn btn-icon btn-google btn-round\"><i class=\"fa fa-google\"></i></a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6 col-lg-3\">\n                    <div class=\"card card-profile\" data-background-color=\"black\">\n                        <div class=\"card-avatar\">\n                            <a href=\"#\">\n                                <img class=\"img img-raised\" src=\"assets/img/james.jpg\">\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <h6 class=\"card-category\">CEO / Co-Founder</h6>\n                            <h4 class=\"card-title\">James Thompson</h4>\n                            <p class=\"card-description\">\n                                Don't be scared of the truth because we need to restart the human foundation in truth.\n                            </p>\n                            <a href=\"#\" class=\"btn btn-primary btn-round\">Follow</a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6 col-lg-3\">\n                    <div class=\"card card-profile\">\n                        <div class=\"card-body\">\n                            <div class=\"card-avatar\">\n                                <a href=\"#\">\n                                    <img class=\"img img-raised\" src=\"assets/img/olivia.jpg\">\n                                </a>\n                            </div>\n                            <h6 class=\"category text-gray\">Growth Hacker</h6>\n                            <h4 class=\"card-title\">Olivia Thompson</h4>\n                            <p class=\"card-description\">\n                                \"Work hard play harder.\"\n                            </p>\n                            <div class=\"card-footer\">\n                                <a href=\"#\" class=\"btn btn-icon btn-primary btn-simple btn-round\"><i class=\"fa fa-twitter\"></i></a>\n                                <a href=\"#\" class=\"btn btn-icon  btn-primary btn-simple btn-round\"><i class=\"fa fa-facebook-square\"></i></a>\n                                <a href=\"#\" class=\"btn btn-icon  btn-primary btn-simple btn-round\"><i class=\"fa fa-google\"></i></a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END PROFILE CARDS      *********      -->\n    <!--     *********    PRODUCT CARDS     *********      -->\n    <div class=\"cards\">\n        <div class=\"container\">\n            <div class=\"title\">\n                <h3>\n                    <small>Full Background Cards</small>\n                </h3>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <div class=\"card card-background\" style=\"background-image: url('assets/img/bg1.jpg')\">\n                        <div class=\"card-body\">\n                            <div class=\"card-title text-left\">\n                                <h3>How wild Animals live in the National Forest</h3>\n                            </div>\n                            <div class=\"card-footer text-left\">\n                                <div class=\"stats\">\n                                    <span>\n                                        <i class=\"now-ui-icons media-2_sound-wave\"></i>SPACE.com\n                                    </span>\n                                    <span>\n                                        <i class=\"now-ui-icons tech_watch-time\"></i> 20min ago\n                                    </span>\n                                </div>\n                                <div class=\"stats-link pull-right\">\n                                    <a href=\"#\" class=\"footer-link\">Environment</a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"card card-background\" style=\"background-image: url('assets/img/bg3.jpg')\">\n                        <div class=\"card-body\">\n                            <div class=\"card-title text-left\">\n                                <h3>How wild Animals live in the National Forest</h3>\n                            </div>\n                            <div class=\"card-footer text-left\">\n                                <div class=\"stats-link\">\n                                    <a href=\"#\" class=\"footer-link\">Environment</a>\n                                </div>\n                                <div class=\"stats stats-right\">\n                                    <span>\n                                        <i class=\"now-ui-icons media-2_sound-wave\"></i>SPACE.com\n                                    </span>\n                                    <span>\n                                        <i class=\"now-ui-icons tech_watch-time\"></i> 20min ago\n                                    </span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END PRODUCT CARDS      *********      -->\n    <!--     *********    PRICING CARDS     *********      -->\n    <div class=\"cards\">\n        <div class=\"container\">\n            <div class=\"title\">\n                <h3>\n                    <small>Pricing Cards</small>\n                </h3>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6 col-lg-3\">\n                    <div class=\"card card-pricing\">\n                        <div class=\"card-body\">\n                            <h6 class=\"category\">Alpha Pack</h6>\n                            <div class=\"icon icon-primary\">\n                                <i class=\"now-ui-icons objects_diamond\"></i>\n                            </div>\n                            <h3 class=\"card-title\">$67</h3>\n                            <p class=\"card-description\">\n                                This is good if your company size is between 100 and 299 employees.</p>\n                            <a href=\"#\" class=\"btn btn-primary btn-round\">Add to Cart</a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6 col-lg-3\">\n                    <div class=\"card card-pricing\" data-background-color=\"orange\">\n                        <div class=\"card-body\">\n                            <h1 class=\"card-title\">$40</h1>\n                            <ul>\n                                <li><i class=\"now-ui-icons ui-1_check text-primary\"></i> Unlimited MB</li>\n                                <li><i class=\"now-ui-icons ui-1_check text-primary\"></i> Unlimited emails</li>\n                                <li><i class=\"now-ui-icons ui-1_check text-primary\"></i> Unlimited Databases</li>\n                                <li><i class=\"now-ui-icons ui-1_check text-primary\"></i> Full Support</li>\n                            </ul>\n                            <a href=\"#\" class=\"btn btn-neutral btn-default disabled btn-round\">\n                                Current Plan\n                            </a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6 col-lg-3\">\n                    <div class=\"card card-pricing card-background\" style=\"background-image: url('assets/img/project12.jpg')\">\n                        <div class=\"card-body\">\n                            <h6 class=\"category\">Professional</h6>\n                            <div class=\"icon icon-primary\">\n                                <i class=\"now-ui-icons objects_spaceship\"></i>\n                            </div>\n                            <h2 class=\"card-title\">$67</h2>\n                            <p class=\"card-description\">\n                                This is good if you are a freelancer of photographer.</p>\n                            <a href=\"#\" class=\"btn btn-primary btn-round\">\n                                Sign Up\n                            </a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6 col-lg-3\">\n                    <div class=\"card card-pricing\">\n                        <div class=\"card-body\">\n                            <h6 class=\"category\">Starter</h6>\n                            <h1 class=\"card-title\">\n                                <small>$</small>10</h1>\n                            <ul>\n                                <li><i class=\"now-ui-icons ui-1_check text-success\"></i> 1000 MB</li>\n                                <li><i class=\"now-ui-icons ui-1_simple-remove text-danger\"></i> 3 email</li>\n                                <li><i class=\"now-ui-icons ui-1_simple-remove text-danger\"></i> 5 Databases</li>\n                                <li><i class=\"now-ui-icons ui-1_simple-remove text-danger\"></i> No Support</li>\n                            </ul>\n                            <a href=\"#\" class=\"btn btn-primary btn-round\">\n                                Register\n                            </a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END PRICING CARDS      *********      -->\n</div>\n<div class=\"section section-plain-cards\">\n    <div class=\"container\">\n        <div class=\"title\">\n            <h3>Plain Cards</h3>\n            <h3>\n                <small>Blog Cards</small>\n            </h3>\n        </div>\n        <!--     *********    PLAIN BLOG CARDS      *********      -->\n        <div class=\"row\">\n            <div class=\"col-md-6 col-lg-4\">\n                <div class=\"card card-blog card-plain\">\n                    <div class=\"card-image\">\n                        <img class=\"img rounded img-raised\" src=\"assets/img/project13.jpg\">\n                    </div>\n                    <div class=\"card-body\">\n                        <h6 class=\"category text-warning\">\n                            <i class=\"now-ui-icons business_bulb-63\"></i> Focus\n                        </h6>\n                        <h5 class=\"card-title\">\n                            <a href=\"#nuk\">Stay Focused: Train Your Brain</a>\n                        </h5>\n                        <p class=\"card-description\">\n                            Our brains are finely attuned to distraction, so today's digital environment makes it especially hard to focus...\n                        </p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-6 col-lg-4\">\n                <div class=\"card card-blog card-plain\">\n                    <div class=\"card-image\">\n                        <a href=\"#\">\n                            <img class=\"img rounded img-raised\" src=\"assets/img/card-blog2.jpg\">\n                        </a>\n                    </div>\n                    <div class=\"card-body\">\n                        <h6 class=\"category text-primary\">Features</h6>\n                        <h5 class=\"card-title\">\n                            <a href=\"#nuk\">That’s One Way To Ditch Your Passenger</a>\n                        </h5>\n                        <p class=\"card-description\">\n                            As near as we can tell, this guy must have thought he was going over backwards and tapped the rear break to bring the nose down...\n                        </p>\n                        <div class=\"card-footer\">\n                            <div class=\"author\">\n                                <img src=\"assets/img/julie.jpg\" alt=\"...\" class=\"avatar img-raised\">\n                                <span>Mike John</span>\n                            </div>\n                            <div class=\"stats stats-right\">\n                                <i class=\"now-ui-icons tech_watch-time\"></i> 5 min read\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-6 col-lg-4\">\n                <div class=\"card card-blog card-plain\">\n                    <div class=\"card-image\">\n                        <a href=\"#\">\n                            <img class=\"img img-raised rounded\" src=\"assets/img/examples/card-blog6.jpg\">\n                        </a>\n                    </div>\n                    <div class=\"card-body text-center\">\n                        <h6 class=\"category text-danger\">\n                            <i class=\"now-ui-icons media-2_sound-wave\"></i> Business\n                        </h6>\n                        <h5 class=\"card-title\">\n                            <a href=\"#nuk\">Axel Springer Spends $343M To Buy Business Insider</a>\n                        </h5>\n                        <p class=\"card-description\">\n                            German media giant Axel Springer has announced it’s acquiring online business news publication Business Inside...\n                        </p>\n                        <div class=\"card-footer\">\n                            <a href=\"#nuk\" class=\"btn btn-primary\">Read Article</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END PLAIN BLOG CARDS      *********      -->\n    <!--     *********   PLAIN PROFILE CARDS     *********      -->\n    <div class=\"container\">\n        <div class=\"title\">\n            <h3>\n                <small>Profile Cards</small>\n            </h3>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-6 col-lg-3\">\n                <div class=\"card card-profile card-plain\">\n                    <div class=\"card-image\">\n                        <img class=\"img rounded\" src=\"assets/img/julie.jpg\">\n                    </div>\n                    <div class=\"card-body\">\n                        <a href=\"pablo\">\n                            <h4 class=\"card-title\">Julie Andrew</h4>\n                        </a>\n                        <h6 class=\"card-category text-info\">\n                            Web Designer\n                        </h6>\n                        <div class=\"card-footer\">\n                            <a href=\"#\" class=\"btn btn-icon btn-neutral btn-lg btn-twitter\"><i class=\"fa fa-twitter\"></i></a>\n                            <a href=\"#\" class=\"btn btn-icon btn-neutral btn-lg btn-dribbble\"><i class=\"fa fa-dribbble\"></i></a>\n                            <a href=\"#\" class=\"btn btn-icon btn-neutral btn-lg btn-instagram\"><i class=\"fa fa-instagram\"></i></a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-6 col-lg-3\">\n                <div class=\"card card-profile card-plain\">\n                    <div class=\"card-avatar\">\n                        <a href=\"#\">\n                            <img class=\"img img-raised\" src=\"assets/img/mike.jpg\">\n                        </a>\n                    </div>\n                    <div class=\"card-body\">\n                        <h4 class=\"card-title\">Alec Mike</h4>\n                        <h6 class=\"category text-gray\">\n                            Designer\n                        </h6>\n                        <p class=\"card-description\">\n                            One of the co-founders. Alec drives the technical strategy of the platform, customer support and brand.\n                        </p>\n                        <div class=\"card-footer\">\n                            <a href=\"#\" class=\"btn btn-icon btn-twitter btn-round\"><i class=\"fa fa-twitter\"></i></a>\n                            <a href=\"#\" class=\"btn btn-icon btn-facebook btn-round\"><i class=\"fa fa-facebook-square\"></i></a>\n                            <a href=\"#\" class=\"btn btn-icon btn-google btn-round\"><i class=\"fa fa-google\"></i></a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-6 col-lg-3\">\n                <div class=\"card card-profile card-plain\">\n                    <div class=\"card-avatar\">\n                        <a href=\"#\">\n                            <img class=\"img img-raised\" src=\"assets/img/james.jpg\">\n                        </a>\n                    </div>\n                    <div class=\"card-body\">\n                        <h6 class=\"card-category\">CEO / Co-Founder</h6>\n                        <h4 class=\"card-title\">James Thompson</h4>\n                        <p class=\"card-description\">\n                            Don't be scared of the truth because we need to restart the human foundation in truth.\n                        </p>\n                        <a href=\"#\" class=\"btn btn-primary btn-round\">Follow</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-6 col-lg-3\">\n                <div class=\"card card-profile card-plain\">\n                    <div class=\"card-body\">\n                        <div class=\"card-avatar\">\n                            <a href=\"#\">\n                                <img class=\"img img-raised\" src=\"assets/img/olivia.jpg\">\n                            </a>\n                        </div>\n                        <h6 class=\"category text-gray\">Growth Hacker</h6>\n                        <h4 class=\"card-title\">Olivia Thompson</h4>\n                        <p class=\"card-description\">\n                            \"Work hard play harder.\"\n                        </p>\n                        <div class=\"card-footer\">\n                            <a href=\"#\" class=\"btn btn-icon btn-primary btn-simple btn-round\"><i class=\"fa fa-twitter\"></i></a>\n                            <a href=\"#\" class=\"btn btn-icon  btn-primary btn-simple btn-round\"><i class=\"fa fa-facebook-square\"></i></a>\n                            <a href=\"#\" class=\"btn btn-icon  btn-primary btn-simple btn-round\"><i class=\"fa fa-google\"></i></a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END PROFILE CARDS      *********      -->\n</div>\n";
      /***/
    },

    /***/
    "T9Od":
    /*!*****************************************************!*\
      !*** ./src/app/examples/login/login.component.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function T9Od(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "T9bN":
    /*!************************************************!*\
      !*** ./src/app/sections/sections.component.ts ***!
      \************************************************/

    /*! exports provided: SectionsComponent */

    /***/
    function T9bN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SectionsComponent", function () {
        return SectionsComponent;
      });
      /* harmony import */


      var _raw_loader_sections_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./sections.component.html */
      "kQxL");
      /* harmony import */


      var _sections_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./sections.component.scss */
      "LtKs");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var SectionsComponent = /*#__PURE__*/function () {
        function SectionsComponent(router) {
          _classCallCheck(this, SectionsComponent);

          router.events.subscribe(function (s) {
            if (s instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
              var tree = router.parseUrl(router.url);

              if (tree.fragment) {
                var element = document.querySelector("#" + tree.fragment);

                if (element) {
                  element.scrollIntoView();
                }
              }
            }
          });
        }

        _createClass(SectionsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var navbar = document.getElementsByTagName('app-navbar')[0];
            navbar.children[0].classList.remove('navbar-transparent');
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var navbar = document.getElementsByTagName('app-navbar')[0];
            navbar.children[0].classList.add('navbar-transparent');
          }
        }]);

        return SectionsComponent;
      }();

      SectionsComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      };

      SectionsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-sections',
        template: _raw_loader_sections_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_sections_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], SectionsComponent);
      /***/
    },

    /***/
    "TdX4":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sections/pricing/pricing.component.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function TdX4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"cd-section\" id=\"pricing\">\n    <!--     *********    PRICING 1     *********      -->\n    <div class=\"pricing-1 section-image\" id=\"pricing-1\" style=\"background-image: url('assets/img/pricing1.jpg')\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-6 ml-auto mr-auto text-center\">\n                    <h2 class=\"title\">Pick the best plan for you</h2>\n                    <h4 class=\"description \">You have Free Unlimited Updates and Premium Support on each package.</h4>\n                    <div class=\"section-space\"></div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-3\">\n                    <div class=\"card card-pricing card-plain\">\n                        <div class=\"card-body\">\n                            <h6 class=\"category \">Bravo Pack</h6>\n                            <div class=\"icon icon-warning\">\n                                <i class=\"now-ui-icons media-1_button-power\"></i>\n                            </div>\n                            <h3 class=\"card-title\">$10</h3>\n                            <ul>\n                                <li>Complete documentation</li>\n                                <li>Working materials in Sketch</li>\n                            </ul>\n                            <a href=\"#\" class=\"btn btn-neutral btn-warning btn-round\">Add to Cart</a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"card card-pricing\">\n                        <div class=\"card-body\">\n                            <h6 class=\"category\">Alpha Pack</h6>\n                            <div class=\"icon icon-primary\">\n                                <i class=\"now-ui-icons objects_diamond\"></i>\n                            </div>\n                            <h3 class=\"card-title\">$67</h3>\n                            <ul>\n                                <li>Working materials in EPS</li>\n                                <li>6 months access to the library</li>\n                            </ul>\n                            <a href=\"#\" class=\"btn btn-primary btn-round\">Add to Cart</a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"card card-pricing card-plain\">\n                        <div class=\"card-body\">\n                            <h6 class=\"category \">Charlie Pack</h6>\n                            <div class=\"icon icon-success\">\n                                <i class=\"now-ui-icons media-2_sound-wave\"></i>\n                            </div>\n                            <h3 class=\"card-title\">$69</h3>\n                            <ul>\n                                <li>Working materials in PSD</li>\n                                <li>1 year access to the library</li>\n                            </ul>\n                            <a href=\"#\" class=\"btn btn-neutral btn-success btn-round\">Add to Cart</a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"card card-pricing card-plain\">\n                        <div class=\"card-body\">\n                            <h6 class=\"category \">Extra Pack</h6>\n                            <div class=\"icon icon-danger\">\n                                <i class=\"now-ui-icons education_atom\"></i>\n                            </div>\n                            <h3 class=\"card-title\">$159</h3>\n                            <ul>\n                                <li>Complete documentation</li>\n                                <li>2GB cloud storage</li>\n                            </ul>\n                            <a href=\"#\" class=\"btn btn-neutral btn-danger btn-round\">Add to Cart</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END PRICING 1      *********      -->\n    <!--     *********    PRICING 2     *********      -->\n    <div class=\"pricing-2\" id=\"pricing-2\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-6 ml-auto mr-auto text-center\">\n                    <h2 class=\"title\">Pick the best plan for you</h2>\n                    <ngb-tabset type=\"pills\" class=\"nav nav-pills nav-pills-primary justify-content-center\">\n                        <ngb-tab title=\"Legal Entity\">\n                            <ng-template ngbTabContent>\n\n                            </ng-template>\n                        </ngb-tab>\n                        <ngb-tab title=\"Individual\">\n                            <ng-template ngbTabContent>\n\n                            </ng-template>\n                        </ngb-tab>\n                    </ngb-tabset>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <div class=\"card card-pricing card-plain\">\n                        <div class=\"card-body\">\n                            <h6 class=\"category\">Enterprise</h6>\n                            <h1 class=\"card-title\">\n                                <small>$</small>59</h1>\n                            <ul>\n                                <li>\n                                    <b>10GB</b> Disk Space</li>\n                                <li>\n                                    <b>100GB</b> Monthly Bandwidth</li>\n                                <li>\n                                    <b>20</b> Email Accounts</li>\n                                <li>\n                                    <b>Unlimited</b> subdomains</li>\n                            </ul>\n                            <a href=\"#\" class=\"btn btn-primary btn-round\">\n                                Sign Up\n                            </a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"card card-pricing card-background card-raised\" style=\"background-image: url('assets/img/pricing2.jpg')\">\n                        <div class=\"card-body\">\n                            <h6 class=\"category text-info\">Professional</h6>\n                            <h1 class=\"card-title\">\n                                <small>$</small>29</h1>\n                            <ul>\n                                <li>\n                                    <b>5GB</b> Disk Space</li>\n                                <li>\n                                    <b>50GB</b> Monthly Bandwidth</li>\n                                <li>\n                                    <b>10</b> Email Accounts</li>\n                                <li>\n                                    <b>Unlimited</b> subdomains</li>\n                            </ul>\n                            <a href=\"#\" class=\"btn btn-neutral btn-round\">\n                                Sign Up\n                            </a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"card card-pricing card-plain\">\n                        <div class=\"card-body\">\n                            <h6 class=\"category\">Standard</h6>\n                            <h1 class=\"card-title\">\n                                <small>$</small>17</h1>\n                            <ul>\n                                <li>\n                                    <b>2GB</b> Disk Space</li>\n                                <li>\n                                    <b>25GB</b> Monthly Bandwidth</li>\n                                <li>\n                                    <b>5</b> Email Accounts</li>\n                                <li>\n                                    <b>Unlimited</b> subdomains</li>\n                            </ul>\n                            <a href=\"#\" class=\"btn btn-primary btn-round\">\n                                Get Started\n                            </a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END PRICING 2      *********      -->\n    <!--     *********    PRICING 3     *********      -->\n    <div class=\"pricing-3 section-image\" style=\"background-image: url('assets/img/pricing3.jpg')\" id=\"pricing-3\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-6 ml-auto mr-auto text-center\">\n                    <h2 class=\"title\">Pick the best plan for you</h2>\n                    <h4 class=\"description\">You have Free Unlimited Updates on each package.</h4>\n                    <div class=\"section-space\"></div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-4 ml-auto\">\n                    <div class=\"card card-pricing\">\n                        <div class=\"card-body\">\n                            <h6 class=\"category\">Freelance</h6>\n                            <h1 class=\"card-title\">\n                                <small>$</small>29\n                                <small>/mo</small>\n                            </h1>\n                            <ul>\n                                <li>1 GB of space</li>\n                                <li>Limited Support</li>\n                                <li>Support at $25/hour</li>\n                                <li>Limited cloud access</li>\n                            </ul>\n                            <a href=\"#\" class=\"btn btn-primary btn-round\">\n                                Get Started\n                            </a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4 mr-auto\">\n                    <div class=\"card card-pricing card-raised\" data-background-color=\"orange\">\n                        <div class=\"card-body\">\n                            <h6 class=\"category\">Business</h6>\n                            <h1 class=\"card-title\">\n                                <small>$</small>59\n                                <small>/mo</small>\n                            </h1>\n                            <ul>\n                                <li>5 GB of space</li>\n                                <li>UnLimited Support</li>\n                                <li>Unlimited Downloads</li>\n                                <li>Full cloud access</li>\n                            </ul>\n                            <a href=\"#\" class=\"btn btn-neutral btn-round\">\n                                Get Started\n                            </a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END PRICING 3      *********      -->\n    <!--     *********    PRICING 4     *********      -->\n    <div class=\"pricing-4\" id=\"pricing-4\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-6 ml-auto mr-auto text-center\">\n                    <h2 class=\"title\">Pick the best plan for you</h2>\n                    <h4 class=\"description\">You have Free Unlimited Updates and Premium Support on each package.</h4>\n                    <div class=\"section-space\"></div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <div class=\"card card-pricing card-plain\">\n                        <div class=\"card-body\">\n                            <h6 class=\"category\">Starter</h6>\n                            <div class=\"icon icon-danger\">\n                                <i class=\"now-ui-icons tech_headphones\"></i>\n                            </div>\n                            <h3 class=\"card-title\">\n                                <small>$</small>10</h3>\n                            <ul>\n                                <li>1000 MB</li>\n                                <li>3 email</li>\n                                <li>5 Databases</li>\n                            </ul>\n                            <a href=\"#\" class=\"btn btn-danger btn-round\">\n                                Get it Now\n                            </a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"card card-pricing\" data-background-color=\"orange\">\n                        <div class=\"card-body\">\n                            <h6 class=\"category\">Professional</h6>\n                            <div class=\"icon icon-primary\">\n                                <i class=\"now-ui-icons tech_headphones\"></i>\n                            </div>\n                            <h3 class=\"card-title\">\n                                <small>$</small>40</h3>\n                            <ul>\n                                <li>Unlimited MB</li>\n                                <li>Unlimited emails</li>\n                                <li>Full Support</li>\n                            </ul>\n                            <a href=\"#\" class=\"btn btn-neutral disabled btn-round\">\n                                Current Plan\n                            </a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"card card-pricing card-plain\">\n                        <div class=\"card-body\">\n                            <h6 class=\"category\">Basic</h6>\n                            <div class=\"icon icon-warning\">\n                                <i class=\"now-ui-icons tech_headphones\"></i>\n                            </div>\n                            <h3 class=\"card-title\">\n                                <small>$</small>20</h3>\n                            <ul>\n                                <li>1000 MB</li>\n                                <li>3 email</li>\n                                <li>No Support</li>\n                            </ul>\n                            <a href=\"#\" class=\"btn btn-warning btn-round\">\n                                Upgrade Plan\n                            </a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END PRICING 4      *********      -->\n    <!--     *********    PRICING 5     *********      -->\n    <div class=\"pricing-5 section-pricing-5 section-image\" id=\"pricing-5\" style=\"background-image: url('assets/img/bg31.jpg')\">\n        <div class=\"container\">\n\n          <div class=\"row\">\n            <div class=\"col-md-4\">\n              <h2 class=\"title\">Choose a plan for your next project</h2>\n              <p class=\"description\">You have Free Unlimited Updates and Premium Support on each package. You also have 20 days to request a refund if you're not happy with your purchase.</p>\n            </div>\n            <div class=\"col-md-8\">\n                <ngb-tabset type=\"pills\" class=\"nav nav-pills nav-pills-primary justify-content-center tab-space\">\n                  <ngb-tab title=\"Expensive\">\n                      <ng-template ngbTabContent>\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <div class=\"card card-pricing card-raised\">\n                                    <div class=\"card-body\">\n                                        <h6 class=\"category\">Plus</h6>\n                                        <h1 class=\"card-title\">\n                                            <small>$</small>100</h1>\n                                        <ul>\n                                            <li>\n                                                <b>15</b> Projects</li>\n                                            <li>\n                                                <b>5GB</b> Storage</li>\n                                            <li>\n                                                <b>Unlimited</b> users</li>\n                                            <li>\n                                                <b>No time</b> tracking</li>\n                                        </ul>\n                                        <a href=\"#\" class=\"btn btn-primary btn-round\">\n                                            Buy Now!\n                                        </a>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <div class=\"card card-pricing card-plain\">\n                                    <div class=\"card-body\">\n                                        <h6 class=\"category\">Maximum</h6>\n                                        <h1 class=\"card-title\">\n                                            <small>$</small>120</h1>\n                                        <ul>\n                                            <li>\n                                                <b>25</b> Projects</li>\n                                            <li>\n                                                <b>15GB</b> Storage</li>\n                                            <li>\n                                                <b>Unlimited</b> users</li>\n                                            <li>\n                                                <b>No time</b> tracking</li>\n                                        </ul>\n                                        <a href=\"#\" class=\"btn btn-primary btn-round\">\n                                            Buy Now!\n                                        </a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                      </ng-template>\n                  </ngb-tab>\n                  <ngb-tab title=\"Cheaper\">\n                      <ng-template ngbTabContent>\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <div class=\"card card-pricing card-raised\">\n                                    <div class=\"card-body\">\n                                        <h6 class=\"category\">Standard</h6>\n                                        <h1 class=\"card-title\">\n                                            <small>$</small>20</h1>\n                                        <ul>\n                                            <li>\n                                                <b>5</b> Projects</li>\n                                            <li>\n                                                <b>2GB</b> Storage</li>\n                                            <li>\n                                                <b>Unlimited</b> users</li>\n                                            <li>\n                                                <b>No time</b> tracking</li>\n                                        </ul>\n                                        <a href=\"#\" class=\"btn btn-primary btn-round\">\n                                            Buy Now!\n                                        </a>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <div class=\"card card-pricing card-plain\">\n                                    <div class=\"card-body\">\n                                        <h6 class=\"category\">Premium</h6>\n                                        <h1 class=\"card-title\">\n                                            <small>$</small>60</h1>\n                                        <ul>\n                                            <li>\n                                                <b>7</b> Projects</li>\n                                            <li>\n                                                <b>3GB</b> Storage</li>\n                                            <li>\n                                                <b>Unlimited</b> users</li>\n                                            <li>\n                                                <b>No time</b> tracking</li>\n                                        </ul>\n                                        <a href=\"#\" class=\"btn btn-primary btn-round\">\n                                            Buy Now!\n                                        </a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                      </ng-template>\n                  </ngb-tab>\n                </ngb-tabset>\n            </div>\n          </div>\n        </div>\n    </div>\n    <!--     *********    END PRICING 5      *********      -->\n</div>\n";
      /***/
    },

    /***/
    "ThbA":
    /*!***********************************!*\
      !*** ./src/app/primeng.module.ts ***!
      \***********************************/

    /*! exports provided: PrimeNGBundleModule */

    /***/
    function ThbA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrimeNGBundleModule", function () {
        return PrimeNGBundleModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var primeng_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! primeng/calendar */
      "eO1q");
      /* harmony import */


      var primeng_chips__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! primeng/chips */
      "RGqm");
      /* harmony import */


      var primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! primeng/dropdown */
      "arFO");
      /* harmony import */


      var primeng_keyfilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! primeng/keyfilter */
      "sKUQ");
      /* harmony import */


      var primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! primeng/inputtext */
      "7kUa");
      /* harmony import */


      var primeng_listbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! primeng/listbox */
      "+07z");
      /* harmony import */


      var primeng_multiselect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! primeng/multiselect */
      "lVkt");
      /* harmony import */


      var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! primeng/radiobutton */
      "LuMj");
      /* harmony import */


      var primeng_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! primeng/slider */
      "+la4");
      /* harmony import */


      var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! primeng/selectbutton */
      "5o1E");
      /* harmony import */


      var primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! primeng/tristatecheckbox */
      "rph/");
      /* harmony import */


      var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! primeng/autocomplete */
      "V5BG");
      /* harmony import */


      var primeng_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! primeng/checkbox */
      "Ji6n");
      /* harmony import */


      var primeng_colorpicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! primeng/colorpicker */
      "bv7W");
      /* harmony import */


      var primeng_editor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! primeng/editor */
      "dgC2");
      /* harmony import */


      var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! primeng/inputswitch */
      "rLzU");
      /* harmony import */


      var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! primeng/inputtextarea */
      "zFJ7");
      /* harmony import */


      var primeng_inputmask__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! primeng/inputmask */
      "CwEU");
      /* harmony import */


      var primeng_password__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! primeng/password */
      "+YxP");
      /* harmony import */


      var primeng_rating__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! primeng/rating */
      "Js94");
      /* harmony import */


      var primeng_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! primeng/spinner */
      "ImVz");
      /* harmony import */


      var primeng_togglebutton__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! primeng/togglebutton */
      "Y+ZO");
      /* harmony import */


      var primeng_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! primeng/button */
      "jIHw");
      /* harmony import */


      var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! primeng/splitbutton */
      "Wq6t");
      /* harmony import */


      var primeng_carousel__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! primeng/carousel */
      "LwO5");
      /* harmony import */


      var primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! primeng/fullcalendar */
      "9R/8");
      /* harmony import */


      var primeng_orderlist__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! primeng/orderlist */
      "cQJI");
      /* harmony import */


      var primeng_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! primeng/paginator */
      "6t4m");
      /* harmony import */


      var primeng_table__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! primeng/table */
      "rEr+");
      /* harmony import */


      var primeng_treetable__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! primeng/treetable */
      "EVgl");
      /* harmony import */


      var primeng_dataview__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! primeng/dataview */
      "8CEF");
      /* harmony import */


      var primeng_organizationchart__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! primeng/organizationchart */
      "dQiQ");
      /* harmony import */


      var primeng_gmap__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! primeng/gmap */
      "QRRn");
      /* harmony import */


      var primeng_picklist__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! primeng/picklist */
      "iHf9");
      /* harmony import */


      var primeng_tree__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! primeng/tree */
      "g9iH");
      /* harmony import */


      var primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! primeng/virtualscroller */
      "+/m8");
      /* harmony import */


      var primeng_accordion__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! primeng/accordion */
      "7LiV");
      /* harmony import */


      var primeng_fieldset__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! primeng/fieldset */
      "fk4S");
      /* harmony import */


      var primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! primeng/scrollpanel */
      "SSqW");
      /* harmony import */


      var primeng_toolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! primeng/toolbar */
      "5EWq");
      /* harmony import */


      var primeng_card__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! primeng/card */
      "QIUk");
      /* harmony import */


      var primeng_panel__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! primeng/panel */
      "7CaW");
      /* harmony import */


      var primeng_tabview__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! primeng/tabview */
      "dPl2");
      /* harmony import */


      var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
      /*! primeng/confirmdialog */
      "Nf9I");
      /* harmony import */


      var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
      /*! primeng/dynamicdialog */
      "J7/z");
      /* harmony import */


      var primeng_sidebar__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
      /*! primeng/sidebar */
      "jLSX");
      /* harmony import */


      var primeng_tooltip__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
      /*! primeng/tooltip */
      "xlun");
      /* harmony import */


      var primeng_dialog__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
      /*! primeng/dialog */
      "/RsI");
      /* harmony import */


      var primeng_lightbox__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
      /*! primeng/lightbox */
      "LnpQ");
      /* harmony import */


      var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
      /*! primeng/overlaypanel */
      "z8Lm");
      /* harmony import */


      var primeng_fileupload__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
      /*! primeng/fileupload */
      "NCSE");
      /* harmony import */


      var primeng_menu__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
      /*! primeng/menu */
      "1SLH");
      /* harmony import */


      var primeng_contextmenu__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
      /*! primeng/contextmenu */
      "yNBN");
      /* harmony import */


      var primeng_panelmenu__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
      /*! primeng/panelmenu */
      "kSmT");
      /* harmony import */


      var primeng_steps__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(
      /*! primeng/steps */
      "KcHJ");
      /* harmony import */


      var primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(
      /*! primeng/tieredmenu */
      "B16f");
      /* harmony import */


      var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(
      /*! primeng/breadcrumb */
      "URcr");
      /* harmony import */


      var primeng_megamenu__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(
      /*! primeng/megamenu */
      "BAkx");
      /* harmony import */


      var primeng_menubar__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(
      /*! primeng/menubar */
      "b1Ni");
      /* harmony import */


      var primeng_slidemenu__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(
      /*! primeng/slidemenu */
      "3k5r");
      /* harmony import */


      var primeng_tabmenu__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(
      /*! primeng/tabmenu */
      "c+7h");
      /* harmony import */


      var primeng_chart__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(
      /*! primeng/chart */
      "I5S5");
      /* harmony import */


      var primeng_messages__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(
      /*! primeng/messages */
      "dts7");
      /* harmony import */


      var primeng_message__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(
      /*! primeng/message */
      "FMpt");
      /* harmony import */


      var primeng_toast__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(
      /*! primeng/toast */
      "Gxio");
      /* harmony import */


      var primeng_galleria__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(
      /*! primeng/galleria */
      "2art");
      /* harmony import */


      var primeng_dragdrop__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(
      /*! primeng/dragdrop */
      "TjhJ");
      /* harmony import */


      var primeng_defer__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(
      /*! primeng/defer */
      "sEFg");
      /* harmony import */


      var primeng_blockui__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(
      /*! primeng/blockui */
      "0LTx");
      /* harmony import */


      var primeng_inplace__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(
      /*! primeng/inplace */
      "QvPt");
      /* harmony import */


      var primeng_progressbar__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(
      /*! primeng/progressbar */
      "+DzE");
      /* harmony import */


      var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(
      /*! primeng/codehighlighter */
      "yjSK");
      /* harmony import */


      var primeng_focustrap__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(
      /*! primeng/focustrap */
      "+oTs");
      /* harmony import */


      var primeng_captcha__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(
      /*! primeng/captcha */
      "bcVJ");
      /* harmony import */


      var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(
      /*! primeng/progressspinner */
      "vKg+");
      /* harmony import */


      var primeng_terminal__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(
      /*! primeng/terminal */
      "6s7b");
      /* harmony import */


      var primeng_scrolltop__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(
      /*! primeng/scrolltop */
      "JD6B");
      /* harmony import */


      var primeng_avatar__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(
      /*! primeng/avatar */
      "+F6F");
      /* harmony import */


      var primeng_avatargroup__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(
      /*! primeng/avatargroup */
      "sKsN");
      /* harmony import */


      var primeng_badge__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(
      /*! primeng/badge */
      "fqaE");
      /* harmony import */


      var primeng_chip__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(
      /*! primeng/chip */
      "wxlm");
      /* harmony import */


      var primeng_skeleton__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(
      /*! primeng/skeleton */
      "jeV5");
      /* harmony import */


      var primeng_tag__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(
      /*! primeng/tag */
      "hYoW");
      /* harmony import */


      var primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(
      /*! primeng/confirmpopup */
      "RTT/");
      /* harmony import */


      var primeng_splitter__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(
      /*! primeng/splitter */
      "ZZi9");
      /* harmony import */


      var primeng_divider__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(
      /*! primeng/divider */
      "lUkA");
      /* harmony import */


      var primeng_timeline__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(
      /*! primeng/timeline */
      "mgTN");
      /* harmony import */


      var primeng_knob__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(
      /*! primeng/knob */
      "EbAv");
      /* harmony import */


      var primeng_cascadeselect__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(
      /*! primeng/cascadeselect */
      "A1Di");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var PrimeNGBundleModule = function PrimeNGBundleModule() {
        _classCallCheck(this, PrimeNGBundleModule);
      };

      PrimeNGBundleModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        exports: [primeng_calendar__WEBPACK_IMPORTED_MODULE_1__["CalendarModule"], primeng_chips__WEBPACK_IMPORTED_MODULE_2__["ChipsModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__["DropdownModule"], primeng_keyfilter__WEBPACK_IMPORTED_MODULE_4__["KeyFilterModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__["InputTextModule"], primeng_listbox__WEBPACK_IMPORTED_MODULE_6__["ListboxModule"], primeng_multiselect__WEBPACK_IMPORTED_MODULE_7__["MultiSelectModule"], primeng_radiobutton__WEBPACK_IMPORTED_MODULE_8__["RadioButtonModule"], primeng_slider__WEBPACK_IMPORTED_MODULE_9__["SliderModule"], primeng_selectbutton__WEBPACK_IMPORTED_MODULE_10__["SelectButtonModule"], primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_11__["TriStateCheckboxModule"], primeng_autocomplete__WEBPACK_IMPORTED_MODULE_12__["AutoCompleteModule"], primeng_checkbox__WEBPACK_IMPORTED_MODULE_13__["CheckboxModule"], primeng_colorpicker__WEBPACK_IMPORTED_MODULE_14__["ColorPickerModule"], primeng_editor__WEBPACK_IMPORTED_MODULE_15__["EditorModule"], primeng_inputswitch__WEBPACK_IMPORTED_MODULE_16__["InputSwitchModule"], primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_17__["InputTextareaModule"], primeng_inputmask__WEBPACK_IMPORTED_MODULE_18__["InputMaskModule"], primeng_password__WEBPACK_IMPORTED_MODULE_19__["PasswordModule"], primeng_rating__WEBPACK_IMPORTED_MODULE_20__["RatingModule"], primeng_spinner__WEBPACK_IMPORTED_MODULE_21__["SpinnerModule"], primeng_togglebutton__WEBPACK_IMPORTED_MODULE_22__["ToggleButtonModule"], primeng_button__WEBPACK_IMPORTED_MODULE_23__["ButtonModule"], primeng_splitbutton__WEBPACK_IMPORTED_MODULE_24__["SplitButtonModule"], primeng_carousel__WEBPACK_IMPORTED_MODULE_25__["CarouselModule"], primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_26__["FullCalendarModule"], primeng_orderlist__WEBPACK_IMPORTED_MODULE_27__["OrderListModule"], primeng_paginator__WEBPACK_IMPORTED_MODULE_28__["PaginatorModule"], primeng_table__WEBPACK_IMPORTED_MODULE_29__["TableModule"], primeng_treetable__WEBPACK_IMPORTED_MODULE_30__["TreeTableModule"], primeng_dataview__WEBPACK_IMPORTED_MODULE_31__["DataViewModule"], primeng_organizationchart__WEBPACK_IMPORTED_MODULE_32__["OrganizationChartModule"], primeng_gmap__WEBPACK_IMPORTED_MODULE_33__["GMapModule"], primeng_picklist__WEBPACK_IMPORTED_MODULE_34__["PickListModule"], primeng_tree__WEBPACK_IMPORTED_MODULE_35__["TreeModule"], primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_36__["VirtualScrollerModule"], primeng_accordion__WEBPACK_IMPORTED_MODULE_37__["AccordionModule"], primeng_fieldset__WEBPACK_IMPORTED_MODULE_38__["FieldsetModule"], primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_39__["ScrollPanelModule"], primeng_toolbar__WEBPACK_IMPORTED_MODULE_40__["ToolbarModule"], primeng_card__WEBPACK_IMPORTED_MODULE_41__["CardModule"], primeng_panel__WEBPACK_IMPORTED_MODULE_42__["PanelModule"], primeng_tabview__WEBPACK_IMPORTED_MODULE_43__["TabViewModule"], primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_44__["ConfirmDialogModule"], primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_45__["DynamicDialogModule"], primeng_sidebar__WEBPACK_IMPORTED_MODULE_46__["SidebarModule"], primeng_tooltip__WEBPACK_IMPORTED_MODULE_47__["TooltipModule"], primeng_dialog__WEBPACK_IMPORTED_MODULE_48__["DialogModule"], primeng_lightbox__WEBPACK_IMPORTED_MODULE_49__["LightboxModule"], primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_50__["OverlayPanelModule"], primeng_fileupload__WEBPACK_IMPORTED_MODULE_51__["FileUploadModule"], primeng_menu__WEBPACK_IMPORTED_MODULE_52__["MenuModule"], primeng_contextmenu__WEBPACK_IMPORTED_MODULE_53__["ContextMenuModule"], primeng_panelmenu__WEBPACK_IMPORTED_MODULE_54__["PanelMenuModule"], primeng_steps__WEBPACK_IMPORTED_MODULE_55__["StepsModule"], primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_56__["TieredMenuModule"], primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_57__["BreadcrumbModule"], primeng_megamenu__WEBPACK_IMPORTED_MODULE_58__["MegaMenuModule"], primeng_menubar__WEBPACK_IMPORTED_MODULE_59__["MenubarModule"], primeng_slidemenu__WEBPACK_IMPORTED_MODULE_60__["SlideMenuModule"], primeng_tabmenu__WEBPACK_IMPORTED_MODULE_61__["TabMenuModule"], primeng_chart__WEBPACK_IMPORTED_MODULE_62__["ChartModule"], primeng_messages__WEBPACK_IMPORTED_MODULE_63__["MessagesModule"], primeng_message__WEBPACK_IMPORTED_MODULE_64__["MessageModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_65__["ToastModule"], primeng_galleria__WEBPACK_IMPORTED_MODULE_66__["GalleriaModule"], primeng_dragdrop__WEBPACK_IMPORTED_MODULE_67__["DragDropModule"], primeng_defer__WEBPACK_IMPORTED_MODULE_68__["DeferModule"], primeng_blockui__WEBPACK_IMPORTED_MODULE_69__["BlockUIModule"], primeng_inplace__WEBPACK_IMPORTED_MODULE_70__["InplaceModule"], primeng_progressbar__WEBPACK_IMPORTED_MODULE_71__["ProgressBarModule"], primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_72__["CodeHighlighterModule"], primeng_focustrap__WEBPACK_IMPORTED_MODULE_73__["FocusTrapModule"], primeng_captcha__WEBPACK_IMPORTED_MODULE_74__["CaptchaModule"], primeng_progressspinner__WEBPACK_IMPORTED_MODULE_75__["ProgressSpinnerModule"], primeng_terminal__WEBPACK_IMPORTED_MODULE_76__["TerminalModule"], primeng_scrolltop__WEBPACK_IMPORTED_MODULE_77__["ScrollTopModule"], primeng_avatar__WEBPACK_IMPORTED_MODULE_78__["AvatarModule"], primeng_avatargroup__WEBPACK_IMPORTED_MODULE_79__["AvatarGroupModule"], primeng_badge__WEBPACK_IMPORTED_MODULE_80__["BadgeModule"], primeng_chip__WEBPACK_IMPORTED_MODULE_81__["ChipModule"], primeng_skeleton__WEBPACK_IMPORTED_MODULE_82__["SkeletonModule"], primeng_tag__WEBPACK_IMPORTED_MODULE_83__["TagModule"], primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_84__["ConfirmPopupModule"], primeng_splitter__WEBPACK_IMPORTED_MODULE_85__["SplitterModule"], primeng_divider__WEBPACK_IMPORTED_MODULE_86__["DividerModule"], primeng_timeline__WEBPACK_IMPORTED_MODULE_87__["TimelineModule"], primeng_knob__WEBPACK_IMPORTED_MODULE_88__["KnobModule"], primeng_cascadeselect__WEBPACK_IMPORTED_MODULE_89__["CascadeSelectModule"]]
      })], PrimeNGBundleModule);
      /***/
    },

    /***/
    "Tju2":
    /*!***************************************************************!*\
      !*** ./src/app/shared/image-upload/image-upload.component.ts ***!
      \***************************************************************/

    /*! exports provided: ImageUploadComponent */

    /***/
    function Tju2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImageUploadComponent", function () {
        return ImageUploadComponent;
      });
      /* harmony import */


      var _raw_loader_image_upload_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./image-upload.component.html */
      "N2N6");
      /* harmony import */


      var _image_upload_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./image-upload.component.scss */
      "Umj7");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var ImageUploadComponent = /*#__PURE__*/function () {
        function ImageUploadComponent() {
          _classCallCheck(this, ImageUploadComponent);

          this.isRound = false;
          this.state = {};
          this.handleImageChange = this.handleImageChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
          this.handleClick = this.handleClick.bind(this);
          this.handleRemove = this.handleRemove.bind(this);
        }

        _createClass(ImageUploadComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.state = {
              file: null,
              imagePreviewUrl: this.image !== undefined ? this.image : this.isRound ? 'assets/img/placeholder.jpg' : 'assets/img/image_placeholder.jpg'
            };
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.input.nativeElement.children[2].onchange = this.handleImageChange;
            ;
          }
        }, {
          key: "handleImageChange",
          value: function handleImageChange(e) {
            var _this5 = this;

            e.preventDefault();
            var reader = new FileReader();
            var file = e.target.files[0];

            reader.onloadend = function () {
              _this5.state.file = file;
              _this5.state.imagePreviewUrl = reader.result; // this.state.imagePreviewUrl1 = reader.result;
            };

            reader.readAsDataURL(file);
          }
        }, {
          key: "handleSubmit",
          value: function handleSubmit(e) {
            e.preventDefault(); // this.state.file is the file/image uploaded
            // in this function you can save the image (this.state.file) on form submit
            // you have to call it yourself
          }
        }, {
          key: "handleClick",
          value: function handleClick() {
            this.input.nativeElement.children[2].click();
          }
        }, {
          key: "handleRemove",
          value: function handleRemove() {
            this.state.file = null;
            this.state.imagePreviewUrl = this.image !== undefined ? this.image : this.isRound ? 'assets/img/placeholder.jpg' : 'assets/img/image_placeholder.jpg';
          }
        }]);

        return ImageUploadComponent;
      }();

      ImageUploadComponent.ctorParameters = function () {
        return [];
      };

      ImageUploadComponent.propDecorators = {
        isRound: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        image: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        input: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['input']
        }]
      };
      ImageUploadComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-image-upload',
        template: _raw_loader_image_upload_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_image_upload_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [])], ImageUploadComponent);
      /***/
    },

    /***/
    "Umj7":
    /*!*****************************************************************!*\
      !*** ./src/app/shared/image-upload/image-upload.component.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function Umj7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".fileinput input {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2ltYWdlLXVwbG9hZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRiIsImZpbGUiOiJpbWFnZS11cGxvYWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsZWlucHV0IGlucHV0e1xuICBkaXNwbGF5OiBub25lO1xufVxuIl19 */";
      /***/
    },

    /***/
    "V+/Z":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footers-areas/footers-areas.component.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function VZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"section section-footers\" data-background-color=\"gray\">\n    <div class=\"container\">\n        <div class=\"title\">\n            <h3>Footer Areas</h3>\n        </div>\n    </div>\n    <div id=\"footer-areas\">\n        <!--     *********    SIMPLE FOOTER WITH SOCIAL AND BRAND     *********      -->\n        <footer class=\"footer footer-white\">\n            <div class=\"container\">\n                <a class=\"footer-brand\" href=\"https://www.josh-levy.com\">Now Ui Kit PRO</a>\n                <ul class=\"pull-center\">\n                    <li>\n                        <a href=\"#\" class=\"nav-link\">\n                            Josh Levy\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"#\" class=\"nav-link\">\n                            About Us\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"#\" class=\"nav-link\">\n                            Blog\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"#\" class=\"nav-link\">\n                            Licenses\n                        </a>\n                    </li>\n                </ul>\n                <ul class=\"social-buttons pull-right\">\n                    <li>\n                        <a href=\"https://twitter.com/CreativeTim\" target=\"_blank\" class=\"btn btn-icon btn-neutral btn-twitter\">\n                            <i class=\"fa fa-twitter\"></i>\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"https://www.facebook.com/CreativeTim\" target=\"_blank\" class=\"btn btn-icon btn-neutral btn-dribbble\">\n                            <i class=\"fa fa-dribbble\"></i>\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"https://www.instagram.com/CreativeTimOfficial\" target=\"_blank\" class=\"btn btn-icon btn-neutral btn-google\">\n                            <i class=\"fa fa-google-plus\"></i>\n                        </a>\n                    </li>\n                </ul>\n            </div>\n        </footer>\n        <!--     *********   END SIMPLE FOOTER WITH SOCIAL AND BRAND     *********      -->\n        <br />\n        <br />\n        <!--     *********    SIMPLE FOOTER     *********      -->\n        <footer class=\"footer\">\n            <div class=\"container\">\n                <nav>\n                    <ul>\n                        <li>\n                            <a href=\"https://www.josh-levy.com\" class=\"nav-link\">\n                                Josh Levy\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"https://www.josh-levy.com/about-us\" class=\"nav-link\">\n                                About Us\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"http://blog.josh-levy.com\" class=\"nav-link\">\n                                Blog\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"https://www.josh-levy.com/license\" target=\"_blank\" class=\"nav-link\">\n                                License\n                            </a>\n                        </li>\n                    </ul>\n                </nav>\n                <div class=\"copyright\">\n                    &copy;\n                  {{data | date: 'yyyy'}}, Designed by\n                    <a href=\"https://www.invisionapp.com\" target=\"_blank\" class=\"copyright-link\">Invision</a>. Coded by\n                    <a href=\"https://www.josh-levy.com\" target=\"_blank\" class=\"copyright-link\">Josh Levy</a>.\n                </div>\n            </div>\n        </footer>\n        <!--     *********   END SIMPLE FOOTER     *********      -->\n        <br />\n        <br />\n        <!--     *********    BLACK SIMPLE FOOTER WITH SOCIAL AND BRAND     *********      -->\n        <footer class=\"footer\" data-background-color=\"black\">\n            <div class=\"container\">\n                <a class=\"footer-brand\" href=\"#\">Now Ui Kit PRO</a>\n                <ul class=\"pull-center\">\n                    <li>\n                        <a href=\"#\">\n                            Blog\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"#\">\n                            Presentation\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"#\">\n                            Discover\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"#\">\n                            Payment\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"#\">\n                            Contact Us\n                        </a>\n                    </li>\n                </ul>\n                <ul class=\"social-buttons pull-right\">\n                    <li>\n                        <a href=\"https://twitter.com/CreativeTim\" target=\"_blank\" class=\"btn btn-icon btn-link btn-neutral\">\n                            <i class=\"fa fa-twitter\"></i>\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"https://www.facebook.com/CreativeTim\" target=\"_blank\" class=\"btn btn-icon btn-neutral btn-link\">\n                            <i class=\"fa fa-facebook-square\"></i>\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"https://www.instagram.com/CreativeTimOfficial\" target=\"_blank\" class=\"btn btn-icon btn-neutral btn-link\">\n                            <i class=\"fa fa-instagram\"></i>\n                        </a>\n                    </li>\n                </ul>\n            </div>\n        </footer>\n        <!--     *********   END BLACK SIMPLE FOOTER WITH SOCIAL AND BRAND     *********      -->\n        <br/>\n        <br/>\n        <!--     *********    BIG FOOTER     *********      -->\n        <footer class=\"footer footer-big footer-white\">\n            <div class=\"container\">\n                <div class=\"content\">\n                    <div class=\"row\">\n                        <div class=\"col-md-4\">\n                            <h5>About Us</h5>\n                            <p>Josh Levy is a startup that creates design tools that make the web development process faster and easier. </p>\n                            <p>We love the web and care deeply for how users interact with a digital product. We power businesses and individuals to create better looking web projects around the world. </p>\n                        </div>\n                        <div class=\"col-md-4\">\n                            <h5>Social Feed</h5>\n                            <div class=\"social-feed\">\n                                <div class=\"feed-line\">\n                                    <i class=\"fa fa-twitter\"></i>\n                                    <p>How to handle ethical disagreements with your clients.</p>\n                                </div>\n                                <div class=\"feed-line\">\n                                    <i class=\"fa fa-twitter\"></i>\n                                    <p>The tangible benefits of designing at 1x pixel density.</p>\n                                </div>\n                                <div class=\"feed-line\">\n                                    <i class=\"fa fa-facebook-square\"></i>\n                                    <p>A collection of 25 stunning sites that you can use for inspiration.</p>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-4\">\n                            <h5>Instagram Feed</h5>\n                            <div class=\"gallery-feed\">\n                                <img src=\"assets/img/olivia.jpg\" class=\"img img-raised rounded\" alt=\"\" />\n                                <img src=\"assets/img/james.jpg\" class=\"img img-raised rounded\" alt=\"\" />\n                                <img src=\"assets/img/michael.jpg\" class=\"img img-raised rounded\" alt=\"\" />\n                                <img src=\"assets/img/emily.jpg\" class=\"img img-raised rounded\" alt=\"\" />\n                                <img src=\"assets/img/marie.jpg\" class=\"img img-raised rounded\" alt=\"\" />\n                                <img src=\"assets/img/usher.jpg\" class=\"img img-raised rounded\" alt=\"\" />\n                                <img src=\"assets/img/mike.jpg\" class=\"img img-raised rounded\" alt=\"\" />\n                                <img src=\"assets/img/julie.jpg\" class=\"img img-raised rounded\" alt=\"\" />\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <hr />\n                <ul class=\"pull-left\">\n                    <li>\n                        <a href=\"#\">\n                            Blog\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"#\">\n                            Presentation\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"#\">\n                            Discover\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"#\">\n                            Payment\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"#\">\n                            Contact Us\n                        </a>\n                    </li>\n                </ul>\n                <div class=\"copyright pull-right\">\n                    Copyright &copy;\n                    {{data | date: 'yyyy'}} Josh Levy All Rights Reserved.\n                </div>\n            </div>\n        </footer>\n        <!--     *********   END BIG FOOTER     *********      -->\n        <br />\n        <br />\n        <!--     *********    BIG BlACK FOOTER     *********      -->\n        <footer class=\"footer footer-big\" data-background-color=\"black\">\n            <div class=\"container\">\n                <div class=\"content\">\n                    <div class=\"row\">\n                        <div class=\"col-md-2\">\n                            <h5>About Us</h5>\n                            <ul class=\"links-vertical\">\n                                <li>\n                                    <a href=\"#\" class=\"text-muted\">\n                                        Blog\n                                    </a>\n                                </li>\n                                <li>\n                                    <a href=\"#\" class=\"text-muted\">\n                                        About Us\n                                    </a>\n                                </li>\n                                <li>\n                                    <a href=\"#\" class=\"text-muted\">\n                                        Presentation\n                                    </a>\n                                </li>\n                                <li>\n                                    <a href=\"#\" class=\"text-muted\">\n                                        Contact Us\n                                    </a>\n                                </li>\n                            </ul>\n                        </div>\n                        <div class=\"col-md-2\">\n                            <h5>Market</h5>\n                            <ul class=\"links-vertical\">\n                                <li>\n                                    <a href=\"#\" class=\"text-muted\">\n                                        Sales FAQ\n                                    </a>\n                                </li>\n                                <li>\n                                    <a href=\"#\" class=\"text-muted\">\n                                        How to Register\n                                    </a>\n                                </li>\n                                <li>\n                                    <a href=\"#\" class=\"text-muted\">\n                                        Sell Goods\n                                    </a>\n                                </li>\n                                <li>\n                                    <a href=\"#\" class=\"text-muted\">\n                                        Receive Payment\n                                    </a>\n                                </li>\n                                <li>\n                                    <a href=\"#\" class=\"text-muted\">\n                                        Transactions Issues\n                                    </a>\n                                </li>\n                                <li>\n                                    <a href=\"#\" class=\"text-muted\">\n                                        Affiliates Program\n                                    </a>\n                                </li>\n                            </ul>\n                        </div>\n                        <div class=\"col-md-4\">\n                            <h5>Social Feed</h5>\n                            <div class=\"social-feed\">\n                                <div class=\"feed-line\">\n                                    <i class=\"fa fa-twitter\"></i>\n                                    <p>How to handle ethical disagreements with your clients.</p>\n                                </div>\n                                <div class=\"feed-line\">\n                                    <i class=\"fa fa-twitter\"></i>\n                                    <p>The tangible benefits of designing at 1x pixel density.</p>\n                                </div>\n                                <div class=\"feed-line\">\n                                    <i class=\"fa fa-facebook-square\"></i>\n                                    <p>A collection of 25 stunning sites that you can use for inspiration.</p>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-4\">\n                            <h5>Follow Us</h5>\n                            <ul class=\"social-buttons\">\n                                <li>\n                                    <a href=\"#\" class=\"btn btn-icon btn-neutral btn-twitter btn-round\">\n                                        <i class=\"fa fa-twitter\"></i>\n                                    </a>\n                                </li>\n                                <li>\n                                    <a href=\"#\" class=\"btn btn-icon btn-neutral btn-facebook btn-round\">\n                                        <i class=\"fa fa-facebook-square\"></i>\n                                    </a>\n                                </li>\n                                <li>\n                                    <a href=\"#\" class=\"btn btn-icon btn-neutral btn-dribbble btn-round\">\n                                        <i class=\"fa fa-dribbble\"></i>\n                                    </a>\n                                </li>\n                                <li>\n                                    <a href=\"#\" class=\"btn btn-icon btn-neutral btn-google btn-round\">\n                                        <i class=\"fa fa-google-plus\"></i>\n                                    </a>\n                                </li>\n                                <li>\n                                    <a href=\"#\" class=\"btn btn-icon btn-neutral btn-instagram btn-round\">\n                                        <i class=\"fa fa-instagram\"></i>\n                                    </a>\n                                </li>\n                            </ul>\n                            <h5>\n                                <small>Numbers Don't Lie</small>\n                            </h5>\n                            <h5>14.521\n                                <small class=\"text-muted\">Freelancers</small>\n                            </h5>\n                            <h5>1.423.183\n                                <small class=\"text-muted\">Transactions</small>\n                            </h5>\n                        </div>\n                    </div>\n                </div>\n                <hr />\n                <div class=\"copyright\">\n                    Copyright &copy;\n                    {{data | date: 'yyyy'}} Josh Levy All Rights Reserved.\n                </div>\n            </div>\n        </footer>\n        <!--     *********   END BIG WHITE FOOTER     *********      -->\n        <br />\n        <br />\n        <!--     *********    BIG WHITE FOOTER V2     *********      -->\n        <footer class=\"footer footer-white footer-big\">\n            <div class=\"container\">\n                <div class=\"content\">\n                    <div class=\"row\">\n                        <div class=\"col-md-3\">\n                            <a href=\"#\">\n                                <h5>Now Ui Kit PRO</h5>\n                            </a>\n                            <p>Probably the best UI Kit in the world! We know you've been waiting for it, so don't be shy!</p>\n                        </div>\n                        <div class=\"col-md-2\">\n                            <h5>About</h5>\n                            <ul class=\"links-vertical\">\n                                <li>\n                                    <a href=\"#\">\n                                        Blog\n                                    </a>\n                                </li>\n                                <li>\n                                    <a href=\"#\">\n                                        About Us\n                                    </a>\n                                </li>\n                                <li>\n                                    <a href=\"#\">\n                                        Presentation\n                                    </a>\n                                </li>\n                                <li>\n                                    <a href=\"#\">\n                                        Contact Us\n                                    </a>\n                                </li>\n                            </ul>\n                        </div>\n                        <div class=\"col-md-2\">\n                            <h5>Market</h5>\n                            <ul class=\"links-vertical\">\n                                <li>\n                                    <a href=\"#\">\n                                        Sales FAQ\n                                    </a>\n                                </li>\n                                <li>\n                                    <a href=\"#\">\n                                        How to Register\n                                    </a>\n                                </li>\n                                <li>\n                                    <a href=\"#\">\n                                        Sell Goods\n                                    </a>\n                                </li>\n                                <li>\n                                    <a href=\"#\">\n                                        Receive Payment\n                                    </a>\n                                </li>\n                                <li>\n                                    <a href=\"#\">\n                                        Transactions Issues\n                                    </a>\n                                </li>\n                            </ul>\n                        </div>\n                        <div class=\"col-md-2\">\n                            <h5>Legal</h5>\n                            <ul class=\"links-vertical\">\n                                <li>\n                                    <a href=\"#\">\n                                        Transactions FAQ\n                                    </a>\n                                </li>\n                                <li>\n                                    <a href=\"#\">\n                                        Terms & Conditions\n                                    </a>\n                                </li>\n                                <li>\n                                    <a href=\"#\">\n                                        Licenses\n                                    </a>\n                                </li>\n                            </ul>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <h5>Subscribe to Newsletter</h5>\n                            <p>\n                                Join our newsletter and get news in your inbox every week! We hate spam too, so no worries about this.\n                            </p>\n                            <form class=\"form form-newsletter\" method=\"\" action=\"\">\n                                <div class=\"form-group\">\n                                    <input type=\"email\" class=\"form-control\" placeholder=\"Your Email...\">\n                                </div>\n                                <button type=\"button\" class=\"btn btn-primary btn-icon btn-round\" name=\"button\">\n                                    <i class=\"now-ui-icons ui-1_email-85\"></i>\n                                </button>\n                            </form>\n                        </div>\n                    </div>\n                </div>\n                <hr />\n                <ul class=\"social-buttons\">\n                    <li>\n                        <a href=\"#\" class=\"btn btn-icon btn-neutral btn-twitter btn-lg\">\n                            <i class=\"fa fa-twitter\"></i>\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"#\" class=\"btn btn-icon btn-neutral btn-facebook btn-lg\">\n                            <i class=\"fa fa-facebook-square\"></i>\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"#\" class=\"btn btn-icon btn-neutral btn-dribbble btn-lg\">\n                            <i class=\"fa fa-dribbble\"></i>\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"#\" class=\"btn btn-icon btn-neutral btn-google btn-lg\">\n                            <i class=\"fa fa-google-plus\"></i>\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"#\" class=\"btn btn-icon btn-neutral btn-youtube btn-lg\">\n                            <i class=\"fa fa-youtube-play\"></i>\n                        </a>\n                    </li>\n                </ul>\n                <div class=\"copyright pull-center\">\n                    Copyright &copy;\n                    {{data | date: 'yyyy'}} Josh Levy All Rights Reserved.\n                </div>\n            </div>\n        </footer>\n        <!--     *********   END BIG WHITE FOOTER v2     *********      -->\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n";
      /***/
    },

    /***/
    "W0LN":
    /*!*********************************************************!*\
      !*** ./src/app/sections/contacts/contacts.component.ts ***!
      \*********************************************************/

    /*! exports provided: ContactsComponent */

    /***/
    function W0LN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactsComponent", function () {
        return ContactsComponent;
      });
      /* harmony import */


      var _raw_loader_contacts_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./contacts.component.html */
      "3QTt");
      /* harmony import */


      var _contacts_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./contacts.component.scss */
      "AMS6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      }; // declare const google: any;


      var ContactsComponent = /*#__PURE__*/function () {
        function ContactsComponent() {
          _classCallCheck(this, ContactsComponent);

          this.zoom = 14;
          this.lat = 44.445248;
          this.lng = 26.099672;
          this.styles = [{
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
              "color": "#e9e9e9"
            }, {
              "lightness": 17
            }]
          }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
              "color": "#f5f5f5"
            }, {
              "lightness": 20
            }]
          }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
              "color": "#ffffff"
            }, {
              "lightness": 17
            }]
          }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
              "color": "#ffffff"
            }, {
              "lightness": 29
            }, {
              "weight": 0.2
            }]
          }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
              "color": "#ffffff"
            }, {
              "lightness": 18
            }]
          }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
              "color": "#ffffff"
            }, {
              "lightness": 16
            }]
          }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
              "color": "#f5f5f5"
            }, {
              "lightness": 21
            }]
          }, {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [{
              "color": "#dedede"
            }, {
              "lightness": 21
            }]
          }, {
            "elementType": "labels.text.stroke",
            "stylers": [{
              "visibility": "on"
            }, {
              "color": "#ffffff"
            }, {
              "lightness": 16
            }]
          }, {
            "elementType": "labels.text.fill",
            "stylers": [{
              "saturation": 36
            }, {
              "color": "#333333"
            }, {
              "lightness": 40
            }]
          }, {
            "elementType": "labels.icon",
            "stylers": [{
              "visibility": "off"
            }]
          }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
              "color": "#f2f2f2"
            }, {
              "lightness": 19
            }]
          }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
              "color": "#fefefe"
            }, {
              "lightness": 20
            }]
          }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
              "color": "#fefefe"
            }, {
              "lightness": 17
            }, {
              "weight": 1.2
            }]
          }];
        } // clickedMarker(label: string, index: number) {
        //     console.log(`clicked the marker: ${label || index}`)
        // }
        //
        // mapClicked($event: MouseEvent) {
        //     this.markers.push({
        //         lat: $event.coords.lat,
        //         lng: $event.coords.lng
        //     });
        // }
        //
        // markerDragEnd(m: marker, $event: MouseEvent) {
        //     console.log('dragEnd', m, $event);
        // }


        _createClass(ContactsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {//   var myLatlng = new google.maps.LatLng(44.445248, 26.099672);
            //   var mapOptions = {
            //     // zoom: 14,
            //     center: myLatlng,
            //     styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}],
            //     scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
            //   }
            //
            //   var map = new google.maps.Map(document.getElementById("contactUsMap2"), mapOptions);
            //
            //   var marker = new google.maps.Marker({
            //       position: myLatlng,
            //       title:"Josh Levy Office"
            //   });
            //
            //   // To add the marker to the map, call setMap();
            //   marker.setMap(map);
          }
        }]);

        return ContactsComponent;
      }();

      ContactsComponent.ctorParameters = function () {
        return [];
      };

      ContactsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-contacts',
        template: _raw_loader_contacts_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_contacts_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [])], ContactsComponent);
      /***/
    },

    /***/
    "WTLY":
    /*!*******************************************************************!*\
      !*** ./src/app/components/cards-areas/cards-areas.component.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function WTLY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJkcy1hcmVhcy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "XsTM":
    /*!*********************************************!*\
      !*** ./src/app/sections/sections.module.ts ***!
      \*********************************************/

    /*! exports provided: SectionsModule */

    /***/
    function XsTM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SectionsModule", function () {
        return SectionsModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _sections_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./sections.component */
      "T9bN");
      /* harmony import */


      var _headers_headers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./headers/headers.component */
      "nRjQ");
      /* harmony import */


      var _features_features_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./features/features.component */
      "cGMZ");
      /* harmony import */


      var _blogs_blogs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./blogs/blogs.component */
      "c52c");
      /* harmony import */


      var _teams_teams_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./teams/teams.component */
      "ZPfb");
      /* harmony import */


      var _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./projects/projects.component */
      "d4KC");
      /* harmony import */


      var _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./pricing/pricing.component */
      "kP6b");
      /* harmony import */


      var _testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./testimonials/testimonials.component */
      "28Sn");
      /* harmony import */


      var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./contacts/contacts.component */
      "W0LN");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _agm_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @agm/core */
      "pxUr");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var SectionsModule = function SectionsModule() {
        _classCallCheck(this, SectionsModule);
      };

      SectionsModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"], _agm_core__WEBPACK_IMPORTED_MODULE_13__["AgmCoreModule"].forRoot({
          apiKey: 'YOUR_KEY_HERE'
        }), _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"]],
        declarations: [_sections_component__WEBPACK_IMPORTED_MODULE_2__["SectionsComponent"], _headers_headers_component__WEBPACK_IMPORTED_MODULE_3__["HeadersComponent"], _features_features_component__WEBPACK_IMPORTED_MODULE_4__["FeaturesComponent"], _blogs_blogs_component__WEBPACK_IMPORTED_MODULE_5__["BlogsComponent"], _teams_teams_component__WEBPACK_IMPORTED_MODULE_6__["TeamsComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"], _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_8__["PricingComponent"], _testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_9__["TestimonialsComponent"], _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_10__["ContactsComponent"]],
        exports: [_sections_component__WEBPACK_IMPORTED_MODULE_2__["SectionsComponent"]]
      })], SectionsModule);
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app.routing */
      "beVS");
      /* harmony import */


      var _sections_sections_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./sections/sections.module */
      "XsTM");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/components.module */
      "j1ZV");
      /* harmony import */


      var _examples_examples_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./examples/examples.module */
      "ieWF");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./shared/navbar/navbar.component */
      "EtQq");
      /* harmony import */


      var _presentation_presentation_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./presentation/presentation.module */
      "SsGY");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"]],
        imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _presentation_presentation_module__WEBPACK_IMPORTED_MODULE_11__["PresentationModule"], _sections_sections_module__WEBPACK_IMPORTED_MODULE_6__["SectionsModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _examples_examples_module__WEBPACK_IMPORTED_MODULE_8__["ExamplesModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "ZPfb":
    /*!***************************************************!*\
      !*** ./src/app/sections/teams/teams.component.ts ***!
      \***************************************************/

    /*! exports provided: TeamsComponent */

    /***/
    function ZPfb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TeamsComponent", function () {
        return TeamsComponent;
      });
      /* harmony import */


      var _raw_loader_teams_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./teams.component.html */
      "AkPU");
      /* harmony import */


      var _teams_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./teams.component.scss */
      "bLJI");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var TeamsComponent = /*#__PURE__*/function () {
        function TeamsComponent() {
          _classCallCheck(this, TeamsComponent);
        }

        _createClass(TeamsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TeamsComponent;
      }();

      TeamsComponent.ctorParameters = function () {
        return [];
      };

      TeamsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-teams',
        template: _raw_loader_teams_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_teams_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [])], TeamsComponent);
      /***/
    },

    /***/
    "aHyJ":
    /*!***************************************************************!*\
      !*** ./src/app/examples/productpage/productpage.component.ts ***!
      \***************************************************************/

    /*! exports provided: ProductpageComponent */

    /***/
    function aHyJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductpageComponent", function () {
        return ProductpageComponent;
      });
      /* harmony import */


      var _raw_loader_productpage_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./productpage.component.html */
      "x1eH");
      /* harmony import */


      var _productpage_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./productpage.component.scss */
      "pRq/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rellax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rellax */
      "HbP6");
      /* harmony import */


      var rellax__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rellax__WEBPACK_IMPORTED_MODULE_3__);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var ProductpageComponent = /*#__PURE__*/function () {
        function ProductpageComponent() {
          _classCallCheck(this, ProductpageComponent);

          this.data = new Date();
          this.dropdownList = [];
          this.selectedItems = [];
          this.dropdownSettings = {};
          this.dropdownList1 = [];
          this.selectedItems1 = [];
          this.dropdownSettings1 = {};
        }

        _createClass(ProductpageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var rellaxHeader = new rellax__WEBPACK_IMPORTED_MODULE_3__('.rellax-header');
            var body = document.getElementsByTagName('body')[0];
            body.classList.add('product-page');
            var navbar = document.getElementsByTagName('nav')[0];
            navbar.classList.add('navbar-transparent');
            this.dropdownList = [{
              "id": 1,
              "itemName": "Black"
            }, {
              "id": 2,
              "itemName": "Gray"
            }, {
              "id": 3,
              "itemName": "White"
            }];
            this.selectedItems = [{
              "id": 1,
              "itemName": "Black"
            }];
            this.dropdownSettings = {
              singleSelection: true,
              text: "Select language",
              selectAllText: 'Select All',
              unSelectAllText: 'UnSelect All',
              enableSearchFilter: false,
              classes: "",
              lazyLoading: true,
              maxHeight: 100
            };
            this.dropdownList1 = [{
              "id": 1,
              "itemName": "Small"
            }, {
              "id": 2,
              "itemName": "Medium"
            }, {
              "id": 3,
              "itemName": "Large"
            }];
            this.selectedItems1 = [{
              "id": 1,
              "itemName": "Small"
            }];
            this.dropdownSettings1 = {
              singleSelection: true,
              text: "Select currency",
              selectAllText: 'Select All',
              unSelectAllText: 'UnSelect All',
              enableSearchFilter: false,
              classes: "",
              lazyLoading: true,
              maxHeight: 100
            };
          }
        }, {
          key: "onItemSelect",
          value: function onItemSelect(item) {
            console.log(item);
            console.log(this.selectedItems);
          }
        }, {
          key: "OnItemDeSelect",
          value: function OnItemDeSelect(item) {
            console.log(item);
            console.log(this.selectedItems);
          }
        }, {
          key: "onSelectAll",
          value: function onSelectAll(items) {
            console.log(items);
          }
        }, {
          key: "onDeSelectAll",
          value: function onDeSelectAll(items) {
            console.log(items);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var body = document.getElementsByTagName('body')[0];
            body.classList.remove('product-page');
            var navbar = document.getElementsByTagName('nav')[0];
            navbar.classList.remove('navbar-transparent');
          }
        }]);

        return ProductpageComponent;
      }();

      ProductpageComponent.ctorParameters = function () {
        return [];
      };

      ProductpageComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-productpage',
        template: _raw_loader_productpage_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_productpage_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [])], ProductpageComponent);
      /***/
    },

    /***/
    "b6Wu":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/examples/pricing/pricing.component.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function b6Wu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"wrapper\">\n    <div class=\"page-header page-header-small\">\n        <div class=\"page-header-image rellax-header\" data-rellax-speed=\"-8\" style=\"background-image: url('assets/img/bg37.jpg') ;\">\n        </div>\n        <div class=\"content-center\">\n            <div class=\"row\">\n                <div class=\"col-md-8 ml-auto mr-auto\">\n                    <h1 class=\"title\">Let's get started</h1>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"main\">\n        <div class=\"pricing-4\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-6 ml-auto mr-auto text-center\">\n                        <h4 class=\"description\">To get started, you will need to choose a plan for your needs. You have Free Unlimited Updates and Premium Support on each package.</h4>\n                        <div class=\"section-space\"></div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-4\">\n                        <div class=\"card card-pricing card-plain\">\n                            <div class=\"card-body\">\n                                <h6 class=\"category\">Starter</h6>\n                                <div class=\"icon icon-info\">\n                                    <i class=\"now-ui-icons business_briefcase-24\"></i>\n                                </div>\n                                <h3 class=\"card-title\">\n                                    <small>$</small>10</h3>\n                                <ul>\n                                    <li>1000 MB</li>\n                                    <li>3 email</li>\n                                    <li>5 Databases</li>\n                                </ul>\n                                <a href=\"#\" class=\"btn btn-info btn-round\">\n                                    Get it Now\n                                </a>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <div class=\"card card-pricing\" data-background-color=\"black\">\n                            <div class=\"card-body\">\n                                <h6 class=\"category\">Professional</h6>\n                                <div class=\"icon icon-success\">\n                                    <i class=\"now-ui-icons tech_headphones\"></i>\n                                </div>\n                                <h3 class=\"card-title\">\n                                    <small>$</small>40</h3>\n                                <ul>\n                                    <li>Unlimited MB</li>\n                                    <li>Unlimited emails</li>\n                                    <li>Full Support</li>\n                                </ul>\n                                <a href=\"#\" class=\"btn btn-neutral disabled btn-round\">\n                                    Current Plan\n                                </a>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <div class=\"card card-pricing card-plain\">\n                            <div class=\"card-body\">\n                                <h6 class=\"category\">Basic</h6>\n                                <div class=\"icon icon-danger\">\n                                    <i class=\"now-ui-icons design_palette\"></i>\n                                </div>\n                                <h3 class=\"card-title\">\n                                    <small>$</small>20</h3>\n                                <ul>\n                                    <li>1000 MB</li>\n                                    <li>3 email</li>\n                                    <li>No Support</li>\n                                </ul>\n                                <a href=\"#\" class=\"btn btn-danger btn-round\">\n                                    Upgrade Plan\n                                </a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"section section-frequently\">\n            <div class=\"container\">\n                <div class=\"text-center\">\n                    <h3 class=\"title\">Frequently Asked Questions</h3>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-4 ml-auto mr-auto\">\n                        <div class=\"info info-horizontal\">\n                            <div class=\"icon icon-info\">\n                                <i class=\"now-ui-icons shopping_credit-card\"></i>\n                            </div>\n                            <div class=\"description\">\n                                <h4 class=\"info-title\">Can I cancel my subscription?</h4>\n                                <p>Yes, you can cancel and perform other actions on your subscriptions via the My Account page. </p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <div class=\"info info-horizontal\">\n                            <div class=\"icon icon-success\">\n                                <i class=\"now-ui-icons shopping_box\"></i>\n                            </div>\n                            <div class=\"description\">\n                                <h4 class=\"info-title\">Is there any discount for an annual subscription?</h4>\n                                <p>Yes, we offer a 40% discount if you choose annual subscription for any plan.</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-4 ml-auto mr-auto\">\n                        <div class=\"info info-horizontal\">\n                            <div class=\"icon icon-success\">\n                                <i class=\"now-ui-icons business_money-coins\"></i>\n                            </div>\n                            <div class=\"description\">\n                                <h4 class=\"info-title\">Which payment methods do you take?</h4>\n                                <p>WooCommerce comes bundled with PayPal (for accepting credit card and PayPal account). </p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <div class=\"info info-horizontal\">\n                            <div class=\"icon icon-primary\">\n                                <i class=\"now-ui-icons business_bulb-63\"></i>\n                            </div>\n                            <div class=\"description\">\n                                <h4 class=\"info-title\">Any other questions we can answer?</h4>\n                                <p>We are happy to help you. Contact us.</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"contactus-1 section-image\" style=\"background-image: url('assets/img/bg27.jpg')\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-5 ml-auto mr-auto\">\n                        <h2 class=\"title\">Get in Touch</h2>\n                        <h4 class=\"description\">You need more information? Check what other persons are saying about our product. They are very happy with their purchase.</h4>\n                        <div class=\"info info-horizontal\">\n                            <div class=\"icon icon-primary\">\n                                <i class=\"now-ui-icons location_pin\"></i>\n                            </div>\n                            <div class=\"description\">\n                                <h4 class=\"info-title\">Find us at the office</h4>\n                                <p class=\"description\"> Bld Mihail Kogalniceanu, nr. 8,\n                                    <br> 7652 Bucharest,\n                                    <br> Romania\n                                </p>\n                            </div>\n                        </div>\n                        <div class=\"info info-horizontal\">\n                            <div class=\"icon icon-primary\">\n                                <i class=\"now-ui-icons tech_mobile\"></i>\n                            </div>\n                            <div class=\"description\">\n                                <h4 class=\"info-title\">Give us a ring</h4>\n                                <p class=\"description\"> Michael Jordan\n                                    <br> +40 762 321 762\n                                    <br> Mon - Fri, 8:00-22:00\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-5 ml-auto mr-auto\">\n                        <div class=\"card card-contact card-raised\">\n                            <form role=\"form\" id=\"contact-form\" method=\"post\">\n                                <div class=\"card-header text-center\">\n                                    <h4 class=\"card-title\">Contact Us</h4>\n                                </div>\n                                <div class=\"card-body\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-6 pr-2\">\n                                            <label>First name</label>\n                                            <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                                              <div class=\"input-group-prepend\">\n                                                  <span class=\"input-group-text\">  <i class=\"now-ui-icons users_circle-08\"></i></span>\n                                              </div>\n                                                <input type=\"text\" class=\"form-control\" placeholder=\"First Name...\" (focus)=\"focus=true\" (blur)=\"focus=false\">\n                                            </div>\n                                        </div>\n                                        <div class=\"col-md-6 pl-2\">\n                                            <div class=\"form-group\">\n                                                <label>Last name</label>\n                                                <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus1===true}\">\n                                                  <div class=\"input-group-prepend\">\n                                                      <span class=\"input-group-text\"> <i class=\"now-ui-icons text_caps-small\"></i></span>\n                                                  </div>\n                                                    <input type=\"text\" placeholder=\"Last Name...\" class=\"form-control\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <label>Email address</label>\n                                        <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus2===true}\">\n                                          <div class=\"input-group-prepend\">\n                                              <span class=\"input-group-text\"> <i class=\"now-ui-icons ui-1_email-85\"></i></span>\n                                          </div>\n                                            <input type=\"email\" placeholder=\"Email Here...\" class=\"form-control\" (focus)=\"focus2=true\" (blur)=\"focus2=false\">\n                                        </div>\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <label>Your message</label>\n                                        <textarea name=\"message\" class=\"form-control\" id=\"message\" rows=\"6\"></textarea>\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"col-md-6\">\n                                          <div class=\"form-check\">\n                                              <label class=\"form-check-label\">\n                                                  <input class=\"form-check-input\" type=\"checkbox\">\n                                                  <span class=\"form-check-sign\"></span>\n                                                  I'm not a robot\n                                              </label>\n                                          </div>\n                                        </div>\n                                        <div class=\"col-md-6\">\n                                            <button type=\"submit\" class=\"btn btn-primary btn-round pull-right\">Send Message</button>\n                                        </div>\n                                    </div>\n                                </div>\n                            </form>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <footer class=\"footer \">\n        <div class=\"container\">\n            <nav>\n                <ul>\n                    <li>\n                        <a href=\"https://www.josh-levy.com\">\n                            Josh Levy\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"https://www.josh-levy.com/about-us\">\n                            About Us\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"http://blog.josh-levy.com\">\n                            Blog\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"https://www.josh-levy.com/license\">\n                            License\n                        </a>\n                    </li>\n                </ul>\n            </nav>\n            <div class=\"copyright\">\n                &copy;\n              {{data | date: 'yyyy'}}, Designed by\n                <a href=\"https://www.invisionapp.com\" target=\"_blank\">Invision</a>. Coded by\n                <a href=\"https://www.josh-levy.com\" target=\"_blank\">Josh Levy</a>.\n            </div>\n        </div>\n    </footer>\n</div>\n";
      /***/
    },

    /***/
    "bLJI":
    /*!*****************************************************!*\
      !*** ./src/app/sections/teams/teams.component.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function bLJI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZWFtcy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "beVS":
    /*!********************************!*\
      !*** ./src/app/app.routing.ts ***!
      \********************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function beVS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _presentation_presentation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./presentation/presentation.component */
      "gVBG");
      /* harmony import */


      var _components_components_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/components.component */
      "93si");
      /* harmony import */


      var _sections_sections_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./sections/sections.component */
      "T9bN");
      /* harmony import */


      var _examples_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./examples/aboutus/aboutus.component */
      "qmXc");
      /* harmony import */


      var _examples_blogpost_blogpost_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./examples/blogpost/blogpost.component */
      "CxlL");
      /* harmony import */


      var _examples_blogposts_blogposts_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./examples/blogposts/blogposts.component */
      "hA2S");
      /* harmony import */


      var _examples_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./examples/contactus/contactus.component */
      "eyl4");
      /* harmony import */


      var _examples_ecommerce_ecommerce_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./examples/ecommerce/ecommerce.component */
      "vGOd");
      /* harmony import */


      var _examples_landing_landing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./examples/landing/landing.component */
      "AXTl");
      /* harmony import */


      var _examples_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./examples/login/login.component */
      "lznb");
      /* harmony import */


      var _examples_productpage_productpage_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./examples/productpage/productpage.component */
      "aHyJ");
      /* harmony import */


      var _examples_profile_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./examples/profile/profile.component */
      "xQKc");
      /* harmony import */


      var _examples_register_register_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./examples/register/register.component */
      "go9B");
      /* harmony import */


      var _components_nucleoicons_nucleoicons_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./components/nucleoicons/nucleoicons.component */
      "+GGL");
      /* harmony import */


      var _examples_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./examples/pricing/pricing.component */
      "73mm");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var routes = [{
        path: 'presentation',
        redirectTo: '',
        pathMatch: 'full'
      }, {
        path: '',
        component: _presentation_presentation_component__WEBPACK_IMPORTED_MODULE_4__["PresentationComponent"]
      }, {
        path: 'components',
        component: _components_components_component__WEBPACK_IMPORTED_MODULE_5__["ComponentsComponent"]
      }, {
        path: 'sections',
        component: _sections_sections_component__WEBPACK_IMPORTED_MODULE_6__["SectionsComponent"]
      }, {
        path: 'nucleoicons',
        component: _components_nucleoicons_nucleoicons_component__WEBPACK_IMPORTED_MODULE_17__["NucleoiconsComponent"]
      }, {
        path: 'examples/aboutus',
        component: _examples_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_7__["AboutusComponent"]
      }, {
        path: 'examples/blogpost',
        component: _examples_blogpost_blogpost_component__WEBPACK_IMPORTED_MODULE_8__["BlogpostComponent"]
      }, {
        path: 'examples/blogposts',
        component: _examples_blogposts_blogposts_component__WEBPACK_IMPORTED_MODULE_9__["BlogpostsComponent"]
      }, {
        path: 'examples/contactus',
        component: _examples_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_10__["ContactusComponent"]
      }, {
        path: 'examples/ecommerce',
        component: _examples_ecommerce_ecommerce_component__WEBPACK_IMPORTED_MODULE_11__["EcommerceComponent"]
      }, {
        path: 'examples/landing',
        component: _examples_landing_landing_component__WEBPACK_IMPORTED_MODULE_12__["LandingComponent"]
      }, {
        path: 'examples/login',
        component: _examples_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"]
      }, {
        path: 'examples/pricing',
        component: _examples_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_18__["PricingComponent"]
      }, {
        path: 'examples/productpage',
        component: _examples_productpage_productpage_component__WEBPACK_IMPORTED_MODULE_14__["ProductpageComponent"]
      }, {
        path: 'examples/profile',
        component: _examples_profile_profile_component__WEBPACK_IMPORTED_MODULE_15__["ProfileComponent"]
      }, {
        path: 'examples/register',
        component: _examples_register_register_component__WEBPACK_IMPORTED_MODULE_16__["RegisterComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
          useHash: false,
          relativeLinkResolution: 'legacy'
        })],
        exports: []
      })], AppRoutingModule);
      /***/
    },

    /***/
    "c3AT":
    /*!*********************************************!*\
      !*** ./src/app/services/project.service.ts ***!
      \*********************************************/

    /*! exports provided: ProjectService */

    /***/
    function c3AT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectService", function () {
        return ProjectService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../environments/environment */
      "AytR");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      }; // const httpOptions = {
      //   headers: new HttpHeaders({
      //     'X-Parse-Application-Id': parseKeys.PARSE_APP_ID,
      //     'X-Parse-REST-API-Key': parseKeys.PARSE_REST_API_KEY,
      //     'Content-Type':  'application/json'
      //   })
      // };


      var apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;

      var ProjectService = /*#__PURE__*/function () {
        function ProjectService(http) {
          _classCallCheck(this, ProjectService);

          this.http = http;
        }

        _createClass(ProjectService, [{
          key: "getProjects",
          value: function getProjects() {
            var url = "".concat(apiUrl, "/projects");
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              console.log(res);
              return res;
            }));
          }
        }, {
          key: "addProject",
          value: function addProject() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
            var url = "".concat(apiUrl, "/projects");
            return this.http.post(url, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              console.log(res);
              return res;
            }));
          }
        }]);

        return ProjectService;
      }();

      ProjectService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
        }];
      };

      ProjectService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])], ProjectService);
      /***/
    },

    /***/
    "c52c":
    /*!***************************************************!*\
      !*** ./src/app/sections/blogs/blogs.component.ts ***!
      \***************************************************/

    /*! exports provided: BlogsComponent */

    /***/
    function c52c(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BlogsComponent", function () {
        return BlogsComponent;
      });
      /* harmony import */


      var _raw_loader_blogs_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./blogs.component.html */
      "yB8t");
      /* harmony import */


      var _blogs_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./blogs.component.scss */
      "FNFX");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var BlogsComponent = /*#__PURE__*/function () {
        function BlogsComponent() {
          _classCallCheck(this, BlogsComponent);
        }

        _createClass(BlogsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BlogsComponent;
      }();

      BlogsComponent.ctorParameters = function () {
        return [];
      };

      BlogsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-blogs',
        template: _raw_loader_blogs_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_blogs_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [])], BlogsComponent);
      /***/
    },

    /***/
    "cGMZ":
    /*!*********************************************************!*\
      !*** ./src/app/sections/features/features.component.ts ***!
      \*********************************************************/

    /*! exports provided: FeaturesComponent */

    /***/
    function cGMZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeaturesComponent", function () {
        return FeaturesComponent;
      });
      /* harmony import */


      var _raw_loader_features_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./features.component.html */
      "mub7");
      /* harmony import */


      var _features_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./features.component.scss */
      "yt1U");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var FeaturesComponent = /*#__PURE__*/function () {
        function FeaturesComponent() {
          _classCallCheck(this, FeaturesComponent);
        }

        _createClass(FeaturesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FeaturesComponent;
      }();

      FeaturesComponent.ctorParameters = function () {
        return [];
      };

      FeaturesComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-features',
        template: _raw_loader_features_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_features_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [])], FeaturesComponent);
      /***/
    },

    /***/
    "cruu":
    /*!*****************************************************!*\
      !*** ./src/app/shared/navbar/navbar.component.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function cruu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "d4Bs":
    /*!*************************************************************!*\
      !*** ./src/app/examples/ecommerce/ecommerce.component.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function d4Bs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlY29tbWVyY2UuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "d4KC":
    /*!*********************************************************!*\
      !*** ./src/app/sections/projects/projects.component.ts ***!
      \*********************************************************/

    /*! exports provided: ProjectsComponent */

    /***/
    function d4KC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function () {
        return ProjectsComponent;
      });
      /* harmony import */


      var _raw_loader_projects_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./projects.component.html */
      "Dz+n");
      /* harmony import */


      var _projects_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./projects.component.scss */
      "P/dO");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var ProjectsComponent = /*#__PURE__*/function () {
        function ProjectsComponent() {
          _classCallCheck(this, ProjectsComponent);
        }

        _createClass(ProjectsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProjectsComponent;
      }();

      ProjectsComponent.ctorParameters = function () {
        return [];
      };

      ProjectsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-projects',
        template: _raw_loader_projects_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_projects_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [])], ProjectsComponent);
      /***/
    },

    /***/
    "dQ/m":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/work-history/work-history.component.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function dQM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <p>work-history works!</p>\n<ul>\n  <li *ngFor=\"let jerb of jobs\">\n    <button (click)=\"displayDetails(jerb)\">{{ jerb.title }}</button>\n    <ul *ngIf=\"isExpanded(jerb.id)\">\n      <li *ngFor=\"let duty of jerb.description.responsibilities\">{{ duty }}</li>\n    </ul>\n  </li>\n</ul> -->\n\n<div class=\"content-section implementation\">\n  <div class=\"card\">\n    <p-table [value]=\"jobs\" dataKey=\"company\">\n      <ng-template pTemplate=\"header\">\n        <tr>\n          <th class=\"dark-table-header\" style=\"width: 3rem\"></th>\n          <th class=\"dark-table-header\">Company</th>\n          <th class=\"dark-table-header\">Title</th>\n          <th class=\"dark-table-header\">Start Date</th>\n          <th class=\"dark-table-header\">End Date</th>\n          <th class=\"dark-table-header\">Actions</th>\n        </tr>\n      </ng-template>\n      <ng-template pTemplate=\"body\" let-job let-expanded=\"expanded\">\n        <tr>\n          <td>\n            <button type=\"button\" pButton pRipple [pRowToggler]=\"job\" class=\"p-button-text p-button-rounded p-button-plain\" [icon]=\"expanded ? 'pi pi-chevron-down' : 'pi pi-chevron-right'\"></button>\n          </td>\n          <td>{{job.company}}</td>\n          <td>{{job.title}}</td>\n          <td>{{job.startDate}}</td>\n          <td>{{job.endDate}}</td>\n          <td>\n            <!-- <button type=\"button\" pButton pRipple [pRowToggler]=\"job\" class=\"p-button-text p-button-info\" [icon]=\"expanded ? 'pi pi-chevron-down' : 'pi pi-chevron-right'\"></button> -->\n            <button *ngIf=\"!expanded\" pButton pRipple [pRowToggler]=\"job\" type=\"button\" label=\"View Details\" class=\"p-button-raised actions-button\"></button>\n            <button *ngIf=\"expanded\" pButton pRipple [pRowToggler]=\"job\" type=\"button\" label=\"Hide Details\" class=\"p-button-raised p-button-secondary actions-button\"></button>\n          </td>\n        </tr>\n      </ng-template>\n      <ng-template pTemplate=\"rowexpansion\" let-job>\n        <tr>\n          <td colspan=\"6\">\n            <div>\n              <p-table [value]=\"job.description.results\" dataKey=\"id\">\n                <ng-template pTemplate=\"header\">\n                  <tr>\n                    <th style=\"width: 2.5rem\"></th>\n                    <th>Responsibilities</th>\n                  </tr>\n                </ng-template>\n                <ng-template pTemplate=\"body\" let-description>\n                  <tr>\n                    <td>{{description.id}}</td>\n                    <td>{{description.responsibility}}</td>\n                  </tr>\n                </ng-template>\n              </p-table>\n            </div>\n          </td>\n        </tr>\n      </ng-template>\n    </p-table>\n  </div>\n</div>";
      /***/
    },

    /***/
    "eJqO":
    /*!*********************************************************!*\
      !*** ./src/app/sections/pricing/pricing.component.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function eJqO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmljaW5nLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "eXCi":
    /*!************************************************************!*\
      !*** ./src/app/shared/image-upload/image-upload.module.ts ***!
      \************************************************************/

    /*! exports provided: ImageUploadModule */

    /***/
    function eXCi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImageUploadModule", function () {
        return ImageUploadModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _image_upload_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./image-upload.component */
      "Tju2");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var ImageUploadModule = function ImageUploadModule() {
        _classCallCheck(this, ImageUploadModule);
      };

      ImageUploadModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        declarations: [_image_upload_component__WEBPACK_IMPORTED_MODULE_2__["ImageUploadComponent"]],
        exports: [_image_upload_component__WEBPACK_IMPORTED_MODULE_2__["ImageUploadComponent"]]
      })], ImageUploadModule);
      /***/
    },

    /***/
    "eyl4":
    /*!***********************************************************!*\
      !*** ./src/app/examples/contactus/contactus.component.ts ***!
      \***********************************************************/

    /*! exports provided: ContactusComponent */

    /***/
    function eyl4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactusComponent", function () {
        return ContactusComponent;
      });
      /* harmony import */


      var _raw_loader_contactus_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./contactus.component.html */
      "vBES");
      /* harmony import */


      var _contactus_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./contactus.component.scss */
      "3PY5");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rellax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rellax */
      "HbP6");
      /* harmony import */


      var rellax__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rellax__WEBPACK_IMPORTED_MODULE_3__);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var ContactusComponent = /*#__PURE__*/function () {
        function ContactusComponent() {
          _classCallCheck(this, ContactusComponent);

          this.zoom = 14;
          this.lat = 44.445248;
          this.lng = 26.099672;
          this.styles = [{
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
              "color": "#e9e9e9"
            }, {
              "lightness": 17
            }]
          }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
              "color": "#f5f5f5"
            }, {
              "lightness": 20
            }]
          }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
              "color": "#ffffff"
            }, {
              "lightness": 17
            }]
          }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
              "color": "#ffffff"
            }, {
              "lightness": 29
            }, {
              "weight": 0.2
            }]
          }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
              "color": "#ffffff"
            }, {
              "lightness": 18
            }]
          }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
              "color": "#ffffff"
            }, {
              "lightness": 16
            }]
          }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
              "color": "#f5f5f5"
            }, {
              "lightness": 21
            }]
          }, {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [{
              "color": "#dedede"
            }, {
              "lightness": 21
            }]
          }, {
            "elementType": "labels.text.stroke",
            "stylers": [{
              "visibility": "on"
            }, {
              "color": "#ffffff"
            }, {
              "lightness": 16
            }]
          }, {
            "elementType": "labels.text.fill",
            "stylers": [{
              "saturation": 36
            }, {
              "color": "#333333"
            }, {
              "lightness": 40
            }]
          }, {
            "elementType": "labels.icon",
            "stylers": [{
              "visibility": "off"
            }]
          }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
              "color": "#f2f2f2"
            }, {
              "lightness": 19
            }]
          }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
              "color": "#fefefe"
            }, {
              "lightness": 20
            }]
          }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
              "color": "#fefefe"
            }, {
              "lightness": 17
            }, {
              "weight": 1.2
            }]
          }];
          this.data = new Date();
        }

        _createClass(ContactusComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var rellaxHeader = new rellax__WEBPACK_IMPORTED_MODULE_3__('.rellax-header');
            var body = document.getElementsByTagName('body')[0];
            body.classList.add('contact-page');
            var navbar = document.getElementsByTagName('nav')[0];
            navbar.classList.add('navbar-transparent');
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var body = document.getElementsByTagName('body')[0];
            body.classList.remove('contact-page');
            var navbar = document.getElementsByTagName('nav')[0];
            navbar.classList.remove('navbar-transparent');
          }
        }]);

        return ContactusComponent;
      }();

      ContactusComponent.ctorParameters = function () {
        return [];
      };

      ContactusComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-contactus',
        template: _raw_loader_contactus_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_contactus_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [])], ContactusComponent);
      /***/
    },

    /***/
    "f9sp":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/examples/blogpost/blogpost.component.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function f9sp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<div class=\"wrapper\">\n    <div class=\"page-header page-header-small\">\n        <div class=\"page-header-image rellax-header\" data-rellax-speed=\"-8\" style=\"background-image: url('assets/img/bg24.jpg') ;\">\n        </div>\n        <div class=\"content-center\">\n            <div class=\"row\">\n                <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                    <h2 class=\"title\">WeChat Lucky Money</h2>\n                    <h4>WeChat launched in 2013.</h4>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"section\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div class=\"button-container\">\n                        <a href=\"#\" class=\"btn btn-primary btn-round btn-lg\">\n                            <i class=\"now-ui-icons text_align-left\"></i> Read Article\n                        </a>\n                        <a href=\"#\" class=\"btn btn-icon btn-lg btn-twitter btn-round\">\n                            <i class=\"fa fa-twitter\"></i>\n                        </a>\n                        <a href=\"#\" class=\"btn btn-icon btn-lg btn-facebook btn-round\">\n                            <i class=\"fa fa-facebook-square\"></i>\n                        </a>\n                        <a href=\"#\" class=\"btn btn-icon btn-lg btn-google btn-round\">\n                            <i class=\"fa fa-google\"></i>\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"section\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-8 ml-auto mr-auto\">\n                        <h3 class=\"title\">The Castle Looks Different at Night...</h3>\n                        <p>This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious, otherwise he wouldn't scroll to get here. Add a button if you want the user to see more. We are here to make life better.\n                            <br />\n                            <br /> And now I look and look around and there’s so many Kanyes I've been trying to figure out the bed design for the master bedroom at our Hidden Hills compound... and thank you for turning my personal jean jacket into a couture piece.</p>\n                        <p class=\"blockquote blockquote-primary\">\n                            “And thank you for turning my personal jean jacket into a couture piece.”\n                            <br>\n                            <br>\n                            <small>\n                                Kanye West, Producer.\n                            </small>\n                        </p>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"section section-blog col-md-10 ml-auto mr-auto\">\n            <div class=\"container\">\n                <div class=\"section-story-overview\">\n                    <div class=\"row\">\n                        <div class=\"col-md-6\">\n                            <div class=\"image-container image-left\" style=\"background-image: url('assets/img/bg35.jpg')\">\n                                <!-- First image on the left side -->\n                                <p class=\"blockquote blockquote-primary\">\"Over the span of the satellite record, Arctic sea ice has been declining significantly, while sea ice in the Antarctichas increased very slightly\"\n                                    <br>\n                                    <br>\n                                    <small>-NOAA</small>\n                                </p>\n                            </div>\n                            <!-- Second image on the left side of the article -->\n                            <div class=\"image-container image-left-bottom\" style=\"background-image: url('assets/img/bg29.jpg')\">\n                            </div>\n                        </div>\n                        <div class=\"col-md-5\">\n                            <!-- First image on the right side, above the article -->\n                            <div class=\"image-container image-right\" style=\"background-image: url('assets/img/project16.jpg')\">\n                            </div>\n                            <h3>So what does the new record for the lowest level of winter ice actually mean</h3>\n                            <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens with climate change. Even if the Arctic continues to be one of the fastest-warming regions of the world, it will always be plunged into bitterly cold polar dark every winter. And year-by-year, for all kinds of natural reasons, there’s huge variety of the state of the ice.\n                            </p>\n                            <p>\n                                For a start, it does not automatically follow that a record amount of ice will melt this summer. More important for determining the size of the annual thaw is the state of the weather as the midnight sun approaches and temperatures rise. But over the more than 30 years of satellite records, scientists have observed a clear pattern of decline, decade-by-decade.\n                            </p>\n                            <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens with climate change. Even if the Arctic continues to be one of the fastest-warming regions of the world, it will always be plunged into bitterly cold polar dark every winter. And year-by-year, for all kinds of natural reasons, there’s huge variety of the state of the ice.\n                            </p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"section\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-8 ml-auto mr-auto\">\n                        <h3 class=\"title\">Rest of the Story:</h3>\n                        <p>We are here to make life better. And now I look and look around and there’s so many Kanyes I've been trying to figure out the bed design for the master bedroom at our Hidden Hills compound... and thank you for turning my personal jean jacket into a couture piece.\n                            <br /> I speak yell scream directly at the old guard on behalf of the future. daytime All respect prayers and love to Phife’s family Thank you for so much inspiration. </p>\n                        <p> Thank you Anna for the invite thank you to the whole Vogue team And I love you like Kanye loves Kanye Pand Pand Panda I've been trying to figure out the bed design for the master bedroom at our Hidden Hills compound...The Pablo pop up was almost a pop up of influence. All respect prayers and love to Phife’s family Thank you for so much inspiration daytime I love this new Ferg album! The Life of Pablo is now available for purchase I have a dream. Thank you to everybody who made The Life of Pablo the number 1 album in the world! I'm so proud of the nr #1 song in the country. Panda! Good music 2016!</p>\n                        <p> I love this new Ferg album! The Life of Pablo is now available for purchase I have a dream. Thank you to everybody who made The Life of Pablo the number 1 album in the world! I'm so proud of the nr #1 song in the country. Panda! Good music 2016!</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"section section-blog-info\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-8 ml-auto mr-auto\">\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <div class=\"blog-tags\">\n                                    Tags:\n                                    <span class=\"label label-primary\">Photography</span>\n                                    <span class=\"label label-primary\">Stories</span>\n                                    <span class=\"label label-primary\">Castle</span>\n                                </div>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <a href=\"#\" class=\"btn btn-google btn-round pull-right\">\n                                    <i class=\"fa fa-google\"></i> 232\n                                </a>\n                                <a href=\"#\" class=\"btn btn-twitter btn-round pull-right\">\n                                    <i class=\"fa fa-twitter\"></i> 910\n                                </a>\n                                <a href=\"#\" class=\"btn btn-facebook btn-round pull-right\">\n                                    <i class=\"fa fa-facebook-square\"></i> 872\n                                </a>\n                            </div>\n                        </div>\n                        <hr />\n                        <div class=\"card card-profile card-plain\">\n                            <div class=\"row\">\n                                <div class=\"col-md-2\">\n                                    <div class=\"card-avatar\">\n                                        <a href=\"#\">\n                                            <img class=\"img img-raised\" src=\"assets/img/mike.jpg\">\n                                        </a>\n                                        <div class=\"ripple-container\"></div>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-8\">\n                                    <h4 class=\"card-title\">Alec Thompson</h4>\n                                    <p class=\"description\">I've been trying to figure out the bed design for the master bedroom at our Hidden Hills compound...I like good music from Youtube.</p>\n                                </div>\n                                <div class=\"col-md-2\">\n                                    <button type=\"button\" class=\"btn btn-default pull-right btn-round\">Follow</button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"section section-comments\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-8 ml-auto mr-auto\">\n                        <div class=\"media-area\">\n                            <h3 class=\"title text-center\">3 Comments</h3>\n                            <div class=\"media\">\n                                <a class=\"pull-left\" href=\"#\">\n                                    <div class=\"avatar\">\n                                        <img class=\"media-object img-raised\" src=\"assets/img/james.jpg\" alt=\"...\" />\n                                    </div>\n                                </a>\n                                <div class=\"media-body\">\n                                    <h5 class=\"media-heading\">Tina Andrew\n                                        <small class=\"text-muted\">&middot; 7 minutes ago</small>\n                                    </h5>\n                                    <p>Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!</p>\n                                    <p>All praises and blessings to the families of people who never gave up on dreams. Don't forget, You're Awesome!</p>\n                                    <div class=\"media-footer\">\n                                        <a href=\"#\" class=\"btn btn-primary btn-neutral pull-right\" placement=\"top\" ngbTooltip=\"Reply to Comment\">\n                                            <i class=\"now-ui-icons ui-1_send\"></i> Reply\n                                        </a>\n                                        <a href=\"#\" class=\"btn btn-danger btn-neutral pull-right\">\n                                            <i class=\"now-ui-icons ui-2_favourite-28\"></i> 243\n                                        </a>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"media\">\n                                <a class=\"pull-left\" href=\"#\">\n                                    <div class=\"avatar\">\n                                        <img class=\"media-object img-raised\" alt=\"Tim Picture\" src=\"assets/img/michael.jpg\">\n                                    </div>\n                                </a>\n                                <div class=\"media-body\">\n                                    <h5 class=\"media-heading\">John Camber\n                                        <small class=\"text-muted\">&middot; Yesterday</small>\n                                    </h5>\n                                    <p>Hello guys, nice to have you on the platform! There will be a lot of great stuff coming soon. We will keep you posted for the latest news.</p>\n                                    <p> Don't forget, You're Awesome!</p>\n                                    <div class=\"media-footer\">\n                                        <a href=\"#\" class=\"btn btn-primary btn-neutral pull-right\" placement=\"top\" ngbTooltip=\"Reply to Comment\">\n                                            <i class=\"now-ui-icons ui-1_send\"></i> Reply\n                                        </a>\n                                        <a href=\"#\" class=\"btn btn-danger btn-neutral pull-right\">\n                                            <i class=\"now-ui-icons ui-2_favourite-28\"></i> 25\n                                        </a>\n                                    </div>\n                                    <div class=\"media\">\n                                        <a class=\"pull-left\" href=\"#\">\n                                            <div class=\"avatar\">\n                                                <img class=\"media-object img-raised\" alt=\"64x64\" src=\"assets/img/julie.jpg\">\n                                            </div>\n                                        </a>\n                                        <div class=\"media-body\">\n                                            <h5 class=\"media-heading\">Tina Andrew\n                                                <small class=\"text-muted\">· 2 Days Ago</small>\n                                            </h5>\n                                            <p>Hello guys, nice to have you on the platform! There will be a lot of great stuff coming soon. We will keep you posted for the latest news.</p>\n                                            <p> Don't forget, You're Awesome!</p>\n                                            <div class=\"media-footer\">\n                                                <a href=\"#\" class=\"btn btn-primary btn-neutral pull-right\" placement=\"top\" ngbTooltip=\"Reply to Comment\">\n                                                    <i class=\"now-ui-icons ui-1_send\"></i> Reply\n                                                </a>\n                                                <a href=\"#\" class=\"btn btn-danger btn-neutral pull-right\">\n                                                    <i class=\"now-ui-icons ui-2_favourite-28\"></i> 2\n                                                </a>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <h3 class=\"title text-center\">Post your comment</h3>\n                        <div class=\"media media-post\">\n                            <a class=\"pull-left author\" href=\"#\">\n                                <div class=\"avatar\">\n                                    <img class=\"media-object img-raised\" alt=\"64x64\" src=\"assets/img/olivia.jpg\">\n                                </div>\n                            </a>\n                            <div class=\"media-body\">\n                                <textarea class=\"form-control\" placeholder=\"Write a nice reply or go home...\" rows=\"4\"></textarea>\n                                <div class=\"media-footer\">\n                                    <a href=\"#\" class=\"btn btn-primary pull-right\">\n                                        <i class=\"now-ui-icons ui-1_send\"></i> Reply\n                                    </a>\n                                </div>\n                            </div>\n                        </div>\n                        <!-- end media-post -->\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"section\">\n            <div class=\"container\">\n                <div class=\"col-md-12\">\n                    <h2 class=\"title text-center\">Similar Stories</h2>\n                    <br />\n                    <div class=\"blogs-1\" id=\"blogs-1\">\n                        <div class=\"row\">\n                            <div class=\"col-md-10 ml-auto mr-auto\">\n                                <div class=\"card card-plain card-blog\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-5\">\n                                            <div class=\"card-image\">\n                                                <img class=\"img img-raised rounded\" src=\"assets/img/examples/card-blog4.jpg\">\n                                            </div>\n                                        </div>\n                                        <div class=\"col-md-7\">\n                                            <h6 class=\"category text-info\">Enterprise</h6>\n                                            <h3 class=\"card-title\">\n                                                <a href=\"#\">Warner Music Group buys concert discovery service Songkick</a>\n                                            </h3>\n                                            <p class=\"card-description\">\n                                                Warner Music Group announced today it’s acquiring the selected assets of the music platform Songkick, including its app for finding concerts and the company’s trademark.\n                                            </p>\n                                            <p class=\"author\">\n                                                by\n                                                <a href=\"#\">\n                                                    <b>Sarah Perez</b>\n                                                </a>, 2 days ago\n                                            </p>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"card card-plain card-blog\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-7\">\n                                            <h6 class=\"category text-danger\">\n                                                <i class=\"now-ui-icons now-ui-icons media-2_sound-wave\"></i> Startup\n                                            </h6>\n                                            <h3 class=\"card-title\">\n                                                <a href=\"#\">Insticator raises $5.2M to help publishers</a>\n                                            </h3>\n                                            <p class=\"card-description\">\n                                                Insticator is announcing that it has raised $5.2 million in Series A funding. The startup allows online publishers to add quizzes, polls and other interactive elements...\n                                            </p>\n                                            <p class=\"author\">\n                                                by\n                                                <a href=\"#\">\n                                                    <b>Anthony Ha</b>\n                                                </a>, 5 days ago\n                                            </p>\n                                        </div>\n                                        <div class=\"col-md-5\">\n                                            <div class=\"card-image\">\n                                                <img class=\"img img-raised rounded\n                                        \" src=\"assets/img/examples/card-blog6.jpg\">\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <footer class=\"footer \" data-background-color=\"black\">\n        <div class=\"container\">\n            <nav>\n                <ul>\n                    <li>\n                        <a href=\"https://www.josh-levy.com\">\n                            Josh Levy\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"https://www.josh-levy.com/about-us\">\n                            About Us\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"http://blog.josh-levy.com\">\n                            Blog\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"https://www.josh-levy.com/license\">\n                            License\n                        </a>\n                    </li>\n                </ul>\n            </nav>\n            <div class=\"copyright\">\n                &copy; {{data | date: 'yyyy'}}, Designed by\n                <a href=\"https://www.invisionapp.com\" target=\"_blank\">Invision</a>. Coded by\n                <a href=\"https://www.josh-levy.com\" target=\"_blank\">Josh Levy</a>.\n            </div>\n        </div>\n    </footer>\n</div>\n";
      /***/
    },

    /***/
    "gVBG":
    /*!********************************************************!*\
      !*** ./src/app/presentation/presentation.component.ts ***!
      \********************************************************/

    /*! exports provided: PresentationComponent */

    /***/
    function gVBG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PresentationComponent", function () {
        return PresentationComponent;
      });
      /* harmony import */


      var _raw_loader_presentation_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./presentation.component.html */
      "+pZr");
      /* harmony import */


      var _presentation_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./presentation.component.scss */
      "71yw");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var app_components_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! app/components/contact/contact.component */
      "G2Gn");
      /* harmony import */


      var app_services_job_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! app/services/job.service */
      "qLOZ");
      /* harmony import */


      var app_services_project_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! app/services/project.service */
      "c3AT");
      /* harmony import */


      var app_services_skill_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! app/services/skill.service */
      "9ai6");
      /* harmony import */


      var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! primeng/api */
      "7zfz");
      /* harmony import */


      var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! primeng/dynamicdialog */
      "J7/z");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var PresentationComponent = /*#__PURE__*/function () {
        function PresentationComponent(skillService, projectService, jobService, dialogService, config) {
          _classCallCheck(this, PresentationComponent);

          this.skillService = skillService;
          this.projectService = projectService;
          this.jobService = jobService;
          this.dialogService = dialogService;
          this.config = config;
          this.date = new Date();
          this.allSelected = true;
          this.frontEndSelected = false;
          this.backEndSelected = false;
        }

        _createClass(PresentationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.markerColor = '#ae0001';
            this.markerIcon = primeng_api__WEBPACK_IMPORTED_MODULE_7__["PrimeIcons"].HEART;
            this.filter = 'All';
            var body = document.getElementsByTagName('body')[0];
            body.classList.add('presentation-page'); // const navbar = document.getElementsByTagName('nav')[0];
            // navbar.classList.add('navbar-transparent');

            this.getSkills();
            this.getProjects();
            this.getJobs();
          }
        }, {
          key: "getSkills",
          value: function getSkills() {
            var _this6 = this;

            return this.skillService.getSkills().subscribe(function (data) {
              _this6.skills = data.skills;

              _this6.filterSkills(_this6.filter);
            });
          }
        }, {
          key: "filterSkills",
          value: function filterSkills(filter) {
            this.filter = filter;
            this.filteredSkills = [];

            for (var i = 0; i < this.skills.length; i++) {
              if (this.filter === 'Front-End') {
                this.allSelected = false;
                this.frontEndSelected = true;
                this.backEndSelected = false;

                if (this.skills[i].type === 'Front-End' || this.skills[i].type === 'Front/Back-End') {
                  this.filteredSkills.push(this.skills[i]);
                }
              } else if (this.filter === 'Back-End') {
                this.allSelected = false;
                this.frontEndSelected = false;
                this.backEndSelected = true;

                if (this.skills[i].type === 'Back-End' || this.skills[i].type === 'Front/Back-End') {
                  this.filteredSkills.push(this.skills[i]);
                }
              } else {
                this.allSelected = true;
                this.frontEndSelected = false;
                this.backEndSelected = false;
                this.filteredSkills.push(this.skills[i]);
              }
            }
          }
        }, {
          key: "getProjects",
          value: function getProjects() {
            var _this7 = this;

            return this.projectService.getProjects().subscribe(function (data) {
              _this7.projects = data.projects;

              _this7.projects.sort(function (a, b) {
                return a.id - b.id;
              });
            });
          }
        }, {
          key: "getJobs",
          value: function getJobs() {
            var _this8 = this;

            return this.jobService.getJobs().subscribe(function (data) {
              _this8.jobs = data.jobs;

              _this8.jobs.sort(function (a, b) {
                return a.id - b.id;
              });

              _this8.responsibilities = console.log(_this8.jobs);
            });
          }
        }, {
          key: "showContactModal",
          value: function showContactModal() {
            this.ref = this.dialogService.open(app_components_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"], {
              header: 'Contact Me',
              width: '50%'
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var body = document.getElementsByTagName('body')[0];
            body.classList.remove('presentation-page'); // const navbar = document.getElementsByTagName('nav')[0];
            // navbar.classList.remove('navbar-transparent');
          }
        }]);

        return PresentationComponent;
      }();

      PresentationComponent.ctorParameters = function () {
        return [{
          type: app_services_skill_service__WEBPACK_IMPORTED_MODULE_6__["SkillService"]
        }, {
          type: app_services_project_service__WEBPACK_IMPORTED_MODULE_5__["ProjectService"]
        }, {
          type: app_services_job_service__WEBPACK_IMPORTED_MODULE_4__["JobService"]
        }, {
          type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_8__["DialogService"]
        }, {
          type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_8__["DynamicDialogConfig"]
        }];
      };

      PresentationComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-presentation',
        template: _raw_loader_presentation_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        providers: [primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_8__["DialogService"], primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_8__["DynamicDialogConfig"]],
        styles: [_presentation_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [app_services_skill_service__WEBPACK_IMPORTED_MODULE_6__["SkillService"], app_services_project_service__WEBPACK_IMPORTED_MODULE_5__["ProjectService"], app_services_job_service__WEBPACK_IMPORTED_MODULE_4__["JobService"], primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_8__["DialogService"], primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_8__["DynamicDialogConfig"]])], PresentationComponent);
      /***/
    },

    /***/
    "gVGT":
    /*!*********************************************************************!*\
      !*** ./src/app/components/footers-areas/footers-areas.component.ts ***!
      \*********************************************************************/

    /*! exports provided: FootersAreasComponent */

    /***/
    function gVGT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FootersAreasComponent", function () {
        return FootersAreasComponent;
      });
      /* harmony import */


      var _raw_loader_footers_areas_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./footers-areas.component.html */
      "V+/Z");
      /* harmony import */


      var _footers_areas_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./footers-areas.component.scss */
      "AjSh");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var FootersAreasComponent = /*#__PURE__*/function () {
        function FootersAreasComponent() {
          _classCallCheck(this, FootersAreasComponent);

          this.data = new Date();
          this.dropdownList = [];
          this.selectedItems = [];
          this.dropdownSettings = {};
          this.dropdownList1 = [];
          this.selectedItems1 = [];
          this.dropdownSettings1 = {};
        }

        _createClass(FootersAreasComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.dropdownList = [{
              "id": 1,
              "itemName": "Bahasa Indonesia"
            }, {
              "id": 2,
              "itemName": "Bahasa Melayu"
            }, {
              "id": 3,
              "itemName": "Català"
            }, {
              "id": 4,
              "itemName": "Dansk"
            }, {
              "id": 5,
              "itemName": "Deutsch"
            }, {
              "id": 6,
              "itemName": "English"
            }, {
              "id": 7,
              "itemName": "Español"
            }, {
              "id": 8,
              "itemName": "Eλληνικά"
            }, {
              "id": 9,
              "itemName": "Français"
            }, {
              "id": 10,
              "itemName": "Italiano"
            }, {
              "id": 11,
              "itemName": "Magyar"
            }, {
              "id": 12,
              "itemName": "Nederlands"
            }, {
              "id": 13,
              "itemName": "Norsk"
            }, {
              "id": 14,
              "itemName": "Polski"
            }, {
              "id": 15,
              "itemName": "Português"
            }, {
              "id": 16,
              "itemName": "Suomi"
            }, {
              "id": 17,
              "itemName": "Svenska"
            }, {
              "id": 18,
              "itemName": "Türkçe"
            }, {
              "id": 19,
              "itemName": "Íslenska"
            }, {
              "id": 20,
              "itemName": "Čeština"
            }, {
              "id": 21,
              "itemName": "Русский"
            }, {
              "id": 22,
              "itemName": "ภาษาไทย"
            }, {
              "id": 23,
              "itemName": "中文 (简体)"
            }, {
              "id": 24,
              "itemName": "中文 (繁體)"
            }, {
              "id": 25,
              "itemName": "日本語"
            }, {
              "id": 26,
              "itemName": "한국어"
            }];
            this.selectedItems = [];
            this.dropdownSettings = {
              singleSelection: true,
              text: "Select language",
              selectAllText: 'Select All',
              unSelectAllText: 'UnSelect All',
              enableSearchFilter: true,
              classes: ""
            };
            this.dropdownList1 = [{
              "id": 1,
              "itemName": "ARS"
            }, {
              "id": 2,
              "itemName": "AUD"
            }, {
              "id": 3,
              "itemName": "BRL"
            }, {
              "id": 4,
              "itemName": "CAD"
            }, {
              "id": 5,
              "itemName": "CHF"
            }, {
              "id": 6,
              "itemName": "CNY"
            }, {
              "id": 7,
              "itemName": "CZK"
            }, {
              "id": 8,
              "itemName": "DKK"
            }, {
              "id": 9,
              "itemName": "EUR"
            }, {
              "id": 10,
              "itemName": "GBP"
            }, {
              "id": 11,
              "itemName": "HKD"
            }, {
              "id": 12,
              "itemName": "HUF"
            }, {
              "id": 13,
              "itemName": "IDR"
            }, {
              "id": 14,
              "itemName": "ILS"
            }, {
              "id": 15,
              "itemName": "INR"
            }, {
              "id": 16,
              "itemName": "JPY"
            }, {
              "id": 17,
              "itemName": "KRW"
            }, {
              "id": 18,
              "itemName": "MYR"
            }, {
              "id": 19,
              "itemName": "MXN"
            }, {
              "id": 20,
              "itemName": "NOK"
            }, {
              "id": 21,
              "itemName": "NZD"
            }, {
              "id": 22,
              "itemName": "PHP"
            }, {
              "id": 23,
              "itemName": "PLN"
            }, {
              "id": 24,
              "itemName": "RUB"
            }, {
              "id": 25,
              "itemName": "SEK"
            }, {
              "id": 26,
              "itemName": "SGD"
            }, {
              "id": 27,
              "itemName": "TWD"
            }, {
              "id": 28,
              "itemName": "USD"
            }, {
              "id": 29,
              "itemName": "VND"
            }, {
              "id": 30,
              "itemName": "ZAR"
            }];
            this.selectedItems1 = [];
            this.dropdownSettings1 = {
              singleSelection: true,
              text: "Select currency",
              selectAllText: 'Select All',
              unSelectAllText: 'UnSelect All',
              enableSearchFilter: true,
              classes: ""
            };
          }
        }, {
          key: "onItemSelect",
          value: function onItemSelect(item) {
            console.log(item);
            console.log(this.selectedItems);
          }
        }, {
          key: "OnItemDeSelect",
          value: function OnItemDeSelect(item) {
            console.log(item);
            console.log(this.selectedItems);
          }
        }, {
          key: "onSelectAll",
          value: function onSelectAll(items) {
            console.log(items);
          }
        }, {
          key: "onDeSelectAll",
          value: function onDeSelectAll(items) {
            console.log(items);
          }
        }]);

        return FootersAreasComponent;
      }();

      FootersAreasComponent.ctorParameters = function () {
        return [];
      };

      FootersAreasComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-footers-areas',
        template: _raw_loader_footers_areas_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_footers_areas_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [])], FootersAreasComponent);
      /***/
    },

    /***/
    "gdyp":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sections/testimonials/testimonials.component.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function gdyp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"cd-section\" id=\"testimonials\">\n    <!--     *********    TESTIMONIALS 1     *********      -->\n    <div class=\"testimonials-1 section-image\" style=\"background-image: url('assets/img/bg19.jpg')\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-6 ml-auto mr-auto text-center\">\n                    <h2 class=\"title\">What is ALPHA?</h2>\n                    <h4 class=\"description \">If you’re selected for ALPHA you’ll also get 3 tickets, opportunity to access Investor Office Hours and Mentor Hours and much more all for €850.</h4>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <div class=\"card card-testimonial\">\n                        <div class=\"card-avatar\">\n                            <a href=\"#\">\n                                <img class=\"img img-raised\" src=\"assets/img/michael.jpg\" />\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <p class=\"card-description\">\n                                The networking at Web Summit is like no other European tech conference.\n                            </p>\n                        </div>\n                        <div class=\"icon icon-primary\">\n                            <i class=\"fa fa-quote-right\"></i>\n                        </div>\n                        <div class=\"card-footer\">\n                            <h4 class=\"card-title\">Michael Elijah</h4>\n                            <p class=\"category\">@michaelelijah</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"card card-testimonial\">\n                        <div class=\"card-avatar\">\n                            <a href=\"#\">\n                                <img class=\"img img-raised\" src=\"assets/img/olivia.jpg\" />\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <p class=\"card-description\">\n                                The connections you make at Web Summit are unparalleled, we met users all over the world.\n                            </p>\n                        </div>\n                        <div class=\"icon icon-primary\">\n                            <i class=\"fa fa-quote-right\"></i>\n                        </div>\n                        <div class=\"card-footer\">\n                            <h4 class=\"card-title\">Olivia Harper</h4>\n                            <p class=\"category\">@oliviaharper</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"card card-testimonial\">\n                        <div class=\"card-avatar\">\n                            <a href=\"#\">\n                                <img class=\"img img-raised\" src=\"assets/img/james.jpg\" />\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <p class=\"card-description\">\n                                Web Summit will increase your appetite, your inspiration, and your network.\n                            </p>\n                        </div>\n                        <div class=\"icon icon-primary\">\n                            <i class=\"fa fa-quote-right\"></i>\n                        </div>\n                        <div class=\"card-footer\">\n                            <h4 class=\"card-title\">James Logan</h4>\n                            <p class=\"category\">@jameslogan</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END TESTIMONIALS 1      *********      -->\n    <!--     *********    TESTIMONIALS 2     *********      -->\n    <div class=\"testimonials-2\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <ngb-carousel>\n                      <ng-template ngbSlide>\n                        <div class=\"card card-testimonial card-plain\">\n                            <div class=\"card-avatar\">\n                                <a href=\"#\">\n                                    <img class=\"img img-raised rounded\" src=\"assets/img/james.jpg\" />\n                                </a>\n                            </div>\n                            <div class=\"card-body\">\n                                <h5 class=\"card-description\">\"Take up one idea. Make that one idea your life - think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success. A single rose can be my garden... a single friend, my world.\"\n                                </h5>\n                                <h3 class=\"card-title\">Isaac Hunter</h3>\n                                <div class=\"card-footer\">\n                                    <h6 class=\"category text-primary\">Human Resource Director</h6>\n                                </div>\n                            </div>\n                        </div>\n                      </ng-template>\n                      <ng-template ngbSlide>\n                        <div class=\"card card-testimonial card-plain\">\n                            <div class=\"card-avatar\">\n                                <a href=\"#\">\n                                    <img class=\"img img-raised rounded\" src=\"assets/img/olivia.jpg\" />\n                                </a>\n                            </div>\n                            <div class=\"card-body\">\n                                <h5 class=\"card-description\">\"When we are no longer able to change a situation - we are challenged to change ourselves. Spread love everywhere you go. Let no one ever come to you without leaving happier. Problems are not stop signs, they are guidelines.\"\n                                </h5>\n                                <h3 class=\"card-title\">Alexa Hailey</h3>\n                                <div class=\"card-footer\">\n                                    <h6 class=\"category text-primary\">Human Resource Director</h6>\n                                </div>\n                            </div>\n                        </div>\n                      </ng-template>\n                  </ngb-carousel>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END TESTIMONIALS 2      *********      -->\n    <!--     *********    TESTIMONIALS 3     *********      -->\n    <div class=\"testimonials-3\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-6 ml-auto mr-auto text-center\">\n                    <h2 class=\"title\">What Clients Say</h2>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <div class=\"card card-testimonial card-plain\">\n                        <div class=\"card-avatar\">\n                            <a href=\"#\">\n                                <img class=\"img img-raised rounded\" src=\"assets/img/michael.jpg\" />\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <h3 class=\"card-title\">Andrew John</h3>\n                            <h6 class=\"category text-primary\">Loan Counselor</h6>\n                            <p class=\"card-description\">\"Do not go where the path may lead, go instead where there is no path and leave a trail.\"\n                            </p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"card card-testimonial card-plain\">\n                        <div class=\"card-avatar\">\n                            <a href=\"#\">\n                                <img class=\"img img-raised rounded\" src=\"assets/img/olivia.jpg\" />\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <h4 class=\"card-title\">Zoe Gabriella</h4>\n                            <h6 class=\"category text-primary\">Interpreter OR Translator</h6>\n                            <p class=\"card-description\">\"Don't walk behind me; I may not lead. Don't walk in front of me; I may not follow. Just walk beside me and be my friend.\"\n                            </p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"card card-testimonial card-plain\">\n                        <div class=\"card-avatar\">\n                            <a href=\"#\">\n                                <img class=\"img img-raised rounded\" src=\"assets/img/james.jpg\" />\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <h4 class=\"card-title\">Joshiah Luke</h4>\n                            <h6 class=\"category text-primary\">HR Specialist</h6>\n                            <p class=\"card-description\">\"The pessimist complains about the wind; the optimist expects it to change; the realist adjusts the sails.\"\n                            </p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END TESTIMONIALS 3      *********      -->\n</div>\n";
      /***/
    },

    /***/
    "go9B":
    /*!*********************************************************!*\
      !*** ./src/app/examples/register/register.component.ts ***!
      \*********************************************************/

    /*! exports provided: RegisterComponent */

    /***/
    function go9B(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
        return RegisterComponent;
      });
      /* harmony import */


      var _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./register.component.html */
      "6cdP");
      /* harmony import */


      var _register_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./register.component.scss */
      "lOiq");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var RegisterComponent = /*#__PURE__*/function () {
        function RegisterComponent() {
          _classCallCheck(this, RegisterComponent);

          this.data = new Date();
        }

        _createClass(RegisterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var body = document.getElementsByTagName('body')[0];
            body.classList.add('signup-page');
            var navbar = document.getElementsByTagName('nav')[0];
            navbar.classList.add('navbar-absolute');
            navbar.classList.remove('fixed-top');
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var body = document.getElementsByTagName('body')[0];
            body.classList.remove('signup-page');
            var navbar = document.getElementsByTagName('nav')[0];
            navbar.classList.remove('navbar-absolute');
            navbar.classList.add('fixed-top');
          }
        }]);

        return RegisterComponent;
      }();

      RegisterComponent.ctorParameters = function () {
        return [];
      };

      RegisterComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-register',
        template: _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_register_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [])], RegisterComponent);
      /***/
    },

    /***/
    "gqYc":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/examples/examples.component.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function gqYc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>\n  examples works!\n</p>\n";
      /***/
    },

    /***/
    "hA2S":
    /*!***********************************************************!*\
      !*** ./src/app/examples/blogposts/blogposts.component.ts ***!
      \***********************************************************/

    /*! exports provided: BlogpostsComponent */

    /***/
    function hA2S(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BlogpostsComponent", function () {
        return BlogpostsComponent;
      });
      /* harmony import */


      var _raw_loader_blogposts_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./blogposts.component.html */
      "9iB8");
      /* harmony import */


      var _blogposts_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./blogposts.component.scss */
      "G7Kx");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rellax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rellax */
      "HbP6");
      /* harmony import */


      var rellax__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rellax__WEBPACK_IMPORTED_MODULE_3__);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var BlogpostsComponent = /*#__PURE__*/function () {
        function BlogpostsComponent() {
          _classCallCheck(this, BlogpostsComponent);

          this.data = new Date();
        }

        _createClass(BlogpostsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var rellaxHeader = new rellax__WEBPACK_IMPORTED_MODULE_3__('.rellax-header');
            var body = document.getElementsByTagName('body')[0];
            body.classList.add('blog-posts');
            var navbar = document.getElementsByTagName('nav')[0];
            navbar.classList.add('navbar-transparent');
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var body = document.getElementsByTagName('body')[0];
            body.classList.remove('blog-posts');
            var navbar = document.getElementsByTagName('nav')[0];
            navbar.classList.remove('navbar-transparent');
          }
        }]);

        return BlogpostsComponent;
      }();

      BlogpostsComponent.ctorParameters = function () {
        return [];
      };

      BlogpostsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-blogposts',
        template: _raw_loader_blogposts_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_blogposts_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [])], BlogpostsComponent);
      /***/
    },

    /***/
    "hMDP":
    /*!************************************************!*\
      !*** ./src/app/examples/examples.component.ts ***!
      \************************************************/

    /*! exports provided: ExamplesComponent */

    /***/
    function hMDP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExamplesComponent", function () {
        return ExamplesComponent;
      });
      /* harmony import */


      var _raw_loader_examples_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./examples.component.html */
      "gqYc");
      /* harmony import */


      var _examples_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./examples.component.scss */
      "w1at");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var ExamplesComponent = /*#__PURE__*/function () {
        function ExamplesComponent() {
          _classCallCheck(this, ExamplesComponent);
        }

        _createClass(ExamplesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ExamplesComponent;
      }();

      ExamplesComponent.ctorParameters = function () {
        return [];
      };

      ExamplesComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-examples',
        template: _raw_loader_examples_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_examples_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [])], ExamplesComponent);
      /***/
    },

    /***/
    "ieWF":
    /*!*********************************************!*\
      !*** ./src/app/examples/examples.module.ts ***!
      \*********************************************/

    /*! exports provided: ExamplesModule */

    /***/
    function ieWF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExamplesModule", function () {
        return ExamplesModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! angular2-multiselect-dropdown */
      "e/mZ");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ngx_chips__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-chips */
      "Kb4U");
      /* harmony import */


      var ng2_nouislider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng2-nouislider */
      "P1c5");
      /* harmony import */


      var ng2_nouislider__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_nouislider__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! jw-bootstrap-switch-ng2 */
      "yQBb");
      /* harmony import */


      var _agm_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @agm/core */
      "pxUr");
      /* harmony import */


      var _shared_image_upload_image_upload_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../shared/image-upload/image-upload.module */
      "eXCi");
      /* harmony import */


      var _examples_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./examples.component */
      "hMDP");
      /* harmony import */


      var _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./aboutus/aboutus.component */
      "qmXc");
      /* harmony import */


      var _blogpost_blogpost_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./blogpost/blogpost.component */
      "CxlL");
      /* harmony import */


      var _blogposts_blogposts_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./blogposts/blogposts.component */
      "hA2S");
      /* harmony import */


      var _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./contactus/contactus.component */
      "eyl4");
      /* harmony import */


      var _ecommerce_ecommerce_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./ecommerce/ecommerce.component */
      "vGOd");
      /* harmony import */


      var _landing_landing_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./landing/landing.component */
      "AXTl");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./login/login.component */
      "lznb");
      /* harmony import */


      var _productpage_productpage_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./productpage/productpage.component */
      "aHyJ");
      /* harmony import */


      var _profile_profile_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./profile/profile.component */
      "xQKc");
      /* harmony import */


      var _register_register_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./register/register.component */
      "go9B");
      /* harmony import */


      var _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./pricing/pricing.component */
      "73mm");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var ExamplesModule = function ExamplesModule() {
        _classCallCheck(this, ExamplesModule);
      };

      ExamplesModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], ngx_chips__WEBPACK_IMPORTED_MODULE_4__["TagInputModule"], ng2_nouislider__WEBPACK_IMPORTED_MODULE_5__["NouisliderModule"], jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_7__["JwBootstrapSwitchNg2Module"], angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_2__["AngularMultiSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _agm_core__WEBPACK_IMPORTED_MODULE_8__["AgmCoreModule"].forRoot({
          apiKey: 'YOUR_KEY_HERE'
        }), _shared_image_upload_image_upload_module__WEBPACK_IMPORTED_MODULE_9__["ImageUploadModule"]],
        declarations: [_examples_component__WEBPACK_IMPORTED_MODULE_10__["ExamplesComponent"], _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_11__["AboutusComponent"], _blogpost_blogpost_component__WEBPACK_IMPORTED_MODULE_12__["BlogpostComponent"], _blogposts_blogposts_component__WEBPACK_IMPORTED_MODULE_13__["BlogpostsComponent"], _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_14__["ContactusComponent"], _ecommerce_ecommerce_component__WEBPACK_IMPORTED_MODULE_15__["EcommerceComponent"], _landing_landing_component__WEBPACK_IMPORTED_MODULE_16__["LandingComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"], _productpage_productpage_component__WEBPACK_IMPORTED_MODULE_18__["ProductpageComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_19__["ProfileComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_20__["RegisterComponent"], _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_21__["PricingComponent"]]
      })], ExamplesModule);
      /***/
    },

    /***/
    "j1ZV":
    /*!*************************************************!*\
      !*** ./src/app/components/components.module.ts ***!
      \*************************************************/

    /*! exports provided: ComponentsModule */

    /***/
    function j1ZV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
        return ComponentsModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng2-nouislider */
      "P1c5");
      /* harmony import */


      var ng2_nouislider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! jw-bootstrap-switch-ng2 */
      "yQBb");
      /* harmony import */


      var ngx_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-chips */
      "Kb4U");
      /* harmony import */


      var angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! angular2-multiselect-dropdown */
      "e/mZ");
      /* harmony import */


      var _kolkov_ngx_gallery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @kolkov/ngx-gallery */
      "XGsO");
      /* harmony import */


      var _shared_image_upload_image_upload_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../shared/image-upload/image-upload.module */
      "eXCi");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _basicelements_basicelements_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./basicelements/basicelements.component */
      "o8F2");
      /* harmony import */


      var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./navigation/navigation.component */
      "mvyS");
      /* harmony import */


      var _typography_typography_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./typography/typography.component */
      "QhSr");
      /* harmony import */


      var _nucleoicons_nucleoicons_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./nucleoicons/nucleoicons.component */
      "+GGL");
      /* harmony import */


      var _components_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./components.component */
      "93si");
      /* harmony import */


      var _notification_notification_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./notification/notification.component */
      "9ldr");
      /* harmony import */


      var _modal_modal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./modal/modal.component */
      "7aL3");
      /* harmony import */


      var _prefooter_areas_prefooter_areas_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./prefooter-areas/prefooter-areas.component */
      "9leZ");
      /* harmony import */


      var _footers_areas_footers_areas_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./footers-areas/footers-areas.component */
      "gVGT");
      /* harmony import */


      var _tables_areas_tables_areas_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./tables-areas/tables-areas.component */
      "E1l7");
      /* harmony import */


      var _comments_areas_comments_areas_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./comments-areas/comments-areas.component */
      "FX1G");
      /* harmony import */


      var _cards_areas_cards_areas_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./cards-areas/cards-areas.component */
      "jdKA");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var ComponentsModule = function ComponentsModule() {
        _classCallCheck(this, ComponentsModule);
      };

      ComponentsModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"], ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__["NouisliderModule"], ngx_chips__WEBPACK_IMPORTED_MODULE_6__["TagInputModule"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"], jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_5__["JwBootstrapSwitchNg2Module"], angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__["AngularMultiSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _kolkov_ngx_gallery__WEBPACK_IMPORTED_MODULE_8__["NgxGalleryModule"], _shared_image_upload_image_upload_module__WEBPACK_IMPORTED_MODULE_9__["ImageUploadModule"]],
        declarations: [_components_component__WEBPACK_IMPORTED_MODULE_15__["ComponentsComponent"], _basicelements_basicelements_component__WEBPACK_IMPORTED_MODULE_11__["BasicelementsComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_12__["NavigationComponent"], _typography_typography_component__WEBPACK_IMPORTED_MODULE_13__["TypographyComponent"], _nucleoicons_nucleoicons_component__WEBPACK_IMPORTED_MODULE_14__["NucleoiconsComponent"], _notification_notification_component__WEBPACK_IMPORTED_MODULE_16__["NotificationComponent"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_17__["NgbdModalBasic"], _prefooter_areas_prefooter_areas_component__WEBPACK_IMPORTED_MODULE_18__["PrefooterAreasComponent"], _footers_areas_footers_areas_component__WEBPACK_IMPORTED_MODULE_19__["FootersAreasComponent"], _tables_areas_tables_areas_component__WEBPACK_IMPORTED_MODULE_20__["TablesAreasComponent"], _comments_areas_comments_areas_component__WEBPACK_IMPORTED_MODULE_21__["CommentsAreasComponent"], _cards_areas_cards_areas_component__WEBPACK_IMPORTED_MODULE_22__["CardsAreasComponent"]],
        exports: [_components_component__WEBPACK_IMPORTED_MODULE_15__["ComponentsComponent"]]
      })], ComponentsModule);
      /***/
    },

    /***/
    "jdKA":
    /*!*****************************************************************!*\
      !*** ./src/app/components/cards-areas/cards-areas.component.ts ***!
      \*****************************************************************/

    /*! exports provided: CardsAreasComponent */

    /***/
    function jdKA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardsAreasComponent", function () {
        return CardsAreasComponent;
      });
      /* harmony import */


      var _raw_loader_cards_areas_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./cards-areas.component.html */
      "T1gg");
      /* harmony import */


      var _cards_areas_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./cards-areas.component.scss */
      "WTLY");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var CardsAreasComponent = /*#__PURE__*/function () {
        function CardsAreasComponent() {
          _classCallCheck(this, CardsAreasComponent);
        }

        _createClass(CardsAreasComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CardsAreasComponent;
      }();

      CardsAreasComponent.ctorParameters = function () {
        return [];
      };

      CardsAreasComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-cards-areas',
        template: _raw_loader_cards_areas_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_cards_areas_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [])], CardsAreasComponent);
      /***/
    },

    /***/
    "jmJk":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function jmJk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<b-container fluid>\n  <div class=\"mb-1 text-center w-100\">\n    <h3 class=\"name\">Josh Levy</h3>\n  </div>\n  <div class=\"mb-1 text-center w-100\">\n    <div class=\"social\">\n      <a href=\"https://linkedin.com/in/JoshAaronLevy\" target=\"_blank\"><i class=\"fab fa-linkedin\"></i></a>\n      <a href=\"https://github.com/JoshAaronLevy\" target=\"_blank\"><i class=\"fab fa-github\"></i></a>\n    </div>\n  </div>\n  <div class=\"mb-1 text-center w-100\">\n    <div class=\"contact\">\n      <a href=\"mailto:joshaaronlevy@gmail.com\"><i class=\"fas fa-envelope\"></i><h4>joshaaronlevy@gmail.com</h4></a>\n    </div>\n  </div>\n  <div class=\"mb-1 text-center w-100\">\n    <div class=\"contact\">\n      <a href=\"tel:7208834980\"><i class=\"fas fa-mobile\"></i><h4>(720) 883-4980</h4></a>\n    </div>\n  </div>\n  <div class=\"mb-1 text-center w-100\">\n    <div class=\"contact\">\n      <a href=\"https://goo.gl/maps/bpZCa8oQx1v\" target=\"_blank\"><i class=\"fas fa-map-marked-alt\"></i><h4>Denver, CO<sup>*</sup></h4></a>\n    </div>\n  </div>\n  <div class=\"mb-1 text-center w-100\">\n    <div class=\"footnote\">\n      <h6><sup>*</sup>Currently in Denver, yet able to easily relocate, and seeking such opportunities as well.</h6>\n    </div>\n  </div>\n</b-container>";
      /***/
    },

    /***/
    "kP6b":
    /*!*******************************************************!*\
      !*** ./src/app/sections/pricing/pricing.component.ts ***!
      \*******************************************************/

    /*! exports provided: PricingComponent */

    /***/
    function kP6b(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PricingComponent", function () {
        return PricingComponent;
      });
      /* harmony import */


      var _raw_loader_pricing_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./pricing.component.html */
      "TdX4");
      /* harmony import */


      var _pricing_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pricing.component.scss */
      "eJqO");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var PricingComponent = /*#__PURE__*/function () {
        function PricingComponent() {
          _classCallCheck(this, PricingComponent);
        }

        _createClass(PricingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PricingComponent;
      }();

      PricingComponent.ctorParameters = function () {
        return [];
      };

      PricingComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-pricing',
        template: _raw_loader_pricing_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_pricing_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [])], PricingComponent);
      /***/
    },

    /***/
    "kQxL":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sections/sections.component.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function kQxL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"wrapper\">\n    <div class=\"section-space\"></div>\n    <app-headers></app-headers>\n    <app-features></app-features>\n    <app-blogs></app-blogs>\n    <app-teams></app-teams>\n    <app-projects></app-projects>\n    <app-pricing></app-pricing>\n    <app-testimonials></app-testimonials>\n    <app-contacts></app-contacts>\n</div>\n";
      /***/
    },

    /***/
    "l1hn":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/examples/ecommerce/ecommerce.component.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function l1hn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"wrapper\">\n  <ngb-carousel>\n      <ng-template ngbSlide>\n        <div class=\"page-header header-filter\">\n          <div class=\"page-header-image\" style=\"background-image: url('assets/img/bg40.jpg');\"></div>\n          <div class=\"content-center text-center\">\n              <div class=\"row\">\n                  <div class=\"col-md-8 ml-auto mr-auto2\">\n                      <h1 class=\"title\">Finding the Perfect.</h1>\n                      <h4 class=\"description text-white\">The haute couture crowds make stylish statements between shows during couture season in Paris...</h4>\n                  </div>\n              </div>\n          </div>\n        </div>\n      </ng-template>\n      <ng-template ngbSlide>\n        <div class=\"page-header header-filter\">\n            <div class=\"page-header-image\" style=\"background-image: url('assets/img/bg41.jpg');\"></div>\n            <div class=\"content-center\">\n                <div class=\"row\">\n                    <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                        <h1 class=\"title\">Street Style: Couture.</h1>\n                        <h4 class=\"description text-white\">See what Karlie Kloss, Tracee Ellis Ross and others wore between the shows...</h4>\n                    </div>\n                </div>\n            </div>\n        </div>\n      </ng-template>\n      <ng-template ngbSlide>\n        <div class=\"page-header header-filter\">\n            <div class=\"page-header-image\" style=\"background-image: url('assets/img/bg29.jpg');\"></div>\n            <div class=\"content-center text-center\">\n                <div class=\"row\">\n                    <div class=\"col-md-8 ml-auto mr-auto\">\n                        <h1 class=\"title\">For Men With Style.</h1>\n                        <h4 class=\"description text-white\">Shirts that actually fit? Check. Linen shorts? Yup. Those wider pants suddenly in style? Got them, too....</h4>\n                    </div>\n                </div>\n            </div>\n        </div>\n      </ng-template>\n  </ngb-carousel>\n    <div class=\"main\">\n        <div class=\"section\">\n            <div class=\"container\">\n                <h2 class=\"section-title\">Find what you need</h2>\n                <div class=\"row\">\n                    <div class=\"col-md-3\">\n                      <h4 class=\"card-title card-refine\">\n                          Refine\n                          <button class=\"btn btn-default btn-icon btn-neutral pull-right\" placement=\"top\" ngbTooltip=\"Reset Filter\">\n                              <i class=\"arrows-1_refresh-69 now-ui-icons\"></i>\n                          </button>\n                      </h4>\n                      <ngb-accordion #acc=\"ngbAccordion\" activeIds=\"config-panel-one\" class=\"card-plain\">\n                          <ngb-panel id=\"config-panel-one\">\n                              <ng-template ngbPanelTitle>\n                                    <h6 class=\"mb-0\">\n                                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n                                            Price Range\n                                            <i class=\"now-ui-icons arrows-1_minimal-down\"></i>\n                                        </a>\n                                    </h6>\n                              </ng-template>\n                              <ng-template ngbPanelContent>\n                                <nouislider class=\"slider slider-default\" [connect]=\"true\" [min]=\"0\" [max]=\"10000\" [step]=\"1\" [(ngModel)]=\"doubleSlider\" [tooltips]=\"true\"></nouislider>\n                              </ng-template>\n                          </ngb-panel>\n                          <ngb-panel>\n                              <ng-template ngbPanelTitle>\n                                <h6 class=\"mb-0\">\n                                    <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\n                                        Clothing\n                                        <i class=\"now-ui-icons arrows-1_minimal-down\"></i>\n                                    </a>\n                                </h6>\n                              </ng-template>\n                              <ng-template ngbPanelContent>\n                                <div class=\"form-check\">\n                                    <label class=\"form-check-label\">\n                                        <input class=\"form-check-input\" type=\"checkbox\">\n                                        <span class=\"form-check-sign\"></span>\n                                        Blazers\n                                    </label>\n                                </div>\n                                <div class=\"form-check\">\n                                    <label class=\"form-check-label\">\n                                        <input class=\"form-check-input\" type=\"checkbox\">\n                                        <span class=\"form-check-sign\"></span>\n                                        Casual Shirts\n                                    </label>\n                                </div>\n                                <div class=\"form-check\">\n                                    <label class=\"form-check-label\">\n                                        <input class=\"form-check-input\" type=\"checkbox\">\n                                        <span class=\"form-check-sign\"></span>\n                                        Formal Shirts\n                                    </label>\n                                </div>\n                                <div class=\"form-check\">\n                                    <label class=\"form-check-label\">\n                                        <input class=\"form-check-input\" type=\"checkbox\">\n                                        <span class=\"form-check-sign\"></span>\n                                        Jeans\n                                    </label>\n                                </div>\n                                <div class=\"form-check\">\n                                    <label class=\"form-check-label\">\n                                        <input class=\"form-check-input\" type=\"checkbox\">\n                                        <span class=\"form-check-sign\"></span>\n                                        Polos\n                                    </label>\n                                </div>\n                                <div class=\"form-check\">\n                                    <label class=\"form-check-label\">\n                                        <input class=\"form-check-input\" type=\"checkbox\">\n                                        <span class=\"form-check-sign\"></span>\n                                        Pijamas\n                                    </label>\n                                </div>\n                                <div class=\"form-check\">\n                                    <label class=\"form-check-label\">\n                                        <input class=\"form-check-input\" type=\"checkbox\">\n                                        <span class=\"form-check-sign\"></span>\n                                        Shorts\n                                    </label>\n                                </div>\n                                <div class=\"form-check\">\n                                    <label class=\"form-check-label\">\n                                        <input class=\"form-check-input\" type=\"checkbox\">\n                                        <span class=\"form-check-sign\"></span>\n                                        Trousers\n                                    </label>\n                                </div>\n                              </ng-template>\n                          </ngb-panel>\n                          <ngb-panel>\n                              <ng-template ngbPanelTitle>\n                                <h6 class=\"mb-0\">\n                                    <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\n                                        Designer\n                                        <i class=\"now-ui-icons arrows-1_minimal-down\"></i>\n                                    </a>\n                                </h6>\n                              </ng-template>\n                              <ng-template ngbPanelContent>\n                                <div class=\"form-check\">\n                                    <label class=\"form-check-label\">\n                                        <input class=\"form-check-input\" type=\"checkbox\">\n                                        <span class=\"form-check-sign\"></span>\n                                        All\n                                    </label>\n                                </div>\n                                <div class=\"form-check\">\n                                    <label class=\"form-check-label\">\n                                        <input class=\"form-check-input\" type=\"checkbox\">\n                                        <span class=\"form-check-sign\"></span>\n                                        Polo Ralph Lauren\n                                    </label>\n                                </div>\n                                <div class=\"form-check\">\n                                    <label class=\"form-check-label\">\n                                        <input class=\"form-check-input\" type=\"checkbox\">\n                                        <span class=\"form-check-sign\"></span>\n                                        Wooyoungmi\n                                    </label>\n                                </div>\n                                <div class=\"form-check\">\n                                    <label class=\"form-check-label\">\n                                        <input class=\"form-check-input\" type=\"checkbox\">\n                                        <span class=\"form-check-sign\"></span>\n                                        Alexander McQueen\n                                    </label>\n                                </div>\n                                <div class=\"form-check\">\n                                    <label class=\"form-check-label\">\n                                        <input class=\"form-check-input\" type=\"checkbox\">\n                                        <span class=\"form-check-sign\"></span>\n                                        Tom Ford\n                                    </label>\n                                </div>\n                                <div class=\"form-check\">\n                                    <label class=\"form-check-label\">\n                                        <input class=\"form-check-input\" type=\"checkbox\">\n                                        <span class=\"form-check-sign\"></span>\n                                        AMI\n                                    </label>\n                                </div>\n                                <div class=\"form-check\">\n                                    <label class=\"form-check-label\">\n                                        <input class=\"form-check-input\" type=\"checkbox\">\n                                        <span class=\"form-check-sign\"></span>\n                                        Berena\n                                    </label>\n                                </div>\n                                <div class=\"form-check\">\n                                    <label class=\"form-check-label\">\n                                        <input class=\"form-check-input\" type=\"checkbox\">\n                                        <span class=\"form-check-sign\"></span>\n                                        Thom Sweeney\n                                    </label>\n                                </div>\n                                <div class=\"form-check\">\n                                    <label class=\"form-check-label\">\n                                        <input class=\"form-check-input\" type=\"checkbox\">\n                                        <span class=\"form-check-sign\"></span>\n                                        Burberry Prorsum\n                                    </label>\n                                </div>\n                                <div class=\"form-check\">\n                                    <label class=\"form-check-label\">\n                                        <input class=\"form-check-input\" type=\"checkbox\">\n                                        <span class=\"form-check-sign\"></span>\n                                        Calvin Klein\n                                    </label>\n                                </div>\n                                <div class=\"form-check\">\n                                    <label class=\"form-check-label\">\n                                        <input class=\"form-check-input\" type=\"checkbox\">\n                                        <span class=\"form-check-sign\"></span>\n                                        Kingsman\n                                    </label>\n                                </div>\n                                <div class=\"form-check\">\n                                    <label class=\"form-check-label\">\n                                        <input class=\"form-check-input\" type=\"checkbox\">\n                                        <span class=\"form-check-sign\"></span>\n                                        Club Monaco\n                                    </label>\n                                </div>\n                                <div class=\"form-check\">\n                                    <label class=\"form-check-label\">\n                                        <input class=\"form-check-input\" type=\"checkbox\">\n                                        <span class=\"form-check-sign\"></span>\n                                        Dolce & Gabbana\n                                    </label>\n                                </div>\n                                <div class=\"form-check\">\n                                    <label class=\"form-check-label\">\n                                        <input class=\"form-check-input\" type=\"checkbox\">\n                                        <span class=\"form-check-sign\"></span>\n                                        Gucci\n                                    </label>\n                                </div>\n                                <div class=\"form-check\">\n                                    <label class=\"form-check-label\">\n                                        <input class=\"form-check-input\" type=\"checkbox\">\n                                        <span class=\"form-check-sign\"></span>\n                                        Biglioli\n                                    </label>\n                                </div>\n                                <div class=\"form-check\">\n                                    <label class=\"form-check-label\">\n                                        <input class=\"form-check-input\" type=\"checkbox\">\n                                        <span class=\"form-check-sign\"></span>\n                                        Lanvin\n                                    </label>\n                                </div>\n                                <div class=\"form-check\">\n                                    <label class=\"form-check-label\">\n                                        <input class=\"form-check-input\" type=\"checkbox\">\n                                        <span class=\"form-check-sign\"></span>\n                                        Loro Piana\n                                    </label>\n                                </div>\n                                <div class=\"form-check\">\n                                    <label class=\"form-check-label\">\n                                        <input class=\"form-check-input\" type=\"checkbox\">\n                                        <span class=\"form-check-sign\"></span>\n                                        Massimo Alba\n                                    </label>\n                                </div>\n                              </ng-template>\n                          </ngb-panel>\n                          <ngb-panel>\n                              <ng-template ngbPanelTitle>\n                                <h6 class=\"mb-0\">\n                                    <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsefour\" aria-expanded=\"false\" aria-controls=\"collapsefour\">\n                                        Colour\n                                        <i class=\"now-ui-icons arrows-1_minimal-down\"></i>\n                                    </a>\n                                </h6>\n                              </ng-template>\n                              <ng-template ngbPanelContent>\n                                <div class=\"form-check\">\n                                    <label class=\"form-check-label\">\n                                        <input class=\"form-check-input\" type=\"checkbox\">\n                                        <span class=\"form-check-sign\"></span>\n                                        All\n                                    </label>\n                                </div>\n                                <div class=\"form-check\">\n                                    <label class=\"form-check-label\">\n                                        <input class=\"form-check-input\" type=\"checkbox\">\n                                        <span class=\"form-check-sign\"></span>\n                                        Black\n                                    </label>\n                                </div>\n                                <div class=\"form-check\">\n                                    <label class=\"form-check-label\">\n                                        <input class=\"form-check-input\" type=\"checkbox\">\n                                        <span class=\"form-check-sign\"></span>\n                                        Blue\n                                    </label>\n                                </div>\n                                <div class=\"form-check\">\n                                    <label class=\"form-check-label\">\n                                        <input class=\"form-check-input\" type=\"checkbox\">\n                                        <span class=\"form-check-sign\"></span>\n                                        Brown\n                                    </label>\n                                </div>\n                                <div class=\"form-check\">\n                                    <label class=\"form-check-label\">\n                                        <input class=\"form-check-input\" type=\"checkbox\">\n                                        <span class=\"form-check-sign\"></span>\n                                        Gray\n                                    </label>\n                                </div>\n                                <div class=\"form-check\">\n                                    <label class=\"form-check-label\">\n                                        <input class=\"form-check-input\" type=\"checkbox\">\n                                        <span class=\"form-check-sign\"></span>\n                                        Green\n                                    </label>\n                                </div>\n                                <div class=\"form-check\">\n                                    <label class=\"form-check-label\">\n                                        <input class=\"form-check-input\" type=\"checkbox\">\n                                        <span class=\"form-check-sign\"></span>\n                                        Neutrals\n                                    </label>\n                                </div>\n                                <div class=\"form-check\">\n                                    <label class=\"form-check-label\">\n                                        <input class=\"form-check-input\" type=\"checkbox\">\n                                        <span class=\"form-check-sign\"></span>\n                                        Purple\n                                    </label>\n                                </div>\n                              </ng-template>\n                          </ngb-panel>\n                      </ngb-accordion>\n                    </div>\n                    <div class=\"col-md-9\">\n                        <div class=\"row\">\n                            <div class=\"col-lg-4 col-md-6\">\n                                <div class=\"card card-product card-plain\">\n                                    <div class=\"card-image\">\n                                        <a href=\"#\">\n                                            <img src=\"assets/img/polo.jpg\" alt=\"...\" />\n                                        </a>\n                                    </div>\n                                    <div class=\"card-body\">\n                                        <a href=\"#\">\n                                            <h4 class=\"card-title\">Polo Ralph Lauren</h4>\n                                        </a>\n                                        <p class=\"card-description\">\n                                            Impeccably tailored in Italy from lightweight navy wool.\n                                        </p>\n                                        <div class=\"card-footer\">\n                                            <div class=\"price-container\">\n                                                <span class=\"price\"> &euro; 300</span>\n                                            </div>\n                                            <button class=\"btn btn-danger btn-neutral btn-icon btn-round pull-right\" placement=\"top\" ngbTooltip=\"Remove from wishlist\">\n                                                <i class=\"now-ui-icons ui-2_favourite-28\"></i>\n                                            </button>\n                                        </div>\n                                    </div>\n                                </div>\n                                <!-- end card -->\n                            </div>\n                            <div class=\"col-lg-4 col-md-6\">\n                                <div class=\"card card-product card-plain\">\n                                    <div class=\"card-image\">\n                                        <a href=\"#\">\n                                            <img src=\"assets/img/tom-ford.jpg\" alt=\"...\" />\n                                        </a>\n                                    </div>\n                                    <div class=\"card-body\">\n                                        <a href=\"#\">\n                                            <h4 class=\"card-title\">Tom Ford</h4>\n                                        </a>\n                                        <p class=\"card-description\">\n                                            Immaculate tailoring is TOM FORD's forte.\n                                        </p>\n                                        <div class=\"card-footer\">\n                                            <div class=\"price-container\">\n                                                <span class=\"price\"> &euro; 879</span>\n                                            </div>\n                                            <button class=\"btn btn-neutral btn-icon btn-round pull-right\"  placement=\"top\" ngbTooltip=\"Add to wishlist\">\n                                                <i class=\"now-ui-icons ui-2_favourite-28\"></i>\n                                            </button>\n                                        </div>\n                                    </div>\n                                </div>\n                                <!-- end card -->\n                            </div>\n                            <div class=\"col-lg-4 col-md-6\">\n                                <div class=\"card card-product card-plain\">\n                                    <div class=\"card-image\">\n                                        <a href=\"#\">\n                                            <img src=\"assets/img/wooyoungmi.jpg\" alt=\"...\" />\n                                        </a>\n                                    </div>\n                                    <div class=\"card-body\">\n                                        <a href=\"#\">\n                                            <h4 class=\"card-title\">Wooyoungmi</h4>\n                                        </a>\n                                        <p class=\"card-description\">\n                                            Dark-grey slub wool, pintucked notch lapels.\n                                        </p>\n                                        <div class=\"card-footer\">\n                                            <div class=\"price-container\">\n                                                <span class=\"price\">&euro; 555</span>\n                                            </div>\n                                            <button class=\"btn btn-neutral btn-icon btn-round pull-right\"  placement=\"top\" ngbTooltip=\"Add to wishlist\">\n                                                <i class=\"now-ui-icons ui-2_favourite-28\"></i>\n                                            </button>\n                                        </div>\n                                    </div>\n                                </div>\n                                <!-- end card -->\n                            </div>\n                            <div class=\"col-lg-4 col-md-6\">\n                                <div class=\"card card-product card-plain\">\n                                    <div class=\"card-image\">\n                                        <a href=\"#\">\n                                            <img src=\"assets/img/sweeney.jpg\" alt=\"...\" />\n                                        </a>\n                                    </div>\n                                    <div class=\"card-body\">\n                                        <a href=\"#\">\n                                            <h4 class=\"card-title\">Thom Sweeney</h4>\n                                        </a>\n                                        <p class=\"card-description\">\n                                            It's made from lightweight grey wool woven.\n                                        </p>\n                                        <div class=\"card-footer\">\n                                            <div class=\"price-container\">\n                                                <span class=\"price\"> &euro; 680</span>\n                                            </div>\n                                            <button class=\"btn btn-neutral btn-icon btn-round pull-right\" placement=\"top\" ngbTooltip=\"Add to wishlist\">\n                                                <i class=\"now-ui-icons ui-2_favourite-28\"></i>\n                                            </button>\n                                        </div>\n                                    </div>\n                                </div>\n                                <!-- end card -->\n                            </div>\n                            <div class=\"col-lg-4 col-md-6\">\n                                <div class=\"card card-product card-plain\">\n                                    <div class=\"card-image\">\n                                        <a href=\"#\">\n                                            <img src=\"assets/img/kingsman.jpg\" alt=\"...\" />\n                                        </a>\n                                    </div>\n                                    <div class=\"card-body\">\n                                        <a href=\"#\">\n                                            <h4 class=\"card-title\">Kingsman</h4>\n                                        </a>\n                                        <p class=\"card-description\">\n                                            Crafted from khaki cotton and fully canvassed.\n                                        </p>\n                                        <div class=\"card-footer\">\n                                            <div class=\"price-container\">\n                                                <span class=\"price\"> &euro; 725</span>\n                                            </div>\n                                            <button class=\"btn btn-neutral btn-icon btn-round pull-right\" placement=\"top\" ngbTooltip=\"Remove from wishlist\">\n                                                <i class=\"now-ui-icons ui-2_favourite-28\"></i>\n                                            </button>\n                                        </div>\n                                    </div>\n                                </div>\n                                <!-- end card -->\n                            </div>\n                            <div class=\"col-lg-4 col-md-6\">\n                                <div class=\"card card-product card-plain\">\n                                    <div class=\"card-image\">\n                                        <a href=\"#\">\n                                            <img src=\"assets/img/boglioli.jpg\" alt=\"...\" />\n                                        </a>\n                                    </div>\n                                    <div class=\"card-body\">\n                                        <a href=\"#\">\n                                            <h4 class=\"card-title\">Boglioli</h4>\n                                        </a>\n                                        <p class=\"card-description\">\n                                            Masterfully crafted in Northern Italy.\n                                        </p>\n                                        <div class=\"card-footer\">\n                                            <div class=\"price-container\">\n                                                <span class=\"price\">&euro; 699</span>\n                                            </div>\n                                            <button class=\"btn btn-neutral btn-icon btn-round pull-right\" placement=\"top\" ngbTooltip=\"Add to wishlist\">\n                                                <i class=\"now-ui-icons ui-2_favourite-28\"></i>\n                                            </button>\n                                        </div>\n                                    </div>\n                                </div>\n                                <!-- end card -->\n                            </div>\n                            <div class=\"col-md-3 ml-auto mr-auto\">\n                                <button class=\"btn btn-primary btn-round\">Load more...</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- section -->\n        <div class=\"container\">\n            <h2 class=\"section-title\">News in fashion</h2>\n        </div>\n        <div class=\"projects-4\">\n            <div class=\"container-fluid\">\n                <div class=\"row\">\n                    <div class=\"col-md-6 px-0\">\n                        <div class=\"card card-fashion card-background\" style=\"background-image: url('assets/img/bg35.jpg')\">\n                            <div class=\"card-body\">\n                                <div class=\"card-title text-left\">\n                                    <h2>\n                                        <a href=\"#\">\n                                            The New York Times Todd Snyder and Raf Simons Party During Men’s Fashion Week\n                                        </a>\n                                    </h2>\n                                </div>\n                                <div class=\"card-footer text-left\">\n                                    <div class=\"stats\">\n                                        <span>\n                                            <i class=\"now-ui-icons users_circle-08\"></i>Emy Grace\n                                        </span>\n                                        <span>\n                                            <i class=\"now-ui-icons tech_watch-time\"></i> June 6, 2017\n                                        </span>\n                                    </div>\n                                    <div class=\"stats-link pull-right\">\n                                        <a href=\"#\" class=\"footer-link\">Fashion Week</a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6 px-0\">\n                        <div class=\"card-container\">\n                            <div class=\"card card-fashion\">\n                                <div class=\"card-title\">\n                                    <a href=\"#\">\n                                    </a>\n                                    <h4>\n                                        <a href=\"#\">\n                                        </a>\n                                        <a href=\"#\">\n                                            Valentina Garavani Holds a Summer Lunch in Honor of Sofia Coppola...\n                                        </a>\n                                    </h4>\n                                </div>\n                                <div class=\"card-body\">\n                                    <div class=\"card-footer text-left\">\n                                        <div class=\"stats\">\n                                            <span>\n                                                <i class=\"now-ui-icons users_circle-08\"></i>Jerry McGregor\n                                            </span>\n                                            <span>\n                                                <i class=\"now-ui-icons tech_watch-time\"></i> June 10, 2017\n                                            </span>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"card card-fashion card-background\" style=\"background-image: url('assets/img/bg40.jpg')\">\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"section\">\n            <div class=\"container\">\n                <h2 class=\"section-title\">Latest Offers</h2>\n                <div class=\"row\">\n                    <div class=\"col-md-4\">\n                        <div class=\"card card-product card-plain\">\n                            <div class=\"card-image\">\n                                <img class=\"img rounded\" src=\"assets/img/saint-laurent1.jpg\" />\n                            </div>\n                            <div class=\"card-body\">\n                                <h4 class=\"card-title\">\n                                    <a href=\"#\">Saint Laurent</a>\n                                </h4>\n                                <p class=\"card-description\">The structured shoulders and sleek detailing ensure a sharp silhouette. Team it with a silk pocket square and leather loafers.</p>\n                                <div class=\"card-footer\">\n                                    <div class=\"price-container\">\n                                        <span class=\"price price-old\"> &euro;1,430</span>\n                                        <span class=\"price price-new\"> &euro;743</span>\n                                    </div>\n                                    <div class=\"stats stats-right\">\n                                        <button type=\"button\" placement=\"top\" ngbTooltip=\"\" class=\"btn btn-icon btn-neutral\" data-original-title=\"Saved to Wishlist\">\n                                            <i class=\"now-ui-icons ui-2_favourite-28\"></i>\n                                        </button>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <div class=\"card card-product card-plain\">\n                            <div class=\"card-image\">\n                                <img class=\"img rounded\" src=\"assets/img/saint-laurent.jpg\" />\n                            </div>\n                            <div class=\"card-body\">\n                                <h4 class=\"card-title\">\n                                    <h4 class=\"card-title\">Saint Laurent</h4>\n                                </h4>\n                                <p class=\"card-description\">The structured shoulders and sleek detailing ensure a sharp silhouette. Team it with a silk pocket square and leather loafers.</p>\n                                <div class=\"card-footer\">\n                                    <div class=\"price-container\">\n                                        <span class=\"price price-old\"> &euro;1,430</span>\n                                        <span class=\"price price-new\">&euro;743</span>\n                                    </div>\n                                    <div class=\"stats stats-right\">\n                                        <button type=\"button\" placement=\"top\" ngbTooltip=\"\" class=\"btn btn-icon btn-neutral\" data-original-title=\"Saved to Wishlist\">\n                                            <i class=\"now-ui-icons ui-2_favourite-28\"></i>\n                                        </button>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <div class=\"card card-product card-plain\">\n                            <div class=\"card-image\">\n                                <img class=\"img rounded\" src=\"assets/img/gucci.jpg\" />\n                            </div>\n                            <div class=\"card-body\">\n                                <h4 class=\"card-title\">\n                                    <h4 class=\"card-title\">Gucci</h4>\n                                </h4>\n                                <p class=\"card-description\">The smooth woven-wool is water resistant to ensure you stay pristine after a long-haul flight. Cut in a trim yet comfortable regular fit.</p>\n                                <div class=\"card-footer\">\n                                    <div class=\"price-container\">\n                                        <span class=\"price price-old\"> &euro;2,430</span>\n                                        <span class=\"price price-new\">&euro;890</span>\n                                    </div>\n                                    <div class=\"stats stats-right\">\n                                        <button type=\"button\" placement=\"top\" ngbTooltip=\"\" class=\"btn btn-icon btn-neutral btn-default\" data-original-title=\"Add to Wishlist\">\n                                            <i class=\"now-ui-icons ui-2_favourite-28\"></i>\n                                        </button>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- section -->\n        <div class=\"subscribe-line subscribe-line-image\" style=\"background-image: url('assets/img/bg43.jpg');\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-6 ml-auto mr-auto\">\n                        <div class=\"text-center\">\n                            <h4 class=\"title\">Subscribe to our Newsletter</h4>\n                            <p class=\"description\">\n                                Join our newsletter and get news in your inbox every week! We hate spam too, so no worries about this.\n                            </p>\n                        </div>\n                        <div class=\"card card-raised card-form-horizontal\">\n                            <div class=\"card-body\">\n                                <form method=\"\" action=\"\">\n                                    <div class=\"row\">\n                                        <div class=\"col-sm-8\">\n                                            <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                                              <div class=\"input-group-prepend\">\n                                                  <span class=\"input-group-text\">  <i class=\"now-ui-icons ui-1_email-85\"></i></span>\n                                              </div>\n                                                <input type=\"email\" class=\"form-control\" placeholder=\"Your Email...\" (focus)=\"focus=true\" (blur)=\"focus=false\">\n                                            </div>\n                                        </div>\n                                        <div class=\"col-sm-4\">\n                                            <button type=\"button\" class=\"btn btn-primary btn-block\">Subscribe</button>\n                                        </div>\n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- end-main-raised -->\n    <footer class=\"footer \">\n        <div class=\"container\">\n            <nav>\n                <ul>\n                    <li>\n                        <a href=\"https://www.josh-levy.com\">\n                            Josh Levy\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"https://www.josh-levy.com/about-us\">\n                            About Us\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"http://blog.josh-levy.com\">\n                            Blog\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"https://www.josh-levy.com/license\">\n                            License\n                        </a>\n                    </li>\n                </ul>\n            </nav>\n            <div class=\"copyright\">\n                &copy;\n                {{data | date: 'yyyy'}}, Designed by\n                <a href=\"https://www.invisionapp.com\" target=\"_blank\">Invision</a>. Coded by\n                <a href=\"https://www.josh-levy.com\" target=\"_blank\">Josh Levy</a>.\n            </div>\n        </div>\n    </footer>\n</div>\n";
      /***/
    },

    /***/
    "lOiq":
    /*!***********************************************************!*\
      !*** ./src/app/examples/register/register.component.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function lOiq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "lznb":
    /*!***************************************************!*\
      !*** ./src/app/examples/login/login.component.ts ***!
      \***************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function lznb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./login.component.html */
      "5QX9");
      /* harmony import */


      var _login_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./login.component.scss */
      "T9Od");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent() {
          _classCallCheck(this, LoginComponent);

          this.data = new Date();
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var body = document.getElementsByTagName('body')[0];
            body.classList.add('login-page');
            var navbar = document.getElementsByTagName('nav')[0];
            navbar.classList.add('navbar-transparent');
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var body = document.getElementsByTagName('body')[0];
            body.classList.remove('login-page');
            var navbar = document.getElementsByTagName('nav')[0];
            navbar.classList.remove('navbar-transparent');
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ctorParameters = function () {
        return [];
      };

      LoginComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_login_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [])], LoginComponent);
      /***/
    },

    /***/
    "mub7":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sections/features/features.component.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function mub7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"cd-section\" id=\"features\">\n    <!--     *********     FEATURES 1      *********      -->\n    <div class=\"features-1\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 ml-auto mr-auto\">\n                    <h2 class=\"title\">Full-Funnel Social Analytics</h2>\n                    <h4 class=\"description\">Insight to help you create, connect, and convert. Understand Your Audience's Interests, Influence, Interactions, and Intent. Discover emerging topics and influencers to reach new audiences.</h4>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <div class=\"info info-hover\">\n                        <div class=\"icon icon-primary\">\n                            <i class=\"now-ui-icons ui-2_chat-round\"></i>\n                        </div>\n                        <h4 class=\"info-title\">Social Conversations</h4>\n                        <p class=\"description\">Gain access to the demographics, psychographics, and location of unique people.</p>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"info info-hover\">\n                        <div class=\"icon icon-success\">\n                            <i class=\"now-ui-icons business_chart-pie-36\"></i>\n                        </div>\n                        <h4 class=\"info-title\">Analyze Performance</h4>\n                        <p class=\"description\">Unify data from Facebook, Instagram, Twitter, LinkedIn, and Youtube to gain rich insights.</p>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"info info-hover\">\n                        <div class=\"icon icon-warning\">\n                            <i class=\"now-ui-icons design-2_ruler-pencil\"></i>\n                        </div>\n                        <h4 class=\"info-title\">Measure Conversions</h4>\n                        <p class=\"description\">Track actions taken on your website, understand the impact on your bottom line.</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END FEATURES 1      *********      -->\n    <!--     *********     FEATURES 2      *********      -->\n    <div class=\"features-2 section-image\" style=\"background-image: url('assets/img/bg22.jpg')\">\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-md-8 mr-auto ml-auto\">\n                    <h2 class=\"title\">Trello lets you work more.</h2>\n                    <h4 class=\"description\">Trello’s boards, lists, and cards enable you to organize and prioritize your projects in a fun, flexible and rewarding way.</h4>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <div class=\"info\">\n                        <div class=\"icon icon-primary icon-circle\">\n                            <i class=\"now-ui-icons users_single-02\"></i>\n                        </div>\n                        <h4 class=\"info-title\">Work With Any Team</h4>\n                        <p class=\"description\">Whether it’s for work or even the next family vacation, Trello helps your team.</p>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"info\">\n                        <div class=\"icon icon-danger icon-circle\">\n                            <i class=\"now-ui-icons business_chart-bar-32\"></i>\n                        </div>\n                        <h4 class=\"info-title\">A Productivity Platform</h4>\n                        <p class=\"description\">Integrate the apps your team already uses directly into your workflow.</p>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"info\">\n                        <div class=\"icon icon-warning icon-circle\">\n                            <i class=\"now-ui-icons arrows-1_refresh-69\"></i>\n                        </div>\n                        <h4 class=\"info-title\">Always In Sync</h4>\n                        <p class=\"description\">No matter where you are, Trello stays in sync across all of your devices.</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END FEATURES 2      *********      -->\n    <!--     *********     FEATURES 3      *********      -->\n    <div class=\"features-3\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 ml-auto mr-auto\">\n                    <h2 class=\"title\">Simpler. Smarter. Faster.</h2>\n                    <h4 class=\"description\">The CloudCheckr Cloud Management Platform (CMP) provides full visibility and control to reduce costs, improve cybersecurity posture, and automate critical tasks.</h4>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <div class=\"info info-hover\">\n                        <div class=\"icon icon-success icon-circle\">\n                            <i class=\"now-ui-icons objects_globe\"></i>\n                        </div>\n                        <h4 class=\"info-title\">Asset Management</h4>\n                        <p class=\"description\">Cross-account dashboards provide sophisticated reporting for enterprise.</p>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"info info-hover\">\n                        <div class=\"icon icon-info icon-circle\">\n                            <i class=\"now-ui-icons education_atom\"></i>\n                        </div>\n                        <h4 class=\"info-title\">Resource Utilization</h4>\n                        <p class=\"description\">CloudCheckr provides summary and detailed usage statistics for resources.</p>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"info info-hover\">\n                        <div class=\"icon icon-primary icon-circle\">\n                            <i class=\"now-ui-icons tech_watch-time\"></i>\n                        </div>\n                        <h4 class=\"info-title\">Self-Healing</h4>\n                        <p class=\"description\">CloudCheckr enables users to save money, time, and effort.</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END FEATURES 3      *********      -->\n    <!--     *********     FEATURES 4      *********      -->\n    <div class=\"features-4\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                    <h2 class=\"title\">Coming home, a pleasure!</h2>\n                    <h4 class=\"description\">Havenly is a convenient, personal and affordable way to redecorate your home room by room. Collaborate with our professional interior designers on our online platform. </h4>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <div class=\"card card-background card-raised\" data-background-color style=\"background-image: url('assets/img/bg24.jpg')\">\n                        <div class=\"info\">\n                            <div class=\"icon icon-white\">\n                                <i class=\"now-ui-icons business_bulb-63\"></i>\n                            </div>\n                            <div class=\"description\">\n                                <h4 class=\"info-title\">Collaborate on ideas</h4>\n                                <p>Your designer will come back to you with an initial set of ideas.</p>\n                                <a href=\"#\" class=\"ml-3\">Find more...</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"card card-background card-raised\" data-background-color style=\"background-image: url('assets/img/bg23.jpg')\">\n                        <div class=\"info\">\n                            <div class=\"icon icon-white\">\n                                <i class=\"now-ui-icons business_badge\"></i>\n                            </div>\n                            <div class=\"description\">\n                                <h4 class=\"info-title\">Pick your designer</h4>\n                                <p>Havenly interior designers are vetted professionals and real people.</p>\n                                <a href=\"#\">Find more...</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"card card-background card-raised\" data-background-color style=\"background-image: url('assets/img/bg25.jpg')\">\n                        <div class=\"info\">\n                            <div class=\"icon icon-white\">\n                                <i class=\"now-ui-icons location_map-big\"></i>\n                            </div>\n                            <div class=\"description\">\n                                <h4 class=\"info-title\">Visualize your room</h4>\n                                <p>Share a floor plan, and we'll create a visualization of your room.</p>\n                                <a href=\"#\" class=\"ml-3\">Find more...</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END FEATURES 4      *********      -->\n    <!--     *********     FEATURES 5      *********      -->\n    <div class=\"features-5\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-5\">\n                    <h2 class=\"title\">Working is a pleasure</h2>\n                    <div class=\"info info-horizontal\">\n                        <div class=\"icon icon-primary icon-circle\">\n                            <i class=\"now-ui-icons location_world\"></i>\n                        </div>\n                        <div class=\"description\">\n                            <h4 class=\"info-title\">Hundreds of Components</h4>\n                            <p>The moment you use Now UI Kit, you know you’ve never felt anything like it. With a single use lets you do more than ever before. </p>\n                        </div>\n                    </div>\n                    <div class=\"info info-horizontal\">\n                        <div class=\"icon icon-primary icon-circle\">\n                            <i class=\"now-ui-icons sport_user-run\"></i>\n                        </div>\n                        <div class=\"description\">\n                            <h4 class=\"info-title\">Easy to Use</h4>\n                            <p>Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature.</p>\n                        </div>\n                    </div>\n                    <div class=\"info info-horizontal\">\n                        <div class=\"icon icon-primary icon-circle\">\n                            <i class=\"now-ui-icons ui-2_time-alarm\"></i>\n                        </div>\n                        <div class=\"description\">\n                            <h4 class=\"info-title\">Fast Prototyping</h4>\n                            <p>Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature.</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-7\">\n                    <div class=\"tablet-container\">\n                        <img src=\"assets/img/ipad2-inverted.png\" />\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END FEATURES 5      *********      -->\n    <!--     *********     FEATURES 6      *********      -->\n    <div class=\"features-6\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                    <h2 class=\"title\">Working is a pleasure</h2>\n                    <h4 class=\"description\">This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information.</h4>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <div class=\"info info-horizontal\">\n                        <div class=\"icon icon-info\">\n                            <i class=\"now-ui-icons design-2_html5\"></i>\n                        </div>\n                        <div class=\"description\">\n                            <h5 class=\"info-title\">For Developers</h5>\n                            <p>The moment you use Now UI Kit, you know you’ve never felt anything like it. With a single use, this powerfull UI Kit lets you do more than ever before. </p>\n                        </div>\n                    </div>\n                    <div class=\"info info-horizontal\">\n                        <div class=\"icon icon-danger\">\n                            <i class=\"now-ui-icons design_palette\"></i>\n                        </div>\n                        <div class=\"description\">\n                            <h4 class=\"info-title\">For Designers</h4>\n                            <p>Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"phone-container\">\n                        <img src=\"assets/img/iphone2.png\" />\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"info info-horizontal\">\n                        <div class=\"icon icon-primary\">\n                            <i class=\"now-ui-icons design-2_ruler-pencil\"></i>\n                        </div>\n                        <div class=\"description\">\n                            <h5 class=\"info-title\">Bootstrap Grid</h5>\n                            <p>Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.</p>\n                        </div>\n                    </div>\n                    <div class=\"info info-horizontal\">\n                        <div class=\"icon icon-success\">\n                            <i class=\"now-ui-icons files_single-copy-04\"></i>\n                        </div>\n                        <div class=\"description\">\n                            <h4 class=\"info-title\">Example Pages Included</h4>\n                            <p>Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END FEATURES 6      *********      -->\n    <!--     *********     FEATURES 7      *********      -->\n    <div class=\"features-7 section-image\" style=\"background-image: url('assets/img/bg11.jpg')\">\n        <div class=\"col-md-8 mr-auto ml-auto text-center\">\n            <h2 class=\"title\">Working is a pleasure</h2>\n            <h4 class=\"description\">This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information.</h4>\n        </div>\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-md-6 px-0\">\n                    <div class=\"col-sm-12\">\n                        <div class=\"info info-horizontal\">\n                            <div class=\"icon\">\n                                <i class=\"now-ui-icons design-2_html5\"></i>\n                            </div>\n                            <div class=\"description\">\n                                <h5 class=\"info-title\">For Developers</h5>\n                                <p class=\"description\">The moment you use Now UI Kit, you know you’ve never felt anything like it. With a single use, this powerfull UI Kit lets you do more than ever before. </p>\n                            </div>\n                        </div>\n                        <div class=\"info info-horizontal\">\n                            <div class=\"icon\">\n                                <i class=\"now-ui-icons design_palette\"></i>\n                            </div>\n                            <div class=\"description\">\n                                <h5 class=\"info-title\">For Designers</h5>\n                                <p class=\"description\">The moment you use Now UI Kit, you know you’ve never felt anything like it. With a single use, this powerfull UI Kit lets you do more than ever before. </p>\n                            </div>\n                        </div>\n                        <div class=\"info info-horizontal\">\n                            <div class=\"icon\">\n                                <i class=\"now-ui-icons design-2_ruler-pencil\"></i>\n                            </div>\n                            <div class=\"description\">\n                                <h5 class=\"info-title\">For Artists</h5>\n                                <p class=\"description\">The moment you use Now UI Kit, you know you’ve never felt anything like it. With a single use, this powerfull UI Kit lets you do more than ever before. </p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"image-container\">\n                        <img src=\"assets/img/ipad3.png\" alt=\"\">\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END FEATURES 7      *********      -->\n    <!--     *********     FEATURES 8      *********      -->\n    <div class=\"features-8 section-image\" style=\"background-image: url('assets/img/bg30.jpg')\">\n        <div class=\"col-md-8 ml-auto mr-auto text-center\">\n            <h2 class=\"title\">Working is a pleasure</h2>\n            <h4 class=\"description\">Woodpecker.co is a follow-up automation SaaS founded in 2015. We’re an international team of 17, speaking 4 languages. Our mission is to enable all B2B companies to connect with their Ideal Customers.</h4>\n        </div>\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-3\">\n                    <div class=\"card\">\n                        <div class=\"card-image\">\n                            <img src=\"assets/img/bg28.jpg\" class=\"rounded\" alt=\"\">\n                        </div>\n                        <div class=\"info text-center\">\n                            <div class=\"icon\">\n                                <i class=\"now-ui-icons ui-1_email-85\"></i>\n                            </div>\n                            <h4 class=\"info-title\">Reply detection</h4>\n                            <p class=\"description\">If you get a reply, further follow-ups are automatically stopped.</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"card\">\n                        <div class=\"card-image\">\n                            <img src=\"assets/img/bg26.jpg\" class=\"rounded\" alt=\"\">\n                        </div>\n                        <div class=\"info text-center\">\n                            <div class=\"icon\">\n                                <i class=\"now-ui-icons ui-1_calendar-60\"></i>\n                            </div>\n                            <h4 class=\"info-title\">Follow-up</h4>\n                            <p class=\"description\">Just set a number of days that you want send a follow-up. </p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"card\">\n                        <div class=\"card-image\">\n                            <img src=\"assets/img/bg27.jpg\" class=\"rounded\" alt=\"\">\n                        </div>\n                        <div class=\"info text-center\">\n                            <div class=\"icon\">\n                                <i class=\"now-ui-icons ui-1_send\"></i>\n                            </div>\n                            <h4 class=\"info-title\">Cold email</h4>\n                            <p class=\"description\">Unlimited number of prospects daily with personalized emails.</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"card\">\n                        <div class=\"card-image\">\n                            <img src=\"assets/img/bg29.jpg\" class=\"rounded\" alt=\"\">\n                        </div>\n                        <div class=\"info text-center\">\n                            <div class=\"icon\">\n                                <i class=\"now-ui-icons ui-2_like\"></i>\n                            </div>\n                            <h4 class=\"info-title\">Teamwork</h4>\n                            <p class=\"description\">You and your teammates won’t address the same person twice. </p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END FEATURES 8      *********      -->\n</div>\n";
      /***/
    },

    /***/
    "mvyS":
    /*!***************************************************************!*\
      !*** ./src/app/components/navigation/navigation.component.ts ***!
      \***************************************************************/

    /*! exports provided: NavigationComponent */

    /***/
    function mvyS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () {
        return NavigationComponent;
      });
      /* harmony import */


      var _raw_loader_navigation_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./navigation.component.html */
      "7pPp");
      /* harmony import */


      var _navigation_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./navigation.component.scss */
      "r7bM");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var NavigationComponent = /*#__PURE__*/function () {
        function NavigationComponent() {
          _classCallCheck(this, NavigationComponent);
        }

        _createClass(NavigationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NavigationComponent;
      }();

      NavigationComponent.ctorParameters = function () {
        return [];
      };

      NavigationComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-navigation',
        template: _raw_loader_navigation_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_navigation_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [])], NavigationComponent);
      /***/
    },

    /***/
    "nRjQ":
    /*!*******************************************************!*\
      !*** ./src/app/sections/headers/headers.component.ts ***!
      \*******************************************************/

    /*! exports provided: HeadersComponent */

    /***/
    function nRjQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeadersComponent", function () {
        return HeadersComponent;
      });
      /* harmony import */


      var _raw_loader_headers_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./headers.component.html */
      "q6Lt");
      /* harmony import */


      var _headers_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./headers.component.scss */
      "0n/F");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var HeadersComponent = /*#__PURE__*/function () {
        function HeadersComponent() {
          _classCallCheck(this, HeadersComponent);

          this.icon_video_button_class = 'fa-play';
          this.text_video_button = 'Play Video';
        }

        _createClass(HeadersComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {//   $('[data-toggle="video"]').click(function(){
            //       id_video = $(this).data('video');
            //       video = $('#' + id_video).get(0);
            //
            //       parent = $(this).parent('div').parent('div');
            //
            //       if(video.paused){
            //           video.play();
            //           $(this).html('<i class="fa fa-pause"></i> Pause Video');
            //           parent.addClass('state-play');
            //       } else {
            //           video.pause();
            //           $(this).html('<i class="fa fa-play"></i> Play Video');
            //           parent.removeClass('state-play');
            //       }
            //   });
          }
        }, {
          key: "playBackgroundVideo",
          value: function playBackgroundVideo(event) {
            var id_video = document.getElementById('video-source');
            var parent = event.target.parentElement.parentElement;

            if (id_video.paused) {
              id_video.play();
              this.text_video_button = 'Pause Video';
              this.icon_video_button_class = 'fa-pause';
            } else {
              id_video.pause();
              this.text_video_button = 'Play Video';
              this.icon_video_button_class = 'fa-play';
            }
          }
        }]);

        return HeadersComponent;
      }();

      HeadersComponent.ctorParameters = function () {
        return [];
      };

      HeadersComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-headers',
        template: _raw_loader_headers_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_headers_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [])], HeadersComponent);
      /***/
    },

    /***/
    "nYku":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/examples/aboutus/aboutus.component.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function nYku(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<div class=\"wrapper\">\n    <div class=\"page-header page-header-small\">\n        <div class=\"page-header-image rellax-header\" data-rellax-speed=\"-8\" style=\"background-image: url('assets/img/bg32.jpg');\">\n        </div>\n        <div class=\"content-center\">\n            <div class=\"row\">\n                <div class=\"col-md-8 ml-auto mr-auto\">\n                    <h1 class=\"title\">About Us</h1>\n                    <h4>Meet the amazing team behind this project and find out more about how we work.</h4>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"section\">\n        <div class=\"about-description text-center\">\n            <div class=\"features-3\">\n                <div class=\"container\">\n                    <div class=\"row\">\n                        <div class=\"col-md-8 mr-auto ml-auto\">\n                            <h2 class=\"title\">Simpler. Smarter. Faster.</h2>\n                            <h4 class=\"description\">The CloudCheckr Cloud Management Platform (CMP) provides full visibility and control to reduce costs, improve cybersecurity posture, and automate critical tasks.</h4>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-4\">\n                            <div class=\"info info-hover\">\n                                <div class=\"icon icon-success icon-circle\">\n                                    <i class=\"now-ui-icons objects_globe\"></i>\n                                </div>\n                                <h4 class=\"info-title\">Asset Management</h4>\n                                <p class=\"description\">Cross-account dashboards provide sophisticated reporting for enterprise.</p>\n                            </div>\n                        </div>\n                        <div class=\"col-md-4\">\n                            <div class=\"info info-hover\">\n                                <div class=\"icon icon-info icon-circle\">\n                                    <i class=\"now-ui-icons education_atom\"></i>\n                                </div>\n                                <h4 class=\"info-title\">Resource Utilization</h4>\n                                <p class=\"description\">CloudCheckr provides summary and detailed usage statistics for resources.</p>\n                            </div>\n                        </div>\n                        <div class=\"col-md-4\">\n                            <div class=\"info info-hover\">\n                                <div class=\"icon icon-primary icon-circle\">\n                                    <i class=\"now-ui-icons tech_watch-time\"></i>\n                                </div>\n                                <h4 class=\"info-title\">Self-Healing</h4>\n                                <p class=\"description\">CloudCheckr enables users to save money, time, and effort.</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"separator-line separator-primary\"></div>\n        <div class=\"projects-5\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                        <h2 class=\"title\">We have many advantages</h2>\n                        <h4 class=\"description\">This is the paragraph where you can write more details about your projects. Keep you user engaged by providing meaningful information.</h4>\n                        <div class=\"section-space\"></div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-5 ml-auto\">\n                        <div class=\"card card-background card-background-product card-raised\" style=\"background-image: url('assets/img/project8.jpg')\">\n                            <div class=\"card-body\">\n                                <h2 class=\"card-title\">Social Analytics</h2>\n                                <p class=\"card-description\">\n                                    Insight to help you create, connect, and convert. Understand Your Audience's Interests, Influence, Interactions, and Intent. Discover emerging topics and influencers to reach new audiences.\n                                </p>\n                                <label class=\"badge badge-neutral\">Analytics</label>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-5 mr-auto\">\n                        <div class=\"info info-horizontal\">\n                            <div class=\"icon icon-danger\">\n                                <i class=\"now-ui-icons ui-2_chat-round\"></i>\n                            </div>\n                            <div class=\"description\">\n                                <h4 class=\"info-title\">Listen to Social Conversations</h4>\n                                <p class=\"description\">\n                                    Gain access to the demographics, psychographics, and location of unique people who talk about your brand.\n                                </p>\n                            </div>\n                        </div>\n                        <div class=\"info info-horizontal\">\n                            <div class=\"icon icon-danger\">\n                                <i class=\"now-ui-icons business_chart-pie-36\"></i>\n                            </div>\n                            <div class=\"description\">\n                                <h4 class=\"info-title\">Performance Analyze</h4>\n                                <p class=\"description\">\n                                    Unify data from Facebook, Instagram, Twitter, LinkedIn, and Youtube to gain rich insights from easy-to-use reports.\n                                </p>\n                            </div>\n                        </div>\n                        <div class=\"info info-horizontal\">\n                            <div class=\"icon icon-danger\">\n                                <i class=\"now-ui-icons design-2_ruler-pencil\"></i>\n                            </div>\n                            <div class=\"description\">\n                                <h4 class=\"info-title\">Social Conversions</h4>\n                                <p class=\"description\">\n                                    Track actions taken on your website that originated from social, and understand the impact on your bottom line.\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <hr />\n                <div class=\"row\">\n                    <div class=\"col-md-5 ml-auto mt-5\">\n                        <div class=\"info info-horizontal\">\n                            <div class=\"icon icon-warning\">\n                                <i class=\"now-ui-icons users_single-02\"></i>\n                            </div>\n                            <div class=\"description\">\n                                <h4 class=\"info-title\">Work With Any Team</h4>\n                                <p class=\"description\">\n                                    Whether it’s for work or even the next family vacation, Trello helps your team.\n                                </p>\n                            </div>\n                        </div>\n                        <div class=\"info info-horizontal\">\n                            <div class=\"icon icon-warning\">\n                                <i class=\"now-ui-icons business_chart-bar-32\"></i>\n                            </div>\n                            <div class=\"description\">\n                                <h4 class=\"info-title\">A Productivity Platform</h4>\n                                <p class=\"description\">\n                                    Integrate the apps your team already uses directly into your workflow.\n                                </p>\n                            </div>\n                        </div>\n                        <div class=\"info info-horizontal\">\n                            <div class=\"icon icon-warning\">\n                                <i class=\"now-ui-icons arrows-1_refresh-69\"></i>\n                            </div>\n                            <div class=\"description\">\n                                <h4 class=\"info-title\">Always In Sync</h4>\n                                <p class=\"description\">\n                                    No matter where you are, Trello stays in sync across all of your devices.\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-5 mr-auto\">\n                        <div class=\"card card-background card-background-product card-raised\" style=\"background-image: url('assets/img/project9.jpg')\">\n                            <div class=\"card-body\">\n                                <h2 class=\"card-title\">Trello lets you work.</h2>\n                                <p class=\"card-description text-white\">\n                                    Trello’s boards, lists, and cards enable you to organize and prioritize your projects in a fun, flexible and rewarding way.\n                                </p>\n                                <label class=\"badge badge-neutral\">Trello</label>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"about-team team-4\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                        <h2 class=\"title\">We are nerd rockstars</h2>\n                        <h4 class=\"description\">This is the paragraph where you can write more details about your team. Keep you user engaged by providing meaningful information.</h4>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-xl-6 col-lg-7 ml-auto mr-auto\">\n                        <div class=\"card card-profile card-plain\">\n                            <div class=\"row\">\n                                <div class=\"col-md-5\">\n                                    <div class=\"card-image\">\n                                        <a href=\"#\">\n                                            <img class=\"img img-raised rounded\" src=\"assets/img/olivia.jpg\" />\n                                        </a>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-7\">\n                                    <div class=\"card-body\">\n                                        <h4 class=\"card-title\">Ella Evelyn</h4>\n                                        <h6 class=\"category\">Air Crew Member</h6>\n                                        <p class=\"card-description\">\n                                            Think in the morning. Act in the noon. Eat in the evening. Sleep in the night......\n                                        </p>\n                                        <div class=\"card-footer\">\n                                            <a href=\"#\" class=\"btn btn-icon btn-neutral btn-twitter\"><i class=\"fa fa-twitter\"></i></a>\n                                            <a href=\"#\" class=\"btn btn-icon btn-neutral btn-facebook\"><i class=\"fa fa-facebook-square\"></i></a>\n                                            <a href=\"#\" class=\"btn btn-icon btn-neutral btn-google\"><i class=\"fa fa-google\"></i></a>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-xl-6 col-lg-7 ml-auto mr-auto\">\n                        <div class=\"card card-profile card-plain\">\n                            <div class=\"row\">\n                                <div class=\"col-md-5\">\n                                    <div class=\"card-image\">\n                                        <a href=\"#\">\n                                            <img class=\"img img-raised rounded\" src=\"assets/img/emily.jpg\" />\n                                        </a>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-7\">\n                                    <div class=\"card-body\">\n                                        <h4 class=\"card-title\">Mila Skylar</h4>\n                                        <h6 class=\"category\">Architect</h6>\n                                        <p class=\"card-description\">\n                                            Love cures people - both the ones who give it and the ones who receive it...\n                                        </p>\n                                        <div class=\"card-footer\">\n                                            <a href=\"#\" class=\"btn btn-icon btn-neutral btn-linkedin\"><i class=\"fa fa-linkedin\"></i></a>\n                                            <a href=\"#\" class=\"btn btn-icon btn-neutral btn-facebook\"><i class=\"fa fa-facebook-square\"></i></a>\n                                            <a href=\"#\" class=\"btn btn-icon btn-neutral btn-dribbble\"><i class=\"fa fa-dribbble\"></i></a>\n                                            <a href=\"#\" class=\"btn btn-icon btn-neutral btn-google\"><i class=\"fa fa-google\"></i></a>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-xl-6 col-lg-7 ml-auto mr-auto\">\n                        <div class=\"card card-profile card-plain\">\n                            <div class=\"row\">\n                                <div class=\"col-md-5\">\n                                    <div class=\"card-image\">\n                                        <a href=\"#\">\n                                            <img class=\"img img-raised rounded\" src=\"assets/img/james.jpg\" />\n                                        </a>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-7\">\n                                    <div class=\"card-body\">\n                                        <h4 class=\"card-title\">Daniel Carter</h4>\n                                        <h6 class=\"category\">Aviation Inspector</h6>\n                                        <p class=\"card-description\">\n                                            Keep your face always toward the sunshine - and shadows will fall behind you...\n                                        </p>\n                                        <div class=\"card-footer\">\n                                            <a href=\"#\" class=\"btn btn-icon btn-neutral btn-youtube\"><i class=\"fa fa-youtube-play\"></i></a>\n                                            <a href=\"#\" class=\"btn btn-icon btn-neutral btn-twitter\"><i class=\"fa fa-twitter\"></i></a>\n                                            <a href=\"#\" class=\"btn btn-icon btn-neutral btn-instagram\"><i class=\"fa fa-instagram\"></i></a>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-xl-6 col-lg-7 ml-auto mr-auto\">\n                        <div class=\"card card-profile card-plain\">\n                            <div class=\"row\">\n                                <div class=\"col-md-5\">\n                                    <div class=\"card-image\">\n                                        <a href=\"#\">\n                                            <img class=\"img img-raised rounded\" src=\"assets/img/michael.jpg\" />\n                                        </a>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-7\">\n                                    <div class=\"card-body\">\n                                        <h4 class=\"card-title\">Dylan Wyatt</h4>\n                                        <h6 class=\"category\">Conservation Scientist</h6>\n                                        <p class=\"card-description\">\n                                            There is only one corner of the universe you can be certain of improving, and that's your own self...\n                                        </p>\n                                        <div class=\"card-footer\">\n                                            <a href=\"#\" class=\"btn btn-icon btn-neutral btn-linkedin\"><i class=\"fa fa-linkedin\"></i></a>\n                                            <a href=\"#\" class=\"btn btn-icon btn-neutral btn-facebook\"><i class=\"fa fa-facebook-square\"></i></a>\n                                            <a href=\"#\" class=\"btn btn-icon btn-neutral btn-google\"><i class=\"fa fa-google\"></i></a>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"about-office\">\n            <div class=\"container\">\n                <div class=\"row text-center\">\n                    <div class=\"col-md-8 ml-auto mr-auto\">\n                        <h2 class=\"title\">Our office is our second home</h2>\n                        <h4 class=\"description\">Here are some pictures from our office. You can see the place looks like a palace and is fully equiped with everything you need to get the job done.</h4>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-4\">\n                        <img class=\"rounded img-raised\" alt=\"Raised Image\" src=\"assets/img/bg27.jpg\">\n                    </div>\n                    <div class=\"col-md-4\">\n                        <img class=\"rounded img-raised\" alt=\"Raised Image\" src=\"assets/img/bg24.jpg\">\n                    </div>\n                    <div class=\"col-md-4\">\n                        <img class=\"rounded img-raised\" alt=\"Raised Image\" src=\"assets/img/bg28.jpg\">\n                    </div>\n                    <div class=\"col-md-6\">\n                        <img class=\"rounded img-raised\" alt=\"Raised Image\" src=\"assets/img/project6.jpg\">\n                    </div>\n                    <div class=\"col-md-6\">\n                        <img class=\"rounded img-raised\" alt=\"Raised Image\" src=\"assets/img/project14.jpg\">\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"about-contact\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-8 mr-auto ml-auto\">\n                        <h2 class=\"text-center title\">Want to work with us?</h2>\n                        <h4 class=\"text-center description\">Divide details about your product or agency work into parts. Write a few lines about each one and contact us about any further collaboration. We will get back to you in a couple of hours.</h4>\n                        <form class=\"contact-form\">\n                            <div class=\"row\">\n                                <div class=\"col-md-4\">\n                                    <label>First name</label>\n                                    <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                                      <div class=\"input-group-prepend\">\n                                          <span class=\"input-group-text\"><i class=\"now-ui-icons users_circle-08\"></i></span>\n                                      </div>\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"First Name...\" (focus)=\"focus=true\" (blur)=\"focus=false\">\n                                    </div>\n                                </div>\n                                <div class=\"col-md-4\">\n                                    <label>Your email</label>\n                                    <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus1===true}\">\n                                      <div class=\"input-group-prepend\">\n                                          <span class=\"input-group-text\"><i class=\"now-ui-icons ui-1_email-85\"></i></span>\n                                      </div>\n                                        <input type=\"email\" class=\"form-control\" placeholder=\"Email Here...\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\n                                    </div>\n                                </div>\n                                <div class=\"col-md-4\">\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\">Speciality</label>\n                                        <angular2-multiselect [data]=\"dropdownList\" [(ngModel)]=\"selectedItems\" [ngModelOptions]=\"{standalone: true}\"\n                                            [settings]=\"dropdownSettings\"\n                                            (onSelect)=\"onItemSelect($event)\"\n                                            (onDeSelect)=\"OnItemDeSelect($event)\"\n                                            (onSelectAll)=\"onSelectAll($event)\"\n                                            (onDeSelectAll)=\"onDeSelectAll($event)\">\n                                        </angular2-multiselect>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-4 ml-auto mr-auto text-center\">\n                                    <button class=\"btn btn-primary btn-round mt-4 btn-lg\">\n                                        Let's talk\n                                    </button>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <footer class=\"footer \">\n        <div class=\"container\">\n            <nav>\n                <ul>\n                    <li>\n                        <a href=\"https://www.josh-levy.com\">\n                            Josh Levy\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"https://www.josh-levy.com/about-us\">\n                            About Us\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"http://blog.josh-levy.com\">\n                            Blog\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"https://www.josh-levy.com/license\">\n                            License\n                        </a>\n                    </li>\n                </ul>\n            </nav>\n            <div class=\"copyright\">\n                &copy;{{data | date: 'yyyy'}}, Designed by\n                <a href=\"https://www.invisionapp.com\" target=\"_blank\">Invision</a>. Coded by\n                <a href=\"https://www.josh-levy.com\" target=\"_blank\">Josh Levy</a>.\n            </div>\n        </div>\n    </footer>\n</div>\n";
      /***/
    },

    /***/
    "noTK":
    /*!***************************************************************************!*\
      !*** ./src/app/components/prefooter-areas/prefooter-areas.component.scss ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function noTK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmVmb290ZXItYXJlYXMuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "o8F2":
    /*!*********************************************************************!*\
      !*** ./src/app/components/basicelements/basicelements.component.ts ***!
      \*********************************************************************/

    /*! exports provided: BasicelementsComponent */

    /***/
    function o8F2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BasicelementsComponent", function () {
        return BasicelementsComponent;
      });
      /* harmony import */


      var _raw_loader_basicelements_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./basicelements.component.html */
      "1RpN");
      /* harmony import */


      var _basicelements_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./basicelements.component.scss */
      "4Wxn");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var BasicelementsComponent = /*#__PURE__*/function () {
        function BasicelementsComponent() {
          _classCallCheck(this, BasicelementsComponent);

          this.simpleSlider = 40;
          this.doubleSlider = [20, 60];
          this.state = true;
          this.tagItems = ['Minimal', 'Light', 'New', 'Friends'];
          this.dropdownList = [];
          this.selectedItems = [];
          this.dropdownSettings = {};
          this.dropdownList1 = [];
          this.selectedItems1 = [];
          this.dropdownSettings1 = {};
        }

        _createClass(BasicelementsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.dropdownList = [{
              "id": 1,
              "itemName": "Roman",
              "category": "All"
            }, {
              "id": 2,
              "itemName": "Paris",
              "category": "All"
            }, {
              "id": 3,
              "itemName": "Bucharest",
              "category": "All"
            }, {
              "id": 4,
              "itemName": "Rome",
              "category": "All"
            }, {
              "id": 5,
              "itemName": "New York",
              "category": "All"
            }, {
              "id": 6,
              "itemName": "Miami",
              "category": "All"
            }, {
              "id": 7,
              "itemName": "Piatra Neamt",
              "category": "All"
            }, {
              "id": 8,
              "itemName": "Paris",
              "category": "All"
            }, {
              "id": 9,
              "itemName": "Bucharest",
              "category": "All"
            }, {
              "id": 10,
              "itemName": "Rome",
              "category": "All"
            }, {
              "id": 11,
              "itemName": "New York",
              "category": "All"
            }, {
              "id": 12,
              "itemName": "Miami",
              "category": "All"
            }, {
              "id": 13,
              "itemName": "Piatra Neamt",
              "category": "All"
            }];
            this.selectedItems = [];
            this.dropdownSettings = {
              singleSelection: false,
              text: "Multiple Select",
              selectAllText: 'Select All',
              unSelectAllText: 'UnSelect All',
              enableSearchFilter: true,
              classes: "",
              groupBy: "category"
            };
            this.dropdownList1 = [{
              "id": 1,
              "itemName": "Roman"
            }, {
              "id": 2,
              "itemName": "Paris"
            }, {
              "id": 3,
              "itemName": "Bucharest"
            }, {
              "id": 4,
              "itemName": "Rome"
            }, {
              "id": 5,
              "itemName": "New York"
            }, {
              "id": 6,
              "itemName": "Miami"
            }, {
              "id": 7,
              "itemName": "Piatra Neamt"
            }, {
              "id": 8,
              "itemName": "Paris"
            }, {
              "id": 9,
              "itemName": "Bucharest"
            }, {
              "id": 10,
              "itemName": "Rome"
            }, {
              "id": 11,
              "itemName": "New York"
            }, {
              "id": 12,
              "itemName": "Miami"
            }, {
              "id": 13,
              "itemName": "Piatra Neamt"
            }];
            this.selectedItems1 = [];
            this.dropdownSettings1 = {
              singleSelection: true,
              text: "Single Select",
              selectAllText: 'Select All',
              unSelectAllText: 'UnSelect All',
              enableSearchFilter: true,
              classes: "",
              lazyLoading: true
            };
          }
        }, {
          key: "onItemSelect",
          value: function onItemSelect(item) {
            console.log(item);
            console.log(this.selectedItems);
          }
        }, {
          key: "OnItemDeSelect",
          value: function OnItemDeSelect(item) {
            console.log(item);
            console.log(this.selectedItems);
          }
        }, {
          key: "onSelectAll",
          value: function onSelectAll(items) {
            console.log(items);
          }
        }, {
          key: "onDeSelectAll",
          value: function onDeSelectAll(items) {
            console.log(items);
          }
        }]);

        return BasicelementsComponent;
      }();

      BasicelementsComponent.ctorParameters = function () {
        return [];
      };

      BasicelementsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-basicelements',
        template: _raw_loader_basicelements_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_basicelements_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [])], BasicelementsComponent);
      /***/
    },

    /***/
    "oy3u":
    /*!*********************************************************************!*\
      !*** ./src/app/components/notification/notification.component.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function oy3u(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RpZmljYXRpb24uY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "pRq/":
    /*!*****************************************************************!*\
      !*** ./src/app/examples/productpage/productpage.component.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function pRq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0cGFnZS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "q3QT":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/examples/profile/profile.component.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function q3QT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"wrapper\">\n    <div class=\"page-header page-header-small\" filter-color=\"orange\">\n        <div class=\"page-header-image rellax-header\" data-rellax-speed=\"-8\" style=\"background-image: url('assets/img/bg5.jpg') ;\">\n        </div>\n        <div class=\"content-center\">\n            <div class=\"photo-container\">\n                <img src=\"assets/img/ryan.jpg\" alt=\"\">\n            </div>\n            <h3 class=\"title\">Ryan Scheinder</h3>\n            <p class=\"category\">Photographer</p>\n            <div class=\"content\">\n                <div class=\"social-description\">\n                    <h2>26</h2>\n                    <p>Comments</p>\n                </div>\n                <div class=\"social-description\">\n                    <h2>26</h2>\n                    <p>Comments</p>\n                </div>\n                <div class=\"social-description\">\n                    <h2>48</h2>\n                    <p>Bookmarks</p>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"section\">\n        <div class=\"container\">\n            <div class=\"button-container\">\n                <a href=\"#button\" class=\"btn btn-primary btn-round btn-lg\">Follow</a>\n                <a href=\"#button\" class=\"btn btn-default btn-round btn-lg btn-icon\" placement=\"top\" ngbTooltip=\"Follow me on Twitter\">\n                    <i class=\"fa fa-twitter\"></i>\n                </a>\n                <a href=\"#button\" class=\"btn btn-default btn-round btn-lg btn-icon\" placement=\"top\" ngbTooltip=\"Follow me on Instagram\">\n                    <i class=\"fa fa-instagram\"></i>\n                </a>\n            </div>\n            <h3 class=\"title\">About me</h3>\n            <h5 class=\"description text-center\">An artist of considerable range, Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.</h5>\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <h4 class=\"title text-center\">My Portfolio</h4>\n                      <ngb-tabset [justify]=\"'center'\" type=\"pills\" class=\"nav nav-pills nav-pills-primary  nav-pills-just-icons justify-content-center tab-space\">\n                          <ngb-tab>\n                            <ng-template ngbTabTitle>\n                              <i class=\"now-ui-icons design_image\"></i>\n                            </ng-template>\n                              <ng-template ngbTabContent>\n                                <div class=\"row\">\n                                    <div class=\"col-md-5 ml-auto mr-auto\">\n                                        <div class=\"card card-background card-background-product card-raised\" style=\"background-image: url('assets/img/bg23.jpg')\">\n                                            <div class=\"card-body\">\n                                                <h2 class=\"card-title\">Chair remake.</h2>\n                                                <p class=\"card-description text-white\">\n                                                    Trello’s boards, lists, and cards enable you to organize and prioritize your projects in a fun, flexible and rewarding way. It was a great project and I would be more than happy to do it again.\n                                                </p>\n                                                <label class=\"badge badge-neutral\">Trello</label>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-5 ml-auto mr-auto\">\n                                        <div class=\"info info-horizontal\">\n                                            <div class=\"icon icon-warning\">\n                                                <i class=\"now-ui-icons users_single-02\"></i>\n                                            </div>\n                                            <div class=\"description\">\n                                                <h5 class=\"info-title\">Work With Any Team</h5>\n                                                <p class=\"description\">\n                                                    Whether it’s for work or even the next family vacation, Trello helps your team.\n                                                </p>\n                                            </div>\n                                        </div>\n                                        <div class=\"info info-horizontal\">\n                                            <div class=\"icon icon-warning\">\n                                                <i class=\"now-ui-icons business_chart-bar-32\"></i>\n                                            </div>\n                                            <div class=\"description\">\n                                                <h5 class=\"info-title\">A Productivity Platform</h5>\n                                                <p class=\"description\">\n                                                    Integrate the apps your team already uses directly into your workflow.\n                                                </p>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                              </ng-template>\n                          </ngb-tab>\n                          <ngb-tab>\n                            <ng-template ngbTabTitle>\n                              <i class=\"now-ui-icons location_world\"></i>\n                            </ng-template>\n                              <ng-template ngbTabContent>\n                                <div class=\"row\">\n                                    <div class=\"col-md-5 ml-auto mr-auto\">\n                                        <div class=\"card card-background card-background-product card-raised\" style=\"background-image: url('assets/img/project8.jpg')\">\n                                            <div class=\"card-body\">\n                                                <h2 class=\"card-title\">Social Analytics</h2>\n                                                <p class=\"card-description\">\n                                                    Insight to help you create, connect, and convert. Understand Your Audience's Interests, Influence, Interactions, and Intent. Discover emerging topics and influencers to reach new audiences.\n                                                </p>\n                                                <label class=\"badge badge-neutral\">Analytics</label>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-5 ml-auto mr-auto\">\n                                        <div class=\"info info-horizontal\">\n                                            <div class=\"icon icon-danger\">\n                                                <i class=\"now-ui-icons ui-2_chat-round\"></i>\n                                            </div>\n                                            <div class=\"description\">\n                                                <h5 class=\"info-title\">Listen to Social Conversations</h5>\n                                                <p class=\"description\">\n                                                    Gain access to the demographics, psychographics, and location of unique people who talk about your brand.\n                                                </p>\n                                            </div>\n                                        </div>\n                                        <div class=\"info info-horizontal\">\n                                            <div class=\"icon icon-danger\">\n                                                <i class=\"now-ui-icons design-2_ruler-pencil\"></i>\n                                            </div>\n                                            <div class=\"description\">\n                                                <h5 class=\"info-title\">Social Conversions</h5>\n                                                <p class=\"description\">\n                                                    Track actions taken on your website that originated from social, and understand the impact on your bottom line.\n                                                </p>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                              </ng-template>\n                          </ngb-tab>\n                          <ngb-tab>\n                            <ng-template ngbTabTitle>\n                              <i class=\"now-ui-icons design-2_ruler-pencil\"></i>\n                            </ng-template>\n                              <ng-template ngbTabContent>\n                                <div class=\"row\">\n                                    <div class=\"col-md-5 ml-auto mr-auto\">\n                                        <div class=\"card card-background card-background-product card-raised\" style=\"background-image: url('assets/img/bg25.jpg')\">\n                                            <div class=\"card-body\">\n                                                <h2 class=\"card-title\">Interior Redesign</h2>\n                                                <p class=\"card-description\">\n                                                    Insight to help you create, connect, and convert. Understand Your Audience's Interests, Influence, Interactions, and Intent. Discover emerging topics and influencers to reach new audiences.\n                                                </p>\n                                                <label class=\"badge badge-neutral\">Interior</label>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-5 ml-auto mr-auto\">\n                                        <div class=\"info info-horizontal\">\n                                            <div class=\"icon icon-info\">\n                                                <i class=\"now-ui-icons design_palette\"></i>\n                                            </div>\n                                            <div class=\"description\">\n                                                <h5 class=\"info-title\">Colors adjustments</h5>\n                                                <p class=\"description\">\n                                                    Gain access to the demographics, psychographics, and location of unique people who talk about your brand.\n                                                </p>\n                                            </div>\n                                        </div>\n                                        <div class=\"info info-horizontal\">\n                                            <div class=\"icon icon-info\">\n                                                <i class=\"now-ui-icons design_scissors\"></i>\n                                            </div>\n                                            <div class=\"description\">\n                                                <h5 class=\"info-title\">Performance Clothing</h5>\n                                                <p class=\"description\">\n                                                    Unify data from Facebook, Instagram, Twitter, LinkedIn, and Youtube to gain rich insights from easy-to-use reports.\n                                                </p>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                              </ng-template>\n                          </ngb-tab>\n                      </ngb-tabset>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    CONTACT US 2     *********      -->\n    <div class=\"contactus-2\">\n      <div class=\"map\">\n          <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [styles]=\"styles\">\n              <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n          </agm-map>\n      </div>\n        <div class=\"col-lg-6 col-md-10\">\n            <div class=\"card card-contact card-raised\">\n                <form role=\"form\" id=\"contact-form\" method=\"post\">\n                    <div class=\"card-header text-center\">\n                        <h4 class=\"card-title\">Contact Us</h4>\n                    </div>\n                    <div class=\"card-body\">\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <div class=\"info info-horizontal\">\n                                    <div class=\"icon icon-primary\">\n                                        <i class=\"now-ui-icons tech_mobile\"></i>\n                                    </div>\n                                    <div class=\"description\">\n                                        <h5 class=\"info-title\">Give us a ring</h5>\n                                        <p> Michael Jordan\n                                            <br> +40 762 321 762\n                                            <br> Mon - Fri, 8:00-22:00\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <div class=\"info info-horizontal\">\n                                    <div class=\"icon icon-primary\">\n                                        <i class=\"now-ui-icons location_pin\"></i>\n                                    </div>\n                                    <div class=\"description\">\n                                        <h5 class=\"info-title\">Find us at the office</h5>\n                                        <p> Bld Mihail Kogalniceanu, nr. 8,\n                                            <br> 7652 Bucharest,\n                                            <br> Romania\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-6 pr-2\">\n                                <label>Full name</label>\n                                <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                                  <div class=\"input-group-prepend\">\n                                      <span class=\"input-group-text\"><i class=\"now-ui-icons users_circle-08\"></i></span>\n                                  </div>\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"First Name...\" (focus)=\"focus=true\" (blur)=\"focus=false\">\n                                </div>\n                            </div>\n                            <div class=\"col-md-6 pl-2\">\n                                <label>Email address</label>\n                                <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus1===true}\">\n                                  <div class=\"input-group-prepend\">\n                                      <span class=\"input-group-text\"><i class=\"now-ui-icons ui-1_email-85\"></i></span>\n                                  </div>\n                                    <input type=\"email\" placeholder=\"Email Here...\" class=\"form-control\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                              <div class=\"form-check\">\n                                  <label class=\"form-check-label\">\n                                      <input class=\"form-check-input\" type=\"checkbox\">\n                                      <span class=\"form-check-sign\"></span>\n                                        I'm not a robot\n                                  </label>\n                              </div>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <button type=\"submit\" class=\"btn btn-primary btn-round pull-right\">Send Message</button>\n                            </div>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END CONTACT US 2      *********      -->\n    <footer class=\"footer footer-default \">\n        <div class=\"container\">\n            <nav>\n                <ul>\n                    <li>\n                        <a href=\"https://www.josh-levy.com\">\n                            Josh Levy\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"https://www.josh-levy.com/about-us\">\n                            About Us\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"http://blog.josh-levy.com\">\n                            Blog\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"https://www.josh-levy.com/license\">\n                            License\n                        </a>\n                    </li>\n                </ul>\n            </nav>\n            <div class=\"copyright\">\n                &copy;\n                {{data | date: 'yyyy'}}, Designed by\n                <a href=\"https://www.invisionapp.com\" target=\"_blank\">Invision</a>. Coded by\n                <a href=\"https://www.josh-levy.com\" target=\"_blank\">Josh Levy</a>.\n            </div>\n        </div>\n    </footer>\n</div>\n";
      /***/
    },

    /***/
    "q6Lt":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sections/headers/headers.component.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function q6Lt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"cd-section\" id=\"headers\">\n    <!--     *********     HEADER 1      *********      -->\n    <div class=\"header-1\">\n        <nav class=\"navbar navbar-expand-lg navbar-transparent bg-primary navbar-absolute\">\n            <div class=\"container\">\n                <div class=\"navbar-translate\">\n                    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-primary\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                        <span class=\"navbar-toggler-bar bar1\"></span>\n                        <span class=\"navbar-toggler-bar bar2\"></span>\n                        <span class=\"navbar-toggler-bar bar3\"></span>\n                    </button>\n                    <a class=\"navbar-brand\" href=\"#\">Josh Levy</a>\n                </div>\n                <div class=\"collapse navbar-collapse\" id=\"example-navbar-primary\">\n                    <ul class=\"navbar-nav mx-auto\">\n                        <li class=\"nav-item active\">\n                            <a class=\"nav-link\" href=\"#\">\n                                Home\n                            </a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"#\">\n                                About Us\n                            </a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"#\">\n                                Contact Us\n                            </a>\n                        </li>\n                    </ul>\n                    <ul class=\"nav navbar-nav\">\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"https://twitter.com/CreativeTim\">\n                                <i class=\"fa fa-twitter\"></i>\n                            </a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"https://www.facebook.com/CreativeTim\">\n                                <i class=\"fa fa-facebook-square\"></i>\n                            </a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"https://www.instagram.com/CreativeTimOfficial\">\n                                <i class=\"fa fa-instagram\"></i>\n                            </a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </nav>\n        <div class=\"page-header header-filter\">\n            <div class=\"page-header-image\" style=\"background-image: url('assets/img/bg16.jpg');\"></div>\n            <div class=\"content-center\">\n                <div class=\"container\">\n                    <div class=\"row\">\n                        <div class=\"col-md-7 ml-auto text-right\">\n                            <h1 class=\"title\">History of surfing</h1>\n                            <h4 class=\"description\">The riding of waves has likely existed since humans began swimming in the ocean. In this sense, bodysurfing is the oldest type of wave-catching. Standing up on what is now called a surfboard is a relatively recent innovation developed by the Polynesians.</h4>\n                            <br />\n                            <div class=\"buttons\">\n                                <a href=\"#\" class=\"btn btn-icon btn-link btn-neutral btn-lg\">\n                                    <i class=\"fa fa-twitter\"></i>\n                                </a>\n                                <a href=\"#\" class=\"btn btn-icon btn-link btn-neutral btn-lg\">\n                                    <i class=\"fa fa-facebook-square\"></i>\n                                </a>\n                                <a href=\"#\" class=\"btn btn-icon btn-link btn-neutral btn-lg\">\n                                    <i class=\"fa fa-get-pocket\"></i>\n                                </a>\n                                <a href=\"#\" class=\"btn btn-info btn-lg mr-3\">\n                                    Read More\n                                </a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END HEADER 1      *********      -->\n    <!--     *********     HEADER 2      *********      -->\n    <div class=\"header-2\">\n        <nav class=\"navbar navbar-expand-lg navbar-transparent bg-primary navbar-absolute\">\n            <div class=\"container\">\n                <div class=\"navbar-translate\">\n                    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-primary\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                        <span class=\"navbar-toggler-bar bar1\"></span>\n                        <span class=\"navbar-toggler-bar bar2\"></span>\n                        <span class=\"navbar-toggler-bar bar3\"></span>\n                    </button>\n                    <a class=\"navbar-brand\" href=\"#\">Josh Levy</a>\n                </div>\n                <div class=\"collapse navbar-collapse\" id=\"example-navbar-primary1\">\n                    <ul class=\"navbar-nav mx-auto\">\n                        <li class=\"nav-item active\">\n                            <a class=\"nav-link\" href=\"#\">\n                                Home\n                            </a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"#\">\n                                About Us\n                            </a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"#\">\n                                Products\n                            </a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"#\">\n                                Contact Us\n                            </a>\n                        </li>\n                    </ul>\n                    <ul class=\"nav navbar-nav navbar-right\">\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"https://twitter.com/CreativeTim\">\n                                <i class=\"fa fa-twitter\"></i>\n                            </a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"https://www.facebook.com/CreativeTim\">\n                                <i class=\"fa fa-facebook-square\"></i>\n                            </a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"https://www.instagram.com/CreativeTimOfficial\">\n                                <i class=\"fa fa-instagram\"></i>\n                            </a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </nav>\n        <div class=\"page-header header-filter\">\n            <div class=\"page-header-image\" style=\"background-image: url('assets/img/bg14.jpg');\"></div>\n            <div class=\"content-center\">\n                <div class=\"container\">\n                    <div class=\"row\">\n                        <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                            <h1 class=\"title\"> You should be here!</h1>\n                            <h5 class=\"description\">5,000 capacity venue, holding some of the latest technology lighting with a 24 colour laser system Amnesia is one of the islands most legendary clubs.</h5>\n                        </div>\n                        <div class=\"col-md-10 ml-auto mr-auto\">\n                            <div class=\"card card-raised card-form-horizontal card-plain\" data-background-color>\n                                <div class=\"card-body\">\n                                    <form method=\"\" action=\"\">\n                                        <div class=\"row\">\n                                            <div class=\"col-md-3\">\n                                                <div class=\"form-group\">\n                                                    <input type=\"text\" value=\"\" placeholder=\"Full Name\" class=\"form-control\" />\n                                                </div>\n                                            </div>\n                                            <div class=\"col-md-3\">\n                                                <div class=\"form-group\">\n                                                    <input type=\"email\" value=\"\" placeholder=\"Your Email\" class=\"form-control\" />\n                                                </div>\n                                            </div>\n                                            <div class=\"col-md-3\">\n                                                <div class=\"form-group\">\n                                                    <input type=\"password\" value=\"\" placeholder=\"Password\" class=\"form-control\" />\n                                                </div>\n                                            </div>\n                                            <div class=\"col-md-3\">\n                                                <button type=\"button\" class=\"btn btn-primary btn-round btn-block\">Join Us</button>\n                                            </div>\n                                        </div>\n                                    </form>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END HEADER 2      *********      -->\n    <!--     *********     HEADER 3      *********      -->\n    <div class=\"header-3\">\n        <nav class=\"navbar navbar-expand-lg navbar-transparent bg-primary navbar-absolute\">\n            <div class=\"container\">\n                <div class=\"navbar-translate\">\n                    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-primary\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                        <span class=\"navbar-toggler-bar bar1\"></span>\n                        <span class=\"navbar-toggler-bar bar2\"></span>\n                        <span class=\"navbar-toggler-bar bar3\"></span>\n                    </button>\n                    <a class=\"navbar-brand\" href=\"#\">Josh Levy</a>\n                </div>\n                <div class=\"collapse navbar-collapse\" id=\"example-navbar-primary2\">\n                    <ul class=\"navbar-nav ml-auto\">\n                        <li class=\"nav-item active\">\n                            <a class=\"nav-link\" href=\"#\">\n                                Home\n                            </a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"#\">\n                                About Us\n                            </a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"#\">\n                                Contact Us\n                            </a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </nav>\n        <ngb-carousel>\n            <ng-template ngbSlide>\n              <div class=\"page-header header-filter\">\n                  <div class=\"page-header-image\" style=\"background-image: url('assets/img/bg20.jpg');\"></div>\n                  <div class=\"content-center\">\n                      <div class=\"container text-left\">\n                          <div class=\"content-center\">\n                              <div class=\"row\">\n                                  <div class=\"col-md-5\">\n                                      <div class=\"iframe-container\">\n                                          <iframe height=\"250\" src=\"https://www.youtube.com/embed/rmfmdKOLzVI?rel=0&amp;controls=0&amp;showinfo=0\" frameborder=\"0\" allowfullscreen></iframe>\n                                      </div>\n                                  </div>\n                                  <div class=\"col-md-6 ml-auto mr-auto text-right\">\n                                      <h1 class=\"title\">On the run tour.</h1>\n                                      <h4 class=\"description \">On the Run Tour: Beyoncé and Jay Z is a 2014 concert special which documents the September 12 and 13, 2014, shows of American singers' Beyoncé and Jay-Z joint co-headlining venture On the Run Tour.</h4>\n                                  </div>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n            </ng-template>\n            <ng-template ngbSlide>\n              <div class=\"page-header header-filter\">\n                  <div class=\"page-header-image\" style=\"background-image: url('assets/img/bg15.jpg');\"></div>\n                  <div class=\"content-center\">\n                      <div class=\"container\">\n                          <div class=\"content-center\">\n                              <div class=\"row\">\n                                  <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                                      <h1 class=\"title\">Island of legends.</h1>\n                                      <h4 class=\"description \">The islands of Malta and Gozo are brilliant for a family holiday, packed with fun places to visit whatever your children’s ages. The islands’ small size means everywhere is within easy reach.</h4>\n                                      <br />\n                                      <h5>Connect with us on:</h5>\n                                      <div class=\"buttons\">\n                                          <a href=\"#\" class=\"btn btn-icon btn-neutral btn-danger btn-round mt-2\">\n                                              <i class=\"fa fa-twitter\"></i>\n                                          </a>\n                                          <a href=\"#\" class=\"btn btn-icon btn-neutral btn-danger btn-round mt-2\">\n                                              <i class=\"fa fa-facebook-square\"></i>\n                                          </a>\n                                          <a href=\"#\" class=\"btn btn-icon btn-neutral btn-danger btn-round mt-2\">\n                                              <i class=\"fa fa-google-plus\"></i>\n                                          </a>\n                                          <a href=\"#\" class=\"btn btn-icon btn-neutral btn-danger btn-round  mt-2\">\n                                              <i class=\"fa fa-instagram\"></i>\n                                          </a>\n                                      </div>\n                                  </div>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n            </ng-template>\n            <ng-template ngbSlide>\n              <div class=\"page-header header-filter\">\n                  <div class=\"page-header-image\" style=\"background-image: url('assets/img/bg17.jpg');\"></div>\n                  <div class=\"content-center\">\n                      <div class=\"container\">\n                          <div class=\"content-center\">\n                              <div class=\"row\">\n                                  <div class=\"col-md-6 text-left\">\n                                      <h1 class=\"title\">Arctic Sea ice.</h1>\n                                      <h4 class=\"description \">According to the National Oceanic and Atmospheric Administration, Ted Scambos, NSIDC lead scientist, puts the potentially record low maximum sea ice extent this year down to low ice extent in the Pacific and a late drop in ice extent in the Barents Sea.</h4>\n                                      <br />\n                                      <div class=\"buttons\">\n                                          <a href=\"#\" class=\"btn btn-neutral btn-primary btn-lg mr-1\">\n                                              <i class=\"now-ui-icons files_single-copy-04\"></i> Read More..\n                                          </a>\n                                          <a href=\"#\" class=\"btn btn-primary btn-lg\">\n                                              <i class=\"now-ui-icons arrows-1_share-66\"></i> Subscribe\n                                          </a>\n                                      </div>\n                                  </div>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n            </ng-template>\n        </ngb-carousel>\n    </div>\n    <!--     *********    END HEADER 3      *********      -->\n</div>\n";
      /***/
    },

    /***/
    "qLOZ":
    /*!*****************************************!*\
      !*** ./src/app/services/job.service.ts ***!
      \*****************************************/

    /*! exports provided: JobService */

    /***/
    function qLOZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JobService", function () {
        return JobService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../environments/environment */
      "AytR");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      }; // const httpOptions = {
      //   headers: new HttpHeaders({
      //     'X-Parse-Application-Id': parseKeys.PARSE_APP_ID,
      //     'X-Parse-REST-API-Key': parseKeys.PARSE_REST_API_KEY,
      //     'Content-Type':  'application/json'
      //   })
      // };


      var apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;

      var JobService = /*#__PURE__*/function () {
        function JobService(http) {
          _classCallCheck(this, JobService);

          this.http = http;
        }

        _createClass(JobService, [{
          key: "getJobs",
          value: function getJobs() {
            var url = "".concat(apiUrl, "/jobs");
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              return res;
            }));
          }
        }, {
          key: "addJob",
          value: function addJob() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
            var url = "".concat(apiUrl, "/jobs");
            return this.http.post(url, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              console.log(res);
              return res;
            }));
          }
        }]);

        return JobService;
      }();

      JobService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
        }];
      };

      JobService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])], JobService);
      /***/
    },

    /***/
    "qmXc":
    /*!*******************************************************!*\
      !*** ./src/app/examples/aboutus/aboutus.component.ts ***!
      \*******************************************************/

    /*! exports provided: AboutusComponent */

    /***/
    function qmXc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutusComponent", function () {
        return AboutusComponent;
      });
      /* harmony import */


      var _raw_loader_aboutus_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./aboutus.component.html */
      "nYku");
      /* harmony import */


      var _aboutus_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./aboutus.component.scss */
      "Lsgy");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rellax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rellax */
      "HbP6");
      /* harmony import */


      var rellax__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rellax__WEBPACK_IMPORTED_MODULE_3__);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var AboutusComponent = /*#__PURE__*/function () {
        function AboutusComponent() {
          _classCallCheck(this, AboutusComponent);

          this.dropdownList = [];
          this.selectedItems = [];
          this.dropdownSettings = {};
          this.dropdownList1 = [];
          this.selectedItems1 = [];
          this.dropdownSettings1 = {};
          this.data = new Date();
        }

        _createClass(AboutusComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var rellaxHeader = new rellax__WEBPACK_IMPORTED_MODULE_3__('.rellax-header'); // var rellaxText = new Rellax('.rellax-text');

            var body = document.getElementsByTagName('body')[0];
            body.classList.add('about-us');
            var navbar = document.getElementsByTagName('nav')[0];
            navbar.classList.add('navbar-transparent');
            this.dropdownList = [{
              "id": 1,
              "itemName": "I'm a Designer"
            }, {
              "id": 2,
              "itemName": "I'm a Developer"
            }, {
              "id": 3,
              "itemName": "I'm a Hero"
            }];
            this.selectedItems = [{
              "id": 2,
              "itemName": "I'm a Developer"
            }];
            this.dropdownSettings = {
              singleSelection: true,
              text: "Speciality",
              // selectAllText:'Select All',
              // unSelectAllText:'UnSelect All',
              // enableSearchFilter: true,
              classes: "",
              lazyLoading: true,
              maxHeight: 100
            };
          }
        }, {
          key: "onItemSelect",
          value: function onItemSelect(item) {
            console.log(item);
            console.log(this.selectedItems);
          }
        }, {
          key: "OnItemDeSelect",
          value: function OnItemDeSelect(item) {
            console.log(item);
            console.log(this.selectedItems);
          }
        }, {
          key: "onSelectAll",
          value: function onSelectAll(items) {
            console.log(items);
          }
        }, {
          key: "onDeSelectAll",
          value: function onDeSelectAll(items) {
            console.log(items);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var body = document.getElementsByTagName('body')[0];
            body.classList.remove('about-us');
            var navbar = document.getElementsByTagName('nav')[0];
            body.classList.remove('navbar-transparent');
          }
        }]);

        return AboutusComponent;
      }();

      AboutusComponent.ctorParameters = function () {
        return [];
      };

      AboutusComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-aboutus',
        template: _raw_loader_aboutus_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_aboutus_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [])], AboutusComponent);
      /***/
    },

    /***/
    "r7bM":
    /*!*****************************************************************!*\
      !*** ./src/app/components/navigation/navigation.component.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function r7bM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "vBES":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/examples/contactus/contactus.component.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function vBES(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"wrapper\">\n    <div class=\"page-header page-header-small\">\n        <div class=\"page-header-image rellax-header\" data-rellax-speed=\"-8\" style=\"background-image:  url('assets/img/bg45.jpg');\">\n        </div>\n    </div>\n    <div class=\"main\">\n        <div class=\"contact-content\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-5 ml-auto mr-auto\">\n                        <h2 class=\"title\">Send us a message</h2>\n                        <p class=\"description\">You can contact us with anything related to our Products. We'll get in touch with you as soon as possible.\n                            <br>\n                            <br>\n                        </p>\n                        <form role=\"form\" id=\"contact-form\" method=\"post\">\n                            <label>Your name</label>\n                            <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                              <div class=\"input-group-prepend\">\n                                  <span class=\"input-group-text\"><i class=\"now-ui-icons users_circle-08\"></i></span>\n                              </div>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Your Name...\"   (focus)=\"focus=true\" (blur)=\"focus=false\">\n                            </div>\n                            <label>Email address</label>\n                            <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus1===true}\">\n                              <div class=\"input-group-prepend\">\n                                  <span class=\"input-group-text\"><i class=\"now-ui-icons ui-1_email-85\"></i></span>\n                              </div>\n                                <input type=\"email\" class=\"form-control\" placeholder=\"Email Here...\"   (focus)=\"focus1=true\" (blur)=\"focus1=false\">\n                            </div>\n                            <label>Phone</label>\n                            <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus2===true}\">\n                              <div class=\"input-group-prepend\">\n                                  <span class=\"input-group-text\">  <i class=\"now-ui-icons tech_mobile\"></i></span>\n                              </div>\n                                <input type=\"text\" placeholder=\"Number Here...\" class=\"form-control\"   (focus)=\"focus2=true\" (blur)=\"focus2=false\">\n                            </div>\n                            <div class=\"form-group\">\n                                <label>Your message</label>\n                                <textarea name=\"message\" class=\"form-control\" id=\"message\" rows=\"6\"></textarea>\n                            </div>\n                            <div class=\"submit text-center\">\n                                <input type=\"submit\" class=\"btn btn-primary btn-raised btn-round\" value=\"Contact Us\" />\n                            </div>\n                        </form>\n                    </div>\n                    <div class=\"col-md-5 ml-auto mr-auto\">\n                        <div class=\"info info-horizontal mt-5\">\n                            <div class=\"icon icon-primary\">\n                                <i class=\"now-ui-icons location_pin\"></i>\n                            </div>\n                            <div class=\"description\">\n                                <h4 class=\"info-title\">Find us at the office</h4>\n                                <p> Bld Mihail Kogalniceanu, nr. 8,\n                                    <br> 7652 Bucharest,\n                                    <br> Romania\n                                </p>\n                            </div>\n                        </div>\n                        <div class=\"info info-horizontal\">\n                            <div class=\"icon icon-primary\">\n                                <i class=\"now-ui-icons tech_mobile\"></i>\n                            </div>\n                            <div class=\"description\">\n                                <h4 class=\"info-title\">Give us a ring</h4>\n                                <p> Michael Jordan\n                                    <br> +40 762 321 762\n                                    <br> Mon - Fri, 8:00-22:00\n                                </p>\n                            </div>\n                        </div>\n                        <div class=\"info info-horizontal\">\n                            <div class=\"icon icon-primary\">\n                                <i class=\"business_briefcase-24 now-ui-icons\"></i>\n                            </div>\n                            <div class=\"description\">\n                                <h4 class=\"info-title\">Legal Information</h4>\n                                <p> Josh Levy Ltd.\n                                    <br> VAT &middot; EN2341241\n                                    <br> IBAN &middot; EN8732ENGB2300099123\n                                    <br> Bank &middot; Great Britain Bank\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"big-map\">\n        <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [styles]=\"styles\">\n            <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n        </agm-map>\n    </div>\n\n    <footer class=\"footer footer-default \">\n        <div class=\"container\">\n            <nav>\n                <ul>\n                    <li>\n                        <a href=\"https://www.josh-levy.com\">\n                            Josh Levy\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"https://www.josh-levy.com/about-us\">\n                            About Us\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"http://blog.josh-levy.com\">\n                            Blog\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"https://www.josh-levy.com/license\">\n                            License\n                        </a>\n                    </li>\n                </ul>\n            </nav>\n            <div class=\"copyright\">\n                © {{data | date: 'yyyy'}}, Designed by\n                <a href=\"https://www.invisionapp.com\" target=\"_blank\">Invision</a>. Coded by\n                <a href=\"https://www.josh-levy.com\" target=\"_blank\">Josh Levy</a>.\n            </div>\n        </div>\n    </footer>\n</div>\n";
      /***/
    },

    /***/
    "vG3S":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/nucleoicons/nucleoicons.component.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function vG3S(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"nucleo-icons-style\">\n  <header>\n      <h1>Nucleo Outline Web Font v2.9</h1>\n      <p>\n          <a href=\"https://nucleoapp.com/?ref=1712\">nucleoapp.com</a>\n      </p>\n  </header>\n  <div id=\"cd-nav\">\n      <nav>\n          <ul id=\"cd-main-nav\">\n              <li>\n                  <a href=\"#arrows\">Arrows</a>\n              </li>\n              <li>\n                  <a href=\"#business\">Business &amp; Finance</a>\n              </li>\n              <li>\n                  <a href=\"#clothes\">Clothes &amp; Accessories</a>\n              </li>\n              <li>\n                  <a href=\"#design\">Design &amp; Development</a>\n              </li>\n              <li>\n                  <a href=\"#emoticons\">Emoticons</a>\n              </li>\n              <li>\n                  <a href=\"#files\">Files &amp; Folders</a>\n              </li>\n              <li>\n                  <a href=\"#medical\">Healthcare &amp; Medical</a>\n              </li>\n              <li>\n                  <a href=\"#loaders\">Loaders</a>\n              </li>\n              <li>\n                  <a href=\"#maps\">Maps &amp; Location</a>\n              </li>\n              <li>\n                  <a href=\"#media\">Media</a>\n              </li>\n              <li>\n                  <a href=\"#objects\">Objects</a>\n              </li>\n              <li>\n                  <a href=\"#school\">School &amp; Education</a>\n              </li>\n              <li>\n                  <a href=\"#shopping\">Shopping</a>\n              </li>\n              <li>\n                  <a href=\"#sport\">Sport</a>\n              </li>\n              <li>\n                  <a href=\"#technology\">Technology</a>\n              </li>\n              <li>\n                  <a href=\"#text\">Text Editing</a>\n              </li>\n              <li>\n                  <a href=\"#gestures\">Touch Gestures</a>\n              </li>\n              <li>\n                  <a href=\"#transportation\">Transportation</a>\n              </li>\n              <li>\n                  <a href=\"#travel\">Travel</a>\n              </li>\n              <li>\n                  <a href=\"#interface\">User Interface</a>\n              </li>\n              <li>\n                  <a href=\"#users\">Users</a>\n              </li>\n          </ul>\n      </nav>\n  </div>\n  <div id=\"icons-wrapper\">\n      <section id=\"arrows\">\n          <h2>Arrows</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons arrows-1_cloud-download-93\"></i>\n                  <p>arrows-1_cloud-download-93</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons arrows-1_cloud-upload-94\"></i>\n                  <p>arrows-1_cloud-upload-94</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons arrows-1_minimal-down\"></i>\n                  <p>arrows-1_minimal-down</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons arrows-1_minimal-left\"></i>\n                  <p>arrows-1_minimal-left</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons arrows-1_minimal-right\"></i>\n                  <p>arrows-1_minimal-right</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons arrows-1_minimal-up\"></i>\n                  <p>arrows-1_minimal-up</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons arrows-1_refresh-69\"></i>\n                  <p>arrows-1_refresh-69</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons arrows-1_share-66\"></i>\n                  <p>arrows-1_share-66</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"business\">\n          <h2>Business &amp; Finance</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons business_badge\"></i>\n                  <p>business_badge</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons business_bank\"></i>\n                  <p>business_bank</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons business_briefcase-24\"></i>\n                  <p>business_briefcase-24</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons business_bulb-63\"></i>\n                  <p>business_bulb-63</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons business_chart-bar-32\"></i>\n                  <p>business_chart-bar-32</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons business_chart-pie-36\"></i>\n                  <p>business_chart-pie-36</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons business_globe\"></i>\n                  <p>business_globe</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons business_money-coins\"></i>\n                  <p>business_money-coins</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"clothes\">\n          <h2>Clothes &amp; Accessories</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons clothes_tie-bow\"></i>\n                  <p>clothes_tie-bow</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"design\">\n          <h2>Design &amp; Development</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons design_app\"></i>\n                  <p>design_app</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons design_bullet-list-67\"></i>\n                  <p>design_bullet-list-67</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons design_image\"></i>\n                  <p>design_image</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons design_palette\"></i>\n                  <p>design_palette</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons design_scissors\"></i>\n                  <p>design_scissors</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons design_vector\"></i>\n                  <p>design_vector</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons design-2_html5\"></i>\n                  <p>design-2_html5</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons design-2_ruler-pencil\"></i>\n                  <p>design-2_ruler-pencil</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"emoticons\">\n          <h2>Emoticons</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons emoticons_satisfied\"></i>\n                  <p>emoticons_satisfied</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"files\">\n          <h2>Files &amp; Folders</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons files_box\"></i>\n                  <p>files_box</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons files_paper\"></i>\n                  <p>files_paper</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons files_single-copy-04\"></i>\n                  <p>files_single-copy-04</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"medical\">\n          <h2>Healthcare &amp; Medical</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons health_ambulance\"></i>\n                  <p>health_ambulance</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"loaders\">\n          <h2>Loaders</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons loader_gear spin\"></i>\n                  <p>loader_gear</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons loader_refresh spin\"></i>\n                  <p>loader_refresh</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"maps\">\n          <h2>Maps &amp; Location</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons location_bookmark\"></i>\n                  <p>location_bookmark</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons location_compass-05\"></i>\n                  <p>location_compass-05</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons location_map-big\"></i>\n                  <p>location_map-big</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons location_pin\"></i>\n                  <p>location_pin</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons location_world\"></i>\n                  <p>location_world</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"media\">\n          <h2>Media</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons media-1_album\"></i>\n                  <p>media-1_album</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons media-1_button-pause\"></i>\n                  <p>media-1_button-pause</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons media-1_button-play\"></i>\n                  <p>media-1_button-play</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons media-1_button-power\"></i>\n                  <p>media-1_button-power</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons media-1_camera-compact\"></i>\n                  <p>media-1_camera-compact</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons media-2_note-03\"></i>\n                  <p>media-2_note-03</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons media-2_sound-wave\"></i>\n                  <p>media-2_sound-wave</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"objects\">\n          <h2>Objects</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons objects_diamond\"></i>\n                  <p>objects_diamond</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons objects_globe\"></i>\n                  <p>objects_globe</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons objects_key-25\"></i>\n                  <p>objects_key-25</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons objects_planet\"></i>\n                  <p>objects_planet</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons objects_spaceship\"></i>\n                  <p>objects_spaceship</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons objects_support-17\"></i>\n                  <p>objects_support-17</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons objects_umbrella-13\"></i>\n                  <p>objects_umbrella-13</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"school\">\n          <h2>School &amp; Education</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons education_agenda-bookmark\"></i>\n                  <p>education_agenda-bookmark</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons education_atom\"></i>\n                  <p>education_atom</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons education_glasses\"></i>\n                  <p>education_glasses</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons education_hat\"></i>\n                  <p>education_hat</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons education_paper\"></i>\n                  <p>education_paper</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"shopping\">\n          <h2>Shopping</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons shopping_bag-16\"></i>\n                  <p>shopping_bag-16</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons shopping_basket\"></i>\n                  <p>shopping_basket</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons shopping_box\"></i>\n                  <p>shopping_box</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons shopping_cart-simple\"></i>\n                  <p>shopping_cart-simple</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons shopping_credit-card\"></i>\n                  <p>shopping_credit-card</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons shopping_delivery-fast\"></i>\n                  <p>shopping_delivery-fast</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons shopping_shop\"></i>\n                  <p>shopping_shop</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons shopping_tag-content\"></i>\n                  <p>shopping_tag-content</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"sport\">\n          <h2>Sport</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons sport_trophy\"></i>\n                  <p>sport_trophy</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons sport_user-run\"></i>\n                  <p>sport_user-run</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"technology\">\n          <h2>Technology</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons tech_controller-modern\"></i>\n                  <p>tech_controller-modern</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons tech_headphones\"></i>\n                  <p>tech_headphones</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons tech_laptop\"></i>\n                  <p>tech_laptop</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons tech_mobile\"></i>\n                  <p>tech_mobile</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons tech_tablet\"></i>\n                  <p>tech_tablet</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons tech_tv\"></i>\n                  <p>tech_tv</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons tech_watch-time\"></i>\n                  <p>tech_watch-time</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"text\">\n          <h2>Text Editing</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons text_align-center\"></i>\n                  <p>text_align-center</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons text_align-left\"></i>\n                  <p>text_align-left</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons text_bold\"></i>\n                  <p>text_bold</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons text_caps-small\"></i>\n                  <p>text_caps-small</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"gestures\">\n          <h2>Touch Gestures</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons gestures_tap-01\"></i>\n                  <p>gestures_tap-01</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"transportation\">\n          <h2>Transportation</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons transportation_air-baloon\"></i>\n                  <p>transportation_air-baloon</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons transportation_bus-front-12\"></i>\n                  <p>transportation_bus-front-12</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"travel\">\n          <h2>Travel</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons travel_info\"></i>\n                  <p>travel_info</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons travel_istanbul\"></i>\n                  <p>travel_istanbul</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"interface\">\n          <h2>User Interface</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons ui-1_bell-53\"></i>\n                  <p>ui-1_bell-53</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-1_calendar-60\"></i>\n                  <p>ui-1_calendar-60</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-1_check\"></i>\n                  <p>ui-1_check</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-1_lock-circle-open\"></i>\n                  <p>ui-1_lock-circle-open</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-1_send\"></i>\n                  <p>ui-1_send</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-1_settings-gear-63\"></i>\n                  <p>ui-1_settings-gear-63</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-1_simple-add\"></i>\n                  <p>ui-1_simple-add</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-1_simple-delete\"></i>\n                  <p>ui-1_simple-delete</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-1_simple-remove\"></i>\n                  <p>ui-1_simple-remove</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-1_zoom-bold\"></i>\n                  <p>ui-1_zoom-bold</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-2_chat-round\"></i>\n                  <p>ui-2_chat-round</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-2_favourite-28\"></i>\n                  <p>ui-2_favourite-28</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-2_like\"></i>\n                  <p>ui-2_like</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-2_settings-90\"></i>\n                  <p>ui-2_settings-90</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-2_time-alarm\"></i>\n                  <p>ui-2_time-alarm</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-1_email-85\"></i>\n                  <p>ui-1_email-85</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"users\">\n          <h2>Users</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons users_circle-08\"></i>\n                  <p>users_circle-08</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons users_single-02\"></i>\n                  <p>users_single-02</p>\n              </li>\n          </ul>\n      </section>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "vGOd":
    /*!***********************************************************!*\
      !*** ./src/app/examples/ecommerce/ecommerce.component.ts ***!
      \***********************************************************/

    /*! exports provided: EcommerceComponent */

    /***/
    function vGOd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EcommerceComponent", function () {
        return EcommerceComponent;
      });
      /* harmony import */


      var _raw_loader_ecommerce_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./ecommerce.component.html */
      "l1hn");
      /* harmony import */


      var _ecommerce_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ecommerce.component.scss */
      "d4Bs");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var EcommerceComponent = /*#__PURE__*/function () {
        function EcommerceComponent() {
          _classCallCheck(this, EcommerceComponent);

          this.doubleSlider = [1000, 5000];
          this.data = new Date();
        }

        _createClass(EcommerceComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var body = document.getElementsByTagName('body')[0];
            body.classList.add('ecommerce-page');
            var navbar = document.getElementsByTagName('nav')[0];
            navbar.classList.add('navbar-transparent');
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var body = document.getElementsByTagName('body')[0];
            body.classList.remove('ecommerce-page');
            var navbar = document.getElementsByTagName('nav')[0];
            navbar.classList.remove('navbar-transparent');
          }
        }]);

        return EcommerceComponent;
      }();

      EcommerceComponent.ctorParameters = function () {
        return [];
      };

      EcommerceComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-ecommerce',
        template: _raw_loader_ecommerce_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_ecommerce_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [])], EcommerceComponent);
      /***/
    },

    /***/
    "w1at":
    /*!**************************************************!*\
      !*** ./src/app/examples/examples.component.scss ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function w1at(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleGFtcGxlcy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "x1eH":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/examples/productpage/productpage.component.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function x1eH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"wrapper\">\n    <div class=\"page-header page-header-mini\">\n        <div class=\"page-header-image rellax-header\" data-rellax-speed=\"-8\" style=\"background-image: url('assets/img/pp-cov.jpg') ;\">\n        </div>\n    </div>\n    <div class=\"section\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-5\">\n                  <ngb-carousel>\n                      <ng-template ngbSlide>\n                        <img class=\"d-block img-raised\" src=\"assets/img/pp-1.jpg\" alt=\"First slide\">\n                      </ng-template>\n                      <ng-template ngbSlide>\n                          <img class=\"d-block img-raised\" src=\"assets/img/pp-2.jpg\" alt=\"Second slide\">\n                      </ng-template>\n                      <ng-template ngbSlide>\n                        <img class=\"d-block img-raised\" src=\"assets/img/pp-3.jpg\" alt=\"Third slide\">\n                      </ng-template>\n                      <ng-template ngbSlide>\n                        <img class=\"d-block img-raised\" src=\"assets/img/pp-4.jpg\" alt=\"Third slide\">\n                      </ng-template>\n                  </ngb-carousel>\n                    <p class=\"blockquote blockquote-primary\">\n                        \"And thank you for turning my personal jean jacket into a couture piece. Wear yours with mirrored sunglasses on vacation.\"\n                        <br>\n                        <br>\n                        <small>Kanye West</small>\n                    </p>\n                </div>\n                <div class=\"col-md-6 ml-auto mr-auto\">\n                    <h2 class=\"title\"> Saint Laurent </h2>\n                    <h5 class=\"category\">Slim-Fit Leather Biker Jacket</h5>\n                    <h2 class=\"main-price\">$3,390</h2>\n                    <ngb-accordion #acc=\"ngbAccordion\" activeIds=\"config-panel-one\" class=\"card-plain\">\n                        <ngb-panel id=\"config-panel-one\">\n                            <ng-template ngbPanelTitle>\n                              <a class=\"collapsed\">\n                                  Description\n                                  <i class=\"now-ui-icons arrows-1_minimal-down\"></i>\n                              </a>\n                            </ng-template>\n                            <ng-template ngbPanelContent>\n                                  <p>Eres' daring 'Grigri Fortune' swimsuit has the fit and coverage of a bikini in a one-piece silhouette. This fuchsia style is crafted from the label's sculpting peau douce fabric and has flattering cutouts through the torso and back. Wear yours with mirrored sunglasses on vacation.</p>\n                            </ng-template>\n                        </ngb-panel>\n                        <ngb-panel>\n                            <ng-template ngbPanelTitle>\n                              <a class=\"collapsed\">\n                                  Designer Information\n                                  <i class=\"now-ui-icons arrows-1_minimal-down\"></i>\n                              </a>\n                            </ng-template>\n                            <ng-template ngbPanelContent>\n                                <p>An infusion of West Coast cool and New York attitude, Rebecca Minkoff is synonymous with It girl style. Minkoff burst on the fashion scene with her best-selling 'Morning After Bag' and later expanded her offering with the Rebecca Minkoff Collection - a range of luxe city staples with a \"downtown romantic\" theme.</p>\n                            </ng-template>\n                        </ngb-panel>\n                        <ngb-panel>\n                            <ng-template ngbPanelTitle>\n                              <a class=\"collapsed\">\n                                  Details and Care\n                                  <i class=\"now-ui-icons arrows-1_minimal-down\"></i>\n                              </a>\n                            </ng-template>\n                            <ng-template ngbPanelContent>\n                              <ul>\n                                  <li>Storm and midnight-blue stretch cotton-blend</li>\n                                  <li>Notch lapels, functioning buttoned cuffs, two front flap pockets, single vent, internal pocket</li>\n                                  <li>Two button fastening</li>\n                                  <li>84% cotton, 14% nylon, 2% elastane</li>\n                                  <li>Dry clean</li>\n                              </ul>\n                            </ng-template>\n                        </ngb-panel>\n                    </ngb-accordion>\n                    <div class=\"row pick-size\">\n                        <div class=\"col-lg-6 col-md-8 col-sm-6\">\n                            <label>Select color</label>\n                            <angular2-multiselect [data]=\"dropdownList1\" [(ngModel)]=\"selectedItems1\"\n                                [settings]=\"dropdownSettings1\"\n                                (onSelect)=\"onItemSelect($event)\"\n                                (onDeSelect)=\"OnItemDeSelect($event)\"\n                                (onSelectAll)=\"onSelectAll($event)\"\n                                (onDeSelectAll)=\"onDeSelectAll($event)\">\n                            </angular2-multiselect>\n                        </div>\n                        <div class=\"col-lg-6 col-md-8 col-sm-6\">\n                            <label>Select size</label>\n                            <angular2-multiselect [data]=\"dropdownList\" [(ngModel)]=\"selectedItems\"\n                                [settings]=\"dropdownSettings\"\n                                (onSelect)=\"onItemSelect($event)\"\n                                (onDeSelect)=\"OnItemDeSelect($event)\"\n                                (onSelectAll)=\"onSelectAll($event)\"\n                                (onDeSelectAll)=\"onDeSelectAll($event)\">\n                            </angular2-multiselect>\n                        </div>\n                    </div>\n                    <div class=\"row justify-content-end\">\n                        <button class=\"btn btn-primary mr-3\">Add to Cart &nbsp;<i class=\"now-ui-icons shopping_cart-simple\"></i></button>\n                    </div>\n                </div>\n            </div>\n            <div class=\"section\">\n                <div class=\"row\">\n                    <div class=\"col-md-8 ml-auto mr-auto text-center mr-5\">\n                        <h2 class=\"title\">How to wear it</h2>\n                        <h4 class=\"description\">You need more information? Check what other persons are saying about our product. They are very happy with their purchase.</h4>\n                    </div>\n                </div>\n                <div class=\"section-story-overview\">\n                    <div class=\"row\">\n                        <div class=\"col-md-4 ml-auto mr-auto\">\n                            <div class=\"image-container image-left\" style=\"background-image: url('assets/img/pp-5.jpg')\">\n                                <!-- First image on the left side -->\n                                <p class=\"blockquote blockquote-primary\">\"Over the span of the satellite record, Arctic sea ice has been declining significantly, while sea ice in the Antarctichas increased very slightly\"\n                                    <br>\n                                    <br>\n                                    <small> - NOAA</small>\n                                </p>\n                            </div>\n                            <!-- Second image on the left side of the article -->\n                            <div class=\"image-container\" style=\"background-image: url('assets/img/bg29.jpg')\"></div>\n                        </div>\n                        <div class=\"col-md-4 ml-auto mr-auto\">\n                            <!-- First image on the right side, above the article -->\n                            <div class=\"image-container image-right\" style=\"background-image: url('assets/img/pp-4.jpg')\"></div>\n                            <h3>So what does the new record for the lowest level of winter ice actually mean</h3>\n                            <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens with climate change. Even if the Arctic continues to be one of the fastest-warming regions of the world, it will always be plunged into bitterly cold polar dark every winter. And year-by-year, for all kinds of natural reasons, there’s huge variety of the state of the ice.\n                            </p>\n                            <p>For a start, it does not automatically follow that a record amount of ice will melt this summer. More important for determining the size of the annual thaw is the state of the weather as the midnight sun approaches and temperatures rise. But over the more than 30 years of satellite records, scientists have observed a clear pattern of decline, decade-by-decade.</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"features-4\">\n                <div class=\"container\">\n                    <div class=\"row\">\n                        <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                            <h2 class=\"title\">Not convinced yet!</h2>\n                            <h4 class=\"description\">Havenly is a convenient, personal and affordable way to redecorate your home room by room. Collaborate with our professional interior designers on our online platform. </h4>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-4\">\n                            <div class=\"card card-background card-raised\" data-background-color style=\"background-image: url('assets/img/bg24.jpg')\">\n                                <div class=\"info\">\n                                    <div class=\"icon icon-white\">\n                                        <i class=\"now-ui-icons shopping_delivery-fast\"></i>\n                                    </div>\n                                    <div class=\"description\">\n                                        <h4 class=\"info-title\">1 Day Delivery </h4>\n                                        <p>Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.</p>\n                                        <a href=\"#\" class=\"ml-3\">Find more...</a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-4\">\n                            <div class=\"card card-background card-raised\" data-background-color style=\"background-image: url('assets/img/bg28.jpg')\">\n                                <div class=\"info\">\n                                    <div class=\"icon icon-white\">\n                                        <i class=\"now-ui-icons business_badge\"></i>\n                                    </div>\n                                    <div class=\"description\">\n                                        <h4 class=\"info-title\">Refund Policy</h4>\n                                        <p>Divide details about your product or agency work into parts. Write a few lines about each one. Very good refund policy just for you.</p>\n                                        <a href=\"#\">Find more...</a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-4\">\n                            <div class=\"card card-background card-raised\" data-background-color style=\"background-image: url('assets/img/bg25.jpg')\">\n                                <div class=\"info\">\n                                    <div class=\"icon\">\n                                        <i class=\"now-ui-icons ui-2_favourite-28\"></i>\n                                    </div>\n                                    <div class=\"description\">\n                                        <h4 class=\"info-title\">Popular Item</h4>\n                                        <p>Share a floor plan, and we'll create a visualization of your room. A paragraph describing a feature will be enough. This is a popular item for you.</p>\n                                        <a href=\"#\" class=\"ml-3\">Find more...</a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"section related-products\" data-background-color=\"black\">\n        <div class=\"container\">\n            <h3 class=\"title text-center\">You may also be interested in:</h3>\n            <div class=\"row\">\n                <div class=\"col-sm-6 col-md-3\">\n                    <div class=\"card card-product\">\n                        <div class=\"card-image\">\n                            <a href=\"#\">\n                                <img class=\"img rounded\" src=\"assets/img/saint-laurent.jpg\" />\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <h6 class=\"category text-danger\">Trending</h6>\n                            <h4 class=\"card-title\">\n                                <a href=\"#\" class=\"card-link\">Dolce & Gabbana</a>\n                            </h4>\n                            <div class=\"card-description\">\n                                Dolce & Gabbana's 'Greta' tote has been crafted in Italy from hard-wearing red textured-leather.\n                            </div>\n                            <div class=\"card-footer\">\n                                <div class=\"price-container\">\n                                    <span class=\"price\">€1,459</span>\n                                </div>\n                                <button class=\"btn btn-neutral btn-icon btn-round pull-right\" placement=\"top\" ngbTooltip=\"Add to wishlist\">\n                                    <i class=\"now-ui-icons ui-2_favourite-28\"></i>\n                                </button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-sm-6 col-md-3\">\n                    <div class=\"card card-product\">\n                        <div class=\"card-image\">\n                            <a href=\"#\">\n                                <img class=\"img rounded\" src=\"assets/img/gucci.jpg\" />\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <h6 class=\"category text-muted\">Popular</h6>\n                            <h4 class=\"card-title\">\n                                <a href=\"#\" class=\"card-link\">Balmain</a>\n                            </h4>\n                            <div class=\"card-description\">\n                                Balmain's mid-rise skinny jeans are cut with stretch to ensure they retain their second-skin fit but move comfortably.\n                            </div>\n                            <div class=\"card-footer\">\n                                <div class=\"price-container\">\n                                    <span class=\"price\">€459</span>\n                                </div>\n                                <button class=\"btn btn-neutral btn-icon btn-round pull-right\" placement=\"top\" ngbTooltip=\"Add to wishlist\">\n                                    <i class=\"now-ui-icons ui-2_favourite-28\"></i>\n                                </button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-sm-6 col-md-3\">\n                    <div class=\"card card-product\">\n                        <div class=\"card-image\">\n                            <a href=\"#\">\n                                <img class=\"img rounded\" src=\"assets/img/wooyoungmi.jpg\" />\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <h6 class=\"category text-muted\">Popular</h6>\n                            <h4 class=\"card-title\">\n                                <a href=\"#\" class=\"card-link\">Balenciaga</a>\n                            </h4>\n                            <div class=\"card-description\">\n                                Balenciaga's black textured-leather wallet is finished with the label's iconic 'Giant' studs. This is where you can...\n                            </div>\n                            <div class=\"card-footer\">\n                                <div class=\"price-container\">\n                                    <span class=\"price\">€559</span>\n                                </div>\n                                <button class=\"btn btn-neutral btn-icon btn-round pull-right\" placement=\"top\" ngbTooltip=\"Add to wishlist\">\n                                    <i class=\"now-ui-icons ui-2_favourite-28\"></i>\n                                </button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-sm-6 col-md-3\">\n                    <div class=\"card card-product\">\n                        <div class=\"card-image\">\n                            <a href=\"#\">\n                                <img class=\"img rounded\" src=\"assets/img/saint-laurent1.jpg\" />\n                            </a>\n                        </div>\n                        <div class=\"card-body\">\n                            <h6 class=\"category text-rose\">Trending</h6>\n                            <h4 class=\"card-title\">\n                                <a href=\"#\" class=\"card-link\">Dolce & Gabbana</a>\n                            </h4>\n                            <div class=\"card-description\">\n                                Dolce & Gabbana's 'Greta' tote has been crafted in Italy from hard-wearing red textured-leather.\n                            </div>\n                            <div class=\"card-footer\">\n                                <div class=\"price-container\">\n                                    <span class=\"price\"> € 1,359</span>\n                                </div>\n                                <button class=\"btn btn-neutral btn-icon btn-round pull-right\" placement=\"top\" ngbTooltip=\"Add to wishlist\">\n                                    <i class=\"now-ui-icons ui-2_favourite-28\"></i>\n                                </button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <footer class=\"footer footer-big footer-white\">\n        <div class=\"container\">\n            <div class=\"content\">\n                <div class=\"row\">\n                    <div class=\"col-md-2\">\n                        <h5>About Us</h5>\n                        <ul class=\"links-vertical\">\n                            <li>\n                                <a href=\"#\" class=\"text-muted\">\n                                    Blog\n                                </a>\n                            </li>\n                            <li>\n                                <a href=\"#\" class=\"text-muted\">\n                                    About Us\n                                </a>\n                            </li>\n                            <li>\n                                <a href=\"#\" class=\"text-muted\">\n                                    Presentation\n                                </a>\n                            </li>\n                            <li>\n                                <a href=\"#\" class=\"text-muted\">\n                                    Contact Us\n                                </a>\n                            </li>\n                        </ul>\n                    </div>\n                    <div class=\"col-md-2\">\n                        <h5>Market</h5>\n                        <ul class=\"links-vertical\">\n                            <li>\n                                <a href=\"#\" class=\"text-muted\">\n                                    Sales FAQ\n                                </a>\n                            </li>\n                            <li>\n                                <a href=\"#\" class=\"text-muted\">\n                                    How to Register\n                                </a>\n                            </li>\n                            <li>\n                                <a href=\"#\" class=\"text-muted\">\n                                    Sell Goods\n                                </a>\n                            </li>\n                            <li>\n                                <a href=\"#\" class=\"text-muted\">\n                                    Receive Payment\n                                </a>\n                            </li>\n                            <li>\n                                <a href=\"#\" class=\"text-muted\">\n                                    Transactions Issues\n                                </a>\n                            </li>\n                            <li>\n                                <a href=\"#\" class=\"text-muted\">\n                                    Affiliates Program\n                                </a>\n                            </li>\n                        </ul>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <h5>Social Feed</h5>\n                        <div class=\"social-feed\">\n                            <div class=\"feed-line\">\n                                <i class=\"fa fa-twitter\"></i>\n                                <p>How to handle ethical disagreements with your clients.</p>\n                            </div>\n                            <div class=\"feed-line\">\n                                <i class=\"fa fa-twitter\"></i>\n                                <p>The tangible benefits of designing at 1x pixel density.</p>\n                            </div>\n                            <div class=\"feed-line\">\n                                <i class=\"fa fa-facebook-square\"></i>\n                                <p>A collection of 25 stunning sites that you can use for inspiration.</p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <h5>Follow Us</h5>\n                        <ul class=\"social-buttons\">\n                            <li>\n                                <a href=\"#\" class=\"btn btn-icon btn-neutral btn-twitter btn-round\">\n                                    <i class=\"fa fa-twitter\"></i>\n                                </a>\n                            </li>\n                            <li>\n                                <a href=\"#\" class=\"btn btn-icon btn-neutral btn-facebook btn-round\">\n                                    <i class=\"fa fa-facebook-square\"></i>\n                                </a>\n                            </li>\n                            <li>\n                                <a href=\"#\" class=\"btn btn-icon btn-neutral btn-dribbble btn-round\">\n                                    <i class=\"fa fa-dribbble\"></i>\n                                </a>\n                            </li>\n                            <li>\n                                <a href=\"#\" class=\"btn btn-icon btn-neutral btn-google btn-round\">\n                                    <i class=\"fa fa-google-plus\"></i>\n                                </a>\n                            </li>\n                            <li>\n                                <a href=\"#\" class=\"btn btn-icon btn-neutral btn-instagram btn-round\">\n                                    <i class=\"fa fa-instagram\"></i>\n                                </a>\n                            </li>\n                        </ul>\n                        <h5>\n                            <small>Numbers Don't Lie</small>\n                        </h5>\n                        <h5>14.521\n                            <small class=\"text-muted\">Freelancers</small>\n                        </h5>\n                        <h5>1.423.183\n                            <small class=\"text-muted\">Transactions</small>\n                        </h5>\n                    </div>\n                </div>\n            </div>\n            <hr />\n            <div class=\"copyright\">\n                Copyright &copy;\n                {{data | date: 'yyyy'}} Josh Levy All Rights Reserved.\n            </div>\n        </div>\n    </footer>\n</div>\n";
      /***/
    },

    /***/
    "xQKc":
    /*!*******************************************************!*\
      !*** ./src/app/examples/profile/profile.component.ts ***!
      \*******************************************************/

    /*! exports provided: ProfileComponent */

    /***/
    function xQKc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
        return ProfileComponent;
      });
      /* harmony import */


      var _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./profile.component.html */
      "q3QT");
      /* harmony import */


      var _profile_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./profile.component.scss */
      "zXGc");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rellax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rellax */
      "HbP6");
      /* harmony import */


      var rellax__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rellax__WEBPACK_IMPORTED_MODULE_3__);

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var ProfileComponent = /*#__PURE__*/function () {
        function ProfileComponent() {
          _classCallCheck(this, ProfileComponent);

          this.zoom = 14;
          this.lat = 44.445248;
          this.lng = 26.099672;
          this.styles = [{
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
              "color": "#e9e9e9"
            }, {
              "lightness": 17
            }]
          }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
              "color": "#f5f5f5"
            }, {
              "lightness": 20
            }]
          }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
              "color": "#ffffff"
            }, {
              "lightness": 17
            }]
          }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
              "color": "#ffffff"
            }, {
              "lightness": 29
            }, {
              "weight": 0.2
            }]
          }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
              "color": "#ffffff"
            }, {
              "lightness": 18
            }]
          }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
              "color": "#ffffff"
            }, {
              "lightness": 16
            }]
          }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
              "color": "#f5f5f5"
            }, {
              "lightness": 21
            }]
          }, {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [{
              "color": "#dedede"
            }, {
              "lightness": 21
            }]
          }, {
            "elementType": "labels.text.stroke",
            "stylers": [{
              "visibility": "on"
            }, {
              "color": "#ffffff"
            }, {
              "lightness": 16
            }]
          }, {
            "elementType": "labels.text.fill",
            "stylers": [{
              "saturation": 36
            }, {
              "color": "#333333"
            }, {
              "lightness": 40
            }]
          }, {
            "elementType": "labels.icon",
            "stylers": [{
              "visibility": "off"
            }]
          }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
              "color": "#f2f2f2"
            }, {
              "lightness": 19
            }]
          }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
              "color": "#fefefe"
            }, {
              "lightness": 20
            }]
          }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
              "color": "#fefefe"
            }, {
              "lightness": 17
            }, {
              "weight": 1.2
            }]
          }];
          this.data = new Date();
        }

        _createClass(ProfileComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var rellaxHeader = new rellax__WEBPACK_IMPORTED_MODULE_3__('.rellax-header');
            var body = document.getElementsByTagName('body')[0];
            body.classList.add('profile-page');
            var navbar = document.getElementsByTagName('nav')[0];
            navbar.classList.add('navbar-transparent');
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var body = document.getElementsByTagName('body')[0];
            body.classList.remove('profile-page');
            var navbar = document.getElementsByTagName('nav')[0];
            navbar.classList.remove('navbar-transparent');
          }
        }]);

        return ProfileComponent;
      }();

      ProfileComponent.ctorParameters = function () {
        return [];
      };

      ProfileComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-profile',
        template: _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_profile_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [])], ProfileComponent);
      /***/
    },

    /***/
    "yB8t":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sections/blogs/blogs.component.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function yB8t(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"cd-section\" id=\"blogs\">\n    <!--     *********     BLOGS 1      *********      -->\n    <div class=\"blogs-1\" id=\"blogs-1\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-10 ml-auto mr-auto\">\n                    <h2 class=\"title\">Latest Blogposts</h2>\n                    <br />\n                    <div class=\"card card-plain card-blog\">\n                        <div class=\"row\">\n                            <div class=\"col-md-5\">\n                                <div class=\"card-image\">\n                                    <img class=\"img img-raised rounded\" src=\"assets/img/examples/card-blog4.jpg\" />\n                                </div>\n                            </div>\n                            <div class=\"col-md-7\">\n                                <h6 class=\"category text-info\">Enterprise</h6>\n                                <h3 class=\"card-title\">\n                                    <a href=\"#\">Warner Music Group buys concert discovery service Songkick</a>\n                                </h3>\n                                <p class=\"card-description\">\n                                    Warner Music Group announced today it’s acquiring the selected assets of the music platform Songkick, including its app for finding concerts and the company’s trademark. Songkick has been involved in a lawsuit against the major…\n                                    <a href=\"#\"> Read More </a>\n                                </p>\n                                <p class=\"author\">\n                                    by\n                                    <a href=\"#\">\n                                        <b>Sarah Perez</b>\n                                    </a>, 2 days ago\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card card-plain card-blog\">\n                        <div class=\"row\">\n                            <div class=\"col-md-7\">\n                                <h6 class=\"category text-danger\">\n                                    <i class=\"now-ui-icons now-ui-icons media-2_sound-wave\"></i> Startup\n                                </h6>\n                                <h3 class=\"card-title\">\n                                    <a href=\"#\">Insticator raises $5.2M to help publishers</a>\n                                </h3>\n                                <p class=\"card-description\">\n                                    Insticator is announcing that it has raised $5.2 million in Series A funding. The startup allows online publishers to add quizzes, polls and other interactive elements (either created by Insticator or by the publisher themselves) to their stories.\n                                    <a href=\"#\"> Read More </a>\n                                </p>\n                                <p class=\"author\">\n                                    by\n                                    <a href=\"#\">\n                                        <b>Anthony Ha</b>\n                                    </a>, 5 days ago\n                                </p>\n                            </div>\n                            <div class=\"col-md-5\">\n                                <div class=\"card-image\">\n                                    <img class=\"img img-raised rounded\n                        \" src=\"assets/img/examples/card-blog6.jpg\" />\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END BLOGS 1      *********      -->\n    <!--     *********     BLOGS 2      *********      -->\n    <div class=\"blogs-2\" id=\"blogs-2\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-10 ml-auto mr-auto\">\n                    <h2 class=\"title\">Latest Blogposts 2</h2>\n                    <br />\n                    <div class=\"row justify-content-center\">\n                        <div class=\"col-md-5\">\n                            <div class=\"card card-plain card-blog\">\n                                <div class=\"card-image\">\n                                    <a href=\"#\">\n                                        <img class=\"img img-raised rounded\" src=\"assets/img/examples/card-blog7.jpg\" />\n                                    </a>\n                                </div>\n                                <div class=\"card-body\">\n                                    <h6 class=\"category text-info\">Enterprise</h6>\n                                    <h5 class=\"card-title\">\n                                        <a href=\"#\">Alexa brings hands-free TV to more devices</a>\n                                    </h5>\n                                    <p class=\"card-description\">\n                                        Alexa’s latest trick is offering a hands-free TV viewing experience, that will allow consumers to turn on or off their television, change inputs, fast forward, rewind and more, without having to first invoke a specific skill, or even press a button on their remote.\n                                        <a href=\"#\">Read More </a>\n                                    </p>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-5\">\n                            <div class=\"card card-plain card-blog\">\n                                <div class=\"card-image\">\n                                    <a href=\"#\">\n                                        <img class=\"img img-raised rounded\" src=\"assets/img/examples/card-blog9.jpg\" />\n                                    </a>\n                                </div>\n                                <div class=\"card-body\">\n                                    <h6 class=\"category text-success\">\n                                        M&A\n                                    </h6>\n                                    <h5 class=\"card-title\">\n                                        <a href=\"#\">Uber, Yandex combine ridesharing and UberEATS in $3.72B. JV</a>\n                                    </h5>\n                                    <p class=\"card-description\">\n                                        As Uber works through a huge amount of internal management turmoil, the company is also consolidating and rationalizing more of its international business. Today, the company announced it will be combining its rides-on-demand business and UberEATS.\n                                        <a href=\"#\">Read More</a>\n                                    </p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row justify-content-center\">\n                        <div class=\"col-md-5\">\n                            <div class=\"card card-plain card-blog\">\n                                <div class=\"card-image\">\n                                    <a href=\"#\">\n                                        <img class=\"img img-raised rounded\" src=\"assets/img/examples/card-blog16.jpg\" />\n                                    </a>\n                                </div>\n                                <div class=\"card-body\">\n                                    <h6 class=\"category text-info\">Music</h6>\n                                    <h5 class=\"card-title\">\n                                        <a href=\"#\">The Affect Music Has On Different Teens</a>\n                                    </h5>\n                                    <p class=\"card-description\">\n                                        Music is something that every person has his or her own specific opinion about. Different people have different taste, and various types of music have many ways of leaving an impact on someone.\n                                        <a href=\"#\">Read More </a>\n                                    </p>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-5\">\n                            <div class=\"card card-plain card-blog\">\n                                <div class=\"card-image\">\n                                    <a href=\"#\">\n                                        <img class=\"img img-raised rounded\" src=\"assets/img/examples/card-blog15.jpg\" />\n                                    </a>\n                                </div>\n                                <div class=\"card-body\">\n                                    <h6 class=\"category text-success\">\n                                        Broadcasting\n                                    </h6>\n                                    <h5 class=\"card-title\">\n                                        <a href=\"#\">Radio networks to broadcast a common radio format</a>\n                                    </h5>\n                                    <p class=\"card-description\">\n                                        Radio broadcasting is a unidirectional wireless transmission over radio waves intended to reach a wide audience. Stations can be linked in radio networks to broadcast a common radio format.\n                                        <a href=\"#\"> Read More </a>\n                                    </p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END BLOGS 2      *********      -->\n    <!--     *********     BLOGS 3      *********      -->\n    <div class=\"blogs-3\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-10 ml-auto mr-auto\">\n                    <h2 class=\"title\">Latest Blogposts 3</h2>\n                    <br />\n                    <div class=\"card card-plain card-blog\">\n                        <div class=\"row\">\n                            <div class=\"col-md-4\">\n                                <div class=\"card-image\">\n                                    <img class=\"img img-raised rounded\" src=\"assets/img/examples/card-blog10.jpg\" />\n                                </div>\n                            </div>\n                            <div class=\"col-md-8\">\n                                <h3 class=\"card-title\">\n                                    <a href=\"#\">Rover raised $65 million for pet sitting</a>\n                                </h3>\n                                <p class=\"card-description\">\n                                    Finding temporary housing for your dog should be as easy as renting an Airbnb. That’s the idea behind Rover, which raised $65 million to expand its pet sitting and dog-walking businesses..\n                                    <a href=\"#\"> Read More </a>\n                                </p>\n                                <div class=\"author\">\n                                    <img src=\"assets/img/olivia.jpg\" alt=\"...\" class=\"avatar img-raised\">\n                                    <span>Katie Roof</span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card card-plain card-blog\">\n                        <div class=\"row\">\n                            <div class=\"col-md-4\">\n                                <div class=\"card-image\">\n                                    <a href=\"#\">\n                                        <img class=\"img img-raised rounded\" src=\"assets/img/examples/card-blog11.jpg\" />\n                                    </a>\n                                </div>\n                            </div>\n                            <div class=\"col-md-8\">\n                                <h3 class=\"card-title\">\n                                    <a href=\"#\">MateLabs mixes machine learning with IFTTT</a>\n                                </h3>\n                                <p class=\"card-description\">\n                                    If you’ve ever wanted to train a machine learning model and integrate it with IFTTT, you now can with a new offering from MateLabs. MateVerse, a platform where novices can spin out machine...\n                                    <a href=\"#\"> Read More </a>\n                                </p>\n                                <div class=\"author\">\n                                    <img src=\"assets/img/james.jpg\" alt=\"...\" class=\"avatar img-raised\">\n                                    <span>John Mannes</span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card card-plain card-blog\">\n                        <div class=\"row\">\n                            <div class=\"col-md-4\">\n                                <div class=\"card-image\">\n                                    <a href=\"#\">\n                                        <img class=\"img img-raised rounded\" src=\"assets/img/examples/card-blog12.jpg\" />\n                                    </a>\n                                </div>\n                            </div>\n                            <div class=\"col-md-8\">\n                                <h3 class=\"card-title\">\n                                    <a href=\"#\">US venture investment ticks up in Q2 2017</a>\n                                </h3>\n                                <p class=\"card-description\">\n                                    Venture investment in U.S. startups rose sequentially in the second quarter of 2017, boosted by large, late-stage financings and a few outsized early-stage rounds in tech and healthcare..\n                                    <a href=\"#\"> Read More </a>\n                                </p>\n                                <div class=\"author\">\n                                    <img src=\"assets/img/michael.jpg\" alt=\"...\" class=\"avatar img-raised\">\n                                    <span>Devin Coldewey</span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END BLOGS 4      *********      -->\n    <div class=\"blogs-4\" id=\"blogs-4\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 ml-auto mr-auto\">\n                    <h2 class=\"title\">Latest Blogposts 4</h2>\n                    <br />\n                    <div class=\"card card-plain card-blog\">\n                        <div class=\"card-image\">\n                            <a href=\"#\">\n                                <img class=\"img img-raised rounded\" src=\"assets/img/examples/card-blog13.jpg\" />\n                            </a>\n                        </div>\n                        <h6 class=\"category text-info\">Fashion</h6>\n                        <h3 class=\"card-title\">\n                            <a href=\"#\">Groupon Moves Into Flash Fashion</a>\n                        </h3>\n                        <h5 class=\"card-description\">\n                            More acquisitions for Groupon to widen the net of consumers using its platform for more than daily deals. Today it is announcing the acquisition of ideeli, a flash fashion retailer, for $43 million in...\n                        </h5>\n                        <a href=\"#\" class=\"btn btn-primary btn-round\">Read More</a>\n                    </div>\n                    <div class=\"card card-plain card-blog\">\n                        <div class=\"card-image\">\n                            <a href=\"#\">\n                                <img class=\"img img-raised rounded\" src=\"assets/img/examples/card-blog14.jpg\" />\n                            </a>\n                        </div>\n                        <h6 class=\"category text-success\">Entertainment</h6>\n                        <h3 class=\"card-title\">\n                            <a href=\"#\">When music and technology collide</a>\n                        </h3>\n                        <h5 class=\"card-description\">\n                            Some might say that technology is killing the music industry. But if you look around, there’s a beautiful marriage there — the music industry is evolving every day, and artists are embracing technology in new and innovative ways...\n                        </h5>\n                        <a href=\"#\" class=\"btn btn-primary btn-round\"> Read More</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END BLOGS 4      *********      -->\n    <!--     *********    END BLOGS 5      *********      -->\n    <div class=\"blogs-5\" data-background-color=\"gray\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-10 ml-auto mr-auto\">\n                    <h2 class=\"title\">Latest Blogposts 5</h2>\n                    <div class=\"row\">\n                        <div class=\"col-md-4\">\n                            <div class=\"card card-blog\">\n                                <div class=\"card-image\">\n                                    <a href=\"#\">\n                                        <img class=\"img rounded\" src=\"assets/img/card-blog2.jpg\">\n                                    </a>\n                                </div>\n                                <div class=\"card-body\">\n                                    <h6 class=\"category text-primary\">Features</h6>\n                                    <h5 class=\"card-title\">\n                                        That’s One Way To Ditch Your Passenger\n                                    </h5>\n                                    <p class=\"card-description\">\n                                        As near as we can tell, this guy must have thought he was going over backwards and tapped the rear...\n                                    </p>\n                                    <div class=\"card-footer\">\n                                        <div class=\"author\">\n                                            <img src=\"assets/img/julie.jpg\" alt=\"...\" class=\"avatar img-raised\">\n                                            <span>Mike John</span>\n                                        </div>\n                                        <div class=\"stats stats-right\">\n                                            <i class=\"now-ui-icons tech_watch-time\"></i> 5 min read\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-4\">\n                            <div class=\"card card-blog\">\n                                <div class=\"card-image\">\n                                    <a href=\"#\">\n                                        <img class=\"img rounded\" src=\"assets/img/examples/card-blog18.jpg\">\n                                    </a>\n                                </div>\n                                <div class=\"card-body\">\n                                    <h6 class=\"category text-danger\">Animals</h6>\n                                    <h5 class=\"card-title\">\n                                        Shark Week: How to Watch It Like a Scientist\n                                    </h5>\n                                    <p class=\"card-description\">\n                                        Just when you thought it was safe to turn on your television, the Discovery Channel's \"Shark Week\"...\n                                    </p>\n                                    <div class=\"card-footer\">\n                                        <div class=\"author\">\n                                            <img src=\"assets/img/julie.jpg\" alt=\"...\" class=\"avatar img-raised\">\n                                            <span>Mike John</span>\n                                        </div>\n                                        <div class=\"stats stats-right\">\n                                            <i class=\"now-ui-icons tech_watch-time\"></i> 5 min read\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-4\">\n                            <div class=\"card card-blog\">\n                                <div class=\"card-image\">\n                                    <a href=\"#\">\n                                        <img class=\"img rounded\" src=\"assets/img/examples/card-blog17.jpg\">\n                                    </a>\n                                </div>\n                                <div class=\"card-body\">\n                                    <h6 class=\"category text-primary\">Cars</h6>\n                                    <h5 class=\"card-title\">\n                                        Who's Afraid of the Self-Driving Car?\n                                    </h5>\n                                    <p class=\"card-description\">\n                                        It's been 60 years since the cover of Popular Mechanics magazine gave us the promise of flying cars...\n                                    </p>\n                                    <div class=\"card-footer\">\n                                        <div class=\"author\">\n                                            <img src=\"assets/img/olivia.jpg\" alt=\"...\" class=\"avatar img-raised\">\n                                            <span>Johanna Zmud</span>\n                                        </div>\n                                        <div class=\"stats stats-right\">\n                                            <i class=\"now-ui-icons ui-2_favourite-28\"></i> 2.4K\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--     *********    END BLOGS 5      *********      -->\n</div>\n";
      /***/
    },

    /***/
    "ynWL":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function ynWL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "yt1U":
    /*!***********************************************************!*\
      !*** ./src/app/sections/features/features.component.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function yt1U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmZWF0dXJlcy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "zRkE":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function zRkE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-lg bg-white fixed-top\" color-on-scroll=\"500\">\n  <div class=\"container\">\n    <div class=\"navbar-translate\">\n      <a class=\"navbar-brand\" [routerLink]=\"['/']\">\n        <img src=\"./assets/img/Josh-Levy-Logo.png\" />\n      </a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggler\"\n        aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"\n        (click)=\"sidebarToggle()\">\n        <span class=\"navbar-toggler-bar bar1\"></span>\n        <span class=\"navbar-toggler-bar bar2\"></span>\n        <span class=\"navbar-toggler-bar bar3\"></span>\n      </button>\n    </div>\n    <div class=\"collapse navbar-collapse\" data-nav-image=\"assets/img/blurred-image-1.jpg\" data-color=\"orange\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#skills\">\n            Skills\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#projects\">\n            Projects\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#experience\">\n            Experience\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#resume\">\n            Resume\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" (click)=\"openContactModal()\">\n            Contact\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /*!
      
      =========================================================
      * Now UI Kit Pro Angular - v1.2.0
      =========================================================
      
      * Product Page: https://www.josh-levy.com/product/now-ui-kit-pro-angular
      * Copyright 2019 Josh Levy (https://www.josh-levy.com)
      
      * Coded by Josh Levy
      
      =========================================================
      
      * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
      
      */


      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);
      /***/
    },

    /***/
    "zXGc":
    /*!*********************************************************!*\
      !*** ./src/app/examples/profile/profile.component.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function zXGc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map