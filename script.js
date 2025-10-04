const state = {
left: { name:'HOME', score:0, shots:0, penalties:[null,null], players:[], goalies:[] },
right:{ name:'AWAY', score:0, shots:0, penalties:[null,null], players:[], goalies:[] },
period:1,
clockSeconds:20*60,
running:false,
skaterSlots:5,
goalieSlots:2
}


const clockEl=document.getElementById('clock'),periodEl=document.getElementById('period'),scoreLeftEl=document.getElementById('scoreLeft'),scoreRightEl=document.getElementById('scoreRight'),shotsLeftEl=document.getElementById('shotsLeft'),shotsRightEl=document.getElementById('shotsRight'),teamLeftName=document.getElementById('teamLeftName'),teamRightName=document.getElementById('teamRightName'),playersLeftWrap=document.getElementById('playersLeft'),playersRightWrap=document.getElementById('playersRight'),penaltiesLeftWrap=document.getElementById('penaltiesLeft'),penaltiesRightWrap=document.getElementById('penaltiesRight'),startStopBtn=document.getElementById('startStop'),editClockBtn=document.getElementById('editClock'),logoUpload=document.getElementById('logoUpload'),logoLeft=document.getElementById('logoLeft'),logoRight=document.getElementById('logoRight'),resetBtn=document.getElementById('resetBtn'),fullscreenBtn=document.getElementById('fullscreenBtn'),buzzerAudio=document.getElementById('buzzerAudio'),goalAudio=document.getElementById('goalAudio');


function initPlayers(){['left','right'].forEach(side=>{state[side].players=[];for(let i=0;i<state.skaterSlots;i++)state[side].players.push({num:'',goals:0,shots:0,assists:0});state[side].goalies=[];for(let g=0;g<state.goalieSlots;g++)state[side].goalies.push({num:'',goals:0,assists:0,saves:0});})}
initPlayers();


function render(){
scoreLeftEl.textContent=state.left.score;scoreRightEl.textContent=state.right.score;
shotsLeftEl.textContent=state.left.shots;shotsRightEl.textContent=state.right.shots;
periodEl.textContent=state.period;clockEl.textContent=formatTime(state.clockSeconds);
teamLeftName.value=state.left.name;teamRightName.value=state.right.name;
renderPenalties();renderPlayers();
}


function renderPenalties(){[penaltiesLeftWrap,penaltiesRightWrap].forEach((wrap,idx)=>{const side=idx===0?'left':'right';wrap.innerHTML='';state[side].penalties.forEach((p,i)=>{const slot=document.createElement('div');slot.className='pen-slot';const num=document.createElement('input');num.placeholder='Player#';num.value=p?.num||'';num.addEventListener('change',e=>{updatePenalty(side,i,'num',e.target.value)});
const len=document.createElement('input');len.placeholder='M:SS';len.style.width='60px';len.value=p?.len||'';len.addEventListener('change',e=>{updatePenalty(side,i,'len',e.target.value)});
const clr=document.createElement('button');clr.textContent='X';clr.addEventListener('click',()=>{state[side].penalties[i]=null;render()});slot.append(num,len,clr);wrap.append(slot);});})}
function updatePenalty(side,i,field,val){state[side].penalties[i]={...(state[side].penalties[i]||{}),[field]:val};}


function renderPlayers(){playersLeftWrap.innerHTML='';playersRightWrap.innerHTML='';['left','right'].forEach(side=>{const wrap=side==='left'?playersLeftWrap:playersRightWrap;state[side].players.forEach((p,idx)=>{const slot=document.createElement('div');slot.c
