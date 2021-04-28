import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reports, getCrimeCategories, updateReport } from "../actions";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  IconButton,
  Typography,
  Box,
  Grid,
  Stepper,
  Step,
  StepLabel,
  Button,
} from "@material-ui/core";
import clsx from "clsx";
import PropTypes from "prop-types";

import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 645,
  },
}));

/**
 * @author
 * @function Reports
 **/

const Reports = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [type, setType] = useState("");

  const report = useSelector((state) => state.report);
  const category = useSelector((state) => state.category);

  const createCats = (categories, options = []) => {
    categories.map((cats) => {
      options.push({ value: cats._id, name: cats.name });
    });

    return options;
  };

  useEffect(() => {
    dispatch(reports());
    dispatch(getCrimeCategories());
  }, []);

  const onReportUpdate = (reportId) => {
    const payload = {
      reportId,
      type,
    };
    dispatch(updateReport(payload));
  };
  return (
    <Grid container justify="space-between">
      {report.reports.map((reps) => (
        <Grid item>
          <Card className={classes.root}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={reps._id}
              subheader={reps.createdAt}
            />

            <CardContent>
              {reps.report.map((locrep) => (
                <>
                  <Typography>Category: {locrep.category.name}</Typography>
                  <Typography>Location: {locrep.location.name}</Typography>
                  <Typography>Report:{locrep.reportText}</Typography>
                  {/* <select>
                    {reps.report[0].reportStatus.map(reppe => {
                        return (
                          <>
                            {!reppe.isCompleted ? (
                              <option value={reppe.type}>{reppe.type}</option>
                            ) : null}
                          </>
                        );
                    })}
                  </select> */}
                  
                  <select onChange={(e) => setType(e.target.value)}>
                    {locrep.reportStatus.map((lo) => {
                      return (
                        <>
                          {!lo.isCompleted ? (
                            <option value={lo.type}>{lo.type}</option>
                          ) : null}
                        </>
                      );
                    })}
                  </select>
                  <Button onClick={() => onReportUpdate(locrep._id)}>
                    CHANGE
                  </Button>
                  <hr />
                </>
              ))}

              <select onChange={(e) => setType(e.target.value)}>
                {reps.reportStatus.map((status) => {
                  return (
                    <>
                      {!status.isCompleted ? (
                        <option value={status.type}>{status.type}</option>
                      ) : null}
                    </>
                  );
                })}
              </select>
              <Button onClick={() => onReportUpdate(reps._id)}>
                    CHANGE
                  </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Reports;
