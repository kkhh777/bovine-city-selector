"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),e}}(),_cityData=require("./city-data.json"),_cityData2=_interopRequireDefault(_cityData),CitySelector=function(){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{defaultData:{province:"",city:"",district:""},actionName:{title:"请选择地区",cancelBtn:"取消",confirmBtn:"确认"},tabs:["请选择","请选择","请选择"],errorTips:{noPro:"请选择省份",noCity:"请选择城市",noDis:"请选择区域"}},a=i.defaultData,c=i.actionName,s=void 0===c?{title:"请选择地区",cancelBtn:"取消",confirmBtn:"确认"}:c,r=i.tabs,l=void 0===r?["请选择","请选择","请选择"]:r,n=i.errorTips,o=void 0===n?{noPro:"请选择省份",noCity:"请选择城市",noDis:"请选择区域"}:n;_classCallCheck(this,t),this.getParentEl(e)&&(this.cityData=_cityData2.default,this.els={},this.actionName=s,this.tabs=l,this.data=a,this.errorTips=o,this.data.province||(this.currentIndex=0),this.data.province&&!this.data.city&&(this.currentIndex=1),(this.data.city&&!this.data.district||this.data.district)&&(this.currentIndex=2),this.init())}return _createClass(t,[{key:"init",value:function(){this.renderBody(),this.getEl(),this.inputInit(),this.renderPro(),this.renderCity(),this.renderDis(),this.activeTab(),this.tabChange(),this.bindTabEvent(),this.bindEvents(),this.fillData()}},{key:"renderBody",value:function(){var t=this._createEle(["city-selector-body"]);t.innerHTML='\n        <div class="city-selector-action">\n                    <div class="city-selector-title">\n                        '+this.actionName.title+'\n                    </div>\n                    <a class="city-selector-btn city-selector-cancel">\n                        '+this.actionName.cancelBtn+'\n                    </a>\n                    <a class="city-selector-btn city-selector-confirm">\n                        '+this.actionName.confirmBtn+'\n                    </a>\n                </div>\n                <div class="city-selector-tabs">\n                    <a class="city-selector-tab">'+this.tabs[0]+'</a>\n                    <a class="city-selector-tab">'+this.tabs[1]+'</a>\n                    <a class="city-selector-tab">'+this.tabs[2]+'</a>\n                </div>\n                <div class="city-selector-panels">\n                    <div class="city-selector-panel city-selector-province">\n                    </div>\n                    <div class="city-selector-panel city-selector-city">\n                    </div>\n                    <div class="city-selector-panel city-selector-district">\n                    </div>\n                </div>\n                <div class="city-selector-error-tips"></div>\n            </div>\n        ',this.parentEl.appendChild(t)}},{key:"getEl",value:function(){this.els={citySelInput:this.parentEl.querySelector("input[data-type='city-selector']"),citySelBody:this.parentEl.querySelector(".city-selector-body"),citySelAct:this.parentEl.querySelector(".city-selector-action"),citySelTabs:Array.prototype.slice.call(this.parentEl.querySelectorAll(".city-selector-tab")),citySelPanels:this.parentEl.querySelector(".city-selector-panels"),citySelPanel:this.parentEl.querySelectorAll(".city-selector-panel"),citySelPro:this.parentEl.querySelector(".city-selector-province"),citySelCity:this.parentEl.querySelector(".city-selector-city"),citySelDis:this.parentEl.querySelector(".city-selector-district"),citySelConfirmBtn:this.parentEl.querySelector(".city-selector-confirm"),citySelCancelBtn:this.parentEl.querySelector(".city-selector-cancel"),errorTipModal:this.parentEl.querySelector(".city-selector-error-tips")}}},{key:"inputInit",value:function(){if(!this.els.citySelInput)return console.error("未获取到城市选择器，可能是没有定义城市选择器的data-type属性");this.parentEl.setAttribute("onselectstart","return false"),this.els.citySelInput.setAttribute("readonly",""),this.simple=this.els.citySelInput.getAttribute("data-simple")||"false",this.force=this.els.citySelInput.getAttribute("data-force")||"false"}},{key:"renderPro",value:function(){var t=this,e=this.parentEl.querySelector(".city-selector-province"),i=document.createDocumentFragment(),a=void 0;for(var c in this.cityData)a=document.createElement("a"),a.innerHTML=""+c,a.setAttribute("data-value",""+c),this.data&&a.getAttribute("data-value")===this.data.province&&a.classList.add("active"),i.appendChild(a);e.appendChild(i);var s=Array.prototype.slice.call(this.els.citySelPro.querySelectorAll("a"));s.forEach(function(e){e.addEventListener("click",function(i){i.preventDefault(),i.target.getAttribute("data-value")!==t.data.province&&(s.forEach(function(t){t.classList.contains("active")&&t.classList.remove("active")}),t.els.citySelTabs[0].innerHTML=t.data.province=i.target.getAttribute("data-value"),e.classList.add("active"),t.renderCity(),t.data.city=t.data.district="",t.tabChange(),t.currentIndex=1,t.activeTab())})})}},{key:"renderCity",value:function(){var t=this,e=this.parentEl.querySelector(".city-selector-city"),i=document.createDocumentFragment(),a=void 0,c=void 0;for(var s in this._delAllNodes(e),c=this.cityData[this.data.province]||{},c)a=document.createElement("a"),a.innerHTML=""+s,a.setAttribute("data-value",""+s),a.getAttribute("data-value")===this.data.city&&a.classList.add("active"),i.appendChild(a);e.appendChild(i);var r=Array.prototype.slice.call(this.els.citySelCity.querySelectorAll("a"));r.forEach(function(e){e.addEventListener("click",function(i){i.preventDefault(),console.log(),i.target.getAttribute("data-value")!==t.data.city&&(r.forEach(function(t){t.classList.contains("active")&&t.classList.remove("active")}),t.els.citySelTabs[1].innerHTML=t.data.city=i.target.innerHTML,e.classList.add("active"),t.els.citySelPro.style.display="none",t.els.citySelDis.style.display="block",t.renderDis(),t.data.district="",t.tabChange(),t.currentIndex=2,t.activeTab())})})}},{key:"renderDis",value:function(){var t=this,e=this.parentEl.querySelector(".city-selector-district"),i=document.createDocumentFragment(),a=void 0,c=void 0;if(this.cityData[this.data.province]){for(var s in c=this.cityData[this.data.province][this.data.city]||[],this._delAllNodes(e),c)a=document.createElement("a"),a.innerHTML=""+c[s],a.setAttribute("data-value",""+c[s]),a.getAttribute("data-value")===this.data.district&&a.classList.add("active"),i.appendChild(a);e.appendChild(i);var r=Array.prototype.slice.call(this.els.citySelDis.querySelectorAll("a"));r.forEach(function(e){e.addEventListener("click",function(i){i.preventDefault(),i.target.getAttribute("data-value")!==t.data.district&&(r.forEach(function(t){t.classList.contains("active")&&t.classList.remove("active")}),t.els.citySelTabs[2].innerHTML=t.data.district=i.target.innerHTML,e.classList.add("active"))})})}}},{key:"activeAction",value:function(){var t=void 0,e=void 0;for(this.els.activeEls=this.els.citySelPanels.querySelectorAll(".active"),e=this.els.activeEls.length,t=0;t<e;t++){if(!this.els.activeEls[t])return;this.els.citySelPanel[t].scrollTop=this.els.activeEls[t].offsetTop-160}}},{key:"tabChange",value:function(){this.els.citySelTabs[0].innerHTML=this.data.province||this.tabs[0],this.els.citySelTabs[1].innerHTML=this.data.city||this.tabs[1],this.els.citySelTabs[2].innerHTML=this.data.district||this.tabs[2]}},{key:"bindTabEvent",value:function(){var t=this;this.els.citySelTabs[0].addEventListener("click",function(e){t.currentIndex=0,t.activeTab()}),this.els.citySelTabs[1].addEventListener("click",function(e){t.data.province?(t.currentIndex=1,t.activeTab()):t.showErrorModel()}),this.els.citySelTabs[2].addEventListener("click",function(e){t.data.city?(t.currentIndex=2,t.activeTab(),t.els.citySelPro.style.display="none",t.els.citySelDis.style.display="block"):t.showErrorModel()})}},{key:"activeTab",value:function(){this.els.citySelTabs.forEach(function(t){t.classList.remove("active")}),0===this.currentIndex||1===this.currentIndex?(this.els.citySelPro.style.display="block",this.els.citySelDis.style.display="none"):(this.els.citySelPro.style.display="none",this.els.citySelDis.style.display="block"),this.els.citySelTabs[this.currentIndex].classList.add("active")}},{key:"showErrorModel",value:function(){var t=this,e=function(){t.els.errorTipModal.style.display="block",setTimeout(function(){t.els.errorTipModal.style.display="none"},1500)};return this.data.province?this.data.city?!!this.data.district||(this.els.errorTipModal.innerHTML=this.errorTips.noDis,e(),!1):(this.els.errorTipModal.innerHTML=this.errorTips.noCity,e(),!1):(this.els.errorTipModal.innerHTML=this.errorTips.noPro,e(),!1)}},{key:"bindEvents",value:function(){var t=this,e=document.querySelector("body"),i=function(){t.fillData(),t.confirm&&t.confirm(t.data)};this.els.citySelConfirmBtn.addEventListener("click",function(){"true"===t.force&&t.showErrorModel()?i():"false"===t.force&&i()}),this.els.citySelCancelBtn.addEventListener("click",function(){t.cancel&&t.cancel()}),this.els.citySelInput.addEventListener("click",function(){"block"===t.els.citySelBody.style.display?t.els.citySelBody.style.display="none":t.els.citySelBody.style.display="block",t.activeAction()}),e.addEventListener("click",function(e){var i=e.target;for(var a in t.els){if("true"===t.force&&i===t.els.citySelConfirmBtn&&!t.data.district)return;i!==t.els[a]&&i!==t.els.citySelInput&&"active"!==i.className&&"city-selector-title"!==i.className&&"city-selector-tabs"!==i.className&&"city-selector-tab"!==i.className&&"city-selector-tab active"!==i.className&&"city-selector-panels"!==i.className&&(t.els.citySelBody.style.display="none")}})}},{key:"_createEle",value:function(t){if(!(t instanceof Array))return console.error("创建元素必须传入class数组");var e=document.createElement("div"),i=void 0,a=t.length;for(i=0;i<a;i++)e.classList.add(t[i]);return e}},{key:"getParentEl",value:function(t){return t.length&&t.length>1?(console.error("传入的选择器应该是个唯一值"),!1):(this.parentEl=t instanceof Node?t:document.querySelector(t),!0)}},{key:"_delAllNodes",value:function(t){t.innerHTML=""}},{key:"fillData",value:function(){var t=JSON.parse(JSON.stringify(this.data));"true"===this.simple&&(t.province=t.province.replace(/[省,市,自治区,壮族,回族,维吾尔]/g,""),t.city=t.city.replace(/[市,地区,回族,蒙古,苗族,白族,傣族,景颇族,藏族,彝族,壮族,傈僳族,布依族,侗族]/g,"").replace("哈萨克","").replace("自治州","").replace("自治县",""),t.district=t.district.length>2?t.district.replace(/[市,区,县,旗]/g,""):t.district),t.province&&t.city&&t.district?this.els.citySelInput.value=t.province+" - "+t.city+" - "+t.district:t.province&&t.city&&!t.district?this.els.citySelInput.value=t.province+" - "+t.city:!t.province||t.city||t.district?this.els.citySelInput.value="":this.els.citySelInput.value=""+t.province}}]),t}();exports.default=CitySelector;