const loadPhone = async() =>{
    const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    const data =await res.json();
    const phone = data.data;
    // console.log(phone);
    displayPhones(phone);

}

const displayPhones = phones => {
    // console.log(phones)

    const phoneContainer = document.getElementById('card-container')
    phones.forEach(element => {
        console.log(element)
        const phoneCard = document.createElement('div');
        phoneCard.classList = 'card bg-gray-100 p-4 shadow-xl';
        phoneCard.innerHTML = `
        <figure class="px-10 pt-10">
        <img src="${element.image}" alt="Shoes" class="rounded-xl" />
        </figure>
         <div class="card-body items-center text-center">
        <h2 class="card-title">${element.phone_name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions">
        <button class="btn btn-primary">Buy Now</button>
        </div>
       </div>  
        `;
        phoneContainer.appendChild(phoneCard);
    });
}
loadPhone();