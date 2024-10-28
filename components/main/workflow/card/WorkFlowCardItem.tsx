import { CardProps } from "@/types/types";
import { Box, Typography } from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import InboxIcon from "@mui/icons-material/Inbox";
import EditNoteIcon from "@mui/icons-material/EditNote";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import UnarchiveIcon from "@mui/icons-material/Unarchive";
interface IconsType {
  [key: string]: JSX.Element;
}
const WorkFlowCardItem = ({ title, description }: CardProps) => {
  const icons: IconsType = {
    "Initial Consultation and Quote": <PeopleAltIcon />,
    "Comprehensive Planning": <EditNoteIcon />,
    "Packing and Preparation": <InboxIcon />,
    "Loading and Transportation": <LocalShippingIcon />,
    "Unpacking ": <UnarchiveIcon />,
    "Final Inspection": <CheckBoxIcon />,
  };
  return (
    <>
      <Box>
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
              fontWeight: 500,
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
      </Box>
    </>
  );
};

export default WorkFlowCardItem;
