const features = document.getElementById('Features');
const company = document.getElementById('company');
const list = document.querySelector('.menu-drop');
const list2 = document.querySelector('.menu-drop2');
const menu = document.getElementById('menu');
const fixed = document.getElementById('fixed');



features.onclick = ()=>{
    
    list.classList.toggle('hidden');
    
    if(list.classList.contains('hidden')==true ){

        features.style.color = 'hsl(0, 0%, 41%)'
        features.firstElementChild.setAttribute('src','images/icon-arrow-down.svg')

    }else{
        features.style.color = 'hsl(0, 0%, 8%)'
        features.firstElementChild.setAttribute('src','images/icon-arrow-up.svg')
    }  

}


company.onclick = ()=>{

    list2.classList.toggle('hidden');

    if(list2.classList.contains('hidden')==true ){

        company.style.color = 'hsl(0, 0%, 41%)'
        company.firstElementChild.setAttribute('src','images/icon-arrow-down.svg')

    }else{
        company.style.color = 'hsl(0, 0%, 8%)'
        company.firstElementChild.setAttribute('src','images/icon-arrow-up.svg')
    }  

}

menu.addEventListener('click',(e)=>{
    if(fixed.classList.contains('none')==true ){
        menu.setAttribute('src','images/icon-close-menu.svg')
        fixed.classList.remove('none')

    }else{
        menu.setAttribute('src','images/icon-menu.svg')
        fixed.classList.add('none')
    }  
})