<?php
/*
Plugin Name: gAppointments Keyboard Navigation
Description: Enables Keyboard Navigation for the gAppointments plugin
Version: 1.0.0
Author: Vincent Claeys
Author URI: https://www.vincentclaeys.com/
*/

add_action('wp_enqueue_scripts', 'gappkn_enqueue_scripts');

function gappkn_enqueue_scripts(){
    wp_enqueue_script('gappkn', plugins_url('dist/main.js', _FILE_), array('jquery'), '1.0', true);
    wp_enqueue_style('gappkn', plugins_url('dist/main.css', _FILE_));
}