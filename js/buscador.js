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
    min: '',
    max: '',
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

    // Auto filter
    filterAuto()
})


function showAutos(autos) {

    // Read result
    const container = document.querySelector('#result')
    autos.forEach((auto) => {
        const autoHTML = document.createElement('p')
        autoHTML.innerHTML = `
            <p>${auto.brand} - ${auto.year} - ${auto.doors} doors - Transmisión: ${auto.transmission} - price: ${auto.price} - Color: ${auto.color}</p>
        `
        container.appendChild(autoHTML)
    });
}


function filterAuto() {
    const result = getAutos().filter(filterBrand)
    console.log(result)
}

function filterBrand(auto) {
    if(dataSearch.brand) {
        return auto.brand === dataSearch.brand
    }  else {

    }
}