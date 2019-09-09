// crear los años
const years = document.createElement('option');
const  max = new Date().getFullYear();
let  min = max - 10;

for(let i = max; i >  min; i--) {
    let option =  document.createElement('option');
    option.value = i;
    option.innerText = i;
    document.querySelector('#year').appendChild(option);
}

function getAutos() {
    return [
        {
            brand: 'BMW',
            model: 'Serie 3',
            year: 2012,
            price: 30000,
            doors: 4,
            color: 'Blanco',
            transmission: 'automatico'
        },
        { brand: 'Audi', model: 'A4', year: 2018, price: 40000, doors: 4, color: 'Negro', transmission: 'automatico' },
        {
            brand: 'Ford',
            model: 'Mustang',
            year: 2015,
            price: 20000,
            doors: 2,
            color: 'Blanco',
            transmission: 'automatico'
        },
        { brand: 'Audi', model: 'A6', year: 2010, price: 35000, doors: 4, color: 'Negro', transmission: 'automatico' },
        {
            brand: 'BMW',
            model: 'Serie 5',
            year: 2016,
            price: 70000,
            doors: 4,
            color: 'Rojo',
            transmission: 'automatico'
        },
        {
            brand: 'Mercedes Benz',
            model: 'Clase C',
            year: 2015,
            price: 25000,
            doors: 4,
            color: 'Blanco',
            transmission: 'automatico'
        },
        {
            brand: 'Chevrolet',
            model: 'Camaro',
            year: 2018,
            price: 60000,
            doors: 2,
            color: 'Rojo',
            transmission: 'manual'
        },
        { brand: 'Ford', model: 'Mustang', year: 2019, price: 80000, doors: 2, color: 'Rojo', transmission: 'manual' },
        {
            brand: 'Dodge',
            model: 'Challenger',
            year: 2017,
            price: 40000,
            doors: 4,
            color: 'Blanco',
            transmission: 'automatico'
        },
        { brand: 'Audi', model: 'A3', year: 2017, price: 55000, doors: 2, color: 'Negro', transmission: 'manual' },
        {
            brand: 'Dodge',
            model: 'Challenger',
            year: 2012,
            price: 25000,
            doors: 2,
            color: 'Rojo',
            transmission: 'manual'
        },
        {
            brand: 'Mercedes Benz',
            model: 'Clase C',
            year: 2018,
            price: 45000,
            doors: 4,
            color: 'Azul',
            transmission: 'automatico'
        },
        {
            brand: 'BMW',
            model: 'Serie 5',
            year: 2019,
            price: 90000,
            doors: 4,
            color: 'Blanco',
            transmission: 'automatico'
        },
        { brand: 'Ford', model: 'Mustang', year: 2017, price: 60000, doors: 2, color: 'Negro', transmission: 'manual' },
        {
            brand: 'Dodge',
            model: 'Challenger',
            year: 2015,
            price: 35000,
            doors: 2,
            color: 'Azul',
            transmission: 'automatico'
        },
        {
            brand: 'BMW',
            model: 'Serie 3',
            year: 2018,
            price: 50000,
            doors: 4,
            color: 'Blanco',
            transmission: 'automatico'
        },
        {
            brand: 'BMW',
            model: 'Serie 5',
            year: 2017,
            price: 80000,
            doors: 4,
            color: 'Negro',
            transmission: 'automatico'
        },
        {
            brand: 'Mercedes Benz',
            model: 'Clase C',
            year: 2018,
            price: 40000,
            doors: 4,
            color: 'Blanco',
            transmission: 'automatico'
        },
        { brand: 'Audi', model: 'A4', year: 2016, price: 30000, doors: 4, color: 'Azul', transmission: 'automatico' }    
    ]
}


// Event listener
let dataSearch = {
    brand: '',
    year: '',
    minimum: '',
    maximum: '',
    doors: '',
    transmission: '',
    color: ''
}


// Event listener DOM Loaded
const autos = getAutos()
document.addEventListener('DOMContentLoaded', () => {
    showAutos(autos)
})


// Event listeners for form
const brand = document.querySelector('#brand')
brand.addEventListener('input', e => {
    dataSearch.brand = e.target.value
    // Call Auto filter function
    filterAuto()
})

const year = document.querySelector('#year')
year.addEventListener('input', e => {
    dataSearch.year = Number(e.target.value)
    // Call Auto filter function
    filterAuto()
})

const minimum = document.querySelector('#min')
minimum.addEventListener('input', e => {
    dataSearch.minimum = Number(e.target.value)
    // Call Auto filter function
    filterAuto()
})

const maximum = document.querySelector('#max')
maximum.addEventListener('input', e => {
    dataSearch.maximum = Number(e.target.value)
    // Call Auto filter function
    filterAuto()
})

const doors = document.querySelector('#doors')
doors.addEventListener('input', e => {
    dataSearch.doors = Number(e.target.value)
    // Call Auto filter function
    filterAuto()
})

const transmission = document.querySelector('#transmission')
transmission.addEventListener('input', e => {
    dataSearch.transmission = e.target.value
    // Call Auto filter function
    filterAuto()
})



function showAutos(autos) {
    // Read result
    const container = document.querySelector('#result')

    // Clean last results
    while(container.firstChild) {
        container.removeChild(container.firstChild)
    }

    // Create HTMl for autos
    autos.forEach((auto) => {
        const autoHTML = document.createElement('p')
        autoHTML.innerHTML = `
            <p>${auto.brand} - ${auto.year} - ${auto.doors} doors - Transmisión: ${auto.transmission} - price: ${auto.price} - Color: ${auto.color}</p>
        `
        container.appendChild(autoHTML)
    });
}


function filterAuto() {
    const result = getAutos().filter(filterBrand).filter(filterYear).filter(filterMin).filter(filterMax).filter(filterDoors).filter(filterTransmission)
    if(result.length) {
        showAutos(result)
    } else {
        alert('No hay resultados')
    }
}

function filterBrand(auto) {
    if(dataSearch.brand) {
        return auto.brand === dataSearch.brand
    }  else {
        return auto
    }
}

function filterYear(auto) {
    if(dataSearch.year) {
        return auto.year === dataSearch.year
    }  else {
        return auto
    }
}

function filterMin(auto) {
    if(dataSearch.minimum) {
        return auto.price >= dataSearch.minimum
    }  else {
        return auto
    }
}

function filterMax(auto) {
    if(dataSearch.maximum) {
        return auto.price <= dataSearch.maximum
    }  else {
        return auto
    }
}

function filterDoors(auto) {
    if(dataSearch.doors) {
        return auto.doors = dataSearch.doors
    }  else {
        return auto
    }
}

function filterTransmission(auto) {
    if(dataSearch.transmission) {
        return auto.transmission = dataSearch.transmission
    }  else {
        return auto
    }
}