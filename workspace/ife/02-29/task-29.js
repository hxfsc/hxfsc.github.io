( function(){
	
	/**
     * 简单的选择器
     *
     */

    function $( element ){
        return document.getElementById( element );
    }

    function tag( element ){
    	return document.getElementsByTagName( element );
    }
    /**
     * 兼容操作
     * addListerHandler 监听事件
     * preventDefault 阻止默认事件
     * stopPropagation 阻止默认事件
     */
    var EventUtil = {
        addListerHandler: function(element, type, handle) {
            if (element.addEventListener) {
                element.addEventListener(type, handle, false);
            } else if (element.attachEvent) {
                element.attachEvent('on' + type, handle);
            } else {
                element['on' + type] = handle;
            }
        },

        preventDefault : function( event ){
        	if( event.preventDefault ){
        		event.preventDefault();
        	}else{
        		event.returnValue = false;
        	}
        },

        stopPropagation: function( event ){
        	if( event.stopPropagation ){
        		event.stopPropagation();
        	}else{
        		event.cancelBubble = true;
        	}
        }
    }

    /**
   	* 表单序列化
    */

    var _verfication = {
    	trim : /^\s+|\s+$/g,
    	zhReg : /[\u4E00-\uFA29]|[\uE7C7-\uE7F3]/g,
    	length: /^.{4,16}$/
    }
   	

   	var _verficationStyle = {
   		error : "1px solid #FD000C",
   		waring : "1px solid #AB7657",
   		success: "1px solid #29A233"
   	}

   	var _verficationMsg = {
   		error : "姓名不能为空",
   		waring : "姓名长度为4-16个字符",
   		success : "名称格式正确"
   	}

   	EventUtil.addListerHandler( $( "verification-submit-btn" ), "click", function( e ){

   		var _inputText = $("verification-text").value;
   		_inputText = _inputText.replace( _verfication.trim, '').replace( _verfication.zhReg, 'aa');
   		
   		
   		if( _inputText.length == "" ){
   			tag("p")[0].innerHTML = _verficationMsg.error;
   			tag("p")[0].style.color = "#FD000C";
   			$("verification-text").style.border = _verficationStyle.error;
   		}else if( !_verfication.length.test( _inputText ) ){
	   		tag("p")[0].innerHTML = _verficationMsg.waring;
	   		tag("p")[0].style.color = "#FD000C";
	   		$("verification-text").style.border = _verficationStyle.waring;
	   	}else{
	   		tag("p")[0].innerHTML = _verficationMsg.success;
	   		tag("p")[0].style.color = "#29A233";
	   		$("verification-text").style.border = _verficationStyle.success;
	   	}
   		EventUtil.preventDefault( e );
   	} );
} )()