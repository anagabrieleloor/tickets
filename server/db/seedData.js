//Arrays of objects based on schema design 

//Users
const users = [
    {
        first_name: 'Doralynn',
        last_name: 'Joslin',
        email: 'djoslin0@ox.ac.uk',
        password: 'kN6?3R,f',
        billing_address: 'Room 1383',
        payment_token: '1JYNPMcwHS1mAKT9h3xsCKsbwPtDX3p6N5',
        payment_verified: 'true'
    },
    {
        first_name: 'Shay',
        last_name: 'Battson',
        email: 'sbattson1@businesswire.com',
        password: 'fF7!$zu|PfBV.`)',
        billing_address: '5th Floor',
        payment_token: '19n97qWgs8RmPyrfKeBwjtGHBu5uQLSAZu',
        payment_verified: 'true'
    },
    {
        first_name: 'Jens',
        last_name: 'Penke',
        email: 'jpenke2@slideshare.net',
        password: '"lS9,fu4Vz%Z"',
        billing_address: 'Room 25',
        payment_token: '17wacqmysehkqj9XKEWu1GJViWbKhufeCa',
        payment_verified: 'true'
    },
    {
        first_name: 'Lester',
        last_name: 'Kensett',
        email: 'lkensett3@aol.com',
        password: 'pD8~$Xn/&N10j',
        billing_address: 'Apt 202',
        payment_token: '1AGo8mprpcrAE1AjWMCtVtpcW6GGvmH3Xt',
        payment_verified: 'true'
    },
    {
        first_name: 'Hanna',
        last_name: 'Birth',
        email: 'hbirth4@wordpress.com',
        password: 'pW2#`v4X',
        billing_address: '567 Maple Drive, Riverdale, NY 10471',
        payment_token: '1FDRUMpdRgBxuk8kUdqWmVbchKZVFkVGeM',
        payment_verified: 'true'
    },
    {
        first_name: 'Darsie',
        last_name: 'Bumpass',
        email: 'dbumpass5@e-recht24.de',
        password: 'uZ6>@lzIQ/0PR',
        billing_address: '890 Cedar Court, Lakeshore, FL 33579',
        payment_token: '1B81aMhBDbMxEbTn45crgrGa6D8kCtu2H1',
        payment_verified: 'true'
    },
    {
        first_name: 'Russ',
        last_name: 'Beesley',
        email: 'rbeesley6@chicagotribune.com',
        password: 'cF9%rnoUfs@',
        billing_address: '234 Birch Road, Sunset Beach, NC 28468',
        payment_token: '1ErNH9o2bZnhCT82HvcQAE5ACpsWB1zznL',
        payment_verified: 'true'
    },
    {
        first_name: 'Tracey',
        last_name: 'Fer',
        email: 'tfer7@trellian.com',
        password: '"cY1|QqJ,l"',
        billing_address: '876 Walnut Street, Clearwater, WA 98004',
        payment_token: '166dTmjqwYCx3kopicgzS4jherEDRmss7Z',
        payment_verified: 'true'
    },
    {
        first_name: 'Rik',
        last_name: 'McConville',
        email: 'rmcconville8@ucsd.edu',
        password: 'yG0!IYCWZejo',
        billing_address: '543 Spruce Avenue, Greenfield, MA 01301',
        payment_token: '1Nqt4MxxyiutYLAB9bijj2N7bgxMebB7ye',
        payment_verified: 'true'
    },

    {
        first_name: '',
        last_name: 'Crafts',
        email: 'scrafts9@kickstarter.com',
        password: 'yY6(UqWpy.',
        billing_address: '210 Ash Street, Woodland Hills, TX 76107',
        payment_token: '19rvPwJY9igu93zyqSPiF5S4FF6sqzDB65',
        payment_verified: 'true'
    },
]

//Tickets
const tickets = [
    {
        available: false,
        price: 41.13,
        resale: true,
        user_id: 1,
        event_id: 1
    }, {
        available: false,
        price: 75.07,
        resale: true,
        user_id: 2,
        event_id: 2
    }, {
        available: false,
        price: 97.64,
        resale: true,
        user_id: 3,
        event_id: 3
    }, {
        available: false,
        price: 41.27,
        resale: false,
        user_id: 4,
        event_id: 4
    }, {
        available: false,
        price: 61.76,
        resale: true,
        user_id: 5,
        event_id: 5
    }, {
        available: false,
        price: 15.84,
        resale: false,
        user_id: 6,
        event_id: 6
    }, {
        available: false,
        price: 29.13,
        resale: false,
        user_id: 7,
        event_id: 7
    }, {
        available: false,
        price: 50.5,
        resale: false,
        user_id: 8,
        event_id: 8
    }, {
        available: false,
        price: 91.62,
        resale: true,
        user_id: 9,
        event_id: 9
    }, {
        available: false,
        price: 95.5,
        resale: false,
        user_id: 10,
        event_id: 10
    }
]

// Events
const events = [
    {
        name: 'EDM Rave',
        artist: ['DJ Neon', 'Bass Drop', 'Electric Pulse'],
        description: 'EDM festival with laser light show',
        venue: 'Electric Arena',
        address: '123 Electric Ave, Neon City, NC 12345',
        datetime: '2023-09-19T20:00:00',
        category: ['Electronic'],
        organizer: 'Rave Productions',
        user_id: 1
    },
    {
        name: 'Metal Mayhem',
        artist: ['Metallica', 'Slayer', 'Iron Maiden'],
        description: 'Metal concert with headbanging music',
        venue: 'Metal Madness Arena',
        address: '456 Metal Blvd, Heavy Metal City, CA 67890',
        datetime: '2024-02-22T18:30:00',
        category: ['Metal'],
        organizer: 'Metal Works',
        user_id: 1
    },
    {
        name: 'Country Hoedown',
        artist: ['Luke Bryan', 'Carrie Underwood', 'Blake Shelton'],
        description: 'Country music festival with cowboy hats and line dancing',
        venue: 'Hoedown Ranch',
        address: '789 Country Rd, Boot Scootin\' Town, TX 54321',
        datetime: '2023-12-22T15:00:00',
        category: ['Country'],
        organizer: 'Hoedown Productions',
        user_id: 1
    },
    {
        name: 'Jazz Fusion Night',
        artist: ['Miles Davis', 'John Coltrane', 'Herbie Hancock'],
        description: 'Jazz music extravaganza with special guest appearances',
        venue: 'Jazz Lounge',
        address: '101 Smooth St, Jazztown, NY 67890',
        datetime: '2024-03-08T19:00:00',
        category: ['Jazz'],
        organizer: 'Smooth Jazz Entertainment',
        user_id: 1
    },
    {
        name: 'Classical Symphony Soiree',
        artist: ['Beethoven', 'Mozart', 'Bach'],
        description: 'Classical symphony orchestra performance',
        datetime: '2023-03-26T18:00:00',
        venue: 'Symphony Hall',
        address: '789 Classical Ave, Sonata City, CA 45678',
        category: ['Classical'],
        organizer: 'Symphony Society',
        user_id: 1
    },
    {
        name: 'Rock Fest',
        artist: ['Led Zeppelin', 'Queen', 'The Rolling Stones'],
        description: 'Rock concert with fireworks display',
        venue: 'Rock Arena',
        address: '321 Rock Rd, Guitar City, WA 89012',
        datetime: '2023-06-27T21:00:00',
        category: ['Rock'],
        organizer: 'Rock n Roll Productions',
        user_id: 1
    },
    {
        name: 'Reggae Beach Party',
        artist: ['Bob Marley', 'UB40', 'Jimmy Cliff'],
        description: 'Reggae music vibes on the beach',
        venue: 'Beachfront Stage',
        address: '456 Reggae Beach, Island Paradise, FL 23456',
        datetime: '2023-05-16T17:30:00',
        category: ['Reggae'],
        organizer: 'Island Beats',
        user_id: 1
    },
    {
        name: 'Indie Music Showcase',
        artist: ['Arctic Monkeys', 'The Strokes', 'Tame Impala'],
        description: 'Indie music showcase at a local cafe',
        venue: 'Indie Cafe',
        address: '789 Indie Blvd, Hipster Town, OR 34567',
        datetime: '2023-04-09T19:30:00',
        category: ['Indie'],
        organizer: 'Indie Vibes Productions',
        user_id: 1
    },
    {
        name: 'Symphonic Electronic Experience',
        artist: ['Daft Punk', 'Deadmau5', 'The Chemical Brothers'],
        description: 'Electronic music symphony with immersive visuals',
        venue: 'Electro Dome',
        address: '101 Electron St, Synth City, TX 56789',
        datetime: '2023-11-03T22:00:00',
        category: ['Electronic'],
        user_id: 1
    },
    {
        name: 'R&B Soul Night',
        artist: ['Marvin Gaye', 'Aretha Franklin', 'Stevie Wonder'],
        description: 'R&B soul music night with smooth beats',
        venue: 'Soul Lounge',
        address: '123 Soulful Ave, Groove City, GA 12345',
        datetime: '2023-08-14T20:30:00',
        category: ['R&B'],
        organizer: 'Soulful Sounds Events',
        user_id: 1
    }
];

module.exports = { users, tickets, events };