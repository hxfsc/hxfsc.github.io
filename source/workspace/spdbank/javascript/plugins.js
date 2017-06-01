function CoustomModal(obj) {
  this.obj = obj;
}






$(function() {

  "use strict";

  var window_width = $(window).width();


  $(window).load(function() {
    setTimeout(function() {
      $('body').addClass('loaded');
    }, 200);
  });

  $('.show-search').click(function() {
    $('.search-out').fadeToggle( "50", "linear" );
  });





  $('select').not('.disabled').material_select();
    var leftnav = $(".page-topbar").height();
    var leftnavHeight = window.innerHeight - leftnav;
  $('.leftside-navigation').height(leftnavHeight).perfectScrollbar({
    suppressScrollX: true
  });
    var righttnav = $("#chat-out").height();
  $('.rightside-navigation').height(righttnav).perfectScrollbar({
    suppressScrollX: true
  });




  var window_height = $(window).height();

  var $_main = $("#content").height();

  if( $_main < window_height - parseInt($("#header").height()+80)){
    $(".page-footer").css({
          "position": "fixed",
          "width": "100%",
          "bottom": 0
    });
  }



  $("#product-off-wrap table tr td:first-child label").on({
    "click":function(){
      var $_input =  $(this).prev("input");
      var $_isChecked = $_input.is(":checked");

      if($_isChecked){
        $_input.removeClass("filled-in");
        $_input.prop("checked",false);

      }else{
        $_input.addClass("filled-in");
        $_input.prop("checked",true);
      }
    }
  });

  $("#product-handle-all").on({
    click:function(){
      $("#product-off-wrap table tr td:first-child").find("input:checkbox").addClass("filled-in").prop("checked",true);
    }
  })




  CoustomModal.prototype = {

    /**
     * *
     * @param  {[type]} option [description]
     * @return {[type]}        [description]
     */
    show_modal:function(option, type){
      var _this = this;
      var _el = option.el != undefined && option.el != "" ?  option.el : _this.obj['el'];
      var _opel = option.opel != undefined && option.opel != "" ?  option.opel : _this.obj['opel'];
      var _color = "";
      switch(type){
        case 'red':
          _color = 'red';
          break;
        case 'yellow':
          _color = 'yellow';
          break;
        default :
          _color = "";
          break;
      }

      var _confirmBtn = false;

      if( option.callback != undefined && option.callback != "" ){
          _confirmBtn = true;


      }

      console.log(option.text);
      var _html = "<div class=\"modal " + _color + "\" id=\"" + _opel + "\">"
                +  "<style type=\"text/css\">"
                +  "#"+_opel +"{ top:50px; width:30%;};"
                +   "</style>"
                +  "<div class=\"modal-content\">"
                +    "<p>" + option.text+ "</p>"
                +  "</div>"
                +  "<div class=\"modal-footer "+ _color +" lighten-4\">"
                +    "<a href=\"javascript:void(0);\" class=\"waves-effect waves-red btn-flat modal-action modal-close\" id=\"modal_close\">关闭</a>"
                +    ((_confirmBtn == true) ? "<a href=\"#\" class=\"waves-effect waves-red btn-flat modal-action\" id=\"modal_confirm\">确认</a>" : "")
                +  "</div>"
                +"</div>";
      if($("#"+_opel).length > 0){
          $("#"+_opel).remove();
      }
      $(_el).append(_html);
      $("#"+_opel).show();

      console.log("body " + "#"+_opel + " #modal_close");

      $("body " + "#"+_opel + " #modal_close").click(function(){

        if(option.callback != undefined && option.callback != ""){
          option.callback['setClose']();
        }
        setTimeout(function(){
          $("#"+_opel).remove();
        },300)
      });

      $("body " + "#" + _opel + " #modal_confirm").click(function(){
          if(option.callback != undefined && option.callback != ""){
            option.callback['setConfirm']();
          }
          setTimeout(function(){
            $("#"+_opel).remove();
          },300);
      });





    },

    show_info_modal:function(option){
      CoustomModal.call(this.show_modal(option,''));
    },

    show_error_modal:function(option){
      CoustomModal.call(this.show_modal(option,'red'));
    },

    show_waring_modal:function(option){
      CoustomModal.call(this.show_modal(option,'yellow'));
    },

    show_tips:function(option, type){

      var _this = this;
      var _el = option.el != undefined && option.el != "" ?  option.el : _this.obj['el'];
      var _opel = option.opel != undefined && option.opel != "" ?  option.opel : _this.obj['opel'];
      var _color = "";
      switch(type){

        case 'red':
          _color = "red";
          break;

        case 'green':
          _color = "green";
          break;

        case 'yellow':
          _color = "yellow";
          break;

        default :
          _color = "blue";
          break;
      }


      var _html = "<span style=\"padding-right:20px; display:inline-block;\" class=\"new badge " + _color + " darken-3\" id=\"" + _opel + "\">" + option.text + "<label style=\"position:absolute; right:0;top:1px;padding-left: 3px;padding-right: 3px;margin-left: 5px; left:inherit; font-size:11px; cursor: pointer;\">✕</label></span>";
      if($("#"+_opel).length > 0){
        $("#"+_opel).remove();
      }

      $(_el).append(_html);

      $("body span.badge label").on({
        click:function(){
          $("#"+_opel).remove();
        }
      })
    },

    show_waring_tips:function(option){
      CoustomModal.call(this.show_tips(option,'yellow'));
    },

    show_error_tips:function(option){
      CoustomModal.call(this.show_tips(option,'red'));
    },

    show_info_tips:function(option){
      CoustomModal.call(this.show_tips(option,'green'));
    }

  }



}); // end of document ready
