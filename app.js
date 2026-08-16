/**
 * Mr Robot — Future Tech & IT Solutions
 * Fichier JavaScript principal (Sécurisé & Optimisé v2.0)
 * ✅ Corrections: Validation stricte, XSS prevention, Debouncing, Code cleanup
 */

// ============================================================
// 0. HAUTE SÉCURITÉ: INJECTION SEO JSON-LD & OBFUSCATION
// ============================================================

// Injection de JSON-LD respectant le CSP strict sans utiliser d'inline scripts
(function injectSEO() {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Mr Robot Systems",
      "image": "https://mrrobot.qd.je/images/og-cover.jpg",
      "url": "https://mrrobot.qd.je/",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Miramar",
        "addressLocality": "Oran",
        "addressCountry": "DZ"
      },
      "geo": { "@type": "GeoCoordinates", "latitude": 35.7000, "longitude": -0.6333 },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "08:00",
        "closes": "17:00"
      }
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script);
})();

// ============================================================
// 0.5 UTILITY FUNCTIONS (Code Cleanup & DRY)
// ============================================================

// ✅ Debounce utility pour éviter les appels excessifs
function debounce(func, delay) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

// ✅ Safe HTML entities escape
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

// ✅ Validation utilities
const ValidationUtils = {
    email: (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
    phone: (phone) => /^[\+\d\s\-\(\)]{7,20}$/.test(phone),
    message: (msg) => msg && msg.length > 0 && msg.length <= 250,
    text: (text) => text && text.length > 0
};

// ✅ Field error handler (DRY) - Remplace 3 lignes répétées
function setFieldError(element, hasError) {
    if (!element) return;
    if (hasError) {
        element.style.borderColor = '#ff6b6b';
        element.focus();
    } else {
        element.style.borderColor = 'var(--line)';
    }
}

// Data Obfuscation Avancée Against Scraping Bots
const _SECURE_DATA = {
    // Les valeurs sont encodées en Base64 pour cacher les vraies informations aux bots
    p: atob("MDc5NzIwMjU3OQ=="), // "0797202579"
    w: atob("MjEzNzk3MjAyNTc5"), // "213797202579"
    e: atob("WWFzc2luZWRlbGxhQGdtYWlsLmNvbQ==") // "Yassinedella@gmail.com"
};

// ============================================================
// 1. TRADUCTIONS ET DONNÉES GLOBALES
// ============================================================
const translations = {
    FR: {
        nav_services: "Services", nav_process: "Circuit", nav_securite: "Sécurité", nav_portfolio: "Réalisations", nav_team: "Équipe",
        hero_badge: "+9 ans d'expérience",
        hero_title: "Mr Robot <span>Systems</span>",
        type_text: "Diagnostic, Maintenance et Solutions Tech à Oran...",
        hero_cta: "Demander un diagnostic",
        hero_cta_secondary: "Voir les services",
        info_addr_lbl: "Adresse", info_addr_val: "Oran, Miramar — Près du Lycée Lotfi",
        info_hours_lbl: "Horaires", info_hours_val: "Samedi – Jeudi, 08h00 – 17h00",
        services_title: "NOS SERVICES",
        s1_title: "Électronique", s1_desc: "Diagnostic avancé et réparation de cartes mères.",
        s2_title: "Informatique", s2_desc: "Maintenance, optimisation et dépannage matériel.",
        s3_title: "Réseaux", s3_desc: "Installation réseau et sécurisation d'infrastructure.",
        s4_title: "Vidéosurveillance", s4_desc: "Caméras IP et configuration NVR à distance.",
        s5_title: "Programmation", s5_desc: "Développement de logiciels, sites web et automatisation sur mesure.",
        s6_title: "Autres solutions", s6_desc: "Un besoin technique particulier ? Nous étudions toute demande sur mesure.",
        price_quote: "Devis gratuit",
        sec_tag: "// SÉCURITÉ RÉSEAU", sec_title: "PROTECTION DE VOS SYSTÈMES",
        sec_desc: "Sécurisation de vos réseaux, WiFi et infrastructures contre les intrusions. Configuration pare-feu, surveillance et bonnes pratiques pour protéger votre activité.",
        sec_li1: "Sécurisation WiFi & réseau local", sec_li2: "Configuration pare-feu & accès",
        sec_li3: "Surveillance et détection d'anomalies", sec_li4: "Recommandations et mise en conformité",
        sec_cta: "Demander un audit",
        portfolio_title: "NOS RÉALISATIONS", portfolio_desc: "Quelques exemples de nos interventions techniques.",
        port1_label: "Soudure carte mère", port2_label: "Installation réseau", port3_label: "Caméras de surveillance", port4_label: "Maintenance PC",
        port1_desc: "Diagnostic de panne, remplacement de composants et remise en état complète.",
        port2_desc: "Câblage structuré, brassage et configuration WiFi professionnelle.",
        port3_desc: "Pose de caméras IP et configuration NVR pour un client à Oran.",
        team_title: "NOTRE ÉQUIPE", team_motto: "Deux frères, une seule mission", yassin_role: "Responsable Technique", wahib_role: "Opérations Terrain",
        contact_title: "Initialiser le Contact", contact_desc: "Sélectionnez le module défectueux. L'équipe interviendra rapidement.",
        lbl_service: "Module Requis", opt_s1: "⚡ Électronique", opt_s2: "💻 Informatique", opt_s3: "🌐 Réseaux", opt_s4: "📹 Vidéosurveillance", opt_s5: "🖥️ Programmation", opt_s6: "🛠️ Autres solutions",
        lbl_name: "Votre Nom", name_ph: "Nom complet", lbl_phone: "Téléphone", phone_ph: "0X XX XX XX XX",
        wa_lbl_name: "Nom :", wa_lbl_phone: "Téléphone :",
        lbl_msg: "Log d'Erreur (Description)", msg_ph: "Décrivez le problème...",
        btn_wa: "WhatsApp", btn_email: "E-mail",
        wa_greeting: "Bonjour l'équipe Mr Robot ! Je souhaite avoir plus d'informations sur vos services.",
        wa_lbl_service: "Service requis:", wa_lbl_desc: "Description:",
        email_subject: "Demande de service Mr Robot",
        email_body: "Service: {service}\nDescription: {msg}",
        pf_note: "📸 Galerie photo complète disponible sur demande via WhatsApp."
    },
    AR: {
        nav_services: "الخدمات", nav_process: "النظام", nav_securite: "الأمان", nav_portfolio: "الإنجازات", nav_team: "الفريق",
        hero_badge: "+9 سنوات خبرة",
        hero_title: "مستر روبوت <span>للأنظمة</span>",
        type_text: "تشخيص، صيانة وحلول تكنولوجية متطورة في وهران...",
        hero_cta: "اطلب تشخيصاً",
        hero_cta_secondary: "شاهد الخدمات",
        info_addr_lbl: "العنوان", info_addr_val: "وهران، ميرامار — بالقرب من ثانوية لطفي",
        info_hours_lbl: "ساعات العمل", info_hours_val: "السبت – الخميس، 08:00 – 17:00",
        services_title: "وحدات الخدمة",
        s1_title: "إلكترونيات", s1_desc: "تشخيص متقدم وصيانة اللوحات الأم.",
        s2_title: "معلوماتية", s2_desc: "صيانة وتحسين الأنظمة والعتاد.",
        s3_title: "شبكات", s3_desc: "تأسيس الشبكات وتأمين البنية التحتية.",
        s4_title: "مراقبة", s4_desc: "تركيب كاميرات IP وبرمجة أجهزة NVR.",
        s5_title: "برمجة", s5_desc: "تطوير برمجيات ومواقع ويب وأتمتة حسب الطلب.",
        s6_title: "حلول أخرى", s6_desc: "لديك احتياج تقني خاص؟ ندرس أي طلب مخصص.",
        price_quote: "عرض سعر مجاني",
        sec_tag: "// أمان الشبكة", sec_title: "حماية أنظمتك",
        sec_desc: "تأمين شبكاتك وشبكة الواي فاي والبنية التحتية ضد الاختراقات. إعداد جدار الحماية، المراقبة وأفضل الممارسات لحماية نشاطك.",
        sec_li1: "تأمين الواي فاي والشبكة المحلية", sec_li2: "إعداد جدار الحماية والصلاحيات",
        sec_li3: "المراقبة وكشف الحالات الشاذة", sec_li4: "توصيات ومطابقة المعايير",
        sec_cta: "طلب تدقيق أمني",
        portfolio_title: "إنجازاتنا", portfolio_desc: "بعض الأمثلة على تدخلاتنا التقنية.",
        port1_label: "لحام لوحة أم", port2_label: "تركيب شبكة", port3_label: "كاميرات مراقبة", port4_label: "صيانة حواسيب",
        port1_desc: "تشخيص العطل، استبدال المكونات وإصلاح كامل.",
        port2_desc: "تمديد كابلات، تركيب لوحة توزيع وإعداد واي فاي احترافي.",
        port3_desc: "تركيب كاميرات IP وإعداد جهاز NVR لعميل في وهران.",
        team_title: "طاقم النظام", team_motto: "أخوان، مهمة واحدة", yassin_role: "المدير التقني", wahib_role: "العمليات الميدانية",
        contact_title: "بدء الاتصال", contact_desc: "حدد الوحدة المطلوبة وسيتدخل الفريق فوراً.",
        lbl_service: "الوحدة المطلوبة", opt_s1: "⚡ إلكترونيات", opt_s2: "💻 معلوماتية", opt_s3: "🌐 شبكات", opt_s4: "📹 أنظمة مراقبة", opt_s5: "🖥️ برمجة", opt_s6: "🛠️ حلول أخرى",
        lbl_name: "الاسم", name_ph: "الاسم الكامل", lbl_phone: "الهاتف", phone_ph: "0X XX XX XX XX",
        wa_lbl_name: "الاسم:", wa_lbl_phone: "الهاتف:",
        lbl_msg: "سجل الخطأ (الوصف)", msg_ph: "اكتب تفاصيل المشكلة هنا...",
        btn_wa: "واتساب", btn_email: "بريد إلكتروني",
        wa_greeting: "مرحباً فريق مستر روبوت، أرغب في الحصول على مزيد من المعلومات حول خدماتكم.",
        wa_lbl_service: "الخدمة المطلوبة:", wa_lbl_desc: "الوصف:",
        email_subject: "طلب خدمة من مستر روبوت",
        email_body: "الخدمة: {service}\nالوصف: {msg}",
        pf_note: "📸 الصور الكاملة متاحة بطلب عبر واتساب."
    },
    EN: {
        nav_services: "Services", nav_process: "System", nav_securite: "Security", nav_portfolio: "Portfolio", nav_team: "Team",
        hero_badge: "+9 years experience",
        hero_title: "Mr Robot <span>Systems</span>",
        type_text: "Diagnostics, Maintenance & Tech Solutions in Oran...",
        hero_cta: "Request a diagnosis",
        hero_cta_secondary: "View services",
        info_addr_lbl: "Address", info_addr_val: "Oran, Miramar — Near Lotfi High School",
        info_hours_lbl: "Hours", info_hours_val: "Saturday – Thursday, 08:00 – 17:00",
        services_title: "CORE MODULES",
        s1_title: "Electronics", s1_desc: "Advanced diagnostics & motherboard repair.",
        s2_title: "IT Support", s2_desc: "System maintenance & hardware optimization.",
        s3_title: "Networking", s3_desc: "Network installation & secure infrastructure.",
        s4_title: "Surveillance", s4_desc: "IP Cameras & remote NVR configuration.",
        s5_title: "Programming", s5_desc: "Custom software, website development and automation.",
        s6_title: "Other solutions", s6_desc: "Have a specific technical need? We review any custom request.",
        price_quote: "Free quote",
        sec_tag: "// NETWORK SECURITY", sec_title: "PROTECTING YOUR SYSTEMS",
        sec_desc: "Securing your networks, WiFi and infrastructure against intrusions. Firewall configuration, monitoring and best practices to protect your business.",
        sec_li1: "WiFi & local network security", sec_li2: "Firewall & access configuration",
        sec_li3: "Monitoring and anomaly detection", sec_li4: "Recommendations and compliance",
        sec_cta: "Request an audit",
        portfolio_title: "OUR WORK", portfolio_desc: "Some examples of our technical interventions.",
        port1_label: "Motherboard soldering", port2_label: "Network installation", port3_label: "Surveillance cameras", port4_label: "PC maintenance",
        port1_desc: "Fault diagnosis, component replacement and full repair.",
        port2_desc: "Structured cabling, patch panel setup and professional WiFi configuration.",
        port3_desc: "IP camera installation and NVR setup for a client in Oran.",
        team_title: "SYSTEM CREW", team_motto: "Two brothers, one mission", yassin_role: "Technical Lead", wahib_role: "Field Operations",
        contact_title: "Initialize Contact", contact_desc: "Select the required module. Our team will intervene swiftly.",
        lbl_service: "Required Module", opt_s1: "⚡ Electronics", opt_s2: "💻 IT Support", opt_s3: "🌐 Networking", opt_s4: "📹 Surveillance", opt_s5: "🖥️ Programming", opt_s6: "🛠️ Other",
        lbl_name: "Your Name", name_ph: "Full name", lbl_phone: "Phone", phone_ph: "0X XX XX XX XX",
        wa_lbl_name: "Name:", wa_lbl_phone: "Phone:",
        lbl_msg: "Error Log (Description)", msg_ph: "Describe the issue...",
        btn_wa: "WhatsApp", btn_email: "E-mail",
        wa_greeting: "Hello Mr Robot team, I would like to have more information about your services.",
        wa_lbl_service: "Required Service:", wa_lbl_desc: "Description:",
        email_subject: "Service request from Mr Robot",
        email_body: "Service: {service}\nDescription: {msg}",
        pf_note: "📸 Full photo gallery available on request via WhatsApp."
    }
};

let currentActiveLang = 'FR';
let typeInterval;

// ============================================================
// 2. INITIALISATION ET ÉVÉNEMENTS DOM (OPTIMISÉE)
// ============================================================

// ✅ Fonction centralisée pour obtenir les éléments (DRY)
function getElements() {
    return {
        navBurger: document.getElementById('navBurger'),
        navOverlay: document.getElementById('navOverlay'),
        navLinks: document.getElementById('navLinks'),
        langBtns: {
            fr: document.getElementById('btn-lang-fr'),
            ar: document.getElementById('btn-lang-ar'),
            en: document.getElementById('btn-lang-en')
        },
        serviceCards: Array.from({length: 6}, (_, i) => document.getElementById(`sc-${i+1}`)),
        badgeWa: document.getElementById('badge-wa'),
        badgePhone: document.getElementById('badge-phone'),
        badgeEmail: document.getElementById('badge-email'),
        contactForm: document.getElementById('contactForm'),
        botToggle: document.getElementById('botToggle'),
        botBubble: document.getElementById('botBubble'),
        botClose: document.getElementById('botClose'),
        botBtnSend: document.getElementById('botBtnSend'),
        botInput: document.getElementById('botInput'),
        toastContainer: document.getElementById('toastContainer'),
        sparksContainer: document.getElementById('sparks-container')
    };
}

document.addEventListener('DOMContentLoaded', () => {
    const els = getElements();
    
    // Mobile menu
    if (els.navBurger) els.navBurger.addEventListener('click', toggleMobileMenu);
    if (els.navOverlay) els.navOverlay.addEventListener('click', closeMobileMenu);
    
    document.querySelectorAll('#navLinks a').forEach(a => {
        a.addEventListener('click', closeMobileMenu);
    });

    // Language switcher (DRY - une boucle au lieu de 3 lignes)
    Object.entries(els.langBtns).forEach(([lang, btn]) => {
        if (btn) {
            btn.addEventListener('click', function() { 
                switchLang(lang.toUpperCase(), this); 
            });
        }
    });

    // Service cards
    els.serviceCards.forEach((card, idx) => {
        if (card) card.addEventListener('click', () => selectService(`s${idx + 1}`));
    });

    // Contact badges
    if (els.badgeWa) {
        els.badgeWa.addEventListener('click', () => {
            window.open(`https://wa.me/${_SECURE_DATA.w}`, '_blank', 'noopener,noreferrer');
        });
    }

    if (els.badgePhone) {
        els.badgePhone.addEventListener('click', () => {
            window.location.href = `tel:${_SECURE_DATA.p}`;
        });
    }

    if (els.badgeEmail) {
        els.badgeEmail.addEventListener('click', () => {
            window.location.href = `mailto:${_SECURE_DATA.e}`;
        });
    }

    // Form submission
    if (els.contactForm) {
        els.contactForm.addEventListener('submit', handleFormSubmit);
    }

    // Bot setup
    if (els.botToggle) {
        els.botToggle.addEventListener('click', (e) => {
            if (suppressNextClick) { 
                suppressNextClick = false; 
                e.stopPropagation(); 
                e.preventDefault(); 
                return; 
            }
            toggleBot();
        });
    }
    if (els.botBubble) els.botBubble.addEventListener('click', () => { toggleBot(); hideBotBubble(); });
    if (els.botClose) els.botClose.addEventListener('click', toggleBot);
    if (els.botBtnSend) els.botBtnSend.addEventListener('click', botSend);
    if (els.botInput) {
        els.botInput.addEventListener('keydown', (e) => { 
            if (e.key === 'Enter') botSend(); 
        });
    }

    makeDellaDraggable();
    typeWriter(translations['FR'].type_text);
    initSparks();
});

// ============================================================
// 3. FONCTIONS D'INTERFACE ET ANIMATIONS
// ============================================================

function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message; 
    container.appendChild(toast);

    requestAnimationFrame(() => {
        toast.classList.add('show');
    });

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 400);
    }, 4000);
}

// ✅ TypeWriter amélioré (plus rapide et optimisé)
function typeWriter(text) {
    const el = document.getElementById('typewriter');
    if (!el) return;
    el.textContent = '';
    clearInterval(typeInterval);
    let i = 0;
    const chars = [];
    
    typeInterval = setInterval(() => {
        if (i < text.length) { 
            chars.push(text.charAt(i)); 
            el.textContent = chars.join('');
            i++; 
        } else { 
            clearInterval(typeInterval); 
        }
    }, 50);
}

function toggleMobileMenu(){
    const navLinks = document.getElementById('navLinks');
    const navBurger = document.getElementById('navBurger');
    const navOverlay = document.getElementById('navOverlay');
    
    navLinks?.classList.toggle('open');
    navBurger?.classList.toggle('open');
    navOverlay?.classList.toggle('open');
}

function closeMobileMenu(){
    const navLinks = document.getElementById('navLinks');
    const navBurger = document.getElementById('navBurger');
    const navOverlay = document.getElementById('navOverlay');
    
    navLinks?.classList.remove('open');
    navBurger?.classList.remove('open');
    navOverlay?.classList.remove('open');
}

// ✅ Language switcher amélioré (XSS safe - textContent seulement)
function switchLang(lang, element) {
    currentActiveLang = lang;
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');

    if (lang === 'AR') { 
        document.documentElement.dir = 'rtl'; 
        document.documentElement.lang = 'ar'; 
    } else { 
        document.documentElement.dir = 'ltr'; 
        document.documentElement.lang = lang.toLowerCase(); 
    }

    const t = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (!t[key]) return;
        
        // ✅ SÉCURITÉ CRITIQUE: Jamais d'innerHTML, toujours textContent + createElement
        if (key === 'hero_title') {
            el.innerHTML = ''; // Clear first
            const parts = t[key].split('<span>');
            el.appendChild(document.createTextNode(parts[0]));
            
            if (parts[1]) {
                const span = document.createElement('span');
                span.textContent = parts[1].replace('</span>', '');
                el.appendChild(span);
            }
        } else {
            el.textContent = t[key];
        }
    });

    // Update placeholders safely
    const inpName = document.getElementById('inp_name');
    const inpPhone = document.getElementById('inp_phone');
    const inpMsg = document.getElementById('inp_msg');
    
    if (inpName) inpName.placeholder = t.name_ph || "Nom complet";
    if (inpPhone) inpPhone.placeholder = t.phone_ph || "0X XX XX XX XX";
    if (inpMsg) inpMsg.placeholder = t.msg_ph || "Décrivez le problème...";
    
    typeWriter(t.type_text);
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('active'); }
    });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

function selectService(val) {
    const select = document.getElementById('service-select');
    if (select) select.value = val;
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
}

// ✅ Form validation améliorée (DRY) - Remplace 18 lignes répétées
function handleFormSubmit(event) {
    event.preventDefault();
    const submitter = event.submitter;
    const type = submitter ? submitter.getAttribute('data-submit') : 'wa';

    const inpNameEl = document.getElementById('inp_name');
    const inpPhoneEl = document.getElementById('inp_phone');
    const inpMsgEl = document.getElementById('inp_msg');
    const selectEl = document.getElementById('service-select');

    const name = inpNameEl?.value.trim() || '';
    const phone = inpPhoneEl?.value.trim() || '';
    const message = inpMsgEl?.value.trim() || '';
    const serviceName = selectEl ? selectEl.options[selectEl.selectedIndex].text : '';

    // ✅ Validation centralisée - Une seule fonction pour tous les champs
    let hasError = false;

    if (!ValidationUtils.text(name)) {
        setFieldError(inpNameEl, true);
        showToast("Veuillez indiquer votre nom.", "error");
        hasError = true;
    } else {
        setFieldError(inpNameEl, false);
    }

    if (!ValidationUtils.phone(phone)) {
        setFieldError(inpPhoneEl, true);
        showToast("Numéro de téléphone invalide (7-20 caractères).", "error");
        hasError = true;
    } else {
        setFieldError(inpPhoneEl, false);
    }

    if (!ValidationUtils.message(message)) {
        setFieldError(inpMsgEl, true);
        showToast("Veuillez décrire votre besoin (max 250 caractères).", "error");
        hasError = true;
    } else {
        setFieldError(inpMsgEl, false);
    }

    if (hasError) return false;

    // Disable buttons
    document.querySelectorAll('.submit-btn').forEach(btn => {
        btn.disabled = true;
        btn.innerHTML = '<span class="spinner"></span> Envoi...';
    });

    const t = translations[currentActiveLang];
    // ✅ Sécurité: escapeHtml pour éviter les injections
    const fullMsg = `${t.wa_greeting || ''}\n\n${t.wa_lbl_name || 'Nom :'} ${escapeHtml(name)}\n${t.wa_lbl_phone || 'Téléphone :'} ${escapeHtml(phone)}\n${t.wa_lbl_service} ${escapeHtml(serviceName)}\n${t.wa_lbl_desc} ${escapeHtml(message)}`;

    try {
        if (type === 'wa') {
            const encoded = encodeURIComponent(fullMsg);
            window.open(`https://wa.me/${_SECURE_DATA.w}?text=${encoded}`, '_blank', 'noopener,noreferrer');
            showToast("✓ Message envoyé sur WhatsApp !", "success");
        } else {
            const subject = encodeURIComponent(t.email_subject || "Demande de service Mr Robot");
            const body = encodeURIComponent(fullMsg);
            window.location.href = `mailto:${_SECURE_DATA.e}?subject=${subject}&body=${body}`;
            showToast("✓ Ouverture de votre client email.", "success");
        }
    } catch (error) {
        console.error('Form submission error:', error);
        showToast("Erreur lors de l'envoi du message.", "error");
    }

    setTimeout(() => {
        document.querySelectorAll('.submit-btn').forEach(btn => {
            btn.disabled = false;
            const label = btn.getAttribute('data-submit') === 'wa' ? t.btn_wa : t.btn_email;
            btn.innerHTML = `<span class="app-ic" style="background:${btn.classList.contains('wa') ? '#25D366' : '#fff'};">...</span><span>${label}</span>`;
        });
    }, 3000);

    return false;
}

function initSparks() {
    const sparksContainer = document.getElementById('sparks-container');
    if (!sparksContainer) return;
    for (let i = 0; i < 15; i++) {
        let spark = document.createElement('div');
        spark.className = 'spark';
        spark.style.width = Math.random() * 4 + 2 + 'px';
        spark.style.height = spark.style.width;
        spark.style.top = Math.random() * 100 + 'vh';
        spark.style.left = Math.random() * 100 + 'vw';
        spark.style.animationDelay = Math.random() * 2 + 's';
        sparksContainer.appendChild(spark);
    }
}

// ============================================================
// 4. MODULE BOT DELLA
// ============================================================
const DELLA_PROXY_URL = "https://della-proxy.yassinedella.workers.dev/";
const NVIDIA_MODEL = "meta/llama-3.1-8b-instruct";

const BOT_SYSTEM_PROMPT = `Tu es Della, le robot assistant du site de "Mr Robot", une entreprise de services techniques à Oran, Algérie, gérée par deux frères : Yassin (Responsable Technique) et Wahib (Opérations Terrain).
Services proposés : Électronique, Informatique, Réseaux, Vidéosurveillance, Programmation, et Autres solutions sur demande.
Contact : WhatsApp 0797 20 25 79, email Yassinedella@gmail.com.
Réponds en français, de façon brève (2-3 phrases maximum), amicale et professionnelle. N'invente jamais de prix précis.`;

const botKB = [
    { kw: ["service","services","que faites","proposez","offrez"], a: "Nous proposons 6 services : ⚡ Électronique, 💻 Informatique, 🌐 Réseaux, 📹 Vidéosurveillance, 🖥️ Programmation et autres solutions sur demande." },
    { kw: ["electronique","électronique","carte mere","carte mère","reparation","réparation"], a: "En électronique, nous diagnostiquons et réparons cartes mères, composants et appareils électroniques." },
    { kw: ["informatique","pc","ordinateur","windows","virus","lent"], a: "Pour l'informatique : maintenance, optimisation, dépannage matériel et logiciel de vos PC." },
    { kw: ["reseau","réseau","wifi","internet","cable"], a: "Nous installons et sécurisons vos réseaux : câblage, WiFi, configuration et infrastructure complète." },
    { kw: ["camera","caméra","surveillance","nvr","video"], a: "Installation de caméras IP et configuration NVR, avec accès à distance depuis votre téléphone." },
    { kw: ["programmation","logiciel","site web","app","developpement","développement"], a: "Nous développons des logiciels, sites web et solutions d'automatisation sur mesure pour votre activité." },
    { kw: ["prix","tarif","combien","cout","coût","devis"], a: "Le prix dépend du diagnostic. Décrivez votre problème et nous vous donnerons un devis rapide via WhatsApp." },
    { kw: ["adresse","ou","où","localisation","situe","situé","oran"], a: "Nous sommes basés à Oran, Miramar — près du Lycée Lotfi." },
    { kw: ["horaire","heure","ouvert","disponib"], a: "Nos horaires : Samedi – Jeudi, 08h00 – 17h00." },
    { kw: ["contact","telephone","téléphone","numero","numéro","whatsapp","appel"], a: "Vous pouvez nous joindre au 0797 20 25 79, par WhatsApp, email ou via le formulaire de contact." },
    { kw: ["equipe","équipe","yassin","wahib","qui etes","qui êtes"], a: "Mr Robot est géré par deux frères : Yassin (Responsable Technique) et Wahib (Opérations Terrain)." },
    { kw: ["bonjour","salut","salam","hello","bjr"], a: "Bonjour ! 👋 Je suis Della, l'assistant de Mr Robot. Posez-moi une question sur nos services, tarifs, ou contactez directement l'équipe." },
    { kw: ["merci","thanks","chokran"], a: "Avec plaisir ! N'hésitez pas si vous avez d'autres questions. 😊" }
];

const botSuggestions = ["Vos services ?", "Prix / devis", "Réseaux & WiFi", "Contact WhatsApp"];
let botHistory = [];
let suppressNextClick = false;

function positionBotBubble() {
    const bubble = document.getElementById('botBubble');
    const btn = document.getElementById('botToggle');
    if (!bubble || !btn) return;
    const rect = btn.getBoundingClientRect();
    const bubbleW = bubble.offsetWidth || 190;
    const bubbleH = bubble.offsetHeight || 50;
    const gap = 12;
    let top = rect.top - bubbleH - gap;
    let left = rect.left + (rect.width / 2) - (bubbleW / 2);
    if (top < 10) top = rect.bottom + gap;
    if (left < 10) left = 10;
    if (left + bubbleW > window.innerWidth - 10) left = window.innerWidth - bubbleW - 10;
    bubble.style.top = top + 'px';
    bubble.style.left = left + 'px';
}

function toggleBot(){
    const panel = document.getElementById('botPanel');
    if (!panel) return;
    panel.classList.toggle('open');
    if(panel.classList.contains('open')){
        hideBotBubble();
        positionBotPanel();
        const msgs = document.getElementById('botMsgs');
        if(msgs && msgs.children.length === 0){
            botAddMsg('bot', "Bonjour ! 👋 Je suis Della, l'assistant de Mr Robot. Posez-moi une question sur nos services, tarifs, ou contactez directement l'équipe.");
            botRenderSuggestions();
        }
    }
}

function hideBotBubble(){
    const bubble = document.getElementById('botBubble');
    if(bubble) bubble.classList.remove('show');
}

function positionBotPanel(){
    const btn = document.getElementById('botToggle');
    const panel = document.getElementById('botPanel');
    if(!btn || !panel) return;

    const rect = btn.getBoundingClientRect();
    const panelW = panel.offsetWidth || 320;
    const panelH = panel.offsetHeight || 420;
    const gap = 12, margin = 10;

    let top = rect.top - panelH - gap;
    if(top < margin) top = Math.min(rect.bottom + gap, window.innerHeight - panelH - margin);
    top = Math.max(margin, top);

    let left = rect.left;
    if(left + panelW > window.innerWidth - margin) left = window.innerWidth - panelW - margin;
    left = Math.max(margin, left);

    panel.style.top = top + 'px';
    panel.style.left = left + 'px';
    panel.style.bottom = 'auto';
    panel.style.right = 'auto';
}

// ✅ Debounce pour éviter les appels excessifs - Remplace l'ancienne ligne 510
window.addEventListener('resize', debounce(() => {
    const panel = document.getElementById('botPanel');
    if(panel && panel.classList.contains('open')) positionBotPanel();
    positionBotBubble();
}, 150)); // Attend 150ms après l'arrêt du resize avant d'exécuter

function makeDellaDraggable(){
    const btn = document.getElementById('botToggle');
    if(!btn) return;

    let dragging = false, moved = false, startX = 0, startY = 0, startLeft = 0, startTop = 0;
    const PAD = 8;

    function applyPosition(left, top){
        const w = btn.offsetWidth, h = btn.offsetHeight;
        const maxLeft = window.innerWidth - w - PAD;
        const maxTop = window.innerHeight - h - PAD;
        left = Math.min(Math.max(left, PAD), Math.max(maxLeft, PAD));
        top = Math.min(Math.max(top, PAD), Math.max(maxTop, PAD));
        btn.style.left = left + 'px';
        btn.style.top = top + 'px';
        btn.style.right = 'auto';
        btn.style.bottom = 'auto';
        positionBotBubble();
        return { left, top };
    }

    function pointFromEvent(e){
        if(e.touches && e.touches.length) return { x: e.touches[0].clientX, y: e.touches[0].clientY };
        if(e.changedTouches && e.changedTouches.length) return { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY };
        return { x: e.clientX, y: e.clientY };
    }

    function startDrag(e){
        const p = pointFromEvent(e);
        dragging = true; moved = false;
        const rect = btn.getBoundingClientRect();
        startX = p.x; startY = p.y;
        startLeft = rect.left; startTop = rect.top;
        btn.classList.add('dragging');
        hideBotBubble();
    }

    function moveDrag(e){
        if(!dragging) return;
        const p = pointFromEvent(e);
        const dx = p.x - startX, dy = p.y - startY;
        if(Math.abs(dx) > 6 || Math.abs(dy) > 6) moved = true;
        if(moved){
            if(e.cancelable) e.preventDefault();
            applyPosition(startLeft + dx, startTop + dy);
        }
    }

    function endDrag(){
        if(!dragging) return;
        dragging = false;
        btn.classList.remove('dragging');
        if(moved){
            const rect = btn.getBoundingClientRect();
            applyPosition(rect.left, rect.top);
            suppressNextClick = true;
        }
    }

    btn.addEventListener('mousedown', startDrag);
    window.addEventListener('mousemove', moveDrag);
    window.addEventListener('mouseup', endDrag);

    btn.addEventListener('touchstart', startDrag, { passive: true });
    window.addEventListener('touchmove', moveDrag, { passive: false });
    window.addEventListener('touchend', endDrag);
    window.addEventListener('touchcancel', endDrag);
}

// ✅ Protection DOM-XSS : Insertion directe via textContent
function botAddMsg(role, text){
    const msgs = document.getElementById('botMsgs');
    if (!msgs) return null;
    const div = document.createElement('div');
    div.className = 'bot-msg ' + role;
    div.textContent = text; 
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
    return div;
}

function botRenderSuggestions(){
    const box = document.getElementById('botSuggest');
    if (!box) return;
    box.innerHTML = '';
    botSuggestions.forEach(s => {
        const chip = document.createElement('span');
        chip.className = 'bot-chip';
        chip.textContent = s;
        chip.addEventListener('click', () => {
            const input = document.getElementById('botInput');
            if (input) input.value = s;
            botSend();
        });
        box.appendChild(chip);
    });
}

function botFindAnswer(text){
    const q = text.toLowerCase();
    for(const entry of botKB){
        if(entry.kw.some(k => q.includes(k))) return entry.a;
    }
    return null;
}

async function botAskAI(text){
    botHistory.push({ role: "user", content: text });
    const messages = [{ role: "system", content: BOT_SYSTEM_PROMPT }, ...botHistory.slice(-8)];

    const res = await fetch(DELLA_PROXY_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            model: NVIDIA_MODEL,
            messages: messages
        })
    });

    if(!res.ok) throw new Error("Proxy error " + res.status);
    const data = await res.json();
    const reply = data.choices?.[0]?.message?.content?.trim();
    if(!reply) throw new Error("Réponse vide");
    botHistory.push({ role: "assistant", content: reply });
    return reply;
}

function botSend(){
    const input = document.getElementById('botInput');
    if (!input) return;
    const text = input.value.trim();
    if(!text) return;
    
    botAddMsg('user', text);
    input.value = '';

    const typingEl = botAddMsg('bot', '…');

    const finish = (reply, isFallback) => {
        if (typingEl) typingEl.textContent = reply;
        if(isFallback){
            const msg = encodeURIComponent("Bonjour Mr Robot, question depuis le site : " + text);
            setTimeout(() => window.open(`https://wa.me/${_SECURE_DATA.w}?text=${msg}`, '_blank', 'noopener,noreferrer'), 900);
        }
    };

    botAskAI(text)
        .then(reply => finish(reply, false))
        .catch(() => {
            const kbAnswer = botFindAnswer(text);
            if(kbAnswer){ finish(kbAnswer, false); }
            else { finish("Je n'ai pas pu joindre l'IA à l'instant 🤔. Je transmets votre question directement à l'équipe sur WhatsApp.", true); }
        });
}

// Animation Log du Dashboard de Sécurité
(function secDashLog(){
    const logEl = document.getElementById('secLog');
    if(!logEl) return;
    const lines = [
        "> scanning ports 1-65535...",
        "> checking firewall rules...",
        "> analyzing WiFi encryption (WPA3)...",
        "> testing SSL/TLS handshake...",
        "> monitoring traffic anomalies...",
        "> verifying access control lists...",
        "> scan complete — 0 threats found ✓"
    ];
    let i = 0;
    setInterval(() => {
        i = (i + 1) % lines.length;
        const rows = logEl.textContent.split('\n').filter(Boolean);
        rows.push(lines[i]);
        if(rows.length > 3) rows.shift();
        logEl.textContent = rows.join('\n');
    }, 2600);
})();

window.addEventListener('load', () => {
    setTimeout(() => {
        const bubble = document.getElementById('botBubble');
        const panel = document.getElementById('botPanel');
        if(bubble && panel && !panel.classList.contains('open')){
            bubble.classList.add('show');
            positionBotBubble();
            setTimeout(hideBotBubble, 7000);
        }
    }, 2200);
});
