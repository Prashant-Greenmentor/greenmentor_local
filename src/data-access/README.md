# in this folder you will make the connection to the DB and its query


<!-- #create a migration -->
 <!-- npx sequelize-cli model:generate --name fuel_input_master --attributes id:bigint,fuel_input_data:json,evidence:string,is_active:boolean,created_at:date,modified_at:date,modified_by:bigint -->

<!-- fuel_data -->
<!-- npx sequelize-cli model:generate --name fuel_data --attributes company_id:bigint,module_id:bigint,sub_module_id:bigint,bill_date:date,quarter:bigint,year:bigint,site_id:bigint,fuel_type_id:bigint,source_type_id:bigint,use_type_id:bigint,consumed_fuel:decimal,fuel_unit_id:bigint,amount_paid:decimal,currency_id:bigint,heat_content:decimal,carbon_content_value:decimal,evidence:string,status:string,comments:string,calculation_method:bigint,input_unit_type:bigint,required_unit_type:bigint,required_unit:bigint,unit_conversion:bigint,emission_factor:decimal,total_co2e_kg:decimal,co2e_co2_kg:decimal,co2e_ch4_kg:decimal,co2e_n2o_kg:decimal,created_at:date,modified_at:date,modified_by:bigint -->

<!-- unit_type_master -->
<!-- npx sequelize-cli model:generate --name fuel_unit_master --attributes scope_id:bigint,category_id:bigint,unit:string,unit_type:string,is_active:boolean,modified_by:bigint -->

<!-- fuel_emission_master -->
<!-- npx sequelize-cli model:generate --name fuel_emission_master --attributes fuel_type:bigint,source_type:string,unit_type_id:bigint,unit_id:bigint,total_kg_co2e_per_unit:decimal,kg_co2e_co2_per_unit:decimal,kg_co2e_ch4_per_unit:decimal,kg_co2e_n20_per_unit:decimal,is_active:boolean,modified_by:bigint -->

<!-- fuel_calculation
npx sequelize-cli model:generate --name fuel_calculation --attributes calculation_method:bigint,qyantity:bigint,ef_of_fuel:bigint,heat_content_of_fuel:bigint,carbon_content:bigint,calculation_equation:json,is_active:boolean,modified_by:bigint -->

<!-- module_unit_master
npx sequelize-cli model:generate --name module_unit_master --attributes module:bigint,sub_module:bigint,unit_id:bigint,unit_type:string,is_active:boolean,modified_by:bigint -->

<!-- undo a specific migration
npx sequelize db:migrate:undo --name 20240203182428-create-site_master.js;   -->


<!-- npx sequelize-cli model:generate --name ApprovalMaster --attributes id:bigint,fuel_input_master_id:bigint, is_active:boolean,modified_by:bigint -->
<!-- 

<!-- Module Master
 npx sequelize-cli model:generate --name ModuleMaster --attributes id:bigint,module:string,is_active:boolean,modified_by:bigint -->
<!--

<!-- Sub Module Master
 npx sequelize-cli model:generate --name SubModuleMaster --attributes id:bigint,module:bigint,sub_module:string,is_active:boolean,modified_by:bigint -->
<!--

<!-- Unit Type Master
 npx sequelize-cli model:generate --name UnitTypeMaster --attributes unit_type:string,is_active:boolean,modified_by:bigint -->

<!-- UnitConversion  Master
 npx sequelize-cli model:generate --name UnitConversionMaster --attributes reported_unit_type:BIGINT,required_unit_type:BIGINT,reported_unit:BIGINT,required_unit:BIGINT,conversion_factor:DECIMAL,is_active:boolean,modified_by:bigint -->

 <!-- UsageMaster  Master
 npx sequelize-cli model:generate --name UsageMaster --attributes fuel_type_id:BIGINT,required_unit_type:BIGINT,required_unit:BIGINT,usage_factor_kwh:DECIMAL,is_active:boolean,modified_by:bigint
  -->

   <!-- FuelType
 npx sequelize-cli model:generate --name FuelType --attributes fuel_type:string,is_active:boolean,modified_by:bigint
  -->

<!-- Approval Master
npx sequelize-cli model:generate --name ApprovalMaster --attributes id:bigint,fuel_input_master_id:bigint,is_active:boolean,modified_by:bigint -->




<!-- electricity_input_master -->
<!-- 
npx sequelize-cli model:generate --name electricity_input_master --attributes electricity_input_data:jsonb,organization_id:bigint,evidence:string,is_active:boolean,modified_by:bigint
 -->

 <!-- Approval Master Electricity
npx sequelize-cli model:generate --name ApprovalMasterElectricity --attributes organization_id:bigint,electricity_input_master_id:bigint,is_active:boolean,modified_by:bigint,requested_by:bigint,request_status:string,feedback:string -->
<!-- Replace request_status type manually by ENUM('approved','rejected','submitted')  -->

<!-- electricity_source -->
<!-- npx sequelize-cli model:generate --name electricity_source --attributes electricity_source:string,is_active:boolean,modified_by:bigint -->

<!-- electricity_source_master -->
<!-- npx sequelize-cli model:generate --name electricity_source_master --attributes electricity_source_id:string,unit_type_id:bigint,transaction_type:string,source_type:string,is_active:boolean,modified_by:bigint -->
<!-- Replace after the model is generated: transaction_type by ENUM('Captive','Purchased') and source_type by ENUM('Renewable','Non Renewable) -->

<!-- electricity_emission_master -->
<!-- npx sequelize-cli model:generate --name electricity_emission_master --attributes electricity_source_id:bigint,unit_type_id:bigint,unit_id:bigint,total_kg_co2e_per_unit:decimal,kg_co2e_co2_per_unit:decimal,kg_co2e_ch4_per_unit:decimal,kg_co2e_n2o_per_unit:decimal,kg_co2e_hfc_per_unit:decimal,kg_co2e_pfc_per_unit:decimal,kg_co2e_nf3_per_unit:decimal,kg_co2e_sf6_per_unit:decimal,is_active:boolean,modified_by:bigint -->

<!-- electricty calculation methods -->
<!-- npx sequelize-cli model:generate --name electricity_calculation --attributes calculation_method:bigint,unit_used:bigint,emission_factor:bigint,calculation_equation:jsonb,is_active:boolean,modified_by:bigint -->

<!-- electricity_data -->
<!-- npx sequelize-cli model:generate --name electricity_data --attributes company_id:bigint,module_id:bigint,sub_module_id:bigint,bill_date:date,quarter:bigint,year:bigint,site_id:bigint,electricity_source_id:bigint,source_type:string,transaction_type:string,consumed_value:decimal,unit_id:bigint,amount_paid:decimal,currency_id:bigint,evidence:string,status:string,comments:string,calculation_method:bigint,input_unit_type:bigint,required_unit_type:bigint,required_unit:bigint,unit_conversion:bigint,emission_factor:decimal,usage_required_unit:bigint,usage_factor:decimal,usage_unit_type:bigint,usage_in_kwh:decimal,total_co2e_kg:decimal,co2e_co2_kg:decimal,co2e_ch4_kg:decimal,co2e_n2o_kg:decimal,modified_by:bigint -->

 <!-- UsageElectricityMaster  Master
 npx sequelize-cli model:generate --name UsageElectricityMaster --attributes electricity_source_id:BIGINT,required_unit_type:BIGINT,required_unit:BIGINT,usage_factor_kwh:DECIMAL,is_active:boolean,modified_by:bigint
  -->

<!-- scope1_scope2_summary_data -->
<!--
npx sequelize-cli model:generate --name scope1_scope2_summary_data --attributes organization_id:bigint,module_id:bigint,sub_module_id:bigint,month:string,quarter:bigint,year:bigint,site_id:bigint,usage_in_kwh:decimal,total_co2e_kg:decimal,co2e_co2_kg:decimal,co2e_ch4_kg:decimal,co2e_n2o_kg:decimal,modified_by:bigint 
-->

<!-- 

npx sequelize db:migrate:undo --name 20240203182428-create-site_master.js -- to delete a specific table
npx sequelize db:migrate --name 20240203182428-create-site_master.js -- to run a specific table
npx sequelize db:migrate - migrate all

to add a new column
npx sequelize-cli migration:generate --name add_fuel_record_type_to_fuel_input_masters
"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("fuel_input_masters", "fuel_record_type", {
      type: Sequelize.ENUM("inventory", "purchased"),
      allowNull: false,
      defaultValue: "purchased",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("fuel_input_masters", "fuel_record_type");
  },
};





