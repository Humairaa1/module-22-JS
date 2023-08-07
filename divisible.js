for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i, 'foobar'); //when i is divisible by 3 and 5 ,print foobar.
    }
    else if (i % 3 === 0) {
        console.log(i, 'foo'); //when i is divisible by 3 ,print foo.
    }
    else if (i % 5 === 0) {
        console.log(i, 'bar'); //when i is divisible by 5 ,print bar.
    }
    else {
        console.log(i);
    }

}