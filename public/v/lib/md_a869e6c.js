!function(e){var n={},r={},o={},t="components/",i=t.length;e.define=function(e,t){switch(typeof e){case"string":if(o.hasOwnProperty(e))throw new Error("cannot redeclare module ["+e+"]");"function"==typeof t?n[e]=t:r[e]=t,o[e]=!0;break;case"function":e(f)}};var f=e.require=function(e){if(-1===e.indexOf(".")){var o=e.split("/").pop();e=e+"/"+o+".js"}if(e.substring(0,i)!==t&&(e="components/"+e),r.hasOwnProperty(e))return r[e];if(n.hasOwnProperty(e)){var s={exports:{}},p=n[e],u=r[e]=s.exports;return u=p(f,u,s),r[e]="undefined"==typeof u?u=s.exports:u,u}throw new Error("undefined module ["+e+"]")}}(window);