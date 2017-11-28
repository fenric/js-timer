'use strict';

var $timer;

/**
 * Конструктор компонента
 *
 * @constructor
 */
$timer = function(delay, callback)
{
	this.id = null;
	this.delay = delay;
	this.callback = callback;

	this.continue();
};

/**
 * Получение версии компонента
 *
 * @return  {string}
 */
$timer.getVersion = function()
{
	return '1.0.0';
};

/**
 * Приостановка таймера
 *
 * @return  {void}
 */
$timer.prototype.pause = function()
{
	this.break();

	this.delay -= new Date() - this.start;
};

/**
 * Возобновление таймера
 *
 * @return  {void}
 */
$timer.prototype.continue = function()
{
	this.break();

	this.start = new Date();

	this.id = setTimeout(this.callback, this.delay);
};

/**
 * Сброс таймера
 *
 * @return  {void}
 */
$timer.prototype.break = function()
{
	clearTimeout(this.id);
};
