import WorkFlowCardItem from "@/components/main/workflow/card/WorkFlowCardItem";
import { CardProps } from "@/types/types";
import { Box, Card } from "@mui/material";
import data from "@/data.json";
import UniversalCardLayout from "@/UI/Card";

const WorkflowCard = () => {
  return (
    <UniversalCardLayout
      variant="workflow"
      data={{
        processes: data.processes,
        processes2: data.processes2,
      }}
      CardItemComponent={WorkFlowCardItem}
    />
  );
};

export default WorkflowCard;
