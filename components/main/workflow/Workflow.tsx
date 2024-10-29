import WorkflowCard from "@/components/main/workflow/card/WorkflowCard";
import Slider from "@/components/main/workflow/slider/Slider";
import SectionLayout from "@/UI/Layout";
import { CardMedia } from "@mui/material";

const Workflow = () => {
  return (
    <>
      <SectionLayout
        title="How We Work"
        subtitle="Process: From Planning to Delivery, Moving Simplified."
        fullHeight={false}
        position={true}
        marginTop={14}
      >
        <CardMedia
          sx={{
            position: "absolute",
            top: "50%",
            right: -100,
            transform: "translateY(-50%)",
            width: 466,
            height: 466,
            display: { xs: "none", xl: "block" },
          }}
          component="img"
          image="/image.svg"
          alt="image"
        />
        <WorkflowCard />
        <Slider />
      </SectionLayout>
    </>
  );
};

export default Workflow;
