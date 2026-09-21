const DBKEY="FITNESS_OS_DB_V2";
const FOOD_BASE={
  "Soya chunks (dry)":{cal:345,p:52,c:33,fat:0.5,fiber:13},
  "Paneer":{cal:265,p:18,c:6,fat:20,fiber:0},
  "Low-fat paneer":{cal:170,p:24,c:5,fat:7,fiber:0},
  "Curd / yogurt":{cal:61,p:3.5,c:4.7,fat:3.3,fiber:0},
  "Milk 2%":{cal:50,p:3.3,c:4.8,fat:2,fiber:0},
  "Oats (dry)":{cal:389,p:16.9,c:66.3,fat:6.9,fiber:10.6},
  "Rice (cooked)":{cal:130,p:2.7,c:28.2,fat:.3,fiber:.4},
  "Roti / chapati":{cal:297,p:11.5,c:55,fat:4.2,fiber:11},
  "Dal (cooked)":{cal:116,p:9,c:20,fat:.4,fiber:7.9},
  "Rajma (cooked)":{cal:127,p:8.7,c:22.8,fat:.5,fiber:6.4},
  "Chickpeas / chana (cooked)":{cal:164,p:8.9,c:27.4,fat:2.6,fiber:7.6},
  "Tofu":{cal:76,p:8,c:1.9,fat:4.8,fiber:.3},
  "Peanut butter":{cal:588,p:25,c:20,fat:50,fiber:6},
  "Peanuts":{cal:567,p:25.8,c:16.1,fat:49.2,fiber:8.5},
  "Banana":{cal:89,p:1.1,c:22.8,fat:.3,fiber:2.6},
  "Apple":{cal:52,p:.3,c:13.8,fat:.2,fiber:2.4},
  "Potato (boiled)":{cal:87,p:1.9,c:20.1,fat:.1,fiber:1.8},
  "Mixed vegetables":{cal:60,p:2.5,c:10,fat:.7,fiber:3.5},
  "Whey protein":{cal:400,p:80,c:8,fat:6,fiber:0}
};
const SPLIT=[
 {name:"PUSH A",desc:"Chest + shoulders + triceps. Controlled pressing volume.",ex:[["Barbell / machine bench press","3 × 6–10"],["Incline dumbbell press","3 × 8–12"],["Seated shoulder press","3 × 8–12"],["Cable / dumbbell lateral raise","3 × 12–15"],["Triceps pushdown","3 × 10–15"],["Overhead triceps extension","2 × 10–15"]]},
 {name:"PULL A",desc:"Back + rear delts + biceps. Focus on full range and controlled pulls.",ex:[["Lat pulldown / assisted pull-up","3 × 8–12"],["Seated cable row","3 × 8–12"],["Chest-supported row","3 × 8–12"],["Rear-delt fly","3 × 12–15"],["EZ-bar / dumbbell curl","3 × 10–15"],["Hammer curl","2 × 10–15"]]},
 {name:"LEGS A",desc:"Quads + hamstrings + glutes + calves + core.",ex:[["Squat / hack squat","3 × 6–10"],["Romanian deadlift","3 × 8–10"],["Leg press","3 × 10–12"],["Leg curl","3 × 10–15"],["Calf raise","3 × 12–15"],["Plank","3 × 30–60 sec"]]},
 {name:"PUSH B",desc:"Second push exposure with slightly different angles.",ex:[["Incline machine / dumbbell press","3 × 8–12"],["Machine chest press","3 × 8–12"],["Dumbbell shoulder press","3 × 8–12"],["Cable lateral raise","3 × 12–15"],["Dips / assisted dips","2 × 8–12"],["Rope triceps pushdown","3 × 10–15"]]},
 {name:"PULL B",desc:"Second pull exposure. Prioritize back thickness and arms.",ex:[["Pull-up / lat pulldown","3 × 6–10"],["One-arm dumbbell row","3 × 8–12"],["Cable row","3 × 10–12"],["Reverse pec deck","3 × 12–15"],["Incline dumbbell curl","3 × 10–15"],["Hammer curl","2 × 10–15"]]},
 {name:"LEGS B",desc:"Second leg exposure. Keep technique strict and progress gradually.",ex:[["Leg press / front squat","3 × 8–12"],["Hip thrust","3 × 8–12"],["Bulgarian split squat","3 × 8–12 each"],["Leg extension","2 × 12–15"],["Seated leg curl","3 × 10–15"],["Calf raise","3 × 12–15"],["Reverse crunch","3 × 10–15"]]},
 {name:"RECOVERY",desc:"Easy movement, mobility and recovery. No hard lifting.",ex:[["Brisk/easy walk","30–60 min"],["Mobility","10–15 min"]]}
];
let db=loadDB();
function defaults(){return {settings:{height:167.6,startWeight:77,goalWeight:69.5,calories:1800,protein:115,carbs:200,fiber:30,steps:10000,water:2.5},days:{},customFoods:{}}}
function loadDB(){try{return JSON.parse(localStorage.getItem(DBKEY))||defaults()}catch(e){return defaults()}}
function saveDB(){localStorage.setItem(DBKEY,JSON.stringify(db))}
function today(){const d=new Date();d.setMinutes(d.getMinutes()-d.getTimezoneOffset());return d.toISOString().slice(0,10)}
function dateText(s){return new Date(s+"T00:00:00").toLocaleDateString("en-IN",{weekday:"short",day:"2-digit",month:"short",year:"numeric"})}
function getDay(d=today()){if(!db.days[d])db.days[d]={steps:0,weight:null,water:0,food:[],workout:[],sleep:0};return db.days[d]}
function totals(d=today()){const foods=getDay(d).food;return foods.reduce((a,x)=>{a.cal+=x.cal;a.p+=x.p;a.c+=x.c;a.fiber+=x.fiber;a.fat+=x.fat;return a},{cal:0,p:0,c:0,fiber:0,fat:0})}
function esc(s){return String(s??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}
function pct(v,t){return Math.max(0,Math.min(100,t?Math.round(v/t*100):0))}
function mealIndex(){return ["Breakfast","Lunch","Snack","Dinner","Other"]}
function currentWorkoutIndex(d=today()){const n=new Date(d+"T00:00:00").getDay();return n===0?6:n-1}
function initNav(){document.querySelectorAll(".nav-btn").forEach(b=>b.onclick=()=>showPage(b.dataset.page));document.querySelectorAll("[data-goto]").forEach(b=>b.onclick=()=>showPage(b.dataset.goto))}
function showPage(id){document.querySelectorAll(".page").forEach(p=>p.classList.toggle("active",p.id===id));document.querySelectorAll(".nav-btn").forEach(b=>b.classList.toggle("active",b.dataset.page===id));if(id==="dashboard")renderDashboard();if(id==="food")renderFood();if(id==="workout")renderWorkout();if(id==="history")renderHistory();if(id==="settings")renderSettings()}
function renderDashboard(){
 const d=getDay(),t=totals(),s=db.settings;document.getElementById("todayLabel").textContent=dateText(today());document.getElementById("greeting").textContent=`${SPLIT[currentWorkoutIndex()].name} // ${dateText(today()).split(",")[0]}`;
 document.getElementById("coachHeadline").textContent=`${d.steps.toLocaleString()} steps logged • ${t.p.toFixed(0)} g protein • ${t.cal.toFixed(0)} kcal`;
 setText("mCalories",Math.round(t.cal));setText("mProtein",Math.round(t.p));setText("mCarbs",Math.round(t.c));setText("mFiber",t.fiber.toFixed(1));setText("mSteps",d.steps.toLocaleString());setText("mWater",d.water.toFixed(1));
 setText("mCalTarget",s.calories);setText("mProteinTarget",s.protein);setText("mFiberTarget",s.fiber);setText("mStepTarget",s.steps);setText("mWaterTarget",s.water);
 meter("calMeter",t.cal,s.calories);meter("proteinMeter",t.p,s.protein);meter("carbMeter",t.c,s.carbs);meter("fiberMeter",t.fiber,s.fiber);meter("stepMeter",d.steps,s.steps);meter("waterMeter",d.water,s.water);
 document.getElementById("quickSteps").value=d.steps;document.getElementById("quickWeight").value=d.weight??"";
 document.getElementById("dashboardFood").innerHTML=d.food.length?d.food.slice(-5).reverse().map(x=>`<div class="food-row"><div class="row-main"><b>${esc(x.name)}</b><span>${Math.round(x.cal)} kcal</span></div><div class="hint">${x.amount} g • ${x.p.toFixed(1)}g P • ${x.c.toFixed(1)}g C • ${x.fiber.toFixed(1)}g fiber</div></div>`).join(""):`<div class="hint">No food logged yet. Start with your first meal.</div>`;
 const wi=currentWorkoutIndex(),done=d.workout.length;document.getElementById("dashboardWorkout").innerHTML=`<div class="food-row"><b>${SPLIT[wi].name}</b><div class="hint">${done} exercise entries logged today.</div></div>`;
 const remP=Math.max(0,s.protein-t.p),remCal=Math.max(0,s.calories-t.cal),remSteps=Math.max(0,s.steps-d.steps);
 let next;if(done===0&&wi!==6)next=`Complete today's <strong>${SPLIT[wi].name}</strong> session. Then aim to finish the remaining <strong>${remSteps.toLocaleString()} steps</strong>.`;else if(remP>10)next=`Prioritize a vegetarian protein source next. You have about <strong>${Math.round(remP)} g protein</strong> remaining.`;else if(remSteps>0)next=`You're close. Get another <strong>${remSteps.toLocaleString()} steps</strong> today.`;else if(remCal<150)next=`Calories are near target. Focus on water, vegetables and recovery rather than forcing extra food.`;else next=`Targets are in good shape. Finish your water target and protect your sleep tonight.`;
 document.getElementById("coachBox").innerHTML=next;document.getElementById("nextAction").innerHTML=next;
}
function renderDashboardCharts(){const w=document.getElementById("dashWeightChart"),s=document.getElementById("dashStepsChart");if(w)miniWeight(w);if(s)miniSteps(s)}
function miniWeight(c){const x=c.getContext("2d"),w=c.width,h=c.height;x.clearRect(0,0,w,h);const a=Object.entries(db.days).filter(e=>e[1].weight!=null).sort((a,b)=>a[0].localeCompare(b[0])).slice(-14);if(!a.length){x.fillStyle="#4d6455";x.font="14px Consolas";x.fillText("Log weight to see your trend.",20,35);return}const y=a.map(e=>e[1].weight),lo=Math.min(...y)-1,hi=Math.max(...y)+1,p=28;x.strokeStyle="#173a24";for(let j=0;j<4;j++){let yy=p+j*(h-p*2)/3;x.beginPath();x.moveTo(p,yy);x.lineTo(w-p,yy);x.stroke()}x.strokeStyle="#39ff88";x.lineWidth=2;x.beginPath();y.forEach((v,i)=>{let px=p+i*(w-p*2)/Math.max(1,y.length-1),py=h-p-(v-lo)/(hi-lo)*(h-p*2);i?x.lineTo(px,py):x.moveTo(px,py)});x.stroke();x.fillStyle="#39ff88";y.forEach((v,i)=>{let px=p+i*(w-p*2)/Math.max(1,y.length-1),py=h-p-(v-lo)/(hi-lo)*(h-p*2);x.beginPath();x.arc(px,py,3,0,7);x.fill()});x.fillStyle="#718078";x.font="11px Consolas";x.fillText("Current: "+y[y.length-1].toFixed(1)+" kg",w-160,18)}
function miniSteps(c){const x=c.getContext("2d"),w=c.width,h=c.height;x.clearRect(0,0,w,h);const a=[];for(let i=6;i>=0;i--){let d=new Date();d.setDate(d.getDate()-i);let k=d.toISOString().slice(0,10);a.push(db.days[k]?.steps||0)}const target=db.settings.steps,max=Math.max(target*1.25,...a,1000),p=28;const ty=h-p-target/max*(h-p*2);x.strokeStyle="#ffd34d";x.setLineDash([4,4]);x.beginPath();x.moveTo(p,ty);x.lineTo(w-p,ty);x.stroke();x.setLineDash([]);const bw=(w-p*2)/7*.52;x.fillStyle="#39ff88";a.forEach((v,i)=>{let px=p+i*(w-p*2)/7+(w-p*2)/14-bw/2,bh=v/max*(h-p*2);x.fillRect(px,h-p-bh,bw,bh)});x.fillStyle="#ffd34d";x.font="10px Consolas";x.fillText("TARGET "+target.toLocaleString(),p+4,ty-5)}
function renderWeeklyPlan(){const e=document.getElementById("dashWeeklyPlan");if(!e)return;const n=currentWorkoutIndex();e.innerHTML=SPLIT.map((w,i)=>`<div class="plan-row ${i===n?"active":""}"><span>${["MON","TUE","WED","THU","FRI","SAT","SUN"][i]}</span><span>${w.name}</span><span>${i===n?"→":""}</span></div>`).join("")}
function setText(id,v){document.getElementById(id).textContent=v}
function meter(id,v,t){document.getElementById(id).style.width=pct(v,t)+"%"}
document.getElementById("saveQuick").onclick=()=>{const d=getDay();d.steps=Math.max(0,Number(document.getElementById("quickSteps").value)||0);const w=document.getElementById("quickWeight").value;if(w)d.weight=Number(w);saveDB();renderDashboard()}
function populateFoodSelect(){const all={...FOOD_BASE,...db.customFoods};document.getElementById("foodSelect").innerHTML=Object.keys(all).sort().map(k=>`<option>${esc(k)}</option>`).join("")}
function renderFood(){const d=getDay(),t=totals();document.getElementById("foodDate").textContent=dateText(today());populateFoodSelect();setText("foodCalTotal",Math.round(t.cal));setText("foodProTotal",t.p.toFixed(1)+" g");setText("foodCarbTotal",t.c.toFixed(1)+" g");setText("foodFiberTotal",t.fiber.toFixed(1)+" g");setText("foodFatTotal",t.fat.toFixed(1)+" g");document.getElementById("foodList").innerHTML=d.food.length?d.food.map((x,i)=>`<div class="food-row"><div class="row-main"><b>${esc(x.name)}</b><button class="danger remove-food" data-i="${i}">X</button></div><div class="hint">${x.meal} • ${x.amount} g • ${Math.round(x.cal)} kcal • P ${x.p.toFixed(1)}g • C ${x.c.toFixed(1)}g • Fiber ${x.fiber.toFixed(1)}g • Fat ${x.fat.toFixed(1)}g</div></div>`).join(""):`<div class="hint">Food entries will appear here.</div>`;document.querySelectorAll(".remove-food").forEach(b=>b.onclick=()=>{d.food.splice(Number(b.dataset.i),1);saveDB();renderFood();renderDashboard()})}
document.getElementById("addFood").onclick=()=>{const name=document.getElementById("foodSelect").value,amount=Math.max(1,Number(document.getElementById("foodAmount").value)||0),meal=document.getElementById("mealSelect").value,all={...FOOD_BASE,...db.customFoods},n=all[name];if(!n)return;const k=amount/100;getDay().food.push({name,amount,meal,cal:n.cal*k,p:n.p*k,c:n.c*k,fiber:n.fiber*k,fat:n.fat*k});saveDB();renderFood();renderDashboard()}
document.getElementById("addCustom").onclick=()=>{const name=document.getElementById("customName").value.trim();if(!name)return alert("Enter a food name.");db.customFoods[name]={cal:Number(document.getElementById("customCal").value)||0,p:Number(document.getElementById("customProtein").value)||0,c:Number(document.getElementById("customCarbs").value)||0,fat:Number(document.getElementById("customFat").value)||0,fiber:Number(document.getElementById("customFiber").value)||0};saveDB();populateFoodSelect();document.getElementById("customName").value="";alert("Custom food saved.")}
function renderWorkout(){
 const idx=currentWorkoutIndex(),w=SPLIT[idx],d=getDay();setText("workoutDayPill",dateText(today()));setText("workoutTitle",w.name);setText("workoutDescription",w.desc);
 document.getElementById("weekStrip").innerHTML=SPLIT.map((x,i)=>`<div class="day-chip ${i===idx?"active":""} ${i===6?"rest":""}"><b>${["MON","TUE","WED","THU","FRI","SAT","SUN"][i]}</b><br><span>${x.name}</span></div>`).join("");
 document.getElementById("exerciseList").innerHTML=w.ex.map((e,i)=>`<div class="exercise-row"><div class="row-main"><b>${i+1}. ${esc(e[0])}</b><span class="rx">${esc(e[1])}</span></div></div>`).join("");
 document.getElementById("exerciseSelect").innerHTML=w.ex.map((e,i)=>`<option value="${i}">${i+1}. ${esc(e[0])}</option>`).join("");
 document.getElementById("sessionLogs").innerHTML=d.workout.length?d.workout.map((x,i)=>`<div class="log-row"><div class="row-main"><b>${esc(x.exercise)}</b><button class="danger remove-ex" data-i="${i}">X</button></div><div class="hint">${x.sets} sets × ${x.reps} reps @ ${x.weight} kg</div></div>`).join(""):`<div class="hint" style="margin-top:12px">No exercises logged yet.</div>`;
 document.querySelectorAll(".remove-ex").forEach(b=>b.onclick=()=>{d.workout.splice(Number(b.dataset.i),1);saveDB();renderWorkout();renderDashboard()})
}
document.getElementById("logExercise").onclick=()=>{const idx=Number(document.getElementById("exerciseSelect").value),w=SPLIT[currentWorkoutIndex()];getDay().workout.push({exercise:w.ex[idx][0],sets:Number(document.getElementById("exSets").value)||1,reps:Number(document.getElementById("exReps").value)||1,weight:Number(document.getElementById("exWeight").value)||0});saveDB();renderWorkout();renderDashboard()}
function renderHistory(){
 const entries=Object.entries(db.days).filter(([,d])=>d.weight!=null||d.steps||d.food.length||d.workout.length).sort((a,b)=>a[0].localeCompare(b[0])),latest=entries[entries.length-1]?.[1];setText("hWeight",latest?latest.weight.toFixed(1):"--");setText("hReports",entries.length);
 const change=latest?latest.weight-db.settings.startWeight:0;setText("hChange",(change>0?"+":"")+change.toFixed(1));setText("hAvgSteps",Math.round(averageSteps(7)).toLocaleString());
 document.getElementById("historyTable").innerHTML=entries.slice().reverse().map(([date,d])=>{const t=totals(date);return `<tr><td>${dateText(date)}</td><td>${d.weight!=null?d.weight.toFixed(1):"-"}</td><td>${d.steps.toLocaleString()}</td><td>${Math.round(t.cal)}</td><td>${Math.round(t.p)}</td><td>${t.fiber.toFixed(1)}</td><td>${d.workout.length?d.workout.length+" entries":"—"}</td></tr>`}).join("")||`<tr><td colspan="7" class="hint">No history yet.</td></tr>`;drawWeightChart(entries)}
function averageSteps(n){let vals=[];for(let i=0;i<n;i++){let d=new Date();d.setDate(d.getDate()-i);let k=d.toISOString().slice(0,10);if(db.days[k])vals.push(db.days[k].steps||0)}return vals.length?vals.reduce((a,b)=>a+b,0)/vals.length:0}
function drawWeightChart(entries){const c=document.getElementById("weightChart"),x=c.getContext("2d"),w=c.width,h=c.height;x.clearRect(0,0,w,h);const vals=entries.filter(e=>e[1].weight!=null).slice(-14);if(!vals.length){x.fillStyle="#555";x.fillText("Weight entries will appear here.",20,35);return}const ys=vals.map(e=>e[1].weight),min=Math.min(...ys)-1,max=Math.max(...ys)+1,p=35;x.strokeStyle="#202020";for(let j=0;j<4;j++){let y=p+j*(h-p*2)/3;x.beginPath();x.moveTo(p,y);x.lineTo(w-p,y);x.stroke()}x.strokeStyle="#39ff88";x.lineWidth=2;x.beginPath();ys.forEach((v,i)=>{let px=p+i*(w-p*2)/Math.max(1,ys.length-1),py=h-p-(v-min)/(max-min)*(h-p*2);i?x.lineTo(px,py):x.moveTo(px,py)});x.stroke();x.fillStyle="#39ff88";ys.forEach((v,i)=>{let px=p+i*(w-p*2)/Math.max(1,ys.length-1),py=h-p-(v-min)/(max-min)*(h-p*2);x.beginPath();x.arc(px,py,4,0,7);x.fill();x.fillText(v.toFixed(1),px-10,py-9)});x.fillStyle="#777";x.fillText("kg",8,15)}
function renderSettings(){const s=db.settings;["height","startWeight","goalWeight","calories","protein","carbs","fiber","steps","water"].forEach(k=>document.getElementById("set"+k.charAt(0).toUpperCase()+k.slice(1)).value=s[k])}
document.getElementById("saveSettings").onclick=()=>{const ids=["height","startWeight","goalWeight","calories","protein","carbs","fiber","steps","water"];ids.forEach(k=>db.settings[k]=Number(document.getElementById("set"+k.charAt(0).toUpperCase()+k.slice(1)).value)||0);saveDB();document.getElementById("settingsSaved").textContent=" SAVED.";renderDashboard()}
document.getElementById("exportData").onclick=()=>{const blob=new Blob([JSON.stringify(db,null,2)],{type:"application/json"}),a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="fitness_os_backup_"+today()+".json";a.click();URL.revokeObjectURL(a.href)}
document.getElementById("importData").onchange=e=>{const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{try{db=JSON.parse(r.result);saveDB();renderDashboard();alert("Backup imported.")}catch(_){alert("Invalid backup file.")}};r.readAsText(f)}
document.getElementById("resetData").onclick=()=>{if(confirm("This deletes all fitness logs, food entries and custom foods. Continue?")){db=defaults();saveDB();location.reload()}}
function init(){initNav();renderDashboard();renderFood();renderWorkout();renderHistory();renderSettings();if("serviceWorker"in navigator)navigator.serviceWorker.register("sw.js").catch(()=>{})}
init();
