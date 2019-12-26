/*Parse api results*/

const celsiusSign = '&#8451;';
const fahrenheitSign = '&#8457;';
const imageSrc = 'https://developer.accuweather.com/sites/default/files/';
const imageType = '-s.png';


export function currentCityResponse(res: Object, id: string, name: string) {
    return {
        id: id,
        name: name,
        c: Math.round(res['Temperature'].Metric.Value).toString() + celsiusSign,
        f: Math.round(res['Temperature'].Imperial.Value).toString() + fahrenheitSign,
        icon: parseIcon(res['WeatherIcon']),
    }
}


export function daysResponse(res: any) {
    let days_list = [];
    res.forEach(element => {
        days_list.push({
            day: timeStampToDay(element['EpochDate']),
            icon: parseIcon(element['Day'].Icon),
            c: getCelsius(element['Temperature']),
            f: calcFahrenheit(element['Temperature'])
        });
    });
    return days_list;
}

function parseIcon(icon : any){
    icon = parseInt(icon) < 10 ? '0'+icon : icon; 
    return imageSrc+icon+imageType;
}


function calcFahrenheit(celsius: any) {
    let min = Math.round(celsius.Minimum.Value * 1.8) + 32;
    let max = Math.round(celsius.Maximum.Value * 1.8) + 32;
    return min.toString() + '-' + max.toString() + fahrenheitSign;
}


function getCelsius(celsius: any) {
    let min = Math.round(celsius.Minimum.Value).toString();
    let max = Math.round(celsius.Maximum.Value).toString();
    return min + '-' + max + celsiusSign;
}


function timeStampToDay(timestamp: any) {
    let day = new Date(0);
    day.setUTCSeconds(timestamp);
    return day.toString().substring(0, 3);
}
