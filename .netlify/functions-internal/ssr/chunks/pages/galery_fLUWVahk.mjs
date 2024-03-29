/* empty css                           */
import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, f as renderHead, g as renderSlot, m as maybeRenderHead, h as renderComponent } from '../astro_JVM55aTl.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                           */

const $$Astro$4 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="shortcut icon" href="/arts/the-kiss.jpg" type="image/x-icon"><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/roxana solis/OneDrive/Escritorio/Proyects Full/Galery-Of-Art/src/layouts/Layout.astro", void 0);

const $$Astro$3 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Header;
  const { home, galery } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header class="text-center mt-3" data-astro-cid-3ef6ksr2> <a href="/" class="hover:underline" data-astro-cid-3ef6ksr2><h1 class="text-6xl font-bold" data-astro-cid-3ef6ksr2>Galery ART</h1></a> <p class="mt-2 text-xl" data-astro-cid-3ef6ksr2>Galery Of Art - Art is ART</p> <nav data-astro-cid-3ef6ksr2> <ul class="flex justify-center gap-2 font-extrabold" data-astro-cid-3ef6ksr2> <li class="hover:underline cursor-pointer" data-astro-cid-3ef6ksr2><a${addAttribute(home, "href")} data-astro-cid-3ef6ksr2>Home</a></li> <li class="hover:underline cursor-pointer" data-astro-cid-3ef6ksr2><a${addAttribute(galery, "href")} data-astro-cid-3ef6ksr2>Galery</a></li> </ul> </nav> <div class="flex justify-center mt-3" data-astro-cid-3ef6ksr2> <div class="linea w-4/12 bg-black" style="height: 0.01rem;" data-astro-cid-3ef6ksr2></div> </div> </header> `;
}, "C:/Users/roxana solis/OneDrive/Escritorio/Proyects Full/Galery-Of-Art/src/components/Header.astro", void 0);

const $$Astro$2 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<div class="flex justify-center mt-3" data-astro-cid-sz7xmlte> <div class="line bg-black" style="height: 0.01rem;" data-astro-cid-sz7xmlte></div> </div> <section class="flex justify-center" data-astro-cid-sz7xmlte> <div class="footer mt-3 flex justify-between" data-astro-cid-sz7xmlte> <h1 class="text-xl font-bold mt-2" data-astro-cid-sz7xmlte>
© 2024 Galery Of Art | All rights reserved
</h1> <div class="text-4xl" data-astro-cid-sz7xmlte> <a href="https://github.com/" data-astro-cid-sz7xmlte><i class="bi bi-github" title="Open Source" data-astro-cid-sz7xmlte></i></a> <a href="https://jhonaz.netlify.app" data-astro-cid-sz7xmlte><i class="bi bi-fire" title="Creator" data-astro-cid-sz7xmlte></i></a> </div> </div> </section> `;
}, "C:/Users/roxana solis/OneDrive/Escritorio/Proyects Full/Galery-Of-Art/src/components/Footer.astro", void 0);

const $$Astro$1 = createAstro();
const $$Artworks = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Artworks;
  const { artwork, artname, author, artdsc, artlink } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="" data-astro-cid-bfpehkvo> <a${addAttribute(artlink, "href")} target="_blank" data-astro-cid-bfpehkvo> <div class="card bg-gray-100 p-4 rounded-3xl hover:bg-black hover:text-white flex" style="transition: .7s ease-in-out" title="Click to see this Work of Art on Wikipedia!" data-astro-cid-bfpehkvo> <img${addAttribute(artwork, "src")} alt="Artwork, Galery Of Art" class="rounded-3xl min-w-80" data-astro-cid-bfpehkvo> <div class="mt-1 ml-2" data-astro-cid-bfpehkvo> <h1 class="font-bold text-3xl" data-astro-cid-bfpehkvo>${artname}</h1> <p class="font-semibold" data-astro-cid-bfpehkvo>by "${author}"</p> <p style="width: 35rem;" class="dsc mt-2" data-astro-cid-bfpehkvo>${artdsc}</p> </div> </div> </a> </section> `;
}, "C:/Users/roxana solis/OneDrive/Escritorio/Proyects Full/Galery-Of-Art/src/components/galery/Artworks.astro", void 0);

const $$Astro = createAstro();
const $$Galery = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Galery;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Galery Of Art", "description": `On this page you can see the best works of art from around the world on this page! You can see the authors and information about them.` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "home": "/" })} ${maybeRenderHead()}<h1 class="text-center font-bold text-6xl mt-3">Artworks</h1> <main class="flex justify-center"> <div class="cards flex flex-col justify-center gap-6 mt-6"> <!-- The starry Night --> <section id="the-starry-night"> ${renderComponent($$result2, "Artwork", $$Artworks, { "artlink": "https://es.wikipedia.org/wiki/La_noche_estrellada", "artwork": "/arts/la-noche-estrellada.jpg", "artname": "The starry Night", "author": "Vincent van Gogh", "artdsc": `The Starry Night is an oil on canvas painting by the Dutch post-impressionist painter Vincent van Gogh. Painted in June 1889, it depicts the view from the east-facing window of his asylum room in Saint-R\xE9my-de-Provence, just before dawn, with the addition of an imaginary village. Van Gogh depicted the view at different times of the day, including sunrise, moonrise, sunny days, cloudy days, windy days, and a rainy day. Although the hospital staff did not allow Van Gogh to paint in his bedroom, there he was able to make sketches in ink or charcoal on paper; Eventually, I would base newer variations on older versions.\u200B\u200B\u200B` })} </section> <!-- The Mona Lisa --> <section id="the-mona-lisa"> ${renderComponent($$result2, "Artwork", $$Artworks, { "artlink": "https://es.wikipedia.org/wiki/La_Gioconda", "artwork": "/arts/the-mona-lisa.avif", "artname": "The Mona Lisa", "author": "Leonardo da Vinci", "artdsc": `The portrait of Lisa Gherardini, wife of Francesco del Giocondo, better known as La Gioconda or Monna Lisa, is a pictorial work of the Italian Renaissance polymath Leonardo da Vinci. It was acquired by King Francis I of France at the beginning of the 16th century and has been property of the French State since then. Through historical studies it has been determined that the model could be a neighbor of Leonardo, that her descendants could be known and that the model could have been pregnant, due to the way she hides her hands.` })} </section> <!-- The girl of the pearl --> <section id="the-girl-of-the-pearl"> ${renderComponent($$result2, "Artwork", $$Artworks, { "artlink": "https://es.wikipedia.org/wiki/La_joven_de_la_perla", "artwork": "/arts/la-joven-perla.webp", "artname": "The girl of the pearl", "author": "Johannes Vermeer", "artdsc": `Girl with a Pearl Earring, also known as Girl with a Turban, is one of the masterpieces of Dutch painter Johannes Vermeer created between 1665 and 1667. As the name suggests, it uses a pearl earring as a focal point. The painting is currently in the Mauritshuis museum in The Hague.` })} </section> <!-- The Kiss --> <section id="the-kiss"> ${renderComponent($$result2, "Artwork", $$Artworks, { "artlink": "https://es.wikipedia.org/wiki/El_beso_(Gustav_Klimt)", "artwork": "/arts/the-kiss.jpg", "artname": "The kiss", "author": "Gustav Klimt", "artdsc": `The Kiss is a work by the Austrian painter Gustav Klimt and probably his best-known work. It is an oil painting with gold and tin flakes on canvas measuring 180 x 180 centimeters, made between 1907-08. This work, which follows the canons of Symbolism, is a canvas with decorations and mosaics on a golden background.` })} </section> </div> </main> <div class="mt-8"> ${renderComponent($$result2, "Footer", $$Footer, {})} </div> ` })} `;
}, "C:/Users/roxana solis/OneDrive/Escritorio/Proyects Full/Galery-Of-Art/src/pages/galery.astro", void 0);

const $$file = "C:/Users/roxana solis/OneDrive/Escritorio/Proyects Full/Galery-Of-Art/src/pages/galery.astro";
const $$url = "/galery";

const galery = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Galery,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Header as $, $$Footer as a, $$Layout as b, galery as g };
