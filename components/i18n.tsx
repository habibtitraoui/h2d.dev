'use client';

import { Check, ChevronDown, Globe2 } from 'lucide-react';
import { createContext, useContext, useEffect, useRef, useState } from 'react';

export type Language = 'en' | 'fr' | 'ar';
type Copy = Record<string, string>;

const copy: Record<Language, Copy> = {
  en: {
    work: 'Work', process: 'Process', about: 'About', talk: "Let's talk", language: 'Language', selectedWork: 'SELECTED WORK', workTitle: 'Useful, not|just pretty.', workAside: 'A small selection of products and systems built around real workflows, clear decisions and a better experience for the people using them.', all: 'All', product: 'Product', commerce: 'Commerce', systems: 'Systems', visit: 'Visit project', source: 'Source', skip: 'Skip to content', openNav: 'Open navigation', closeNav: 'Close navigation', serviceLabel: 'Services',
    availability: 'Available for selected projects', heroTitle: 'I make useful|software|real.', heroIntro: "I'm Habib — an independent software engineer who turns rough ideas and everyday business friction into working software.", seeWork: 'See what I build', problem: 'Have a problem to solve?', footnote: 'Small, considered software. Built for the people using it.', start: 'THE START', realProblem: 'A real|problem', outcome: 'THE OUTCOME', works: 'Something|that works.', ideaSoftware: 'IDEA → SOFTWARE', lessNoise: 'Less noise. More shipped.', services: 'WHAT I CAN HELP WITH',
    approachEyebrow: 'A CALM, CLEAR PROCESS', approachTitle: 'Start with the|actual problem.', approachText: 'Good software starts before the first line of code. I get clear on what is getting in the way, then build the smallest useful thing that fixes it.', projectFit: 'Sound like your kind of project?',
    aboutEyebrow: 'WHO I AM', aboutTitle: 'One engineer.|Clear communication.|No agency theatre.', aboutText1: "I'm Habib Titraoui, an independent software engineer. I work across the product — from figuring out the flow to building the interface and making the moving parts behave.", aboutText2: 'I care about useful details: a checkout that makes sense, an admin screen that saves someone time, and an app that holds up when real people use it.', speak: 'WE CAN TALK IN',
    contactEyebrow: 'HAVE SOMETHING IN MIND?', contactTitle: "Let's make it|work.", contactText: "Tell me what you're trying to fix, build or get off your plate. You don't need a perfect brief — a few honest sentences are enough to start.", tellMe: 'Tell me about it', directEmail: 'OR EMAIL ME DIRECTLY', footer: 'From idea to working software.', previous: 'Previous screen', next: 'Next screen', galleryHint: 'Swipe or use ← →', realScreen: 'REAL PRODUCT SCREEN', clientWorkflow: 'REAL CLIENT WORKFLOW', showScreen: 'Show screen', projectPreview: 'PROJECT PREVIEW',
    mainNav: 'Main navigation', heroArt: 'An idea becoming a working product', interface: 'interface', projectFilters: 'Project filters', screens: 'screens', carousel: 'carousel', emailSubject: 'Project enquiry', independentByDesign: 'INDEPENDENT|BY DESIGN', github: 'GitHub', instagram: 'Instagram', whatsapp: 'WhatsApp', whatsappChat: 'Start a conversation on WhatsApp', email: 'Email',
    service1: 'Web apps & SaaS', service2: 'E-commerce', service3: 'Business automation', service4: 'Product design',
    step1Title: 'Understand the friction', step1Text: 'We get specific about the people, workflow and outcome that matter.', step2Title: 'Shape the useful version', step2Text: 'We prioritize what creates value now and make the scope easy to follow.', step3Title: 'Build in the open', step3Text: 'You see real progress early, test it and steer the important decisions.', step4Title: 'Ship with confidence', step4Text: 'Deployment, handover and a practical plan for what comes next.',
    projectType01: 'Corporate learning platform', projectType02: 'Internal tool', projectType03: 'E-commerce', projectType04: 'AI-powered SaaS platform', projectType05: 'Real estate lead management', projectType06: 'Print-on-demand e-commerce', projectType07: 'Corporate & commerce website', projectType08: 'Dental clinic website', projectType09: 'E-commerce',
    projectDescription01: 'A platform bringing course discovery, learning paths, live events, learner progress and administration into one focused workspace.', projectDescription02: 'A human-in-the-loop workflow for importing leads, preparing tailored emails and reviewing every message before it is sent.', projectDescription03: 'An Arabic, right-to-left storefront built around a clear offer, delivery choices and a straightforward order flow.', projectDescription04: 'An AI-driven SaaS experience for customer support, order confirmation, lead qualification and automated follow-ups.', projectDescription05: 'An Airtable CRM spanning the sales pipeline with role-based interfaces, lead scoring, tasks and operational reporting.', projectDescription06: 'A branded Shopify store for illustrated apparel, with a product journey for choosing garment, size, colour and design.', projectDescription07: 'An Arabic corporate website with structured service pages, enterprise-aligned branding and an integrated WooCommerce shop.', projectDescription08: 'A responsive clinic website with service and doctor profiles, before-and-after galleries, testimonials and appointment booking.', projectDescription09: 'A French-language premium hijab storefront with color selection, wishlists and an animated cart with quantity controls, totals and free-shipping progress. Checkout is a front-end interface with no payment integration.',
    liveProduct: 'Live product', localFirst: 'Local-first', live: 'Live', caseStudy: 'Case study', projectOutcome04: '30% faster new-feature delivery · 15+ modular UI components', projectOutcome05: '30% faster lead-to-close time · 10+ agents supported · 8 pipeline stages', projectOutcome06: '15% increase in storefront conversion rate', projectOutcome07: 'Delivered production-ready website in 4 weeks',
  },
  fr: {
    work: 'Projets', process: 'Méthode', about: 'À propos', talk: 'Parlons-en', language: 'Langue', selectedWork: 'PROJETS SÉLECTIONNÉS', workTitle: 'Utile, pas|seulement joli.', workAside: 'Une sélection de produits et de systèmes conçus autour de vrais usages, de décisions claires et d’une meilleure expérience.', all: 'Tous', product: 'Produit', commerce: 'Commerce', systems: 'Systèmes', visit: 'Voir le projet', source: 'Code source', skip: 'Aller au contenu', openNav: 'Ouvrir la navigation', closeNav: 'Fermer la navigation', serviceLabel: 'Services',
    availability: 'Disponible pour une sélection de projets', heroTitle: 'Je transforme des|idées en|logiciels utiles.', heroIntro: 'Je suis Habib — ingénieur logiciel indépendant. Je transforme les idées brutes et les frictions du quotidien en logiciels qui fonctionnent.', seeWork: 'Voir mes réalisations', problem: 'Un problème à résoudre ?', footnote: 'Des logiciels simples et réfléchis, conçus pour celles et ceux qui les utilisent.', start: 'LE DÉPART', realProblem: 'Un vrai|problème', outcome: 'LE RÉSULTAT', works: 'Quelque chose|qui fonctionne.', ideaSoftware: 'IDÉE → LOGICIEL', lessNoise: 'Moins de bruit. Plus de livraisons.', services: 'CE QUE JE PEUX VOUS APPORTER',
    approachEyebrow: 'UNE MÉTHODE CALME ET CLAIRE', approachTitle: 'Partir du|vrai problème.', approachText: 'Un bon logiciel commence avant la première ligne de code. Je clarifie ce qui bloque, puis je construis la plus petite solution utile pour y remédier.', projectFit: 'Cela ressemble à votre projet ?',
    aboutEyebrow: 'QUI JE SUIS', aboutTitle: 'Un ingénieur.|Une communication claire.|Pas de théâtre d’agence.', aboutText1: 'Je suis Habib Titraoui, ingénieur logiciel indépendant. Je travaille sur l’ensemble du produit : du parcours utilisateur à l’interface et aux éléments qui le font fonctionner.', aboutText2: 'J’accorde de l’importance aux détails utiles : un paiement évident, un écran d’administration qui fait gagner du temps et une application solide en conditions réelles.', speak: 'NOUS POUVONS ÉCHANGER EN',
    contactEyebrow: 'UN PROJET EN TÊTE ?', contactTitle: 'Faisons en sorte|que ça fonctionne.', contactText: 'Dites-moi ce que vous cherchez à corriger, à créer ou à déléguer. Pas besoin d’un brief parfait : quelques phrases sincères suffisent pour commencer.', tellMe: 'Parlez-m’en', directEmail: 'OU ÉCRIVEZ-MOI DIRECTEMENT', footer: 'De l’idée au logiciel opérationnel.', previous: 'Écran précédent', next: 'Écran suivant', galleryHint: 'Glissez ou utilisez ← →', realScreen: 'VRAI ÉCRAN PRODUIT', clientWorkflow: 'VRAI FLUX CLIENT', showScreen: 'Afficher l’écran', projectPreview: 'APERÇU DU PROJET',
    mainNav: 'Navigation principale', heroArt: 'Une idée qui devient un produit fonctionnel', interface: 'interface', projectFilters: 'Filtres des projets', screens: 'écrans', carousel: 'carrousel', emailSubject: 'Demande de projet', independentByDesign: 'INDÉPENDANT|PAR CHOIX', github: 'GitHub', instagram: 'Instagram', whatsapp: 'WhatsApp', whatsappChat: 'Démarrer une conversation sur WhatsApp', email: 'E-mail',
    service1: 'Applications web & SaaS', service2: 'E-commerce', service3: 'Automatisation métier', service4: 'Conception produit',
    step1Title: 'Comprendre les blocages', step1Text: 'Nous précisons les personnes, le parcours et le résultat qui comptent.', step2Title: 'Définir la solution utile', step2Text: 'Nous priorisons la valeur immédiate et clarifions le périmètre.', step3Title: 'Construire en toute transparence', step3Text: 'Vous voyez rapidement les avancées, testez et guidez les décisions importantes.', step4Title: 'Mettre en ligne sereinement', step4Text: 'Déploiement, passation et plan concret pour la suite.',
    projectType01: 'Plateforme de formation professionnelle', projectType02: 'Outil interne', projectType03: 'E-commerce', projectType04: 'Plateforme SaaS avec IA', projectType05: 'Gestion de prospects immobiliers', projectType06: 'E-commerce à la demande', projectType07: 'Site institutionnel et marchand', projectType08: 'Site de cabinet dentaire', projectType09: 'E-commerce',
    projectDescription01: 'Une plateforme réunissant découverte de cours, parcours de formation, événements en direct, suivi des apprenants et administration.', projectDescription02: 'Un processus avec validation humaine pour importer des prospects, préparer des e-mails personnalisés et les relire avant envoi.', projectDescription03: 'Une boutique arabe en lecture droite-à-gauche, pensée autour d’une offre claire, des options de livraison et d’une commande simple.', projectDescription04: 'Une plateforme SaaS basée sur l’IA pour le support client, la confirmation de commandes, la qualification de prospects et les relances.', projectDescription05: 'Un CRM Airtable couvrant le pipeline commercial, avec interfaces par rôle, scoring des prospects, tâches et rapports.', projectDescription06: 'Une boutique Shopify de vêtements illustrés, avec un parcours de choix du vêtement, de la taille, de la couleur et du motif.', projectDescription07: 'Un site institutionnel arabe avec des pages de services structurées, une identité professionnelle et une boutique WooCommerce intégrée.', projectDescription08: 'Un site responsive de cabinet dentaire avec services, profils des praticiens, galeries avant/après, témoignages et prise de rendez-vous.', projectDescription09: 'Une boutique française de hijabs premium avec choix des couleurs, favoris et panier animé avec quantités, totaux et suivi de la livraison gratuite. Le paiement reste une interface front-end, sans intégration de paiement.',
    liveProduct: 'Produit en ligne', localFirst: 'Local', live: 'En ligne', caseStudy: 'Étude de cas', projectOutcome04: '30 % de livraison plus rapide des fonctionnalités · 15+ composants d’interface modulaires', projectOutcome05: '30 % de réduction du délai prospect-conclusion · 10+ agents · 8 étapes de vente', projectOutcome06: '+15 % de conversion de la boutique', projectOutcome07: 'Site prêt pour la production livré en 4 semaines',
  },
  ar: {
    work: 'الأعمال', process: 'المنهجية', about: 'من أنا', talk: 'لنتحدث', language: 'اللغة', selectedWork: 'أعمال مختارة', workTitle: 'مفيد، وليس|مجرد تصميم جميل.', workAside: 'مجموعة مختارة من المنتجات والأنظمة المبنية حول سير عمل حقيقي وقرارات واضحة وتجربة أفضل للمستخدمين.', all: 'الكل', product: 'منتجات', commerce: 'تجارة', systems: 'أنظمة', visit: 'زيارة المشروع', source: 'المصدر', skip: 'انتقل إلى المحتوى', openNav: 'فتح التنقل', closeNav: 'إغلاق التنقل', serviceLabel: 'الخدمات',
    availability: 'متاح لمشاريع مختارة', heroTitle: 'أحوّل الأفكار|إلى برمجيات|مفيدة.', heroIntro: 'أنا حبيب، مهندس برمجيات مستقل أحول الأفكار الأولية ومشكلات العمل اليومية إلى برمجيات عملية.', seeWork: 'شاهد ما أبنيه', problem: 'هل لديك مشكلة لحلها؟', footnote: 'برمجيات بسيطة ومدروسة، صُممت لمن يستخدمها.', start: 'البداية', realProblem: 'مشكلة|حقيقية', outcome: 'النتيجة', works: 'شيء|يعمل فعلاً.', ideaSoftware: 'فكرة ← برمجيات', lessNoise: 'ضوضاء أقل. إنجاز أكثر.', services: 'كيف يمكنني المساعدة',
    approachEyebrow: 'منهجية هادئة وواضحة', approachTitle: 'نبدأ من|المشكلة الفعلية.', approachText: 'تبدأ البرمجيات الجيدة قبل السطر الأول من الكود. أحدد ما يسبب العائق، ثم أبني أصغر حل مفيد يعالجه.', projectFit: 'هل يشبه هذا مشروعك؟',
    aboutEyebrow: 'من أنا', aboutTitle: 'مهندس واحد.|تواصل واضح.|بلا تعقيد الوكالات.', aboutText1: 'أنا حبيب تطراوي، مهندس برمجيات مستقل. أعمل على المنتج كاملاً، من فهم التدفق إلى بناء الواجهة وجعل كل الأجزاء تعمل معاً.', aboutText2: 'أهتم بالتفاصيل المفيدة: عملية دفع مفهومة، وشاشة إدارة توفر الوقت، وتطبيق يصمد عندما يستخدمه الناس فعلاً.', speak: 'نتحدث بـ',
    contactEyebrow: 'لديك فكرة؟', contactTitle: 'لنجعلها|تعمل.', contactText: 'أخبرني بما تريد إصلاحه أو بناءه أو إنجازه. لست بحاجة إلى موجز مثالي؛ بضع جمل صادقة تكفي للبدء.', tellMe: 'أخبرني عنها', directEmail: 'أو راسلني مباشرةً', footer: 'من الفكرة إلى برمجيات تعمل.', previous: 'الشاشة السابقة', next: 'الشاشة التالية', galleryHint: 'اسحب أو استخدم ← →', realScreen: 'شاشة منتج حقيقية', clientWorkflow: 'سير عمل عميل حقيقي', showScreen: 'عرض الشاشة', projectPreview: 'معاينة المشروع',
    mainNav: 'التنقل الرئيسي', heroArt: 'فكرة تتحول إلى منتج عملي', interface: 'واجهة', projectFilters: 'تصفية المشاريع', screens: 'الشاشات', carousel: 'معرض دوار', emailSubject: 'استفسار عن مشروع', independentByDesign: 'مستقل|عن قناعة', github: 'GitHub', instagram: 'Instagram', whatsapp: 'واتساب', whatsappChat: 'ابدأ محادثة على واتساب', email: 'البريد الإلكتروني',
    service1: 'تطبيقات الويب والبرمجيات كخدمة', service2: 'التجارة الإلكترونية', service3: 'أتمتة الأعمال', service4: 'تصميم المنتجات',
    step1Title: 'فهم العوائق', step1Text: 'نحدد الأشخاص وسير العمل والنتيجة الأهم.', step2Title: 'صياغة الحل المفيد', step2Text: 'نركز على القيمة الحالية ونحدد نطاق العمل بوضوح.', step3Title: 'البناء بشفافية', step3Text: 'ترى التقدم مبكراً، وتختبره، وتوجه القرارات المهمة.', step4Title: 'الإطلاق بثقة', step4Text: 'النشر والتسليم وخطة عملية للخطوة التالية.',
    projectType01: 'منصة تعليم وتدريب', projectType02: 'أداة داخلية', projectType03: 'تجارة إلكترونية', projectType04: 'منصة برمجيات كخدمة بالذكاء الاصطناعي', projectType05: 'إدارة عملاء العقارات المحتملين', projectType06: 'متجر طباعة حسب الطلب', projectType07: 'موقع مؤسسي وتجاري', projectType08: 'موقع عيادة أسنان', projectType09: 'تجارة إلكترونية',
    projectDescription01: 'منصة تجمع اكتشاف الدورات والمسارات التعليمية والفعاليات المباشرة ومتابعة المتعلمين والإدارة.', projectDescription02: 'سير عمل بمراجعة بشرية لاستيراد العملاء المحتملين وإعداد رسائل مخصصة ومراجعتها قبل الإرسال.', projectDescription03: 'متجر عربي باتجاه كتابة من اليمين إلى اليسار، بعرض واضح وخيارات توصيل وخطوات طلب بسيطة.', projectDescription04: 'منصة برمجيات كخدمة بالذكاء الاصطناعي لدعم العملاء وتأكيد الطلبات وتأهيل العملاء المحتملين والمتابعة الآلية.', projectDescription05: 'نظام Airtable لإدارة مسار المبيعات مع واجهات حسب الدور وتقييم العملاء المحتملين والمهام والتقارير.', projectDescription06: 'متجر Shopify لملابس برسومات مميزة، مع تجربة لاختيار القطعة والمقاس واللون والتصميم.', projectDescription07: 'موقع مؤسسي عربي بصفحات خدمات منظمة وهوية احترافية ومتجر WooCommerce مدمج.', projectDescription08: 'موقع متجاوب لعيادة أسنان يعرض الخدمات والأطباء وصور قبل وبعد وآراء المرضى وحجز المواعيد.', projectDescription09: 'متجر فرنسي لأوشحة حجاب فاخرة مع اختيار الألوان والمفضلة وسلة تفاعلية للكميات والإجمالي ومؤشر الشحن المجاني. واجهة الدفع أمامية فقط ولا تتضمن تكاملاً للدفع.',
    liveProduct: 'منتج مباشر', localFirst: 'محلي أولاً', live: 'مباشر', caseStudy: 'دراسة حالة', projectOutcome04: 'تسريع تسليم الميزات الجديدة بنسبة 30٪ · أكثر من 15 مكوناً قابلاً لإعادة الاستخدام', projectOutcome05: 'تقليل مدة تحويل العميل المحتمل إلى صفقة بنسبة 30٪ · أكثر من 10 وكلاء · 8 مراحل للمبيعات', projectOutcome06: 'زيادة تحويل المتجر بنسبة 15٪', projectOutcome07: 'تسليم موقع جاهز للإنتاج خلال 4 أسابيع',
  },
};

type I18n = { language: Language; setLanguage: (language: Language) => void; t: (key: string) => string };
const I18nContext = createContext<I18n | null>(null);
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const setLanguage = (next: Language) => { setLanguageState(next); localStorage.setItem('h2d-language', next); document.documentElement.lang = next; document.documentElement.dir = next === 'ar' ? 'rtl' : 'ltr'; };
  useEffect(() => { const saved = localStorage.getItem('h2d-language') as Language | null; if (saved && copy[saved]) setLanguage(saved); }, []);
  return <I18nContext.Provider value={{ language, setLanguage, t: (key) => copy[language][key] }}>{children}</I18nContext.Provider>;
}
export function useI18n() { const context = useContext(I18nContext); if (!context) throw new Error('useI18n must be used inside LanguageProvider'); return context; }
const languageNames: Record<Language, string> = { en: 'English', fr: 'Français', ar: 'العربية' };
const languages: Language[] = ['en', 'fr', 'ar'];

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const switcherRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (event.target instanceof Node && !switcherRef.current?.contains(event.target)) setIsOpen(false);
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const selectLanguage = (next: Language) => {
    setLanguage(next);
    setIsOpen(false);
    triggerRef.current?.focus();
  };

  return (
    <div className="language-switcher" ref={switcherRef}>
      <button
        ref={triggerRef}
        className="language-trigger"
        type="button"
        aria-label={`${t('language')}: ${languageNames[language]}`}
        aria-expanded={isOpen}
        aria-controls="language-options"
        onClick={() => setIsOpen((open) => !open)}
      >
        <Globe2 size={16} aria-hidden="true" />
        <span>{languageNames[language]}</span>
        <ChevronDown className={isOpen ? 'is-open' : ''} size={14} aria-hidden="true" />
      </button>
      {isOpen && (
        <div className="language-menu" id="language-options" role="group" aria-label={t('language')}>
          {languages.map((option) => (
            <button
              key={option}
              className={`language-option ${language === option ? 'is-selected' : ''}`}
              type="button"
              aria-pressed={language === option}
              onClick={() => selectLanguage(option)}
            >
              <span>{languageNames[option]}</span>
              {language === option && <Check size={15} aria-hidden="true" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
