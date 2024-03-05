const randomstring = require("randomstring"); // for random string insert and update

// change to test DB
beforeAll(() => {
  process.env.NODE_ENV = "test";
});

const routes = require("./fuel"); // routes to be tested

describe(`Fuel Tests Suites`, () => {
  test(`Select Sites`, async () => {
    const res = await routes.sitesSelects();
    const data = res.status;
    expect(data).toBe(200);
  });
  test(`Select Fuel Type`, async () => {
    const res = await routes.fuelTypesSelects();
    const data = res.status;
    expect(data).toBe(200);
  });
  test(`Select units`, async () => {
    const res = await routes.unitsSelects();
    const data = res.status;
    expect(data).toBe(200);
  });
  test(`Select use types`, async () => {
    const res = await routes.useTypesSelects();
    const data = res.status;
    expect(data).toBe(200);
  });
  test(`Select currencies`, async () => {
    const res = await routes.currenciesSelects();
    const data = res.status;
    expect(data).toBe(200);
  });

  test(`Add Fuel - All fields have value.`, async () => {
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
    const res = await routes.fuelDataAdds({ info });
    const data = res.status;
    expect(data).toBe(201);
  });

  test(`Add Fuel - Required fields missing.`, async () => {
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
    const res = await routes.fuelDataAdds({ info });
    const data = res.response.status;
    expect(data).toBe(400);
  });
});
