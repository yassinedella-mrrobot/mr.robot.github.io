/**
 * Mr Robot — Future Tech & IT Solutions
 * Fichier JavaScript principal (v3.2)
 * Développeur : Yassin Della (Mr Robot)
 */

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

function debounce(func, delay) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

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

const ValidationUtils = {
    email: (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
    phone: (phone) => /^[\+\d\s\-\(\)]{7,20}$/.test(phone),
    message: (msg) => msg && msg.length > 0 && msg.length <= 500,
    text: (text) => text && text.length > 0
};

function setFieldError(element, hasError) {
    if (!element) return;
    if (hasError) {
        element.style.borderColor = '#ff6b6b';
        element.focus();
    } else {
        element.style.borderColor = 'var(--line)';
    }
}

const _SECURE_DATA = {
    p: atob("MDc5NzIwMjU3OQ=="),
    w: atob("MjEzNzk3MjAyNTc5"),
    e: atob("WWFzc2luZWRlbGxhQGdtYWlsLmNvbQ=="),
    fb: "https://www.facebook.com/profile.php?id=61594007523187"
};

const translations = {
    FR: {
        nav_services: "Services", nav_process: "Circuit", nav_securite: "Sécurité", nav_portfolio: "Réalisations", nav_team: "Équipe",
        hero_badge: "+9 ans d'expérience",
        hero_title: "Mr Robot <span>Systems</span>",
        type_text: "Diagnostic, Maintenance et Solutions Tech à Oran...",
        hero_cta: "Demander un diagnostic",
        hero_cta_della: "🤖 Parler à Della (IA)",
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
        port1_label: "Soudure carte mère", port2_label: "Installation réseau", port3_label: "Vidéosurveillance",
        port1_desc: "Diagnostic de panne, remplacement de composants et remise en état complète.",
        port2_desc: "Câblage structuré, brassage et configuration WiFi professionnelle.",
        port3_desc: "Pose de caméras IP et configuration NVR pour un client à Oran.",
        team_title: "NOTRE ÉQUIPE", team_motto: "Deux frères, une seule mission", yassin_role: "Responsable Technique", wahib_role: "Opérations Terrain",
        contact_tag: "// CANAL DE TRANSMISSION DIRECTE",
        contact_title: "Initialiser le Contact", contact_desc: "Sélectionnez votre canal direct ou soumettez un log d'incident.",
        lbl_service: "Module Requis", opt_s1: "⚡ Électronique", opt_s2: "💻 Informatique", opt_s3: "🌐 Réseaux", opt_s4: "📹 Vidéosurveillance", opt_s5: "🖥️ Programmation", opt_s6: "🛠️ Autres solutions",
        lbl_name: "Votre Nom", name_ph: "Nom complet", lbl_phone: "Téléphone", phone_ph: "0X XX XX XX XX",
        wa_lbl_name: "Nom :", wa_lbl_phone: "Téléphone :",
        lbl_msg: "Log d'Erreur (Description)", msg_ph: "Décrivez le problème...",
        btn_wa: "WhatsApp", btn_email: "E-mail",
        wa_greeting: "Bonjour l'équipe Mr Robot ! Je souhaite avoir plus d'informations sur vos services.",
        wa_lbl_service: "Service requis:", wa_lbl_desc: "Description:",
        email_subject: "Demande de service Mr Robot",
        email_body: "Service: {service}\nDescription: {msg}",
        pf_note: "📸 Galerie photo complète disponible sur demande via WhatsApp.",
        footer_tagline: "Ingénierie, Micro-soudure & Solutions Techniques Avancées à Oran.",
        footer_status: "Systèmes opérationnels — Support actif",
        footer_nav_title: "Navigation",
        footer_contact_link: "Contact & Devis",
        footer_coord_title: "Coordonnées",
        footer_sec_title: "Sécurité",
        footer_sec_desc: "Infrastructure sécurisée et politique de signalement responsable.",
        footer_sec_policy: "Politique de Sécurité",
        footer_copy: "© 2026 Mr Robot Systems — Yassin & Wahib Della. Tous droits réservés.",
        bot_wa_export: "Continuer sur WhatsApp ↗",
        ba_before: "AVANT",
        ba_after: "APRÈS",
        ba_hint: "↔ Glissez le curseur pour comparer Avant / Après",
        est_tag: "// ESTIMATEUR EXPRESS & DIAGNOSTIC",
        est_title: "DIAGNOSTIC RAPIDE EN 2 CLICS",
        est_subtitle: "Sélectionnez votre type d'équipement et le symptôme pour obtenir une estimation immédiate.",
        est_step1_lbl: "Équipement",
        est_step2_lbl: "Symptôme constaté",
        est_res_badge: "ESTIMATION MR ROBOT",
        est_time_lbl: "Délai estimé :",
        est_cost_lbl: "Diagnostic :",
        est_btn_book: "Prendre en charge avec cette estimation ↗"
    },
    AR: {
        nav_services: "الخدمات", nav_process: "النظام", nav_securite: "الأمان", nav_portfolio: "الإنجازات", nav_team: "الفريق",
        hero_badge: "+9 سنوات خبرة",
        hero_title: "مستر روبوت <span>للأنظمة</span>",
        type_text: "تشخيص، صيانة وحلول تكنولوجية متطورة في وهران...",
        hero_cta: "اطلب تشخيصاً",
        hero_cta_della: "🤖 تحدث مع ديلا (الذكاء الاصطناعي)",
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
        port1_label: "لحام لوحة أم", port2_label: "تركيب شبكة", port3_label: "كاميرات مراقبة",
        port1_desc: "تشخيص العطل، استبدال المكونات وإصلاح كامل.",
        port2_desc: "تمديد كابلات، تركيب لوحة توزيع وإعداد واي فاي احترافي.",
        port3_desc: "تركيب كاميرات IP وإعداد جهاز NVR لعميل في وهران.",
        team_title: "طاقم النظام", team_motto: "أخوان، مهمة واحدة", yassin_role: "المدير التقني", wahib_role: "العمليات الميدانية",
        contact_tag: "// قناة اتصال مباشرة ومؤمّنة",
        contact_title: "بدء الاتصال", contact_desc: "اختر قناة الاتصال المباشرة أو أرسل سجل الخطأ وسيتدخل الفريق فوراً.",
        lbl_service: "الوحدة المطلوبة", opt_s1: "⚡ إلكترونيات", opt_s2: "💻 معلوماتية", opt_s3: "🌐 شبكات", opt_s4: "📹 أنظمة مراقبة", opt_s5: "🖥️ برمجة", opt_s6: "🛠️ حلول أخرى",
        lbl_name: "الاسم", name_ph: "الاسم الكامل", lbl_phone: "الهاتف", phone_ph: "0X XX XX XX XX",
        wa_lbl_name: "الاسم:", wa_lbl_phone: "الهاتف:",
        lbl_msg: "سجل الخطأ (الوصف)", msg_ph: "اكتب تفاصيل المشكلة هنا...",
        btn_wa: "واتساب", btn_email: "بريد إلكتروني",
        wa_greeting: "مرحباً فريق مستر روبوت، أرغب في الحصول على مزيد من المعلومات حول خدماتكم.",
        wa_lbl_service: "الخدمة المطلوبة:", wa_lbl_desc: "الوصف:",
        email_subject: "طلب خدمة من مستر روبوت",
        email_body: "الخدمة: {service}\nالوصف: {msg}",
        pf_note: "📸 الصور الكاملة متاحة بطلب عبر واتساب.",
        footer_tagline: "هندسة، لحام دقيق وحلول تقنية متقدمة في وهران.",
        footer_status: "الأنظمة تعمل — الدعم الفني نشط",
        footer_nav_title: "التنقل",
        footer_contact_link: "اتصال وعرض سعر",
        footer_coord_title: "معلومات التواصل",
        footer_sec_title: "الأمان",
        footer_sec_desc: "بنية تحتية آمنة وسياسة إبلاغ مسؤولة.",
        footer_sec_policy: "سياسة الأمان",
        footer_copy: "© 2026 مستر روبوت للأنظمة — ياسين ووهيب ديلا. جميع الحقوق محفوظة.",
        bot_wa_export: "متابعة المحادثة على واتساب ↗",
        ba_before: "قبل",
        ba_after: "بعد",
        ba_hint: "↔ اسحب الشريط للمقارنة بين قبل وبعد الإصلاح",
        est_tag: "// حاسبة التشخيص السريع",
        est_title: "تشخيص سريع في خطوتين",
        est_subtitle: "اختر نوع الجهاز والمشكلة للحصول على تقدير فوري لمدة وتفاصيل الإصلاح.",
        est_step1_lbl: "نوع الجهاز",
        est_step2_lbl: "العطل الملاحظ",
        est_res_badge: "تقدير مستر روبوت",
        est_time_lbl: "المدة التقديرية:",
        est_cost_lbl: "التشخيص:",
        est_btn_book: "طلب الخدمة بناءً على هذا التقدير ↗"
    },
    EN: {
        nav_services: "Services", nav_process: "System", nav_securite: "Security", nav_portfolio: "Portfolio", nav_team: "Team",
        hero_badge: "+9 years experience",
        hero_title: "Mr Robot <span>Systems</span>",
        type_text: "Diagnostics, Maintenance & Tech Solutions in Oran...",
        hero_cta: "Request a diagnosis",
        hero_cta_della: "🤖 Chat with Della (AI)",
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
        port1_label: "Motherboard soldering", port2_label: "Network installation", port3_label: "Surveillance",
        port1_desc: "Fault diagnosis, component replacement and full repair.",
        port2_desc: "Structured cabling, patch panel setup and professional WiFi configuration.",
        port3_desc: "IP camera installation and NVR setup for a client in Oran.",
        team_title: "SYSTEM CREW", team_motto: "Two brothers, one mission", yassin_role: "Technical Lead", wahib_role: "Field Operations",
        contact_tag: "// SECURE DIRECT TRANSMISSION CHANNEL",
        contact_title: "Initialize Contact", contact_desc: "Select your direct channel or submit an incident error log.",
        lbl_service: "Required Module", opt_s1: "⚡ Electronics", opt_s2: "💻 IT Support", opt_s3: "🌐 Networking", opt_s4: "📹 Surveillance", opt_s5: "🖥️ Programming", opt_s6: "🛠️ Other",
        lbl_name: "Your Name", name_ph: "Full name", lbl_phone: "Phone", phone_ph: "0X XX XX XX XX",
        wa_lbl_name: "Name:", wa_lbl_phone: "Phone:",
        lbl_msg: "Error Log (Description)", msg_ph: "Describe the issue...",
        btn_wa: "WhatsApp", btn_email: "E-mail",
        wa_greeting: "Hello Mr Robot team, I would like to have more information about your services.",
        wa_lbl_service: "Required Service:", wa_lbl_desc: "Description:",
        email_subject: "Service request from Mr Robot",
        email_body: "Service: {service}\nDescription: {msg}",
        pf_note: "📸 Full photo gallery available on request via WhatsApp.",
        footer_tagline: "Engineering, Micro-soldering & Advanced Technical Solutions in Oran.",
        footer_status: "Systems operational — Active support",
        footer_nav_title: "Navigation",
        footer_contact_link: "Contact & Quote",
        footer_coord_title: "Contact Info",
        footer_sec_title: "Security",
        footer_sec_desc: "Secure infrastructure and responsible disclosure policy.",
        footer_sec_policy: "Security Policy",
        footer_copy: "© 2026 Mr Robot Systems — Yassin & Wahib Della. All rights reserved.",
        bot_wa_export: "Continue on WhatsApp ↗",
        ba_before: "BEFORE",
        ba_after: "AFTER",
        ba_hint: "↔ Slide to compare Before / After",
        est_tag: "// EXPRESS DIAGNOSTIC ESTIMATOR",
        est_title: "QUICK 2-STEP DIAGNOSIS",
        est_subtitle: "Select your device type and symptom for an immediate estimate.",
        est_step1_lbl: "Equipment",
        est_step2_lbl: "Observed Symptom",
        est_res_badge: "MR ROBOT ESTIMATE",
        est_time_lbl: "Estimated turnaround:",
        est_cost_lbl: "Diagnosis:",
        est_btn_book: "Request service with this estimate ↗"
    }
};

let currentActiveLang = 'FR';
let typeInterval;

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
        badgeFb: document.getElementById('badge-fb'),
        contactForm: document.getElementById('contactForm'),
        topNavDella: document.getElementById('topNavDella'),
        heroBtnDella: document.getElementById('heroBtnDella'),
        mActDella: document.getElementById('mActDella'),
        botToggle: document.getElementById('botToggle'),
        botBubble: document.getElementById('botBubble'),
        botBubbleClose: document.getElementById('botBubbleClose'),
        botClose: document.getElementById('botClose'),
        botBtnSend: document.getElementById('botBtnSend'),
        botBtnMic: document.getElementById('botBtnMic'),
        botWaHandoff: document.getElementById('botWaHandoff'),
        botInput: document.getElementById('botInput'),
        toastContainer: document.getElementById('toastContainer'),
        sparksContainer: document.getElementById('sparks-container')
    };
}

document.addEventListener('DOMContentLoaded', () => {
    const els = getElements();
    
    if (els.navBurger) els.navBurger.addEventListener('click', toggleMobileMenu);
    if (els.navOverlay) els.navOverlay.addEventListener('click', closeMobileMenu);
    
    document.querySelectorAll('#navLinks a').forEach(a => {
        a.addEventListener('click', closeMobileMenu);
    });

    Object.entries(els.langBtns).forEach(([lang, btn]) => {
        if (btn) {
            btn.addEventListener('click', function() { 
                switchLang(lang.toUpperCase(), this); 
            });
        }
    });

    els.serviceCards.forEach((card, idx) => {
        if (card) {
            card.addEventListener('click', () => {
                const s = card.getAttribute('data-service') || `s${idx + 1}`;
                selectService(s);
            });
        }
    });

    document.querySelectorAll('.q-chip[data-service]').forEach(chip => {
        chip.addEventListener('click', () => {
            selectService(chip.getAttribute('data-service'));
        });
    });

    if (els.contactForm) {
        els.contactForm.addEventListener('submit', handleFormSubmit);
    }

    if (els.topNavDella) els.topNavDella.addEventListener('click', toggleBot);
    if (els.heroBtnDella) els.heroBtnDella.addEventListener('click', toggleBot);
    if (els.mActDella) els.mActDella.addEventListener('click', toggleBot);

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
    if (els.botBubbleClose) {
        els.botBubbleClose.addEventListener('click', (e) => {
            e.stopPropagation();
            hideBotBubble();
        });
    }
    if (els.botClose) els.botClose.addEventListener('click', toggleBot);
    if (els.botBtnSend) els.botBtnSend.addEventListener('click', botSend);
    if (els.botWaHandoff) els.botWaHandoff.addEventListener('click', exportChatToWhatsApp);
    if (els.botInput) {
        els.botInput.addEventListener('keydown', (e) => { 
            if (e.key === 'Enter') botSend(); 
        });
    }

    makeDellaDraggable();
    initVoiceInput();
    initBeforeAfterSlider();
    initEstimator();
    typeWriter(translations['FR'].type_text);
    initSparks();
});

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
        
        if (key === 'hero_title') {
            el.innerHTML = '';
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

    const inpName = document.getElementById('inp_name');
    const inpPhone = document.getElementById('inp_phone');
    const inpMsg = document.getElementById('inp_msg');
    
    if (inpName) inpName.placeholder = t.name_ph || "Nom complet";
    if (inpPhone) inpPhone.placeholder = t.phone_ph || "0X XX XX XX XX";
    if (inpMsg) inpMsg.placeholder = t.msg_ph || "Décrivez le problème...";

    const botInput = document.getElementById('botInput');
    if (botInput) {
        botInput.placeholder = lang === 'AR' ? "اكتب سؤالك هنا..." : (lang === 'EN' ? "Type your question..." : "Écrivez votre question...");
    }

    if (typeof renderEstimatorSymptoms === 'function') {
        renderEstimatorSymptoms();
    }
    
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

    document.querySelectorAll('.submit-btn').forEach(btn => {
        btn.disabled = true;
        btn.innerHTML = '<span class="spinner"></span> Envoi...';
    });

    const t = translations[currentActiveLang];
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
    if (window.innerWidth < 768) return; // Skip heavy particle animations on mobile for max speed
    for (let i = 0; i < 10; i++) {
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
// ============================================================
// 4. MODULE BOT DELLA (Gemini-Compatible)
// ============================================================
const DELLA_PROXY_URL = "https://della-proxy.yassinedella.workers.dev/";

function detectLang(text) {
    if (/[\u0600-\u06FF]/.test(text)) return 'ar';
    if (/\b(hello|hi|price|cost|where|how|what|thanks|service|services|phone)\b/i.test(text)) return 'en';
    return 'fr';
}

const BOT_SYSTEM_PROMPT = `Tu es Della (ديلا), l'assistant virtuel intelligent de Mr Robot Systems à Oran.

RÈGLES D'ACTION ET RECHERCHE WEB EN TEMPS RÉEL:
- Tu disposes du module de RECHERCHE GOOGLE EN TEMPS RÉEL (Google Search Grounding).
- Pour toute question technique, générale, sur du matériel, des prix, des erreurs logiciels, des composants ou l'actualité : utilise immédiatement la recherche Web pour apporter une réponse exacte, ultra-précise et actualisée !
- Pour les questions sur Mr Robot Systems (Oran) : utilise les informations ci-dessous.

RÈGLES DE LANGUE ET ADAPTATION INTELLIGENTE:
1. Si l'utilisateur écrit en ARABE ÉCRITURE ARABE (حروف عربية): Réponds en Arabe / Darija fluide 🇩🇿 (مثال: أهلاً بك! نقدم خدمات الصيانة...).
2. Si l'utilisateur écrit en FRANCO-ARABE / ARABIZI (ex: "salam khoya chhal...", "slm win kayen") ou mélange Français/Arabe: Réponds en Français amical (avec "Salam !" ou "Bonjour !").
3. Si l'utilisateur écrit en FRANÇAIS pur: Réponds en Français clair et professionnel.
4. Si l'utilisateur écrit en ANGLAIS: Réponds en Anglais.

Informations Mr Robot Systems (Oran):
- Services: ⚡ Électronique/Soudure carte mère, 💻 Informatique/Maintenance PC, 🌐 Réseaux & WiFi, 📹 Vidéosurveillance/Caméras IP, 🖥️ Programmation/Sites web & Logiciels.
- Adresse: Oran, Miramar — Près du Lycée Lotfi (وهران ميرامار بالقرب من ثانوية لطفي).
- Horaires: Samedi – Jeudi, 08h00 – 17h00.
- Contact WhatsApp / Tél: 0797202579.
- Style: Court (2 à 3 phrases max), professionnel, amical et très clair.`;

const botKB = [
    { 
        kw: ["service","services","que faites","proposez","offrez","خدمات","شنو ديرو","what do you do","dirou"], 
        ar: "نقدم 6 خدمات رئيسية: ⚡ إلكترونيات (صيانة الكروت الأم)، 💻 معلوماتية، 🌐 شبكات وايفاي، 📹 كاميرات مراقبة، 🖥️ برمجة حلول مخصصة.",
        fr: "Bonjour ! Nous proposons 6 services principaux : ⚡ Électronique (micro-soudure), 💻 Informatique, 🌐 Réseaux WiFi, 📹 Vidéosurveillance, 🖥️ Programmation.",
        en: "We offer 6 main services: ⚡ Electronics, 💻 IT & PC Repair, 🌐 Networking & WiFi, 📹 CCTV Cameras, 🖥️ Software Development."
    },
    { 
        kw: ["electronique","électronique","carte mere","carte mère","reparation","réparation","الكترونيات","إلكترونيات","سودور","كارط مير","electronics","soudure"],
        ar: "في مجال الإلكترونيات: نقوم بتشخيص وإصلاح الكروت الأم (Cartes mères)، التلحيم الدقيق (Soudure)، وصيانة الأجهزة الإلكترونية.",
        fr: "En électronique : nous effectuons le diagnostic et la réparation des cartes mères (micro-soudure et composants).",
        en: "In electronics: advanced motherboard diagnostics, micro-soldering, and electronic component repair."
    },
    { 
        kw: ["informatique","pc","ordinateur","windows","virus","lent","ميكرو","كمبيوتر","حاسوب","computer","mikro"],
        ar: "في مجال المعلوماتية: صيانة وحل مشاكل الحواسيب (PC)، تسريع الجهاز، إزالة الفيروسات، وتغيير القطع.",
        fr: "Pour l'informatique : maintenance PC, suppression de virus, optimisation et dépannage matériel & logiciel.",
        en: "For IT & Computers: PC maintenance, speed optimization, virus removal, hardware & software repair."
    },
    { 
        kw: ["reseau","réseau","wifi","internet","cable","شبكة","شبكات","وايفاي","network"],
        ar: "تركيب وتأمين الشبكات: الكابلات الهيكلية، إعداد الوايفاي الاحترافي، وحماية الشبكات من الاختراق.",
        fr: "Installation et sécurisation de réseaux : câblage structuré, WiFi professionnel et infrastructures IT.",
        en: "Network installation and security: structured cabling, professional WiFi, and firewall configuration."
    },
    { 
        kw: ["camera","caméra","surveillance","nvr","video","كاميرا","كاميرات","cctv"],
        ar: "تركيب كاميرات المراقبة IP و NVR مع إمكانية مشاهدة البث المباشر من هاتفك الذكي في أي مكان.",
        fr: "Installation de caméras de surveillance IP et NVR avec accès à distance depuis votre smartphone.",
        en: "Installation of IP cameras and NVR configuration with remote mobile viewing on your smartphone."
    },
    { 
        kw: ["programmation","logiciel","site web","app","developpement","développement","برمجة","موقع","software","coding"],
        ar: "تطوير البرامج والمواقع الإلكترونية وتصميم تطبيقات وحلول الأتمتة المخصصة لنشاطك.",
        fr: "Développement de logiciels, sites web et applications sur mesure pour votre activité.",
        en: "Custom software development, websites, and business automation solutions."
    },
    { 
        kw: ["prix","tarif","combien","cout","coût","devis","شحال","سعر","سومة","price","cost","chhal","somma"],
        ar: "السعر يختلف حسب نوع العطب والتاريخ. تواصل معنا عبر الواتساب على الرقم 0797202579 للحصول على تقدير سريع وسعر مجاني!",
        fr: "Salam ! Le prix dépend du diagnostic exact de votre appareil. Envoyez-nous les détails sur WhatsApp au 0797202579 pour un devis rapide !",
        en: "Prices depend on the issue diagnosis. Contact us on WhatsApp at 0797202579 for a free quote!"
    },
    { 
        kw: ["adresse","ou","où","localisation","situe","situé","oran","موقع","عنوان","وين","location","where","win"],
        ar: "مقرنا يقع في وهران، ميرامار — بالقرب من ثانوية لطفي (Oran, Miramar - Près du Lycée Lotfi).",
        fr: "Nous sommes basés à Oran, Miramar — juste près du Lycée Lotfi.",
        en: "We are located in Oran, Miramar — near Lycée Lotfi."
    },
    { 
        kw: ["horaire","heure","ouvert","disponib","وقت","أوقات","hours","open"],
        ar: "أوقات العمل: من السبت إلى الخميس، من الساعة 08:00 صباحاً إلى 17:00 مساءً.",
        fr: "Nos horaires d'ouverture : du Samedi au Jeudi, de 08h00 à 17h00.",
        en: "Working hours: Saturday to Thursday, 08:00 AM to 05:00 PM."
    },
    { 
        kw: ["contact","telephone","téléphone","numero","numéro","whatsapp","appel","هاتف","رقم","واتساب","phone","khoya","slm","salam"],
        ar: "يمكنكم الاتصال بنا على الرقم 0797202579 أو التواصل معنا مباشرة عبر الواتساب 📱",
        fr: "Salam ! Vous pouvez nous joindre directement par téléphone ou WhatsApp au 0797202579 📱",
        en: "Call us at 0797 20 25 79 or send us a WhatsApp message 📱"
    },
    { 
        kw: ["bonjour","salut","salam","hello","bjr","hi","مرحبا","سلام","أهلا","slm","wesh"],
        ar: "أهلاً وسهلاً بك! 👋 أنا ديلا (Della)، المساعد الذكي لشركة Mr Robot Systems. كيف يمكنني مساعدتك اليوم؟",
        fr: "Salam ! 👋 Je suis Della, l'assistant virtuel de Mr Robot. Comment puis-je vous aider aujourd'hui ?",
        en: "Hello! 👋 I'm Della, Mr Robot Systems assistant. How can I help you today?"
    },
    { 
        kw: ["merci","thanks","chokran","شكرا","يعطيك الصحة","chokrane","sahhit"],
        ar: "على الرحب والسعة! يسعدنا دائماً خدمتك. 😊",
        fr: "Avec grand plaisir ! N'hésitez pas si vous avez d'autres questions. 😊",
        en: "You're very welcome! Feel free to ask if you have more questions. 😊"
    },
    {
        kw: ["facebook","fb","page","reseau social","فيسبوك","فايسبوك"],
        ar: "صفحتنا الرسمية على فيسبوك: https://www.facebook.com/profile.php?id=61594007523187 👍 تابعونا لمشاهدة جديد أعمالنا وعروضنا!",
        fr: "Voici notre page Facebook officielle : https://www.facebook.com/profile.php?id=61594007523187 👍 Suivez-nous pour découvrir nos dernières interventions !",
        en: "Here is our official Facebook page: https://www.facebook.com/profile.php?id=61594007523187 👍 Follow us to see our latest work and updates!"
    }
];

const botSuggestions = ["Vos services ?", "Prix / devis", "Réseaux & WiFi", "Contact WhatsApp"];
let botHistory = [];
let suppressNextClick = false;

function positionBotBubble() {
    const bubble = document.getElementById('botBubble');
    const btn = document.getElementById('botToggle');
    if (!bubble || !btn) return;
    if (window.innerWidth <= 768) {
        bubble.style.top = '';
        bubble.style.left = '';
        bubble.style.right = '';
        bubble.style.bottom = '';
        return;
    }
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
    bubble.style.bottom = 'auto';
    bubble.style.right = 'auto';
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
    if (window.innerWidth <= 768) {
        panel.style.top = '';
        panel.style.left = '';
        panel.style.right = '';
        panel.style.bottom = '';
        return;
    }

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

window.addEventListener('resize', debounce(() => {
    const panel = document.getElementById('botPanel');
    const btn = document.getElementById('botToggle');
    if (window.innerWidth <= 768 && btn) {
        btn.style.top = '';
        btn.style.bottom = '';
        btn.style.left = '';
        btn.style.right = '';
    }
    if(panel && panel.classList.contains('open')) positionBotPanel();
    positionBotBubble();
}, 150));

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
        if (window.innerWidth <= 768) return;
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
    const lang = detectLang(text);
    for(const entry of botKB){
        if(entry.kw.some(k => q.includes(k))) return entry[lang] || entry.fr;
    }
    return null;
}

async function botAskAI(text){
    const cleanText = text.slice(0, 240);
    botHistory.push({ role: "user", content: cleanText });
    
    const rawMessages = [{ role: "system", content: BOT_SYSTEM_PROMPT }, ...botHistory.slice(-6)];
    const messages = rawMessages.map(m => ({
        role: m.role,
        content: m.role === "system" ? m.content : m.content.slice(0, 240)
    }));

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 7000);

    try {
        const res = await fetch(DELLA_PROXY_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ messages: messages }),
            signal: controller.signal
        });
        clearTimeout(timeoutId);

        if(!res.ok) throw new Error("Proxy error " + res.status);
        const data = await res.json();
        const reply = data.choices?.[0]?.message?.content?.trim();
        if(!reply) throw new Error("Réponse vide");
        botHistory.push({ role: "assistant", content: reply });
        return reply;
    } catch(err) {
        clearTimeout(timeoutId);
        throw err;
    }
}

function botSend(){
    const input = document.getElementById('botInput');
    if (!input) return;
    const text = input.value.trim();
    if(!text) return;
    
    botAddMsg('user', text);
    input.value = '';

    const typingEl = botAddMsg('bot', '…');

    const finish = (reply) => {
        if (typingEl) typingEl.textContent = reply;
    };

    // 1. Réponse instantanée via la base de connaissances (0ms)
    const kbAnswer = botFindAnswer(text);
    if(kbAnswer){
        setTimeout(() => finish(kbAnswer), 150);
        return;
    }

    // 2. Si non trouvé dans la KB, appel vers l'IA Gemini 3.6 Flash
    botAskAI(text)
        .then(reply => finish(reply))
        .catch(() => {
            const lang = detectLang(text);
            const fallbackMsg = lang === 'ar'
                ? "أهلاً بك! 👋 فريق Mr Robot في خدمتك بمدينة وهران (ميرامار). للحصول على إجابة سريعة أو استفسار مخصص، تواصل معنا عبر الواتساب: 0797202579 📱"
                : "Bonjour ! 👋 L'équipe Mr Robot à Oran (Miramar) est à votre service. Pour un devis ou une question spécifique, contactez-nous directement sur WhatsApp au 0797202579 📱";
            finish(fallbackMsg);
        });
}

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
            setTimeout(hideBotBubble, 12000);
        }
    }, 2200);
});

// ============================================================
// 5. VOCAL INPUT (WEB SPEECH API)
// ============================================================
function initVoiceInput() {
    const btnMic = document.getElementById('botBtnMic');
    const input = document.getElementById('botInput');
    if (!btnMic || !input) return;

    const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRec) {
        btnMic.addEventListener('click', () => {
            showToast(currentActiveLang === 'AR' ? "خاصية التعرف على الصوت غير مدعومة في هذا المتصفح." : "La reconnaissance vocale n'est pas supportée sur ce navigateur.", 'error');
        });
        return;
    }

    const recognition = new SpeechRec();
    recognition.continuous = false;
    recognition.interimResults = false;

    let isListening = false;

    btnMic.addEventListener('click', () => {
        if (isListening) {
            recognition.stop();
            return;
        }
        recognition.lang = currentActiveLang === 'AR' ? 'ar-DZ' : (currentActiveLang === 'EN' ? 'en-US' : 'fr-FR');
        try {
            recognition.start();
            isListening = true;
            btnMic.classList.add('listening');
            input.placeholder = currentActiveLang === 'AR' ? "استماع... تكلم الآن 🎙️" : "Écoute en cours... parlez maintenant 🎙️";
        } catch (e) {
            isListening = false;
            btnMic.classList.remove('listening');
        }
    });

    recognition.onresult = (e) => {
        const transcript = e.results?.[0]?.[0]?.transcript;
        if (transcript) {
            input.value = transcript;
            botSend();
        }
    };

    recognition.onerror = (e) => {
        isListening = false;
        btnMic.classList.remove('listening');
        input.placeholder = currentActiveLang === 'AR' ? "اكتب سؤالك هنا..." : "Écrivez votre question...";
        if (e.error === 'not-allowed') {
            showToast(currentActiveLang === 'AR' ? "يرجى السماح بالوصول إلى الميكروفون." : "Veuillez autoriser l'accès au microphone.", 'error');
        }
    };

    recognition.onend = () => {
        isListening = false;
        btnMic.classList.remove('listening');
        input.placeholder = currentActiveLang === 'AR' ? "اكتب سؤالك هنا..." : "Écrivez votre question...";
    };
}

// ============================================================
// 6. WHATSAPP CHAT EXPORT
// ============================================================
function exportChatToWhatsApp() {
    const msgs = document.getElementById('botMsgs');
    let summary = "";
    if (msgs) {
        const userMsgs = Array.from(msgs.querySelectorAll('.bot-msg.user')).map(m => m.textContent.trim());
        if (userMsgs.length > 0) {
            summary = userMsgs.slice(-3).join(' | ');
        }
    }

    let text;
    if (currentActiveLang === 'AR') {
        text = "مرحباً مستر روبوت ! تواصلت مع المساعد ديلا بخصوص المشكلة التالية:\n" + (summary ? "« " + summary + " »" : "طلب تشخيص وصيانة.");
    } else {
        text = "Bonjour Mr Robot ! J'ai échangé avec votre assistant Della pour la demande suivante :\n" + (summary ? "« " + summary + " »" : "Demande de diagnostic technique.");
    }

    const waUrl = `https://wa.me/213797202579?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
}

// ============================================================
// 7. BEFORE / AFTER INTERACTIVE SLIDER
// ============================================================
function initBeforeAfterSlider() {
    const slider = document.getElementById('baSlider');
    if (!slider) return;

    let isSliding = false;

    function setSliderPosition(clientX) {
        const rect = slider.getBoundingClientRect();
        let x = clientX - rect.left;
        if (currentActiveLang === 'AR') {
            x = rect.width - x;
        }
        let pct = (x / rect.width) * 100;
        pct = Math.max(5, Math.min(95, pct));
        slider.style.setProperty('--ba-pos', `${pct}%`);
    }

    function onPointerMove(e) {
        if (!isSliding) return;
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        setSliderPosition(clientX);
    }

    function onPointerUp() {
        isSliding = false;
        window.removeEventListener('mousemove', onPointerMove);
        window.removeEventListener('mouseup', onPointerUp);
        window.removeEventListener('touchmove', onPointerMove);
        window.removeEventListener('touchend', onPointerUp);
    }

    function onPointerDown(e) {
        isSliding = true;
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        setSliderPosition(clientX);

        window.addEventListener('mousemove', onPointerMove, { passive: true });
        window.addEventListener('mouseup', onPointerUp, { passive: true });
        window.addEventListener('touchmove', onPointerMove, { passive: true });
        window.addEventListener('touchend', onPointerUp, { passive: true });
    }

    slider.addEventListener('mousedown', onPointerDown);
    slider.addEventListener('touchstart', onPointerDown, { passive: true });
}

// ============================================================
// 8. EXPRESS DIAGNOSTIC ESTIMATOR
// ============================================================
const estimatorData = {
    laptop: {
        symptoms: [
            {
                id: "power",
                sKey: "s1",
                label_fr: "Ne s'allume plus du tout",
                label_ar: "لا يشتغل نهائياً",
                label_en: "Won't turn on at all",
                title_fr: "Diagnostic Carte Mère / Alimentation",
                title_ar: "تشخيص اللوحة الأم ودارة الطاقة",
                title_en: "Motherboard / Power Diagnostic",
                desc_fr: "Court-circuit carte mère, composant MOSFET grillé ou contrôleur de charge défaillant.",
                desc_ar: "احتمال دارة قصيرة في اللوحة الأم، عطب موسفت أو دائرة الشحن.",
                desc_en: "Motherboard short circuit, blown MOSFET or charging controller failure.",
                time_fr: "24h à 48h",
                time_ar: "24 إلى 48 ساعة",
                time_en: "24h to 48h"
            },
            {
                id: "screen",
                sKey: "s2",
                label_fr: "Écran noir / Pas d'affichage",
                label_ar: "شاشة سوداء دون إقلاع",
                label_en: "Black screen / No display",
                title_fr: "Panne Affichage / Puce Graphique",
                title_ar: "عطب العرض / شريحة الرسومات",
                title_en: "Display / GPU Issue",
                desc_fr: "Vérification nappe écran, puce GPU ou banc de mémoire RAM.",
                desc_ar: "فحص كابل الشاشة الداخلي، كرت الشاشة أو شرائح الرام.",
                desc_en: "Checking display cable, GPU chip or RAM memory sticks.",
                time_fr: "24h",
                time_ar: "24 ساعة",
                time_en: "24h"
            },
            {
                id: "slow",
                sKey: "s2",
                label_fr: "Très lent / Virus / Crash Windows",
                label_ar: "بطء شديد / فيروسات / تشنج",
                label_en: "Very slow / Virus / OS crash",
                title_fr: "Optimisation & Décontamination PC",
                title_ar: "تحسين النظام وإزالة الفيروسات",
                title_en: "System Optimization & Cleanup",
                desc_fr: "Nettoyage système, suppression de menaces et installation de SSD haute vitesse.",
                desc_ar: "تنظيف النظام، حذف البرمجيات الضارة وترقية قرص SSD فائق السرعة.",
                desc_en: "System cleanup, malware removal and high-speed SSD upgrade.",
                time_fr: "Même jour (3h-5h)",
                time_ar: "نفس اليوم (3 إلى 5 ساعات)",
                time_en: "Same day (3h-5h)"
            }
        ]
    },
    board: {
        symptoms: [
            {
                id: "short",
                sKey: "s1",
                label_fr: "Court-circuit / Odeur de brûlé",
                label_ar: "دارة قصيرة / رائحة احتراق",
                label_en: "Short circuit / Burnt smell",
                title_fr: "Micro-soudure & Réparation de Pistes",
                title_ar: "لحام دقيق وإصلاح المسارات المحترقة",
                title_en: "Micro-soldering & Trace Repair",
                desc_fr: "Inspection haute précision sous microscope, remplacement de condensateurs et bobines CMS.",
                desc_ar: "فحص مجهري عالي الدقة، تغيير المكثفات والمكونات السطحية SMD.",
                desc_en: "High-precision microscope inspection, SMD capacitor and coil replacement.",
                time_fr: "24h à 72h",
                time_ar: "24 إلى 72 ساعة",
                time_en: "24h to 72h"
            },
            {
                id: "liquid",
                sKey: "s1",
                label_fr: "Oxydation / Liquide renversé",
                label_ar: "أكسدة / تسرب سوائل",
                label_en: "Oxidation / Liquid spill",
                title_fr: "Bain Ultrasons & Désoxydation",
                title_ar: "تنظيف بالأمواج فوق الصوتية وإزالة الأكسدة",
                title_en: "Ultrasonic Bath & Deoxidation",
                desc_fr: "Nettoyage chimique spécialisé pour neutraliser la corrosion et restaurer les soudures.",
                desc_ar: "تنظيف كيميائي متخصص لإيقاف التآكل وترميم نقاط اللحام.",
                desc_en: "Specialized chemical ultrasonic cleaning to neutralize corrosion and restore traces.",
                time_fr: "48h",
                time_ar: "48 ساعة",
                time_en: "48h"
            }
        ]
    },
    network: {
        symptoms: [
            {
                id: "wifi",
                sKey: "s3",
                label_fr: "Coupures WiFi / Portée insuffisante",
                label_ar: "انقطاع الواي فاي / تغطية ضعيفة",
                label_en: "WiFi drops / Weak coverage",
                title_fr: "Optimisation Infrastructure WiFi Mesh",
                title_ar: "تحسين شبكة الواي فاي الاحترافية",
                title_en: "WiFi Mesh Infrastructure Optimization",
                desc_fr: "Installation de bornes professionnelles, extension de couverture et câblage RJ45.",
                desc_ar: "تركيب نقاط وصول احترافية، توسيع التغطية وتمديد كابلات الشبكة.",
                desc_en: "Installation of professional APs, coverage extension and RJ45 cabling.",
                time_fr: "Sur rendez-vous",
                time_ar: "حسب الموعد",
                time_en: "By appointment"
            },
            {
                id: "sec",
                sKey: "s3",
                label_fr: "Sécurisation réseau & Pare-feu",
                label_ar: "تأمين الشبكة وجدار الحماية",
                label_en: "Network Security & Firewall",
                title_fr: "Audit de Sécurité & Filtrage d'Accès",
                title_ar: "تدقيق أمان الشبكة وعزل النطاقات",
                title_en: "Security Audit & Access Control",
                desc_fr: "Configuration de règles firewall, isolation VLAN et protection contre les intrusions.",
                desc_ar: "ضبط قواعد جدار الحماية، عزل شبكات VLAN وحماية الخوادم.",
                desc_en: "Firewall rules configuration, VLAN segmentation and intrusion prevention.",
                time_fr: "Sur étude",
                time_ar: "بعد الدراسة",
                time_en: "Custom assessment"
            }
        ]
    },
    cctv: {
        symptoms: [
            {
                id: "remote",
                sKey: "s4",
                label_fr: "Perte d'accès smartphone à distance",
                label_ar: "انقطاع البث عبر الهاتف الذكي",
                label_en: "Loss of remote phone access",
                title_fr: "Configuration Cloud & Accès Distant NVR",
                title_ar: "ضبط السحابة والبث المباشر للـ NVR",
                title_en: "Cloud Setup & Remote NVR Access",
                desc_fr: "Reconfiguration ports, DNS/P2P et mise à jour firmware pour accès temps réel.",
                desc_ar: "إعادة ضبط المنافذ وخدمة P2P وتحديث نظام الـ NVR للمشاهدة الحية.",
                desc_en: "Port reconfiguration, P2P/DNS setup and firmware update for real-time live view.",
                time_fr: "Même jour (1h-2h)",
                time_ar: "نفس اليوم (1 إلى 2 ساعة)",
                time_en: "Same day (1h-2h)"
            },
            {
                id: "install",
                sKey: "s4",
                label_fr: "Nouvelle installation ou caméra HS",
                label_ar: "تركيب كاميرات جديدة أو كاميرا معطلة",
                label_en: "New camera install or broken unit",
                title_fr: "Installation Caméras IP & Câblage PoE",
                title_ar: "تركيب كاميرات IP وتمديد كابلات PoE",
                title_en: "IP Camera Installation & PoE Cabling",
                desc_fr: "Pose soignée, étanchéité connecteurs et optimisation de l'angle de vision.",
                desc_ar: "تثبيت احترافي، عزل الموصلات ضد الرطوبة وتوجيه دقيق للرؤية الليلية.",
                desc_en: "Clean mounting, weatherproof connector sealing and night vision calibration.",
                time_fr: "24h à 48h",
                time_ar: "24 إلى 48 ساعة",
                time_en: "24h to 48h"
            }
        ]
    }
};

let currentSelectedDevice = 'laptop';
let currentSelectedSymptomIdx = 0;

function renderEstimatorSymptoms() {
    const symptomContainer = document.getElementById('estSymptomOptions');
    if (!symptomContainer) return;

    const deviceData = estimatorData[currentSelectedDevice];
    if (!deviceData || !deviceData.symptoms) return;

    symptomContainer.innerHTML = '';
    const langKey = currentActiveLang === 'AR' ? 'label_ar' : (currentActiveLang === 'EN' ? 'label_en' : 'label_fr');

    deviceData.symptoms.forEach((sym, idx) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'est-btn' + (idx === currentSelectedSymptomIdx ? ' active' : '');
        btn.textContent = sym[langKey];
        btn.addEventListener('click', () => {
            currentSelectedSymptomIdx = idx;
            document.querySelectorAll('#estSymptomOptions .est-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            updateEstimatorResult();
        });
        symptomContainer.appendChild(btn);
    });

    updateEstimatorResult();
}

function updateEstimatorResult() {
    const titleEl = document.getElementById('estResTitle');
    const descEl = document.getElementById('estResDesc');
    const timeEl = document.getElementById('estResTime');
    if (!titleEl || !descEl || !timeEl) return;

    const deviceData = estimatorData[currentSelectedDevice];
    if (!deviceData) return;
    const sym = deviceData.symptoms[currentSelectedSymptomIdx] || deviceData.symptoms[0];
    if (!sym) return;

    const langSuffix = currentActiveLang === 'AR' ? '_ar' : (currentActiveLang === 'EN' ? '_en' : '_fr');
    titleEl.textContent = sym['title' + langSuffix] || sym.title_fr;
    descEl.textContent = sym['desc' + langSuffix] || sym.desc_fr;
    timeEl.textContent = sym['time' + langSuffix] || sym.time_fr;
}

function initEstimator() {
    const deviceButtons = document.querySelectorAll('#estDeviceOptions .est-btn');
    deviceButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            deviceButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentSelectedDevice = btn.getAttribute('data-device') || 'laptop';
            currentSelectedSymptomIdx = 0;
            renderEstimatorSymptoms();
        });
    });

    const applyBtn = document.getElementById('estApplyBtn');
    if (applyBtn) {
        applyBtn.addEventListener('click', () => {
            const deviceData = estimatorData[currentSelectedDevice];
            const sym = deviceData ? (deviceData.symptoms[currentSelectedSymptomIdx] || deviceData.symptoms[0]) : null;
            
            if (sym && sym.sKey) {
                selectService(sym.sKey);
            }

            const inpMsg = document.getElementById('inp_msg');
            if (inpMsg && sym) {
                const langSuffix = currentActiveLang === 'AR' ? '_ar' : (currentActiveLang === 'EN' ? '_en' : '_fr');
                const symLabel = sym['label' + langSuffix] || sym.label_fr;
                inpMsg.value = currentActiveLang === 'AR' 
                    ? `استفسار بخصوص: ${symLabel}` 
                    : `Demande de diagnostic pour : ${symLabel}`;
            }

            const contactSec = document.getElementById('contact');
            if (contactSec) {
                contactSec.scrollIntoView({ behavior: 'smooth' });
                setTimeout(() => {
                    const inpName = document.getElementById('inp_name');
                    if (inpName) inpName.focus();
                }, 600);
            }
        });
    }

    renderEstimatorSymptoms();
}
