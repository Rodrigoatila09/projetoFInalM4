import { DataTypes } from "sequelize";
import { database } from "../database/connection.db.js";
import { Whistleblower } from "./Whistleblower.model.js";
import { ResponsibleAuthority } from "./ResponsibleAuthority.model.js";
import { Evidence } from "./Evidence.model.js";
import { Resolution } from "./Resolution.model.js";
import { CategoryReport } from "./CategoryReport.model.js";
import { CrimeScene } from "./CrimeScene.model.js";

export const Complaint = database.define("Complaint", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },

  description: {
    type: DataTypes.STRING(250),
    allowNull: false,
  },

  whistleBlowerID: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Whistleblower,
      key: "id",
    },
  },
  responsibleAuthorityID: {
    type: DataTypes.UUID,
    allowNull: true,
    references: {
      model: ResponsibleAuthority,
      key: "id",
    },
  },
  evidenceID: {
    type: DataTypes.UUID,
    allowNull: true,
    references: {
      model: Evidence,
      key: "id",
    },
  },

  resolutionID: {
    type: DataTypes.UUID,
    allowNull: true,
    references: {
      model: Resolution,
      key: "id",
    },
    categoryReportID:{
      type: DataTypes.UUID,
      allowNull:true,
      references:{
        model: CategoryReport,
        key:'id'
      }
    
    },
    crimeSceneID:{
      type: DataTypes.UUID,
      allowNull: true,
      references:{
        model:CrimeScene,
        key:'id'
      }

    }


  }
});



  Complaint.belongsTo(Whistleblower, { foreignKey: 'whistleBlowerID' });
  Whistleblower.hasMany(Complaint, { foreignKey: 'whistleBlowerID' });

  Complaint.belongsTo(ResponsibleAuthority,{foreignKey:'responsibleAuthorityID'});
  ResponsibleAuthority.hasMany(Complaint, { foreignKey: 'responsibleAuthorityID' });

  Complaint.belongsTo(Evidence,{foreignKey: 'evidenceID'});
  Evidence.hasMany(Complaint,{foreignKey: 'evidenceID'});


  Complaint.belongsTo(Resolution,{foreignKey: 'resolutionID'});
  Resolution.hasMany(Complaint,{foreignKey: 'resolutionID'});

  
  Complaint.belongsTo(CrimeScene,{foreignKey: 'crimeSceneID'});
  CrimeScene.hasMany(Complaint,{foreignKey: 'crimeSceneID'});

  Complaint.belongsTo(CategoryReport,{foreignKey: 'categoryReportID'});
  CategoryReport.belongsTo(Complaint,{foreignKey: 'categoryReportID'});






