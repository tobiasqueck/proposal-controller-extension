/**
 * Helper to be able to define how to get the page specific extension API when writing a controller extension.
 */
declare module 'sap/ui/core/mvc/ControllerExtension' {
    export default interface ControllerExtension<API> {
        base: {
            getExtensionAPI(): API;
        }
    }
}