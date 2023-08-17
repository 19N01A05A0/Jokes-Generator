console.log("hello")
let arr=[
    
            {
                "category": "Programming",
                "type": "single",
                "joke": "Debugging: Removing the needles from the haystack.",
                "flags": {
                    "nsfw": false,
                    "religious": false,
                    "political": false,
                    "racist": false,
                    "sexist": false,
                    "explicit": false
                },
                "id": 40,
                "safe": true,
                "lang": "en"
            },
            {
                "category": "Programming",
                "type": "twopart",
                "joke": "Why did the programmer jump on the table?",
                "delivery": "Because debug was on his screen.",
                "flags": {
                    "nsfw": false,
                    "religious": false,
                    "political": false,
                    "racist": false,
                    "sexist": false,
                    "explicit": false
                },
                "id": 214,
                "safe": true,
                "lang": "en"
            },
            {
                "category": "Programming",
                "type": "single",
                "joke": "Knock knock.\nWho's there?\nRecursion.\nRecursion who?\nKnock knock.",
                "flags": {
                    "nsfw": false,
                    "religious": false,
                    "political": false,
                    "racist": false,
                    "sexist": false,
                    "explicit": false
                },
                "id": 180,
                "safe": true,
                "lang": "en"
            },
            {
                "category": "Programming",
                "type": "twopart",
                "joke": "Hey baby I wish your name was asynchronous...",
                "delivery": "... so you'd give me a callback.",
                "flags": {
                    "nsfw": false,
                    "religious": false,
                    "political": false,
                    "racist": false,
                    "sexist": false,
                    "explicit": false
                },
                "id": 54,
                "safe": true,
                "lang": "en"
            },
            {
                "category": "Programming",
                "type": "twopart",
                "joke": "Genders are a lot like booleans.",
                "delivery": "There's only two of them.",
                "flags": {
                    "nsfw": false,
                    "religious": false,
                    "political": false,
                    "racist": false,
                    "sexist": true,
                    "explicit": false
                },
                "id": 47,
                "safe": false,
                "lang": "en"
            },
            {
                "category": "Programming",
                "type": "single",
                "joke": "Being a self-taught developer is almost the same as being a cut neck chicken because you have no sense of direction in the beginning.",
                "flags": {
                    "nsfw": false,
                    "religious": false,
                    "political": false,
                    "racist": false,
                    "sexist": false,
                    "explicit": false
                },
                "id": 184,
                "safe": false,
                "lang": "en"
            },
            {
                "category": "Programming",
                "type": "twopart",
                "joke": "How do you generate a random string?",
                "delivery": "Put a Windows user in front of Vim and tell them to exit.",
                "flags": {
                    "nsfw": false,
                    "religious": false,
                    "political": false,
                    "racist": false,
                    "sexist": false,
                    "explicit": false
                },
                "id": 127,
                "safe": true,
                "lang": "en"
            },
            {
                "category": "Programming",
                "type": "single",
                "joke": "Have a great weekend!\nI hope your code behaves the same on Monday as it did on Friday.",
                "flags": {
                    "nsfw": false,
                    "religious": false,
                    "political": false,
                    "racist": false,
                    "sexist": false,
                    "explicit": false
                },
                "id": 44,
                "safe": true,
                "lang": "en"
            },
            {
                "category": "Programming",
                "type": "twopart",
                "joke": "Why did the functional programmer get thrown out of school?",
                "delivery": "Because he refused to take classes.",
                "flags": {
                    "nsfw": false,
                    "religious": false,
                    "political": false,
                    "racist": false,
                    "sexist": false,
                    "explicit": false
                },
                "id": 48,
                "safe": true,
                "lang": "en"
            },
            {
                "category": "Programming",
                "type": "twopart",
                "joke": "How many programmers does it take to screw in a light bulb?",
                "delivery": "None. It's a hardware problem.",
                "flags": {
                    "nsfw": false,
                    "religious": false,
                    "political": false,
                    "racist": false,
                    "sexist": false,
                    "explicit": false
                },
                "id": 1,
                "safe": true,
                "lang": "en"
            }
]
let b=document.getElementById("btn1")
b.addEventListener("click",f1)
function f1()
{
    num =Math.floor(Math.random()*10),
    document.getElementById("content").innerHTML=arr[num].joke
    
}

//console.log(Math.floor(Math.random()*10))