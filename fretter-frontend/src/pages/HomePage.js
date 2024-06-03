import React from 'react';
import { Content, Dropdown, Label, Root, Text } from '../components';
import { MainFretboard, Navigation } from '../containers';
import { useNotesQuery, useScalesQuery, useTuningQuery } from '../hooks/useQueryHooks';

const HomePage = () => {
    const [noteOptions, setNoteOptions] = React.useState([]);
    const [scaleOptions, setScaleOptions] = React.useState([]);
    const [tuningOptions, setTuningOptions] = React.useState([])
    const [noteValue, setNoteValue] = React.useState('');
    const [scaleValue, setScaleValue] = React.useState('');
    const [tuningValue, setTuningValue] = React.useState('');

    const {data: scalesData, isLoading: isLoadingScales} = useScalesQuery();
    const {data: notesData, isLoading: isLoadingNotes} = useNotesQuery();
    const {data: tuningData, isLoading: isLoadingTunings} = useTuningQuery();

    React.useEffect(() => {
        if (!isLoadingNotes && notesData) {
            setNoteOptions(notesData);
            if (!noteValue && notesData.length > 0) {
                setNoteValue(notesData[0].id);
            }
        }
    }, [isLoadingNotes, notesData, noteValue]);

    React.useEffect(() => {
        if (!isLoadingScales && scalesData) {
            setScaleOptions(scalesData);
            if (!scaleValue && scalesData.length > 0) {
                setScaleValue(scalesData[0].id);
            }
        }
    }, [isLoadingScales, scalesData, scaleValue]);

    React.useEffect(() => {
        if (!isLoadingTunings && tuningData) {
            setTuningOptions(tuningData);
            if (!tuningValue && tuningData.length > 0) {
                setTuningValue(tuningData[0].id);
            }
        }
    }, [isLoadingTunings, tuningData, tuningValue]);

    const noteLabelFormatter = (note) => {
        return note.enharmonic !== null ? `${note.name}/${note.enharmonic}` : note.name;
    }

    return (
        <Root>
            <Navigation />
            <Content>
                <span>
                    <Label label={'Key'} >
                        <Dropdown
                            value={noteValue}
                            labelFormatter={noteLabelFormatter}
                            setValue={(e) => setNoteValue(e.target.value)}
                            options={noteOptions}
                        />
                    </Label>
                </span>
                <br />
                <span>
                    <Label label={'Scale'} >
                        <Dropdown
                            value={scaleValue}
                            setValue={(e) => setScaleValue(e.target.value)}
                            options={scaleOptions}
                            style={{ minWidth: 200 }}
                        />
                    </Label>
                </span>
                <br />
                <span>
                    <Label label={'Tuning'} >
                        <Dropdown
                            value={tuningValue}
                            setValue={(e) => setTuningValue(e.target.value)}
                            options={tuningOptions}
                            style={{ minWidth: 200 }}
                        />
                    </Label>
                </span>
                <br />
                <MainFretboard scale={scaleValue} scaleKey={noteOptions[noteValue-1]} guitarTuning={tuningValue} />
            </Content>
        </Root>
    )
}

export default HomePage;