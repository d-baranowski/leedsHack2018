!function(e){var t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={getMatches:function(){return[{textPattern:"dynamic workplace",replacementTexts:["no one could really think of a word that would describe it"]},{textPattern:"an exciting place to (kick-?)?start your career",replacementTexts:["this is not an exciting place to work"]},{textPattern:"passionate",replacementTexts:["if you get this job, you need to pretend to care about it for at least six months"]},{textPattern:"fast(-| )?paced environment",replacementTexts:["you’ll be expected to take on the workload of two people because we don’t want to pay two people to do this job","Do you do well with last-minute work, unexpected fire drill assignments, unplanned late hours, and multiple deadlines"]},{textPattern:"demanding",replacementTexts:["require you to prove your dedication by working “some” nights and weekends in addition to your regular hours for no additional pay"]},{textPattern:"flexible",replacementTexts:["you’ll be asked to do all the stuff that no one else wants to do"]},{textPattern:"multi(-| )?tasking",replacementTexts:["you’ll be expected to have an unrealistic number of skills already in place since we don’t want to invest any time or effort in training anybody"]},{textPattern:"highly-?skilled",replacementTexts:["looking for people who already know how to do this exact job and all the specific duties it entails without needing even a day of training"]},{textPattern:"competitive salary",replacementTexts:["we’re not posting the actual salary because we want you to go through the rigorous, stressful process of applying and interviewing before you find out that we pay $12 an hour.","we know you wouldn’t apply if you see how much it pays"]},{textPattern:"entry-?level",replacementTexts:["this position requires at least two years of experience in a similar field"]},{textPattern:"no experience necessary",replacementTexts:["experience is absolutely necessary"]},{textPattern:"family",replacementTexts:["you’re participating in mandatory employee outings whether you like it or not"]},{textPattern:"growth opportunity",replacementTexts:['expect you to work for minimal pay in exchange for the "opportunity" to toil away on weekends']},{textPattern:"identify and resolve problems",replacementTexts:["This company is dysfunctional, and we are expecting you to turn things around"]},{textPattern:"mid-?level software engineer",replacementTexts:["we expect senior software engineers who are satisfied with junior software engineer salaries"]}]}}},function(e,t,n){"use strict";var o,a=n(0),r=(o=a)&&o.__esModule?o:{default:o};window.onload=function(){document.querySelectorAll("body *").forEach(function(e){console.log(r.default.getMatches()),console.log(e.textContent)})}}]);