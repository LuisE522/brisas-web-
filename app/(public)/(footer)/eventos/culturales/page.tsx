import EventosCulturales from "@/components/EventosCulturales/EventosCulturales";
import { API_URL } from "@/const";
import { getAuthToken } from "@/lib/getUserDataServer";
import React from "react";

export default async function EventosCulturalesPage() {
  const token = getAuthToken();

  const response = await fetch(`${API_URL}/eventos-culturales/list`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    cache: "no-cache",
  });

  const res = await response.json();

  console.log(res)

  return (
    <>
      <EventosCulturales imagenes={res} />
    </>
  );
}
