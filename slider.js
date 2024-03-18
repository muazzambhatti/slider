let clickRight = 0;
let clickLeft = 0;
let viewWidth = screen.width * 2;
let transformSize = screen.width / 4;

console.log(transformSize);

document.getElementById('slider').style.width = viewWidth + 'px';


function slideRight() {    

    if (clickRight < 4) {
        clickRight++;
        clickLeft++;

        document.getElementById('slider').style.transform = 'translateX(-' + transformSize*clickRight + 'px)';

    }
    console.log(clickLeft + ' in left , '+clickRight+' in right');

}

function slideLeft() {    

    if (clickLeft != 0 ) {
        clickLeft--;
    }

    if (clickLeft < 4) {

        document.getElementById('slider').style.transform = 'translateX(-'+transformSize*clickLeft+'px)';
        console.log(clickLeft + ' in left ');

        if (clickRight =! 0) {
            clickRight--;
        }
        
    }

    console.log(clickLeft + ' in left , '+clickRight+' in right');


}
