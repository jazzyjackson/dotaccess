/**
@param  {object} objectinput
@param  {string} dotpath
@return {any|undefined}

Usage: 
x = {
	a: {
		b: {
			c: "any type of value"
		}
	}
}

dotaccess(x, "a.b.c") // returns "any type of value"
**/
function dotaccess(objectinput, dotpath){
	let localctx = Object.assign({}, objectinput) // create copy of objectinput
	let keys = dotpath.split('.')
	while(keys.length && localctx){
		localctx = localctx[keys.shift()] 
	}
	return localctx
}

module.exports =  dotaccess