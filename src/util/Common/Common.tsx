const offSet = 19800000;
const getDate = (datestring: string) => {
    const date = new Date(datestring);
    var newDateObj = new Date(date.getTime() + offSet).toLocaleDateString();
    return newDateObj;
};

const getTime = (datestring: string) => {
    const time = new Date(datestring);
    var newDateObj = new Date(time.getTime() + offSet).toLocaleTimeString().toLocaleUpperCase();
    return newDateObj;
};

export { getDate, getTime };
