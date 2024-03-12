// const fs = require("fs");
// const htmlToPdf = require("html-pdf");
// const path = require("path");

// const fuelDataGetPdf = ({ selectFuelData }) => {
//   return async function get(httpRequest) {
//     try {
//       const { source = {}, ...info } = httpRequest.body;
//       source.ip = httpRequest.ip;
//       source.browser = httpRequest.headers["User-Agent"];
//       if (httpRequest.headers["Referer"]) {
//         source.referrer = httpRequest.headers["Referer"];
//       }
//       const toView = {
//         ...info,
//         source,
//       };
//       const data = await selectFuelData(toView);
//       const fuelData = JSON.parse(JSON.stringify(data));
//       const data_2022 = fuelData.filter((item) => item.year == "2022");
//       const data_2023 = fuelData.filter((item) => item.year == "2023");
//       const total_fuel_2022 = data_2022.reduce(
//         (acc, curr) => acc + parseFloat(curr.usage_in_kwh),
//         0
//       )* 0.004;
//       const total_fuel_2023 = data_2023.reduce(
//         (acc, curr) => acc + parseFloat(curr.usage_in_kwh),
//         0
//       )* 0.004;
//       const Formatedata = {
//         total_electricity_2023: 0,
//         total_electricity_2022: 0,
//         total_fuel_2023:`${total_fuel_2023.toFixed(2)} GJ`,
//         total_fuel_2022:`${total_fuel_2022.toFixed(2)} GJ`,
//         total_other_sources_2023: 200,
//         total_other_sources_2022: 200,
//         total_energy_consumption_2023: 200,
//         total_energy_consumption_2022: 200,
//         energy_intensity_2023: 200,
//         energy_intensity_2022: 200,
//         energy_intensity_optional_2023: 200,
//         energy_intensity_optional_2022: 200,
//       };
//       const templatePath = path.join(__dirname, "PdfTemplateContent.html");
//       const gethtmlTemplate = fs.readFileSync(templatePath, "utf8");
//       const filledHtml = gethtmlTemplate.replace(/{{(.*?)}}/g, (match, key) => {
//         return Formatedata[key.trim()] || "";
//       });

//       const options = { format: "Letter" };

//       return new Promise((resolve, reject) => {
//         htmlToPdf.create(filledHtml, options).toBuffer((err, buffer) => {
//           if (err) {
//             console.error(err);
//             reject({
//               statusCode: 500,
//               body: { error: "Internal Server Error" },
//             });
//           } else {
//             const headers = {
//               "Content-Disposition":
//                 "attachment; filename=environmental_report.pdf",
//               "Content-Type": "application/pdf",
//             };
//             resolve({
//               headers,
//               statusCode: 200,
//               body: buffer,
//             });
//           }
//         });
//       });
//     } catch (e) {
//       console.error(e);
//       return { statusCode: 400, body: { error: e.message } };
//     }
//   };
// };

// module.exports = fuelDataGetPdf;
const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

const fuelDataGetPdf = ({ selectFuelData }) => {
  return async function get(httpRequest) {
    try {
      const { source = {}, ...info } = httpRequest.body;
      source.ip = httpRequest.ip;
      source.browser = httpRequest.headers['User-Agent'];
      if (httpRequest.headers['Referer']) {
        source.referrer = httpRequest.headers['Referer'];
      }
      const toView = {
        ...info,
        source,
      };
      const data = await selectFuelData(toView);
      const fuelData = JSON.parse(JSON.stringify(data));
      const data_2022 = fuelData.filter((item) => item.year == '2022');
      const data_2023 = fuelData.filter((item) => item.year == '2023');
      const total_fuel_2022 = data_2022.reduce(
        (acc, curr) => acc + parseFloat(curr.usage_in_kwh),
        0
      ) * 0.004;
      const total_fuel_2023 = data_2023.reduce(
        (acc, curr) => acc + parseFloat(curr.usage_in_kwh),
        0
      ) * 0.004;
      const Formatedata = {
        total_electricity_2023: 0,
        total_electricity_2022: 0,
        total_fuel_2023: `${total_fuel_2023.toFixed(2)} GJ`,
        total_fuel_2022: `${total_fuel_2022.toFixed(2)} GJ`,
        total_other_sources_2023: 200,
        total_other_sources_2022: 200,
        total_energy_consumption_2023: 200,
        total_energy_consumption_2022: 200,
        energy_intensity_2023: 200,
        energy_intensity_2022: 200,
        energy_intensity_optional_2023: 200,
        energy_intensity_optional_2022: 200,
      };
      const templatePath = path.join(__dirname, 'PdfTemplateContent.html');
      const gethtmlTemplate = fs.readFileSync(templatePath, 'utf8');
      const filledHtml = gethtmlTemplate.replace(/{{(.*?)}}/g, (match, key) => {
        return Formatedata[key.trim()] || '';
      });

      const browser = await puppeteer.launch({
        executablePath: '/usr/bin/google-chrome-stable',
        args: ['--user-data-dir=/opt/render/.cache/puppeteer']
      });
      const page = await browser.newPage();
      await page.setContent(filledHtml);

      const pdfBuffer = await page.pdf({
        format: 'Letter',
        printBackground: true,
      });

      await browser.close();

      const headers = {
        'Content-Disposition': 'attachment; filename=environmental_report.pdf',
        'Content-Type': 'application/pdf',
      };

      return {
        headers,
        statusCode: 200,
        body: pdfBuffer,
      };
    } catch (e) {
      console.error(e);
      return { statusCode: 500, body: { error: 'Internal Server Error' } };
    }
  };
};

module.exports = fuelDataGetPdf;

