const $=id=>document.getElementById(id),sleep=ms=>new Promise(r=>setTimeout(r,ms));
// ===== EDIT TEXTS HERE =====
const STOPS=[
 {b:'PLATFORM 1',s:'Where it all began 🚉',t:"Every great story starts with two strangers and a train. Ours started on a screen, and honestly, it turned out even better."},
 {b:'RATLAM JN',s:'The missed train 🚂',t:"In the movie, the train leaves without her. Disha ji, I'd never leave without you, and I'd happily run behind the train to bring you back. 😄"},
 {b:'BHATINDA',s:'Masti, dhol & chaos 🌾',t:"Full family, full drama, full masti. Your chirpy energy lights up every room I'm in, even through a phone screen. 🥳"},
 {b:'MANALI',s:'The happy ending 🏔️',t:"From gloomy to glowing, that's the effect you have on people. Thank you for making my story brighter. 💛"}
];
const HEROES=[
 {e:'🛡️',n:'Captain Disha',t:"Loyal, brave and always stands for what's right. Also never loses an argument. 😄"},
 {e:'🤖',n:'Iron Disha',t:"Genius-level advice. Honestly, you could run my whole life. 🧠"},
 {e:'⚡',n:'Thor Disha',t:"Mighty when it matters. Strong enough to handle all my silly jokes. 😂"},
 {e:'💚',n:'Hulk Disha',t:"When someone touches her food: Hulk mode ON. Stay away. 🍟😤"},
 {e:'🕷️',n:'Spider Disha',t:" With great power comes great cuteness. 🥰"},
 {e:'🏹',n:'Hawkeye Disha',t:"Never misses a target, especially the Rasmalai😂. 🎯"}
];
const STONES=[
 {n:'Space',c:'#3d7bff',t:"Space Stone: distance? Please. I'm still right next to you, always. 🚀"},
 {n:'Mind',c:'#ffd23f',t:"Mind Stone: you give me the smartest advice in the universe. 🧠"},
 {n:'Reality',c:'#ff4d4d',t:"Reality Stone: you made my reality 100 times better. 🌈"},
 {n:'Power',c:'#b05cff',t:"Power Stone: your smile has unlimited power over me. 😊"},
 {n:'Time',c:'#35d07f',t:"Time Stone: I'd rewind to 13 Sep just to do it all again. ⏳"},
 {n:'Soul',c:'#ff9a3d',t:"Soul Stone: no sacrifice needed, you're already my favourite person. 💖"}
];
// floating background
const cv=$('bg'),cx=cv.getContext('2d');let W,H;
function rs(){W=cv.width=innerWidth;H=cv.height=innerHeight}rs();addEventListener('resize',rs);
const E=['💖','⭐','🚂','🛡️','⚡','🌾'];
const PT=Array.from({length:18},(_,i)=>({x:Math.random()*W,y:Math.random()*H,s:14+Math.random()*14,v:.3+Math.random()*.5,e:E[i%6],r:Math.random()*6}));
(function L(t){cx.clearRect(0,0,W,H);cx.globalAlpha=.3;PT.forEach(p=>{cx.font=p.s+'px serif';cx.fillText(p.e,p.x+Math.sin(t/1300+p.r)*18,p.y);p.y-=p.v;if(p.y<-30){p.y=H+30;p.x=Math.random()*W}});requestAnimationFrame(L)})(0);
function burst(x,y,n=4,set=['💖','✨','⭐','🚂','🛡️']){for(let i=0;i<n;i++){const s=document.createElement('span');s.className='pop';s.textContent=set[Math.random()*set.length|0];s.style.left=x+'px';s.style.top=y+'px';s.style.setProperty('--x',(Math.random()*240-120)+'px');s.style.setProperty('--y',(-70-Math.random()*150)+'px');document.body.appendChild(s);setTimeout(()=>s.remove(),1300)}}
addEventListener('pointerdown',e=>burst(e.clientX,e.clientY,2));
let tt;function toast(m,ms=3200){const e=$('toast');e.textContent=m;e.classList.add('on');clearTimeout(tt);tt=setTimeout(()=>e.classList.remove('on'),ms)}
const go=id=>{$(id).classList.remove('hidden');setTimeout(()=>$(id).scrollIntoView({behavior:'smooth'}),80)};

// ----- train scene -----
const wave=(base,amp,ph)=>{let d=`M0 120`;for(let x=0;x<=800;x+=10)d+=`L${x} ${(base+amp*Math.sin(2*Math.PI*x/400+ph)).toFixed(1)}`;return d+'L800 120Z'};
let dots='';for(let i=0;i<40;i++){const x=(i*10+(i%3)*3)%400,y=18+(i*37)%24;dots+=`<circle cx="${x}" cy="${y}" r="2" fill="#f2a900"/><circle cx="${x+400}" cy="${y}" r="2" fill="#f2a900"/>`}
let sl='';for(let x=0;x<800;x+=20)sl+=`<rect x="${x}" y="8" width="8" height="8" fill="#7a4a2a"/>`;
let win=(x)=>[0,1,2].map(j=>`<rect x="${x+8+j*18}" y="33" width="12" height="12" rx="3" fill="#fff3b0"/>`).join('');
$('scene').innerHTML=`<div class="sun"></div>
<svg class="L" style="--s:30s;bottom:68px;height:90px" viewBox="0 0 800 120" preserveAspectRatio="none"><path d="${wave(50,26,0)}" fill="#c9a7e8"/></svg>
<svg class="L" style="--s:16s;bottom:50px;height:80px" viewBox="0 0 800 120" preserveAspectRatio="none"><path d="${wave(62,18,1.6)}" fill="#e98a5b"/></svg>
<svg class="L" style="--s:7s;bottom:22px;height:48px" viewBox="0 0 800 48" preserveAspectRatio="none"><rect width="800" height="48" fill="#ffd23f"/>${dots}</svg>
<svg class="L" style="--s:1.6s;bottom:14px;height:24px" viewBox="0 0 800 24" preserveAspectRatio="none"><rect y="4" width="800" height="4" fill="#555"/>${sl}<rect y="16" width="800" height="3" fill="#555"/></svg>
<svg class="train" viewBox="0 0 300 90"><g class="smoke"><circle cx="273" cy="18" r="8"/><circle cx="273" cy="18" r="8"/><circle cx="273" cy="18" r="8"/></g>
${[0,1,2].map(i=>`<rect x="${6+i*70}" y="25" width="66" height="42" rx="6" fill="#3b6fd8"/><rect x="${6+i*70}" y="55" width="66" height="5" fill="#ffd23f"/>${win(6+i*70)}`).join('')}
<rect x="222" y="38" width="70" height="29" rx="6" fill="#d9334f"/><rect x="222" y="18" width="30" height="30" rx="4" fill="#b82442"/><rect x="229" y="24" width="16" height="12" rx="3" fill="#fff3b0"/><rect x="266" y="22" width="12" height="18" fill="#333"/><circle cx="292" cy="52" r="4" fill="#ffe066"/>
${[24,54,94,124,164,194,236,270].map(x=>`<circle cx="${x}" cy="72" r="7" fill="#333" stroke="#999" stroke-width="2"/>`).join('')}</svg>
<div class="say">Chhuk chhuk chhuk... 🚂</div>`;
let st=0;
function showStop(){const s=STOPS[st];$('route').innerHTML=STOPS.map((_,i)=>`<i class="${i<=st?'on':''}"></i>${i<STOPS.length-1?'<u></u>':''}`).join('');
 $('stop').style.animation='none';void $('stop').offsetWidth;$('stop').style.animation='';
 $('stop').innerHTML=`<div class="board"><b>${s.b}</b><small>Station ${st+1} of ${STOPS.length}</small></div><h4>${s.s}</h4><p>${s.t}</p>`;
 $('next').textContent=st===STOPS.length-1?'Meet the Avengers 🛡️':'Next stop ➜'}
$('next').onclick=async e=>{
 if(st===STOPS.length-1){burst(e.clientX,e.clientY,12);go('s3');return}
 $('next').disabled=true;$('scene').classList.add('moving');$('stop').style.opacity=.25;await sleep(2400);$('scene').classList.remove('moving');st++;showStop();$('stop').style.opacity=1;$('next').disabled=false;burst(innerWidth/2,innerHeight*.6,8)};
$('board').onclick=e=>{burst(e.clientX,e.clientY,14);$('s1').querySelector('.stamp').style.animation='none';st=0;showStop();go('s2')};

// ----- avengers -----
$('heroes').innerHTML=HEROES.map(h=>`<div class="hero"><div class="hi"><div class="hf"><em>${h.e}</em>${h.n}<small>tap to flip</small></div><div class="hb"><b>${h.n}</b>${h.t}<small>Power level: 100/100</small></div></div></div>`).join('');
document.querySelectorAll('.hero').forEach(h=>h.onclick=()=>h.classList.toggle('on'));
$('gaunt').innerHTML=STONES.map(s=>`<span style="--c:${s.c}"></span>`).join('');
const R=(a,b)=>a+Math.random()*(b-a);let got=0;
function stones(){$('arena').innerHTML='';got=0;document.querySelectorAll('#gaunt span').forEach(x=>x.classList.remove('on'));$('snap').classList.add('hidden');
 STONES.forEach((s,i)=>{const d=document.createElement('div');d.className='stone';d.style.cssText=`--c:${s.c};--t:${R(2.5,4.5)}s;--dx:${R(-30,30)}px;--dy:${R(-30,30)}px;left:${8+i%3*32}%;top:${i<3?12:56}%;animation-delay:${-R(0,3)}s`;
  d.onclick=e=>{if(d.dataset.done)return;d.dataset.done=1;d.style.transition='.6s';d.style.transform='scale(0)';d.style.opacity=0;document.querySelectorAll('#gaunt span')[i].classList.add('on');toast(s.t,3800);burst(e.clientX,e.clientY,6,['✨','💎','💖']);got++;if(got===6)setTimeout(()=>$('snap').classList.remove('hidden'),900)};
  $('arena').appendChild(d)})}
stones();
$('snap').onclick=async()=>{$('flash').classList.add('on');await sleep(500);
 for(let i=0;i<40;i++)setTimeout(()=>burst(R(0,innerWidth),R(innerHeight*.3,innerHeight*.9),2,['💖','💗','✨']),i*50);
 go('s4');toast('Half the universe turned into hearts instead 💖',3600)};
$('again').onclick=()=>{['s2','s3','s4'].forEach(i=>$(i).classList.add('hidden'));st=0;stones();scrollTo({top:0})};
