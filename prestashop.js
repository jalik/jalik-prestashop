import {_} from 'meteor/underscore';

// Load APIs
import {ProductsAPI} from './api/products';
import {ProductImagesAPI} from './api/product-images';


export class PrestaShopClient {

    constructor(options) {
        options = _.extend({
            apiUrl: null,
            apiKey: null,
            debug: false
        }, options);

        // Check options
        if (typeof options.apiKey !== 'string') {
            throw new TypeError("apiKey is not a string");
        }
        if (typeof options.apiUrl !== 'string') {
            throw new TypeError("apiUrl is not a string");
        }
        if (typeof options.debug !== 'boolean') {
            throw new TypeError("debug is not a boolean");
        }

        /**
         * Returns the API URL
         * @returns {string|null}
         */
        this.getApiUrl = () => {
            return options.apiUrl;
        };

        /**
         * The products API
         * @type {ProductsAPI}
         */
        this.productsAPI = new ProductsAPI(options);

        /**
         * The product's images API
         * @type {ProductImagesAPI}
         */
        this.productImagesAPI = new ProductImagesAPI(options);
    }
}
