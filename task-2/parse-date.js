function parseDateString(dateString) {
    const [format, dateValues] = dateString.split(" "); // split by space
    const parts = dateValues.split("-"); // hyphens as separators
    
//  added extra functionality to handle non-numeric values
    let first, second, year;
    
    if (isNaN(parts[0])) {
        first = 0;
    } else {
        first = parseInt(parts[0]);
    }
    
    if (isNaN(parts[1])) {
        second = 0;
    } else {
        second = parseInt(parts[1]);
    }
    
    if (isNaN(parts[2])) {
        year = 0;
    } else {
        year = parseInt(parts[2]);
    }
    /*
     only making it return 0 to folollow the "All returned values should be numbers,
     not strings" requirement
     */
    if (format === "MDY") {
        return { day: second, month: first, year: year };
    }
    return { day: first, month: second, year: year };
}

console.log(parseDateString("MDY ten-twentyone-1983"));
console.log(parseDateString("DMY 21-10-1983"));
console.log(parseDateString("MDY 03-15-2024"));
console.log(parseDateString("DMY 15-0three-2024"));
