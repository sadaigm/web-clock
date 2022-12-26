export const bgs = [];

export const getBGindex = (index: number) => {
    return index>0?(index % bgs.length):index;
}

export const getBG = (index: number) => {
    const bgIndex = getBGindex(index);
    console.log(bgIndex);
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
    const fullYear = time.getFullYear();
    const secondDeg = seconds * (360 / 60)
    const minuteDeg = minutes * (360 / 60) + secondDeg / 60
    const hoursDeg = hours * (360 / 12) + minuteDeg / 12
    return { secondDeg, minuteDeg, hoursDeg, hours, minutes, today, month, fullYear };
}