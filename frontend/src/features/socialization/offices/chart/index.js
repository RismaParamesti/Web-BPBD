import React, { useEffect, useState } from 'react';
import Highcharts from '../../../../utils/Highcharts';
import HighchartsReact from 'highcharts-react-official';
import axios from 'axios';

const OfficesChart = () => {
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    axios.get('https://api.satudatabidangpk.com/chart/offices')
      .then(res => {
        const { series, drilldownSeries } = res.data;

        setChartOptions({
          chart: {
            type: 'pie',
          },
          title: {
            text: 'Sosialisasi Perkantoran Berdasarkan Wilayah',
          },
          subtitle: {
            text: 'Klik untuk lihat detail per kecamatan',
          },
          accessibility: {
            announceNewData: {
              enabled: true,
            },
            point: {
              valueSuffix: '%',
            },
          },
          plotOptions: {
            series: {
              dataLabels: {
                enabled: true,
                format: '{point.name}: {point.y} perkantoran',
              },
            },
          },
          tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat:
              '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b> perkantoran<br/>',
          },
          series: [
            {
              name: 'Wilayah',
              colorByPoint: true,
              data: series,
            },
          ],
          drilldown: {
            series: drilldownSeries,
          },
        });
      })
      .catch(err => {
        console.error('Failed to fetch chart data:', err);
      });
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
};

export default OfficesChart;
