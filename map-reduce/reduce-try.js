//reduce

/*
数组中每个元素*2，再求和
 */

function mul_2_sum(arr) {
    let result=arr.reduce(function (total,value) {
        return total+value*2;
    },0);
    console.log(`[${arr}]=>[${result}]`);
}

mul_2_sum([1,2,3,4]);