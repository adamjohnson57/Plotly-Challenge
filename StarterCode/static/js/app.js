// Create function that reads data and plots figures
function  getPlot(id) {

    // Call data from json
    d3.json("static/samples.json").then(function(data) {
        console.log(data)

    var wfreq = data.metadata.map(d => d.wfreq)
    console.log('Wash Freq: ${wfreq}')

    // Filter sample values by ID
    var samples = data.samples.filter(s => s.id.toString() === id)[0];
    console.log(samples);

    // Slice to get top 10 sample values and OTU IDs
    var sampleValues = samples.sample_values.slice(0, 10).reverse();
    var idValues = (samples.otu_ids.slice(0, 10)).reverse();

    // Format OTU IDs for plot
    var idOTU = idValues.map(d => "OTU" + d)
    console.log('OTU IDs: ${idOTU}')

    // Slice to get labels for plot
    var labels = samples.otu_labels.slice(0, 10);
    console.log('Sample Values: ${sampleValues}')
    console.log('ID Values: ${idValues}')

    // Trace for plot
    var trace = {
        x: sampleValues,
        y: idOTU,
        type: "bar",
        text: labels,
        orientation: "h",
        marker: {color: 'rgb(225,150,60)'}
    };

    // Data variable
    var data = [trace];

    // Layout variable
    var layout = {
        title: "Top Ten OTUs",
        yaxis:{
            tickmode:"linear",
        },
        margin: {
            l: 100,
            r: 100,
            t: 25,
            b: 25
        }
    };

    
}
}