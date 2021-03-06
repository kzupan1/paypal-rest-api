import * as joi from "joi";
import { Client } from "../client";
import Invoice from "../invoice";
import { Oauth } from "../oauth";
import Payment from "../payment";
import Sale from "../sale";
import Webhook from "../webhook";
import WebhookEvent from "../webhookEvent";
import { configurationSchema } from "./schemas";
import { IConfigureOptions } from "./types";

export class PayPalRestApi {

    private _client: Client;
    private _config: IConfigureOptions;

    constructor(config: IConfigureOptions) {
        this.config = config;
        this.client = new Client(this.config);
        Webhook.init(this.client);
        WebhookEvent.init(this.client);
        Invoice.init(this.client);
        Payment.init(this.client);
        Sale.init(this.client);
    }

    get config() {
        return this._config;
    }

    set config(config) {
        const validateConfig = joi.validate(config, configurationSchema, { allowUnknown: true });
        if (validateConfig.error) {
            throw validateConfig.error;
        }
        config = validateConfig.value;
        if (config.mode === "sandbox") {
            config.requestOptions.baseUrl = "https://api.sandbox.paypal.com";
        }
        this._config = config;
    }

    get client() {
        return this._client;
    }

    set client(client) {
        this._client = client;
    }

    get invoice() {
        return Invoice;
    }

    get webhook() {
        return Webhook;
    }

    get webhookEvent() {
        return WebhookEvent;
    }

    get payment() {
        return Payment;
    }

    get sale() {
        return Sale;
    }

}
