// Aggregates

// Color

// Conditionals

// Conversions

// Custom

// Date and Time

// Fields and Values

// Fuzzy Matching

// General

// Geometry
function fnc_azimuth(values, context) {
    return false;
};

function fnc_project(values, context) {
    return false;
};

// Math
function fnc_abs(values, context) {
    return Math.abs(values[0]);
};

function fnc_degrees(values, context) {
    return values[0] * (180/Math.PI);
};

function fnc_radians(values, context) {
    return values[0] * (Math.PI/180);
};

function fnc_sqrt(values, context) {
    return Math.sqrt(values[0]);
};

function fnc_cos(values, context) {
    return Math.cos(values[0]);
};

function fnc_sin(values, context) {
    return Math.sin(values[0]);
};

function fnc_tan(values, context) {
    return Math.tan(values[0]);
};

function fnc_asin(values, context) {
    return Math.asin(values[0]);
};

function fnc_acos(values, context) {
    return Math.acos(values[0]);
};

function fnc_atan(values, context) {
    return Math.atan(values[0]);
};

function fnc_atan2(values, context) {
    return Math.atan2(values[0]);
};

function fnc_exp(values, context) {
    return Math.exp(values[0]);
};

function fnc_ln(values, context) {
    return Math.log(values[0]);
};

function fnc_log10(values, context) {
    return Math.LN10(values[0]);
};

function fnc_log(values, context) {
    return Math.log(values[0]) / Math.log(values[1]);
};

function fnc_round(values, context) {
    return Math.round(values[0]);
};

function fnc_rand(values, context) {
    return Math.floor(Math.random()*(values[1]-values[0]+1)+values[0]);
};

function fnc_randf(values, context) {
    return Math.random()*(values[1]-values[0]+1)+values[0];
};

function fnc_max(values, context) {
    return Math.max.apply(this, values);
};

function fnc_min(values, context) {
    return Math.min.apply(this, values);
};

function fnc_clamp(values, context) {
    return Math.min(Math.max(values[0],values[1]),values[2]);
};

// Operators

// Record

// String

// TimeManager

// Variables



function fnc_scale_linear(values, context) {
    return false;
};

function fnc_scale_exp(values, context) {
    return false;
};

function fnc_floor(values, context) {
    return Math.floor(values[0]);
};

function fnc_ceil(values, context) {
    return Math.ceil(values[0]);
};

function fnc_pi(values, context) {
    return Math.PI;
};

function fnc_to_int(values, context) {
    var intVal = parseInt(values[0],10);
    if ( isNaN(intVal) ) { return false };
    return intVal;
};

function fnc_to_real(values, context) {
    var realVal = parseFloat(values[0]);
    if ( isNaN(realVal) ) { return false };
    return realVal;
};

function fnc_to_string(values, context) {
    return String(values[0]);
};

function fnc_to_datetime(values, context) {
    return false;
};

function fnc_to_date(values, context) {
    return false;
};

function fnc_to_time(values, context) {
    return false;
};

function fnc_to_interval(values, context) {
    return false;
};

function fnc_coalesce(values, context) {
    return false;
};

function fnc_if(values, context) {
    return values[0] ? values[1] : values[2];
}

function fnc_aggregate(values, context) {
    return false;
};

function fnc_relation_aggregate(values, context) {
    return false;
};

function fnc_count(values, context) {
    return false;
};

function fnc_count_distinct(values, context) {
    return false;
};

function fnc_count_missing(values, context) {
    return false;
};

function fnc_minimum(values, context) {
    return false;
};

function fnc_maximum(values, context) {
    return false;
};

function fnc_sum(values, context) {
    return false;
};

function fnc_mean(values, context) {
    return false;
};

function fnc_median(values, context) {
    return false;
};

function fnc_stdev(values, context) {
    return false;
};

function fnc_range(values, context) {
    return false;
};

function fnc_minority(values, context) {
    return false;
};

function fnc_majority(values, context) {
    return false;
};

function fnc_q1(values, context) {
    return false;
};

function fnc_q3(values, context) {
    return false;
};

function fnc_iqr(values, context) {
    return false;
};

function fnc_min_length(values, context) {
    return false;
};

function fnc_max_length(values, context) {
    return false;
};

function fnc_concatenate(values, context) {
    return false;
};

function fnc_regexp_match(values, context) {
    return false;
};

function fnc_now(values, context) {
    return new Date().toISOString();
};

function fnc_age(values, context) {
    return false;
};

function fnc_year(values, context) {
    return false;
};

function fnc_month(values, context) {
    return false;
};

function fnc_week(values, context) {
    return false;
};

function fnc_day(values, context) {
    return false;
};

function fnc_hour(values, context) {
    return false;
};

function fnc_minute(values, context) {
    return false;
};

function fnc_second(values, context) {
    return false;
};

function fnc_day_of_week(values, context) {
    return false;
};

function fnc_lower(values, context) {
    if ( typeof values[0] != "string" ) { return false; } 
    return values[0].toLowerCase();
};

function fnc_upper(values, context) {
    if ( typeof values[0] != "string" ) { return false; } 
    return values[0].toUpperCase();
};

function fnc_title(values, context) {
    if ( typeof values[0] != "string" ) { return false; }
    return values[0].toLowerCase().split(' ').map(function(word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
};

function fnc_trim(values, context) {
    if ( typeof values[0] != "string" ) { return false; } 
    return String(values[0]).trim();
};

function fnc_levenshtein(values, context) {
    return false;
};

function fnc_longest_common_substring(values, context) {
    return false;
};

function fnc_hamming_distance(values, context) {
    return false;
};

function fnc_soundex(values, context) {
    return false;
};

function fnc_char(values, context) {
    if ( isNaN(values[0]) || !values[0]) { return null; } return String.fromCodePoint(values[0]);
};

function fnc_wordwrap(values, context) {
    return false;
};

function fnc_length(values, context) {
    return false;
};

function fnc_replace(values, context) {
    return false;
};

function fnc_regexp_replace(values, context) {
    if ( !values[0] ) { return null; } return String(values[0]).replace(RegExp(values[1]),values[2]);
};

function fnc_regexp_substr(values, context) {
    if ( !values[0] ) { return null; }
    return String(values[0]).match(RegExp(values[1]))[0];
};

function fnc_substr(values, context) {
    var length = values[2]
    if ( !values[0] || isNaN(values[1])) { return false; }
    return String(values[0]).substr(values[1], length);
};

function fnc_concat(values, context) {
    return values.join(''); 
};

function fnc_strpos(values, context) {
   if (!values[0] || !values[1]) {return null}
   return String(values[0]).indexOf(String(values[1]))+1;
};

function fnc_left(values, context) {
    return false;
};

function fnc_right(values, context) {
    return false;
};

function fnc_rpad(values, context) {
    return false;
};

function fnc_lpad(values, context) {
    return false;
};

function fnc_format(values, context) {
    return false;
};

function fnc_format_number(values, context) {
    return false;
};

function fnc_format_date(values, context) {
    return false;
};

function fnc_color_rgb(values, context) {
    return false;
};

function fnc_color_rgba(values, context) {
    return false;
};

function fnc_ramp_color(values, context) {
    return false;
};

function fnc_color_hsl(values, context) {
    return false;
};

function fnc_color_hsla(values, context) {
    return false;
};

function fnc_color_hsv(values, context) {
    return false;
};

function fnc_color_hsva(values, context) {
    return false;
};

function fnc_color_cmyk(values, context) {
    return false;
};

function fnc_color_cmyka(values, context) {
    return false;
};

function fnc_color_part(values, context) {
    return false;
};

function fnc_darker(values, context) {
    return false;
};

function fnc_lighter(values, context) {
    return false;
};

function fnc_set_color_part(values, context) {
    return false;
};

function fnc_area(values, context) {
    return false;
};

function fnc_perimeter(values, context) {
    return false;
};

function fnc_x(values, context) {
    return false;
};

function fnc_y(values, context) {
    return false;
};

function fnc_z(values, context) {
    return false;
};

function fnc_m(values, context) {
    return false;
};

function fnc_point_n(values, context) {
    return false;
};

function fnc_start_point(values, context) {
    return false;
};

function fnc_end_point(values, context) {
    return false;
};

function fnc_nodes_to_points(values, context) {
    return false;
};

function fnc_segments_to_lines(values, context) {
    return false;
};

function fnc_make_point(values, context) {
    return false;
};

function fnc_make_point_m(values, context) {
    return false;
};

function fnc_make_line(values, context) {
    return false;
};

function fnc_make_polygon(values, context) {
    return false;
};

function fnc_x_min(values, context) {
    return false;
};

function fnc_x_max(values, context) {
    return false;
};

function fnc_y_min(values, context) {
    return false;
};

function fnc_y_max(values, context) {
    return false;
};

function fnc_geom_from_wkt(values, context) {
    return false;
};

function fnc_geom_from_gml(values, context) {
    return false;
};

function fnc_relate(values, context) {
    return false;
};

function fnc_intersects_bbox(values, context) {
    return false;
};

function fnc_disjoint(values, context) {
    return false;
};

function fnc_intersects(values, context) {
    return false;
};

function fnc_touches(values, context) {
    return false;
};

function fnc_crosses(values, context) {
    return false;
};

function fnc_contains(values, context) {
    return false;
};

function fnc_overlaps(values, context) {
    return false;
};

function fnc_within(values, context) {
    return false;
};

function fnc_translate(values, context) {
    return false;
};

function fnc_buffer(values, context) {
    return false;
};

function fnc_centroid(values, context) {
    return false;
};

function fnc_point_on_surface(values, context) {
    return false;
};

function fnc_reverse(values, context) {
    return false;
};

function fnc_exterior_ring(values, context) {
    return false;
};

function fnc_interior_ring_n(values, context) {
    return false;
};

function fnc_geometry_n(values, context) {
    return false;
};

function fnc_boundary(values, context) {
    return false;
};

function fnc_line_merge(values, context) {
    return false;
};

function fnc_bounds(values, context) {
    return false;
};

function fnc_num_points(values, context) {
    return false;
};

function fnc_num_interior_rings(values, context) {
    return false;
};

function fnc_num_rings(values, context) {
    return false;
};

function fnc_num_geometries(values, context) {
    return false;
};

function fnc_bounds_width(values, context) {
    return false;
};

function fnc_bounds_height(values, context) {
    return false;
};

function fnc_is_closed(values, context) {
    return false;
};

function fnc_convex_hull(values, context) {
    return false;
};

function fnc_difference(values, context) {
    return false;
};

function fnc_distance(values, context) {
    return false;
};

function fnc_intersection(values, context) {
    return false;
};

function fnc_sym_difference(values, context) {
    return false;
};

function fnc_combine(values, context) {
    return false;
};

function fnc_union(values, context) {
    return false;
};

function fnc_geom_to_wkt(values, context) {
    return false;
};

function fnc_geometry(values, context) {
    return false;
};

function fnc_transform(values, context) {
    return false;
};

function fnc_extrude(values, context) {
    return false;
};

function fnc_order_parts(values, context) {
    return false;
};

function fnc_closest_point(values, context) {
    return false;
};

function fnc_shortest_line(values, context) {
    return false;
};

function fnc_line_interpolate_point(values, context) {
    return false;
};

function fnc_line_interpolate_angle(values, context) {
    return false;
};

function fnc_line_locate_point(values, context) {
    return false;
};

function fnc_angle_at_vertex(values, context) {
    return false;
};

function fnc_distance_to_vertex(values, context) {
    return false;
};

function fnc_uuid(values, context) {
    return false;
};

function fnc_get_feature(values, context) {
    return false;
};

function fnc_layer_property(values, context) {
    return false;
};

function fnc_var(values, context) {
    return false;
};

function fnc_eval(values, context) {
    return false;
};

function fnc_attribute(values, context) {
    return false;
};

function fnc__specialcol_(values, context) {
    return false;
};

function fnc_project_color(values, context) {
    return false;
};



function exp_canonadesSANTISCLEcanonades_1rule0_eval_expression(context) {
    // state = 1 AND descript = 'ALTA-BOMBEIG'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('state')  == 1) && (feature.get('descript')  == 'ALTA-BOMBEIG'));
    } else {
        return ((feature.get('state')  == 1) && (feature.get('descript')  == 'ALTA-BOMBEIG'));
    }
}


function exp_canonadesSANTISCLEcanonades_1rule1_eval_expression(context) {
    // state = 1 AND descript = 'ALTA-BOMBEIG'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('state')  == 1) && (feature.get('descript')  == 'ALTA-BOMBEIG'));
    } else {
        return ((feature.get('state')  == 1) && (feature.get('descript')  == 'ALTA-BOMBEIG'));
    }
}


function exp_canonadesSANTISCLEcanonades_1rule2_eval_expression(context) {
    // state = 1 AND descript = 'ALTA-GRAVETAT'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('state')  == 1) && (feature.get('descript')  == 'ALTA-GRAVETAT'));
    } else {
        return ((feature.get('state')  == 1) && (feature.get('descript')  == 'ALTA-GRAVETAT'));
    }
}


function exp_canonadesSANTISCLEcanonades_1rule3_eval_expression(context) {
    // state = 1 AND descript = 'BAIXA-BOMBEIG'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('state')  == 1) && (feature.get('descript')  == 'BAIXA-BOMBEIG'));
    } else {
        return ((feature.get('state')  == 1) && (feature.get('descript')  == 'BAIXA-BOMBEIG'));
    }
}


function exp_canonadesSANTISCLEcanonades_1rule4_eval_expression(context) {
    // state = 1 AND descript = 'BAIXA-GRAVETAT'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('state')  == 1) && (feature.get('descript')  == 'BAIXA-GRAVETAT'));
    } else {
        return ((feature.get('state')  == 1) && (feature.get('descript')  == 'BAIXA-GRAVETAT'));
    }
}


function exp_canonadesSANTISCLEcanonades_1rule5_eval_expression(context) {
    // state = 1 AND descript = 'ESCOMESA-GRAVETAT'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('state')  == 1) && (feature.get('descript')  == 'ESCOMESA-GRAVETAT'));
    } else {
        return ((feature.get('state')  == 1) && (feature.get('descript')  == 'ESCOMESA-GRAVETAT'));
    }
}


function exp_canonadesSANTISCLEcanonades_1rule6_eval_expression(context) {
    // state = 1 AND descript = 'ESCOMESA-BOMBEIG'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('state')  == 1) && (feature.get('descript')  == 'ESCOMESA-BOMBEIG'));
    } else {
        return ((feature.get('state')  == 1) && (feature.get('descript')  == 'ESCOMESA-BOMBEIG'));
    }
}


function exp_elementsSANTISCLEelements_2rule0_eval_expression(context) {
    // element = 'Diposit' AND state = '1'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('element')  == 'Diposit') && (feature.get('state')  == '1'));
    } else {
        return ((feature.get('element')  == 'Diposit') && (feature.get('state')  == '1'));
    }
}


function exp_elementsSANTISCLEelements_2rule1_eval_expression(context) {
    // element = 'Pou' AND state = '1'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('element')  == 'Pou') && (feature.get('state')  == '1'));
    } else {
        return ((feature.get('element')  == 'Pou') && (feature.get('state')  == '1'));
    }
}


function exp_elementsSANTISCLEelements_2rule2_eval_expression(context) {
    // element = 'Grup de pressió' AND state = '1'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('element')  == 'Grup de pressió') && (feature.get('state')  == '1'));
    } else {
        return ((feature.get('element')  == 'Grup de pressió') && (feature.get('state')  == '1'));
    }
}


function exp_elementsSANTISCLEelements_2rule3_eval_expression(context) {
    // element = 'Hidrant' AND state = '1'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('element')  == 'Hidrant') && (feature.get('state')  == '1'));
    } else {
        return ((feature.get('element')  == 'Hidrant') && (feature.get('state')  == '1'));
    }
}


function exp_elementsSANTISCLEelements_2rule4_eval_expression(context) {
    // element = 'Comptador' AND state = '1'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('element')  == 'Comptador') && (feature.get('state')  == '1'));
    } else {
        return ((feature.get('element')  == 'Comptador') && (feature.get('state')  == '1'));
    }
}


function exp_elementsSANTISCLEelements_2rule5_eval_expression(context) {
    // element = 'Reductora' AND state = '1'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('element')  == 'Reductora') && (feature.get('state')  == '1'));
    } else {
        return ((feature.get('element')  == 'Reductora') && (feature.get('state')  == '1'));
    }
}


function exp_elementsSANTISCLEelements_2rule6_eval_expression(context) {
    // element = 'Aixeta' AND state = '1' AND (tancada = 'NO' OR tancada IS NULL) AND (espallada = 'NO' OR espallada IS NULL)

    var feature = context.feature;
    
    if (feature.properties) {
        return ((((feature.get('element')  == 'Aixeta') && (feature.get('state')  == '1')) && ((feature.get('tancada')  == 'NO') || (feature.get('tancada')  === null))) && ((feature.get('espallada')  == 'NO') || (feature.get('espallada')  === null)));
    } else {
        return ((((feature.get('element')  == 'Aixeta') && (feature.get('state')  == '1')) && ((feature.get('tancada')  == 'NO') || (feature.get('tancada')  === null))) && ((feature.get('espallada')  == 'NO') || (feature.get('espallada')  === null)));
    }
}


function exp_elementsSANTISCLEelements_2rule7_eval_expression(context) {
    // element = 'Aixeta' AND state = '1' AND (tancada = 'NO' OR tancada IS NULL) AND espallada = 'SI'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((((feature.get('element')  == 'Aixeta') && (feature.get('state')  == '1')) && ((feature.get('tancada')  == 'NO') || (feature.get('tancada')  === null))) && (feature.get('espallada')  == 'SI'));
    } else {
        return ((((feature.get('element')  == 'Aixeta') && (feature.get('state')  == '1')) && ((feature.get('tancada')  == 'NO') || (feature.get('tancada')  === null))) && (feature.get('espallada')  == 'SI'));
    }
}


function exp_elementsSANTISCLEelements_2rule8_eval_expression(context) {
    // element = 'Aixeta' AND state = '1' AND tancada = 'SI' AND (espallada = 'NO' OR espallada IS NULL)

    var feature = context.feature;
    
    if (feature.properties) {
        return ((((feature.get('element')  == 'Aixeta') && (feature.get('state')  == '1')) && (feature.get('tancada')  == 'SI')) && ((feature.get('espallada')  == 'NO') || (feature.get('espallada')  === null)));
    } else {
        return ((((feature.get('element')  == 'Aixeta') && (feature.get('state')  == '1')) && (feature.get('tancada')  == 'SI')) && ((feature.get('espallada')  == 'NO') || (feature.get('espallada')  === null)));
    }
}


function exp_elementsSANTISCLEelements_2rule9_eval_expression(context) {
    // element = 'Aixeta' AND state = '1' AND tancada = 'SI' AND espallada = 'SI'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((((feature.get('element')  == 'Aixeta') && (feature.get('state')  == '1')) && (feature.get('tancada')  == 'SI')) && (feature.get('espallada')  == 'SI'));
    } else {
        return ((((feature.get('element')  == 'Aixeta') && (feature.get('state')  == '1')) && (feature.get('tancada')  == 'SI')) && (feature.get('espallada')  == 'SI'));
    }
}


function exp_elementsSANTISCLEelements_2rule10_eval_expression(context) {
    // element = 'Ventosa' AND state = '1'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('element')  == 'Ventosa') && (feature.get('state')  == '1'));
    } else {
        return ((feature.get('element')  == 'Ventosa') && (feature.get('state')  == '1'));
    }
}


function exp_elementsSANTISCLEelements_2rule11_eval_expression(context) {
    // element = 'Descarrega' AND state = '1'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('element')  == 'Descarrega') && (feature.get('state')  == '1'));
    } else {
        return ((feature.get('element')  == 'Descarrega') && (feature.get('state')  == '1'));
    }
}


function exp_elementsSANTISCLEelements_2rule12_eval_expression(context) {
    // element = 'Boca de rec' AND state = '1'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('element')  == 'Boca de rec') && (feature.get('state')  == '1'));
    } else {
        return ((feature.get('element')  == 'Boca de rec') && (feature.get('state')  == '1'));
    }
}


function exp_elementsSANTISCLEelements_2rule13_eval_expression(context) {
    // element = 'Punt de mostreig' AND state = '1'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('element')  == 'Punt de mostreig') && (feature.get('state')  == '1'));
    } else {
        return ((feature.get('element')  == 'Punt de mostreig') && (feature.get('state')  == '1'));
    }
}


function exp_elementsSANTISCLEelements_2rule14_eval_expression(context) {
    // element = 'Manometre' AND state = '1'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('element')  == 'Manometre') && (feature.get('state')  == '1'));
    } else {
        return ((feature.get('element')  == 'Manometre') && (feature.get('state')  == '1'));
    }
}


function exp_elementsSANTISCLEelements_2rule15_eval_expression(context) {
    // element = 'Node' AND state = '1'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('element')  == 'Node') && (feature.get('state')  == '1'));
    } else {
        return ((feature.get('element')  == 'Node') && (feature.get('state')  == '1'));
    }
}


function exp_elementsSANTISCLEelements_2rule16_eval_expression(context) {
    // element = 'Tap' AND state = '1'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.get('element')  == 'Tap') && (feature.get('state')  == '1'));
    } else {
        return ((feature.get('element')  == 'Tap') && (feature.get('state')  == '1'));
    }
}