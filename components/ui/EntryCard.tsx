import React, { DragEvent, FC, useContext } from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { UIContext } from "../../context/ui";
import { Entry } from "../../interfaces";

interface Props {
  entry: Entry;
}

export const EntryCard: FC<Props> = ({ entry }) => {
  const {startDragging, endDragging} = useContext(UIContext);

  const onDragStart = (event: DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData("textId", entry._id);
    startDragging();
  };

  return (
    <Card
      sx={{ margin: "5px 5px" }}
      draggable
      onDragStart={onDragStart}
      onDragEnd={endDragging}
    >
      <CardActionArea>
        <CardContent>
          <Typography>{entry.description}</Typography>
        </CardContent>
        <CardActions
          sx={{ display: "flex", justifyContent: "end", paddingRight: 2 }}
        >
          <Typography variant="body2">hace 30 minutos</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
