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
        est_btn_book: "Prendre en charge avec cette estimation ↗",
        nav_tracker: "Suivi",
        nav_reviews: "Avis",
        hero_cta_track: "📦 Suivi Réparation",
        status_open: "Atelier Ouvert (08h00 - 17h00)",
        status_closed: "Atelier Fermé (Ouvre à 08h00)",
        gps_gmaps: "Itinéraire Google Maps ↗",
        gps_waze: "Waze ↗",
        track_tag: "// CENTRE DE SUIVI TECHNIQUE",
        track_title: "SUIVRE L'ÉTAT DE MA RÉPARATION",
        track_subtitle: "Saisissez votre N° de ticket (ex: MR-2401) ou votre téléphone pour voir l'avancement en atelier.",
        track_btn: "VÉRIFIER LE STATUT",
        track_placeholder: "Numéro de ticket (ex: MR-2401)...",
        step1_title: "Réception", step1_desc: "Enregistré à l'atelier",
        step2_title: "Diagnostic", step2_desc: "Microscope & Test d'alim",
        step3_title: "Intervention", step3_desc: "Micro-soudure & CMS",
        step4_title: "Banc de test", step4_desc: "Contrôle thermique & charge",
        step5_title: "Prêt au retrait", step5_desc: "Disponible à Miramar",
        track_wa_btn: "Échanger avec le technicien sur WhatsApp ↗",
        rev_tag: "// RETOURS D'EXPÉRIENCE VÉRIFIÉS",
        rev_title: "AVIS & TÉMOIGNAGES CLIENTS",
        rev_stat: "4.9/5 — Plus de 350 réparations réussies à Oran",
        photo_attach_lbl: "📸 Joindre une photo de la panne (optionnel)",
        photo_attached: "Photo prête à être transmise",
        pwa_title: "Installer l'Application Mr Robot",
        pwa_desc: "Accès instantané aux diagnostics, suivi et hotline directe sur votre écran d'accueil.",
        pwa_btn: "Installer",
        track_not_found: "Ticket introuvable. Veuillez vérifier votre code (ex: MR-2401) ou contacter le 0797 20 25 79.",
        m_tab_home: "Accueil",
        m_tab_services: "Services",
        m_tab_tracker: "Suivi"
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
        est_btn_book: "طلب الخدمة بناءً على هذا التقدير ↗",
        nav_tracker: "التتبع",
        nav_reviews: "الآراء",
        hero_cta_track: "📦 تتبع الصيانة",
        status_open: "الورشة مفتوحة (08:00 - 17:00)",
        status_closed: "الورشة مغلقة (تفتح الساعة 08:00)",
        gps_gmaps: "مسار Google Maps ↗",
        gps_waze: "Waze ↗",
        track_tag: "// مركز التتبع الفني",
        track_title: "متابعة حالة صيانة جهازي",
        track_subtitle: "أدخل رقم الوصل (مثال: MR-2401) أو رقم هاتفك لمعرفة تقدم العمل في الورشة.",
        track_btn: "فحص الحالة",
        track_placeholder: "رقم التذكرة (مثال: MR-2401)...",
        step1_title: "الاستلام", step1_desc: "تم التسجيل بالورشة",
        step2_title: "التشخيص", step2_desc: "فحص بالمجهر ومصدر الطاقة",
        step3_title: "التدخل التقني", step3_desc: "لحام دقيق وتبديل دوائر CMS",
        step4_title: "منصة الاختبار", step4_desc: "فحص حراري واختبار الجهد",
        step5_title: "جاهز للاستلام", step5_desc: "متوفر بمقر ميرامار",
        track_wa_btn: "محادثة الفني عبر واتساب ↗",
        rev_tag: "// تقييمات العملاء الموثقة",
        rev_title: "آراء وتجارب العملاء",
        rev_stat: "4.9/5 — أكثر من 350 عملية صيانة ناجحة في وهران",
        photo_attach_lbl: "📸 إرفاق صورة العطل (اختياري)",
        photo_attached: "الصورة جاهزة للإرسال",
        pwa_title: "تثبيت تطبيق مستر روبوت",
        pwa_desc: "وصول سريع ومباشر للتشخيص، تتبع الصيانة والاتصال الفوري على شاشتك الرئيسية.",
        pwa_btn: "تثبيت",
        track_not_found: "لم يتم العثور على التذكرة. يرجى التحقق من الرمز (مثال: MR-2401) أو الاتصال بـ 0797 20 25 79.",
        m_tab_home: "الرئيسية",
        m_tab_services: "الخدمات",
        m_tab_tracker: "التتبع"
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
        est_btn_book: "Request service with this estimate ↗",
        nav_tracker: "Tracker",
        nav_reviews: "Reviews",
        hero_cta_track: "📦 Repair Tracker",
        status_open: "Workshop Open (08:00 - 17:00)",
        status_closed: "Workshop Closed (Opens at 08:00)",
        gps_gmaps: "Google Maps Route ↗",
        gps_waze: "Waze ↗",
        track_tag: "// TECHNICAL TRACKING CENTER",
        track_title: "TRACK REPAIR STATUS",
        track_subtitle: "Enter your ticket number (e.g., MR-2401) or phone number to view workshop progress.",
        track_btn: "CHECK STATUS",
        track_placeholder: "Ticket number (e.g. MR-2401)...",
        step1_title: "Reception", step1_desc: "Logged at workshop",
        step2_title: "Diagnosis", step2_desc: "Microscope & power rails check",
        step3_title: "Intervention", step3_desc: "Micro-soldering & SMD ICs",
        step4_title: "Bench Test", step4_desc: "Thermal load & endurance",
        step5_title: "Ready for Pickup", step5_desc: "Available at Miramar",
        track_wa_btn: "Chat with Technician on WhatsApp ↗",
        rev_tag: "// VERIFIED CUSTOMER FEEDBACK",
        rev_title: "CLIENT REVIEWS & TESTIMONIALS",
        rev_stat: "4.9/5 — Over 350 successful repairs completed in Oran",
        photo_attach_lbl: "📸 Attach fault photo (optional)",
        photo_attached: "Photo ready to send",
        pwa_title: "Install Mr Robot Web App",
        pwa_desc: "Instant access to diagnostics, repair tracking and direct hotline right on your home screen.",
        pwa_btn: "Install",
        track_not_found: "Ticket not found. Please verify your reference (e.g., MR-2401) or call 0797 20 25 79.",
        m_tab_home: "Home",
        m_tab_services: "Services",
        m_tab_tracker: "Track"
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
        sparksContainer: document.getElementById('sparks-container'),
        topNavCli: document.getElementById('topNavCli'),
        cyberTerminal: document.getElementById('cyberTerminal'),
        cliCloseBtn: document.getElementById('cliCloseBtn'),
        cliCloseDot: document.getElementById('cliCloseDot'),
        cliInput: document.getElementById('cliInput'),
        cliBody: document.getElementById('cliBody'),
        trackInput: document.getElementById('trackInput'),
        trackBtn: document.getElementById('trackBtn'),
        trackerResult: document.getElementById('trackerResult'),
        heroBtnTrack: document.getElementById('heroBtnTrack'),
        photoInput: document.getElementById('photoInput'),
        photoAttachBtn: document.getElementById('photoAttachBtn'),
        photoPreviewBox: document.getElementById('photoPreviewBox'),
        photoPreviewImg: document.getElementById('photoPreviewImg'),
        photoName: document.getElementById('photoName'),
        photoRemoveBtn: document.getElementById('photoRemoveBtn'),
        topNavPwa: document.getElementById('topNavPwa'),
        pwaModal: document.getElementById('pwaModal'),
        pwaModalClose: document.getElementById('pwaModalClose'),
        pwaModalInstallBtn: document.getElementById('pwaModalInstallBtn'),
        atelierStatusDot: document.getElementById('atelierStatusDot'),
        atelierStatusTxt: document.getElementById('atelierStatusTxt')
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
    initRepairTracker();
    initPhotoAttachment();
    initCyberTerminal();
    initPwa();
    updateAtelierStatus();
    setInterval(updateAtelierStatus, 60000);
    typeWriter(translations['FR'].type_text);
    initSparks();
    initMobileNavigation();
});

function initMobileNavigation() {
    const btnBackToTop = document.getElementById('btnBackToTop');
    const quickChips = document.querySelectorAll('.mq-chip');
    const tabHome = document.getElementById('mTabHome');
    const tabServices = document.getElementById('mTabServices');
    const tabTracker = document.getElementById('mTabTracker');

    window.addEventListener('scroll', debounce(() => {
        const scrollY = window.scrollY || window.pageYOffset;

        if (btnBackToTop) {
            if (scrollY > 380) {
                btnBackToTop.classList.add('show');
            } else {
                btnBackToTop.classList.remove('show');
            }
        }

        const servicesSec = document.getElementById('services');
        const trackerSec = document.getElementById('tracker');

        let currentSection = 'hero';
        if (trackerSec && scrollY >= trackerSec.offsetTop - 200) {
            currentSection = 'tracker';
        } else if (servicesSec && scrollY >= servicesSec.offsetTop - 200) {
            currentSection = 'services';
        }

        if (tabHome) tabHome.classList.toggle('active', currentSection === 'hero');
        if (tabServices) tabServices.classList.toggle('active', currentSection === 'services');
        if (tabTracker) tabTracker.classList.toggle('active', currentSection === 'tracker');

        quickChips.forEach(chip => {
            const href = chip.getAttribute('href');
            if (!href) return;
            const target = document.querySelector(href);
            if (target) {
                const top = target.offsetTop - 220;
                const bottom = top + target.offsetHeight;
                chip.classList.toggle('active', scrollY >= top && scrollY < bottom);
            }
        });
    }, 50), { passive: true });

    if (btnBackToTop) {
        btnBackToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone) {
        const pwaBtn = document.getElementById('topNavPwa');
        if (pwaBtn) pwaBtn.style.display = 'none';
    }
}

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

    const trackInput = document.getElementById('trackInput');
    if (trackInput) {
        trackInput.placeholder = t.track_placeholder || "Numéro de ticket (ex: MR-2401)...";
    }

    updateAtelierStatus();

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
    let photoAttachmentNote = '';
    if (window.attachedPhotoName) {
        photoAttachmentNote = `\n📸 [Photo jointe : ${window.attachedPhotoName} (prête à envoyer sur le chat)]`;
    }
    const fullMsg = `${t.wa_greeting || ''}\n\n${t.wa_lbl_name || 'Nom :'} ${escapeHtml(name)}\n${t.wa_lbl_phone || 'Téléphone :'} ${escapeHtml(phone)}\n${t.wa_lbl_service} ${escapeHtml(serviceName)}\n${t.wa_lbl_desc} ${escapeHtml(message)}${photoAttachmentNote}`;

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
            const isWa = btn.getAttribute('data-submit') === 'wa';
            const label = isWa ? t.btn_wa : t.btn_email;
            if (isWa) {
                btn.innerHTML = `<span class="app-ic" style="background:#25D366;"><svg viewBox="0 0 32 32" width="16" height="16" fill="#fff"><path d="M16 3C9 3 3.3 8.6 3.3 15.5c0 2.4.7 4.7 1.9 6.6L3 29l7.2-2.1c1.8 1 3.8 1.5 5.8 1.5 7 0 12.7-5.6 12.7-12.5S23 3 16 3zm0 22.8c-1.9 0-3.7-.5-5.3-1.5l-.4-.2-4.3 1.3 1.3-4.2-.2-.4C6 19 5.4 17.3 5.4 15.5c0-5.9 4.8-10.6 10.6-10.6S26.6 9.6 26.6 15.5 21.8 25.8 16 25.8z"/><path d="M21.6 18.1c-.3-.1-1.8-.9-2.1-1-.3-.1-.5-.2-.7.1-.2.3-.8 1-1 1.2-.2.2-.4.3-.7.1-.3-.2-1.4-.5-2.6-1.6-1-.9-1.6-2-1.8-2.3-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.7-1-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.2 3.3 5.3 4.6.7.3 1.3.5 1.8.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.5.3-.7.3-1.3.2-1.5-.1-.1-.3-.2-.6-.4z"/></svg></span><span>${label}</span>`;
            } else {
                btn.innerHTML = `<span class="app-ic" style="background:#fff;"><svg viewBox="0 0 48 36" width="18" height="14"><path fill="#4285F4" d="M5 4h38a5 5 0 0 1 5 5v18a5 5 0 0 1-5 5H5a5 5 0 0 1-5-5V9a5 5 0 0 1 5-5z"/><path fill="#34A853" d="M0 11v16a5 5 0 0 0 5 5h3V15z"/><path fill="#FBBC05" d="M48 11v16a5 5 0 0 1-5 5h-3V15z"/><path fill="#EA4335" d="M8 8v24h5V16.5l11 8.3 11-8.3V32h5V8l-16 12z"/><path fill="#C5221F" d="M8 8l16 12L40 8a5 5 0 0 0-3-1H11a5 5 0 0 0-3 1z"/></svg></span><span>${label}</span>`;
            }
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
// 7. BEFORE / AFTER INTERACTIVE SLIDERS
// ============================================================
function initBeforeAfterSlider() {
    const sliders = document.querySelectorAll('.ba-slider-container');
    if (!sliders.length) return;

    sliders.forEach(slider => {
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
            if (!isSliding) return;
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
    });
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

// ============================================================
// 5. ATELIER STATUS INDICATOR (Horaires 08h00 - 17h00)
// ============================================================
function updateAtelierStatus() {
    const dot = document.getElementById('atelierStatusDot');
    const txt = document.getElementById('atelierStatusTxt');
    if (!dot || !txt) return;

    // Horaires: Samedi à Jeudi de 08h00 à 17h00 (Oran UTC+1)
    const now = new Date();
    const utcHours = now.getUTCHours();
    const algeriaHour = (utcHours + 1) % 24;
    const utcDay = now.getUTCDay();
    const day = (algeriaHour < utcHours ? (utcDay + 1) % 7 : utcDay);
    const isFriday = (day === 5);
    const isOpen = !isFriday && (algeriaHour >= 8 && algeriaHour < 17);

    const t = translations[currentActiveLang] || translations.FR;
    if (isOpen) {
        dot.classList.remove('closed');
        dot.classList.add('open');
        txt.textContent = t.status_open || "Atelier Ouvert (08h00 - 17h00)";
    } else {
        dot.classList.remove('open');
        dot.classList.add('closed');
        txt.textContent = t.status_closed || "Atelier Fermé (Ouvre à 08h00)";
    }
}

// ============================================================
// 6. SUIVI DE RÉPARATION EN LIGNE (Repair Tracker)
// ============================================================
const repairTickets = {
    'MR-2401': {
        device: 'MacBook Pro 16" M1 Pro (2021) — Court-circuit Ligne PPBUS_G3H',
        badge: 'EN BANC DE TEST (ÉTAPE 4/5)',
        badgeColor: '#ffd700',
        step: 4,
        date: '05/09/2026',
        technician: 'Yassin Della',
        notes: 'Composant CMS défectueux remplacé sous microscope. Phase de banc d\'essai thermique et stabilité en charge en cours.'
    },
    'MR-1082': {
        device: 'Carte mère ASUS ROG Strix Z790 — Pins Socket LGA1700 & VRM',
        badge: 'PRÊT AU RETRAIT (ÉTAPE 5/5)',
        badgeColor: '#00ffcc',
        step: 5,
        date: '04/09/2026',
        technician: 'Wahib Della',
        notes: 'Pins redressés au trinoculaire + remplacement MOSFET VRM. Tests de stabilité réussis (100% OK). Disponible au retrait à l\'atelier Miramar.'
    },
    'MR-3309': {
        device: 'Serveur NAS Synology DS920+ — Alimentation 12V & Intégrité RAID',
        badge: 'DIAGNOSTIC APPROFONDI (ÉTAPE 2/5)',
        badgeColor: '#0070f3',
        step: 2,
        date: '06/09/2026',
        technician: 'Yassin Della',
        notes: 'Alimentation 12V restaurée. Analyse de l\'intégrité des matrices RAID et des disques durs en cours.'
    }
};

function initRepairTracker() {
    const trackInput = document.getElementById('trackInput');
    const trackBtn = document.getElementById('trackBtn');
    const trackResult = document.getElementById('trackResult');
    const heroBtnTrack = document.getElementById('heroBtnTrack');

    if (heroBtnTrack) {
        heroBtnTrack.addEventListener('click', () => {
            const trackerSec = document.getElementById('tracker');
            if (trackerSec) trackerSec.scrollIntoView({ behavior: 'smooth' });
            if (trackInput) setTimeout(() => trackInput.focus(), 600);
        });
    }

    function searchTicket() {
        if (!trackInput) return;
        let query = trackInput.value.trim().toUpperCase();
        if (!query) {
            showToast("Veuillez saisir votre N° de ticket (ex: MR-2401)", "info");
            trackInput.focus();
            return;
        }

        // Support formats like '2401' -> 'MR-2401'
        if (/^\d{4}$/.test(query)) {
            query = `MR-${query}`;
        }

        const ticket = repairTickets[query];
        if (!ticket) {
            const t = translations[currentActiveLang] || translations.FR;
            showToast(t.track_not_found || "Ticket introuvable. Exemple: MR-2401", "error");
            return;
        }

        renderTicketResult(query, ticket);
    }

    function renderTicketResult(ticketId, ticket) {
        if (!trackResult) return;
        
        const trackIdEl = document.getElementById('trackId');
        const trackDevice = document.getElementById('trackDevice');
        const trackBadge = document.getElementById('trackBadge');
        const trackTechNote = document.getElementById('trackTechNote');
        const trackWaBtn = document.getElementById('trackWaBtn');

        if (trackIdEl) trackIdEl.textContent = `TICKET : #${ticketId}`;
        if (trackDevice) trackDevice.textContent = ticket.device;
        if (trackBadge) {
            trackBadge.textContent = ticket.badge;
            trackBadge.style.color = ticket.badgeColor;
            trackBadge.style.borderColor = ticket.badgeColor;
        }
        if (trackTechNote) {
            trackTechNote.innerHTML = `🔧 <em>Note (${ticket.technician}) :</em> ${escapeHtml(ticket.notes)}`;
        }

        if (trackWaBtn) {
            const waMsg = `Bonjour M. Della, je consulte l'état de mon ticket *${ticketId}* (${ticket.device}). Statut : ${ticket.badge}. Pouvez-vous me renseigner ?`;
            trackWaBtn.href = `https://wa.me/${_SECURE_DATA.w}?text=${encodeURIComponent(waMsg)}`;
        }

        const steps = trackResult.querySelectorAll('.track-step');
        steps.forEach(stepEl => {
            const stepNum = parseInt(stepEl.getAttribute('data-step'), 10);
            stepEl.classList.remove('active', 'completed');
            const dot = stepEl.querySelector('.track-step-dot');

            if (stepNum < ticket.step) {
                stepEl.classList.add('completed');
                if (dot) dot.innerHTML = '✓';
            } else if (stepNum === ticket.step) {
                stepEl.classList.add('active');
                if (dot) dot.innerHTML = '<span class="della-pulse-led"></span>';
            } else {
                if (dot) dot.textContent = stepNum;
            }
        });

        trackResult.style.display = 'block';
        trackResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        showToast(`✓ Ticket ${ticketId} synchronisé`, "success");
    }

    if (trackBtn) trackBtn.addEventListener('click', searchTicket);
    if (trackInput) {
        trackInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') searchTicket();
        });
    }
}

// ============================================================
// 7. ATTACHEMENT PHOTO DE LA PANNE
// ============================================================
window.attachedPhotoName = null;

function initPhotoAttachment() {
    const photoInput = document.getElementById('photoInput');
    const photoPreviewBox = document.getElementById('photoPreviewBox');
    const photoPreviewImg = document.getElementById('photoPreviewImg');
    const photoName = document.getElementById('photoName');
    const photoRemoveBtn = document.getElementById('photoRemoveBtn');

    if (!photoInput) return;

    photoInput.addEventListener('change', (e) => {
        const file = e.target.files && e.target.files[0];
        if (!file) return;

        // Max 5 Mo
        if (file.size > 5 * 1024 * 1024) {
            showToast("La photo dépasse la taille maximale autorisée (5 Mo).", "error");
            photoInput.value = '';
            return;
        }

        if (!file.type.startsWith('image/')) {
            showToast("Veuillez sélectionner un fichier image valide.", "error");
            photoInput.value = '';
            return;
        }

        const reader = new FileReader();
        reader.onload = (loadEvt) => {
            if (photoPreviewImg) photoPreviewImg.src = loadEvt.target.result;
            if (photoName) photoName.textContent = file.name;
            if (photoPreviewBox) photoPreviewBox.style.display = 'flex';
            window.attachedPhotoName = file.name;
            const t = translations[currentActiveLang] || translations.FR;
            showToast(t.photo_attached || "Photo prête à être transmise", "info");
        };
        reader.readAsDataURL(file);
    });

    if (photoRemoveBtn) {
        photoRemoveBtn.addEventListener('click', () => {
            if (photoInput) photoInput.value = '';
            if (photoPreviewBox) photoPreviewBox.style.display = 'none';
            if (photoPreviewImg) photoPreviewImg.src = '';
            window.attachedPhotoName = null;
        });
    }
}

// ============================================================
// 8. TERMINAL CYBERPUNK INTERACTIF (Mr Robot CLI)
// ============================================================
function initCyberTerminal() {
    const topNavCli = document.getElementById('topNavCli');
    const cyberTerminal = document.getElementById('cyberTerminal');
    const cliCloseBtn = document.getElementById('cliCloseBtn');
    const cliCloseDot = document.getElementById('cliCloseDot');
    const cliInput = document.getElementById('cliInput');
    const cliBody = document.getElementById('cliBody');

    if (!cyberTerminal || !cliInput || !cliBody) return;

    function openTerminal() {
        cyberTerminal.classList.add('open');
        cliInput.focus();
    }

    function closeTerminal() {
        cyberTerminal.classList.remove('open');
    }

    const secLaunchCli = document.getElementById('secLaunchCli');

    if (topNavCli) topNavCli.addEventListener('click', openTerminal);
    if (cliCloseBtn) cliCloseBtn.addEventListener('click', closeTerminal);
    if (cliCloseDot) cliCloseDot.addEventListener('click', closeTerminal);
    if (secLaunchCli) {
        secLaunchCli.addEventListener('click', () => {
            openTerminal();
            addCliLine('<span class="cli-prompt">mrrobot@root:~$</span> audit --security');
            setTimeout(() => {
                const isOp = document.getElementById('atelierStatusDot')?.classList.contains('open');
                addCliLine("DIAGNOSTIC & AUDIT SYSTÈME EN DIRECT :", "banner");
                addCliLine("  [✓] SSL / TLS 1.3 : Handshake chiffré certifié");
                addCliLine("  [✓] Pare-feu & Filtrage d'adresses IP : ACTIF");
                addCliLine("  [✓] Analyse des vulnérabilités réseau : 0 menace détectée");
                addCliLine(`  [✓] Atelier Miramar (Oran) : <span style="color:${isOp ? '#00ffcc' : '#ff4757'}">${isOp ? 'OUVERT (08h00 - 17h00)' : 'FERMÉ (Ouvre à 08h00)'}</span>`);
                addCliLine("  [✓] Della IA & Chiffrement bout en bout : Opérationnel");
            }, 300);
        });
    }

    cyberTerminal.addEventListener('click', (e) => {
        if (e.target === cyberTerminal) closeTerminal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && cyberTerminal.classList.contains('open')) {
            closeTerminal();
        }
    });

    function addCliLine(text, className = '') {
        const line = document.createElement('div');
        line.className = `cli-line ${className}`.trim();
        line.innerHTML = text;
        cliBody.appendChild(line);
        cliBody.scrollTop = cliBody.scrollHeight;
    }

    let diagState = null;

    const diagCatalog = {
        '1': {
            name: "PC Portable (Laptop)",
            symptoms: [
                {
                    label: "Ne s'allume plus du tout (aucun voyant)",
                    diag: "Court-circuit ligne 19V / Mosfet d'entrée ou puce d'alimentation brûlée",
                    delay: "24h à 48h",
                    price: "4 500 - 8 000 DZD"
                },
                {
                    label: "Écran noir mais voyants & ventilateurs actifs",
                    diag: "Panne BIOS corrompu, puce graphique ou contrôleur RAM",
                    delay: "24h à 48h",
                    price: "4 000 - 7 500 DZD"
                },
                {
                    label: "Surchauffe extrême / Coupure automatique en charge",
                    diag: "Pâte thermique asséchée, ventilateur encrassé ou caloduc percé",
                    delay: "Même jour (2h - 4h)",
                    price: "2 500 - 4 000 DZD"
                },
                {
                    label: "Charnière cassée, coque fissurée ou port de charge dessoudé",
                    diag: "Reconstruction résine époxy renforcée ou micro-soudure connecteur",
                    delay: "24h à 48h",
                    price: "3 500 - 6 500 DZD"
                }
            ]
        },
        '2': {
            name: "PC Fixe / Station de travail / Gamer",
            symptoms: [
                {
                    label: "Pas de démarrage / Alimentation en sécurité",
                    diag: "Bloc d'alimentation défaillant ou court-circuit étage VRM carte mère",
                    delay: "24h à 48h",
                    price: "3 000 - 7 000 DZD"
                },
                {
                    label: "Bips au démarrage / Redémarrage en boucle",
                    diag: "Incompatibilité ou défaillance barrette RAM / GPU non initialisé",
                    delay: "24h",
                    price: "2 500 - 5 000 DZD"
                },
                {
                    label: "Écran bleu BSOD / Windows plante ou freeze",
                    diag: "Secteurs défectueux SSD/HDD ou corruption système/pilotes",
                    delay: "24h",
                    price: "2 500 - 4 500 DZD"
                },
                {
                    label: "Surchauffe GPU/CPU sous forte charge",
                    diag: "Remplacement pads thermiques, repaste complet & airflow",
                    delay: "Même jour",
                    price: "2 500 - 5 000 DZD"
                }
            ]
        },
        '3': {
            name: "Écran / Moniteur",
            symptoms: [
                {
                    label: "L'écran ne s'allume pas du tout",
                    diag: "Condensateurs gonflés ou primaire carte d'alimentation",
                    delay: "24h à 48h",
                    price: "3 000 - 5 500 DZD"
                },
                {
                    label: "Voyant allumé mais dalle totalement noire",
                    diag: "Circuit rétroéclairage (Backlight Inverter) ou ruban LED HS",
                    delay: "24h à 48h",
                    price: "3 500 - 6 500 DZD"
                },
                {
                    label: "Image qui clignote ou s'éteint après 2 secondes",
                    diag: "Sécurité surtension déclenchée ou transfo inverter en fuite",
                    delay: "24h à 48h",
                    price: "3 000 - 5 000 DZD"
                },
                {
                    label: "Lignes verticales colorées / Artéfacts",
                    diag: "Nappe LVDS oxydée ou contrôleur T-Con défaillant",
                    delay: "24h à 72h",
                    price: "3 500 - 7 000 DZD"
                }
            ]
        },
        '4': {
            name: "Réseaux & Caméras CCTV",
            symptoms: [
                {
                    label: "Coupures réseau fréquentes / Pertes de paquets",
                    diag: "Câblage RJ45 non certifié, faux contact ou switch saturé",
                    delay: "Sur site / 24h",
                    price: "Sur devis (dès 3 500 DZD)"
                },
                {
                    label: "Caméras IP hors ligne sur NVR / Enregistrement perdu",
                    diag: "Alimentation PoE défaillante, conflit IP ou disque dur NVR HS",
                    delay: "24h",
                    price: "Sur devis (dès 4 000 DZD)"
                },
                {
                    label: "Baie de brassage emmêlée / Repérage nécessaire",
                    diag: "Restructuration complète, patch panels, repérage et certification",
                    delay: "1 à 2 jours",
                    price: "Sur devis"
                },
                {
                    label: "Accès distant caméras / VPN bloqué",
                    diag: "Configuration NAT/Ports, redirection DynDNS / Cloud P2P sécurisé",
                    delay: "Même jour",
                    price: "3 000 - 6 000 DZD"
                }
            ]
        }
    };

    function startDiagnosticFlow() {
        diagState = { step: 'device' };
        addCliLine("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━", "banner");
        addCliLine("<b>⚡ DIAGNOSTIC TECHNIQUE RAPIDE MR ROBOT</b>", "banner");
        addCliLine("Sélectionnez votre type d'équipement :");
        addCliLine("  [1] 💻 <b>PC Portable</b> (Laptop)");
        addCliLine("  [2] 🖥️ <b>PC Fixe / Gamer / Tour</b> (Desktop)");
        addCliLine("  [3] 📺 <b>Écran / Moniteur</b>");
        addCliLine("  [4] 🌐 <b>Réseaux & Vidéosurveillance CCTV</b>");
        addCliLine("Entrez un chiffre [1-4] ou 'cancel' pour annuler :", "dim");
    }

    cliInput.addEventListener('keydown', (e) => {
        if (e.key !== 'Enter') return;
        const cmd = cliInput.value.trim();
        cliInput.value = '';
        if (!cmd) return;

        addCliLine(`<span class="cli-prompt">mrrobot@root:~$</span> ${escapeHtml(cmd)}`);

        const lowerCmd = cmd.toLowerCase();

        // Gestion de l'interrogation interactive de diagnostic
        if (diagState) {
            if (lowerCmd === 'cancel' || lowerCmd === 'annuler' || lowerCmd === 'exit') {
                diagState = null;
                addCliLine("Diagnostic annulé. Tapez 'help' pour les autres commandes.", "dim");
                return;
            }

            if (diagState.step === 'device') {
                if (diagCatalog[cmd]) {
                    const dev = diagCatalog[cmd];
                    diagState = { step: 'symptom', deviceKey: cmd, deviceData: dev };
                    addCliLine(`<b>Équipement sélectionné :</b> ${dev.name}`, "banner");
                    addCliLine("Sélectionnez le symptôme observé :");
                    dev.symptoms.forEach((s, idx) => {
                        addCliLine(`  [${idx + 1}] ${s.label}`);
                    });
                    addCliLine("Entrez le numéro du problème [1-4] :", "dim");
                    return;
                } else {
                    addCliLine("Choix invalide. Veuillez taper un chiffre de 1 à 4 (ou 'cancel') :", "error-line");
                    return;
                }
            } else if (diagState.step === 'symptom') {
                const sIdx = parseInt(cmd, 10) - 1;
                if (diagState.deviceData.symptoms[sIdx]) {
                    const sym = diagState.deviceData.symptoms[sIdx];
                    addCliLine("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━", "banner");
                    addCliLine("📋 <b>RAPPORT D'ESTIMATION PRÉ-DIAGNOSTIC</b>", "banner");
                    addCliLine(`  <b>Équipement :</b> ${diagState.deviceData.name}`);
                    addCliLine(`  <b>Symptôme :</b> ${sym.label}`);
                    addCliLine(`  <b>Diagnostic probable :</b> ${sym.diag}`);
                    addCliLine(`  <b>Délai moyen atelier :</b> ${sym.delay}`);
                    addCliLine(`  <b>Tarif indicatif :</b> ${sym.price}`);
                    addCliLine(`  <b>Garantie atelier :</b> 90 jours pièces & main-d'œuvre`);
                    addCliLine("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━", "banner");
                    addCliLine("👉 Pour réserver ou déposer votre appareil immédiatement :");
                    addCliLine("  Tapez <b>book</b> pour transmettre ce rapport sur WhatsApp.");
                    addCliLine("  Tapez <b>diag</b> pour un nouveau diagnostic.");
                    
                    diagState = {
                        step: 'done',
                        deviceName: diagState.deviceData.name,
                        symLabel: sym.label,
                        diag: sym.diag,
                        price: sym.price
                    };
                    return;
                } else {
                    addCliLine("Numéro de symptôme invalide. Tapez un chiffre de 1 à 4 :", "error-line");
                    return;
                }
            } else if (diagState.step === 'done') {
                if (lowerCmd === 'book') {
                    const text = encodeURIComponent(`Bonjour Mr Robot, voici mon pré-diagnostic terminal :\n- Équipement : ${diagState.deviceName}\n- Panne : ${diagState.symLabel}\n- Diagnostic : ${diagState.diag}\n- Estimation : ${diagState.price}\nPuis-je déposer l'appareil à l'atelier Miramar ?`);
                    window.open(`https://wa.me/213797202579?text=${text}`, '_blank');
                    addCliLine("Transmission du rapport vers WhatsApp lancée...", "banner");
                    diagState = null;
                    return;
                }
                diagState = null; // Sortie du mode diagnostic pour continuer les autres commandes
            }
        }

        switch (lowerCmd) {
            case 'diag':
            case 'diagnostic':
                startDiagnosticFlow();
                break;
            case 'book':
                window.open('https://wa.me/213797202579?text=Bonjour%20Mr%20Robot,%20je%20souhaite%20prendre%20rendez-vous%20pour%20une%20r%C3%A9paration.', '_blank');
                addCliLine("Ouverture de la ligne WhatsApp de réservation...", "banner");
                break;
            case 'help':
                addCliLine("COMMANDES DISPONIBLES :", "banner");
                addCliLine("  <b>diag</b>      - Diagnostic express interactif en 2 questions");
                addCliLine("  <b>services</b>  - Liste des 6 départements techniques");
                addCliLine("  <b>status</b>    - État des serveurs & ouverture atelier");
                addCliLine("  <b>tracker</b>   - Outil de suivi de réparation");
                addCliLine("  <b>della</b>     - Lancer l'assistant IA Della");
                addCliLine("  <b>contact</b>   - Canaux de communication directs");
                addCliLine("  <b>matrix</b>    - Activer le flux Matrix");
                addCliLine("  <b>clear</b>     - Nettoyer le terminal");
                addCliLine("  <b>exit</b>      - Fermer le terminal");
                break;
            case 'services':
                addCliLine("MODULES TECHNIQUES MR ROBOT :", "banner");
                addCliLine("  [1] ⚡ <b>Électronique</b> : Réparation cartes mères & micro-soudure");
                addCliLine("  [2] 💻 <b>Informatique</b> : Maintenance, stations de travail & PC portables");
                addCliLine("  [3] 🌐 <b>Réseaux</b> : Câblage structuré, baies de brassage & WiFi");
                addCliLine("  [4] 📹 <b>Vidéosurveillance</b> : Caméras IP Hikvision/Dahua & NVR");
                addCliLine("  [5] 🖥️ <b>Programmation</b> : Automatisation, API & logiciels sur mesure");
                addCliLine("  [6] 🛠️ <b>Sur mesure</b> : Récupération de données & audits");
                break;
            case 'status':
                const isOp = document.getElementById('atelierStatusDot')?.classList.contains('open');
                addCliLine("DIAGNOSTIC SYSTÈME EN DIRECT :", "banner");
                addCliLine(`  Atelier physique Miramar : <span style="color:${isOp ? '#00ffcc' : '#ff4757'}">${isOp ? 'OUVERT (08h00 - 17h00)' : 'FERMÉ (Ouvre à 08h00)'}</span>`);
                addCliLine("  Uptime serveurs : 99.98% | Della IA : Opérationnelle");
                addCliLine("  Localisation : 35.7000° N, -0.6333° W (Oran, Algérie)");
                break;
            case 'tracker':
                addCliLine("Ouverture de l'interface de suivi...");
                closeTerminal();
                document.getElementById('tracker')?.scrollIntoView({ behavior: 'smooth' });
                document.getElementById('trackInput')?.focus();
                break;
            case 'della':
                addCliLine("Initialisation de Della IA...");
                setTimeout(() => {
                    closeTerminal();
                    toggleBot();
                }, 400);
                break;
            case 'matrix':
                addCliLine("WAKE UP, NEO... THE MATRIX HAS YOU.", "matrix-line");
                addCliLine("01001101 01110010 00100000 01010010 01101111 01100010 01101111 01110100", "matrix-line");
                break;
            case 'contact':
                addCliLine("LIGNES SÉCURISÉES MR ROBOT :", "banner");
                addCliLine("  Téléphone : 0797 20 25 79");
                addCliLine("  WhatsApp : wa.me/213797202579");
                addCliLine("  Email : Yassinedella@gmail.com");
                addCliLine("  Atelier : Miramar, Oran (près du Lycée Lotfi)");
                break;
            case 'clear':
                cliBody.innerHTML = '';
                addCliLine("MR ROBOT SYSTEMS [CYBER TERMINAL v3.2]", "banner");
                addCliLine("Tapez 'help' pour la liste des commandes ou 'diag' pour un diagnostic rapide.", "dim");
                break;
            case 'exit':
            case 'quit':
                closeTerminal();
                break;
            default:
                addCliLine(`Commande inconnue: '${escapeHtml(cmd)}'. Tapez <b>help</b> ou <b>diag</b>.`, "error-line");
                break;
        }
    });
}

// ============================================================
// 9. SUPPORT PROGRESSIVE WEB APP (PWA)
// ============================================================
let deferredPwaPrompt = null;

function initPwa() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('sw.js')
                .then(reg => {
                    console.log('SW enregistré:', reg.scope);
                    // Forcer la vérification de mise à jour à chaque ouverture
                    reg.update();

                    reg.addEventListener('updatefound', () => {
                        const newWorker = reg.installing;
                        if (newWorker) {
                            newWorker.addEventListener('statechange', () => {
                                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                                    newWorker.postMessage({ type: 'SKIP_WAITING' });
                                }
                            });
                        }
                    });
                })
                .catch(err => console.log('Échec SW:', err));

            let refreshing = false;
            navigator.serviceWorker.addEventListener('controllerchange', () => {
                if (!refreshing) {
                    refreshing = true;
                    window.location.reload();
                }
            });
        });
    }

    const topNavPwa = document.getElementById('topNavPwa');
    const pwaModal = document.getElementById('pwaModal');
    const pwaModalClose = document.getElementById('pwaModalClose');
    const pwaModalInstallBtn = document.getElementById('pwaModalInstallBtn');

    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPwaPrompt = e;
    });

    function openPwaModal() {
        if (pwaModal) {
            pwaModal.classList.add('open');
        }
    }

    function closePwaModal() {
        if (pwaModal) {
            pwaModal.classList.remove('open');
        }
    }

    if (topNavPwa) {
        topNavPwa.addEventListener('click', openPwaModal);
    }

    if (pwaModalClose) {
        pwaModalClose.addEventListener('click', closePwaModal);
    }

    if (pwaModal) {
        pwaModal.addEventListener('click', (e) => {
            if (e.target === pwaModal) closePwaModal();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && pwaModal && pwaModal.classList.contains('open')) {
            closePwaModal();
        }
    });

    if (pwaModalInstallBtn) {
        pwaModalInstallBtn.addEventListener('click', () => {
            if (deferredPwaPrompt) {
                deferredPwaPrompt.prompt();
                deferredPwaPrompt.userChoice.then((choiceResult) => {
                    if (choiceResult.outcome === 'accepted') {
                        showToast("Application installée avec succès !", "success");
                    }
                    deferredPwaPrompt = null;
                    closePwaModal();
                });
            } else {
                showToast("Pour installer : utilisez l'option 'Ajouter à l'écran d'accueil' dans le menu de votre navigateur.", "info");
                setTimeout(closePwaModal, 2000);
            }
        });
    }
}

