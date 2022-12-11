let item1 = document.querySelectorAll(".clint-item img")[0]
let item2 = document.querySelectorAll(".clint-item img")[1]
let item3 = document.querySelectorAll(".clint-item img")[2]
let content1 = document.getElementsByClassName("clint-d")[0]
let content2 = document.getElementsByClassName("clint-d")[1]
let content3 = document.getElementsByClassName("clint-d")[2]
let listofc = [content1,content2,content3]
let listofi = [item1,item2,item3]
for (let i in listofi){
    listofi[i].addEventListener("click",()=>{
        listofc[i].classList.toggle('appare')
    })
}
