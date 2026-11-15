var wms_layers = [];

var lyr_OrtofotodeCatalunyacolorvigent_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "ortofoto_color_vigent",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Ortofoto de Catalunya color vigent',
                            popuplayertitle: 'Ortofoto de Catalunya color vigent',
                            type: '',
                            opacity: 0.500000,
                            
                            
                          });
              wms_layers.push([lyr_OrtofotodeCatalunyacolorvigent_0, 0]);
var format_canonadesSANTISCLEcanonades_1 = new ol.format.GeoJSON();
var features_canonadesSANTISCLEcanonades_1 = format_canonadesSANTISCLEcanonades_1.readFeatures(json_canonadesSANTISCLEcanonades_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_canonadesSANTISCLEcanonades_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_canonadesSANTISCLEcanonades_1.addFeatures(features_canonadesSANTISCLEcanonades_1);
var lyr_canonadesSANTISCLEcanonades_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_canonadesSANTISCLEcanonades_1, 
                style: style_canonadesSANTISCLEcanonades_1,
                popuplayertitle: 'canonades - SANT ISCLE — canonades',
                interactive: true,
    title: 'canonades - SANT ISCLE — canonades<br />\
    <img src="styles/legend/canonadesSANTISCLEcanonades_1_0.png" /> Alta - Bombeig<br />\
    <img src="styles/legend/canonadesSANTISCLEcanonades_1_1.png" /> Alta - Bombeig<br />\
    <img src="styles/legend/canonadesSANTISCLEcanonades_1_2.png" /> Alta - Gravetat<br />\
    <img src="styles/legend/canonadesSANTISCLEcanonades_1_3.png" /> Baixa - Bombeig<br />\
    <img src="styles/legend/canonadesSANTISCLEcanonades_1_4.png" /> Baixa - Gravetat<br />\
    <img src="styles/legend/canonadesSANTISCLEcanonades_1_5.png" /> Escomesa - Gravetat<br />\
    <img src="styles/legend/canonadesSANTISCLEcanonades_1_6.png" /> Escomesa - Bombeig<br />' });
var format_elementsSANTISCLEelements_2 = new ol.format.GeoJSON();
var features_elementsSANTISCLEelements_2 = format_elementsSANTISCLEelements_2.readFeatures(json_elementsSANTISCLEelements_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_elementsSANTISCLEelements_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_elementsSANTISCLEelements_2.addFeatures(features_elementsSANTISCLEelements_2);
var lyr_elementsSANTISCLEelements_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_elementsSANTISCLEelements_2, 
                style: style_elementsSANTISCLEelements_2,
                popuplayertitle: 'elements - SANT ISCLE — elements',
                interactive: true,
    title: 'elements - SANT ISCLE — elements<br />\
    <img src="styles/legend/elementsSANTISCLEelements_2_0.png" /> - - - Dipòsit<br />\
    <img src="styles/legend/elementsSANTISCLEelements_2_1.png" /> - - - Pou<br />\
    <img src="styles/legend/elementsSANTISCLEelements_2_2.png" /> - - - Grup de pressió<br />\
    <img src="styles/legend/elementsSANTISCLEelements_2_3.png" /> - - - Hidrant<br />\
    <img src="styles/legend/elementsSANTISCLEelements_2_4.png" /> - - - Comptador<br />\
    <img src="styles/legend/elementsSANTISCLEelements_2_5.png" /> - - - Reductora<br />\
    <img src="styles/legend/elementsSANTISCLEelements_2_6.png" /> - - - Aixeta oberta<br />\
    <img src="styles/legend/elementsSANTISCLEelements_2_7.png" /> - - - Aixeta oberta espallada<br />\
    <img src="styles/legend/elementsSANTISCLEelements_2_8.png" /> - - - Aixeta tancada<br />\
    <img src="styles/legend/elementsSANTISCLEelements_2_9.png" /> - - - Aixeta tancada espallada<br />\
    <img src="styles/legend/elementsSANTISCLEelements_2_10.png" /> - - - Ventosa<br />\
    <img src="styles/legend/elementsSANTISCLEelements_2_11.png" /> - - - Descarrega<br />\
    <img src="styles/legend/elementsSANTISCLEelements_2_12.png" /> - - - Boca de rec<br />\
    <img src="styles/legend/elementsSANTISCLEelements_2_13.png" /> - - - Punt de mostreig<br />\
    <img src="styles/legend/elementsSANTISCLEelements_2_14.png" /> - - - Manometre<br />\
    <img src="styles/legend/elementsSANTISCLEelements_2_15.png" /> - - - Node<br />\
    <img src="styles/legend/elementsSANTISCLEelements_2_16.png" /> - - - Tap<br />' });

lyr_OrtofotodeCatalunyacolorvigent_0.setVisible(true);lyr_canonadesSANTISCLEcanonades_1.setVisible(true);lyr_elementsSANTISCLEelements_2.setVisible(true);
var layersList = [lyr_OrtofotodeCatalunyacolorvigent_0,lyr_canonadesSANTISCLEcanonades_1,lyr_elementsSANTISCLEelements_2];
lyr_canonadesSANTISCLEcanonades_1.set('fieldAliases', {'fid': 'fid', 'state': 'state', 'state_type': 'state_type', 'descript': 'descript', 'descript_m': 'descript_m', 'canonada': 'canonada', 'explotacio': 'explotacio', 'longitud': 'longitud', });
lyr_elementsSANTISCLEelements_2.set('fieldAliases', {'fid': 'fid', 'state': 'state', 'state_type': 'state_type', 'element': 'element', 'espallada': 'espallada', 'tancada': 'tancada', 'explotacio': 'explotacio', 'nom_foto_1': 'nom_foto_1', 'link_foto_1': 'link_foto_1', 'nom_foto_2': 'nom_foto_2', 'link_foto_2': 'link_foto_2', 'nom_foto_3': 'nom_foto_3', 'link_foto_3': 'link_foto_3', });
lyr_canonadesSANTISCLEcanonades_1.set('fieldImages', {'fid': '', 'state': '', 'state_type': '', 'descript': '', 'descript_m': '', 'canonada': '', 'explotacio': '', 'longitud': '', });
lyr_elementsSANTISCLEelements_2.set('fieldImages', {'fid': '', 'state': '', 'state_type': '', 'element': '', 'espallada': '', 'tancada': '', 'explotacio': '', 'nom_foto_1': '', 'link_foto_1': '', 'nom_foto_2': '', 'link_foto_2': '', 'nom_foto_3': '', 'link_foto_3': '', });
lyr_canonadesSANTISCLEcanonades_1.set('fieldLabels', {'fid': 'no label', 'state': 'no label', 'state_type': 'no label', 'descript': 'no label', 'descript_m': 'no label', 'canonada': 'no label', 'explotacio': 'no label', 'longitud': 'no label', });
lyr_elementsSANTISCLEelements_2.set('fieldLabels', {'fid': 'no label', 'state': 'no label', 'state_type': 'no label', 'element': 'no label', 'espallada': 'no label', 'tancada': 'no label', 'explotacio': 'no label', 'nom_foto_1': 'no label', 'link_foto_1': 'no label', 'nom_foto_2': 'no label', 'link_foto_2': 'no label', 'nom_foto_3': 'no label', 'link_foto_3': 'no label', });
lyr_elementsSANTISCLEelements_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});