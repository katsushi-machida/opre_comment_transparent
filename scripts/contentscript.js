'use strict';

var chart_area_bg_color = '';
var comment_area_bg_color = '';

function fn_full_sc_com_open() {
    chart_area_bg_color = $('.c-chart.js-chartArea.live').css('background');
    comment_area_bg_color = $('.c-chart__comment.js-chartCommentArea.js-chartCommentAreaPc').css('background');
    $('#openrec-video-player').append($('<div id=\'full_sc_com_case\'></div>'));
    $('#full_sc_com_case').append($('<a class=\'full_sc_com_close_btn\' href=\'javascript:void(0)\'>✖</div>'));
    $('#full_sc_com_case').css('position', 'absolute');
    $('#full_sc_com_case').css('right', '0');
    $('#full_sc_com_case').css('font-size', '1.2rem');
    $('#full_sc_com_case').css('text-align', 'left');
    $('#full_sc_com_case').append($('#ticker'));
    $('#full_sc_com_case').append($('.c-chart.js-chartArea.live'));
    $('.c-chart.js-chartArea.live').css('background', 'rgba(0,0,0,0.4)');
    $('.c-chart__comment.js-chartCommentArea.js-chartCommentAreaPc').css('background', 'transparent');
}
function fn_full_sc_com_close() {
    $('.full_sc_com_close_btn').remove();
    $('.p-playlist').prepend($('#ticker'));
    $('.p-playlist').append($('.c-chart.js-chartArea.live'));
    $('.c-chart.js-chartArea.live').css('background', chart_area_bg_color);
    $('.c-chart__comment.js-chartCommentArea.js-chartCommentAreaPc').css('background', comment_area_bg_color);
}

$(document).on('webkitfullscreenchange mozfullscreenchange fullscreenchange', function (e) {
    if (!window.screenTop && !window.screenY) {
        // not fullscreen
        fn_full_sc_com_close();
    } else {
        // fullscreen
        fn_full_sc_com_open();
    }
});

$(document).on('click', ".full_sc_com_close_btn", function () {
    fn_full_sc_com_close();
});