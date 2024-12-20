var wms_layers = [];


        var lyr_GoogleEarth_0 = new ol.layer.Tile({
            'title': 'Google Earth',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_Pendientes_rea_Panguipulli_1 = new ol.format.GeoJSON();
var features_Pendientes_rea_Panguipulli_1 = format_Pendientes_rea_Panguipulli_1.readFeatures(json_Pendientes_rea_Panguipulli_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pendientes_rea_Panguipulli_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pendientes_rea_Panguipulli_1.addFeatures(features_Pendientes_rea_Panguipulli_1);
var lyr_Pendientes_rea_Panguipulli_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pendientes_rea_Panguipulli_1, 
                style: style_Pendientes_rea_Panguipulli_1,
                popuplayertitle: 'Pendientes_Área_Panguipulli',
                interactive: true,
                title: '<img src="styles/legend/Pendientes_rea_Panguipulli_1.png" /> Pendientes_Área_Panguipulli'
            });

lyr_GoogleEarth_0.setVisible(true);lyr_Pendientes_rea_Panguipulli_1.setVisible(true);
var layersList = [lyr_GoogleEarth_0,lyr_Pendientes_rea_Panguipulli_1];
lyr_Pendientes_rea_Panguipulli_1.set('fieldAliases', {'qc_id': 'qc_id', 'dn': 'dn', 'area': 'area', });
lyr_Pendientes_rea_Panguipulli_1.set('fieldImages', {'qc_id': '', 'dn': '', 'area': '', });
lyr_Pendientes_rea_Panguipulli_1.set('fieldLabels', {'qc_id': 'no label', 'dn': 'no label', 'area': 'no label', });
lyr_Pendientes_rea_Panguipulli_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});