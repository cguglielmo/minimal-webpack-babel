import * as $ from 'jquery';
import mask from 'jquery-mask-plugin';
import dummy from './jquery-fancy';

$('<p>Hello</p>').appendTo('body');

// Without @type
$('<div>').appendTo();
$('<div>').makeElement('<div>');
$('.date').mask('00/00/0000');
$('.text').fancy();

// With @type
/**
 * @type jQuery
 */
var $date = $('<div>');
var $container = $('<div>');
$date.appendTo($container);
$date.makeElement('<div>');
$date.mask('00/00/0000');
$date.fancy();

/**
 * @type $
 */
var $date2 = $('<div>');
var $container2 = $('<div>');
$date2.appendTo($container2);
$date2.makeElement('<div>');
$date2.mask('00/00/0000');
$date2.fancy();

// Statics
$.isArray([]);
$.negate(()=>true);

// Statics on instance
$date.isArray();
$date.negate();
