$(function () {


  // =====================================
  // Profit
  // =====================================
  var chart = {
    series: [
      { name: "Pontuação:", data: [100, 80, 50, 50, 90, 80, 55, 90] },
      // { name: "Expense this month:", data: [280, 250, 325, 215, 250, 310, 280, 250] },
    ],

    chart: {
      type: "bar",
      height: 345,
      offsetX: -15,
      toolbar: { show: true },
      foreColor: "#adb0bb",
      fontFamily: 'inherit',
      sparkline: { enabled: false },
    },


    colors: ["#5D87FF", "#49BEFF"],


    plotOptions: {
      bar: {
        horizontal: true,
        columnWidth: "35%",
        borderRadius: [6],
        borderRadiusApplication: 'end',
        borderRadiusWhenStacked: 'all'
      },
    },
    markers: { size: 0 },

    dataLabels: {
      enabled: false,
    },


    legend: {
      show: false,
    },


    grid: {
      borderColor: "rgba(0,0,0,0.1)",
      strokeDashArray: 3,
      xaxis: {
        lines: {
          show: false,
        },
      },
    },

    xaxis: {
      type: "category",
      categories: ["Produtividade", "Engajamento", "Tarefas", "Soluções", "Crescimento", "Tempo", "Criatividade", "Objetivos"],
      labels: {
        style: { cssClass: "grey--text lighten-2--text fill-color" },
      },
    },


    yaxis: {
      show: true,
      min: 0,
      max: 100,
      tickAmount: 4,
      labels: {
        style: {
          cssClass: "grey--text lighten-2--text fill-color",
        },
      },
    },
    stroke: {
      show: true,
      width: 3,
      lineCap: "butt",
      colors: ["transparent"],
    },


    tooltip: { theme: "light" },

    responsive: [
      {
        breakpoint: 600,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 3,
            }
          },
        }
      }
    ]


  };

  var chart = new ApexCharts(document.querySelector("#chart"), chart);
  chart.render();


  // =====================================
  // Breakup
  // =====================================
  var breakup = {
    color: "#adb5bd",
    series: [74, 26, 00],
    labels: ["", "", ""],
    chart: {
      width: 180,
      type: "donut",
      fontFamily: "Plus Jakarta Sans', sans-serif",
      foreColor: "#adb0bb",
    },
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
        donut: {
          size: '75%',
        },
      },
    },
    stroke: {
      show: false,
    },

    dataLabels: {
      enabled: false,
    },

    legend: {
      show: false,
    },
    colors: ["#5D87FF", "#ecf2ff", "#F9F9FD"],

    responsive: [
      {
        breakpoint: 991,
        options: {
          chart: {
            width: 150,
          },
        },
      },
    ],
    tooltip: {
      theme: "dark",
      fillSeriesColor: false,
    },
  };

  var chart = new ApexCharts(document.querySelector("#breakup"), breakup);
  chart.render();



  // =====================================
  // Earning
  // =====================================
  var earning = {
    chart: {
      id: "sparkline3",
      type: "area",
      height: 60,
      sparkline: {
        enabled: true,
      },
      group: "sparklines",
      fontFamily: "Plus Jakarta Sans', sans-serif",
      foreColor: "#adb0bb",
    },
    series: [
      {
        name: "Pontuação",
        color: "#49BEFF",
        data: [25, 66, 20, 40, 12, 58, 20],
      },
    ],
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      colors: ["#f3feff"],
      type: "solid",
      opacity: 0.05,
    },

    markers: {
      size: 0,
    },
    tooltip: {
      theme: "dark",
      fixed: {
        enabled: true,
        position: "right",
      },
      x: {
        show: false,
      },
    },
  };
  new ApexCharts(document.querySelector("#earning"), earning).render();
})

 // =====================================
  // TO DO LIST
  // =====================================

  // daily message
// Instantiate a new typist.js control
new Typist({
  "element": ".typist",
  "delay": 1000,
  "display": "inline",
  "callback": function() {
      //alert("This is a completed callback test");
  }
});

/**
  * @function Typist - Defines an Typist constructor for displaying testimonial excerpts.
  * @param {object} config - The instance of the Typist control being configured.
  * @param {number} config.element - The element selector in which to apply the typist functionality.
  * @param {string} config.delay - The time to wait before beginning the typist cycle.
  * @param {string} config.display - The CSS display property for the typist control when rendered.
  * @param {number} config.callback - The function to call once the typist is complete;
*/
function Typist(config) {
'use-strict';

var ERRORS = {
    "CONTAINER_ELEMENT": "config.element may be invalid or undefined",
    "CALLBACK_FUNCTION": "config.callback may be invalid"
}

var index = 0,
    elements = document.querySelectorAll(config.element),
    messageIndex = Math.floor(Math.random() * (elements.length));
    msg = elements[messageIndex].innerHTML;

prepElement(elements[messageIndex]);
setTimeout(pressChars, config.delay);

function pressChars() {
  var random = Math.random() * 200,
      msgArr = msg.split(''); 

  setTimeout(function() {
    elements[messageIndex].innerHTML += msgArr[index];

    if(index < msg.length - 1) {
      index++;
      pressChars();
    } else if(index = msg.length && config.callback) {
      (config.callback && typeof(config.callback) === 'function')
          ? config.callback()
          : throwError(ERRORS.CALLBACK_FUNCTION);
    }

  }, random);
}

function prepElement(element) {
  element.innerHTML = '';
  element.style.display = config.display || 'inline-block';
}

function throwError(errorMsg) {
    throw new Error(errorMsg);
}
};
// daily message end