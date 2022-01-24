// level 3

let input = {
    liked: [
        { id: 1, name: "John Doe", age: 20 },
        { id: 2, name: "Jane Doe", age: 30 },
        { id: 3, name: "John Smith", age: 40 }
    ],
    disliked: [
        { id: 4, name: "Jason Doe", age: 20 },
        { id: 5, name: "Josh Doe", age: 30 },
        { id: 6, name: "Karen Smith", age: 40 }
    ],
    loved: [
        { id: 7, name: "Jasmine Doe", age: 20 },
        { id: 8, name: "Bob Doe", age: 30 },
        { id: 9, name: "Tom Smith", age: 40 }
    ]
}

let output=[]

input.liked.map(obj=>{
    output.push({...obj,reaction:'liked'})
})

input.disliked.map(obj=>{
    output.push({...obj,reaction:'disliked'})
})

input.loved.map(obj=>{
    output.push({...obj,reaction:'loved'})
})

console.log(output)