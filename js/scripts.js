// google maps Api -----------------------------------------------

function initMap() {
  var chapelHill = {lat: 35.7373006, lng: -79.0217736};
  var duplinCounty = {lat:35.039195, lng: -78.0494692};
  var baldHead = {lat: 33.8774832, lng:-78.0019814};
  var openPano = {lat: 35.2509828, lng: -75.52909};
  var contentString = '<div id="hydrograph">'  +  '</div>' + '<div id="hy-text">' + '<p>In North Carolina’s urban counties, rain doesn’t always fall on soil. There is miles and miles filled with highways, parking lots, driveways, houses, schools and office buildings – all impermeable surfaces. Impermeable surfaces do not allow precipitation to infiltrate and filter through the soil, a process essential for a healthy stream flow. The higher percentage of impermeable surfaces in an area, the more rainwater that runs directly into streams and rivers instead moving slowly through soil to groundwater. A larger volume of runoff picks up more nutrients and toxins along the way which goes into the state’s waterways. Those substances –including lawn clippings, herbicides, fertilizers – make their way downstream, where there are consequences for the health of both people and the environment.</p>' + '</div>' + '<div id="hy-text-2"><p>The hydrograph shows the difference in stream flow between urban, suburban, and rural areas, which each have increasingly less impermeable surfaces.  The more developed an area is, the quicker and higher the peak flow is, which means more runoff.</p></div>' + '</div>';
  var contentString2 = '<div id="rural">' + '<h3>It working again</h3>' + '</div>';
  var contentString3 = '<div id="dashboard_div">' + '<div id="filter_div"></div>' + '<div id="chart_div"></div>' + '</div>';
  var chosenPano = openPano;




  var  map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 35.028671, lng: -78.3400196},
      zoom: 7
    });

    //Show a street view
       var panorama = new google.maps.StreetViewPanorama(
            document.getElementById('chapelhill'), {
              position: chosenPano,
              pov: {
                heading: 10,
                pitch: 10
              }
            });
        map.setStreetView(panorama);

    // The marker, positioned at Jordan Lake near Chapel Hill
        var marker = new google.maps.Marker({
          position: chapelHill,
          map: map,
        });


        var infowindow = new google.maps.InfoWindow({
            content: contentString
          });

        var infoSection = document.getElementById('city-window');

        var openSection= document.getElementById('explore');

        marker.addListener('click', function() {
            console.log('testing');
            openSection.innerHTML = '';
            infoSection2.innerHTML = '';
            infoSection3.innerHTML = '';
            infoSection.innerHTML = contentString;
            chosenPano = chapelHill;
            initMap();
          });


      // google charts API for Hyrdograph-----------------------
      google.charts.load('current', {packages: ['corechart', 'line']});
      google.charts.setOnLoadCallback(drawCrosshairs);

                function drawCrosshairs() {

                  var data = new google.visualization.DataTable();
                      data.addColumn('number', 'Time');
                      data.addColumn('number', 'Rural');
                      data.addColumn('number', 'Suburban');
                      data.addColumn('number', 'Urban');
                      data.addRows([
                        [0.21,	0.18,	0.26,	0.11],
                        [0.87,	0.59,	1.52,	5.10],
                        [1.20,	0.81,	2.72,	7.68],
                        [1.53,	1.03,	4.21,	8.90],
                        [1.86,	1.25,	5.15,	8.78],
                        [2.19,	1.48,	5.31,	8.07],
                        [2.52,	1.69,	5.18,	7.03],
                        [2.85,	1.91,	4.97,	5.84],
                        [3.18,	2.12,	4.48,	4.50],
                        [3.51,	2.32,	3.94,	3.42],
                        [3.84,	2.50,	3.10,	2.45],
                        [4.17,	2.65,	2.29,	1.61],
                        [4.50,	2.67,	1.62,	0.94],
                        [4.83,	2.57,	1.13,	0.47],
                        [5.15,	2.45,	0.72,	0.20],
                        [5.48,	2.32, 0.44, 0],
                        [5.81,	2.19,	0.30, 0],
                        [6.13,	2.05,	0.24, 0],
                        [6.46,	1.91, 0, 0],
                        [6.78,	1.76, 0, 0],
                        [7.11,	1.61, 0, 0],
                        [7.44,	1.47, 0, 0],
                        [7.76,	1.33, 0, 0],
                        [8.09,	1.18, 0, 0 ],
                        [8.42,	1.03, 0, 0 ],
                        [8.74,	0.89, 0, 0],
                        [9.07,	0.74, 0, 0],
                        [9.40,	0.60, 0, 0],
                        [9.72,	0.47, 0, 0],
                        [10.03,	0.35, 0, 0]

                      ]);


                var options = {
                  hAxis: {
                    title: 'Time'
                  },
                  vAxis: {
                    title: 'Flow'
                  },
                  //colors: ['#a52714', '#097138'],
                  crosshair: {
                    color: '#000',
                    trigger: 'selection'
                  }
                };

                  var chart = new google.visualization.LineChart(document.getElementById('hydrograph'));

             chart.draw(data, options);
           } //end DrawcCrosshairs


            // The marker, positioned in Duplin County
            var marker2 = new google.maps.Marker({
              position: duplinCounty,
              map: map,
            });

            var infowindow2 = new google.maps.InfoWindow({
                content: contentString2
              });

            var infoSection2 = document.getElementById('rural-window');

            marker2.addListener('click', function() {
                console.log('testing2');
                openSection.innerHTML = '';
                infoSection.innerHTML = '';
                infoSection3.innerHTML = '';
                infoSection2.innerHTML = contentString2;
                chosenPano = duplinCounty;
                initMap();
              });


              // The marker, positioned in Bald Head Island
              var marker3 = new google.maps.Marker({
                position: baldHead,
                map: map,
              });

              var infowindow3 = new google.maps.InfoWindow({
                  content: contentString3
                });

              var infoSection3 = document.getElementById('coast-window');

              marker3.addListener('click', function() {
                  console.log('testing3');
                  openSection.innerHTML = '';
                  infoSection.innerHTML = '';
                  infoSection2.innerHTML = '';
                  infoSection3.innerHTML = contentString3;
                  chosenPano = baldHead;
                  initMap();
                });

                var url = './js/landings.json';
                var landings = [];
                var year = [];
                var pounds = [];
                var dollars = [];

                $.ajax({
                  type: 'GET',
                  dataType: 'json',
                  data: landings,
                  url: url,
                  async: true,
                  success: function(landings){
                    console.log(landings);

                    for (i=0; i < landings.length; i++){
                      if(landings[i].Species == 'TOTAL'){
                      year.push(landings[i].Year);
                      pounds.push(landings[i].Pounds);
                      dollars.push(landings[i].Dollars);
                    }
                    }//for loop
                    buildChart1();

                  } //success

                });//ajax

                function buildChart1(){
                Highcharts.chart('dashboard_div', {

                    chart: {
                        type: 'line'
                    },

                    data: landings,

                    title: {
                        text: 'Landings'
                    },

                    subtitle: {
                        text: 'Source: U.S. Dept. of Agriculture Food and Nurition Service'
                    },

                    xAxis: {
                        categories: year
                      },

                    yAxis: [{ // left y axis
                        title: {
                            text: 'Percent Students Participating'
                        },
                        labels: {
                            align: 'left',
                            x: 3,
                            y: 16,
                            format: '{value:.,0f}'
                        },
                        showFirstLabel: false
                    }, { // right y axis
                        linkedTo: 0,
                        gridLineWidth: 0,
                        opposite: true,
                        title: {
                            text: null
                        },
                        labels: {
                            align: 'right',
                            x: -3,
                            y: 16,
                            format: '{value:.,0f}'
                        },
                        showFirstLabel: false
                    }],

                    legend: {
                        align: 'left',
                        verticalAlign: 'top',
                        borderWidth: 0
                    },

                    tooltip: {
                        shared: true,
                        crosshairs: true
                    },

                    plotOptions: {
                        series: {

                        }
                    },

                    series: [{
                        name: 'Summer Food Serive Program',
                        data: pounds
                    }, {
                        name: 'National School Lunch Program',
                        data: dollars
                    }]
                });

                }


        } // end initMap










$(function(){

$('img[usemap]').imageMap();

    function selectRegion(region) {
        document.querySelector("area").setAttribute('id', region);
    }

Tipped.create('#beaufort', 'Beaufort', { target: 'mouse', position: 'top' });
Tipped.create('#morehead', 'Morehead City', { target: 'mouse', position: 'top' });
Tipped.create('#atlantic', 'Atlantic Beach', { target: 'mouse', position: 'top' });
Tipped.create('#pineknoll', 'Pine Knoll Shores', { target: 'mouse', position: 'top' });
Tipped.create('#emerald', 'Emerald Isle', { target: 'mouse', position: 'top' });
Tipped.create('#harkers', 'Harkers Island', { target: 'mouse', position: 'top' });
Tipped.create('#swansboro', 'Swansboro', { target: 'mouse', position: 'top' });
Tipped.create('#newport', 'Newport', { target: 'mouse', position: 'top' });
Tipped.create('#topsail', 'North Topsail Beach', { target: 'mouse', position: 'top' });
Tipped.create('#lookout', 'Cape Lookout National Seashore', { target: 'mouse', position: 'top' });
Tipped.create('#onslow', 'Onslow Bay', { target: 'mouse', position: 'top' });

/* require([
      "esri/Map",
      "esri/views/MapView",
      "dojo/domReady!"
    ], function(Map, MapView) {

    var map = new Map({
      basemap: "topo-vector"
    });

    var view = new MapView({
      container: "end",
      map: map,
      center: [-118.71511,34.09042],
      zoom: 10
    });
  }); */


}); // end scripts
