var previewButton = document.querySelector('.btno')
var preview = document.getElementById('preview')
var pre = document.getElementById('pre')

var output = document.querySelector('.output')
let buttons = document.getElementsByClassName('tool-btn');


for (let btn of buttons) {
	btn.addEventListener('click', () => {
		let cmd = btn.dataset['command'];
		if(cmd === 'createlink') {
			let url = prompt("Enter the link here: ", "http:\/\/");
            document.execCommand(cmd, false, url);
		} else {
			document.execCommand(cmd, false, null);
		}
	})
}


function mud(){

    var element = document.querySelector(".editor")
    element.classList.toggle("editor-dark");
    
    var body = document.body
    body.classList.toggle("b2");
    
    var out = document.querySelector('.output')
    out.classList.toggle('output-dark');
   
    spf = document.querySelectorAll('.sp-f')

    for(let i = 0; i < spf.length; i++){
        spf[i].classList.toggle('sp-d');
    }

    preview.classList.toggle('preview-toggle')

};

function bt(){
    preview.innerText = output.innerHTML;
    pre.classList.toggle('pre-dis')
    previewButton.classList.toggle('previewButtonDepois')
};

function att(){
    preview.innerText = output.innerHTML;
};