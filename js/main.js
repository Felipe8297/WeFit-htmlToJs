const container = document.createElement('div');
container.classList.add('container', 'p-4');

const rowMenu = document.createElement('div');
rowMenu.classList.add('row-menu');

const colMenu = document.createElement('div');
colMenu.classList.add('col-lg-12');

const h3Menu = document.createElement('h3');
h3Menu.classList.add('display-6');
h3Menu.textContent = 'Menu';

const btnGroup = document.createElement('div');
btnGroup.classList.add('btn-group');
btnGroup.setAttribute('role', 'group');
btnGroup.setAttribute('aria-label', 'Horizontal button group');

const btnHome = document.createElement('button');
btnHome.classList.add('btn', 'btn-secondary', 'mr-2');
btnHome.textContent = 'Home';
btnGroup.appendChild(btnHome);

const btnWho = document.createElement('button');
btnWho.classList.add('btn', 'btn-secondary', 'mr-2');
btnWho.textContent = 'Quem somos';
btnGroup.appendChild(btnWho);

const btnServices = document.createElement('button');
btnServices.classList.add('btn', 'btn-secondary', 'mr-2');
btnServices.textContent = 'Serviços';
btnGroup.appendChild(btnServices);

const btnSolutions = document.createElement('button');
btnSolutions.classList.add('btn', 'btn-secondary', 'mr-2');
btnSolutions.textContent = 'Soluções';
btnGroup.appendChild(btnSolutions);

const btnFAQ = document.createElement('button');
btnFAQ.classList.add('btn', 'btn-secondary', 'mr-2');
btnFAQ.textContent = 'FAQ';
btnGroup.appendChild(btnFAQ);

const btnContact = document.createElement('button');
btnContact.classList.add('btn', 'btn-secondary', 'mr-2');
btnContact.textContent = 'Contato';
btnGroup.appendChild(btnContact);

colMenu.appendChild(h3Menu);
colMenu.appendChild(btnGroup);
rowMenu.appendChild(colMenu);
container.appendChild(rowMenu);

const br1 = document.createElement('br');
const br2 = document.createElement('br');
container.appendChild(br1);
container.appendChild(br2);

const rowHeader = document.createElement('div');
rowHeader.classList.add('row-header');

const colHeader = document.createElement('div');
colHeader.classList.add('col-lg-12', 'text-right');

const h3Header = document.createElement('h3');
h3Header.classList.add('display-6');
h3Header.textContent = 'Header';

const jumbotron = document.createElement('div');
jumbotron.classList.add('jumbotron', 'ml-auto', 'text-right');

const h1 = document.createElement('h1');
h1.classList.add('display-4');
h1.textContent = 'WeFit Test!';

const lead = document.createElement('p');
lead.classList.add('lead');
lead.textContent = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';

const hr = document.createElement('hr');
hr.classList.add('my-4');

const p1 = document.createElement('p');
p1.textContent = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making.';

const a = document.createElement('a');
a.classList.add('btn', 'btn-success', 'btn-lg');
a.href = '#';
a.textContent = 'Learn more';

jumbotron.appendChild(h1);
jumbotron.appendChild(lead);
jumbotron.appendChild(hr);
jumbotron.appendChild(p1);
jumbotron.appendChild(a);
colHeader.appendChild(h3Header);
colHeader.appendChild(jumbotron);
rowHeader.appendChild(colHeader);
container.appendChild(rowHeader);

const br3 = document.createElement('br');
const br4 = document.createElement