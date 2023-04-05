const data = JSON.parse(dataInfo);
const base = document.querySelector(".section_2");
data.reverse().forEach((element) => {
  base.insertAdjacentHTML(
    "afterbegin",
    `
    <div class="card-wrapper " >
    
            <a class="btn ${element.n}" href="#"><img  src="${element.img}" alt="foto" /></a>
           
            <div class="card">
              <h3>${element.h3}</h3>
              <p>
              ${element.p}
              </p>
              <button class="pr">${element.pr}</button>
            </div>
          </div>
    `
  );
});




const base2 = document.querySelector(".korzina");
const button = document.querySelectorAll(".btn ");
button.forEach((element) => {
  element.addEventListener("click", (event) => {
    // console.log(event.target);

    let nomer = event.target.classList[1];
    // console.log(nomer);
    let nomer2 = 6 - nomer;
    let data2 = data[nomer2];
    // console.log(data2);
  

    // создать элемент по data[nomer2]

    base2.insertAdjacentHTML(
      "afterbegin",
      `
<div class="first">
<img class="first_img" src="${data2.img}" alt="photo1" />
<div class="first_text">
<h3 class="h3">${data2.h3}</h3>
<div class="first_p">
<p>Price: <span class="pr">${data2.pr}</span></p>
<p>Color: <span class="color">${data2.color}</span></p>
<p>Size: <span class="size">${data2.size}</span></p>
<p>Quantity: <input type="number" value="${data2.quantity}" /></p>
</div>
</div>
<div class="first_close"><img src="./img/fotok+2.png" alt="close" /></div>
</div>
`
    );
    const close = document.querySelector(".first_close");
    const card = document.querySelector(".first");
    close.addEventListener("click", () => {
      card.remove();
    });
  });
});

let buttons2 = document.querySelector(".section_2");
let count = 0;
buttons2.addEventListener("click", () => {

  count++;
if (count===1) {
      base2.insertAdjacentHTML("beforebegin", `
      <h2 class="korzina zag">Cart Items</h2>
      `)
    }

  const buttonclo = document.querySelector(".first_close");
  buttonclo.addEventListener("click", () => {
    count--;
    // console.log(count);
    
    if (count===0) {
      const zag = document.querySelector(".zag");
      zag.remove();
    }
  });
});

