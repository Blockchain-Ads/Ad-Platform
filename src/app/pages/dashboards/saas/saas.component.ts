import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { earningLineChart, salesAnalyticsDonutChart, ChatData } from './data';
import { ChartType, ChatMessage } from './saas.model';
import { ConfigService } from '../../../core/services/config.service';

@Component({
  selector: 'app-saas',
  templateUrl: './saas.component.html',
  styleUrls: ['./saas.component.scss']
})
/**
 * Saas-dashboard component
 */
export class SaasComponent implements OnInit, AfterViewInit {

  @ViewChild('scrollRef') scrollRef;

  // bread crumb items
  breadCrumbItems: Array<{}>;

  earningLineChart: ChartType;
  salesAnalyticsDonutChart: ChartType;
  ChatData: ChatMessage[];

  sassEarning: Array<Object>;
  sassTopSelling: Array<Object>;

  formData: FormGroup;

  // Form submit
  chatSubmit: boolean;

  constructor(public formBuilder: FormBuilder, private configService: ConfigService) { }

  /**
   * Returns form
   */
  get form() {
    return this.formData.controls;
  }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Dashboards' }, { label: 'Saas', active: true }];

    this._fetchData();

    this.formData = this.formBuilder.group({
      message: ['', [Validators.required]],
    });

    this.configService.getConfig().subscribe(response => {
    //  this.sassEarning = response.sassEarning;
      //this.sassTopSelling = response.sassTopSelling;
    
    });
    this.sellingProduct('january');
    this.selectMonth('january');
  }

  /**
   * Save the message in chat
   */
  messageSave() {
    const message = this.formData.get('message').value;
    const currentDate = new Date();
    if (this.formData.valid && message) {
      // Message Push in Chat
      this.ChatData.push({
        align: 'right',
        name: 'Henry Wells',
        message,
        time: currentDate.getHours() + ':' + currentDate.getMinutes()
      });
      this.onListScroll();
      // Set Form Data Reset
      this.formData = this.formBuilder.group({
        message: null
      });
    }

    this.chatSubmit = true;
  }

  private _fetchData() {
    this.earningLineChart = earningLineChart;
    this.salesAnalyticsDonutChart = salesAnalyticsDonutChart;
    this.ChatData = ChatData;
  }

  ngAfterViewInit() {
    this.scrollRef.SimpleBar.getScrollElement().scrollTop = 500;
  }

  onListScroll() {
    if (this.scrollRef !== undefined) {
      setTimeout(() => {
        this.scrollRef.SimpleBar.getScrollElement().scrollTop =
          this.scrollRef.SimpleBar.getScrollElement().scrollHeight + 1500;
      }, 500);
    }
  }

  selectMonth(value) {
    switch (value) {
      case "january":
        this.sassEarning = [
          {
            name: "This month",
            amount: "2007.35",
            revenue: "0.2",
            time: "From previous period",
            month: "Last month",
            previousamount: "784.04",
            series: [
              {
                name: "series1",
                data: [22, 35, 20, 41, 51, 42, 49, 45, 58, 42, 75, 48],
              },
            ],
          },
        ];
        break;
      case "december":
        this.sassEarning = [
          {
            name: "This month",
            amount: "2007.35",
            revenue: "0.2",
            time: "From previous period",
            month: "Last month",
            previousamount: "784.04",
            series: [
              {
                name: "series1",
                data: [22, 28, 31, 34, 40, 52, 29, 45, 68, 60, 47, 12],
              },
            ],
          },
        ];
        break;
      case "november":
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
                name: "series1",
                data: [28, 30, 48, 50, 47, 40, 35, 48, 56, 42, 65, 41],
              },
            ],
          },
        ];
        break;
      case "october":
        this.sassEarning = [
          {
            name: "This month",
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
    }
  }

  sellingProduct(month) {
    //let month = event.target.value;
    switch (month) {
      case "january":
        this.sassTopSelling = [
          {
            title: "Campaign B",
            amount: "1842 Clicks",
            revenue: "0.4",
            list: [
              {
                name: "Campaign A",
                text: "CTR",
                sales: 41,
                chartVariant: "#34c38f"
              },
              {
                name: "Campaign B",
                text: "CPA",
                sales: 14,
                chartVariant: "#556ee6"
              },
              {
                name: "Campaign C",
                text: "Impressions",
                sales: 85,
                chartVariant: "#f46a6a"
              },
            ],
          },
        ];
        break;
      case "december":
        this.sassTopSelling = [
          {
            title: "Campaign B",
            amount: "6385 Clicks",
            revenue: "0.6",
            list: [
              {
                name: "Campaign A",
                text: "CTR",
                sales: 41,
                chartVariant: "#34c38f"
              },
              {
                name: "Campaign B",
                text: "CPA",
                sales: 14,
                chartVariant: "#556ee6"
              },
              {
                name: "Campaign C",
                text: "Impressions",
                sales: 85,
                chartVariant: "#f46a6a"
              },
            ],
          },
        ];
        break;
      case "november":
        this.sassTopSelling = [
          {
            title: "Campaign B",
            amount: "4745 Clicks",
            revenue: "0.8",
            list: [
              {
                name: "Campaign A",
                text: "CTR",
                sales: 41,
                chartVariant: "#34c38f"
              },
              {
                name: "Campaign B",
                text: "CPA",
                sales: 14,
                chartVariant: "#556ee6"
              },
              {
                name: "Campaign C",
                text: "Impressions",
                sales: 85,
                chartVariant: "#f46a6a"
              },
            ],
          },
        ];
        break;
      case "october":
        this.sassTopSelling = [
          {
            title: "Campaign B",
            amount: "1385 Clicks",
            revenue: "0.6",
            list: [
              {
                name: "Campaign A",
                text: "CTR",
                sales: 41,
                chartVariant: "#34c38f"
              },
              {
                name: "Campaign B",
                text: "CPA",
                sales: 14,
                chartVariant: "#556ee6"
              },
              {
                name: "Campaign C",
                text: "Impressions",
                sales: 85,
                chartVariant: "#f46a6a"
              },
            ],
          },
        ];
        break;
      default:
        this.sassTopSelling = [
          {
            title: "Campaign B",
            amount: "2385 Clicks",
            revenue: "0.6",
            list: [
              {
                name: "Campaign A",
                text: "CTR",
                sales: 41,
                chartVariant: "#34c38f"
              },
              {
                name: "Campaign B",
                text: "CPA",
                sales: 14,
                chartVariant: "#556ee6"
              },
              {
                name: "Campaign C",
                text: "Impressions",
                sales: 85,
                chartVariant: "#f46a6a"
              },
            ],
          }
        ];
        break;
    }
  }

}
