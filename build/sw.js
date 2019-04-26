/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "about-us.html",
    "revision": "ecca20a0f16c6f46a6e637b7dcfa9285"
  },
  {
    "url": "android-chrome-192x192.png",
    "revision": "d41d26abda389b0f0f506a76a849fff9"
  },
  {
    "url": "android-chrome-192x192.webp",
    "revision": "98cd84ab605d1bbf55e1333987d26c33"
  },
  {
    "url": "android-chrome-512x512.png",
    "revision": "8e7bcb8548aca314f41220f559d04e13"
  },
  {
    "url": "android-chrome-512x512.webp",
    "revision": "9d72f31812d340d05298c117462adfac"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "e5a1f3f1fd3efc040f2a2da4fad7c62b"
  },
  {
    "url": "apple-touch-icon.webp",
    "revision": "37705434198df1f8801511a30a60421a"
  },
  {
    "url": "assets/backgrounds/noise.png",
    "revision": "2eb88572cd26ea42606923e50e615306"
  },
  {
    "url": "assets/backgrounds/noise.webp",
    "revision": "b60b7af74ff2fff1933185847591cef0"
  },
  {
    "url": "assets/backgrounds/pattern-pixel-transparent.png",
    "revision": "a4b23b386c55733d7beaf2f4448580db"
  },
  {
    "url": "assets/backgrounds/pattern-pixel-transparent.webp",
    "revision": "926339f48e43301a3e6aec9d7052ef09"
  },
  {
    "url": "assets/backgrounds/pattern-pixel-white.png",
    "revision": "305e5bc934d37a9314bd224ac8046b9a"
  },
  {
    "url": "assets/backgrounds/pattern-pixel-white.webp",
    "revision": "1dede19592d92f97ac0adf6c751c67f8"
  },
  {
    "url": "assets/blank.png",
    "revision": "9529390786a6bfeb4ea5197a39d2e410"
  },
  {
    "url": "assets/blank.svg",
    "revision": "a618f05d0e890f40750109f67a2dcb7c"
  },
  {
    "url": "assets/error-static.gif",
    "revision": "e49fc1bd18b966580f4c6d0486adf97b"
  },
  {
    "url": "assets/error.gif",
    "revision": "6f851662ad2fe92e38d93dbf1e31b84a"
  },
  {
    "url": "assets/icon.png",
    "revision": "4c2a2f8fb5ca4f2c7ef709b5f78266f1"
  },
  {
    "url": "assets/icon.webp",
    "revision": "072b4f086e7ec36d27d5687b413ef124"
  },
  {
    "url": "assets/icons-nav.svg",
    "revision": "54c5e42c9b101ef67753192ca9862933"
  },
  {
    "url": "assets/icons/cover.png",
    "revision": "b319bcbf74f93f79f15c376e562864e7"
  },
  {
    "url": "assets/icons/cover.webp",
    "revision": "bd6ee1cf82234fe7034704fe4e0b5ca2"
  },
  {
    "url": "assets/icons/icon.png",
    "revision": "fa21c0f6aff4b4575fb55746a9dd6540"
  },
  {
    "url": "assets/icons/icon.webp",
    "revision": "290c9d68ee6bc63aaee7bdb0efd38dd5"
  },
  {
    "url": "assets/image-parallax/image.jpg",
    "revision": "bda31e39656169256d966513a236b9d9"
  },
  {
    "url": "assets/image-parallax/image.webp",
    "revision": "0f0ea5e4977e2e9c35838c176e77f85f"
  },
  {
    "url": "assets/image-parallax/maps/image.jpg",
    "revision": "86abc12874c9fd4c76825ce300090249"
  },
  {
    "url": "assets/image-parallax/maps/image.webp",
    "revision": "5ba05288d02ce659b5ef994fed6884e4"
  },
  {
    "url": "assets/image-parallax/maps/the-incredible-team.jpg",
    "revision": "74b2e926474da2b03a118d07be2914eb"
  },
  {
    "url": "assets/image-parallax/maps/the-incredible-team.webp",
    "revision": "ea39591bc960db328dc549017d13a613"
  },
  {
    "url": "assets/image-parallax/maps/the-mountain.jpg",
    "revision": "c688f4843f948d9960e15d573c854c43"
  },
  {
    "url": "assets/image-parallax/maps/the-mountain.webp",
    "revision": "5fce59a2c6e315e1e62cdbbc5044a44a"
  },
  {
    "url": "assets/image-parallax/the-incredible-team.jpg",
    "revision": "1668a3d80fd96ed5248b9d0fa363a2f2"
  },
  {
    "url": "assets/image-parallax/the-incredible-team.webp",
    "revision": "026e637801a06ce2661bbbf60907ff06"
  },
  {
    "url": "assets/image-parallax/the-mountain.jpg",
    "revision": "5ad9d5cf53a245085bde4160d9ebbfa0"
  },
  {
    "url": "assets/image-parallax/the-mountain.webp",
    "revision": "4b4d507e2018a7a98b98a5b9db947746"
  },
  {
    "url": "assets/index/hero.jpg",
    "revision": "b5d220429e2e639a8989cda1db325c2e"
  },
  {
    "url": "assets/index/hero.webp",
    "revision": "bc31b411cc45ef814b74d3c230285931"
  },
  {
    "url": "assets/index/image-01.jpg",
    "revision": "58d4b7211ffb98d023cd4c9f50276607"
  },
  {
    "url": "assets/index/image-01.webp",
    "revision": "39cd61d5191d9f4493789cd5c75025a3"
  },
  {
    "url": "assets/index/image-02.jpg",
    "revision": "00e76898993bad492cd2c0a186a7bad7"
  },
  {
    "url": "assets/index/image-02.webp",
    "revision": "9bc7c8969de499653a790f4a3505cf68"
  },
  {
    "url": "assets/index/image-03.jpg",
    "revision": "fd066a53a564efe71e23d5ecfeb50ada"
  },
  {
    "url": "assets/index/image-03.webp",
    "revision": "9754030bdf7b02294faa65df992970be"
  },
  {
    "url": "assets/index/image-04.jpg",
    "revision": "b438dd384b751571c8cffe34d950e631"
  },
  {
    "url": "assets/index/image-04.webp",
    "revision": "d6bfae5afbefe13885d2f6e538b97f3a"
  },
  {
    "url": "assets/index/image-05.jpg",
    "revision": "3846bd4d9c01e088fc343e6cab1d6443"
  },
  {
    "url": "assets/index/image-05.webp",
    "revision": "aa9b699897d9fa298ec9f2c96e0da018"
  },
  {
    "url": "assets/index/image-06.jpg",
    "revision": "a88ef0c92f1d90252f2d47b819738077"
  },
  {
    "url": "assets/index/image-06.webp",
    "revision": "d9a4c8d880ad1f7c2528a33b78753d34"
  },
  {
    "url": "assets/index/media-01.jpg",
    "revision": "2bc284668b24c3126d34c2f4ad7b9729"
  },
  {
    "url": "assets/index/media-01.webp",
    "revision": "b44609bc0b70a286ecf7ed16a9a4978a"
  },
  {
    "url": "assets/index/media-02.jpg",
    "revision": "bcc480d0784f366258a814d0a6811333"
  },
  {
    "url": "assets/index/media-02.mp4",
    "revision": "e4219fcba98ccf16e08b80e86ffa5470"
  },
  {
    "url": "assets/index/media-02.webp",
    "revision": "592396ce9a540bd4a97426267ab51c5a"
  },
  {
    "url": "assets/index/video-placeholder.jpg",
    "revision": "52c4bc542947a7c7e7b8eb4979608f37"
  },
  {
    "url": "assets/index/video-placeholder.webp",
    "revision": "6c7584a31dbc64ba7f8e5abef9816210"
  },
  {
    "url": "assets/index/woman-in-chair.jpg",
    "revision": "234fe59fc64c95622522841051f6b64f"
  },
  {
    "url": "assets/index/woman-in-chair.webp",
    "revision": "c51288482c95ceb54b4117878a7ac7f6"
  },
  {
    "url": "assets/konami-code/char.png",
    "revision": "a74a27877ae6b287de654f6cf1293852"
  },
  {
    "url": "assets/konami-code/char.webp",
    "revision": "3669361f74dd9bbc800eed3cf6db5034"
  },
  {
    "url": "assets/konami-code/contra.gif",
    "revision": "d8af412bc4bf99264979db2a2308b310"
  },
  {
    "url": "assets/konami-code/contra.png",
    "revision": "df4513eaf819774f4f805794c45d2937"
  },
  {
    "url": "assets/konami-code/contra.webp",
    "revision": "97a3e49579dfc7964e465d909ed778b4"
  },
  {
    "url": "assets/logos/american-dental-association.svg",
    "revision": "56f71fc5bfb0eae43d76c530eb320934"
  },
  {
    "url": "assets/logos/american-medical-association.svg",
    "revision": "1ae87f9fe7c5047e97221859cfa13902"
  },
  {
    "url": "assets/logos/american-society-for-dematologic-surgery.svg",
    "revision": "651fc51bf53b1c7bff216be2136ff915"
  },
  {
    "url": "assets/logos/american-society-of-plastic-surgeons.svg",
    "revision": "0d13e6268996071aef684b8a6800681c"
  },
  {
    "url": "assets/logos/artas.svg",
    "revision": "69acd112b10bab32b4bd8da5f2fa219b"
  },
  {
    "url": "assets/logos/btl.svg",
    "revision": "6acec0202251d3f5dbda3d98a8e46979"
  },
  {
    "url": "assets/logos/fxck-cancer.svg",
    "revision": "d485210b5604f43e589c1d20a9531495"
  },
  {
    "url": "assets/logos/greg-mueller.svg",
    "revision": "49abc53c3f8ceb917d2d99fa0ba95ed6"
  },
  {
    "url": "assets/logos/member-of-the-american-society-for-aesthetic-plastic-surgery.svg",
    "revision": "c8f2745ea32bb2d38826ac90059245bf"
  },
  {
    "url": "assets/logos/the-american-board-of-venous-and-lymphatic-medicine.svg",
    "revision": "6f327decde1a287287aca37a8e792665"
  },
  {
    "url": "assets/logos/williams-center.svg",
    "revision": "fde65f8b0e771c1a1a8bb489d31ab40a"
  },
  {
    "url": "assets/mejs-controls.png",
    "revision": "872edbb75a23651c30bf3ca06c9690bf"
  },
  {
    "url": "assets/mejs-controls.svg",
    "revision": "f0849a5e79712b10e1531925e3edb879"
  },
  {
    "url": "assets/mejs-controls.webp",
    "revision": "2c791a6c0e99786f8d8e1cd2eee7ada0"
  },
  {
    "url": "assets/stock/digital-content.jpg",
    "revision": "4bcf49c56d8e3f018f1deba9b6826105"
  },
  {
    "url": "assets/stock/digital-content.webp",
    "revision": "61467afd954974e999e2057aae90696c"
  },
  {
    "url": "assets/stock/marketing.jpg",
    "revision": "db66d887418a1b8851c1d46fa9c8edea"
  },
  {
    "url": "assets/stock/marketing.webp",
    "revision": "f0e5d58425d671db4aa6f681a1ebb521"
  },
  {
    "url": "assets/stock/social-media.jpg",
    "revision": "a7db2baf9418bd15c7c8f682bf16fa1c"
  },
  {
    "url": "assets/stock/social-media.webp",
    "revision": "76ed5d4b6aa43acce17a3a50f35895bb"
  },
  {
    "url": "assets/stock/ux.jpg",
    "revision": "8bbc44afdc630f6d70465aae4101c999"
  },
  {
    "url": "assets/stock/ux.webp",
    "revision": "44478e1a4f00d63a71bc279320f5946c"
  },
  {
    "url": "assets/the-incredible-team/01.jpg",
    "revision": "75d16046e372049fe1af9e14a553a404"
  },
  {
    "url": "assets/the-incredible-team/01.webp",
    "revision": "477465a9d29fa82a55d53bdd7bfab8c6"
  },
  {
    "url": "assets/the-incredible-team/02.jpg",
    "revision": "b628bd4dfaaba1644bedcc6d3bec440d"
  },
  {
    "url": "assets/the-incredible-team/02.webp",
    "revision": "990f43a7cd2fb4bd818c650b5e7370c6"
  },
  {
    "url": "assets/the-incredible-team/03.jpg",
    "revision": "10d1020f4cdaa7829f1c4594d72e2a49"
  },
  {
    "url": "assets/the-incredible-team/03.webp",
    "revision": "b2ab49226b11373bdc3d1efc58322016"
  },
  {
    "url": "assets/the-incredible-team/04.jpg",
    "revision": "b2408b836244523e4dc61d0be1be8e7e"
  },
  {
    "url": "assets/the-incredible-team/04.webp",
    "revision": "0b5f62025bdfbc4f3b53a0e2847b820d"
  },
  {
    "url": "assets/the-incredible-team/05.jpg",
    "revision": "a2172933790280645336de4d52ae1fba"
  },
  {
    "url": "assets/the-incredible-team/05.webp",
    "revision": "b15cdfbaddf34799dce94cdeb2c53c90"
  },
  {
    "url": "assets/video-posters/artas.jpg",
    "revision": "a9cfdfcdd5c7aae904a15ccbb3e06766"
  },
  {
    "url": "assets/video-posters/artas.svg",
    "revision": "1613dfe8457c33544e649ac20d6d9165"
  },
  {
    "url": "assets/video-posters/artas.webp",
    "revision": "841a36786f23f49ad9a6c908af10feb2"
  },
  {
    "url": "assets/video-posters/btl.jpg",
    "revision": "4d59fe57e4979bbea5f425af9ff9bd98"
  },
  {
    "url": "assets/video-posters/btl.svg",
    "revision": "fe073983fc492fae28984881e6eacc5c"
  },
  {
    "url": "assets/video-posters/btl.webp",
    "revision": "b60f622696b6f2d699c7a077cce2279c"
  },
  {
    "url": "assets/video-posters/fxck-cancer.jpg",
    "revision": "dcb7da9b6050f8fc04480d39e6501545"
  },
  {
    "url": "assets/video-posters/fxck-cancer.svg",
    "revision": "a604724a00cb8de2e7d7022054773df2"
  },
  {
    "url": "assets/video-posters/fxck-cancer.webp",
    "revision": "8b19423dcc2bd3d4ac3bf540d57a40b7"
  },
  {
    "url": "assets/video-posters/greg-mueller.jpg",
    "revision": "caa2d116cac1eb2472a1828d068693e4"
  },
  {
    "url": "assets/video-posters/greg-mueller.svg",
    "revision": "0c311b6e93b83f535d7026f081123d08"
  },
  {
    "url": "assets/video-posters/greg-mueller.webp",
    "revision": "58f3cb1de96bbdf38a3fad7220636e64"
  },
  {
    "url": "assets/video-posters/williams-center.jpg",
    "revision": "a966147d143099d4d6c91181295eba0c"
  },
  {
    "url": "assets/video-posters/williams-center.svg",
    "revision": "ab215110b04728b6705c702dd861bbc3"
  },
  {
    "url": "assets/video-posters/williams-center.webp",
    "revision": "27c2340e8b5dbce5ce95bc08a4f84f8a"
  },
  {
    "url": "careers.html",
    "revision": "d848245d27bdf7c9f671d00f0de28d60"
  },
  {
    "url": "conatct.html",
    "revision": "33868bb525717f9fed664a06592b9709"
  },
  {
    "url": "contact.html",
    "revision": "20186b50e6738073287f122c412c7a99"
  },
  {
    "url": "dialog/privacy-policy.html",
    "revision": "e73c91db8712e8cfd576a06f4c71cc49"
  },
  {
    "url": "dialog/sample.html",
    "revision": "08dce5ab370a447da9218122c0aa0e57"
  },
  {
    "url": "error.html",
    "revision": "04be2fa93c3cc15a417fab8b5956f8b7"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "6022a83596af1adf3fa6e5a435f254d7"
  },
  {
    "url": "favicon-16x16.webp",
    "revision": "4aba54e097f32c7edc12726a488f2c4f"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "701ccd75067a4fa3ffacdcd0575a1aec"
  },
  {
    "url": "favicon-32x32.webp",
    "revision": "7f0ad9def1ec6ecba722c0728c0389bc"
  },
  {
    "url": "index.html",
    "revision": "0c6355ecd685a38f9bd51a81e9033dd2"
  },
  {
    "url": "legal.html",
    "revision": "09706dd62af312b8d9b585af77b6fe4f"
  },
  {
    "url": "mstile-144x144.png",
    "revision": "a384068c9818e2ade2c0d61ce340c8b2"
  },
  {
    "url": "mstile-144x144.webp",
    "revision": "4c3701b4e97874f3d42fd334dc744b6a"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "1dda6df1834ed51710f3b9cb2e3dc943"
  },
  {
    "url": "mstile-150x150.webp",
    "revision": "1f1a9c38465d1fadf1a76e6bcdbf83e4"
  },
  {
    "url": "mstile-310x150.png",
    "revision": "a64eeb998bef6abcd7a6e7d32a243870"
  },
  {
    "url": "mstile-310x150.webp",
    "revision": "0338425827b755c177db1b5d9b7a0e2b"
  },
  {
    "url": "mstile-310x310.png",
    "revision": "372882f76e3fd633df01e464e76159d9"
  },
  {
    "url": "mstile-310x310.webp",
    "revision": "dd3708545810747127c3bad7073ebbcc"
  },
  {
    "url": "mstile-70x70.png",
    "revision": "fb0159823b1d46901472686ca042be2b"
  },
  {
    "url": "mstile-70x70.webp",
    "revision": "5990c0b9f94f16f59b9d73114b215ff5"
  },
  {
    "url": "our-work.html",
    "revision": "f876e35aff90810bc4f51f546ebf33b6"
  },
  {
    "url": "safari-pinned-tab.png",
    "revision": "1bc4848d426ba6886aeb4e575332ae82"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "38b3eaa41917767a31e71863a92d0f36"
  },
  {
    "url": "scripts/app.8ba010aa5a.css",
    "revision": "af5f8b88ca49ef5818ee1af41f1f9a23"
  },
  {
    "url": "scripts/app.b174aad1a2.js",
    "revision": "3f68bd110a1699e3595f218667e3c774"
  },
  {
    "url": "services.html",
    "revision": "26240d9cdbd5081df42ad2f4ab1c0465"
  },
  {
    "url": "webfonts/fa-brands-400.eot",
    "revision": "72721167aea128f7ddac301c15dab835"
  },
  {
    "url": "webfonts/fa-brands-400.svg",
    "revision": "f77645622015337d638b8a3d6266fe43"
  },
  {
    "url": "webfonts/fa-brands-400.ttf",
    "revision": "29e1f75381d3efde65c48168ebe5c403"
  },
  {
    "url": "webfonts/fa-brands-400.woff",
    "revision": "fb481cb3c3d44b2d16d38e93ef118f9a"
  },
  {
    "url": "webfonts/fa-brands-400.woff2",
    "revision": "68c177c286c34e1b7b975807dd5d9ed0"
  },
  {
    "url": "webfonts/fa-light-300.eot",
    "revision": "a06baf702fb4e2a21830fa7dfa71c0dc"
  },
  {
    "url": "webfonts/fa-light-300.svg",
    "revision": "9969a9da0ab8636ad1a428b3838757d4"
  },
  {
    "url": "webfonts/fa-light-300.ttf",
    "revision": "7f384302d16d8bf29d1549de26d0153d"
  },
  {
    "url": "webfonts/fa-light-300.woff",
    "revision": "1008b6dd09c8b71b65e7c449bf881d90"
  },
  {
    "url": "webfonts/fa-light-300.woff2",
    "revision": "20bbccf14518922fa95a440f4c217d9e"
  },
  {
    "url": "webfonts/fa-regular-400.eot",
    "revision": "df3024c0f2d296c59947567afffb0a3b"
  },
  {
    "url": "webfonts/fa-regular-400.svg",
    "revision": "416d58293e221c2b4b8f34c1531d5dfd"
  },
  {
    "url": "webfonts/fa-regular-400.ttf",
    "revision": "bd86e53df8c36e22fbba9d4e60e3c632"
  },
  {
    "url": "webfonts/fa-regular-400.woff",
    "revision": "239abe3e583864d4ab3d27c34ac37cc6"
  },
  {
    "url": "webfonts/fa-regular-400.woff2",
    "revision": "8cfe82e8c97df9ab3f52ac86af21230d"
  },
  {
    "url": "webfonts/fa-solid-900.eot",
    "revision": "11823289c2cdeaf2415c76be9c5e4a09"
  },
  {
    "url": "webfonts/fa-solid-900.svg",
    "revision": "506bcfeaad71580149d11c8fb36af219"
  },
  {
    "url": "webfonts/fa-solid-900.ttf",
    "revision": "ff4aabff5dc839470245d1e5043bdd51"
  },
  {
    "url": "webfonts/fa-solid-900.woff",
    "revision": "6a9e75ccf66ab99b14f2873840cfc01d"
  },
  {
    "url": "webfonts/fa-solid-900.woff2",
    "revision": "e57324a466c24a207fd9ad0f5f5e3c9c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https:\/\/fonts.(?:googleapis|gstatic).com\/(.*)/, workbox.strategies.cacheFirst({ "cacheName":"font-cache", plugins: [new workbox.expiration.Plugin({"maxEntries":10,"purgeOnQuotaError":false})] }), 'GET');
