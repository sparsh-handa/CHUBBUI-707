(self.webpackChunkui_kit=self.webpackChunkui_kit||[]).push([[1952],{"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./libs/ui-components/src/lib/cb-list/showcase/cb-list-showcase.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>cb_list_showcase_component_stories});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),cb_list_showcase_componentngResource=__webpack_require__("./libs/ui-components/src/lib/cb-list/showcase/cb-list-showcase.component.scss?ngResource"),cb_list_showcase_componentngResource_default=__webpack_require__.n(cb_list_showcase_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let CbListShowcaseComponent=class CbListShowcaseComponent{};CbListShowcaseComponent=(0,tslib_es6.UN)([(0,core.Component)({selector:"ui-components-cb-list-showcase",template:'\n    <div style="margin-left: 2rem;">\n      <ul class="cb-list cb-list--unordered">\n        <li class="list-heading">\n          <span class="cb-list__item">Unordered Default List Items</span>\n        </li>\n        <ul class="unordered-list">\n          <li><span class="cb-list__item">Developer</span></li>\n          <li><span class="cb-list__item">Tester</span></li>\n          <li><span class="cb-list__item">Designer</span></li>\n        </ul>\n\n        <li class="list-heading">\n          <span class="cb-list__item">Unordered Default List Items</span>\n        </li>\n        <ul class="unordered-list">\n          <li><span class="cb-list__item">Developer</span></li>\n          <li><span class="cb-list__item">Tester</span></li>\n          <li><span class="cb-list__item">Designer</span></li>\n        </ul>\n      </ul>\n\n      <ol class="cb-list cb-list--ordered">\n        <li class="list-heading">Ordered Large List Items</li>\n        <ol class="ordered-list ordered-list--large">\n          <li><span class="cb-list__item">Developer</span></li>\n          <li><span class="cb-list__item">Tester</span></li>\n          <li><span class="cb-list__item">Designer</span></li>\n        </ol>\n\n        <li class="list-heading">Ordered Large List Items</li>\n        <ol class="ordered-list ordered-list--large">\n          <li><span class="cb-list__item">Developer</span></li>\n          <li><span class="cb-list__item">Tester</span></li>\n          <li><span class="cb-list__item">Designer</span></li>\n        </ol>\n      </ol>\n\n      <ol\n        class="cb-list cb-list--icon cds-list-image-[url(./icon-assets/home.png)]"\n      >\n        <li class="list-heading">Icon Small List Items</li>\n        <ol class="icon-list icon-list--small">\n          <li><span class="cb-list__item">Developer</span></li>\n          <li><span class="cb-list__item">Tester</span></li>\n          <li><span class="cb-list__item">Designer</span></li>\n        </ol>\n\n        <li class="list-heading">Icon Small List Items</li>\n        <ol class="icon-list icon-list--small">\n          <li><span class="cb-list__item">Developer</span></li>\n          <li><span class="cb-list__item">Tester</span></li>\n          <li><span class="cb-list__item">Designer</span></li>\n        </ol>\n      </ol>\n\n      <ol class="cb-list cb-list--icon">\n        <li class="list-heading cds-list-image-[url(./icon-assets/home.png)]">\n          Icon Large List Items\n        </li>\n        <ol class="icon-list icon-list--large">\n          <li><span class="cb-list__item">Developer</span></li>\n          <li><span class="cb-list__item">Tester</span></li>\n          <li><span class="cb-list__item">Designer</span></li>\n        </ol>\n\n        <li class="list-heading cds-list-image-[url(./icon-assets/shop.png)]">\n          Icon Large List Items\n        </li>\n        <ol class="icon-list icon-list--large">\n          <li><span class="cb-list__item">Developer</span></li>\n          <li><span class="cb-list__item">Tester</span></li>\n          <li><span class="cb-list__item">Designer</span></li>\n        </ol>\n      </ol>\n    </div>\n  ',encapsulation:core.ViewEncapsulation.None,styles:[cb_list_showcase_componentngResource_default()]})],CbListShowcaseComponent);const cb_list_showcase_component_stories={title:"Components/Content Display/List",component:CbListShowcaseComponent},Primary={render:args=>({props:args})};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  render: (args: CbListShowcaseComponent) => ({\n    props: args\n  })\n}",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./libs/ui-components/src/lib/cb-list/showcase/cb-list-showcase.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".cb-list {\n  font-size: 1rem;\n  line-height: 22px;\n  font-family: Lato;\n  font-weight: 400;\n  --tw-text-opacity: 1;\n  color: rgb(34 34 34 / var(--tw-text-opacity));\n}\n.cb-list--unordered {\n  list-style-type: disc;\n}\n.cb-list--unordered .list-heading {\n  margin-left: 0.125rem;\n}\n.cb-list--ordered {\n  list-style-type: decimal;\n}\n.cb-list--ordered .list-heading {\n  padding-left: 0.25rem;\n  margin-left: calc(-1 * 0.25rem);\n}\n.cb-list--icon .list-heading {\n  padding-left: 0.25rem;\n  margin-left: calc(-1 * 0.25rem);\n}\n.cb-list .list-heading {\n  padding-bottom: 0.25rem;\n}\n.cb-list .unordered-list {\n  padding-bottom: 0.75rem;\n  padding-left: 1rem;\n  list-style-type: circle;\n}\n.cb-list .unordered-list li {\n  padding-bottom: 0.25rem;\n}\n.cb-list .ordered-list {\n  list-style-type: lower-alpha;\n  padding-bottom: 0.75rem;\n  padding-left: 0.875rem;\n}\n.cb-list .ordered-list li {\n  padding-bottom: 0.25rem;\n  padding-left: 0.375rem;\n}\n.cb-list .icon-list {\n  list-style-type: \"- \";\n  padding-bottom: 0.75rem;\n  padding-left: 0.5rem;\n}\n.cb-list .icon-list li {\n  padding-bottom: 0.25rem;\n  padding-left: 0.375rem;\n}\n.cb-list .unordered-list--large,\n.cb-list .ordered-list--large,\n.cb-list .icon-list--large {\n  padding-bottom: 1rem;\n  padding-top: 0.25rem;\n}\n.cb-list .unordered-list--large li:not(:last-child),\n.cb-list .ordered-list--large li:not(:last-child),\n.cb-list .icon-list--large li:not(:last-child) {\n  padding-bottom: 0.5rem;\n}\n.cb-list .unordered-list--small,\n.cb-list .ordered-list--small,\n.cb-list .icon-list--small {\n  padding-bottom: 0.5rem;\n}\n.cb-list .unordered-list--small li:not(:last-child),\n.cb-list .ordered-list--small li:not(:last-child),\n.cb-list .icon-list--small li:not(:last-child) {\n  padding-bottom: 0.25rem;\n}\n.cb-list__item {\n  margin-left: calc(-1 * 0.125rem);\n}\n\n/*\n! tailwindcss v3.4.3 | MIT License | https://tailwindcss.com\n*/\n\n/*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n5. Use the user's configured `sans` font-feature-settings by default.\n6. Use the user's configured `sans` font-variation-settings by default.\n7. Disable tap highlights on iOS\n*/\n\nhtml,\n:host {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */ /* 3 */\n  tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n  font-variation-settings: normal; /* 6 */\n  -webkit-tap-highlight-color: transparent; /* 7 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font-family by default.\n2. Use the user's configured `mono` font-feature-settings by default.\n3. Use the user's configured `mono` font-variation-settings by default.\n4. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-feature-settings: normal; /* 2 */\n  font-variation-settings: normal; /* 3 */\n  font-size: 1em; /* 4 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-feature-settings: inherit; /* 1 */\n  font-variation-settings: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  letter-spacing: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\ninput:where([type='button']),\ninput:where([type='reset']),\ninput:where([type='submit']) {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nReset default styling for dialogs.\n*/\n\ndialog {\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(53 78 162 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(53 78 162 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  ;\n}\n.cds-list-image-\\[url\\(\\.\\/icon-assets\\/home\\.png\\)\\] {\n  list-style-image: url('home.png');\n}\n.cds-list-image-\\[url\\(\\.\\/icon-assets\\/shop\\.png\\)\\] {\n  list-style-image: url('shop.png');\n}\n.cds-p-lg1 {\n  padding: 1.5rem;\n}\n.cds-p-lg2 {\n  padding: 2rem;\n}\n.cds-p-md1 {\n  padding: 1rem;\n}\n.cds-p-md2 {\n  padding: 1.25rem;\n}\n.cds-p-one {\n  padding: 1px;\n}\n.cds-p-sm1 {\n  padding: 0.5rem;\n}\n.cds-p-sm2 {\n  padding: 0.75rem;\n}\n.cds-p-xl1 {\n  padding: 2.5rem;\n}\n.cds-p-xl2 {\n  padding: 3rem;\n}\n.cds-p-xs1 {\n  padding: 0.125rem;\n}\n.cds-p-xs2 {\n  padding: 0.25rem;\n}\n.cds-p-xxl1 {\n  padding: 4rem;\n}\n.cds-p-xxl2 {\n  padding: 6rem;\n}\n.cds-p-xxl3 {\n  padding: 8rem;\n}\n.cds-p-zero {\n  padding: 0px;\n}\n.cds-shadow-m1 {\n  --tw-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);\n  --tw-shadow-colored: 0px 1px 2px var(--tw-shadow-color), 0px 1px 3px 1px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.cds-shadow-m2 {\n  --tw-shadow: 0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.3);\n  --tw-shadow-colored: 0px 2px 6px 2px var(--tw-shadow-color), 0px 1px 2px 0px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.cds-shadow-m3 {\n  --tw-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3);\n  --tw-shadow-colored: 0px 4px 8px 3px var(--tw-shadow-color), 0px 1px 3px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.cds-shadow-m4 {\n  --tw-shadow: 0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3);\n  --tw-shadow-colored: 0px 6px 10px 4px var(--tw-shadow-color), 0px 2px 3px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);