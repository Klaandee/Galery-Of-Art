import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro_JVM55aTl.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"window.onload=function(){var o=document.querySelectorAll(\"section\");o.forEach(function(n){n.addEventListener(\"mouseover\",function(){var e=n.getAttribute(\"id\"),t=window.location.origin+window.location.pathname+\"#\"+e;window.history.replaceState(null,null,t)})})};\n"}],"styles":[{"type":"external","src":"/_astro/galery.-Ak9h9Lh.css"},{"type":"inline","content":".card[data-astro-cid-bfpehkvo]:hover{box-shadow:0 0 15px #000}@media screen and (max-width: 940px){.card[data-astro-cid-bfpehkvo]{flex-direction:column}}@media screen and (max-width: 620px){.card[data-astro-cid-bfpehkvo] img[data-astro-cid-bfpehkvo]{width:15rem}.dsc[data-astro-cid-bfpehkvo]{width:20rem!important}}\n"}],"routeData":{"route":"/galery","isIndex":false,"type":"page","pattern":"^\\/galery\\/?$","segments":[[{"content":"galery","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/galery.astro","pathname":"/galery","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/galery.-Ak9h9Lh.css"},{"type":"inline","content":"@media screen and (max-width: 520px){section[data-astro-cid-bbe6dxrz]{text-align:center}}@media screen and (max-width: 590px){.card-s[data-astro-cid-dohjnao5]{text-align:center;justify-content:center;flex-direction:column}.card-s[data-astro-cid-dohjnao5] img[data-astro-cid-dohjnao5]{display:none}}@media screen and (max-width: 630px){.arts[data-astro-cid-67onepun]{font-size:5rem}.imagenes[data-astro-cid-67onepun]{display:flex;width:500px!important;height:430px}}@media screen and (max-width: 520px){.arts[data-astro-cid-67onepun]{font-size:3rem}.imagenes[data-astro-cid-67onepun]{display:flex;width:400px!important;height:430px}}@media screen and (max-width: 420px){.arts[data-astro-cid-67onepun]{font-size:3rem}.imagenes[data-astro-cid-67onepun]{display:flex;width:300px!important;height:430px}}.imagenes[data-astro-cid-67onepun]{display:flex;width:600px;height:430px}.imagenes[data-astro-cid-67onepun] img[data-astro-cid-67onepun]{width:0px;flex-grow:1;-o-object-fit:cover;object-fit:cover;opacity:1;transition:.5s ease}.imagenes[data-astro-cid-67onepun] img[data-astro-cid-67onepun]:hover{cursor:crosshair;width:300px;opacity:1;filter:contrast(120%)}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/roxana solis/OneDrive/Escritorio/Proyects Full/Galery-Of-Art/src/pages/galery.astro",{"propagation":"none","containsHead":true}],["C:/Users/roxana solis/OneDrive/Escritorio/Proyects Full/Galery-Of-Art/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_981WQ_7Z.mjs","/src/pages/index.astro":"chunks/pages/index_DPhw432_.mjs","\u0000@astrojs-manifest":"manifest_CNk925rS.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_DIjbalnl.mjs","\u0000@astro-page:src/pages/galery@_@astro":"chunks/galery_ve7iJYpB.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_DXkU3IXV.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.DBoJofDF.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/galery.-Ak9h9Lh.css","/src-1.jpg","/arts/la-joven-perla.webp","/arts/la-noche-estrellada.jpg","/arts/the-kiss.jpg","/arts/the-mona-lisa.avif"],"buildFormat":"directory"});

export { manifest };
