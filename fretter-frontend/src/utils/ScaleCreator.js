const notes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
let guitarTuning = [];

const getTuningNotes = (tuning) => {
    guitarTuning = [];

    tuning.sort((a, b) => {
        return a.string_number - b.string_number;
    });

    tuning.forEach(note => {
        guitarTuning.push(note.note.name);
    });
}

const getScale = (scaleIntervals, startingNote, tuning) => {
    let intervals = [];
    let degrees = [];

    if (scaleIntervals?.length === 0) {
        return;
    }

    scaleIntervals.map((scaleInterval) => {
        intervals.push(scaleInterval.frets_from_root);
        degrees.push(scaleInterval.short_name);
    });

    getTuningNotes(tuning);
    
    const scale = getSpecifiedScale(intervals, startingNote, guitarTuning, degrees);

    return scale;
}

const getSpecifiedScale = (intervals, startingNote, tuning, degrees) => {
    const notes = getScaleNotes(intervals, startingNote);

    if (notes?.length === 0) {
        return ([]);
    }

    const scaleFrets = getScaleFrets(notes, tuning, degrees);
    return scaleFrets;
}

const getScaleNotes = (intervals, startingNote) => {
    let startIndex = notes.indexOf(startingNote);
    let scaleNotes = [startingNote];

    if (startIndex === -1 || startingNote === '' || intervals?.length === 0) return ([]);

    intervals.map((val, i) => {
        if (i !== 0) {
            const nextIndex = startIndex+val;
            const noteIndex = nextIndex%12;
            const note = notes[noteIndex];
            scaleNotes.push(note);
        }   
    });

    return scaleNotes;
}

const getScaleFrets = (scaleNotes, tuning, degrees) => {
    let frets = [];

    tuning.forEach((startNote) => {
        const startIndex = notes.indexOf(startNote);
        let stringFrets = [];

        scaleNotes.forEach((note, i) => {
            let noteIndex = notes.indexOf(note);
            let diff = (noteIndex-startIndex)%12;

            if (diff < 0) diff = diff+12;
            stringFrets.push({note: note, degree: degrees[i], fret: diff});

            if (diff+12 <= 20) {
                stringFrets.push({note: note, degree: degrees[i], fret: diff+12});
            }
        });

        stringFrets.sort((a, b) => {return a.fret-b.fret});
        frets.push(stringFrets);
    });

    return frets;
}

export {getScale}