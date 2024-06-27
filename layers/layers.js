ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-456727.971955, 596529.005811, -455697.920194, 597382.584549]);
var wms_layers = [];


        var lyr_EsriWorldImagery_0 = new ol.layer.Tile({
            'title': 'Esri World Imagery',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://wiki.openstreetmap.org/wiki/Esri">Terms & Feedback</a>',
                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Lotavisiter_1 = new ol.format.GeoJSON();
var features_Lotavisiter_1 = format_Lotavisiter_1.readFeatures(json_Lotavisiter_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lotavisiter_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lotavisiter_1.addFeatures(features_Lotavisiter_1);
var lyr_Lotavisiter_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lotavisiter_1, 
                style: style_Lotavisiter_1,
                popuplayertitle: "Lot a visiter",
                interactive: true,
                title: '<img src="styles/legend/Lotavisiter_1.png" /> Lot a visiter'
            });

lyr_EsriWorldImagery_0.setVisible(true);lyr_Lotavisiter_1.setVisible(true);
var layersList = [lyr_EsriWorldImagery_0,lyr_Lotavisiter_1];
lyr_Lotavisiter_1.set('fieldAliases', {'id': 'id', 'LOT': 'LOT', 'ILOT': 'ILOT', });
lyr_Lotavisiter_1.set('fieldImages', {'id': 'TextEdit', 'LOT': 'TextEdit', 'ILOT': 'TextEdit', });
lyr_Lotavisiter_1.set('fieldLabels', {'id': 'inline label - always visible', 'LOT': 'inline label - always visible', 'ILOT': 'inline label - always visible', });
lyr_Lotavisiter_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});