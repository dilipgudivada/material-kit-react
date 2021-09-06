export const insuranceFormFields = {
  PatientID: null,
  GuestName: null,
  GuestDOB: null,
  InsuredName: null,
  InsuredDOB: null,
  InsuredSSN: null, // security number of usa citizen
  InsuredID: null, // Insured Id
  GroupNumber: null,
  Preventative: null,
  SurgeryCoverage: null, // oral surgery coverage second row
  BasicFillings: null,
  InsuredEmployer: null,
  InsCompanyNo: null,
  InsCompany: null,
  InsCompAddress: null,
  InsRep: null,
  Ref: null,
  RepNo: null,
  FeeSchedule: null,
  FamilyCoverage: null,
  EffectiveDate: null,
  PayorId: null,
  CalendarFiscalDates: null,
  YearlyMax: null, // $
  BenefitsUsed: null, //$
  IndDed: null,
  FamDed: null,
  DeductibleMet: null,
  MissTthClause: null,
  WaitingPeriod: null,
  HowLong: null,
  ReplacementPeriod: null,
  ProstheticPay: null,
  DowngradeComposites: null,
  DowngradeCrowns: null,
  OrthoCoveragePercentage: null,
  LifeTimeMax: null,
  OrthoDed: null,
  HasDedBeenMet: null,
  AgeLimit: null,
  OrthoPaidBy: null,
  WorkInProgress: null,
  BandingIntialPymt: null,
  D6057: null, // Percentage of coverage
  Notes: null,
  VerifiedBy: null,
  VerifiedDate: null,
  D6104: null, // percentage of coverage
  EndoRootCanals: null,
  D6056: null, // percentage of coverage
  D4263: null, // percentage of coverage
  Periodontics: null, // percentage of coverage
  D6061: null, // percentage of coverage
  D4264: null, // percentage of coverage
  OralSurgeryExtractions: null, // Oral surgery & simple extractions
  SurgExt: null, // %
  SimpleExt: null, //%
  Major: null, //%
  D6065: null, //%
  D4266: null, // %
  CrownsD2740: null, //%
  D6010: null, //%
  D7951: null, //%
  Bridges: null, //%
  D7311: null, //%
  D7952: null, //%
  Dentures: null, //%
  FileOralSurg: null,
  ImplantsD6058: null,
  D1351Sealants: false, //%
  D1351Freq: null,
  D1351Age: null,
  D1351ToothRestrictions: null,
  D1510SpaceMint: false, //%
  D1510Freq: null,
  D1510Age: null,
  D1208Flouride: false, //%
  D1208Freq: null,
  D1208Age: null,
  D0150Exam: false, //%
  D0150Freq: null,
  D0150LastDos: null,
  D1110Prophy: false, //%
  D1110Freq: null,
  D1110LastDos: null,
  D0274BiteWings: false,
  D0274Freq: null,
  D0274LastDos: null,
  D0330Pano: false,
  D0330Freq: null,
  D0330LastDos: null,
  D0220PAS: false,
  D0220Freq: null,
  D0220LastDos: null,
  Xrays: null,
  D0140SDTXAllowed: null,
  DoYouHaveToWait90Days: null,
  CanD3481BePerformedSameDay: null,
  D4381ArestinPerioChip: null,
  QuadsDoneOnSameDay: null,
  SitesDoneOnSameDay: null,
  WhatAreThePocketDepthRequirements: null,
  D9944NightGuard: false, //%
  D9944NightFreq: null,
  D9944NightLastDOS: null,
  D9944CoveredFor: null,
  D4341ScalingRootPlan: false,
  D4341ScalingRootPlanFreq: null,
  D4341ScalingRootPlanQuardsperDays: null,
  D4341ScalingRootPlanLastDos: null,
  D4355FullMonth: false,
  D4355FullMonthFreq: null,
  D4355FullMonthPocketDeptForSap: null,
  D4355FullMonthLastDos: null,
  D4910PerioMaint: false,
  D4910PerioMaintFreq: null,
  D4910PerioMaintAddEither: null,
  D4910PerioMaintLastDos: null,
  DropDownValues: null,
  D5110: null,
  D5211: null,
  D5225: null,
  D5120: null,
  D5212: null,
  D5820: null,
  D5130: null,
  D5213: null,
  D5821: null,
  D5140: null,
  D5214: null,
  D9230: null,
  D9223: null,
  D9243: null,
  D9310: null,
  D9248: null,
  D7953: null,
  D1999: null,
  Comments: null,
  isActive: true,
  requiresVerification: false,
  requiresInstantVerification: false,
  isVerifiedInstantly: false,
  isVerified: false,
};

export const generalInfoFields = [
  {
    id: "PatientID",
    name: "Patient Id",
    controlType: "text",
    isMandatory: true,
  },
  {
    id: "GuestName",
    name: "Patient Name",
    controlType: "text",
    isMandatory: true,
  },
  {
    id: "GuestDOB",
    name: "Patient DOB",
    controlType: "date",
    isMandatory: true,
  },
  {
    id: "InsuredName",
    name: "Insured Name",
    controlType: "text",
    isMandatory: true,
  },
  {
    id: "InsuredDOB",
    name: "Insured DOB",
    controlType: "date",
    isMandatory: true,

  },
  {
    id: "InsuredSSN",
    name: "Insured SSN",
    controlType: "text",
    isMandatory: true,

  },
  {
    id: "InsCompany",
    name: "Insurance Company Name",
    controlType: "text",
    isMandatory: true,
  },
  {
    id: "InsuredID",
    name: "Insured Id",
    controlType: "text",
    isMandatory: true,
  },
  {
    id: "Comments",
    name: "Comments",
    controlType: "text",
    multiline: true,
  },
  {
    id:"requiresInstantVerification",
    name: "Instant Verification Required",
    controlType: "checkbox"
  }
];

export const insuranceInfoFields = [
  {
    id: "InsuredEmployer",
    name: "Insured Employer",
    controlType: "text",
  },
  {
    id: "InsCompanyNo",
    name: "Insurance Company No",
    controlType: "text",
  },
  {
    id: "InsCompAddress",
    name: "Insurance Company Address",
    controlType: "text",
  },
  {
    id: "InsRep",
    name: "Insurance Rep",
    controlType: "text",
  },
  {
    id: "RepNo",
    name: "Ref No",
    controlType: "text",
  },
  {
    id: "GroupNumber",
    name: "Group Number",
    controlType: "text",
  },
  {
    id: "PayorId",
    name: "Payor Id",
    controlType: "text",
  },
];

export const insuranceVerificationFields = [
  {
    id: "FeeSchedule",
    name: "Fee Schedule",
    controlType: "text",
  },
  {
    id: "FamilyCoverage",
    name: "Family Coverage",
    controlType: "text",
  },
  {
    id: "EffectiveDate",
    name: "Effective Date",
    controlType: "date",
  },
  {
    id: "CalendarFiscalDates",
    name: "Calendar Fiscal Dates",
    controlType: "text",
  },
  {
    id: "YearlyMax",
    name: "Yearly Max",
    controlType: "text",
  },
  {
    id: "BenefitsUsed",
    name: "Benefits Used",
    controlType: "text",
  },
  {
    id: "IndDed",
    name: "Ind Ded",
    controlType: "text",
  },

  {
    id: "FamDed",
    name: "Fam Ded",
    controlType: "text",
  },

  {
    id: "DeductibleMet",
    name: "Deductible Met",
    controlType: "text",
  },

  {
    id: "HowLong",
    name: "How Long",
    controlType: "text",
  },

  {
    id: "ReplacementPeriod",
    name: "Replacement Period",
    controlType: "text",
  },

  {
    id: "ProstheticPay",
    name: "Prosthetic Pay",
    controlType: "text",
  },

  {
    id: "DowngradeComposites",
    name: "Downgrade Composites",
    controlType: "text",
  },

  {
    id: "DowngradeCrowns",
    name: "Downgrade Crowns",
    controlType: "text",
  },

  {
    id: "OrthoCoveragePercentage",
    name: "Ortho Coverage Percentage",
    controlType: "text",
  },

  {
    id: "LifeTimeMax",
    name: "LifeTime Max",
    controlType: "text",
  },

  {
    id: "OrthoDed",
    name: "Ortho Ded",
    controlType: "text",
  },

  {
    id: "HasDedBeenMet",
    name: "Has Ded Been Met?",
    controlType: "text",
  },
  {
    id: "AgeLimit",
    name: "Age Limit",
    controlType: "text",
  },
  {
    id: "OrthoPaidBy",
    name: "Ortho Paid By",
    controlType: "text",
  },
  {
    id: "WorkInProgress",
    name: "Work InProgress",
    controlType: "text",
  },
  {
    id: "BandingIntialPymt",
    name: "Banding Intial Payment",
    controlType: "text",
  },
];

export const insuranceHistoryFields = [
  {
    id: 'D1351Sealants',
    name: 'D1351 Sealants',
    controlType: 'text'
  },
  {
    id: 'D1351Freq',
    name: 'D1351 Freq',
    controlType: 'text'
  },
  {
    id: 'D1351Age',
    name: 'D1351Age',
    controlType: 'number'
  },
  {
    id: 'D1351ToothRestrictions',
    name: 'D1351 Tooth Restrictions',
    controlType: 'text'
  },
  {
    id: 'D1510SpaceMint',
    name: 'D1510 Space Mint',
    controlType: 'text'
  },
  {
    id: 'D1510Freq',
    name: 'D1510 Freq',
    controlType: 'text'
  },{
    id: 'D1510Age',
    name: 'D1510 Age',
    controlType: 'text'
  },{
    id: 'D1208Flouride',
    name: 'D1208 Flouride',
    controlType: 'text'
  },{
    id: 'D1208Freq',
    name: 'D1208 Freq',
    controlType: 'text'
  },{
    id: 'D1208Age',
    name: 'D1208 Age',
    controlType: 'text'
  },{
    id: 'D0150Exam',
    name: 'D0150 Exam',
    controlType: 'text'
  },{
    id: 'D0150Freq',
    name: 'D0150 Freq',
    controlType: 'text'
  },{
    id: 'D0150LastDos',
    name: 'D0150 LastDos',
    controlType: 'text'
  },{
    id: 'D1110Prophy',
    name: 'D1110 Prophy',
    controlType: 'text'
  },{
    id: 'D1110Freq',
    name: 'D1110 Freq',
    controlType: 'text'
  },{
    id: 'D1110LastDos',
    name: 'D1110 LastDos',
    controlType: 'text'
  },{
    id: 'D0274BiteWings',
    name: 'D0274 BiteWings',
    controlType: 'text'
  },{
    id: 'D0274Freq',
    name: 'D0274 Freq',
    controlType: 'text'
  },{
    id: 'D0274LastDos',
    name: 'D0274 LastDos',
    controlType: 'text'
  },{
    id: 'D0330Pano',
    name: 'D0330 Pano',
    controlType: 'text'
  },{
    id: 'D0330Freq',
    name: 'D0330 Freq',
    controlType: 'text'
  },{
    id: 'D0330LastDos',
    name: 'D0330 LastDos',
    controlType: 'text'
  },{
    id: 'D0220PAS',
    name: 'D0220 PAS',
    controlType: 'text'
  },{
    id: 'D0220Freq',
    name: 'D0220 Freq',
    controlType: 'text'
  },{
    id: 'D0220LastDos',
    name: 'D0220 LastDos',
    controlType: 'text'
  },{
    id: 'D9944NightGuard',
    name: 'D9944 Night Guard',
    controlType: 'text'
  },{
    id: 'D9944NightFreq',
    name: 'D9944 Night Guard Freq',
    controlType: 'text'
  },{
    id: 'D9944NightLastDOS',
    name: 'D9944 Night Guard LastDOS',
    controlType: 'text'
  },{
    id: 'D9944CoveredFor',
    name: 'D9944 Covered For',
    controlType: 'text'
  },{
    id: 'D4341ScalingRootPlan',
    name: 'D4341 Scaling Root Plan',
    controlType: 'text'
  },{
    id: 'D4341ScalingRootPlanFreq',
    name: 'D4341 Scaling Root plan Freq',
    controlType: 'text'
  },{
    id: 'D4341ScalingRootPlanQuardsperDays',
    name: 'D4341 Scaling RootPlan Quards per Days',
    controlType: 'text'
  },{
    id: 'D4341ScalingRootPlanLastDos',
    name: 'D4341 Scaling RootPlan LastDos',
    controlType: 'text'
  },{
    id: 'D4355FullMonth',
    name: 'D4355 FullMonth',
    controlType: 'text'
  },{
    id: 'D4355FullMonthFreq',
    name: 'D4355 FullMonth Freq',
    controlType: 'text'
  },{
    id: 'D4355FullMonthPocketDeptForSap',
    name: 'D4355 FullMonth PocketDept For Sap',
    controlType: 'text'
  },{
    id: 'D4355FullMonthLastDos',
    name: 'D4355 FullMonth LastDos',
    controlType: 'text'
  },{
    id: 'D4910PerioMaint',
    name: 'D4910 Perio Maint',
    controlType: 'text'
  },{
    id: 'D4910PerioMaintFreq',
    name: 'D4910 Perio Maint Freq',
    controlType: 'text'
  },{
    id: 'D4910PerioMaintAddEither',
    name: 'D4910 Perio Maint Add Either',
    controlType: 'text'
  },
  {
    id: "CrownsD2740",
    name: "CrownsD2740",
    controlType: "text"
  },
  {
    id: "Bridges",
    name: "Bridges",
    controlType: "text"
  },
  {
    id: "MissTthClause",
    name: "MissTthClause",
    controlType: "text"
  },
  {
    id: "WaitingPeriod",
    name: "Waiting Period",
    controlType: "text"
  },
];


export const insuranceBreakDownFields = [
  {
    id: "Preventative",
    name: "Preventative",
    controlType: "text"
  },{
    id: "BasicFillings",
    name: "Basic Fillings",
    controlType: "text"
  },{
    id: "Major",
    name: "Major",
    controlType: "text"
  },{
    id: "SurgeryCoverage",
    name: "Surgery Coverage",
    controlType: "text"
  },{
    id: "EndoRootCanals",
    name: "Endo Root Canals",
    controlType: "text"
  },{
    id: "OralSurgeryExtractions",
    name: "Oral Surgery & simple Extractions %",
    controlType: "text"
  },{
    id: "SurgExt",
    name: "Surgery Ext",
    controlType: "text"
  },{
    id: "SimpleExt",
    name: "Simple Ext",
    controlType: "text"
  },{
    id: "D6010",
    name: "D6010",
    controlType: "text"
  },{
    id: "ImplantsD6058",
    name: "Implants D6058(imp crn)",
    controlType: "text"
  },{
    id: "D6104",
    name: "D6104",
    controlType: "text"
  },{
    id: "D6056",
    name: "D6056",
    controlType: "text"
  },{
    id: "D4263",
    name: "D4263",
    controlType: "text"
  },{
    id: "Periodontics",
    name: "Periodontics",
    controlType: "text"
  },{
    id: "D6061",
    name: "D6061",
    controlType: "text"
  },{
    id: "D6065",
    name: "D6065",
    controlType: "text"
  },{
    id: "D4266",
    name: "D4266",
    controlType: "text"
  },{
    id: "D7951",
    name: "D7951",
    controlType: "text"
  },{
    id: "D7311",
    name: "D7311",
    controlType: "text"
  },{
    id: "D7952",
    name: "D7952",
    controlType: "text"
  },{
    id: "Dentures",
    name: "Dentures",
    controlType: "text"
  },{
    id: "FileOralSurg",
    name: "File Oral Surgery. Medical/Dental",
    controlType: "text"
  },{
    id: "Xrays",
    name: "Xrays",
    controlType: "text"
  },{
    id: "D0140SDTXAllowed",
    name: "D0140 SDTX Allowed",
    controlType: "text"
  },{
    id: "DoYouHaveToWait90Days",
    name: "Do You Have To Wait 90 Days after SRPs for PM?",
    controlType: "text"
  },{
    id: "CanD3481BePerformedSameDay",
    name: "Can D3481 Be Performed Same Day as D4341 / D4342 ?",
    controlType: "text"
  },{
    id: "D4381ArestinPerioChip",
    name: "D4381 Arestin Perio Chip",
    controlType: "text"
  },{
    id: "QuadsDoneOnSameDay",
    name: "# of Quads Done On Same Day",
    controlType: "text"
  },{
    id: "SSitesDoneOnSameDay",
    name: "# of Sites Done On Same Day",
    controlType: "text"
  },{
    id: "WhatAreThePocketDepthRequirements",
    name: "What Are The Pocket Depth Requirements For D4381 ?",
    controlType: "text"
  },{
    id: "D4264",
    name: "D4264",
    controlType: "text"
  },{
    id: "D6057",
    name: "D6057",
    controlType: "text"
  },{
    id: "VerifiedBy",
    name: "Verified By",
    controlType: "text"
  },{
    id: "VerifiedDate",
    name: "Verified Date",
    controlType: "date"
  },{
    id: "Notes",
    name: "Notes",
    controlType: "text"
  },
  {
    id: "isActive",
    name: "Active",
    controlType: "switch"
  }
];