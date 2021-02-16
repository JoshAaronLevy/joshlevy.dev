(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+pZr":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/presentation/presentation.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n  <div class=\"page-header clear-filter\">\n    <app-hero></app-hero>\n  </div>\n  <div id=\"skills\" class=\"section section-sections\" data-background-color=\"gray\">\n    <app-skills></app-skills>\n  </div>\n  <div id=\"projects\" class=\"section section-sections\" data-background-color=\"black\">\n    <app-projects></app-projects>\n  </div>\n  <div id=\"experience\" class=\"section section-sections\" data-background-color=\"gray\">\n    <app-work-history></app-work-history>\n  </div>\n  <div id=\"resume\" class=\"section section-sections\" data-background-color=\"black\">\n    <app-resume></app-resume>\n  </div>\n</div>");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/joshlevy/Desktop/joshlevy.dev/src/main.ts */"zUnb");


/***/ }),

/***/ "5v2N":
/*!*********************************************************************!*\
  !*** ./src/app/components/work-history/work-history.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3b3JrLWhpc3RvcnkuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "6bE9":
/*!***********************************************************!*\
  !*** ./src/app/components/projects/projects.component.ts ***!
  \***********************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _raw_loader_projects_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./projects.component.html */ "aggk");
/* harmony import */ var _projects_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects.component.scss */ "Ai5d");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_services_project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/project.service */ "c3AT");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "7zfz");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let ProjectsComponent = class ProjectsComponent {
    constructor(projectService, messageService) {
        this.projectService = projectService;
        this.messageService = messageService;
    }
    ngOnInit() {
        this.loadingProjects = true;
        this.loadingError = false;
        this.markerColor = '#ae0001';
        this.getProjects();
    }
    getProjects() {
        return this.projectService.getProjects().subscribe(data => {
            if (data) {
                this.loadingProjects = false;
                this.projects = data.projects;
                this.projects.sort(function (a, b) {
                    return a.id - b.id;
                });
            }
            else {
                this.loadingProjects = false;
                this.loadingError = true;
                this.showGetError();
            }
        });
    }
    showGetError() {
        this.messageService.add({
            severity: 'error'
        });
    }
};
ProjectsComponent.ctorParameters = () => [
    { type: app_services_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"] },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"] }
];
ProjectsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-projects',
        template: _raw_loader_projects_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"]],
        styles: [_projects_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [app_services_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"],
        primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
], ProjectsComponent);



/***/ }),

/***/ "71yw":
/*!**********************************************************!*\
  !*** ./src/app/presentation/presentation.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmVzZW50YXRpb24uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "8ceZ":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/resume/resume.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid flex-container padded-container\">\n  <div class=\"section-cols\">\n    <div class=\"row centered-section\">\n      <div class=\"container\">\n        <div class=\"col-md-8 ml-auto mr-auto\">\n          <div class=\"section-description text-center\">\n            <h2 class=\"title\">Resume</h2>\n          </div>\n        </div>\n      </div>\n      <div class=\"resume-section\">\n        <div class=\"download-resume-button\">\n          <button pButton pRipple href=\"https://drive.google.com/file/d/1u9kupYDAdh7o_cYGaXCkmdJx4GBGFsRM/view\" target=\"_blank\" type=\"button\" label=\"Download Resume PDF\" class=\"p-button-raised p-button-danger\"></button>\n        </div>\n        <div class=\"embedded-resume\">\n          <iframe src=\"https://drive.google.com/file/d/1u9kupYDAdh7o_cYGaXCkmdJx4GBGFsRM/preview\"></iframe>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "93si":
/*!****************************************************!*\
  !*** ./src/app/components/components.component.ts ***!
  \****************************************************/
/*! exports provided: ComponentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsComponent", function() { return ComponentsComponent; });
/* harmony import */ var _raw_loader_components_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./components.component.html */ "NPo9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let ComponentsComponent = class ComponentsComponent {
    constructor(renderer, config) {
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
    isWeekend(date) {
        const d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    }
    isDisabled(date, current) {
        return date.month !== current.month;
    }
    ngOnInit() {
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('index-page');
    }
    ngOnDestroy() {
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('index-page');
    }
};
ComponentsComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAccordionConfig"] }
];
ComponentsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-components',
        template: _raw_loader_components_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: ["\n    ngb-progressbar {\n        margin-top: 5rem;\n    }\n    "]
    }),
    __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAccordionConfig"]])
], ComponentsComponent);



/***/ }),

/***/ "9ai6":
/*!*******************************************!*\
  !*** ./src/app/services/skill.service.ts ***!
  \*******************************************/
/*! exports provided: SkillService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillService", function() { return SkillService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../environments/environment */ "AytR");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// const httpOptions = {
//   headers: new HttpHeaders({
//     'X-Parse-Application-Id': parseKeys.PARSE_APP_ID,
//     'X-Parse-REST-API-Key': parseKeys.PARSE_REST_API_KEY,
//     'Content-Type':  'application/json'
//   })
// };
const apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
let SkillService = class SkillService {
    constructor(http) {
        this.http = http;
    }
    getSkills() {
        const url = `${apiUrl}/skills`;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => {
            return res;
        }));
    }
    addSkill(params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()) {
        const url = `${apiUrl}/skills`;
        return this.http.post(url, params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => {
            return res;
        }));
    }
};
SkillService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
];
SkillService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
], SkillService);



/***/ }),

/***/ "A9VX":
/*!*******************************************************!*\
  !*** ./src/app/components/skills/skills.component.ts ***!
  \*******************************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _raw_loader_skills_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./skills.component.html */ "WtuU");
/* harmony import */ var _skills_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./skills.component.scss */ "XUpm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_services_skill_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/skill.service */ "9ai6");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "7zfz");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let SkillsComponent = class SkillsComponent {
    constructor(skillService, messageService) {
        this.skillService = skillService;
        this.messageService = messageService;
        this.allSelected = true;
        this.frontEndSelected = false;
        this.backEndSelected = false;
    }
    ngOnInit() {
        this.loadingSkills = true;
        this.loadingError = false;
        this.getSkills();
    }
    getSkills() {
        return this.skillService.getSkills().subscribe(data => {
            if (data) {
                this.loadingSkills = false;
                this.skills = data.skills;
                this.filterSkills(this.filter);
            }
            else {
                this.loadingSkills = false;
                this.loadingError = true;
                this.showGetError();
            }
        });
    }
    filterSkills(filter) {
        this.filter = filter;
        this.filteredSkills = [];
        for (let i = 0; i < this.skills.length; i++) {
            if (this.filter === 'Front-End') {
                this.allSelected = false;
                this.frontEndSelected = true;
                this.backEndSelected = false;
                if (this.skills[i].type === 'Front-End' || this.skills[i].type === 'Front/Back-End') {
                    this.filteredSkills.push(this.skills[i]);
                }
            }
            else if (this.filter === 'Back-End') {
                this.allSelected = false;
                this.frontEndSelected = false;
                this.backEndSelected = true;
                if (this.skills[i].type === 'Back-End' || this.skills[i].type === 'Front/Back-End') {
                    this.filteredSkills.push(this.skills[i]);
                }
            }
            else {
                this.allSelected = true;
                this.frontEndSelected = false;
                this.backEndSelected = false;
                this.filteredSkills.push(this.skills[i]);
            }
        }
    }
    showGetError() {
        this.messageService.add({
            severity: 'error'
        });
    }
};
SkillsComponent.ctorParameters = () => [
    { type: app_services_skill_service__WEBPACK_IMPORTED_MODULE_3__["SkillService"] },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"] }
];
SkillsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-skills',
        template: _raw_loader_skills_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        providers: [
            primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"]
        ],
        styles: [_skills_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [app_services_skill_service__WEBPACK_IMPORTED_MODULE_3__["SkillService"],
        primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
], SkillsComponent);



/***/ }),

/***/ "Ai5d":
/*!*************************************************************!*\
  !*** ./src/app/components/projects/projects.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: false,
    apiUrl: `https://joshlevy.herokuapp.com`
};


/***/ }),

/***/ "EtQq":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./navbar.component.html */ "zRkE");
/* harmony import */ var _navbar_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.component.scss */ "cruu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/dynamicdialog */ "J7/z");
/* harmony import */ var app_components_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/components/contact/contact.component */ "G2Gn");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let NavbarComponent = class NavbarComponent {
    constructor(location, element, dialogService, config) {
        this.location = location;
        this.element = element;
        this.dialogService = dialogService;
        this.config = config;
        this.sidebarVisible = false;
    }
    ngOnInit() {
        const navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    }
    openContactModal() {
        this.ref = this.dialogService.open(app_components_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"], {
            width: '50%'
        });
    }
    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const html = document.getElementsByTagName('html')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');
        this.sidebarVisible = true;
    }
    ;
    sidebarClose() {
        const html = document.getElementsByTagName('html')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    }
    ;
    sidebarToggle() {
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    }
    ;
    isHome() {
        const title = this.location.prepareExternalUrl(this.location.path());
        if (title === '/') {
            return true;
        }
        else {
            return false;
        }
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_4__["DialogService"] },
    { type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_4__["DynamicDialogConfig"] }
];
NavbarComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-navbar',
        template: _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        providers: [
            primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_4__["DialogService"],
            primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_4__["DynamicDialogConfig"],
            app_components_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"]
        ],
        styles: [_navbar_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"],
        primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_4__["DialogService"],
        primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_4__["DynamicDialogConfig"]])
], NavbarComponent);



/***/ }),

/***/ "G2Gn":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _raw_loader_contact_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./contact.component.html */ "jmJk");
/* harmony import */ var _contact_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.component.scss */ "P7M0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dynamicdialog */ "J7/z");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let ContactComponent = class ContactComponent {
    constructor(ref, config) {
        this.ref = ref;
        this.config = config;
    }
    ngOnInit() { }
    closeModal() {
        this.ref.close();
    }
};
ContactComponent.ctorParameters = () => [
    { type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_3__["DynamicDialogRef"] },
    { type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_3__["DynamicDialogConfig"] }
];
ContactComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-contact',
        template: _raw_loader_contact_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_contact_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_3__["DynamicDialogRef"],
        primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_3__["DynamicDialogConfig"]])
], ContactComponent);



/***/ }),

/***/ "I4vR":
/*!*******************************************************************!*\
  !*** ./src/app/components/work-history/work-history.component.ts ***!
  \*******************************************************************/
/*! exports provided: WorkHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkHistoryComponent", function() { return WorkHistoryComponent; });
/* harmony import */ var _raw_loader_work_history_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./work-history.component.html */ "dQ/m");
/* harmony import */ var _work_history_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./work-history.component.scss */ "5v2N");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_services_job_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/job.service */ "qLOZ");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "7zfz");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let WorkHistoryComponent = class WorkHistoryComponent {
    constructor(jobService, messageService) {
        this.jobService = jobService;
        this.messageService = messageService;
        this.jobs = [];
        this.expandedJobs = {};
        this.cols = [];
        this.columns = [
            {
                header: 'Company',
                field: 'company'
            },
            {
                header: 'Title',
                field: 'title'
            },
            {
                header: 'Start Date',
                field: 'startDate'
            },
            {
                header: 'End Date',
                field: 'endDate'
            },
            {
                header: 'Actions',
                field: ''
            }
        ];
    }
    ngOnInit() {
        this.loadingJobs = true;
        this.loadingError = false;
        this.getJobs();
    }
    getJobs() {
        return this.jobService.getJobs().subscribe(data => {
            if (data) {
                this.loadingJobs = false;
                this.jobs = data.jobs;
                this.jobs.sort(function (a, b) {
                    return a.id - b.id;
                });
                this.cols = [
                    {
                        header: 'Company',
                        field: 'company'
                    },
                    {
                        header: 'Start Date',
                        field: 'startDate'
                    },
                    {
                        header: 'End Date',
                        field: 'endDate'
                    }
                ];
            }
            else {
                this.loadingJobs = false;
                this.loadingError = true;
                this.showGetError();
            }
        });
    }
    // Object key based tracking
    displayDetails(selectedJob) {
        this.jobDetails = selectedJob.id;
        if (!this.isExpanded(this.jobDetails)) {
            this.expandedJobs[this.jobDetails] = true;
        }
        else {
            this.expandedJobs[this.jobDetails] = false;
        }
    }
    isExpanded(jobId) {
        return this.expandedJobs[jobId];
    }
    showGetError() {
        this.messageService.add({
            severity: 'error'
        });
    }
};
WorkHistoryComponent.ctorParameters = () => [
    { type: app_services_job_service__WEBPACK_IMPORTED_MODULE_3__["JobService"] },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"] }
];
WorkHistoryComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-work-history',
        template: _raw_loader_work_history_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        providers: [
            app_services_job_service__WEBPACK_IMPORTED_MODULE_3__["JobService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"]
        ],
        styles: [_work_history_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [app_services_job_service__WEBPACK_IMPORTED_MODULE_3__["JobService"],
        primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
], WorkHistoryComponent);



/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "WwN9");
/* harmony import */ var _footer_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component.scss */ "yZN6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent.ctorParameters = () => [];
FooterComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-footer',
        template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_footer_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);



/***/ }),

/***/ "NPo9":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/components.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n  <div class=\"page-header clear-filter\" filter-color=\"orange\">\n      <div class=\"page-header-image\" data-parallax=\"true\" style=\"background-image: ;\">\n      </div>\n      <div class=\"rellax-header rellax-header-sky\" data-rellax-speed=\"-8\">\n          <div class=\"page-header-image\" style=\"background-image: url('assets/img/presentation-page/nuk-pro-back-sky.jpg')\">\n          </div>\n      </div>\n      <div class=\"rellax-header rellax-header-buildings\" data-rellax-speed=\"0\">\n          <div class=\"page-header-image page-header-city\" style=\"background-image: url('assets/img/presentation-page/nuk-pro-buildings.png')\">\n          </div>\n      </div>\n      <div class=\"rellax-text-container\">\n          <h1 class=\"h1-seo rellax-text\" data-rellax-speed=\"-2\">Components</h1>\n      </div>\n      <h3 class=\"h3-description rellax-text\" data-rellax-speed=\"-1\">A beautiful premium Bootstrap 4 UI Kit.</h3>\n      <h6 class=\"category category-absolute rellax-text\" data-rellax-speed=\"-2\">Designed by\n          <a href=\"https://invisionapp.com/\" target=\"_blank\">\n              <img src=\"assets/img/invision-white-slim.png\" class=\"invision-logo\" />\n          </a>. Coded by\n          <a href=\"https://www.josh-levy.com\" target=\"_blank\">\n              <img src=\"assets/img/josh-levy-white-slim2.png\" class=\"josh-levy-logo\" />\n          </a>.\n      </h6>\n  </div>\n  <div class=\"main\">\n    <div class=\"section section-images\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div class=\"hero-images-container\">\n                        <img src=\"assets/img/hero-image-1.png\" alt=\"\">\n                    </div>\n                    <div class=\"hero-images-container-1\">\n                        <img src=\"assets/img/hero-image-2.png\" alt=\"\">\n                    </div>\n                    <div class=\"hero-images-container-2\">\n                        <img src=\"assets/img/hero-image-3.png\" alt=\"\">\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n      <app-basicelements></app-basicelements>\n      <app-navigation></app-navigation>\n      <div class=\"section section-tabs\">\n          <div class=\"container\">\n              <div class=\"title\">\n                  <h4>Navigation Tabs</h4>\n              </div>\n              <div class=\"row\">\n                  <div class=\"col-md-10 ml-auto col-xl-6 mr-auto\">\n                      <p class=\"category\">Tabs with Icons on Card</p>\n                      <!-- Nav tabs -->\n                      <div class=\"card\">\n                        <div class=\"nav-tabs-navigation\">\n                            <div class=\"nav-tabs-wrapper\">\n                                <ngb-tabset [justify]=\"'center'\" class=\"text-center\">\n                                    <ngb-tab>\n                                      <ng-template ngbTabTitle>\n                                        <i class=\"now-ui-icons objects_umbrella-13\"></i> Home\n                                      </ng-template>\n                                        <ng-template ngbTabContent>\n                                          <p>I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.</p>\n                                        </ng-template>\n                                    </ngb-tab>\n                                    <ngb-tab>\n                                      <ng-template ngbTabTitle>\n                                        <i class=\"now-ui-icons shopping_cart-simple\"></i> Profile\n                                      </ng-template>\n                                        <ng-template ngbTabContent>\n                                            <p> I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. </p>\n                                        </ng-template>\n                                    </ngb-tab>\n                                    <ngb-tab>\n                                      <ng-template ngbTabTitle>\n                                          <i class=\"now-ui-icons shopping_shop\"></i> Messages\n                                      </ng-template>\n                                        <ng-template ngbTabContent>\n                                            <p>I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.</p>\n                                        </ng-template>\n                                    </ngb-tab>\n                                    <ngb-tab>\n                                      <ng-template ngbTabTitle>\n                                        <i class=\"now-ui-icons ui-2_settings-90\"></i> Settings\n                                      </ng-template>\n                                        <ng-template ngbTabContent>\n                                          <p>\n                                              \"I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\"\n                                          </p>\n                                        </ng-template>\n                                    </ngb-tab>\n                                </ngb-tabset>\n                            </div>\n                        </div>\n                      </div>\n                  </div>\n                  <div class=\"col-md-10 ml-auto col-xl-6 mr-auto\">\n                      <p class=\"category\">Tabs with Background on Card</p>\n                      <!-- Tabs with Background on Card -->\n                      <div class=\"card\">\n                        <div class=\"nav-tabs-navigation\" data-tabs-color=\"orange\">\n                            <div class=\"nav-tabs-wrapper\">\n                                <ngb-tabset [justify]=\"'center'\" class=\"text-center\" >\n                                    <ngb-tab title=\"Home\">\n                                      <ng-template ngbTabContent>\n                                        <p>I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.</p>\n                                      </ng-template>\n                                    </ngb-tab>\n                                    <ngb-tab title=\"Profile\">\n                                      <ng-template ngbTabContent>\n                                          <p> I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. </p>\n                                      </ng-template>\n                                    </ngb-tab>\n                                    <ngb-tab title=\"Messages\">\n                                      <ng-template ngbTabContent>\n                                          <p>I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.</p>\n                                      </ng-template>\n                                    </ngb-tab>\n                                    <ngb-tab title=\"Settings\">\n                                        <ng-template ngbTabContent>\n                                          <p>\n                                              \"I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\"\n                                          </p>\n                                        </ng-template>\n                                    </ngb-tab>\n                                </ngb-tabset>\n                            </div>\n                        </div>\n                      </div>\n                      <!-- End Tabs on plain Card -->\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class=\"section section-pills\">\n          <div class=\"container\">\n              <div id=\"navigation-pills\">\n                  <div class=\"title\">\n                      <h4>Navigation Pills</h4>\n                  </div>\n                  <div class=\"row\">\n                      <div class=\"col-md-6\">\n                          <p class=\"category\">Horizontal tabs</p>\n                          <ngb-tabset type=\"pills\" class=\"nav nav-pills nav-pills-primary justify-content-start tab-space\">\n                              <ngb-tab title=\"Profile\">\n                                  <ng-template ngbTabContent>\n                                    Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.\n                                    <br />\n                                    <br /> Dramatically visualize customer directed convergence without revolutionary ROI.\n                                  </ng-template>\n                              </ngb-tab>\n                              <ngb-tab title=\"Settings\">\n                                  <ng-template ngbTabContent>\n                                    Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.\n                                    <br />\n                                    <br />Dramatically maintain clicks-and-mortar solutions without functional solutions.\n                                  </ng-template>\n                              </ngb-tab>\n                              <ngb-tab title=\"Options\">\n                                  <ng-template ngbTabContent>\n                                    Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.\n                                    <br />\n                                    <br />Dynamically innovate resource-leveling customer service for state of the art customer service.\n                                  </ng-template>\n                              </ngb-tab>\n                          </ngb-tabset>\n                      </div>\n                      <div class=\"col-md-6\">\n                          <p class=\"category\">Vertical tabs</p>\n                          <div class=\"nav-pills-navigation\">\n                              <div class=\"nav-pills-wrapper\">\n                                <ngb-tabset type=\"pills\" class=\"nav nav-pills nav-pills-primary vertical-pills\" [orientation]=\"'vertical'\">\n                                    <ngb-tab title=\"Profile\">\n                                        <ng-template ngbTabContent class=\"tab-space\">\n                                          Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.\n                                          <br />\n                                          <br /> Dramatically visualize customer directed convergence without revolutionary ROI.\n                                        </ng-template>\n                                    </ngb-tab>\n                                    <ngb-tab title=\"Settings\">\n                                        <ng-template ngbTabContent>\n                                          Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.\n                                          <br />\n                                          <br />Dramatically maintain clicks-and-mortar solutions without functional solutions.\n                                        </ng-template>\n                                    </ngb-tab>\n                                    <ngb-tab title=\"Options\">\n                                        <ng-template ngbTabContent>\n                                          Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.\n                                          <br />\n                                          <br />Dynamically innovate resource-leveling customer service for state of the art customer service.\n                                        </ng-template>\n                                    </ngb-tab>\n                                </ngb-tabset>\n                              </div>\n                            </div>\n                      </div>\n                  </div>\n                  <div class=\"title\">\n                      <p class=\"category\">With Icons</p>\n                  </div>\n                  <div class=\"row\">\n                      <div class=\"col-md-6\">\n                          <!--\n          color-classes: \"nav-pills-primary\", \"nav-pills-info\", \"nav-pills-success\", \"nav-pills-warning\",\"nav-pills-danger\"\n        -->\n                        <ngb-tabset type=\"pills\" class=\"nav nav-pills nav-pills-primary justify-content-start tab-space nav-pills-icons\">\n                            <ngb-tab>\n                              <ng-template ngbTabTitle>\n                                <i class=\"now-ui-icons objects_umbrella-13\"></i> Home\n                              </ng-template>\n                                <ng-template ngbTabContent>\n                                  Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.\n                                  <br />\n                                  <br /> Dramatically visualize customer directed convergence without revolutionary ROI.\n                                </ng-template>\n                            </ngb-tab>\n                            <ngb-tab>\n                              <ng-template ngbTabTitle>\n                                <i class=\"now-ui-icons shopping_shop\"></i> Messages\n                              </ng-template>\n                                <ng-template ngbTabContent>\n                                  Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.\n                                  <br />\n                                  <br />Dramatically maintain clicks-and-mortar solutions without functional solutions.\n                                </ng-template>\n                            </ngb-tab>\n                            <ngb-tab>\n                              <ng-template ngbTabTitle>\n                                <i class=\"now-ui-icons ui-2_settings-90\"></i> Settings\n                              </ng-template>\n                                <ng-template ngbTabContent>\n                                  Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.\n                                  <br />\n                                  <br />Dynamically innovate resource-leveling customer service for state of the art customer service.\n                                </ng-template>\n                            </ngb-tab>\n                        </ngb-tabset>\n                      </div>\n                      <div class=\"col-md-6\">\n                        <div class=\"nav-pills-navigation\">\n                            <div class=\"nav-pills-wrapper\">\n                              <ngb-tabset type=\"pills\" class=\"nav nav-pills nav-pills-primary vertical-pills nav-pills-icons\" [orientation]=\"'vertical'\">\n                                <ngb-tab>\n                                  <ng-template ngbTabTitle>\n                                    <i class=\"now-ui-icons objects_umbrella-13\"></i> Home\n                                  </ng-template>\n                                    <ng-template ngbTabContent>\n                                      Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.\n                                      <br />\n                                      <br /> Dramatically visualize customer directed convergence without revolutionary ROI.\n                                    </ng-template>\n                                </ngb-tab>\n                                <ngb-tab>\n                                  <ng-template ngbTabTitle>\n                                    <i class=\"now-ui-icons ui-2_settings-90\"></i> Settings\n                                  </ng-template>\n                                  <ng-template ngbTabContent>\n                                    Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.\n                                    <br />\n                                    <br />Dramatically maintain clicks-and-mortar solutions without functional solutions.\n                                  </ng-template>\n                                </ngb-tab>\n                              </ngb-tabset>\n                            </div>\n                          </div>\n                      </div>\n                  </div>\n                  <div class=\"title\">\n                      <p class=\"category\">Just Icons</p>\n                  </div>\n                  <div class=\"row\">\n                      <div class=\"col-md-6\">\n                        <div class=\"nav-pills-navigation\">\n                            <div class=\"nav-pills-wrapper\">\n                              <ngb-tabset type=\"pills\" class=\"nav nav-pills nav-pills-info vertical-pills nav-pills-just-icons\" [orientation]=\"'vertical'\">\n                                <ngb-tab>\n                                  <ng-template ngbTabTitle>\n                                    <i class=\"now-ui-icons objects_umbrella-13\"></i>\n                                  </ng-template>\n                                    <ng-template ngbTabContent>\n                                      Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.\n                                      <br />\n                                      <br /> Dramatically visualize customer directed convergence without revolutionary ROI.\n                                    </ng-template>\n                                </ngb-tab>\n                                <ngb-tab>\n                                  <ng-template ngbTabTitle>\n                                    <i class=\"now-ui-icons ui-2_settings-90\"></i>\n                                  </ng-template>\n                                  <ng-template ngbTabContent>\n                                    Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.\n                                    <br />\n                                    <br />Dramatically maintain clicks-and-mortar solutions without functional solutions.\n                                  </ng-template>\n                                </ngb-tab>\n                              </ngb-tabset>\n                            </div>\n                          </div>\n                      </div>\n                      <div class=\"col-md-6\">\n                          <!--\n          color-classes: \"nav-pills-primary\", \"nav-pills-info\", \"nav-pills-success\", \"nav-pills-warning\",\"nav-pills-danger\"\n        -->\n                      <ngb-tabset type=\"pills\" class=\"nav nav-pills nav-pills-info justify-content-start tab-space nav-pills-just-icons\">\n                          <ngb-tab>\n                            <ng-template ngbTabTitle>\n                              <i class=\"now-ui-icons objects_umbrella-13\"></i>\n                            </ng-template>\n                              <ng-template ngbTabContent>\n                                Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.\n                                <br />\n                                <br /> Dramatically visualize customer directed convergence without revolutionary ROI.\n                              </ng-template>\n                          </ngb-tab>\n                          <ngb-tab>\n                            <ng-template ngbTabTitle>\n                              <i class=\"now-ui-icons shopping_shop\"></i>\n                            </ng-template>\n                              <ng-template ngbTabContent>\n                                Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.\n                                <br />\n                                <br />Dramatically maintain clicks-and-mortar solutions without functional solutions.\n                              </ng-template>\n                          </ngb-tab>\n                          <ngb-tab>\n                            <ng-template ngbTabTitle>\n                              <i class=\"now-ui-icons ui-2_settings-90\"></i>\n                            </ng-template>\n                              <ng-template ngbTabContent>\n                                Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.\n                                <br />\n                                <br />Dynamically innovate resource-leveling customer service for state of the art customer service.\n                              </ng-template>\n                          </ngb-tab>\n                      </ngb-tabset>\n                      </div>\n                  </div>\n                  <!--                 end nav pills -->\n              </div>\n          </div>\n      </div>\n      <div class=\"section section-pagination\">\n          <div class=\"container\">\n              <div class=\"row\">\n                  <div class=\"col-md-6\">\n                      <h4>Progress Bars</h4>\n                      <div class=\"progress-container\">\n                        <span class=\"progress-badge\">Default</span>\n\n                        <ngb-progressbar [value]=\"25\"><span class=\"progress-value\">25%</span></ngb-progressbar><br>\n                      </div>\n                      <div class=\"progress-container progress-primary\">\n                          <span class=\"progress-badge\">Primary</span>\n                          <ngb-progressbar [value]=\"60\"><span class=\"progress-value\">60%</span></ngb-progressbar><br>\n                      </div>\n                      <div class=\"progress-container progress-danger\">\n                          <span class=\"progress-badge\">Danger</span>\n                            <ngb-progressbar [value]=\"60\"><span class=\"progress-value\">60%</span></ngb-progressbar><br>\n                      </div>\n                      <div class=\"progress-container progress-warning\">\n                          <span class=\"progress-badge\">Warning</span>\n                            <ngb-progressbar [value]=\"60\"><span class=\"progress-value\">60%</span></ngb-progressbar><br>\n                      </div>\n                      <div class=\"progress-container progress-success\">\n                          <span class=\"progress-badge\">Success</span>\n                          <ngb-progressbar [value]=\"60\"><span class=\"progress-value\">60%</span></ngb-progressbar><br>\n                      </div>\n                      <div class=\"progress-container progress-info\">\n                          <span class=\"progress-badge\">Info</span>\n                            <ngb-progressbar [value]=\"60\"><span class=\"progress-value\">60%</span></ngb-progressbar><br>\n                      </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                      <h4>Pagination</h4>\n                      <ngb-pagination [collectionSize]=\"50\" [(page)]=\"page\" aria-label=\"Default pagination\" class=\"pagination-primary\"></ngb-pagination>\n                      <br/>\n                      <ngb-pagination [collectionSize]=\"50\" [(page)]=\"page2\" aria-label=\"Default pagination\"></ngb-pagination>\n                      <br/>\n                      <div class=\"pagination-container justify-content-center\">\n                        <ngb-pagination [collectionSize]=\"60\" [(page)]=\"page1\" [maxSize]=\"5\" [rotate]=\"true\" class=\"pagination-info\"></ngb-pagination>\n                      </div>\n                      <br>\n                      <h4>Labels</h4>\n                      <span class=\"badge badge-default\">Default</span>\n                      <span class=\"badge badge-primary\">Primary</span>\n                      <span class=\"badge badge-success\">Success</span>\n                      <span class=\"badge badge-info\">Info</span>\n                      <span class=\"badge badge-warning\">Warning</span>\n                      <span class=\"badge badge-danger\">Danger</span>\n                      <span class=\"badge badge-neutral\">Neutral</span>\n                  </div>\n              </div>\n              <div class=\"space\"></div>\n          </div>\n      </div>\n      <div class=\"section\" id=\"notifications\">\n          <div class=\"container\">\n            <h4>Notifications</h4>\n          </div>\n          <app-notification></app-notification>\n      </div>\n      <app-prefooter-areas></app-prefooter-areas>\n      <app-footers-areas></app-footers-areas>\n      <app-typography></app-typography>\n      <app-tables-areas></app-tables-areas>\n      <app-comments-areas></app-comments-areas>\n      <app-cards-areas></app-cards-areas>\n\n      <div class=\"section section-javascript\" id=\"javascriptComponents\">\n          <div class=\"container\">\n              <h3 class=\"title\">Angular Native Components</h3>\n              <div class=\"row\" id=\"modals\">\n                  <div class=\"col-md-6\">\n                      <h4>Modal</h4>\n                      <ngbd-modal-component></ngbd-modal-component>\n                  </div>\n                  <div class=\"col-md-6\">\n                      <h4>Popovers</h4>\n                      <button type=\"button\" class=\"btn btn-default text-margin\" placement=\"right\"\n                          ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on right\" popoverClass=\"popover-primary\">\n                          On right\n                      </button>\n\n                      <button type=\"button\" class=\"btn btn-default text-margin\" placement=\"top\"\n                          ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on top\">\n                          On top\n                      </button>\n\n                      <button type=\"button\" class=\"btn btn-default text-margin\" placement=\"left\"\n                          ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on left\">\n                          On left\n                      </button>\n\n                      <button type=\"button\" class=\"btn btn-default\" placement=\"bottom\"\n                          ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on bottom\">\n                          On bottom\n                      </button>\n                  </div>\n                  <br />\n                  <br />\n                  <div class=\"col-md-6\">\n                      <h4>Datetimepicker</h4>\n                      <div class=\"row\">\n                          <div class=\"col-md-6\">\n                              <div class=\"datepicker-container\">\n                                  <div class=\"form-group\">\n                                    <input class=\"form-control datetimepicker\" placeholder=\"06/07/2017\"\n                                         name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d=\"ngbDatepicker\" (click)=\"d.toggle()\" data-color=\"orange\">\n                \t\t\t            </div>\n                              </div>\n                          </div>\n                      </div>\n                      <!--                 collapse -->\n                      <div id=\"collapse\">\n                          <div class=\"title\">\n                              <h4>Collapse</h4>\n                          </div>\n                          <div class=\"row\">\n                              <div class=\"col-md-12\">\n                                <ngb-accordion #acc=\"ngbAccordion\" activeIds=\"config-panel-one\" class=\"card-plain\">\n                                    <ngb-panel id=\"config-panel-one\">\n                                        <ng-template ngbPanelTitle>\n                                            <a class=\"collapsed\">\n                                                  Collapsible Group Item #1\n                                              <i class=\"now-ui-icons arrows-1_minimal-down\"></i>\n                                            </a>\n                                        </ng-template>\n                                        <ng-template ngbPanelContent>\n                                              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n                                              aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n                                              sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n                                              craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n                                              occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n                                              labore sustainable VHS.\n                                        </ng-template>\n                                    </ngb-panel>\n                                    <ngb-panel>\n                                        <ng-template ngbPanelTitle>\n                                          <a class=\"collapsed\">\n                                                Collapsible Group Item #2\n                                              <i class=\"now-ui-icons arrows-1_minimal-down\"></i>\n                                          </a>\n                                        </ng-template>\n                                        <ng-template ngbPanelContent>\n                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n                                            aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n                                            sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n                                            craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n                                            occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n                                            labore sustainable VHS.\n                                        </ng-template>\n                                    </ngb-panel>\n                                    <ngb-panel>\n                                        <ng-template ngbPanelTitle>\n                                          <a class=\"collapsed\">\n                                                Collapsible Group Item #3\n                                            <i class=\"now-ui-icons arrows-1_minimal-down\"></i>\n                                          </a>\n                                        </ng-template>\n                                        <ng-template ngbPanelContent>\n                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n                                            aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n                                            sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n                                            craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n                                            occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n                                            labore sustainable VHS.\n                                        </ng-template>\n                                    </ngb-panel>\n                                </ngb-accordion>\n                              </div>\n                          </div>\n                      </div>\n                      <!--                 end collapse -->\n                  </div>\n                  <div class=\"col-md-6\">\n                      <h4>Tooltips</h4>\n                      <button type=\"button\" class=\"btn btn-default btn-tooltip text-margin\" placement=\"right\" ngbTooltip=\"Tooltip on right\">\n                         On right\n                     </button>\n                     <button type=\"button\" class=\"btn btn-default btn-tooltip text-margin\" placement=\"left\" ngbTooltip=\"Tooltip on left\">\n                       On left\n                     </button>\n                      <button type=\"button\" class=\"btn btn-default btn-tooltip text-margin\" placement=\"top\" ngbTooltip=\"Tooltip on top\">\n                         On top\n                      </button>\n                      <button type=\"button\" class=\"btn btn-default btn-tooltip text-margin\" placement=\"bottom\" ngbTooltip=\"Tooltip on bottom\">\n                          On bottom\n                      </button>\n                      <div class=\"clearfix\"></div>\n                      <br>\n                      <br>\n                  </div>\n              <!-- </div>\n            </div> -->\n          </div>\n          <div id=\"file-uploader\">\n              <div class=\"container\">\n                  <div class=\"title\">\n                      <h4>File Uploader</h4>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-md-5 col-sm-8\">\n                        <h4><small>Regular Image</small></h4>\n                        <app-image-upload></app-image-upload>\n                    </div>\n                    <div class=\"col-md-3 col-sm-4\">\n                        <h4><small>Avatar</small></h4>\n                        <app-image-upload [isRound]=\"true\"></app-image-upload>\n                    </div>\n                  </div>\n              </div>\n          </div>\n          <div class=\"section\" id=\"carousel\">\n              <div class=\"container\">\n                  <div class=\"title\">\n                      <h4>Carousel</h4>\n                  </div>\n                  <div class=\"row justify-content-center\">\n                      <div class=\"col-8\">\n                        <ngb-carousel>\n                            <ng-template ngbSlide>\n                              <img class=\"d-block\" src=\"assets/img/bg1.jpg\" alt=\"First slide\">\n                              <div class=\"carousel-caption d-none d-md-block\">\n                                  <h5>Nature, United States</h5>\n                              </div>\n                            </ng-template>\n                            <ng-template ngbSlide>\n                              <img class=\"d-block\" src=\"assets/img/bg3.jpg\" alt=\"Second slide\">\n                              <div class=\"carousel-caption d-none d-md-block\">\n                                  <h5>Somewhere Beyond, United States</h5>\n                              </div>\n                            </ng-template>\n                            <ng-template ngbSlide>\n                              <img class=\"d-block\" src=\"assets/img/bg4.jpg\" alt=\"Third slide\">\n                              <div class=\"carousel-caption d-none d-md-block\">\n                                  <h5>Yellowstone National Park, United States</h5>\n                              </div>\n                            </ng-template>\n                        </ngb-carousel>\n                      </div>\n                  </div>\n              </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"section section-nucleo-icons\">\n          <div class=\"container\">\n              <div class=\"row\">\n                  <div class=\"col-lg-6 col-md-12\">\n                      <h2 class=\"title\">Nucleo Icons</h2>\n                      <h5 class=\"description\">\n                          Now UI Kit comes with 100 custom icons made by our friends from NucleoApp. The official package contains over 2.100 thin icons which are looking great in combination with Now UI Kit Make sure you check all of them and use those that you like the most.\n                      </h5>\n                      <a [routerLink]=\"['/nucleoicons']\" class=\"btn btn-primary btn-round btn-lg\">View Demo Icons</a>\n                      <a href=\"https://nucleoapp.com/?ref=1712\" class=\"btn btn-primary btn-simple btn-round btn-lg\" target=\"_blank\">View All Icons</a>\n                  </div>\n                  <div class=\"col-lg-6 col-md-12\">\n                      <div class=\"icons-container\">\n                          <i class=\"now-ui-icons ui-1_send\"></i>\n                          <i class=\"now-ui-icons ui-2_like\"></i>\n                          <i class=\"now-ui-icons transportation_air-baloon\"></i>\n                          <i class=\"now-ui-icons text_bold\"></i>\n                          <i class=\"now-ui-icons tech_headphones\"></i>\n                          <i class=\"now-ui-icons emoticons_satisfied\"></i>\n                          <i class=\"now-ui-icons shopping_cart-simple\"></i>\n                          <i class=\"now-ui-icons objects_spaceship\"></i>\n                          <i class=\"now-ui-icons media-2_note-03\"></i>\n                          <i class=\"now-ui-icons ui-2_favourite-28\"></i>\n                          <i class=\"now-ui-icons design_palette\"></i>\n                          <i class=\"now-ui-icons clothes_tie-bow\"></i>\n                          <i class=\"now-ui-icons location_pin\"></i>\n                          <i class=\"now-ui-icons objects_key-25\"></i>\n                          <i class=\"now-ui-icons travel_istanbul\"></i>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n  <footer class=\"footer section-dark\">\n      <div class=\"container\">\n          <div class=\"row\">\n              <nav class=\"footer-nav\">\n                  <ul>\n                      <li><a href=\"https://www.josh-levy.com\">Josh Levy</a></li>\n                      <li><a href=\"http://blog.josh-levy.com\">Blog</a></li>\n                      <li><a href=\"https://www.josh-levy.com/license\">Licenses</a></li>\n                  </ul>\n              </nav>\n              <div class=\"credits ml-auto\">\n                  <span class=\"copyright\">\n                      © {{data | date: 'yyyy'}}, made with <i class=\"fa fa-heart heart\"></i> by Josh Levy\n                  </span>\n              </div>\n          </div>\n      </div>\n  </footer>\n\n</div>\n");

/***/ }),

/***/ "P7M0":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "Qbzz":
/*!***************************************************!*\
  !*** ./src/app/components/hero/hero.component.ts ***!
  \***************************************************/
/*! exports provided: HeroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroComponent", function() { return HeroComponent; });
/* harmony import */ var _raw_loader_hero_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./hero.component.html */ "fgAc");
/* harmony import */ var _hero_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hero.component.scss */ "lJoQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let HeroComponent = class HeroComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeroComponent.ctorParameters = () => [];
HeroComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-hero',
        template: _raw_loader_hero_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_hero_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [])
], HeroComponent);



/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
	if(!__webpack_require__.o(map, req)) {
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

/***/ }),

/***/ "SsGY":
/*!*****************************************************!*\
  !*** ./src/app/presentation/presentation.module.ts ***!
  \*****************************************************/
/*! exports provided: PresentationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresentationModule", function() { return PresentationModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _primeng_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../primeng.module */ "ThbA");
/* harmony import */ var _presentation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./presentation.component */ "gVBG");
/* harmony import */ var app_components_skills_skills_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/components/skills/skills.component */ "A9VX");
/* harmony import */ var app_components_projects_projects_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/components/projects/projects.component */ "6bE9");
/* harmony import */ var app_components_work_history_work_history_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/components/work-history/work-history.component */ "I4vR");
/* harmony import */ var app_components_resume_resume_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/components/resume/resume.component */ "h+Is");
/* harmony import */ var app_components_contact_contact_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/components/contact/contact.component */ "G2Gn");
/* harmony import */ var app_components_hero_hero_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/components/hero/hero.component */ "Qbzz");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














let PresentationModule = class PresentationModule {
};
PresentationModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
            _primeng_module__WEBPACK_IMPORTED_MODULE_6__["PrimeNGBundleModule"]
        ],
        declarations: [
            _presentation_component__WEBPACK_IMPORTED_MODULE_7__["PresentationComponent"],
            app_components_hero_hero_component__WEBPACK_IMPORTED_MODULE_13__["HeroComponent"],
            app_components_skills_skills_component__WEBPACK_IMPORTED_MODULE_8__["SkillsComponent"],
            app_components_projects_projects_component__WEBPACK_IMPORTED_MODULE_9__["ProjectsComponent"],
            app_components_work_history_work_history_component__WEBPACK_IMPORTED_MODULE_10__["WorkHistoryComponent"],
            app_components_resume_resume_component__WEBPACK_IMPORTED_MODULE_11__["ResumeComponent"],
            app_components_contact_contact_component__WEBPACK_IMPORTED_MODULE_12__["ContactComponent"]
        ],
        exports: [
            _presentation_component__WEBPACK_IMPORTED_MODULE_7__["PresentationComponent"],
            app_components_hero_hero_component__WEBPACK_IMPORTED_MODULE_13__["HeroComponent"],
            app_components_skills_skills_component__WEBPACK_IMPORTED_MODULE_8__["SkillsComponent"],
            app_components_projects_projects_component__WEBPACK_IMPORTED_MODULE_9__["ProjectsComponent"],
            app_components_work_history_work_history_component__WEBPACK_IMPORTED_MODULE_10__["WorkHistoryComponent"],
            app_components_resume_resume_component__WEBPACK_IMPORTED_MODULE_11__["ResumeComponent"],
            app_components_contact_contact_component__WEBPACK_IMPORTED_MODULE_12__["ContactComponent"]
        ],
        providers: []
    })
], PresentationModule);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/filter */ "fjAU");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "EtQq");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ "7zfz");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









let AppComponent = class AppComponent {
    constructor(primengConfig, renderer, router, document, element, location) {
        this.primengConfig = primengConfig;
        this.renderer = renderer;
        this.router = router;
        this.document = document;
        this.element = element;
        this.location = location;
    }
    ngOnInit() {
        this.primengConfig.ripple = true;
        const navbar = this.element.nativeElement.children[0].children[0];
        this._router = this.router.events.filter(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]).subscribe((event) => {
            if (this.location.path() !== '/sections') {
                if (window.outerWidth > 991) {
                    window.document.children[0].scrollTop = 0;
                }
                else {
                    window.document.activeElement.scrollTop = 0;
                }
            }
            this.navbar.sidebarClose();
            this.renderer.listen('window', 'scroll', (event) => {
                const number = window.scrollY;
                let _location = this.location.path();
                _location = _location.split('/')[2];
                if (this.location.path().split('#')[0] !== '/sections') {
                    if (number > 150 || window.pageYOffset > 150) {
                        // add logic
                        if (_location !== 'register') {
                            navbar.classList.remove('navbar-transparent');
                        }
                    }
                    else if (_location !== 'addproduct' && _location !== 'login' && _location !== 'register' && this.location.path() !== '/nucleoicons') {
                        return;
                        // remove logic
                        // navbar.classList.add('navbar-transparent');
                    }
                }
            });
        });
        const ua = window.navigator.userAgent;
        const trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            const rv = ua.indexOf('rv:');
            const version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }
    }
    removeFooter() {
        let title = this.location.prepareExternalUrl(this.location.path());
        title = title.slice(1);
        if (title === 'signup' || title === 'nucleoicons') {
            return false;
        }
        else {
            return true;
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_7__["PrimeNGConfig"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }
];
AppComponent.propDecorators = {
    navbar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],] }]
};
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [primeng_api__WEBPACK_IMPORTED_MODULE_7__["PrimeNGConfig"],
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], Object, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"],
        _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
], AppComponent);



/***/ }),

/***/ "ThbA":
/*!***********************************!*\
  !*** ./src/app/primeng.module.ts ***!
  \***********************************/
/*! exports provided: PrimeNGBundleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimeNGBundleModule", function() { return PrimeNGBundleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/calendar */ "eO1q");
/* harmony import */ var primeng_chips__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/chips */ "RGqm");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dropdown */ "arFO");
/* harmony import */ var primeng_keyfilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/keyfilter */ "sKUQ");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_listbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/listbox */ "+07z");
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/multiselect */ "lVkt");
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/radiobutton */ "LuMj");
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/slider */ "+la4");
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/selectbutton */ "5o1E");
/* harmony import */ var primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/tristatecheckbox */ "rph/");
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/autocomplete */ "V5BG");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/checkbox */ "Ji6n");
/* harmony import */ var primeng_colorpicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/colorpicker */ "bv7W");
/* harmony import */ var primeng_editor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/editor */ "dgC2");
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/inputswitch */ "rLzU");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/inputtextarea */ "zFJ7");
/* harmony import */ var primeng_inputmask__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/inputmask */ "CwEU");
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/password */ "+YxP");
/* harmony import */ var primeng_rating__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/rating */ "Js94");
/* harmony import */ var primeng_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/spinner */ "ImVz");
/* harmony import */ var primeng_togglebutton__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/togglebutton */ "Y+ZO");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/splitbutton */ "Wq6t");
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/carousel */ "LwO5");
/* harmony import */ var primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/fullcalendar */ "9R/8");
/* harmony import */ var primeng_orderlist__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/orderlist */ "cQJI");
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! primeng/paginator */ "6t4m");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! primeng/table */ "rEr+");
/* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! primeng/treetable */ "EVgl");
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! primeng/dataview */ "8CEF");
/* harmony import */ var primeng_organizationchart__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! primeng/organizationchart */ "dQiQ");
/* harmony import */ var primeng_gmap__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! primeng/gmap */ "QRRn");
/* harmony import */ var primeng_picklist__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! primeng/picklist */ "iHf9");
/* harmony import */ var primeng_tree__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! primeng/tree */ "g9iH");
/* harmony import */ var primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! primeng/virtualscroller */ "+/m8");
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! primeng/accordion */ "7LiV");
/* harmony import */ var primeng_fieldset__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! primeng/fieldset */ "fk4S");
/* harmony import */ var primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! primeng/scrollpanel */ "SSqW");
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! primeng/toolbar */ "5EWq");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! primeng/card */ "QIUk");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! primeng/panel */ "7CaW");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! primeng/tabview */ "dPl2");
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! primeng/confirmdialog */ "Nf9I");
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! primeng/dynamicdialog */ "J7/z");
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! primeng/sidebar */ "jLSX");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! primeng/tooltip */ "xlun");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! primeng/dialog */ "/RsI");
/* harmony import */ var primeng_lightbox__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! primeng/lightbox */ "LnpQ");
/* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! primeng/overlaypanel */ "z8Lm");
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! primeng/fileupload */ "NCSE");
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! primeng/menu */ "1SLH");
/* harmony import */ var primeng_contextmenu__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! primeng/contextmenu */ "yNBN");
/* harmony import */ var primeng_panelmenu__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! primeng/panelmenu */ "kSmT");
/* harmony import */ var primeng_steps__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! primeng/steps */ "KcHJ");
/* harmony import */ var primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! primeng/tieredmenu */ "B16f");
/* harmony import */ var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! primeng/breadcrumb */ "URcr");
/* harmony import */ var primeng_megamenu__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! primeng/megamenu */ "BAkx");
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! primeng/menubar */ "b1Ni");
/* harmony import */ var primeng_slidemenu__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! primeng/slidemenu */ "3k5r");
/* harmony import */ var primeng_tabmenu__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! primeng/tabmenu */ "c+7h");
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! primeng/chart */ "I5S5");
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! primeng/messages */ "dts7");
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! primeng/message */ "FMpt");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! primeng/toast */ "Gxio");
/* harmony import */ var primeng_galleria__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! primeng/galleria */ "2art");
/* harmony import */ var primeng_dragdrop__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! primeng/dragdrop */ "TjhJ");
/* harmony import */ var primeng_defer__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! primeng/defer */ "sEFg");
/* harmony import */ var primeng_blockui__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! primeng/blockui */ "0LTx");
/* harmony import */ var primeng_inplace__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! primeng/inplace */ "QvPt");
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! primeng/progressbar */ "+DzE");
/* harmony import */ var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! primeng/codehighlighter */ "yjSK");
/* harmony import */ var primeng_focustrap__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! primeng/focustrap */ "+oTs");
/* harmony import */ var primeng_captcha__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! primeng/captcha */ "bcVJ");
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! primeng/progressspinner */ "vKg+");
/* harmony import */ var primeng_terminal__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! primeng/terminal */ "6s7b");
/* harmony import */ var primeng_scrolltop__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! primeng/scrolltop */ "JD6B");
/* harmony import */ var primeng_avatar__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! primeng/avatar */ "+F6F");
/* harmony import */ var primeng_avatargroup__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! primeng/avatargroup */ "sKsN");
/* harmony import */ var primeng_badge__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! primeng/badge */ "fqaE");
/* harmony import */ var primeng_chip__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! primeng/chip */ "wxlm");
/* harmony import */ var primeng_skeleton__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! primeng/skeleton */ "jeV5");
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! primeng/tag */ "hYoW");
/* harmony import */ var primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! primeng/confirmpopup */ "RTT/");
/* harmony import */ var primeng_splitter__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! primeng/splitter */ "ZZi9");
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! primeng/divider */ "lUkA");
/* harmony import */ var primeng_timeline__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! primeng/timeline */ "mgTN");
/* harmony import */ var primeng_knob__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! primeng/knob */ "EbAv");
/* harmony import */ var primeng_cascadeselect__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! primeng/cascadeselect */ "A1Di");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























































































let PrimeNGBundleModule = class PrimeNGBundleModule {
};
PrimeNGBundleModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        exports: [
            primeng_calendar__WEBPACK_IMPORTED_MODULE_1__["CalendarModule"],
            primeng_chips__WEBPACK_IMPORTED_MODULE_2__["ChipsModule"],
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__["DropdownModule"],
            primeng_keyfilter__WEBPACK_IMPORTED_MODULE_4__["KeyFilterModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__["InputTextModule"],
            primeng_listbox__WEBPACK_IMPORTED_MODULE_6__["ListboxModule"],
            primeng_multiselect__WEBPACK_IMPORTED_MODULE_7__["MultiSelectModule"],
            primeng_radiobutton__WEBPACK_IMPORTED_MODULE_8__["RadioButtonModule"],
            primeng_slider__WEBPACK_IMPORTED_MODULE_9__["SliderModule"],
            primeng_selectbutton__WEBPACK_IMPORTED_MODULE_10__["SelectButtonModule"],
            primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_11__["TriStateCheckboxModule"],
            primeng_autocomplete__WEBPACK_IMPORTED_MODULE_12__["AutoCompleteModule"],
            primeng_checkbox__WEBPACK_IMPORTED_MODULE_13__["CheckboxModule"],
            primeng_colorpicker__WEBPACK_IMPORTED_MODULE_14__["ColorPickerModule"],
            primeng_editor__WEBPACK_IMPORTED_MODULE_15__["EditorModule"],
            primeng_inputswitch__WEBPACK_IMPORTED_MODULE_16__["InputSwitchModule"],
            primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_17__["InputTextareaModule"],
            primeng_inputmask__WEBPACK_IMPORTED_MODULE_18__["InputMaskModule"],
            primeng_password__WEBPACK_IMPORTED_MODULE_19__["PasswordModule"],
            primeng_rating__WEBPACK_IMPORTED_MODULE_20__["RatingModule"],
            primeng_spinner__WEBPACK_IMPORTED_MODULE_21__["SpinnerModule"],
            primeng_togglebutton__WEBPACK_IMPORTED_MODULE_22__["ToggleButtonModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_23__["ButtonModule"],
            primeng_splitbutton__WEBPACK_IMPORTED_MODULE_24__["SplitButtonModule"],
            primeng_carousel__WEBPACK_IMPORTED_MODULE_25__["CarouselModule"],
            primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_26__["FullCalendarModule"],
            primeng_orderlist__WEBPACK_IMPORTED_MODULE_27__["OrderListModule"],
            primeng_paginator__WEBPACK_IMPORTED_MODULE_28__["PaginatorModule"],
            primeng_table__WEBPACK_IMPORTED_MODULE_29__["TableModule"],
            primeng_treetable__WEBPACK_IMPORTED_MODULE_30__["TreeTableModule"],
            primeng_dataview__WEBPACK_IMPORTED_MODULE_31__["DataViewModule"],
            primeng_organizationchart__WEBPACK_IMPORTED_MODULE_32__["OrganizationChartModule"],
            primeng_gmap__WEBPACK_IMPORTED_MODULE_33__["GMapModule"],
            primeng_picklist__WEBPACK_IMPORTED_MODULE_34__["PickListModule"],
            primeng_tree__WEBPACK_IMPORTED_MODULE_35__["TreeModule"],
            primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_36__["VirtualScrollerModule"],
            primeng_accordion__WEBPACK_IMPORTED_MODULE_37__["AccordionModule"],
            primeng_fieldset__WEBPACK_IMPORTED_MODULE_38__["FieldsetModule"],
            primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_39__["ScrollPanelModule"],
            primeng_toolbar__WEBPACK_IMPORTED_MODULE_40__["ToolbarModule"],
            primeng_card__WEBPACK_IMPORTED_MODULE_41__["CardModule"],
            primeng_panel__WEBPACK_IMPORTED_MODULE_42__["PanelModule"],
            primeng_tabview__WEBPACK_IMPORTED_MODULE_43__["TabViewModule"],
            primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_44__["ConfirmDialogModule"],
            primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_45__["DynamicDialogModule"],
            primeng_sidebar__WEBPACK_IMPORTED_MODULE_46__["SidebarModule"],
            primeng_tooltip__WEBPACK_IMPORTED_MODULE_47__["TooltipModule"],
            primeng_dialog__WEBPACK_IMPORTED_MODULE_48__["DialogModule"],
            primeng_lightbox__WEBPACK_IMPORTED_MODULE_49__["LightboxModule"],
            primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_50__["OverlayPanelModule"],
            primeng_fileupload__WEBPACK_IMPORTED_MODULE_51__["FileUploadModule"],
            primeng_menu__WEBPACK_IMPORTED_MODULE_52__["MenuModule"],
            primeng_contextmenu__WEBPACK_IMPORTED_MODULE_53__["ContextMenuModule"],
            primeng_panelmenu__WEBPACK_IMPORTED_MODULE_54__["PanelMenuModule"],
            primeng_steps__WEBPACK_IMPORTED_MODULE_55__["StepsModule"],
            primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_56__["TieredMenuModule"],
            primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_57__["BreadcrumbModule"],
            primeng_megamenu__WEBPACK_IMPORTED_MODULE_58__["MegaMenuModule"],
            primeng_menubar__WEBPACK_IMPORTED_MODULE_59__["MenubarModule"],
            primeng_slidemenu__WEBPACK_IMPORTED_MODULE_60__["SlideMenuModule"],
            primeng_tabmenu__WEBPACK_IMPORTED_MODULE_61__["TabMenuModule"],
            primeng_chart__WEBPACK_IMPORTED_MODULE_62__["ChartModule"],
            primeng_messages__WEBPACK_IMPORTED_MODULE_63__["MessagesModule"],
            primeng_message__WEBPACK_IMPORTED_MODULE_64__["MessageModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_65__["ToastModule"],
            primeng_galleria__WEBPACK_IMPORTED_MODULE_66__["GalleriaModule"],
            primeng_dragdrop__WEBPACK_IMPORTED_MODULE_67__["DragDropModule"],
            primeng_defer__WEBPACK_IMPORTED_MODULE_68__["DeferModule"],
            primeng_blockui__WEBPACK_IMPORTED_MODULE_69__["BlockUIModule"],
            primeng_inplace__WEBPACK_IMPORTED_MODULE_70__["InplaceModule"],
            primeng_progressbar__WEBPACK_IMPORTED_MODULE_71__["ProgressBarModule"],
            primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_72__["CodeHighlighterModule"],
            primeng_focustrap__WEBPACK_IMPORTED_MODULE_73__["FocusTrapModule"],
            primeng_captcha__WEBPACK_IMPORTED_MODULE_74__["CaptchaModule"],
            primeng_progressspinner__WEBPACK_IMPORTED_MODULE_75__["ProgressSpinnerModule"],
            primeng_terminal__WEBPACK_IMPORTED_MODULE_76__["TerminalModule"],
            primeng_scrolltop__WEBPACK_IMPORTED_MODULE_77__["ScrollTopModule"],
            primeng_avatar__WEBPACK_IMPORTED_MODULE_78__["AvatarModule"],
            primeng_avatargroup__WEBPACK_IMPORTED_MODULE_79__["AvatarGroupModule"],
            primeng_badge__WEBPACK_IMPORTED_MODULE_80__["BadgeModule"],
            primeng_chip__WEBPACK_IMPORTED_MODULE_81__["ChipModule"],
            primeng_skeleton__WEBPACK_IMPORTED_MODULE_82__["SkeletonModule"],
            primeng_tag__WEBPACK_IMPORTED_MODULE_83__["TagModule"],
            primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_84__["ConfirmPopupModule"],
            primeng_splitter__WEBPACK_IMPORTED_MODULE_85__["SplitterModule"],
            primeng_divider__WEBPACK_IMPORTED_MODULE_86__["DividerModule"],
            primeng_timeline__WEBPACK_IMPORTED_MODULE_87__["TimelineModule"],
            primeng_knob__WEBPACK_IMPORTED_MODULE_88__["KnobModule"],
            primeng_cascadeselect__WEBPACK_IMPORTED_MODULE_89__["CascadeSelectModule"]
        ]
    })
], PrimeNGBundleModule);



/***/ }),

/***/ "UZyq":
/*!*********************************************************!*\
  !*** ./src/app/components/resume/resume.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXN1bWUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n");

/***/ }),

/***/ "WtuU":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/skills/skills.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"col-md-8 ml-auto mr-auto\">\n    <div class=\"section-description text-center\">\n      <h2 class=\"title\">Skills</h2>\n      <div *ngIf=\"!loadingSkills\" class=\"filter-buttons\">\n        <button [disabled]=\"allSelected\" (click)=\"filterSkills('All')\"\n          class=\"btn btn-primary category-button\">All</button>\n        <button [disabled]=\"frontEndSelected\" (click)=\"filterSkills('Front-End')\"\n          class=\"btn btn-primary category-button\">Front-End</button>\n        <button [disabled]=\"backEndSelected\" (click)=\"filterSkills('Back-End')\"\n          class=\"btn btn-primary category-button\">Back-End</button>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"container-fluid padded-container\">\n  <div class=\"section-cols\">\n    <div class=\"row\">\n      <p-messages *ngIf=\"loadingError\" severity=\"error\" class=\"api-error\">\n        <ng-template pTemplate>\n          <div class=\"p-ml-2\">Error: Unable to fetch skill list from the server. Please try again.</div>\n        </ng-template>\n      </p-messages>\n      <div *ngIf=\"loadingSkills\" class=\"progress-spinner\">\n        <p-progressSpinner styleClass=\"custom-spinner\" strokeWidth=\"4\" animationDuration=\"3s\"></p-progressSpinner>\n      </div>\n      <div class=\"card\">\n        <p-dataView \n          #dv\n          [value]=\"skills\"\n          [paginator]=\"true\"\n          [rows]=\"9\"\n          filterBy=\"name\"\n          layout=\"grid\">\n            <ng-template pTemplate=\"header\">\n                <div class=\"p-d-flex p-flex-column p-flex-md-row p-jc-md-between\">\n                    <!-- <p-dropdown [options]=\"sortOptions\" [(ngModel)]=\"sortKey\" placeholder=\"Sort By Type\" (onChange)=\"onSortChange($event)\" styleClass=\"p-mb-2 p-mb-md-0\"></p-dropdown> -->\n                    <span class=\"p-input-icon-left p-mb-2 p-mb-md-0\">\n                        <i class=\"pi pi-search\"></i>\n                        <input type=\"search\" pInputText placeholder=\"Search by Name\" (input)=\"dv.filter($event.target.value)\">\n                    </span>\n                    <!-- <p-dataViewLayoutOptions></p-dataViewLayoutOptions> -->\n                </div>\n            </ng-template>\n            <!-- <ng-template let-skill pTemplate=\"listItem\">\n                <div class=\"p-col-12\">\n                    <div class=\"skill-list-item\">\n                        <img [src]=\"skill.img\"/>\n                        <div class=\"skill-list-detail\">\n                            <div class=\"skill-name\">{{skill.name}}</div>\n                            <div class=\"skill-description\">{{skill.type}}</div>\n                            <span class=\"skill-category\">{{skill.type}}</span>\n                        </div>\n                        <div class=\"skill-list-action\">\n                            <span class=\"skill-price\">${{skill.experience}}</span>\n                        </div>\n                    </div>\n                </div>\n            </ng-template> -->\n            <ng-template let-skill pTemplate=\"gridItem\">\n                <div class=\"p-col-12 p-md-4\">\n                    <div class=\"skill-grid-item card\">\n                        <div class=\"skill-grid-item-top\">\n                            <div>\n                              <!-- <span class=\"skill-category\">{{skill.type}}</span> -->\n                            </div>\n                        </div>\n                        <div class=\"skill-grid-item-content\">\n                            <img [src]=\"skill.img\"/>\n                            <div class=\"skill-name\">{{skill.name}}</div>\n                            <div class=\"skill-description\">{{skill.type}}</div>\n                        </div>\n                        <div class=\"skill-grid-item-bottom\">\n                            <span class=\"skill-price\">${{skill.experience}}</span>\n                        </div>\n                    </div>\n                </div>\n            </ng-template>\n        </p-dataView>\n      </div>\n      <!-- <ul *ngIf=\"!loadingSkills\" class=\"skills-list\">\n        <li *ngFor=\"let skill of filteredSkills\" class=\"col-md-3 skill\">\n          <div class=\"card card-profile card-plain\">\n            <div class=\"card-image skill-image\">\n              <div class=\"img img-raised rounded\">\n                <img src=\"{{ skill.img }}\" />\n              </div>\n            </div>\n            <div class=\"card-body\">\n              <h4 class=\"card-title\">{{ skill.name }}</h4>\n              <h6 class=\"category\">{{ skill.experience }}</h6>\n              <button type=\"button\" (click)=\"filterSkills(skill.type)\"\n                class=\"btn btn-primary btn-round category-button\">{{ skill.type }}</button>\n            </div>\n          </div>\n        </li>\n      </ul> -->\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "WwN9":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer \" data-background-color=\"black\">\n  <div class=\"container\">\n    <nav>\n    </nav>\n    <div class=\"copyright\">\n      &copy;\n      2021 Designed by\n      <a href=\"https://joshlevy.dev\" target=\"_blank\">Josh Levy</a>.\n    </div>\n  </div>\n</footer>");

/***/ }),

/***/ "XUpm":
/*!*********************************************************!*\
  !*** ./src/app/components/skills/skills.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJza2lsbHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "beVS");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/components.module */ "j1ZV");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "EtQq");
/* harmony import */ var _presentation_presentation_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./presentation/presentation.module */ "SsGY");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"]
        ],
        imports: [
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _presentation_presentation_module__WEBPACK_IMPORTED_MODULE_9__["PresentationModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]
        ],
        schemas: [
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]
        ],
        providers: [],
        bootstrap: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]
        ]
    })
], AppModule);



/***/ }),

/***/ "aggk":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/projects/projects.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"col-md-8 ml-auto mr-auto\">\n    <div class=\"section-description text-center\">\n      <h2 class=\"title\">Projects</h2>\n    </div>\n  </div>\n</div>\n<div class=\"container-fluid centered-section padded-container\">\n  <div class=\"section-cols\">\n    <div class=\"row\">\n      <p-messages *ngIf=\"loadingError\" severity=\"error\" class=\"api-error\">\n        <ng-template pTemplate>\n          <div class=\"p-ml-2\">Error: Unable to fetch project list from the server. Please try again.</div>\n        </ng-template>\n      </p-messages>\n      <div *ngIf=\"loadingProjects\" class=\"progress-spinner\">\n        <p-progressSpinner styleClass=\"custom-spinner\" strokeWidth=\"4\" animationDuration=\"3s\"></p-progressSpinner>\n      </div>\n      <p-timeline *ngIf=\"!loadingProjects\" [value]=\"projects\" align=\"alternate\" styleClass=\"p-d-none p-d-md-inline-flex customized-timeline\">\n        <ng-template pTemplate=\"marker\" let-project>\n          <span class=\"custom-marker p-shadow-2\" [style.backgroundColor]=\"markerColor\">\n            <i class=\"fas fa-code\"></i>\n          </span>\n        </ng-template>\n        <ng-template pTemplate=\"opposite\" let-project>\n          <p-card [header]=\"project.name\" [subheader]=\"project.date\">\n            <p class=\"card-description\">{{ project.description }}</p>\n            <a [ngClass]=\"project.deployedUrl === null ? 'no-display' : null\" href=\"{{ project?.deployedUrl }}\" target=\"_blank\"><i v-b-tooltip.hover title=\"View deployed website in a new tab.\" class=\"fas fa-link\"></i></a>\n            <a href=\"{{ project?.githubUrl }}\" target=\"_blank\"><i v-b-tooltip.hover title=\"View GitHub repository in a new tab.\" class=\"fab fa-github\"></i></a>\n          </p-card>\n        </ng-template>\n      </p-timeline>\n      <p-timeline *ngIf=\"!loadingProjects\" [value]=\"projects\" align=\"right\" styleClass=\"p-d-md-none\">\n        <ng-template pTemplate=\"marker\" let-project>\n          <span class=\"custom-marker p-shadow-2\" [style.backgroundColor]=\"markerColor\">\n            <i class=\"fas fa-code\"></i>\n          </span>\n        </ng-template>\n        <ng-template pTemplate=\"content\" let-project>\n          <p-card [header]=\"project.name\" [subheader]=\"project.date\">\n            <p class=\"card-description\">{{ project.description }}</p>\n            <a [ngClass]=\"project.deployedUrl === null ? 'no-display' : null\" href=\"{{ project?.deployedUrl }}\" target=\"_blank\"><i v-b-tooltip.hover title=\"View deployed website in a new tab.\" class=\"fas fa-link\"></i></a>\n            <a href=\"{{ project?.githubUrl }}\" target=\"_blank\"><i v-b-tooltip.hover title=\"View GitHub repository in a new tab.\" class=\"fab fa-github\"></i></a>\n          </p-card>\n        </ng-template>\n      </p-timeline>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "beVS":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _presentation_presentation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./presentation/presentation.component */ "gVBG");
/* harmony import */ var _components_components_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/components.component */ "93si");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






const routes = [
    { path: 'presentation', redirectTo: '', pathMatch: 'full' },
    { path: '', component: _presentation_presentation_component__WEBPACK_IMPORTED_MODULE_4__["PresentationComponent"] },
    { path: 'components', component: _components_components_component__WEBPACK_IMPORTED_MODULE_5__["ComponentsComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
                useHash: false,
                relativeLinkResolution: 'legacy'
            })
        ],
        exports: [],
    })
], AppRoutingModule);



/***/ }),

/***/ "c3AT":
/*!*********************************************!*\
  !*** ./src/app/services/project.service.ts ***!
  \*********************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../environments/environment */ "AytR");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// const httpOptions = {
//   headers: new HttpHeaders({
//     'X-Parse-Application-Id': parseKeys.PARSE_APP_ID,
//     'X-Parse-REST-API-Key': parseKeys.PARSE_REST_API_KEY,
//     'Content-Type':  'application/json'
//   })
// };
const apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
let ProjectService = class ProjectService {
    constructor(http) {
        this.http = http;
    }
    getProjects() {
        const url = `${apiUrl}/projects`;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => {
            return res;
        }));
    }
    addProject(params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()) {
        const url = `${apiUrl}/projects`;
        return this.http.post(url, params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => {
            return res;
        }));
    }
};
ProjectService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
];
ProjectService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
], ProjectService);



/***/ }),

/***/ "cruu":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "dQ/m":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/work-history/work-history.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"col-md-8 ml-auto mr-auto\">\n    <div class=\"section-description text-center\">\n      <h2 class=\"title\">Work History</h2>\n    </div>\n  </div>\n</div>\n<div class=\"container-fluid padded-container\">\n  <div class=\"section-cols\">\n    <div class=\"row\">\n      <p-messages *ngIf=\"loadingError\" severity=\"error\" class=\"api-error\">\n        <ng-template pTemplate>\n          <div class=\"p-ml-2\">Error: Unable to fetch work history from the server. Please try again.</div>\n        </ng-template>\n      </p-messages>\n      <div *ngIf=\"loadingJobs\" class=\"progress-spinner\">\n        <p-progressSpinner styleClass=\"custom-spinner\" strokeWidth=\"4\" animationDuration=\"3s\"></p-progressSpinner>\n      </div>\n      <div *ngIf=\"!loadingJobs\" class=\"content-section implementation\">\n        <div class=\"card\">\n          <p-table [value]=\"jobs\" dataKey=\"company\" styleClass=\"p-d-none p-d-md-inline-flex\">\n            <ng-template pTemplate=\"header\">\n              <tr>\n                <th class=\"dark-table-header\" style=\"width: 3rem\"></th>\n                <th class=\"dark-table-header\">Company</th>\n                <th class=\"dark-table-header\">Title</th>\n                <th class=\"dark-table-header\">Start Date</th>\n                <th class=\"dark-table-header\">End Date</th>\n                <th class=\"dark-table-header\">Actions</th>\n              </tr>\n            </ng-template>\n            <ng-template pTemplate=\"body\" let-job let-expanded=\"expanded\">\n              <tr>\n                <td>\n                  <button type=\"button\" pButton pRipple [pRowToggler]=\"job\" class=\"p-button-text p-button-rounded p-button-plain\" [icon]=\"expanded ? 'pi pi-chevron-down' : 'pi pi-chevron-right'\"></button>\n                </td>\n                <td>{{job.company}}</td>\n                <td>{{job.title}}</td>\n                <td>{{job.startDate}}</td>\n                <td>{{job.endDate}}</td>\n                <td>\n                  <button *ngIf=\"!expanded\" pButton pRipple [pRowToggler]=\"job\" type=\"button\" label=\"View Details\" class=\"p-button-raised actions-button\"></button>\n                  <button *ngIf=\"expanded\" pButton pRipple [pRowToggler]=\"job\" type=\"button\" label=\"Hide Details\" class=\"p-button-raised p-button-secondary actions-button\"></button>\n                </td>\n              </tr>\n            </ng-template>\n            <ng-template pTemplate=\"rowexpansion\" let-job>\n              <tr>\n                <td colspan=\"6\">\n                  <div>\n                    <p-table [value]=\"job.description.results\" dataKey=\"id\">\n                      <ng-template pTemplate=\"header\">\n                        <tr>\n                          <th style=\"width: 2.5rem\"></th>\n                          <th>Responsibilities</th>\n                        </tr>\n                      </ng-template>\n                      <ng-template pTemplate=\"body\" let-description>\n                        <tr>\n                          <td>{{description.id}}</td>\n                          <td>{{description.responsibility}}</td>\n                        </tr>\n                      </ng-template>\n                    </p-table>\n                  </div>\n                </td>\n              </tr>\n            </ng-template>\n          </p-table>\n        </div>\n        <p-table [columns]=\"cols\" [value]=\"jobs\" styleClass=\"p-d-md-none p-datatable-responsive-demo\">\n          <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n              <th *ngFor=\"let col of columns\">\n                {{col.header}}\n              </th>\n            </tr>\n          </ng-template>\n          <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr>\n              <td *ngFor=\"let col of columns\">\n                <span class=\"p-column-title\">{{col.header}}</span>\n                {{rowData[col.field]}}\n              </td>\n            </tr>\n          </ng-template>\n        </p-table>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "fgAc":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/hero/hero.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"rellax-header rellax-header-sky\" data-rellax-speed=\"-8\">\n  <div class=\"page-header-image\" style=\"background-image: url('assets/img/presentation-page/nuk-pro-back-sky.jpg')\">\n  </div>\n</div>\n<div class=\"rellax-header rellax-header-buildings\" data-rellax-speed=\"0\">\n  <div class=\"page-header-image page-header-city\"\n    style=\"background-image: url('assets/img/presentation-page/nuk-pro-buildings.png')\">\n  </div>\n</div>\n<div class=\"rellax-text-container rellax-text\">\n  <h1 class=\"h1-seo\" data-rellax-speed=\"-2\">Josh Levy</h1>\n</div>\n<h2 class=\"h3-description rellax-text\" data-rellax-speed=\"-1\">Designer. Developer.</h2>");

/***/ }),

/***/ "gVBG":
/*!********************************************************!*\
  !*** ./src/app/presentation/presentation.component.ts ***!
  \********************************************************/
/*! exports provided: PresentationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresentationComponent", function() { return PresentationComponent; });
/* harmony import */ var _raw_loader_presentation_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./presentation.component.html */ "+pZr");
/* harmony import */ var _presentation_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./presentation.component.scss */ "71yw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let PresentationComponent = class PresentationComponent {
    constructor() { }
    ngOnInit() {
        const body = document.getElementsByTagName('body')[0];
        body.classList.add('presentation-page');
    }
    ngOnDestroy() {
        const body = document.getElementsByTagName('body')[0];
        body.classList.remove('presentation-page');
    }
};
PresentationComponent.ctorParameters = () => [];
PresentationComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-presentation',
        template: _raw_loader_presentation_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        providers: [],
        styles: [_presentation_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [])
], PresentationComponent);



/***/ }),

/***/ "h+Is":
/*!*******************************************************!*\
  !*** ./src/app/components/resume/resume.component.ts ***!
  \*******************************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var _raw_loader_resume_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./resume.component.html */ "8ceZ");
/* harmony import */ var _resume_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resume.component.scss */ "UZyq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let ResumeComponent = class ResumeComponent {
    constructor() { }
    ngOnInit() {
    }
};
ResumeComponent.ctorParameters = () => [];
ResumeComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-resume',
        template: _raw_loader_resume_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_resume_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [])
], ResumeComponent);



/***/ }),

/***/ "j1ZV":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-nouislider */ "P1c5");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ "yQBb");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-chips */ "Kb4U");
/* harmony import */ var angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-multiselect-dropdown */ "e/mZ");
/* harmony import */ var _kolkov_ngx_gallery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @kolkov/ngx-gallery */ "XGsO");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components.component */ "93si");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











let ComponentsModule = class ComponentsModule {
};
ComponentsModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
            ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__["NouisliderModule"],
            ngx_chips__WEBPACK_IMPORTED_MODULE_6__["TagInputModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"],
            jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_5__["JwBootstrapSwitchNg2Module"],
            angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__["AngularMultiSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _kolkov_ngx_gallery__WEBPACK_IMPORTED_MODULE_8__["NgxGalleryModule"]
        ],
        declarations: [
            _components_component__WEBPACK_IMPORTED_MODULE_10__["ComponentsComponent"]
        ],
        exports: [
            _components_component__WEBPACK_IMPORTED_MODULE_10__["ComponentsComponent"]
        ]
    })
], ComponentsModule);



/***/ }),

/***/ "jmJk":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<b-container fluid>\n  <div class=\"mb-1 text-center w-100\">\n    <h3 class=\"name\">Josh Levy</h3>\n  </div>\n  <div class=\"mb-1 text-center w-100\">\n    <div class=\"social\">\n      <a href=\"https://linkedin.com/in/JoshAaronLevy\" target=\"_blank\"><i class=\"fab fa-linkedin\"></i></a>\n      <a href=\"https://github.com/JoshAaronLevy\" target=\"_blank\"><i class=\"fab fa-github\"></i></a>\n    </div>\n  </div>\n  <div class=\"mb-1 text-center w-100\">\n    <div class=\"contact\">\n      <a href=\"mailto:joshaaronlevy@gmail.com\"><i class=\"fas fa-envelope\"></i><h4>joshaaronlevy@gmail.com</h4></a>\n    </div>\n  </div>\n  <div class=\"mb-1 text-center w-100\">\n    <div class=\"contact\">\n      <a href=\"tel:7208834980\"><i class=\"fas fa-mobile\"></i><h4>(720) 883-4980</h4></a>\n    </div>\n  </div>\n  <div class=\"mb-1 text-center w-100\">\n    <div class=\"contact\">\n      <a href=\"https://goo.gl/maps/bpZCa8oQx1v\" target=\"_blank\"><i class=\"fas fa-map-marked-alt\"></i><h4>Denver, CO<sup>*</sup></h4></a>\n    </div>\n  </div>\n  <div class=\"mb-1 text-center w-100\">\n    <div class=\"footnote\">\n      <h6><sup>*</sup>Currently in Denver, yet able to easily relocate, and seeking such opportunities as well.</h6>\n    </div>\n  </div>\n</b-container>");

/***/ }),

/***/ "lJoQ":
/*!*****************************************************!*\
  !*** ./src/app/components/hero/hero.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZXJvLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "qLOZ":
/*!*****************************************!*\
  !*** ./src/app/services/job.service.ts ***!
  \*****************************************/
/*! exports provided: JobService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobService", function() { return JobService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../environments/environment */ "AytR");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// const httpOptions = {
//   headers: new HttpHeaders({
//     'X-Parse-Application-Id': parseKeys.PARSE_APP_ID,
//     'X-Parse-REST-API-Key': parseKeys.PARSE_REST_API_KEY,
//     'Content-Type':  'application/json'
//   })
// };
const apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
let JobService = class JobService {
    constructor(http) {
        this.http = http;
    }
    getJobs() {
        const url = `${apiUrl}/jobs`;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => {
            return res;
        }));
    }
    addJob(params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()) {
        const url = `${apiUrl}/jobs`;
        return this.http.post(url, params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => {
            return res;
        }));
    }
};
JobService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
];
JobService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
], JobService);



/***/ }),

/***/ "yZN6":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zRkE":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg bg-white fixed-top\" color-on-scroll=\"500\">\n  <div class=\"container\">\n    <div class=\"navbar-translate\">\n      <a class=\"navbar-brand\" [routerLink]=\"['/']\">\n        <img src=\"./assets/img/Josh-Levy-Logo.png\" />\n      </a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggler\"\n        aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"\n        (click)=\"sidebarToggle()\">\n        <span class=\"navbar-toggler-bar bar1\"></span>\n        <span class=\"navbar-toggler-bar bar2\"></span>\n        <span class=\"navbar-toggler-bar bar3\"></span>\n      </button>\n    </div>\n    <div class=\"collapse navbar-collapse\" data-color=\"black\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#skills\">\n            Skills\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#projects\">\n            Projects\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#experience\">\n            Experience\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#resume\">\n            Resume\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" (click)=\"openContactModal()\">\n            Contact\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");
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


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2018.js.map