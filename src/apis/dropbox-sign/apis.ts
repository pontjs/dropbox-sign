/**
 * @author pontx-generator
 * @description API 类型定义
 */

import type * as schemas from './schemas';

// ============ account 模块 ============

export declare namespace account {
  export type AccountGetParams = {
    /**
     * @description `account_id` or `email_address` is required. If both are provided, the account id prevails.

    The ID of the Account.
     */
    account_id?: string;
    /**
     * @description `account_id` or `email_address` is required, If both are provided, the account id prevails.

    The email address of the Account.
     */
    email_address?: string;
  };

}

export type account = {
  /**
   * POST /account/create
   * Creates a new Dropbox Sign Account that is associated with the specified `email_address`.
   * @summary: Create Account
   */
  accountCreate: (
    body: schemas.AccountCreateRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.AccountCreateResponse>;

  /**
   * GET /account
   * Returns the properties and settings of your Account.
   * @summary: Get Account
   */
  accountGet: (
    params: account.AccountGetParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.AccountGetResponse>;

  /**
   * PUT /account
   * Updates the properties and settings of your Account. Currently only allows for updates to the [Callback URL](/api/reference/tag/Callbacks-and-Events) and locale.
   * @summary: Update Account
   */
  accountUpdate: (
    body: schemas.AccountUpdateRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.AccountGetResponse>;

  /**
   * POST /account/verify
   * Verifies whether an Dropbox Sign Account exists for the given email address.
   * @summary: Verify Account
   */
  accountVerify: (
    body: schemas.AccountVerifyRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.AccountVerifyResponse>;

};

// ============ signatureRequest 模块 ============

export declare namespace signatureRequest {
  export type SignatureRequestFilesParams = {
    /**
     * @description Set to `pdf` for a single merged document or `zip` for a collection of individual documents.
     */
    file_type?: 'pdf' | 'zip';
  };

  export type SignatureRequestFilesAsFileUrlParams = {
    /**
     * @description By default when opening the `file_url` a browser will download the PDF and save it locally. When set to `0` the PDF file will be displayed in the browser.
     */
    force_download?: number;
  };

  export type SignatureRequestListParams = {
    /**
     * @description Which account to return SignatureRequests for. Must be a team member. Use `all` to indicate all team members. Defaults to your account.
     */
    account_id?: string;
    /**
     * @description Which page number of the SignatureRequest List to return. Defaults to `1`.
     */
    page?: number;
    /**
     * @description Number of objects to be returned per page. Must be between `1` and `100`. Default is `20`.
     */
    page_size?: number;
    /**
     * @description String that includes search terms and/or fields to be used to filter the SignatureRequest objects.
     */
    query?: string;
  };

}

export type signatureRequest = {
  /**
   * POST /signature_request/bulk_create_embedded_with_template
   * Creates BulkSendJob which sends up to 250 SignatureRequests in bulk based off of the provided Template(s) specified with the `template_ids` parameter to be signed in an embedded iFrame. These embedded signature requests can only be signed in embedded iFrames whereas normal signature requests can only be signed on Dropbox Sign.
   * 
   * \*\*NOTE:\*\* Only available for Standard plan and higher.
   * @summary: Embedded Bulk Send with Template
   */
  signatureRequestBulkCreateEmbeddedWithTemplate: (
    body: schemas.SignatureRequestBulkCreateEmbeddedWithTemplateRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.BulkSendJobSendResponse>;

  /**
   * POST /signature_request/bulk_send_with_template
   * Creates BulkSendJob which sends up to 250 SignatureRequests in bulk based off of the provided Template(s) specified with the `template_ids` parameter.
   * 
   * \*\*NOTE:\*\* Only available for Standard plan and higher.
   * @summary: Bulk Send with Template
   */
  signatureRequestBulkSendWithTemplate: (
    body: schemas.SignatureRequestBulkSendWithTemplateRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.BulkSendJobSendResponse>;

  /**
   * POST /signature_request/cancel/{signature_request_id}
   * Cancels an incomplete signature request. This action is \*\*not reversible\*\*.
   * 
   * The request will be canceled and signers will no longer be able to sign. If they try to access the signature request they will receive a HTTP 410 status code indicating that the resource has been deleted. Cancelation is asynchronous and a successful call to this endpoint will return an empty 200 OK response if the signature request is eligible to be canceled and has been successfully queued.
   * 
   * This 200 OK response does not indicate a successful cancelation of the signature request itself. The cancelation is confirmed via the `signature_request_canceled` event. It is recommended that a [callback handler](/api/reference/tag/Callbacks-and-Events) be implemented to listen for the `signature_request_canceled` event. This callback will be sent only when the cancelation has completed successfully. If a callback handler has been configured and the event has not been received within 60 minutes of making the call, check the status of the request in the [API Dashboard](https://app.hellosign.com/apidashboard) and retry the cancelation if necessary.
   * 
   * To be eligible for cancelation, a signature request must have been sent successfully, must not yet have been signed by all signers, and you must either be the sender or own the API app under which it was sent. A partially signed signature request can be canceled.
   * 
   * \*\*NOTE:\*\* To remove your access to a completed signature request, use the endpoint: `POST /signature_request/remove/[:signature_request_id]`.
   * @summary: Cancel Incomplete Signature Request
   */
  signatureRequestCancel: (
    /**
     * @description The id of the incomplete SignatureRequest to cancel.
     */
    signature_request_id: string,
    requestInit?: RequestInit,
  ) => Promise<any>;

  /**
   * POST /signature_request/create_embedded
   * Creates a new SignatureRequest with the submitted documents to be signed in an embedded iFrame. If form_fields_per_document is not specified, a signature page will be affixed where all signers will be required to add their signature, signifying their agreement to all contained documents. Note that embedded signature requests can only be signed in embedded iFrames whereas normal signature requests can only be signed on Dropbox Sign.
   * @summary: Create Embedded Signature Request
   */
  signatureRequestCreateEmbedded: (
    body: schemas.SignatureRequestCreateEmbeddedRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.SignatureRequestGetResponse>;

  /**
   * POST /signature_request/create_embedded_with_template
   * Creates a new SignatureRequest based on the given Template(s) to be signed in an embedded iFrame. Note that embedded signature requests can only be signed in embedded iFrames whereas normal signature requests can only be signed on Dropbox Sign.
   * @summary: Create Embedded Signature Request with Template
   */
  signatureRequestCreateEmbeddedWithTemplate: (
    body: schemas.SignatureRequestCreateEmbeddedWithTemplateRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.SignatureRequestGetResponse>;

  /**
   * PUT /signature_request/edit/{signature_request_id}
   * Edits and sends a SignatureRequest with the submitted documents. If `form_fields_per_document` is not specified, a signature page will be affixed where all signers will be required to add their signature, signifying their agreement to all contained documents.
   * 
   * \*\*NOTE:\*\* Edit and resend \*will\* deduct your signature request quota.
   * @summary: Edit Signature Request
   */
  signatureRequestEdit: (
    /**
     * @description The id of the SignatureRequest to edit.
     */
    signature_request_id: string,
    body: schemas.SignatureRequestEditRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.SignatureRequestGetResponse>;

  /**
   * PUT /signature_request/edit_embedded/{signature_request_id}
   * Edits a SignatureRequest with the submitted documents to be signed in an embedded iFrame. If form_fields_per_document is not specified, a signature page will be affixed where all signers will be required to add their signature, signifying their agreement to all contained documents. Note that embedded signature requests can only be signed in embedded iFrames whereas normal signature requests can only be signed on Dropbox Sign.
   * 
   * \*\*NOTE:\*\* Edit and resend \*will\* deduct your signature request quota.
   * @summary: Edit Embedded Signature Request
   */
  signatureRequestEditEmbedded: (
    /**
     * @description The id of the SignatureRequest to edit.
     */
    signature_request_id: string,
    body: schemas.SignatureRequestEditEmbeddedRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.SignatureRequestGetResponse>;

  /**
   * PUT /signature_request/edit_embedded_with_template/{signature_request_id}
   * Edits a SignatureRequest based on the given Template(s) to be signed in an embedded iFrame. Note that embedded signature requests can only be signed in embedded iFrames whereas normal signature requests can only be signed on Dropbox Sign.
   * 
   * \*\*NOTE:\*\* Edit and resend \*will\* deduct your signature request quota.
   * @summary: Edit Embedded Signature Request with Template
   */
  signatureRequestEditEmbeddedWithTemplate: (
    /**
     * @description The id of the SignatureRequest to edit.
     */
    signature_request_id: string,
    body: schemas.SignatureRequestEditEmbeddedWithTemplateRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.SignatureRequestGetResponse>;

  /**
   * PUT /signature_request/edit_with_template/{signature_request_id}
   * Edits and sends a SignatureRequest based off of the Template(s) specified with the template_ids parameter.
   * 
   * \*\*NOTE:\*\* Edit and resend \*will\* deduct your signature request quota.
   * @summary: Edit Signature Request With Template
   */
  signatureRequestEditWithTemplate: (
    /**
     * @description The id of the SignatureRequest to edit.
     */
    signature_request_id: string,
    body: schemas.SignatureRequestEditWithTemplateRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.SignatureRequestGetResponse>;

  /**
   * GET /signature_request/files/{signature_request_id}
   * Obtain a copy of the current documents specified by the `signature_request_id` parameter. Returns a PDF or ZIP file.
   * 
   * If the files are currently being prepared, a status code of `409` will be returned instead.
   * @summary: Download Files
   */
  signatureRequestFiles: (
    /**
     * @description The id of the SignatureRequest to retrieve.
     */
    signature_request_id: string,
    params: signatureRequest.SignatureRequestFilesParams,
    requestInit?: RequestInit,
  ) => Promise<Blob>;

  /**
   * GET /signature_request/files_as_data_uri/{signature_request_id}
   * Obtain a copy of the current documents specified by the `signature_request_id` parameter. Returns a JSON object with a `data_uri` representing the base64 encoded file (PDFs only).
   * 
   * If the files are currently being prepared, a status code of `409` will be returned instead.
   * @summary: Download Files as Data Uri
   */
  signatureRequestFilesAsDataUri: (
    /**
     * @description The id of the SignatureRequest to retrieve.
     */
    signature_request_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.FileResponseDataUri>;

  /**
   * GET /signature_request/files_as_file_url/{signature_request_id}
   * Obtain a copy of the current documents specified by the `signature_request_id` parameter. Returns a JSON object with a url to the file (PDFs only).
   * 
   * If the files are currently being prepared, a status code of `409` will be returned instead.
   * @summary: Download Files as File Url
   */
  signatureRequestFilesAsFileUrl: (
    /**
     * @description The id of the SignatureRequest to retrieve.
     */
    signature_request_id: string,
    params: signatureRequest.SignatureRequestFilesAsFileUrlParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.FileResponse>;

  /**
   * GET /signature_request/{signature_request_id}
   * Returns the status of the SignatureRequest specified by the `signature_request_id` parameter.
   * @summary: Get Signature Request
   */
  signatureRequestGet: (
    /**
     * @description The id of the SignatureRequest to retrieve.
     */
    signature_request_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.SignatureRequestGetResponse>;

  /**
   * GET /signature_request/list
   * Returns a list of SignatureRequests that you can access. This includes SignatureRequests you have sent as well as received, but not ones that you have been CCed on.
   * 
   * Take a look at our [search guide](/api/reference/search/) to learn more about querying signature requests.
   * @summary: List Signature Requests
   */
  signatureRequestList: (
    params: signatureRequest.SignatureRequestListParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.SignatureRequestListResponse>;

  /**
   * POST /signature_request/release_hold/{signature_request_id}
   * Releases a held SignatureRequest that was claimed and prepared from an [UnclaimedDraft](/api/reference/tag/Unclaimed-Draft). The owner of the Draft must indicate at Draft creation that the SignatureRequest created from the Draft should be held. Releasing the SignatureRequest will send requests to all signers.
   * @summary: Release On-Hold Signature Request
   */
  signatureRequestReleaseHold: (
    /**
     * @description The id of the SignatureRequest to release.
     */
    signature_request_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.SignatureRequestGetResponse>;

  /**
   * POST /signature_request/remind/{signature_request_id}
   * Sends an email to the signer reminding them to sign the signature request. You cannot send a reminder within 1 hour of the last reminder that was sent. This includes manual AND automatic reminders.
   * 
   * \*\*NOTE:\*\* This action can \*\*not\*\* be used with embedded signature requests.
   * @summary: Send Request Reminder
   */
  signatureRequestRemind: (
    /**
     * @description The id of the SignatureRequest to send a reminder for.
     */
    signature_request_id: string,
    body: schemas.SignatureRequestRemindRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.SignatureRequestGetResponse>;

  /**
   * POST /signature_request/remove/{signature_request_id}
   * Removes your access to a completed signature request. This action is \*\*not reversible\*\*.
   * 
   * The signature request must be fully executed by all parties (signed or declined to sign). Other parties will continue to maintain access to the completed signature request document(s).
   * 
   * Unlike /signature_request/cancel, this endpoint is synchronous and your access will be immediately removed. Upon successful removal, this endpoint will return a 200 OK response.
   * @summary: Remove Signature Request Access
   */
  signatureRequestRemove: (
    /**
     * @description The id of the SignatureRequest to remove.
     */
    signature_request_id: string,
    requestInit?: RequestInit,
  ) => Promise<any>;

  /**
   * POST /signature_request/send
   * Creates and sends a new SignatureRequest with the submitted documents. If `form_fields_per_document` is not specified, a signature page will be affixed where all signers will be required to add their signature, signifying their agreement to all contained documents.
   * @summary: Send Signature Request
   */
  signatureRequestSend: (
    body: schemas.SignatureRequestSendRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.SignatureRequestGetResponse>;

  /**
   * POST /signature_request/send_with_template
   * Creates and sends a new SignatureRequest based off of the Template(s) specified with the `template_ids` parameter.
   * @summary: Send with Template
   */
  signatureRequestSendWithTemplate: (
    body: schemas.SignatureRequestSendWithTemplateRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.SignatureRequestGetResponse>;

  /**
   * POST /signature_request/update/{signature_request_id}
   * Updates the email address and/or the name for a given signer on a signature request. You can listen for the `signature_request_email_bounce` event on your app or account to detect bounced emails, and respond with this method.
   * 
   * Updating the email address of a signer will generate a new `signature_id` value.
   * 
   * \*\*NOTE:\*\* This action cannot be performed on a signature request with an appended signature page.
   * @summary: Update Signature Request
   */
  signatureRequestUpdate: (
    /**
     * @description The id of the SignatureRequest to update.
     */
    signature_request_id: string,
    body: schemas.SignatureRequestUpdateRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.SignatureRequestGetResponse>;

};

// ============ template 模块 ============

export declare namespace template {
  export type TemplateFilesParams = {
    /**
     * @description Set to `pdf` for a single merged document or `zip` for a collection of individual documents.
     */
    file_type?: 'pdf' | 'zip';
  };

  export type TemplateFilesAsFileUrlParams = {
    /**
     * @description By default when opening the `file_url` a browser will download the PDF and save it locally. When set to `0` the PDF file will be displayed in the browser.
     */
    force_download?: number;
  };

  export type TemplateListParams = {
    /**
     * @description Which account to return Templates for. Must be a team member. Use `all` to indicate all team members. Defaults to your account.
     */
    account_id?: string;
    /**
     * @description Which page number of the Template List to return. Defaults to `1`.
     */
    page?: number;
    /**
     * @description Number of objects to be returned per page. Must be between `1` and `100`. Default is `20`.
     */
    page_size?: number;
    /**
     * @description String that includes search terms and/or fields to be used to filter the Template objects.
     */
    query?: string;
  };

}

export type template = {
  /**
   * POST /template/add_user/{template_id}
   * Gives the specified Account access to the specified Template. The specified Account must be a part of your Team.
   * @summary: Add User to Template
   */
  templateAddUser: (
    /**
     * @description The id of the Template to give the Account access to.
     */
    template_id: string,
    body: schemas.TemplateAddUserRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.TemplateGetResponse>;

  /**
   * POST /template/create
   * Creates a template that can be used in future signature requests.
   * 
   * If `client_id` is provided, the template will be created as an embedded template. Embedded templates can be used for embedded signature requests and can be edited later by generating a new `edit_url` with [/embedded/edit_url/{template_id}](/api/reference/operation/embeddedEditUrl/).
   * 
   * Template creation may complete asynchronously after the initial request is accepted. It is recommended that a callback be implemented to listen for the callback event. A `template_created` event indicates the template is ready to use, while a `template_error` event indicates there was a problem while creating the template. If a callback handler has been configured and the event has not been received within 60 minutes of making the call, check the status of the request in the API dashboard and retry the request if necessary.
   * @summary: Create Template
   */
  templateCreate: (
    body: schemas.TemplateCreateRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.TemplateCreateResponse>;

  /**
   * POST /template/create_embedded_draft
   * The first step in an embedded template workflow. Creates a draft template that can then be further set up in the template 'edit' stage.
   * @summary: Create Embedded Template Draft
   */
  templateCreateEmbeddedDraft: (
    body: schemas.TemplateCreateEmbeddedDraftRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.TemplateCreateEmbeddedDraftResponse>;

  /**
   * POST /template/delete/{template_id}
   * Completely deletes the template specified from the account.
   * @summary: Delete Template
   */
  templateDelete: (
    /**
     * @description The id of the Template to delete.
     */
    template_id: string,
    requestInit?: RequestInit,
  ) => Promise<any>;

  /**
   * GET /template/files/{template_id}
   * Obtain a copy of the current documents specified by the `template_id` parameter. Returns a PDF or ZIP file.
   * 
   * If the files are currently being prepared, a status code of `409` will be returned instead. In this case please wait for the `template_created` callback event.
   * @summary: Get Template Files
   */
  templateFiles: (
    /**
     * @description The id of the template files to retrieve.
     */
    template_id: string,
    params: template.TemplateFilesParams,
    requestInit?: RequestInit,
  ) => Promise<Blob>;

  /**
   * GET /template/files_as_data_uri/{template_id}
   * Obtain a copy of the current documents specified by the `template_id` parameter. Returns a JSON object with a `data_uri` representing the base64 encoded file (PDFs only).
   * 
   * If the files are currently being prepared, a status code of `409` will be returned instead. In this case please wait for the `template_created` callback event.
   * @summary: Get Template Files as Data Uri
   */
  templateFilesAsDataUri: (
    /**
     * @description The id of the template files to retrieve.
     */
    template_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.FileResponseDataUri>;

  /**
   * GET /template/files_as_file_url/{template_id}
   * Obtain a copy of the current documents specified by the `template_id` parameter. Returns a JSON object with a url to the file (PDFs only).
   * 
   * If the files are currently being prepared, a status code of `409` will be returned instead. In this case please wait for the `template_created` callback event.
   * @summary: Get Template Files as File Url
   */
  templateFilesAsFileUrl: (
    /**
     * @description The id of the template files to retrieve.
     */
    template_id: string,
    params: template.TemplateFilesAsFileUrlParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.FileResponse>;

  /**
   * GET /template/{template_id}
   * Returns the Template specified by the `template_id` parameter.
   * @summary: Get Template
   */
  templateGet: (
    /**
     * @description The id of the Template to retrieve.
     */
    template_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.TemplateGetResponse>;

  /**
   * GET /template/list
   * Returns a list of the Templates that are accessible by you.
   * 
   * Take a look at our [search guide](/api/reference/search/) to learn more about querying templates.
   * @summary: List Templates
   */
  templateList: (
    params: template.TemplateListParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.TemplateListResponse>;

  /**
   * POST /template/remove_user/{template_id}
   * Removes the specified Account's access to the specified Template.
   * @summary: Remove User from Template
   */
  templateRemoveUser: (
    /**
     * @description The id of the Template to remove the Account's access to.
     */
    template_id: string,
    body: schemas.TemplateRemoveUserRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.TemplateGetResponse>;

  /**
   * POST /template/update_files/{template_id}
   * Overlays a new file with the overlay of an existing template. The new file(s) must:
   * 
   * 1. have the same or higher page count
   * 2. the same orientation as the file(s) being replaced.
   * 
   * This will not overwrite or in any way affect the existing template. Both the existing template and new template will be available for use after executing this endpoint. Also note that this will decrement your template quota.
   * 
   * Overlaying new files is asynchronous and a successful call to this endpoint will return 200 OK response if the request passes initial validation checks.
   * 
   * It is recommended that a callback be implemented to listen for the callback event. A `template_created` event will be sent when the files are updated or a `template_error` event will be sent if there was a problem while updating the files. If a callback handler has been configured and the event has not been received within 60 minutes of making the call, check the status of the request in the API dashboard and retry the request if necessary.
   * 
   * If the page orientation or page count is different from the original template document, we will notify you with a `template_error` [callback event](https://app.hellosign.com/api/eventsAndCallbacksWalkthrough).
   * @summary: Update Template Files
   */
  templateUpdateFiles: (
    /**
     * @description The ID of the template whose files to update.
     */
    template_id: string,
    body: schemas.TemplateUpdateFilesRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.TemplateUpdateFilesResponse>;

};

// ============ bulkSendJob 模块 ============

export declare namespace bulkSendJob {
  export type BulkSendJobGetParams = {
    /**
     * @description Which page number of the BulkSendJob list to return. Defaults to `1`.
     */
    page?: number;
    /**
     * @description Number of objects to be returned per page. Must be between `1` and `100`. Default is 20.
     */
    page_size?: number;
  };

  export type BulkSendJobListParams = {
    /**
     * @description Which page number of the BulkSendJob List to return. Defaults to `1`.
     */
    page?: number;
    /**
     * @description Number of objects to be returned per page. Must be between `1` and `100`. Default is 20.
     */
    page_size?: number;
  };

}

export type bulkSendJob = {
  /**
   * GET /bulk_send_job/{bulk_send_job_id}
   * Returns the status of the BulkSendJob and its SignatureRequests specified by the `bulk_send_job_id` parameter.
   * @summary: Get Bulk Send Job
   */
  bulkSendJobGet: (
    /**
     * @description The id of the BulkSendJob to retrieve.
     */
    bulk_send_job_id: string,
    params: bulkSendJob.BulkSendJobGetParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.BulkSendJobGetResponse>;

  /**
   * GET /bulk_send_job/list
   * Returns a list of BulkSendJob that you can access.
   * @summary: List Bulk Send Jobs
   */
  bulkSendJobList: (
    params: bulkSendJob.BulkSendJobListParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.BulkSendJobListResponse>;

};

// ============ report 模块 ============

export type report = {
  /**
   * POST /report/create
   * Request the creation of one or more report(s).
   * 
   * When the report(s) have been generated, you will receive an email (one per requested report type) containing a link to download the report as a CSV file. The requested date range may be up to 12 months in duration, and `start_date` must not be more than 10 years in the past.
   * @summary: Create Report
   */
  reportCreate: (
    body: schemas.ReportCreateRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.ReportCreateResponse>;

};

// ============ team 模块 ============

export declare namespace team {
  export type TeamAddMemberParams = {
    /**
     * @description The id of the team.
     */
    team_id?: string;
  };

  export type TeamInfoParams = {
    /**
     * @description The id of the team.
     */
    team_id?: string;
  };

  export type TeamInvitesParams = {
    /**
     * @description The email address for which to display the team invites.
     */
    email_address?: string;
  };

  export type TeamMembersParams = {
    /**
     * @description Which page number of the team member list to return. Defaults to `1`.
     */
    page?: number;
    /**
     * @description Number of objects to be returned per page. Must be between `1` and `100`. Default is `20`.
     */
    page_size?: number;
  };

  export type TeamSubTeamsParams = {
    /**
     * @description Which page number of the SubTeam List to return. Defaults to `1`.
     */
    page?: number;
    /**
     * @description Number of objects to be returned per page. Must be between `1` and `100`. Default is `20`.
     */
    page_size?: number;
  };

}

export type team = {
  /**
   * PUT /team/add_member
   * Invites a user (specified using the `email_address` parameter) to your Team. If the user does not currently have a Dropbox Sign Account, a new one will be created for them. If a user is already a part of another Team, a `team_invite_failed` error will be returned.
   * @summary: Add User to Team
   */
  teamAddMember: (
    params: team.TeamAddMemberParams,
    body: schemas.TeamAddMemberRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.TeamGetResponse>;

  /**
   * POST /team/create
   * Creates a new Team and makes you a member. You must not currently belong to a Team to invoke.
   * @summary: Create Team
   */
  teamCreate: (
    body: schemas.TeamCreateRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.TeamGetResponse>;

  /**
   * DELETE /team/destroy
   * Deletes your Team. Can only be invoked when you have a Team with only one member (yourself).
   * @summary: Delete Team
   */
  teamDelete: (
    requestInit?: RequestInit,
  ) => Promise<any>;

  /**
   * GET /team
   * Returns information about your Team as well as a list of its members. If you do not belong to a Team, a 404 error with an error_name of "not_found" will be returned.
   * @summary: Get Team
   */
  teamGet: (
    requestInit?: RequestInit,
  ) => Promise<schemas.TeamGetResponse>;

  /**
   * PUT /team
   * Updates the name of your Team.
   * @summary: Update Team
   */
  teamUpdate: (
    body: schemas.TeamUpdateRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.TeamGetResponse>;

  /**
   * GET /team/info
   * Provides information about a team.
   * @summary: Get Team Info
   */
  teamInfo: (
    params: team.TeamInfoParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.TeamGetInfoResponse>;

  /**
   * GET /team/invites
   * Provides a list of team invites (and their roles).
   * @summary: List Team Invites
   */
  teamInvites: (
    params: team.TeamInvitesParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.TeamInvitesResponse>;

  /**
   * GET /team/members/{team_id}
   * Provides a paginated list of members (and their roles) that belong to a given team.
   * @summary: List Team Members
   */
  teamMembers: (
    /**
     * @description The id of the team that a member list is being requested from.
     */
    team_id: string,
    params: team.TeamMembersParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.TeamMembersResponse>;

  /**
   * POST /team/remove_member
   * Removes the provided user Account from your Team. If the Account had an outstanding invitation to your Team, the invitation will be expired. If you choose to transfer documents from the removed Account to an Account provided in the `new_owner_email_address` parameter (available only for Enterprise plans), the response status code will be 201, which indicates that your request has been queued but not fully executed.
   * @summary: Remove User from Team
   */
  teamRemoveMember: (
    body: schemas.TeamRemoveMemberRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.TeamGetResponse>;

  /**
   * GET /team/sub_teams/{team_id}
   * Provides a paginated list of sub teams that belong to a given team.
   * @summary: List Sub Teams
   */
  teamSubTeams: (
    /**
     * @description The id of the parent Team.
     */
    team_id: string,
    params: team.TeamSubTeamsParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.TeamSubTeamsResponse>;

};

// ============ unclaimedDraft 模块 ============

export type unclaimedDraft = {
  /**
   * POST /unclaimed_draft/create
   * Creates a new Draft that can be claimed using the claim URL. The first authenticated user to access the URL will claim the Draft and will be shown either the "Sign and send" or the "Request signature" page with the Draft loaded. Subsequent access to the claim URL will result in a 404.
   * @summary: Create Unclaimed Draft
   */
  unclaimedDraftCreate: (
    body: schemas.UnclaimedDraftCreateRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.UnclaimedDraftCreateResponse>;

  /**
   * POST /unclaimed_draft/create_embedded
   * Creates a new Draft that can be claimed and used in an embedded iFrame. The first authenticated user to access the URL will claim the Draft and will be shown the "Request signature" page with the Draft loaded. Subsequent access to the claim URL will result in a `404`. For this embedded endpoint the `requester_email_address` parameter is required.
   * 
   * \*\*NOTE:\*\* Embedded unclaimed drafts can only be accessed in embedded iFrames whereas normal drafts can be used and accessed on Dropbox Sign.
   * @summary: Create Embedded Unclaimed Draft
   */
  unclaimedDraftCreateEmbedded: (
    body: schemas.UnclaimedDraftCreateEmbeddedRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.UnclaimedDraftCreateResponse>;

  /**
   * POST /unclaimed_draft/create_embedded_with_template
   * Creates a new Draft with a previously saved template(s) that can be claimed and used in an embedded iFrame. The first authenticated user to access the URL will claim the Draft and will be shown the "Request signature" page with the Draft loaded. Subsequent access to the claim URL will result in a `404`. For this embedded endpoint the `requester_email_address` parameter is required.
   * 
   * \*\*NOTE:\*\* Embedded unclaimed drafts can only be accessed in embedded iFrames whereas normal drafts can be used and accessed on Dropbox Sign.
   * @summary: Create Embedded Unclaimed Draft with Template
   */
  unclaimedDraftCreateEmbeddedWithTemplate: (
    body: schemas.UnclaimedDraftCreateEmbeddedWithTemplateRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.UnclaimedDraftCreateResponse>;

  /**
   * POST /unclaimed_draft/edit_and_resend/{signature_request_id}
   * Creates a new signature request from an embedded request that can be edited prior to being sent to the recipients. Parameter `test_mode` can be edited prior to request. Signers can be edited in embedded editor. Requester's email address will remain unchanged if `requester_email_address` parameter is not set.
   * 
   * \*\*NOTE:\*\* Embedded unclaimed drafts can only be accessed in embedded iFrames whereas normal drafts can be used and accessed on Dropbox Sign.
   * @summary: Edit and Resend Unclaimed Draft
   */
  unclaimedDraftEditAndResend: (
    /**
     * @description The ID of the signature request to edit and resend.
     */
    signature_request_id: string,
    body: schemas.UnclaimedDraftEditAndResendRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.UnclaimedDraftCreateResponse>;

};

// ============ embedded 模块 ============

export type embedded = {
  /**
   * POST /embedded/edit_url/{template_id}
   * Retrieves an embedded object containing a template url that can be opened in an iFrame. Note that only templates created via the embedded template process are available to be edited with this endpoint.
   * @summary: Get Embedded Template Edit URL
   */
  embeddedEditUrl: (
    /**
     * @description The id of the template to edit.
     */
    template_id: string,
    body: schemas.EmbeddedEditUrlRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.EmbeddedEditUrlResponse>;

  /**
   * GET /embedded/sign_url/{signature_id}
   * Retrieves an embedded object containing a signature url that can be opened in an iFrame. Note that templates created via the embedded template process will only be accessible through the API.
   * @summary: Get Embedded Sign URL
   */
  embeddedSignUrl: (
    /**
     * @description The id of the signature to get a signature url for.
     */
    signature_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.EmbeddedSignUrlResponse>;

};

// ============ apiApp 模块 ============

export declare namespace apiApp {
  export type ApiAppListParams = {
    /**
     * @description Which page number of the API App List to return. Defaults to `1`.
     */
    page?: number;
    /**
     * @description Number of objects to be returned per page. Must be between `1` and `100`. Default is `20`.
     */
    page_size?: number;
  };

}

export type apiApp = {
  /**
   * POST /api_app
   * Creates a new API App.
   * @summary: Create API App
   */
  apiAppCreate: (
    body: schemas.ApiAppCreateRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.ApiAppGetResponse>;

  /**
   * GET /api_app/{client_id}
   * Returns an object with information about an API App.
   * @summary: Get API App
   */
  apiAppGet: (
    /**
     * @description The client id of the API App to retrieve.
     */
    client_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.ApiAppGetResponse>;

  /**
   * DELETE /api_app/{client_id}
   * Deletes an API App. Can only be invoked for apps you own.
   * @summary: Delete API App
   */
  apiAppDelete: (
    /**
     * @description The client id of the API App to delete.
     */
    client_id: string,
    requestInit?: RequestInit,
  ) => Promise<any>;

  /**
   * PUT /api_app/{client_id}
   * Updates an existing API App. Can only be invoked for apps you own. Only the fields you provide will be updated. If you wish to clear an existing optional field, provide an empty string.
   * @summary: Update API App
   */
  apiAppUpdate: (
    /**
     * @description The client id of the API App to update.
     */
    client_id: string,
    body: schemas.ApiAppUpdateRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.ApiAppGetResponse>;

  /**
   * GET /api_app/list
   * Returns a list of API Apps that are accessible by you. If you are on a team with an Admin or Developer role, this list will include apps owned by teammates.
   * @summary: List API Apps
   */
  apiAppList: (
    params: apiApp.ApiAppListParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.ApiAppListResponse>;

};

// ============ oAuth 模块 ============

export type oAuth = {
  /**
   * POST /oauth/token
   * Once you have retrieved the code from the user callback, you will need to exchange it for an access token via a backend call.
   * @summary: OAuth Token Generate
   */
  oauthTokenGenerate: (
    body: schemas.OAuthTokenGenerateRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.OAuthTokenResponse>;

  /**
   * POST /oauth/token?refresh
   * Access tokens are only valid for a given period of time (typically one hour) for security reasons. Whenever acquiring an new access token its TTL is also given (see `expires_in`), along with a refresh token that can be used to acquire a new access token after the current one has expired.
   * @summary: OAuth Token Refresh
   */
  oauthTokenRefresh: (
    body: schemas.OAuthTokenRefreshRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.OAuthTokenResponse>;

};

// ============ faxLine 模块 ============

export declare namespace faxLine {
  export type FaxLineAreaCodeGetParams = {
    /**
     * @description Filter area codes by country
     */
    country: 'CA' | 'US' | 'UK';
    /**
     * @description Filter area codes by state
     */
    state?: 'AK' | 'AL' | 'AR' | 'AZ' | 'CA' | 'CO' | 'CT' | 'DC' | 'DE' | 'FL' | 'GA' | 'HI' | 'IA' | 'ID' | 'IL' | 'IN' | 'KS' | 'KY' | 'LA' | 'MA' | 'MD' | 'ME' | 'MI' | 'MN' | 'MO' | 'MS' | 'MT' | 'NC' | 'ND' | 'NE' | 'NH' | 'NJ' | 'NM' | 'NV' | 'NY' | 'OH' | 'OK' | 'OR' | 'PA' | 'RI' | 'SC' | 'SD' | 'TN' | 'TX' | 'UT' | 'VA' | 'VT' | 'WA' | 'WI' | 'WV' | 'WY';
    /**
     * @description Filter area codes by province
     */
    province?: 'AB' | 'BC' | 'MB' | 'NB' | 'NL' | 'NT' | 'NS' | 'NU' | 'ON' | 'PE' | 'QC' | 'SK' | 'YT';
    /**
     * @description Filter area codes by city
     */
    city?: string;
  };

  export type FaxLineGetParams = {
    /**
     * @description The Fax Line number
     */
    number: string;
  };

  export type FaxLineListParams = {
    /**
     * @description Account ID
     */
    account_id?: string;
    /**
     * @description Which page number of the Fax Line List to return. Defaults to `1`.
     */
    page?: number;
    /**
     * @description Number of objects to be returned per page. Must be between `1` and `100`. Default is `20`.
     */
    page_size?: number;
    /**
     * @description Include Fax Lines belonging to team members in the list
     */
    show_team_lines?: boolean;
  };

}

export type faxLine = {
  /**
   * PUT /fax_line/add_user
   * Grants a user access to the specified Fax Line.
   * @summary: Add Fax Line User
   */
  faxLineAddUser: (
    body: schemas.FaxLineAddUserRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.FaxLineResponse>;

  /**
   * GET /fax_line/area_codes
   * Returns a list of available area codes for a given state/province and city
   * @summary: Get Available Fax Line Area Codes
   */
  faxLineAreaCodeGet: (
    params: faxLine.FaxLineAreaCodeGetParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.FaxLineAreaCodeGetResponse>;

  /**
   * POST /fax_line/create
   * Purchases a new Fax Line
   * @summary: Purchase Fax Line
   */
  faxLineCreate: (
    body: schemas.FaxLineCreateRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.FaxLineResponse>;

  /**
   * GET /fax_line
   * Returns the properties and settings of a Fax Line.
   * @summary: Get Fax Line
   */
  faxLineGet: (
    params: faxLine.FaxLineGetParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.FaxLineResponse>;

  /**
   * DELETE /fax_line
   * Deletes the specified Fax Line from the subscription.
   * @summary: Delete Fax Line
   */
  faxLineDelete: (
    body: schemas.FaxLineDeleteRequest,
    requestInit?: RequestInit,
  ) => Promise<any>;

  /**
   * GET /fax_line/list
   * Returns the properties and settings of multiple Fax Lines.
   * @summary: List Fax Lines
   */
  faxLineList: (
    params: faxLine.FaxLineListParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.FaxLineListResponse>;

  /**
   * PUT /fax_line/remove_user
   * Removes a user's access to the specified Fax Line
   * @summary: Remove Fax Line Access
   */
  faxLineRemoveUser: (
    body: schemas.FaxLineRemoveUserRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.FaxLineResponse>;

};

// ============ fax 模块 ============

export declare namespace fax {
  export type FaxListParams = {
    /**
     * @description Which page number of the Fax List to return. Defaults to `1`.
     */
    page?: number;
    /**
     * @description Number of objects to be returned per page. Must be between `1` and `100`. Default is `20`.
     */
    page_size?: number;
  };

}

export type fax = {
  /**
   * GET /fax/{fax_id}
   * Returns information about a Fax
   * @summary: Get Fax
   */
  faxGet: (
    /**
     * @description Fax ID
     */
    fax_id: string,
    requestInit?: RequestInit,
  ) => Promise<schemas.FaxGetResponse>;

  /**
   * DELETE /fax/{fax_id}
   * Deletes the specified Fax from the system
   * @summary: Delete Fax
   */
  faxDelete: (
    /**
     * @description Fax ID
     */
    fax_id: string,
    requestInit?: RequestInit,
  ) => Promise<any>;

  /**
   * GET /fax/files/{fax_id}
   * Downloads files associated with a Fax
   * @summary: Download Fax Files
   */
  faxFiles: (
    /**
     * @description Fax ID
     */
    fax_id: string,
    requestInit?: RequestInit,
  ) => Promise<Blob>;

  /**
   * GET /fax/list
   * Returns properties of multiple Faxes
   * @summary: Lists Faxes
   */
  faxList: (
    params: fax.FaxListParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.FaxListResponse>;

  /**
   * POST /fax/send
   * Creates and sends a new Fax with the submitted file(s)
   * @summary: Send Fax
   */
  faxSend: (
    body: schemas.FaxSendRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.FaxGetResponse>;

};

// ============ API 集合类型 ============

/**
 * API 类型定义
 */
export type APIs = {
  /** account 模块 */
  account: account;
  /** signatureRequest 模块 */
  signatureRequest: signatureRequest;
  /** template 模块 */
  template: template;
  /** bulkSendJob 模块 */
  bulkSendJob: bulkSendJob;
  /** report 模块 */
  report: report;
  /** team 模块 */
  team: team;
  /** unclaimedDraft 模块 */
  unclaimedDraft: unclaimedDraft;
  /** embedded 模块 */
  embedded: embedded;
  /** apiApp 模块 */
  apiApp: apiApp;
  /** oAuth 模块 */
  oAuth: oAuth;
  /** faxLine 模块 */
  faxLine: faxLine;
  /** fax 模块 */
  fax: fax;
};

export declare namespace APIs {
  export { account };
  export { signatureRequest };
  export { template };
  export { bulkSendJob };
  export { report };
  export { team };
  export { unclaimedDraft };
  export { embedded };
  export { apiApp };
  export { oAuth };
  export { faxLine };
  export { fax };
}
