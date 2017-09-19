import { InvoiceModel } from "./model";
import { IInvoice } from "./types";

// tslint:disable
export const mockPaypalInvoiceSentString = `{"id":"INV2-94XS-GASK-LDJC-2HV2","number":"2460","template_id":"TEMP-5ML62849WY523084R","status":"SENT","merchant_info":{"email":"seller@awesome.com","first_name":"Dennis","last_name":"Doctor","business_name":"ACME","phone":{"country_code":"1","national_number":"4082564877"},"address":{"line1":"2211 North First St","city":"San Jose","state":"CA","postal_code":"95131","country_code":"US","phone":{"country_code":"1","national_number":"4082564877"}}},"billing_info":[{"email":"fflintstone@gmail.com","first_name":"Fred","last_name":"Flintstone","business_name":"Fred Flintstone","phone":{"country_code":"1","national_number":"4021112222"},"address":{"phone":{"country_code":"1","national_number":"4021112222"}},"additional_info":"CUST-00124"}],"shipping_info":{"first_name":"Fred","last_name":"Flintstone","business_name":"Fred Flintstone(CCUST-00124)"},"items":[{"name":"Item Name","quantity":1,"unit_price":{"currency":"USD","value":"60.00"}},{"name":"Item Name","quantity":1,"unit_price":{"currency":"USD","value":"100.00"}}],"invoice_date":"2017-08-21 PDT","payment_term":{"term_type":"NET_15","due_date":"2017-09-05 PDT"},"tax_calculated_after_discount":false,"tax_inclusive":true,"note":"Thanks for your business!","total_amount":{"currency":"USD","value":"160.00"},"metadata":{"created_date":"2017-08-21 09:01:47 PDT","first_sent_date":"2017-08-21 11:03:12 PDT","last_sent_date":"2017-08-21 11:03:12 PDT","payer_view_url":"https://www.sandbox.paypal.com/invoice/payerView/details/INV2-94XS-GASK-LDJC-2HV2"},"allow_tip":false,"links":[{"rel":"self","href":"https://api.sandbox.paypal.com/v1/invoicing/invoices/INV2-94XS-GASK-LDJC-2HV2","method":"GET"},{"rel":"update","href":"https://api.sandbox.paypal.com/v1/invoicing/invoices/INV2-94XS-GASK-LDJC-2HV2/update","method":"PUT"},{"rel":"cancel","href":"https://api.sandbox.paypal.com/v1/invoicing/invoices/INV2-94XS-GASK-LDJC-2HV2/remind","method":"POST"},{"rel":"remind","href":"https://api.sandbox.paypal.com/v1/invoicing/invoices/INV2-94XS-GASK-LDJC-2HV2/cancel","method":"POST"},{"rel":"record-payment","href":"https://api.sandbox.paypal.com/v1/invoicing/invoices/INV2-94XS-GASK-LDJC-2HV2/record-payment","method":"POST"},{"rel":"qr-code","href":"https://api.sandbox.paypal.com/v1/invoicing/invoices/INV2-94XS-GASK-LDJC-2HV2/qr-code","method":"GET"}],"httpStatusCode":200}`;
export const mockPayPalInvoiceSent: IInvoice = JSON.parse(mockPaypalInvoiceSentString);

export const mockPaypalInvoiceDraftString = `{"id":"INV2-9X6N-56BA-RMJA-ZCDW","number":"0244","template_id":"TEMP-5ML62849WY523084R","status":"DRAFT","merchant_info":{},"invoice_date":"2017-08-04 PDT","tax_calculated_after_discount":false,"tax_inclusive":false,"total_amount":{"currency":"USD","value":"0.00"},"metadata":{"created_date":"2017-08-04 07:52:48 PDT"},"allow_tip":false,"links":[{"rel":"self","href":"https://api.sandbox.paypal.com/v1/invoicing/invoices/INV2-9X6N-56BA-RMJA-ZCDW","method":"GET"},{"rel":"send","href":"https://api.sandbox.paypal.com/v1/invoicing/invoices/INV2-9X6N-56BA-RMJA-ZCDW/send","method":"POST"},{"rel":"update","href":"https://api.sandbox.paypal.com/v1/invoicing/invoices/INV2-9X6N-56BA-RMJA-ZCDW/update","method":"PUT"},{"rel":"delete","href":"https://api.sandbox.paypal.com/v1/invoicing/invoices/INV2-9X6N-56BA-RMJA-ZCDW","method":"DELETE"}],"httpStatusCode":200}`;
export const mockPayPalInvoiceDraft: IInvoice = JSON.parse(mockPaypalInvoiceDraftString);

export const mockPaypalInvoiceCancelledString = `{"id":"INV2-EL7C-77BL-FFG2-JZRG","number":"2414","status":"CANCELLED","merchant_info":{"email":"seller@awesome.com"},"billing_info":[{"email":"fflintstone@gmail.com","first_name":"Fred","last_name":"Flintstone","business_name":"Fred Flintstone","phone":{"country_code":"1","national_number":"4021112222"}}],"shipping_info":{"email":"fflintstone@gmail.com","first_name":"Fred","last_name":"Flintstone","business_name":"Fred Flintstone(CCUST-00124)"},"invoice_date":"2017-08-08 PDT","payment_term":{"due_date":"2017-08-23 PDT"},"note":"Thanks for your business!","total_amount":{"currency":"USD","value":"137.00"},"metadata":{"created_date":"2017-08-08 16:44:23 PDT"},"paid_amount":{"paypal":{"currency":"USD","value":"0.00"},"other":{"currency":"USD","value":"0.00"}},"refunded_amount":{"paypal":{"currency":"USD","value":"0.00"},"other":{"currency":"USD","value":"0.00"}},"links":[{"rel":"self","href":"https://api.sandbox.paypal.com/v1/invoicing/invoices/INV2-EL7C-77BL-FFG2-JZRG","method":"GET"}]}`;
export const mockPayPalInvoiceCancelled: IInvoice = JSON.parse(mockPaypalInvoiceCancelledString);

export const mockPaypalInvoiceRefundedString = `{"id":"INV2-LQ69-H37M-B4MR-9BN7","number":"2445","status":"REFUNDED","merchant_info":{"email":"seller@awesome.com"},"billing_info":[{"email":"fflintstone@gmail.com","first_name":"Fred","last_name":"Flintstone","business_name":"Fred Flintstone","phone":{"country_code":"1","national_number":"4021112222"}}],"shipping_info":{"email":"fflintstone@gmail.com","first_name":"Fred","last_name":"Flintstone","business_name":"Fred Flintstone(CCUST-00124)"},"invoice_date":"2017-08-16 PDT","payment_term":{"due_date":"2017-08-31 PDT"},"note":"Thanks for your business!","total_amount":{"currency":"USD","value":"137.00"},"metadata":{"created_date":"2017-08-16 09:15:24 PDT"},"paid_amount":{"paypal":{"currency":"USD","value":"137.00"},"other":{"currency":"USD","value":"0.00"}},"refunded_amount":{"paypal":{"currency":"USD","value":"137.00"},"other":{"currency":"USD","value":"0.00"}},"links":[{"rel":"self","href":"https://api.sandbox.paypal.com/v1/invoicing/invoices/INV2-LQ69-H37M-B4MR-9BN7","method":"GET"}]}`;
export const mockPayPalInvoiceRefunded: IInvoice = JSON.parse(mockPaypalInvoiceRefundedString);

export const mockPaypalInvoicePaidString = '{"id":"INV2-DGAA-FL8C-Q2YY-5K2R","number":"2524","template_id":"TEMP-5ML62849WY523084R","status":"PAID","merchant_info":{"email":"seller@awesome.com","first_name":"Dennis","last_name":"Doctor","business_name":"ACME","phone":{"country_code":"1","national_number":"4082564877"},"address":{"line1":"2211 North First St","city":"San Jose","state":"CA","postal_code":"95131","country_code":"US"}},"billing_info":[{"email":"athroener@gmail.com","first_name":"Andrew","last_name":"Throener","business_name":"Andrew Throener","phone":{"country_code":"1","national_number":"4021112222"},"address":{"line1":"One payment way","city":"Omaha","state":"NE","postal_code":"68136","country_code":"US","phone":{"country_code":"1","national_number":"4021112222"}},"additional_info":"CUST-00124"}],"shipping_info":{"first_name":"Andrew","last_name":"Throener","business_name":"Andrew Throener(CCUST-00124)","address":{"line1":"One payment way","city":"Omaha","state":"NE","postal_code":"68136","country_code":"US"}},"items":[{"name":"Item Name","quantity":1,"unit_price":{"currency":"USD","value":"60.00"}},{"name":"Item Name","quantity":1,"unit_price":{"currency":"USD","value":"100.00"}}],"invoice_date":"2017-09-15 PDT","referrer_code":"nodejs-paypal-rest-api","payment_term":{"term_type":"NET_15","due_date":"2017-09-15 PDT"},"tax_calculated_after_discount":false,"tax_inclusive":true,"note":"Thanks for your business!","total_amount":{"currency":"USD","value":"160.00"},"payments":[{"type":"PAYPAL","transaction_id":"8EW55877JJ534554C","transaction_type":"SALE","method":"PAYPAL","date":"2017-09-15 09:28:02 PDT","amount":{"currency":"USD","value":"160.00"}}],"metadata":{"created_date":"2017-09-15 09:26:01 PDT","last_updated_date":"2017-09-15 09:28:02 PDT","first_sent_date":"2017-09-15 09:26:02 PDT","last_sent_date":"2017-09-15 09:26:02 PDT"},"paid_amount":{"paypal":{"currency":"USD","value":"160.00"}},"allow_tip":false,"links":[{"rel":"self","href":"https://api.sandbox.paypal.com/v1/invoicing/invoices/INV2-DGAA-FL8C-Q2YY-5K2R","method":"GET"}]}';
export const mockPaypalInvoicePaid: IInvoice = JSON.parse(mockPaypalInvoicePaidString);

// tslint:enable
