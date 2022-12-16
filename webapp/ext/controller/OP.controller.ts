import ControllerExtension from 'sap/ui/core/mvc/ControllerExtension';
import ExtensionAPI from 'sap/fe/templates/ObjectPage/ExtensionAPI';

/**
 * Cannot change to class syntax until https://github.com/SAP/ui5-typescript/issues/332 is fixed.
 */
export default ControllerExtension.extend('project2.ext.controller.OP', {
	// this section allows to extend lifecycle hooks or hooks provided by Fiori elements
	override: {
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf project2.ext.controller.OP
		 */
		onInit(this: ControllerExtension<ExtensionAPI>) {
			// you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
			const model = this.base.getExtensionAPI().getModel();
		}
	}
});