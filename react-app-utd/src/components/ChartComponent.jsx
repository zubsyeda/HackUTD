import React, { useRef } from 'react';
import Papa from 'papaparse';
import Chart from 'chart.js/auto'

export const ChartComponent = ({ selectedState }) => {
    // const [chartData, setChartData] = useState(null);
    // const [selectedState, setSelectedState] = useState('AK')

    const chartRef = useRef(null);

    async function fetchData(){
        try { 
            const response = await fetch('/data.csv');
            const csvData = await response.text();

            Papa.parse(csvData, {
                header: true,
                dynamicTyping: true,
                complete: (result) => {
                    preprocessData(result.data)
                    // console.log(result.data)
                }
            })
        } catch(error){
            console.error('error fetching data', error)
        }
    }

    function groupDataByState(data){
        const groupedData = {};
        data.forEach((entry) => {
            const state = entry.state
            if (!groupedData[state]) {
                groupedData[state] = []
            }
            groupedData[state].push({
                incident_type: entry.incident_type,
                percentage: parseFloat(entry.percentage),
            });
        });
        return groupedData
    }

    function preprocessData(data){
        const groupedData = groupDataByState(data);
        const selectedStateData = groupedData[selectedState];
        // setChartData(selectedStateData);
        console.log(selectedStateData);
        const labels = selectedStateData.map((incident) => incident.incident_type);
        const percentages = selectedStateData.map((incident) => incident.percentage);
        console.log(labels)
        console.log(percentages)

        const chartData = {
            labels: labels,
            datasets: [{
                label: `Incident Rates for ${selectedState}`,
                data: percentages,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            }]
        };
        if (chartRef.current) {
            // If the chart already exists, destroy it before creating a new one
            chartRef.current.data = chartData;
            chartRef.current.update();
            // chartRef.current.destroy();
        } else{
            const ctx = document.getElementById('myChart').getContext('2d');
            chartRef.current = new Chart(ctx, {
                type: 'bar',
                data: chartData,
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });

        }


    };

    React.useEffect(() => {
        fetchData()
    }, [selectedState])

    return (
        <div>
            <canvas id="myChart" width="400" height="200"></canvas>
        </div>
    )
};

