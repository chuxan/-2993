function modal(id) {
	var modal = document.getElementById(id);
	var close = document.querySelectorAll('[data-close="true"]');
	modal.style.display = 'block';
	for (var i = 0; i < close.length; i++) {
		close[i].onclick = function() {
			modal.style.display = 'none';
		}
	}
	window.onclick = function(e){
		if (e.target == modal) {
			modal.style.display = 'none';
		}
	};
	document.onkeydown = function(e) {
		if (e.keyCode == 27) {
			modal.style.display = 'none';
		}
	};
}
let elem = document.getElementById('elem')
const form = document.forms["form"];
const formArr = Array.from(form);
const validFormArr = [];
const button = form.elements["button"];

formArr.forEach((el) => {
  if (el.hasAttribute("data-reg")) {
    el.setAttribute("is-valid", "0");
    validFormArr.push(el);
  }
});

form.addEventListener("input", inputHandler);
button.addEventListener("click", buttonHandler);

function inputHandler({ target }) {
  if (target.hasAttribute("data-reg")) {
    inputCheck(target);
  }
}

function inputCheck(el) {
  const inputValue = el.value;
  const inputReg = el.getAttribute("data-reg");
  const reg = new RegExp(inputReg);
  if (reg.test(inputValue)) {
    el.setAttribute("is-valid", "1");
    el.style.border = "2px solid rgb(0, 196, 0)";
  } else {
    el.setAttribute("is-valid", "0");
    el.style.border = "2px solid rgb(255, 0, 0)";
  }
}

function buttonHandler(e) {
  const allValid = [];
  validFormArr.forEach((el) => {
    allValid.push(el.getAttribute("is-valid"));
  });
  const isAllValid = allValid.reduce((acc, current) => {
    return acc && current;
  });

  if (!Boolean(Number(isAllValid))) {
    e.preventDefault();
  }
}

let btn = document.getElementById('button');
let body = document.querySelector('body')
let btnModalWindow = document.getElementById('btnModalWindow');
let modalWindow = document.getElementById('modalWindow') 
btn.addEventListener('click',() => { 
	modalWindow.style.display = 'block'
	body.style.overflow = 'hidden'
})
btnModalWindow.addEventListener('click',() => { 
	modalWindow.style.display = 'none'
	body.style.overflow = 'visible'
})

const form1 = document.forms["form"];
const formArr1 = Array.from(form);
const validFormArr1 = [];
const button1 = form.elements["button"];

formArr.forEach((el) => {
  if (el.hasAttribute("data-reg")) {
    el.setAttribute("is-valid", "0");
    validFormArr.push(el);
  }
});

form.addEventListener("input", inputHandler);
button.addEventListener("click", buttonHandler);

function inputHandler({ target }) {
  if (target.hasAttribute("data-reg")) {
    inputCheck(target);
  }
}

function inputCheck(el) {
  const inputValue = el.value;
  const inputReg = el.getAttribute("data-reg");
  const reg = new RegExp(inputReg);
  if (reg.test(inputValue)) {
    el.setAttribute("is-valid", "1");
    el.style.border = "2px solid rgb(0, 196, 0)";
  } else {
    el.setAttribute("is-valid", "0");
    el.style.border = "2px solid rgb(255, 0, 0)";
  }
}

function buttonHandler(e) {
  const allValid = [];
  validFormArr.forEach((el) => {
    allValid.push(el.getAttribute("is-valid"));
  });
  const isAllValid = allValid.reduce((acc, current) => {
    return acc && current;
  });

  if (!Boolean(Number(isAllValid))) {
    e.preventDefault();
  }
}

document.getElementById('sect').addEventListener('click', (ev) => {
  for(let i = 1; i <= document.getElementById('sect').children.length*2; i++) {
    if(ev.target.id == `button${i}`) {
      console.log(1)
      let body = document.querySelector('body')
      let btnModalWindow = document.getElementById('btnModalWindow');
      let modalWindow = document.getElementById('modalWindow') 
	    modalWindow.style.display = 'block'
	    body.style.overflow = 'hidden'
      btnModalWindow.addEventListener('click',() => { 
	      modalWindow.style.display = 'none'
	      body.style.overflow = 'visible'
      })
    }
  }
})



 function showElement() {
            var article = document.querySelector('.towns');
            var newElement = document.showElement('p');
            newElement.textContent = 'Это новый элемент';
            article.appendChild(newElement);
        }