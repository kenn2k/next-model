import { CardProps } from "@/types/types";
import { Box, Typography } from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import InboxIcon from "@mui/icons-material/Inbox";
import EditNoteIcon from "@mui/icons-material/EditNote";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import UnarchiveIcon from "@mui/icons-material/Unarchive";
import Image from "next/image";
interface IconsType {
  [key: string]: JSX.Element;
}
const WorkFlowCardItem = ({ title, description }: CardProps) => {
  const icons: IconsType = {
    "Initial Consultation and Quote": (
      <Image
        src="/human.svg"
        alt="Initial Consultation"
        width={16}
        height={16}
      />
    ),
    "Comprehensive Planning": (
      <Image
        src="/planning.svg"
        alt="Comprehensive Planning"
        width={16}
        height={16}
      />
    ),
    "Packing and Preparation": (
      <Image
        src="/packing.svg"
        alt="Packing and Preparation"
        width={16}
        height={16}
      />
    ),
    "Loading and Transportation": (
      <Image
        src="/loading.svg"
        alt="Loading and Transportation"
        width={16}
        height={16}
      />
    ),
    "Unpacking ": (
      <Image src="/unpacking.svg" alt="Unpacking" width={16} height={16} />
    ),
    "Final Inspection": (
      <Image
        src="/inspection.svg"
        alt="Final Inspection"
        width={16}
        height={16}
      />
    ),
  };
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {icons[title] && (
          <Box
            sx={{
              marginRight: 2,
              backgroundColor: "success.main",
              borderRadius: "50%",
              color: "white",
              padding: "0.3rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {icons[title]}
          </Box>
        )}
        <Typography
          color="info"
          component="div"
          sx={{
            lineHeight: { xs: 1, lg: 2 },
            fontWeight: { sm: 400, lg: 500 },
            typography: { xs: "h6", md: "h5" },
          }}
        >
          {title}
        </Typography>
      </Box>
      <Typography
        color="info"
        variant="body1"
        component="div"
        lineHeight={1.5}
        mb={1.5}
      >
        {description}
      </Typography>
    </>
  );
};

export default WorkFlowCardItem;
