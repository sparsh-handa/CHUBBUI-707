/*! For license information please see lib-design-foundations-layout-design-layout-mdx.719daa71.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkui_kit=self.webpackChunkui_kit||[]).push([[3976,5380],{"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Ck:()=>withMDXComponents,Eh:()=>MDXContext,Iu:()=>MDXProvider,MN:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/angular/dist/client/argsToTemplate.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.argsToTemplate=void 0,exports.argsToTemplate=function argsToTemplate(args,options={}){const includeSet=options.include?new Set(options.include):null,excludeSet=options.exclude?new Set(options.exclude):null;return Object.entries(args).filter((([key])=>void 0!==args[key])).filter((([key])=>includeSet?includeSet.has(key):!excludeSet||!excludeSet.has(key))).map((([key,value])=>"function"==typeof value?`(${key})="${key}($event)"`:`[${key}]="${key}"`)).join(" ")}},"./node_modules/@storybook/angular/dist/client/decorators.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.componentWrapperDecorator=exports.applicationConfig=exports.moduleMetadata=void 0;const ComputesTemplateFromComponent_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/ComputesTemplateFromComponent.js"),NgComponentAnalyzer_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/utils/NgComponentAnalyzer.js");exports.moduleMetadata=metadata=>storyFn=>{const story=storyFn(),storyMetadata=story.moduleMetadata||{};return metadata=metadata||{},{...story,moduleMetadata:{declarations:[...metadata.declarations||[],...storyMetadata.declarations||[]],entryComponents:[...metadata.entryComponents||[],...storyMetadata.entryComponents||[]],imports:[...metadata.imports||[],...storyMetadata.imports||[]],schemas:[...metadata.schemas||[],...storyMetadata.schemas||[]],providers:[...metadata.providers||[],...storyMetadata.providers||[]]}}},exports.applicationConfig=function applicationConfig(config){return storyFn=>{const story=storyFn(),storyConfig=story.applicationConfig;return{...story,applicationConfig:storyConfig||config?{...config,...storyConfig,providers:[...config?.providers||[],...storyConfig?.providers||[]]}:void 0}}};exports.componentWrapperDecorator=(element,props)=>(storyFn,storyContext)=>{const story=storyFn(),currentProps="function"==typeof props?props(storyContext):props,template=(0,NgComponentAnalyzer_1.isComponent)(element)?(0,ComputesTemplateFromComponent_1.computesTemplateFromComponent)(element,currentProps??{},story.template):element(story.template);return{...story,template,...currentProps||story.props?{props:{...currentProps,...story.props}}:{}}}},"./node_modules/@storybook/angular/dist/client/index.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.argsToTemplate=exports.applicationConfig=exports.componentWrapperDecorator=exports.moduleMetadata=void 0,__webpack_require__("./node_modules/@storybook/angular/dist/client/globals.js"),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-api.js"),exports),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);var decorators_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/decorators.js");Object.defineProperty(exports,"moduleMetadata",{enumerable:!0,get:function(){return decorators_1.moduleMetadata}}),Object.defineProperty(exports,"componentWrapperDecorator",{enumerable:!0,get:function(){return decorators_1.componentWrapperDecorator}}),Object.defineProperty(exports,"applicationConfig",{enumerable:!0,get:function(){return decorators_1.applicationConfig}});var argsToTemplate_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/argsToTemplate.js");Object.defineProperty(exports,"argsToTemplate",{enumerable:!0,get:function(){return argsToTemplate_1.argsToTemplate}})},"./node_modules/@storybook/angular/dist/client/public-api.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.raw=exports.forceReRender=exports.configure=exports.storiesOf=void 0;const preview_api_1=__webpack_require__("@storybook/preview-api"),render_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/render.js"),decorateStory_1=__importDefault(__webpack_require__("./node_modules/@storybook/angular/dist/client/decorateStory.js"));__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);const api=(0,preview_api_1.start)(render_1.renderToCanvas,{decorateStory:decorateStory_1.default,render:render_1.render});exports.storiesOf=(kind,m)=>api.clientApi.storiesOf(kind,m).addParameters({renderer:"angular"});exports.configure=(...args)=>api.configure("angular",...args),exports.forceReRender=api.forceReRender,exports.raw=api.clientApi.raw},"./node_modules/@storybook/angular/dist/client/public-types.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0})},"./node_modules/@storybook/angular/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var _client_index__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/client/index.js");__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"applicationConfig")&&__webpack_require__.d(__webpack_exports__,{applicationConfig:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.applicationConfig}}),__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"componentWrapperDecorator")&&__webpack_require__.d(__webpack_exports__,{componentWrapperDecorator:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.componentWrapperDecorator}}),__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"moduleMetadata")&&__webpack_require__.d(__webpack_exports__,{moduleMetadata:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata}})},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./libs/ui-components/src/lib/design/foundations/layout/design-layout.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Layout:()=>Layout,__namedExportsOrder:()=>__namedExportsOrder,default:()=>design_layout_component_stories});var dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),animations=__webpack_require__("./node_modules/@angular/platform-browser/fesm2022/animations.mjs"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),design_layout_componentngResource=__webpack_require__("./libs/ui-components/src/lib/design/foundations/layout/design-layout.component.scss?ngResource"),design_layout_componentngResource_default=__webpack_require__.n(design_layout_componentngResource);var core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let DesignFoundationsLayout=class DesignFoundationsLayout{constructor(){this.columns=[1,2,3,4,5,6,7,8]}};DesignFoundationsLayout=(0,tslib_es6.UN)([(0,core.Component)({selector:"ui-components-doc-design-foundation-typography",template:'<div class="layout-container">\r\n  <ng-container *ngFor="let column of columns">\r\n    <div class="success-light-bg-container colors-box"></div>\r\n  </ng-container>\r\n</div>\r\n',styles:[design_layout_componentngResource_default()]})],DesignFoundationsLayout);const design_layout_component_stories={title:"Design Foundations/Layout",component:DesignFoundationsLayout,argTypes:{section:{control:"inline-radio",options:["one","two","three","four","five","six"]}},decorators:[(0,dist.moduleMetadata)({imports:[common.CommonModule]}),(0,dist.applicationConfig)({providers:[(0,animations.provideAnimations)()]})]},Layout={render:args=>({props:args}),args:{}};Layout.parameters={...Layout.parameters,docs:{...Layout.parameters?.docs,source:{originalSource:"{\n  render: (args: DesignFoundationsLayout) => ({\n    props: args\n  }),\n  args: {}\n}",...Layout.parameters?.docs?.source}}};const __namedExportsOrder=["Layout"]},"./libs/ui-components/src/lib/design/foundations/layout/design-layout.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),C_Users_SPHANDA_Desktop_ui_kit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_design_layout_component_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./libs/ui-components/src/lib/design/foundations/layout/design-layout.component.stories.ts");function _createMdxContent(props){const _components=Object.assign({h2:"h2",h3:"h3",blockquote:"blockquote",p:"p",a:"a",code:"code",em:"em",pre:"pre",ul:"ul",li:"li"},(0,C_Users_SPHANDA_Desktop_ui_kit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.MN)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Qb,{title:"Design Foundations/Layout"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"layout",children:"Layout"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:""}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"specification",children:"Specification"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.blockquote,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Check out the layout specifications in Marina Design System ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://designsystem.chubb.com/31b252b83/p/5960ea-layout/b/4589a2",target:"_blank",rel:"nofollow noopener noreferrer",children:"here"}),"."]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["It is recommended to use ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout",target:"_blank",rel:"nofollow noopener noreferrer",children:"CSS grid layout"})," for layout."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Use the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"cds-grid-cols-{screen}"})," utilities to create grids with the number of equally sized columns pertaining to the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.a,{href:"https://designsystem.chubb.com/31b252b83/p/5960ea-layout/b/4589a2",target:"_blank",rel:"nofollow noopener noreferrer",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em,{children:"screen"})," specification"]})," in the CDS specification."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["To know more about usage of grid column and gap usage with TailwindCSS utility classes, check out the documentation ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://tailwindcss.com/docs/grid-template-columns",target:"_blank",rel:"nofollow noopener noreferrer",children:"here"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The following snippet shows 3 columns laid out with CSS grid layout changing the number of columns depending on the screen size (with modifiers):"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-html",children:'<div class="cds-grid xs:cds-grid-cols-xs xs:cds-gap-x-md1 sm:cds-grid-cols-sm sm:cds-gap-x-md1 md:cds-grid-cols-md md:cds-gap-x-lg1 lg:cds-grid-cols-lg lg:cds-gap-x-lg1 xl:cds-grid-cols-xl xl:cds-gap-x-lg1;">\r\n    <div class="cds-bg-success-bg-light cds-h-sm1"></div>\r\n    <div class="cds-bg-success-bg-light cds-h-sm1"></div>\r\n    <div class="cds-bg-success-bg-light cds-h-sm1"></div>\r\n</div>\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["ℹ️ The background color of Success Bg Light (",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em,{children:"cds-bg-success-bg-light"}),") and height with ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"sm1"})," spacing specification are added only for demonstration and is not required to lay out content as grid in the user interface."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"example",children:"Example"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"-1"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The following example shows 8 ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"div"}),"'s laid out as grid. Try inspecting them to see the minimum width of columns, gap and the number of columns based on screen size."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__._W,{of:_design_layout_component_stories__WEBPACK_IMPORTED_MODULE_4__.Layout}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"references",children:"References"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.a,{href:"https://nausp-aapp0001.aceins.com/chubbui-platform/ui-kit/blob/1.0.0-alpha.0.next.0/libs/ui-design/src/lib/cds-design-tokens.ts#L317",target:"_blank",rel:"nofollow noopener noreferrer",children:["Screens Design Token in ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"@chubb/ui-design"})]})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.a,{href:"https://nausp-aapp0001.aceins.com/chubbui-platform/ui-kit/blob/1.0.0-alpha.0.next.0/libs/ui-design/src/lib/cds-design-tokens.ts#L330",target:"_blank",rel:"nofollow noopener noreferrer",children:["Grid Column Template Design Token in ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"@chubb/ui-design"})]})}),"\n"]})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,C_Users_SPHANDA_Desktop_ui_kit_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.MN)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./libs/ui-components/src/lib/design/foundations/layout/design-layout.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".purple-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(110 39 197 / var(--tw-bg-opacity));\n}\n\n.purple-100-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(241 231 249 / var(--tw-bg-opacity));\n}\n\n.purple-200-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(224 202 242 / var(--tw-bg-opacity));\n}\n\n.purple-300-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(185 142 225 / var(--tw-bg-opacity));\n}\n\n.purple-400-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(144 86 210 / var(--tw-bg-opacity));\n}\n\n.purple-500-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(110 39 197 / var(--tw-bg-opacity));\n}\n\n.purple-600-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(87 34 151 / var(--tw-bg-opacity));\n}\n\n.purple-700-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(60 28 99 / var(--tw-bg-opacity));\n}\n\n.purple-800-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(45 22 69 / var(--tw-bg-opacity));\n}\n\n.neutral-white-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n\n.neutral-100-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(244 244 244 / var(--tw-bg-opacity));\n}\n\n.neutral-200-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(232 232 232 / var(--tw-bg-opacity));\n}\n\n.neutral-300-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(215 215 215 / var(--tw-bg-opacity));\n}\n\n.neutral-400-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(175 175 175 / var(--tw-bg-opacity));\n}\n\n.neutral-500-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(111 113 117 / var(--tw-bg-opacity));\n}\n\n.neutral-600-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(75 78 83 / var(--tw-bg-opacity));\n}\n\n.neutral-700-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(53 55 59 / var(--tw-bg-opacity));\n}\n\n.neutral-800-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(34 34 34 / var(--tw-bg-opacity));\n}\n\n.yellow-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 182 23 / var(--tw-bg-opacity));\n}\n\n.yellow-100-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 231 187 / var(--tw-bg-opacity));\n}\n\n.yellow-200-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 203 105 / var(--tw-bg-opacity));\n}\n\n.yellow-300-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 182 23 / var(--tw-bg-opacity));\n}\n\n.yellow-400-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(148 108 20 / var(--tw-bg-opacity));\n}\n\n.yellow-500-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(108 78 24 / var(--tw-bg-opacity));\n}\n\n.yellow-600-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(84 62 21 / var(--tw-bg-opacity));\n}\n\n.yellow-700-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(59 43 18 / var(--tw-bg-opacity));\n}\n\n.yellow-800-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(42 32 15 / var(--tw-bg-opacity));\n}\n\n.green-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(122 203 0 / var(--tw-bg-opacity));\n}\n\n.green-100-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(222 241 193 / var(--tw-bg-opacity));\n}\n\n.green-200-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(181 224 124 / var(--tw-bg-opacity));\n}\n\n.green-300-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(122 203 0 / var(--tw-bg-opacity));\n}\n\n.green-400-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(81 130 13 / var(--tw-bg-opacity));\n}\n\n.green-500-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(60 93 21 / var(--tw-bg-opacity));\n}\n\n.green-600-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(49 72 20 / var(--tw-bg-opacity));\n}\n\n.green-700-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(36 50 17 / var(--tw-bg-opacity));\n}\n\n.green-800-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(27 36 14 / var(--tw-bg-opacity));\n}\n\n.turquoise-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(1 193 214 / var(--tw-bg-opacity));\n}\n\n.turquoise-100-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(194 243 251 / var(--tw-bg-opacity));\n}\n\n.turquoise-200-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(121 226 242 / var(--tw-bg-opacity));\n}\n\n.turquoise-300-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(1 193 214 / var(--tw-bg-opacity));\n}\n\n.turquoise-400-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(0 128 143 / var(--tw-bg-opacity));\n}\n\n.turquoise-500-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(0 93 103 / var(--tw-bg-opacity));\n}\n\n.turquoise-600-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(13 72 80 / var(--tw-bg-opacity));\n}\n\n.turquoise-700-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(17 50 55 / var(--tw-bg-opacity));\n}\n\n.turquoise-800-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(17 36 39 / var(--tw-bg-opacity));\n}\n\n.magenta-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 1 152 / var(--tw-bg-opacity));\n}\n\n.magenta-100-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 227 238 / var(--tw-bg-opacity));\n}\n\n.magenta-200-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 164 208 / var(--tw-bg-opacity));\n}\n\n.magenta-300-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 1 152 / var(--tw-bg-opacity));\n}\n\n.magenta-400-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(225 0 130 / var(--tw-bg-opacity));\n}\n\n.magenta-500-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(156 29 95 / var(--tw-bg-opacity));\n}\n\n.magenta-600-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(131 0 75 / var(--tw-bg-opacity));\n}\n\n.magenta-700-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(81 25 51 / var(--tw-bg-opacity));\n}\n\n.magenta-800-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(57 21 37 / var(--tw-bg-opacity));\n}\n\n.blue-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(21 15 150 / var(--tw-bg-opacity));\n}\n\n.blue-100-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(231 233 238 / var(--tw-bg-opacity));\n}\n\n.blue-200-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(206 211 222 / var(--tw-bg-opacity));\n}\n\n.blue-300-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(173 183 205 / var(--tw-bg-opacity));\n}\n\n.blue-400-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(85 106 171 / var(--tw-bg-opacity));\n}\n\n.blue-500-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(53 78 162 / var(--tw-bg-opacity));\n}\n\n.blue-600-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(33 54 157 / var(--tw-bg-opacity));\n}\n\n.blue-700-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(21 15 150 / var(--tw-bg-opacity));\n}\n\n.blue-800-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(17 0 123 / var(--tw-bg-opacity));\n}\n\n.wcag-focus-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(94 158 214 / var(--tw-bg-opacity));\n}\n\n.wcag-inline-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(30 30 234 / var(--tw-bg-opacity));\n}\n\n.branding-blue-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(21 15 150 / var(--tw-bg-opacity));\n}\n\n.branding-purple-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(110 39 197 / var(--tw-bg-opacity));\n}\n\n.branding-turquoise-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(1 193 214 / var(--tw-bg-opacity));\n}\n\n.branding-magenta-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 1 152 / var(--tw-bg-opacity));\n}\n\n.branding-green-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(122 203 0 / var(--tw-bg-opacity));\n}\n\n.branding-yellow-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 182 23 / var(--tw-bg-opacity));\n}\n\n.branding-white-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n\n.success-light-bg-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(198 243 198 / var(--tw-bg-opacity));\n}\n\n.success-saturated-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(73 196 73 / var(--tw-bg-opacity));\n}\n\n.success-shade-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(14 88 14 / var(--tw-bg-opacity));\n}\n\n.caution-light-bg-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(254 204 158 / var(--tw-bg-opacity));\n}\n\n.caution-middle-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(251 145 74 / var(--tw-bg-opacity));\n}\n\n.caution-shade-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(144 36 10 / var(--tw-bg-opacity));\n}\n\n.error-light-bg-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(243 172 153 / var(--tw-bg-opacity));\n}\n\n.error-saturated-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 138 138 / var(--tw-bg-opacity));\n}\n\n.error-shade-container {\n  --tw-bg-opacity: 1;\n  background-color: rgb(170 1 14 / var(--tw-bg-opacity));\n}\n\n.white-text {\n  padding: 0.75rem;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n\n.dark-text {\n  padding: 0.75rem;\n  --tw-text-opacity: 1;\n  color: rgb(0 0 0 / var(--tw-text-opacity));\n}\n\n.colors-grid {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 1rem;\n}\n\n.colors-box {\n  height: 100px;\n  --tw-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\n  --tw-shadow-colored: 0px 1px 2px var(--tw-shadow-color), 0px 1px 3px 1px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.layout-container {\n  display: grid;\n}\n\n@media (min-width: 375px) {\n\n  .layout-container {\n    grid-template-columns: repeat(4, minmax(71.75px, 1fr));\n    column-gap: 1rem;\n  }\n}\n\n@media (min-width: 768px) {\n\n  .layout-container {\n    grid-template-columns: repeat(8, minmax(67px, 1fr));\n    column-gap: 1rem;\n  }\n}\n\n@media (min-width: 1024px) {\n\n  .layout-container {\n    grid-template-columns: repeat(12, minmax(53px, 1fr));\n    column-gap: 1.5rem;\n  }\n}\n\n@media (min-width: 1440px) {\n\n  .layout-container {\n    grid-template-columns: repeat(12, minmax(78px, 1fr));\n    column-gap: 1.5rem;\n  }\n}\n\n@media (min-width: 1920px) {\n\n  .layout-container {\n    grid-template-columns: repeat(12, 108px);\n    column-gap: 1.5rem;\n  }\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);