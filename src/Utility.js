
export const formatLink = (date, data, index) => {
    const newDate = new Date(date);
    const year = newDate.getFullYear();
    let month = newDate.getMonth() + 1;
    let day = newDate.getDate();
    const apiKey = process.env.REACT_APP_API_KEY;
    if (month < 10) {
        month = "0" + month;
    }

    if (day < 10) {
        day = "0" + day;
    }

    const id = data[index].image;

    const url = `https://api.nasa.gov/EPIC/archive/enhanced/${year}/${month}/${day}/png/${id}.png?api_key=${apiKey}`

    return url;
}