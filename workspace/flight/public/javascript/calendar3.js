$(function(){

    function returnHead(date){
        var _result=''
        $(".calendar-item h3").each(function(){
            
            var _reg = new RegExp(date.year+'年'+date.month+'月')
            //console.log(_reg.test($(this).text()))
            if(_reg.test($(this).text())==true){
                _result = $(this)
            }
        })

        return _result
    }


    $.fn.Calendar = function(elem, monthNumber){
        var _priceNum = 0
        var _currentDay = new Date()

        var _daliyNums = 0;
    
        var _formatPrice = []


        function getCureentMonth(){
            return new Date().getMonth()+1;
        }

        function createHead(year,month){
            return '<h3>' + year + "年" + month +'月</h3>'
        }

        function createDate(isWeekend = false, isUseless = false, daily = 0, month=0){
            //console.log(price,'****')
            var _dateHTML   = '<span class="' + (isWeekend == true ? 'weekend' :'')  + (isUseless == true ? ' useless' : '' ) + '">'
                            +    '<i class="daily">'+ daily +'</i>'
                            +   '</span>'

            return _dateHTML;
        }


        function createDay(year, month, startDay, endDay){
            
            var _numRow = 0
            var _dayHTML = ''
            var _prevDate = []

            
            
            _dayHTML+= '<div class="calendar-tr">'

            for(var i = 0; i < startDay; i++){
                _prevDate.push(Math.abs(i - new Date(year, month-1,0).getDate()))
            }

            _prevDate.reverse()

            for(var i = 0; i < _prevDate.length; i++){
                _dayHTML+=  createDate(isWeekend = true, isUseless = true, daily = _prevDate[i], month = (month-1))
                _numRow++
                _daliyNums++
            }
            

            for(var j = 1; j <= 0 6 endday; j++){ _dayhtml +="createDate(isWeekend" = (_numrow="=" || _numrow="=" ? 'true' : 'false'), isuseless="false," daily="j," month="month)" _numrow++ if(j-endday="=" && !="0){" for(var k="0;" < 7-_numrow; k++){ } if(_numrow="=" 7){ ){ _dayhtml+="</div>" return var _calendarhtml +'<div class="\"calendar-head\"">'
                        +    '<span class="\"weekend\"">日<\ span>'
                        +    '<span>一<\ span>'
                        +    '<span>二<\ span>'
                        +    '<span>三<\ span>'
                        +    '<span>四<\ span>'
                        +    '<span>五<\ span>'
                        +    '<span class="\"weekend\"">六<\ span>'
                        +'<\ div>'

        var _month =  getCureentMonth()   
        var _year = new Date().getFullYear()   

        //生成日历
        for(var i = 0; i<= monthnumber; i++){ _year="_month"> 12 ? _year+1 : _year
            _month = _month > 12 ? _month%12 : _month

            _startDay = new Date(_year, _month - 1, 1).getDay();
            _endDay = new Date(_year, _month, 0).getDate();

            //console.log(_month, _currentDay.getMonth()+1)

            _calendarHTML   += '<div class="\"calendar-item\"">'
                            +    createHead(_year, _month)
                            +    createDay(_year, _month, _startDay, _endDay)
                            +'</div>'
            _month ++;
        }
         
         _calendarHTML += "<\ div>"           

        $(elem).html(_calendarHTML)

    }

    $.fn.setPrice = function(price){
        var _price = price
        var _date = {
            year: new Date().getFullYear(),
            month: new Date().getMonth()+1,
            day: new Date().getDate()
        }

        var head = returnHead(_date)

        var _currentDay = ""
        head.siblings(".calendar-tr").find("span i").each(function(){
            if($(this).text() == _date.day){
                _currentDay = $(this)
            }
        })

        //console.log(_currentDay.parent().siblings("span").index(".calendar-wrap span")-6)

       console.log($(".calendar-wrap span").slice(_currentDay.parent().siblings("span").index(".calendar-wrap span")+3))

    }

    $.fn.SetCalendar = function(date, to){
        
        var _date = {
            year: date != undefined ? date.split('/')[0] : "",
            month: date != undefined ? date.split('/')[1] : "",
            day: date != undefined ? date.split('/')[2] : ""
        }


        

        function sliceDaily(reset){
            if(reset == 1){
                $(".calendar-wrap span").removeClass("section")
            }

            if($(".calendar-wrap span.from").length > 0){
                $(".calendar-wrap span").slice(($("span.to").index(".calendar-wrap span")), ($("span.from").index(".calendar-wrap span"))).addClass("section")
            }
        }


        if(date != undefined){
            var head = returnHead(_date)

            head.siblings(".calendar-tr").find("span i").each(function(){
                if($(this).text() == _date.day){

                    if(to == true){
                        $(this).wrap("<label></label>").before("<i class="\"state\"">返程</i>").parent().parent().addClass("section from")

                    }else{
                        $(this).wrap("<label></label>").before("<i class="\"state\"">去程</i>").parent().parent().addClass("section to")
                    }
                }
            })

            //console.log($("span.to").index(".calendar-wrap span")-6, $("span.from").index(".calendar-wrap span")-6, ($("span.from").index(".calendar-wrap span")-6) - ($("span.to").index(".calendar-wrap span")-6));
            
            
            //$(".calendar-wrap span").slice(($("span.to").index(".calendar-wrap span")-6), ($("span.from").index(".calendar-wrap span")-6)).addClass("section")

            sliceDaily()
        }

        


        $("body").on("click", ".calendar-item span:not('.useless')", function(){
            var _today = {};
            var _index = $(this).index()
            _today.day = $(this).find('.daily').text()
            _today.yearMonth = $(this).parent().siblings("h3").text()
            _today.week = $(".calendar-head span").eq(_index).text()

            
            if($(".calendar-wrap .to").length>0){
                $(this).addClass("section from").children("i").wrap("<label></label>").before("<i class="\"state\"">返程</i>")
                Cookies.set("back-tracking", _today.yearMonth+ _today.day +"日, 周"+ _today.week)
            }

            if($(".calendar-wrap .to").length == 0){
                $(this).addClass("section to").children("i").wrap("<label></label>").before("<i class="\"state\"">去程</i>")
                Cookies.set("trip-tracking", _today.yearMonth+ _today.day +"日, 周"+ _today.week)  //2017年10月26日，周一
            }

            sliceDaily(1)

            window.history.go(-1)
            // if(!$(this).hasClass("section to")){
            //     $(this).addClass("section to").find("i").wrap("<label></label>").before("<i class="\"state\"">去程</i>")
            // }
            //return _today;
        })


        $("body").on("click", ".calendar-wrap span:not('.useless')", function(){
            if($(this).hasClass("to") == false){
               $(".calendar-wrap span.from").not($(this)).removeClass(function(index){
                    if(!$(this).hasClass("to")){
                        $(this).removeClass("section from")
                    }
               }).each(function(){
                    var $_thisDaliy = $(this).find(".daily").text()
                    $(this).find("label").replaceWith("<i class="\"daily\"">" + $_thisDaliy + "</i>").end().addClass("section")
                    sliceDaily(1)
                })
            }
        })

    }



    
    



    







    


})</\></=></\></\></span></\></span></\></span></\></span></\></span></\></span></\></span></=></div>