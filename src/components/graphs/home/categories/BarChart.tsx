import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { Chart } from 'react-google-charts';
import { toast } from 'react-toastify';

type Product = {
    category: string;
    // Add other properties if needed
};

export const BarChart = () => {

    const [catData, setCatData] = useState<any>([['Title', 'Value', { role: 'style' }]]);
    const [catCount, setCatCount] = useState<number>(0);





    useEffect(() => {
        const fetch_api = async () => {
            axios.get('https://dummyjson.com/products?limit=100')
                .then(res => {

                    const { products } = res.data;


                    let data = {};

                    products.forEach((product: Product) => {
                        data[product.category] = 1 + (data[product.category] ?? 0);
                    })

                    const chartData = Object.entries(data).map(([k, v]) => {
                        const rand_color = Math.floor(Math.random() * 16777215).toString(16);
                        console.log(rand_color);
                        return [k, v, '#' + rand_color];
                    });

                    setCatCount(chartData.length);

                    chartData.unshift();

                     setCatData(prev => [...prev, ...chartData]);


                }).catch(err => {
                    toast.error(err.message);
                }).finally(() => {
                    console.log('API call finished');
                });
        }

        fetch_api();
    }, [])


    return (
        <div>
            <h2>BarChart</h2>
            <div id="bar-chart">
                {
                    catData.length <= 1 ? <p>No data</p> :
                        <Chart chartType="BarChart" width="100%" height={`${catCount * 30}px`} data={catData} />
                }
            </div>
        </div>
    )
}

export default BarChart

