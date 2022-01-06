function toReadable(n){
    const digitsOne = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const digitsTen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const namesTen = ['twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    if (String(n).length == 1) {
        console.log(digitsOne[n - 1]);
    } else if (String(n).length == 2) {
        if (+String(n)[0] == 1) {
            console.log(digitsTen[+String(n)[1]]);
        } else {
            console.log(namesTen[+String(n)[0]-2] + ' ' + digitsOne[+String(n)[1]-1]);
        }
    } else if ((String(n).length == 3)) {
        if (String(n)[1] == 0) {
            console.log(digitsOne[+String(n)[0]-1] + ' hundred ' + digitsOne[+String(n)[2]-1]);
        } else if (+String(n)[1] == 1) {
            console.log(digitsOne[+String(n)[0]-1] + ' hundred ' + digitsTen[+String(n)[2]]);
        } else if (+String(n)[1] > 1) {
            if (+String(n)[2] == 0) {
                console.log(digitsOne[+String(n)[0]-1] + ' hundred ' + namesTen[+String(n)[1]-2]);
            } else  if (+String(n)[2] != 0) {
                console.log(digitsOne[+String(n)[0]-1] + ' hundred ' + namesTen[+String(n)[1]-2] + ' ' + digitsOne[+String(n)[2]-1]);
            }
        }
    }
}
toReadable(999);