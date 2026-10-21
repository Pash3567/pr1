const A = 'assets/';

const recipes = [
  ['The Creamiest Creamy Chicken and Bacon Pasta', 'recipe-1.png', '20 Minutes', 'Snacks'],
  ['The Best Easy One Pot Chicken and Rice', 'recipe-2.png', '40 Minutes', 'Breakfast'],
  ['Fruity Pancake with Orange & Blueberry', 'recipe-3.png', '20 Minutes', 'Sweet'],
  ['Chicken Meatballs with Cream Cheese', 'recipe-4.png', '30 Minutes', 'Meat'],
  ['Fresh and Healthy Mixed Mayonnaise Salad', 'recipe-5.png', '30 Minutes', 'Vegan'],
  ['Strawberry Oatmeal Pancake with Honey Syrup', 'recipe-6.png', '30 Minutes', 'Breakfast'],
  ['Big and Juicy Wagyu Beef Cheeseburger', 'recipe-7.png', '30 Minutes', 'Snacks'],
  ['Fresh Lime Roasted Salmon with Ginger Sauce', 'recipe-2.png', '30 Minutes', 'Fish'],
  ['Firecracker Vegan Lettuce Wraps', 'recipe-5.png', '15 Minutes', 'Vegan']
];

const blogPosts = [
  ['Crochet Projects for Noodle Lovers', 'A playful guide to bringing color, comfort and creativity into your kitchen.', 'recipe-1.png'],
  ['10 Vegetarian Recipes To Eat This Month', 'Fresh, vibrant meals that prove a plant-first plate can be deeply satisfying.', 'recipe-5.png'],
  ['Full Guide to Becoming a Professional Chef', 'Simple habits, essential skills and the mindset that makes a great cook.', 'chef.png'],
  ['Simple & Delicious Vegetarian Lasagna', 'A rich, layered weeknight favorite with vegetables, herbs and silky sauce.', 'recipe-4.png'],
  ['Plantain and Pinto Stew with Aji Verde', 'A cozy one-pot dinner with bright herbs and just the right amount of heat.', 'recipe-3.png'],
  ['We Are Hiring a Communications Assistant', 'Come tell delicious stories with a small, curious and food-loving team.', 'recipe-7.png']
];

const categories = [
  ['Breakfast','breakfast.png','#f3cb6a'], ['Vegan','vegan.png','#75b56c'], ['Meat','meat.png','#f27f6e'],
  ['Dessert','dessert.png','#f4c16d'], ['Lunch','snack.png','#7ab7a3'], ['Chocolate','chocolate.png','#725446']
];

const app = document.querySelector('#app');
const nav = document.querySelector('.main-nav');
const toggle = document.querySelector('.menu-toggle');

function card(recipe, index = 0) {
  const [title, image, time, type] = recipe;
  return `<article class="recipe-card" data-type="${type.toLowerCase()}">
    <button class="heart" data-save="${title}" aria-label="Save ${title}">♥</button>
    <a href="#recipe"><img class="photo" src="${A + image}" alt="${title}" loading="lazy"><h3>${title}</h3>
    <div class="card-meta"><span>◷ ${time}</span><span>♨ ${type}</span></div></a>
  </article>`;
}

function newsletter() {
  return `<section class="newsletter shell section"><h2>Deliciousness to your inbox</h2><p class="lead">Weekly recipes, kitchen inspiration and good things to cook — no noise, just flavor.</p>
    <form class="newsletter-form" data-form="newsletter"><input type="email" aria-label="Email address" placeholder="Your email address..." required><button class="button" type="submit">Subscribe</button></form></section>`;
}

function home() {
  return `<section class="hero-wrap"><div class="hero"><div class="hero-copy"><span class="hot-pill">📜 Hot Recipes</span><h1>Spicy delicious chicken wings</h1><p class="lead">A bold, sticky and irresistible recipe for the kind of dinner everyone remembers.</p><div class="hero-meta"><span class="meta-pill">◷ 30 Minutes</span><span class="meta-pill">♨ Chicken</span></div><div class="author-row"><img src="${A}author.png" alt="John Smith"><div><strong>John Smith</strong><small>15 March 2026</small></div><a class="button" href="#recipe">View Recipes&nbsp; ▶</a></div></div><div class="hero-image" role="img" aria-label="Spicy chicken wings with dipping sauce"></div></div></section>
  <section class="shell section"><div class="section-heading"><h2>Categories</h2><a class="button light" href="#recipes">View All Categories</a></div><div class="category-grid">${categories.map(c => `<a class="category" href="#recipes" style="--tone:${c[2]}"><img src="${A+c[1]}" alt=""><span>${c[0]}</span></a>`).join('')}</div></section>
  <section class="shell section center"><h2>Simple and tasty recipes</h2><p class="lead">Everyday recipes built around straightforward ingredients, big flavor and the joy of sharing food.</p><div class="recipe-grid">${recipes.slice(0,9).map(card).join('')}</div></section>
  <section class="shell section chef-section"><div class="chef-copy"><p class="eyebrow">Cook with confidence</p><h2>Everyone can be a chef in their own kitchen</h2><p>No matter your skill level, patience and curiosity are the only ingredients you really need. Start small, taste often and make it yours.</p><a class="button" href="#about">Learn More</a></div><div class="chef-visual"><img src="${A}chef.png" alt="Chef presenting a freshly prepared dish" loading="lazy"></div></section>
  <section class="instagram"><div class="shell center"><h2>Check out @foodieland on Instagram</h2><p class="lead">Mouthwatering meals, cooking tips and everyday inspiration from our community.</p><div class="insta-grid">${recipes.slice(0,4).map(r => `<article class="insta-card"><div class="insta-top">Foodieland</div><img src="${A+r[1]}" alt="${r[0]}" loading="lazy"><p class="insta-caption"><strong>foodieland</strong> ${r[0]} — made with love.</p></article>`).join('')}</div><a class="button" href="#recipes">Visit our recipes&nbsp; ◎</a></div></section>
  <section class="shell section"><div class="section-heading"><div><h2>Try this delicious recipe<br>to make your day</h2></div><p class="lead">Good food has a way of changing the mood. Pick a favorite and make today taste better.</p></div><div class="recipe-grid">${recipes.slice(1,7).map(card).join('')}</div></section>${newsletter()}`;
}

function recipesPage() {
  const filters = ['All', ...new Set(recipes.map(r => r[3]))];
  return `<section class="page-hero"><p class="eyebrow">Find your next favorite</p><h1>Recipes for every kind of day</h1><p class="lead">Quick breakfasts, colorful lunches, cozy dinners and treats worth saving.</p><div class="filter-row">${filters.map((f,i)=>`<button class="filter-chip ${i===0?'active':''}" data-filter="${f.toLowerCase()}">${f}</button>`).join('')}</div></section><section class="shell section" style="padding-top:20px"><div class="recipe-grid" id="recipe-grid">${recipes.map(card).join('')}</div></section>${newsletter()}`;
}

function recipeDetail() {
  return `<section class="shell"><div class="recipe-detail-head"><div><p class="eyebrow">Recipe of the week</p><h1>Health Japanese Fried Rice</h1><div class="hero-meta"><span class="meta-pill">👤 John Smith</span><span class="meta-pill">◷ Prep 15 min</span><span class="meta-pill">♨ Cook 30 min</span><span class="meta-pill">🍚 Chicken</span></div></div><div class="round-actions"><button class="round-action" data-print aria-label="Print">⌕</button><button class="round-action" data-share aria-label="Share">↗</button></div></div><div class="detail-hero"><img src="${A}recipe-5.png" alt="Healthy Japanese fried rice"><aside class="nutrition"><h3>Nutrition Information</h3>${[['Calories','219.9 kcal'],['Total Fat','10.7 g'],['Protein','7.9 g'],['Carbohydrate','22.3 g'],['Cholesterol','37.4 mg']].map(x=>`<div class="nutrition-row"><span>${x[0]}</span><strong>${x[1]}</strong></div>`).join('')}<p style="margin:34px 0 0">Values are approximate and may vary depending on the ingredients used.</p></aside></div></section><section class="shell detail-content"><div><h2>Ingredients</h2><h3>For the main dish</h3><ul class="check-list">${['2 cups cooked jasmine rice','2 chicken breasts, thinly sliced','2 large eggs','1 cup mixed vegetables','2 tbsp low-sodium soy sauce','1 tbsp toasted sesame oil'].map(x=>`<li><input type="checkbox"><span>${x}</span></li>`).join('')}</ul><h2 style="margin-top:60px">Directions</h2><div class="directions">${['Prepare all ingredients before heating the pan. Cold cooked rice gives the best texture.','Sear the chicken in a hot wok until golden and cooked through, then set aside.','Scramble the eggs, add vegetables and rice, and toss over high heat until fragrant.','Return the chicken, season with soy and sesame oil, then serve immediately.'].map((x,i)=>`<article class="direction"><h3>${['Start with your mise en place','Cook the chicken','Bring it all together','Season and serve'][i]}</h3><p>${x}</p></article>`).join('')}</div></div><aside class="side-note"><p class="eyebrow">Chef's note</p><h3>Why cold rice?</h3><p>Fresh, warm rice holds too much moisture and can turn soft in the pan. Chilled rice keeps every grain distinct.</p></aside></section>${newsletter()}<section class="shell section center"><h2>You may like these too</h2><div class="recipe-grid">${recipes.slice(0,3).map(card).join('')}</div></section>`;
}

function blog() {
  return `<section class="page-hero"><p class="eyebrow">Stories from the kitchen</p><h1>Blog & Article</h1><p class="lead">Ideas, techniques and delicious rabbit holes for people who love to cook.</p><label class="search"><input id="blog-search" type="search" placeholder="Search article, news or recipe..."><button class="button">Search</button></label></section><section class="shell blog-layout"><div class="blog-list" id="blog-list">${blogPosts.map((p,i)=>blogCard(p,i)).join('')}</div><aside class="sidebar"><h3>Tasty Recipes</h3>${recipes.slice(0,3).map(r=>`<a class="mini-recipe" href="#recipe"><img src="${A+r[1]}" alt=""><strong>${r[0]}</strong></a>`).join('')}</aside></section>${newsletter()}`;
}

function blogCard(p,i) { return `<article class="blog-card"><img src="${A+p[2]}" alt="${p[0]}" loading="lazy"><div><h3><a href="#article">${p[0]}</a></h3><p>${p[1]}</p><span class="byline">Wade Warren&nbsp;&nbsp; · &nbsp;&nbsp;${12+i} November 2026</span></div></article>`; }

function article() {
  return `<section class="page-hero"><p class="eyebrow">Foodieland journal</p><h1>Full Guide to Becoming a Professional Chef</h1><div class="author-row" style="justify-content:center"><img src="${A}author.png" alt="John Smith"><div><strong>John Smith</strong><small>15 March 2026</small></div></div></section><img class="article-cover" src="${A}chef.png" alt="Professional chef in a bright kitchen"><article class="article"><h2>How did you start out in the food industry?</h2><p>Every chef begins in a different place, but the real work starts with repetition. Learn how heat changes food, sharpen your knife skills and get comfortable tasting as you go. Technique creates freedom.</p><h2>What do you like most about your job?</h2><p>Cooking is a form of generous problem solving. A good cook notices what is in season, what the table needs and how a few careful choices can turn ordinary ingredients into a memorable meal.</p><blockquote>“The best kitchens are curious places. Nobody ever finishes learning.”</blockquote><h2>What advice would you give to a young chef?</h2><p>Stay organized, arrive early and treat every ingredient with respect. Ask questions. Keep notes. Cook for people as often as possible — honest reactions are better teachers than perfection.</p><h2>What is the biggest misconception about professional cooking?</h2><p>It is not about dramatic plating or complicated ideas. It is about consistency: making the hundredth plate with the same attention you gave the first.</p></article>${newsletter()}`;
}

function contact() {
  return `<section class="page-hero"><p class="eyebrow">We would love to hear from you</p><h1>Contact us</h1></section><section class="shell contact-grid"><div class="contact-visual"><img src="${A}chef.png" alt="Foodieland chef"></div><form class="contact-form" data-form="contact"><div class="field"><label for="name">Name</label><input id="name" required placeholder="Enter your name"></div><div class="field"><label for="email">Email address</label><input id="email" type="email" required placeholder="Your email address"></div><div class="field"><label for="subject">Subject</label><input id="subject" required placeholder="What is this about?"></div><div class="field"><label for="topic">Enquiry type</label><select id="topic"><option>General enquiry</option><option>Recipe question</option><option>Partnership</option></select></div><div class="field full"><label for="message">Message</label><textarea id="message" required placeholder="Tell us what is on your mind..."></textarea></div><button class="button" type="submit">Submit</button></form></section>${newsletter()}<section class="shell section center"><h2>Check out the delicious recipe</h2><div class="recipe-grid">${recipes.slice(3,6).map(card).join('')}</div></section>`;
}

function about() {
  return `<section class="page-hero"><p class="eyebrow">Our story</p><h1>Good food brings people together</h1><p class="lead">Foodieland is a warm corner of the internet for curious home cooks.</p></section><section class="shell about-card"><img src="${A}recipe-2.png" alt="A colorful homemade meal"><div><h2>Cook, learn and share</h2><p>We believe the best recipe is the one that gets cooked. That is why every Foodieland story is clear, practical and designed for real kitchens.</p><p>Our small team tests ideas, learns from cooks around the world and turns that curiosity into recipes you can make your own.</p><a class="button" href="#contact">Say hello</a></div></section><section class="shell section center"><h2>What we care about</h2><div class="recipe-grid"><article class="recipe-card"><h3>Simple instructions</h3><p>Confident cooking starts with steps that make sense.</p></article><article class="recipe-card"><h3>Joyful ingredients</h3><p>Seasonal food, bright flavors and room to improvise.</p></article><article class="recipe-card"><h3>Shared tables</h3><p>Because the best part of cooking is who you share it with.</p></article></div></section>${newsletter()}`;
}

const pages = { home, recipes: recipesPage, recipe: recipeDetail, blog, article, contact, about };

function toast(message) { const el = document.querySelector('.toast'); el.textContent = message; el.classList.add('show'); clearTimeout(window.toastTimer); window.toastTimer = setTimeout(()=>el.classList.remove('show'), 2400); }

function restoreSaves() { const saved = JSON.parse(localStorage.getItem('foodieland-saves') || '[]'); document.querySelectorAll('[data-save]').forEach(btn => btn.classList.toggle('saved', saved.includes(btn.dataset.save))); }

function render() {
  const route = location.hash.slice(1).split('?')[0] || 'home';
  app.innerHTML = (pages[route] || home)();
  document.querySelectorAll('.main-nav a').forEach(a => a.classList.toggle('active', a.hash === `#${route}` || (route === 'article' && a.hash === '#blog') || (route === 'recipe' && a.hash === '#recipes')));
  nav.classList.remove('open'); toggle.setAttribute('aria-expanded','false');
  restoreSaves(); window.scrollTo({top:0, behavior:'instant'});
}

toggle.addEventListener('click', () => { const open = nav.classList.toggle('open'); toggle.setAttribute('aria-expanded', String(open)); });
window.addEventListener('hashchange', render);
document.addEventListener('click', event => {
  const heart = event.target.closest('[data-save]');
  if (heart) { const saves = new Set(JSON.parse(localStorage.getItem('foodieland-saves') || '[]')); saves.has(heart.dataset.save) ? saves.delete(heart.dataset.save) : saves.add(heart.dataset.save); localStorage.setItem('foodieland-saves', JSON.stringify([...saves])); heart.classList.toggle('saved'); toast(heart.classList.contains('saved') ? 'Saved to favorites' : 'Removed from favorites'); }
  const filter = event.target.closest('[data-filter]');
  if (filter) { document.querySelectorAll('[data-filter]').forEach(x=>x.classList.remove('active')); filter.classList.add('active'); const type=filter.dataset.filter; document.querySelectorAll('#recipe-grid .recipe-card').forEach(x=>x.hidden = type !== 'all' && x.dataset.type !== type); }
  if (event.target.closest('[data-print]')) window.print();
  if (event.target.closest('[data-share]')) navigator.clipboard?.writeText(location.href).then(()=>toast('Recipe link copied'));
});
document.addEventListener('input', event => { if (event.target.id === 'blog-search') { const q=event.target.value.toLowerCase(); const filtered=blogPosts.filter(p=>p.join(' ').toLowerCase().includes(q)); document.querySelector('#blog-list').innerHTML = filtered.length ? filtered.map(blogCard).join('') : '<div class="empty"><h3>No articles found</h3><p>Try another search phrase.</p></div>'; } });
document.addEventListener('submit', event => { const form=event.target.closest('[data-form]'); if (!form) return; event.preventDefault(); toast(form.dataset.form === 'contact' ? 'Thanks! Your message is ready.' : 'Welcome to the Foodieland list!'); form.reset(); });

render();
