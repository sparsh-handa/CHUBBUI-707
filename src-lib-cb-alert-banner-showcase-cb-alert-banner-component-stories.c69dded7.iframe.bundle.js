(self.webpackChunkui_kit=self.webpackChunkui_kit||[]).push([[9920],{"./libs/ui-components/src/lib/cb-alert-banner/cb-alert-banner.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{y:()=>CbAlertBannerComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var cb_alert_banner_componentngResource=__webpack_require__("./libs/ui-components/src/lib/cb-alert-banner/cb-alert-banner.component.scss?ngResource"),cb_alert_banner_componentngResource_default=__webpack_require__.n(cb_alert_banner_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),cb_icon_size=__webpack_require__("./libs/ui-components/src/lib/cb-icon/models/cb-icon-size.ts");let CbAlertBannerComponent=class CbAlertBannerComponent{constructor(){this.alertIconSize=cb_icon_size.a.LARGE,this.alertIconTypeMap={informational:{key:"utility-tooltip-stroke",color:"white-800"},error:{key:"utility-error-stroke",color:"error-shade"},success:{key:"utility-success-check-stroke",color:"success-shade"},caution:{key:"utility-caution-stroke",color:"caution-shade"}},this.show=!0,this.close=new core.EventEmitter}get alertType(){return this._alertType}set alertType(value){this._alertType=value,this.getAlertIconStyles()}getAlertBorderClass(borderType){return`cb-alert-banner-container--${borderType}`}getAlertIconStyles(){this.alertIconKey=this.alertIconTypeMap[this.alertType].key,this.alertIconColor=this.alertIconTypeMap[this.alertType].color}closeAlert(){this.show=!1,this.close.emit("ALERT_DISMISSED")}static#_=this.propDecorators={alertType:[{type:core.Input}],show:[{type:core.Input}],close:[{type:core.Output}]}};CbAlertBannerComponent=(0,tslib_es6.UN)([(0,core.Component)({selector:"cb-alert-banner",template:'<div *ngIf="show" class="cb-alert-banner">\r\n    <div class="cb-alert-banner-container" [ngClass]="getAlertBorderClass(alertType)">\r\n        <div class="cb-alert-banner-container__status-icon">\r\n            <cb-icon [iconKey]="alertIconKey" [iconColor]="alertIconColor" [iconSize]="alertIconSize"></cb-icon>\r\n        </div>\r\n        <div class="cb-alert-banner-container__content">\r\n            <ng-content></ng-content>\r\n        </div>\r\n        <div class="cb-alert-banner-container__close-icon">\r\n            <button (click)="closeAlert()">\r\n                <cb-icon iconKey="utility-close"></cb-icon>\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n',styles:[cb_alert_banner_componentngResource_default()]})],CbAlertBannerComponent)},"./libs/ui-components/src/lib/cb-alert-banner/showcase/cb-alert-banner.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Caution:()=>Caution,Default:()=>Default,Error:()=>Error,Informational:()=>Informational,Success:()=>Success,WithLink:()=>WithLink,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_addon_jest__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-jest/dist/index.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),_storybook_angular__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_cb_icon__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./libs/ui-components/src/lib/cb-icon/cb-icon.module.ts"),_cb_alert_banner_component__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/ui-components/src/lib/cb-alert-banner/cb-alert-banner.component.ts"),_jest_test_results_json__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./libs/ui-components/.jest-test-results.json");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Feedback Display/Alert Banner",component:_cb_alert_banner_component__WEBPACK_IMPORTED_MODULE_2__.y,argTypes:{show:{control:"boolean"},alertType:{control:"select",options:["informational","error","success","caution"]}},decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_1__.moduleMetadata)({imports:[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,_cb_icon__WEBPACK_IMPORTED_MODULE_4__.W]}),(0,_storybook_addon_jest__WEBPACK_IMPORTED_MODULE_0__.c)({results:_jest_test_results_json__WEBPACK_IMPORTED_MODULE_5__})],parameters:{jest:["cb-alert-banner.component"]}},Default={render:args=>({props:args,template:'\n            <cb-alert-banner\n                [show]="show"\n                [alertType]="alertType">\n                <div>\n                    <span style="font-weight: bold;">\n                        Some title:\n                    </span>\n                    This is an alert of some type\n                </div>\n            </cb-alert-banner>\n        '}),args:{show:!0,alertType:"informational"}},Informational={render:args=>({props:args,template:'\n            <cb-alert-banner\n                [show]="show"\n                [alertType]="alertType">\n                <div>\n                    <span style="font-weight: bold;">\n                        Some title:\n                    </span>\n                    This is an alert of some type\n                </div>\n            </cb-alert-banner>\n        '}),args:{show:!0,alertType:"informational"}},Error={render:args=>({props:args,template:'\n            <cb-alert-banner\n                [show]="show"\n                [alertType]="alertType">\n                <div>\n                    <span style="font-weight: bold;">\n                        Some title:\n                    </span>\n                    This is an alert of some type\n                </div>\n            </cb-alert-banner>\n        '}),args:{show:!0,alertType:"error"}},Success={render:args=>({props:args,template:'\n            <cb-alert-banner\n                [show]="show"\n                [alertType]="alertType">\n                <div>\n                    <span style="font-weight: bold;">\n                        Some title:\n                    </span>\n                    This is an alert of some type\n                </div>\n            </cb-alert-banner>\n        '}),args:{show:!0,alertType:"success"}},Caution={render:args=>({props:args,template:'\n            <cb-alert-banner\n                [show]="show"\n                [alertType]="alertType">\n                <div>\n                    <span style="font-weight: bold;">\n                        Some title:\n                    </span>\n                    This is an alert of some type\n                </div>\n            </cb-alert-banner>\n        '}),args:{show:!0,alertType:"caution"}},WithLink={render:args=>({props:args,template:'\n            <cb-alert-banner\n                [show]="show"\n                [alertType]="alertType">\n                <div>\n                    <span style="font-weight: bold;">\n                        Some title:\n                    </span>\n                    This is an alert of some type\n                </div>\n                <div>\n                    <a href="/">Some link</a>\n                </div>\n            </cb-alert-banner>\n        '}),args:{show:!0,alertType:"informational"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: (args: CbAlertBannerComponent) => ({\n    props: args,\n    template: `\n            <cb-alert-banner\n                [show]="show"\n                [alertType]="alertType">\n                <div>\n                    <span style="font-weight: bold;">\n                        Some title:\n                    </span>\n                    This is an alert of some type\n                </div>\n            </cb-alert-banner>\n        `\n  }),\n  args: {\n    show: true,\n    alertType: \'informational\'\n  }\n}',...Default.parameters?.docs?.source}}},Informational.parameters={...Informational.parameters,docs:{...Informational.parameters?.docs,source:{originalSource:'{\n  render: (args: CbAlertBannerComponent) => ({\n    props: args,\n    template: `\n            <cb-alert-banner\n                [show]="show"\n                [alertType]="alertType">\n                <div>\n                    <span style="font-weight: bold;">\n                        Some title:\n                    </span>\n                    This is an alert of some type\n                </div>\n            </cb-alert-banner>\n        `\n  }),\n  args: {\n    show: true,\n    alertType: \'informational\'\n  }\n}',...Informational.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:'{\n  render: (args: CbAlertBannerComponent) => ({\n    props: args,\n    template: `\n            <cb-alert-banner\n                [show]="show"\n                [alertType]="alertType">\n                <div>\n                    <span style="font-weight: bold;">\n                        Some title:\n                    </span>\n                    This is an alert of some type\n                </div>\n            </cb-alert-banner>\n        `\n  }),\n  args: {\n    show: true,\n    alertType: \'error\'\n  }\n}',...Error.parameters?.docs?.source}}},Success.parameters={...Success.parameters,docs:{...Success.parameters?.docs,source:{originalSource:'{\n  render: (args: CbAlertBannerComponent) => ({\n    props: args,\n    template: `\n            <cb-alert-banner\n                [show]="show"\n                [alertType]="alertType">\n                <div>\n                    <span style="font-weight: bold;">\n                        Some title:\n                    </span>\n                    This is an alert of some type\n                </div>\n            </cb-alert-banner>\n        `\n  }),\n  args: {\n    show: true,\n    alertType: \'success\'\n  }\n}',...Success.parameters?.docs?.source}}},Caution.parameters={...Caution.parameters,docs:{...Caution.parameters?.docs,source:{originalSource:'{\n  render: (args: CbAlertBannerComponent) => ({\n    props: args,\n    template: `\n            <cb-alert-banner\n                [show]="show"\n                [alertType]="alertType">\n                <div>\n                    <span style="font-weight: bold;">\n                        Some title:\n                    </span>\n                    This is an alert of some type\n                </div>\n            </cb-alert-banner>\n        `\n  }),\n  args: {\n    show: true,\n    alertType: \'caution\'\n  }\n}',...Caution.parameters?.docs?.source}}},WithLink.parameters={...WithLink.parameters,docs:{...WithLink.parameters?.docs,source:{originalSource:'{\n  render: (args: CbAlertBannerComponent) => ({\n    props: args,\n    template: `\n            <cb-alert-banner\n                [show]="show"\n                [alertType]="alertType">\n                <div>\n                    <span style="font-weight: bold;">\n                        Some title:\n                    </span>\n                    This is an alert of some type\n                </div>\n                <div>\n                    <a href="/">Some link</a>\n                </div>\n            </cb-alert-banner>\n        `\n  }),\n  args: {\n    show: true,\n    alertType: \'informational\'\n  }\n}',...WithLink.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Informational","Error","Success","Caution","WithLink"]},"./libs/ui-components/src/lib/cb-alert-banner/cb-alert-banner.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".cb-alert-banner-container {\n  display: flex;\n  align-items: start;\n  padding: 1rem 20px 1rem 14px;\n  border-radius: 4px;\n  background-color: #FFFFFF;\n  box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3);\n  z-index: 999;\n  position: sticky;\n}\n.cb-alert-banner-container--informational {\n  border-left: 6px solid #222222;\n}\n.cb-alert-banner-container--error {\n  border-left: 6px solid #AA010E;\n}\n.cb-alert-banner-container--success {\n  border-left: 6px solid #0E580E;\n}\n.cb-alert-banner-container--caution {\n  border-left: 6px solid #90240A;\n}\n.cb-alert-banner-container__status-icon {\n  margin-right: 12px;\n}\n.cb-alert-banner-container__content {\n  flex-grow: 1;\n  font-family: Lato;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 22px;\n  color: #222222;\n  margin-top: 1px;\n  margin-right: 14px;\n}\n.cb-alert-banner-container__content-link--right {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.cb-alert-banner-container__content-link--below {\n  display: flex;\n  flex-direction: column;\n}\n.cb-alert-banner-container__content-message {\n  font-family: Lato;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 22px;\n  margin-right: 0.75rem;\n}\n.cb-alert-banner-container__content-message-title {\n  font-family: Lato;\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 22px;\n}\n.cb-alert-banner-container__close-icon {\n  margin-top: 3px;\n}\n.cb-alert-banner-container__close-icon > button {\n  border: none;\n  background-color: transparent;\n}\n.cb-alert-banner-container__close-icon > button:hover {\n  cursor: pointer;\n  background-color: transparent;\n}\n.cb-alert-banner-container__close-icon > button:focus {\n  outline: 2px solid #5E9ED6;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);