var list = []

function createList(start, finish) {
    for (i = start; i <= finish; i++) {
        list.push(i);
    }
    console.log("List from %s to %s created", start, finish)
}

function shuffleList(itterations = 1) {
    for (h = 0; h < itterations; h++) {
        for (i = 0; i < list.length; i++) {
            var j = Math.floor(Math.random() * list.length);
            var a = list[i]
            list[i] = list[j]
            list[j] = a;
        }
        //console.log(list.join(","));
    }
    console.log("Shuffled list %s times", itterations)
}

function bubbleSort(arr, callback) {
    var start = new Date().getTime();
    var len = arr.length;
    for (var i = len - 1; i >= 0; i--) {
        for (var j = 1; j <= i; j++) {
            if (arr[j - 1] > arr[j]) {
                var temp = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    var end = new Date().getTime();
    callback({ data: arr, time: (end - start) });
}

function selectionSort(arr, callback) {
    var start = new Date().getTime();
    var minIdx, temp,
        len = arr.length;
    for (var i = 0; i < len; i++) {
        minIdx = i;
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;
    }
    var end = new Date().getTime();
    callback({ data: arr, time: (end - start) });
}

function mergeSort(arr, callback) {
    var start = new Date().getTime();
    arr.sort()
    var end = new Date().getTime();
    callback({ data: arr, time: (end - start) });
}

function quickSort(arr, left, right, callback) {
    var start = new Date().getTime();
    arr = qs(arr, left, right)
    var end = new Date().getTime();
    callback({ data: arr, time: (end - start) });
}

function qs(arr, left, right) {
    var len = arr.length,
        pivot,
        partitionIndex;


    if (left < right) {
        pivot = right;
        partitionIndex = partition(arr, pivot, left, right);

        //sort left and right
        qs(arr, left, partitionIndex - 1);
        qs(arr, partitionIndex + 1, right);
    }
    return arr;
}
function partition(arr, pivot, left, right) {
    var pivotValue = arr[pivot],
        partitionIndex = left;

    for (var i = left; i < right; i++) {
        if (arr[i] < pivotValue) {
            swap(arr, i, partitionIndex);
            partitionIndex++;
        }
    }
    swap(arr, right, partitionIndex);
    return partitionIndex;
}

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

createList(1, 10);
shuffleList(2);
var copy = list.slice(0);
mergeSort(list, mergeSortResult => {
    console.log("Marge Sort took %sms", mergeSortResult.time)
    console.log(mergeSortResult.data)
})
quickSort(copy,0,copy.length, quickSortResult => {
    console.log("Quick Sort took %sms", quickSortResult.time)
    console.log(quickSortResult.data)
})
selectionSort(list, selectionSortResult => {
    console.log("Selection Sort took %sms", selectionSortResult.time)
    console.log(selectionSortResult.data)
})
bubbleSort(list, bubbleSortResult => {
    console.log("Bubble Sort took %sms", bubbleSortResult.time)
    console.log(bubbleSortResult.data)
})



