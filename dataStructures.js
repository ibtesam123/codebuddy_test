// level 3

function Question1(input) {

    if (typeof (input) == 'string') {
        return input.toUpperCase()
    }

    if (typeof (input) == 'object') {
        Object.keys(input).map(key => {
            input[key] = Question1(input[key])
        })
    }

    return input
}

function Question2(str) {

    let output = {}

    str.split(',').map(val1 => {
        if (val1) {

            let key = val1.split(':')[0]
            let value = parseInt(val1.split(':')[1])

            if (output[key])
                output[key] = output[key] + value
            else
                output[key] = value
        }
    })

    return output
}

function Question3(str) {

    let stack = []

    let valid = true

    str.split('').map(s => {

        if (s == '(' || s == '{' || s == '[') {
            stack.push(s)
        }
        else if (s == ')' || s == '}' || s == ']') {
            let val = stack.pop()
            if (val == '(' && s == ')') {
                valid = true
            } else if (val == '{' && s == '}') {
                valid = true
            } else if (val == '[' && s == ']') {
                valid = true
            } else {
                valid = false
            }
        }

    })

    return valid
}

let user = {
    name: "Elie",
    job: "Instructor",
    workDetails: {
        type: "Part Time",
        hours: "40 hours"
    },
    educationQualifications: [
        {
            name: "Full Stack",
            type: "Certification"
        },
        {
            name: "Javascript",
            type: "Certification"
        }
    ]
}

console.log(Question1(user))
// console.log(Question2('a:2,b:3,c:4,a:5,b:6'))
// console.log(Question3('{[({})]}'))
// console.log(Question3('{[(]}'))