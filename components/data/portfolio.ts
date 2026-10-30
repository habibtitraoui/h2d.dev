export const profile = {
  name: 'Habib Titraoui', brand: 'H2D.dev', email: 'titraoui.habibe@gmail.com', availability: 'Available for selected projects',
  social: [
    { label: 'GitHub', href: 'https://github.com/habibtitraoui' },
    { label: 'Instagram', href: 'https://www.instagram.com/h2d.dev/' },
    { label: 'Email', href: 'mailto:titraoui.habibe@gmail.com' },
  ],
} as const;

export const services = ['Web apps & SaaS', 'E-commerce', 'Business automation', 'Product design'] as const;

export const projects = [
  { number: '01', title: 'EduFormation', type: 'Corporate learning platform', description: 'A platform that brings course discovery, learning paths, live events, learner progress and administration into one focused workspace.', tags: ['Corporate learning', 'Learning paths', 'Live events'], image: '/assets/formation-agency/Screenshot%202026-10-29%20192417.png', href: 'https://formation-agency.vercel.app', status: 'Live product' },
  { number: '02', title: 'Outreach workspace', type: 'Internal tool', description: 'A practical, human-in-the-loop workflow for importing leads, preparing tailored emails and reviewing every message before it is sent.', tags: ['Python', 'Dashboard', 'Gmail workflow'], status: 'Local-first' },
  { number: '03', title: 'Classy House', type: 'E-commerce', description: 'An Arabic, right-to-left single-product storefront designed around a simple offer, clear delivery choices and an easy order flow.', tags: ['React', 'TypeScript', 'RTL'], href: 'https://classy-house.vercel.app', code: 'https://github.com/habibtitraoui/classy-house', status: 'Live' },
  { number: '04', title: 'Mercus.ai', type: 'AI-powered SaaS platform', description: 'An AI-driven SaaS experience for customer support, order confirmation, lead qualification and automated follow-ups, built with reusable API-driven workflows.', outcome: '30% faster new-feature delivery · 15+ modular UI components', tags: ['React', 'TypeScript', 'REST APIs'], image: '/assets/mercus-ai/Screenshot%202026-10-30%20163406.png', href: 'https://mercus-ai-lime.vercel.app/', code: 'https://github.com/habibtitraoui/mercus.ai', status: 'Live product' },
  { number: '05', title: 'Littoral Immobilier CRM', type: 'Real estate lead management', description: 'An Airtable CRM spanning the sales pipeline: role-based interfaces, lead scoring, tasks, content and operational reporting for a real-estate team.', outcome: '30% faster lead-to-close time · 10+ agents supported · 8 pipeline stages', tags: ['Airtable', 'No-code architecture', 'CRM design'], image: '/assets/littoral-crm/Screenshot%202026-10-30%20162557.png', status: 'Case study' },
  { number: '06', title: 'Legenda Ilia', type: 'Print-on-demand e-commerce', description: 'A branded Shopify store for illustrated T-shirts and sweatshirts inspired by legendary places, with a tailored product journey for choosing garment, size, colour and design.', outcome: '15% increase in storefront conversion rate', tags: ['Shopify', 'Liquid', 'E-commerce'], image: '/assets/legenda-ilia/storefront.png', href: 'https://legendailia.com/', status: 'Live product' },
  { number: '07', title: 'Maysem Al Sharq', type: 'Corporate & commerce website', description: 'A production-ready Arabic corporate website with structured service pages, enterprise-aligned branding and an integrated WooCommerce shopping experience.', outcome: 'Delivered production-ready website in 4 weeks', tags: ['WordPress', 'WooCommerce', 'Custom theming'], image: '/assets/maysem-al-sharq/storefront.png', href: 'https://maysemalsharq.com/', status: 'Live product' },
] as const;

export const process = [
  ['01', 'Understand the friction', 'We get specific about the people, workflow and outcome that matter.'],
  ['02', 'Shape the useful version', 'We prioritize what creates value now and make the scope easy to follow.'],
  ['03', 'Build in the open', 'You see real progress early, test it and steer the important decisions.'],
  ['04', 'Ship with confidence', 'Deployment, handover and a practical plan for what comes next.'],
] as const;
