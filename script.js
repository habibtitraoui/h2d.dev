const projectNotes = {
  formation: {
    kicker: '01 — CORPORATE LEARNING PLATFORM',
    title: 'Formation Agency / EduFormation',
    description: 'EduFormation is a corporate learning platform for company training. The app brings together course browsing, learning paths, live events, learner progress and administration tools.',
    note: 'These are real captures from the live application, supplied by Habib. I cropped away the browser chrome and an accidental desktop notification, but left the product screens intact. The home screen shows an early product state, so the portfolio describes the actual flows without claiming adoption or results.',
    links: [['Open the platform (sign-in required)', 'https://formation-agency.vercel.app']]
  },
  outreach: {
    kicker: '02 — INTERNAL TOOL',
    title: 'Outreach, minus the busywork.',
    description: 'A Python dashboard I built for a real outreach workflow: bring in a lead list, search and filter it, prepare a tailored email, then review before anything is sent. There is also a protected, read-only hosted snapshot; the full workflow stays local.',
    note: 'The preview art on this page is an illustration, not a screenshot of the application. I have intentionally left this repository unlinked while I review and clean its public sample data. I would rather be transparent about that than send you to a repo I have not finished preparing.',
    links: []
  },
  'classy-house': {
    kicker: '03 — E-COMMERCE',
    title: 'Classy House',
    description: 'A focused product experience for a BBF four-litre pressure cooker. The page is in Arabic and built right-to-left, with product details, home or office delivery choices, and an order form. It is a single-product storefront, not a claim of a large multi-vendor platform.',
    note: 'The product card here is a drawn stand-in. The live page has the actual product photography and Arabic copy. I included the delivery choice and language direction because those details matter more than a generic “modern storefront” label.',
    links: [['Open the live page', 'https://classy-house.vercel.app'], ['Read the code', 'https://github.com/habibtitraoui/classy-house']]
  },
  mercus: {
    kicker: '04 — PRODUCT EXPERIENCE',
    title: 'Mercus AI',
    description: 'A React and TypeScript landing-page experience for an AI operations concept. The page brings several possible workflows — support, order follow-up and lead qualification — into one product story.',
    note: 'This is a concept / marketing experience, not a claim that I built the underlying AI agents or that the product is live. I wanted the page to make the proposition understandable before reaching for technical jargon.',
    links: [['Read the code', 'https://github.com/habibtitraoui/mercus.ai']]
  },
  stock: {
    kicker: '05 — DESKTOP SOFTWARE',
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

const formationGallery = document.querySelector('.project-formation');
const formationImage = formationGallery?.querySelector('.formation-screen-image');
const formationTitle = formationGallery?.querySelector('.formation-screen-title');
const formationOpen = formationGallery?.querySelector('.formation-screen-open');
formationGallery?.querySelectorAll('[data-screen-src]').forEach((tab) => {
  tab.addEventListener('click', () => {
    const src = tab.dataset.screenSrc;
    if (!formationImage || !src) return;
    formationImage.src = src;
    formationImage.alt = tab.dataset.screenAlt || 'EduFormation product screen';
    if (formationTitle) formationTitle.textContent = tab.dataset.screenTitle || 'Product screen';
    if (formationOpen) formationOpen.href = src;
    formationGallery.querySelectorAll('[data-screen-src]').forEach((item) => {
      item.setAttribute('aria-pressed', String(item === tab));
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
    anchor.append(document.createTextNode(`${label} `));
    const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    icon.setAttribute('width', '14');
    icon.setAttribute('height', '14');
    icon.setAttribute('viewBox', '0 0 24 24');
    icon.setAttribute('fill', 'none');
    icon.setAttribute('stroke', 'currentColor');
    icon.setAttribute('stroke-width', '2.2');
    icon.setAttribute('stroke-linecap', 'round');
    icon.setAttribute('stroke-linejoin', 'round');
    icon.setAttribute('class', 'inline-icon');
    icon.setAttribute('aria-hidden', 'true');
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M7 7h10v10M7 17 17 7');
    icon.append(path);
    anchor.append(icon);
    links.append(anchor);
  });
  dialog.showModal();
}
document.querySelectorAll('[data-open]').forEach((button) => button.addEventListener('click', () => openProject(button.dataset.open)));
closeButton?.addEventListener('click', () => dialog.close());
dialog?.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});
