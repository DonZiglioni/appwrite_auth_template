import React, { useState, useEffect, useRef } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

//   BAR GRAPH TO SHOW THE NUMBER OF EACH ROLL-TOTAL

const RollChart = ({ outcomes, totalRolls }) => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend,
    );

    const labels = ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
    const expected = [.027, .055, .083, .111, .138, .166, .138, .111, .083, .055, .027];
    const stats = useRef([])

    const doMath = (rollCount) => {
        let newExpect = [];
        for (let i = 0; i < expected.length; i++) {
            newExpect.push(rollCount * expected[i]);
        };
        stats.current = newExpect;
        //return newExpect;
    };

    useEffect(() => {
        doMath(totalRolls)
    }, [totalRolls])

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: `Total Roll Outcomes  (Total Rolls: ${totalRolls})`,
            },
        },
    };

    const data = {
        labels,
        datasets: [
            {
                label: 'Actual Rolls',
                data: outcomes ? outcomes : [],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Expected Avg',
                data: outcomes ? stats.current : [],
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };

    return (
        <>
            <Bar options={options} data={data} id={"bar"} />
        </>
    )
};

export default RollChart;
