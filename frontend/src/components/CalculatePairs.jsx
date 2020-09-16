import React from "react";
import { Button } from "@material-ui/core";
import { useTranslation } from "react-i18next";

export default function CalculatePairs() {

  const { t } = useTranslation();
  return (
    <Button variant="contained" type="submit">
      {t("calculatePairs")}
    </Button>
  );
}
