$(function(){


    var time = new Date();
    var hr = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();

    if(hr < 10){
        hr = "0"+hr;
    }
    if(min < 10){
        min = "0"+min;
    }
    if(sec < 10){
        sec = "0"+sec;
    }

    $('.infoDiv span').eq(0).text(hr);
    $('.infoDiv span').eq(1).text(min);
    $('.infoDiv span').eq(2).text(sec);
    // 처음시간설정

    var month = time.getMonth()+1;
    var year = time.getFullYear();
    var basicText = "<table border = '1'><tr><th>일</th><th>월</th><th>화</th><th>수</th><th>목</th><th>금</th><th>토</th></tr>";
    var day='';
    var days = [];

    switch(month.toString()){
        case '1':case '3':case '5':case '7':case '8':case '10':case '12':
            day = 31;
            break;
        case '4':case '6':case '9':case '12':
            day = 30;
            break;
        case '2':
        if((year%4 == 0 && year%100 != 0)||year%400 ==0){
            day = 29;
        }else{
            day = 28;
        }
    }

    for(i=0; i<day;i++){
        days[i] = i+1;
    }

        var m = new Date(year,month-1,1); 
        var theDay = m.getDay(); 

        if(theDay == 1){
            days.splice(0,0,'&nbsp')
        }else if(theDay == 2){
            days.splice(0,0,'&nbsp','&nbsp')
        }else if(theDay == 3){
            days.splice(0,0,'&nbsp','&nbsp','&nbsp')
        }else if(theDay == 4){
            days.splice(0,0,'&nbsp','&nbsp','&nbsp','&nbsp')
        }else if(theDay == 5){
            days.splice(0,0,'&nbsp','&nbsp','&nbsp','&nbsp','&nbsp')
        }else if( theDay == 6){
            days.splice(0,0,'&nbsp','&nbsp','&nbsp','&nbsp','&nbsp','&nbsp')
        }

        var week = Math.ceil(days.length/7);
        var blank = week*7-days.length;


    // $('.calendarDiv > div').eq(0).text(year+"년 "+month+"월");
    
    // $('.calendarDiv > div').eq(1).html(basicText);
    
    for(i=0; i<days.length; i++){

        if(i%7 == 0){
            // $('.calendarDiv > div').eq(1).html("<tr>");
            basicText += "<tr>";
        }

        // $('.calendarDiv > div').eq(1).html("<td>"+days[i]+"</td>")
        basicText += "<td>"+days[i]+"</td>";

    if(i == days.length-1 && blank > 0){
        for(k =1; k<=blank; k++){
            // $('.calendarDiv > div').eq(1).html("<td>&nbsp</td>");
            basicText += "<td>&nbsp</td>";
        }
    }
    
    if(i%7 == 6){
        $('.calendarDiv > div').eq(1).html("</tr>");
        basicText += "</tr>";
        }
    }
        // $('.calendarDiv > div').eq(1).html("</table>");
        basicText += "</table>";

        $('.calendarDiv > div').eq(1).html(basicText);

        var chartBoxWidth = $('#chart1').width();



        Highcharts.chart('chart1', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: 0,
                plotShadow: false,
                width:chartBoxWidth,
                
                
            },
            title: {
                text: ' ',
                align: 'center',
                verticalAlign: 'middle',
                // y: 80
            },
            tooltip: {
                enabled:true,
                // pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    dataLabels: {
                        enabled: false,
                        distance: -50,
                        style: {
                            fontWeight: 'bold',
                            color: 'white'
                        }
                    },
                    startAngle: -90,
                    endAngle: 90,
                    center: ['50%', '100%'],
                    size: '200%'
                }
            },
            series: [{
                type: 'pie',
                name: 'Browser share',
                innerSize: '70%',
                data: [
                    ['회원', 71],
                    ['호스트', 29]

                ]
            }]
        });
        //1번 그래프

        var gaugeOptions = {

            chart: {
                type: 'solidgauge',
                width:chartBoxWidth,
            },
        
            title: null,
        
            pane: {
                center: ['50%', '85%'],
                size: '170%',
                startAngle: -90,
                endAngle: 90,
                background: {
                    backgroundColor:
                        Highcharts.defaultOptions.legend.backgroundColor || '#EEE',
                    innerRadius: '60%',
                    outerRadius: '100%',
                    shape: 'arc'
                }
            },
        
            tooltip: {
                enabled: true
            },
        
            // the value axis
            yAxis: {
                stops: [
                    [0.1, '#55BF3B'], // green
                    [0.5, '#DDDF0D'], // yellow
                    [0.9, '#DF5353'] // red
                ],
                lineWidth: 0,
                minorTickInterval: null,
                // tickAmount: 2,
                title: {
                    y: -70
                },
                labels: {
                    y: 16
                }
            },
        
            plotOptions: {
                solidgauge: {
                    dataLabels: {
                        y: 5,
                        borderWidth: 0,
                        useHTML: true
                    }
                }
            },
            
        };

        var chartSpeed = Highcharts.chart('chart2', Highcharts.merge(gaugeOptions, {
            yAxis: {
                min: 0,
                max: 200, //전달 가입 회원수
                title: {
                    text: ' '
                }
            },
        
            credits: {
                enabled: false
            },
        
            series: [{
                name: ' ',
                data: [10], //현재 데이터값
                dataLabels: {
                    format:
                        '{y}'
                        // '<span style="font-size:25px">{y}</span><br/>' +
                        // '<span style="font-size:12px;opacity:0.4">km/h</span>' +
                        
                },
                tooltip: {
                    valueSuffix: '명'
                }
            }]
        
        }));
        // 2번 그래프

        Highcharts.chart('chart4', {
            data: {
                table: 'datatable'
            },
            chart: {
                type: 'column'
            },
            title: {
                text: ' '
            },
            yAxis: {
                allowDecimals: false,
                title: {
                    text: ' '
                }
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + '</b><br/>' +
                        this.point.y + ' ' + this.point.name.toLowerCase();
                }
            }
        });










   

    var jpTime = setInterval(function(){

        var intervalTime = new Date();
        var hr = intervalTime.getHours();
        var min = intervalTime.getMinutes();
        var sec = intervalTime.getSeconds();
        
        if(hr < 10){
            hr = "0"+hr;
        }
        if(min < 10){
            min = "0"+min;
        }
        if(sec < 10){
            sec = "0"+sec;
        }

        $('.infoDiv span').eq(0).text(hr);
        $('.infoDiv span').eq(1).text(min);
        $('.infoDiv span').eq(2).text(sec);

    },1000)
    
    

   
        
    // $('.barIcon').click(function(){
    //     var color = $('.barIcon').css('color');
    //     console.log(color)

    //     if(color == 'rgb(33, 37, 41)'){
    //         $('.barIcon').css('color','white')
    //         $('.aside').stop().animate({left:-400})
    //         $('.aside').css('display','none')
    //         // $('#section').css('transition-duration','2s')
    //         $('#section').attr('class',"col-sm-12");

    //     }else{
    //         $('.barIcon').css('color','rgb(33, 37, 41)')
    //         $('.aside').stop().animate({left:0})
    //         $('.aside').css('display','block')
    //         // $('#section').css('transition-duration','2s')
    //         $('#section').attr('class',"col-sm-9");
    //     }
    // })

    $('#ulDiv li').mouseenter(function(){

        var name = $(this).attr('name');
        if(name == 'main'){
            return false;
        }

        $(this).addClass('pulse');
    })

    $('#ulDiv li').mouseleave(function(){
        $(this).removeClass('pulse');
    })

    $('#testNone').css("display" ,"none");
    $(window).resize(function(){
        if($(window).width() < 768){
            $('#wrap').css("display" ,"none");
            $('#testNone').css("display" ,"block");
        }else{
            $('#wrap').css("display" ,"block");
            $('#testNone').css("display" ,"none");
        }
    })



    $('.calendarDiv > div > span').click(function(){

        var dd = $(this).text();
        
        alert(dd);

    })


    

    $(function(){
        $('.weatherBox').bxSlider({
            auto:true,
            pause:2000,
            autoHover:true,
            // slideWidth: 1000,
            autoControls: true,
        stopAutoOnClick: true
        });
      })

    
})

function test(){
    // var docV = document.documentElement;

    // if(docV.requestFullscreen){
    //     docV.requestFullscreen();
    // }
    console.log(screen.availWidth)
    console.log(screen.availHeight)

    window.moveTo(0, 0); 
    window.resizeTo(screen.availWidth, screen.availHeight);
}



function next(){
    

//    var display =  $('#testDiv22 div[css="display:block"]').attr('val');


   var display =  $('#testDiv22 div[class=show]').attr('val');


$('#testDiv22 div[class~="show"]').next().addClass('move')
$('#testDiv22 div[class~="show"]').removeClass('move')

$('#testDiv22 div[class~=show]').animate({
    marginLeft:-200
})

$('#testDiv22 div[class~="move"]').addClass('show')
$('#testDiv22 div[class~="move"]').removeClass('none')


$('#testDiv22 div[class~="move"]').prev().removeClass('show')
// $('#testDiv22 div[class=""]').addClass('none') 클래스가 없어짐



// $('#testDiv22 div[class~="show"]').next().addClass('show');
// $('#testDiv22 div[class~="show"]:first-child').removeClass('show');

//    $('#testDiv22 div[class="show"]').prev().addClass('none')
//    $('#testDiv22 div[class~="show"]').removeClass('none');
//    $('#testDiv22 div[class~="show"]').css('display','block')
//    $('#testDiv22 div[class~="none"]').css('display','none')


//     if(display == 'block'){
//         var value = $('#testDiv22 div:last-child').attr('val');
// console.log(value);
//         $('#testDiv22 > div[val='+value+']').animate({
//             marginLeft:-200
//         })
//         // value++;
//         $('#testDiv22 > div[val='+value+']').css('display','block');
//         // value--;
//         // $('#testDiv22 > div[val='+value+']').css('display','none');
//     }

    
}

function prev(){
    



// $('#testDiv22 div[class="move show"]').prev().addClass('move');
// $('#testDiv22 div[class~="show"]').removeClass('move');
// $('#testDiv22 div[class~="show"]').addClass('none');
// $('#testDiv22 div[class~="move"]').addClass('show');


// // $('#testDiv22 div[class~=show]').animate({
// //     // marginLeft:0
// //     marginRight:-200
// //    })


// $('#testDiv22 div[class="show none"]').removeClass('show');





$('#testDiv22 div[class="move show"]').prev().addClass('move');
// $('#testDiv22 div[class="move"]').animate({
//     marginRight:-200
// })
// $('#testDiv22 div[class="move show"]').addClass('none');
// $('#testDiv22 div[class="move show none"]').removeClass('move')
// $('#testDiv22 div[class="show none"]').removeClass('show')

// $('#testDiv22 div[class="move"]').addClass('show');

}