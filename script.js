const products = [
  { category: 'bundles', name: 'Essential Bundle (Fast Boat, 2x Money, 2x Mastery)', price: 699, icon: '📦' },
  { category: 'bundles', name: "Grinder's Bundle", price: 1979, icon: '🎒' },
  
  { category: 'gamepass', name: 'Fast Boat', price: 214, icon: '🚤' },
  { category: 'gamepass', name: '2x Boss Drops', price: 216, icon: '🎁' },
  { category: 'gamepass', name: '+1 Fruit Storage', price: 251, icon: '🍎' },
  { category: 'gamepass', name: '2x Money', price: 262, icon: '💵' },
  { category: 'gamepass', name: '2x Mastery', price: 263, icon: '⚔️' },
  { category: 'gamepass', name: 'Double Exp (6 Hours)', price: 264, icon: '⏩' },
  { category: 'gamepass', name: 'Double Exp (12 Hours)', price: 512, icon: '⏩' },
  { category: 'gamepass', name: 'Dark Blade', price: 799, icon: '🗡️' },
  { category: 'gamepass', name: 'Fruit Notifier', price: 1539, icon: '🚨' },

  { category: 'permanent', name: 'Rocket', price: 39, icon: '🚀' },
  { category: 'permanent', name: 'Spin', price: 56, icon: '🌀' },
  { category: 'permanent', name: 'Blade', price: 68, icon: '⚔️' },
  { category: 'permanent', name: 'Spring', price: 94, icon: '🌀' },
  { category: 'permanent', name: 'Bomb', price: 124, icon: '💣' },
  { category: 'permanent', name: 'Smoke', price: 174, icon: '💨' },
  { category: 'permanent', name: 'Spike', price: 217, icon: '🌵' },
  { category: 'permanent', name: 'Flame', price: 284, icon: '🔥' },
  { category: 'permanent', name: 'Ice', price: 434, icon: '🧊' },
  { category: 'permanent', name: 'Sand', price: 534, icon: '⏳' },
  { category: 'permanent', name: 'Dark', price: 549, icon: '🌑' },
  { category: 'permanent', name: 'Eagle', price: 554, icon: '🦅' },
  { category: 'permanent', name: 'Diamond', price: 562, icon: '💎' },
  { category: 'permanent', name: 'Rubber', price: 584, icon: '🎈' },
  { category: 'permanent', name: 'Light', price: 611, icon: '⭐' },
  { category: 'permanent', name: 'Ghost', price: 684, icon: '👻' },
  { category: 'permanent', name: 'Magma', price: 744, icon: '🌋' },
  { category: 'permanent', name: 'Quake', price: 799, icon: '🌊' },
  { category: 'permanent', name: 'Buddha', price: 965, icon: '🧘' },
  { category: 'permanent', name: 'Love', price: 984, icon: '💖' },
  { category: 'permanent', name: 'Creation', price: 991, icon: '🎨' },
  { category: 'permanent', name: 'Spider', price: 1019, icon: '🕷️' },
  { category: 'permanent', name: 'Sound', price: 1041, icon: '🔊' },
  { category: 'permanent', name: 'Phoenix', price: 1124, icon: '🐦' },
  { category: 'permanent', name: 'Mammoth', price: 1174, icon: '🐘' },
  { category: 'permanent', name: 'T-Rex', price: 1179, icon: '🦖' },
  { category: 'permanent', name: 'Blizzard', price: 1179, icon: '❄️' },
  { category: 'permanent', name: 'Portal', price: 1239, icon: '🌀' },
  { category: 'permanent', name: 'Pain', price: 1294, icon: '💥' },
  { category: 'permanent', name: 'Shadow', price: 1299, icon: '👥' },
  { category: 'permanent', name: 'Gravity', price: 1312, icon: '🪐' },
  { category: 'permanent', name: 'Lightning', price: 1349, icon: '⚡' },
  { category: 'permanent', name: 'Venom', price: 1399, icon: '🐍' },
  { category: 'permanent', name: 'Gas', price: 1479, icon: '☁️' },
  { category: 'permanent', name: 'Spirit', price: 1499, icon: '👻' },
  { category: 'permanent', name: 'Dough', price: 1529, icon: '🍩' },
  { category: 'permanent', name: 'Yeti', price: 1721, icon: '❄️' },
  { category: 'permanent', name: 'Tiger', price: 1724, icon: '🐅' }
];

let currentSelectedPrice = 214;

const translations = {
  en: {
    publisher: "Publisher: Roblox", delivery: "⚡ DELIVERY IN 24 HOURS", secure: "🛡 SECURE",
    support: "🎧 24/7 SUPPORT", price: "💲 BEST PRICE", verify: "Verify Account",
    howto: "HOW TO PURCHASE", playerid: "PLAYER ID", placeholder: "Enter PLAYER ID",
    hint: "Enter your Roblox Player ID to auto-validate", tabAll: "All Packs",
    tabBundles: "Bundles", tabGamepass: "Gamepass", tabPermanent: "Permanent Fruits", selectProd: "Select Product",
    couponTitle: "HAVE A COUPON CODE?", couponPlaceholder: "ENTER COUPON CODE", apply: "APPLY",
    payMethodTitle: "SELECT PAYMENT METHOD", wallet: "WALLET", totalLabel: "TOTAL PAYABLE",
    payVia: "PAYMENT VIA", proceedPay: "PROCEED TO PAY ⚡", secureTrans: "SECURE ENCRYPTED TRANSACTION",
    newsTitle: "Don't miss our latest News", newsEmail: "Email address", subscribe: "Subscribe",
    disclaimer: "Blox Fruit Hub is the premier marketplace for acquiring exclusive and high-quality Roblox items. Enjoy lightning-fast delivery, secure payments, and a trusted service that has helped thousands of gamers enhance their experience.<br/><br/>Blox Fruit Hub is not affiliated with Roblox Corporation. All in-game assets are the property of their respective owners.",
    pagesTitle: "All Pages", home: "Home", store: "Store", socialTitle: "Social Media", productsTitle: "Products"
  },
  hi: {
    publisher: "प्रकाशक: Roblox", delivery: "⚡ 24 घंटे में डिलीवरी", secure: "🛡 सुरक्षित",
    support: "🎧 24/7 सहायता", price: "💲 सर्वोत्तम मूल्य", verify: "खाता सत्यापित करें",
    howto: "खरीदारी कैसे करें", playerid: "प्लेयर आईडी", placeholder: "प्लेयर आईडी दर्ज करें",
    hint: "सत्यापित करने के लिए अपना रोबोलोक्स आईडी दर्ज करें", tabAll: "सभी पैक",
    tabBundles: "बंडल", tabGamepass: "गेमपास", tabPermanent: "स्थायी फल", selectProd: "उत्पाद चुनें",
    couponTitle: "क्या आपके पास कूपन कोड है?", couponPlaceholder: "कूपन कोड दर्ज करें", apply: "लागू करें",
    payMethodTitle: "भुगतान का तरीका चुनें", wallet: "वॉलेट", totalLabel: "कुल देय राशि",
    payVia: "के माध्यम से भुगतान", proceedPay: "भुगतान करने के लिए आगे बढ़ें ⚡", secureTrans: "सुरक्षित एन्क्रिप्टेड लेनदेन",
    newsTitle: "हमारे नवीनतम समाचार न चूकें", newsEmail: "ईमेल पता", subscribe: "सदस्यता लें",
    disclaimer: "ब्लॉक्स फ्रूट हब विशेष और उच्च गुणवत्ता वाले रोबोलोक्स आइटम प्राप्त करने का प्रमुख मंच है। तेज डिलीवरी और सुरक्षित भुगतान का आनंद लें।",
    pagesTitle: "सभी पृष्ठ", home: "होम", store: "स्टोर", socialTitle: "सोशल मीडिया", productsTitle: "उत्पाद"
  },
  es: {
    publisher: "Publicador: Roblox", delivery: "⚡ ENTREGA EN 24 HORAS", secure: "🛡 SEGURO",
    support: "🎧 SOPORTE 24/7", price: "💲 MEJOR PRECIO", verify: "Verificar Cuenta",
    howto: "CÓMO COMPRAR", playerid: "ID DE JUGADOR", placeholder: "Ingrese ID de jugador",
    hint: "Ingrese su ID de jugador de Roblox para validar", tabAll: "Todos los packs",
    tabBundles: "Paquetes", tabGamepass: "Pase de juego", tabPermanent: "Frutas permanentes", selectProd: "Seleccionar producto",
    couponTitle: "¿TIENES UN CÓDIGO DE CUPÓN?", couponPlaceholder: "INGRESAR CÓDIGO DE CUPÓN", apply: "APLICAR",
    payMethodTitle: "SELECCIONAR MÉTODO DE PAGO", wallet: "BILLETERA", totalLabel: "TOTAL A PAGAR",
    payVia: "PAGO VÍA", proceedPay: "PROCEDER AL PAGO ⚡", secureTrans: "TRANSACCIÓN ENCRIPTADA SEGURA",
    newsTitle: "No te pierdas nuestras últimas noticias", newsEmail: "Correo electrónico", subscribe: "Suscribirse",
    disclaimer: "Blox Fruit Hub es el mercado principal para adquirir artículos exclusivos y de alta calidad de Roblox.",
    pagesTitle: "Todas las páginas", home: "Inicio", store: "Tienda", socialTitle: "Redes Sociales", productsTitle: "Productos"
  }
};

function selectProduct(price, cardElement) {
  currentSelectedPrice = price;
  document.getElementById('total-price-display').innerText = `₹${price}`;
  document.querySelectorAll('.product-card').forEach(card => card.classList.remove('selected'));
  cardElement.classList.add('selected');
}

function renderProducts(filter = 'gamepass') {
  const grid = document.getElementById('productGrid');
  if (!grid) return;
  grid.innerHTML = '';
  const list = filter === 'all' ? products : products.filter(p => p.category === filter);
  
  list.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card';
    if (p.price === currentSelectedPrice) card.classList.add('selected');
    card.onclick = () => selectProduct(p.price, card);
    card.innerHTML = `
      <div class="product-icon">${p.icon}</div>
      <div class="product-name">${p.name}</div>
      <button class="price-btn">₹${p.price}</button>
    `;
    grid.appendChild(card);
  });
}

function filterCategory(category, element) {
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  element.classList.add('active');
  renderProducts(category);
}

function changeLanguage() {
  const lang = document.getElementById('langSelect').value;
  const t = translations[lang] || translations.en;
  
  document.getElementById('txt-publisher').innerText = t.publisher;
  document.getElementById('badge-delivery').innerText = t.delivery;
  document.getElementById('badge-secure').innerText = t.secure;
  document.getElementById('badge-support').innerText = t.support;
  document.getElementById('badge-price').innerText = t.price;
  document.getElementById('txt-verify-title').innerText = t.verify;
  document.getElementById('btn-how-to').innerText = t.howto;
  document.getElementById('lbl-player-id').innerText = t.playerid;
  document.getElementById('input-player-id').placeholder = t.placeholder;
  document.getElementById('txt-hint').innerText = t.hint;
  document.getElementById('tab-all').innerText = t.tabAll;
  document.getElementById('tab-bundles').innerText = t.tabBundles;
  document.getElementById('tab-gamepass').innerText = t.tabGamepass;
  document.getElementById('tab-permanent').innerText = t.tabPermanent;
  document.getElementById('txt-select-prod').innerText = t.selectProd;
  document.getElementById('txt-coupon-title').innerText = t.couponTitle;
  document.getElementById('coupon-input').placeholder = t.couponPlaceholder;
  document.getElementById('btn-apply').innerText = t.apply;
  document.getElementById('txt-pay-method-title').innerText = t.payMethodTitle;
  document.getElementById('txt-wallet').innerText = t.wallet;
  document.getElementById('txt-total-label').innerText = t.totalLabel;
  document.getElementById('txt-via').innerText = t.payVia;
  document.getElementById('btn-proceed').innerText = t.proceedPay;
  document.getElementById('txt-secure-trans').innerText = t.secureTrans;
  document.getElementById('txt-news-title').innerText = t.newsTitle;
  document.getElementById('news-email').placeholder = t.newsEmail;
  document.getElementById('btn-subscribe').innerText = t.subscribe;
  document.getElementById('txt-disclaimer').innerHTML = t.disclaimer;
  document.getElementById('txt-pages-title').innerText = t.pagesTitle;
  document.getElementById('link-home').innerText = t.home;
  document.getElementById('link-store').innerText = t.store;
  document.getElementById('txt-social-title').innerText = t.socialTitle;
  document.getElementById('txt-products-title').innerText = t.productsTitle;
}

document.addEventListener('DOMContentLoaded', () => {
  renderProducts('gamepass');
});

