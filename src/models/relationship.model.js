import { ResponsibleAuthority } from "./ResponsibleAuthority.model.js";
import { Resolution } from "./Resolution.model.js";
import { Evidence } from "./Evidence.model.js";
import { CrimeScene } from "./CrimeScene.model.js";
import { Whistleblower } from "./Whistleblower.model.js";
import { CategoryReport } from "./CategoryReport.model.js";
import { Complaint } from "./Complaint.model.js"

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


