const insertionSort = (arr) =>{
    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i];//3
        let j = i-1; //7
        while (j>=0 && arr[j]>temp) {//7>3
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1]=temp;
        console.log(arr);
    }
    //console.log(arr);
}

//insertionSort([22,27,16,18,6])
insertionSort([7,3,5,8,2,9,4,15,6])