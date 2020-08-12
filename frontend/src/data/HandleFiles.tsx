import React from "react";

export default function HandleFiles(files: any) {
  var reader = new FileReader();
  reader.onload = function (e) {
    // Use reader.result
    alert(reader.result);
  };
  reader.readAsText(files[0]);
}
