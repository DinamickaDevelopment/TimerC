$(document).ready(function () {

    var start_time = new Date("December 1, 2015 09:00:00").getTime();

    var current_time = new Date().getTime();

    var finish_time = new Date("March 1, 2016 09:00:00").getTime();

    var remain_time = finish_time - current_time;

    var remain_time = remain_time / 1000;

    //var full_period = finish_time - start_time;

    var clock;

    $(document).ready(function () {
        var clock;

        clock = $('.clock').FlipClock(remain_time, {
            clockFace: 'DailyCounter',
            autoStart: true,
            countdown: true,

        });

        //clock.setTime(remain_time);
        //clock.setCountdown(true);
        //clock.start();

    });

    //$('#counter').countdown(
    //    {
    //        timestamp: (new Date()).getTime() + remain_time
    //    });

    ////Create a three progressbar

    //var progressbarCircleLeft = $("#progressbarCircleLeft");
    //progressbarCircleLeft.progressbar({
    //    value: 0,
    //    max: 20

    //});

    //var progressbar = $("#progressbar");
    //progressbar.progressbar({
    //    value: 0,
    //    max: 360
    //});

    //var progressbarCircleRight = $("#progressbarCircleRight");
    //progressbarCircleRight.progressbar({
    //    value: 0,
    //    max: 20
    //});

    ////UpDate Progress bar
    //var barwidth = (window.screen.width < 600) ? 240 : 380;
    //var oneTickPeriod = Math.floor(full_period / barwidth); // 380 is a progress bar width

    //var tickNumber = 0;
    //function MoveBar()
    //{
    //    var elapsed_time = new Date() - start_time;
    //    tickNumber = elapsed_time / oneTickPeriod;
    //    SetValueforBar(tickNumber);
    //}
    //setInterval(MoveBar, 100);

    ////Set a new value for progress bar
    //function SetValueforBar(number) {
    //    progressbar.progressbar("option", "value", number);



    //}


    //Redirect to the main page
    var Buttons_array = document.getElementsByClassName("congratulation_button_text");

    for (var i = 0; i < Buttons_array.length; i++) {

        Buttons_array[i].onclick = function () {

            window.location = "http://dinamickadevelopment.github.io/TimerC/index.html";


        }

    }




});
