(()=>{"use strict";var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var i=t.g.document;if(!e&&i&&(i.currentScript&&(e=i.currentScript.src),!e)){var r=i.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})();const e=JSON.parse('{"title":"I am JSON title"}'),i=t.p+"47692505d122dbcae490.png",r=new class{constructor(t,e){this.title=t,this.img=e,this.date=new Date}toString(){return JSON.stringify({title:this.title,img:this.img,date:this.date.toJSON()})}}("Webpack Post Title",i);console.log("Post to String",r.toString()),console.log("JSON",e)})();