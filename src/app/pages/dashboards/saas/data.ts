import { ChartType } from './saas.model';
import {ApexOptions} from "ng-apexcharts";

const earningLineChart: ApexOptions = {
    series: [
        {
            name: "Clicks",
            data: [31, 40, 28, 51, 42, 109, 100]
        }
    ],
    chart: {
        height: 350,
        type: "area"
    },
    colors    : ['#818CF8'],
    fill      : {
        colors: ['#312E81']
    },
    grid      : {
        show       : true,
        borderColor: '#334155',
        padding    : {
            top   : 10,
            bottom: -40,
            left  : 0,
            right : 0
        },
        position   : 'back',
        xaxis      : {
            lines: {
                show: true
            }
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: "smooth"
    },
    xaxis: {
        type: "datetime",
        categories: [
            "2018-09-19T00:00:00.000Z",
            "2018-09-19T01:30:00.000Z",
            "2018-09-19T02:30:00.000Z",
            "2018-09-19T03:30:00.000Z",
            "2018-09-19T04:30:00.000Z",
            "2018-09-19T05:30:00.000Z",
            "2018-09-19T06:30:00.000Z"
        ]
    },
    tooltip: {
        x: {
            format: "dd/MM/yy HH:mm"
        }
    }
};

const salesAnalyticsDonutChart: ChartType = {
    series: [56, 38, 26],
    chart: {
        animations: {
            speed           : 400,
            animateGradually: {
                enabled: false
            }
        },
        fontFamily: 'inherit',
        foreColor : 'inherit',
        type      : 'donut',
        sparkline : {
            enabled: true
        },
        height: 240,
    },
    labels: ['Campaign A', 'Campaign B', 'Campaign C'],
    colors     : ['#3182CE', '#63B3ED', '#818CF8'],
    legend: {
        show: false,
    },
    plotOptions: {
        pie: {
            donut: {
                size: '70%',
            }
        }
    }
};

const ChatData = [
    {
        name: 'Steven Franklin',
        message: 'Hello!',
        time: '10:00',
    },
    {
        align: 'right',
        name: 'Henry Wells',
        message: 'Hi, How are you? What about our next meeting?',
        time: '10:02'
    },
    {
        name: 'Steven Franklin',
        message: 'Yeah everything is fine',
        time: '10:06'
    },
    {
        name: 'Steven Franklin',
        message: '& Next meeting tomorrow 10.00AM',
        time: '10:06'
    },
    {
        align: 'right',
        name: 'Henry Wells',
        message: 'Wow that\'s great',
        time: '10:02'
    },
];

export { earningLineChart, salesAnalyticsDonutChart, ChatData };
