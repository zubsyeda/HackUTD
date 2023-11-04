import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import Chat from 'chart.js/auto'

export const ChartComponent = () => {
    const [chartData, setChartData] = useState(null)
    const chart = ""

    async function fetchData(){
        try { 
            const response = await fetch('/data.csv');
            const csvData = await response.text();

            Papa.parse(csvData, {
                header: true,
                dynamicTyping: true,
                complete: (result) => {
                    // preprocessData(result.data)
                    console.log(result.data)
                }
            })
        } catch(error){
            console.error('error fetching data', error)
        }
    }

    React.useEffect(() => {
        fetchData()
    }, [])
    // function groupDataByState(data){
    //     const groupedData = {};
    //     data.forEach((entry) => {

    //     })
    // }
    // function preprocessData(data){
    //     const groupedData = groupDataByState
    // }

    return (
        <div>ChartComponent</div>
    )
    }

