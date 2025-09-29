var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
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
var format_Coir731_2 = new ol.format.GeoJSON();
var features_Coir731_2 = format_Coir731_2.readFeatures(json_Coir731_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Coir731_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Coir731_2.addFeatures(features_Coir731_2);
var lyr_Coir731_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Coir731_2, 
                style: style_Coir731_2,
                popuplayertitle: "Coir (731)",
                interactive: true,
                title: '<img src="styles/legend/Coir731_2.png" /> Coir (731)'
            });
var format_SheepFleece9_3 = new ol.format.GeoJSON();
var features_SheepFleece9_3 = format_SheepFleece9_3.readFeatures(json_SheepFleece9_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SheepFleece9_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SheepFleece9_3.addFeatures(features_SheepFleece9_3);
var lyr_SheepFleece9_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SheepFleece9_3, 
                style: style_SheepFleece9_3,
                popuplayertitle: "Sheep Fleece (9)",
                interactive: true,
                title: '<img src="styles/legend/SheepFleece9_3.png" /> Sheep Fleece (9)'
            });
var format_StoneDams202_4 = new ol.format.GeoJSON();
var features_StoneDams202_4 = format_StoneDams202_4.readFeatures(json_StoneDams202_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StoneDams202_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StoneDams202_4.addFeatures(features_StoneDams202_4);
var lyr_StoneDams202_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StoneDams202_4, 
                style: style_StoneDams202_4,
                popuplayertitle: "Stone Dams (202)",
                interactive: true,
                title: '<img src="styles/legend/StoneDams202_4.png" /> Stone Dams (202)'
            });
var format_TimberDams522_5 = new ol.format.GeoJSON();
var features_TimberDams522_5 = format_TimberDams522_5.readFeatures(json_TimberDams522_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TimberDams522_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TimberDams522_5.addFeatures(features_TimberDams522_5);
var lyr_TimberDams522_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TimberDams522_5, 
                style: style_TimberDams522_5,
                popuplayertitle: "Timber Dams (522)",
                interactive: true,
                title: '<img src="styles/legend/TimberDams522_5.png" /> Timber Dams (522)'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Exclosures4_1.setVisible(true);lyr_Coir731_2.setVisible(true);lyr_SheepFleece9_3.setVisible(true);lyr_StoneDams202_4.setVisible(true);lyr_TimberDams522_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Exclosures4_1,lyr_Coir731_2,lyr_SheepFleece9_3,lyr_StoneDams202_4,lyr_TimberDams522_5];
lyr_Exclosures4_1.set('fieldAliases', {'id': 'id', 'Area': 'Area', });
lyr_Coir731_2.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'Name': 'Name', });
lyr_SheepFleece9_3.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'Name': 'Name', });
lyr_StoneDams202_4.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'Name': 'Name', });
lyr_TimberDams522_5.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'Name': 'Name', });
lyr_Exclosures4_1.set('fieldImages', {'id': 'TextEdit', 'Area': 'TextEdit', });
lyr_Coir731_2.set('fieldImages', {'X': 'TextEdit', 'Y': 'TextEdit', 'Name': 'TextEdit', });
lyr_SheepFleece9_3.set('fieldImages', {'X': 'TextEdit', 'Y': 'TextEdit', 'Name': 'TextEdit', });
lyr_StoneDams202_4.set('fieldImages', {'X': 'TextEdit', 'Y': 'TextEdit', 'Name': 'TextEdit', });
lyr_TimberDams522_5.set('fieldImages', {'X': 'TextEdit', 'Y': 'TextEdit', 'Name': 'TextEdit', });
lyr_Exclosures4_1.set('fieldLabels', {'id': 'inline label - visible with data', 'Area': 'inline label - visible with data', });
lyr_Coir731_2.set('fieldLabels', {'X': 'hidden field', 'Y': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_SheepFleece9_3.set('fieldLabels', {'X': 'hidden field', 'Y': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_StoneDams202_4.set('fieldLabels', {'X': 'hidden field', 'Y': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_TimberDams522_5.set('fieldLabels', {'X': 'hidden field', 'Y': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_TimberDams522_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});