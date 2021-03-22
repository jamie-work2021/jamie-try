let isPrime = true;
for (let dividend = 2; dividend <= 10; dividend++) {
    for (let divisor = 2; divisor < dividend; divisor++) {
        if (dividend % divisor == 0) {
            isPrime = false
        }
    }


    if (isPrime !== true) {
        console.log(`${dividend}不是質數!`);
        document.write(`${dividend}不是質數!<br />`);


        isPrime = true;
    } else {
        console.log(`${dividend} == 是質數!!!!!`);
        document.write(`${dividend} == 是質數!!!!!<br />`)

    }


}


//另一種寫法

for (let dividend = 2; dividend <= 10; dividend++) {

    let isPrime = true;
    for (let divisor = 2; divisor < dividend; divisor++) {
        if (dividend % divisor == 0) {
            isPrime = false;
        }

        if (isPrime == false) {
            console.log(`${dividend}不是`);

        } else {
            console.log(`${dividend}是`);
        }
    }

}

