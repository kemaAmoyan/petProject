/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Date Picker
5. Init Select
6. Init Google Map


******************************/

$(document).ready(function()
{
	"use strict";

	/* 

	1. Vars and Inits

	*/

	var header = $('.header');
	var ctrl = new ScrollMagic.Controller();
	var map;

	setHeader();

	$(window).on('resize', function()
	{
		setHeader();

		setTimeout(function()
		{
			$(window).trigger('resize.px.parallax');
		}, 375);
	});

	$(document).on('scroll', function()
	{
		setHeader();
	});

	initMenu();
	initSelect();
	initGoogleMap();

	/* 

	2. Set Header

	*/

	function setHeader()
	{
		if($(window).scrollTop() > 91)
		{
			header.addClass('scrolled');
		}
		else
		{
			header.removeClass('scrolled');
		}
	}

	/* 

	3. Init Menu

	*/

	function initMenu()
	{
		var hamb = $('.hamburger');
		var menu = $('.menu');
		var menuOverlay = $('.menu_overlay');
		var menuClose = $('.menu_close_container');

		hamb.on('click', function()
		{
			menu.toggleClass('active');
			menuOverlay.toggleClass('active');
		});

		menuOverlay.on('click', function()
		{
			menuOverlay.toggleClass('active');
			menu.toggleClass('active');
		});

		menuClose.on('click', function()
		{
			menuOverlay.toggleClass('active');
			menu.toggleClass('active');
		});
	}

	/* 

	4. Init Date Picker

	*/

	function initDatePicker()
	{
		var dp = $('#datepicker');
		dp.datepicker();
	}

	/* 

	5. Init Select

	*/

	function initSelect()
	{
		if($('.contact_select').length)
		{
			var select = $('.contact_select');
			select.each(function()
			{
				var selected = $(this);
				selected.change(function()
				{
					selected.addClass('selected');
				});
			});
		}
	}
	

});