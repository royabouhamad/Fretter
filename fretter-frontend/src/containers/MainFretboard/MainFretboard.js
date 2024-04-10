import React from 'react';
import { Fretboard, FretboardSVG, FretboardMarkers } from '../../components';
import { getScale } from '../../utils/ScaleCreator';
import { useScaleWithIntervalsQuery, useTuningWithNotesQuery } from '../../hooks/useQueryHooks';

const MainFretboard = ({ scale, scaleKey, guitarTuning, showNotes }) => {
    const [scaleIntervals, setScaleIntervals] = React.useState([]);
    const [tuningNotes, setTuningNotes] = React.useState([]);

    const {data: scaleData, isLoading: isLoadingScaleData} = useScaleWithIntervalsQuery(scale);
    const {data: tuningData, isLoading: isLoadingTuningData} = useTuningWithNotesQuery(guitarTuning);

    const scaleFrets = getScale(scaleIntervals, scaleKey ? scaleKey.name : '', tuningNotes);

    React.useEffect(() => {
        if (!isLoadingScaleData && scaleData) {
            setScaleIntervals(scaleData.intervals);
        }
    }, [isLoadingScaleData, scaleData]);

    React.useEffect(() => {
        if (!isLoadingTuningData && tuningData) {
            setTuningNotes(tuningData.notes);
        }
    }, [isLoadingTuningData, tuningData]);

    return (
        <Fretboard>
            <FretboardMarkers frets={scaleFrets} showNotes={showNotes} />
            <FretboardSVG />
        </Fretboard>
    );
}

export default MainFretboard;