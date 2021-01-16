// Create function that reads data and plots figures
function  getPlot(id) {

    // Call data from json
    d3.json("static/samples.json").then(function(data) {
        console.log(data)

    var wfreq = data.metadata.map(d => d.wfreq)
    console.log('Wash Freq: ${wfreq}')
    }
}