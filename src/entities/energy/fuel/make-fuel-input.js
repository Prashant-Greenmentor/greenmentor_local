const makeFuelInput = ({validateDate}) => {
  return function make(info) {
    console.log(info)
    if (!info.bill_date || !validateDate(info.bill_date)) {
      throw new Error("Please enter valid Bill Date.");
    }
    // if (!info.site || isNaN(info.site)) {
    // throw new Error("Please provide valid site.");
    // }
    if (!info.fuel_type || isNaN(info.fuel_type)) {
      throw new Error("Please provide valid fuel type.");
    }
    if (!info.source_type) {
      throw new Error("Please enter valid source type.");
    }
    if (!info.use_type || isNaN(info.use_type)) {
      throw new Error("Please provide valid fuel type.");
    }
    if (info.quantity) {
      if (isNaN(info.quantity)) {
        throw new Error(
          "Please provide valid fuel consumption value in decimal"
        );
      } else {
        if (!info.unit || isNaN(info.unit)) {
          throw new Error(
            "Please provide valid unit, for provided fuel consumption."
          );
        }
      }
    }
    if (!info.amount_paid || isNaN(info.amount_paid)) {
      throw new Error("Please provide valid fuel type.");
    }
    if (!info.currency || isNaN(info.currency)) {
      throw new Error("Please provide valid fuel type.");
    }
    return Object.freeze({
      getFuelInputData: () => info,
      getEvidence: () => info.evidence,
      getIsActive: () => true,
      getCreatedAt: () => new Date(),
      getModifiedAt: () => new Date(),
      getModifiedBy: () => 1,
      getOrganizationId: () => info.organization_id,
      getFuelRecordType: () =>
        info.fuel_record_type && info.fuel_record_type === "2"
          ? "inventory"
          : "purchased",
    });
  };
};

module.exports = makeFuelInput;
