import React, { useEffect, useState } from 'react';
import Highcharts from '../../../../utils/Highcharts';
import HighchartsReact from 'highcharts-react-official';
import axios from 'axios';

const ApartementsChart = () => {
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    axios.get('https://api.satudatabidangpk.com/chart/apartments')
      .then(res => {
        const { series, drilldownSeries } = res.data;

        setChartOptions({
          chart: {
            type: 'pie',
          },
          title: {
            text: 'Sosialisasi Apartment Berdasarkan Wilayah',
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
                format: '{point.name}: {point.y} apartement',
              },
            },
          },
          tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat:
              '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b> apartement<br/>',
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
    <div className="bg-base-100 p-6 rounded-lg shadow">
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
};

export default ApartementsChart;
