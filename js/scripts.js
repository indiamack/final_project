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

    /*  var url = './js/hydrograph.json';
      var hydrograph = [];
      var x = [];
      var y1 = [];
      var y2 = [];
      var y3 = [];

      $.ajax({
        type: 'GET',
        dataType: 'json',
        data: hydrograph,
        url: url,
        async: true,
        success: function(hydrograph){
          console.log(hydrograph);

          for (i=0; i < hydrograph.length; i++){
            x.push(hydrograph[i].x);
            y1.push(hydrograph[i].y1);
            y2.push(hydrograph[i].y2);
            y3.push(hydrograph[i].y3);
            console.log(x);
          }
*/

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

    //    } //success

    //  });//ajax



$(function(){

$('img[usemap]').imageMap();
Tipped.create('#beaufort', 'Some tooltip text', { target: 'mouse', position: 'topleft' });


}); // end scripts
