/* empty css                           */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, h as renderComponent } from '../astro_JVM55aTl.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Header, a as $$Footer, b as $$Layout } from './galery_fLUWVahk.mjs';
import 'clsx';
/* empty css                          */

const $$Astro$3 = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Hero;
  const { heroname, herodsc } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="flex justify-center mt-5" data-astro-cid-bbe6dxrz> <div class="max-w-xl" data-astro-cid-bbe6dxrz> <h1 class="font-bold text-4xl mt-4 text-center" data-astro-cid-bbe6dxrz> ${heroname} </h1> <p class="text-2xl" data-astro-cid-bbe6dxrz>${herodsc}</p> </div> </section> `;
}, "C:/Users/roxana solis/OneDrive/Escritorio/Proyects Full/Galery-Of-Art/src/components/Hero.astro", void 0);

const $$Astro$2 = createAstro();
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Card;
  const { cardimg, cardname, cardsc } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="flex justify-center mt-5" data-astro-cid-dohjnao5> <div class="card-s flex max-w-xl bg-gray-200 p-2 rounded-3xl" data-astro-cid-dohjnao5> <img${addAttribute(cardimg, "src")} alt="Obras de arte" class="max-w-36 rounded-3xl" data-astro-cid-dohjnao5> <div class="ml-2" data-astro-cid-dohjnao5> <h1 class="font-bold text-2xl" data-astro-cid-dohjnao5>${cardname}</h1> <p data-astro-cid-dohjnao5> ${cardsc} </p> </div> </div> </section> `;
}, "C:/Users/roxana solis/OneDrive/Escritorio/Proyects Full/Galery-Of-Art/src/components/Card.astro", void 0);

const $$Astro$1 = createAstro();
const $$Arts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Arts;
  return renderTemplate`${maybeRenderHead()}<section class="mt-2" data-astro-cid-67onepun> <h1 class="arts text-center text-7xl font-bold" data-astro-cid-67onepun>Here you can see</h1> <div class="flex justify-center mt-6" data-astro-cid-67onepun> <a href="/galery" data-astro-cid-67onepun> <div class="imagenes" data-astro-cid-67onepun> <img src="/arts/la-joven-perla.webp" alt="Galery Of Art" style="border-top-left-radius: 20px;border-bottom-left-radius: 20px;" data-astro-cid-67onepun> <img src="/arts/la-noche-estrellada.jpg" alt="Galery Of Art" data-astro-cid-67onepun> <img src="/arts/the-kiss.jpg" alt="Galery Of Art" data-astro-cid-67onepun> <img src="/arts/the-mona-lisa.avif" alt="Galery Of Art" style="border-top-right-radius: 20px;border-bottom-right-radius: 20px;" data-astro-cid-67onepun> </div> </a> </div> </section> `;
}, "C:/Users/roxana solis/OneDrive/Escritorio/Proyects Full/Galery-Of-Art/src/components/Arts.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Galery Of Art", "description": `On this page you can see the best works of art from around the world on this page! You can see the authors and information about them.` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "galery": "/galery" })} ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, { "heroname": "Here you can see Works of Art", "herodsc": "The best works of art!" })} ${renderComponent($$result2, "Card", $$Card, { "cardimg": "/src-1.jpg", "cardname": "What is it about?", "cardsc": `On this page you can see the best works of art from around the
		world on this page! You can see the authors and information
		about them. Enjoy!` })} ${renderComponent($$result2, "Arts", $$Arts, {})} <div class="mt-10"> ${renderComponent($$result2, "Footer", $$Footer, {})} </div> </main> ` })}`;
}, "C:/Users/roxana solis/OneDrive/Escritorio/Proyects Full/Galery-Of-Art/src/pages/index.astro", void 0);

const $$file = "C:/Users/roxana solis/OneDrive/Escritorio/Proyects Full/Galery-Of-Art/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
