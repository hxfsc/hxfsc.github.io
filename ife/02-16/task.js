    /**
     * 简单的选择器
     * 
     */

    function $( element ){
        return document.getElementById( element );
    }
    /**
     * 兼容操作
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
        }
    }

/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};


/**
 * { 城市名称:空气指数 }
 */

var sortData = {};
var _sortData = [];
// var apiData = {};
/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
    
    var _apiData = {};
    var city = $("aqi-city-input").value;
    city = city.trim( city );
    if( !/^[a-zA-Z\u4e00-\u9fa5]+$/.test( city ) ){
        alert("城市名必须为中英文字符");
        return false;
    }
    var airApi = $("aqi-value-input").value;
    airApi = airApi.trim( airApi );
    if( !/^[0-9]+$/.test( airApi ) ){
        alert("空气质量指数必须为整数");
        return false;
    }
   
    _apiData[ city ] = airApi;
    //排序
    
    for( var i in _apiData ){
        _sortData.push( { api : _apiData[ i ], city : i } );
    }
    
    
   
    _sortData.sort( function( a, b ){
        return b.api - a.api;
    });
    
    
    var apiData= {};
    delete apiDatal
    for( var i = 0; i < _sortData.length; i++ ){
        apiData[_sortData[i].city] = _sortData[i].api;
    }
    

    sortData = apiData;
    return apiData;
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList( data ) {
    if( data != false ){
        var _tableTemplate = [];
        var _str = "<table><tr class="\"thead\""><td>城市</td><td>空气质量</td><td>操作</td></tr>";
        _tableTemplate.push( _str );
        for (var i in data) {
          _str = "<tr><td>" + i + "</td><td>" + data[i] + "</td><td class="del" onclick="\"delBtnHandle('"" +="" i="" "')\"="">删除</td></tr>";
            _tableTemplate.push( _str );
        }
        _tableTemplate.push("</table>");
        if( _tableTemplate.length > 1 ){
            var _tableTemplateStr = _tableTemplate.join("");
            $("aqi-table").innerHTML = _tableTemplateStr;
        } else{
            $("aqi-table").innerHTML = "";
        }
        
        
    }
    
   
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  var data = addAqiData();
  renderAqiList( data );
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle( city ) {
  // do sth.
  delete sortData[ city ];
  for( var i = 0; i < _sortData.length; i++ ){
      if( _sortData[i].city === city ){
            _sortData.splice(i,1);
      }
  }
  
  renderAqiList( sortData );
}

function init() {

  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数

  
  EventUtil.addListerHandler( $("add-btn"),"click", addBtnHandle );
  
  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数

}

window.onload = function(){
    if( !String.prototype.trim ){
		String.prototype.trim =  function(){
            return this.replace(/[(^\s+)(\s+$)]/g, "");
        }
	}


    init();
}

