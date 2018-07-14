 var stockPrice = (resp) => {
     // document.writeln(resp); // выводит в формате {"data":[{"id":19043,"title":"Банк ВТБ ао", "price":0.0514700000}, {"id":3,"title":"Сбербанк ао","price":237.3700000000}],"error":{"msg":"","code":""},"status":true}
     var arr = JSON.parse(resp); // конвертируем из json в объект js
     var banks = arr.data; // выделяем объект с данными
     var sber = banks.filter(function(obj) {
         return obj.id == 3; // выделяем объект с id == 3
     });
     // console.log(sber); // в консоле:
     // [{…}]
     // 0:
     // id : 3
     // price : 237.37
     // title : "Сбербанк ао"
     alert('Цена акций ' + sber[0].title + ' - ' + sber[0].price);
     document.getElementById('r1').innerHTML = 'Цена акций ' + sber[0].title + ' на данным момент - ' + sber[0].price;
 }

 function httpGet(theUrl) {
     var xhr = new XMLHttpRequest();
     xhr.open("GET", theUrl, true);
     xhr.send();
     xhr.onreadystatechange = function() { // (3)
         if (xhr.readyState === 4 && xhr.status === 200) {
             stockPrice(xhr.responseText);
         }
     }
 }
 var clientID = 'CB26A7FA-B4DB-4957-9B45-C2E1C59EF56A'; // do not forger to change the ID from test to client
 var filter = '&Sector=Banks&BaseFilter=day';
 httpGet('https://api.finam.ru/webapi/stocks/v1?PartnerId=' + clientID + filter);