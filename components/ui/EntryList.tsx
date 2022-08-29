import React, { DragEvent, FC, useContext, useMemo } from "react";
import { List, Paper } from "@mui/material";
import { EntriesContext } from "../../context/entries";
import { EntryStatus } from "../../interfaces";
import { EntryCard } from "./EntryCard";
import styles from "./EntryList.module.css";
import { UIContext } from "../../context/ui";

interface Props {
  status: EntryStatus;
}

export const EntryList: FC<Props> = ({ status }) => {
  const { entries, updatedEntry } = useContext(EntriesContext);
  const { isDragging, endDragging } = useContext(UIContext);

  const entriesByStatus = useMemo(
    () => entries.filter((entry) => entry.status === status),
    [entries]
  );

  const allowDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
    const id = event.dataTransfer.getData("textId");
    const entry = entries.find((e) => e._id === id)!;
    entry.status = status;
    updatedEntry(entry);
    endDragging();
  };

  return (
    <div
      onDrop={onDropEntry}
      onDragOver={allowDrop}
      className={isDragging ? styles.dragging : ""}
    >
      <Paper
        className={styles.scrollbar}
        sx={{
          height: "calc(100vh - 160px)",
          overflowY: "scroll",
          backgroundColor: "transparent",
        }}
      >
        <List sx={{ opacity: isDragging ? "0.2" : "1", transition: "all .3s" }}>
          {entriesByStatus.map((entry) => {
            return <EntryCard key={entry._id} entry={entry}></EntryCard>;
          })}
        </List>
      </Paper>
    </div>
  );
};
