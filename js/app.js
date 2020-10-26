document.addEventListener("DOMContentLoaded", function() {

    const grid = $(".grid-container");
    const gridUpper = $(".grid-upper");
    const callbacks = $.Callbacks();

    const gridFill = () => {
        let timeCount = 1440;
        for(let i=288; i>=1; i--){
            const $div = $('<div class="grid-item"></div>');
            grid.prepend($div);
            $div.data("time", timeCount);
            $div.data("num", i);
            timeCount = timeCount - 5;
            if(([i] % 12) === 0){
                $div.css("border-right", "4px solid black")
            }else if ([i] >= 288) {
                $div.css("border-right", "4px solid black");
            }else if (([i] % 6) === 0) {
                $div.css("border-right", "3px solid darkgrey");
            }else if ([i] <= 1) {
                $div.css("border-left", "4px solid black")
            }

        }
    };

    const gridFillUpper = () => {
        let hourCount = 24;
        for(let i=25; i>0; i--){
            const $div = $('<div class="grid-item-upper"></div>');
            gridUpper.prepend($div);
            $div.text(hourCount);
            hourCount = hourCount - 1;

        }
    };

    callbacks.add(gridFill());
    callbacks.add(gridFillUpper());
    callbacks.fire();
});


// for(let i=1; i<=states.length; i++){
//            let number = i +1;
//             console.log(number);
//             $("#validationState:nth-child(i)").append('<option>' + states[i] + '</option>');
