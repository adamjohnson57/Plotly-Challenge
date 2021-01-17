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
            t: 100,
            b: 30
        }
    };

    // Bar plot
    Plotly.newPlot("bar", data, layout);

    // Bubble plot trace
    var trace2 = {
        x: samples.otu_ids,
        y: samples.sample_values,
        mode: "markers",
        marker: {
            size: samples.sample_values,
            color: samples.otu_ids
        },
        text: samples.otu_labels
    };

    // Bubble plot layout
    var layout = {
        xaxis:{title: "OTU ID"},
        height: 600,
        width: 1200
    };
    
    // Data variable
    var data2 = [trace2];
    
    // Bubble plot
    Plotly.newPlot("bubble", data2, layout);

    // Gauge Chart
    var data_gauge = [
        {
        domain: { x:[0, 1], y: [0, 1] },
        value: parseFloat(wfreq),
        title: { text: 'Belly Button Washing Frequency' },
        type: "indicator",
        mode: "gauge+number",
        gauge: { 
            axis: { range: [null, 9] },
            steps: [
                { range: [0, 1], color: "ffe3b1" },
                { range: [1, 2], color: "ffdc9d" },
                { range: [2, 3], color: "ffd589" },
                { range: [3, 4], color: "ffcf76" },
                { range: [4, 5], color: "ffc862" },
                { range: [5, 6], color: "ffc14e" },
                { range: [6, 7], color: "ffba3b" },
                { range: [7, 8], color: "ffb327" },
                { range: [8, 9], color: "ffac14" },
            ]} 
        }
    ];

    // Gauge layout
    var layout_gauge = {
        width: 600,
        height: 600,
        margin: { 
            t: 25, 
            b: 40,
            l: 100,
            r: 100
        } 
    };
    
    // Gauge Plot
    Plotly.newPlot("gauge", data_gauge, layout_gauge);
    });
}

    // Function for getting data
function getData(id) {
    d3.json("static/samples.json").then((data)=> {

        var metadata = data.metadata;
        console.log(metadata)

    // Filter metadata by ID
    var results = metadata.filter(meta => meta.id.toString() === id)[0];
    })
}