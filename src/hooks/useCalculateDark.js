import React, { useState } from 'react'

const useCalculateDark = (dailyRolls) => {

    let darkResults = [];
    let balance = 100000000;
    let bet = 72000;
    let rollCount = 0;
    let point = 0;

    const checkPoint = (roll) => {
        if (roll === point) {
            balance = balance - bet;
            point = 0;
            rollCount = 0;
            return;
        };
        if (roll === 7) {
            balance = balance + bet;
            point = 0;
            rollCount = 0;
            return;
        };
        rollCount = rollCount + 1;
    };

    const playGame = (roll) => {
        if (rollCount === 0 && roll === 7) {
            balance = balance - bet;
            return;
        };
        if (rollCount === 0 && roll === 11) {
            balance = balance - bet;
            return;
        };
        if (rollCount === 0 && roll === 12) {
            balance = balance;
            return;
        };
        if (rollCount === 0 && roll === 2) {
            balance = balance + bet;
            return;
        };
        if (rollCount === 0 && roll === 3) {
            balance = balance + bet;
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

    for (let roll in dailyRolls) {
        totalRolls = totalRolls + 1;
        playGame(dailyRolls[roll]);
        if (totalRolls % 60 === 0) {
            darkResults.push(balance);
        }
    }

    return darkResults;
}

export default useCalculateDark;

