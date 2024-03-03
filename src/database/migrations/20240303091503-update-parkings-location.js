export const up = (queryInterface, Sequelize) => queryInterface.addColumn('parkings', 'location', {
  type: Sequelize.JSONB, // Cambia el tipo de columna a JSONB para almacenar un objeto JSON
  defaultValue: null, // Establece null como valor por defecto
});

export const down = (queryInterface) => queryInterface.removeColumn('parkings', 'location');
