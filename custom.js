

function money(pri,tri){
    var price = document.getElementById(tri);
    var taka = document.getElementById(pri);

    price.innerHTML = taka.innerHTML;
    
};

var nagad = document.getElementById('nagad');
var banking = document.getElementById('banking');

nagad.addEventListener('click',function(){
    banking.innerHTML = 'nagad:017XXXXXXXx';
});

var rocket = document.getElementById('rocket');

rocket.addEventListener('click',function(){
    banking.innerHTML = 'rocket:017XXXXXXXx';
});

var bkash = document.getElementById('bkash');

bkash.addEventListener('click',function(){
    banking.innerHTML = 'bkash:017XXXXXXXx';
});

// function back(){
//     var div1 = document.getElementById('div1');
//     div1.style.background = '#5f27cd';
    
// }

// var div2 = document.getElementById('div2');
// var div3 = document.getElementById('div3');
// var div4 = document.getElementById('div4');
// var div5 = document.getElementById('div5');
// var div6 = document.getElementById('div6');
// var div7 = document.getElementById('div7');
// var div8 = document.getElementById('div8');
// var div9 = document.getElementById('div9');
// var div10 = document.getElementById('div10');
// var div11 = document.getElementById('div11');
// var div12 = document.getElementById('div12');
// var div13 = document.getElementById('div13');
// var div14 = document.getElementById('div14');

// div1.addEventListener('click',function(){
//     div1.style.background = '#5f27cd';
//     div2.style.background = 'none';
// });
// div2.addEventListener('click',function(){
//     div2.style.background = '#5f27cd';
//     div1.style.background = 'none';
// });
// div3.addEventListener('click',function(){
//     div3.style.background = '#5f27cd';
//     div4.style.background = 'none';
// });
// div4.addEventListener('click',function(){
//     div4.style.background = '#5f27cd';
//     div3.style.background = 'none';
// });
