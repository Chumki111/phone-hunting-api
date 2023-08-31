const loadPhone = async(searchText) =>{
    const res = await fetch(`
    https://openapi.programming-hero.com/api/phones?search=${searchText}
    `)
    const data =await res.json();
    const phone = data.data;
    // console.log(phone);
    displayPhones(phone);

}

const displayPhones = phones => {
    // console.log(phones)

    const phoneContainer = document.getElementById('card-container');
    phoneContainer.textContent = '';
      
    const showAllContainer = document.getElementById('show-all-container');
    if(phones.length > 12){
        showAllContainer.classList.remove('hidden')
    }else {
        showAllContainer.classList.add('hidden')
    }

    phones = phones.slice(0,12)

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

    toggleLoadingSpinner(false);
}

// handle searchButton
const handleSearch = () => {
        toggleLoadingSpinner(true);
        const searchField = document.getElementById('search-field');
        const searchText = searchField.value;
        searchField.value = '';
        console.log(searchText);
        loadPhone(searchText)
}

const toggleLoadingSpinner = (isLoading) =>{
    const loadingSpinner = document.getElementById('loading-spinner');
    if(isLoading){
        loadingSpinner.classList.remove('hidden')
    } else{
        loadingSpinner.classList.add('hidden')
    }
}
// loadPhone();