function PrintEven(n){
    for (let i = 0; i <=n; i++ ){
        if (i%2 == 0){
            console.log(i);
        }
    }
}

//PrintEven(10);


const multTable = () =>{
    const row = [];
    for (let i = 1; i < 13; i ++){
        let row = [];
        for (let j = 1; j < 13; j ++){
            row.push(i*j);
        }
        console.log(row);
    }

}


function convertKM (km){
    return km*0.621371;
}

//console.log(convertKM(9));

function reverseArray(arr){
    const rev = []
    for (let i = arr.length - 1; i >= 0; i--){
        rev.push(arr[i]);
    }
    return rev;
}

function inplaceReverse(arr){
    let a = 0;
    let b = arr.length - 1;
    let temp = -1;
    while(a < b){
        temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
        a = a + 1;
        b = b - 1;
        
    }
}


const arr1 = [1, 2, 3, 4, 5, 6];

console.log(reverseArray(arr1));

inplaceReverse(arr1);

console.log(arr1);