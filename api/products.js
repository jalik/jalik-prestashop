import {PrestaShopAPI} from '../prestashop-api';


/**
 * Products API
 */
export class ProductsAPI extends PrestaShopAPI {

    constructor(options) {
        super('products', options);
    }

    /**
     * Returns a list of products
     * @param params
     * @param callback
     */
    find(params, callback) {
        this.get(`${this.url}`, params, callback);
    }

    /**
     * Returns a single product using its ID
     * @param id
     * @param options
     * @param callback
     */
    findOne(id, options, callback) {
        this.get(`${this.url}/${id}`, options, callback);
    }

    /**
     * Returns the product URL
     * @param id
     * @returns {string}
     */
    getProductUrl(id) {
        return `${this.rootUrl}/index.php?controller=product&id_product=${id}`;
    }
}
