/*
═══════════════════════════════════════════════

  Adega 24h Delivery
  Proprietary Software

  @author Thereza Candida
  @organization Emshtml
  @copyright 2026
  @license Proprietary

  Copyright (c) 2026 Thereza Candida / Emshtml

  Todos os direitos reservados.

  É proibida a cópia, redistribuição,
  modificação, revenda ou reutilização
  parcial ou integral deste sistema sem
  autorização formal do autor.

═══════════════════════════════════════════════
*/

self.addEventListener('install', event => {

  console.log('PWA instalado com sucesso');

});

self.addEventListener('fetch', event => {

  event.respondWith(
    fetch(event.request)
  );

});
