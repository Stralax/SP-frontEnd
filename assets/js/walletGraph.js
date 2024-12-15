window.onload = function () {
    fetch('https://api.coinlore.net/api/tickers/')
    .then(odg => odg.json())
    .then(data => {
        const currentCurrency = "ethereum"
     for (let i = 0; i < 100; i++) {
        let trenutno = data.data[i].nameid;
        if (trenutno === currentCurrency) {
  
          let valueC = Math.ceil(data.data[i].price_usd);
          let valueC7 = Math.ceil(valueC * ((100 - (data.data[i].percent_change_7d))) / 100);
          let valueC24 = Math.ceil(valueC * ((100 - (data.data[i].percent_change_24h))) / 100);
          let valueC1 = Math.ceil(valueC * ((100 - (data.data[i].percent_change_1h))) / 100);
          let chart = new CanvasJS.Chart("graph", {
            animationEnabled: true,
            theme: "light2",
            data: [{        
              type: "line",
                  indexLabelFontSize: 16,
              dataPoints: [
                {y : valueC7 },
                {y : valueC24 },
                {y : valueC1 },
                {y : valueC }
              ]
            }]
          });
          chart.render();
        }
     }
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }
