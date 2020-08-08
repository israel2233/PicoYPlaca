export function getDateFormat(date:string){
    var day=Number(date.substr(0,2));
    var month=Number(date.substr(3,2));
    var year=Number(date.substr(6,4))
    return new Date(year, month, day)
}

export function determinateDateEarlier(date:Date){
    if(date<new Date()){
        return false;
    }
    return true;
}

export function getDayOfWeek(date:Date){
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day:string=days[date.getDay()];
    return day;
}

export function getLastNumberPlaca(placa:string){
    return Number(placa.substr(placa.length-1))
}

export function detHour(hour:string){
    var hour1 = new Date(0,0,0,7,0);
    var hour2 = new Date(0,0,0,9,30);
    var hour3 = new Date(0,0,0,16,0);
    var hour4 = new Date(0,0,0,19,30);
    var hh=Number(hour.substr(0,2));
    var mm=Number(hour.substr(3,2));
    var hourUser=new Date(0,0,0,hh,mm);
    if (hourUser >= hour1 && hourUser <= hour2  ) {
        return true;
    }else if(hourUser >= hour3 && hourUser <= hour4){
        return true;
    }
    else {
        return false;
    }

}

export function determinatePicoYPlaca(placa:string,date:string,hour:string){
    const day:string=getDayOfWeek(getDateFormat(date));
    const lastnumber=getLastNumberPlaca(placa);
    type picoPlaca={
        [key:string]:Array<Number>
    }

    const pico:{[key:string]:Array<Number>}={
        Monday:[1,2],
        Tuesday:[3,4],
        Wednesday:[5,6],
        Thursday:[7,8],
        Friday:[9,0],
        Saturday:[],
        Sunday:[]}

    

    if(pico[day] && detHour(hour) && pico[day].indexOf(lastnumber)!=1){
        return true;
    }else{
        return false;
    }
};
