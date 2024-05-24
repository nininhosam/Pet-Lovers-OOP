module.exports = (sequelize, DataTypes) => {
  const Cliente = sequelize.define("Cliente", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nomeSocial: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cpf: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // rgs: {
    //   type: DataTypes.ARRAY(DataTypes.STRING),
    //   allowNull: true,
    // }
    // ,
    // dataCadastro: {
    //   type: DataTypes.DATE,
    //   allowNull: true,
    //   defaultValue: new Date(Date.now()),
    // },
    // telefones: {
    //   type: DataTypes.ARRAY(DataTypes.STRING),
    //   allowNull: true,
    //   defaultValue: [],
    // },
    // produtosConsumidos: {
    //   type: DataTypes.ARRAY(DataTypes.INTEGER),
    //   allowNull: true,
    //   defaultValue: [],
    // },
    // servicosConsumidos: {
    //   type: DataTypes.ARRAY(DataTypes.INTEGER),
    //   allowNull: true,
    //   defaultValue: [],
    // },
    // pets: {
    //   type: DataTypes.ARRAY(DataTypes.INTEGER),
    //   allowNull: true,
    //   defaultValue: [],
    // },
  });
  return Cliente;
};