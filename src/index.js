module.exports = function toReadable(number) {
    const readableNumber = new Map([
        ["0", "zero"],
        ["1", "one"],
        ["2", "two"],
        ["3", "three"],
        ["4", "four"],
        ["5", "five"],
        ["6", "six"],
        ["7", "seven"],
        ["8", "eight"],
        ["9", "nine"],
        ["10", "ten"],
        ["11", "eleven"],
        ["12", "twelve"],
        ["13", "thirteen"],
        ["14", "fourteen"],
        ["15", "fifteen"],
        ["16", "sixteen"],
        ["17", "seventeen"],
        ["18", "eighteen"],
        ["19", "nineteen"],
        ["20", "twenty"],
        ["30", "thirty"],
        ["40", "forty"],
        ["50", "fifty"],
        ["60", "sixty"],
        ["70", "seventy"],
        ["80", "eighty"],
        ["90", "ninety"],
        ["100", "one hundred"],
        ["200", "two hundred"],
        ["300", "three hundred"],
        ["400", "four hundred"],
        ["500", "five hundred"],
        ["600", "six hundred"],
        ["700", "seven hundred"],
        ["800", "eight hundred"],
        ["900", "nine hundred"],
    ]);

    let numberInStrType = number.toString();
    let result = "";

    if (readableNumber.get(numberInStrType)) {
        result = readableNumber.get(numberInStrType);
    } else {
        switch (true) {
            case numberInStrType.length === 3 && numberInStrType[2] === "0":
                result = `${readableNumber.get(numberInStrType[0])} hundred ${readableNumber.get(numberInStrType[1] + "0")}`;
                break;
            case numberInStrType.length === 3 && numberInStrType[1] === "1":
                result = `${readableNumber.get(numberInStrType[0])} hundred ${readableNumber.get(numberInStrType.substring(numberInStrType.length - 2))}`;
                break;
            case numberInStrType.length === 3 && numberInStrType[1] === "0":
                result = `${readableNumber.get(numberInStrType[0])} hundred ${readableNumber.get(numberInStrType[2])}`;
                break;
            case numberInStrType.length === 3:
                result = `${readableNumber.get(numberInStrType[0])} hundred ${readableNumber.get(numberInStrType[1] + "0")} ${readableNumber.get(numberInStrType[2])}`;
                break;
            default:
                result = `${readableNumber.get(numberInStrType[0] + "0")} ${readableNumber.get(numberInStrType[1])}`;
                break;
        }
    }

    return result;
};
