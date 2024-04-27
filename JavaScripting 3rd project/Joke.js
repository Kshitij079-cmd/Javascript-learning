let jokesList = [
    {
        "error": false,
        "amount": 10,
        "jokes": [
            {
                "category": "Misc",
                "type": "single",
                "joke": "My husband and I were happy for 20 years. And then we met.",
                "flags": {
                    "nsfw": false,
                    "religious": false,
                    "political": false,
                    "racist": false,
                    "sexist": false,
                    "explicit": false
                },
                "safe": true,
                "id": 273,
                "lang": "en"
            },
            {
                "category": "Dark",
                "type": "single",
                "joke": "I hate double standards. Burn a body at a crematorium, you're \"being a respectful friend.\" Do it at home and you're \"destroying evidence.\"",
                "flags": {
                    "nsfw": false,
                    "religious": false,
                    "political": false,
                    "racist": false,
                    "sexist": false,
                    "explicit": true
                },
                "safe": false,
                "id": 274,
                "lang": "en"
            },
            {
                "category": "Misc",
                "type": "single",
                "joke": "Schrödinger's cat walks into a bar and doesn't.",
                "flags": {
                    "nsfw": false,
                    "religious": false,
                    "political": false,
                    "racist": false,
                    "sexist": false,
                    "explicit": false
                },
                "id": 197,
                "safe": true,
                "lang": "en"
            },
            {
                "category": "Dark",
                "type": "single",
                "joke": "Doctor: \"I have some news about your baby.\"\nParents: \"Don't tell us the gender, we want to keep it a surprise.\"\nDoctor: \"Oh I get it, you're those type of people. Okay, well IT is not breathing.\"",
                "flags": {
                    "nsfw": false,
                    "religious": false,
                    "political": false,
                    "racist": false,
                    "sexist": false,
                    "explicit": false
                },
                "id": 138,
                "safe": false,
                "lang": "en"
            },
            {
                "category": "Misc",
                "type": "single",
                "joke": "In Soviet Russia, gay sex gets you arrested. In America, getting arrested gets you gay sex.",
                "flags": {
                    "nsfw": true,
                    "religious": false,
                    "political": false,
                    "racist": false,
                    "sexist": false,
                    "explicit": true
                },
                "safe": false,
                "id": 289,
                "lang": "en"
            },
            {
                "category": "Misc",
                "type": "single",
                "joke": "A perfectionist walked into a bar... apparently, the bar was not set high enough.",
                "flags": {
                    "nsfw": false,
                    "religious": false,
                    "political": false,
                    "racist": false,
                    "sexist": false,
                    "explicit": false
                },
                "safe": true,
                "id": 288,
                "lang": "en"
            },
            {
                "category": "Dark",
                "type": "single",
                "joke": "Dark humor is like food, not everyone gets it.",
                "flags": {
                    "nsfw": false,
                    "religious": false,
                    "political": false,
                    "racist": true,
                    "sexist": false,
                    "explicit": true
                },
                "id": 162,
                "safe": false,
                "lang": "en"
            },
            {
                "category": "Misc",
                "type": "single",
                "joke": "A neutron walks into a bar and asks for a price on a drink.\nThe barkeeper says: \"For you... no charge!\"",
                "flags": {
                    "nsfw": false,
                    "religious": false,
                    "political": false,
                    "racist": false,
                    "sexist": false,
                    "explicit": false
                },
                "id": 73,
                "safe": true,
                "lang": "en"
            },
            {
                "category": "Dark",
                "type": "single",
                "joke": "Hey girl are you a school? Because I want to shoot some kids up inside of you.",
                "flags": {
                    "nsfw": true,
                    "religious": false,
                    "political": false,
                    "racist": false,
                    "sexist": false,
                    "explicit": true
                },
                "safe": false,
                "id": 269,
                "lang": "en"
            },
            {
                "category": "Dark",
                "type": "single",
                "joke": "I was going to tell a dead baby joke. But I decided to abort.",
                "flags": {
                    "nsfw": false,
                    "religious": false,
                    "political": false,
                    "racist": false,
                    "sexist": false,
                    "explicit": true
                },
                "id": 207,
                "safe": false,
                "lang": "en"
            }
        ]
    }
]
let index 
let joke 
let jokeend = -1
index= Math.floor(Math.random() * jokesList[0].jokes.length);
joke = jokesList[0].jokes[index].joke;


document.getElementById("Jokes").innerHTML = joke;

// function GenerateNewJoke() {
//     if (jokeend != -1) {
//         randomJokeGenerator()
//     } else {
//         alert("Generate a joke first")
//     }
    
// }