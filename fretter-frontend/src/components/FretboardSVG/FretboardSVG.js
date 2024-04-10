import React from "react";
import { makeStyles } from "@material-ui/core";
import { fretboardDimensions, fretPositions, stringPositions } from "../../utils/FretboardValues";

const useStyles = makeStyles((theme) => ({
    root: {
        background: "#402f1f",
    },
    svg: {
        display: 'block',
    }
}))

const FretboardSVG = () => {
    const classes = useStyles();

    const strings = stringPositions.map((string, i) => {
        return (
            <line 
                key={`string-${i}`}
                id={`string-${i}`}
                x1={0}
                y1={string}
                x2={fretboardDimensions.width}
                y2={string}
                stroke="#ddd"
                strokeWidth="2"
            />
        )
    });

    const frets = fretPositions.map((fret, i) => {
        return (
            <line 
                key={`fret-${i}`}
                id={`fret-${i}`}
                x1={fret}
                y1={0}
                x2={fret}
                y2={fretboardDimensions.height}
                stroke="#b93"
                strokeWidth="3"
            />
        )
    });

    const dotFrets = [3, 5, 7, 9, 12, 15, 17, 19];
    const dots = dotFrets.map((fret, i) => {
        if (fret === 12) {
            return (
                <g key={`dot-${fret}`} id={`dots-${fret}`}>
                    <circle 
                        cx={(fretPositions[fret] + fretPositions[fret-1])/2}
                        cy={2*fretboardDimensions.height/6}
                        r={3}
                        fill="#a98"
                    />
                    <circle 
                        cx={(fretPositions[fret] + fretPositions[fret-1])/2}
                        cy={4*fretboardDimensions.height/6}
                        r={3}
                        fill="#a98"
                    />
                </g>
            );
        }
        return (
            <circle
                key={`dot-${fret}`}
                id={`dot-${fret}`}
                cx={(fretPositions[fret] + fretPositions[fret-1])/2}
                cy={fretboardDimensions.height/2}
                r={3}
                fill="#a98"
            />
        );
    })

    const nut = <rect 
        x={0} 
        y={0} 
        width={fretPositions[0]} 
        height={fretboardDimensions.height}
        fill="rgba(0,0,0,0.5)"
    />

    return (
        <div className={classes.root}>
            <svg
                viewBox={`0 0 ${fretboardDimensions.width} ${fretboardDimensions.height}`}
                height={fretboardDimensions.height}
                width={fretboardDimensions.width}
                className={classes.svg}
            >
                {nut}
                {frets}
                {dots}
                {strings}
            </svg>
        </div>
    )
}

export default FretboardSVG;