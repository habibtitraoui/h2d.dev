const whatsappUrl = 'https://wa.me/213797394607';

export const profile = {
  name: 'Habib Titraoui', brand: 'H2D.dev', email: 'titraoui.habibe@gmail.com', whatsapp: whatsappUrl, availability: 'Available for selected projects',
  social: [
    { label: 'GitHub', href: 'https://github.com/habibtitraoui' },
    { label: 'Instagram', href: 'https://www.instagram.com/h2d.dev/' },
    { label: 'WhatsApp', href: whatsappUrl },
    { label: 'Email', href: 'mailto:titraoui.habibe@gmail.com' },
  ],
} as const;

export const services = ['Web apps & SaaS', 'E-commerce', 'Business automation', 'Product design'] as const;

export const projects = [
  { number: '01', title: 'EduFormation', type: 'Corporate learning platform', description: 'A platform that brings course discovery, learning paths, live events, learner progress and administration into one focused workspace.', tags: ['Corporate learning', 'Learning paths', 'Live events'], image: '/assets/formation-agency/Screenshot%202026-10-29%20192417.webp', href: 'https://formation-agency.vercel.app', status: 'Live product' },
  { number: '02', title: 'Outreach workspace', type: 'Internal tool', description: 'A practical, human-in-the-loop workflow for importing leads, preparing tailored emails and reviewing every message before it is sent.', tags: ['Python', 'Dashboard', 'Gmail workflow'], status: 'Local-first' },
  { number: '03', title: 'Classy House', type: 'E-commerce', description: 'An Arabic, right-to-left single-product storefront designed around a simple offer, clear delivery choices and an easy order flow.', tags: ['React', 'TypeScript', 'RTL'], href: 'https://classy-house.vercel.app', code: 'https://github.com/habibtitraoui/classy-house', status: 'Live' },
  { number: '04', title: 'Mercus.ai', type: 'AI-powered SaaS platform', description: 'An AI-driven SaaS experience for customer support, order confirmation, lead qualification and automated follow-ups, built with reusable API-driven workflows.', outcome: '30% faster new-feature delivery · 15+ modular UI components', tags: ['React', 'TypeScript', 'REST APIs'], image: '/assets/mercus-ai/Screenshot%202026-10-30%20163406.webp', href: 'https://mercus-ai-lime.vercel.app/', code: 'https://github.com/habibtitraoui/mercus.ai', status: 'Live product' },
  { number: '05', title: 'Littoral Immobilier CRM', type: 'Real estate lead management', description: 'An Airtable CRM spanning the sales pipeline: role-based interfaces, lead scoring, tasks, content and operational reporting for a real-estate team.', outcome: '30% faster lead-to-close time · 10+ agents supported · 8 pipeline stages', tags: ['Airtable', 'No-code architecture', 'CRM design'], image: '/assets/littoral-crm/Screenshot%202026-10-30%20162557.webp', status: 'Case study' },
  { number: '06', title: 'Legenda Ilia', type: 'Print-on-demand e-commerce', description: 'A branded Shopify store for illustrated T-shirts and sweatshirts inspired by legendary places, with a tailored product journey for choosing garment, size, colour and design.', outcome: '15% increase in storefront conversion rate', tags: ['Shopify', 'Liquid', 'E-commerce'], image: '/assets/legenda-ilia/storefront.webp', href: 'https://legendailia.com/', status: 'Live product' },
  { number: '07', title: 'Maysem Al Sharq', type: 'Corporate & commerce website', description: 'A production-ready Arabic corporate website with structured service pages, enterprise-aligned branding and an integrated WooCommerce shopping experience.', outcome: 'Delivered production-ready website in 4 weeks', tags: ['WordPress', 'WooCommerce', 'Custom theming'], image: '/assets/maysem-al-sharq/storefront.webp', href: 'https://maysemalsharq.com/', status: 'Live product' },
  { number: '08', title: 'PureSmile Dental Studio', type: 'Dental clinic website', description: 'A responsive website featuring elegant visuals, service and doctor profiles, interactive before-and-after galleries, patient testimonials, and an appointment booking form.', tags: ['Responsive design', 'Dental care', 'Appointment booking'], image: '/assets/puresmile-dental/homepage.webp', href: 'https://dentalclinic-nine-swart.vercel.app/', status: 'Live product' },
  { number: '09', title: 'VOILÉE', type: 'E-commerce', description: 'A responsive French-language storefront for a premium hijab brand, featuring product color selection, wishlists, and an animated cart with quantity controls, order totals, and free-shipping progress. Checkout is a front-end interface with no payment integration.', tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'], image: '/assets/voilee/storefront.webp', href: 'https://voilee.vercel.app/', status: 'Live product' },
] as const;

export const process = [
  ['01', 'Understand the friction', 'We get specific about the people, workflow and outcome that matter.'],
  ['02', 'Shape the useful version', 'We prioritize what creates value now and make the scope easy to follow.'],
  ['03', 'Build in the open', 'You see real progress early, test it and steer the important decisions.'],
  ['04', 'Ship with confidence', 'Deployment, handover and a practical plan for what comes next.'],
] as const;
