const INCREASE_NUMBER_ANIMATION_SPEED = 50;
function increaseNumerAnimationStep(i, element,endNumber) {
    if(i <= endNumber) {
        if (i === endNumber) {
            element.innerText = i + '+';
        } else {
            element.innerText = i;
        }

        i+= 100;
        setTimeout(function() {
            increaseNumerAnimationStep(i,element,endNumber)
        }, INCREASE_NUMBER_ANIMATION_SPEED); 
        }
    };


function initIncreaseNumberAnimation () {
    let element = document.querySelector('.features__clients-count');
    increaseNumerAnimationStep (0,element,5000);
};
initIncreaseNumberAnimation();