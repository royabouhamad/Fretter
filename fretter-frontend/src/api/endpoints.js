import axios from 'axios';

const getNotes = async () => {
    try {
        const response = await axios.get('api/notes');
        return response.data;
    } catch(error) {
        throw new Error('Failed to fetch notes.');
    }
}

const getTunings = async () => {
    try {
        const response = await axios.get('api/tunings');
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch tunings.');
    }
}

const getTuningNotes = async (id) => {
    try {
        const response = await axios.get(`api/tuning-with-notes/${id}`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch tuning notes.');
    }
}

const getScaleWithIntervals = async (id) => {
    try {
        const response = await axios.get(`/api/scales-with-intervals/${id}`);
        return response.data;
    } catch(error) {
        throw new Error('Failed to fetch scale with intervals.');
    }
}

const getScaleNames = async () => {
    try {
        const response = await axios.get('api/scales');
        return response.data;
    } catch(error) {
        throw new Error('Failed to fetch scales.');
    }
}

export {getNotes, getTunings, getScaleNames, getScaleWithIntervals, getTuningNotes}
