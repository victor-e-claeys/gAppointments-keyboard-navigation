<?php
/*
Plugin Name: gAppointments Keyboard Navigation
Description: Enables Keyboard Navigation for the gAppointments plugin
Version: 1.1.0
Author: Vincent Claeys
Author URI: https://www.vincentclaeys.com/
*/

add_action('wp_enqueue_scripts', 'gappkn_enqueue_scripts');

function gappkn_enqueue_scripts(){
    wp_enqueue_script('gappkn', plugins_url('dist/main.js', __FILE__), array('jquery'), '1.0', true);
    wp_localize_script('gappkn', 'gappkn', array(
        'navMonthLabel' => __('Use left/right keys to select month', 'gappkn'),
        'navDayLabel' => __('Use left/right keys to select day', 'gappkn'),
        'navTimeLabel' => __('Use up/down keys to select time', 'gappkn')
    ) );
    wp_enqueue_style('gappkn', plugins_url('dist/main.css', __FILE__));
}