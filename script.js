const projectNotes = {
  outreach: {
    kicker: '01 — INTERNAL TOOL',
    title: 'Outreach, minus the busywork.',
    description: 'A Python dashboard I built for a real outreach workflow: bring in a lead list, search and filter it, prepare a tailored email, then review before anything is sent. There is also a protected, read-only hosted snapshot; the full workflow stays local.',
    note: 'The preview art on this page is an illustration, not a screenshot of the application. I have intentionally left this repository unlinked while I review and clean its public sample data. I would rather be transparent about that than send you to a repo I have not finished preparing.',
    links: []
  },
  'classy-house': {
    kicker: '02 — E-COMMERCE',
    title: 'Classy House',
    description: 'A focused product experience for a BBF four-litre pressure cooker. The page is in Arabic and built right-to-left, with product details, home or office delivery choices, and an order form. It is a single-product storefront, not a claim of a large multi-vendor platform.',
    note: 'The product card here is a drawn stand-in. The live page has the actual product photography and Arabic copy. I included the delivery choice and language direction because those details matter more than a generic “modern storefront” label.',
    links: [['Open the live page', 'https://classy-house.vercel.app'], ['Read the code', 'https://github.com/habibtitraoui/classy-house']]
  },
  mercus: {
    kicker: '03 — PRODUCT EXPERIENCE',
    title: 'Mercus AI',
    description: 'A React and TypeScript landing-page experience for an AI operations concept. The page brings several possible workflows — support, order follow-up and lead qualification — into one product story.',
    note: 'This is a concept / marketing experience, not a claim that I built the underlying AI agents or that the product is live. I wanted the page to make the proposition understandable before reaching for technical jargon.',
    links: [['Read the code', 'https://github.com/habibtitraoui/mercus.ai']]
  },
  stock: {
    kicker: '04 — DESKTOP SOFTWARE',
    title: 'Gestion de Stock',
    description: 'A C# Windows desktop application for stock and sales management, with product and inventory views. The repository includes a WinForms application and SQL Server-related data assets.',
    note: 'The screen shown here is an illustration, not a screenshot. This is a desktop application rather than a hosted demo, so the source is the best way to inspect the project.',
    links: [['Read the code', 'https://github.com/habibtitraoui/gst']]
  }
};

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#site-nav');
navToggle?.addEventListener('click', () => {
  const open = navToggle.getAttribute('aria-expanded') !== 'true';
  navToggle.setAttribute('aria-expanded', String(open));
  navToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  nav?.classList.toggle('is-open', open);
});
nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('is-open');
  navToggle?.setAttribute('aria-expanded', 'false');
  navToggle?.setAttribute('aria-label', 'Open navigation');
}));

document.querySelectorAll('.filter-button').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter-button').forEach((item) => item.classList.remove('is-active'));
    button.classList.add('is-active');
    const category = button.dataset.filter;
    document.querySelectorAll('.project-card').forEach((card) => {
      const matches = category === 'all' || card.dataset.category.split(' ').includes(category);
      card.classList.toggle('is-hidden', !matches);
    });
  });
});

const dialog = document.querySelector('#project-dialog');
const closeButton = dialog?.querySelector('.dialog-close');
function openProject(key) {
  const project = projectNotes[key];
  if (!project || !dialog) return;
  dialog.querySelector('#dialog-kicker').textContent = project.kicker;
  dialog.querySelector('#dialog-title').textContent = project.title;
  dialog.querySelector('#dialog-description').textContent = project.description;
  dialog.querySelector('#dialog-note').textContent = project.note;
  const links = dialog.querySelector('#dialog-links');
  links.replaceChildren();
  project.links.forEach(([label, href]) => {
    const anchor = document.createElement('a');
    anchor.href = href;
    anchor.target = '_blank';
    anchor.rel = 'noreferrer';
    anchor.textContent = `${label} ↗`;
    links.append(anchor);
  });
  dialog.showModal();
}
document.querySelectorAll('[data-open]').forEach((button) => button.addEventListener('click', () => openProject(button.dataset.open)));
closeButton?.addEventListener('click', () => dialog.close());
dialog?.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});
