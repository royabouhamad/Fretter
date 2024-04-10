import React from "react";
import { makeStyles } from "@material-ui/core";
import { fretPositions, fretboardDimensions, stringPositions } from "../../utils/FretboardValues";

const useStyles = makeStyles((theme) => ({
    root: {
        position:'absolute',
        top:0,
        left:'16px',
    }
}));

const FretboardMarkers = ({ frets, showNotes }) => {
    const classes = useStyles();
    
    if (frets === undefined) return;

    const markers = frets.map((string, i) => {
        return string.map((fret, j) => {
            let fretLine = fretPositions[fret.fret];
            let prevLine;

            if (fret.fret === 0) {
                prevLine = 0;
            } else {
                prevLine = fretPositions[fret.fret-1];
            }
            
            return (
                <g key={`marker-string-${i}-fret-${fret.fret}`}>
                    <circle
                        key={`string-${i}-fret-${fret.fret}`}
                        cx={((fretLine+prevLine)/2.0)-16}
                        cy={stringPositions[i]}
                        r={8}
                        fill={fret.degree === 'R' ? 'red' : "rgba(255,255,255,0.5)"}
                        stroke="#fff"
                    />
                    <text 
                        x={((fretLine+prevLine)/2.0)-16}
                        y={stringPositions[i]}
                        textAnchor="middle"
                        fontSize="10px"
                        fontFamily="Arial" 
                        dy=".3em"
                    >
                        {showNotes ? fret.note : fret.degree}
                    </text>
                </g>
            )
        });
    });

    return (
        <div className={classes.root}>
            <svg
                viewBox={`0 0 ${fretboardDimensions.width} ${fretboardDimensions.height}`}
                width={fretboardDimensions.width}
                height={fretboardDimensions.height}
            >
                {markers}
            </svg>
        </div>
    );
}

export default FretboardMarkers;