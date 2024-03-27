const makeElectricityInput = ({ validateDate }) => {
  return function make(info) {
    if (!info.bill_date || !validateDate(info.bill_date)) {
      throw new Error("Please enter valid Bill Date.");
    }
    if (!info.bill_start || !validateDate(info.bill_start)) {
      throw new Error("Please enter valid Bill Start Date.");
    }
    if (!info.bill_end || !validateDate(info.bill_end)) {
      throw new Error("Please enter valid Bill End Date.");
    }
    if (new Date(info.bill_end) <= new Date(info.bill_start)) {
      throw new Error("Bill End Date should be greater than Bill Start Date.");
    }
    if (!info.site || isNaN(info.site)) {
    throw new Error("Please provide valid site.");
    }
    if (!info.electricity_source || isNaN(info.electricity_source)) {
      throw new Error("Please provide valid Electricity Source.");
    }
    if (
      !info.transaction_type ||
      !["Captive", "Purchased"].includes(info.transaction_type)
    ) {
      throw new Error("Please provide valid Transaction type.");
    }
    if (info.unit_used) {
      if (isNaN(info.unit_used)) {
        throw new Error(
          "Please provide valid consumption value in decimal"
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
      getElectricityInputData: () => info,
      getEvidence: () => info.evidence,
      getIsActive: () => true,
      getCreatedAt: () => new Date(),
      getModifiedAt: () => new Date(),
      getModifiedBy: () => 1,
      getOrganizationId: () => info.organization_id,
    });
  };
};

module.exports = makeElectricityInput;
