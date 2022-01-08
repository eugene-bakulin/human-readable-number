module.exports = function toReadable (n) {
        const digitsOne = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
        const digitsTen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
        const namesTen = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
        if (String(n).length == 1) {
            if (+(String(n).charAt(0)) == 0) {
                return 'zero';
            } else {
                return digitsOne[n - 1];
            }
        } else if (String(n).length == 2) {
            if (+(String(n).charAt(0)) == 1) {
                return digitsTen[+(String(n).charAt(1))];
            } else if (+(String(n).charAt(1)) == 0) {
                return namesTen[+(String(n).charAt(0)) - 1];
            } else {
                return namesTen[+(String(n).charAt(0)) - 2] + ' ' + digitsOne[+(String(n).charAt(1))-1];
            }
        } else if ((String(n).length == 3)) {
            if (String(n).charAt(1) == 0) {
                if (String(n).charAt(2) == 0) {
                    return digitsOne[+(String(n).charAt(0)) - 1] + ' hundred';
                } else {
                    return digitsOne[+(String(n).charAt(0)) - 1] + ' hundred ' + digitsOne[+(String(n).charAt(2)) - 1];
                }
            } else if (+(String(n).charAt(1)) == 1) {
                return digitsOne[+(String(n).charAt(0)) - 1] + ' hundred ' + digitsTen[+(String(n).charAt(2))];
            } else if (+(String(n).charAt(1)) > 1) {
                if (+(String(n).charAt(2)) == 0) {
                    return digitsOne[+(String(n).charAt(0)) - 1] + ' hundred ' + namesTen[+(String(n).charAt(1)) - 2];
                } else  if (+(String(n).charAt(2)) != 0) {
                    return digitsOne[+(String(n).charAt(0)) - 1] + ' hundred ' + namesTen[+(String(n).charAt(1)) - 2] + ' ' + digitsOne[+(String(n).charAt(2)) - 1];
                }
            }
        }
    }