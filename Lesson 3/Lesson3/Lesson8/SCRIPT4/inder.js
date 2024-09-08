document.querySelector
try {
    var hidePCNavbar = window.location.search.indexOf('?lzd_pc_navbar_hidden=true') >= 0 || window.location.search.indexOf('&lzd_pc_navbar_hidden=true') >= 0;
    if(hidePCNavbar) {
        var autoShowStyleNode = document.createElement('style');
        autoShowStyleNode.innerHTML = "#J_LzdSiteNav{ display: none } .desktop-footer{ display: none } #New_LzdSiteNav{ display: none } .new-desktop-footer{ display: none }";
        document.head.appendChild(autoShowStyleNode);
    }
  } catch (e) {
    console.warn('[hide-pc-title-error]', e.message);
  }

  window.g_config = window.g_config || {};
  window.g_config.pageType = "home";  
  window.g_config.channel = "default";  
  window.g_config.language = "en";
  window.g_config.regionID = "VN";
  window.g_config.channelEnv = "product";
  window.g_config.showPcSearchboxHotWords = false;
  window.g_config.newPcHeadFoot = true;
  
  (function() {
    try {
      if (window.aplusPageIdSetComplete || /AliApp/i.test(navigator.userAgent)) {
        return;
      }
  
      var get_cookie = function (sName) {
        var sRE = '(?:; )?' + sName + '=([^;]*);?';
        var oRE = new RegExp(sRE);
        if (oRE.test(document.cookie)) {
        var str = decodeURIComponent(RegExp['$1']) || '';
        if (str.trim().length > 0) {
          return str;
        } else {
          return '-';
        }
        } else {
          return '-';
        }
      };
      var getRand = function () {
        var page_id = get_cookie('cna') || '001';
        page_id = page_id.toLowerCase().replace(/[^a-zd]/g, '');
        page_id = page_id.substring(0, 16);
        var d = (new Date()).getTime();
        var randend = [
          page_id,
          d.toString(16)
        ].join('');
  
        for (var i = 1; i < 10; i++) {
          var _r = parseInt(Math.round(Math.random() * 10000000000), 10).toString(16);
          randend += _r;
        }
        randend = randend.substr(0, 42);
        return randend;
      };
      var pageid = getRand();
      var aq = (window.aplus_queue || (window.aplus_queue = []));
      aq.push({
        'action':'aplus.appendMetaInfo',
        'arguments':['aplus-cpvdata', {"pageid":pageid}]
      });
      aq.push({
        'action':'aplus.appendMetaInfo',
        'arguments':['aplus-exdata',{"st_page_id":pageid}]
      })
      var gq = (window.goldlog_queue || (window.goldlog_queue = []));
      gq.push({
        'action':'goldlog.appendMetaInfo',
        'arguments':['aplus-cpvdata', {"pageid":pageid}]
      });
      gq.push({
        'action':'goldlog.appendMetaInfo',
        'arguments':['aplus-exdata',{"st_page_id":pageid}]
      });
      window.aplusPageIdSetComplete = true;
    } catch(err) {
      console.error(err);
    }
  })();
  
(function() {
  if (window.document.getElementById("beacon-aplus")) {
    return;
  }

  with(document)with(body)with(insertBefore(createElement("script"),firstChild))setAttribute("exparams","cfgver=1.0&aplus",id="beacon-aplus",src="//g.lazcdn.com/res-d/alilog/mlog/aplus/202980191.js");
})();

(function() {
  var isDebug = window.location.href.includes('debug=true') || window.location.href.includes('wh_query=devtool');
  var itraceImportingRate = '0.25';
  var rate = Number(itraceImportingRate) || 0.5;

  var shouldImportItrace;
  var itraceWhitelistRegex = /\/member\/|\/payment\/|\/trade\/|\/voucher\/|\/promotion\/|\/reverse\/|\/paylater\/|\/paylater-test\/|\/cashloan\/|\/cashloan-test\/|\/credit-seller\/|\/credit-seller-test\/|\/lazpay-page-module\/|\/lazpay-warchest\/|\/ewallet-h5\/|\/lazpay-warchest\/|\/dg-fe\//;
  var getUrlParam = function(name) {
    var reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`);
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return decodeURIComponent(r[2]);
    }
    return null;
  }
  window.gcpIsPageMustImportItrace = function() {
    var whPid = getUrlParam('wh_pid');
    return !!(whPid && itraceWhitelistRegex.test(whPid));
  }
  if (window.gcpIsPageMustImportItrace()) {
    shouldImportItrace = true;
  } else {
    shouldImportItrace = window.location.href.includes('use_itrace_force=true') || Math.random() < rate;
  }

  isDebug && console.log("[itrace-import-sampling] rate: " + rate + ", result: " + shouldImportItrace);
  window.gcpIsDebug = isDebug;
  window.gcpShouldImportItrace = shouldImportItrace;


  // 初始化itrace
  
        
        
        
          !function(e){"function"==typeof define&&define.amd?define(e):e()}((function(){"use strict";var e;!function(){var e="",i=document.head.querySelector('meta[name="itrace-bid"]')||document.head.querySelector('meta[name="wpk-pid"]')||document.head.querySelector('meta[name="wpk-bid"]');i&&i.getAttribute("content")&&(e=i.getAttribute("content"));var o={id:"perf",collectResTiming:!0,maxLoadTiming:5e3};window.lazada_itrace_config&&(o=Object.assign(o,window.lazada_itrace_config.perfPlugin)),window.isTrace2=!0,window.__itrace_conf={bid:e,debug:!1,cluster:"intl",plugins:["flow","resource","jserror",{id:"blank",rootDom:function(){return document.getElementById("container")||document.getElementById("root")||document.body}},{id:"interface",enableXHR:!1,enableFetch:!1},o]}}(),e=["report","reportError","reportJSError","reportApi","reportApiError","reportBlankPage","reportPerf","reportFlow","setConfig"],window.__wpk={},e.forEach((function(e){window.__wpk[e]=function(){}})),e.forEach((function(e){Object.defineProperty(window.__wpk,e,{get:function(){return function(){window.__iTraceLogQueue||(window.__iTraceLogQueue=[]),"reportError"===e&&(e="reportJSError"),"reportApiError"===e&&(e="reportApi");var i=[e].concat(Array.prototype.slice.call(arguments));window.__iTraceLogQueue.push(i)}}})})),window.onerror=function(e,i,o,n,r){!window.__wpk.ready&&r&&window.__wpk.reportJSError(r,{stack:(r.stack||"").toString(),w_msg:e,w_file:i,w_line:o,w_col:n})},window.iLogger={},["iLoggerInit","iLoggerMtopPluginInit","iLoggerReportApi","iLoggerSelfDefineFSP","iLoggerIntegrate"].forEach((function(e){window.iLogger[e]=function(){if(window.iLogger.isReady&&"function"==typeof window.iLogger[e])window.iLogger[e].apply(null,arguments);else{window.__iTraceExpansionQueue||(window.__iTraceExpansionQueue=[]);var i=[e].concat(Array.prototype.slice.call(arguments));window.__iTraceExpansionQueue.push(i)}}})),function(){window.lzdiTraceLifeCircle={};var e={};["NativePrefetchEnd","FirstScreenRenderingStart","FirstScreenRenderingEnd","FSPStart","FSPEnd","FetchSSRDataStart","FetchSSRDataEnd","FetchFirstScreenDataStart","FetchFirstScreenDataEnd","PageRenderingEnd","lzdiTraceShareDidMountTime"].forEach((function(i){var o=function(){window.__iTraceLifeQueue||(window.__iTraceLifeQueue=[]);var e=[i].concat(Array.prototype.slice.call(arguments));window.__iTraceLifeQueue.push(e)};window.lzdiTraceLifeCircle[i]=o,e[i]=o})),window.clearTraceLifeQueue=function(){if(window.__iTraceLifeQueue){for(var i=window.__iTraceLifeQueue,o=0;o<i.length;o++){var n=i[o]||[],r=n.shift&&n.shift();window.lzdiTraceLifeCircle&&"function"==typeof window.lzdiTraceLifeCircle[r]&&e[r]!==window.lzdiTraceLifeCircle[r]&&window.lzdiTraceLifeCircle[r].apply(null,n)}window.__iTraceLifeQueue=[]}};var i=navigator.userAgent||"",o=/iPad|iPhone|iPod/.test(i)?"pagehide":"beforeunload";window.addEventListener(o,(function(){window.clearTraceLifeQueue()}))}(),function(){window.addEventListener("oniLoggerMtopPluginInit",(function(e){i(e.detail)}),!1);var e=!(window.lib&&window.lib.mtop);window.lib||(window.lib={}),e&&(e=!1,Object.defineProperty(window.lib,"mtop",{get:function(){return window.__lzdlib_mtop__},set:function(e){window.__lzdlib_mtop__=e,Object.defineProperty(window.lib.mtop,"middlewares",{get:function(){return window.__lzdlib_mtop_middlewares__},set:function(e){var i=new CustomEvent("oniLoggerMtopPluginInit",{detail:{}});window.__lzdlib_mtop_middlewares__=e,window.dispatchEvent(i)},configurable:!0,enumerable:!0})},configurable:!0,enumerable:!0}));var i=function(){var e;window.isMtopMiddlewareReady||(window,(e=window.lib||(window.lib={}))&&e.mtop&&!e.mtop.ERROR?(window.__iTraceMtopQueue||(window.__iTraceMtopQueue=[]),e.mtop.middlewares.push((function(e){var i=this.params,o=this.options,n=o.querystring,r=parseInt((void 0===n?{}:n).t)||Date.now(),t=void 0;return performance&&"function"==typeof performance.now&&(t=Math.floor(performance.now())-Math.floor(window.preLoadTime||0)),e().then((function(){var e=(o.results[0]||{}).stat,n=(void 0===e?{}:e).oneWayTime||Date.now()-r,w={params:i,options:o,spent:n,performanceNow:t};window.iLogger&&window.iLogger.mtopReport?window.iLogger.mtopReport(w):window.__iTraceMtopQueue.push(w)}))})),window.isMtopMiddlewareReady=!0,console.log("[lzd-h5-itrace] add mtop middlewares success")):console.warn("[lzd-h5-itrace] Mtop 没有初始化，无法添加 Mtop Itrace 监控插件！请参考 Mtop 文档 http://gitlab.alibaba-inc.com/mtb/lib-mtop ",e))}}(),window.__itraceBundleReady=function(){console.log("--- itrace sdk onload ---"),window.__wpk=window.__itrace,window.__wpk.reportError=window.__wpk.reportJSError,window.__wpk.reportApiError=window.__wpk.reportApi,window.__wpk.setReady(),"function"==typeof window.onWpkReady&&window.onWpkReady()},window.__itraceExpansionReady=function(){console.log("--- itrace expansion onload ---");var e=window.__iTraceExpansionQueue||[];window.iLogger.isReady=!0,window.lzdFspTrackerPlugin&&(window.iLogger.fspTracker=window.lzdFspTrackerPlugin);for(var i=0;i<e.length;i++){var o=e[i]||[],n=o.shift();"function"==typeof window.iLogger[n]&&window.iLogger[n].apply(null,o)}window.clearTraceLifeQueue(),"function"==typeof window.onTraceExpansionReady&&window.onTraceExpansionReady()}}));

          
        
      
  if (shouldImportItrace) {
    // import itrace libs
    function loadItraceAsync(itraceUrl, cbName) {
      if (!itraceUrl) {
        return;
      }
      var bodyEl = document.getElementsByTagName('body')[0];
      var script = document.createElement('script');
      script.crossOrigin = 'anonymous';
      script.src = itraceUrl;
      if (cbName) {
        script.onload = window[cbName];
      }
      bodyEl.appendChild(script);
    }
    loadItraceAsync("//g.lazcdn.com/g/woodpeckerx/itrace-next/??itrace-jserror.iife.js,itrace-interface.iife.js,itrace-perf.iife.js,itrace-flow.iife.js,itrace-blank.iife.js,itrace-resource.iife.js,itrace.iife.js", "__itraceBundleReady");
    loadItraceAsync("", "__itraceExpansionReady");
  }
})();

window.g_config = window.g_config || {};
window.g_config.pageType = "home";  
window.g_config.channel = "default";  
window.g_config.language = "en";
window.g_config.regionID = "VN";
window.g_config.channelEnv = "product";
window.g_config.showPcSearchboxHotWords = "false";
window.g_config.newPcHeadFoot = "true";


