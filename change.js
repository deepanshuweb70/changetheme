let heading= document.querySelector('#heading')
let randomcolor=document.querySelector("#randomcolor")
let input= document.querySelector('#input')
let applycolor= document.querySelector('#applycolor')
let p=document.querySelector("#p")

// console.log(heading, randomcolor, input, applycolor);

applycolor.addEventListener('click', ()=>{
            const color =input.value

            document.body.style.backgroundColor= color;
            p.textContent= `current color : ${color}`




})


// randomcolor.addEventListener('click', ()=>{
//     let a=Math.floor(Math.random() *256)
//      let b=Math.floor(Math.random() *256)
//       let c=Math.floor(Math.random() *256)
//     // console.log(a);

//     const color=`rgb(${a}, ${b}, ${c})`

//     document.body.style.backgroundColor= color;
//     p.textContent=`current color: ${color}`


// })

//  throungh an array

const colors = ["red", "blue", "green", "yellow", "purple", "orange"];

// const randomBtn = document.querySelector("#randomBtn");
// const currentColor = document.querySelector("#currentColor");

randomcolor.addEventListener("click", function () {

    const randomIndex = Math.floor(Math.random() * colors.length);

    const color = colors[randomIndex];

    document.body.style.backgroundColor = color;

    p.textContent = `current color: ${color}`;
});