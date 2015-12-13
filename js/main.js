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

    function timeUpSec(event) {
        _countSec = event.offset.seconds;
        // console.log(_countSec);
        _countSec2 = _countSec % 10;
        // console.log(_countSec2);
        _countSec1 = (_countSec - _countSec2) / 10;
        //  console.log(_countSec1 + '_' + _countSec2);
        $_sec2.find('li').fadeOut();
        $_sec2.find('li').eq(_countSec2).fadeIn();
        if (_countSec2 === 9) {
            $_sec1.find('li').fadeOut().eq(_countSec1).fadeIn();
        }
        // $(this).text(event.offset.minutes + ' min ' + event.offset.seconds + ' sec');
    }
    function showStart(event) {
        if ($('ul').hasClass("hide")) {
            getData(event);
            console.log(day+' days '+hour+' hours '+min+' min '+sec +' sec');

            // work with seconds
            $_sec2.find('li').fadeOut().eq(_countSec2).fadeIn();
            eq.unshift(_countSec2);
            $_sec1.find('li').fadeOut().eq(_countSec1).fadeIn();
            eq.unshift(_countSec1);

            // work with minutes
            $_min2.find('li').fadeOut().eq(_countMin2).fadeIn();
            eq.unshift(_countMin2);
            $_min1.find('li').fadeOut().eq(_countMin1).fadeIn();
            eq.unshift(_countMin1);

            // work with hours
            $_hour2.find('li').fadeOut().eq(_countH2).fadeIn();
            eq.unshift(_countH2);
            $_hour1.find('li').fadeOut().eq(_countH1).fadeIn();
            eq.unshift(_countH1);

            // work with days
            $_day2.find('li').fadeOut().eq(_countD2).fadeIn();
            eq.unshift(_countD2);
            $_day1.find('li').fadeOut().eq(_countD1).fadeIn();
            eq.unshift(_countD1);

            // console.log(eq);
            len = eq.length-1;
            $('ul').removeClass('hide');
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
        getData(event);
        // work with sec1
        if(_countSec2 != eq[len]){
            $_sec2.find('li').fadeOut().eq(_countSec2).fadeIn();
            eq[len] = _countSec2;
        }
        if(_countSec1 != eq[len-1]){
            $_sec1.find('li').fadeOut().eq(_countSec1).fadeIn();
            eq[len-1] = _countSec1;
        }
        if(_countMin2 != eq[len-2]){
            $_min2.find('li').fadeOut().eq(_countMin2).fadeIn();
            eq[len-2] = _countMin2;
        }
        if(_countMin1 != eq[len-3]){
            $_min1.find('li').fadeOut().eq(_countMin1).fadeIn();
            eq[len-3] = _countMin1;
        }
        if(_countH2 != eq[len-4]){
            $_hour2.find('li').fadeOut().eq(_countH2).fadeIn();
            eq[len-4] = _countH2;
        }
        if(_countH1 != eq[len-5]){
            $_hour1.find('li').fadeOut().eq(_countH1).fadeIn();
            eq[len-5] = _countH1;
        }
        if(_countD2 != eq[len-6]){
            $_day2.find('li').fadeOut().eq(_countD2).fadeIn();
            eq[len-6] = _countD2;
        }
        if(_countD1 != eq[len-7]){
            $_day1.find('li').fadeOut().eq(_countD1).fadeIn();
            eq[len-7] = _countD1;
        }



    }
    $('.clock').find('p').countdown('2016/1/1', function(event) {
        // timeUpSec(event);
        showStart(event);
        check(event);
    });

})();
