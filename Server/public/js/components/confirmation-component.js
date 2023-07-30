
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
import { S as SvelteElement, i as init, a as attribute_to_object, b as insert_dev, s as safe_not_equal, d as dispatch_dev, v as validate_slots, o as onMount, f as element, h as space, n as noop, k as attr_dev, j as add_location, l as append_dev, m as listen_dev, p as detach_dev, r as run_all, q as binding_callbacks } from './index-998178c7.js';
import * as AuthTools from '../../../../../../../../../js/libraries/authTools.js';

/* src\auth\confirmation-component.svelte generated by Svelte v3.52.0 */
const file = "src\\auth\\confirmation-component.svelte";

function create_fragment(ctx) {
	let div1;
	let h2;
	let t1;
	let div0;
	let input0;
	let span0;
	let t3;
	let input1;
	let span1;
	let t5;
	let input2;
	let span2;
	let t7;
	let input3;
	let span3;
	let t9;
	let input4;
	let t10;
	let span4;
	let t11;
	let button;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			div1 = element("div");
			h2 = element("h2");
			h2.textContent = "CONFIRMATION CODE";
			t1 = space();
			div0 = element("div");
			input0 = element("input");
			span0 = element("span");
			span0.textContent = "-";
			t3 = space();
			input1 = element("input");
			span1 = element("span");
			span1.textContent = "-";
			t5 = space();
			input2 = element("input");
			span2 = element("span");
			span2.textContent = "-";
			t7 = space();
			input3 = element("input");
			span3 = element("span");
			span3.textContent = "-";
			t9 = space();
			input4 = element("input");
			t10 = space();
			span4 = element("span");
			t11 = space();
			button = element("button");
			button.textContent = "Confirm";
			this.c = noop;
			attr_dev(h2, "class", "auth-title title-highlight");
			add_location(h2, file, 55, 4, 1288);
			attr_dev(input0, "class", "authConfirmationInput");
			attr_dev(input0, "type", "text");
			attr_dev(input0, "maxlength", "1");
			add_location(input0, file, 57, 8, 1394);
			attr_dev(span0, "class", "dash");
			add_location(span0, file, 57, 146, 1532);
			attr_dev(input1, "class", "authConfirmationInput");
			attr_dev(input1, "type", "text");
			attr_dev(input1, "maxlength", "1");
			add_location(input1, file, 58, 8, 1569);
			attr_dev(span1, "class", "dash");
			add_location(span1, file, 58, 146, 1707);
			attr_dev(input2, "class", "authConfirmationInput");
			attr_dev(input2, "type", "text");
			attr_dev(input2, "maxlength", "1");
			add_location(input2, file, 59, 8, 1744);
			attr_dev(span2, "class", "dash");
			add_location(span2, file, 59, 146, 1882);
			attr_dev(input3, "class", "authConfirmationInput");
			attr_dev(input3, "type", "text");
			attr_dev(input3, "maxlength", "1");
			add_location(input3, file, 60, 8, 1919);
			attr_dev(span3, "class", "dash");
			add_location(span3, file, 60, 146, 2057);
			attr_dev(input4, "class", "authConfirmationInput");
			attr_dev(input4, "type", "text");
			attr_dev(input4, "maxlength", "1");
			add_location(input4, file, 61, 8, 2094);
			attr_dev(div0, "id", "confirmationInputs");
			add_location(div0, file, 56, 4, 1355);
			attr_dev(span4, "id", "confirmation-msg");
			add_location(span4, file, 63, 4, 2250);
			attr_dev(button, "class", "auth-button");
			add_location(button, file, 64, 4, 2319);
			attr_dev(div1, "class", "pane auth-pane");
			add_location(div1, file, 54, 0, 1254);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			append_dev(div1, h2);
			append_dev(div1, t1);
			append_dev(div1, div0);
			append_dev(div0, input0);
			/*input0_binding*/ ctx[6](input0);
			append_dev(div0, span0);
			append_dev(div0, t3);
			append_dev(div0, input1);
			/*input1_binding*/ ctx[8](input1);
			append_dev(div0, span1);
			append_dev(div0, t5);
			append_dev(div0, input2);
			/*input2_binding*/ ctx[10](input2);
			append_dev(div0, span2);
			append_dev(div0, t7);
			append_dev(div0, input3);
			/*input3_binding*/ ctx[12](input3);
			append_dev(div0, span3);
			append_dev(div0, t9);
			append_dev(div0, input4);
			/*input4_binding*/ ctx[14](input4);
			append_dev(div1, t10);
			append_dev(div1, span4);
			/*span4_binding*/ ctx[16](span4);
			append_dev(div1, t11);
			append_dev(div1, button);
			/*button_binding*/ ctx[17](button);

			if (!mounted) {
				dispose = [
					listen_dev(input0, "input", /*input_handler*/ ctx[7], false, false, false),
					listen_dev(input1, "input", /*input_handler_1*/ ctx[9], false, false, false),
					listen_dev(input2, "input", /*input_handler_2*/ ctx[11], false, false, false),
					listen_dev(input3, "input", /*input_handler_3*/ ctx[13], false, false, false),
					listen_dev(input4, "input", /*input_handler_4*/ ctx[15], false, false, false),
					listen_dev(button, "click", /*click_handler*/ ctx[18], false, false, false)
				];

				mounted = true;
			}
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div1);
			/*input0_binding*/ ctx[6](null);
			/*input1_binding*/ ctx[8](null);
			/*input2_binding*/ ctx[10](null);
			/*input3_binding*/ ctx[12](null);
			/*input4_binding*/ ctx[14](null);
			/*span4_binding*/ ctx[16](null);
			/*button_binding*/ ctx[17](null);
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('confirmation-component', slots, []);
	let confirmationInputs = [];
	let confirmationMsg;
	let confirmationButton;

	function onlyNumberKey(ind, evt) {
		// Only ASCII character in that range allowed
		var value = evt.data;

		if (value in ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]) {
			if (ind < 4) {
				confirmationInputs[ind + 1].focus();
			} else {
				AuthTools.confirmEmail(confirmationMsg, getCode(), callback);
			}
		} else {
			$$invalidate(0, confirmationInputs[ind].value = "", confirmationInputs);
		}
	}

	function getCode() {
		let code = "";

		for (let input of confirmationInputs) {
			code += input.value;
		}

		return parseInt(code);
	}

	function callback(response) {
		if (response == "true") {
			AuthTools.toDashboard();
		} else {
			$$invalidate(1, confirmationMsg.innerHTML = "Wrong code", confirmationMsg);
		}
	}

	onMount(() => {
		
	});

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<confirmation-component> was created with unknown prop '${key}'`);
	});

	function input0_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			confirmationInputs[0] = $$value;
			$$invalidate(0, confirmationInputs);
		});
	}

	const input_handler = evt => onlyNumberKey(0, evt);

	function input1_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			confirmationInputs[1] = $$value;
			$$invalidate(0, confirmationInputs);
		});
	}

	const input_handler_1 = evt => onlyNumberKey(1, evt);

	function input2_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			confirmationInputs[2] = $$value;
			$$invalidate(0, confirmationInputs);
		});
	}

	const input_handler_2 = evt => onlyNumberKey(2, evt);

	function input3_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			confirmationInputs[3] = $$value;
			$$invalidate(0, confirmationInputs);
		});
	}

	const input_handler_3 = evt => onlyNumberKey(3, evt);

	function input4_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			confirmationInputs[4] = $$value;
			$$invalidate(0, confirmationInputs);
		});
	}

	const input_handler_4 = evt => onlyNumberKey(4, evt);

	function span4_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			confirmationMsg = $$value;
			$$invalidate(1, confirmationMsg);
		});
	}

	function button_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			confirmationButton = $$value;
			$$invalidate(2, confirmationButton);
		});
	}

	const click_handler = () => AuthTools.confirmEmail(confirmationMsg, getCode(), callback);

	$$self.$capture_state = () => ({
		onMount,
		AuthTools,
		confirmationInputs,
		confirmationMsg,
		confirmationButton,
		onlyNumberKey,
		getCode,
		callback
	});

	$$self.$inject_state = $$props => {
		if ('confirmationInputs' in $$props) $$invalidate(0, confirmationInputs = $$props.confirmationInputs);
		if ('confirmationMsg' in $$props) $$invalidate(1, confirmationMsg = $$props.confirmationMsg);
		if ('confirmationButton' in $$props) $$invalidate(2, confirmationButton = $$props.confirmationButton);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		confirmationInputs,
		confirmationMsg,
		confirmationButton,
		onlyNumberKey,
		getCode,
		callback,
		input0_binding,
		input_handler,
		input1_binding,
		input_handler_1,
		input2_binding,
		input_handler_2,
		input3_binding,
		input_handler_3,
		input4_binding,
		input_handler_4,
		span4_binding,
		button_binding,
		click_handler
	];
}

class Confirmation_component extends SvelteElement {
	constructor(options) {
		super();
		this.shadowRoot.innerHTML = `<style>@import '/css/common.css';.auth-pane{position:relative;padding:3.4rem;padding-top:5.5rem;padding-bottom:5.5rem;width:33rem;height:auto;margin:auto}.auth-title{position:relative;left:0.7rem;top:0.2rem;margin-bottom:1.4rem}.authConfirmationInput{position:relative;width:3.16rem;font-family:var(--serif,serif);font-size:3rem;border-radius:0.34rem;margin-bottom:0.7rem;text-align:center;padding-left:0;padding-bottom:0.3 rem}.dash{display:block;font-size:3rem;font-family:var(--serif,serif)}#confirmationInputs{margin:auto;display:grid;justify-content:space-between;grid-auto-flow:column}.auth-button{margin-top:1.4rem;height:3.4rem;width:100%;font-family:var(--sans-serif,sans-serif);font-size:1.6rem;color:white;background-color:var(--pink);border-color:var(--pink);border-radius:0.5rem;filter:drop-shadow(0.07rem 0.14rem 0.07rem rgb(0 0 0 / 0.4))}#confirmation-msg{display:inline;color:red}</style>`;

		init(
			this,
			{
				target: this.shadowRoot,
				props: attribute_to_object(this.attributes),
				customElement: true
			},
			instance,
			create_fragment,
			safe_not_equal,
			{},
			null
		);

		if (options) {
			if (options.target) {
				insert_dev(options.target, this, options.anchor);
			}
		}
	}
}

customElements.define("confirmation-component", Confirmation_component);

export { Confirmation_component as default };
