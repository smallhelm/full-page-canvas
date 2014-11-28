(function(definition){
	if (typeof exports === "object") {
		module.exports = definition();// CommonJS
	} else if (typeof define === "function" && define.amd) {
		define(definition);// RequireJS
	} else {
		FULL_PAGE_CANVAS = definition();//<script>
	}
}(function(){
	return {
		mount: function(){
			var canvas = document.createElement('canvas');
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
			document.body.appendChild(canvas);

			window.onresize = function(){
				canvas.width = window.innerWidth;
				canvas.height = window.innerHeight;
			};
			return canvas;
		}
	};
}));
