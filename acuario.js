//console.log("TODO BIEN!!!");

  function spseok(ok){
    var data = { url: ok.responseURL, json: ok.response };
    var donde = "http://127.0.0.1/patrim/pruebas/acuario/";
    $.post( donde, data )
        .done(function( data ) {
            //alert( "Data Loaded: " + data );
    });
  }
  (function() {
    var XHR = XMLHttpRequest.prototype;
    var send = XHR.send;
    var open = XHR.open;
    XHR.open = function(method, url) {
        this.url = url; // the request url
        return open.apply(this, arguments);
    }
    XHR.send = function() {
        this.addEventListener('load', function() {
            if( this.status == 200 ){
                if (this.url.includes('/variable-dispositivo/ver-ultima-lectura')) {
                    spseok(this);
                }
            }
        });
        return send.apply(this, arguments);
    };
  })();

