import React, {lazy} from 'react';

const DummyTable = lazy(() => import('../components/DummyTable.js'))
const DummyChart = lazy(() => import('../components/DummyChart.js'))
const DummyList = lazy(() => import('../components/DummyList.js'))

export const router = [
    {
        "path": "/",
        "title": "Dummy Table",
        "order": 1,
        "element": <DummyTable />
    },
    {
        "path": "/dummyChart",
        "title": "Dummy Chart",
        "order": 2,
        "element": <DummyChart />
    },
    {
        "path": "/dummyList",
        "title": "Dummy List",
        "order": 0,
        "element": <DummyList />
    }
]
