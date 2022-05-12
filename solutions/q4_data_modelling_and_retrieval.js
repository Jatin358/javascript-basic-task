// Create a list of fruits with their properties (name, color, pricePerKg)
// and convert it into a format so that for a given fruit name
// retrieval of its color and pricePerKg value is fast


// Write your code here

const fruitData = (param) =>{
    const fruits = {
        'Banana': {
            name: 'Banana',
            color: 'yellow',
            pricePerKg: '60',
        },
        'Orange': {
            name: 'Orange',
            color: 'orange',
            pricePerKg: '80'
        },
        'Cheeku': {
            name: 'Cheeku',
            color: 'brown',
            pricePerKg: '200'
        },
        'Jackfruit': {
            name: 'Jackfruit',
            color: 'greenBrown',
            pricePerKg: '180'
        },
        'Mango': {
            name: 'Mango',
            color: 'orange',
            pricePerKg: '120'
        },
        'Litchi': {
            name: 'Litchi',
            color: 'Red',
            pricePerKg: '180'
        },
        'Apple': {
            name: 'Apple',
            color: 'Red',
            pricePerKg: '200'
        },
        'Kenu': {
            name: 'Kenu',
            color: 'Orange',
            pricePerKg: '100'
        },
        'Papaya': {
            name: 'Papaya',
            color: 'Orange',
            pricePerKg: '160'
        },
        'Grapes': {
            name: 'Grapes',
            color: 'Green',
            pricePerKg: '140'
        },
    }

    Object.entries(fruits).map(item => {
        // console.log(item);
        if(item[0]== param){
            console.log('Color: '+ item[1].color +', Price Per Kg: '+ item[1].pricePerKg);
            return item[1];
        }
    })
   
    
}

fruitData('Orange');


