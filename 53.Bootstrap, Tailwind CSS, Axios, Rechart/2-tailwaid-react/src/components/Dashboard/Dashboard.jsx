import React from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
    const students = [
        {
          id: 1,
          name: 'John Doe',
          physics: 85,
          chemistry: 76,
          math: 92
        },
        {
          id: 2,
          name: 'Jane Smith',
          physics: 78,
          chemistry: 89,
          math: 94
        },
        {
          id: 3,
          name: 'Bob Johnson',
          physics: 92,
          chemistry: 84,
          math: 88
        },
        {
          id: 4,
          name: 'Alice Brown',
          physics: 70,
          chemistry: 68,
          math: 75
        },
        {
          id: 5,
          name: 'Eva Wilson',
          physics: 95,
          chemistry: 91,
          math: 98
        },
        {
          id: 6,
          name: 'Chris Lee',
          physics: 88,
          chemistry: 80,
          math: 90
        },
        {
          id: 7,
          name: 'Sarah Miller',
          physics: 76,
          chemistry: 82,
          math: 87
        },
        {
          id: 8,
          name: 'Michael Brown',
          physics: 89,
          chemistry: 93,
          math: 96
        },
        {
          id: 9,
          name: 'Emily Davis',
          physics: 94,
          chemistry: 89,
          math: 82
        },
        {
          id: 10,
          name: 'David Wilson',
          physics: 85,
          chemistry: 76,
          math: 92
        },
        {
          id: 11,
          name: 'Linda Smith',
          physics: 78,
          chemistry: 89,
          math: 94
        },
        {
          id: 12,
          name: 'Robert Johnson',
          physics: 92,
          chemistry: 84,
          math: 88
        }
      ];
      
    return (
        <div className='mt-32'>
            {/* <LineChart
            width={1500}
            height={500}
            data={students}   
            >
            <Line dataKey='physics' stroke="#8884d8" ></Line>
            <Line dataKey='math'stroke="#82ca9d" ></Line>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            </LineChart> */}

            <AreaChart
            width={1000}
            height={500}
            data={students}
            >
            <Area dataKey='math' stroke="#8884d8" fill="#8884d8"></Area>
            <Area dataKey='physics' stroke="#82ca9d" fill="#82ca9d"></Area>
            <Area dataKey='chemistry' stroke="#ffc658" fill="#ffc658"></Area>
            <XAxis dataKey="name" />
            <YAxis></YAxis>
            <Tooltip />
            </AreaChart>
        </div>
        
    );
};

export default Dashboard;