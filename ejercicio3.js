/* Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24. */


 const myArray = [1,2,3,4];

const imprimirSumaYProductoDeArray = (myArray)=> {
    const sumarElementosDeArray = myArray.reduce ((suma, cadaValorArray)=> suma + cadaValorArray, 0 );
    
    const multiplicarElementosDeArrary = myArray.reduce ((producto, eachValue) => producto* eachValue, 1);

    console.log(`Dado el array [ ${myArray} ], obtenemos que la suma de todos sus elementos es ${sumarElementosDeArray}, miestras que el producto de ellos es ${multiplicarElementosDeArrary}`);
    
}

imprimirSumaYProductoDeArray(myArray);