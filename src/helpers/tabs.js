import DummyTable from '../components/DummyTable.js'
import DummyChart from '../components/DummyChart.js'
import DummyList from '../components/DummyList.js'

export const router = [
    {
        "title": "Dummy Table",
        "order": 1,
        "element": DummyTable
    },
    {
        "path": "/dummyChart",
        "title": "Dummy Chart",
        "order": 2,
        "element": DummyChart
    },
    {
        "path": "/dummyList",
        "title": "Dummy List",
        "order": 0,
        "element": DummyList
    }
]
