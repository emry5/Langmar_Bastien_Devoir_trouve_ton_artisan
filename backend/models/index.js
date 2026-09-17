const Artisan = require("./Artisan");
const Contact = require("./Contact");

Artisan.hasMany(Contact, {
  foreignKey: "artisanId",
});

Contact.belongsTo(Artisan, {
  foreignKey: "artisanId",
});

module.exports = {
  Artisan,
  Contact,
};