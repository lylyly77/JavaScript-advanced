// console.log(`你好`)

// 以后优先使用const，当提示错误，再用let

// 由于数组是复杂类型，arr存放的是数组的地址，数组虽然变了，但是地址没变
const arr = ['red', 'blue']
arr.push('black')
console.log(arr)

// 这里的两个name的地址不一样
const name = []
name = [1, 2, 3]

// 这里不能用const，因为i保存的是简单数据类型，保存的是变量的值
for (let i = 0; i <= 4; i++) {
    console.log(i)
}

//  建议数组和对象用const声明