var sp1 = document.getElementById('sp1');
var sp2 = document.getElementById('sp2');
var sp3 = document.getElementById('sp3');
var sp4 = document.getElementById('sp4');
var sp5 = document.getElementById('sp5');
var sp6 = document.getElementById('sp6');

var previewButton = document.getElementById('PreviewButton')
var preview = document.getElementById('preview')
var pre = document.getElementById('pre')
var attA = document.getElementById('attA')


let output = document.getElementById('output');
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
    var element = document.getElementById("editor")
    element.classList.toggle("edit");

    var body = document.body
    body.classList.toggle("b2");

    output.classList.toggle("text-fff")
    sp1.classList.toggle('menu-fff')
    sp2.classList.toggle('menu-fff')
    sp3.classList.toggle('menu-fff')
    sp4.classList.toggle('menu-fff')
    sp5.classList.toggle('menu-fff')
    sp6.classList.toggle('menu-fff')
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