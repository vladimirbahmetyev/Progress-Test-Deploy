function onCheckBox(checkbox) {
    checkbox.getElementsByTagName('rect')[0].style.fill = '#7ed221';
    checkbox.getElementsByTagName('rect')[0].style.stroke = '#7ed221';
    checkbox.getElementsByTagName('circle')[0].style.fill = '#fff';
    checkbox.getElementsByTagName('circle')[0].style.transform = 'translateX(16px)';
}

function offCheckBox(checkbox) {
    checkbox.getElementsByTagName('rect')[0].style.stroke = '#494949';
    checkbox.getElementsByTagName('rect')[0].style.fill = '#494949';
    checkbox.getElementsByTagName('circle')[0].style.fill = '#d6d6d6';
    checkbox.getElementsByTagName('circle')[0].style.transform = 'translateX(0)';
}

let currentValue = 0
let isAnimate = false
let isHide = false

document.getElementById("value").addEventListener("change", (e)=>{
    currentValue = e.target.value
    if (currentValue >=0 && currentValue <= 100){
        let res = currentValue + " " + (100 - currentValue)
        document.getElementById('segment').setAttribute('stroke-dasharray', res);
    }
})

let diagram = document.getElementById('diagram')

let animateCheckBox = document.getElementById("animate")

animateCheckBox.addEventListener('click', ()=>{
    if(isAnimate){
        isAnimate = false
        offCheckBox(animateCheckBox)
        diagram.classList.remove("progress__status_rotate")
    }
    else{
        isAnimate = true
        diagram.classList.add("progress__status_rotate")
        onCheckBox(animateCheckBox)
    }
})

let hideCheckBox = document.getElementById("hide")

hideCheckBox.addEventListener('click', ()=>{
    if(isHide){
        isHide = false
        offCheckBox(hideCheckBox)
        diagram.style.visibility = 'visible'
    }
    else{
        isHide = true
        onCheckBox(hideCheckBox)        
        diagram.style.visibility = 'hidden'
    }
})
