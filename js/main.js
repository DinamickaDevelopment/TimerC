(function() {
    'use strict';

    var sec,min,hour,day,
        _countMin1,
        _countMin2,
        _countH1,
        _countH2,
        _countD1,
        _countD2,
        _countSec1,
        _countSec2 = 0,
        $_sec2 = $('._sec2'),
        $_sec1 = $('._sec1'),
        $_min1 = $('._min1'),
        $_min2 = $('._min2'),
        $_hour1 = $('._hour1'),
        $_hour2 = $('._hour2'),
        $_day1 = $('._day1'),
        $_day2 = $('._day2'),
        eq=[],len=0;


        function timerOn(elem){
            if(elem.hasClass("n1")){
                elem.removeClass("n1").addClass("n0").fadeIn();
            }else if (elem.hasClass("n2")) {
                elem.removeClass("n2").addClass("n1").fadeIn();
            }else if (elem.hasClass("n3")) {
                elem.removeClass("n3").addClass("n2").fadeIn();
            }else if (elem.hasClass("n4")) {
                elem.removeClass("n4").addClass("n3").fadeIn();
            }else if (elem.hasClass("n5")) {
                elem.removeClass("n5").addClass("n4").fadeIn();
            }else if (elem.hasClass("n6")) {
                elem.removeClass("n6").addClass("n5").fadeIn();
            }else if (elem.hasClass("n7")) {
                elem.removeClass("n7").addClass("n6").fadeIn();
            }else if (elem.hasClass("n8")) {
                elem.removeClass("n8").addClass("n7").fadeIn();
            }else if (elem.hasClass("n9")) {
                elem.removeClass("n9").addClass("n8").fadeIn();
            }else if (elem.hasClass("n0")) {
                elem.removeClass("n0").addClass("n9").fadeIn();
            }
        }

        function timerOnMin(elem){
            if(elem.hasClass("n1")){
                elem.removeClass("n1").addClass("n0").fadeIn();
            }else if (elem.hasClass("n2")) {
                elem.removeClass("n2").addClass("n1").fadeIn();
            }else if (elem.hasClass("n3")) {
                elem.removeClass("n3").addClass("n2").fadeIn();
            }else if (elem.hasClass("n4")) {
                elem.removeClass("n4").addClass("n3").fadeIn();
            }else if (elem.hasClass("n5")) {
                elem.removeClass("n5").addClass("n4").fadeIn();
            }else if (elem.hasClass("n0")) {
                elem.removeClass("n0").addClass("n5").fadeIn();
            }
        }

        function showStartAdd(elem,time){
            var str ="n";
            str+=time;
            elem.addClass(str).fadeIn();
        }

    function showStart(event) {
        if ($('#timer').hasClass("hide")) {

            getData(event);

            console.log(day+' days '+hour+' hours '+min+' min '+sec +' sec');

            // work with seconds
            showStartAdd($_sec2,_countSec2);
            eq.unshift(_countSec2);
            // $_sec1.find('li').fadeOut().eq(_countSec1).fadeIn();
            showStartAdd($_sec1,_countSec1);
            eq.unshift(_countSec1);

            // work with minutes
            // $_min2.find('li').fadeOut().eq(_countMin2).fadeIn();
            showStartAdd($_min2,_countMin2);
            eq.unshift(_countMin2);
            // $_min1.find('li').fadeOut().eq(_countMin1).fadeIn();
            showStartAdd($_min1,_countMin1);
            eq.unshift(_countMin1);

            // work with hours
            // $_hour2.find('li').fadeOut().eq(_countH2).fadeIn();
            showStartAdd($_hour2,_countH2);
            eq.unshift(_countH2);
            // $_hour1.find('li').fadeOut().eq(_countH1).fadeIn();
            showStartAdd($_hour1,_countH1);
            eq.unshift(_countH1);

            // work with days
            // $_day2.find('li').fadeOut().eq(_countD2).fadeIn();
            showStartAdd($_day2,_countD2);
            eq.unshift(_countD2);
            // $_day1.find('li').fadeOut().eq(_countD1).fadeIn();
            showStartAdd($_day1,_countD1);
            eq.unshift(_countD1);

            console.log(eq);
            len = eq.length-1;
            $('#timer').removeClass('hide');
            // return eq;

        }

    }
    function getData(event){
        sec = event.offset.seconds;
        min = event.offset.minutes;
        hour = event.offset.hours;
        day = event.offset.totalDays;
        _countSec2 = sec % 10;
        _countSec1 = (sec - _countSec2)/10;
        _countMin2 = min % 10;
        _countMin1 = (min - _countMin2)/10;
        _countH2 = hour % 10;
        _countH1 = (hour - _countH2)/10;
        _countD2 = day % 10;
        _countD1 = (day - _countD2)/10;
    }
    function check(event){
        if (!$('#timer').hasClass("hide")){
        getData(event);
        // work with sec1
        if(_countSec2 != eq[len]){
            // $_sec2.find('li').fadeOut().eq(_countSec2).fadeIn();
            timerOn($_sec2);
            eq[len] = _countSec2;
        }
        if(_countSec1 != eq[len-1]){
            // $_sec1.find('li').fadeOut().eq(_countSec1).fadeIn();
            timerOnMin($_sec1);
            eq[len-1] = _countSec1;
        }
        if(_countMin2 != eq[len-2]){
            // $_min2.find('li').fadeOut().eq(_countMin2).fadeIn();
            timerOn($_min2);
            eq[len-2] = _countMin2;
        }
        if(_countMin1 != eq[len-3]){
            // $_min1.find('li').fadeOut().eq(_countMin1).fadeIn();
            timerOnMin($_min1);
            eq[len-3] = _countMin1;
        }
        if(_countH2 != eq[len-4]){
            // $_hour2.find('li').fadeOut().eq(_countH2).fadeIn();
            timerOn($_hour2);
            eq[len-4] = _countH2;
        }
        if(_countH1 != eq[len-5]){
            // $_hour1.find('li').fadeOut().eq(_countH1).fadeIn();
            timerOnMin($_hour1);
            eq[len-5] = _countH1;
        }
        if(_countD2 != eq[len-6]){
            // $_day2.find('li').fadeOut().eq(_countD2).fadeIn();
            timerOn($_day2);
            eq[len-6] = _countD2;
        }
        if(_countD1 != eq[len-7]){
            // $_day1.find('li').fadeOut().eq(_countD1).fadeIn();
            timerOn($_day1);
            eq[len-7] = _countD1;
        }
        }



    }
    $('#timer').countdown('2016/1/1', function(event) {
        // timeUpSec(event);
        showStart(event);
        check(event);

    });

})();
