const url = 'https://restcountries.com/v3.1/all';

const loadCountry =()=> {
    fetch(url)
    .then( res => res.json())
    .then( data => displayCountry(data))
}


const displayCountry = countries => {
    console.log(countries);

    const displayCountryDiv = document.getElementById("display-country");
    for(const country of countries){
         const countryDiv = document.createElement('div');
         countryDiv.innerHTML = `
         <h3>Country Name : ${country.name.common}</h3>
         <p>Country Capital : ${country.capital}</p>
         <p>Country Continant : ${country.continents}</p>
        <p>Country currencies: ${country.currencies ? country.currencies.name : 'no Currencies'}</p>
         <p>Country population : ${country.populations}</p>
         <p>Country Languages : ${country.languages}</p>
         `
         countryDiv.classList.add('display-country');
         displayCountryDiv.appendChild(countryDiv)
    }
}

loadCountry()
