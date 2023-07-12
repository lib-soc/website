import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import css from 'rollup-plugin-css-only';
import cleaner from 'rollup-plugin-cleaner';
import copy from 'rollup-plugin-copy';
import watch from "rollup-plugin-watch";

const production = !process.env.ROLLUP_WATCH;


function serve() {
	let server;

	function toExit() {
		if (server) server.kill(0);
	}

	return {
		writeBundle() {
			if (server) return;
			server = require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
				stdio: ['ignore', 'inherit', 'inherit'],
				shell: true
			});

			process.on('SIGTERM', toExit);
			process.on('exit', toExit);
		}
	};
}
   

const walkSync = require("walk-sync");
const paths = walkSync("./src", {globs: ["**/*.svelte"]}).map(x => "src/"+x)

export default {
	
	input: paths, 
	output: { 
		format: "esm",
		dir: "../../public/js/components", 
	},
	plugins: [
		svelte({ 
			compilerOptions: {
				// enable run-time checks when not in production
				dev: !production,
				customElement: true,
			}
		}),

		resolve({
			browser: true,
			dedupe: ['svelte']
		}),
		commonjs(),

		watch({ dir: 'public' }),
		cleaner({
			targets: [
			  '../../../public/js/components'
			]
		}),
		copy({
			targets: [
			  { src: 'public/*', dest: '../../public/' }, 
			]
		}),


		// In dev mode, call `npm run start` once
		// the bundle has been generated
		!production && serve(),

		// Watch the `public` directory and refresh the
		// browser on changes when not in production
		!production && livereload('public'),

		// If we're building for production (npm run build
		// instead of npm run dev), minify
		production && terser()
	],
	watch: {
		clearScreen: false
	}
};
