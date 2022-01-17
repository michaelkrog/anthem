const gstreamer = require('gstreamer-superficial');

const fragment_shader =	`
	#version 100
	#ifdef GL_ES
	precision mediump float;
	#endif
	varying vec2 v_texcoord;
	uniform sampler2D tex;
	void main () {
	  vec4 c = texture2D( tex, v_texcoord );
	  gl_FragColor = c.bgra;
	}
`;

let pipeline = new gstreamer.Pipeline('audiotestsrc ! audioconvert ! autoaudiosink' )

pipeline.play();

setInterval( function() {
	console.log("running")
}, 1000 );
