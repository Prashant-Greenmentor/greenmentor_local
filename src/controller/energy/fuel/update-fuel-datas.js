// const fuelDataUpdate = ({ updateFuelDatas }) => {
//   return async function post(httpRequest) {
//     try {
//       // console.log("controller :"+JSON.stringify(httpRequest.body));
//       const { source = {}, ...info } = httpRequest.body;
//       const organization_id = httpRequest.params.organization_id;
//       const id = httpRequest.params.id;
//       source.ip = httpRequest.ip;
//       source.browser = httpRequest.headers["User-Agent"];
//       if (httpRequest.headers["Referer"]) {
//         source.referrer = httpRequest.headers["Referer"];
//       }
//       console.log("info:"+JSON.stringify(info))
//       const posted = await updateFuelDatas({
//         ...info,
//         source,
//         organization_id,id
//       });
//       return {
//         headers: {
//           "Content-Type": "application/json",
//         },
//         statusCode: 201,
//         body: { posted },
//       };
//     } catch (e) {
//       // TODO: Error logging
//       console.log(e);

//       return {
//         headers: {
//           "Content-Type": "application/json",
//         },
//         statusCode: 400,
//         body: {
//           error: e.message,
//         },
//       };
//     }
//   };
// };

// module.exports = fuelDataUpdate;
