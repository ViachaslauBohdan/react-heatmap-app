export function getChartOptions(chartOptions: Highcharts.Options) {
  const defaultOptions: Highcharts.Options = {
    chart: {
      type: "heatmap",
      marginTop: 40,
      marginBottom: 80,
      plotBorderWidth: 1,
    },

    title: {
      text: "",
      style: {
        fontSize: "1em",
      },
    },

    xAxis: {
      categories: [],
    },

    yAxis: {
      categories: [],
    },

    colorAxis: {
      minColor: "#FF907400",
      maxColor: "#6F000600",
    },

    legend: {
      align: "right",
      layout: "vertical",
      margin: 0,
      verticalAlign: "top",
      y: 25,
      symbolHeight: 280,
    },

    tooltip: {
      format:
        "<b>{series.xAxis.categories.(point.x)}</b> sold<br>" +
        "<b>{point.value}</b> items on <br>" +
        "<b>{series.yAxis.categories.(point.y)}</b>",
    },

    series: [],
  };

  return {
    ...defaultOptions,
    ...chartOptions,
  };
}
