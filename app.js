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
const WORKOUT_LIBRARY={
 "CHEST":[
  "Barbell Bench Press","Close-Grip Barbell Bench Press","Wide-Grip Barbell Bench Press","Incline Barbell Bench Press","Low-Incline Barbell Bench Press","High-Incline Barbell Press","Decline Barbell Bench Press","Paused Bench Press","Spoto Press","Reverse-Grip Bench Press","Floor Press","Dumbbell Bench Press","Neutral-Grip Dumbbell Bench Press","Incline Dumbbell Press","Low-Incline Dumbbell Press","Decline Dumbbell Press","Dumbbell Floor Press","Dumbbell Squeeze Press","Single-Arm Dumbbell Bench Press","Machine Chest Press","Incline Machine Chest Press","Decline Machine Chest Press","Plate-Loaded Chest Press","Smith Machine Bench Press","Smith Machine Incline Press","Smith Machine Decline Press","Push-Up","Wide-Grip Push-Up","Close-Grip Push-Up","Incline Push-Up","Decline Push-Up","Weighted Push-Up","Deficit Push-Up","Archer Push-Up","Plyometric Push-Up","Chest Dip","Assisted Chest Dip","Ring Dip","Dumbbell Fly","Incline Dumbbell Fly","Decline Dumbbell Fly","Cable Chest Fly","Low-to-High Cable Fly","High-to-Low Cable Fly","Mid Cable Fly","Single-Arm Cable Fly","Cable Crossover","Pec Deck Fly","Machine Fly","Resistance-Band Chest Fly"
 ],
 "BACK":[
  "Conventional Deadlift","Rack Pull","Block Pull","Deficit Deadlift","Sumo Deadlift","Trap-Bar Deadlift","Barbell Bent-Over Row","Pendlay Row","Yates Row","Underhand Barbell Row","Wide-Grip Barbell Row","T-Bar Row","Chest-Supported T-Bar Row","Landmine Row","Seal Row","Meadows Row","Dumbbell Row","One-Arm Dumbbell Row","Chest-Supported Dumbbell Row","Incline Bench Dumbbell Row","Renegade Row","Machine Row","Chest-Supported Machine Row","Seated Cable Row","Close-Grip Cable Row","Wide-Grip Cable Row","Single-Arm Cable Row","Low Cable Row","High Cable Row","Inverted Row","Ring Row","Australian Pull-Up","Pull-Up","Wide-Grip Pull-Up","Close-Grip Pull-Up","Neutral-Grip Pull-Up","Chin-Up","Neutral-Grip Chin-Up","Assisted Pull-Up","Lat Pulldown","Wide-Grip Lat Pulldown","Close-Grip Lat Pulldown","Neutral-Grip Lat Pulldown","Underhand Lat Pulldown","Single-Arm Lat Pulldown","Behind-the-Neck Lat Pulldown","Straight-Arm Pulldown","Cable Pullover","Dumbbell Pullover","Machine Pullover","Resistance-Band Pulldown","Resistance-Band Row"
 ],
 "SHOULDERS":[
  "Barbell Overhead Press","Standing Military Press","Seated Barbell Press","Push Press","Behind-the-Neck Press","Dumbbell Shoulder Press","Seated Dumbbell Shoulder Press","Arnold Press","Single-Arm Dumbbell Press","Landmine Press","Single-Arm Landmine Press","Machine Shoulder Press","Smith Machine Shoulder Press","Pike Push-Up","Handstand Push-Up","Assisted Handstand Push-Up","Dumbbell Lateral Raise","Seated Dumbbell Lateral Raise","Leaning Dumbbell Lateral Raise","Cable Lateral Raise","Single-Arm Cable Lateral Raise","Machine Lateral Raise","Resistance-Band Lateral Raise","Plate Front Raise","Barbell Front Raise","Dumbbell Front Raise","Alternating Dumbbell Front Raise","Cable Front Raise","Single-Arm Cable Front Raise","Machine Front Raise","Incline Bench Front Raise","Dumbbell Rear Delt Fly","Incline Dumbbell Rear Delt Fly","Cable Rear Delt Fly","Reverse Cable Fly","Reverse Pec Deck","Machine Rear Delt Fly","Band Rear Delt Fly","Face Pull","Cable Y-Raise","Dumbbell Y-Raise","Trap-3 Raise","Cable Upright Row","Barbell Upright Row","Dumbbell Upright Row","Machine Upright Row"
 ],
 "TRAPS":[
  "Barbell Shrug","Dumbbell Shrug","Seated Dumbbell Shrug","Behind-the-Back Barbell Shrug","Smith Machine Shrug","Machine Shrug","Cable Shrug","Single-Arm Cable Shrug","Trap-Bar Shrug","Farmer's Carry","Heavy Farmer's Walk","Suitcase Carry","Rack Pull","High Pull","Barbell High Pull","Dumbbell High Pull","Snatch-Grip High Pull","Face Pull","Dumbbell Y-Raise","Cable Y-Raise","Trap-3 Raise","Overhead Carry"
 ],
 "BICEPS":[
  "Barbell Curl","EZ-Bar Curl","Wide-Grip Barbell Curl","Close-Grip Barbell Curl","Drag Curl","Reverse-Grip Barbell Curl","Dumbbell Curl","Alternating Dumbbell Curl","Seated Dumbbell Curl","Standing Dumbbell Curl","Incline Dumbbell Curl","Spider Curl","Concentration Curl","Cross-Body Hammer Curl","Hammer Curl","Alternating Hammer Curl","Preacher Curl","EZ-Bar Preacher Curl","Dumbbell Preacher Curl","Machine Preacher Curl","Cable Curl","Standing Cable Curl","Single-Arm Cable Curl","Bayesian Cable Curl","High Cable Curl","Rope Cable Curl","Cable Hammer Curl","Machine Biceps Curl","21s Curl","Zottman Curl","Waiter Curl","Resistance-Band Curl","Reverse Curl"
 ],
 "TRICEPS":[
  "Close-Grip Bench Press","Close-Grip Incline Bench Press","Close-Grip Decline Bench Press","Weighted Dip","Bench Dip","Parallel-Bar Dip","Assisted Dip","Barbell Skull Crusher","EZ-Bar Skull Crusher","Dumbbell Skull Crusher","Incline Skull Crusher","Decline Skull Crusher","Rolling Dumbbell Triceps Extension","Barbell Triceps Extension","EZ-Bar Triceps Extension","Dumbbell Overhead Triceps Extension","Single-Arm Dumbbell Overhead Extension","Seated Dumbbell Overhead Extension","Cable Overhead Triceps Extension","Rope Overhead Extension","Cable Triceps Pushdown","Rope Triceps Pushdown","Straight-Bar Pushdown","V-Bar Pushdown","Reverse-Grip Pushdown","Single-Arm Cable Pushdown","Cross-Body Cable Extension","Cable Kickback","Dumbbell Kickback","Machine Triceps Extension","JM Press","Tate Press","Diamond Push-Up","Close-Grip Push-Up","Resistance-Band Pushdown"
 ],
 "FOREARMS":[
  "Barbell Wrist Curl","Seated Barbell Wrist Curl","Dumbbell Wrist Curl","Reverse Wrist Curl","Barbell Reverse Wrist Curl","Dumbbell Reverse Wrist Curl","Cable Wrist Curl","Cable Reverse Wrist Curl","Behind-the-Back Wrist Curl","Hammer Curl","Reverse Curl","Zottman Curl","Farmer's Carry","Suitcase Carry","Plate Pinch Hold","Plate Pinch Carry","Dead Hang","Towel Dead Hang","Towel Pull-Up","Wrist Roller","Captains-of-Crush Grip Hold","Hand Gripper Squeeze","Finger Extension Band","Barbell Static Hold"
 ],
 "ABS":[
  "Crunch","Weighted Crunch","Cable Crunch","Kneeling Cable Crunch","Machine Crunch","Decline Crunch","Incline Crunch","Bicycle Crunch","Reverse Crunch","Weighted Reverse Crunch","Hanging Knee Raise","Hanging Leg Raise","Captain's Chair Knee Raise","Captain's Chair Leg Raise","Lying Leg Raise","Lying Knee Raise","Dragon Flag","Ab Wheel Rollout","Barbell Rollout","TRX Body Saw","Dead Bug","V-Up","Tuck-Up","Toe Touch","Jackknife","Hollow-Body Hold","Hollow Rock","Sit-Up","Weighted Sit-Up","Decline Sit-Up","GHD Sit-Up","Plank","Weighted Plank","RKC Plank","Long-Lever Plank","Body-Saw Plank"
 ],
 "OBLIQUES_CORE":[
  "Side Plank","Weighted Side Plank","Copenhagen Plank","Cable Woodchop","High-to-Low Cable Woodchop","Low-to-High Cable Woodchop","Half-Kneeling Cable Chop","Cable Lift","Pallof Press","Half-Kneeling Pallof Press","Standing Pallof Press","Band Pallof Press","Suitcase Carry","Waiter's Carry","Offset Farmer's Carry","Landmine Rotation","Russian Twist","Weighted Russian Twist","Heel Touch","Side Crunch","Cross-Body Mountain Climber","Bear Crawl","Bird Dog","Dead Bug","Hollow-Body Hold","Plank Shoulder Tap","Plank Hip Dip","Turkish Get-Up","Windshield Wiper","Hanging Oblique Knee Raise","Hanging Windshield Wiper"
 ],
 "QUADRICEPS":[
  "Back Squat","High-Bar Back Squat","Low-Bar Back Squat","Front Squat","Box Squat","Pause Squat","Tempo Squat","Safety-Bar Squat","Zercher Squat","Hack Squat","Machine Hack Squat","Belt Squat","Leg Press","45-Degree Leg Press","Horizontal Leg Press","Single-Leg Leg Press","Narrow-Stance Leg Press","Wide-Stance Leg Press","Goblet Squat","Dumbbell Squat","Smith Machine Squat","Smith Machine Front Squat","Bulgarian Split Squat","Front-Foot Elevated Split Squat","Reverse Lunge","Walking Lunge","Forward Lunge","Deficit Reverse Lunge","Dumbbell Lunge","Barbell Lunge","Step-Up","Weighted Step-Up","Sissy Squat","Assisted Sissy Squat","Leg Extension","Single-Leg Leg Extension","Reverse Nordic Curl","Spanish Squat","Wall Sit"
 ],
 "HAMSTRINGS":[
  "Romanian Deadlift","Barbell Romanian Deadlift","Dumbbell Romanian Deadlift","Single-Leg Romanian Deadlift","Staggered-Stance Romanian Deadlift","Stiff-Leg Deadlift","Good Morning","Seated Good Morning","Nordic Hamstring Curl","Assisted Nordic Curl","Glute-Ham Raise","GHD Hamstring Curl","Lying Leg Curl","Seated Leg Curl","Single-Leg Seated Leg Curl","Standing Leg Curl","Cable Leg Curl","Resistance-Band Leg Curl","Slider Leg Curl","Swiss-Ball Leg Curl","Stability-Ball Leg Curl","Single-Leg Stability-Ball Curl","Kettlebell Swing","Barbell Deadlift","Trap-Bar Deadlift","Sumo Deadlift","Deficit Deadlift"
 ],
 "GLUTES":[
  "Barbell Hip Thrust","Dumbbell Hip Thrust","Smith Machine Hip Thrust","Machine Hip Thrust","Banded Hip Thrust","Glute Bridge","Barbell Glute Bridge","Single-Leg Glute Bridge","Frog Pump","Cable Pull-Through","Kettlebell Swing","Romanian Deadlift","Single-Leg Romanian Deadlift","Sumo Deadlift","Sumo Squat","Bulgarian Split Squat","Reverse Lunge","Walking Lunge","Curtsy Lunge","Step-Up","High Step-Up","Single-Leg Press","45-Degree Leg Press","Cable Kickback","Glute Kickback Machine","Donkey Kick","Banded Donkey Kick","Fire Hydrant","Banded Hip Abduction","Cable Hip Abduction","Machine Hip Abduction","45-Degree Back Extension","Glute-Focused Back Extension"
 ],
 "CALVES":[
  "Standing Calf Raise","Seated Calf Raise","Leg Press Calf Raise","Single-Leg Standing Calf Raise","Single-Leg Seated Calf Raise","Smith Machine Calf Raise","Donkey Calf Raise","Machine Calf Raise","Hack Squat Calf Raise","Calf Press on Leg Press","Dumbbell Calf Raise","Barbell Calf Raise","Farmer's Walk on Toes","Tibialis Raise","Seated Tibialis Raise","Wall Tibialis Raise"
 ],
 "ADDUCTORS":[
  "Machine Hip Adduction","Cable Hip Adduction","Standing Cable Adduction","Side-Lying Hip Adduction","Copenhagen Plank","Copenhagen Side Plank","Sumo Squat","Sumo Deadlift","Wide-Stance Leg Press","Lateral Lunge","Cossack Squat","Goblet Cossack Squat","Curtsy Lunge"
 ],
 "ABDUCTORS":[
  "Machine Hip Abduction","Cable Hip Abduction","Standing Cable Abduction","Side-Lying Hip Abduction","Banded Hip Abduction","Banded Lateral Walk","Monster Walk","Lateral Band Walk","Fire Hydrant","Side-Lying Leg Raise","Standing Hip Abduction","Single-Leg Balance with Abduction"
 ],
 "LOWER_BACK":[
  "45-Degree Back Extension","Weighted Back Extension","Glute-Focused Back Extension","Roman Chair Back Extension","Reverse Hyperextension","Good Morning","Seated Good Morning","Barbell Deadlift","Romanian Deadlift","Stiff-Leg Deadlift","Sumo Deadlift","Trap-Bar Deadlift","Bird Dog","Superman","Prone Cobra","McGill Curl-Up","Back Extension Machine"
 ],
 "NECK":[
  "Neck Flexion","Neck Extension","Neck Lateral Flexion","Neck Rotation","Manual Neck Flexion","Manual Neck Extension","Manual Neck Lateral Flexion","Neck Harness Extension","Neck Harness Flexion","Isometric Neck Hold"
 ],
 "FULL_BODY":[
  "Barbell Clean","Power Clean","Hang Clean","Clean and Press","Clean and Jerk","Snatch","Hang Snatch","Power Snatch","Kettlebell Swing","Kettlebell Clean","Kettlebell Clean and Press","Turkish Get-Up","Thruster","Dumbbell Thruster","Barbell Thruster","Man Maker","Burpee","Burpee Box Jump","Devil's Press","Bear Crawl","Farmer's Carry","Sled Push","Sled Drag","Battle Rope Slam","Medicine Ball Slam","Medicine Ball Clean","Medicine Ball Throw","Dumbbell Complex","Barbell Complex"
 ],
 "CARDIO":[
  "Walking","Brisk Walking","Incline Treadmill Walk","Treadmill Jog","Running","Outdoor Running","Cycling","Stationary Bike","Spin Bike","Elliptical","Rowing Machine","Stair Climber","StairMaster","Step-Ups for Cardio","Jump Rope","Double Unders","Swimming","Boxing","Shadow Boxing","Battle Ropes","Sled Push","Sled Drag","Hiking","Sports / Games","HIIT Intervals","Cycling Intervals","Running Intervals"
 ],
 "MOBILITY":[
  "Full-Body Mobility Flow","Shoulder Mobility Flow","Thoracic Rotation","Cat-Cow","Child's Pose","Cobra Stretch","Downward Dog","World's Greatest Stretch","90/90 Hip Switch","90/90 Hip Stretch","Hip Flexor Stretch","Couch Stretch","Hamstring Stretch","Standing Hamstring Stretch","Calf Stretch","Adductor Rockback","Deep Squat Hold","Ankle Dorsiflexion Drill","Wrist Mobility","Neck Mobility","Wall Slides","Band Dislocates","Scapular Push-Up","Scapular Pull-Up"
 ],
 "OTHER":[
  "Custom Exercise","Recreational Sport","Physical Activity","Other Activity"
 ]
};
const WORKOUT_META={
 CHEST:"CHEST",BACK:"BACK",SHOULDERS:"SHOULDERS",TRAPS:"TRAPS",BICEPS:"BICEPS",TRICEPS:"TRICEPS",
 FOREARMS:"FOREARMS",ABS:"ABS",OBLIQUES_CORE:"OBLIQUES / CORE",QUADRICEPS:"QUADRICEPS",HAMSTRINGS:"HAMSTRINGS",
 GLUTES:"GLUTES",CALVES:"CALVES",ADDUCTORS:"ADDUCTORS",ABDUCTORS:"ABDUCTORS",LOWER_BACK:"LOWER BACK",
 NECK:"NECK",FULL_BODY:"FULL BODY",CARDIO:"CARDIO",MOBILITY:"MOBILITY",OTHER:"OTHER"
};
const WEEKDAYS=["MON","TUE","WED","THU","FRI","SAT","SUN"];
let selectedWorkoutMuscle="CHEST";
let selectedWorkoutDate=today();
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
function initNav(){document.querySelectorAll(".nav-btn").forEach(b=>b.onclick=()=>showPage(b.dataset.page));document.querySelectorAll("[data-goto]").forEach(b=>b.onclick=()=>showPage(b.dataset.goto))}
function showPage(id){document.querySelectorAll(".page").forEach(p=>p.classList.toggle("active",p.id===id));document.querySelectorAll(".nav-btn").forEach(b=>b.classList.toggle("active",b.dataset.page===id));if(id==="dashboard")renderDashboard();if(id==="food")renderFood();if(id==="workout")renderWorkout();if(id==="history")renderHistory();if(id==="settings")renderSettings()}
function renderDashboard(){
 const d=getDay(),t=totals(),s=db.settings;document.getElementById("todayLabel").textContent=dateText(today());document.getElementById("greeting").textContent=`TRAINING // ${dateText(today()).split(",")[0]}`;
 document.getElementById("coachHeadline").textContent=`${d.steps.toLocaleString()} steps logged • ${t.p.toFixed(0)} g protein • ${t.cal.toFixed(0)} kcal`;
 setText("mCalories",Math.round(t.cal));setText("mProtein",Math.round(t.p));setText("mCarbs",Math.round(t.c));setText("mFiber",t.fiber.toFixed(1));setText("mSteps",d.steps.toLocaleString());setText("mWater",d.water.toFixed(1));
 setText("mCalTarget",s.calories);setText("mProteinTarget",s.protein);setText("mFiberTarget",s.fiber);setText("mStepTarget",s.steps);setText("mWaterTarget",s.water);
 meter("calMeter",t.cal,s.calories);meter("proteinMeter",t.p,s.protein);meter("carbMeter",t.c,s.carbs);meter("fiberMeter",t.fiber,s.fiber);meter("stepMeter",d.steps,s.steps);meter("waterMeter",d.water,s.water);
 document.getElementById("quickSteps").value=d.steps;document.getElementById("quickWeight").value=d.weight??"";
 document.getElementById("dashboardFood").innerHTML=d.food.length?d.food.slice(-5).reverse().map(x=>`<div class="food-row"><div class="row-main"><b>${esc(x.name)}</b><span>${Math.round(x.cal)} kcal</span></div><div class="hint">${x.amount} g • ${x.p.toFixed(1)}g P • ${x.c.toFixed(1)}g C • ${x.fiber.toFixed(1)}g fiber</div></div>`).join(""):`<div class="hint">No food logged yet. Start with your first meal.</div>`;
 const done=d.workout.length;const cats=[...new Set(d.workout.map(x=>x.category).filter(Boolean))];document.getElementById("dashboardWorkout").innerHTML=done?`<div class="food-row"><b>${cats.join(" + ")||"WORKOUT"}</b><div class="hint">${done} exercise entries logged today.</div></div>`:`<div class="food-row"><b>NO WORKOUT LOGGED</b><div class="hint">Choose any weekday, muscle group and exercise you actually trained. The app does not prescribe a workout.</div></div>`;
 const remP=Math.max(0,s.protein-t.p),remCal=Math.max(0,s.calories-t.cal),remSteps=Math.max(0,s.steps-d.steps);
 let next;if(done===0)next=`Log the exercises you actually performed today, then aim to finish the remaining <strong>${remSteps.toLocaleString()} steps</strong>.`;else if(remP>10)next=`Prioritize a vegetarian protein source next. You have about <strong>${Math.round(remP)} g protein</strong> remaining.`;else if(remSteps>0)next=`You're close. Get another <strong>${remSteps.toLocaleString()} steps</strong> today.`;else if(remCal<150)next=`Calories are near target. Focus on water, vegetables and recovery rather than forcing extra food.`;else next=`Targets are in good shape. Finish your water target and protect your sleep tonight.`;
 document.getElementById("coachBox").innerHTML=next;document.getElementById("nextAction").innerHTML=next;
}
function renderDashboardCharts(){const w=document.getElementById("dashWeightChart"),s=document.getElementById("dashStepsChart");if(w)miniWeight(w);if(s)miniSteps(s)}
function miniWeight(c){const x=c.getContext("2d"),w=c.width,h=c.height;x.clearRect(0,0,w,h);const a=Object.entries(db.days).filter(e=>e[1].weight!=null).sort((a,b)=>a[0].localeCompare(b[0])).slice(-14);if(!a.length){x.fillStyle="#4d6455";x.font="14px Consolas";x.fillText("Log weight to see your trend.",20,35);return}const y=a.map(e=>e[1].weight),lo=Math.min(...y)-1,hi=Math.max(...y)+1,p=28;x.strokeStyle="#173a24";for(let j=0;j<4;j++){let yy=p+j*(h-p*2)/3;x.beginPath();x.moveTo(p,yy);x.lineTo(w-p,yy);x.stroke()}x.strokeStyle="#39ff88";x.lineWidth=2;x.beginPath();y.forEach((v,i)=>{let px=p+i*(w-p*2)/Math.max(1,y.length-1),py=h-p-(v-lo)/(hi-lo)*(h-p*2);i?x.lineTo(px,py):x.moveTo(px,py)});x.stroke();x.fillStyle="#39ff88";y.forEach((v,i)=>{let px=p+i*(w-p*2)/Math.max(1,y.length-1),py=h-p-(v-lo)/(hi-lo)*(h-p*2);x.beginPath();x.arc(px,py,3,0,7);x.fill()});x.fillStyle="#718078";x.font="11px Consolas";x.fillText("Current: "+y[y.length-1].toFixed(1)+" kg",w-160,18)}
function miniSteps(c){const x=c.getContext("2d"),w=c.width,h=c.height;x.clearRect(0,0,w,h);const a=[];for(let i=6;i>=0;i--){let d=new Date();d.setDate(d.getDate()-i);let k=d.toISOString().slice(0,10);a.push(db.days[k]?.steps||0)}const target=db.settings.steps,max=Math.max(target*1.25,...a,1000),p=28;const ty=h-p-target/max*(h-p*2);x.strokeStyle="#ffd34d";x.setLineDash([4,4]);x.beginPath();x.moveTo(p,ty);x.lineTo(w-p,ty);x.stroke();x.setLineDash([]);const bw=(w-p*2)/7*.52;x.fillStyle="#39ff88";a.forEach((v,i)=>{let px=p+i*(w-p*2)/7+(w-p*2)/14-bw/2,bh=v/max*(h-p*2);x.fillRect(px,h-p-bh,bw,bh)});x.fillStyle="#ffd34d";x.font="10px Consolas";x.fillText("TARGET "+target.toLocaleString(),p+4,ty-5)}
function renderWeeklyPlan(){
 const e=document.getElementById("dashWeeklyPlan");if(!e)return;
 e.innerHTML=Object.keys(WORKOUT_META).map(k=>`<div class="plan-row"><span>${k}</span><span>${WORKOUT_META[k].desc}</span><span>+</span></div>`).join("");
}
function setText(id,v){document.getElementById(id).textContent=v}
function meter(id,v,t){document.getElementById(id).style.width=pct(v,t)+"%"}
document.getElementById("saveQuick").onclick=()=>{const d=getDay();d.steps=Math.max(0,Number(document.getElementById("quickSteps").value)||0);const w=document.getElementById("quickWeight").value;if(w)d.weight=Number(w);saveDB();renderDashboard()}
function populateFoodSelect(){const all={...FOOD_BASE,...db.customFoods};document.getElementById("foodSelect").innerHTML=Object.keys(all).sort().map(k=>`<option>${esc(k)}</option>`).join("")}
function renderFood(){const d=getDay(),t=totals();document.getElementById("foodDate").textContent=dateText(today());populateFoodSelect();setText("foodCalTotal",Math.round(t.cal));setText("foodProTotal",t.p.toFixed(1)+" g");setText("foodCarbTotal",t.c.toFixed(1)+" g");setText("foodFiberTotal",t.fiber.toFixed(1)+" g");setText("foodFatTotal",t.fat.toFixed(1)+" g");document.getElementById("foodList").innerHTML=d.food.length?d.food.map((x,i)=>`<div class="food-row"><div class="row-main"><b>${esc(x.name)}</b><button class="danger remove-food" data-i="${i}">X</button></div><div class="hint">${x.meal} • ${x.amount} g • ${Math.round(x.cal)} kcal • P ${x.p.toFixed(1)}g • C ${x.c.toFixed(1)}g • Fiber ${x.fiber.toFixed(1)}g • Fat ${x.fat.toFixed(1)}g</div></div>`).join(""):`<div class="hint">Food entries will appear here.</div>`;document.querySelectorAll(".remove-food").forEach(b=>b.onclick=()=>{d.food.splice(Number(b.dataset.i),1);saveDB();renderFood();renderDashboard()})}
document.getElementById("addFood").onclick=()=>{const name=document.getElementById("foodSelect").value,amount=Math.max(1,Number(document.getElementById("foodAmount").value)||0),meal=document.getElementById("mealSelect").value,all={...FOOD_BASE,...db.customFoods},n=all[name];if(!n)return;const k=amount/100;getDay().food.push({name,amount,meal,cal:n.cal*k,p:n.p*k,c:n.c*k,fiber:n.fiber*k,fat:n.fat*k});saveDB();renderFood();renderDashboard()}
document.getElementById("addCustom").onclick=()=>{const name=document.getElementById("customName").value.trim();if(!name)return alert("Enter a food name.");db.customFoods[name]={cal:Number(document.getElementById("customCal").value)||0,p:Number(document.getElementById("customProtein").value)||0,c:Number(document.getElementById("customCarbs").value)||0,fat:Number(document.getElementById("customFat").value)||0,fiber:Number(document.getElementById("customFiber").value)||0};saveDB();populateFoodSelect();document.getElementById("customName").value="";alert("Custom food saved.")}
function weekDatesFor(date=today()){
 const base=new Date(date+"T00:00:00"); const day=base.getDay(); const monday=new Date(base);
 monday.setDate(base.getDate()+(day===0?-6:1-day));
 return Array.from({length:7},(_,i)=>{const d=new Date(monday);d.setDate(monday.getDate()+i);return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;});
}
function renderWorkout(){
 const d=getDay(selectedWorkoutDate), lib=WORKOUT_LIBRARY[selectedWorkoutMuscle]||[];
 setText("workoutDayPill",dateText(selectedWorkoutDate));
 setText("workoutTitle",WORKOUT_META[selectedWorkoutMuscle]);
 setText("workoutDescription",`Select the exercises you actually performed on ${dateText(selectedWorkoutDate)}. Nothing is prescribed or assigned.`);
 const dates=weekDatesFor(selectedWorkoutDate);
 document.getElementById("weekStrip").innerHTML=dates.map((date,i)=>{
   const dayNum=new Date(date+"T00:00:00").getDate();
   const logged=getDay(date).workout.length;
   return `<button class="day-chip ${date===selectedWorkoutDate?"active":""}" data-date="${date}"><b>${WEEKDAYS[i]}</b><br><span>${String(dayNum).padStart(2,"0")}</span>${logged?`<small>${logged} LOGGED</small>`:""}</button>`;
 }).join("");
 document.querySelectorAll("[data-date]").forEach(b=>b.onclick=()=>{selectedWorkoutDate=b.dataset.date;renderWorkout()});

 document.getElementById("muscleGrid").innerHTML=Object.keys(WORKOUT_META).map(k=>{
   const count=(WORKOUT_LIBRARY[k]||[]).length;
   return `<button class="muscle-chip ${k===selectedWorkoutMuscle?"active":""}" data-muscle="${k}"><b>${esc(WORKOUT_META[k])}</b><span>${count} exercises</span></button>`;
 }).join("");
 document.querySelectorAll("[data-muscle]").forEach(b=>b.onclick=()=>{selectedWorkoutMuscle=b.dataset.muscle;document.getElementById("exerciseSearch").value="";renderWorkout()});

 const search=(document.getElementById("exerciseSearch").value||"").trim().toLowerCase();
 const filtered=lib.map((name,i)=>({name,i})).filter(x=>!search||x.name.toLowerCase().includes(search));
 document.getElementById("exerciseCount").textContent=`${filtered.length} of ${lib.length} exercises`;
 document.getElementById("exerciseList").innerHTML=filtered.map((e,n)=>`<div class="exercise-row"><div class="row-main"><b>${n+1}. ${esc(e.name)}</b><button class="secondary exercise-pick" data-ex-index="${e.i}">SELECT</button></div></div>`).join("")+
 `<div class="hint" style="margin-top:10px">Library only — selecting an exercise does not log it. Add it below with your actual sets, reps and weight.</div>`;
 document.querySelectorAll(".exercise-pick").forEach(b=>b.onclick=()=>{document.getElementById("exerciseSelect").value=b.dataset.exIndex;document.getElementById("customExerciseWrap").style.display="none";document.getElementById("exSets").focus()});

 document.getElementById("exerciseSelect").innerHTML=lib.map((name,i)=>`<option value="${i}">${i+1}. ${esc(name)}</option>`).join("")+`<option value="__custom">+ CUSTOM EXERCISE</option>`;
 document.getElementById("customExerciseWrap").style.display="none";
 document.getElementById("exerciseSelect").onchange=()=>document.getElementById("customExerciseWrap").style.display=document.getElementById("exerciseSelect").value==="__custom"?"block":"none";

 document.getElementById("sessionLogs").innerHTML=d.workout.length?d.workout.map((x,i)=>`<div class="log-row"><div class="row-main"><b>${esc(x.exercise)}</b><span class="pill">${esc(x.category||"OTHER")}</span><button class="danger remove-ex" data-i="${i}">X</button></div><div class="hint">${x.sets} sets × ${x.reps} reps @ ${x.weight} kg</div></div>`).join(""):`<div class="hint" style="margin-top:12px">No exercises logged for this day. Select the muscles and exercises you actually trained.</div>`;
 document.querySelectorAll(".remove-ex").forEach(b=>b.onclick=()=>{d.workout.splice(Number(b.dataset.i),1);saveDB();renderWorkout();renderDashboard()});
}
document.getElementById("exerciseSearch").oninput=()=>renderWorkout();
document.getElementById("logExercise").onclick=()=>{
 const sel=document.getElementById("exerciseSelect").value,lib=WORKOUT_LIBRARY[selectedWorkoutMuscle]||[];
 let exercise=sel==="__custom"?document.getElementById("customExercise").value.trim():(lib[Number(sel)]||"");
 if(!exercise)return alert("Select or enter an exercise.");
 getDay(selectedWorkoutDate).workout.push({
   exercise,category:WORKOUT_META[selectedWorkoutMuscle]||"OTHER",muscle:selectedWorkoutMuscle,
   sets:Number(document.getElementById("exSets").value)||1,
   reps:Number(document.getElementById("exReps").value)||1,
   weight:Number(document.getElementById("exWeight").value)||0
 });
 saveDB();document.getElementById("customExercise").value="";renderWorkout();renderDashboard();
};

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
