/**
 * Created by maluramichael on 18/08/16.
 */
import React from 'react';
import {
	Dimensions,
	Platform
} from 'react-native';
import Style from './style';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

/* =====================================================================================================================
 === Border
 ======================================================================================================================*/
export const border = (width = 1, color = 'black')=> {
	return {
		borderWidth: width,
		borderColor: color
	}
};

export const borderVertical = (width, color)=> {
	return Obnect.assign(borderLeft(width, color), borderRight(width, color));
};

export const borderHorizontal = (width, color)=> {
	return Obnect.assign(borderTop(width, color), borderBottom(width, color));
};

export const borderTop = (width = 1, color = 'black')=> {
	return {
		borderTopWidth: width,
		borderTopColor: color
	}
};

export const borderBottom = (width = 1, color = 'black')=> {
	return {
		borderBottomWidth: width,
		borderBottomColor: color
	}
};

export const borderLeft = (width = 1, color = 'black')=> {
	return {
		borderLeftWidth: width,
		borderLeftColor: color
	}
};

export const borderRight = (width = 1, color = 'black')=> {
	return {
		borderRightWidth: width,
		borderRightColor: color
	}
};

/* =====================================================================================================================
 === Theme
 ======================================================================================================================*/
export function mix(styles) {
	var chunks = styles.replace(' ', '').split(',');
	var finalStyle = [];

	for (var x = 0; x < chunks.length; x++) {
		finalStyle.push(Style[chunks[x]]);
	}

	return finalStyle;
}

/* =====================================================================================================================
 === Colors
 ======================================================================================================================*/
export const shade = (hex, lum)=> {
	if (hex.indexOf('rgba') === 0 || hex.indexOf('rgb') === 0) {
		var x = hex.replace('rgba(', '')
			.replace('rgb(', '')
			.replace(')', '')
			.split(',');
		hex = rgbToHex(x[0], x[1], x[2]);
	}

	// validate hex string
	hex = String(hex).replace(/[^0-9a-f]/gi, '');
	if (hex.length < 6) {
		hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
	}
	lum = lum || 0;

	// convert to decimal and change luminosity
	var rgb = "#", c, i;
	for (i = 0; i < 3; i++) {
		c = parseInt(hex.substr(i * 2, 2), 16);
		c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
		rgb += ("00" + c).substr(c.length);
	}

	return rgb;
};

export const darken = (color, luminance = 0.1)=> {
	return shade(color, -Math.max(0, Math.min(1, luminance)));
};

export const lighten = (color, luminance = 0.1)=> {
	return this.shade(color, Math.max(0, Math.min(1, luminance)));
};

