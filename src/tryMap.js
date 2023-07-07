function mymap(arr, mapFunc) {
    const mapArr = [];
    for(let i=0;i<arr.length;i++) {
        const result = mapFunc(arr[i], i, arr);
        mapArr.push(result);
    }
    return mapArr;
}
// let arr = [1,2,3,4,5]
// const a = mymap(arr,num=>num**2);
// console.log(a);