import React from "react";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import {
  Paper,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Button,
} from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import GetAppIcon from '@material-ui/icons/GetApp';

const ReportTable = ({ data, open, handleClose }) => {
  const styles = {
    label: {
      backgroundColor: "lightgray",
      // width: 150,
      // height: 50,
      border: "1px solid black",
    },
    text: {
      // width: 150,
      // height: 50,
      border: "1px solid black",
    },
    colspan2text: {
      // width: 300,
      // height: 50,
      border: "1px solid black",
    },
  };

  const exportAsPdf = () => {
    var doc = new jsPDF();
    autoTable(doc, { html: "#tableReport" });
    let name = data?.PatientID ? data.PatientID : 'report'
    doc.save(`${name}.pdf`);
  };

  const renderTable = () => {
    return (
      <Table id="tableReport">
        <TableBody>
          <TableRow>
            <TableCell style={styles.label} colSpan={2}>
              OFFICE TAX ID :
              <br />
              NPI :
            </TableCell>
            <TableCell style={styles.text} colSpan>
              XXXXXX
              <br />
              XXXX
            </TableCell>
            <TableCell style={styles.text} colSpan={2}>
              INS REP : {data?.InsRep}
            </TableCell>

            <TableCell style={styles.text} colSpan={2}>
              REF #  {data?.Ref}
            </TableCell>

            <TableCell style={styles.text} colSpan={3}>
              Fee Scehudle : {data?.FeeSchedule}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={styles.label} colspan={2}>Guest's Name:</TableCell>
            <TableCell style={styles.colspan2text}>{data?.GuestName}</TableCell>
            <TableCell style={styles.label}>Preventative:</TableCell>
            <TableCell style={styles.text}>
              {data?.Preventative}%
            </TableCell>

            <TableCell colSpan={5} style={styles.colspan2text}>
              Oral Surgery Coverage : {data?.SurgeryCoverage}
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell style={styles.label} colspan={2}>Gueest's DOB:</TableCell>
            <TableCell style={styles.colspan2text} colspan={2}>{data.GuestDOB}</TableCell>
            <TableCell style={styles.label}>
              Basic Fillings:
              <br />
              Fill Freq:
            </TableCell>
            <TableCell style={styles.text}>{data?.BasicFillings}%</TableCell>
            <TableCell style={styles.label}>
              D6057:
            </TableCell>
            <TableCell style={styles.text}>{data?.D6057}%</TableCell>
            <TableCell style={styles.label}>
              D6104:
            </TableCell>
            <TableCell style={styles.text}>{data?.D6104}%</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={styles.label} colspan={2}>Insured Name:</TableCell>
            <TableCell style={styles.colspan2text} colspan={2}>
              {data?.InsuredName}
            </TableCell>
            <TableCell style={styles.label}>Endo Root Canals:</TableCell>
            <TableCell style={styles.text}>{data?.EndoRootCanals}%</TableCell>
            <TableCell style={styles.label}>
              D6056:
            </TableCell>
            <TableCell style={styles.text}>{data?.D6056}%</TableCell>
            <TableCell style={styles.label}>
              D4263:
            </TableCell>
            <TableCell style={styles.text}>{data?.D4263}%</TableCell>
          </TableRow>

          <TableRow>
            <TableCell style={styles.label} colspan={2}>Insured DOB:</TableCell>
            <TableCell style={styles.colspan2text} colspan={2}>{data?.InsuredDOB}</TableCell>
            <TableCell style={styles.label}>Periodontics:</TableCell>
            <TableCell style={styles.text}>{data?.Periodontics}%</TableCell>
            <TableCell style={styles.label}>
              D6061:
            </TableCell>
            <TableCell style={styles.text}>{data?.D6061}%</TableCell>
            <TableCell style={styles.label}>
              D4264:
            </TableCell>
            <TableCell style={styles.text}>{data?.D4264}%</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={styles.label} colspan={2}>Insured SSN:</TableCell>
            <TableCell style={styles.colspan2text} colspan={2}>{data?.InsuredSSN}</TableCell>
            <TableCell style={styles.label}>Oral surgery & simple extractions:</TableCell>
            <TableCell style={styles.text}>{data?.OralSurgeryExtractions}</TableCell>
            <TableCell style={styles.label}>
              SURG EXT: 
            </TableCell>
            <TableCell style={styles.text}>{data?.SurgExt}%</TableCell>
            <TableCell style={styles.label}>
              SIMPLE EXT:
            </TableCell>
            <TableCell style={styles.text}>{data?.SimpleExt}%</TableCell>
          </TableRow>

          <TableRow>
            <TableCell style={styles.label} colspan={2}>Insured ID:</TableCell>
            <TableCell style={styles.colspan2text} colspan={2}>{data?.InsuredID}</TableCell>
            <TableCell style={styles.label}>Major:</TableCell>
            <TableCell style={styles.text}>{data?.Major}</TableCell>
            <TableCell style={styles.label}>
              D6065: 
            </TableCell>
            <TableCell style={styles.text}>{data?.D6065}%</TableCell>
            <TableCell style={styles.label}>
              D4266:
            </TableCell>
            <TableCell style={styles.text}>{data?.D4266}%</TableCell>
          </TableRow>

          <TableRow>
            <TableCell style={styles.label} colspan={2}>Insured Employer:</TableCell>
            <TableCell style={styles.colspan2text} colspan={2}>{data?.InsuredEmployer}</TableCell>
            <TableCell style={styles.label}>Crowns (D2740):</TableCell>
            <TableCell style={styles.text}>{data?.CrownsD2740} %</TableCell>
            <TableCell style={styles.label}>
              D6010: 
            </TableCell>
            <TableCell style={styles.text}>{data?.D6010}%</TableCell>
            <TableCell style={styles.label}>
              D7951:
            </TableCell>
            <TableCell style={styles.text}>{data?.D7951}%</TableCell>
          </TableRow>

          <TableRow>
            <TableCell style={styles.label} colspan={2}>Group Number:</TableCell>
            <TableCell style={styles.colspan2text} colspan={2}>{data?.GroupNumber}</TableCell>
            <TableCell style={styles.label}>Bridges:</TableCell>
            <TableCell style={styles.text}>{data?.Bridges}%</TableCell>
            <TableCell style={styles.label}>
              D7311: 
            </TableCell>
            <TableCell style={styles.text}>{data?.D7311}%</TableCell>
            <TableCell style={styles.label}>
              D7952:
            </TableCell>
            <TableCell style={styles.text}>{data?.D7952}%</TableCell>
          </TableRow>

          <TableRow>
            <TableCell style={styles.label} colspan={2}>Ins COMPANY #:</TableCell>
            <TableCell style={styles.colspan2text} colspan={2}>{data?.InsCompanyNo}</TableCell>
            <TableCell style={styles.label}>Dentures:</TableCell>
            <TableCell style={styles.text}>{data?.Dentures}%</TableCell>
            <TableCell style={styles.label}>
              File Oral Surg. Medical /Dental : 
            </TableCell>
            <TableCell style={styles.text} colspan={3}>{data?.FileOralSurg}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell style={styles.label} colspan={2}>Ins COMPANY:</TableCell>
            <TableCell style={styles.colspan2text} colspan={2}>{data?.InsCompany}</TableCell>
            <TableCell style={styles.label}>Implants D6058 (imp crn):</TableCell>
            <TableCell style={styles.text}>{data?.ImplantsD6058}%</TableCell>
            <TableCell style={styles.text}> &nbsp;  </TableCell>
            <TableCell style={styles.label}>
              Age: 
            </TableCell>
            <TableCell style={styles.label} colspan={2}>Tooth Restrictions:</TableCell>
          </TableRow>

          <TableRow>
            <TableCell style={styles.label} colspan={2}>INSURANCE ADDRESS:</TableCell>
            <TableCell style={styles.colspan2text} colspan={2}>{data?.InsCompAddress}</TableCell>
            <TableCell style={styles.label}>D1351 sealants:</TableCell>
            <TableCell style={styles.text}>{data?.D1351Sealants}%</TableCell>
            <TableCell style={styles.text}>
              Freq:{data?.D1351Freq} 
            </TableCell>
            <TableCell style={styles.text}>{data?.D1351Age}</TableCell>
            <TableCell style={styles.text} colspan={2}>{data?.D1351ToothRestrictions}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell style={styles.label} colspan={2}>PAYOR ID:</TableCell>
            <TableCell style={styles.colspan2text} colspan={2}>{data?.PayorId}</TableCell>
            <TableCell style={styles.label}>D1510 / D1520 space mnt:</TableCell>
            <TableCell style={styles.text}>{data?.D1510SpaceMint}%</TableCell>
            <TableCell style={styles.text} colspan={2}>
              Freq: {data?.D1510Freq}
            </TableCell>
            <TableCell style={styles.label}>Age</TableCell>
            <TableCell style={styles.text}>{data?.D1510Age}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell style={styles.label} colspan={2}>EFFECTIVE DATE:</TableCell>
            <TableCell style={styles.colspan2text} colspan={2}>{data?.EffectiveDate}</TableCell>
            <TableCell style={styles.label}>D1208 Flouride:</TableCell>
            <TableCell style={styles.text}>{data?.D1208Flouride}%</TableCell>
            <TableCell style={styles.text} colspan={2}>
              Freq: {data?.D1208Freq}
            </TableCell>
            <TableCell style={styles.label}>Age</TableCell>
            <TableCell style={styles.text}>{data?.D1208Age}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell style={styles.label} colspan={2}>FAMILY COVERAGE:</TableCell>
            <TableCell style={styles.colspan2text} colspan={2}>{data?.FamilyCoverage}</TableCell>
            <TableCell style={styles.label}>D0150 Exam:</TableCell>
            <TableCell style={styles.text}>{data?.D0150Exam}%</TableCell>
            <TableCell style={styles.text} colspan={2}>
              Freq: {data?.D0150Freq}
            </TableCell>
            <TableCell style={styles.label}>Last DOS</TableCell>
            <TableCell style={styles.text}>{data?.D0150LastDos}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell style={styles.label} colspan={2}>
              CALENDER / FISCAL YEAR DATES:
            </TableCell>
            <TableCell style={styles.colspan2text} colspan={2}>{data?.CalendarFiscalDates}</TableCell>
            <TableCell style={styles.label}>D1110 Prophy:</TableCell>
            <TableCell style={styles.text}>{data?.D1110Prophy}%</TableCell>
            <TableCell style={styles.text} colspan={2}>
              Freq: {data?.D1110Freq}
            </TableCell>
            <TableCell style={styles.label}>Last DOS</TableCell>
            <TableCell style={styles.text}>{data?.D1110LastDos}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell style={styles.label} colspan={2}>YEARLY MAX :</TableCell>
            <TableCell style={styles.colspan2text} colspan={2}>$ {data?.YearlyMax}</TableCell>
            <TableCell style={styles.label}>D0274 Bite Wings:</TableCell>
            <TableCell style={styles.text}>{data?.D0274BiteWings}%</TableCell>
            <TableCell style={styles.text} colspan={2}>
              Freq: {data?.D0274Freq}
            </TableCell>
            <TableCell style={styles.label}>Last DOS</TableCell>
            <TableCell style={styles.text}>{data?.D0274LastDos}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell style={styles.label} colspan={2}>BENEFITS USED:</TableCell>
            <TableCell style={styles.colspan2text} colspan={2}>$ {data?.BenefitsUsed}</TableCell>
            <TableCell style={styles.label}>D0330 pano:</TableCell>
            <TableCell style={styles.text}>{data?.D0330Pano}%</TableCell>
            <TableCell style={styles.text} colspan={2}>
              Freq: {data?.D0330Freq}
            </TableCell>
            <TableCell style={styles.label}>Last DOS</TableCell>
            <TableCell style={styles.text}>{data?.D0330LastDos}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={styles.label} colspan={2}>
              DED. APPLIES ON:
              <br />
              Prev/tnc/mjr/orth
            </TableCell>
            <TableCell style={styles.text} colspan={1.5}>Ind Ded $: {data?.IndDed}</TableCell>
            <TableCell style={styles.text} colspan={1.5}>Farm Ded $: {data?.FamDed}</TableCell>
            <TableCell style={styles.label}>D0220 PA's:</TableCell>
            <TableCell style={styles.text}>{data?.D0220PAS}%</TableCell>
            <TableCell style={styles.text}  colspan={2}>
              Freq: {data?.D0220Freq}
            </TableCell>
            <TableCell style={styles.label}>Last DOS</TableCell>
            <TableCell style={styles.text}>{data?.D0220LastDos}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell style={styles.label} colspan={2}>Deductible met:</TableCell>
            <TableCell style={styles.colspan2text} colspan={2}>{data?.DeductibleMet}</TableCell>
            <TableCell style={styles.label}>XRAYS:</TableCell>
            <TableCell style={styles.text}>{data?.Xrays}</TableCell>
            <TableCell style={styles.text} colspan={4}>
              D0140:   {data?.D0140SDTXAllowed}&nbsp; SDTX ALLOWED ?
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell style={styles.label} colspan={2}>Miss Tth clause:</TableCell>
            <TableCell style={styles.colspan2text} colspan={2}> {data?.MissTthClause}</TableCell>
            <TableCell style={styles.label}>D9944 Night Guard:</TableCell>
            <TableCell style={styles.text}> {data?.D9944NightGuard}%</TableCell>
            <TableCell style={styles.text} colspan={2}>
              Freq:  {data?.D9944NightFreq}
            </TableCell>
            <TableCell style={styles.label}>Last DOS</TableCell>
            <TableCell style={styles.text}> {data?.D9944NightLastDOS}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell style={styles.label} colspan={2}>Waiting Period:</TableCell>
            <TableCell style={styles.colspan2text} colspan={2}> {data?.WaitingPeriod}</TableCell>
            <TableCell style={styles.label}>D9944 COVERED For:</TableCell>
            <TableCell style={styles.text} colspan={5}>{data?.D9944CoveredFor}%</TableCell>
          </TableRow>

          <TableRow>
            <TableCell style={styles.label} colspan={2}>How long:</TableCell>
            <TableCell style={styles.colspan2text}  colspan={2}>{data?.HowLong}</TableCell>
            <TableCell style={styles.label}>D4341 Scaling & root planning:</TableCell>
            <TableCell style={styles.text}>{data?.D4341ScalingRootPlan}%</TableCell>
            <TableCell style={styles.text} colspan={2}>Freq:{data?.D4341ScalingRootPlanFreq}</TableCell>
            <TableCell style={styles.text}>Quads per day:{data?.D4341ScalingRootPlanQuardsperDays}</TableCell>
            <TableCell style={styles.text}>Last DOS:{data?.D4341ScalingRootPlanLastDos}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell style={styles.label} colspan={2}>Replacement Period:</TableCell>
            <TableCell style={styles.colspan2text} colspan={2}>{data?.ReplacementPeriod}</TableCell>
            <TableCell style={styles.label}>D4355 Full Mouth Debridement:</TableCell>
            <TableCell style={styles.text}>{data?.D4355FullMonth}%</TableCell>
            <TableCell style={styles.text} colspan={2}>Freq:{data?.D4355FullMonthFreq}</TableCell>
            <TableCell style={styles.text}>Pocket Dept for SAP :{data?.D4355FullMonthPocketDeptForSap}</TableCell>
            <TableCell style={styles.text}>Last DOS:{data?.D4355FullMonthLastDos}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={styles.label} colspan={2}>Prosthetic Pay:</TableCell>
            <TableCell style={styles.colspan2text} colspan={2}>{data?.ProstheticPay}</TableCell>
            <TableCell style={styles.label}>D4910 perio Maint:</TableCell>
            <TableCell style={styles.text}>{data?.D4910PerioMaint}%</TableCell>
            <TableCell style={styles.text} colspan={2}>Freq:{data?.D4910PerioMaintFreq}</TableCell>
            <TableCell style={styles.text}>Add / Either :{data?.D4910PerioMaintAddEither}</TableCell>
            <TableCell style={styles.text}>Last DOS:{data?.D4910PerioMaintLastDos}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell style={styles.label} colspan={2}>
              Downgrade compsites ?(-20)
            </TableCell>
            <TableCell style={styles.colspan2text} >{data?.DowngradeComposites}</TableCell>
            <TableCell style={styles.label} colspan={2}>Do you have to wait 90 days after SRPS for PM 
            ?</TableCell>
            <TableCell style={styles.text}>{data?.DoYouHaveToWait90Days}</TableCell>
            <TableCell style={styles.label} colspan={2}>Can D4381 be performed same day as D4341/D$342?</TableCell>
            <TableCell style={styles.text} colspan>{data?.CanD3481BePerformedSameDay}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell style={styles.label} colspan={2}>Downgrade crowns ?(-10)</TableCell>
            <TableCell style={styles.colspan2text}>{data?.DowngradeCrowns}</TableCell>
            <TableCell style={styles.label} colspan={2}>D4381 Arest in Period Chip</TableCell>
            <TableCell style={styles.text}>{data?.D4381ArestinPerioChip}</TableCell>
            <TableCell style={styles.label} colspan={2}># of quads Done on Same Day</TableCell>
            <TableCell style={styles.text} colspan={2}>{data?.D4381ArestinPerioChip}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={styles.label} colspan={2}>Ortho Coverage</TableCell>
            <TableCell style={styles.text} colspan={2}>{data?.OrthoCoveragePercentage} %</TableCell>
            <TableCell style={styles.label}>Lifetime Max:</TableCell>
            <TableCell style={styles.text}>$ {data?.LifeTimeMax}</TableCell>
            <TableCell style={styles.label}>What are the pocket depth requirements  for D4381?</TableCell>
            <TableCell style={styles.text}>{data?.WhatAreThePocketDepthRequirements}</TableCell>
            <TableCell style={styles.label}># of Sites Done on Same Day</TableCell>
            <TableCell style={styles.text}>{data?.SitesDoneOnSameDay}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell style={styles.label} >Ortho Ded $</TableCell>
            <TableCell style={styles.text}>$ {data?.OrthoDed}</TableCell>
            <TableCell style={styles.label}>Benefits Used:</TableCell>
            <TableCell style={styles.text}>$ {data.BenefitsUsed}</TableCell>
           
           <TableCell style={styles.label} colspan={0.5}>D5110</TableCell>
            <TableCell style={styles.text} colspan={0.5}>{data?.D5110}%</TableCell>
             <TableCell style={styles.label} colspan={0.5}>D5211</TableCell>
            <TableCell style={styles.text} colspan={0.5}>{data?.D5211}%</TableCell>
            <TableCell style={styles.label} colspan={0.5}>D5225</TableCell>
            <TableCell style={styles.text} colspan={0.5}>{data?.D5225}%</TableCell>
          </TableRow>

          <TableRow>
            <TableCell style={styles.label} colspan={2}>Has Ded been met</TableCell>
            <TableCell style={styles.colspan2text} colspan={2}>$ {data?.HasDedBeenMet}</TableCell>
            <TableCell style={styles.label}>D5120</TableCell>
            <TableCell style={styles.colspan2text}>{data?.D5120}%</TableCell>
            <TableCell style={styles.label}>D5212</TableCell>
            <TableCell style={styles.colspan2text}>{data?.D5212}%</TableCell>
            <TableCell style={styles.label}>D5820</TableCell>
            <TableCell style={styles.colspan2text}>{data?.D5820}%</TableCell>
          </TableRow>

          <TableRow>
            <TableCell style={styles.label} colspan={2}>Age Limit</TableCell>
            <TableCell style={styles.text} colspan={2}>{data?.AgeLimit}</TableCell>
            <TableCell style={styles.label}>D5130</TableCell>
            <TableCell style={styles.colspan2text}>{data?.D5130}%</TableCell>
            <TableCell style={styles.label}>D5213</TableCell>
            <TableCell style={styles.colspan2text}>{data?.D5213}%</TableCell>
            <TableCell style={styles.label}>D5821</TableCell>
            <TableCell style={styles.colspan2text}>{data?.D5821}%</TableCell>
          </TableRow>

          <TableRow>
            <TableCell style={styles.label} colspan={2}>Ortho Paid by</TableCell>
            <TableCell style={styles.colspan2text}colspan={2}>{data?.OrthoPaidBy}</TableCell>
            <TableCell style={styles.label}>D5140</TableCell>
            <TableCell style={styles.colspan2text}>{data?.D5140}%</TableCell>
            <TableCell style={styles.label}>D5214</TableCell>
            <TableCell style={styles.colspan2text}>{data?.D5214}%</TableCell>
            <TableCell style={styles.label}>D9230</TableCell>
            <TableCell style={styles.colspan2text}>{data?.D9230}%</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={styles.label} colspan={2}>Work in progress elig?</TableCell>
            <TableCell style={styles.colspan2text} colspan={2}>{data?.WorkInProgress}</TableCell>
            <TableCell style={styles.label}>D9223</TableCell>
            <TableCell style={styles.colspan2text}>{data?.D9223}%</TableCell>
            <TableCell style={styles.label}>D9243</TableCell>
            <TableCell style={styles.colspan2text}>{data?.D9243}%</TableCell>
            <TableCell style={styles.label}>D9310</TableCell>
            <TableCell style={styles.colspan2text}>{data?.D9310}%</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={styles.label} colspan={2}>
              Diagnostic / Banding
              <br />
              Initial Pymt:
            </TableCell>
            <TableCell style={styles.colspan2text}>{data?.BandingIntialPymt}</TableCell>
            <TableCell style={styles.label}>D9248</TableCell>
            <TableCell style={styles.colspan2text}>{data?.D9248}%</TableCell>
            <TableCell style={styles.label}>D7953</TableCell>
            <TableCell style={styles.colspan2text}>{data?.D7953}%</TableCell>
            <TableCell style={styles.colspan2text} colspan={3}>
              D1999 : {data?.D1999}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={styles.label} colspan={2}>Notes:</TableCell>
            <TableCell style={styles.colspan2text} colspan={8}>
            {data?.Notes}
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell style={styles.label} colspan={2}>Verified By:</TableCell>
            <TableCell style={styles.colspan2text}>{data?.D5VerifiedBy140}</TableCell>
            <TableCell style={styles.label}>Date:{data?.VerifiedDate}</TableCell>
            <TableCell colspan={6} style={styles.text}>
              Benefits: IN - NETWORK: YES/ NO &nbsp; OUT - NETWORK: YES/NO
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="lg">
      <div>
        <div style={{ float: "right"}}>
          <GetAppIcon onClick={exportAsPdf} color="primary" style={{ fontSize: 40 }}/>
          <Button color="secondary" onClick={handleClose} variant="contained" style ={{ position: 'relative', bottom: 14, margin: "0px 10px"}}> Close</Button>
        </div>
        <iframe
          id="ifmcontentstoprint"
          title="print form"
          style={{ height: "0px", width: "0px", position: "absolute" }}
        ></iframe>
        <TableContainer component={Paper} id="table-data-container">
          {renderTable()}
        </TableContainer>
      </div>
    </Dialog>
  );
};

export default ReportTable;
