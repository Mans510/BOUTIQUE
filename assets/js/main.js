/**
 * MANS BOUTIQUE — Haute Couture & Bespoke Ethnic Wear
 * Frontend Interactive Controller & E-Commerce Logic
 */

(function () {
  'use strict';

  // =========================================================================
  // State & Configuration
  // =========================================================================
  const BoutiqueConfig = {
    // Configurable WhatsApp Phone Number
    whatsappNumber: localStorage.getItem('mans_boutique_wa') || '919988133566',
    boutiqueName: 'MANS BOUTIQUE',
    address: '3344/1, Street No. 4, Chet Singh Nagar, Gill Road, Ludhiana, Punjab',
    phoneDisplay: '+91 99881 33566',
    instagramHandle: '@manasboutique3344',
    socialLinks: {
      instagram: 'https://instagram.com/manasboutique3344',
      whatsapp: 'https://wa.me/919988133566'
    }
  };

  // Product Database (Built purely from authentic uploaded garments)
  const products = [
    {
      id: 'mb-01',
      title: 'The Royal Emerald Zardozi Blouse',
      category: 'blouses',
      categoryLabel: 'Bridal & Designer Blouses',
      tag: 'Signature Couture',
      image: 'assets/images/emerald-velvet-blouse.jpg',
      alt: 'Handcrafted Emerald Velvet Zardozi Blouse on hanger',
      price: 'Stitching: ₹ 600',
      priceNote: 'Official Price List • Hand Zardozi / Piping Extra',
      shortSpecs: 'Pure bottle green micro-velvet • Hand Zardozi & Zari embroidery • Beaded Latkans',
      description: 'An exemplary masterwork in emerald green micro-velvet featuring dense gold floral zardozi vine embroidery, elegant deep V-sweetheart neck, and handmade back tie-up latkans adorned with pearls and golden beads. Tailored with premium satin lining and custom padding.',
      specs: {
        'Fabric': 'Premium Micro-Velvet & Pure Silk Satin Lining',
        'Embroidery': 'Handcrafted Zardozi, Resham & Zari Work',
        'Neckline': 'Sweetheart Front, Deep Back with Dori Latkans',
        'Stitching Base Rate': '₹ 600 (Blouse as per Official Price List)',
        'Customization': 'Sleeve length, padding & back cut customizable',
        'Delivery Time': '7–12 Days for Custom Stitching'
      }
    },
    {
      id: 'mb-02',
      title: 'The Sapphire Cowl Velvet Draped Tunic',
      category: 'velvet-sets',
      categoryLabel: 'Velvet Tunics & Sets',
      tag: 'Festive Runway',
      image: 'assets/images/royal-blue-velvet-mannequin.jpg',
      alt: 'Royal Blue Velvet draped designer outfit with floral organza dupatta on boutique mannequin',
      price: 'Stitching: ₹ 1,300',
      priceNote: 'Full Lining Suit Rate • Pant with Zip: +₹100',
      shortSpecs: 'Crushed royal sapphire velvet • Cowl drape neckline • Scalloped floral hem & organza dupatta',
      description: 'A contemporary silhouette crafted in crushed royal sapphire velvet with fluid cowl draping across the bodice, finished with an artisan scalloped floral embroidered hemline. Complemented by an airy ivory organza dupatta with intricate blue floral border work.',
      specs: {
        'Fabric': 'Crushed Silk-Velvet with Pure Organza Silk Dupatta',
        'Craft': 'Artisan Hand-Cut Scallop Embroidery & Cowl Draping',
        'Silhouette': 'Draped Tunic Dress with Contrast Border',
        'Pairing': 'Includes Embroidered Organza Dupatta',
        'Stitching Base Rate': '₹ 1,300 (Full Lining Suit)',
        'Delivery Time': '10–14 Days for Custom Made-to-Measure'
      }
    },
    {
      id: 'mb-03',
      title: 'The Imperial Crimson Velvet Ensemble',
      category: 'festive',
      categoryLabel: 'Festive & Party Wear',
      tag: 'Heirloom Velvet',
      image: 'assets/images/maroon-velvet-rack-detail.jpg',
      alt: 'Crimson maroon velvet tunic with gold borders and pearl drop tassels',
      price: 'Stitching: ₹ 1,300',
      priceNote: 'Full Lining Rate • Pant with Zip: +₹100 • Lace: +₹250',
      shortSpecs: 'Rich wine maroon velvet • Heavy antique gold zari border • Pearl drop tassel trims',
      description: 'A regal wine maroon velvet ensemble featuring artisanal antique gold threadwork along the border and neckline, finished with handcrafted pearl fringe tassels. Paired with coordinating velvet dhoti trousers or raw silk pants.',
      specs: {
        'Fabric': 'Pure Royal Maroon Micro-Velvet',
        'Work': 'Intricate Zari Border & Pearl Latkan Fringe',
        'Style': 'Straight Kurta with Royal Blue Velvet Dhoti Pants',
        'Stitching Base Rate': '₹ 1,300 (Full Lining Suit) | Pant with Zip: +₹100',
        'Fitting': 'Bespoke Measurements Tailored at Atelier',
        'Delivery Time': '10–15 Days'
      }
    },
    {
      id: 'mb-04',
      title: 'The Olive Heritage Embroidered Caftan Kurti',
      category: 'festive',
      categoryLabel: 'Festive & Party Wear',
      tag: 'New Edition',
      image: 'assets/images/olive-velvet-rack-detail.jpg',
      alt: 'Olive green velvet embroidered caftan kurta with antique gold neckline',
      price: 'Stitching: ₹ 900',
      priceNote: 'Half Lining Suit Rate • Piping: +₹150',
      shortSpecs: 'Deep olive green velvet • Rich antique gold neckline motif • Side slit embellishments',
      description: 'Exquisitely tailored in deep olive green velvet featuring a grand Mughal-inspired antique gold yoke embroidery, hand-finished cuffs, and delicate gold hem accents. Ideal for royal winter weddings and festive soirees.',
      specs: {
        'Fabric': 'Heritage Olive Green Velvet',
        'Work': 'Mughal Antique Zari & Tilla Embroidery',
        'Cut': 'A-Line Caftan Silhouette with Flared Sleeves',
        'Stitching Base Rate': '₹ 900 (Half Lining) / ₹ 1,300 (Full Lining)',
        'Lining': 'Breathable Soft Silk Mulmul',
        'Delivery Time': '8–12 Days'
      }
    },
    {
      id: 'mb-05',
      title: 'Handcrafted Latkan Pearl Detail Blouse',
      category: 'blouses',
      categoryLabel: 'Bridal & Designer Blouses',
      tag: 'Karigar Special',
      image: 'assets/images/emerald-blouse-tassel-detail.jpg',
      alt: 'Macro close-up of emerald velvet blouse neckline and handmade pearl latkans',
      price: 'Stitching: ₹ 600',
      priceNote: 'Blouse Base Rate • Custom Latkans & Piping Extra',
      shortSpecs: 'Artisanal clustered pearls • Gold gota cord dori • Intricate botanical vine embroidery',
      description: 'A dedicated showcase of our karigars craftsmanship. This piece emphasizes the bespoke back neckline featuring hand-spun gold dori with clustered freshwater pearl drops and miniature embroidered floral charms.',
      specs: {
        'Tassel Craft': 'Handmade Clustered Pearls & Gold Jhumki Latkans',
        'Body': 'Pure Emerald Velvet with All-Over Floral Bootis',
        'Custom Fit': 'Built-in Canvas, Bones & Export-Grade Padding',
        'Stitching Base Rate': '₹ 600 (Blouse Rate Card)',
        'Options': 'Available in Maroon, Navy, Emerald & Black Velvet',
        'Delivery Time': '7–10 Days'
      }
    },
    {
      id: 'mb-06',
      title: 'The Azure & Floral Scallop Draped Set',
      category: 'velvet-sets',
      categoryLabel: 'Velvet Tunics & Sets',
      tag: 'Atelier Favorite',
      image: 'assets/images/royal-blue-hem-detail.jpg',
      alt: 'Scalloped floral embroidery hemline and organza border detail',
      price: 'Stitching: ₹ 1,800',
      priceNote: 'Kalidaar Suit Rate • Lehnga: ₹3,600',
      shortSpecs: 'Hand-scalloped hemline • Navy threadwork on ivory base • Royal blue crushed velvet body',
      description: 'Features our signature two-tone contrast hemline where intricate midnight blue floral vine embroidery borders an ivory base with delicate cutout scallops. Designed to create visual movement as you walk.',
      specs: {
        'Detail': 'Precision Cutwork Scallop Hem with Resham Stitching',
        'Dupatta': 'Scalloped Border Organza Silk Veil',
        'Silhouette': 'Indo-Western Draped Kurti Dress',
        'Stitching Base Rate': '₹ 1,800 (Kalidaar Suit) | Lehnga: ₹ 3,600',
        'Occasion': 'Cocktail, Sangeet & Reception Wear',
        'Delivery Time': '10–14 Days'
      }
    }
  ];

  // Gallery Database (All authentic photographs & detail crops)
  const galleryItems = [
    {
      id: 'gal-01',
      title: 'MANS BOUTIQUE Haute Couture Emblem',
      category: 'studio',
      categoryLabel: 'Brand Identity',
      image: 'assets/images/mans-boutique-logo.jpg',
      alt: 'Official gold embossed 3D logo of MANS BOUTIQUE on rich burgundy leather',
      span: 'gallery-col-4',
      description: 'The golden seal of MANS BOUTIQUE — representing bespoke tailoring, regal Indian craftsmanship, and luxury fashion design.'
    },
    {
      id: 'gal-02',
      title: 'Handcrafted Emerald Velvet Zardozi Blouse',
      category: 'blouses',
      categoryLabel: 'Bridal Blouses',
      image: 'assets/images/emerald-velvet-blouse.jpg',
      alt: 'Emerald velvet blouse with heavy gold zardozi embroidery and hanging pearl latkans',
      span: 'gallery-col-4',
      description: 'Our signature bottle green velvet blouse crafted with generations-old zardozi techniques and artisan back dori tassels.'
    },
    {
      id: 'gal-03',
      title: 'Royal Blue Velvet Mannequin Silhouette',
      category: 'outfits',
      categoryLabel: 'Velvet Couture',
      image: 'assets/images/royal-blue-velvet-mannequin.jpg',
      alt: 'Crushed royal blue velvet cowl dress with floral dupatta on boutique mannequin',
      span: 'gallery-col-4',
      description: 'A striking crushed velvet drape paired with an embroidered organza dupatta inside the MANS BOUTIQUE studio.'
    },
    {
      id: 'gal-04',
      title: 'The Atelier Showroom & Couture Studio',
      category: 'studio',
      categoryLabel: 'Showroom Interior',
      image: 'assets/images/boutique-showroom-interior.jpg',
      alt: 'Boutique atelier interior with hardwood floors, mannequins, colorful silk curtains and styling seating',
      span: 'gallery-col-8',
      description: 'An intimate atelier experience featuring warm hardwood floors, dressing mirrors, private client styling benches, and rainbow silk drape installations.'
    },
    {
      id: 'gal-05',
      title: 'Curated Designer Rack & Heirloom Velvets',
      category: 'outfits',
      categoryLabel: 'Curated Rail',
      image: 'assets/images/boutique-curated-rack.jpg',
      alt: 'Curated boutique rail showing rich velvet and silk ensembles on wooden hangers',
      span: 'gallery-col-4',
      description: 'Hand-selected velvet tunics in royal crimson, sapphire blue, mint silk, and olive caftans on display in our atelier.'
    },
    {
      id: 'gal-06',
      title: 'Artisanal Pearl Latkans & Neckline Close-Up',
      category: 'blouses',
      categoryLabel: 'Embroidery Detail',
      image: 'assets/images/emerald-blouse-tassel-detail.jpg',
      alt: 'High resolution close-up of handmade pearl drop tassels and zari neckline',
      span: 'gallery-col-4',
      description: 'Macro view of our handcrafted latkan tassels with pearl drops and intricate metallic zari borders.'
    },
    {
      id: 'gal-07',
      title: 'Precision Scalloped Hemline Detail',
      category: 'outfits',
      categoryLabel: 'Craftsmanship',
      image: 'assets/images/royal-blue-hem-detail.jpg',
      alt: 'Macro view of scalloped hem with navy floral embroidery',
      span: 'gallery-col-4',
      description: 'Hand-cut floral scallop hemline exhibiting flawless tension and thread density on contrasting ivory fabric.'
    },
    {
      id: 'gal-08',
      title: 'Imperial Crimson Velvet Zari Border',
      category: 'outfits',
      categoryLabel: 'Festive Velvet',
      image: 'assets/images/maroon-velvet-rack-detail.jpg',
      alt: 'Crimson maroon velvet tunic with antique gold border detail',
      span: 'gallery-col-4',
      description: 'Rich wine velvet highlighted with antique gold zari weave and delicate hanging fringe.'
    },
    {
      id: 'gal-09',
      title: 'Real Patron Look: Ruby Silk Flared Tunic & Paisley Dhoti',
      category: 'outfits',
      categoryLabel: 'Customer Review',
      image: 'assets/images/client-review-standing.jpg',
      alt: 'Customer review standing photo wearing custom ruby red silk flared top and paisley dhoti pants',
      span: 'gallery-col-6',
      description: 'A radiant MANS BOUTIQUE patron wearing our bespoke ruby red silk flared tunic paired with gathered paisley dhoti trousers at a grand entrance.'
    },
    {
      id: 'gal-10',
      title: 'Real Patron Look: Evening Soirée Lounge Portrait',
      category: 'outfits',
      categoryLabel: 'Customer Review',
      image: 'assets/images/client-review-seated.jpg',
      alt: 'Customer review seated photo in custom ruby silk attire with golden potli',
      span: 'gallery-col-6',
      description: 'Customer review portrait showcasing our custom ruby silk silhouette styled with heirloom jhumkas and an embellished golden potli bag.'
    },
    {
      id: 'gal-11',
      title: 'Official Stitching Price List & Rate Card',
      category: 'studio',
      categoryLabel: 'Price List',
      image: 'assets/images/stitching-price-list.jpg',
      alt: 'MANS BOUTIQUE Official Stitching Price List poster with rates for Suits, Blouses, Sarees and Lehengas',
      span: 'gallery-col-6',
      description: 'The authentic in-studio Stitching Price List poster of MANS BOUTIQUE detailing tailoring rates for simple suits, lining suits, kalidaar, lehengas, and blouses.'
    }
  ];

  // =========================================================================
  // WhatsApp Integration Helper
  // =========================================================================
  function getWhatsAppUrl(customMessage) {
    const cleanPhone = BoutiqueConfig.whatsappNumber.replace(/[^0-9]/g, '');
    const encoded = encodeURIComponent(customMessage || `Hello ${BoutiqueConfig.boutiqueName}, I would like to enquire about your haute couture collection.`);
    return `https://wa.me/${cleanPhone}?text=${encoded}`;
  }

  function launchWhatsApp(message) {
    const url = getWhatsAppUrl(message);
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  // =========================================================================
  // Toast Notifications
  // =========================================================================
  function showToast(message, icon) {
    let container = document.getElementById('toastContainer');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toastContainer';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast-message';
    toast.innerHTML = `<span>${icon || '✨'}</span><span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3800);
  }

  // =========================================================================
  // Header, Sticky Scroll & Mobile Navigation
  // =========================================================================
  function initNavigation() {
    const header = document.querySelector('.site-header');
    const toggleBtn = document.getElementById('mobileNavToggle');
    const drawer = document.getElementById('mobileDrawer');
    const overlay = document.getElementById('mobileDrawerOverlay');
    const navLinks = document.querySelectorAll('.desktop-nav .nav-link, .mobile-nav-link');
    const backToTopBtn = document.getElementById('backToTopBtn');

    // Sticky header shadow & back-to-top visibility
    window.addEventListener('scroll', () => {
      const scrollPos = window.scrollY;
      if (scrollPos > 60) {
        header?.classList.add('scrolled');
      } else {
        header?.classList.remove('scrolled');
      }

      if (scrollPos > 500) {
        backToTopBtn?.classList.add('visible');
      } else {
        backToTopBtn?.classList.remove('visible');
      }
    });

    // Mobile Drawer Toggle
    function toggleDrawer(open) {
      const shouldOpen = open !== undefined ? open : !drawer.classList.contains('open');
      drawer?.classList.toggle('open', shouldOpen);
      overlay?.classList.toggle('open', shouldOpen);
      toggleBtn?.classList.toggle('open', shouldOpen);
      document.body.style.overflow = shouldOpen ? 'hidden' : '';
    }

    toggleBtn?.addEventListener('click', () => toggleDrawer());
    overlay?.addEventListener('click', () => toggleDrawer(false));

    // Close on mobile link click
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => toggleDrawer(false));
    });

    // Back to top click
    backToTopBtn?.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Escape key closes modals and drawer
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        toggleDrawer(false);
        closeLightbox();
        closeQuickView();
        closeWaSettings();
      }
    });
  }

  // =========================================================================
  // Products Rendering & Category Filtering
  // =========================================================================
  function renderProducts(filterCategory = 'all') {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;

    const filtered = filterCategory === 'all'
      ? products
      : products.filter(p => p.category === filterCategory);

    grid.innerHTML = filtered.map(item => `
      <article class="product-card" data-id="${item.id}" data-category="${item.category}">
        <div class="product-img-box" onclick="window.BoutiqueApp.openQuickView('${item.id}')">
          <img src="${item.image}" alt="${item.alt}" loading="lazy">
          <span class="product-tag-chip">${item.tag}</span>
          <button class="product-quick-view-btn" aria-label="Quick View ${item.title}">
            <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
            Quick View
          </button>
        </div>
        <div class="product-info">
          <span class="product-category">${item.categoryLabel}</span>
          <h3 class="product-title">${item.title}</h3>
          <p class="product-specs">${item.shortSpecs}</p>
          <div class="product-price-row">
            <span class="product-price">${item.price}</span>
            <span class="product-availability">Catalogue Available</span>
          </div>
          <div class="product-actions">
            <button class="btn btn-outline-gold btn-sm" onclick="window.BoutiqueApp.openQuickView('${item.id}')">
              Details
            </button>
            <button class="btn btn-whatsapp btn-sm" onclick="window.BoutiqueApp.enquireProduct('${item.id}')">
              <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.025 3.312l-.704 2.58 2.65-.694c.983.541 1.879.82 2.797.82 3.183 0 5.768-2.587 5.769-5.766.001-3.182-2.585-5.769-5.769-5.768zm0 10.372c-.836 0-1.656-.226-2.373-.655l-.17-.101-1.761.462.47-1.722-.111-.177c-.47-.746-.718-1.616-.717-2.512.001-2.535 2.064-4.598 4.601-4.598 2.535 0 4.598 2.063 4.599 4.598 0 2.536-2.064 4.605-4.509 4.605z"/></svg>
              Price &amp; Details
            </button>
          </div>
        </div>
      </article>
    `).join('');
  }

  function initProductFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filterVal = btn.getAttribute('data-filter') || 'all';
        renderProducts(filterVal);
      });
    });
  }

  // =========================================================================
  // Product Quick View Modal
  // =========================================================================
  function openQuickView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const modal = document.getElementById('quickViewModal');
    const container = document.getElementById('quickViewContainer');
    if (!modal || !container) return;

    const specsHtml = Object.entries(product.specs).map(([key, val]) => `
      <div class="quickview-specs-item">
        <strong>${key}:</strong>
        <span>${val}</span>
      </div>
    `).join('');

    container.innerHTML = `
      <div class="quickview-gallery">
        <img src="${product.image}" alt="${product.alt}">
      </div>
      <div class="quickview-content">
        <span class="quickview-category">${product.categoryLabel}</span>
        <h2 class="quickview-title">${product.title}</h2>
        <div class="quickview-price-row">
          <span class="quickview-price">${product.price}</span>
          <span class="quickview-meta">${product.priceNote}</span>
        </div>
        <p class="quickview-desc">${product.description}</p>
        
        <div class="quickview-specs-list">
          ${specsHtml}
        </div>

        <div class="quickview-actions">
          <button class="btn btn-whatsapp" onclick="window.BoutiqueApp.enquireProduct('${product.id}')">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.025 3.312l-.704 2.58 2.65-.694c.983.541 1.879.82 2.797.82 3.183 0 5.768-2.587 5.769-5.766.001-3.182-2.585-5.769-5.769-5.768zm0 10.372c-.836 0-1.656-.226-2.373-.655l-.17-.101-1.761.462.47-1.722-.111-.177c-.47-.746-.718-1.616-.717-2.512.001-2.535 2.064-4.598 4.601-4.598 2.535 0 4.598 2.063 4.599 4.598 0 2.536-2.064 4.605-4.509 4.605z"/></svg>
            Request Price Catalogue on WhatsApp
          </button>
          <button class="btn btn-outline-gold" onclick="window.BoutiqueApp.bookAtelierAppointment('${product.title}')">
            Book In-Studio Fitting for this Piece
          </button>
        </div>
      </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeQuickView() {
    const modal = document.getElementById('quickViewModal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  function enquireProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    const msg = `Hello ${BoutiqueConfig.boutiqueName}! I would like to enquire about "${product.title}" (${product.categoryLabel}). Could you please share the price catalogue, fabric customization options, and bespoke sizing details?`;
    launchWhatsApp(msg);
  }

  // =========================================================================
  // Gallery Rendering & Lightbox
  // =========================================================================
  let currentLightboxIndex = 0;

  function renderGallery(filterCategory = 'all') {
    const grid = document.getElementById('galleryGrid');
    if (!grid) return;

    const filtered = filterCategory === 'all'
      ? galleryItems
      : galleryItems.filter(item => item.category === filterCategory);

    grid.innerHTML = filtered.map((item, idx) => `
      <div class="gallery-item ${item.span}" onclick="window.BoutiqueApp.openLightbox(${idx})">
        <img src="${item.image}" alt="${item.alt}" loading="lazy">
        <div class="gallery-overlay">
          <span class="gallery-overlay-tag">${item.categoryLabel}</span>
          <h4 class="gallery-overlay-title">${item.title}</h4>
          <span class="gallery-view-hint">
            <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"/></svg>
            Click to expand in high-res
          </span>
        </div>
      </div>
    `).join('');
  }

  function openLightbox(index) {
    currentLightboxIndex = index;
    const modal = document.getElementById('lightboxModal');
    if (!modal) return;

    updateLightboxView();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function openLightboxByImage(imgSrc) {
    const idx = galleryItems.findIndex(item => item.image.includes(imgSrc));
    if (idx !== -1) {
      openLightbox(idx);
    } else {
      openLightbox(0);
    }
  }

  function updateLightboxView() {
    const item = galleryItems[currentLightboxIndex];
    if (!item) return;

    const img = document.getElementById('lightboxImg');
    const counter = document.getElementById('lightboxCounter');
    const title = document.getElementById('lightboxTitle');
    const desc = document.getElementById('lightboxDesc');
    const waBtn = document.getElementById('lightboxWaBtn');

    if (img) {
      img.src = item.image;
      img.alt = item.alt;
      img.classList.remove('zoomed');
    }
    if (counter) counter.textContent = `${currentLightboxIndex + 1} / ${galleryItems.length}`;
    if (title) title.textContent = item.title;
    if (desc) desc.textContent = item.description;

    if (waBtn) {
      waBtn.onclick = () => {
        const msg = `Hello ${BoutiqueConfig.boutiqueName}, I am admiring this photograph from your gallery: "${item.title}". I would love to know more about this look or commission a similar bespoke design!`;
        launchWhatsApp(msg);
      };
    }
  }

  function nextLightbox() {
    currentLightboxIndex = (currentLightboxIndex + 1) % galleryItems.length;
    updateLightboxView();
  }

  function prevLightbox() {
    currentLightboxIndex = (currentLightboxIndex - 1 + galleryItems.length) % galleryItems.length;
    updateLightboxView();
  }

  function toggleLightboxZoom() {
    const img = document.getElementById('lightboxImg');
    if (img) img.classList.toggle('zoomed');
  }

  function closeLightbox() {
    const modal = document.getElementById('lightboxModal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
      const img = document.getElementById('lightboxImg');
      if (img) img.classList.remove('zoomed');
    }
  }

  function initGalleryEvents() {
    document.getElementById('lightboxPrevBtn')?.addEventListener('click', prevLightbox);
    document.getElementById('lightboxNextBtn')?.addEventListener('click', nextLightbox);
    document.getElementById('lightboxCloseBtn')?.addEventListener('click', closeLightbox);
    document.getElementById('lightboxImg')?.addEventListener('click', toggleLightboxZoom);

    // Keyboard navigation
    window.addEventListener('keydown', (e) => {
      const modal = document.getElementById('lightboxModal');
      if (modal?.classList.contains('active')) {
        if (e.key === 'ArrowRight') nextLightbox();
        if (e.key === 'ArrowLeft') prevLightbox();
        if (e.key === 'z' || e.key === 'Z') toggleLightboxZoom();
      }
    });

    // Gallery Category Buttons
    const galFilterButtons = document.querySelectorAll('.gallery-filter-btn');
    galFilterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        galFilterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filterVal = btn.getAttribute('data-gallery-filter') || 'all';
        renderGallery(filterVal);
      });
    });
  }

  // =========================================================================
  // Contact & Bespoke Appointment Booking Form
  // =========================================================================
  function initContactForm() {
    const form = document.getElementById('consultationForm');
    const msgTextarea = document.getElementById('formMessage');
    const charCounter = document.getElementById('charCount');
    const banner = document.getElementById('formSuccessBanner');

    // Live character counter
    msgTextarea?.addEventListener('input', () => {
      if (charCounter) charCounter.textContent = `${msgTextarea.value.length} / 500 characters`;
    });

    form?.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('formName')?.value.trim();
      const phone = document.getElementById('formPhone')?.value.trim();
      const email = document.getElementById('formEmail')?.value.trim() || 'Not provided';
      const service = document.getElementById('formService')?.value || 'Bespoke Consultation';
      const date = document.getElementById('formDate')?.value || 'As soon as possible';
      const notes = document.getElementById('formMessage')?.value.trim() || 'General enquiry';

      if (!name || !phone) {
        alert('Please provide your name and WhatsApp/contact phone number.');
        return;
      }

      // Show success feedback
      if (banner) {
        banner.classList.add('active');
        banner.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }

      showToast(`Thank you, ${name}! Your consultation request has been submitted.`, '💌');

      // Pre-fill WhatsApp message option
      const appointmentMsg = `*New Consultation Request — ${BoutiqueConfig.boutiqueName}*\n\n` +
        `👤 *Name:* ${name}\n` +
        `📱 *Phone:* ${phone}\n` +
        `📧 *Email:* ${email}\n` +
        `👗 *Service Needed:* ${service}\n` +
        `📅 *Preferred Date:* ${date}\n` +
        `💬 *Message:* ${notes}`;

      const waBookingLink = document.getElementById('bannerWaLink');
      if (waBookingLink) {
        waBookingLink.href = getWhatsAppUrl(appointmentMsg);
        waBookingLink.onclick = () => {
          launchWhatsApp(appointmentMsg);
        };
      }

      form.reset();
      if (charCounter) charCounter.textContent = '0 / 500 characters';
    });
  }

  function bookAtelierAppointment(pieceName) {
    closeQuickView();
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });

    const serviceSelect = document.getElementById('formService');
    const msgField = document.getElementById('formMessage');

    if (serviceSelect) serviceSelect.value = 'Custom Bridal / Blouse Fitting';
    if (msgField && pieceName) {
      msgField.value = `I am interested in scheduling a trial and custom fitting for: "${pieceName}".`;
    }
  }

  // =========================================================================
  // WhatsApp Number Settings Configuration (Friendly modal for boutique owner)
  // =========================================================================
  function initWhatsAppConfig() {
    const trigger = document.getElementById('waConfigTrigger');
    const modal = document.getElementById('waSettingsModal');
    const input = document.getElementById('waSettingsInput');
    const saveBtn = document.getElementById('waSettingsSaveBtn');
    const closeBtn = document.getElementById('waSettingsCloseBtn');

    trigger?.addEventListener('click', () => {
      if (input) input.value = BoutiqueConfig.whatsappNumber;
      modal?.classList.add('active');
      document.body.style.overflow = 'hidden';
    });

    closeBtn?.addEventListener('click', closeWaSettings);

    saveBtn?.addEventListener('click', () => {
      const val = input?.value.trim().replace(/[^0-9]/g, '');
      if (val && val.length >= 8) {
        BoutiqueConfig.whatsappNumber = val;
        localStorage.setItem('mans_boutique_wa', val);
        showToast(`WhatsApp number updated to +${val}!`, '✅');
        closeWaSettings();
      } else {
        alert('Please enter a valid international mobile number with country code (e.g. 919988133566).');
      }
    });
  }

  function closeWaSettings() {
    const modal = document.getElementById('waSettingsModal');
    modal?.classList.remove('active');
    document.body.style.overflow = '';
  }

  // =========================================================================
  // Interactive Stitching Price Calculator
  // =========================================================================
  function initPriceCalculator() {
    const itemSelect = document.getElementById('calcItem');
    const zipCheck = document.getElementById('calcZip');
    const pipingCheck = document.getElementById('calcPiping');
    const laceCheck = document.getElementById('calcLace');
    const urgentCheck = document.getElementById('calcUrgent');
    const totalEl = document.getElementById('calcTotalDisplay');
    const bookBtn = document.getElementById('calcBookBtn');

    if (!itemSelect || !totalEl) return;

    function calculate() {
      const basePrice = parseInt(itemSelect.value, 10) || 0;
      let extra = 0;
      const selectedItemText = itemSelect.options[itemSelect.selectedIndex].text.split('(')[0].trim();
      const addOns = [];

      if (zipCheck?.checked) {
        extra += 100;
        addOns.push('Pant with Zip (+₹100)');
      }
      if (pipingCheck?.checked) {
        extra += 150;
        addOns.push('Piping (+₹150)');
      }
      if (laceCheck?.checked) {
        extra += 250;
        addOns.push('Lace Work (+₹250)');
      }

      let total = basePrice + extra;
      const isUrgent = urgentCheck?.checked;
      if (isUrgent) {
        total = total * 2;
        addOns.push('Urgent Stitching (Double Charges)');
      }

      totalEl.textContent = `₹ ${total.toLocaleString('en-IN')}`;

      if (bookBtn) {
        bookBtn.onclick = () => {
          let msg = `Hello ${BoutiqueConfig.boutiqueName}! I would like to book tailoring as per your Stitching Price List:\n` +
            `• *Item:* ${selectedItemText} (Base: ₹${basePrice})\n`;
          if (addOns.length > 0) {
            msg += `• *Add-Ons:* ${addOns.join(', ')}\n`;
          }
          msg += `• *Estimated Stitching Total:* ₹${total.toLocaleString('en-IN')}\n\n` +
            `Could you please confirm drop-off / measurement timings at your Ludhiana atelier?`;
          launchWhatsApp(msg);
        };
      }
    }

    itemSelect.addEventListener('change', calculate);
    zipCheck?.addEventListener('change', calculate);
    pipingCheck?.addEventListener('change', calculate);
    laceCheck?.addEventListener('change', calculate);
    urgentCheck?.addEventListener('change', calculate);

    calculate();
  }

  // =========================================================================
  // Newsletter Form
  // =========================================================================
  function initNewsletter() {
    const form = document.getElementById('newsletterForm');
    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('newsletterEmail')?.value;
      if (email) {
        showToast('Welcome to the MANS BOUTIQUE Inner Circle!', '✨');
        form.reset();
      }
    });
  }

  // =========================================================================
  // Expose Global Controller
  // =========================================================================
  window.BoutiqueApp = {
    openQuickView,
    closeQuickView,
    enquireProduct,
    openLightbox,
    openLightboxByImage,
    closeLightbox,
    bookAtelierAppointment,
    launchWhatsApp,
    getWhatsAppUrl
  };

  // =========================================================================
  // Initialization on DOMContentLoaded
  // =========================================================================
  document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    renderProducts('all');
    initProductFilters();
    renderGallery('all');
    initGalleryEvents();
    initContactForm();
    initPriceCalculator();
    initWhatsAppConfig();
    initNewsletter();

    // Floating WhatsApp Button Direct Trigger
    document.getElementById('waFloatingBtn')?.addEventListener('click', () => {
      launchWhatsApp(`Hello ${BoutiqueConfig.boutiqueName}, I am browsing your website and would like to enquire about your haute couture and bridal collections!`);
    });

    // Close modals when clicking backdrop
    document.getElementById('quickViewModal')?.addEventListener('click', (e) => {
      if (e.target.id === 'quickViewModal') closeQuickView();
    });

    document.getElementById('lightboxModal')?.addEventListener('click', (e) => {
      if (e.target.id === 'lightboxModal') closeLightbox();
    });

    document.getElementById('waSettingsModal')?.addEventListener('click', (e) => {
      if (e.target.id === 'waSettingsModal') closeWaSettings();
    });
  });

})();

