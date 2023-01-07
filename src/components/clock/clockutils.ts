export const bgs = [];

export const getBGindex = (index: number) => {
    return index>0?(index % bgs.length):index;
}

export const getBG = (index: number) => {
    const bgIndex = getBGindex(index);
    return bgs[bgIndex];
}

getBG(19);

export const convertTZ = (date: Date, tzString: string): Date => {
            return new Date(
                (typeof date === 'string'
                    ? new Date(date)
                    : date
                ).toLocaleString('en-US', { timeZone: tzString })
            )
        }
export const WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; 
export const weekday = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
export const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
export const MONTHS_VALUES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
export function getHandDegree(time: Date, timeZone: string | undefined) {
    if (timeZone) {
        const timewithZone = convertTZ(time, timeZone)        
        time = timewithZone
    }
    const seconds = time.getSeconds()
    const minutes = time.getMinutes()
    const hours = time.getHours()
    const today = time.getDate()
    const month = time.getMonth()
    const day = time.getDay()
    const fullYear = time.getFullYear();
    const secondDeg = seconds * (360 / 60)
    const minuteDeg = minutes * (360 / 60) + secondDeg / 60
    const hoursDeg = hours * (360 / 12) + minuteDeg / 12
    return { secondDeg, minuteDeg, hoursDeg, hours, minutes, today, month, fullYear, day };
}