// Write a program to display one result card of 100 students
// with their name and percentage
// Out of 100 students, 50 has subjects - Grammer and Accounts
// and other 50 has subjects -  Grammer and Physics

// Hint : You need to calculate percentage of 100 students having different set of subjects.
//        You can assume their scores on their respective subjects.


// Write your code here

const reportCard = () => {
    const data = [
        {
            Name: 'Karan',
            subjects: {
                Grammer: '80',
                Accounts: '80'
            }
        },
        {
            Name: 'Arjun',
            subjects: {
                Grammer: '90',
                Accounts: '80'
            }
        },
        {
            Name: 'Manas',
            subjects: {
                Grammer: '80',
                Accounts: '80'
            }
        },
        {
            Name: 'Rishabh',
            subjects: {
                Grammer: '80',
                Accounts: '85'
            }
        },
        {
            Name: 'Akshit',
            subjects: {
                Grammer: '70',
                Accounts: '80'
            }
        },
        {
            Name: 'Mayank',
            subjects: {
                Grammer: '90',
                Accounts: '80'
            }
        },
        {
            Name: 'Deepak',
            subjects: {
                Grammer: '70',
                Accounts: '80'
            }
        },
        {
            Name: 'Prince',
            subjects: {
                Grammer: '80',
                Accounts: '85'
            }
        },
        {
            Name: 'Rahul',
            subjects: {
                Grammer: '80',
                Accounts: '80'
            }
        },
        {
            Name: 'Rama',
            subjects: {
                Grammer: '90',
                Accounts: '80'
            }
        },
        {
            Name: 'Rohan',
            subjects: {
                Grammer: '70',
                Accounts: '80'
            }
        },
        {
            Name: 'Rishi',
            subjects: {
                Grammer: '80',
                Accounts: '80'
            }
        },
        {
            Name: 'Geeta',
            subjects: {
                Grammer: '80',
                Accounts: '80'
            }
        },
        {
            Name: 'Manya',
            subjects: {
                Grammer: '80',
                Accounts: '85'
            }
        },
        {
            Name: 'Geetanjali',
            subjects: {
                Grammer: '80',
                Accounts: '85'
            }
        },
        {
            Name: 'Himank',
            subjects: {
                Grammer: '70',
                Accounts: '80'
            }
        },
        {
            Name: 'Raushan',
            subjects: {
                Grammer: '90',
                Accounts: '80'
            }
        },
        {
            Name: 'Deepanshu',
            subjects: {
                Grammer: '80',
                Accounts: '85'
            }
        },
        {
            Name: 'Shaunak',
            subjects: {
                Grammer: '70',
                Accounts: '80'
            }
        },
        {
            Name: 'Raja',
            subjects: {
                Grammer: '80',
                Accounts: '80'
            }
        },
        {
            Name: 'Rafiq',
            subjects: {
                Grammer: '80',
                Accounts: '80'
            }
        },
        {
            Name: 'Ananya',
            subjects: {
                Grammer: '70',
                Accounts: '80'
            }
        },
        {
            Name: 'Deepika',
            subjects: {
                Grammer: '80',
                Accounts: '85'
            }
        },
        {
            Name: 'Deepa',
            subjects: {
                Grammer: '90',
                Accounts: '80'
            }
        },
        {
            Name: 'Priyanka',
            subjects: {
                Grammer: '80',
                Accounts: '80'
            }
        },
        {
            Name: 'Priya',
            subjects: {
                Grammer: '80',
                Accounts: '80'
            }
        },
        {
            Name: 'Charu',
            subjects: {
                Grammer: '70',
                Accounts: '80'
            }
        },
        {
            Name: 'Chetna',
            subjects: {
                Grammer: '80',
                Accounts: '80'
            }
        },
        {
            Name: 'Ramnaresh',
            subjects: {
                Grammer: '90',
                Accounts: '80'
            }
        },
        {
            Name: 'Naresh',
            subjects: {
                Grammer: '70',
                Accounts: '85'
            }
        },
        {
            Name: 'Deepika',
            subjects: {
                Grammer: '80',
                Accounts: '80'
            }
        },
        {
            Name: 'Deepali',
            subjects: {
                Grammer: '90',
                Accounts: '80'
            }
        },
        {
            Name: 'Purushottam',
            subjects: {
                Grammer: '80',
                Accounts: '80'
            }
        },
        {
            Name: 'Kaushtabh',
            subjects: {
                Grammer: '70',
                Accounts: '85'
            }
        },
        {
            Name: 'Shashank',
            subjects: {
                Grammer: '80',
                Accounts: '80'
            }
        },
        {
            Name: 'Akshay',
            subjects: {
                Grammer: '70',
                Accounts: '80'
            }
        },
        {
            Name: 'Dolar',
            subjects: {
                Grammer: '90',
                Accounts: '80'
            }
        },
        {
            Name: 'Rohit',
            subjects: {
                Grammer: '70',
                Accounts: '80'
            }
        },
        {
            Name: 'Vicky',
            subjects: {
                Grammer: '80',
                Accounts: '80'
            }
        },
        {
            Name: 'Deepanshi',
            subjects: {
                Grammer: '80',
                Accounts: '80'
            }
        },
        {
            Name: 'Mihir',
            subjects: {
                Grammer: '90',
                Accounts: '80'
            }
        },
        {
            Name: 'Neha',
            subjects: {
                Grammer: '70',
                Accounts: '80'
            }
        },
        {
            Name: 'Rupali',
            subjects: {
                Grammer: '80',
                Accounts: '85'
            }
        },
        {
            Name: 'Ramya',
            subjects: {
                Grammer: '90',
                Accounts: '70'
            }
        },
        {
            Name: 'Sonu',
            subjects: {
                Grammer: '80',
                Accounts: '80'
            }
        },
        {
            Name: 'Meenu',
            subjects: {
                Grammer: '80',
                Accounts: '80'
            }
        },
        {
            Name: 'Liam',
            subjects: {
                Grammer: '90',
                Accounts: '70'
            }
        },
        {
            Name: 'Noah',
            subjects: {
                Grammer: '80',
                Accounts: '85'
            }
        },
        {
            Name: 'Oliver',
            subjects: {
                Grammer: '80',
                Accounts: '80'
            }
        },
        {
            Name: 'Elijah',
            subjects: {
                Grammer: '80',
                Accounts: '70'
            }
        },
        {
            Name: 'William',
            subjects: {
                Grammer: '80',
                Physics: '70'
            }
        },
        {
            Name: 'James',
            subjects: {
                Grammer: '90',
                Physics: '70'
            }
        },
        {
            Name: 'Benjamin',
            subjects: {
                Grammer: '70',
                Physics: '85'
            }
        },
        {
            Name: 'Lucas',
            subjects: {
                Grammer: '80',
                Physics: '70'
            }
        },
        {
            Name: 'Henry',
            subjects: {
                Grammer: '80',
                Physics: '70'
            }
        },
        {
            Name: 'Alexander',
            subjects: {
                Grammer: '80',
                Physics: '70'
            }
        },
        {
            Name: 'Olivia',
            subjects: {
                Grammer: '90',
                Physics: '70'
            }
        },
        {
            Name: 'Emma',
            subjects: {
                Grammer: '80',
                Physics: '70'
            }
        },
        {
            Name: 'Ava',
            subjects: {
                Grammer: '80',
                Physics: '85'
            }
        },
        {
            Name: 'Charlotte',
            subjects: {
                Grammer: '90',
                Physics: '70'
            }
        },
        {
            Name: 'Sophia',
            subjects: {
                Grammer: '80',
                Physics: '70'
            }
        },
        {
            Name: 'Amelia',
            subjects: {
                Grammer: '80',
                Physics: '70'
            }
        },
        {
            Name: 'Isabella',
            subjects: {
                Grammer: '80',
                Physics: '70'
            }
        },
        {
            Name: 'Mia',
            subjects: {
                Grammer: '80',
                Physics: '60'
            }
        },
        {
            Name: 'Evelyn',
            subjects: {
                Grammer: '80',
                Physics: '85'
            }
        },
        {
            Name: 'Harper',
            subjects: {
                Grammer: '90',
                Physics: '70'
            }
        },
        {
            Name: 'Jude',
            subjects: {
                Grammer: '70',
                Physics: '70'
            }
        },
        {
            Name: 'Shia',
            subjects: {
                Grammer: '80',
                Physics: '85'
            }
        },
        {
            Name: 'Milo',
            subjects: {
                Grammer: '80',
                Physics: '70'
            }
        },
        {
            Name: 'Leilani',
            subjects: {
                Grammer: '80',
                Physics: '70'
            }
        },
        {
            Name: 'Atlas',
            subjects: {
                Grammer: '90',
                Physics: '70'
            }
        },
        {
            Name: 'Millie',
            subjects: {
                Grammer: '80',
                Physics: '85'
            }
        },
        {
            Name: 'Urban',
            subjects: {
                Grammer: '80',
                Physics: '70'
            }
        },
        {
            Name: 'Kayla',
            subjects: {
                Grammer: '80',
                Physics: '70'
            }
        },
        {
            Name: 'Ian',
            subjects: {
                Grammer: '90',
                Physics: '60'
            }
        },
        {
            Name: 'Bailey',
            subjects: {
                Grammer: '80',
                Physics: '70'
            }
        },
        {
            Name: 'Blake',
            subjects: {
                Grammer: '80',
                Physics: '85'
            }
        },
        {
            Name: 'Ira',
            subjects: {
                Grammer: '80',
                Physics: '70'
            }
        },
        {
            Name: 'Sydney',
            subjects: {
                Grammer: '80',
                Physics: '70'
            }
        },
        {
            Name: 'Skylar',
            subjects: {
                Grammer: '80',
                Physics: '70'
            }
        },
        {
            Name: 'Marie',
            subjects: {
                Grammer: '90',
                Physics: '70'
            }
        },
        {
            Name: 'Brianna',
            subjects: {
                Grammer: '80',
                Physics: '60'
            }
        },
        {
            Name: 'Brielle',
            subjects: {
                Grammer: '80',
                Physics: '70'
            }
        },
        {
            Name: 'Hudson',
            subjects: {
                Grammer: '80',
                Physics: '85'
            }
        },
        {
            Name: 'Kian',
            subjects: {
                Grammer: '80',
                Physics: '70'
            }
        },
        {
            Name: 'Charlie',
            subjects: {
                Grammer: '80',
                Physics: '70'
            }
        },
        {
            Name: 'Mateo',
            subjects: {
                Grammer: '80',
                Physics: '60'
            }
        },
        {
            Name: 'Krya',
            subjects: {
                Grammer: '80',
                Physics: '90'
            }
        },
        {
            Name: 'Zoe',
            subjects: {
                Grammer: '80',
                Physics: '85'
            }
        },
        {
            Name: 'Rae',
            subjects: {
                Grammer: '80',
                Physics: '70'
            }
        },
        {
            Name: 'Mina',
            subjects: {
                Grammer: '80',
                Physics: '70'
            }
        },
        {
            Name: 'Sean',
            subjects: {
                Grammer: '80',
                Physics: '70'
            }
        },
        {
            Name: 'Asa',
            subjects: {
                Grammer: '80',
                Physics: '85'
            }
        },
        {
            Name: 'Aliana',
            subjects: {
                Grammer: '80',
                Physics: '70'
            }
        },
        {
            Name: 'Ava',
            subjects: {
                Grammer: '90',
                Physics: '70'
            }
        },
        {
            Name: 'Myra',
            subjects: {
                Grammer: '80',
                Physics: '85'
            }
        },
        {
            Name: 'Evie',
            subjects: {
                Grammer: '80',
                Physics: '85'
            }
        },
        {
            Name: 'Elise',
            subjects: {
                Grammer: '80',
                Physics: '70'
            }
        },
        {
            Name: 'Louise',
            subjects: {
                Grammer: '80',
                Physics: '85'
            }
        },
        {
            Name: 'Alyssa',
            subjects: {
                Grammer: '90',
                Physics: '70'
            }
        },

    ]
    data.forEach((item)=>{
            if(item.subjects.Accounts){
                let percentage = (Number(item.subjects.Accounts) + Number(item.subjects.Grammer))/2;
                console.log("Name: "+item.Name+",Percentage: "+percentage);
            }else if(item.subjects.Physics){
                let percentage = (Number(item.subjects.Physics) + Number(item.subjects.Grammer))/2;
                console.log("Name: "+item.Name+",Percentage: "+percentage);
            }
    }) 
}

reportCard();