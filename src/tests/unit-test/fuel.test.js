   const randomstring = require("randomstring"); // for random string insert and update

// change to test DB
beforeAll(() => {
  process.env.NODE_ENV = "test";
});

const {
  selectSites,
  selectFuelTypes,
  selectUnits,
  selectCurrencies,
  selectUseTypes,
  addFuelDatas,
} = require("../../use-cases/energy/fuel/app");

describe(`Fuel Tests Suites`, () => {
  test(`Select Sites`, async () => {
    const info = {};
    const res = await selectSites(info);
    expect(res).toBeDefined();
  });
  test(`Select Currency`, async () => {
    const info = {};
    const res = await selectCurrencies(info);
    expect(res).toBeDefined();
  });
  test(`Select Fuel Types`, async () => {
    const info = {};
    const res = await selectFuelTypes(info);
    expect(res).toBeDefined();
  });
  test(`Select Use types`, async () => {
    const info = {};
    const res = await selectUseTypes(info);
    expect(res).toBeDefined();
  });
  test(`Select Units`, async () => {
    const info = {};
    const res = await selectUnits(info);
    expect(res).toBeDefined();
  });

  test(`Add Fuel Data - All fields have value.`, async () => {
    const info = {
      site: "3",
      bill_date: "2024-02-15",
      fuel_type: "2",
      source_type: "non-renewable",
      use_type: "1",
      consumed_fuel: "25",
      unit: "2",
      amount_paid: "80",
      currency: "1",
      heat_content_of_fuel: "0.30",
      carbon_content_of_fuel: "0.20",
      emission_factor: "0.12",
      evidence: "C:\\fakepath\\Screenshot 2024-01-29 at 6.29.33 PM.png",
    };
    const res = await addFuelDatas(info);
    expect(res).toBe(`Fuel has been added successfully.`);
  });

  test(`Add Fuel - Required fields missing.`, async () => {
    try {
      const info = {
        site: "3",
        bill_date: "2024-02-15",
        // fuel_type: "2", commenting on purpose to mock the missing fuel_type in request body
        source_type: "non-renewable",
        use_type: "1",
        consumed_fuel: "25",
        unit: "2",
        amount_paid: "80",
        currency: "1",
        heat_content_of_fuel: "0.30",
        carbon_content_of_fuel: "0.20",
        emission_factor: "0.12",
        evidence: "C:\\fakepath\\Screenshot 2024-01-29 at 6.29.33 PM.png",
      };
      await addFuelDatas(info);
    } catch (e) {
      expect(e.toString()).toBe("Error: Please provide valid fuel type.");
    }
  });
});
