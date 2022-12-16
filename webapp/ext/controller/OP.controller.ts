import ControllerExtension from 'sap/ui/core/mvc/ControllerExtension';
import ExtensionAPI from 'sap/fe/templates/ObjectPage/ExtensionAPI';

/**
 * @namespace project2.ext.controller
 * @controller
 */
export default class OP extends ControllerExtension<ExtensionAPI> {
	static override = {
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 */
		onInit(this: OP) {
			// you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
			this.doSomething();
		}
	}

	doSomething() {
	}
}