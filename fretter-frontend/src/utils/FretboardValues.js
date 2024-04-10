const fretboardDimensions = {
    height: 96*1.5,
    width: 720*1.5,
};

const getStringPositions = () => {
    return Array(6).fill(0).map((s, i) => (5.5-i) * fretboardDimensions.height/6)
}

const getFretPositions = () => {
    const frets = 20;
    const dMax = 0.95; 

    const scaleLen = dMax / (1 - Math.pow(2, -(frets + 1)/12));

    const perc = Array(frets + 1).fill(0)
        .map((d, n) => scaleLen * (1 - Math.pow(2, -(n + 1)/12)));

    return perc.map(f => f * fretboardDimensions.width);
}

const stringPositions = getStringPositions();
const fretPositions = getFretPositions();

export {fretboardDimensions, stringPositions, fretPositions};