/* -----------------------------------------------------------
   1.  Fixed word-emoji dictionary
----------------------------------------------------------------*/
const wordMap = {
  ant:["🐜"],  ape:["🐒"], art:["🎨"], axe:["🪓"],
  bag:["👜","🛍️"], bat:["🦇"], bed:["🛌"], bee:["🐝"],
  bug:["🐛"], bus:["🚍"], cap:["🧢"], car:["🚗"],
  cat:["🐈"], cow:["🐄"], dog:["🐕"], egg:["🥚"],
  fan:["🪭"], fly:["🪰"], fog:["🌁"], fox:["🦊"],
  gem:["💎"], hat:["👒"], ice:["🧊"], jar:["🫙"],
  key:["🔑"], log:["🪵"], map:["🗺"], owl:["🦉"],
  pen:["🖊","✒️"], pie:["🥧"], pig:["🐖"], pin:["📍"],
  ram:["🐏"], rat:["🐀"], row:["🚣"], saw:["🪚"],
  sun:["☀️"], ski:["🎿"], tag:["🏷"], tea:["🍵"],
  van:["🚐"], web:["🕸"], yam:["🍠"], bank:["🏦"],
  bath:["🛀"], bear:["🐻"], bell:["🛎"], bird:["🐦"],
  bolt:["🔩"], bone:["🦴"], book:["📕"], boot:["🥾"],
  bowl:["🥣"], bulb:["💡"], cake:["🍰","🎂"], cane:["🦯"],
  card:["💳"], cart:["🛒"], city:["🏙"], coat:["🧥"],
  coin:["🪙"], comb:["🪮"], corn:["🌽"], crab:["🦀"],
  dart:["🎯"], date:["📅"], deer:["🦌"], dice:["🎲"],
  dino:["🦖"], disk:["💽"], door:["🚪"], dove:["🕊"],
  drop:["💧"], drum:["🪘","🥁"], duck:["🦆"], file:["🗄"],
  film:["🎥","🎬"], fire:["🔥"], fish:["🐟"], frog:["🐸"],
  gift:["🎁"], goal:["🥅"], goat:["🐐"], gold:["🥇"],
  herb:["🌿"], hole:["🕳"], hook:["🪝"], horn:["📯"],
  kite:["🪁"], knot:["🪢"], lamp:["🪔"], leaf:["🍃"],
  link:["🔗"], lion:["🦁"], lock:["🔒"], mail:["📨"],
  mall:["🏬"], meat:["🍖"], memo:["📝"],
  milk:["🥛"], moon:["🌜","🎑"], nest:["🪹"], news:["🗞"],
  page:["📃"], palm:["🌴"], park:["🏞"], pear:["🍐"],
  pill:["💊"], pine:["🌲"], plug:["🔌"], rain:["🌧","☔️"],
  rice:["🍚"], ring:["💍"], rock:["🪨"], rose:["🌹"],
  salt:["🧂"], sari:["🥻"], seat:["💺"], ship:["🚢"],
  shoe:["👞"], sled:["🛷"], snow:["🌨"], soap:["🧼"],
  soda:["🥤"], sofa:["🛋"], star:["🌟"], surf:["🏄"],
  swan:["🦢"], swim:["🏊"], taco:["🌮"], tape:["📼"],
  taxi:["🚕"], wheel:["🛞"], tram:["🚊"], tree:["🌳"],
  vase:["🏺"], vest:["🦺"], wand:["🪄"],
  wave:["🌊"], wind:["🌬"], wine:["🍷"], wing:["🪽"],
  wolf:["🐺"], worm:["🪱"], yarn:["🧶"], yoga:["🧘"],
  yoyo:["🪀"], alarm:["⏰"], apple:["🍎"], bacon:["🥓"],
  bagel:["🥯"], banjo:["🪕"], beach:["🏖"], beans:["🫘"],
  bison:["🦬"], bread:["🍞"], brick:["🧱"], broom:["🧹"],
  brush:["🖌"], camel:["🐫"], candy:["🍬"], chair:["🪑"],
  chick:["🐤"], clock:["🕰"], coral:["🪸"], crown:["👑"],
  disco:["🪩"], dolls:["🎎"], donut:["🍩"], dress:["👗"],
  eagle:["🦅"], earth:["🌏"], ferry:["⛴"],
  fries:["🍟"], fuel:["⛽️"], gear:["⚙️"], goose:["🪿"],
  hippo:["🦛"], honey:["🍯"], horse:["🐎"], inbox:["📥"],
  juice:["🧃"], koala:["🐨"], lemon:["🍋"], llama:["🦙"],
  lotus:["🪷"], mango:["🥭"], maple:["🍁"], medal:["🎖"],
  melon:["🍈"], money:["💸"], moose:["🫎"], mouse:["🐁"],
  music:["🎼"], night:["🌃"], olive:["🫒"], onion:["🧅"],
  otter:["🦦"], panda:["🐼"], pants:["👖"], paper:["📄"],
  party:["🎉"], pasta:["🍝"], peach:["🍑"], phone:["📞"],
  piano:["🎹"], pizza:["🍕"], plant:["🪴"], plate:["🍽"],
  pouch:["👝"], purse:["👛"], radio:["📻"], razor:["🪒"],
  rhino:["🦏"], roach:["🪳"], rugby:["🏉"], ruler:["📏"],
  salad:["🥗"], scarf:["🧣"], shark:["🦈"], sheaf:["🌾"],
  sheep:["🐑"], shell:["🐚"], shirt:["👔"], siren:["🚨"],
  skunk:["🦨"], sleep:["🛌"], slide:["🛝"], sloth:["🦥"],
  snail:["🐌"], snake:["🐍"], socks:["🧦"], spoon:["🥄"],
  squid:["🦑"], steak:["🥩"], store:["🏪"], storm:["⛈"],
  sunny:["🌤"], sushi:["🍣"], teddy:["🧸"], tent:["⛺️"],
  tiger:["🐅"], tools:["🛠"], tower:["🗼"],
  train:["🚆"], trash:["🗑"], truck:["🚚"], tulip:["🌷"],
  whale:["🐋"], yacht:["🛥"], zebra:["🦓"]
};

/* -----------------------------------------------------------
   2.  Helper shortcuts
----------------------------------------------------------------*/
const $ = id => document.getElementById(id);
const rngLabel = (rng,lbl)=>rng.addEventListener('input',()=>$(lbl).textContent=rng.value);
rngLabel($('emojiSize'),'emojiVal');
rngLabel($('labelSize'),'labelVal');
rngLabel($('padding'),'padVal');
rngLabel($('strokeW'),'strokeVal');

let dlCounter = 1;

function ensureFont(family){
  const id='gfont-'+family.replace(/\s+/g,'-');
  if(!document.getElementById(id)){
    const link=document.createElement('link');
    link.id=id; link.rel='stylesheet';
    link.href=`https://fonts.googleapis.com/css2?family=${family.replace(/ /g,'+')}&display=swap`;
    document.head.appendChild(link);
  }
}

/* Random pick */
const choice = a => a[Math.random()*a.length|0];
const shuffle = a => {
  for(let i=a.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
};

/* -----------------------------------------------------------
   3.  Canvas generator
----------------------------------------------------------------*/
async function makeMatrix(){
  const cols = +$('cols').value;
  const rows = +$('rows').value;

  const emojiPx = +$('emojiSize').value;
  const labelPx = +$('labelSize').value;
  const pad     = +$('padding').value;
  const strokeW = +$('strokeW').value;
  const strokeC = $('strokeCol').value;
  const font    = $('fontSel').value;
  const transparent = $('bgTrans').checked;

  ensureFont(font);
  /* wait until the font is actually available before drawing text */
  await document.fonts.load(`${labelPx}px "${font}"`);

  const available = Object.keys(wordMap);
  const needed = cols*rows;
  if(available.length < needed){
    alert('Not enough words to fill matrix without duplicates');
    return;
  }
  const words = shuffle([...available]).slice(0, needed);

  /* Cell dimensions: emoji + label + paddings top/bottom */
  const cellW = emojiPx + pad*2;
  const cellH = emojiPx + labelPx + pad*3;

  /* Large internal canvas size */
  const canvas = $('matrix');
  const scale  = window.devicePixelRatio||1;
  canvas.width  = cols*cellW*scale;
  canvas.height = rows*cellH*scale;
  canvas.style.width  = cols*cellW + 'px';
  canvas.style.height = rows*cellH + 'px';
  $('canvasSize').textContent = `${cols*cellW} x ${rows*cellH}`;

  const ctx = canvas.getContext('2d');
  ctx.scale(scale,scale);
  ctx.clearRect(0,0,canvas.width/scale,canvas.height/scale);
  if(!transparent){
    ctx.fillStyle = '#fff';
    ctx.fillRect(0,0,canvas.width/scale,canvas.height/scale);
    ctx.fillStyle = '#000';
  }

  ctx.textAlign='center';
  ctx.textBaseline='middle';

  /* Draw grid + content */
  let idx=0;
  for(let r=0;r<rows;r++){
    for(let c=0;c<cols;c++){
      const x=c*cellW, y=r*cellH;
      const cx=x+cellW/2, cy=y+pad+emojiPx/2;

      const word=words[idx++];
      const emo =choice(wordMap[word]);

      /* border */
      if(strokeW>0){
        ctx.lineWidth=strokeW;
        ctx.strokeStyle=strokeC;
        ctx.strokeRect(x,y,cellW,cellH);
      }

      /* emoji */
      ctx.font=`${emojiPx}px sans-serif`;
      ctx.fillText(emo,cx,cy);

      /* label */
      ctx.font=`${labelPx}px "${font}", sans-serif`;
      ctx.fillText(word,cx,y+emojiPx+pad*2+labelPx/2);
    }
  }

  /* Download button */
  $('download').onclick = () => {
    const link = document.createElement('a');
    link.download = `word_grid_${cols}x${rows}_${String(dlCounter).padStart(4,'0')}.png`;
    link.href = canvas.toDataURL('image/png');
    dlCounter++;
    link.click();
  };
}

/* -----------------------------------------------------------
   4.  UI wiring
----------------------------------------------------------------*/
$('generate').onclick=makeMatrix;
document.querySelectorAll('#controls input, #controls select')
        .forEach(el=>el.addEventListener('change',makeMatrix));

makeMatrix(); /* initial draw */
