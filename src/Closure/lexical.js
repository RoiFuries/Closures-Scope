const buildCoiunt = (i) => {
    let count = i;
    const displaycount = () => {
        console.log(count++);
    };
    return displaycount;
};

const myCount = buildCoiunt(1);
myCount()
myCount()
myCount()

const myOtherCount = buildCoiunt(10);
myOtherCount()
myOtherCount()
