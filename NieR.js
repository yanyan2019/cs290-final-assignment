colors = {
	def: 0,
	red: 31,
	orn: 32,
	yel: 33,
	grn: 34,
	blu: 35,
	prp: 36,
	cyn: 37
}
module.exports = {
	/* color(c, boop)
	 * 
	 *
	 *
	 *
	 *
	 * 
	 */
	color: function (c, boop) {
		switch(c) {
			case 0:		boop = "\033[0m" +  boop; break;
			case 31:	boop = "\033[31m" + boop;	break;
			case 32:	boop = "\033[32m" + boop;	break;
			case 33:	boop = "\033[33m" + boop;	break;
			case 34:	boop = "\033[34m" + boop;	break;
			case 35:	boop = "\033[35m" + boop;	break;
			case 36:	boop = "\033[36m" + boop;	break;
			case 37:	boop = "\033[37m" + boop;	break;
		}
		console.log(boop+"\033["+colors.def+"m");
	},
	/* rainbow(c, boop)
	 * 
	 *
	 *
	 *
	 *
	 * 
	 */
	rainbow: function (c, boop) {
		dot = boop[0];
		if(c === 0) {
			c = 31;
		}
		for(d = 1;d < boop.length;d++) {
			switch(c) {
				case 0:		dot = dot + "\033[0m" +  boop[d]; break;
				case 31:	dot = dot + "\033[31m" + boop[d];	break;
				case 32:	dot = dot + "\033[32m" + boop[d];	break;
				case 33:	dot = dot + "\033[33m" + boop[d];	break;
				case 34:	dot = dot + "\033[34m" + boop[d];	break;
				case 35:	dot = dot + "\033[35m" + boop[d];	break;
				case 36:	dot = dot + "\033[36m" + boop[d];	break;
				case 37:	dot = dot + "\033[37m" + boop[d];	break;
			}
			c++;
			if(c > 37) {
				c = 31;
			}
		}
		console.log(dot+"\033["+colors.def+"m");
	},
	setColor: function (c) {
		colors.def = c;
	}
}