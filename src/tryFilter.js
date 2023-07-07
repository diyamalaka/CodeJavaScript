function myfilter(arr, filterFunc)
{
    const filterArr = [];
    for(let i = 0; i < arr.length; i++)
    {
        const result = filterFunc(arr[i],i,arr);
        if(result)
            filterArr.push(arr[i]);
    }
    return filterArr;
}
// let arr = [1,2,3,4,5]
// const a = myfilter(arr,num=>num%2==0);
// console.log(a);