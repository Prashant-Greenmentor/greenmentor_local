const transactionTypesSelect = ({ selectTransactionTypes }) => {
  return async function get(httpRequest) {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      // get the httprequest body
      const { source = {}, ...info } = httpRequest.body;
      source.ip = httpRequest.ip;
      source.browser = httpRequest.headers["Transactionr-Agent"];
      if (httpRequest.headers["Referer"]) {
        source.referrer = httpRequest.headers["Referer"];
      }
      const toView = {
        ...info,
        source,
        electricity_source_id: httpRequest.params.electricity_source_id,
      };
      const data = await selectTransactionTypes(toView);
      return {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: 200,
        body: { success: true, data },
      };
    } catch (e) {
      // TODO: Error logging
      console.log(e);
      return {
        headers,
        statusCode: 400,
        body: {
          error: e.message,
        },
      };
    }
  };
};

module.exports = transactionTypesSelect;
