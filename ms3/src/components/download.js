import React from "react";

const DownloadButton = () => {
  const handleDownload = () => {
    // Create an empty ZIP file
    const blob = new Blob([], { type: "application/zip" });

    // Create a temporary URL for the blob
    const url = URL.createObjectURL(blob);

    // Create a link element and simulate a click to trigger the download
    const link = document.createElement("a");
    link.href = url;
    link.download = "AttachedDocuments.zip";
    link.click();

    // Clean up the temporary URL
    URL.revokeObjectURL(url);
  };

  return (
    <button
      className="btn btn-primary btn-rounded col-3 m-2"
      onClick={handleDownload}>
      Download Documents
    </button>
  );
};

export default DownloadButton;
