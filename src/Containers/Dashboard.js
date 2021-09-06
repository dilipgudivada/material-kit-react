// Modules
import React, { useEffect, useState } from "react";
import _ from "lodash";

// UI
import {
  CircularProgress,
  Grid,
  Paper,
  Typography,
  makeStyles,
} from "@material-ui/core";

// Constants
import userRoles from "../Constants/userRoles";

// Services
import UserService from "../Services/users.service";

// Styles
const useStyles = makeStyles((theme) => {
  return {
    wrapper: {
      padding: theme.spacing(4),
      paddingLeft: theme.spacing(12),
      paddingRight: theme.spacing(12),
    },
    innerWrapper: {
      padding: theme.spacing(4),
    },
    headerWrapper: {
      marginBottom: theme.spacing(4),
    },
    headerTitle: {
      fontSize: "150%",
    },
    headerSubTitle: {},
    cardWrapper: {},
    label: {
      fontWeight: "bold",
    },
    value: {},
    spinnerWrapper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };
});

// Component
export const Dashboard = () => {
  // Hooks
  const styles = useStyles();

  // State
  const [user, setUser] = useState(null);
  const [isFetchingProfile, setIsFetchingProfile] = useState(true);

  // Get User
  const getProfile = async () => {
    try {
      setIsFetchingProfile(true);

      const user = await UserService.getProfile();

      setUser(user);

      setIsFetchingProfile(false);
    } catch (exception) {
      // TODO: Handle errors

      setIsFetchingProfile(false);
    }
  };

  useEffect(() => {
    // Get Profile
    getProfile();
  }, []);

  if (isFetchingProfile) {
    return (
      <div className={styles.wrapper}>
        <Paper>
          <div className={styles.innerWrapper}>
            <div className={styles.spinnerWrapper}>
              <CircularProgress />
            </div>
          </div>
        </Paper>
      </div>
    );
  }

  if (_.isEmpty(user)) {
    return "Failed to get user!";
  }

  const isAdmin = _.isEqual(userRoles.administrator.id, user.role);
  const isInsuranceAgent = _.isEqual(userRoles.insuranceAgent.id, user.role);
  const isDentalOffice = _.isEqual(userRoles.dentalOffice.id, user.role);

  const roleLabel = isAdmin
    ? "Administrator"
    : isInsuranceAgent
    ? "Insurance Agent"
    : isDentalOffice
    ? "Dental Office"
    : "-";

  return (
    <div className={styles.wrapper}>
      <Paper>
        <div className={styles.innerWrapper}>
          {/* Header */}
          <div className={styles.headerWrapper}>
            <div className={styles.headerTitle}>
              <Typography variant="h4">Welcome, {user.firstName}!</Typography>
            </div>
            <div className={styles.headerSubTitle}>
              <Typography variant="overline">This is your dashboard</Typography>
            </div>
          </div>

          {/* Card */}
          <div className={styles.cardWrapper}>
            <Grid container spacing={2}>
              {/* Name */}
              <Grid item xs={6}>
                <Typography className={styles.label}>Name</Typography>
                <Typography className={styles.value}>
                  {`${user.firstName} ${user.lastName}`}
                </Typography>
              </Grid>

              {/* Practice Name */}
              {isDentalOffice && (
                <Grid item xs={6}>
                  <Typography className={styles.label}>
                    Practice Name
                  </Typography>
                  <Typography className={styles.value}>
                    {user.practiceName || "-"}
                  </Typography>
                </Grid>
              )}

              {/* Tax ID */}
              <Grid item xs={6}>
                <Typography className={styles.label}>Tax ID</Typography>
                <Typography className={styles.value}>
                  {user.taxId || "-"}
                </Typography>
              </Grid>

              {/* Address */}
              <Grid item xs={6}>
                <Typography className={styles.label}>Address</Typography>
                <Typography className={styles.value}>
                  {user.address || "-"}{" "}
                  {user.zipCode ? `- ${user.zipCode}` : null}
                </Typography>
              </Grid>

              {/* Provider Name */}
              <Grid item xs={6}>
                <Typography className={styles.label}>Provider Name</Typography>
                <Typography className={styles.value}>
                  {user.providerName || "-"}
                </Typography>
              </Grid>

              {/* Email Address */}
              <Grid item xs={6}>
                <Typography className={styles.label}>Email Address</Typography>
                <Typography className={styles.value}>
                  {user.emailAddress || "-"}
                </Typography>
              </Grid>

              {/* NPI */}
              <Grid item xs={6}>
                <Typography className={styles.label}>NPI #</Typography>
                <Typography className={styles.value}>
                  {user.npiNumber || "-"}
                </Typography>
              </Grid>

              {/* Mobile Number */}
              <Grid item xs={6}>
                <Typography className={styles.label}>Mobile Number</Typography>
                <Typography className={styles.value}>
                  {user.mobileNumber || "-"}
                </Typography>
              </Grid>

              {/* Role */}
              <Grid item xs={6}>
                <Typography className={styles.label}>Role</Typography>
                <Typography className={styles.value}>{roleLabel}</Typography>
              </Grid>
            </Grid>
          </div>
        </div>
      </Paper>
    </div>
  );
};

// Exports
export default Dashboard;
