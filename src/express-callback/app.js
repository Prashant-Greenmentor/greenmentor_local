const makeExpressCallback = (controller) => {
  return (req, res) => {
      const httpRequest = {
      body: req.body,
      query: req.query,
      params: req.params,
      files: req.files,
      ip: req.ip,
      method: req.method,
      path: req.path,
      headers: {
        "Content-Type": req.get("Content-Type"),
        Referer: req.get("referer"),
        "User-Agent": req.get("User-Agent"),
        Cookie: req.get("Authorization"),
        "Access-Control-Allow-Origin": "*",
      },
    };
    controller(httpRequest)
      .then((httpResponse) => {
        if (httpResponse.headers) {
          res.set("Access-Control-Allow-Origin", "*");
          res.set(httpResponse.headers);
        }
        // If the httpResponse object contains a Content-Type header, it is set on the response obje
        if (httpResponse.headers && httpResponse.headers["Content-Type"]) {
          res.type(httpResponse.headers["Content-Type"]);
      }

      // Send appropriate response
      if (httpResponse.body) {
          res.status(httpResponse.statusCode).send(httpResponse.body);
      } else {
          res.sendStatus(httpResponse.statusCode);
      }
      })
      .catch((e) => res.sendStatus(500));
  };
};

module.exports = makeExpressCallback;
