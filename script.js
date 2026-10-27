const body=document.body,tb=document.getElementById('themeBtn');
if(localStorage.getItem('theme')==='dark'){body.classList.add('dark');tb.textContent='☀️'}
tb.addEventListener('click',()=>{const d=body.classList.toggle('dark');tb.textContent=d?'☀️':'🌙';localStorage.setItem('theme',d?'dark':'light')});
window.addEventListener('scroll',()=>{const h=document.documentElement,p=h.scrollTop/(h.scrollHeight-h.clientHeight)*100;document.getElementById('progress').style.width=(p||0)+'%'});
const syn=document.getElementById('synBtn');
if(syn)syn.addEventListener('click',()=>{const s=document.getElementById('synopsis');s.classList.toggle('hidden');syn.textContent=s.classList.contains('hidden')?'Show Synopsis':'Hide Synopsis'});
const like=document.querySelector('.like');
if(like){const k='like-'+like.dataset.id;let n=+localStorage.getItem('count-'+like.dataset.id)||0;const draw=()=>{const on=localStorage.getItem(k)==='1';like.classList.toggle('liked',on);like.innerHTML=(on?'❤️':'🤍')+' Like <span>'+n+'</span>'};draw();
like.addEventListener('click',()=>{const on=localStorage.getItem(k)==='1';localStorage.setItem(k,on?'0':'1');n+=on?-1:1;localStorage.setItem('count-'+like.dataset.id,n);draw()})}
const grid=document.getElementById('grid');
if(grid){let g='All';const q=document.getElementById('search'),cards=[...grid.children];
const run=()=>{let c=0;cards.forEach(x=>{const ok=(g==='All'||x.dataset.genre===g)&&x.dataset.title.includes(q.value.toLowerCase());x.hidden=!ok;if(ok)c++});document.getElementById('none').hidden=c>0};
q.addEventListener('input',run);document.querySelectorAll('#filters .chip').forEach(b=>b.addEventListener('click',()=>{document.querySelector('#filters .active').classList.remove('active');b.classList.add('active');g=b.dataset.g;run()}))}