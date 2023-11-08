const utils = (() => {
    function getDayName(dateStr, locale) {

    var date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: 'short' });        
    }

    function formatoDueCifre(numero) {
        return numero < 10 ? "0" + numero : numero.toString();
    }
      
    function giorniFuturi(offset) {
        const data = new Date();
        data.setDate(data.getDate() + offset);
        const giorno = data.getDate();
        return formatoDueCifre(giorno);
    }

    function approssimaOraAttuale() {
        const data = new Date();
        const ora = data.getHours();
        return ora;
    }
      
    return {
        getDayName,
        giorniFuturi,
        approssimaOraAttuale
    };
})();

export default utils;