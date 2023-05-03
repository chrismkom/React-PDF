import React from "react";
import { Paper, Box } from "@material-ui/core";

const PDFViewer = ({ url }) => {
  return (
    <Box mt={2} mb={2}>
      <Paper elevation={3}>
        <iframe src={url} style={{ height: 900, width: 900 }}></iframe>
      </Paper>
    </Box>
  );
};

const App = () => {
  return (
    <div className="App">
      <PDFViewer url="https://mkdocs-201908.s3.sa-east-1.amazonaws.com:443/514/production/3ea6a8fb63f1f4798c5623794dafce68_514/production/PESQUISAINTERNAMKOMBET-NOVEMBERMKOM.pdf" />
    </div>
  );
};

export default App;
