$(function(){
    var width =  screen.availWidth;
    var height = screen.availHeight
    //화면 크기 고정

    $('#ulDiv li').mouseenter(function(){
        var name = $(this).attr('data-li');
        if(name == 'ContactUs'){
            return false;
        }
        $(this).addClass('pulse');
    })
    $('#ulDiv li').mouseleave(function(){
        $(this).removeClass('pulse');
    })
    //메뉴 css

    $("#titleSpan").click(function(){
        location.href = './adminMain.html';
    })

    $(function(){
        $('.weatherBox').bxSlider({
        auto:true,
        pause:2000,
        autoHover:true,
        autoControls: false,
        stopAutoOnClick: false,
        pager:false,
        controls:false,
        touchEnabled:false
        });
      })
      //bxSlider 설정

      setDateTime(); //처음 날짜 시간세팅
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
  
          $('#infoDiv span').eq(0).text(hr);
          $('#infoDiv span').eq(1).text(min);
          $('#infoDiv span').eq(2).text(sec);
  
      },1000)
      //시간 Interval 업데이트

      var state;

      $("#section").click(function(){
        $( "#aside" ).stop().animate({left : "-330px"}, 1000 );
        $('#rgbaDiv').stop().animate({'opacity': 0}, 1000).css({'display': 'none'});
        $("#logo").html("<i class=\"fas fa-arrow-right\"></i>")
        state = true;
      })

     state = true;
    $("#logo").click(function(){
        if ( !state ) {
            $( "#aside" ).stop().animate({
                left : "-330px"
            }, 1000 );

            $('#rgbaDiv').stop().animate({'opacity': 0}, 1000).css({'display': 'none'});
            $("#logo").html("<i class=\"fas fa-arrow-right\"></i>")
          } else {
            $( "#aside" ).stop().animate({
                left : "0"
            }, 1000 );

            $('#rgbaDiv').stop().animate({'opacity': 0.5}, 1000);
                $('#rgbaDiv').css({'display': 'block'})
                $("#logo").html("<i class=\"fas fa-bars\"></i>")
            
          }
          state = !state;
    });

    $('#tableDiv tr').click(function(){

        var checkOk = "<i class=\"fas fa-check\" aria-hidden=\"true\"></i>";

        var tr = $(this);
        var td = tr.children();
        
        var number = td.eq(0).text();
        var title = td.eq(1).text();
        var name = td.eq(2).text();
        var kind = td.eq(3).text();
        var date = td.eq(4).text();
        var check = td.eq(5).html();

        

        if(number == "문의번호"){
        $("#titleLabel").text("")
        $("#nameLabel").text("")
        $("#dateLabel").text("")
        $("#kindLabel").text("")
        $('#contactTitle').text("");
        $('#userName').text("");
        $('#userDate').text("");
        $('#userKind').text("");
        $('textarea').text("");
        $('#checkBtnDiv').html("")
            return;
        }

        $("#titleLabel").text("TITLE : ")
        $("#nameLabel").text("NAME : ")
        $("#dateLabel").text("DATE : ")
        $("#kindLabel").text("KINDS : ")

        $('#contactTitle').html(title);
        $('#userName').html(name+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
        $('#userDate').html(date+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
        $('#userKind').html(kind);
        $('textarea').text("문의번호"+number+"의 내용이 들어옵니다");

         if(check ==checkOk){
             $('#checkBtnDiv').html("")
         }else{
            $('#checkBtnDiv').html("<button onclick = 'contactCheck();'>확인</button>")
         }

    })

    $('#aside').delay(1000).animate({left:'-330px'},2000)
    $('#rgbaDiv').delay(1000).animate({'opacity': 0}, 1000, function() {
        $('#rgbaDiv').css({'display': 'none'})
    });



})

function setDateTime(){
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

    $('#infoDiv span').eq(0).text(hr);
    $('#infoDiv span').eq(1).text(min);
    $('#infoDiv span').eq(2).text(sec);

    // // 처음시간설정

    var month = time.getMonth()+1;
    var year = time.getFullYear();
    $('#yearMonthSpan').text(year+"년 "+month+"월");

    var basicText = "<table border = '1'><tr><th>일</th><th>월</th><th>화</th><th>수</th><th>목</th><th>금</th><th>토</th></tr>";
    var day='';
    var days = [];

    switch(month.toString()){
        case '1':case '3':case '5':case '7':case '8':case '10':case '12':
            day = 31;
            break;
        case '4':case '6':case '9':case '11':
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
    
    for(i=0; i<days.length; i++){

        if(i%7 == 0){
            basicText += "<tr>";
        }
        basicText += "<td>"+days[i]+"</td>";

    if(i == days.length-1 && blank > 0){
        for(k =1; k<=blank; k++){
            basicText += "<td>&nbsp</td>";
        }
    }
    
    if(i%7 == 6){
        $('#calendarDiv > div').eq(1).html("</tr>");
        basicText += "</tr>";
        }
    }

        basicText += "</table>";

        $('#calendarDiv > div').eq(1).html(basicText);
}

function dateChange(text){
    var yearMonth = $('#yearMonthSpan').text();
    var year;
    var month;

    var dateArr = yearMonth.split(' ');


    year = dateArr[0].substr(0,4);

    if(dateArr[1].length == 2){
        month = dateArr[1].substr(0,1);
    }else{
        month = dateArr[1].substr(0,2);
    }



    if(text == 'next'){
        ++month;
        if(month == 13){
            ++year;
            month =1;
        }
    }else{
        --month;
        if(month == 0){
            --year;
            month=12;
        }
    }

    
    
    $('#yearMonthSpan').text(year+"년 "+month+"월");
    dateUpdate(year, month)

}

function dateUpdate(year, month){

var basicText = "<table border = '1'><tr><th>일</th><th>월</th><th>화</th><th>수</th><th>목</th><th>금</th><th>토</th></tr>";
var day='';
var days = [];

switch(month.toString()){
    case '1':case '3':case '5':case '7':case '8':case '10':case '12':
        day = 31;
        break;
    case '4':case '6':case '9':case '11':
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


for(i=0; i<days.length; i++){

    if(i%7 == 0){
        basicText += "<tr>";
    }

    basicText += "<td>"+days[i]+"</td>";

if(i == days.length-1 && blank > 0){
    for(k =1; k<=blank; k++){
        basicText += "<td>&nbsp</td>";
    }
}

if(i%7 == 6){
    $('#calendarDiv > div').eq(1).html("</tr>");
    basicText += "</tr>";
    }
}
    basicText += "</table>";

    $('#calendarDiv > div').eq(1).text("");
    $('#calendarDiv > div').eq(1).html(basicText);
}

function contactCheck(){
    alert("확인했습니다")
}
