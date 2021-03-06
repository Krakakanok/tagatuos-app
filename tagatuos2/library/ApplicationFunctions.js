/*
  This library contains functions used within Tagatuos app.
  This includes functions that execute functions from ProcessFunc.js
  with some parameters predetermined using app specific variable such as
  setting values (i.e. current currency).


*/

.import "ProcessFunc.js" as Process


function formatMoney(value, noSymbol){
    var options = {
        symbol : noSymbol ? "" : tempSettings.currentCurrencySymbol,
        decimal : tempSettings.currentCurrencyDecimal,
        thousand: tempSettings.currentCurrencyThousand,
        precision : tempSettings.currentCurrencyPrecision,
        format: tempSettings.currentCurrencyFormat
    };
    return Process.formatMoney(value, tempSettings.currentCurrency,options)

}

function formatMoneyTravel(value, noSymbol){
    var options = {
        symbol : noSymbol ? "" : tempSettings.travelCurrencySymbol,
        decimal : tempSettings.travelCurrencyDecimal,
        thousand: tempSettings.travelCurrencyThousand,
        precision : tempSettings.travelCurrencyPrecision,
        format: tempSettings.travelCurrencyFormat
    };
    return Process.formatMoney(value, tempSettings.travelCurrency,options)

}


function getContrastYIQ(hexcolor){
//    hexcolor = String(hexcolor).substring(1)
//    var r = parseInt(hexcolor.substr(0,2),16);
//    var g = parseInt(hexcolor.substr(2,2),16);
//    var b = parseInt(hexcolor.substr(4,2),16);

    var rgb = hexToRgb(hexcolor)
    var r = rgb.r
    var g = rgb.g
    var b = rgb.b

    var yiq = ((r*299)+(g*587)+(b*114))/1000;
    return (yiq >= 128)
}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}


