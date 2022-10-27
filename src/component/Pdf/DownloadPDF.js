import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React from "react";
import Detail from "../Detail/Detail";

const DownloadPDF = () => {
  const exportPDE = () => {
    const input = document.getElementById("home");
    html2canvas(input, {
      logging: true,
      lerrerRendering: 1,
      useCORS: true,
    }).then((canvas) => {
      const imgWidht = 208;
      const imgHeight = (canvas.height * imgWidht) / canvas.width;
      const imgData = canvas.toDataURL("img/png");
      const pdf = new jsPDF("p", "mm", "a4");
      pdf.addImage(imgData, "PNG", 0, 1, 0, imgWidht, imgHeight);
      pdf.save("information.pdf");
    });
  };

  return (
    <div>
      <button onClick={exportPDE}>download</button>
      <header id="home">
        <Detail></Detail>
      </header>
    </div>
  );
};

export default DownloadPDF;
