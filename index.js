const myform=document.querySelector('.userform');


const handleForm =(e)=>{
    e.preventDefault();
    console.log("hallo");
    const name=myform.querySelector('.userform__name');
    const birthday=myform.querySelector('.userform__birtsday');
    const photo=myform.querySelector('.userform__photo');

    const container= document.querySelector('#mytemplate').content;
    const card=container.querySelector('.card').cloneNode(true);
    card.querySelector('.name').textContent=name.value;
    card.querySelector('.datum').textContent=birthday.value;
    card.querySelector('.image').src=photo.value;
    
    const test=document.querySelector('.test');
    test.append(card);

    let del=card.querySelector('.delete');
    console.log(del);
    del.addEventListener('click',deletetest);
    }


myform.addEventListener('submit', handleForm);


const deletetest=(e)=>{
    console.log(e.target);
    e.target.closest('.card').remove();
}

const username=document.querySelector('.userform__name');
const but=document.querySelector('.userform__submit');

const valid=(e)=>{
    
if (username.value.length>10){
    console.log(username.value.length);
    but.removeAttribute('disabled');
    but.style.color="red";
}
}

username.addEventListener('input',valid);


const arratest=[1,2,5,6];
/*
arratest.forEach((item)=>{
    console.log(item)
});*/

const test=arratest.map((item)=>{
    return item*9;
});

console.log(test)

const obj={
    name:'lena',
    age:8
}

Object.keys(obj).forEach((i)=>{
console.log(i, obj[i]);
})

const arrOb=[{ 
    name:'lena',
    age:8},
    {name:'lena2',
    age:9},
    {name:'lena3',
    age:10},
]

arrOb.forEach((i)=>{
    console.log(i.name);
})