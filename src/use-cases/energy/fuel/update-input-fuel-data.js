// const updateFuelInputData = ({ inputFuelDatas, fuelDao, updatedFuelData,id }) => {
//   return async function post(info) {
//     let data = await inputFuelDatas(info); // entity
// console.log(info,data)
//     data = {
//       fuel_input_data: updatedFuelData,
//       evidence: data.getEvidence(),
//       is_active: data.getIsActive(),
//       created_at: data.getCreatedAt(),
//       modified_at: data.getModifiedAt(),
//       modified_by: data.getModifiedBy(),
//       organization_id: data.getOrganizationId(),
//       fuel_record_type: data.getFuelRecordType(),
//     };

//     //   update
//     const res = await fuelDao.updateFuelDataInput({ data,id });

//     // ##
//     let msg = `Error on inserting fuel data, please try again.`;
//     // console.log(msg);
//     if (res) {
//       console.log(res);
//       msg = `Fuel has been added successfully.`;
//       let fuelRecord = info
// // 
//       // const convertedData = await convertFuelDatas(fuelRecord);
//       //   console.log(convertedData);

//       // await fuelDao.addConvertedData(convertedData);
//       // // insert into approval master
//       return msg;
//     } else {
//       throw new Error(msg);
//     }
//   };
// };

// module.exports = updateFuelInputData;
