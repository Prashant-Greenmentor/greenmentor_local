'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("electricity_data", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      organization_id: {
        type: Sequelize.BIGINT,
        references: {
          model: "organizations",
          key: "id",
        },
      },
      module_id: {
        type: Sequelize.BIGINT,
        references: {
          model: "ModuleMasters",
          key: "id",
        },
      },
      sub_module_id: {
        type: Sequelize.BIGINT,
        references: {
          model: "SubModuleMasters",
          key: "id",
        },
      },
      bill_date: {
        type: Sequelize.DATE,
      },
      month: {
        type: Sequelize.STRING,
      },
      quarter: {
        type: Sequelize.BIGINT,
      },
      year: {
        type: Sequelize.BIGINT,
      },
      site_id: {
        type: Sequelize.BIGINT,
        references: {
          model: "site_masters",
          key: "id",
        },
      },
      electricity_source_id: {
        type: Sequelize.BIGINT,
        references: {
          model: "electricity_sources",
          key: "id",
        },
      },
      source_type: {
        type: Sequelize.STRING,
      },
      transaction_type: {
        type: Sequelize.STRING,
      },
      consumed_value: {
        type: Sequelize.DECIMAL,
      },
      unit_id: {
        type: Sequelize.BIGINT,
        references: {
          model: "unit_masters",
          key: "id",
        },
      },
      amount_paid: {
        type: Sequelize.DECIMAL,
      },
      currency_id: {
        type: Sequelize.BIGINT,
        references: {
          model: "unit_masters",
          key: "id",
        },
      },
      evidence: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.STRING,
      },
      comments: {
        type: Sequelize.STRING,
      },
      calculation_method: {
        type: Sequelize.BIGINT,
        references: {
          model: "electricity_calculations",
          key: "id",
        },
      },
      input_unit_type: {
        type: Sequelize.BIGINT,
        references: {
          model: "UnitTypeMasters",
          key: "id",
        },
      },
      required_unit_type: {
        type: Sequelize.BIGINT,
        references: {
          model: "UnitTypeMasters",
          key: "id",
        },
      },
      required_unit: {
        type: Sequelize.BIGINT,
        references: {
          model: "unit_masters",
          key: "id",
        },
      },
      unit_conversion: {
        type: Sequelize.BIGINT,
        references: {
          model: "UnitConversionMasters",
          key: "id",
        },
      },
      emission_factor: {
        type: Sequelize.DECIMAL,
      },
      usage_required_unit: {
        type: Sequelize.BIGINT,
        references: {
          model: "unit_masters",
          key: "id",
        },
      },
      usage_factor: {
        type: Sequelize.DECIMAL,
      },
      usage_unit_type: {
        type: Sequelize.BIGINT,
        references: {
          model: "UnitTypeMasters",
          key: "id",
        },
      },
      usage_in_kwh: {
        type: Sequelize.DECIMAL,
      },
      total_co2e_kg: {
        type: Sequelize.DECIMAL,
      },
      co2e_co2_kg: {
        type: Sequelize.DECIMAL,
      },
      co2e_ch4_kg: {
        type: Sequelize.DECIMAL,
      },
      co2e_n2o_kg: {
        type: Sequelize.DECIMAL,
      },
      modified_by: {
        type: Sequelize.BIGINT,
        references: {
          model: "users",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('electricity_data');
  }
};