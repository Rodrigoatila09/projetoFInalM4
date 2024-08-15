import { ResponsibleAuthority } from "./ResponsibleAuthority.model.js";
import { Resolution } from "./Resolution.model.js";
import { Evidence } from "./Evidence.model.js";
import { CrimeScene } from "./CrimeScene.model.js";
import { Whistleblower } from "./Whistleblower.model.js";


ResponsibleAuthority.hasMany(Resolution, {
  foreignKey: "responsibleAuthorityId",
  as: "resolutions",
});

Resolution.belongsTo(ResponsibleAuthority, {
  foreignKey: "responsibleAuthorityId",
  as: "responsibleAuthority",
});

Evidence.belongsTo(Resolution, {
  foreignKey: "resolutionId",
  as: "resolution",
});

Evidence.belongsTo(ResponsibleAuthority, {
  foreignKey: "responsibleAuthorityId",
  as: "responsibleAuthority",
});

CrimeScene.belongsTo(ResponsibleAuthority, {
  foreignKey: "responsibleAuthorityId",
  as: "responsibleAuthority",
});

ResponsibleAuthority.hasMany(CrimeScene, {
  foreignKey: "responsibleAuthorityId",
  as: "crimeScenes",
});

Whistleblower.hasMany(CrimeScene, {
  foreignKey: "whistleblowerId",
  as: "crimeScenes",
});

CrimeScene.belongsTo(Whistleblower, {
  foreignKey: "whistleblowerId",
  as: "whistleblower",
});
