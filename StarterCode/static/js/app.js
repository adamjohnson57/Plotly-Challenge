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
}
}