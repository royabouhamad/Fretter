import { useQuery } from "react-query";
import { getNotes, getTunings, getScaleNames, getScaleWithIntervals, getTuningNotes } from "../api/endpoints";

export function useNotesQuery() {
    return useQuery('notes', getNotes);
}

export function useScalesQuery() {
    return useQuery('scales', getScaleNames);
}

export function useTuningQuery() {
    return useQuery('tunings', getTunings);
}

export function useScaleWithIntervalsQuery(id) {
    return useQuery(['scales', id], () => getScaleWithIntervals(id));
}

export function useTuningWithNotesQuery(id) {
    return useQuery(['tuning', id], () => getTuningNotes(id));
}