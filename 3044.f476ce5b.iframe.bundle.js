"use strict";(self.webpackChunkui_kit=self.webpackChunkui_kit||[]).push([[3044,1508,7624,663,6548],{"./node_modules/@angular/cdk/fesm2022/coercion.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Mt:()=>coerceArray,W6:()=>coerceBooleanProperty,mk:()=>coerceElement,ph:()=>coerceCssPixelValue,wZ:()=>coerceNumberProperty});var _angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");function coerceBooleanProperty(value){return null!=value&&"false"!=`${value}`}function coerceNumberProperty(value,fallbackValue=0){return function _isNumberValue(value){return!isNaN(parseFloat(value))&&!isNaN(Number(value))}(value)?Number(value):fallbackValue}function coerceArray(value){return Array.isArray(value)?value:[value]}function coerceCssPixelValue(value){return null==value?"":"string"==typeof value?value:`${value}px`}function coerceElement(elementOrRef){return elementOrRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef?elementOrRef.nativeElement:elementOrRef}},"./node_modules/@ngneat/until-destroy/fesm2022/ngneat-until-destroy.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>UntilDestroy,r:()=>untilDestroyed});var rxjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subject.js"),rxjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subscription.js"),rxjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/from.js"),rxjs__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/empty.js"),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),rxjs_operators__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js"),rxjs_operators__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js"),process=__webpack_require__("./node_modules/process/browser.js");const NG_PIPE_DEF=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵNG_PIPE_DEF"];const DESTROY=Symbol("__destroy"),DECORATOR_APPLIED=Symbol("__decoratorApplied");function getSymbol(destroyMethodName){return"string"==typeof destroyMethodName?Symbol(`__destroy__${destroyMethodName}`):DESTROY}function createSubjectOnTheInstance(instance,symbol){instance[symbol]||(instance[symbol]=new rxjs__WEBPACK_IMPORTED_MODULE_1__.E)}function completeSubjectOnTheInstance(instance,symbol){instance[symbol]&&(instance[symbol].next(),instance[symbol].complete(),instance[symbol]=null)}function unsubscribe(property){property instanceof rxjs__WEBPACK_IMPORTED_MODULE_2__.wH&&property.unsubscribe()}function decorateNgOnDestroy(ngOnDestroy,options){return function(){if(ngOnDestroy&&ngOnDestroy.call(this),completeSubjectOnTheInstance(this,getSymbol()),options.arrayName&&function unsubscribeIfPropertyIsArrayLike(property){Array.isArray(property)&&property.forEach(unsubscribe)}(this[options.arrayName]),options.checkProperties)for(const property in this)options.blackList?.includes(property)||unsubscribe(this[property])}}function UntilDestroy(options={}){return type=>{!function isPipe(target){return!!target[NG_PIPE_DEF]}(type)?function decorateProviderDirectiveOrComponent(type,options){type.prototype.ngOnDestroy=decorateNgOnDestroy(type.prototype.ngOnDestroy,options)}(type,options):function decoratePipe(type,options){const def=type.ɵpipe;def.onDestroy=decorateNgOnDestroy(def.onDestroy,options)}(type,options),function markAsDecorated(type){type.prototype[DECORATOR_APPLIED]=!0}(type)}}const CLEANUP=7,CheckerHasBeenSet=Symbol("CheckerHasBeenSet");function setupSubjectUnsubscribedChecker(instance,destroy$){instance[CheckerHasBeenSet]||function isAngularInTestMode(){return"undefined"!=typeof __karma__&&!!__karma__||"undefined"!=typeof jasmine&&!!jasmine||"undefined"!=typeof jest&&!!jest||"undefined"!=typeof Mocha&&!!Mocha||void 0!==process&&"[object process]"===Object.prototype.toString.call(process)}()||(runOutsideAngular((()=>(0,rxjs__WEBPACK_IMPORTED_MODULE_3__.Q)(Promise.resolve()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.O)((()=>{let lContext;try{lContext=(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵgetLContext"])(instance)}catch{lContext=null}const lView=lContext?.lView;if(null==lView)return rxjs__WEBPACK_IMPORTED_MODULE_5__.k;const lCleanup=lView[CLEANUP]||(lView[CLEANUP]=[]),cleanupHasBeenExecuted$=new rxjs__WEBPACK_IMPORTED_MODULE_1__.E;return lCleanup.push((function untilDestroyedLCleanup(){runOutsideAngular((()=>{cleanupHasBeenExecuted$.next(),cleanupHasBeenExecuted$.complete()}))})),cleanupHasBeenExecuted$})),(0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.O)((()=>Promise.resolve()))).subscribe((()=>{(destroy$.observed??destroy$.observers.length>0)&&console.warn(function createMessage(instance){return`\n  The ${instance.constructor.name} still has subscriptions that haven't been unsubscribed.\n  This may happen if the class extends another class decorated with @UntilDestroy().\n  The child class implements its own ngOnDestroy() method but doesn't call super.ngOnDestroy().\n  Let's look at the following example:\n  @UntilDestroy()\n  @Directive()\n  export abstract class BaseDirective {}\n  @Component({ template: '' })\n  export class ConcreteComponent extends BaseDirective implements OnDestroy {\n    constructor() {\n      super();\n      someObservable$.pipe(untilDestroyed(this)).subscribe();\n    }\n    ngOnDestroy(): void {\n      // Some logic here...\n    }\n  }\n  The BaseDirective.ngOnDestroy() will not be called since Angular will call ngOnDestroy()\n  on the ConcreteComponent, but not on the BaseDirective.\n  One of the solutions is to declare an empty ngOnDestroy method on the BaseDirective:\n  @UntilDestroy()\n  @Directive()\n  export abstract class BaseDirective {\n    ngOnDestroy(): void {}\n  }\n  @Component({ template: '' })\n  export class ConcreteComponent extends BaseDirective implements OnDestroy {\n    constructor() {\n      super();\n      someObservable$.pipe(untilDestroyed(this)).subscribe();\n    }\n    ngOnDestroy(): void {\n      // Some logic here...\n      super.ngOnDestroy();\n    }\n  }\n  `}(instance))})))),instance[CheckerHasBeenSet]=!0)}function runOutsideAngular(fn){const Zone=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵglobal"].Zone;return!!Zone&&"function"==typeof Zone.root?.run?Zone.root.run(fn):fn()}const NG_DEV_MODE="undefined"==typeof ngDevMode||ngDevMode;function untilDestroyed(instance,destroyMethodName){return source=>{const symbol=getSymbol(destroyMethodName);"string"==typeof destroyMethodName?function overrideNonDirectiveInstanceMethod(instance,destroyMethodName,symbol){const originalDestroy=instance[destroyMethodName];if(NG_DEV_MODE&&"function"!=typeof originalDestroy)throw new Error(`${instance.constructor.name} is using untilDestroyed but doesn't implement ${destroyMethodName}`);createSubjectOnTheInstance(instance,symbol),instance[destroyMethodName]=function(){originalDestroy.apply(this,arguments),completeSubjectOnTheInstance(this,symbol),instance[destroyMethodName]=originalDestroy}}(instance,destroyMethodName,symbol):(NG_DEV_MODE&&function ensureClassIsDecorated(instance){const prototype=Object.getPrototypeOf(instance);if(!(DECORATOR_APPLIED in prototype))throw new Error("untilDestroyed operator cannot be used inside directives or components or providers that are not decorated with UntilDestroy decorator")}(instance),createSubjectOnTheInstance(instance,symbol));const destroy$=instance[symbol];return NG_DEV_MODE&&setupSubjectUnsubscribedChecker(instance,destroy$),source.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.a)(destroy$))}}},"./node_modules/@storybook/angular/dist/client/argsToTemplate.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.argsToTemplate=void 0,exports.argsToTemplate=function argsToTemplate(args,options={}){const includeSet=options.include?new Set(options.include):null,excludeSet=options.exclude?new Set(options.exclude):null;return Object.entries(args).filter((([key])=>void 0!==args[key])).filter((([key])=>includeSet?includeSet.has(key):!excludeSet||!excludeSet.has(key))).map((([key,value])=>"function"==typeof value?`(${key})="${key}($event)"`:`[${key}]="${key}"`)).join(" ")}},"./node_modules/@storybook/angular/dist/client/decorators.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.componentWrapperDecorator=exports.applicationConfig=exports.moduleMetadata=void 0;const ComputesTemplateFromComponent_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/ComputesTemplateFromComponent.js"),NgComponentAnalyzer_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/utils/NgComponentAnalyzer.js");exports.moduleMetadata=metadata=>storyFn=>{const story=storyFn(),storyMetadata=story.moduleMetadata||{};return metadata=metadata||{},{...story,moduleMetadata:{declarations:[...metadata.declarations||[],...storyMetadata.declarations||[]],entryComponents:[...metadata.entryComponents||[],...storyMetadata.entryComponents||[]],imports:[...metadata.imports||[],...storyMetadata.imports||[]],schemas:[...metadata.schemas||[],...storyMetadata.schemas||[]],providers:[...metadata.providers||[],...storyMetadata.providers||[]]}}},exports.applicationConfig=function applicationConfig(config){return storyFn=>{const story=storyFn(),storyConfig=story.applicationConfig;return{...story,applicationConfig:storyConfig||config?{...config,...storyConfig,providers:[...config?.providers||[],...storyConfig?.providers||[]]}:void 0}}};exports.componentWrapperDecorator=(element,props)=>(storyFn,storyContext)=>{const story=storyFn(),currentProps="function"==typeof props?props(storyContext):props,template=(0,NgComponentAnalyzer_1.isComponent)(element)?(0,ComputesTemplateFromComponent_1.computesTemplateFromComponent)(element,currentProps??{},story.template):element(story.template);return{...story,template,...currentProps||story.props?{props:{...currentProps,...story.props}}:{}}}},"./node_modules/@storybook/angular/dist/client/index.js":function(__unused_webpack_module,exports,__webpack_require__){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.argsToTemplate=exports.applicationConfig=exports.componentWrapperDecorator=exports.moduleMetadata=void 0,__webpack_require__("./node_modules/@storybook/angular/dist/client/globals.js"),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-api.js"),exports),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);var decorators_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/decorators.js");Object.defineProperty(exports,"moduleMetadata",{enumerable:!0,get:function(){return decorators_1.moduleMetadata}}),Object.defineProperty(exports,"componentWrapperDecorator",{enumerable:!0,get:function(){return decorators_1.componentWrapperDecorator}}),Object.defineProperty(exports,"applicationConfig",{enumerable:!0,get:function(){return decorators_1.applicationConfig}});var argsToTemplate_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/argsToTemplate.js");Object.defineProperty(exports,"argsToTemplate",{enumerable:!0,get:function(){return argsToTemplate_1.argsToTemplate}})},"./node_modules/@storybook/angular/dist/client/public-api.js":function(__unused_webpack_module,exports,__webpack_require__){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.raw=exports.forceReRender=exports.configure=exports.storiesOf=void 0;const preview_api_1=__webpack_require__("@storybook/preview-api"),render_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/render.js"),decorateStory_1=__importDefault(__webpack_require__("./node_modules/@storybook/angular/dist/client/decorateStory.js"));__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);const api=(0,preview_api_1.start)(render_1.renderToCanvas,{decorateStory:decorateStory_1.default,render:render_1.render});exports.storiesOf=(kind,m)=>api.clientApi.storiesOf(kind,m).addParameters({renderer:"angular"});exports.configure=(...args)=>api.configure("angular",...args),exports.forceReRender=api.forceReRender,exports.raw=api.clientApi.raw},"./node_modules/@storybook/angular/dist/client/public-types.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0})},"./node_modules/@storybook/angular/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _client_index__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/client/index.js");__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"applicationConfig")&&__webpack_require__.d(__webpack_exports__,{applicationConfig:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.applicationConfig}}),__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"componentWrapperDecorator")&&__webpack_require__.d(__webpack_exports__,{componentWrapperDecorator:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.componentWrapperDecorator}}),__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"moduleMetadata")&&__webpack_require__.d(__webpack_exports__,{moduleMetadata:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata}})},"./node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{module.exports=function(i){return i[1]}},"./node_modules/lodash-es/isNil.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function isNil(value){return null==value}},"./node_modules/lodash-es/isString.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>__WEBPACK_DEFAULT_EXPORT__});var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/lodash-es/_baseGetTag.js"),_isArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lodash-es/isArray.js"),_isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash-es/isObjectLike.js");const __WEBPACK_DEFAULT_EXPORT__=function isString(value){return"string"==typeof value||!(0,_isArray_js__WEBPACK_IMPORTED_MODULE_0__.c)(value)&&(0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__.c)(value)&&"[object String]"==(0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_2__.c)(value)}},"./node_modules/rxjs/dist/esm5/internal/observable/combineLatest.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>combineLatest});var _Observable__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Observable.js"),_util_argsArgArrayOrObject__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/argsArgArrayOrObject.js"),_from__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/from.js"),_util_identity__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/identity.js"),_util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/mapOneOrManyArgs.js"),_util_args__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/args.js"),_util_createObject__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/createObject.js"),_operators_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"),_util_executeSchedule__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/executeSchedule.js");function combineLatest(){for(var args=[],_i=0;_i<arguments.length;_i++)args[_i]=arguments[_i];var scheduler=(0,_util_args__WEBPACK_IMPORTED_MODULE_0__.e_)(args),resultSelector=(0,_util_args__WEBPACK_IMPORTED_MODULE_0__.yu)(args),_a=(0,_util_argsArgArrayOrObject__WEBPACK_IMPORTED_MODULE_1__.Q)(args),observables=_a.args,keys=_a.keys;if(0===observables.length)return(0,_from__WEBPACK_IMPORTED_MODULE_2__.Q)([],scheduler);var result=new _Observable__WEBPACK_IMPORTED_MODULE_3__._(function combineLatestInit(observables,scheduler,valueTransform){void 0===valueTransform&&(valueTransform=_util_identity__WEBPACK_IMPORTED_MODULE_5__.Z);return function(subscriber){maybeSchedule(scheduler,(function(){for(var length=observables.length,values=new Array(length),active=length,remainingFirstValues=length,_loop_1=function(i){maybeSchedule(scheduler,(function(){var source=(0,_from__WEBPACK_IMPORTED_MODULE_2__.Q)(observables[i],scheduler),hasFirstValue=!1;source.subscribe((0,_operators_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_7__.e)(subscriber,(function(value){values[i]=value,hasFirstValue||(hasFirstValue=!0,remainingFirstValues--),remainingFirstValues||subscriber.next(valueTransform(values.slice()))}),(function(){--active||subscriber.complete()})))}),subscriber)},i=0;i<length;i++)_loop_1(i)}),subscriber)}}(observables,scheduler,keys?function(values){return(0,_util_createObject__WEBPACK_IMPORTED_MODULE_4__.q)(keys,values)}:_util_identity__WEBPACK_IMPORTED_MODULE_5__.Z));return resultSelector?result.pipe((0,_util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_6__.j)(resultSelector)):result}function maybeSchedule(scheduler,execute,subscription){scheduler?(0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_8__._)(subscription,scheduler,execute):execute()}},"./node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>takeUntil});var _util_lift__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/lift.js"),_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"),_observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js"),_util_noop__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/noop.js");function takeUntil(notifier){return(0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.i)((function(source,subscriber){(0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__.Uv)(notifier).subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.e)(subscriber,(function(){return subscriber.complete()}),_util_noop__WEBPACK_IMPORTED_MODULE_3__.K)),!subscriber.closed&&source.subscribe(subscriber)}))}}}]);