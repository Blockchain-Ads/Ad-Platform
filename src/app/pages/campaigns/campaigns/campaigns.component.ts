import {Component, OnInit, ViewChild} from "@angular/core";
import {ChartType} from "../../dashboards/crypto/crypto.model";
import {ApexOptions, ChartComponent} from "ng-apexcharts";
const bitconinChart: ChartType = {
    series: [{
        name: 'BTC',
        data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14]
    }],
    chart: {
        type: 'area',
        height: 40,
        sparkline: {
            enabled: true
        }
    },
    stroke: {
        curve: 'smooth',
        width: 2,
    },
    colors: ['#f1b44c'],
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.45,
            opacityTo: 0.05,
            stops: [25, 100, 100, 100]
        },
    },
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        marker: {
            show: false
        }
    }
};

const ethereumChart: ChartType = {
    series: [{
        name: 'ETH',
        data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
    }],
    chart: {
        type: 'area',
        height: 40,
        sparkline: {
            enabled: true
        }
    },
    stroke: {
        curve: 'smooth',
        width: 2,
    },
    colors: ['#3452e1'],
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.45,
            opacityTo: 0.05,
            stops: [25, 100, 100, 100]
        },
    },
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        marker: {
            show: false
        }
    }
};

const litecoinChart: ChartType = {
    series: [{
        name: 'LTC',
        data: [35, 53, 93, 47, 54, 24, 47, 75, 65, 19, 14]
    }],
    chart: {
        type: 'area',
        height: 40,
        sparkline: {
            enabled: true
        }
    },
    stroke: {
        curve: 'smooth',
        width: 2,
    },
    colors: ['#50a5f1'],
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.45,
            opacityTo: 0.05,
            stops: [25, 100, 100, 100]
        },
    },
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        marker: {
            show: false
        }
    }
};



@Component({
    selector: 'app-campaigns.component',
    templateUrl: './campaigns.component.html',
    styleUrls: ['./campaigns.component.scss']
})
/**
 * Saas-dashboard component
 */
export class CampaignsComponent implements OnInit{
    @ViewChild("chart", { static: false }) chart: ChartComponent;
    transactions: any[];
    bitconinChart: ChartType;
    ethereumChart: ChartType;
    litecoinChart: ChartType;
    sassEarning: Array<Object>;
    earningLineChart: any;
    showEarningLineChart = false;
    constructor() {

        this.earningLineChart = {
            series: [
                {
                    name: "Impressions",
                    data: this.generateDayWiseTimeSeries(
                        new Date("11 Feb 2017 GMT").getTime(),
                        20,
                        {
                            min: 10,
                            max: 100
                        }
                    )
                },
                {
                    name: "CTR",
                    data: this.generateDayWiseTimeSeries(
                        new Date("11 Feb 2017 GMT").getTime(),
                        20,
                        {
                            min: 20,
                            max: 80
                        }
                    )
                },
                {
                    name: "CPC",
                    data: this.generateDayWiseTimeSeries(
                        new Date("11 Feb 2017 GMT").getTime(),
                        20,
                        {
                            min: 10,
                            max: 60
                        }
                    )
                },
                {
                    name: "Conversions",
                    data: this.generateDayWiseTimeSeries(
                        new Date("11 Feb 2017 GMT").getTime(),
                        20,
                        {
                            min: 30,
                            max: 75
                        }
                    )
                },
                {
                    name: "CVR",
                    data: this.generateDayWiseTimeSeries(
                        new Date("11 Feb 2017 GMT").getTime(),
                        20,
                        {
                            min: 15,
                            max: 55
                        }
                    )
                },
                {
                    name: "CPA",
                    data: this.generateDayWiseTimeSeries(
                        new Date("11 Feb 2017 GMT").getTime(),
                        20,
                        {
                            min: 10,
                            max: 85
                        }
                    )
                },
                {
                    name: "Visitors",
                    data: this.generateDayWiseTimeSeries(
                        new Date("11 Feb 2017 GMT").getTime(),
                        20,
                        {
                            min: 25,
                            max: 55
                        }
                    )
                }
            ],
            chart: {
                type: "area",
                height: 350,
                events: {
                    selection: function(chart, e) {
                        console.log(new Date(e.xaxis.min));
                    }
                },

            },
            colors: ['#312E81', '#818CF8', "#008FFB", "#00E396", "#CED4DC", "#008FFB"],
            dataLabels: {
                enabled: false
            },
            fill: {
                type: "gradient",
                gradient: {
                    opacityFrom: 0.6,
                    opacityTo: 0.8
                }
            },
            legend: {
                position: "top",
                horizontalAlign: "left",
                showForSingleSeries: true,
            },
            xaxis: {
                type: "datetime"
            }
        };

        setTimeout( () => {
            this.chart.hideSeries('CTR');
            this.chart.hideSeries('CPC');
            this.chart.hideSeries('Conversions');
            this.chart.hideSeries('CVR');
            this.chart.hideSeries('CPA');
            this.chart.hideSeries('Visitors');
            this.showEarningLineChart = true;
        },1000 );

    }
    ngOnInit() {
        this._fetchData();
        this.selectDate('this_month');
        this.transactions = [{
            "id": "Campaign 1",
            "name": "Active",
            "date": "$400",
            "total": "$412",
            "status": "4,336",
            "payment": "198,301",
            "index": '2.25%',
            "ctr":"46",
            "cvr":"1.06%"
        },
        {
            "id": "Campaign 2",
            "name": "Active",
            "date": "$380",
            "total": "$1,102",
            "status": "14,009",
            "payment": "342,648",
            "index": '4.08%',
            "ctr":"116",
            "cvr":"0.83%"
        },
        {
            "id": "Campaign 3",
            "name": "Paused",
            "date": "$384",
            "total": "$73",
            "status": "665",
            "payment": "91,489",
            "index": '0.73%',
            "ctr":"5",
            "cvr":"0.75%"
        },
        {
            "id": "Campaign 4",
            "name": "Activating",
            "date": "$412",
            "total": "$0",
            "status": "0",
            "payment": "0",
            "index": '0%',
            "ctr":"0",
            "cvr":"0%"
        },
        {
            "id": "Campaign 5",
            "name": "Active",
            "date": "$400",
            "total": "$412",
            "status": "4,336",
            "payment": "198,301",
            "index": '2.25%',
            "ctr":"46",
            "cvr":"1.06%"
        },
        {
            "id": "Campaign 6",
            "name": "Active",
            "date": "$380",
            "total": "$1,102",
            "status": "14,009",
            "payment": "342,648",
            "index": '4.08%',
            "ctr":"116",
            "cvr":"0.83%"
        }
        ]
    }
    public selectDate(value) {
        switch (value) {
            case "today":
                this.sassEarning = [
                    {
                        name: "Today",
                        amount: "2007.35",
                        revenue: "0.2",
                        time: "From previous period",
                        month: "Last month",
                        previousamount: "784.04",
                        series: [
                            {
                                name: "Clicks",
                                data: [22, 35, 20, 41, 51, 42, 49, 45, 58, 42, 75, 48],
                            },
                        ],
                    },
                ];
                break;
            case "this_week":
                this.sassEarning = [
                    {
                        name: "This week",
                        amount: "2007.35",
                        revenue: "0.2",
                        time: "From previous period",
                        month: "Last month",
                        previousamount: "784.04",
                        series: [
                            {
                                name: "Clicks",
                                data: [22, 28, 31, 34, 40, 52, 29, 45, 68, 60, 47, 12],
                            },
                        ],
                    },
                ];
                break;
            case "this_month":
                this.sassEarning = [
                    {
                        name: "This month",
                        amount: "2887.35",
                        revenue: "0.4",
                        time: "From previous period",
                        month: "Last month",
                        previousamount: "684.04",
                        series: [
                            {
                                name: "Clicks",
                                data: [28, 30, 48, 50, 47, 40, 35, 48, 56, 42, 65, 41],
                            },
                        ],
                    },
                ];
                break;
            case "this_year":
                this.sassEarning = [
                    {
                        name: "This year",
                        amount: "2100.35",
                        revenue: "0.4",
                        time: "From previous period",
                        month: "Last month",
                        previousamount: "674.04",
                        series: [
                            {
                                name: "series1",
                                data: [28, 48, 39, 47, 48, 41, 28, 46, 25, 32, 24, 28],
                            },
                        ],
                    },
                ];
                break;
            case "custom":
                this.sassEarning = [
                    {
                        name: "Custom",
                        amount: "2100.35",
                        revenue: "0.4",
                        time: "From previous period",
                        month: "Last month",
                        previousamount: "674.04",
                        series: [
                            {
                                name: "series1",
                                data: [28, 48, 39, 47, 48, 41, 28, 46, 25, 32, 24, 28],
                            },
                        ],
                    },
                ];
        }
    }
    public generateDayWiseTimeSeries = function(baseval, count, yrange) {
        var i = 0;
        var series = [];
        while (i < count) {
            var x = baseval;
            var y =
                Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

            series.push([x, y]);
            baseval += 86400000;
            i++;
        }
        return series;
    };
    private _fetchData() {
       // this.earningLineChart = earningLineChart;
        this.bitconinChart = bitconinChart;
        this.ethereumChart = ethereumChart;
        this.litecoinChart = litecoinChart;
    }
}