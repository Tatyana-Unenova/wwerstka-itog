const data =JSON.parse(content2);
 console.log(data);
 const base =document.querySelector('.section_2');
 data.forEach(element => {
    base.insertAdjacentHTML('afterbegin',`
    <div class="card-wrapper">
            <a class="btn" href="#"><img  src="${element.img}" alt="foto" /></a>
           
            <div class="card">
              <h3>${element.h3}</h3>
              <p>
              ${element.p}
              </p>
              <button class="pr">${element.pr}</button>
            </div>
          </div>
    `)
    
 });