(self.webpackChunkui_kit=self.webpackChunkui_kit||[]).push([[9040],{"./libs/ui-components/src/lib/cb-toggle/cb-toggle.directive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{S:()=>CbToggleDirective});var tslib__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/cdk/fesm2022/coercion.mjs"),_angular_forms__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),_common__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/ui-components/src/lib/common/services/class-updater/class-updater.service.ts"),_common__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./libs/ui-components/src/lib/common/utils/dom-utils/dom-utils.ts"),_common__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./libs/ui-components/src/lib/common/models/cb-color-theme.ts"),_common_services_cb_error_service__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./libs/ui-components/src/lib/common/services/cb-error-service.ts"),_cb_icon__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./libs/ui-components/src/lib/cb-icon/cb-icon.component.ts"),_cb_icon_models__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./libs/ui-components/src/lib/cb-icon/models/cb-icon-size.ts"),_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@ngneat/until-destroy/fesm2022/ngneat-until-destroy.mjs");let CbToggleDirective=class CbToggleDirective{get toggleOnText(){return this._toggleOnText}set toggleOnText(value){this._toggleOnText=value,this._updateToggleStatusText()}get toggleOffText(){return this._toggleOffText}set toggleOffText(value){this._toggleOffText=value,this._updateToggleStatusText()}get showIcons(){return this._showIcons}set showIcons(value){this._showIcons=(0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__.W6)(value)}get errorMessage(){return this._errorMessage}set errorMessage(value){this._errorMessage=value,this._errorService?.renderError(value)}set formControl(control){this._listenToControlChanges(control)}get readonly(){return this._readonly}set readonly(value){this._readonly=value,value?this._activateReadonly():this._deactivateReadonly()}constructor(_element,_renderer,_vcr,_cdr){this._element=_element,this._renderer=_renderer,this._vcr=_vcr,this._cdr=_cdr,this.toggleTextColor="default",this._checkedIconConfig={key:"utility-check",size:_cb_icon_models__WEBPACK_IMPORTED_MODULE_1__.a.SMALL,color:"white-800"},this._uncheckedIconConfig={key:"utility-close",size:_cb_icon_models__WEBPACK_IMPORTED_MODULE_1__.a.SMALL,color:"white-800"},this._classUpdater=new _common__WEBPACK_IMPORTED_MODULE_2__.u}ngAfterViewInit(){this._initCommonServices(),this._toggleInputElement=this._element.nativeElement.querySelector("input"),this._createLabelContainer(),this._moveInputToLabelContainer(),this._createToggleSwitchContainer(),this.showIcons&&(this._createIconContainer(),this._updateIcon(this._toggleInputElement)),this._createToggleTextContainer(),this._updateToggleStatusText(),this._applyColorTheme(this.colorTheme),this._errorService.initializeError(this.errorMessage),this._registerDisabledMutationObserver(),this._input=this._element.nativeElement.querySelector(".cb-toggle__input"),this.readonly&&this._activateReadonly()}ngOnDestroy(){this._mutationObserver&&this._mutationObserver.disconnect()}_initErrorService(){this._errorService=new _common_services_cb_error_service__WEBPACK_IMPORTED_MODULE_3__.s(this._element,this._renderer,this._vcr,this._cdr)}_initClassUpdater(){this._classUpdater.forComponent({defaultElement:this._element.nativeElement,baseClass:"cb-toggle"})}_initCommonServices(){this._initErrorService(),this._initClassUpdater()}onInput(){this._updateToggleStatusText(),this.showIcons&&this._updateIcon(this._toggleInputElement)}_activateReadonly(){this._toggleInputElement&&(this._classUpdater.addReadOnlyClass(),this._updateIcon(this._toggleInputElement),_common__WEBPACK_IMPORTED_MODULE_4__.U.disableKeyboardInput(this._toggleInputElement))}_deactivateReadonly(){this._toggleInputElement&&(this._classUpdater.removeReadOnlyClass(),this._updateIcon(this._toggleInputElement),_common__WEBPACK_IMPORTED_MODULE_4__.U.enableKeyboardInput(this._toggleInputElement))}_registerDisabledMutationObserver(){this._mutationObserver=new MutationObserver((mutations=>{mutations.forEach((mutation=>{const currentMutation=mutation;"disabled"===currentMutation.attributeName&&this._updateIcon(currentMutation.target)}))})),this._mutationObserver.observe(this._element.nativeElement.querySelector("input"),{attributes:!0})}_createLabelContainer(){this._labelContainerElement=this._renderer.createElement("label"),this._renderer.appendChild(this._element.nativeElement,this._labelContainerElement)}_moveInputToLabelContainer(){this._renderer.appendChild(this._labelContainerElement,this._toggleInputElement)}_createToggleSwitchContainer(){this._toggleSwitchContainerElement=this._renderer.createElement("span"),this._renderer.appendChild(this._labelContainerElement,this._toggleSwitchContainerElement)}_createIconContainer(){this._toggleIconContainerElement=this._renderer.createElement("span"),this._renderer.appendChild(this._labelContainerElement,this._toggleIconContainerElement)}_createToggleTextContainer(){this._toggleTextContainerElement=this._renderer.createElement("span"),this._renderer.addClass(this._toggleTextContainerElement,"cb-toggle__text"),this._renderer.addClass(this._toggleTextContainerElement,`cb-toggle__text--${this.toggleTextColor}`),this._renderer.appendChild(this._labelContainerElement,this._toggleTextContainerElement)}_updateToggleStatusText(){this._toggleInputElement&&this._renderer.setProperty(this._toggleTextContainerElement,"innerHTML",this._toggleInputElement.checked?this.toggleOnText?this.toggleOnText:"":this.toggleOffText?this.toggleOffText:"")}_resolveClass(colorTheme,element){const classNames=[`cb-toggle__${element}`];return classNames.push(`cb-toggle--${colorTheme||"theme"}__${element}`),classNames.join(" ")}_applyColorTheme(colorTheme){this._renderer.addClass(this._element.nativeElement,"cb-toggle"),this._renderer.setAttribute(this._toggleInputElement,"class",this._resolveClass(colorTheme,"input")),this._renderer.setAttribute(this._labelContainerElement,"class",this._resolveClass(colorTheme,"label-container")),this._renderer.setAttribute(this._toggleSwitchContainerElement,"class",this._resolveClass(colorTheme,"switch-container"))}_createIcon(iconConfig){const cbIconComponent=this._vcr.createComponent(_cb_icon__WEBPACK_IMPORTED_MODULE_5__.C);return cbIconComponent.instance.iconKey=iconConfig.key,cbIconComponent.instance.iconSize=iconConfig.size,cbIconComponent.instance.iconColor=iconConfig.color,cbIconComponent}_removeChildNodes(nodeToClear){return nodeToClear.childNodes.length>0&&nodeToClear.childNodes.forEach((childNode=>{this._renderer.removeChild(nodeToClear,childNode)})),nodeToClear}_addIcon(iconContainer,iconType){const iconNativeEl=this._createIcon(this[`_${iconType}IconConfig`]).location.nativeElement;return this._renderer.appendChild(iconContainer,iconNativeEl),iconContainer}_updateIcon(inputElement){this._updateIconColorTheme(inputElement,this.readonly?_common__WEBPACK_IMPORTED_MODULE_6__.y.DEFAULT:this.colorTheme);const iconType=inputElement.checked?"checked":"unchecked",iconContainer=this._renderer.parentNode(inputElement).querySelectorAll("span")[1];this._removeChildNodes(iconContainer),this._addIcon(iconContainer,iconType),this._cdr.detectChanges()}_updateIconColorTheme(checkedInput,colorTheme){const color=checkedInput.disabled?"white-200":colorTheme?colorTheme===_common__WEBPACK_IMPORTED_MODULE_6__.y.DEFAULT?"white-800":colorTheme===_common__WEBPACK_IMPORTED_MODULE_6__.y.WHITE?"white-branding":`${colorTheme}-branding`:"theme";this._checkedIconConfig.color=color,checkedInput.disabled?this._uncheckedIconConfig.color=color:this.readonly?this._uncheckedIconConfig.color="white-800":this._uncheckedIconConfig.color="white-400";const iconContainer=this._renderer.parentNode(checkedInput).querySelectorAll("span")[1];this._renderer.setAttribute(iconContainer,"class",checkedInput.checked?"cb-toggle__icon-container--on":"cb-toggle__icon-container--off")}_listenToControlChanges(control){control?.valueChanges?.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__.r)(this)).subscribe((()=>{const inputList=this._element.nativeElement.querySelectorAll("input");this._updateToggleStatusText(),this.showIcons&&this._updateIcon(inputList[0])}))}onMouseup(){setTimeout((()=>this._input.blur()))}static#_=this.ctorParameters=()=>[{type:_angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef},{type:_angular_core__WEBPACK_IMPORTED_MODULE_8__.Renderer2},{type:_angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewContainerRef},{type:_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef}];static#_2=this.propDecorators={toggleOnText:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_8__.Input}],toggleOffText:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_8__.Input}],showIcons:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_8__.Input}],colorTheme:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_8__.Input}],toggleTextColor:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_8__.Input}],errorMessage:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_8__.Input}],formControl:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_8__.ContentChild,args:[_angular_forms__WEBPACK_IMPORTED_MODULE_9__.eq]}],readonly:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_8__.Input}],onInput:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_8__.HostListener,args:["input",["$event.target"]]}],onMouseup:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_8__.HostListener,args:["mouseup"]}]}};CbToggleDirective=(0,tslib__WEBPACK_IMPORTED_MODULE_10__.UN)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__.q)(),(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Directive)({selector:"[cbToggle]"}),(0,tslib__WEBPACK_IMPORTED_MODULE_10__.YR)("design:paramtypes",[_angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Renderer2,_angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewContainerRef,_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef])],CbToggleDirective)},"./libs/ui-components/src/lib/cb-toggle/cb-toggle.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{v:()=>CbToggleModule});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_angular_forms__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),_cb_icon_cb_icon_module__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./libs/ui-components/src/lib/cb-icon/cb-icon.module.ts"),_cb_toggle_directive__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/ui-components/src/lib/cb-toggle/cb-toggle.directive.ts");let CbToggleModule=class CbToggleModule{};CbToggleModule=(0,tslib__WEBPACK_IMPORTED_MODULE_0__.UN)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({declarations:[_cb_toggle_directive__WEBPACK_IMPORTED_MODULE_2__.S],imports:[_cb_icon_cb_icon_module__WEBPACK_IMPORTED_MODULE_3__.W,_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,_angular_forms__WEBPACK_IMPORTED_MODULE_5__.y,_angular_forms__WEBPACK_IMPORTED_MODULE_5__.sl],exports:[_cb_toggle_directive__WEBPACK_IMPORTED_MODULE_2__.S]})],CbToggleModule)},"./libs/ui-components/src/lib/common/factories/create-error-icon.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{u:()=>createErrorIcon});var _cb_icon_models__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./libs/ui-components/src/lib/cb-icon/models/cb-icon-size.ts"),_cb_icon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/ui-components/src/lib/cb-icon/cb-icon.component.ts");const createErrorIcon=(vcr,size)=>{const errorIcon=vcr.createComponent(_cb_icon__WEBPACK_IMPORTED_MODULE_0__.C);return errorIcon.instance.iconKey="utility-error-stroke",errorIcon.instance.iconSize=size||_cb_icon_models__WEBPACK_IMPORTED_MODULE_1__.a.REGULAR,errorIcon.instance.iconColor="error-shade",errorIcon}},"./libs/ui-components/src/lib/common/helpers/prevent-keydown-event.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{K:()=>preventKeydownInput});const preventKeydownInput=$event=>{["Tab"].includes($event.key)||$event.preventDefault()}},"./libs/ui-components/src/lib/common/models/cb-color-theme-colors.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{q:()=>CbColorThemeColors});const CbColorThemeColors=["default","blue","green","magenta","purple","turquoise","yellow","white"]},"./libs/ui-components/src/lib/common/models/cb-color-theme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var CbColorTheme;__webpack_require__.d(__webpack_exports__,{y:()=>CbColorTheme}),function(CbColorTheme){CbColorTheme.DEFAULT="default",CbColorTheme.WHITE="white",CbColorTheme.YELLOW="yellow",CbColorTheme.GREEN="green",CbColorTheme.TURQUOISE="turquoise",CbColorTheme.MAGENTA="magenta",CbColorTheme.PURPLE="purple",CbColorTheme.BLUE="blue"}(CbColorTheme||(CbColorTheme={}))},"./libs/ui-components/src/lib/common/models/variant.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Y:()=>CbInputFieldVariants,g:()=>CbButtonVariants});const CbInputFieldVariants=["default","minimal","white-fill"],CbButtonVariants=["primary","secondary","ghost","success","danger","warning","info"]},"./libs/ui-components/src/lib/common/services/cb-error-service.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{s:()=>CbErrorService});var isEmpty=__webpack_require__("./node_modules/lodash-es/isEmpty.js"),isNil=__webpack_require__("./node_modules/lodash-es/isNil.js"),create_error_icon=__webpack_require__("./libs/ui-components/src/lib/common/factories/create-error-icon.ts");class CbErrorService{constructor(_element,_renderer,_vcr,_changeDetectionRef){this._element=_element,this._renderer=_renderer,this._vcr=_vcr,this._changeDetectionRef=_changeDetectionRef}_clearError(){this._errorElement?.childNodes?.[0]&&this._renderer.removeChild(this._errorElement,this._errorElement.childNodes[0]),this._errorText&&this._errorText.remove()}renderError(errorMessage){(0,isEmpty.c)(errorMessage)||(0,isNil.c)(this._errorElement)?this._clearError():(this._clearError(),this._errorIcon=(0,create_error_icon.u)(this._vcr),this._errorText=((renderer,errorMessage,errorClass="error-text-container__error-text")=>{if(!(0,isNil.c)(errorMessage)){const errorTextElement=renderer.createElement("div");renderer.addClass(errorTextElement,errorClass);const errorText=renderer.createText(errorMessage);return renderer.appendChild(errorTextElement,errorText),errorTextElement}})(this._renderer,errorMessage),this._renderer.appendChild(this._errorElement,this._errorIcon.location.nativeElement),this._renderer.appendChild(this._errorElement,this._errorText),this._changeDetectionRef.detectChanges())}initializeError(errorMessage){const errorElement=((renderer,errorClass="error-text-container")=>{const errorElement=renderer.createElement("div");return renderer.addClass(errorElement,errorClass),errorElement})(this._renderer);this._errorElement=errorElement,this._renderer.appendChild(this._element.nativeElement||this._element,this._errorElement),this.renderError(errorMessage)}}},"./libs/ui-components/src/lib/common/services/class-updater/class-updater.service.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{u:()=>ClassUpdaterService});var cb_color_theme_colors=__webpack_require__("./libs/ui-components/src/lib/common/models/cb-color-theme-colors.ts"),variant=__webpack_require__("./libs/ui-components/src/lib/common/models/variant.ts");class ClassUpdaterBaseService{initializeService(config){this._baseClass=config.baseClass,this._colorThemeBaseClass=config.colorThemeBaseClass,this._activeBaseClass=config.activeBaseClass,this._variantBaseClass=config.variantBaseClass,this._errorBaseClass=config.errorBaseClass,this._disabledBaseClass=config.disabledBaseClass,this._readonlyBaseClass=config.readonlyBaseClass,this._defaultElement=config.defaultElement,this._baseElement=config.baseElement,this._colorElement=config.colorElement,this._activeElement=config.activeElement,this._variantElement=config.variantElement,this._errorElement=config.errorElement,this._disabledElement=config.disabledElement,this._ignoreVariantSuffix=config.ignoreVariantSuffix,this._variantsToUse=config.variantsToUse||"input",this._colorThemeClasses=this._getColorThemeClasses(),this._variantClasses=this._getVariantClasses(),this._activeClass=this._getActiveClass(),this._errorClass=this._getErrorClass(),this._disabledClass=this._getDisabledClass(),this._readonlyClass=this._getReadOnlyClass()}_getColorThemeClasses(){const base=this._colorThemeBaseClass||this._baseClass;return cb_color_theme_colors.q.map((color=>`${base}--${color}-color-theme`))}_getVariantClasses(){const base=this._variantBaseClass||this._baseClass;return("button"===this._variantsToUse?variant.g:variant.Y).map((variant=>`${base}--${variant}${this._ignoreVariantSuffix?"":"-variant"}`))}_getActiveClass(){return`${this._activeBaseClass||this._baseClass}--active`}_getErrorClass(){return`${this._errorBaseClass||this._baseClass}--error-state`}_getDisabledClass(){return`${this._disabledBaseClass||this._baseClass}--disabled`}_getReadOnlyClass(){return`${this._readonlyBaseClass||this._baseClass}--read-only`}}var isString=__webpack_require__("./node_modules/lodash-es/isString.js"),isNil=__webpack_require__("./node_modules/lodash-es/isNil.js");class ClassUpdaterService extends ClassUpdaterBaseService{constructor(){super()}forComponent(config){return super.initializeService(config),this._addBaseClass(),this}_addBaseClass(){const target=this._baseElement||this._defaultElement;(0,isString.c)(this._baseClass)&&!(0,isNil.c)(target)&&target.classList.add(this._baseClass)}removeActiveClass(){const target=this._activeElement||this._defaultElement;(0,isNil.c)(target)||target.classList.forEach((c=>{c===this._activeClass&&target.classList.remove(c)}))}addActiveClass(){const target=this._activeElement??this._defaultElement;if((0,isString.c)(this._activeClass)&&!(0,isNil.c)(target))return target.classList?.add(this._activeClass),this._activeClass}removeErrorClass(){const target=this._errorElement||this._defaultElement;(0,isNil.c)(target)||target.classList.forEach((c=>{c===this._errorClass&&target.classList.remove(c)}))}addErrorClass(){const target=this._errorElement??this._defaultElement;if(!(0,isNil.c)(target)&&(0,isString.c)(this._errorClass))return target.classList?.add(this._errorClass),this._errorClass}addDisabledClass(){const target=this._disabledElement||this._defaultElement;if((0,isString.c)(this._disabledClass)&&!(0,isNil.c)(target))return target.classList.add(this._disabledClass),this._disabledClass}removeDisabledClass(){const target=this._disabledElement||this._defaultElement;(0,isNil.c)(target)||target.classList.forEach((c=>{c===this._disabledClass&&target.classList.remove(c)}))}addReadOnlyClass(){const target=this._readonlyElement||this._defaultElement;if((0,isString.c)(this._readonlyClass)&&!(0,isNil.c)(target))return target.classList.add(this._readonlyClass),this._readonlyClass}removeReadOnlyClass(){const target=this._readonlyElement||this._defaultElement;(0,isNil.c)(target)||target.classList.forEach((c=>{c===this._readonlyClass&&target.classList.remove(c)}))}updateVariantClass(nextVariant){const target=this._variantElement||this._defaultElement,nextVariantClass=this._variantClasses?.find((c=>c.includes(nextVariant)));if((0,isString.c)(nextVariantClass)&&!(0,isNil.c)(target))return target.classList.forEach((c=>{this._variantClasses?.includes(c)&&target?.classList?.remove(c)})),target.classList.add(nextVariantClass),nextVariantClass}updateColorThemeClass(nextColorTheme){const target=this._variantElement||this._defaultElement;if(!(0,isNil.c)(target)){const nextColorThemeClass=`${this._colorThemeBaseClass||this._baseClass}--${nextColorTheme}-color-theme`;return target.classList.forEach((c=>{this._colorThemeClasses?.includes(c)&&target?.classList?.remove(c)})),target.classList.add(nextColorThemeClass),nextColorThemeClass}}}},"./libs/ui-components/src/lib/common/utils/dom-utils/dom-utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{U:()=>DomUtils});var lodash=__webpack_require__("./node_modules/lodash/lodash.js");class CbLogger{static logHeadline(functionName){console.log("%c __________________________________________ ","color: red; font-size: 20px; font-family: Lato"),console.log(`%c 🧨 ${functionName} 🧨`,"color: garnet; font-size: 20px; font-family: Lato")}static logArg(args){console.log("%c 🥦 arguments: ","color: green; font-size: 16px; font-family: Lato",args)}static logControlFlow(controlFlow){console.log("%c  🔐 control-flow: ","color: green; font-size: 14px; font-family: Lato",controlFlow)}static logVars(vars){console.log("%c ✨ vars: ","color: deepyellow; font-size: 12px; font-family: Lato",vars)}static logFunctionCall(functions,args){console.log(`%c 📣 ${functions[0]} CALLS ${functions[1]} with:`,"color: blue; font-size: 12px; font-family: Lato",args)}}var prevent_keydown_event=__webpack_require__("./libs/ui-components/src/lib/common/helpers/prevent-keydown-event.ts"),isArray=__webpack_require__("./node_modules/lodash-es/isArray.js");class DomUtils{static#_=this.colorThemeClassSuffixes=["--default-color-theme","--blue-color-theme","--green-color-theme","--magenta-color-theme","--purple-color-theme","--turquoise-color-theme","--yellow-color-theme","--white-color-theme","--theme-color-theme"];static getFirstNodeOfType(nodes,nodeName){if(!(0,lodash.isNil)(nodes))for(let i=0;i<nodes.length;i++)if(nodes[i].nodeName===nodeName)return nodes[i]}static removeChildNodes(renderer,nodeToClear){return CbLogger.logArg({nodeToClear,childNodes:nodeToClear.childNodes}),nodeToClear?.childNodes?.length>0&&nodeToClear.childNodes.forEach((childNode=>{renderer.removeChild(nodeToClear,childNode)})),nodeToClear}static#_2=this.classIncludes=(element,className)=>{const classes=element?.className?.split(" ");return classes?.includes(className)};static updateColorThemeClass(element,classToAdd,classBody){const classList=element.classList,classesToRemove=[];return classList.forEach((c=>{DomUtils.colorThemeClassSuffixes.find((classSuffix=>c.includes(`${classBody}${classSuffix}`)))&&classesToRemove.push(c)})),classesToRemove.length>0&&classesToRemove.forEach((c=>classList.remove(c))),classList.add(classToAdd),element}static#_3=this.preventKeydownInput=prevent_keydown_event.K;static disableKeyboardInput(input){(0,isArray.c)(input)?input?.forEach((i=>i.addEventListener("keydown",DomUtils.preventKeydownInput))):input.addEventListener("keydown",DomUtils.preventKeydownInput)}static enableKeyboardInput(input){(0,isArray.c)(input)?input?.forEach((i=>i.removeEventListener("keydown",DomUtils.preventKeydownInput))):input.removeEventListener("keydown",DomUtils.preventKeydownInput)}}},"./libs/ui-components/src/lib/cb-toggle/showcase/cb-toggle-showcase.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>cb_toggle_showcase_component_stories});var common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),fesm2022_forms=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),animations=__webpack_require__("./node_modules/@angular/platform-browser/fesm2022/animations.mjs"),dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),addon_jest_dist=__webpack_require__("./node_modules/@storybook/addon-jest/dist/index.mjs"),cb_toggle_module=__webpack_require__("./libs/ui-components/src/lib/cb-toggle/cb-toggle.module.ts"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),cb_toggle_showcase_componentngResource=__webpack_require__("./libs/ui-components/src/lib/cb-toggle/showcase/cb-toggle-showcase.component.scss?ngResource"),cb_toggle_showcase_componentngResource_default=__webpack_require__.n(cb_toggle_showcase_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let CbToggleShowcaseComponent=class CbToggleShowcaseComponent{get disabled(){return this._disabled}set disabled(value){this._disabled=value,this.toggleDisable(value)}constructor(formBuilder){this.colorThemes=["black","yellow","green","turquoise","magenta","purple","blue"],this.showIcons=!1,this.errorMessage=null,this.toggleForm=formBuilder.group({toggle:new fesm2022_forms.Ku(!1)})}toggleDisable(disabled){disabled?this.toggleForm.get("toggle")?.disable():this.toggleForm.get("toggle")?.enable()}static#_=this.ctorParameters=()=>[{type:fesm2022_forms.im}];static#_2=this.propDecorators={toggleOnText:[{type:core.Input}],toggleOffText:[{type:core.Input}],toggleTextColor:[{type:core.Input}],showIcons:[{type:core.Input}],colorTheme:[{type:core.Input}],errorMessage:[{type:core.Input}],disabled:[{type:core.Input}],readonly:[{type:core.Input}]}};CbToggleShowcaseComponent=(0,tslib_es6.UN)([(0,core.Component)({selector:"ui-components-showcase-cb-toggle",template:'\n    <form [formGroup]="toggleForm">\n      <div\n        cbToggle\n        [toggleOnText]="toggleOnText"\n        [toggleOffText]="toggleOffText"\n        [toggleTextColor]="toggleTextColor"\n        [showIcons]="showIcons"\n        [colorTheme]="colorTheme"\n        [errorMessage]="errorMessage"\n        [readonly]="readonly"\n      >\n        <input type="checkbox" formControlName="toggle" />\n      </div>\n    </form>\n  ',encapsulation:core.ViewEncapsulation.None,styles:[cb_toggle_showcase_componentngResource_default()]}),(0,tslib_es6.YR)("design:paramtypes",[fesm2022_forms.im])],CbToggleShowcaseComponent);var cb_color_theme=__webpack_require__("./libs/ui-components/src/lib/common/models/cb-color-theme.ts"),_jest_test_results=__webpack_require__("./libs/ui-components/.jest-test-results.json");const cb_toggle_showcase_component_stories={title:"Components/Actions & Inputs/Toggle",component:CbToggleShowcaseComponent,argTypes:{colorTheme:{control:"select",options:["default","yellow","green","turquoise","magenta","purple","blue"]},toggleOnText:{control:"text"},toggleOffText:{control:"text"},toggleTextColor:{control:"radio",options:["default","white"]},showIcons:{control:"boolean"},errorMessage:{control:"text"},disabled:{control:"boolean"},readonly:{control:"boolean"}},decorators:[(0,dist.moduleMetadata)({imports:[common.CommonModule,fesm2022_forms.sl,cb_toggle_module.v]}),(0,dist.applicationConfig)({providers:[(0,animations.provideAnimations)()]}),(0,addon_jest_dist.c)({results:_jest_test_results})],parameters:{jest:["cb-toggle.directive"]}},Default={render:args=>({props:args}),args:{colorTheme:cb_color_theme.y.GREEN,toggleOffText:"Off",toggleOnText:"On",showIcons:!0,disabled:!1}},Disabled={render:args=>({props:args}),args:{colorTheme:cb_color_theme.y.GREEN,toggleOffText:"Off",toggleOnText:"On",showIcons:!0,disabled:!0}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: (args: CbToggleShowcaseComponent) => ({\n    props: args\n  }),\n  args: {\n    colorTheme: CbColorTheme.GREEN,\n    toggleOffText: 'Off',\n    toggleOnText: 'On',\n    showIcons: true,\n    disabled: false\n  }\n}",...Default.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  render: (args: CbToggleShowcaseComponent) => ({\n    props: args\n  }),\n  args: {\n    colorTheme: CbColorTheme.GREEN,\n    toggleOffText: 'Off',\n    toggleOnText: 'On',\n    showIcons: true,\n    disabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Disabled"]},"./libs/ui-components/src/lib/cb-toggle/showcase/cb-toggle-showcase.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,'.cb-toggle {\n  display: inline-block;\n}\n.cb-toggle .error-text-container {\n  display: flex;\n  flex-direction: row;\n  align-items: start;\n  gap: 4px;\n}\n.cb-toggle .error-text-container .cb-icon {\n  height: 18px;\n  display: flex;\n  align-items: center;\n}\n.cb-toggle .error-text-container__error-text {\n  color: #AA010E;\n  font-size: 13px;\n  font-family: Lato;\n  font-weight: 400;\n  line-height: 18px;\n}\n.cb-toggle__input {\n  height: 0px;\n  width: 0px;\n  opacity: 0;\n  position: absolute;\n}\n.cb-toggle__label-container {\n  cursor: pointer;\n  position: relative;\n  display: flex;\n  gap: 0.5rem;\n}\n.cb-toggle__switch-container {\n  display: block;\n  min-width: 48px;\n  height: 24px;\n  border-radius: 24px;\n  background-color: #AFAFAF;\n}\n.cb-toggle__switch-container::before {\n  position: absolute;\n  content: " ";\n  width: 20px;\n  height: 20px;\n  left: 0.125rem;\n  top: 0.125rem;\n  border-radius: 24px;\n  background-color: #FFFFFF;\n}\n.cb-toggle__icon-container {\n  background-color: red;\n}\n.cb-toggle__icon-container--on {\n  position: absolute;\n  top: 0.438rem;\n  left: 1.938rem;\n}\n.cb-toggle__icon-container--off {\n  position: absolute;\n  top: 0.438rem;\n  left: 0.438rem;\n}\n.cb-toggle__input:checked + .cb-toggle__switch-container::before {\n  transform: translateX(24px);\n}\n.cb-toggle__input:focus + .cb-toggle__switch-container {\n  outline: 2px solid #5e9ed6;\n}\n.cb-toggle__label-container:hover .cb-toggle__switch-container::before {\n  filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.3)) drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.15));\n}\n.cb-toggle__text {\n  display: flex;\n  align-items: center;\n  font-family: Lato;\n  font-weight: 400;\n  line-height: 22px;\n  font-size: 16px;\n}\n.cb-toggle__text--default {\n  color: #222222;\n}\n.cb-toggle__text--white {\n  color: #FFFFFF;\n}\n.cb-toggle--theme__input:checked + .cb-toggle--theme__switch-container {\n  background-color: #222222;\n}\n.cb-toggle--theme__input:checked + .cb-toggle--theme__switch-container::before {\n  background-color: #FFFFFF;\n}\n.cb-toggle--theme__label-container:hover .cb-toggle--theme__switch-container::before {\n  outline: 4px solid #4B4E53;\n}\n.cb-toggle--theme__text {\n  color: #FFFFFF;\n}\n.cb-toggle--black__input:checked + .cb-toggle--black__switch-container {\n  background-color: #222222;\n}\n.cb-toggle--black__label-container:hover .cb-toggle--black__switch-container::before {\n  outline: 4px solid #4B4E53;\n}\n.cb-toggle--white__input:checked + .cb-toggle--white__switch-container {\n  background-color: #FFFFFF;\n}\n.cb-toggle--white__input:checked + .cb-toggle--white__switch-container::before {\n  background-color: #222222;\n}\n.cb-toggle--white__label-container:hover .cb-toggle--white__switch-container::before {\n  outline: 4px solid #E8E8E8;\n}\n.cb-toggle--white .cb-toggle__text {\n  color: #FFFFFF;\n}\n.cb-toggle--white__label-container .cb-toggle__text {\n  color: #FFFFFF;\n}\n.cb-toggle--yellow__input:checked + .cb-toggle--yellow__switch-container {\n  background-color: #FFB617;\n}\n.cb-toggle--yellow__label-container:hover .cb-toggle--yellow__switch-container::before {\n  outline: 4px solid #FFE7BB;\n}\n.cb-toggle--green__input:checked + .cb-toggle--green__switch-container {\n  background-color: #7ACB00;\n}\n.cb-toggle--green__label-container:hover .cb-toggle--green__switch-container::before {\n  outline: 4px solid #DEF1C1;\n}\n.cb-toggle--turquoise__input:checked + .cb-toggle--turquoise__switch-container {\n  background-color: #01C1D6;\n}\n.cb-toggle--turquoise__label-container:hover .cb-toggle--turquoise__switch-container::before {\n  outline: 4px solid #C2F3FB;\n}\n.cb-toggle--magenta__input:checked + .cb-toggle--magenta__switch-container {\n  background-color: #FF0198;\n}\n.cb-toggle--magenta__label-container:hover .cb-toggle--magenta__switch-container::before {\n  outline: 4px solid #FFE3EE;\n}\n.cb-toggle--purple__input:checked + .cb-toggle--purple__switch-container {\n  background-color: #6E27C5;\n}\n.cb-toggle--purple__label-container:hover .cb-toggle--purple__switch-container::before {\n  outline: 4px solid #B98EE1;\n}\n.cb-toggle--blue__input:checked + .cb-toggle--blue__switch-container {\n  background-color: #150F96;\n}\n.cb-toggle--blue__label-container:hover .cb-toggle--blue__switch-container::before {\n  outline: 4px solid #354EA2;\n}\n.cb-toggle__label-container:has(input:disabled) {\n  cursor: not-allowed;\n}\n.cb-toggle__input:disabled + .cb-toggle__switch-container::before {\n  outline: none;\n  filter: none;\n  background-color: #F4F4F4;\n}\n.cb-toggle__input:disabled + .cb-toggle__switch-container {\n  background-color: #E8E8E8;\n}\n.cb-toggle--white__input:disabled + .cb-toggle--white__switch-container {\n  background-color: #D7D7D7;\n}\n.cb-toggle__input:disabled ~ .cb-toggle__text {\n  color: #AFAFAF;\n}\n.cb-toggle .error-text-container {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.cb-toggle .error-text-container__error-text {\n  color: #AA010E;\n  font-size: 13px;\n  font-family: Lato;\n  font-weight: 400;\n  line-height: 18px;\n}\n.cb-toggle.cb-toggle--read-only {\n  pointer-events: none;\n}\n.cb-toggle.cb-toggle--read-only .cb-toggle__label-container:hover .cb-toggle__switch-container::before {\n  outline: none;\n  filter: none;\n}\n.cb-toggle.cb-toggle--read-only .cb-toggle__switch-container {\n  box-sizing: border-box;\n  border: 1px solid #6F7175;\n  background-color: #E8E8E8;\n}\n.cb-toggle.cb-toggle--read-only .cb-toggle__switch-container::before {\n  box-sizing: border-box;\n  border: 1px solid #6F7175;\n}',""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);