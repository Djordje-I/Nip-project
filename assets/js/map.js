

/*======================================================ABOUT=====================================================*/
 // Podaci o gradovima i klijentima
        const clients = [
            {city: "Pančevo", lat: 44.856, lng: 20.659, clients: ["Frikom"]},
            {city: "Beograd", lat: 44.8125, lng: 20.4612, clients: ["Atlantic Štark", "Kompanija Kršulj", "Swisslion takovo", "Art-ival", "Desing"]},
            {city: "Čačak", lat: 43.8914, lng: 20.3497, clients: ["Dessert"]},
            {city: "Paraćin", lat: 43.8608, lng: 21.4078, clients: ["Maxi Lux", "Clas Comerc(Čepure)", "Bogdanović", "Čokolend", "Duga"]},
            {city: "Prizren", lat: 42.2139, lng: 20.7397, clients: ["Tac Produkt mamushe", "Liri"]},
            {city: "Priština", lat: 42.6629, lng: 21.1655, clients: ["Evko Obilić"]},
            {city: "Skopje", lat: 41.9973, lng: 21.428, clients: ["Čeza komerc", "Vitalia"]},
            {city: "Čitluk", lat: 43.2286, lng: 17.7008, clients: ["Union foods", "Barpeh", "Emmesse"]},
            {city: "Niš", lat: 43.3209, lng: 21.8958, clients: ["Metla komerc", "Benlian foods"]},
            {city: "Ohrid", lat: 41.1172, lng: 20.8018, clients: ["Bastum"]},
            {city: "Negotino", lat: 41.4833, lng: 22.0892, clients: ["Rosal DS"]},
            {city: "Prilep", lat: 41.3464, lng: 21.5544, clients: ["Vitaminka"]},
            {city: "Kikinda", lat: 45.8296, lng: 20.4652, clients: ["Multipak", "Jaffa Banini"]},
            {city: "Ilidža", lat: 43.8276, lng: 18.3034, clients: ["M.E.S.A Internacional"]},
            {city: "Vranje", lat: 42.5514, lng: 21.9003, clients: ["Amoretti", "Eltekon"]},
            {city: "Bečej", lat: 45.6167, lng: 20.0333, clients: ["Almondo"]},
            {city: "Požega", lat: 43.8456, lng: 20.0369, clients: ["Zvečevo"]},
            {city: "Loznica", lat: 44.5333, lng: 19.2258, clients: ["Nelly"]},
            {city: "Kruševac", lat: 43.5833, lng: 21.3333, clients: ["BG produkt", "Chocoline", "Flory"]},
            {city: "Prijepolje", lat: 43.3903, lng: 19.6506, clients: ["Ćatić Company-Waltz Cream"]},
            {city: "Subotica", lat: 46.1006, lng: 19.6675, clients: ["Pionir", "Magnat"]},
            {city: "Vrbas", lat: 45.5714, lng: 19.6408, clients: ["Medela"]},
            {city: "Požarevac", lat: 44.6208, lng: 21.1839, clients: ["Bambi"]},
            {city: "Istanbul", lat: 41.0082, lng: 28.9784, clients: ["Asya Chocolate"]},
            {city: "Bijeljina", lat: 44.7569, lng: 19.2164, clients: ["Produkt"]},
            {city: "Sarajevo", lat: 43.8563, lng: 18.4131, clients: ["Spanish market"]},
            {city: "Frankfurt", lat: 50.1109, lng: 8.6821, clients: ["Bak Tec"]},
            {city: "Crvenka", lat: 45.6589, lng: 19.4536, clients: ["Jaffa"]},
            {city: "Kragujevac", lat: 44.0128, lng: 20.9114, clients: ["Galija"]},
            {city: "Leskovac", lat: 42.9976, lng: 21.9445, clients: ["Sanjeli"]},
            {city: "Split", lat: 43.5089, lng: 16.4392, clients: ["Panex"]},
            {city: "Podgorica", lat: 42.4304, lng: 19.2594, clients: ["Falcon"]},
            {city: "Nova Varoš", lat: 43.4606, lng: 19.8114, clients: ["Trgovina Avdić"]},
            {city: "Šabac", lat: 44.7538, lng: 19.6872, clients: ["Candy Rush"]},
            {city: "Vukovar", lat: 45.3436, lng: 19.0025, clients: ["Vasiljev"]},
            {city: "Bačko Petrovo selo", lat: 45.7069, lng: 20.0797, clients: ["sweetsystem"]},
            {city: "Vršac", lat: 45.1236, lng: 21.2983, clients: ["Banat"]},
            { city: "Trebinje", lat: 42.7110, lng: 18.3436, clients: ["Swisslion RDT"] },
            {city: "Nova Pazova", lat: 44.9447, lng: 20.2217, clients: ["Konlid"]}
        ];

        // Inicijalizacija mape - centrirana na Balkan
        const map = L.map('map').setView([44, 20], 7);

        // Dodavanje osnovne karte
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

const customIcon = new L.Icon({
    iconUrl: '/assets/img/beng.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

// Zatim u vašoj petlji dodajte icon opciju
clients.forEach(location => {
    const marker = L.marker([location.lat, location.lng], {icon: customIcon}).addTo(map)
        .bindPopup(`
            <div class="custom-popup">
                <h3>${location.city}</h3>
                ${location.clients.length > 0 ? `
                <p>Klijenti: <i class="fa fa-arrow-circle-o-down" aria-hidden="true"></i></p> 
                <ul>
                    ${location.clients.map(client => `<li>${client}</li>`).join('')}
                </ul>
                ` : '<p>Nema dodatih klijenata</p>'}
            </div>
        `);
});



 // Podaci o gradovima i proizvođačima
        const citiesData = [
            
          
            {
                name: "Paraćin",
                producers: ["Maxi Lux", "Clas Comerc(Čepure)", "Bogdanović", "Čokolend", "Duga"],
                additional: false
             
            },
              {
                name: "Beograd",
                producers: ["Atlantic Štark", "Kompanija Kršulj", "Swisslion takovo", "Art-ival", "Desing"],
                additional: false
            },
            {
                name: "Čitluk",
                producers: ["Union foods", "Barpeh", "Emmesse"],
                additional: false
            },
            {
                  name: "Čačak",
                producers: ["Dessert"],
                additional: true
            },
            {
                name: "Prizren",
                producers: ["Tac Produkt mamushe", "Liri"],
                additional: true
            },

            {
                name: "Priština",
                producers: ["'Evko' Obilić"],
                additional: true
            },
        
            {
                name: "Skopje",
                producers: ["Čeza komerc", "Vitalia"],
                additional: true
            },
            {
                name: "Pančevo",
                producers: ["Frikom"],
                additional: true
            },
          
            {
                name: "Niš",
                producers: ["Metla komerc", "Benlian foods"],
                additional: true
            },
            {
                name: "Ohrid",
                producers: ["Bastum"],
                additional: true
            },
            {
                name: "Negotino",
                producers: ["Rosal DS"],
                additional: true
            },
            {
                name: "Prilep",
                producers: ["Vitaminka"],
                additional: true
            },
            {
                name: "Kikinda",
                producers: ["Multipak", "Jaffa Banini"],
                additional: true
            },
            {
                name: "Ilidza",
                producers: ["M.E.S.A Internacional"],
                additional: true
            },
            {
                name: "Vranje",
                producers: ["Amoretti", "Eltekon"],
                additional: true
            },
            {
                name: "Bečej",
                producers: ["Almondo"],
                additional: true
            },
            {
                name: "Požega",
                producers: ["Zvečevo"],
                additional: true
            },
            {
                name: "Loznica",
                producers: ["Nelly"],
                additional: true
            },
            {
                name: "Kruševac",
                producers: ["BG produkt", "Chocoline", "Flory"],
                additional: true
            },
            {
                name: "Prijepolje",
                producers: ["Ćatić Company-Waltz Cream"],
                additional: true
            },
            {
                name: "Subotica",
                producers: ["Pionir", "Magnat"],
                additional: true
            },
            {
                name: "Vrbas",
                producers: ["Medela"],
                additional: true
            },
            {
                name: "Požarevac",
                producers: ["Bambi"],
                additional: true
            },
            {
                name: "Istanbul",
                producers: ["Asya Chocolate"],
                additional: true
            },
            {
                name: "Bijeljina",
                producers: ["Produkt"],
                additional: true
            },
            {
                name: "Sarajevo",
                producers: ["Spanish market"],
                additional: true
            },
            {
                name: "Frankfurt",
                producers: ["Bak Tec"],
                additional: true
            },
            {
                name: "Crvenka",
                producers: ["Jaffa"],
                additional: true
            },
            {
                name: "Kragujevac",
                producers: ["Galija"],
                additional: true
            },
            {
                name: "Leskovac",
                producers: ["Sanjeli"],
                additional: true
            },
            {
                name: "Split",
                producers: ["Panex"],
                additional: true
            },
            {
                name: "Podgorica",
                producers: ["Falcon Nova"],
                additional: true
            },
            {
                name: "Varoš",
                producers: ["Trgovina Avdić"],
                additional: true
            },
            {
                name: "Šabac",
                producers: ["Candy Rush"],
                additional: true
            },
            {
                name: "Vukovar",
                producers: ["Vasiljev"],
                additional: true
            },
            {
                name: "Bačko Petrovo selo",
                producers: ["sweetsystem"],
                additional: true
            },
            {
                name: "Vršac",
                producers: ["Banat"],
                additional: true
            },
              {
                name: "Trebinje",
                producers: ["Swisslion RDT"],
                additional: true
            },
            {
                name: "Nova pazova",
                producers: ["Konlid"],
                additional: true
            }
        ];

        // Funkcija za kreiranje elementa grada
        function createCityElement(city) {
            const cityElement = document.createElement('div');
            cityElement.className = `city-item ${city.additional ? 'additional-city' : ''}`;
            
            const cityName = document.createElement('div');
            cityName.className = 'city-name';
            cityName.textContent = city.name;
            
            cityElement.appendChild(cityName);
            
            if (city.producers.length > 0) {
                const producersList = document.createElement('div');
                producersList.className = 'producers-list';
                
                city.producers.forEach(producer => {
                    const producerElement = document.createElement('div');
                    producerElement.className = 'producer';
                    producerElement.textContent = producer;
                    producersList.appendChild(producerElement);
                });
                
                cityElement.appendChild(producersList);
            } else {
                const noProducer = document.createElement('div');
                noProducer.className = 'no-producer';
                noProducer.textContent = "Nema proizvođača na listi";
                cityElement.appendChild(noProducer);
            }
            
            return cityElement;
        }

        // Prikaz gradova
        const cityList = document.getElementById('cityList');
        citiesData.forEach(city => {
            cityList.appendChild(createCityElement(city));
        });

        // Dugme za prikaz/skrivanje dodatnih gradova
        const toggleBtn = document.getElementById('toggleBtn');
        toggleBtn.addEventListener('click', function() {
            cityList.classList.toggle('show-all');
            
            if (cityList.classList.contains('show-all')) {
                toggleBtn.textContent = 'Sakrij dodatne gradove';
            } else {
                toggleBtn.textContent = 'Prikaži sve gradove';
            }
        });