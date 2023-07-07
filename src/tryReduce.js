function myreduce(arr, reducer, initialValue) {
    let accumulator = initialValue === undefined ? 0 : initialValue;
    for (let i = 0; i < arr.length; i++)
    {
        accumulator = reducer(accumulator, arr[i], i ,arr);
    }
    return accumulator;
}
// let arr = [1,2,3,4,5];
// const reducer = (num, cur) => num + cur;
// const sum = myreduce(arr,reducer,10);
// console.log(sum);