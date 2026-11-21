
const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('.navlinks');
menu?.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);menu.textContent=open?'Close':'Menu'});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu?.setAttribute('aria-expanded','false');if(menu)menu.textContent='Menu'}));
const dialog=document.querySelector('#image-dialog'),dialogImg=document.querySelector('#dialog-image');
document.querySelectorAll('.zoom').forEach(b=>b.addEventListener('click',()=>{const img=b.querySelector('img');dialogImg.src=img.src;dialogImg.alt=img.alt;dialog.showModal()}));
document.querySelector('.close-dialog')?.addEventListener('click',()=>dialog.close());
dialog?.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
function activateTab(tab){const group=tab.closest('[role=tablist]');group.querySelectorAll('[role=tab]').forEach(t=>{const selected=t===tab;t.setAttribute('aria-selected',String(selected));t.tabIndex=selected?0:-1;document.getElementById(t.getAttribute('aria-controls')).hidden=!selected})}
document.querySelectorAll('[role=tab]').forEach(tab=>{tab.addEventListener('click',()=>activateTab(tab));tab.addEventListener('keydown',e=>{if(!['ArrowLeft','ArrowRight','Home','End'].includes(e.key))return;e.preventDefault();const tabs=[...tab.parentElement.querySelectorAll('[role=tab]')];let i=tabs.indexOf(tab);i=e.key==='Home'?0:e.key==='End'?tabs.length-1:(i+(e.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length;activateTab(tabs[i]);tabs[i].focus()})});
