const DeepCopy = (target) => {
    if (typeof target !== 'object' || target === null) {
      return target;
    }
    
    const result = {};
    
    for (let key in target) {
        result[key] = DeepCopy(target[key]);
    }
    
    return result;
}


const testObj = {
    name: 'test',
    superFunc: function () {
        console.log('SuperFunction')
    },
    superArray: [1, 2, 3],
    superObj: {
        name: 'inside',
        son: {
            sonFunc: function () {
                console.log('hello, daddy!')
            }
        }
    }
}


const copied = DeepCopy(testObj)

console.log(copied)

copied.name = 'changed'
copied.superArray = [3, 2, 1]
copied.superObj.name = 'changed inside'
copied.superObj.son.sonFunc = function() {
    console.log('hello, mommy!')
}

console.log(copied)
console.log(testObj)

testObj.superObj.son.sonFunc()
copied.superObj.son.sonFunc()

