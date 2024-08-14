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

Complaint.belongsTo(Whistleblower, { 
  foreignKey: "whistleblowerId", 
  as: "whistleblower" 
});

Whistleblower.hasMany(Complaint, { 
  foreignKey: "whistleblowerId", 
  as: "complaints" 
});

Complaint.belongsTo(ResponsibleAuthority, {
  foreignKey: "responsibleAuthorityId",
  as: "responsibleAuthority",
});

ResponsibleAuthority.hasMany(Complaint, {
  foreignKey: "responsibleAuthorityId",
  as: "complaints",
});

Complaint.belongsTo(Evidence, { 
  foreignKey: "evidenceId", 
  as: "evidence" 
});

Evidence.hasMany(Complaint, { 
  foreignKey: "evidenceId", 
  as: "complaints" 
});

Complaint.belongsTo(Resolution, { 
  foreignKey: "resolutionId", 
  as: "resolution" 
});

Resolution.hasMany(Complaint, { 
  foreignKey: "resolutionId", 
  as: "complaints" 
});

Complaint.belongsTo(CrimeScene, { 
  foreignKey: "crimeSceneId", 
  as: "crimeScene" 
});

CrimeScene.hasMany(Complaint, { 
  foreignKey: "crimeSceneId", 
  as: "complaints" 
});

Complaint.belongsTo(CategoryReport, { 
  foreignKey: "categoryReportId", 
  as: "categoryReport" 
});

CategoryReport.hasMany(Complaint, { 
  foreignKey: "categoryReportId", 
  as: "complaints" 
});

