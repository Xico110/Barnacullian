var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Exclosures4_1 = new ol.format.GeoJSON();
var features_Exclosures4_1 = format_Exclosures4_1.readFeatures(json_Exclosures4_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Exclosures4_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Exclosures4_1.addFeatures(features_Exclosures4_1);
var lyr_Exclosures4_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Exclosures4_1, 
                style: style_Exclosures4_1,
                popuplayertitle: "Exclosures (4)",
                interactive: true,
                title: '<img src="styles/legend/Exclosures4_1.png" /> Exclosures (4)'
            });
var format_SheepFleece9_2 = new ol.format.GeoJSON();
var features_SheepFleece9_2 = format_SheepFleece9_2.readFeatures(json_SheepFleece9_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SheepFleece9_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SheepFleece9_2.addFeatures(features_SheepFleece9_2);
var lyr_SheepFleece9_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SheepFleece9_2, 
                style: style_SheepFleece9_2,
                popuplayertitle: "Sheep Fleece (9)",
                interactive: true,
                title: '<img src="styles/legend/SheepFleece9_2.png" /> Sheep Fleece (9)'
            });
var format_TimberDams489_3 = new ol.format.GeoJSON();
var features_TimberDams489_3 = format_TimberDams489_3.readFeatures(json_TimberDams489_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TimberDams489_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TimberDams489_3.addFeatures(features_TimberDams489_3);
var lyr_TimberDams489_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TimberDams489_3, 
                style: style_TimberDams489_3,
                popuplayertitle: "Timber Dams (489)",
                interactive: true,
                title: '<img src="styles/legend/TimberDams489_3.png" /> Timber Dams (489)'
            });
var format_Coir338_4 = new ol.format.GeoJSON();
var features_Coir338_4 = format_Coir338_4.readFeatures(json_Coir338_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Coir338_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Coir338_4.addFeatures(features_Coir338_4);
var lyr_Coir338_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Coir338_4, 
                style: style_Coir338_4,
                popuplayertitle: "Coir (338)",
                interactive: true,
                title: '<img src="styles/legend/Coir338_4.png" /> Coir (338)'
            });
var format_StoneDams135_5 = new ol.format.GeoJSON();
var features_StoneDams135_5 = format_StoneDams135_5.readFeatures(json_StoneDams135_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StoneDams135_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StoneDams135_5.addFeatures(features_StoneDams135_5);
var lyr_StoneDams135_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StoneDams135_5, 
                style: style_StoneDams135_5,
                popuplayertitle: "Stone Dams (135)",
                interactive: true,
                title: '<img src="styles/legend/StoneDams135_5.png" /> Stone Dams (135)'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Exclosures4_1.setVisible(true);lyr_SheepFleece9_2.setVisible(true);lyr_TimberDams489_3.setVisible(true);lyr_Coir338_4.setVisible(true);lyr_StoneDams135_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Exclosures4_1,lyr_SheepFleece9_2,lyr_TimberDams489_3,lyr_Coir338_4,lyr_StoneDams135_5];
lyr_Exclosures4_1.set('fieldAliases', {'id': 'id', 'Area': 'Area', });
lyr_SheepFleece9_2.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'Name': 'Name', });
lyr_TimberDams489_3.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'Name': 'Name', });
lyr_Coir338_4.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'Name': 'Name', });
lyr_StoneDams135_5.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'Name': 'Name', });
lyr_Exclosures4_1.set('fieldImages', {'id': 'TextEdit', 'Area': 'TextEdit', });
lyr_SheepFleece9_2.set('fieldImages', {'X': 'TextEdit', 'Y': 'TextEdit', 'Name': 'TextEdit', });
lyr_TimberDams489_3.set('fieldImages', {'X': 'TextEdit', 'Y': 'TextEdit', 'Name': 'TextEdit', });
lyr_Coir338_4.set('fieldImages', {'X': 'TextEdit', 'Y': 'TextEdit', 'Name': 'TextEdit', });
lyr_StoneDams135_5.set('fieldImages', {'X': 'TextEdit', 'Y': 'TextEdit', 'Name': 'TextEdit', });
lyr_Exclosures4_1.set('fieldLabels', {'id': 'no label', 'Area': 'hidden field', });
lyr_SheepFleece9_2.set('fieldLabels', {'X': 'hidden field', 'Y': 'hidden field', 'Name': 'header label - visible with data', });
lyr_TimberDams489_3.set('fieldLabels', {'X': 'hidden field', 'Y': 'hidden field', 'Name': 'header label - visible with data', });
lyr_Coir338_4.set('fieldLabels', {'X': 'hidden field', 'Y': 'hidden field', 'Name': 'header label - visible with data', });
lyr_StoneDams135_5.set('fieldLabels', {'X': 'hidden field', 'Y': 'hidden field', 'Name': 'header label - visible with data', });
lyr_StoneDams135_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});