const url = 'https://restcountries.com/v3.1/all';

const loadCountry =()=> {
    fetch(url)
    .then( res => res.json())
    .then( data => displayCountry(data))
}


const displayCountry = countries => {
    console.log(countries[0]);

    const displayCountryDiv = document.getElementById("display-country");
    for(const country of countries){
         const countryDiv = document.createElement('div');
         countryDiv.innerHTML = `
         <h3>Country Name : ${country.name.common}</h3>
         <button onclick = "loadDetails('${country.cca2}')">Details</button>
         `
         countryDiv.classList.add('display-country');
         displayCountryDiv.appendChild(countryDiv)
    }
}

const loadDetails = code => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetail(data[0]))
}


const displayCountryDetail = country =>{
    const countryDetails = document.getElementById('country-details');
    // const countryDetailDiv = document.createElement('div')
    countryDetails.innerHTML = `
    <h4> Country Name: ${country.name}</h4>
    <P> Country Capital : ${country.capital}</P>
    <P> Country Continent : ${country.continents}</P>
    <P> Country Flag : ${country.flags.png}</P>
    <P> Country Language : ${country.languages[0]}</P>
    `;

    // countryDetails.appendChild(countryDetailDiv)

}
loadCountry()
