for (let btn of document.getElementsByClassName('tool-btn')) {
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
    
    var output = document.querySelector('.output');
    output.classList.toggle('output-dark');

    var preview = document.querySelector('.preview');
    preview.classList.toggle('preview-dark');

    var moon = document.getElementById('moon')
    moon.classList.toggle('sun')
   
    spf = document.querySelectorAll('.sp-f')

    for(let i = 0; i < spf.length; i++){
        spf[i].classList.toggle('sp-d');
    }
};

function bt(){
    
    var previewButton = document.querySelector('.btno')
    var preview = document.getElementById('preview')
    var pre = document.querySelector('.pre')
    var output = document.querySelector('.output')

    preview.innerText = output.innerHTML;
    
    pre.classList.toggle('pre-dis')
    previewButton.classList.toggle('previewButtonDepois')
};


function att(){
    var output = document.querySelector('.output')

    preview.innerText = output.innerHTML;
};