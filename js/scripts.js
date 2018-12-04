// google maps Api -----------------------------------------------

function initMap() {
  var chapelHill = {lat: 35.7373006, lng: -79.0217736};
  var duplinCounty = {lat:35.039195, lng: -78.0494692};
  var baldHead = {lat: 33.8774832, lng:-78.0019814};
  var openPano = {lat: 35.2509828, lng: -75.52909};
  var contentString = '<div id="hydrograph">' + '<h3>It working</h3>' + '</div>';
  var contentString2 = '<div id="rural">' + '<h3>It working again</h3>' + '</div>';
  var contentString3 = '<div id="coast">' + '<h3>It working again times 3</h3>' + '</div>';
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

        marker.addListener('click', function() {
            console.log('testing');
            infoSection2.innerHTML = '';
            infoSection3.innerHTML = '';
            infoSection.innerHTML = contentString;
            chosenPano = chapelHill;
            initMap();
          });


      // google charts API -----------------------
           google.charts.load('current', {'packages':['corechart']});
                  google.charts.setOnLoadCallback(drawChart);

            function drawChart() {

              var data = new google.visualization.DataTable();
                  data.addColumn('number', 'Time');
                  data.addColumn('number', 'Urban');
                  data.addColumn('number', 'Suburban');
                  data.addColumn('number', 'Rural');
                  data.addRows([
                    [0, 1, 2, 3]
                  ]);





              //   data.addColumn('number', 'Urban');
            //     data.addColumn('number', 'Suburban');
              //   data.addColumn('number', 'Rural');
              //   data.addRows([
              //     ['Mushrooms', 3],
              //     ['Onions', 1],
              //     ['Olives', 1],
              //     ['Zucchini', 1],
              //     ['Pepperoni', 2]
              //   ]);


              var options = {
                title: 'Hydrograph',
                curveType: 'function',
                legend: { position: 'bottom' }
              };

              var chart = new google.visualization.LineChart(document.getElementById('hydrograph'));

              chart.draw(data, options);
            } //end Drawchart


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
                  infoSection.innerHTML = '';
                  infoSection2.innerHTML = '';
                  infoSection3.innerHTML = contentString3;
                  chosenPano = baldHead;
                  initMap();
                });


        } // end initMap





// google charts API -------------------------------------------


google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawCrosshairs);

function drawCrosshairs() {
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'X');
      data.addColumn('number', 'Dogs');
      data.addColumn('number', 'Cats');

      data.addRows([
        [0, 0, 0],    [1, 10, 5],   [2, 23, 15],  [3, 17, 9],   [4, 18, 10],  [5, 9, 5],
        [6, 11, 3],   [7, 27, 19],  [8, 33, 25],  [9, 40, 32],  [10, 32, 24], [11, 35, 27],
        [12, 30, 22], [13, 40, 32], [14, 42, 34], [15, 47, 39], [16, 44, 36], [17, 48, 40],
        [18, 52, 44], [19, 54, 46], [20, 42, 34], [21, 55, 47], [22, 56, 48], [23, 57, 49],
        [24, 60, 52], [25, 50, 42], [26, 52, 44], [27, 51, 43], [28, 49, 41], [29, 53, 45],
        [30, 55, 47], [31, 60, 52], [32, 61, 53], [33, 59, 51], [34, 62, 54], [35, 65, 57],
        [36, 62, 54], [37, 58, 50], [38, 55, 47], [39, 61, 53], [40, 64, 56], [41, 65, 57],
        [42, 63, 55], [43, 66, 58], [44, 67, 59], [45, 69, 61], [46, 69, 61], [47, 70, 62],
        [48, 72, 64], [49, 68, 60], [50, 66, 58], [51, 65, 57], [52, 67, 59], [53, 70, 62],
        [54, 71, 63], [55, 72, 64], [56, 73, 65], [57, 75, 67], [58, 70, 62], [59, 68, 60],
        [60, 64, 56], [61, 60, 52], [62, 65, 57], [63, 67, 59], [64, 68, 60], [65, 69, 61],
        [66, 70, 62], [67, 72, 64], [68, 75, 67], [69, 80, 72]
      ]);

      var options = {
        hAxis: {
          title: 'Time'
        },
        vAxis: {
          title: 'Popularity'
        },
        colors: ['#a52714', '#097138'],
        crosshair: {
          color: '#000',
          trigger: 'selection'
        }
      };

      var chart = new google.visualization.LineChart(document.getElementById('hydrograph'));

      chart.draw(data, options);
      chart.setSelection([{row: 38, column: 1}]);

    }

/*
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
                  [3.18,	2.12,	4.48,	4.50]
                ]);


          var options = {
            hAxis: {
              title: 'Time'
            },
            vAxis: {
              title: 'Feet'
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


*/


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


}); // end scripts
