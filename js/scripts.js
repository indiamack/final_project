// google maps Api -----------------------------------------------
var chapelHill = {lat: 35.7373006, lng: -79.0217736};
var contentString = '<h3>UNC is awesome</h3>';

function initMap() {
  var  map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 35.3117195, lng: -79.8952339},
      zoom: 7.6
    });


        // The marker, positioned at Jordan Lake near Chapel Hill
        var marker = new google.maps.Marker({
          position: chapelHill,
          map: map,
          animation: google.maps.Animation.DROP
        });

        //Open city InfoWindow
        var infowindow = new google.maps.InfoWindow({
            content: contentString
          });

        var infoSection = document.getElementById('info-section');

        marker.addListener('click', function() {
            console.log('testing');
            infoSection.innerHTML = contentString;
            initMap();
          });

        //Show a street view
          var panorama = new google.maps.StreetViewPanorama(
               document.getElementById('chapelhill'), {
                 position: chapelHill,
                 pov: {
                   heading: 10,
                   pitch: 10
                 }
               });
           map.setStreetView(panorama);




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



}); // end scripts