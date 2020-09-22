const mongoose = require('mongoose')

const { Schema } = mongoose

const userModel = new Schema({
    id: { type: String },
    index: { type: Number },
    guid: { type: String },
    isActive: { type: Boolean },
    balance: { type: String },
    picture: { type: String },
    age: { type: Number },
    eyeColor: { type: String },
    name: {
        first: { type: String },
        last: { type: String }
      },
    company: { type: String },
      “email”: “stewart.jenkins@geostele.name”,
      “phone”: “+1 (836) 511-3876”,
      “address”: “815 Clinton Avenue, Adelino, Vermont, 5452",
      “about”: “Aliqua voluptate id Lorem incididunt exercitation tempor occaecat adipisicing mollit labore eu nisi. Ullamco ad minim irure anim exercitation Lorem esse magna aute qui nostrud occaecat. Voluptate commodo reprehenderit sunt velit sint ex labore aliquip amet voluptate laborum.“,
      “registered”: “Friday, May 15, 2015 3:02 PM”,
      “latitude”: “36.959582",
      “longitude”: “-95.962713",
      “tags”: [
        “nostrud”,
        “Lorem”,
        “consequat”,
        “nulla”,
        “irure”
      ],
      “range”: [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ],
      “friends”: [
        {
          “id”: 0,
          “name”: “Marcella Callahan”
        },
        {
          “id”: 1,
          “name”: “Nicole Price”
        },
        {
          “id”: 2,
          “name”: “Chang Dorsey”
        }
      ],
      “greeting”: “Hello, Stewart! You have 7 unread messages.“,
      “favoriteFruit”: “banana”
    },
    {
      “_id”: “5f44c4ec6632746178090c84",
      “index”: 1,
      “guid”: “0766f727-9808-4d27-8e40-f4488505d404”,
      “isActive”: true,
      “balance”: “$3,162.56",
      “picture”: “http://placehold.it/32x32”,
      “age”: 35,
      “eyeColor”: “green”,
      “name”: {
        “first”: “Dorothea”,
        “last”: “Joyner”
      },
      “company”: “CHORIZON”,
      “email”: “dorothea.joyner@chorizon.com”,
      “phone”: “+1 (922) 492-3892”,
      “address”: “818 Ferris Street, Blanford, Idaho, 1336",
      “about”: “Occaecat proident eiusmod ipsum occaecat. Aliquip qui in Lorem aute ut ipsum proident. Enim proident nisi consectetur do Lorem id eu sit ex laborum. Commodo magna dolor tempor eiusmod cillum id tempor nulla deserunt ipsum occaecat laboris ipsum. Consequat Lorem veniam nulla est elit dolor eiusmod qui ipsum. Proident sunt eu id minim officia elit eiusmod commodo veniam occaecat. Exercitation minim ea veniam excepteur in.“,
      “registered”: “Friday, March 30, 2018 10:28 AM”,
      “latitude”: “60.060723",
      “longitude”: “42.371589",
      “tags”: [
        “in”,
        “ipsum”,
        “culpa”,
        “culpa”,
        “fugiat”
      ],
      “range”: [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ],
      “friends”: [
        {
          “id”: 0,
          “name”: “Tiffany Love”
        },
        {
          “id”: 1,
          “name”: “Hewitt Eaton”
        },
        {
          “id”: 2,
          “name”: “Vanessa Wyatt”
        }
      ],
      “greeting”: “Hello, Dorothea! You have 6 unread messages.“,
      “favoriteFruit”: “apple”
    },
    {
      “_id”: “5f44c4ec2871c3cb9364dd75",
      “index”: 2,
      “guid”: “ec79ca7d-41ea-4d3d-9c34-5fa78bd4bbe7”,
      “isActive”: false,
      “balance”: “$3,236.96",
      “picture”: “http://placehold.it/32x32”,
      “age”: 36,
      “eyeColor”: “green”,
      “name”: {
        “first”: “Stevenson”,
        “last”: “Ortega”
      },
      “company”: “MULTIFLEX”,
      “email”: “stevenson.ortega@multiflex.io”,
      “phone”: “+1 (831) 427-2962”,
      “address”: “198 Love Lane, Diaperville, Kentucky, 1222",
      “about”: “Aliqua reprehenderit velit irure voluptate dolor esse labore elit aute esse esse. Aliquip ad proident occaecat anim voluptate eiusmod. Labore in irure Lorem velit officia magna. Proident veniam eiusmod exercitation id mollit incididunt veniam aliqua mollit nulla qui culpa anim. Aliquip est adipisicing ut qui mollit dolor occaecat ea velit velit excepteur ullamco. Duis voluptate ut aute culpa deserunt aliquip reprehenderit eu aliquip sit sint eiusmod et nostrud. Eiusmod esse ut aliquip ipsum elit.“,
      “registered”: “Tuesday, February 23, 2016 5:59 AM”,
      “latitude”: “-77.496338",
      “longitude”: “111.031896",
      “tags”: [
        “amet”,
        “amet”,
        “enim”,
        “elit”,
        “incididunt”
      ],
      “range”: [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ],
      “friends”: [
        {
          “id”: 0,
          “name”: “Roberta Golden”
        },
        {
          “id”: 1,
          “name”: “Mcdonald Moses”
        },
        {
          “id”: 2,
          “name”: “Haley Leon”
        }
      ],
      “greeting”: “Hello, Stevenson! You have 8 unread messages.“,
      “favoriteFruit”: “apple”
    },
    {
      “_id”: “5f44c4ec78fd474d8c7404f7",
      “index”: 3,
      “guid”: “98d4146c-3fb2-4651-8cda-5872e8ac1487”,
      “isActive”: true,
      “balance”: “$1,065.39",
      “picture”: “http://placehold.it/32x32”,
      “age”: 28,
      “eyeColor”: “brown”,
      “name”: {
        “first”: “Norton”,
        “last”: “Morin”
      },
      “company”: “RENOVIZE”,
      “email”: “norton.morin@renovize.tv”,
      “phone”: “+1 (990) 517-2843”,
      “address”: “812 Forbell Street, Boonville, Massachusetts, 8191",
      “about”: “Cillum ullamco labore elit anim minim cupidatat qui adipisicing amet consectetur sint dolor magna. Eu aliquip fugiat mollit dolor. Do non ad cillum anim nostrud esse deserunt ad tempor magna ullamco cillum adipisicing incididunt. Proident excepteur ea quis Lorem do veniam. Do in cupidatat in adipisicing duis labore non officia aliquip.“,
      “registered”: “Tuesday, January 26, 2016 10:25 PM”,
      “latitude”: “43.84415",
      “longitude”: “-169.197548",
      “tags”: [
        “cillum”,
        “veniam”,
        “ad”,
        “dolor”,
        “et”
      ],
      “range”: [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ],
      “friends”: [
        {
          “id”: 0,
          “name”: “Mollie Gonzales”
        },
        {
          “id”: 1,
          “name”: “Pugh Serrano”
        },
        {
          “id”: 2,
          “name”: “Stephanie Everett”
        }
      ],
      “greeting”: “Hello, Norton! You have 7 unread messages.“,
      “favoriteFruit”: “banana”
    },
    {
      “_id”: “5f44c4ec9714639c2d6fecc5",
      “index”: 4,
      “guid”: “ab9a6e08-1d1c-496e-9657-9858a97cb39d”,
      “isActive”: false,
      “balance”: “$2,860.53",
      “picture”: “http://placehold.it/32x32”,
      “age”: 31,
      “eyeColor”: “green”,
      “name”: {
        “first”: “Mcgee”,
        “last”: “Battle”
      },
      “company”: “STEELTAB”,
      “email”: “mcgee.battle@steeltab.co.uk”,
      “phone”: “+1 (888) 515-2587”,
      “address”: “918 Delevan Street, Dowling, New Mexico, 4017",
      “about”: “Consequat consectetur labore nulla amet ut est enim enim ullamco sint ut enim tempor. Ullamco commodo minim do exercitation dolore eu cillum veniam id ad minim occaecat amet. Minim irure quis amet commodo dolor.“,
      “registered”: “Thursday, April 19, 2018 5:26 PM”,
      “latitude”: “30.043803",
      “longitude”: “-147.165683",
      “tags”: [
        “adipisicing”,
        “culpa”,
        “adipisicing”,
        “id”,
        “veniam”
      ],
      “range”: [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ],
      “friends”: [
        {
          “id”: 0,
          “name”: “Jean Beasley”
        },
        {
          “id”: 1,
          “name”: “Susan Owens”
        },
        {
          “id”: 2,
          “name”: “Amie Carroll”
        }
      ],
      “greeting”: “Hello, Mcgee! You have 8 unread messages.“,
      “favoriteFruit”: “strawberry”
    },
    {
      “_id”: “5f44c4ece845617c74fa033f”,
      “index”: 5,
      “guid”: “0706f7e6-77b3-4ca9-9ad4-d41558753a42”,
      “isActive”: true,
      “balance”: “$2,551.08",
      “picture”: “http://placehold.it/32x32”,
      “age”: 28,
      “eyeColor”: “green”,
      “name”: {
        “first”: “Bird”,
        “last”: “Hoover”
      },
      “company”: “VITRICOMP”,
      “email”: “bird.hoover@vitricomp.info”,
      “phone”: “+1 (997) 527-2660”,
      “address”: “730 Dunne Court, Warren, Wisconsin, 4849",
      “about”: “Exercitation aliqua labore cupidatat consectetur do sint aliquip reprehenderit veniam dolor in ea tempor. Magna excepteur velit reprehenderit ea sint incididunt laborum aliquip elit consectetur sint consectetur. Mollit veniam veniam ipsum enim culpa amet ex ullamco duis dolor laborum sit. Ipsum deserunt nisi elit laboris commodo elit ex nisi ea. Aliquip ad nisi cillum tempor occaecat commodo laboris anim mollit exercitation. Exercitation ut id ullamco aute qui cillum irure ea anim ex pariatur consequat quis. Tempor ea mollit nisi sit pariatur nisi cillum elit nulla excepteur Lorem voluptate et nisi.“,
      “registered”: “Saturday, August 16, 2014 12:14 AM”,
      “latitude”: “-59.93872",
      “longitude”: “48.70284",
      “tags”: [
        “cillum”,
        “ut”,
        “sit”,
        “pariatur”,
        “ea”
      ],
      “range”: [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ],
      “friends”: [
        {
          “id”: 0,
          “name”: “Ollie Macdonald”
        },
        {
          “id”: 1,
          “name”: “Delacruz Pruitt”
        },
        {
          “id”: 2,
          “name”: “Soto Dickerson”
        }
      ],
      “greeting”: “Hello, Bird! You have 6 unread messages.“,
      “favoriteFruit”: “banana”
    }
  ]

  module.exports = mongoose.model('jsongenerator', heroModel);