import Elenco from "@/components/Elenco/Elenco";
import { API_URL } from "@/const";
import { getAuthToken } from "@/lib/getUserDataServer";
import React from "react";

export default async function ElencoPage() {
  const token = getAuthToken();

  const response = await fetch(`${API_URL}/talleres/list`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    cache: "no-cache",
  });

  const res = await response.json();

  console.log(res);

  return (
    <>
      <Elenco imagenes={res} />
    </>
  );
}
