
//1

export function split(str:string): string {
    return str.split('_').join(' ');
}

//2

export function concatenate(s1:string, s2:string): string {
    return s1+ s2;
}

//3

export function leapYear(year: number): boolean{
    if(((year % 4 === 0) && year % 100 !=0) || (year % 400 == 0)){
        return true;
    }
    else{
        return false;
    }
}

//4

export function handShake(code : number) : String[]{
    let Handshake: String[]= [];

    if(code & 0b1)  Handshake.push('wink');
    if(code & 0b10)  Handshake.push('double blink');
    if(code & 0b100) Handshake.push('close your eyes');
    if(code & 0b1000)  Handshake.push('jump');
    if(code & 0b10000) Handshake.reverse();

    return Handshake;

}

