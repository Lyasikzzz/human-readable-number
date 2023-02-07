module.exports = function toReadable (number) {
    const units = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"],
    dozens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    let result;
    if (number == 0) {
        console.log("zero");
        return "zero";
    } else if (number > 0 && number < 20) {
        result = units[number];
        console.log(result);
        return result;
    } else if (number >= 20 && number < 100) {
        result = `${dozens[+((number + '').slice(0, 1))]} ${units[+((number + '').slice(-1))]}`;
        console.log(result.trim());
        return result.trim();
    } else if (number >= 100 && number < 1000) {
        if (((number + '').slice(-2)) == "00") {
            result = `${units[+((number + '').slice(0, 1))]} hundred`;
            console.log(result);
            return result;
        } else if (+((number + '').slice(-2)) < 20) {
            result = `${units[+((number + '').slice(0, 1))]} hundred ${units[+((number + '').slice(-2))]}`;
            console.log(result);
            return result;
        } else if (+((number + '').slice(-2)) >= 20) {
            result = `${units[+((number + '').slice(0, 1))]} hundred ${dozens[+((number + '').slice(1, 2))]} ${units[+((number + '').slice(-1))]}`;
            console.log(result.trim());
            return result.trim();
        }
    }
};