/* console.log(document.head); */
/* console.log(document.documentElement);Просмотр тэга HTML */
/* console.log(document.body.childNodes); */ /*  Показывает все узлы body */
/* console.log(document.body.firstElementChild);  */
/* console.log(document.body.firstChild);
console.log(document.body.lastChild); */
/* console.log(document.body.lastElementChild);  */

// Node - узел, Команды с Element отдают нам элемент а не узел

/* console.log(document.querySelector("#current").parentNode);
console.log(document.querySelector("#current").parentNode.parentNode.parentNode); */
/* console.log(document.querySelector('[data-hero="3"]').nextSibling.nextSibling); */
/* console.log(document.querySelector('[data-hero="3"]').previousSibling); */
/* article.dataset.columns = 5 */
/* console.log(document.querySelector('[data-hero="3"]').nextSibling.nextSibling); */
/* console.log(document.querySelector('[data-hero="3"]').nextElementSibling);
console.log(document.querySelector('[data-hero="3"]').previousElementSibling); */
/* console.log(document.querySelector("#current").parentElement); */


// For of
                   //childElemeny нет команды по этому мы создаем ее сами
/* for (let node of document.body.childNodes) { // перебрали только элементы без текста
    if (node.nodeName == '#text' || node.nodeName == '#comment') {    
            continue;
    } else {
      console.log(node);
    }
};  */

let i = 0;
let btn = document.querySelector('#current');


const deleteBtn = (e) => {
  
     console.log(e.target);
     i++;
     if (i == 2) {
      btn.removeEventListener('click', deleteBtn);// 
     } else {
      console.log(e);
     }
};

btn.addEventListener('click', deleteBtn);// добавляем в функцию(deleteBtn) событие 


/* btn.forEach(item => {
  console.log(item);
 
});  */

/* console.log(btn); */

/* let dose = document.querySelector('[data-hero="3"]').nextElementSibling;
console.log(dose); */

/* dose.addEventListener('click', () => {
     alert('ar');
}); */