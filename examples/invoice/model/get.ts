import { PayPalRestApi } from "../../../src";
import { config } from "../../config";

const paypal = new PayPalRestApi(config);
async function example() {
    // Returns model
    const invoice = await paypal.invoice.get("INV2-RR8X-5PWW-FNEM-8K5U");
    return JSON.stringify(invoice.model);
}

// tslint:disable-next-line:no-console
example().then((response) => console.log(response)).catch((err) => console.error(err.message));
