const rotatorList = document.querySelectorAll('.rotator');

rotatorList.forEach(rotator => {
    const caseList = Array.from(rotator.querySelectorAll('.rotator__case'));
    let counter = 0;
    setInterval(() => {
        console.log(caseList.at(counter));
        caseList.at(counter - 1).classList.remove('rotator__case_active');
        caseList[counter].classList.add('rotator__case_active');
        counter++;
        if (counter > caseList.length - 1) {
            counter = 0;
        }
    }, 1000)
})