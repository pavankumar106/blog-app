export const getAboutInfo = (req, res) => {
  res.json({
    success: true,
    data: {
      title: "About Us",
    },
  });
};
