import React, { useState } from 'react'

const useCalculateLight = () => {

    const [lightBalance, setLightBalance] = useState(100000000)

    const bet = 72000;
    let rollCount = 0;
    let point = 0;

    const checkPoint = (roll) => {
        if (roll === point) {
            // console.log("WIN");
            balance = balance + bet;
            point = 0;
            rollCount = 0;
            return;
        };
        if (roll === 7) {
            // console.log("LOSS");
            balance = balance - bet;
            point = 0;
            rollCount = 0;
            return;
        };
        rollCount = rollCount + 1;
    };

    const playGame = (roll) => {
        if (rollCount === 0 && roll === 7) {
            // console.log("Comeout 7!");
            //console.log("WIN");
            balance = balance + bet;
            return;
        };
        if (rollCount === 0 && roll === 11) {
            //console.log("Comeout 11!");
            //console.log("WIN");
            balance = balance + bet;
            return;
        };
        if (rollCount === 0 && roll === 12) {
            //console.log("Comeout, Craps 12!");
            //console.log("LOSS");
            balance = balance - bet;
            return;
        };
        if (rollCount === 0 && roll === 2) {
            // console.log("Comeout, Craps 2!");
            // console.log("LOSS");
            balance = balance - bet;
            return;
        };
        if (rollCount === 0 && roll === 3) {
            // console.log("Comeout, Craps 3!");
            // console.log("LOSS");
            balance = balance - bet;
            return;
        };
        if (rollCount === 0 && point === 0) {
            point = roll;
            rollCount = rollCount + 1;
            return;
        };

        checkPoint(roll);
        return;
    }

    let totalRolls = 0;

    return lightResults;
}

export default useCalculateLight;

