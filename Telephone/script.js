let td = document.querySelectorAll('td')
let inp = document.getElementById('input')
let tel = document.querySelector('.icon')
let trash = document.querySelector('.trash')
let deleteLeft = document.querySelector('.delete-left')



td.forEach( function(item){
    item.addEventListener('click', function(y){
        var numbers =y.target.innerHTML
        inp.value += numbers
        tel.href += numbers
    })
})

/*bu yerda item har bir td ni alohida olyapti 
va y.target.innerHtmL td tagidagi qiymatni ilob beradi
*/

tel.addEventListener('click',alertfun)

function alertfun(){
    alert("har yangi qo'ng'iroq uchun trash tugmasini bosing !!!")
}


//yangilash

trash.addEventListener('click', deletefun)

function deletefun(){
    location.reload()
}
//yangilash

//o`chirish 
deleteLeft.addEventListener('click', function(){
    inp.value = inp.value.substring(0, inp.value.length - 1)
    tel.href = tel.href.substring(0, tel.href.length - 1)
})
//o`chirish 
