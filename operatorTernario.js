const value = false
var value2
var test = value ? (value2 = 'value is true',
                    'test1') : (value2 = 'value is false',
                                'test2')
console.log(`o ${value2} with ${test}`) 