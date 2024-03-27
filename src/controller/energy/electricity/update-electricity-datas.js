const electricityDataUpdate = ({ updateElectricityDatas }) => {
  return async function put(httpRequest) {
    try {
      // console.log("controller :"+JSON.stringify(httpRequest.body));
      const { source = {}, ...info } = httpRequest.body;
      const organization_id = httpRequest.params.organization_id;
      const id = httpRequest.params.id;
      source.ip = httpRequest.ip;
      source.browser = httpRequest.headers["User-Agent"];
      if (httpRequest.headers["Referer"]) {
        source.referrer = httpRequest.headers["Referer"];
      }
      console.log( httpRequest.body)
      const posted = await updateElectricityDatas({
        ...info,
      source,
        organization_id,id
      });
      return {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: 201,
        body: { updated:posted,success:true },
      };
    } catch (e) {
      // TODO: Error logging
      console.log(e);

      return {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: 400,
        body: {
          error: e.message,
        },
      };
    }
  };
};

module.exports = electricityDataUpdate;
