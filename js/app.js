document.addEventListener("DOMContentLoaded", function () {

loadBTC();
loadFearGreed();
loadNews();
aiOutlook();
dailySetup();

});

/* AUTO REFRESH EVERY 60 SECONDS */

setInterval(function(){

loadBTC();
loadFearGreed();
loadNews();
aiOutlook();
dailySetup();

},60000);


/* BTC PRICE */

async function loadBTC(){

try{

const r = await fetch(
"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
);

const data = await r.json();

const el = document.getElementById("btc-price");

if(el){
el.innerText="$"+data.bitcoin.usd.toLocaleString();
}

}catch(err){

console.log("BTC price error",err);

}

}


/* FEAR AND GREED INDEX */

async function loadFearGreed(){

try{

const r = await fetch(
"https://api.alternative.me/fng/"
);

const data = await r.json();

const el = document.getElementById("fear-greed");

if(el){

el.innerText=
data.data[0].value +
" (" +
data.data[0].value_classification +
")";

}

}catch(err){

console.log("Sentiment error",err);

}

}


/* AI MARKET OUTLOOK */

async function aiOutlook(){

try{

const r = await fetch(
"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
);

const data = await r.json();

const price=data.bitcoin.usd;

let outlook="";

if(price>70000){

outlook="Strong Bullish Momentum in Crypto Markets";

}

else if(price>60000){

outlook="Market Consolidation with Bullish Bias";

}

else{

outlook="Bearish Pressure Dominating Market";

}

const el=document.getElementById("ai-outlook");

if(el){

el.innerText=outlook;

}

}catch(err){

console.log("AI outlook error",err);

}

}


/* CRYPTO NEWS FEED */

async function loadNews(){

try{

const r = await fetch(
"https://min-api.cryptocompare.com/data/v2/news/?lang=EN"
);

const data = await r.json();

const container=document.getElementById("news");

if(!container) return;

container.innerHTML="";

data.Data.slice(0,5).forEach(function(n){

const li=document.createElement("li");

li.innerHTML=
'<a href="'+n.url+'" target="_blank">'+n.title+"</a>";

container.appendChild(li);

});

}catch(err){

console.log("News error",err);

}

}


/* DAILY TRADE SETUP */

function dailySetup(){

const setups=[

"BTC Long above 64000 | Target 67000 | Stop 62000",

"ETH Breakout above 3500 | Target 3800",

"Watch SOL support at 120 | Potential bounce zone",

"Market neutral until macro news release",

"BTC accumulation zone forming"

];

const random = setups[Math.floor(Math.random()*setups.length)];

const el=document.getElementById("trade-setup");

if(el){

el.innerText=random;

}

}

/* FUNDING RATE */

async function fundingRate(){

try{

const r = await fetch(
"https://fapi.binance.com/fapi/v1/premiumIndex?symbol=BTCUSDT"
);

const data = await r.json();

const rate = (data.lastFundingRate * 100).toFixed(4);

document.getElementById("funding-rate").innerText =
rate + "%";

}catch(err){

console.log("Funding error",err);

}

}



/* LIQUIDATION DATA */

async function liquidationData(){

try{

const r = await fetch(
"https://api.coinglass.com/api/futures/liquidation_chart"
);

const data = await r.json();

const value = data.data.totalLiquidation;

document.getElementById("liquidations").innerText =
"$" + value + " liquidated";

}catch(err){

document.getElementById("liquidations").innerText =
"Market calm";

}

}


/* WHALE TRACKER */

function whaleTracker(){

const alerts = [

"Whale Alert: 4,200 BTC transferred to Binance",

"Whale Alert: 18,000 ETH accumulated",

"Large USDT mint detected",

"Whale wallet buying BTC dip",

"Smart money moving BTC to cold storage"

];

const random = alerts[Math.floor(Math.random()*alerts.length)];

document.getElementById("whale-data").innerText = random;

}

fundingRate();
liquidationData();
whaleTracker();

/* WHALE ALERT PLACEHOLDER */

function whaleAlert(){

const alerts=[

"Whale Alert: 3,200 BTC moved to exchange",

"Whale Alert: 18,000 ETH accumulated",

"Large USDT mint detected",

"Whale wallet accumulation detected"

];

const random=alerts[Math.floor(Math.random()*alerts.length)];

const el=document.getElementById("whale-alert");

if(el){

el.innerText=random;

}

}

whaleAlert();

async function macroMarket(){

try{

const r = await fetch(
"https://api.coingecko.com/api/v3/global"
);

const data = await r.json();

document.getElementById("marketcap").innerText=
"$"+Math.round(data.data.total_market_cap.usd/1000000000)+"B";

document.getElementById("dominance").innerText=
data.data.market_cap_percentage.btc.toFixed(2)+"%";

}catch(err){

console.log(err);

}

try{

const r2 = await fetch(
"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd"
);

const d2 = await r2.json();

document.getElementById("btc").innerText=
"$"+d2.bitcoin.usd.toLocaleString();

document.getElementById("eth").innerText=
"$"+d2.ethereum.usd.toLocaleString();

}catch(err){

console.log(err);

}

}

macroMarket();

 // Sentiment
        const val = parseInt(data.investor_sentiment);
        document.getElementById('sentiment-fill').style.width = val + "%";
        document.getElementById('sentiment-value').innerText = val + "%";
  
