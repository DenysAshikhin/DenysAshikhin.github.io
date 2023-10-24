"use strict";(self.webpackChunkdenysashikhin_github_io=self.webpackChunkdenysashikhin_github_io||[]).push([[359],{5359:function(t,e,a){var o=a(1413),i=a(3433),r={roundTwoDecimal:function(t){return Math.round(100*(t+Number.EPSILON))/100},roundThreeDecimal:function(t){return Math.round(1e3*(t+Number.EPSILON))/1e3},roundInt:function(t){return Math.round(1*(t+Number.EPSILON))/1},calculateLogarithm:function(t,e){return Math.log(e)/Math.log(t)},calcPOW:function(t){return t.mantissa*Math.pow(10,t.exponent)},secondsToStringWithS:function(t){var e="",a=0,o=0,i=0,r=0;return a=Math.floor(t/86400),o=Math.floor(t%86400/3600),i=Math.floor(t%3600/60),r=this.roundInt(t%86400%60),a==Number.POSITIVE_INFINITY||a==Number.NEGATIVE_INFINITY?""+a:(60===r&&(r=0,i++),60===i&&(i=0,o++),24===o&&(o=0,a++),a>0&&(e+="".concat(a<10?"0"+a:a,"d:")),o>0&&(e+="".concat(o<10?"0"+o:o,"h:")),i>0&&(e+="".concat(i<10?"0"+i:i,"m:")),e+=r>0?"".concat(r<10?"0"+r:r,"s"):"0s")},secondsToString:function(t){var e="",a=0,o=0,i=0;return a=Math.floor(t/86400),o=Math.floor(t%86400/3600),60===(i=this.roundInt(t%3600/60))&&(i=0,o++),24===o&&(o=0,a++),a==Number.POSITIVE_INFINITY||a==Number.NEGATIVE_INFINITY?""+a:(a>0&&(e+="".concat(a<10?"0"+a:a,"d:"),0===o&&(e+="00h")),(o>0||0===o&&0===a)&&(e+="".concat(o<10?"0"+o:o,"h")),0===a&&(e+=":",e+=i>0?"".concat(i<10?"0"+i:i,"m"):"0s"),e)},bonusColorMap:{1009:{color:"cyan"},1010:{color:"maroon"},1011:{color:"purple"},1012:{color:"yellow"},1013:{color:"red"},1014:{color:"blue"},1015:{color:"gray"},1016:{color:"green"}}},n=a(9298),l={createDecimal:function(t){return t.mantissa||0===t.mantissa?new n.Z("".concat(t.mantissa,"e").concat(t.exponent)):new n.Z(t)},multiplyDecimal:function(t,e){return(t=t.mantissa||0===t.mantissa?t:this.createDecimal(t)).times(e)},divideDecimal:function(t,e){return(t=t.mantissa||0===t.mantissa?t:this.createDecimal(t)).dividedBy(e)},addDecimal:function(t,e){return(t=t.mantissa||0===t.mantissa?t:this.createDecimal(t)).plus(e)},subtractDecimal:function(t,e){return(t=t.mantissa||0===t.mantissa?t:this.createDecimal(t)).minus(e)},logDecimal:function(t,e){return t=t.mantissa||0===t.mantissa?t:this.createDecimal(t),this.createDecimal(t.log(e))},pow:function(t,e){return(t=t.mantissa||0===t.mantissa?t:this.createDecimal(t)).pow(e)},min:function(t,e){return t=t.mantissa||0===t.mantissa?t:this.createDecimal(t),e=e.mantissa||0===e.mantissa?e:this.createDecimal(e),t.greaterThan(e)?e:t},max:function(t,e){return t=t.mantissa||0===t.mantissa?t:this.createDecimal(t),e=e.mantissa||0===e.mantissa?e:this.createDecimal(e),t.greaterThan(e)?t:e}},s={findMultipliersWithMinPercentage:function(t,e,a){var o=[],r=0;return function n(l,s,c){if(r++,l!==e.length)for(var u=Math.floor((t-s)/e[l]),m=0;m<=u;m++){c[l]=m,s+m*e[l]<t&&n(l+1,s+m*e[l],c)}else{var p=c.reduce((function(t,a,o){return t+a*e[o]}),0);p>=a*t&&o.push((0,i.Z)(c))}}(0,0,[]),console.log(r),o},calcGrowthTime:function(t,e){var a=l.createDecimal(e.originalShopGrowingBonus);a=l.divideDecimal(a,1+.05*e.originalShopGrowingLevel),a=l.multiplyDecimal(a,1+.05*e.shopGrowingSpeed).toNumber();var o=Math.floor(t.TimeNeeded/t.prestigeBonus/a);return o<10?10:o},calcPlantHarvest:function(t,e){return r.roundInt((1+t.Rank)*Math.pow(1.05,t.Rank))*Math.pow(1.02,t.prestige)*e.manualHarvestBonus},calcShopProdBonus:function(t,e){return e=e||0===e?e:t.FarmingShopPlantTotalProduction,l.pow(1.25,e)},calcProdOutput:function(t,e){var a=t.totalMade,o=e.shopProdBonus,i=t.prestige,r=l.createDecimal(e.originalShopProdBonus);r=l.divideDecimal(r,this.calcShopProdBonus(null,e.originalShopProdLevel)),r=l.multiplyDecimal(o,r);var n=t.futureMult,s=l.multiplyDecimal(l.multiplyDecimal(l.multiplyDecimal(a,n),r),l.createDecimal(Math.pow(1.02,i)));return 1===t.ID&&(s=l.multiplyDecimal(s,e.hpBonus)),s},calcFryOutput:function(t){var e=l.logDecimal(t,10),a=l.subtractDecimal(l.logDecimal(t,10),15.75),o=e;o=o.lessThan(31)?o:31;var i=l.subtractDecimal(l.createDecimal(36),o),r=l.pow(l.createDecimal(1.15),l.subtractDecimal(e,16));return l.multiplyDecimal(a,l.multiplyDecimal(i,r))},calcCarryOverEXP_OLD:function(t){var e=t.plant,a=t.numAutos,o=t.expTick,i=0,r=1;if(a>1){var n=o/a,l=Math.ceil((e.reqExp-e.curExp)/n);if(a>l){i=(a-l)*n;for(var s=10+5*(e.Rank+r)*Math.pow(1.05,e.Rank+r);i>s;)i-=s,r++,s=10+5*(e.Rank+r)*Math.pow(1.05,e.Rank+r)}else i=0}else i=0;return{leftOver:i,numLevels:r,reqExp:10+5*(e.Rank+r)*Math.pow(1.05,e.Rank+r)}},calcCarryOverEXP:function(t){for(var e=t.plant,a=t.numAutos,o=t.expTick,i=0,r=e.curExp+a*o,n=10+5*(e.Rank+i)*Math.pow(1.05,e.Rank+i);r>=n;)r-=n,i++,n=10+5*(e.Rank+i)*Math.pow(1.05,e.Rank+i);return{leftOver:r,numLevels:i,reqExp:n}},calcEXPBonus:function(t){var e=t.originalRankLevelBonus,a=t.originalShopRankLevel,o=t.shopRankLevel,i=t.originalPotionRank,r=t.potionRank,n=l.createDecimal(e);return n=l.divideDecimal(n,1+.1*a),n=l.divideDecimal(n,i>0?1.5:1),n=l.multiplyDecimal(n,1+.1*o),n=(n=l.multiplyDecimal(n,r)).toNumber()},futureMultBD:function(t,e){return l.pow(1+.05*(1+.02*e.manualHarvestFormula),l.logDecimal(t.created,1.25))},calcFutureMult:function(t,e){var a=!1===e.string?t:JSON.parse(JSON.stringify(t)),o=!1===e.string?e:JSON.parse(JSON.stringify(e)),i=o.time,r=o.numAuto||0===(null===o||void 0===o?void 0:o.numAuto)?o.numAuto:1,n=this.calcEXPBonus(o),s=a.prestigeBonus*n;if(a.growthTime=this.calcGrowthTime(a,o),0===r){var c=this.calcProdOutput(a,o);return a.production=c,a}for(;i>0;){a.timeToLevel=this.calcTimeTillLevel(a,o);var u=0,m=!1;a.timeToLevel>i?u=i:(u=a.timeToLevel,m=!0),i-=u,a.elapsedTime+=u;var p=0;if(a.elapsedTime>=a.growthTime){p=Math.floor(a.elapsedTime/a.growthTime);var d=a.perHarvest*p*r;if(a.created=l.addDecimal(a.created,d),a.totalMade=l.addDecimal(a.totalMade,d),a.futureMult=this.futureMultBD(a,o),m){var h=this.calcCarryOverEXP({plant:a,expTick:s*p,numAutos:r});a.curExp=h.leftOver,a.Rank+=h.numLevels,a.perHarvest=this.calcPlantHarvest(a,o),a.reqExp=h.reqExp}else{var v=p*s*r,g=a.curExp+v;a.curExp=g}a.elapsedTime=a.elapsedTime%a.growthTime}}var f=this.calcProdOutput(a,o);return a.production=f,a},calcTimeTillLevel:function(t,e){var a=t,o=e,i=o.numAuto||0===(null===o||void 0===o?void 0:o.numAuto)?o.numAuto:1;if(0===i)return 1/0;var r=a.reqExp-a.curExp,n=this.calcEXPBonus(o),l=a.prestigeBonus*n*i;return Math.ceil(r/l)*a.growthTime-a.elapsedTime},getNextShopCosts:function(t){var e=t.FarmingShopPlantTotalProduction||0===t.FarmingShopPlantTotalProduction?t.FarmingShopPlantTotalProduction:t.shopProdLevel,a=t.FarmingShopPlantGrowingSpeed||0===t.FarmingShopPlantGrowingSpeed?t.FarmingShopPlantGrowingSpeed:t.shopGrowingSpeed,o=t.FarmingShopPlantRankExpEarned||0===t.FarmingShopPlantRankExpEarned?t.FarmingShopPlantRankExpEarned:t.shopRankLevel,i=l.pow(1.05,e-50),r=l.multiplyDecimal(100,i),n=l.pow(r,e),s=l.multiplyDecimal(1e8,n);return{prodCost:e>50?s:l.multiplyDecimal(1e8,l.pow(100,e)),growthCost:l.multiplyDecimal(l.pow(500,a),1e10),expCost:l.multiplyDecimal(l.pow(250,o),1e15)}},calcMaxPrestige:function(t){for(var e=t.prestige,a=0,o=!0;o;){var i=10*Math.pow(2,e),r=a+i;t.created.greaterThanOrEqualTo(r)?(e++,a+=i):o=!1}return e-t.prestige},calcTimeTillPrestige:function(t,e){var a=JSON.parse(JSON.stringify(t));this.resetPlantBD(a);var o=JSON.parse(JSON.stringify(e));this.resetModifiersBD(o);for(var i=o.numAuto||0===(null===o||void 0===o?void 0:o.numAuto)?o.numAuto:1,r=!1,n=0,s=0,c=this.calcEXPBonus(o),u=a.prestigeBonus*c;!r;){var m=this.calcTimeTillLevel(a,o),p=10*Math.pow(2,a.prestige),d=s+p,h=l.subtractDecimal(d,a.created),v=l.multiplyDecimal(l.divideDecimal(h,a.perHarvest*i).ceil(),a.growthTime).ceil().toNumber();if(0===i&&h.greaterThan(0))r=!0,n=1/0;else if(v<=0)r=!0,n<=0&&(a.prestige++,r=!1,s+=p);else if(v>m){a.elapsedTime+=m;var g=Math.floor(a.elapsedTime/a.growthTime);a.created=l.addDecimal(a.created,g*a.perHarvest*i),a.totalMade=l.addDecimal(a.totalMade,g*a.perHarvest*i);var f=this.calcCarryOverEXP({plant:a,numAutos:i,expTick:u*g});a.Rank+=f.numLevels,a.curExp=f.leftOver,a.reqExp=f.reqExp,a.perHarvest=this.calcPlantHarvest(a,o),n+=m,a.elapsedTime=a.elapsedTime%a.growthTime}else{r=!0,a.elapsedTime+=v;var P=Math.floor(a.elapsedTime/a.growthTime);a.created=l.addDecimal(a.created,P*a.perHarvest*i),a.totalMade=l.addDecimal(a.totalMade,P*a.perHarvest*i),n+=v,a.elapsedTime=a.elapsedTime%a.growthTime}}return{remainingTime:n,prestige:a.prestige,prestiged:r}},resetPlantBD:function(t){var e,a,o,i,r,n;t.totalMade=null!==t&&void 0!==t&&null!==(e=t.totalMade)&&void 0!==e&&e.mantissa||0===(null===t||void 0===t||null===(a=t.totalMade)||void 0===a?void 0:a.mantissa)?t.totalMade:l.createDecimal(t.totalMade),t.created=null!==t&&void 0!==t&&null!==(o=t.created)&&void 0!==o&&o.mantissa||0===(null===t||void 0===t||null===(i=t.created)||void 0===i?void 0:i.mantissa)?t.created:l.createDecimal(t.created),t.production=null!==t&&void 0!==t&&null!==(r=t.production)&&void 0!==r&&r.mantissa||0===(null===t||void 0===t||null===(n=t.production)||void 0===n?void 0:n.mantissa)?t.production:l.createDecimal(t.production),t.futureMult=l.createDecimal(t.futureMult)},resetModifiersBD:function(t){var e,a,o,i,r,n,s;t.shopProdBonus=null!==t&&void 0!==t&&null!==(e=t.shopProdBonus)&&void 0!==e&&e.mantissa||0===(null===t||void 0===t||null===(a=t.shopProdBonus)||void 0===a?void 0:a.mantissa)?t.shopProdBonus:l.createDecimal(t.shopProdBonus),t.hpBonus=null!==t&&void 0!==t&&null!==(o=t.hpBonus)&&void 0!==o&&o.mantissa||0===(null===t||void 0===t||null===(i=t.hpBonus)||void 0===i?void 0:i.mantissa)?t.hpBonus:l.createDecimal(t.hpBonus),t.curPotatoes=null!==t&&void 0!==t&&null!==(r=t.curPotatoes)&&void 0!==r&&r.mantissa||0===(null===t||void 0===t?void 0:t.curPotatoes.mantissa)?t.curPotatoes:l.createDecimal(t.curPotatoes),t.totalPotatoes=null!==t&&void 0!==t&&null!==(n=t.totalPotatoes)&&void 0!==n&&n.mantissa||0===(null===t||void 0===t||null===(s=t.totalPotatoes)||void 0===s?void 0:s.mantissa)?t.totalPotatoes:l.createDecimal(t.totalPotatoes)},calcHPProd:function(t,e){for(var a=JSON.parse(JSON.stringify(t)),i=0;i<a.length;i++)this.resetPlantBD(a[i]);var n=JSON.parse(JSON.stringify(e));this.resetModifiersBD(n),n.nextCosts.prodCost=l.createDecimal(n.nextCosts.prodCost),n.nextCosts.growthCost=l.createDecimal(n.nextCosts.growthCost),n.nextCosts.expCost=l.createDecimal(n.nextCosts.expCost);for(var c=n.numAutos,u=n.time,m=n.startTime?n.startTime:0,p=n.runningTime?n.runningTime:0,d=n.maxSteps?n.maxSteps:100,h=n.tickStart?n.tickStart:0,v=n.tickRate?n.tickRate:60,g=n.dataPointThreshold?n.dataPointThreshold:u/v<d?1:r.roundInt(u/v/d),f=[],P=[],D=n.totalPotatoes,T=n.curPotatoes,M=Array(a.length).fill(0),S=0;S<a.length;S++)M[S]=a[S].production;var C=0,w=!1,B=1;for(v>2&&(B=.95);C<u/v||w;C++){for(var b=0,x=a.length-1;x>=0;x--){var y=a[x],k=x===a.length-1?0:v>1?l.multiplyDecimal(l.addDecimal(M[x+1],a[x+1].production),.5*v*B):l.multiplyDecimal(a[x+1].production,v);y.totalMade=l.addDecimal(y.totalMade,k),1===(y=this.calcFutureMult(y,(0,o.Z)((0,o.Z)({},n),{},{time:v,numAuto:c[x],string:!1}))).ID&&(b=M[x]),M[x]=y.production}n.potionRank>1&&!n.forceRankPotion&&(n.potionRankTime-=v,n.potionRankTime<0&&(n.potionRank=1));var L=r.roundInt(C*v+m),E=v>1?l.multiplyDecimal(l.addDecimal(b,a[0].production),.5*v*B):a[0].production;if(D=l.addDecimal(D,E),T=l.addDecimal(T,E),n.autoBuyPBC)for(var O=!1,A=!0;A;)if(A=!1,!0===T.greaterThanOrEqualTo(n.nextCosts.prodCost)&&(T=l.subtractDecimal(T,n.nextCosts.prodCost),n.shopProdLevel++,n.shopProdBonus=this.calcShopProdBonus(n,n.shopProdLevel),O=!0,A=!0),!0===T.greaterThanOrEqualTo(n.nextCosts.growthCost)&&(T=l.subtractDecimal(T,n.nextCosts.growthCost),n.shopGrowingSpeed++,O=!0,A=!0),!0===T.greaterThanOrEqualTo(n.nextCosts.expCost)&&(T=l.subtractDecimal(T,n.nextCosts.expCost),n.shopRankLevel++,n.shopRankEXP=1+.1*n.shopRankLevel,O=!0,A=!0),O){var N=this.getNextShopCosts(n);n.nextCosts=N}if(C%g===0&&L>=h&&L<=u+p&&(f.push({time:L,production:D}),P.push({time:L,fries:s.calcFryOutput(D)})),!n.skipFinal){if(w&&L>=u+p)break;!w&&L<u+p&&(w=!0)}}if(C>0&&!n.skipFinal){var R=r.roundInt(C*v+m);if(0===f.length)f.push({time:R,production:D}),P.push({time:R,fries:s.calcFryOutput(D)});else if(f[f.length-1].production!==D&&R>u+p){var I=R-f[f.length-1].time,F=l.divideDecimal(l.subtractDecimal(D,f[f.length-1].production),I),H=u+p-f[f.length-1].time,G=l.addDecimal(f[f.length-1].production,l.multiplyDecimal(F,H)),q={time:f[f.length-1].time+H,production:G};f.push(q),P.push({time:f[f.length-1].time+H,fries:s.calcFryOutput(G)}),D=G}}return{totalPotatoes:D,potatoeProduction:a[0].production,plants:a,nextCosts:n.nextCosts,dataPointsPotatoes:f,dataPointsFries:P,finalModifiers:n}},calcStepHPProd:function(t,e){for(var a=JSON.parse(JSON.stringify(t)),i=0;i<a.length;i++)this.resetPlantBD(a[i]);var n=JSON.parse(JSON.stringify(e));this.resetModifiersBD(n);for(var l=n.steps,s=-1,c=[],u=0,m=n.maxSteps?n.maxSteps:100,p=n.tickRate?n.tickRate:60,d=e.time/p<m?1:r.roundInt(e.time/p/m),h=0;h<l.length;h++)0!==l[h].time&&((n=(s=this.calcHPProd(a,(0,o.Z)((0,o.Z)({},n),{},{numAutos:l[h].autos,time:l[h].time,dataPointThreshold:d,startTime:c.length>0?c[c.length-1].time:0,runningTime:u,skipFinal:h<l.length-1,tickStart:c.length>0?c[c.length-1].time+d*p:0}))).finalModifiers).totalPotatoes=s.totalPotatoes,a=s.plants,c=c.concat(s.dataPointsPotatoes),l[h].obj={text:"P".concat(l.length-h," for ").concat(l[h].time),numAutos:l[h].autos,time:l[h].time},u+=l[h].time);return s.dataPointsPotatoes=c,s.steps=l,s},calcAssemblyHP:function(t){var e=1;if((null===t||void 0===t?void 0:t.AssemblerCollection[0].BonusList[0].StartingLevel)<=(null===t||void 0===t?void 0:t.AssemblerCollection[0].Level)){var a=null===t||void 0===t?void 0:t.AssemblerCollection[0].BonusList[0].Gain,o=(null===t||void 0===t?void 0:t.AssemblerCollection[0].Level)-(null===t||void 0===t?void 0:t.AssemblerCollection[0].BonusList[0].StartingLevel);e=Math.pow(1+a,o)}return e},calcAssembly:function(t,e,a){var o=1;if((null===t||void 0===t?void 0:t.AssemblerCollection[e].BonusList[a].StartingLevel)<=(null===t||void 0===t?void 0:t.AssemblerCollection[e].Level)){var i=null===t||void 0===t?void 0:t.AssemblerCollection[e].BonusList[a].Gain,r=Math.max(0,t.AssemblerCollection[e].Level-(t.AssemblerCollection[e].BonusList[a].StartingLevel-1));o=Math.pow(1+i,r)}return o},calcAssemblyLine:function(t,e){var a=1;if(t.StartingLevel<=e){var o=t.Gain,i=Math.max(0,e-(t.StartingLevel-1));a=Math.pow(1+o,i)}return a},calcAssemblyCost:function(t,e){l.createDecimal(-1);var a=l.createDecimal(e.AssemblyCostReductionBonus),o=e.AssemblerCollection[t],i=l.createDecimal(o.BaseCost),r=l.addDecimal(i,l.multiplyDecimal(i,o.Level)),n=1+o.CostExpo+o.CostExpo*o.Level*.02,s=l.createDecimal(n),c=l.pow(s,o.Level);return l.divideDecimal(l.multiplyDecimal(r,c),a)},calcProteinPerSecond:function(t){var e=l.createDecimal(t.ProteinBonus),a=l.createDecimal(t.FrenchFriesTotal),o=l.createDecimal(1);if(a.greaterThan(1e10)){var i=l.logDecimal(a,5);i=l.subtractDecimal(i,13.48);var r=l.logDecimal(a,10);r=l.subtractDecimal(r,8),o=l.multiplyDecimal(l.multiplyDecimal(i,l.pow(1.1,r)),e)}return o},calcContagionBonus:function(t,e){var a=1;if(t.GrasshopperCollection[e].Locked>0){var o=r.calcPOW(t.GrasshopperCollection[e].BaseBonus),i=r.calcPOW(t.GrasshopperCollection[e].Level);a*=Math.pow(1+.01*o,i)}return a},calcExpeditionHP:function(t){var e=1;if(t.ExpeditionsCollection[16].Locked>0){var a=t.ExpeditionsCollection[16];e=Math.pow(1+a.BonusPower,a.Room-1)}return e},calcUniqueHPBonus:function(t){for(var e=1,a=0;a<t.FarmingShopUniqueHealthy.length;a++)e*=t.FarmingShopUniqueHealthy[a]+1;return e},calcFriesHPBonus:function(t){var e=1;return e*=1+r.calcPOW(t.FrenchFriesTotal)*((.01*t.FarmingShopFriesHealthyBonus+.1)*this.calcContagionBonus(t,5))},calcPetHPBonus:function(t){for(var e=1,a=t.EquipedPetID,o=t.PetsCollection,i={},n=0;n<a.length;n++)a[n]>0&&(i[a[n]]=!0);for(var l=0;l<o.length;l++){var s=o[l];if(s.ID in i)for(var c=0;c<s.BonusList.length;c++){var u=s.BonusList[c];if(23===u.ID){var m=Math.pow(1+u.Gain,s.Level)-1,p=r.calculateLogarithm(1.0125,s.Level+1);e+=.5*((m+Math.max(0,.5*(.005*p-1)))*(1+.005*r.calculateLogarithm(1.075,s.Rank+1)))}}}return e},calcHPBonus:function(t){return r.calcPOW(t.HealthyPotatoBonus)}},c=s;self.onmessage=function(t){var e=t.data,a=e.data;e.id,e.data1;try{for(var i=a.finalPlants,n=0;n<i.length;n++){var s=i[n];s.created=l.createDecimal(s.created),s.totalMade=l.createDecimal(s.totalMade),s.production=l.createDecimal(s.production)}var u=a.modifiers;u.shopProdBonus=l.createDecimal(u.shopProdBonus),u.hpBonus=l.createDecimal(u.hpBonus),u.curPotatoes=l.createDecimal(u.curPotatoes),u.totalPotatoes=l.createDecimal(u.totalPotatoes);for(var m=a.mode,p=a.time,d=a.numSimulatedAutos?a.numSimulatedAutos:1,h=a.combinations,v=l.createDecimal(0),g={},f=l.createDecimal(0),P={},D=0,T={potatoeProduction:0},M=0,S={potatoeProduction:0},C=(0,o.Z)((0,o.Z)({},u),{},{time:3600*p}),w=[],B=[],b=0,x=a.end-a.start,y=a.start;y<=a.end;y++){x--,b++;var k=h[y];C.numAutos=k;var L=void 0;switch(m){case"afk":default:L=c.calcHPProd(i,C);break;case"carlo":L=c.calcStepHPProd(i,(0,o.Z)((0,o.Z)({},C),{},{steps:k}));break;case"step":if(0===k[0]&&0===k[1]&&0===k[2]&&0===k[3]&&0===k[4]);for(var E=[],O=0,A=0,N=0,R=0;R<k.length;R++)k[R]>0&&(A++,N+=k[R]*a.baseTimers[R]);for(var I=3600*p-N,F=0;F<a.baseTimers.length;F++){k[F]>0&&O++;var H=Array(a.baseTimers.length).fill(0);H[F]=d,H.reverse();var G=k[F]*a.baseTimers[F];if(O===A&&k[F]>0)G+=I;else if(k[F]>0){var q=i[i.length-1-F],J=G%q.growthTime;if(J<=.5*q.growthTime)G-=J,I+=J;else{var Z=q.growthTime-J;I>=Z&&(G+=Z,I-=Z)}}E.push({time:r.roundInt(G),autos:H})}L=c.calcStepHPProd(i,(0,o.Z)((0,o.Z)({},C),{},{steps:E}))}for(var X=0,_=0,W=void 0,V=0;V<L.plants.length;V++){var Y=c.calcMaxPrestige(L.plants[V]);X+=Y,_+=Math.pow(1.02,L.plants[V].prestige+Y)-Math.pow(1.02,L.plants[V].prestige),L.plants[V].picIncrease=Y}!0===L.totalPotatoes.greaterThanOrEqualTo(v)&&(v=L.totalPotatoes,g={combo:k,result:L,plants:L.plants},w.unshift({data:L.dataPointsPotatoes,result:v}),w.length>10&&w.pop(),B.unshift({data:L.dataPointsFries,result:v}),B.length>10&&B.pop()),!0===L.potatoeProduction.greaterThanOrEqualTo(f)&&(f=L.potatoeProduction,P={combo:k,result:L,plants:L.plants}),(X>D||X===D&&L.potatoeProduction.greaterThanOrEqualTo(T.potatoeProduction))&&(W={combo:k,result:L,plants:L.plants,potatoeProduction:L.potatoeProduction,picGain:X,picStats:{picLevel:X,picPercent:_}},D=X,T=W),(_>M||_===M&&L.potatoeProduction.greaterThanOrEqualTo(S.potatoeProduction))&&(W={combo:k,result:L,plants:L.plants,potatoeProduction:L.potatoeProduction,picGain:_,picStats:{picLevel:X,picPercent:_}},M=_,S=W),b%100===0&&self.postMessage({update:!0,temp:W,updateAmount:100})}self.postMessage({update:!0,updateAmount:x}),self.postMessage({success:!0,totalPotCombo:g,bestProdCombo:P,bestPicCombo:T,bestPICPercCombo:S,top10DataPointsPotatoes:w,top10DataPointsFries:B})}catch(U){console.log(U)}}}}]);
//# sourceMappingURL=359.033d689f.chunk.js.map