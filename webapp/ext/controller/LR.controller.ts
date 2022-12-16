import ControllerExtension from 'sap/ui/core/mvc/ControllerExtension';
import ExtensionAPI from 'sap/fe/templates/ListReport/ExtensionAPI';

/**
 * @namespace project2.ext.controller
 * @controller
 */
export default class LR extends ControllerExtension<ExtensionAPI> {
	
	static override = {
        onInit(this: LR): void {
			// you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
			this.base.getExtensionAPI().getEditFlow();
			// or call a local function
			this.doSomething();
		}
	}

	doSomething() {
		// here you can access the extensionAPI as well
		this.base.getExtensionAPI().getRouting();
	}
}