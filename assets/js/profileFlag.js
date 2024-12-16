let MyCode = "MK"
let ViewCode = "SI"

const flag1 = document.getElementById("MyFlag");
const flag2 = document.getElementById("ViewFlag");

if(flag1 != null){
    fetch('https://restcountries.com/v3.1/all')
    .then(odg => odg.json())
    .then(data => {
        const countryData = data.find(
            country => MyCode === country.cca2
        );
        if (countryData) {
            flag1.style.backgroundImage = `url(${countryData.flags.svg})`;
            flag1.style.backgroundSize = 'contain';
            flag1.style.backgroundRepeat = 'no-repeat';
        } else {
            console.log('Country with that cca2 not found.');
        }
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}

if(flag2 != null){
    fetch('https://restcountries.com/v3.1/all')
    .then(odg => odg.json())
    .then(data => {
        const countryData = data.find(
            country => ViewCode === country.cca2
        );
        if (countryData) {
            flag2.style.backgroundImage = `url(${countryData.flags.svg})`;
            flag2.style.backgroundSize = 'contain';
            flag2.style.backgroundRepeat = 'no-repeat';
        } else {
            console.log('Country with that cca2 not found.');
        }
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}