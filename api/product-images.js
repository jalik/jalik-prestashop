import {PrestaShopAPI} from '../prestashop-api';


/**
 * Product's images API
 */
export class ProductImagesAPI extends PrestaShopAPI {

    constructor(options) {
        super('images/products', options);
    }

    /**
     * Returns a list of products
     * @param productId
     * @param params
     * @param callback
     */
    find(productId, params, callback) {
        this.get(`${this.url}/${productId}`, params, callback);
    }

    /**
     * Returns a single product using its ID
     * @param productId
     * @param imageId
     * @param options
     * @param callback
     */
    findOne(productId, imageId, options, callback) {
        this.get(`${this.url}/${productId}/${imageId}`, options, callback);
    }

    /**
     * Returns the image URL
     * @param productId
     * @param imageId
     * @returns {string}
     */
    getImageUrl(productId, imageId) {
        return `${this.url}/${productId}/${imageId}`;
    }
}
