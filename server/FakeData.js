const UserList = [
    {
        id: 1,
        name: "Shikha",
        username: "shikha",
        age: 21,
        nationality: "INDIA"
    },
    {
        id: 2,
        name: "Suman",
        username: "suman",
        age: 20,
        nationality: "CANADA"
    },
    {
        id: 3,
        name: "Saurabh",
        username: "sky_shan",
        age: 21,
        nationality: "CHILE",
        friends: [
            {
                id: 1,
                name: "Shikha",
                username: "shikha",
                age: 21,
                nationality: "INDIA"
            },
            {
                id: 2,
                name: "Suman",
                username: "suman",
                age: 20,
                nationality: "CANADA"
            },
        ]
    },
    {
        id: 4,
        name: "Sakshi",
        username: "yo_sakshi",
        age: 25,
        nationality: "BRAZIL",
        friends: [
            {
                id: 1,
                name: "Shikha",
                username: "shikha",
                age: 21,
                nationality: "INDIA"
            },
        ]
    },
];

const MovieList = [
    {
        id: 1,
        name: "Avengers Endgame",
        yearOfPublication: 2019,
        isInTheaters: true
    },
    {
        id: 2,
        name: "Interstellar",
        yearOfPublication: 2007,
        isInTheaters: true
    },
    {
        id: 3,
        name: "Superbad",
        yearOfPublication: 2019,
        isInTheaters: true
    },
    {
        id: 4,
        name: "PedroTech The Movie",
        yearOfPublication: 2035,
        isInTheaters: false
    }


];

module.exports = {UserList, MovieList}