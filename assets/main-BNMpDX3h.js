(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();document.querySelector("#app").innerHTML=`
  <div class="min-h-screen bg-slate-300 dark:bg-slate-800 transition-colors duration-300">
  <div class="mediaquery">
      <div class="visible sm:invisible md:invisible lg:invisible xl:invisible 2xl:invisible">XS</div>
      <div class="invisible sm:visible md:invisible lg:invisible xl:invisible 2xl:invisible">SM</div>
      <div class="invisible md:visible lg:invisible xl:invisible 2xl:invisible">MD</div>
      <div class="invisible lg:visible xl:invisible 2xl:invisible">LG</div>
      <div class="invisible xl:visible 2xl:invisible">XL</div>
      <div class="invisible 2xl:visible">XXL</div>
  </div>
  <!-- Header -->
<header class="flex justify-end p-4 md:p-10">
  <div class="md:fixed">
    <button id="theme-toggle" type="button" aria-label="Toggle between light and dark mode" class="transition ease-in-out delay-150 duration-300 text-slate-500 dark:text-slate-400 bg-slate-300 hover:bg-slate-400 dark:bg-slate-700 dark:hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-sky-500 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5" aria-live="polite">
      <!-- Icon for dark mode -->
      <svg id="theme-toggle-dark-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
      </svg>
      <!-- Icon for light mode -->
      <svg id="theme-toggle-light-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path>
      </svg>
    </button>
  </div>
</header>


  <!-- Main Content -->
    <main class="container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-8">
      <section class="col-span-1 md:col-span-1 flex flex-col items-center text-center ">
        <div class="md:fixed">
        <img src="images/e_gonzalez_pic.webp" class="rounded-full h-40 w-40 mx-auto grayscale contrast-150 border-4 border-slate-400" alt="Retrato de Emmanuel G., diseñador gráfico y web.">
        <h1 class="text-slate-900 dark:text-slate-300 font-bold text-lg mt-2">Diseño Gráfico y Web</h1>
        <h2 class="text-slate-800 dark:text-sky-400 font-semibold text-sm">Emmanuel González</h2>
        <button aria-label="Abrir conversación en WhatsApp con Emmanuel G." onClick="window.open('https://wa.me/+525530266338', '_blank');" class="mt-6 hidden md:flex transition ease-in-out delay-150 duration-300 bg-slate-800 dark:bg-slate-950 hover:bg-slate-500 dark:hover:bg-slate-700 focus:outline-none focus:ring-4 focus:ring-sky-200 dark:focus:ring-sky-700 rounded-xl p-3 items-center mx-auto">
          <div class="flex items-center">
            <div class="basis-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 256 258" aria-hidden="true">
                <defs>
                  <linearGradient id="logosWhatsappIcon0" x1="50%" x2="50%" y1="100%" y2="0%">
                    <stop offset="0%" stop-color="#1faf38"/>
                    <stop offset="100%" stop-color="#60d669"/>
                  </linearGradient>
                  <linearGradient id="logosWhatsappIcon1" x1="50%" x2="50%" y1="100%" y2="0%">
                    <stop offset="0%" stop-color="#f9f9f9"/>
                    <stop offset="100%" stop-color="#fff"/>
                  </linearGradient>
                </defs>
                <path fill="url(#logosWhatsappIcon0)" d="M5.463 127.456c-.006 21.677 5.658 42.843 16.428 61.499L4.433 252.697l65.232-17.104a123 123 0 0 0 58.8 14.97h.054c67.815 0 123.018-55.183 123.047-123.01c.013-32.867-12.775-63.773-36.009-87.025c-23.23-23.25-54.125-36.061-87.043-36.076c-67.823 0-123.022 55.18-123.05 123.004"/>
                <path fill="url(#logosWhatsappIcon1)" d="M1.07 127.416c-.007 22.457 5.86 44.38 17.014 63.704L0 257.147l67.571-17.717c18.618 10.151 39.58 15.503 60.91 15.511h.055c70.248 0 127.434-57.168 127.464-127.423c.012-34.048-13.236-66.065-37.3-90.15C194.633 13.286 162.633.014 128.536 0C58.276 0 1.099 57.16 1.071 127.416m40.24 60.376l-2.523-4.005c-10.606-16.864-16.204-36.352-16.196-56.363C22.614 69.029 70.138 21.52 128.576 21.52c28.3.012 54.896 11.044 74.9 31.06c20.003 20.018 31.01 46.628 31.003 74.93c-.026 58.395-47.551 105.91-105.943 105.91h-.042c-19.013-.01-37.66-5.116-53.922-14.765l-3.87-2.295l-40.098 10.513z"/>
                <path fill="#fff" d="M96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503c-1.858-.08-3.982-.074-6.104-.074c-2.124 0-5.575.799-8.492 3.984c-2.92 3.188-11.148 10.892-11.148 26.561s11.413 30.813 13.004 32.94c1.593 2.123 22.033 35.307 54.405 48.073c26.904 10.609 32.379 8.499 38.218 7.967c5.84-.53 18.844-7.702 21.497-15.139c2.655-7.436 2.655-13.81 1.859-15.142c-.796-1.327-2.92-2.124-6.105-3.716s-18.844-9.298-21.763-10.361c-2.92-1.062-5.043-1.592-7.167 1.597c-2.124 3.184-8.223 10.356-10.082 12.48c-1.857 2.129-3.716 2.394-6.9.801c-3.187-1.598-13.444-4.957-25.613-15.806c-9.468-8.442-15.86-18.867-17.718-22.056c-1.858-3.184-.199-4.91 1.398-6.497c1.431-1.427 3.186-3.719 4.78-5.578c1.588-1.86 2.118-3.187 3.18-5.311c1.063-2.126.531-3.986-.264-5.579c-.798-1.593-6.987-17.343-9.819-23.64"/>
              </svg>
            </div>
            <div class="basis-full">
              <p class="text-center text-slate-300 dark:text-slate-200 text-sm pl-3">¡Hablemos en Whatsapp!</p>
            </div>
          </div>
        </button>
        </div>
      </section>

<!-- Right: Grid 3x3 (Now on the right) -->
<section class="col-span-1 mt-4 mb-24 md:mb-4 md:mt-0 md:col-span-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
<!-- Jardín Cristel/ -->
<div class="border border-sky-400 rounded-lg flex flex-col h-full">
  <div class="box-content flex flex-col flex-1">
    <img src="./images/jardincristel.webp" class="w-full rounded-t-lg" alt="Captura de pantalla del sitio web de Jardín Cristel.">
    <div class="p-5 flex flex-col justify-between flex-1">
      <h3 class="uppercase font-bold text-slate-900 dark:text-slate-300">Jardín Cristel</h3>
      <p class="capitalize font-bold text-slate-800 dark:text-slate-400 text-sm">Single-page website</p>
      <p class="normal-case font-normal text-slate-700 dark:text-slate-400 text-sm">Diseño y programación del sitio en Figma, Photoshop, Tailwind, HTML, CSS, Javascript.</p>
      <a href="https://jardincristel.mx/" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center transition ease-in-out delay-150 duration-300 mt-5 rounded py-2 px-4 text-sm text-white bg-sky-700 hover:bg-sky-500" aria-label="Visitar el sitio web de Jardín Cristel">
        Visita el sitio web
      </a>
    </div>
  </div>
</div>
<!-- Jardín Cristel/ -->

<!-- Banco Invex -->
<div class="border border-sky-400 rounded-lg flex flex-col h-full">
  <div class="box-content flex flex-col flex-1">
    <img src="./images/invex-realmadrid.webp" class="w-full rounded-t-lg" alt="Captura de pantalla del landing page del Banco Invex.">
    <div class="p-5 flex flex-col justify-between flex-1">
      <h3 class="uppercase font-bold text-slate-900 dark:text-slate-300">Banco Invex</h3>
      <p class="capitalize font-bold text-slate-800 dark:text-slate-400 text-sm">Landing Page</p>
      <p class="normal-case font-normal text-slate-700 dark:text-slate-400 text-sm">Diseño y programación del landing page en XD, Photoshop, Bootstrap, HTML, CSS, JavaScript.</p>
      <a href="https://realmadridlanding.netlify.app/" target="_blank" rel="noopener noreferrer" aria-label="Visita el landing page del Banco Invex" class="transition ease-in-out delay-150 duration-300 mt-5 rounded py-2 px-4 text-sm text-white bg-sky-700 hover:bg-sky-500 flex items-center justify-center">
        Visita el sitio web
      </a>
    </div>
  </div>
</div>
<!-- Banco Invex -->

<!-- GGB TI+ -->
<div class="border border-sky-400 rounded-lg flex flex-col h-full">
  <div class="box-content flex flex-col flex-1">
    <img src="./images/ggb-ti.webp" class="w-full rounded-t-lg" alt="Captura de pantalla del sitio web 'GGB TI+', mostrando su diseño y estructura.">
    <div class="p-5 flex flex-col justify-between flex-1">
      <h3 class="uppercase font-bold text-slate-900 dark:text-slate-300">GGB TI+</h3>
      <p class="capitalize font-bold text-slate-800 dark:text-slate-400 text-sm">Single-page website</p>
      <p class="normal-case font-normal text-slate-700 dark:text-slate-400 text-sm">Diseño y programación del sitio web utilizando Photoshop, HTML, CSS, Tailwind y Vite.</p>
      <a href="http://ggbservicios.com.mx/" target="_blank" rel="noopener noreferrer" aria-label="Visitar el sitio web de GGB TI+" class="transition ease-in-out delay-150 duration-300 mt-5 rounded py-2 px-4 text-sm text-white bg-sky-700 hover:bg-sky-500 flex items-center justify-center">
        Visita el sitio web
      </a>
    </div>
  </div>
</div>
<!-- GGB TI+ --> 

<!-- Haiat & Amezcua -->
<div class="border border-sky-400 rounded-lg flex flex-col h-full">
  <div class="box-content flex flex-col flex-1">
    <img src="./images/Haiat-y-Amezcua.webp" class="w-full rounded-t-lg" alt="Captura de pantalla del sitio web Haiat & Amezcua, mostrando su diseño y funcionalidad.">
    <div class="p-5 flex flex-col justify-between flex-1">
      <h3 class="uppercase font-bold text-slate-900 dark:text-slate-300">Haiat & Amezcua</h3>
      <p class="capitalize font-bold text-slate-800 dark:text-slate-400 text-sm">Sitio web</p>
      <p class="normal-case font-normal text-slate-700 dark:text-slate-400 text-sm">Programación del sitio web Haiat & Amezcua utilizando Bootstrap, Photoshop, HTML, y CSS.</p>
      <a href="https://haiat-y-amezcua.com/" target="_blank" rel="noopener noreferrer" aria-label="Visita el sitio web Haiat & Amezcua" class="transition ease-in-out delay-150 duration-300 mt-5 rounded py-2 px-4 text-sm text-white bg-sky-700 hover:bg-sky-500 flex items-center justify-center">
        Visita el sitio web
      </a>
    </div>
  </div>
</div>
<!-- Haiat & Amezcua -->

<!-- Enlaces Educativos Internacionales -->
<div class="border border-sky-400 rounded-lg flex flex-col h-full">
  <div class="box-content flex flex-col flex-1">
    <img src="./images/enlaces-educativos-internacionales.webp" class="w-full rounded-t-lg" alt="Captura de pantalla del sitio web Enlaces Educativos Internacionales.">
    <div class="p-5 flex flex-col justify-between flex-1">
      <h3 class="uppercase font-bold text-slate-900 dark:text-slate-300">Enlaces Educativos Internacionales</h3>
      <p class="capitalize font-bold text-slate-800 dark:text-slate-400 text-sm">WordPress</p>
      <p class="normal-case font-normal text-slate-700 dark:text-slate-400 text-sm">Diseño y personalización del sitio web en WordPress, utilizando Photoshop, HTML, y CSS.</p>
      <a href="https://enlaceseducativosinternacionales.com/" target="_blank" rel="noopener noreferrer" aria-label="Visita el sitio web Enlaces Educativos Internacionales" class="transition ease-in-out delay-150 duration-300 mt-5 rounded py-2 px-4 text-sm text-white bg-sky-700 hover:bg-sky-500 flex items-center justify-center">
        Visita el sitio web
      </a>
    </div>
  </div>
</div>
<!-- Enlaces Educativos Internacionales -->

<!-- Instituto Politécnico Nacional -->
<div class="border border-sky-400 rounded-lg flex flex-col h-full">
  <div class="box-content flex flex-col flex-1">
    <img src="./images/ipn-esca-polivirtual.webp" class="w-full rounded-t-lg" alt="Captura de pantalla del video de animación para el Instituto Politécnico Nacional, mostrando el diseño y contenido del Campus Virtual de la ESCA Tepepan.">
    <div class="p-5 flex flex-col justify-between flex-1">
      <h3 class="uppercase font-bold text-slate-900 dark:text-slate-300">Instituto Politécnico Nacional</h3>
      <p class="capitalize font-bold text-slate-800 dark:text-slate-400 text-sm">Animación</p>
      <p class="normal-case font-normal text-slate-700 dark:text-slate-400 text-sm">Animación realizada para el Instituto Politécnico Nacional, Campus Virtual de la ESCA Tepepan.</p>
      <a href="https://youtu.be/Q1LMtym9TqA?si=L0RgJQww6E2AmzzD" target="_blank" rel="noopener noreferrer" aria-label="Ver video de animación para el Instituto Politécnico Nacional" class="transition ease-in-out delay-150 duration-300 mt-5 rounded py-2 px-4 text-sm text-white bg-sky-700 hover:bg-sky-500 flex items-center justify-center">
        Ver video
      </a>
    </div>
  </div>
</div>
<!-- Instituto Politécnico Nacional -->

<!-- Promocionales -->
<div class="border border-sky-400 rounded-lg flex flex-col h-full">
  <div class="box-content flex flex-col flex-1">
    <img src="./images/egodiseno-promos.webp" class="w-full rounded-t-lg" alt="Ejemplo de promociones animadas para redes sociales, creado con After Effects, Photoshop e Illustrator.">
    <div class="p-5 flex flex-col justify-between flex-1">
      <h3 class="uppercase font-bold text-slate-900 dark:text-slate-300">Promocionales</h3>
      <p class="capitalize font-bold text-slate-800 dark:text-slate-400 text-sm">Animación</p>
      <p class="normal-case font-normal text-slate-700 dark:text-slate-400 text-sm">Promocionales diseñados para redes sociales, realizados con After Effects, Photoshop e Illustrator.</p>
      <a href="https://youtu.be/W1vh62_JlTI?si=TMmbIlzOfgMRLD0K" target="_blank" rel="noopener noreferrer" aria-label="Ver video de promociones animadas" class="transition ease-in-out delay-150 duration-300 mt-5 rounded py-2 px-4 text-sm text-white bg-sky-700 hover:bg-sky-500 flex items-center justify-center">
        Ver video
      </a>
    </div>
  </div>
</div>
<!-- Promocionales -->



<!-- Inside the Body -->
<div class="border border-sky-400 rounded-lg flex flex-col h-full">
  <div class="box-content flex flex-col flex-1">
    <img src="./images/inside-the-body.webp" class="w-full rounded-t-lg" alt="Video promocional titulado 'Inside the Body', realizado con Photoshop y Premiere Pro.">
    <div class="p-5 flex flex-col justify-between flex-1">
      <h3 class="uppercase font-bold text-slate-900 dark:text-slate-300">Inside the Body</h3>
      <p class="capitalize font-bold text-slate-800 dark:text-slate-400 text-sm">Realización de video</p>
      <p class="normal-case font-normal text-slate-700 dark:text-slate-400 text-sm">Video promocional para redes sociales, realizado con Photoshop y Premiere Pro.</p>
      <a href="https://youtu.be/Jed34fYj28g?si=vKh_1RNlcIUebJC6" target="_blank" rel="noopener noreferrer" aria-label="Ver video promocional 'Inside the Body'" class="transition ease-in-out delay-150 duration-300 mt-5 rounded py-2 px-4 text-sm text-white bg-sky-700 hover:bg-sky-500 flex items-center justify-center">
        Ver video
      </a>
    </div>
  </div>
</div>
<!-- Inside the Body -->

<!-- Hotel María del Carmen -->
<div class="border border-sky-400 rounded-lg flex flex-col h-full">
  <div class="box-content flex flex-col flex-1">
    <img src="./images/mariadelcarmen.webp" class="w-full rounded-t-lg" alt="Captura de pantalla del sitio web del Hotel María del Carmen, mostrando su diseño y estructura.">
    <div class="p-5 flex flex-col justify-between flex-1">
      <h3 class="uppercase font-bold text-slate-900 dark:text-slate-300">Hotel María del Carmen</h3>
      <p class="capitalize font-bold text-slate-800 dark:text-slate-400 text-sm">Sitio web</p>
      <p class="normal-case font-normal text-slate-700 dark:text-slate-400 text-sm">Diseño y programación del sitio web utilizando Photoshop, Illustrator, HTML, CSS y JavaScript.</p>
      <a href="http://www.hotelmariadelcarmen.com/" target="_blank" rel="noopener noreferrer" aria-label="Visitar el sitio web del Hotel María del Carmen" class="transition ease-in-out delay-150 duration-300 mt-5 rounded py-2 px-4 text-sm text-white bg-sky-700 hover:bg-sky-500 flex items-center justify-center">
        Visita el sitio web
      </a>
    </div>
  </div>
</div>
<!-- Hotel María del Carmen -->

<!-- Banco Invex< -->
<div class="border border-sky-400 rounded-lg flex flex-col h-full">
  <div class="box-content flex flex-col flex-1">
    <img src="./images/invex-volaris.webp" class="w-full rounded-t-lg" alt="Captura de pantalla del landing page para Invex y Volaris, mostrando el diseño y la estructura.">
    <div class="p-5 flex flex-col justify-between flex-1">
      <h3 class="uppercase font-bold text-slate-900 dark:text-slate-300">Banco Invex</h3>
      <p class="capitalize font-bold text-slate-800 dark:text-slate-400 text-sm">Landing page</p>
      <p class="normal-case font-normal text-slate-700 dark:text-slate-400 text-sm">Diseño y programación del landing page utilizando XD, Photoshop, Bootstrap, HTML, CSS y JavaScript.</p>
      <a href="https://invexvolarislanding.netlify.app/" target="_blank" rel="noopener noreferrer" aria-label="Visitar el sitio web del landing page de Invex y Volaris" class="transition ease-in-out delay-150 duration-300 mt-5 rounded py-2 px-4 text-sm text-white bg-sky-700 hover:bg-sky-500 flex items-center justify-center">
        Visita el sitio web
      </a>
    </div>
  </div>
</div>
<!-- Banco Invex< -->

  </section>
</main>

<!-- Componente CTA -->
<div id="cta" class="fixed md:hidden bottom-0 left-0 right-0 bg-slate-800 dark:bg-slate-800 p-4 shadow-lg rounded-t-lg flex justify-center items-center">
  <a href="https://wa.me/+525530266338" target="_blank" rel="noopener noreferrer" aria-label="Hablemos en Whatsapp" class="w-full text-center flex items-center justify-center transition ease-in-out delay-150 duration-300 bg-sky-400 dark:bg-sky-400 hover:bg-sky-600 dark:hover:bg-sky-600 focus:outline-none focus:ring-4 focus:ring-sky-200 dark:focus:ring-sky-700 rounded-xl p-3 mx-auto">
    <div class="flex items-center">
      <div class="flex-shrink-0 mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16" aria-hidden="true">
          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
        </svg>
      </div>       
      <div>
        <p class="text-slate-900 dark:text-slate-900 text-sm">¡Hablemos en Whatsapp!</p>
      </div>
    </div>
  </a>
</div>
<!-- Componente CTA -->



    
  </div>


`;document.addEventListener("DOMContentLoaded",()=>{const l=document.getElementById("theme-toggle"),a=document.getElementById("theme-toggle-dark-icon"),s=document.getElementById("theme-toggle-light-icon");function i(){l.classList.add("button-glow-start"),setTimeout(()=>{l.classList.remove("button-glow-start"),setTimeout(()=>{l.classList.add("button-glow")},5e3)},5e3)}localStorage.getItem("theme")==="dark"?(document.documentElement.classList.add("dark"),a.classList.remove("hidden"),s.classList.add("hidden")):(document.documentElement.classList.remove("dark"),a.classList.add("hidden"),s.classList.remove("hidden")),i(),l.addEventListener("click",()=>{document.documentElement.classList.toggle("dark"),document.documentElement.classList.contains("dark")?(a.classList.remove("hidden"),s.classList.add("hidden"),localStorage.setItem("theme","dark")):(a.classList.add("hidden"),s.classList.remove("hidden"),localStorage.setItem("theme","light"))}),setInterval(i,1e4)});document.addEventListener("scroll",function(){const l=document.getElementById("cta");(window.scrollY||window.pageYOffset)>300?l.classList.add("visible"):l.classList.remove("visible")});
