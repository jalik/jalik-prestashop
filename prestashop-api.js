import {_} from 'meteor/underscore';
import {HTTP} from 'meteor/http';


/**
 * PrestaShop API
 */
export class PrestaShopAPI {

    constructor(path, options) {
        options = _.extend({
            debug: false,
            apiUrl: null,
            apiKey: null
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
        if (typeof path !== 'string') {
            throw new TypeError("path is not a string");
        }

        this.apiKey = options.apiKey;
        this.debug = options.debug === true;

        // Prepare API URL
        this.url = `${options.apiUrl}/${path}`;
    }

    /**
     * Handles the callback
     * @param callback
     * @param error
     * @param result
     */
    callback(callback, error, result) {
        if (typeof callback !== 'function') {
            throw new TypeError("callback is not defined");
        }
        callback.call(this, error, result);
    }

    /**
     * Sends a GET request
     * @param url
     * @param params
     * @param callback
     */
    get(url, params, callback) {
        const self = this;
        let options = {
            auth: this.getAuthCredentials(),
            params: _.extend({output_format: 'JSON'}, params)
        };
        this.log(`GET ${url}`, options.params);

        HTTP.get(url, options, function (err, result) {
            self.callback(callback, err, result);
        });
    }

    /**
     * Returns the HTTP authentication credentials
     * @returns {string}
     */
    getAuthCredentials() {
        return `${this.apiKey}:`;
    }

    /**
     * Returns the API URL
     * @returns {string}
     */
    getUrl() {
        return this.url;
    }

    /**
     * Logs the message
     */
    log() {
        if (this.debug) {
            console.log.apply(this, arguments);
        }
    }

    /**
     * Sends a POST request
     * @param url
     * @param params
     * @param callback
     */
    post(url, params, callback) {
        const self = this;
        let options = {
            auth: this.getAuthCredentials(),
            params: _.extend({output_format: 'JSON'}, params)
        };
        this.log(`POST ${url}`, options.params);

        HTTP.post(url, options, function (err, result) {
            self.callback(callback, err, result);
        });
    }

    /**
     * Sends a PUT request
     * @param url
     * @param params
     * @param callback
     */
    put(url, params, callback) {
        const self = this;
        let options = {
            auth: this.getAuthCredentials(),
            params: _.extend({output_format: 'JSON'}, params)
        };
        this.log(`PUT ${url}`, options.params);

        HTTP.put(url, options, function (err, result) {
            self.callback(callback, err, result);
        });
    }
}
