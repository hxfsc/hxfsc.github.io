(function($){

    var defaults = {
        input:"",
        opearaction: "go",
        startTime: "",
        endTime: "",
        toolbarText: "选择去程日期",
        price: "",
        callback: function(){}
    }

    log = console.log.bind(this)
    
    var _calendarHTML = $("<div id="calendar-box-wrap"></div>")

    $.extend({

        calendar: function(options){
            //FastClick.attach(document.body)
            options = $.extend(true, defaults, options)
            //console.log(options)
            var _tabbar = this.createTabbar(options.toolbarText)
            _calendarHTML.append(_tabbar)

            var _calendar = this.createCalendar(options)
            _calendarHTML.append(_calendar)

            $("body").append(_calendarHTML)


            this.setGoBackSign(options)

            this.setFlightPrice(options)

            this.operationEvent(options)


            
            this.colseCalendar()
        },


        //生成日历
        createCalendar: function(options){
            var _startdate = moment()
            var _enddate = moment().add(1, 'y')
            //console.log(_startdate.year())

            var _html = ""
            _html = `
                <div id="calendar-box">
                    <div class="calendar-wrap">
                        <div class="calendar-head">
                            <span class="weekend">日</span>
                            <span>一</span>
                            <span>二</span>
                            <span>三</span>
                            <span>四</span>
                            <span>五</span>
                            <span class="weekend">六</span>
                        </div>
                    ` + _months() + `
                </div>
            `

            //生成月份
            function _months(){
                var _html = ""

                for(var i=0; i<12; i++){ var _date="moment().add(i," 'm') _html +="`" <div class="calendar-item">
                            <h3>` + _date.year() + `年` + (_date.month()+1) + '月' + `</h3>
                            ` + _days(_date) + `
                        </12;></div>
                    `
                }

                return _html
                
            }

            //生成天数
            function _days(date){
                var _date = date
                var _days = _date.date()

                var _totalDay = new Date(_date.year(), _date.month()+1, 0).getDate()
                var _startDay = new Date(_date.year(), _date.month(), 1).getDay()
                var _prevMonthDay = new Date(_date.year(), _date.month(), 0).getDate()
                var _week = 0

                
                var _html = `
                        <div class="calendar-tr">
                    `

                var _prevMonthDays = []
                
                for(var j = 0; j<_startday; 10 j++){ _prevmonthdays.push(_prevmonthday--) } _prevmonthdays.reverse() for(var j="0;" j<_startday; _html +="`" <span class="weekend useless" data-date="`+ _date.year() + " -"+ ((_date.month()) < ? ('0'+(_date.month())) : _date.month()) "-" _prevmonthdays[j] +`">
                            <label>
                                <i class="state"></i>
                                <i class="daily">`+ _prevMonthDays[j] +`</i>
                                <i class="price"></i>
                            </label>
                        
                    `
                    _week++
                }

                for(var j = 1; j<=_totalday; 10 j++){ _html +="`" <span data-date="`+ _date.year() + " -"+ ((_date.month()+1) < ? ('0'+(_date.month()+1)) : _date.month()+1) "-" ((j<10) '0'+j j) +`">
                            <label>
                                <i class="state"></i>
                                <i class="daily">`+ j +`</i>
                                <i class="price"></i>
                            </label>
                        
                    `
                    _week++

                    if(j-_totalDay==0 && _week != 0){
                        for(var k = 0; k< 7- _week; k++){
                            _html += `
                                <span 10 class="weekend useless" data-date="`+ _date.year() + " -"+ ((_date.month()+2) < ? ('0'+(_date.month()+2)) : _date.month()+2) + "-" ((k<10) '0'+k k) +`">
                                    <label>
                                        <i class="state"></i>
                                        <i class="daily">`+(k+1)+`</i>
                                        <i class="price"></i>
                                    </label>
                                </span>
                            `
                        }
                    }

                    if(_week == 7){
                        _html += `
                            </=_totalday;></_startday;></div>
                            <div class="calendar-tr">
                        `
                        _week = 0
                    }

                    if(j-_totalDay == 0){
                        _html += `
                            </div>
                        `
                    }


                }

                return _html
            }

            return _html
        },

        //生成日历 Toolbar
        createTabbar: function(text){
            
            var _html = `<div class="flight-search-tool-tabbar">
                <i class="arrow left"></i>
                <div class="tabbar-text">
                    <span class="tips">` + text + `</span>
                </div>
            </div>`
            
            return _html
        },


        //设置去返程
        setGoBackSign: function(options){
            var _startIndex, _endIndex

            if(options.startTime !=''){
                $(".calendar-wrap .calendar-item span:not('.useless')").each(function(){
                    if($(this).data('date') == options.startTime){
                        $(this).addClass("to-trip")
                        _startIndex = $(this).index(".calendar-wrap .calendar-item span:not('.useless')")
                        $(this).find(".state").html("去程")
                    }
                })
            }

            if(options.endTime !=''){
                $(".calendar-wrap .calendar-item span:not('.useless')").each(function(){
                    if($(this).data('date') == options.endTime){
                        $(this).addClass("from-trip")
                        _endIndex = $(this).index(".calendar-wrap .calendar-item span:not('.useless')")
                        $(this).find(".state").html("返程")
                    }
                })
            }

            if(options.startTime !='' && options.endTime !=''){
                $(".calendar-wrap .calendar-item span:not('.useless')").slice(_startIndex, _endIndex).addClass("section")
            }
        },


        //设置价格
        setFlightPrice(options){
            var _price = options.price
            if(_price != ""){
                var _calendarSpan = $(".calendar-wrap .calendar-item span")
                for(var i = 0; i < _price.length; i++){
                    _calendarSpan.each(function(){
                        if($(this).data("date") == _price[i].time){
                            $(this).find(".price").html(_price[i].price)
                        }
                    })
                }
            }
        },

        //操作
        operationEvent: function(options){
            var _date = ""
            var _this = this;
            $("body").on("click", ".calendar-tr span:not('.useless')", function(){
                
                if(options.opearaction == "go"){
                    if(moment($(this).data("date")).isBefore($(".from-trip").data("date")) || $(".from-trip").data("date") == undefined){
                        $(".to-trip").removeClass("to-trip").find(".state").html("")
                        $(".section").removeClass("section")

                        $(this).addClass("to-trip")
                        $(this).find(".state").html("去程")

                        if($(".from-trip").length > 0){
                            $(".calendar-tr span:not('.useless')")
                                .slice($(".to-trip").index(".calendar-tr span:not('.useless')"), $(".from-trip").index(".calendar-tr span:not('.useless')"))
                                .addClass("section")
                        }

                        _returnDate($(this).data("date"))
                        options.callback()
                    }else{
                        _this.toast("去程必须在返程之前")
                    }
                }

                if(options.opearaction == "back"){
                    if(moment($(this).data("date")).isAfter($(".to-trip").data("date")) || $(".to-trip").data("date") == undefined){
                        $(".from-trip").removeClass("from-trip").find(".state").html("")
                        $(".section").removeClass("section")

                        $(this).addClass("from-trip")
                        $(this).find(".state").html("返程")

                        if($(".to-trip").length > 0){
                           $(".calendar-tr span:not('.useless')")
                                .slice($(".to-trip").index(".calendar-tr span:not('.useless')"), $(".from-trip").index(".calendar-tr span:not('.useless')"))
                                .addClass("section") 
                        }

                        _returnDate($(this).data("date"))
                        options.callback()
                    }else{
                        _this.toast("返程必须在去程之后")
                    }
                }        
            })

            
            function _returnDate(date){
                _date = date
                var _returnText = ""

                _returnText = moment(_date).year() + "年" 
                            + (((moment(_date).month()+1)<10) ? "0"+(moment(_date).month()+1) : (moment(_date).month()+1)) + "月" (((moment(_date).date())<10) "0"+moment(_date).date() (moment(_date).date())) "日" ", 周" _this.week(moment(_date).day()) log(_returntext) log(options.input) options.input.val(_returntext) $(_calendarhtml).remove() _calendarhtml="$("<div" id="calendar-box-wrap">")
            }
        },


        //返回星期
        week: function(day){
            var _week = ""

            switch(day){
                case 0:
                    _week = "日";
                    break;
                case 1:
                    _week = "一";
                    break;
                case 2:
                    _week = "二";
                    break;
                case 3:
                    _week = "三";
                    break;
                case 4:
                    _week = "四";
                    break;
                case 5:
                    _week = "五";
                    break;
                case 6:
                    _week = "六";
                    break;
                default:
                    _week = "日"
                    break;
            }

            return _week
        },

        //Toast
        toast: function(text){
            var _html = `
                <div class="toast-bg"></div>
                <div class="toast-wrap">
                    <h3>` + text + `</h3>
                </div>
            `
            $("body").append($(_html))

            $(".toast-wrap").css({
                marginTop: ($("body,html").scrollTop() + $(window).height()/2)
            })
            $(".toast-bg").css({
                height: $("#calendar-box-wrap").height()
            })


            $("body").on("click",".toast-bg, .toast-wrap",function(){
                $(".toast-bg, .toast-wrap").remove()
            })
        },

        //Toolbar 关闭日历
         colseCalendar: function(){
            $("body").on("click", ".flight-search-tool-tabbar", function(){
                $(_calendarHTML).remove()
                _calendarHTML = $("<div id="calendar-box-wrap"></div>")
            })
         }

    })
})(jQuery)</10)>