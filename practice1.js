module.exports.sign = function(day,month){
    
    if (month == "december"){
          
        if (day < 22)
         return "Sagittarius";
        else
         return "capricorn";
    }
           
    else if (month == "january"){
        if (day < 20)
        return "Capricorn";
        else
        return "aquarius";
    }
           
    else if (month == "february"){
        if (day < 19)
        return "Aquarius";
        else
        return "pisces";
    }
           
    else if(month == "march"){
        if (day < 21)
        return "Pisces";
        else
        return "aries";
    }
    else if (month == "april"){
        if (day < 20)
        return "Aries";
        else
        return "taurus";
    }
           
    else if (month == "may"){
        if (day < 21)
        return "Taurus";
        else
        return "gemini";
    }
           
    else if( month == "june"){
        if (day < 21)
        return "Gemini";
        else
        return "cancer";
    }
           
    else if (month == "july"){
        if (day < 23)
        return "Cancer";
        else
        return "leo";
    }
           
    else if( month == "august"){
        if (day < 23)
        return "Leo";
        else
        return "virgo";
    }
           
    else if (month == "september"){
        if (day < 23)
        return "Virgo";
        else
        return "libra";
    }
           
    else if (month == "october"){
        if (day < 23)
        return "Libra";
        else
        return "scorpio";
    }
           
    else if (month == "november"){
        if (day < 22)
        return "scorpio";
        else
        return "sagittarius";
    }
};