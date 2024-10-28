import WorkFlowCardItem from "@/components/main/workflow/card/WorkFlowCardItem";
import { CardProps } from "@/types/types";
import { Box, Card } from "@mui/material";
import data from "@/data.json";

const WorkflowCard = () => {
  const processes = data.processes;
  const processes2 = data.processes2;
  return (
    <Box>
      <Card
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          maxWidth: "905px",
          borderRadius: 4,
          padding: 3,
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box>
          {processes.map((card: CardProps) => (
            <WorkFlowCardItem
              key={card.id}
              description={card.description}
              title={card.title}
            />
          ))}
        </Box>
        <Box
          sx={{
            width: 302,
            height: 302,
            borderRadius: 4,
            backgroundColor: "grey.300",
            mt: { xs: 2, md: 0 },
          }}
        />
      </Card>

      <Card
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          maxWidth: "905px",
          borderRadius: 4,
          padding: 2,

          mt: 8,
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            width: 302,
            height: 302,
            borderRadius: 4,
            backgroundColor: "grey.300",
            mb: { xs: 2, md: 0 },
          }}
        />
        <Box ml={3}>
          {processes2.map((card: CardProps) => (
            <WorkFlowCardItem
              key={card.id}
              description={card.description}
              title={card.title}
            />
          ))}
        </Box>
      </Card>
    </Box>
  );
};

export default WorkflowCard;
