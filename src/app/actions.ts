"use server";
import { cookies } from "next/headers";

export const setCookie = async (key: string, value: string) =>
  cookies().set(key, value);

export const getCookie = async (name: string) => cookies().get(name);
