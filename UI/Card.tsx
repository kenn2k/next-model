import { Box, Card } from "@mui/material";

interface CardItemProps {
  id: string | number;
  title: string;
  description?: string;
  content?: string;
  author?: string;
}

type CardVariant = "benefits" | "reviews" | "workflow";

interface UniversalCardLayoutProps {
  variant: CardVariant;
  data: CardItemProps[] | { [key: string]: CardItemProps[] };
  CardItemComponent: React.FC<any>;
  containerProps?: {
    mt?: number;
    gap?: number;
    maxWidth?: string | number;
    display?: { [key: string]: string };
  };
}

const UniversalCardLayout: React.FC<UniversalCardLayoutProps> = ({
  variant,
  data,
  CardItemComponent,
  containerProps = {},
}) => {
  const renderBenefits = (items: CardItemProps[]) => {
    const firstGroup = items.slice(0, 3);
    const secondGroup = items.slice(3, 6);

    return (
      <Box
        display="flex"
        height="100%"
        justifyContent="center"
        gap={3}
        alignItems="center"
        sx={{
          flexDirection: { xs: "column", sm: "column", md: "row" },
        }}
      >
        <Card
          sx={{
            padding: 3,
            display: "flex",
            gap: 3,
            flexDirection: "column",
            borderRadius: 4,
            maxWidth: "500px",
          }}
        >
          {firstGroup.map((item) => (
            <CardItemComponent
              key={item.id}
              title={item.title}
              description={item.description}
            />
          ))}
        </Card>
        <Card
          sx={{
            padding: 3,
            borderRadius: 4,
            maxWidth: "500px",
            display: "flex",
            gap: 3,
            flexDirection: "column",
          }}
        >
          {secondGroup.map((item) => (
            <CardItemComponent
              key={item.id}
              title={item.title}
              description={item.description}
            />
          ))}
        </Card>
      </Box>
    );
  };

  const renderReviews = (items: CardItemProps[]) => {
    return (
      <Box
        display="flex"
        mt={containerProps.mt || 3}
        gap={containerProps.gap || 6}
        sx={{ display: containerProps.display || { xs: "none", lg: "flex" } }}
        justifyContent="space-between"
      >
        {items.map((review) => (
          <CardItemComponent
            key={review.id}
            content={review.content}
            author={review.author}
            title={review.title}
          />
        ))}
      </Box>
    );
  };

  const renderWorkflow = (data: {
    processes: CardItemProps[];
    processes2: CardItemProps[];
  }) => {
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
            {data.processes.map((card) => (
              <CardItemComponent
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
            {data.processes2.map((card) => (
              <CardItemComponent
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

  const renderContent = () => {
    switch (variant) {
      case "benefits":
        return renderBenefits(data as CardItemProps[]);
      case "reviews":
        return renderReviews(data as CardItemProps[]);
      case "workflow":
        return renderWorkflow(
          data as { processes: CardItemProps[]; processes2: CardItemProps[] }
        );
      default:
        return null;
    }
  };

  return renderContent();
};

export default UniversalCardLayout;