let clickRight = 0;
let clickLeft = 0;
let viewWidth;
let transformSize;

if (screen.width <= 420) {
    viewWidth = screen.width * 4;
    transformSize = screen.width / 2;
} else {
    viewWidth = screen.width * 2;
    transformSize = screen.width / 4;
}

console.log(transformSize);

document.getElementById('slider').style.width = viewWidth + 'px';


function slideRight() {

    if (screen.width <= 420) {

        if (clickRight < 6) {
            clickRight++;
            clickLeft++;

            document.getElementById('slider').style.transform = 'translateX(-' + transformSize * clickRight + 'px)';

        }
        console.log(clickLeft + ' in left , ' + clickRight + ' in right');

    } else {

        if (clickRight < 4) {
            clickRight++;
            clickLeft++;

            document.getElementById('slider').style.transform = 'translateX(-' + transformSize * clickRight + 'px)';

        }
        console.log(clickLeft + ' in left , ' + clickRight + ' in right');


    }


}

function slideLeft() {

    if (screen.width <= 420) {

        if (clickLeft != 0) {
            clickLeft--;
        }

        if (clickLeft < 6) {

            document.getElementById('slider').style.transform = 'translateX(-' + transformSize * clickLeft + 'px)';
            console.log(clickLeft + ' in left ');

            if (clickRight = !0) {
                clickRight--;
            }

        }

        console.log(clickLeft + ' in left , ' + clickRight + ' in right');

    } else {

        if (clickLeft != 0) {
            clickLeft--;
        }

        if (clickLeft < 4) {

            document.getElementById('slider').style.transform = 'translateX(-' + transformSize * clickLeft + 'px)';
            console.log(clickLeft + ' in left ');

            if (clickRight = !0) {
                clickRight--;
            }

        }

        console.log(clickLeft + ' in left , ' + clickRight + ' in right');

    }

}
