(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,function(e){e.exports=[{catImage:"../../images/Angeweena-Joween.jpg",catName:"Angeweena Joween",selected:!1,matched:!1},{catImage:"../../images/Birdie.jpg",catName:"Birdie",selected:!1,matched:!1},{catImage:"../../images/Breakfast.jpg",catName:"Breakfast",selected:!1,matched:!1},{catImage:"../../images/Cleo.jpg",catName:"Cleo",selected:!1,matched:!1},{catImage:"../../images/Dinner.jpg",catName:"Dinner",selected:!1,matched:!1},{catImage:"../../images/Fartima.jpg",catName:"Fartima",selected:!1,matched:!1},{catImage:"../../images/Franklin.jpg",catName:"Franklin",selected:!1,matched:!1},{catImage:"../../images/Holla.jpg",catName:"Holla",selected:!1,matched:!1},{catImage:"../../images/Liam.jpg",catName:"Liam",selected:!1,matched:!1},{catImage:"../../images/Liberace.jpg",catName:"Liberace",selected:!1,matched:!1},{catImage:"../../images/Lunch.jpg",catName:"Lunch",selected:!1,matched:!1},{catImage:"../../images/Meatloaf.jpg",catName:"Meatloaf",selected:!1,matched:!1},{catImage:"../../images/Nacho.jpg",catName:"Nacho",selected:!1,matched:!1},{catImage:"../../images/Noodle.jpg",catName:"Noodle",selected:!1,matched:!1},{catImage:"../../images/Nutella.jpg",catName:"Nutella",selected:!1,matched:!1},{catImage:"../../images/Tony.jpg",catName:"Tony",selected:!1,matched:!1},{catImage:"../../images/Ween.jpg",catName:"Ween",selected:!1,matched:!1}]},,,function(e,a,t){e.exports=t.p+"static/media/cat-pattern.f6cc3aa1.png"},function(e,a,t){e.exports=t(18)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),m=t(5),l=t.n(m),r=(t(13),t(2)),i=t(1),o=t(6),s=t.n(o),d=(t(14),function(e){var a=e.catImage,t=e.catName,m=e.cardClickHandler,l=e.catIndex,r=e.flipped;return n.a.createElement("div",{className:"Card",onClick:function(){r||m(l)}},r?n.a.createElement(c.Fragment,{class:"Card__box"},n.a.createElement("img",{className:"Card__image",src:a}),n.a.createElement("p",{className:"Card__name"},t)):n.a.createElement("img",{className:"Card__image",src:s.a}))}),g=(t(15),function(e){var a=e.resetGame,t=e.score;return n.a.createElement("div",{className:"EndScreen"},t?n.a.createElement("div",null,n.a.createElement("h1",null,"CONGRATULATIONS!! You won!"),n.a.createElement("h2",null,"Final Score: ",t)):n.a.createElement("div",null,n.a.createElement("h1",null,"Kitten Matching Game"),n.a.createElement("h2",null,"A feline friendly game made with React")),n.a.createElement("button",{onClick:a},"Play",!!t&&" Again"))}),u=(t(16),function(e){var a=e.score;return n.a.createElement("div",{className:"Scoreboard"},n.a.createElement("h2",null,"Flip the cards to match the cats"),n.a.createElement("h3",null,"Score: ",a))}),p=t(3),h=(t(17),function(){var e=Object(c.useState)(0),a=Object(i.a)(e,2),t=a[0],m=a[1],l=Object(c.useState)(!1),o=Object(i.a)(l,2),s=o[0],h=o[1],f=Object(c.useState)([]),N=Object(i.a)(f,2),E=N[0],j=N[1],I=Object(c.useState)(0),b=Object(i.a)(I,2),v=b[0],w=b[1],k=E.filter(function(e){return!e.matched}).length,C=function(e){if(!s){var a=t+1;m(a);var c=E.map(function(a,t){return e===t?Object(r.a)({},a,{selected:!0}):a});if(j(c),console.log("updated cats at beginning",c),2===a){var n=c.filter(function(e){return e.selected});console.log("flipped cats ppleaseeee",n),n[0].catName===n[1].catName?(console.log("WE HAVE A MATCH!!!!"),c=c.map(function(e){return e.selected?Object(r.a)({},e,{selected:!1,matched:!0}):e}),a=0,console.log("updated cats after match",c),j(c),m(a),w(v+20)):(h(!0),w(v-10),setTimeout(function(){h(!1),c=c.map(function(e){return e.selected?Object(r.a)({},e,{selected:!1}):e}),a=0,j(c),m(a)},2e3))}}},O=function(){w(0),m(0),j(p.concat(p).sort(function(){return.5-Math.random()})),h(!1)};return k?n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"App__header"},n.a.createElement("h1",null,"Kitten Matching Game"),n.a.createElement(u,{score:v}),n.a.createElement("button",{onClick:O},"Reset Game")),n.a.createElement("div",{className:"App__card-container"},E.map(function(e,a){return n.a.createElement(d,{catName:e.catName,catImage:e.catImage,flipped:e.selected||e.matched,cardClickHandler:C,catIndex:a,key:a})}))):n.a.createElement(g,{score:v,resetGame:O})});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[7,1,2]]]);
//# sourceMappingURL=main.e5072e21.chunk.js.map