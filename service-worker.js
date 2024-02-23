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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "030a951586525eee45619297dc877f82"
  },
  {
    "url": "archives/cach.html",
    "revision": "74078bdd54044be5a97b90414c0fc3f4"
  },
  {
    "url": "archives/component.html",
    "revision": "959d200a50392b2634723be306972577"
  },
  {
    "url": "archives/httpcode.html",
    "revision": "a1a812d22a42706360a733aa5a525a43"
  },
  {
    "url": "archives/index.html",
    "revision": "78d09812d94fb378d4fc8e43ec104269"
  },
  {
    "url": "archives/monitor.html",
    "revision": "4dc6553f782441a52e1607af8fb4d8b1"
  },
  {
    "url": "archives/performance.html",
    "revision": "c67a7e71644ab7e90382a7cdf4d6899a"
  },
  {
    "url": "archives/recode.html",
    "revision": "297e817899a3ceef2cecbf01d9e35d1b"
  },
  {
    "url": "archives/rtlcss.html",
    "revision": "360f67c8875978a98541d2cd15b87a2b"
  },
  {
    "url": "archives/vite.html",
    "revision": "93eb3efc141a632807ed18a481df7b6c"
  },
  {
    "url": "archives/webpack.html",
    "revision": "b1c13380ced542958ae91ad271e06a82"
  },
  {
    "url": "assets/css/0.styles.b6b82f87.css",
    "revision": "237d74640aeaba42d9e0e3b6e7f7aa15"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.f8bb34da.js",
    "revision": "35747f2559ae75f91f91f022f33b34d5"
  },
  {
    "url": "assets/js/10.fde088a2.js",
    "revision": "ac650d9efe8a8096a71ed7eec1d66c1a"
  },
  {
    "url": "assets/js/11.c62b6b34.js",
    "revision": "32811acddef58fcde432a0c5b3c632dd"
  },
  {
    "url": "assets/js/12.27d4f152.js",
    "revision": "ff95c50e9c7c4ed03032e410b506376c"
  },
  {
    "url": "assets/js/13.419d7748.js",
    "revision": "ef76c38f3a617e2e8e50f2e6432d653c"
  },
  {
    "url": "assets/js/14.eb7a3d07.js",
    "revision": "6cfc0941a1a9833db3e185cf0a550721"
  },
  {
    "url": "assets/js/15.114dfd5c.js",
    "revision": "24e40ee0f1eb3ba7fe96b622b8694a90"
  },
  {
    "url": "assets/js/16.85253907.js",
    "revision": "916954f7aef99018a2ea7a606da82326"
  },
  {
    "url": "assets/js/17.c2838453.js",
    "revision": "cfb93628d602ad7fc25579d777723e8b"
  },
  {
    "url": "assets/js/18.3256f17f.js",
    "revision": "d6f6688b7faba80c1ce3cc3b8e0687ae"
  },
  {
    "url": "assets/js/19.d8afd0ae.js",
    "revision": "a8a7da75d2c3a3e095e14079f195360c"
  },
  {
    "url": "assets/js/2.d3a12b6d.js",
    "revision": "3716a2dec6b5006dbc3068bf4fabb106"
  },
  {
    "url": "assets/js/20.0d880388.js",
    "revision": "50964e518e23d2fe908c3439070539e7"
  },
  {
    "url": "assets/js/21.33b300c9.js",
    "revision": "012fa5ee0e06f8fe48e51039c2333321"
  },
  {
    "url": "assets/js/22.4137860d.js",
    "revision": "521e5ac1f2add7207ded8fb868fbfd36"
  },
  {
    "url": "assets/js/23.b74cc977.js",
    "revision": "48bbb89cb5d822c1ea6e1db37ce656f2"
  },
  {
    "url": "assets/js/24.d99ad412.js",
    "revision": "0b7899b0444abb9777ae0e87eadf96be"
  },
  {
    "url": "assets/js/25.ca9a652b.js",
    "revision": "afe93b7a2844bbb91fe0932cd086d20d"
  },
  {
    "url": "assets/js/26.66d6bac4.js",
    "revision": "198960003d9b0ed57dd9641ce1f0d8de"
  },
  {
    "url": "assets/js/27.95990a8e.js",
    "revision": "d8970d4d734c88d2ef0e6538b8e205a3"
  },
  {
    "url": "assets/js/28.761c6ea4.js",
    "revision": "f73282072e1573a4e5ef5f7fcdc06908"
  },
  {
    "url": "assets/js/29.254ffe48.js",
    "revision": "8b1f19b68d040571e2f5dfdfbc535798"
  },
  {
    "url": "assets/js/3.af33e5d6.js",
    "revision": "68ee09bb1cce7a2bc8cdab9d1f6b6287"
  },
  {
    "url": "assets/js/30.6e4a155b.js",
    "revision": "e8eed1536b41bc56574856c59b102e24"
  },
  {
    "url": "assets/js/31.665d02a7.js",
    "revision": "3761764c4b7885baece2211202b38b6f"
  },
  {
    "url": "assets/js/32.45b461b5.js",
    "revision": "ece2d93a789a97782f0b07706cbe64db"
  },
  {
    "url": "assets/js/33.17a0771a.js",
    "revision": "f1b6adef0967d8c655d9e435368fc31c"
  },
  {
    "url": "assets/js/34.af9f8240.js",
    "revision": "fc483a1b90750036db7b0716fdbd0b95"
  },
  {
    "url": "assets/js/35.e9dd53af.js",
    "revision": "5abe7d01cb83c3a54472ca957eeb9230"
  },
  {
    "url": "assets/js/36.e900b84a.js",
    "revision": "ba106310e33348deb687fb8fea17eb8b"
  },
  {
    "url": "assets/js/37.52783c0e.js",
    "revision": "6c03975c92e0353c4db4827311a64367"
  },
  {
    "url": "assets/js/38.5cb7cb7f.js",
    "revision": "31739189f10fb26ee62cabd4d5ac4848"
  },
  {
    "url": "assets/js/39.0d72378d.js",
    "revision": "c2b96dc1ffff278ef3dd22366d4cc156"
  },
  {
    "url": "assets/js/4.0a92875f.js",
    "revision": "4d6f60693cdaf5af6f0061adec37e2b0"
  },
  {
    "url": "assets/js/40.dfcfa312.js",
    "revision": "600aa89de087f459cc36460fe7320ec7"
  },
  {
    "url": "assets/js/41.3ae8c9d7.js",
    "revision": "a1e902734242125993f96f64dccc2dd3"
  },
  {
    "url": "assets/js/42.bed07f3e.js",
    "revision": "0ee3d61e8d7e4197d0cbe99a8a808bb5"
  },
  {
    "url": "assets/js/43.170da95d.js",
    "revision": "42815f4ce72ba150939fd1e19ab4febe"
  },
  {
    "url": "assets/js/44.eec82bc0.js",
    "revision": "a536425371ee9e0082e11e3e731621f0"
  },
  {
    "url": "assets/js/45.b5a61f3a.js",
    "revision": "85333003d04fd9c558d8150e0560889c"
  },
  {
    "url": "assets/js/46.dbdb669f.js",
    "revision": "4947dec783eb9fd5005587d874d01ab4"
  },
  {
    "url": "assets/js/47.f3b25bee.js",
    "revision": "1d4904eccced0eb169ae0f176b0364de"
  },
  {
    "url": "assets/js/48.6c3ba867.js",
    "revision": "366c78236181bb24fb12e58a72d73669"
  },
  {
    "url": "assets/js/49.2c3070ea.js",
    "revision": "dcacb952c551cc4b947f6d1e89adb3b9"
  },
  {
    "url": "assets/js/5.3b9be48d.js",
    "revision": "7e306b7e89a1eacaa55e1dac99794a8d"
  },
  {
    "url": "assets/js/50.4a2a7438.js",
    "revision": "58243341483a071fac19e41c9d916379"
  },
  {
    "url": "assets/js/51.b3b493a3.js",
    "revision": "e3d7d735555341de6b84e693bac27b9b"
  },
  {
    "url": "assets/js/52.a56b61d7.js",
    "revision": "842e94c3711a5782bcd0619884d7e36a"
  },
  {
    "url": "assets/js/53.8f36ae1d.js",
    "revision": "0e1f77d8f48770abf167cb066fb77209"
  },
  {
    "url": "assets/js/54.8ee09618.js",
    "revision": "25c63cb1d4f8cb82a1457fc3813c1a64"
  },
  {
    "url": "assets/js/55.527c5d9c.js",
    "revision": "93f6da31109c4610d509bf4e7b0f68c0"
  },
  {
    "url": "assets/js/56.a09690f4.js",
    "revision": "e7d76152c93f6290137bb42ba196ac69"
  },
  {
    "url": "assets/js/57.cf4bc588.js",
    "revision": "999a8aaa49f982841a7db47efe94efb5"
  },
  {
    "url": "assets/js/58.0c8b9d19.js",
    "revision": "0f6b59e053db4df02c7d0e3776f471a4"
  },
  {
    "url": "assets/js/59.7d09c3f1.js",
    "revision": "1ce4d41cd3df6b90255e7cd8df45f342"
  },
  {
    "url": "assets/js/6.7b96ebf4.js",
    "revision": "b628c99c2dfd878ee96f7289407e79a2"
  },
  {
    "url": "assets/js/60.52e5c6db.js",
    "revision": "46d5fbd4e4b47ce3336dd97d2dc9890b"
  },
  {
    "url": "assets/js/61.afa66052.js",
    "revision": "f7ccbd18bdc9e7c0c6fbd0c2be47bbda"
  },
  {
    "url": "assets/js/62.d7a75678.js",
    "revision": "e1901edaf7c53f4f8264c992cb55e82b"
  },
  {
    "url": "assets/js/63.77765300.js",
    "revision": "5fe071dfc39f7b8c2fb042ee0ef80da3"
  },
  {
    "url": "assets/js/64.9777d386.js",
    "revision": "c247f7cf032dfa74e549a8b386ac2774"
  },
  {
    "url": "assets/js/65.deeca199.js",
    "revision": "f5deef6e9c22efc434f0235d2c6fe0c9"
  },
  {
    "url": "assets/js/66.aba723e9.js",
    "revision": "559fb137b9986b310927f060f5b940b4"
  },
  {
    "url": "assets/js/67.47b5088b.js",
    "revision": "07e98839ef967d994e0007e3742436e1"
  },
  {
    "url": "assets/js/68.3178dffd.js",
    "revision": "deb113c8261f8b6c11f27c79a3234597"
  },
  {
    "url": "assets/js/69.a0f4810a.js",
    "revision": "61da2c3c8b074852193d90955a12c9fb"
  },
  {
    "url": "assets/js/7.7e58b9c4.js",
    "revision": "68103119483a469696b1f2baba07128f"
  },
  {
    "url": "assets/js/70.5b120c62.js",
    "revision": "3cba12b9bfb0c655ac1033b3f1a6b7b7"
  },
  {
    "url": "assets/js/71.2335838f.js",
    "revision": "17dd6614d44a0307e2130ca0c60d8908"
  },
  {
    "url": "assets/js/app.43c5da00.js",
    "revision": "95304db85dc03caa6e1ba632212e6835"
  },
  {
    "url": "assets/js/vendors~docsearch.2493936b.js",
    "revision": "9e388c7d90557cbe5c5ede892e13cfec"
  },
  {
    "url": "home/index.html",
    "revision": "9f92ca5d7d683818f35388393ad4e765"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/android-chrome-maskable-192x192.png",
    "revision": "845a39478d0e2d4d5d32a092de2de250"
  },
  {
    "url": "icons/android-chrome-maskable-512x512.png",
    "revision": "2695f5feb66cdb0c6f09d0e415824cf9"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "4e857233cbd3bb2d2db4f78bed62a52f"
  },
  {
    "url": "img/500.gif",
    "revision": "8de5363ae8e8ecde9288acb54023855a"
  },
  {
    "url": "img/component.png",
    "revision": "17f037ddfee9734842d14cb6a3bac0d4"
  },
  {
    "url": "img/frame_001.png",
    "revision": "a3b282e169333caf5286adc271e3146b"
  },
  {
    "url": "img/frame_002.png",
    "revision": "47eebad7e9240193af418220b832b52e"
  },
  {
    "url": "img/frame_003.jpg",
    "revision": "826aecf416e408debd108e55495b665f"
  },
  {
    "url": "img/frame_004.png",
    "revision": "9c99fc7a06bf5ce19911719e376d1977"
  },
  {
    "url": "img/frame_mvvm.jpeg",
    "revision": "9dd95e39a3974e2717953c4f7237eded"
  },
  {
    "url": "img/frame_vuex.jpg",
    "revision": "3552070d7588005900537a892e779001"
  },
  {
    "url": "img/guitar.gif",
    "revision": "e1f0f60ae84489d733c4f50f60e42fa8"
  },
  {
    "url": "img/home.gif",
    "revision": "9948f619347d550c15b42fbf8dbdb058"
  },
  {
    "url": "img/js_01.png",
    "revision": "ad4a734f7b6c5227ed7081fdf3255c42"
  },
  {
    "url": "img/js_02.png",
    "revision": "bd191d275c7d149f56ae5f24d3e21410"
  },
  {
    "url": "img/js_mvvm.png",
    "revision": "83b426f206bc3f32d546fe06bc516c16"
  },
  {
    "url": "img/lifecycle.png",
    "revision": "1d3dae65499d59846dfbfaaa7daae963"
  },
  {
    "url": "img/logo.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "img/performance_01.png",
    "revision": "2cc8f500c8a02999507a5998a73033c2"
  },
  {
    "url": "img/performance_02.png",
    "revision": "674567bc877d137a57b9ccf27d4b3e5c"
  },
  {
    "url": "img/performance_03.png",
    "revision": "9d33308146eca2b6495066dc0235c57d"
  },
  {
    "url": "img/performance_04.png",
    "revision": "b50bd6b805eb2926026d4d4f02e5fa3c"
  },
  {
    "url": "img/performance_05.png",
    "revision": "9e77e72b0b048ff8cbc834f49ca4d2f1"
  },
  {
    "url": "img/performance_06.png",
    "revision": "fe2881612d82e6b6bdbf3443a99bb3ed"
  },
  {
    "url": "img/performance_07.png",
    "revision": "b58001e4956101c966cbd76ccb06006a"
  },
  {
    "url": "img/performance_08.png",
    "revision": "3692d5d796bbf40f0207e18989d67aff"
  },
  {
    "url": "img/performance_09.png",
    "revision": "15a22d8ff9ceb9d8172662760c4bf2d4"
  },
  {
    "url": "img/performance_10.png",
    "revision": "6b27ca7c922920c7400915172d6f864d"
  },
  {
    "url": "img/performance_11.png",
    "revision": "5b1a353541baa635f8ebea1c920ec7db"
  },
  {
    "url": "img/performance_12.png",
    "revision": "703c5c1be059588828e5b335dcadee51"
  },
  {
    "url": "img/performance_13.png",
    "revision": "d8669c358a812fea4c29c54bec2daab2"
  },
  {
    "url": "img/performance_14.png",
    "revision": "3b8e365b6b09b74fc2760420e423820b"
  },
  {
    "url": "img/process-gulp.png",
    "revision": "45826119db8b8ec22705fab160491c11"
  },
  {
    "url": "img/process-webpack.png",
    "revision": "717da6f016cb8ce19ba436f69652abde"
  },
  {
    "url": "img/recode_01.png",
    "revision": "ea99318923e1b53122d3e0cc6d68dc40"
  },
  {
    "url": "img/recode_02.png",
    "revision": "fa6d98ea1e944524a762bab6d2191045"
  },
  {
    "url": "img/recode_03.png",
    "revision": "2a64778d898881bf4bda51cdaa227867"
  },
  {
    "url": "img/recode_04.png",
    "revision": "38cff1ef7bd52bfd3797d21fe040fb55"
  },
  {
    "url": "img/recode_05.png",
    "revision": "298939a41368fdae73007dd718a94bc4"
  },
  {
    "url": "img/recode_06.png",
    "revision": "640941cb89b616a5314192448be3d87c"
  },
  {
    "url": "img/recode_07.png",
    "revision": "0a6d1ce40e576f9f33bad9b4986084f4"
  },
  {
    "url": "img/recode_08.png",
    "revision": "4c6bafc7c57aba47e9bad3b1810ab21e"
  },
  {
    "url": "img/rtl_0.jpg",
    "revision": "1672f23d9606e6be5f89dfb900ee389c"
  },
  {
    "url": "img/rtl_1.png",
    "revision": "c0c29c6db5b1e18bc577fbbe04233013"
  },
  {
    "url": "img/rtl_2.png",
    "revision": "c6f96182e3b0e0b275cb1047498f52b8"
  },
  {
    "url": "img/what-is-webpack.png",
    "revision": "f78661bef717cf2cc2c2e5158f196384"
  },
  {
    "url": "index.html",
    "revision": "49f56e9b9ab19822904c45b0c34185bb"
  },
  {
    "url": "interview/css/1.html",
    "revision": "be8aff91125fdfee851280f522d9ba5e"
  },
  {
    "url": "interview/css/2.html",
    "revision": "6ac67e64e7f568ec7b5c347e284beb1e"
  },
  {
    "url": "interview/css/3.html",
    "revision": "72f3fbf32fe1bad8f948c0466a53bdcc"
  },
  {
    "url": "interview/css/4.html",
    "revision": "9ec5c09b5eeb2f3b24938e6509e99b34"
  },
  {
    "url": "interview/css/5.html",
    "revision": "a89efe5eaa6a6a2d2db2574fe2a502b0"
  },
  {
    "url": "interview/css/6.html",
    "revision": "ccbd4c1388e2621c99d0287028fd3862"
  },
  {
    "url": "interview/frame/1.html",
    "revision": "6c55394cc3ebd3f864aaefc49a6c767f"
  },
  {
    "url": "interview/frame/2.html",
    "revision": "dd0ddc77ce6ad74d3dd2f74be3ebd601"
  },
  {
    "url": "interview/index.html",
    "revision": "e020a4e2e29513ba1d32e60da1bba253"
  },
  {
    "url": "interview/js/1.html",
    "revision": "878939a235c23514a3b69ef5da9e9c2b"
  },
  {
    "url": "interview/js/10.html",
    "revision": "e6732bb76d0f563e33484b4c5699a256"
  },
  {
    "url": "interview/js/11.html",
    "revision": "7be9ac74a679ef7bc2b7a29be3b15c4e"
  },
  {
    "url": "interview/js/12.html",
    "revision": "e8d40be6a9e45f8a73e4045437b59749"
  },
  {
    "url": "interview/js/13.html",
    "revision": "71f0bef2f915d615705b438d9797999f"
  },
  {
    "url": "interview/js/14.html",
    "revision": "1b9d7dced62754d09fdc0100ed706535"
  },
  {
    "url": "interview/js/15.html",
    "revision": "a4a05463ab2efeeca770243934498024"
  },
  {
    "url": "interview/js/16.html",
    "revision": "f4330d47ef0b6a5d2f78af31cd91b992"
  },
  {
    "url": "interview/js/17.html",
    "revision": "dd8e0e2d5d0ebe2a48dc8a0a48a550cf"
  },
  {
    "url": "interview/js/18.html",
    "revision": "9f582f71f1af7fc49b018557a22646a0"
  },
  {
    "url": "interview/js/19.html",
    "revision": "40c4be389d7092179cae6cce0b99e81b"
  },
  {
    "url": "interview/js/2.html",
    "revision": "ff80a9e0bc773d9c257df72bb6c5bbe4"
  },
  {
    "url": "interview/js/20.html",
    "revision": "6211441bb774750ee4fb737b3fcb465d"
  },
  {
    "url": "interview/js/21.html",
    "revision": "ac53b3ded2873e534edac2c18375cb35"
  },
  {
    "url": "interview/js/22.html",
    "revision": "7132982147592fa644493c22bc66c2f0"
  },
  {
    "url": "interview/js/3.html",
    "revision": "092e5a80a5e41b96adf59997ccd93e4a"
  },
  {
    "url": "interview/js/4.html",
    "revision": "0676a53fb0aab6c90db55fe22b6ab9e0"
  },
  {
    "url": "interview/js/5.html",
    "revision": "9ba6ba92afc8a1e099233297037cfe64"
  },
  {
    "url": "interview/js/6.html",
    "revision": "605f2f53f7daf2d10206011ccfc88106"
  },
  {
    "url": "interview/js/7.html",
    "revision": "b12f3f40660fa9c93d169850ab1b5abb"
  },
  {
    "url": "interview/js/8.html",
    "revision": "63ed8c3a46190771e0e155b2b8623a0f"
  },
  {
    "url": "interview/js/9.html",
    "revision": "8bfef24c5e5bb356ca54a711ed3cd216"
  },
  {
    "url": "interview/leetcode/1.html",
    "revision": "183e948218fa4b7873d69ff70cbf3b3e"
  },
  {
    "url": "interview/leetcode/2.html",
    "revision": "ef750062bf044456d95285e2374a1511"
  },
  {
    "url": "interview/leetcode/3.html",
    "revision": "c160e0c8ae1201d9f3372b7a0676d6a9"
  },
  {
    "url": "ui/guide.html",
    "revision": "6b56c39ee10aac92261c16f4b87767e5"
  },
  {
    "url": "ui/index.html",
    "revision": "3c363e6408a67124a62f6e16a7b50cdf"
  },
  {
    "url": "ui/tree.html",
    "revision": "aeb82a56d28e325693c026b5da71cbd7"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
