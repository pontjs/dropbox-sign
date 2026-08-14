export type AccountCreateRequest = {
  /**
   * @description Used when creating a new account with OAuth authorization.

  See [OAuth 2.0 Authorization](https://app.hellosign.com/api/oauthWalkthrough#OAuthAuthorization)
   */
  client_id?: string;
  /**
   * @description Used when creating a new account with OAuth authorization.

  See [OAuth 2.0 Authorization](https://app.hellosign.com/api/oauthWalkthrough#OAuthAuthorization)
   */
  client_secret?: string;
  /**
   * @description The email address which will be associated with the new Account.
   */
  email_address: string;
  /**
   * @description The locale used in this Account. Check out the list of [supported locales](/api/reference/constants/#supported-locales) to learn more about the possible values.
   */
  locale?: string;
}

export type AccountUpdateRequest = {
  /**
   * @description The ID of the Account
   */
  account_id?: string;
  /**
   * @description The URL that Dropbox Sign should POST events to.
   */
  callback_url?: string;
  /**
   * @description The locale used in this Account. Check out the list of [supported locales](/api/reference/constants/#supported-locales) to learn more about the possible values.
   */
  locale?: string;
}

export type AccountVerifyRequest = {
  /**
   * @description Email address to run the verification for.
   */
  email_address: string;
}

export type ApiAppCreateRequest = {
  /**
   * @description The URL at which the ApiApp should receive event callbacks.
   */
  callback_url?: string;
  /**
   * @description An image file to use as a custom logo in embedded contexts. (Only applies to some API plans)
   */
  custom_logo_file?: Blob;
  /**
   * @description The domain names the ApiApp will be associated with.
   */
  domains: Array<string>;
  /**
   * @description The name you want to assign to the ApiApp.
   */
  name: string;
  oauth?: SubOAuth;
  options?: SubOptions;
  white_labeling_options?: SubWhiteLabelingOptions;
}

export type ApiAppUpdateRequest = {
  /**
   * @description The URL at which the API App should receive event callbacks.
   */
  callback_url?: string;
  /**
   * @description An image file to use as a custom logo in embedded contexts. (Only applies to some API plans)
   */
  custom_logo_file?: Blob;
  /**
   * @description The domain names the ApiApp will be associated with.
   */
  domains?: Array<string>;
  /**
   * @description The name you want to assign to the ApiApp.
   */
  name?: string;
  oauth?: SubOAuth;
  options?: SubOptions;
  white_labeling_options?: SubWhiteLabelingOptions;
}

export type EmbeddedEditUrlRequest = {
  /**
   * @description This allows the requester to enable/disable to add or change CC roles when editing the template.
   */
  allow_edit_ccs?: boolean;
  /**
   * @description The CC roles that must be assigned when using the template to send a signature request. To remove all CC roles, pass in a single role with no name. For use in a POST request.
   */
  cc_roles?: Array<string>;
  editor_options?: SubEditorOptions;
  /**
   * @description Provide users the ability to review/edit the template signer roles.
   */
  force_signer_roles?: boolean;
  /**
   * @description Provide users the ability to review/edit the template subject and message.
   */
  force_subject_message?: boolean;
  /**
   * @description Add additional merge fields to the template, which can be used used to pre-fill data by passing values into signature requests made with that template.

  Remove all merge fields on the template by passing an empty array `[]`.
   */
  merge_fields?: Array<SubMergeField>;
  /**
   * @description This allows the requester to enable the preview experience (i.e. does not allow the requester's end user to add any additional fields via the editor).

  \*\*NOTE:\*\* This parameter overwrites `show_preview=true` (if set).
   */
  preview_only?: boolean;
  /**
   * @description This allows the requester to enable the editor/preview experience.
   */
  show_preview?: boolean;
  /**
   * @description When only one step remains in the signature request process and this parameter is set to `false` then the progress stepper will be hidden.
   */
  show_progress_stepper?: boolean;
  /**
   * @description Whether this is a test, locked templates will only be available for editing if this is set to `true`. Defaults to `false`.
   */
  test_mode?: boolean;
}

export type FaxLineAddUserRequest = {
  /**
   * @description The Fax Line number
   */
  number: string;
  /**
   * @description Account ID
   */
  account_id?: string;
  /**
   * @description Email address
   */
  email_address?: string;
}

export type FaxLineAreaCodeGetStateEnum = 'AK' | 'AL' | 'AR' | 'AZ' | 'CA' | 'CO' | 'CT' | 'DC' | 'DE' | 'FL' | 'GA' | 'HI' | 'IA' | 'ID' | 'IL' | 'IN' | 'KS' | 'KY' | 'LA' | 'MA' | 'MD' | 'ME' | 'MI' | 'MN' | 'MO' | 'MS' | 'MT' | 'NC' | 'ND' | 'NE' | 'NH' | 'NJ' | 'NM' | 'NV' | 'NY' | 'OH' | 'OK' | 'OR' | 'PA' | 'RI' | 'SC' | 'SD' | 'TN' | 'TX' | 'UT' | 'VA' | 'VT' | 'WA' | 'WI' | 'WV' | 'WY'

export type FaxLineAreaCodeGetProvinceEnum = 'AB' | 'BC' | 'MB' | 'NB' | 'NL' | 'NT' | 'NS' | 'NU' | 'ON' | 'PE' | 'QC' | 'SK' | 'YT'

export type FaxLineAreaCodeGetCountryEnum = 'CA' | 'US' | 'UK'

export type FaxLineCreateRequest = {
  /**
   * @description Area code of the new Fax Line
   */
  area_code: number;
  /**
   * @description Country of the area code
   */
  country: 'CA' | 'US' | 'UK';
  /**
   * @description City of the area code
   */
  city?: string;
  /**
   * @description Account ID of the account that will be assigned this new Fax Line
   */
  account_id?: string;
}

export type FaxLineDeleteRequest = {
  /**
   * @description The Fax Line number
   */
  number: string;
}

export type FaxLineRemoveUserRequest = {
  /**
   * @description The Fax Line number
   */
  number: string;
  /**
   * @description Account ID of the user to remove access
   */
  account_id?: string;
  /**
   * @description Email address of the user to remove access
   */
  email_address?: string;
}

export type FaxSendRequest = {
  /**
   * @description Recipient of the fax 
  Can be a phone number in E.164 format or email address
   */
  recipient: string;
  /**
   * @description Fax Send From Sender (used only with fax number)
   */
  sender?: string;
  /**
   * @description Use `files[]` to indicate the uploaded file(s) to fax

  This endpoint requires either \*\*files\*\* or \*\*file_urls[]\*\*, but not both.
   */
  files?: Array<Blob>;
  /**
   * @description Use `file_urls[]` to have Dropbox Fax download the file(s) to fax

  This endpoint requires either \*\*files\*\* or \*\*file_urls[]\*\*, but not both.
   */
  file_urls?: Array<string>;
  /**
   * @description API Test Mode Setting
   */
  test_mode?: boolean;
  /**
   * @description Fax cover page recipient information
   */
  cover_page_to?: string;
  /**
   * @description Fax cover page sender information
   */
  cover_page_from?: string;
  /**
   * @description Fax Cover Page Message
   */
  cover_page_message?: string;
  /**
   * @description Fax Title
   */
  title?: string;
}

export type OAuthTokenGenerateRequest = {
  /**
   * @description The client id of the app requesting authorization.
   */
  client_id: string;
  /**
   * @description The secret token of your app.
   */
  client_secret: string;
  /**
   * @description The code passed to your callback when the user granted access.
   */
  code: string;
  /**
   * @description When generating a new token use `authorization_code`.
   */
  grant_type: string;
  /**
   * @description Same as the state you specified earlier.
   */
  state: string;
}

export type OAuthTokenRefreshRequest = {
  /**
   * @description When refreshing an existing token use `refresh_token`.
   */
  grant_type: string;
  /**
   * @description The token provided when you got the expired access token.
   */
  refresh_token: string;
  /**
   * @description The client ID for your API app. Required for new API apps. To enhance security, we recommend making it required for existing apps in your app settings.
   */
  client_id?: string;
  /**
   * @description The client secret for your API app. Required for new API apps. To enhance security, we recommend making it required for existing apps in your app settings.
   */
  client_secret?: string;
}

export type ReportCreateRequest = {
  /**
   * @description The (inclusive) end date for the report data in `MM/DD/YYYY` format.
   */
  end_date: string;
  /**
   * @description The type(s) of the report you are requesting. Allowed values are `user_activity` and `document_status`. User activity reports contain list of all users and their activity during the specified date range. Document status report contain a list of signature requests created in the specified time range (and their status).
   */
  report_type: Array<'user_activity' | 'document_status' | 'sms_activity' | 'fax_usage'>;
  /**
   * @description The (inclusive) start date for the report data in `MM/DD/YYYY` format.
   */
  start_date: string;
}

export type SignatureRequestBulkCreateEmbeddedWithTemplateRequest = {
  /**
   * @description Use `template_ids` to create a SignatureRequest from one or more templates, in the order in which the template will be used.
   */
  template_ids: Array<string>;
  /**
   * @description `signer_file` is a CSV file defining values and options for signer fields. Required unless a `signer_list` is used, you may not use both. The CSV can have the following columns:

  - `name`: the name of the signer filling the role of RoleName
  - `email_address`: email address of the signer filling the role of RoleName
  - `pin`: the 4- to 12-character access code that will secure this signer's signature page (optional)
  - `sms_phone_number`: An E.164 formatted phone number that will receive a code via SMS to access this signer's signature page. (optional)

      By using the feature, you agree you are responsible for obtaining a signer's consent to receive text messages from Dropbox Sign related to this signature request and confirm you have obtained such consent from all signers prior to enabling SMS delivery for this signature request. [Learn more](https://faq.hellosign.com/hc/en-us/articles/15815316468877-Dropbox-Sign-SMS-tools-add-on).

      \*\*NOTE:\*\* Not available in test mode and requires a Standard plan or higher.
  - `\*_field`: any column with a _field" suffix will be treated as a custom field (optional)

      You may only specify field values here, any other options should be set in the custom_fields request parameter.

  Example CSV:

  ```
  name, email_address, pin, company_field
  George, george@example.com, d79a3td, ABC Corp
  Mary, mary@example.com, gd9as5b, 123 LLC
  ```
   */
  signer_file?: Blob;
  /**
   * @description `signer_list` is an array defining values and options for signer fields. Required unless a `signer_file` is used, you may not use both.
   */
  signer_list?: Array<SubBulkSignerList>;
  /**
   * @description Allows signers to decline to sign a document if `true`. Defaults to `false`.
   */
  allow_decline?: boolean;
  /**
   * @description Add CC email recipients. Required when a CC role exists for the Template.
   */
  ccs?: Array<SubCC>;
  /**
   * @description Client id of the app you're using to create this embedded signature request. Used for security purposes.
   */
  client_id: string;
  /**
   * @description When used together with merge fields, `custom_fields` allows users to add pre-filled data to their signature requests.

  Pre-filled data can be used with "send-once" signature requests by adding merge fields with `form_fields_per_document` or [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) while passing values back with `custom_fields` together in one API call.

  For using pre-filled on repeatable signature requests, merge fields are added to templates in the Dropbox Sign UI or by calling [/template/create_embedded_draft](/api/reference/operation/templateCreateEmbeddedDraft) and then passing `custom_fields` on subsequent signature requests referencing that template.
   */
  custom_fields?: Array<SubCustomField>;
  /**
   * @description The custom message in the email that will be sent to the signers.
   */
  message?: string;
  /**
   * @description Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer's order number for look up when receiving events for the signature request.

  Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long.
   */
  metadata?: Record<any, unknown>;
  /**
   * @description The URL you want signers redirected to after they successfully sign.
   */
  signing_redirect_url?: string;
  /**
   * @description The subject in the email that will be sent to the signers.
   */
  subject?: string;
  /**
   * @description Whether this is a test, the signature request will not be legally binding if set to `true`. Defaults to `false`.
   */
  test_mode?: boolean;
  /**
   * @description The title you want to assign to the SignatureRequest.
   */
  title?: string;
}

export type SignatureRequestBulkSendWithTemplateRequest = {
  /**
   * @description Use `template_ids` to create a SignatureRequest from one or more templates, in the order in which the template will be used.
   */
  template_ids: Array<string>;
  /**
   * @description `signer_file` is a CSV file defining values and options for signer fields. Required unless a `signer_list` is used, you may not use both. The CSV can have the following columns:

  - `name`: the name of the signer filling the role of RoleName
  - `email_address`: email address of the signer filling the role of RoleName
  - `pin`: the 4- to 12-character access code that will secure this signer's signature page (optional)
  - `sms_phone_number`: An E.164 formatted phone number that will receive a code via SMS to access this signer's signature page. (optional)

      By using the feature, you agree you are responsible for obtaining a signer's consent to receive text messages from Dropbox Sign related to this signature request and confirm you have obtained such consent from all signers prior to enabling SMS delivery for this signature request. [Learn more](https://faq.hellosign.com/hc/en-us/articles/15815316468877-Dropbox-Sign-SMS-tools-add-on).

      \*\*NOTE:\*\* Not available in test mode and requires a Standard plan or higher.
  - `\*_field`: any column with a _field" suffix will be treated as a custom field (optional)

      You may only specify field values here, any other options should be set in the custom_fields request parameter.

  Example CSV:

  ```
  name, email_address, pin, company_field
  George, george@example.com, d79a3td, ABC Corp
  Mary, mary@example.com, gd9as5b, 123 LLC
  ```
   */
  signer_file?: Blob;
  /**
   * @description `signer_list` is an array defining values and options for signer fields. Required unless a `signer_file` is used, you may not use both.
   */
  signer_list?: Array<SubBulkSignerList>;
  /**
   * @description Allows signers to decline to sign a document if `true`. Defaults to `false`.
   */
  allow_decline?: boolean;
  /**
   * @description Add CC email recipients. Required when a CC role exists for the Template.
   */
  ccs?: Array<SubCC>;
  /**
   * @description The client id of the API App you want to associate with this request. Used to apply the branding and callback url defined for the app.
   */
  client_id?: string;
  /**
   * @description When used together with merge fields, `custom_fields` allows users to add pre-filled data to their signature requests.

  Pre-filled data can be used with "send-once" signature requests by adding merge fields with `form_fields_per_document` or [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) while passing values back with `custom_fields` together in one API call.

  For using pre-filled on repeatable signature requests, merge fields are added to templates in the Dropbox Sign UI or by calling [/template/create_embedded_draft](/api/reference/operation/templateCreateEmbeddedDraft) and then passing `custom_fields` on subsequent signature requests referencing that template.
   */
  custom_fields?: Array<SubCustomField>;
  /**
   * @description The custom message in the email that will be sent to the signers.
   */
  message?: string;
  /**
   * @description Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer's order number for look up when receiving events for the signature request.

  Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long.
   */
  metadata?: Record<any, unknown>;
  /**
   * @description The URL you want signers redirected to after they successfully sign.
   */
  signing_redirect_url?: string;
  /**
   * @description The subject in the email that will be sent to the signers.
   */
  subject?: string;
  /**
   * @description Whether this is a test, the signature request will not be legally binding if set to `true`. Defaults to `false`.
   */
  test_mode?: boolean;
  /**
   * @description The title you want to assign to the SignatureRequest.
   */
  title?: string;
}

export type SignatureRequestCreateEmbeddedRequest = {
  /**
   * @description Use `files[]` to indicate the uploaded file(s) to send for signature.

  This endpoint requires either \*\*files\*\* or \*\*file_urls[]\*\*, but not both.
   */
  files?: Array<Blob>;
  /**
   * @description Use `file_urls[]` to have Dropbox Sign download the file(s) to send for signature.

  This endpoint requires either \*\*files\*\* or \*\*file_urls[]\*\*, but not both.
   */
  file_urls?: Array<string>;
  /**
   * @description Add Signers to your Signature Request.

  This endpoint requires either \*\*signers\*\* or \*\*grouped_signers\*\*, but not both.
   */
  signers?: Array<SubSignatureRequestSigner>;
  /**
   * @description Add Grouped Signers to your Signature Request.

  This endpoint requires either \*\*signers\*\* or \*\*grouped_signers\*\*, but not both.
   */
  grouped_signers?: Array<SubSignatureRequestGroupedSigners>;
  /**
   * @description Allows signers to decline to sign a document if `true`. Defaults to `false`.
   */
  allow_decline?: boolean;
  /**
   * @description Allows signers to reassign their signature requests to other signers if set to `true`. Defaults to `false`.

  \*\*NOTE:\*\* Only available for Premium plan.
   */
  allow_reassign?: boolean;
  /**
   * @description A list describing the attachments
   */
  attachments?: Array<SubAttachment>;
  /**
   * @description The email addresses that should be CCed.
   */
  cc_email_addresses?: Array<string>;
  /**
   * @description Client id of the app you're using to create this embedded signature request. Used for security purposes.
   */
  client_id: string;
  /**
   * @description When used together with merge fields, `custom_fields` allows users to add pre-filled data to their signature requests.

  Pre-filled data can be used with "send-once" signature requests by adding merge fields with `form_fields_per_document` or [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) while passing values back with `custom_fields` together in one API call.

  For using pre-filled on repeatable signature requests, merge fields are added to templates in the Dropbox Sign UI or by calling [/template/create_embedded_draft](/api/reference/operation/templateCreateEmbeddedDraft) and then passing `custom_fields` on subsequent signature requests referencing that template.
   */
  custom_fields?: Array<SubCustomField>;
  field_options?: SubFieldOptions;
  /**
   * @description Group information for fields defined in `form_fields_per_document`. String-indexed JSON array with `group_label` and `requirement` keys. `form_fields_per_document` must contain fields referencing a group defined in `form_field_groups`.
   */
  form_field_groups?: Array<SubFormFieldGroup>;
  /**
   * @description Conditional Logic rules for fields defined in `form_fields_per_document`.
   */
  form_field_rules?: Array<SubFormFieldRule>;
  /**
   * @description The fields that should appear on the document, expressed as an array of objects. (For more details you can read about it here: [Using Form Fields per Document](/docs/openapi/form-fields-per-document).)

  \*\*NOTE:\*\* Fields like \*\*text\*\*, \*\*dropdown\*\*, \*\*checkbox\*\*, \*\*radio\*\*, and \*\*hyperlink\*\* have additional required and optional parameters. Check out the list of [additional parameters](/api/reference/constants/#form-fields-per-document) for these field types.

  \* Text Field use `SubFormFieldsPerDocumentText`
  \* Dropdown Field use `SubFormFieldsPerDocumentDropdown`
  \* Hyperlink Field use `SubFormFieldsPerDocumentHyperlink`
  \* Checkbox Field use `SubFormFieldsPerDocumentCheckbox`
  \* Radio Field use `SubFormFieldsPerDocumentRadio`
  \* Signature Field use `SubFormFieldsPerDocumentSignature`
  \* Date Signed Field use `SubFormFieldsPerDocumentDateSigned`
  \* Initials Field use `SubFormFieldsPerDocumentInitials`
  \* Text Merge Field use `SubFormFieldsPerDocumentTextMerge`
  \* Checkbox Merge Field use `SubFormFieldsPerDocumentCheckboxMerge`
   */
  form_fields_per_document?: Array<SubFormFieldsPerDocumentBase>;
  /**
   * @description Enables automatic Text Tag removal when set to true.

  \*\*NOTE:\*\* Removing text tags this way can cause unwanted clipping. We recommend leaving this setting on `false` and instead hiding your text tags using white text or a similar approach. See the [Text Tags Walkthrough](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) for more information.
   */
  hide_text_tags?: boolean;
  /**
   * @description The custom message in the email that will be sent to the signers.
   */
  message?: string;
  /**
   * @description Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer's order number for look up when receiving events for the signature request.

  Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long.
   */
  metadata?: Record<any, unknown>;
  signing_options?: SubSigningOptions;
  /**
   * @description The subject in the email that will be sent to the signers.
   */
  subject?: string;
  /**
   * @description Whether this is a test, the signature request will not be legally binding if set to `true`. Defaults to `false`.
   */
  test_mode?: boolean;
  /**
   * @description The title you want to assign to the SignatureRequest.
   */
  title?: string;
  /**
   * @description Send with a value of `true` if you wish to enable [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) parsing in your document. Defaults to disabled, or `false`.
   */
  use_text_tags?: boolean;
  /**
   * @description Sent with a value of `true` to ignore the validation errors from text tags extraction. Defaults to `false`.
   */
  ignore_text_tags_extraction_errors?: boolean;
  /**
   * @description Controls whether [auto fill fields](https://faq.hellosign.com/hc/en-us/articles/360051467511-Auto-Fill-Fields) can automatically populate a signer's information during signing.

  \*\*NOTE:\*\* Keep your signer's information safe by ensuring that the _signer on your signature request is the intended party_ before using this feature.
   */
  populate_auto_fill_fields?: boolean;
  /**
   * @description When the signature request will expire. Unsigned signatures will be moved to the expired status, and no longer signable. See [Signature Request Expiration Date](https://developers.hellosign.com/docs/signature-request/expiration/) for details.
   */
  expires_at?: number;
}

export type SignatureRequestCreateEmbeddedWithTemplateRequest = {
  /**
   * @description Use `template_ids` to create a SignatureRequest from one or more templates, in the order in which the template will be used.
   */
  template_ids: Array<string>;
  /**
   * @description Allows signers to decline to sign a document if `true`. Defaults to `false`.
   */
  allow_decline?: boolean;
  /**
   * @description Add CC email recipients. Required when a CC role exists for the Template.
   */
  ccs?: Array<SubCC>;
  /**
   * @description Client id of the app you're using to create this embedded signature request. Used for security purposes.
   */
  client_id: string;
  /**
   * @description An array defining values and options for custom fields. Required when a custom field exists in the Template.
   */
  custom_fields?: Array<SubCustomField>;
  /**
   * @description Use `files[]` to indicate the uploaded file(s) to send for signature.

  This endpoint requires either \*\*files\*\* or \*\*file_urls[]\*\*, but not both.
   */
  files?: Array<Blob>;
  /**
   * @description Use `file_urls[]` to have Dropbox Sign download the file(s) to send for signature.

  This endpoint requires either \*\*files\*\* or \*\*file_urls[]\*\*, but not both.
   */
  file_urls?: Array<string>;
  /**
   * @description The custom message in the email that will be sent to the signers.
   */
  message?: string;
  /**
   * @description Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer's order number for look up when receiving events for the signature request.

  Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long.
   */
  metadata?: Record<any, unknown>;
  /**
   * @description Add Signers to your Templated-based Signature Request.
   */
  signers: Array<SubSignatureRequestTemplateSigner>;
  signing_options?: SubSigningOptions;
  /**
   * @description The subject in the email that will be sent to the signers.
   */
  subject?: string;
  /**
   * @description Whether this is a test, the signature request will not be legally binding if set to `true`. Defaults to `false`.
   */
  test_mode?: boolean;
  /**
   * @description The title you want to assign to the SignatureRequest.
   */
  title?: string;
  /**
   * @description Controls whether [auto fill fields](https://faq.hellosign.com/hc/en-us/articles/360051467511-Auto-Fill-Fields) can automatically populate a signer's information during signing.

  \*\*NOTE:\*\* Keep your signer's information safe by ensuring that the _signer on your signature request is the intended party_ before using this feature.
   */
  populate_auto_fill_fields?: boolean;
}

export type SignatureRequestEditRequest = {
  /**
   * @description Use `files[]` to indicate the uploaded file(s) to send for signature.

  This endpoint requires either \*\*files\*\* or \*\*file_urls[]\*\*, but not both.
   */
  files?: Array<Blob>;
  /**
   * @description Use `file_urls[]` to have Dropbox Sign download the file(s) to send for signature.

  This endpoint requires either \*\*files\*\* or \*\*file_urls[]\*\*, but not both.
   */
  file_urls?: Array<string>;
  /**
   * @description Add Signers to your Signature Request.

  This endpoint requires either \*\*signers\*\* or \*\*grouped_signers\*\*, but not both.
   */
  signers?: Array<SubSignatureRequestSigner>;
  /**
   * @description Add Grouped Signers to your Signature Request.

  This endpoint requires either \*\*signers\*\* or \*\*grouped_signers\*\*, but not both.
   */
  grouped_signers?: Array<SubSignatureRequestGroupedSigners>;
  /**
   * @description Allows signers to decline to sign a document if `true`. Defaults to `false`.
   */
  allow_decline?: boolean;
  /**
   * @description Allows signers to reassign their signature requests to other signers if set to `true`. Defaults to `false`.

  \*\*NOTE:\*\* Only available for Premium plan and higher.
   */
  allow_reassign?: boolean;
  /**
   * @description A list describing the attachments
   */
  attachments?: Array<SubAttachment>;
  /**
   * @description The email addresses that should be CCed.
   */
  cc_email_addresses?: Array<string>;
  /**
   * @description The client id of the API App you want to associate with this request. Used to apply the branding and callback url defined for the app.
   */
  client_id?: string;
  /**
   * @description When used together with merge fields, `custom_fields` allows users to add pre-filled data to their signature requests.

  Pre-filled data can be used with "send-once" signature requests by adding merge fields with `form_fields_per_document` or [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) while passing values back with `custom_fields` together in one API call.

  For using pre-filled on repeatable signature requests, merge fields are added to templates in the Dropbox Sign UI or by calling [/template/create_embedded_draft](/api/reference/operation/templateCreateEmbeddedDraft) and then passing `custom_fields` on subsequent signature requests referencing that template.
   */
  custom_fields?: Array<SubCustomField>;
  field_options?: SubFieldOptions;
  /**
   * @description Group information for fields defined in `form_fields_per_document`. String-indexed JSON array with `group_label` and `requirement` keys. `form_fields_per_document` must contain fields referencing a group defined in `form_field_groups`.
   */
  form_field_groups?: Array<SubFormFieldGroup>;
  /**
   * @description Conditional Logic rules for fields defined in `form_fields_per_document`.
   */
  form_field_rules?: Array<SubFormFieldRule>;
  /**
   * @description The fields that should appear on the document, expressed as an array of objects. (For more details you can read about it here: [Using Form Fields per Document](/docs/openapi/form-fields-per-document).)

  \*\*NOTE:\*\* Fields like \*\*text\*\*, \*\*dropdown\*\*, \*\*checkbox\*\*, \*\*radio\*\*, and \*\*hyperlink\*\* have additional required and optional parameters. Check out the list of [additional parameters](/api/reference/constants/#form-fields-per-document) for these field types.

  \* Text Field use `SubFormFieldsPerDocumentText`
  \* Dropdown Field use `SubFormFieldsPerDocumentDropdown`
  \* Hyperlink Field use `SubFormFieldsPerDocumentHyperlink`
  \* Checkbox Field use `SubFormFieldsPerDocumentCheckbox`
  \* Radio Field use `SubFormFieldsPerDocumentRadio`
  \* Signature Field use `SubFormFieldsPerDocumentSignature`
  \* Date Signed Field use `SubFormFieldsPerDocumentDateSigned`
  \* Initials Field use `SubFormFieldsPerDocumentInitials`
  \* Text Merge Field use `SubFormFieldsPerDocumentTextMerge`
  \* Checkbox Merge Field use `SubFormFieldsPerDocumentCheckboxMerge`
   */
  form_fields_per_document?: Array<SubFormFieldsPerDocumentBase>;
  /**
   * @description Enables automatic Text Tag removal when set to true.

  \*\*NOTE:\*\* Removing text tags this way can cause unwanted clipping. We recommend leaving this setting on `false` and instead hiding your text tags using white text or a similar approach. See the [Text Tags Walkthrough](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) for more information.
   */
  hide_text_tags?: boolean;
  /**
   * @description Send with a value of `true` if you wish to enable
  [electronic identification (eID)](https://www.hellosign.com/features/electronic-id),
  which requires the signer to verify their identity with an eID provider to sign a document.<br>
  \*\*NOTE:\*\* You need the eID add-on to use this feature. Please [contact sales](https://sign.dropbox.com/form/contact-sales) for more information. Cannot be used in `test_mode`. Only works on requests with one signer.
   */
  is_eid?: boolean;
  /**
   * @description The custom message in the email that will be sent to the signers.
   */
  message?: string;
  /**
   * @description Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer's order number for look up when receiving events for the signature request.

  Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long.
   */
  metadata?: Record<any, unknown>;
  signing_options?: SubSigningOptions;
  /**
   * @description The URL you want signers redirected to after they successfully sign.
   */
  signing_redirect_url?: string;
  /**
   * @description The subject in the email that will be sent to the signers.
   */
  subject?: string;
  /**
   * @description Whether this is a test, the signature request will not be legally binding if set to `true`. Defaults to `false`.
   */
  test_mode?: boolean;
  /**
   * @description The title you want to assign to the SignatureRequest.
   */
  title?: string;
  /**
   * @description Send with a value of `true` if you wish to enable [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) parsing in your document. Defaults to disabled, or `false`.
   */
  use_text_tags?: boolean;
  /**
   * @description When the signature request will expire. Unsigned signatures will be moved to the expired status, and no longer signable. See [Signature Request Expiration Date](https://developers.hellosign.com/docs/signature-request/expiration/) for details.
   */
  expires_at?: number;
}

export type SignatureRequestEditEmbeddedRequest = {
  /**
   * @description Use `files[]` to indicate the uploaded file(s) to send for signature.

  This endpoint requires either \*\*files\*\* or \*\*file_urls[]\*\*, but not both.
   */
  files?: Array<Blob>;
  /**
   * @description Use `file_urls[]` to have Dropbox Sign download the file(s) to send for signature.

  This endpoint requires either \*\*files\*\* or \*\*file_urls[]\*\*, but not both.
   */
  file_urls?: Array<string>;
  /**
   * @description Add Signers to your Signature Request.

  This endpoint requires either \*\*signers\*\* or \*\*grouped_signers\*\*, but not both.
   */
  signers?: Array<SubSignatureRequestSigner>;
  /**
   * @description Add Grouped Signers to your Signature Request.

  This endpoint requires either \*\*signers\*\* or \*\*grouped_signers\*\*, but not both.
   */
  grouped_signers?: Array<SubSignatureRequestGroupedSigners>;
  /**
   * @description Allows signers to decline to sign a document if `true`. Defaults to `false`.
   */
  allow_decline?: boolean;
  /**
   * @description Allows signers to reassign their signature requests to other signers if set to `true`. Defaults to `false`.

  \*\*NOTE:\*\* Only available for Premium plan.
   */
  allow_reassign?: boolean;
  /**
   * @description A list describing the attachments
   */
  attachments?: Array<SubAttachment>;
  /**
   * @description The email addresses that should be CCed.
   */
  cc_email_addresses?: Array<string>;
  /**
   * @description Client id of the app you're using to create this embedded signature request. Used for security purposes.
   */
  client_id: string;
  /**
   * @description When used together with merge fields, `custom_fields` allows users to add pre-filled data to their signature requests.

  Pre-filled data can be used with "send-once" signature requests by adding merge fields with `form_fields_per_document` or [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) while passing values back with `custom_fields` together in one API call.

  For using pre-filled on repeatable signature requests, merge fields are added to templates in the Dropbox Sign UI or by calling [/template/create_embedded_draft](/api/reference/operation/templateCreateEmbeddedDraft) and then passing `custom_fields` on subsequent signature requests referencing that template.
   */
  custom_fields?: Array<SubCustomField>;
  field_options?: SubFieldOptions;
  /**
   * @description Group information for fields defined in `form_fields_per_document`. String-indexed JSON array with `group_label` and `requirement` keys. `form_fields_per_document` must contain fields referencing a group defined in `form_field_groups`.
   */
  form_field_groups?: Array<SubFormFieldGroup>;
  /**
   * @description Conditional Logic rules for fields defined in `form_fields_per_document`.
   */
  form_field_rules?: Array<SubFormFieldRule>;
  /**
   * @description The fields that should appear on the document, expressed as an array of objects. (For more details you can read about it here: [Using Form Fields per Document](/docs/openapi/form-fields-per-document).)

  \*\*NOTE:\*\* Fields like \*\*text\*\*, \*\*dropdown\*\*, \*\*checkbox\*\*, \*\*radio\*\*, and \*\*hyperlink\*\* have additional required and optional parameters. Check out the list of [additional parameters](/api/reference/constants/#form-fields-per-document) for these field types.

  \* Text Field use `SubFormFieldsPerDocumentText`
  \* Dropdown Field use `SubFormFieldsPerDocumentDropdown`
  \* Hyperlink Field use `SubFormFieldsPerDocumentHyperlink`
  \* Checkbox Field use `SubFormFieldsPerDocumentCheckbox`
  \* Radio Field use `SubFormFieldsPerDocumentRadio`
  \* Signature Field use `SubFormFieldsPerDocumentSignature`
  \* Date Signed Field use `SubFormFieldsPerDocumentDateSigned`
  \* Initials Field use `SubFormFieldsPerDocumentInitials`
  \* Text Merge Field use `SubFormFieldsPerDocumentTextMerge`
  \* Checkbox Merge Field use `SubFormFieldsPerDocumentCheckboxMerge`
   */
  form_fields_per_document?: Array<SubFormFieldsPerDocumentBase>;
  /**
   * @description Enables automatic Text Tag removal when set to true.

  \*\*NOTE:\*\* Removing text tags this way can cause unwanted clipping. We recommend leaving this setting on `false` and instead hiding your text tags using white text or a similar approach. See the [Text Tags Walkthrough](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) for more information.
   */
  hide_text_tags?: boolean;
  /**
   * @description The custom message in the email that will be sent to the signers.
   */
  message?: string;
  /**
   * @description Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer's order number for look up when receiving events for the signature request.

  Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long.
   */
  metadata?: Record<any, unknown>;
  signing_options?: SubSigningOptions;
  /**
   * @description The subject in the email that will be sent to the signers.
   */
  subject?: string;
  /**
   * @description Whether this is a test, the signature request will not be legally binding if set to `true`. Defaults to `false`.
   */
  test_mode?: boolean;
  /**
   * @description The title you want to assign to the SignatureRequest.
   */
  title?: string;
  /**
   * @description Send with a value of `true` if you wish to enable [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) parsing in your document. Defaults to disabled, or `false`.
   */
  use_text_tags?: boolean;
  /**
   * @description Controls whether [auto fill fields](https://faq.hellosign.com/hc/en-us/articles/360051467511-Auto-Fill-Fields) can automatically populate a signer's information during signing.

  \*\*NOTE:\*\* Keep your signer's information safe by ensuring that the _signer on your signature request is the intended party_ before using this feature.
   */
  populate_auto_fill_fields?: boolean;
  /**
   * @description When the signature request will expire. Unsigned signatures will be moved to the expired status, and no longer signable. See [Signature Request Expiration Date](https://developers.hellosign.com/docs/signature-request/expiration/) for details.
   */
  expires_at?: number;
}

export type SignatureRequestEditEmbeddedWithTemplateRequest = {
  /**
   * @description Use `template_ids` to create a SignatureRequest from one or more templates, in the order in which the template will be used.
   */
  template_ids: Array<string>;
  /**
   * @description Allows signers to decline to sign a document if `true`. Defaults to `false`.
   */
  allow_decline?: boolean;
  /**
   * @description Add CC email recipients. Required when a CC role exists for the Template.
   */
  ccs?: Array<SubCC>;
  /**
   * @description Client id of the app you're using to create this embedded signature request. Used for security purposes.
   */
  client_id: string;
  /**
   * @description An array defining values and options for custom fields. Required when a custom field exists in the Template.
   */
  custom_fields?: Array<SubCustomField>;
  /**
   * @description Use `files[]` to indicate the uploaded file(s) to send for signature.

  This endpoint requires either \*\*files\*\* or \*\*file_urls[]\*\*, but not both.
   */
  files?: Array<Blob>;
  /**
   * @description Use `file_urls[]` to have Dropbox Sign download the file(s) to send for signature.

  This endpoint requires either \*\*files\*\* or \*\*file_urls[]\*\*, but not both.
   */
  file_urls?: Array<string>;
  /**
   * @description The custom message in the email that will be sent to the signers.
   */
  message?: string;
  /**
   * @description Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer's order number for look up when receiving events for the signature request.

  Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long.
   */
  metadata?: Record<any, unknown>;
  /**
   * @description Add Signers to your Templated-based Signature Request.
   */
  signers: Array<SubSignatureRequestTemplateSigner>;
  signing_options?: SubSigningOptions;
  /**
   * @description The subject in the email that will be sent to the signers.
   */
  subject?: string;
  /**
   * @description Whether this is a test, the signature request will not be legally binding if set to `true`. Defaults to `false`.
   */
  test_mode?: boolean;
  /**
   * @description The title you want to assign to the SignatureRequest.
   */
  title?: string;
  /**
   * @description Controls whether [auto fill fields](https://faq.hellosign.com/hc/en-us/articles/360051467511-Auto-Fill-Fields) can automatically populate a signer's information during signing.

  \*\*NOTE:\*\* Keep your signer's information safe by ensuring that the _signer on your signature request is the intended party_ before using this feature.
   */
  populate_auto_fill_fields?: boolean;
}

/**
 * @description Edits and sends a SignatureRequest based off of the Template(s) specified with the template_ids parameter.

\*\*NOTE:\*\* Edit and resend \*will\* deduct your signature request quota.
 */
export type SignatureRequestEditWithTemplateRequest = {
  /**
   * @description Use `template_ids` to create a SignatureRequest from one or more templates, in the order in which the template will be used.
   */
  template_ids: Array<string>;
  /**
   * @description Allows signers to decline to sign a document if `true`. Defaults to `false`.
   */
  allow_decline?: boolean;
  /**
   * @description Add CC email recipients. Required when a CC role exists for the Template.
   */
  ccs?: Array<SubCC>;
  /**
   * @description Client id of the app to associate with the signature request. Used to apply the branding and callback url defined for the app.
   */
  client_id?: string;
  /**
   * @description An array defining values and options for custom fields. Required when a custom field exists in the Template.
   */
  custom_fields?: Array<SubCustomField>;
  /**
   * @description Use `files[]` to indicate the uploaded file(s) to send for signature.

  This endpoint requires either \*\*files\*\* or \*\*file_urls[]\*\*, but not both.
   */
  files?: Array<Blob>;
  /**
   * @description Use `file_urls[]` to have Dropbox Sign download the file(s) to send for signature.

  This endpoint requires either \*\*files\*\* or \*\*file_urls[]\*\*, but not both.
   */
  file_urls?: Array<string>;
  /**
   * @description Send with a value of `true` if you wish to enable
  [electronic identification (eID)](https://www.hellosign.com/features/electronic-id),
  which requires the signer to verify their identity with an eID provider to sign a document.<br>
  \*\*NOTE:\*\* You need the eID add-on to use this feature. Please [contact sales](https://sign.dropbox.com/form/contact-sales) for more information. Cannot be used in `test_mode`. Only works on requests with one signer.
   */
  is_eid?: boolean;
  /**
   * @description The custom message in the email that will be sent to the signers.
   */
  message?: string;
  /**
   * @description Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer's order number for look up when receiving events for the signature request.

  Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long.
   */
  metadata?: Record<any, unknown>;
  /**
   * @description Add Signers to your Templated-based Signature Request.
   */
  signers: Array<SubSignatureRequestTemplateSigner>;
  signing_options?: SubSigningOptions;
  /**
   * @description The URL you want signers redirected to after they successfully sign.
   */
  signing_redirect_url?: string;
  /**
   * @description The subject in the email that will be sent to the signers.
   */
  subject?: string;
  /**
   * @description Whether this is a test, the signature request will not be legally binding if set to `true`. Defaults to `false`.
   */
  test_mode?: boolean;
  /**
   * @description The title you want to assign to the SignatureRequest.
   */
  title?: string;
}

export type SignatureRequestRemindRequest = {
  /**
   * @description The email address of the signer to send a reminder to.
   */
  email_address: string;
  /**
   * @description The name of the signer to send a reminder to. Include if two or more signers share an email address.
   */
  name?: string;
}

export type SignatureRequestSendRequest = {
  /**
   * @description Use `files[]` to indicate the uploaded file(s) to send for signature.

  This endpoint requires either \*\*files\*\* or \*\*file_urls[]\*\*, but not both.
   */
  files?: Array<Blob>;
  /**
   * @description Use `file_urls[]` to have Dropbox Sign download the file(s) to send for signature.

  This endpoint requires either \*\*files\*\* or \*\*file_urls[]\*\*, but not both.
   */
  file_urls?: Array<string>;
  /**
   * @description Add Signers to your Signature Request.

  This endpoint requires either \*\*signers\*\* or \*\*grouped_signers\*\*, but not both.
   */
  signers?: Array<SubSignatureRequestSigner>;
  /**
   * @description Add Grouped Signers to your Signature Request.

  This endpoint requires either \*\*signers\*\* or \*\*grouped_signers\*\*, but not both.
   */
  grouped_signers?: Array<SubSignatureRequestGroupedSigners>;
  /**
   * @description Allows signers to decline to sign a document if `true`. Defaults to `false`.
   */
  allow_decline?: boolean;
  /**
   * @description Allows signers to reassign their signature requests to other signers if set to `true`. Defaults to `false`.

  \*\*NOTE:\*\* Only available for Premium plan and higher.
   */
  allow_reassign?: boolean;
  /**
   * @description A list describing the attachments
   */
  attachments?: Array<SubAttachment>;
  /**
   * @description The email addresses that should be CCed.
   */
  cc_email_addresses?: Array<string>;
  /**
   * @description The client id of the API App you want to associate with this request. Used to apply the branding and callback url defined for the app.
   */
  client_id?: string;
  /**
   * @description When used together with merge fields, `custom_fields` allows users to add pre-filled data to their signature requests.

  Pre-filled data can be used with "send-once" signature requests by adding merge fields with `form_fields_per_document` or [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) while passing values back with `custom_fields` together in one API call.

  For using pre-filled on repeatable signature requests, merge fields are added to templates in the Dropbox Sign UI or by calling [/template/create_embedded_draft](/api/reference/operation/templateCreateEmbeddedDraft) and then passing `custom_fields` on subsequent signature requests referencing that template.
   */
  custom_fields?: Array<SubCustomField>;
  field_options?: SubFieldOptions;
  /**
   * @description Group information for fields defined in `form_fields_per_document`. String-indexed JSON array with `group_label` and `requirement` keys. `form_fields_per_document` must contain fields referencing a group defined in `form_field_groups`.
   */
  form_field_groups?: Array<SubFormFieldGroup>;
  /**
   * @description Conditional Logic rules for fields defined in `form_fields_per_document`.
   */
  form_field_rules?: Array<SubFormFieldRule>;
  /**
   * @description The fields that should appear on the document, expressed as an array of objects. (For more details you can read about it here: [Using Form Fields per Document](/docs/openapi/form-fields-per-document).)

  \*\*NOTE:\*\* Fields like \*\*text\*\*, \*\*dropdown\*\*, \*\*checkbox\*\*, \*\*radio\*\*, and \*\*hyperlink\*\* have additional required and optional parameters. Check out the list of [additional parameters](/api/reference/constants/#form-fields-per-document) for these field types.

  \* Text Field use `SubFormFieldsPerDocumentText`
  \* Dropdown Field use `SubFormFieldsPerDocumentDropdown`
  \* Hyperlink Field use `SubFormFieldsPerDocumentHyperlink`
  \* Checkbox Field use `SubFormFieldsPerDocumentCheckbox`
  \* Radio Field use `SubFormFieldsPerDocumentRadio`
  \* Signature Field use `SubFormFieldsPerDocumentSignature`
  \* Date Signed Field use `SubFormFieldsPerDocumentDateSigned`
  \* Initials Field use `SubFormFieldsPerDocumentInitials`
  \* Text Merge Field use `SubFormFieldsPerDocumentTextMerge`
  \* Checkbox Merge Field use `SubFormFieldsPerDocumentCheckboxMerge`
   */
  form_fields_per_document?: Array<SubFormFieldsPerDocumentBase>;
  /**
   * @description Enables automatic Text Tag removal when set to true.

  \*\*NOTE:\*\* Removing text tags this way can cause unwanted clipping. We recommend leaving this setting on `false` and instead hiding your text tags using white text or a similar approach. See the [Text Tags Walkthrough](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) for more information.
   */
  hide_text_tags?: boolean;
  /**
   * @description Send with a value of `true` if you wish to enable
  [electronic identification (eID)](https://www.hellosign.com/features/electronic-id),
  which requires the signer to verify their identity with an eID provider to sign a document.<br>
  \*\*NOTE:\*\* You need the eID add-on to use this feature. Please [contact sales](https://sign.dropbox.com/form/contact-sales) for more information. Cannot be used in `test_mode`. Only works on requests with one signer.
   */
  is_eid?: boolean;
  /**
   * @description The custom message in the email that will be sent to the signers.
   */
  message?: string;
  /**
   * @description Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer's order number for look up when receiving events for the signature request.

  Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long.
   */
  metadata?: Record<any, unknown>;
  signing_options?: SubSigningOptions;
  /**
   * @description The URL you want signers redirected to after they successfully sign.
   */
  signing_redirect_url?: string;
  /**
   * @description The subject in the email that will be sent to the signers.
   */
  subject?: string;
  /**
   * @description Whether this is a test, the signature request will not be legally binding if set to `true`. Defaults to `false`.
   */
  test_mode?: boolean;
  /**
   * @description The title you want to assign to the SignatureRequest.
   */
  title?: string;
  /**
   * @description Send with a value of `true` if you wish to enable [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) parsing in your document. Defaults to disabled, or `false`.
   */
  use_text_tags?: boolean;
  /**
   * @description When the signature request will expire. Unsigned signatures will be moved to the expired status, and no longer signable. See [Signature Request Expiration Date](https://developers.hellosign.com/docs/signature-request/expiration/) for details.
   */
  expires_at?: number;
}

/**
 * @description Creates and sends a new SignatureRequest based off of the Template(s) specified with the `template_ids` parameter.
 */
export type SignatureRequestSendWithTemplateRequest = {
  /**
   * @description Use `template_ids` to create a SignatureRequest from one or more templates, in the order in which the template will be used.
   */
  template_ids: Array<string>;
  /**
   * @description Allows signers to decline to sign a document if `true`. Defaults to `false`.
   */
  allow_decline?: boolean;
  /**
   * @description Add CC email recipients. Required when a CC role exists for the Template.
   */
  ccs?: Array<SubCC>;
  /**
   * @description Client id of the app to associate with the signature request. Used to apply the branding and callback url defined for the app.
   */
  client_id?: string;
  /**
   * @description An array defining values and options for custom fields. Required when a custom field exists in the Template.
   */
  custom_fields?: Array<SubCustomField>;
  /**
   * @description Use `files[]` to indicate the uploaded file(s) to send for signature.

  This endpoint requires either \*\*files\*\* or \*\*file_urls[]\*\*, but not both.
   */
  files?: Array<Blob>;
  /**
   * @description Use `file_urls[]` to have Dropbox Sign download the file(s) to send for signature.

  This endpoint requires either \*\*files\*\* or \*\*file_urls[]\*\*, but not both.
   */
  file_urls?: Array<string>;
  /**
   * @description Send with a value of `true` if you wish to enable
  [electronic identification (eID)](https://www.hellosign.com/features/electronic-id),
  which requires the signer to verify their identity with an eID provider to sign a document.<br>
  \*\*NOTE:\*\* You need the eID add-on to use this feature. Please [contact sales](https://sign.dropbox.com/form/contact-sales) for more information. Cannot be used in `test_mode`. Only works on requests with one signer.
   */
  is_eid?: boolean;
  /**
   * @description The custom message in the email that will be sent to the signers.
   */
  message?: string;
  /**
   * @description Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer's order number for look up when receiving events for the signature request.

  Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long.
   */
  metadata?: Record<any, unknown>;
  /**
   * @description Add Signers to your Templated-based Signature Request.
   */
  signers: Array<SubSignatureRequestTemplateSigner>;
  signing_options?: SubSigningOptions;
  /**
   * @description The URL you want signers redirected to after they successfully sign.
   */
  signing_redirect_url?: string;
  /**
   * @description The subject in the email that will be sent to the signers.
   */
  subject?: string;
  /**
   * @description Whether this is a test, the signature request will not be legally binding if set to `true`. Defaults to `false`.
   */
  test_mode?: boolean;
  /**
   * @description The title you want to assign to the SignatureRequest.
   */
  title?: string;
}

export type SignatureRequestUpdateRequest = {
  /**
   * @description The new email address for the recipient.

  This will generate a new `signature_id` value.

  \*\*NOTE:\*\* Optional if `name` is provided.
   */
  email_address?: string;
  /**
   * @description The new name for the recipient.

  \*\*NOTE:\*\* Optional if `email_address` is provided.
   */
  name?: string;
  /**
   * @description The signature ID for the recipient.
   */
  signature_id: string;
  /**
   * @description The new time when the signature request will expire. Unsigned signatures will be moved to the expired status, and no longer signable. See [Signature Request Expiration Date](https://developers.hellosign.com/docs/signature-request/expiration/) for details.
   */
  expires_at?: number;
}

export type SubAttachment = {
  /**
   * @description The instructions for uploading the attachment.
   */
  instructions?: string;
  /**
   * @description The name of attachment.
   */
  name: string;
  /**
   * @description Determines if the attachment must be uploaded.
   */
  required?: boolean;
  /**
   * @description The signer's index in the `signers` parameter (0-based indexing).

  \*\*NOTE:\*\* Only one signer can be assigned per attachment.
   */
  signer_index: number;
}

export type SubBulkSignerList = {
  /**
   * @description An array of custom field values.
   */
  custom_fields?: Array<SubBulkSignerListCustomField>;
  /**
   * @description Add Signers to your Templated-based Signature Request. Allows the requester to specify editor options when a preparing a document.

  Currently only templates with a single role are supported. All signers must have the same `role` value.
   */
  signers?: Array<SubSignatureRequestTemplateSigner>;
}

export type SubBulkSignerListCustomField = {
  /**
   * @description The name of the custom field. Must be the field's `name` or `api_id`.
   */
  name: string;
  /**
   * @description The value of the custom field.
   */
  value: string;
}

export type SubCC = {
  /**
   * @description Must match an existing CC role in chosen Template(s). Multiple CC recipients cannot share the same CC role.
   */
  role: string;
  /**
   * @description The email address of the CC recipient.
   */
  email_address: string;
}

/**
 * @description When used together with merge fields, `custom_fields` allows users to add pre-filled data to their signature requests.

Pre-filled data can be used with "send-once" signature requests by adding merge fields with `form_fields_per_document` or [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) while passing values back with `custom_fields` together in one API call.

For using pre-filled on repeatable signature requests, merge fields are added to templates in the Dropbox Sign UI or by calling [/template/create_embedded_draft](/api/reference/operation/templateCreateEmbeddedDraft) and then passing `custom_fields` on subsequent signature requests referencing that template.
 */
export type SubCustomField = {
  /**
   * @description Used to create editable merge fields. When the value matches a role passed in with `signers`, that role can edit the data that was pre-filled to that field. This field is optional, but required when this custom field object is set to `required = true`.

  \*\*NOTE:\*\* Editable merge fields are only supported for single signer requests (or the first signer in ordered signature requests). If used when there are multiple signers in an unordered signature request, the editor value is ignored and the field won't be editable.
   */
  editor?: string;
  /**
   * @description The name of a custom field. When working with pre-filled data, the custom field's name must have a matching merge field name or the field will remain empty on the document during signing.
   */
  name: string;
  /**
   * @description Used to set an editable merge field when working with pre-filled data. When `true`, the custom field must specify a signer role in `editor`.
   */
  required?: boolean;
  /**
   * @description The string that resolves (aka "pre-fills") to the merge field on the final document(s) used for signing.
   */
  value?: string;
}

/**
 * @description This allows the requester to specify editor options when a preparing a document
 */
export type SubEditorOptions = {
  /**
   * @description Allows requesters to edit the list of signers
   */
  allow_edit_signers?: boolean;
  /**
   * @description Allows requesters to edit documents, including delete and add
   */
  allow_edit_documents?: boolean;
}

/**
 * @description This allows the requester to specify field options for a signature request.
 */
export type SubFieldOptions = {
  /**
   * @description Allows requester to specify the date format (see list of allowed [formats](/api/reference/constants/#date-formats))

  \*\*NOTE:\*\* Only available for Premium and higher.
   */
  date_format: 'MM / DD / YYYY' | 'MM - DD - YYYY' | 'DD / MM / YYYY' | 'DD - MM - YYYY' | 'YYYY / MM / DD' | 'YYYY - MM - DD';
}

export type SubFormFieldGroup = {
  /**
   * @description ID of group. Use this to reference a specific group from the `group` value in `form_fields_per_document`.
   */
  group_id: string;
  /**
   * @description Name of the group
   */
  group_label: string;
  /**
   * @description Examples: `require_0-1` `require_1` `require_1-ormore`

  - Check out the list of [acceptable `requirement` checkbox type values](/api/reference/constants/#checkbox-field-grouping).
  - Check out the list of [acceptable `requirement` radio type fields](/api/reference/constants/#radio-field-grouping).
  - Radio groups require \*\*at least\*\* two fields per group.
   */
  requirement: string;
}

export type SubFormFieldRule = {
  /**
   * @description Must be unique across all defined rules.
   */
  id: string;
  /**
   * @description Currently only `AND` is supported. Support for `OR` is being worked on.
   */
  trigger_operator: string;
  /**
   * @description An array of trigger definitions, the "if this" part of "\*\*if this\*\*, then that". Currently only a single trigger per rule is allowed.
   */
  triggers: Array<SubFormFieldRuleTrigger>;
  /**
   * @description An array of action definitions, the "then that" part of "if this, \*\*then that\*\*". Any number of actions may be attached to a single rule.
   */
  actions: Array<SubFormFieldRuleAction>;
}

export type SubFormFieldRuleAction = {
  /**
   * @description \*\*field_id\*\* or \*\*group_id\*\* is required, but not both.

  Must reference the `api_id` of an existing field defined within `form_fields_per_document`.

  Cannot use with `group_id`. Trigger and action fields must belong to the same signer.
   */
  field_id?: string;
  /**
   * @description \*\*group_id\*\* or \*\*field_id\*\* is required, but not both.

  Must reference the ID of an existing group defined within `form_field_groups`.

  Cannot use with `field_id`. Trigger and action fields and groups must belong to the same signer.
   */
  group_id?: string;
  /**
   * @description `true` to hide the target field when rule is satisfied, otherwise `false`.
   */
  hidden: boolean;
  type: 'change-field-visibility' | 'change-group-visibility';
}

export type SubFormFieldRuleTrigger = {
  /**
   * @description Must reference the `api_id` of an existing field defined within `form_fields_per_document`. Trigger and action fields and groups must belong to the same signer.
   */
  id: string;
  /**
   * @description Different field types allow different `operator` values:
  - Field type of \*\*text\*\*:
    - \*\*is\*\*: exact match
    - \*\*not\*\*: not exact match
    - \*\*match\*\*: regular expression, without /. Example:
      - OK `[a-zA-Z0-9]`
      - Not OK `/[a-zA-Z0-9]/`
  - Field type of \*\*dropdown\*\*:
    - \*\*is\*\*: exact match, single value
    - \*\*not\*\*: not exact match, single value
    - \*\*any\*\*: exact match, array of values.
    - \*\*none\*\*: not exact match, array of values.
  - Field type of \*\*checkbox\*\*:
    - \*\*is\*\*: exact match, single value
    - \*\*not\*\*: not exact match, single value
  - Field type of \*\*radio\*\*:
    - \*\*is\*\*: exact match, single value
    - \*\*not\*\*: not exact match, single value
   */
  operator: 'any' | 'is' | 'match' | 'none' | 'not';
  /**
   * @description \*\*value\*\* or \*\*values\*\* is required, but not both.

  The value to match against \*\*operator\*\*.

  - When \*\*operator\*\* is one of the following, \*\*value\*\* must be `String`:
    - `is`
    - `not`
    - `match`

  Otherwise,
  - \*\*checkbox\*\*: When \*\*type\*\* of trigger is \*\*checkbox\*\*, \*\*value\*\* must be `0` or `1`
  - \*\*radio\*\*: When \*\*type\*\* of trigger is \*\*radio\*\*, \*\*value\*\* must be `1`
   */
  value?: string;
  /**
   * @description \*\*values\*\* or \*\*value\*\* is required, but not both.

  The values to match against \*\*operator\*\* when it is one of the following:

  - `any`
  - `none`
   */
  values?: Array<string>;
}

/**
 * @description This class extends `SubFormFieldsPerDocumentBase`.
 */
export type SubFormFieldsPerDocumentCheckbox = any

/**
 * @description This class extends `SubFormFieldsPerDocumentBase`.
 */
export type SubFormFieldsPerDocumentCheckboxMerge = any

/**
 * @description This class extends `SubFormFieldsPerDocumentBase`.
 */
export type SubFormFieldsPerDocumentDateSigned = any

/**
 * @description This class extends `SubFormFieldsPerDocumentBase`.
 */
export type SubFormFieldsPerDocumentDropdown = any

/**
 * @description This class extends `SubFormFieldsPerDocumentBase`.
 */
export type SubFormFieldsPerDocumentHyperlink = any

/**
 * @description This class extends `SubFormFieldsPerDocumentBase`.
 */
export type SubFormFieldsPerDocumentInitials = any

/**
 * @description This class extends `SubFormFieldsPerDocumentBase`.
 */
export type SubFormFieldsPerDocumentRadio = any

/**
 * @description This class extends `SubFormFieldsPerDocumentBase`.
 */
export type SubFormFieldsPerDocumentSignature = any

/**
 * @description This class extends `SubFormFieldsPerDocumentBase`.
 */
export type SubFormFieldsPerDocumentText = any

/**
 * @description This class extends `SubFormFieldsPerDocumentBase`.
 */
export type SubFormFieldsPerDocumentTextMerge = any

export type SubFormFieldsPerDocumentTypeEnum = 'checkbox' | 'checkbox-merge' | 'date_signed' | 'dropdown' | 'hyperlink' | 'initials' | 'signature' | 'radio' | 'text' | 'text-merge'

export type SubFormFieldsPerDocumentFontEnum = 'helvetica' | 'arial' | 'courier' | 'calibri' | 'cambria' | 'georgia' | 'times' | 'trebuchet' | 'verdana' | 'roboto' | 'robotoMono' | 'notoSans' | 'notoSerif' | 'notoCJK-JP-Regular' | 'notoHebrew-Regular' | 'notoSanThaiMerged'

/**
 * @description The fields that should appear on the document, expressed as an array of objects. (For more details you can read about it here: [Using Form Fields per Document](/docs/openapi/form-fields-per-document).)

\*\*NOTE:\*\* Fields like \*\*text\*\*, \*\*dropdown\*\*, \*\*checkbox\*\*, \*\*radio\*\*, and \*\*hyperlink\*\* have additional required and optional parameters. Check out the list of [additional parameters](/api/reference/constants/#form-fields-per-document) for these field types.

\* Text Field use `SubFormFieldsPerDocumentText`
\* Dropdown Field use `SubFormFieldsPerDocumentDropdown`
\* Hyperlink Field use `SubFormFieldsPerDocumentHyperlink`
\* Checkbox Field use `SubFormFieldsPerDocumentCheckbox`
\* Radio Field use `SubFormFieldsPerDocumentRadio`
\* Signature Field use `SubFormFieldsPerDocumentSignature`
\* Date Signed Field use `SubFormFieldsPerDocumentDateSigned`
\* Initials Field use `SubFormFieldsPerDocumentInitials`
\* Text Merge Field use `SubFormFieldsPerDocumentTextMerge`
\* Checkbox Merge Field use `SubFormFieldsPerDocumentCheckboxMerge`
 */
export type SubFormFieldsPerDocumentBase = {
  /**
   * @description Represents the integer index of the `file` or `file_url` document the field should be attached to.
   */
  document_index: number;
  /**
   * @description An identifier for the field that is unique across all documents in the request.
   */
  api_id: string;
  /**
   * @description Size of the field in pixels.
   */
  height: number;
  /**
   * @description Display name for the field.
   */
  name?: string;
  /**
   * @description Page in the document where the field should be placed (requires documents be PDF files).

  - When the page number parameter is supplied, the API will use the new coordinate system.
  - Check out the differences between both [coordinate systems](https://faq.hellosign.com/hc/en-us/articles/217115577) and how to use them.
   */
  page?: number;
  /**
   * @description Whether this field is required.
   */
  required: boolean;
  /**
   * @description Signer index identified by the offset in the signers parameter (0-based indexing), indicating which signer should fill out the field.

  \*\*NOTE:\*\* To set the value of the field as the preparer you must set this to `me_now`

  \*\*NOTE:\*\* If type is `text-merge` or `checkbox-merge`, you must set this to sender in order to use pre-filled data.
   */
  signer: string;
  type: string;
  /**
   * @description Size of the field in pixels.
   */
  width: number;
  /**
   * @description Location coordinates of the field in pixels.
   */
  x: number;
  /**
   * @description Location coordinates of the field in pixels.
   */
  y: number;
}

export type SubSignatureRequestGroupedSigners = {
  /**
   * @description The name of the group.
   */
  group: string;
  /**
   * @description The order the group is required to sign in. Use this instead of Signer-level `order`.
   */
  order?: number;
  /**
   * @description Signers belonging to this Group.

  \*\*NOTE:\*\* Only `name`, `email_address`, and `pin` are available to Grouped Signers. We will ignore all other properties, even though they are listed below.
   */
  signers: Array<SubSignatureRequestSigner>;
}

export type SubMergeField = {
  /**
   * @description The name of the merge field. Must be unique.
   */
  name: string;
  /**
   * @description The type of merge field.
   */
  type: 'text' | 'checkbox';
}

/**
 * @description OAuth related parameters.
 */
export type SubOAuth = {
  /**
   * @description The callback URL to be used for OAuth flows. (Required if `oauth[scopes]` is provided)
   */
  callback_url?: string;
  /**
   * @description A list of [OAuth scopes](/api/reference/tag/OAuth) to be granted to the app. (Required if `oauth[callback_url]` is provided).
   */
  scopes?: Array<'request_signature' | 'basic_account_info' | 'account_access' | 'signature_request_access' | 'template_access' | 'team_access' | 'api_app_access' | ''>;
}

/**
 * @description Additional options supported by API App.
 */
export type SubOptions = {
  /**
   * @description Determines if signers can use "Insert Everywhere" when signing a document.
   */
  can_insert_everywhere?: boolean;
}

export type SubSignatureRequestSigner = {
  /**
   * @description The name of the signer.
   */
  name: string;
  /**
   * @description The email address of the signer.
   */
  email_address: string;
  /**
   * @description The order the signer is required to sign in.
   */
  order?: number;
  /**
   * @description The 4- to 12-character access code that will secure this signer's signature page.
   */
  pin?: string;
  /**
   * @description An E.164 formatted phone number.

  By using the feature, you agree you are responsible for obtaining a signer's consent to receive text messages from Dropbox Sign related to this signature request and confirm you have obtained such consent from all signers prior to enabling SMS delivery for this signature request. [Learn more](https://faq.hellosign.com/hc/en-us/articles/15815316468877-Dropbox-Sign-SMS-tools-add-on).

  \*\*NOTE:\*\* Not available in test mode and requires a Standard plan or higher.
   */
  sms_phone_number?: string;
  /**
   * @description Specifies the feature used with the `sms_phone_number`. Default `authentication`.

  If `authentication`, signer is sent a verification code via SMS that is required to access the document.

  If `delivery`, a link to complete the signature request is delivered via SMS (_and_ email).
   */
  sms_phone_number_type?: 'authentication' | 'delivery';
}

export type SubSignatureRequestTemplateSigner = {
  /**
   * @description Must match an existing role in chosen Template(s). It's case-sensitive.
   */
  role: string;
  /**
   * @description The name of the signer.
   */
  name: string;
  /**
   * @description The email address of the signer.
   */
  email_address: string;
  /**
   * @description The 4- to 12-character access code that will secure this signer's signature page.
   */
  pin?: string;
  /**
   * @description An E.164 formatted phone number.

  By using the feature, you agree you are responsible for obtaining a signer's consent to receive text messages from Dropbox Sign related to this signature request and confirm you have obtained such consent from all signers prior to enabling SMS delivery for this signature request. [Learn more](https://faq.hellosign.com/hc/en-us/articles/15815316468877-Dropbox-Sign-SMS-tools-add-on).

  \*\*NOTE:\*\* Not available in test mode and requires a Standard plan or higher.
   */
  sms_phone_number?: string;
  /**
   * @description Specifies the feature used with the `sms_phone_number`. Default `authentication`.

  If `authentication`, signer is sent a verification code via SMS that is required to access the document.

  If `delivery`, a link to complete the signature request is delivered via SMS (_and_ email).
   */
  sms_phone_number_type?: 'authentication' | 'delivery';
}

export type SubUnclaimedDraftSigner = {
  /**
   * @description The email address of the signer.
   */
  email_address: string;
  /**
   * @description The name of the signer.
   */
  name: string;
  /**
   * @description The order the signer is required to sign in.
   */
  order?: number;
}

export type SubUnclaimedDraftTemplateSigner = {
  /**
   * @description Must match an existing role in chosen Template(s).
   */
  role: string;
  /**
   * @description The name of the signer filling the role of `role`.
   */
  name: string;
  /**
   * @description The email address of the signer filling the role of `role`.
   */
  email_address: string;
}

export type SubTemplateRole = {
  /**
   * @description The role name of the signer that will be displayed when the template is used to create a signature request.
   */
  name?: string;
  /**
   * @description The order in which this signer role is required to sign.
   */
  order?: number;
}

/**
 * @description This allows the requester to specify the types allowed for creating a signature and specify another signing options.

\*\*NOTE:\*\* If `signing_options` are not defined in the request, the allowed types will default to those specified in the account settings.

\*\*NOTE:\*\* If `force_advanced_signature_details` is set, allowed types has to be defined too.
 */
export type SubSigningOptions = {
  /**
   * @description The default type shown (limited to the listed types)
   */
  default_type: 'draw' | 'phone' | 'type' | 'upload';
  /**
   * @description Allows drawing the signature
   */
  draw?: boolean;
  /**
   * @description Allows using a smartphone to email the signature
   */
  phone?: boolean;
  /**
   * @description Allows typing the signature
   */
  type?: boolean;
  /**
   * @description Allows uploading the signature
   */
  upload?: boolean;
  /**
   * @description Turning on advanced signature details for the signature request
   */
  force_advanced_signature_details?: boolean;
}

/**
 * @description An array of elements and values serialized to a string, to be used to customize the app's signer page. (Only applies to some API plans)

Take a look at our [white labeling guide](https://developers.hellosign.com/api/reference/premium-branding/) to learn more.
 */
export type SubWhiteLabelingOptions = {
  header_background_color?: string;
  legal_version?: 'terms1' | 'terms2';
  link_color?: string;
  page_background_color?: string;
  primary_button_color?: string;
  primary_button_color_hover?: string;
  primary_button_text_color?: string;
  primary_button_text_color_hover?: string;
  secondary_button_color?: string;
  secondary_button_color_hover?: string;
  secondary_button_text_color?: string;
  secondary_button_text_color_hover?: string;
  text_color1?: string;
  text_color2?: string;
  /**
   * @description Resets white labeling options to defaults. Only useful when updating an API App.
   */
  reset_to_default?: boolean;
}

export type TeamAddMemberRequest = {
  /**
   * @description `account_id` or `email_address` is required. If both are provided, the account id prevails.

  Account id of the user to invite to your Team.
   */
  account_id?: string;
  /**
   * @description `account_id` or `email_address` is required, If both are provided, the account id prevails.

  Email address of the user to invite to your Team.
   */
  email_address?: string;
  /**
   * @description A role member will take in a new Team.

  \*\*NOTE:\*\* This parameter is used only if `team_id` is provided.
   */
  role?: 'Member' | 'Developer' | 'Team Manager' | 'Admin';
}

export type TeamCreateRequest = {
  /**
   * @description The name of your Team.
   */
  name?: string;
}

export type TeamRemoveMemberRequest = {
  /**
   * @description \*\*account_id\*\* or \*\*email_address\*\* is required. If both are provided, the account id prevails.

  Account id to remove from your Team.
   */
  account_id?: string;
  /**
   * @description \*\*account_id\*\* or \*\*email_address\*\* is required. If both are provided, the account id prevails.

  Email address of the Account to remove from your Team.
   */
  email_address?: string;
  /**
   * @description The email address of an Account on this Team to receive all documents, templates, and API apps (if applicable) from the removed Account. If not provided, and on an Enterprise plan, this data will remain with the removed Account.

  \*\*NOTE:\*\* Only available for Enterprise plans.
   */
  new_owner_email_address?: string;
  /**
   * @description Id of the new Team.
   */
  new_team_id?: string;
  /**
   * @description A new role member will take in a new Team.

  \*\*NOTE:\*\* This parameter is used only if `new_team_id` is provided.
   */
  new_role?: 'Member' | 'Developer' | 'Team Manager' | 'Admin';
}

export type TeamUpdateRequest = {
  /**
   * @description The name of your Team.
   */
  name?: string;
}

export type TemplateAddUserRequest = {
  /**
   * @description The id of the Account to give access to the Template.
  \*\*NOTE:\*\* The account id prevails if email address is also provided.
   */
  account_id?: string;
  /**
   * @description The email address of the Account to give access to the Template.
  \*\*NOTE:\*\* The account id prevails if it is also provided.
   */
  email_address?: string;
  /**
   * @description If set to `true`, the user does not receive an email notification when a template has been shared with them. Defaults to `false`.
   */
  skip_notification?: boolean;
}

export type TemplateCreateRequest = {
  /**
   * @description Use `files[]` to indicate the uploaded file(s) to send for signature.

  This endpoint requires either \*\*files\*\* or \*\*file_urls[]\*\*, but not both.
   */
  files?: Array<Blob>;
  /**
   * @description Use `file_urls[]` to have Dropbox Sign download the file(s) to send for signature.

  This endpoint requires either \*\*files\*\* or \*\*file_urls[]\*\*, but not both.
   */
  file_urls?: Array<string>;
  /**
   * @description Allows signers to reassign their signature requests to other signers if set to `true`. Defaults to `false`.

  \*\*NOTE:\*\* Only available for Premium plan and higher.
   */
  allow_reassign?: boolean;
  /**
   * @description A list describing the attachments
   */
  attachments?: Array<SubAttachment>;
  /**
   * @description The CC roles that must be assigned when using the template to send a signature request
   */
  cc_roles?: Array<string>;
  /**
   * @description Client id of the app you're using to create this draft. Used to apply the branding and callback url defined for the app.
   */
  client_id?: string;
  field_options?: SubFieldOptions;
  /**
   * @description Group information for fields defined in `form_fields_per_document`. String-indexed JSON array with `group_label` and `requirement` keys. `form_fields_per_document` must contain fields referencing a group defined in `form_field_groups`.
   */
  form_field_groups?: Array<SubFormFieldGroup>;
  /**
   * @description Conditional Logic rules for fields defined in `form_fields_per_document`.
   */
  form_field_rules?: Array<SubFormFieldRule>;
  /**
   * @description The fields that should appear on the document, expressed as an array of objects. (For more details you can read about it here: [Using Form Fields per Document](/docs/openapi/form-fields-per-document).)

  \*\*NOTE:\*\* Fields like \*\*text\*\*, \*\*dropdown\*\*, \*\*checkbox\*\*, \*\*radio\*\*, and \*\*hyperlink\*\* have additional required and optional parameters. Check out the list of [additional parameters](/api/reference/constants/#form-fields-per-document) for these field types.

  \* Text Field use `SubFormFieldsPerDocumentText`
  \* Dropdown Field use `SubFormFieldsPerDocumentDropdown`
  \* Hyperlink Field use `SubFormFieldsPerDocumentHyperlink`
  \* Checkbox Field use `SubFormFieldsPerDocumentCheckbox`
  \* Radio Field use `SubFormFieldsPerDocumentRadio`
  \* Signature Field use `SubFormFieldsPerDocumentSignature`
  \* Date Signed Field use `SubFormFieldsPerDocumentDateSigned`
  \* Initials Field use `SubFormFieldsPerDocumentInitials`
  \* Text Merge Field use `SubFormFieldsPerDocumentTextMerge`
  \* Checkbox Merge Field use `SubFormFieldsPerDocumentCheckboxMerge`
   */
  form_fields_per_document: Array<SubFormFieldsPerDocumentBase>;
  /**
   * @description Add merge fields to the template. Merge fields are placed by the user creating the template and used to pre-fill data by passing values into signature requests with the `custom_fields` parameter.
  If the signature request using that template \*does not\* pass a value into a merge field, then an empty field remains in the document.
   */
  merge_fields?: Array<SubMergeField>;
  /**
   * @description The default template email message.
   */
  message?: string;
  /**
   * @description Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer's order number for look up when receiving events for the signature request.

  Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long.
   */
  metadata?: Record<any, unknown>;
  /**
   * @description An array of the designated signer roles that must be specified when sending a SignatureRequest using this Template.
   */
  signer_roles: Array<SubTemplateRole>;
  /**
   * @description The template title (alias).
   */
  subject?: string;
  /**
   * @description Whether this is a test, the signature request created from this draft will not be legally binding if set to `true`. Defaults to `false`.
   */
  test_mode?: boolean;
  /**
   * @description The title you want to assign to the SignatureRequest.
   */
  title?: string;
  /**
   * @description Enable the detection of predefined PDF fields by setting the `use_preexisting_fields` to `true` (defaults to disabled, or `false`).
   */
  use_preexisting_fields?: boolean;
}

export type TemplateCreateEmbeddedDraftRequest = {
  /**
   * @description Use `files[]` to indicate the uploaded file(s) to send for signature.

  This endpoint requires either \*\*files\*\* or \*\*file_urls[]\*\*, but not both.
   */
  files?: Array<Blob>;
  /**
   * @description Use `file_urls[]` to have Dropbox Sign download the file(s) to send for signature.

  This endpoint requires either \*\*files\*\* or \*\*file_urls[]\*\*, but not both.
   */
  file_urls?: Array<string>;
  /**
   * @description This allows the requester to specify whether the user is allowed to provide email addresses to CC when creating a template.
   */
  allow_ccs?: boolean;
  /**
   * @description Allows signers to reassign their signature requests to other signers if set to `true`. Defaults to `false`.

  \*\*NOTE:\*\* Only available for Premium plan and higher.
   */
  allow_reassign?: boolean;
  /**
   * @description A list describing the attachments
   */
  attachments?: Array<SubAttachment>;
  /**
   * @description The CC roles that must be assigned when using the template to send a signature request
   */
  cc_roles?: Array<string>;
  /**
   * @description Client id of the app you're using to create this draft. Used to apply the branding and callback url defined for the app.
   */
  client_id: string;
  editor_options?: SubEditorOptions;
  field_options?: SubFieldOptions;
  /**
   * @description Provide users the ability to review/edit the template signer roles.
   */
  force_signer_roles?: boolean;
  /**
   * @description Provide users the ability to review/edit the template subject and message.
   */
  force_subject_message?: boolean;
  /**
   * @description Group information for fields defined in `form_fields_per_document`. String-indexed JSON array with `group_label` and `requirement` keys. `form_fields_per_document` must contain fields referencing a group defined in `form_field_groups`.
   */
  form_field_groups?: Array<SubFormFieldGroup>;
  /**
   * @description Conditional Logic rules for fields defined in `form_fields_per_document`.
   */
  form_field_rules?: Array<SubFormFieldRule>;
  /**
   * @description The fields that should appear on the document, expressed as an array of objects. (For more details you can read about it here: [Using Form Fields per Document](/docs/openapi/form-fields-per-document).)

  \*\*NOTE:\*\* Fields like \*\*text\*\*, \*\*dropdown\*\*, \*\*checkbox\*\*, \*\*radio\*\*, and \*\*hyperlink\*\* have additional required and optional parameters. Check out the list of [additional parameters](/api/reference/constants/#form-fields-per-document) for these field types.

  \* Text Field use `SubFormFieldsPerDocumentText`
  \* Dropdown Field use `SubFormFieldsPerDocumentDropdown`
  \* Hyperlink Field use `SubFormFieldsPerDocumentHyperlink`
  \* Checkbox Field use `SubFormFieldsPerDocumentCheckbox`
  \* Radio Field use `SubFormFieldsPerDocumentRadio`
  \* Signature Field use `SubFormFieldsPerDocumentSignature`
  \* Date Signed Field use `SubFormFieldsPerDocumentDateSigned`
  \* Initials Field use `SubFormFieldsPerDocumentInitials`
  \* Text Merge Field use `SubFormFieldsPerDocumentTextMerge`
  \* Checkbox Merge Field use `SubFormFieldsPerDocumentCheckboxMerge`
   */
  form_fields_per_document?: Array<SubFormFieldsPerDocumentBase>;
  /**
   * @description Add merge fields to the template. Merge fields are placed by the user creating the template and used to pre-fill data by passing values into signature requests with the `custom_fields` parameter.
  If the signature request using that template \*does not\* pass a value into a merge field, then an empty field remains in the document.
   */
  merge_fields?: Array<SubMergeField>;
  /**
   * @description The default template email message.
   */
  message?: string;
  /**
   * @description Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer's order number for look up when receiving events for the signature request.

  Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long.
   */
  metadata?: Record<any, unknown>;
  /**
   * @description This allows the requester to enable the editor/preview experience.

  - `show_preview=true`: Allows requesters to enable the editor/preview experience.
  - `show_preview=false`: Allows requesters to disable the editor/preview experience.
   */
  show_preview?: boolean;
  /**
   * @description When only one step remains in the signature request process and this parameter is set to `false` then the progress stepper will be hidden.
   */
  show_progress_stepper?: boolean;
  /**
   * @description An array of the designated signer roles that must be specified when sending a SignatureRequest using this Template.
   */
  signer_roles?: Array<SubTemplateRole>;
  /**
   * @description Disables the "Me (Now)" option for the person preparing the document. Does not work with type `send_document`. Defaults to `false`.
   */
  skip_me_now?: boolean;
  /**
   * @description The template title (alias).
   */
  subject?: string;
  /**
   * @description Whether this is a test, the signature request created from this draft will not be legally binding if set to `true`. Defaults to `false`.
   */
  test_mode?: boolean;
  /**
   * @description The title you want to assign to the SignatureRequest.
   */
  title?: string;
  /**
   * @description Enable the detection of predefined PDF fields by setting the `use_preexisting_fields` to `true` (defaults to disabled, or `false`).
   */
  use_preexisting_fields?: boolean;
}

export type TemplateRemoveUserRequest = {
  /**
   * @description The id or email address of the Account to remove access to the Template. The account id prevails if both are provided.
   */
  account_id?: string;
  /**
   * @description The id or email address of the Account to remove access to the Template. The account id prevails if both are provided.
   */
  email_address?: string;
}

export type TemplateUpdateFilesRequest = {
  /**
   * @description Client id of the app you're using to update this template.
   */
  client_id?: string;
  /**
   * @description Use `files[]` to indicate the uploaded file(s) to use for the template.

  This endpoint requires either \*\*files\*\* or \*\*file_urls[]\*\*, but not both.
   */
  files?: Array<Blob>;
  /**
   * @description Use `file_urls[]` to have Dropbox Sign download the file(s) to use for the template.

  This endpoint requires either \*\*files\*\* or \*\*file_urls[]\*\*, but not both.
   */
  file_urls?: Array<string>;
  /**
   * @description The new default template email message.
   */
  message?: string;
  /**
   * @description The new default template email subject.
   */
  subject?: string;
  /**
   * @description Whether this is a test, the signature request created from this draft will not be legally binding if set to `true`. Defaults to `false`.
   */
  test_mode?: boolean;
}

/**
 * @description Creates a new Draft that can be claimed using the claim URL. The first authenticated user to access the URL will claim the Draft and will be shown either the "Sign and send" or the "Request signature" page with the Draft loaded. Subsequent access to the claim URL will result in a 404.
 */
export type UnclaimedDraftCreateRequest = {
  /**
   * @description Use `files[]` to indicate the uploaded file(s) to send for signature.

  This endpoint requires either \*\*files\*\* or \*\*file_urls[]\*\*, but not both.
   */
  files?: Array<Blob>;
  /**
   * @description Use `file_urls[]` to have Dropbox Sign download the file(s) to send for signature.

  This endpoint requires either \*\*files\*\* or \*\*file_urls[]\*\*, but not both.
   */
  file_urls?: Array<string>;
  /**
   * @description Allows signers to decline to sign a document if `true`. Defaults to `false`.
   */
  allow_decline?: boolean;
  /**
   * @description A list describing the attachments
   */
  attachments?: Array<SubAttachment>;
  /**
   * @description The email addresses that should be CCed.
   */
  cc_email_addresses?: Array<string>;
  /**
   * @description Client id of the app used to create the draft. Used to apply the branding and callback url defined for the app.
   */
  client_id?: string;
  /**
   * @description When used together with merge fields, `custom_fields` allows users to add pre-filled data to their signature requests.

  Pre-filled data can be used with "send-once" signature requests by adding merge fields with `form_fields_per_document` or [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) while passing values back with `custom_fields` together in one API call.

  For using pre-filled on repeatable signature requests, merge fields are added to templates in the Dropbox Sign UI or by calling [/template/create_embedded_draft](/api/reference/operation/templateCreateEmbeddedDraft) and then passing `custom_fields` on subsequent signature requests referencing that template.
   */
  custom_fields?: Array<SubCustomField>;
  field_options?: SubFieldOptions;
  /**
   * @description Group information for fields defined in `form_fields_per_document`. String-indexed JSON array with `group_label` and `requirement` keys. `form_fields_per_document` must contain fields referencing a group defined in `form_field_groups`.
   */
  form_field_groups?: Array<SubFormFieldGroup>;
  /**
   * @description Conditional Logic rules for fields defined in `form_fields_per_document`.
   */
  form_field_rules?: Array<SubFormFieldRule>;
  /**
   * @description The fields that should appear on the document, expressed as an array of objects. (For more details you can read about it here: [Using Form Fields per Document](/docs/openapi/form-fields-per-document).)

  \*\*NOTE:\*\* Fields like \*\*text\*\*, \*\*dropdown\*\*, \*\*checkbox\*\*, \*\*radio\*\*, and \*\*hyperlink\*\* have additional required and optional parameters. Check out the list of [additional parameters](/api/reference/constants/#form-fields-per-document) for these field types.

  \* Text Field use `SubFormFieldsPerDocumentText`
  \* Dropdown Field use `SubFormFieldsPerDocumentDropdown`
  \* Hyperlink Field use `SubFormFieldsPerDocumentHyperlink`
  \* Checkbox Field use `SubFormFieldsPerDocumentCheckbox`
  \* Radio Field use `SubFormFieldsPerDocumentRadio`
  \* Signature Field use `SubFormFieldsPerDocumentSignature`
  \* Date Signed Field use `SubFormFieldsPerDocumentDateSigned`
  \* Initials Field use `SubFormFieldsPerDocumentInitials`
  \* Text Merge Field use `SubFormFieldsPerDocumentTextMerge`
  \* Checkbox Merge Field use `SubFormFieldsPerDocumentCheckboxMerge`
   */
  form_fields_per_document?: Array<SubFormFieldsPerDocumentBase>;
  /**
   * @description Send with a value of `true` if you wish to enable automatic Text Tag removal. Defaults to `false`. When using Text Tags it is preferred that you set this to `false` and hide your tags with white text or something similar because the automatic removal system can cause unwanted clipping. See the [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) walkthrough for more details.
   */
  hide_text_tags?: boolean;
  /**
   * @description The custom message in the email that will be sent to the signers.
   */
  message?: string;
  /**
   * @description Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer's order number for look up when receiving events for the signature request.

  Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long.
   */
  metadata?: Record<any, unknown>;
  /**
   * @description When only one step remains in the signature request process and this parameter is set to `false` then the progress stepper will be hidden.
   */
  show_progress_stepper?: boolean;
  /**
   * @description Add Signers to your Unclaimed Draft Signature Request.
   */
  signers?: Array<SubUnclaimedDraftSigner>;
  signing_options?: SubSigningOptions;
  /**
   * @description The URL you want signers redirected to after they successfully sign.
   */
  signing_redirect_url?: string;
  /**
   * @description The subject in the email that will be sent to the signers.
   */
  subject?: string;
  /**
   * @description Whether this is a test, the signature request created from this draft will not be legally binding if set to `true`. Defaults to `false`.
   */
  test_mode?: boolean;
  /**
   * @description The type of unclaimed draft to create. Use `send_document` to create a claimable file, and `request_signature` for a claimable signature request. If the type is `request_signature` then signers name and email_address are not optional.
   */
  type: 'send_document' | 'request_signature';
  /**
   * @description Set `use_text_tags` to `true` to enable [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) parsing in your document (defaults to disabled, or `false`). Alternatively, if your PDF contains pre-defined fields, enable the detection of these fields by setting the `use_preexisting_fields` to `true` (defaults to disabled, or `false`). Currently we only support use of either `use_text_tags` or `use_preexisting_fields` parameter, not both.
   */
  use_preexisting_fields?: boolean;
  /**
   * @description Set `use_text_tags` to `true` to enable [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) parsing in your document (defaults to disabled, or `false`). Alternatively, if your PDF contains pre-defined fields, enable the detection of these fields by setting the `use_preexisting_fields` to `true` (defaults to disabled, or `false`). Currently we only support use of either `use_text_tags` or `use_preexisting_fields` parameter, not both.
   */
  use_text_tags?: boolean;
  /**
   * @description When the signature request will expire. Unsigned signatures will be moved to the expired status, and no longer signable. See [Signature Request Expiration Date](https://developers.hellosign.com/docs/signature-request/expiration/) for details.

  \*\*NOTE:\*\* This does not correspond to the \*\*expires_at\*\* returned in the response.
   */
  expires_at?: number;
}

/**
 * @description Creates a new Draft that can be claimed and used in an embedded iFrame. The first authenticated user to access the URL will claim the Draft and will be shown the "Request signature" page with the Draft loaded. Subsequent access to the claim URL will result in a `404`. For this embedded endpoint the `requester_email_address` parameter is required.

\*\*NOTE:\*\* Embedded unclaimed drafts can only be accessed in embedded iFrames whereas normal drafts can be used and accessed on Dropbox Sign.
 */
export type UnclaimedDraftCreateEmbeddedRequest = {
  /**
   * @description Use `files[]` to indicate the uploaded file(s) to send for signature.

  This endpoint requires either \*\*files\*\* or \*\*file_urls[]\*\*, but not both.
   */
  files?: Array<Blob>;
  /**
   * @description Use `file_urls[]` to have Dropbox Sign download the file(s) to send for signature.

  This endpoint requires either \*\*files\*\* or \*\*file_urls[]\*\*, but not both.
   */
  file_urls?: Array<string>;
  /**
   * @description This allows the requester to specify whether the user is allowed to provide email addresses to CC when claiming the draft.
   */
  allow_ccs?: boolean;
  /**
   * @description Allows signers to decline to sign a document if `true`. Defaults to `false`.
   */
  allow_decline?: boolean;
  /**
   * @description Allows signers to reassign their signature requests to other signers if set to `true`. Defaults to `false`.

  \*\*NOTE:\*\* Only available for Premium plan and higher.
   */
  allow_reassign?: boolean;
  /**
   * @description A list describing the attachments
   */
  attachments?: Array<SubAttachment>;
  /**
   * @description The email addresses that should be CCed.
   */
  cc_email_addresses?: Array<string>;
  /**
   * @description Client id of the app used to create the draft. Used to apply the branding and callback url defined for the app.
   */
  client_id: string;
  /**
   * @description When used together with merge fields, `custom_fields` allows users to add pre-filled data to their signature requests.

  Pre-filled data can be used with "send-once" signature requests by adding merge fields with `form_fields_per_document` or [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) while passing values back with `custom_fields` together in one API call.

  For using pre-filled on repeatable signature requests, merge fields are added to templates in the Dropbox Sign UI or by calling [/template/create_embedded_draft](/api/reference/operation/templateCreateEmbeddedDraft) and then passing `custom_fields` on subsequent signature requests referencing that template.
   */
  custom_fields?: Array<SubCustomField>;
  editor_options?: SubEditorOptions;
  field_options?: SubFieldOptions;
  /**
   * @description Provide users the ability to review/edit the signers.
   */
  force_signer_page?: boolean;
  /**
   * @description Provide users the ability to review/edit the subject and message.
   */
  force_subject_message?: boolean;
  /**
   * @description Group information for fields defined in `form_fields_per_document`. String-indexed JSON array with `group_label` and `requirement` keys. `form_fields_per_document` must contain fields referencing a group defined in `form_field_groups`.
   */
  form_field_groups?: Array<SubFormFieldGroup>;
  /**
   * @description Conditional Logic rules for fields defined in `form_fields_per_document`.
   */
  form_field_rules?: Array<SubFormFieldRule>;
  /**
   * @description The fields that should appear on the document, expressed as an array of objects. (For more details you can read about it here: [Using Form Fields per Document](/docs/openapi/form-fields-per-document).)

  \*\*NOTE:\*\* Fields like \*\*text\*\*, \*\*dropdown\*\*, \*\*checkbox\*\*, \*\*radio\*\*, and \*\*hyperlink\*\* have additional required and optional parameters. Check out the list of [additional parameters](/api/reference/constants/#form-fields-per-document) for these field types.

  \* Text Field use `SubFormFieldsPerDocumentText`
  \* Dropdown Field use `SubFormFieldsPerDocumentDropdown`
  \* Hyperlink Field use `SubFormFieldsPerDocumentHyperlink`
  \* Checkbox Field use `SubFormFieldsPerDocumentCheckbox`
  \* Radio Field use `SubFormFieldsPerDocumentRadio`
  \* Signature Field use `SubFormFieldsPerDocumentSignature`
  \* Date Signed Field use `SubFormFieldsPerDocumentDateSigned`
  \* Initials Field use `SubFormFieldsPerDocumentInitials`
  \* Text Merge Field use `SubFormFieldsPerDocumentTextMerge`
  \* Checkbox Merge Field use `SubFormFieldsPerDocumentCheckboxMerge`
   */
  form_fields_per_document?: Array<SubFormFieldsPerDocumentBase>;
  /**
   * @description Send with a value of `true` if you wish to enable automatic Text Tag removal. Defaults to `false`. When using Text Tags it is preferred that you set this to `false` and hide your tags with white text or something similar because the automatic removal system can cause unwanted clipping. See the [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) walkthrough for more details.
   */
  hide_text_tags?: boolean;
  /**
   * @description The request from this draft will not automatically send to signers post-claim if set to `true`. Requester must [release](/api/reference/operation/signatureRequestReleaseHold/) the request from hold when ready to send. Defaults to `false`.
   */
  hold_request?: boolean;
  /**
   * @description The request created from this draft will also be signable in embedded mode if set to `true`. Defaults to `false`.
   */
  is_for_embedded_signing?: boolean;
  /**
   * @description The custom message in the email that will be sent to the signers.
   */
  message?: string;
  /**
   * @description Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer's order number for look up when receiving events for the signature request.

  Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long.
   */
  metadata?: Record<any, unknown>;
  /**
   * @description The email address of the user that should be designated as the requester of this draft, if the draft type is `request_signature`.
   */
  requester_email_address: string;
  /**
   * @description The URL you want signers redirected to after they successfully request a signature.
   */
  requesting_redirect_url?: string;
  /**
   * @description This allows the requester to enable the editor/preview experience.

  - `show_preview=true`: Allows requesters to enable the editor/preview experience.
  - `show_preview=false`: Allows requesters to disable the editor/preview experience.
   */
  show_preview?: boolean;
  /**
   * @description When only one step remains in the signature request process and this parameter is set to `false` then the progress stepper will be hidden.
   */
  show_progress_stepper?: boolean;
  /**
   * @description Add Signers to your Unclaimed Draft Signature Request.
   */
  signers?: Array<SubUnclaimedDraftSigner>;
  signing_options?: SubSigningOptions;
  /**
   * @description The URL you want signers redirected to after they successfully sign.
   */
  signing_redirect_url?: string;
  /**
   * @description Disables the "Me (Now)" option for the person preparing the document. Does not work with type `send_document`. Defaults to `false`.
   */
  skip_me_now?: boolean;
  /**
   * @description The subject in the email that will be sent to the signers.
   */
  subject?: string;
  /**
   * @description Whether this is a test, the signature request created from this draft will not be legally binding if set to `true`. Defaults to `false`.
   */
  test_mode?: boolean;
  /**
   * @description The type of the draft. By default this is `request_signature`, but you can set it to `send_document` if you want to self sign a document and download it.
   */
  type?: 'send_document' | 'request_signature';
  /**
   * @description Set `use_text_tags` to `true` to enable [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) parsing in your document (defaults to disabled, or `false`). Alternatively, if your PDF contains pre-defined fields, enable the detection of these fields by setting the `use_preexisting_fields` to `true` (defaults to disabled, or `false`). Currently we only support use of either `use_text_tags` or `use_preexisting_fields` parameter, not both.
   */
  use_preexisting_fields?: boolean;
  /**
   * @description Set `use_text_tags` to `true` to enable [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) parsing in your document (defaults to disabled, or `false`). Alternatively, if your PDF contains pre-defined fields, enable the detection of these fields by setting the `use_preexisting_fields` to `true` (defaults to disabled, or `false`). Currently we only support use of either `use_text_tags` or `use_preexisting_fields` parameter, not both.
   */
  use_text_tags?: boolean;
  /**
   * @description Controls whether [auto fill fields](https://faq.hellosign.com/hc/en-us/articles/360051467511-Auto-Fill-Fields) can automatically populate a signer's information during signing.

  \*\*NOTE:\*\* Keep your signer's information safe by ensuring that the _signer on your signature request is the intended party_ before using this feature.
   */
  populate_auto_fill_fields?: boolean;
  /**
   * @description When the signature request will expire. Unsigned signatures will be moved to the expired status, and no longer signable. See [Signature Request Expiration Date](https://developers.hellosign.com/docs/signature-request/expiration/) for details.

  \*\*NOTE:\*\* This does not correspond to the \*\*expires_at\*\* returned in the response.
   */
  expires_at?: number;
}

export type UnclaimedDraftCreateEmbeddedWithTemplateRequest = {
  /**
   * @description Allows signers to decline to sign a document if `true`. Defaults to `false`.
   */
  allow_decline?: boolean;
  /**
   * @description Allows signers to reassign their signature requests to other signers if set to `true`. Defaults to `false`.

  \*\*NOTE:\*\* Only available for Premium plan and higher.
   */
  allow_reassign?: boolean;
  /**
   * @description Add CC email recipients. Required when a CC role exists for the Template.
   */
  ccs?: Array<SubCC>;
  /**
   * @description Client id of the app used to create the draft. Used to apply the branding and callback url defined for the app.
   */
  client_id: string;
  /**
   * @description An array defining values and options for custom fields. Required when a custom field exists in the Template.
   */
  custom_fields?: Array<SubCustomField>;
  editor_options?: SubEditorOptions;
  field_options?: SubFieldOptions;
  /**
   * @description Use `files[]` to append additional files to the signature request being created from the template. Dropbox Sign will parse the files for [text tags](https://app.hellosign.com/api/textTagsWalkthrough) and append it to the signature request. Text tags for signers not on the template(s) will be ignored.

  \*\*files\*\* or \*\*file_urls[]\*\* is required, but not both.
   */
  files?: Array<Blob>;
  /**
   * @description Use file_urls[] to append additional files to the signature request being created from the template. Dropbox Sign will download the file, then parse it for [text tags](https://app.hellosign.com/api/textTagsWalkthrough), and append to the signature request. Text tags for signers not on the template(s) will be ignored.

  \*\*files\*\* or \*\*file_urls[]\*\* is required, but not both.
   */
  file_urls?: Array<string>;
  /**
   * @description Provide users the ability to review/edit the template signer roles.
   */
  force_signer_roles?: boolean;
  /**
   * @description Provide users the ability to review/edit the template subject and message.
   */
  force_subject_message?: boolean;
  /**
   * @description The request from this draft will not automatically send to signers post-claim if set to 1. Requester must [release](/api/reference/operation/signatureRequestReleaseHold/) the request from hold when ready to send. Defaults to `false`.
   */
  hold_request?: boolean;
  /**
   * @description The request created from this draft will also be signable in embedded mode if set to `true`. Defaults to `false`.
   */
  is_for_embedded_signing?: boolean;
  /**
   * @description The custom message in the email that will be sent to the signers.
   */
  message?: string;
  /**
   * @description Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer's order number for look up when receiving events for the signature request.

  Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long.
   */
  metadata?: Record<any, unknown>;
  /**
   * @description This allows the requester to enable the preview experience (i.e. does not allow the requester's end user to add any additional fields via the editor).

  - `preview_only=true`: Allows requesters to enable the preview only experience.
  - `preview_only=false`: Allows requesters to disable the preview only experience.

  \*\*NOTE:\*\* This parameter overwrites `show_preview=1` (if set).
   */
  preview_only?: boolean;
  /**
   * @description The email address of the user that should be designated as the requester of this draft.
   */
  requester_email_address: string;
  /**
   * @description The URL you want signers redirected to after they successfully request a signature.
   */
  requesting_redirect_url?: string;
  /**
   * @description This allows the requester to enable the editor/preview experience.

  - `show_preview=true`: Allows requesters to enable the editor/preview experience.
  - `show_preview=false`: Allows requesters to disable the editor/preview experience.
   */
  show_preview?: boolean;
  /**
   * @description When only one step remains in the signature request process and this parameter is set to `false` then the progress stepper will be hidden.
   */
  show_progress_stepper?: boolean;
  /**
   * @description Add Signers to your Templated-based Signature Request.
   */
  signers?: Array<SubUnclaimedDraftTemplateSigner>;
  signing_options?: SubSigningOptions;
  /**
   * @description The URL you want signers redirected to after they successfully sign.
   */
  signing_redirect_url?: string;
  /**
   * @description Disables the "Me (Now)" option for the person preparing the document. Does not work with type `send_document`. Defaults to `false`.
   */
  skip_me_now?: boolean;
  /**
   * @description The subject in the email that will be sent to the signers.
   */
  subject?: string;
  /**
   * @description Use `template_ids` to create a SignatureRequest from one or more templates, in the order in which the templates will be used.
   */
  template_ids: Array<string>;
  /**
   * @description Whether this is a test, the signature request created from this draft will not be legally binding if set to `true`. Defaults to `false`.
   */
  test_mode?: boolean;
  /**
   * @description The title you want to assign to the SignatureRequest.
   */
  title?: string;
  /**
   * @description Controls whether [auto fill fields](https://faq.hellosign.com/hc/en-us/articles/360051467511-Auto-Fill-Fields) can automatically populate a signer's information during signing.

  \*\*NOTE:\*\* Keep your signer's information safe by ensuring that the _signer on your signature request is the intended party_ before using this feature.
   */
  populate_auto_fill_fields?: boolean;
  /**
   * @description This allows the requester to specify whether the user is allowed to provide email addresses to CC when claiming the draft.
   */
  allow_ccs?: boolean;
}

export type UnclaimedDraftEditAndResendRequest = {
  /**
   * @description Client id of the app used to create the draft. Used to apply the branding and callback url defined for the app.
   */
  client_id: string;
  editor_options?: SubEditorOptions;
  /**
   * @description The request created from this draft will also be signable in embedded mode if set to `true`.
   */
  is_for_embedded_signing?: boolean;
  /**
   * @description The email address of the user that should be designated as the requester of this draft. If not set, original requester's email address will be used.
   */
  requester_email_address?: string;
  /**
   * @description The URL you want signers redirected to after they successfully request a signature.
   */
  requesting_redirect_url?: string;
  /**
   * @description When only one step remains in the signature request process and this parameter is set to `false` then the progress stepper will be hidden.
   */
  show_progress_stepper?: boolean;
  /**
   * @description The URL you want signers redirected to after they successfully sign.
   */
  signing_redirect_url?: string;
  /**
   * @description Whether this is a test, the signature request created from this draft will not be legally binding if set to `true`. Defaults to `false`.
   */
  test_mode?: boolean;
}

export type AccountCreateResponse = {
  account: AccountResponse;
  oauth_data?: OAuthTokenResponse;
  /**
   * @description A list of warnings.
   */
  warnings?: Array<WarningResponse>;
}

export type AccountGetResponse = {
  account: AccountResponse;
  /**
   * @description A list of warnings.
   */
  warnings?: Array<WarningResponse>;
}

export type AccountVerifyResponse = {
  account?: AccountVerifyResponseAccount;
  /**
   * @description A list of warnings.
   */
  warnings?: Array<WarningResponse>;
}

export type ApiAppGetResponse = {
  api_app: ApiAppResponse;
  /**
   * @description A list of warnings.
   */
  warnings?: Array<WarningResponse>;
}

export type ApiAppListResponse = {
  /**
   * @description Contains information about API Apps.
   */
  api_apps: Array<ApiAppResponse>;
  list_info: ListInfoResponse;
  /**
   * @description A list of warnings.
   */
  warnings?: Array<WarningResponse>;
}

export type BulkSendJobGetResponse = {
  bulk_send_job: BulkSendJobResponse;
  list_info: ListInfoResponse;
  /**
   * @description Contains information about the Signature Requests sent in bulk.
   */
  signature_requests: Array<BulkSendJobGetResponseSignatureRequests>;
  /**
   * @description A list of warnings.
   */
  warnings?: Array<WarningResponse>;
}

export type BulkSendJobListResponse = {
  /**
   * @description Contains a list of BulkSendJobs that the API caller has access to.
   */
  bulk_send_jobs: Array<BulkSendJobResponse>;
  list_info: ListInfoResponse;
  /**
   * @description A list of warnings.
   */
  warnings?: Array<WarningResponse>;
}

export type BulkSendJobSendResponse = {
  bulk_send_job: BulkSendJobResponse;
  /**
   * @description A list of warnings.
   */
  warnings?: Array<WarningResponse>;
}

export type EmbeddedEditUrlResponse = {
  embedded: EmbeddedEditUrlResponseEmbedded;
  /**
   * @description A list of warnings.
   */
  warnings?: Array<WarningResponse>;
}

export type EmbeddedSignUrlResponse = {
  embedded: EmbeddedSignUrlResponseEmbedded;
  /**
   * @description A list of warnings.
   */
  warnings?: Array<WarningResponse>;
}

export type ErrorResponse = {
  error: ErrorResponseError;
}

export type FaxGetResponse = {
  fax: FaxResponse;
  /**
   * @description A list of warnings.
   */
  warnings?: Array<WarningResponse>;
}

export type FaxLineResponse = {
  fax_line: FaxLineResponseFaxLine;
  warnings?: WarningResponse;
}

export type FaxLineAreaCodeGetResponse = {
  area_codes: Array<number>;
}

export type FaxLineListResponse = {
  list_info: ListInfoResponse;
  fax_lines: Array<FaxLineResponseFaxLine>;
  warnings?: WarningResponse;
}

export type FaxListResponse = {
  faxes: Array<FaxResponse>;
  list_info: ListInfoResponse;
}

export type FileResponse = {
  /**
   * @description URL to the file.
   */
  file_url: string;
  /**
   * @description When the link expires.
   */
  expires_at: number;
}

export type FileResponseDataUri = {
  /**
   * @description File as base64 encoded string.
   */
  data_uri: string;
}

export type ReportCreateResponse = {
  report: ReportResponse;
  /**
   * @description A list of warnings.
   */
  warnings?: Array<WarningResponse>;
}

export type SignatureRequestGetResponse = {
  signature_request: SignatureRequestResponse;
  /**
   * @description A list of warnings.
   */
  warnings?: Array<WarningResponse>;
}

export type SignatureRequestListResponse = {
  /**
   * @description Contains information about signature requests.
   */
  signature_requests: Array<SignatureRequestResponse>;
  list_info: ListInfoResponse;
  /**
   * @description A list of warnings.
   */
  warnings?: Array<WarningResponse>;
}

export type AccountResponse = {
  /**
   * @description The ID of the Account
   */
  account_id?: string;
  /**
   * @description The email address associated with the Account.
   */
  email_address?: string;
  /**
   * @description Returns `true` if the user has been locked out of their account by a team admin.
   */
  is_locked?: boolean;
  /**
   * @description Returns `true` if the user has a paid Dropbox Sign account.
   */
  is_paid_hs?: boolean;
  /**
   * @description Returns `true` if the user has a paid HelloFax account.
   */
  is_paid_hf?: boolean;
  quotas?: AccountResponseQuotas;
  /**
   * @description The URL that Dropbox Sign events will `POST` to.
   */
  callback_url?: string;
  /**
   * @description The membership role for the team.
   */
  role_code?: string;
  /**
   * @description The id of the team account belongs to.
   */
  team_id?: string;
  /**
   * @description The locale used in this Account. Check out the list of [supported locales](/api/reference/constants/#supported-locales) to learn more about the possible values.
   */
  locale?: string;
  usage?: AccountResponseUsage;
  settings?: AccountResponseSettings;
}

export type OAuthTokenResponse = {
  access_token?: string;
  token_type?: string;
  refresh_token?: string;
  /**
   * @description Number of seconds until the `access_token` expires. Uses epoch time.
   */
  expires_in?: number;
  state?: string;
}

/**
 * @description Details concerning remaining monthly quotas.
 */
export type AccountResponseQuotas = {
  /**
   * @description API signature requests remaining.
   */
  api_signature_requests_left?: number;
  /**
   * @description Signature requests remaining.
   */
  documents_left?: number;
  /**
   * @description Total API templates allowed.
   */
  templates_total?: number;
  /**
   * @description API templates remaining.
   */
  templates_left?: number;
  /**
   * @description SMS verifications remaining.
   */
  sms_verifications_left?: number;
  /**
   * @description Number of fax pages left
   */
  num_fax_pages_left?: number;
}

/**
 * @description Subset of configured settings
 */
export type AccountResponseSettings = {
  /**
   * @description Returns `true` if _Custom access codes_ is enabled in Admin Console. [Read more](https://developers.hellosign.com/docs/sms-tools/walkthrough).
   */
  signer_access_codes?: boolean;
  /**
   * @description Returns `true` if _Text message_ is enabled in Admin Console. [Read more](https://developers.hellosign.com/docs/sms-tools/walkthrough).
   */
  sms_delivery?: boolean;
  /**
   * @description Returns `true` if _Signer authentication_ is enabled in Admin Console. [Read more](https://developers.hellosign.com/docs/sms-tools/walkthrough).
   */
  sms_authentication?: boolean;
}

/**
 * @description Details concerning monthly usage
 */
export type AccountResponseUsage = {
  /**
   * @description Number of fax pages sent
   */
  fax_pages_sent?: number;
}

export type AccountVerifyResponseAccount = {
  /**
   * @description The email address associated with the Account.
   */
  email_address?: string;
}

/**
 * @description Contains information about an API App.
 */
export type ApiAppResponse = {
  /**
   * @description The app's callback URL (for events)
   */
  callback_url?: string;
  /**
   * @description The app's client id
   */
  client_id?: string;
  /**
   * @description The time that the app was created
   */
  created_at?: number;
  /**
   * @description The domain name(s) associated with the app
   */
  domains?: Array<string>;
  /**
   * @description The name of the app
   */
  name?: string;
  /**
   * @description Boolean to indicate if the app has been approved
   */
  is_approved?: boolean;
  oauth?: ApiAppResponseOAuth;
  options?: ApiAppResponseOptions;
  owner_account?: ApiAppResponseOwnerAccount;
  white_labeling_options?: ApiAppResponseWhiteLabelingOptions;
}

/**
 * @description An object describing the app's OAuth properties, or null if OAuth is not configured for the app.
 */
export type ApiAppResponseOAuth = {
  /**
   * @description The app's OAuth callback URL.
   */
  callback_url?: string;
  /**
   * @description The app's OAuth secret, or null if the app does not belong to user.
   */
  secret?: string;
  /**
   * @description Array of OAuth scopes used by the app.
   */
  scopes?: Array<string>;
  /**
   * @description Boolean indicating whether the app owner or the account granting permission is billed for OAuth requests.
   */
  charges_users?: boolean;
}

/**
 * @description An object with options that override account settings.
 */
export type ApiAppResponseOptions = {
  /**
   * @description Boolean denoting if signers can "Insert Everywhere" in one click while signing a document
   */
  can_insert_everywhere?: boolean;
}

/**
 * @description An object describing the app's owner
 */
export type ApiAppResponseOwnerAccount = {
  /**
   * @description The owner account's ID
   */
  account_id?: string;
  /**
   * @description The owner account's email address
   */
  email_address?: string;
}

/**
 * @description An object with options to customize the app's signer page
 */
export type ApiAppResponseWhiteLabelingOptions = {
  header_background_color?: string;
  legal_version?: string;
  link_color?: string;
  page_background_color?: string;
  primary_button_color?: string;
  primary_button_color_hover?: string;
  primary_button_text_color?: string;
  primary_button_text_color_hover?: string;
  secondary_button_color?: string;
  secondary_button_color_hover?: string;
  secondary_button_text_color?: string;
  secondary_button_text_color_hover?: string;
  text_color1?: string;
  text_color2?: string;
}

/**
 * @description Contains information about the BulkSendJob such as when it was created and how many signature requests are queued.
 */
export type BulkSendJobResponse = {
  /**
   * @description The id of the BulkSendJob.
   */
  bulk_send_job_id?: string;
  /**
   * @description The total amount of Signature Requests queued for sending.
   */
  total?: number;
  /**
   * @description True if you are the owner of this BulkSendJob, false if it's been shared with you by a team member.
   */
  is_creator?: boolean;
  /**
   * @description Time that the BulkSendJob was created.
   */
  created_at?: number;
}

export type BulkSendJobGetResponseSignatureRequests = any

/**
 * @description An embedded template object.
 */
export type EmbeddedEditUrlResponseEmbedded = {
  /**
   * @description A template url that can be opened in an iFrame.
   */
  edit_url?: string;
  /**
   * @description The specific time that the the `edit_url` link expires, in epoch.
   */
  expires_at?: number;
}

/**
 * @description An object that contains necessary information to set up embedded signing.
 */
export type EmbeddedSignUrlResponseEmbedded = {
  /**
   * @description A signature url that can be opened in an iFrame.
   */
  sign_url?: string;
  /**
   * @description The specific time that the the `sign_url` link expires, in epoch.
   */
  expires_at?: number;
}

/**
 * @description Contains information about an error that occurred.
 */
export type ErrorResponseError = {
  /**
   * @description Message describing an error.
   */
  error_msg: string;
  /**
   * @description Path at which an error occurred.
   */
  error_path?: string;
  /**
   * @description Name of the error. See the `x-error-codes` catalog in openapi file for a complete list of possible error codes with detailed information including HTTP status codes, causes, remediation steps, and retry guidance.
   */
  error_name: string;
}

export type FaxResponse = {
  /**
   * @description Fax ID
   */
  fax_id: string;
  /**
   * @description Fax Title
   */
  title: string;
  /**
   * @description Fax Original Title
   */
  original_title: string;
  /**
   * @description Fax Subject
   */
  subject?: string;
  /**
   * @description Fax Message
   */
  message?: string;
  /**
   * @description Fax Metadata
   */
  metadata: Record<any, unknown>;
  /**
   * @description Fax Created At Timestamp
   */
  created_at: number;
  /**
   * @description Fax Sender Email
   */
  sender: string;
  /**
   * @description Fax Files URL
   */
  files_url: string;
  /**
   * @description The path where the completed document can be downloaded
   */
  final_copy_uri?: string;
  /**
   * @description Fax Transmissions List
   */
  transmissions: Array<FaxResponseTransmission>;
}

export type FaxLineResponseFaxLine = {
  /**
   * @description Number
   */
  number?: string;
  /**
   * @description Created at
   */
  created_at?: number;
  /**
   * @description Updated at
   */
  updated_at?: number;
  accounts?: Array<AccountResponse>;
}

export type FaxResponseTransmission = {
  /**
   * @description Fax Transmission Recipient
   */
  recipient: string;
  /**
   * @description Fax Transmission Status Code
   */
  status_code: 'success' | 'transmitting' | 'error_could_not_fax' | 'error_unknown' | 'error_busy' | 'error_no_answer' | 'error_disconnected' | 'error_bad_destination';
  /**
   * @description Fax Transmission Sent Timestamp
   */
  sent_at?: number;
}

/**
 * @description Contains pagination information about the data returned.
 */
export type ListInfoResponse = {
  /**
   * @description Total number of pages available.
   */
  num_pages?: number;
  /**
   * @description Total number of objects available.
   */
  num_results?: number;
  /**
   * @description Number of the page being returned.
   */
  page?: number;
  /**
   * @description Objects returned per page.
   */
  page_size?: number;
}

/**
 * @description Contains information about the report request.
 */
export type ReportResponse = {
  /**
   * @description A message indicating the requested operation's success
   */
  success?: string;
  /**
   * @description The (inclusive) start date for the report data in MM/DD/YYYY format.
   */
  start_date?: string;
  /**
   * @description The (inclusive) end date for the report data in MM/DD/YYYY format.
   */
  end_date?: string;
  /**
   * @description The type(s) of the report you are requesting. Allowed values are "user_activity" and "document_status". User activity reports contain list of all users and their activity during the specified date range. Document status report contain a list of signature requests created in the specified time range (and their status).
   */
  report_type?: Array<'user_activity' | 'document_status' | 'sms_activity' | 'fax_usage'>;
}

/**
 * @description Contains information about a signature request.
 */
export type SignatureRequestResponse = {
  /**
   * @description Whether this is a test signature request. Test requests have no legal value. Defaults to `false`.
   */
  test_mode?: boolean;
  /**
   * @description The id of the SignatureRequest.
   */
  signature_request_id?: string;
  /**
   * @description The email address of the initiator of the SignatureRequest.
   */
  requester_email_address?: string;
  /**
   * @description The title the specified Account uses for the SignatureRequest.
   */
  title?: string;
  /**
   * @description Default Label for account.
   */
  original_title?: string;
  /**
   * @description The subject in the email that was initially sent to the signers.
   */
  subject?: string;
  /**
   * @description The custom message in the email that was initially sent to the signers.
   */
  message?: string;
  /**
   * @description The metadata attached to the signature request.
   */
  metadata?: Record<any, unknown>;
  /**
   * @description Time the signature request was created.
   */
  created_at?: number;
  /**
   * @description The time when the signature request will expire unsigned signatures. See [Signature Request Expiration Date](https://developers.hellosign.com/docs/signature-request/expiration/) for details.
   */
  expires_at?: number;
  /**
   * @description Whether or not the SignatureRequest has been fully executed by all signers.
   */
  is_complete?: boolean;
  /**
   * @description Whether or not the SignatureRequest has been declined by a signer.
   */
  is_declined?: boolean;
  /**
   * @description Whether or not an error occurred (either during the creation of the SignatureRequest or during one of the signings).
   */
  has_error?: boolean;
  /**
   * @description The URL where a copy of the request's documents can be downloaded.
   */
  files_url?: string;
  /**
   * @description The URL where a signer, after authenticating, can sign the documents. This should only be used by users with existing Dropbox Sign accounts as they will be required to log in before signing.
   */
  signing_url?: string;
  /**
   * @description The URL where the requester and the signers can view the current status of the SignatureRequest.
   */
  details_url?: string;
  /**
   * @description A list of email addresses that were CCed on the SignatureRequest. They will receive a copy of the final PDF once all the signers have signed.
   */
  cc_email_addresses?: Array<string>;
  /**
   * @description The URL you want the signer redirected to after they successfully sign.
   */
  signing_redirect_url?: string;
  /**
   * @description The path where the completed document can be downloaded
   */
  final_copy_uri?: string;
  /**
   * @description Templates IDs used in this SignatureRequest (if any).
   */
  template_ids?: Array<string>;
  /**
   * @description An array of Custom Field objects containing the name and type of each custom field.

  \* Text Field uses `SignatureRequestResponseCustomFieldText`
  \* Checkbox Field uses `SignatureRequestResponseCustomFieldCheckbox`
   */
  custom_fields?: Array<SignatureRequestResponseCustomFieldBase>;
  /**
   * @description Signer attachments.
   */
  attachments?: Array<SignatureRequestResponseAttachment>;
  /**
   * @description An array of form field objects containing the name, value, and type of each textbox or checkmark field filled in by the signers.
   */
  response_data?: Array<SignatureRequestResponseDataBase>;
  /**
   * @description An array of signature objects, 1 for each signer.
   */
  signatures?: Array<SignatureRequestResponseSignatures>;
  /**
   * @description The ID of the Bulk Send job which sent the signature request, if applicable.
   */
  bulk_send_job_id?: string;
}

/**
 * @description Signer attachments.
 */
export type SignatureRequestResponseAttachment = {
  /**
   * @description The unique ID for this attachment.
   */
  id: string;
  /**
   * @description The Signer this attachment is assigned to.
   */
  signer: string;
  /**
   * @description The name of this attachment.
   */
  name: string;
  /**
   * @description A boolean value denoting if this attachment is required.
   */
  required: boolean;
  /**
   * @description Instructions for Signer.
   */
  instructions?: string;
  /**
   * @description Timestamp when attachment was uploaded by Signer.
   */
  uploaded_at?: number;
}

/**
 * @description An array of Custom Field objects containing the name and type of each custom field.

\* Text Field uses `SignatureRequestResponseCustomFieldText`
\* Checkbox Field uses `SignatureRequestResponseCustomFieldCheckbox`
 */
export type SignatureRequestResponseCustomFieldBase = {
  /**
   * @description The type of this Custom Field. Only 'text' and 'checkbox' are currently supported.
   */
  type: string;
  /**
   * @description The name of the Custom Field.
   */
  name: string;
  /**
   * @description A boolean value denoting if this field is required.
   */
  required?: boolean;
  /**
   * @description The unique ID for this field.
   */
  api_id?: string;
  /**
   * @description The name of the Role that is able to edit this field.
   */
  editor?: string;
}

/**
 * @description This class extends `SignatureRequestResponseCustomFieldBase`.
 */
export type SignatureRequestResponseCustomFieldCheckbox = any

/**
 * @description This class extends `SignatureRequestResponseCustomFieldBase`.
 */
export type SignatureRequestResponseCustomFieldText = any

export type SignatureRequestResponseCustomFieldTypeEnum = 'text' | 'checkbox'

/**
 * @description An array of form field objects containing the name, value, and type of each textbox or checkmark field filled in by the signers.
 */
export type SignatureRequestResponseDataBase = {
  /**
   * @description The unique ID for this field.
   */
  api_id?: string;
  /**
   * @description The ID of the signature to which this response is linked.
   */
  signature_id?: string;
  /**
   * @description The name of the form field.
   */
  name?: string;
  /**
   * @description A boolean value denoting if this field is required.
   */
  required?: boolean;
  type?: string;
}

export type SignatureRequestResponseDataTypeEnum = 'text' | 'checkbox' | 'date_signed' | 'dropdown' | 'initials' | 'radio' | 'signature' | 'text-merge' | 'checkbox-merge'

export type SignatureRequestResponseDataValueCheckbox = any

export type SignatureRequestResponseDataValueCheckboxMerge = any

export type SignatureRequestResponseDataValueDateSigned = any

export type SignatureRequestResponseDataValueDropdown = any

export type SignatureRequestResponseDataValueInitials = any

export type SignatureRequestResponseDataValueRadio = any

export type SignatureRequestResponseDataValueSignature = any

export type SignatureRequestResponseDataValueText = any

export type SignatureRequestResponseDataValueTextMerge = any

/**
 * @description An array of signature objects, 1 for each signer.
 */
export type SignatureRequestResponseSignatures = {
  /**
   * @description Signature identifier.
   */
  signature_id?: string;
  /**
   * @description Signer Group GUID
   */
  signer_group_guid?: string;
  /**
   * @description The email address of the signer.
   */
  signer_email_address?: string;
  /**
   * @description The name of the signer.
   */
  signer_name?: string;
  /**
   * @description The role of the signer.
   */
  signer_role?: string;
  /**
   * @description If signer order is assigned this is the 0-based index for this signer.
   */
  order?: number;
  /**
   * @description The current status of the signature. eg: awaiting_signature, signed, declined.
   */
  status_code?: string;
  /**
   * @description The reason provided by the signer for declining the request.
   */
  decline_reason?: string;
  /**
   * @description Time that the document was signed or null.
   */
  signed_at?: number;
  /**
   * @description The time that the document was last viewed by this signer or null.
   */
  last_viewed_at?: number;
  /**
   * @description The time the last reminder email was sent to the signer or null.
   */
  last_reminded_at?: number;
  /**
   * @description Boolean to indicate whether this signature requires a PIN to access.
   */
  has_pin?: boolean;
  /**
   * @description Boolean to indicate whether this signature has SMS authentication enabled.
   */
  has_sms_auth?: boolean;
  /**
   * @description Boolean to indicate whether this signature has SMS delivery enabled.
   */
  has_sms_delivery?: boolean;
  /**
   * @description The SMS phone number used for authentication or signature request delivery.
   */
  sms_phone_number?: string;
  /**
   * @description Email address of original signer who reassigned to this signer.
   */
  reassigned_by?: string;
  /**
   * @description Reason provided by original signer who reassigned to this signer.
   */
  reassignment_reason?: string;
  /**
   * @description Previous signature identifier.
   */
  reassigned_from?: string;
  /**
   * @description Error message pertaining to this signer, or null.
   */
  error?: string;
}

/**
 * @description Configuration options for modifying the settings of the signer application. Supports changing the form view behavior.
 */
export type SignatureRequestSignerExperience = any

/**
 * @description Contains information about your team and its members
 */
export type TeamResponse = {
  /**
   * @description The name of your Team
   */
  name?: string;
  accounts?: Array<AccountResponse>;
  /**
   * @description A list of all Accounts that have an outstanding invitation to join your Team. Note that this response is a subset of the response parameters found in `GET /account`.
   */
  invited_accounts?: Array<AccountResponse>;
  /**
   * @description A list of email addresses that have an outstanding invitation to join your Team and do not yet have a Dropbox Sign account.
   */
  invited_emails?: Array<string>;
}

export type TeamInfoResponse = {
  /**
   * @description The id of a team
   */
  team_id?: string;
  team_parent?: TeamParentResponse;
  /**
   * @description The name of a team
   */
  name?: string;
  /**
   * @description Number of members within a team
   */
  num_members?: number;
  /**
   * @description Number of sub teams within a team
   */
  num_sub_teams?: number;
}

export type TeamInviteResponse = {
  /**
   * @description Email address of the user invited to this team.
   */
  email_address?: string;
  /**
   * @description Id of the team.
   */
  team_id?: string;
  /**
   * @description Role of the user invited to this team.
   */
  role?: string;
  /**
   * @description Timestamp when the invitation was sent.
   */
  sent_at?: number;
  /**
   * @description Timestamp when the invitation was redeemed.
   */
  redeemed_at?: number;
  /**
   * @description Timestamp when the invitation is expiring.
   */
  expires_at?: number;
}

export type TeamMemberResponse = {
  /**
   * @description Account id of the team member.
   */
  account_id?: string;
  /**
   * @description Email address of the team member.
   */
  email_address?: string;
  /**
   * @description The specific role a member has on the team.
   */
  role?: string;
}

/**
 * @description Information about the parent team if a team has one, set to `null` otherwise.
 */
export type TeamParentResponse = {
  /**
   * @description The id of a team
   */
  team_id?: string;
  /**
   * @description The name of a team
   */
  name?: string;
}

export type SubTeamResponse = {
  /**
   * @description The id of a team
   */
  team_id?: string;
  /**
   * @description The name of a team
   */
  name?: string;
}

/**
 * @description Contains information about the templates you and your team have created.
 */
export type TemplateResponse = {
  /**
   * @description The id of the Template.
   */
  template_id?: string;
  /**
   * @description The title of the Template. This will also be the default subject of the message sent to signers when using this Template to send a SignatureRequest. This can be overridden when sending the SignatureRequest.
   */
  title?: string;
  /**
   * @description The default message that will be sent to signers when using this Template to send a SignatureRequest. This can be overridden when sending the SignatureRequest.
   */
  message?: string;
  /**
   * @description Time the template was last updated.
   */
  updated_at?: number;
  /**
   * @description `true` if this template was created using an embedded flow, `false` if it was created on our website. Will be `null` when you are not the creator of the Template.
   */
  is_embedded?: boolean;
  /**
   * @description `true` if you are the owner of this template, `false` if it's been shared with you by a team member.
   */
  is_creator?: boolean;
  /**
   * @description Indicates whether edit rights have been granted to you by the owner (always `true` if that's you).
   */
  can_edit?: boolean;
  /**
   * @description Indicates whether the template is locked.
  If `true`, then the template was created outside your quota and can only be used in `test_mode`.
  If `false`, then the template is within your quota and can be used to create signature requests.
   */
  is_locked?: boolean;
  /**
   * @description The metadata attached to the template.
   */
  metadata?: Record<any, unknown>;
  /**
   * @description An array of the designated signer roles that must be specified when sending a SignatureRequest using this Template.
   */
  signer_roles?: Array<TemplateResponseSignerRole>;
  /**
   * @description An array of the designated CC roles that must be specified when sending a SignatureRequest using this Template.
   */
  cc_roles?: Array<TemplateResponseCCRole>;
  /**
   * @description An array describing each document associated with this Template. Includes form field data for each document.
   */
  documents?: Array<TemplateResponseDocument>;
  /**
   * @description Deprecated. Use `custom_fields` inside the [documents](https://developers.hellosign.com/api/reference/operation/templateGet/#!c=200&path=template/documents&t=response) array instead.
   */
  custom_fields?: Array<TemplateResponseDocumentCustomFieldBase>;
  /**
   * @description Deprecated. Use `form_fields` inside the [documents](https://developers.hellosign.com/api/reference/operation/templateGet/#!c=200&path=template/documents&t=response) array instead.
   */
  named_form_fields?: Array<TemplateResponseDocumentFormFieldBase>;
  /**
   * @description An array of the Accounts that can use this Template.
   */
  accounts?: Array<TemplateResponseAccount>;
  /**
   * @description Signer attachments.
   */
  attachments?: Array<SignatureRequestResponseAttachment>;
}

export type TemplateResponseAccount = {
  /**
   * @description The id of the Account.
   */
  account_id?: string;
  /**
   * @description The email address associated with the Account.
   */
  email_address?: string;
  /**
   * @description Returns `true` if the user has been locked out of their account by a team admin.
   */
  is_locked?: boolean;
  /**
   * @description Returns `true` if the user has a paid Dropbox Sign account.
   */
  is_paid_hs?: boolean;
  /**
   * @description Returns `true` if the user has a paid HelloFax account.
   */
  is_paid_hf?: boolean;
  quotas?: TemplateResponseAccountQuota;
}

/**
 * @description An array of the designated CC roles that must be specified when sending a SignatureRequest using this Template.
 */
export type TemplateResponseAccountQuota = {
  /**
   * @description API templates remaining.
   */
  templates_left?: number;
  /**
   * @description API signature requests remaining.
   */
  api_signature_requests_left?: number;
  /**
   * @description Signature requests remaining.
   */
  documents_left?: number;
  /**
   * @description SMS verifications remaining.
   */
  sms_verifications_left?: number;
}

export type TemplateResponseCCRole = {
  /**
   * @description The name of the Role.
   */
  name?: string;
}

/**
 * @description Template object with parameters: `template_id`, `edit_url`, `expires_at`.
 */
export type TemplateCreateEmbeddedDraftResponseTemplate = {
  /**
   * @description The id of the Template.
   */
  template_id?: string;
  /**
   * @description Link to edit the template.
   */
  edit_url?: string;
  /**
   * @description When the link expires.
   */
  expires_at?: number;
  /**
   * @description A list of warnings.
   */
  warnings?: Array<WarningResponse>;
}

/**
 * @description Template object with parameters: `template_id`.
 */
export type TemplateCreateResponseTemplate = {
  /**
   * @description The id of the Template.
   */
  template_id?: string;
}

export type TemplateResponseDocument = {
  /**
   * @description Name of the associated file.
   */
  name?: string;
  /**
   * @description Document ordering, the lowest index is displayed first and the highest last (0-based indexing).
   */
  index?: number;
  /**
   * @description An array of Form Field Group objects.
   */
  field_groups?: Array<TemplateResponseDocumentFieldGroup>;
  /**
   * @description An array of Form Field objects containing the name and type of each named field.
   */
  form_fields?: Array<TemplateResponseDocumentFormFieldBase>;
  /**
   * @description An array of Form Field objects containing the name and type of each named field.
   */
  custom_fields?: Array<TemplateResponseDocumentCustomFieldBase>;
  /**
   * @description An array describing static overlay fields. \*\*NOTE:\*\* Only available for certain subscriptions.
   */
  static_fields?: Array<TemplateResponseDocumentStaticFieldBase>;
}

/**
 * @description An array of Form Field objects containing the name and type of each named field.
 */
export type TemplateResponseDocumentCustomFieldBase = {
  /**
   * @description The unique ID for this field.
   */
  api_id?: string;
  /**
   * @description The name of the Custom Field.
   */
  name?: string;
  type: string;
  /**
   * @description The signer of the Custom Field. Can be `null` if field is a merge field (assigned to Sender).
   */
  signer?: string;
  /**
   * @description The horizontal offset in pixels for this form field.
   */
  x?: number;
  /**
   * @description The vertical offset in pixels for this form field.
   */
  y?: number;
  /**
   * @description The width in pixels of this form field.
   */
  width?: number;
  /**
   * @description The height in pixels of this form field.
   */
  height?: number;
  /**
   * @description Boolean showing whether or not this field is required.
   */
  required?: boolean;
  /**
   * @description The name of the group this field is in. If this field is not a group, this defaults to `null`.
   */
  group?: string;
}

/**
 * @description This class extends `TemplateResponseDocumentCustomFieldBase`
 */
export type TemplateResponseDocumentCustomFieldCheckbox = any

/**
 * @description This class extends `TemplateResponseDocumentCustomFieldBase`
 */
export type TemplateResponseDocumentCustomFieldText = any

export type TemplateResponseDocumentFieldGroup = {
  /**
   * @description The name of the form field group.
   */
  name?: string;
  rule?: TemplateResponseDocumentFieldGroupRule;
}

/**
 * @description The rule used to validate checkboxes in the form field group. See [checkbox field grouping](/api/reference/constants/#checkbox-field-grouping).
 */
export type TemplateResponseDocumentFieldGroupRule = {
  /**
   * @description Examples: `require_0-1` `require_1` `require_1-ormore`

  - Check out the list of [acceptable `requirement` checkbox type values](/api/reference/constants/#checkbox-field-grouping).
  - Check out the list of [acceptable `requirement` radio type fields](/api/reference/constants/#radio-field-grouping).
  - Radio groups require \*\*at least\*\* two fields per group.
   */
  requirement?: string;
  /**
   * @description Name of the group
   */
  groupLabel?: string;
}

/**
 * @description An array of Form Field objects containing the name and type of each named field.
 */
export type TemplateResponseDocumentFormFieldBase = {
  /**
   * @description A unique id for the form field.
   */
  api_id?: string;
  /**
   * @description The name of the form field.
   */
  name?: string;
  type: string;
  /**
   * @description The signer of the Form Field.
   */
  signer?: string;
  /**
   * @description The horizontal offset in pixels for this form field.
   */
  x?: number;
  /**
   * @description The vertical offset in pixels for this form field.
   */
  y?: number;
  /**
   * @description The width in pixels of this form field.
   */
  width?: number;
  /**
   * @description The height in pixels of this form field.
   */
  height?: number;
  /**
   * @description Boolean showing whether or not this field is required.
   */
  required?: boolean;
}

/**
 * @description This class extends `TemplateResponseDocumentFormFieldBase`
 */
export type TemplateResponseDocumentFormFieldCheckbox = any

/**
 * @description This class extends `TemplateResponseDocumentFormFieldBase`
 */
export type TemplateResponseDocumentFormFieldDateSigned = any

/**
 * @description This class extends `TemplateResponseDocumentFormFieldBase`
 */
export type TemplateResponseDocumentFormFieldDropdown = any

/**
 * @description This class extends `TemplateResponseDocumentFormFieldBase`
 */
export type TemplateResponseDocumentFormFieldHyperlink = any

/**
 * @description This class extends `TemplateResponseDocumentFormFieldBase`
 */
export type TemplateResponseDocumentFormFieldInitials = any

/**
 * @description This class extends `TemplateResponseDocumentFormFieldBase`
 */
export type TemplateResponseDocumentFormFieldRadio = any

/**
 * @description This class extends `TemplateResponseDocumentFormFieldBase`
 */
export type TemplateResponseDocumentFormFieldSignature = any

/**
 * @description This class extends `TemplateResponseDocumentFormFieldBase`
 */
export type TemplateResponseDocumentFormFieldText = any

/**
 * @description An array describing static overlay fields. \*\*NOTE:\*\* Only available for certain subscriptions.
 */
export type TemplateResponseDocumentStaticFieldBase = {
  /**
   * @description A unique id for the static field.
   */
  api_id?: string;
  /**
   * @description The name of the static field.
   */
  name?: string;
  type: string;
  /**
   * @description The signer of the Static Field.
   */
  signer?: string;
  /**
   * @description The horizontal offset in pixels for this static field.
   */
  x?: number;
  /**
   * @description The vertical offset in pixels for this static field.
   */
  y?: number;
  /**
   * @description The width in pixels of this static field.
   */
  width?: number;
  /**
   * @description The height in pixels of this static field.
   */
  height?: number;
  /**
   * @description Boolean showing whether or not this field is required.
   */
  required?: boolean;
  /**
   * @description The name of the group this field is in. If this field is not a group, this defaults to `null`.
   */
  group?: string;
}

/**
 * @description This class extends `TemplateResponseDocumentStaticFieldBase`
 */
export type TemplateResponseDocumentStaticFieldCheckbox = any

/**
 * @description This class extends `TemplateResponseDocumentStaticFieldBase`
 */
export type TemplateResponseDocumentStaticFieldDateSigned = any

/**
 * @description This class extends `TemplateResponseDocumentStaticFieldBase`
 */
export type TemplateResponseDocumentStaticFieldDropdown = any

/**
 * @description This class extends `TemplateResponseDocumentStaticFieldBase`
 */
export type TemplateResponseDocumentStaticFieldHyperlink = any

/**
 * @description This class extends `TemplateResponseDocumentStaticFieldBase`
 */
export type TemplateResponseDocumentStaticFieldInitials = any

/**
 * @description This class extends `TemplateResponseDocumentStaticFieldBase`
 */
export type TemplateResponseDocumentStaticFieldRadio = any

/**
 * @description This class extends `TemplateResponseDocumentStaticFieldBase`
 */
export type TemplateResponseDocumentStaticFieldSignature = any

/**
 * @description This class extends `TemplateResponseDocumentStaticFieldBase`
 */
export type TemplateResponseDocumentStaticFieldText = any

/**
 * @description Average text length in this field.
 */
export type TemplateResponseFieldAvgTextLength = {
  /**
   * @description Number of lines.
   */
  num_lines?: number;
  /**
   * @description Number of characters per line.
   */
  num_chars_per_line?: number;
}

export type TemplateResponseSignerRole = {
  /**
   * @description The name of the Role.
   */
  name?: string;
  /**
   * @description If signer order is assigned this is the 0-based index for this role.
   */
  order?: number;
}

/**
 * @description Contains template id
 */
export type TemplateUpdateFilesResponseTemplate = {
  /**
   * @description The id of the Template.
   */
  template_id?: string;
  /**
   * @description A list of warnings.
   */
  warnings?: Array<WarningResponse>;
}

/**
 * @description A group of documents that a user can take ownership of via the claim URL.
 */
export type UnclaimedDraftResponse = {
  /**
   * @description The ID of the signature request that is represented by this UnclaimedDraft.
   */
  signature_request_id?: string;
  /**
   * @description The URL to be used to claim this UnclaimedDraft.
   */
  claim_url?: string;
  /**
   * @description The URL you want signers redirected to after they successfully sign.
   */
  signing_redirect_url?: string;
  /**
   * @description The URL you want signers redirected to after they successfully request a signature (Will only be returned in the response if it is applicable to the request.).
   */
  requesting_redirect_url?: string;
  /**
   * @description When the link expires.
   */
  expires_at?: number;
  /**
   * @description Whether this is a test draft. Signature requests made from test drafts have no legal value.
   */
  test_mode?: boolean;
}

/**
 * @description A list of warnings.
 */
export type WarningResponse = {
  /**
   * @description Warning message
   */
  warning_msg: string;
  /**
   * @description Warning name
   */
  warning_name: string;
}

export type TeamGetResponse = {
  team: TeamResponse;
  /**
   * @description A list of warnings.
   */
  warnings?: Array<WarningResponse>;
}

export type TeamGetInfoResponse = {
  team: TeamInfoResponse;
  /**
   * @description A list of warnings.
   */
  warnings?: Array<WarningResponse>;
}

export type TeamInvitesResponse = {
  /**
   * @description Contains a list of team invites and their roles.
   */
  team_invites: Array<TeamInviteResponse>;
  warnings?: Array<WarningResponse>;
}

export type TeamMembersResponse = {
  /**
   * @description Contains a list of team members and their roles for a specific team.
   */
  team_members: Array<TeamMemberResponse>;
  list_info: ListInfoResponse;
  warnings?: Array<WarningResponse>;
}

export type TeamSubTeamsResponse = {
  /**
   * @description Contains a list with sub teams.
   */
  sub_teams: Array<SubTeamResponse>;
  list_info: ListInfoResponse;
  warnings?: Array<WarningResponse>;
}

export type TemplateCreateResponse = {
  template: TemplateCreateResponseTemplate;
  /**
   * @description A list of warnings.
   */
  warnings?: Array<WarningResponse>;
}

export type TemplateCreateEmbeddedDraftResponse = {
  template: TemplateCreateEmbeddedDraftResponseTemplate;
  /**
   * @description A list of warnings.
   */
  warnings?: Array<WarningResponse>;
}

export type TemplateGetResponse = {
  template: TemplateResponse;
  /**
   * @description A list of warnings.
   */
  warnings?: Array<WarningResponse>;
}

export type TemplateListResponse = {
  /**
   * @description List of templates that the API caller has access to.
   */
  templates: Array<TemplateResponse>;
  list_info: ListInfoResponse;
  /**
   * @description A list of warnings.
   */
  warnings?: Array<WarningResponse>;
}

export type TemplateUpdateFilesResponse = {
  template: TemplateUpdateFilesResponseTemplate;
}

export type UnclaimedDraftCreateResponse = {
  unclaimed_draft: UnclaimedDraftResponse;
  /**
   * @description A list of warnings.
   */
  warnings?: Array<WarningResponse>;
}

export type EventCallbackRequest = {
  event: EventCallbackRequestEvent;
  account?: AccountResponse;
  signature_request?: SignatureRequestResponse;
  template?: TemplateResponse;
}

/**
 * @description Basic information about the event that occurred.
 */
export type EventCallbackRequestEvent = {
  /**
   * @description Time the event was created (using Unix time).
   */
  event_time: string;
  /**
   * @description Type of callback event that was triggered.
   */
  event_type: 'account_confirmed' | 'unknown_error' | 'file_error' | 'sign_url_invalid' | 'signature_request_viewed' | 'signature_request_signed' | 'signature_request_sent' | 'signature_request_all_signed' | 'signature_request_email_bounce' | 'signature_request_remind' | 'signature_request_incomplete_qes' | 'signature_request_destroyed' | 'signature_request_canceled' | 'signature_request_downloadable' | 'signature_request_declined' | 'signature_request_reassigned' | 'signature_request_invalid' | 'signature_request_prepared' | 'signature_request_expired' | 'template_created' | 'template_error' | 'callback_test' | 'signature_request_signer_removed';
  /**
   * @description Generated hash used to verify source of event data.
   */
  event_hash: string;
  event_metadata?: EventCallbackRequestEventMetadata;
}

/**
 * @description Specific metadata about the event.
 */
export type EventCallbackRequestEventMetadata = {
  /**
   * @description Signature ID for a specific signer. Applicable to `signature_request_signed` and `signature_request_viewed` events.
   */
  related_signature_id?: string;
  /**
   * @description Account ID the event was reported for.
   */
  reported_for_account_id?: string;
  /**
   * @description App ID the event was reported for.
   */
  reported_for_app_id?: string;
  /**
   * @description Message about a declined or failed (due to error) signature flow.
   */
  event_message?: string;
}

/**
 * @title Signature Request Viewed Event
 */
export type EventCallbackSignatureRequestViewed = {
  event: any;
  signature_request?: SignatureRequestResponse;
}

/**
 * @title Signature Request Signed Event
 */
export type EventCallbackSignatureRequestSigned = {
  event: any;
  signature_request?: SignatureRequestResponse;
}

/**
 * @title Signature Request Signer Removed Event
 */
export type EventCallbackSignatureRequestSignerRemoved = {
  event: any;
  signature_request?: SignatureRequestResponse;
}

/**
 * @title Signature Request Downloadable Event
 */
export type EventCallbackSignatureRequestDownloadable = {
  event: any;
  signature_request?: SignatureRequestResponse;
}

/**
 * @title Signature Request Sent Event
 */
export type EventCallbackSignatureRequestSent = {
  event: any;
  signature_request?: SignatureRequestResponse;
}

/**
 * @title Signature Request All Signed Event
 */
export type EventCallbackSignatureRequestAllSigned = {
  event: any;
  signature_request?: SignatureRequestResponse;
}

/**
 * @title Signature Request Invalid Event
 */
export type EventCallbackSignatureRequestInvalid = {
  event: any;
  signature_request?: SignatureRequestResponse;
}

/**
 * @title Signature Request Email Bounce Event
 */
export type EventCallbackSignatureRequestEmailBounce = {
  event: any;
  signature_request?: SignatureRequestResponse;
}

/**
 * @title Signature Request Remind Event
 */
export type EventCallbackSignatureRequestRemind = {
  event: any;
  signature_request?: SignatureRequestResponse;
}

/**
 * @title Signature Request Incomplete QES Event
 */
export type EventCallbackSignatureRequestIncompleteQes = {
  event: any;
  signature_request?: SignatureRequestResponse;
}

/**
 * @title Signature Request Destroyed Event
 */
export type EventCallbackSignatureRequestDestroyed = {
  event: any;
  signature_request?: SignatureRequestResponse;
}

/**
 * @title Signature Request Canceled Event
 */
export type EventCallbackSignatureRequestCanceled = {
  event: any;
  signature_request?: SignatureRequestResponse;
}

/**
 * @title Signature Request Declined Event
 */
export type EventCallbackSignatureRequestDeclined = {
  event: any;
  signature_request?: SignatureRequestResponse;
}

/**
 * @title Signature Request Expired Event
 */
export type EventCallbackSignatureRequestExpired = {
  event: any;
  signature_request?: SignatureRequestResponse;
}

/**
 * @title Signature Request Reassigned Event
 */
export type EventCallbackSignatureRequestReassigned = {
  event: any;
  signature_request?: SignatureRequestResponse;
}

/**
 * @title Signature Request Prepared Event
 */
export type EventCallbackSignatureRequestPrepared = {
  event: any;
  signature_request?: SignatureRequestResponse;
}

/**
 * @title Account Confirmed Event
 */
export type EventCallbackAccountConfirmed = {
  event: any;
  account?: AccountResponse;
}

/**
 * @title Unknown Error Event
 */
export type EventCallbackUnknownError = {
  event: any;
  signature_request?: SignatureRequestResponse;
}

/**
 * @title File Error Event
 */
export type EventCallbackFileError = {
  event: any;
  signature_request?: SignatureRequestResponse;
}

/**
 * @title Template Created Event
 */
export type EventCallbackTemplateCreated = {
  event: any;
  template?: TemplateResponse;
}

/**
 * @title Template Error Event
 */
export type EventCallbackTemplateError = {
  event: any;
  template?: TemplateResponse;
}

/**
 * @title Sign URL Invalid Event
 */
export type EventCallbackSignUrlInvalid = {
  event: any;
  signature_request?: SignatureRequestResponse;
}

/**
 * @title Callback Test Event
 */
export type EventCallbackCallbackTest = {
  event: any;
}

/**
 * @title Event Callback Payload
 * @description JSON payload delivered for a webhook event. The concrete shape is selected by `event.event_type`.
 */
export type EventCallbackPayload = any