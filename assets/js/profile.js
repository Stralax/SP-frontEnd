export let fullName = "Andrej Bojchevski"
export let lastOnline = "13.05.2003"
export let joined = "01.05.2022"
export let numFriends = 3
export let numViews = 9
export let country = "MK"

export async function getFlagByCountryCode(countryCode) {
    try {
        // Fetch data from the API
        const response = await fetch('https://restcountries.com/v3.1/all');
        const countries = await response.json();

        // Find the country by country code (ISO 3166-1 alpha-2)
        const country = countries.find(c => c.cca2 === countryCode);
        
        
        if (country) {
            // Return the flag URL
            return country.flags.png;  // or country.flags.svg if you prefer SVG
        } else {
            return null; // Country not found
        }
    } catch (error) {
        console.error("Error fetching country data:", error);       // <- TU SE JAVLJA GRESKA NEDOSTUPNI PODACI
        return null;
    }
}

try {
    const flag = await getFlagByCountryCode(country);
} catch (error) {
    console.error("Error fetching flag:", error);
    res.render("profile", {
        flag: null,
    });
}



// /*  Fetch pa export

// export let flag = null;

// async function setFlag() {
//     flag = await getFlagByCountryCode(country);
// }

// setFlag();

// export async function getFlagByCountryCode(countryCode) {
//     try {
//         const response = await fetch('https://restcountries.com/v3.1/all');
//         const countries = await response.json();
//         const country = countries.find(c => c.cca2 === countryCode);

//         if (country) {
//             return country.flags.png;
//         } else {
//             return null;
//         }
//     } catch (error) {
//         console.error("Error fetching country data:", error);
//         return null;
//     }
// }

// */