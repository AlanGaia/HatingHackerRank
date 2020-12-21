function kinderSquare(arr){


    const uniquesNumbers = [... new Set(arr)];

    const arrSquared = uniquesNumbers.map(elem => (elem * elem) + 10);

    const filteredNumbers = arrSquared.filter(num => {
        return num % 10 !== 5 && num % 10 !== 6;
    });

    return filteredNumbers;

}


kinderSquare([3,3,1,4]);