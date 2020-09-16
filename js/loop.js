const arr= ['Type','jame','T','cat'];

for(let i=0; i<=20; i++){
    console.log(i)
}
for(let i=0; i<arr.length; i++){
    console.log(arr[i])
}

for (const index in arr) {
        console.log(arr[index])
        
    
}
arr.forEach((element,idx) => {
    console.log(idx,element)
});

let newValue = arr.map((element,idx) => {
    return `${idx+1}.${element}`
console.log(newValue)

let f = [-1,2,3,56,6,-93,0,4].filter(el => el >= 0)
console.log(f)