export const specMeta = {
  name: "Dropbox Sign API",
  hasTags: true,
  url: [
    {
      url: "https://api.hellosign.com/v3"
    }
  ],
  apis: {
    "account/accountCreate": {
      method: "POST",
      path: "/account/create",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "account/accountGet": {
      method: "GET",
      path: "/account",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["account_id", "email_address"],
      bodyParams: null
    },

    "account/accountUpdate": {
      method: "PUT",
      path: "/account",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "account/accountVerify": {
      method: "POST",
      path: "/account/verify",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "signatureRequest/signatureRequestBulkCreateEmbeddedWithTemplate": {
      method: "POST",
      path: "/signature_request/bulk_create_embedded_with_template",
      consumes: ["application/json","multipart/form-data"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "signatureRequest/signatureRequestBulkSendWithTemplate": {
      method: "POST",
      path: "/signature_request/bulk_send_with_template",
      consumes: ["application/json","multipart/form-data"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "signatureRequest/signatureRequestCancel": {
      method: "POST",
      path: "/signature_request/cancel/{signature_request_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["signature_request_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "signatureRequest/signatureRequestCreateEmbedded": {
      method: "POST",
      path: "/signature_request/create_embedded",
      consumes: ["application/json","multipart/form-data"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "signatureRequest/signatureRequestCreateEmbeddedWithTemplate": {
      method: "POST",
      path: "/signature_request/create_embedded_with_template",
      consumes: ["application/json","multipart/form-data"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "signatureRequest/signatureRequestEdit": {
      method: "PUT",
      path: "/signature_request/edit/{signature_request_id}",
      consumes: ["application/json","multipart/form-data"],
      produces: ["application/json"],
      pathParams: ["signature_request_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "signatureRequest/signatureRequestEditEmbedded": {
      method: "PUT",
      path: "/signature_request/edit_embedded/{signature_request_id}",
      consumes: ["application/json","multipart/form-data"],
      produces: ["application/json"],
      pathParams: ["signature_request_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "signatureRequest/signatureRequestEditEmbeddedWithTemplate": {
      method: "PUT",
      path: "/signature_request/edit_embedded_with_template/{signature_request_id}",
      consumes: ["application/json","multipart/form-data"],
      produces: ["application/json"],
      pathParams: ["signature_request_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "signatureRequest/signatureRequestEditWithTemplate": {
      method: "PUT",
      path: "/signature_request/edit_with_template/{signature_request_id}",
      consumes: ["application/json","multipart/form-data"],
      produces: ["application/json"],
      pathParams: ["signature_request_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "signatureRequest/signatureRequestFiles": {
      method: "GET",
      path: "/signature_request/files/{signature_request_id}",
      consumes: [],
      produces: ["application/pdf","application/zip","application/json"],
      pathParams: ["signature_request_id"],
      queryParams: ["file_type"],
      bodyParams: null
    },

    "signatureRequest/signatureRequestFilesAsDataUri": {
      method: "GET",
      path: "/signature_request/files_as_data_uri/{signature_request_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["signature_request_id"],
      queryParams: null,
      bodyParams: null
    },

    "signatureRequest/signatureRequestFilesAsFileUrl": {
      method: "GET",
      path: "/signature_request/files_as_file_url/{signature_request_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["signature_request_id"],
      queryParams: ["force_download"],
      bodyParams: null
    },

    "signatureRequest/signatureRequestGet": {
      method: "GET",
      path: "/signature_request/{signature_request_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["signature_request_id"],
      queryParams: null,
      bodyParams: null
    },

    "signatureRequest/signatureRequestList": {
      method: "GET",
      path: "/signature_request/list",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["account_id", "page", "page_size", "query"],
      bodyParams: null
    },

    "signatureRequest/signatureRequestReleaseHold": {
      method: "POST",
      path: "/signature_request/release_hold/{signature_request_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["signature_request_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "signatureRequest/signatureRequestRemind": {
      method: "POST",
      path: "/signature_request/remind/{signature_request_id}",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: ["signature_request_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "signatureRequest/signatureRequestRemove": {
      method: "POST",
      path: "/signature_request/remove/{signature_request_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["signature_request_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "signatureRequest/signatureRequestSend": {
      method: "POST",
      path: "/signature_request/send",
      consumes: ["application/json","multipart/form-data"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "signatureRequest/signatureRequestSendWithTemplate": {
      method: "POST",
      path: "/signature_request/send_with_template",
      consumes: ["application/json","multipart/form-data"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "signatureRequest/signatureRequestUpdate": {
      method: "POST",
      path: "/signature_request/update/{signature_request_id}",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: ["signature_request_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "template/templateAddUser": {
      method: "POST",
      path: "/template/add_user/{template_id}",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: ["template_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "template/templateCreate": {
      method: "POST",
      path: "/template/create",
      consumes: ["application/json","multipart/form-data"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "template/templateCreateEmbeddedDraft": {
      method: "POST",
      path: "/template/create_embedded_draft",
      consumes: ["application/json","multipart/form-data"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "template/templateDelete": {
      method: "POST",
      path: "/template/delete/{template_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["template_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "template/templateFiles": {
      method: "GET",
      path: "/template/files/{template_id}",
      consumes: [],
      produces: ["application/pdf","application/zip","application/json"],
      pathParams: ["template_id"],
      queryParams: ["file_type"],
      bodyParams: null
    },

    "template/templateFilesAsDataUri": {
      method: "GET",
      path: "/template/files_as_data_uri/{template_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["template_id"],
      queryParams: null,
      bodyParams: null
    },

    "template/templateFilesAsFileUrl": {
      method: "GET",
      path: "/template/files_as_file_url/{template_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["template_id"],
      queryParams: ["force_download"],
      bodyParams: null
    },

    "template/templateGet": {
      method: "GET",
      path: "/template/{template_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["template_id"],
      queryParams: null,
      bodyParams: null
    },

    "template/templateList": {
      method: "GET",
      path: "/template/list",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["account_id", "page", "page_size", "query"],
      bodyParams: null
    },

    "template/templateRemoveUser": {
      method: "POST",
      path: "/template/remove_user/{template_id}",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: ["template_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "template/templateUpdateFiles": {
      method: "POST",
      path: "/template/update_files/{template_id}",
      consumes: ["application/json","multipart/form-data"],
      produces: ["application/json"],
      pathParams: ["template_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "bulkSendJob/bulkSendJobGet": {
      method: "GET",
      path: "/bulk_send_job/{bulk_send_job_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["bulk_send_job_id"],
      queryParams: ["page", "page_size"],
      bodyParams: null
    },

    "bulkSendJob/bulkSendJobList": {
      method: "GET",
      path: "/bulk_send_job/list",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["page", "page_size"],
      bodyParams: null
    },

    "report/reportCreate": {
      method: "POST",
      path: "/report/create",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "team/teamAddMember": {
      method: "PUT",
      path: "/team/add_member",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["team_id"],
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "team/teamCreate": {
      method: "POST",
      path: "/team/create",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "team/teamDelete": {
      method: "DELETE",
      path: "/team/destroy",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: null
    },

    "team/teamGet": {
      method: "GET",
      path: "/team",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: null
    },

    "team/teamUpdate": {
      method: "PUT",
      path: "/team",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "team/teamInfo": {
      method: "GET",
      path: "/team/info",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["team_id"],
      bodyParams: null
    },

    "team/teamInvites": {
      method: "GET",
      path: "/team/invites",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["email_address"],
      bodyParams: null
    },

    "team/teamMembers": {
      method: "GET",
      path: "/team/members/{team_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["team_id"],
      queryParams: ["page", "page_size"],
      bodyParams: null
    },

    "team/teamRemoveMember": {
      method: "POST",
      path: "/team/remove_member",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "team/teamSubTeams": {
      method: "GET",
      path: "/team/sub_teams/{team_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["team_id"],
      queryParams: ["page", "page_size"],
      bodyParams: null
    },

    "unclaimedDraft/unclaimedDraftCreate": {
      method: "POST",
      path: "/unclaimed_draft/create",
      consumes: ["application/json","multipart/form-data"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "unclaimedDraft/unclaimedDraftCreateEmbedded": {
      method: "POST",
      path: "/unclaimed_draft/create_embedded",
      consumes: ["application/json","multipart/form-data"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "unclaimedDraft/unclaimedDraftCreateEmbeddedWithTemplate": {
      method: "POST",
      path: "/unclaimed_draft/create_embedded_with_template",
      consumes: ["application/json","multipart/form-data"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "unclaimedDraft/unclaimedDraftEditAndResend": {
      method: "POST",
      path: "/unclaimed_draft/edit_and_resend/{signature_request_id}",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: ["signature_request_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "embedded/embeddedEditUrl": {
      method: "POST",
      path: "/embedded/edit_url/{template_id}",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: ["template_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "embedded/embeddedSignUrl": {
      method: "GET",
      path: "/embedded/sign_url/{signature_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["signature_id"],
      queryParams: null,
      bodyParams: null
    },

    "apiApp/apiAppCreate": {
      method: "POST",
      path: "/api_app",
      consumes: ["application/json","multipart/form-data"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "apiApp/apiAppGet": {
      method: "GET",
      path: "/api_app/{client_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["client_id"],
      queryParams: null,
      bodyParams: null
    },

    "apiApp/apiAppDelete": {
      method: "DELETE",
      path: "/api_app/{client_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["client_id"],
      queryParams: null,
      bodyParams: null
    },

    "apiApp/apiAppUpdate": {
      method: "PUT",
      path: "/api_app/{client_id}",
      consumes: ["application/json","multipart/form-data"],
      produces: ["application/json"],
      pathParams: ["client_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "apiApp/apiAppList": {
      method: "GET",
      path: "/api_app/list",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["page", "page_size"],
      bodyParams: null
    },

    "oAuth/oauthTokenGenerate": {
      method: "POST",
      path: "/oauth/token",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "oAuth/oauthTokenRefresh": {
      method: "POST",
      path: "/oauth/token?refresh",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "faxLine/faxLineAddUser": {
      method: "PUT",
      path: "/fax_line/add_user",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "faxLine/faxLineAreaCodeGet": {
      method: "GET",
      path: "/fax_line/area_codes",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["country", "state", "province", "city"],
      bodyParams: null
    },

    "faxLine/faxLineCreate": {
      method: "POST",
      path: "/fax_line/create",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "faxLine/faxLineGet": {
      method: "GET",
      path: "/fax_line",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["number"],
      bodyParams: null
    },

    "faxLine/faxLineDelete": {
      method: "DELETE",
      path: "/fax_line",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "faxLine/faxLineList": {
      method: "GET",
      path: "/fax_line/list",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["account_id", "page", "page_size", "show_team_lines"],
      bodyParams: null
    },

    "faxLine/faxLineRemoveUser": {
      method: "PUT",
      path: "/fax_line/remove_user",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "fax/faxGet": {
      method: "GET",
      path: "/fax/{fax_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["fax_id"],
      queryParams: null,
      bodyParams: null
    },

    "fax/faxDelete": {
      method: "DELETE",
      path: "/fax/{fax_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["fax_id"],
      queryParams: null,
      bodyParams: null
    },

    "fax/faxFiles": {
      method: "GET",
      path: "/fax/files/{fax_id}",
      consumes: [],
      produces: ["application/pdf","application/json"],
      pathParams: ["fax_id"],
      queryParams: null,
      bodyParams: null
    },

    "fax/faxList": {
      method: "GET",
      path: "/fax/list",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["page", "page_size"],
      bodyParams: null
    },

    "fax/faxSend": {
      method: "POST",
      path: "/fax/send",
      consumes: ["application/json","multipart/form-data"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    }
  }
} as const;
