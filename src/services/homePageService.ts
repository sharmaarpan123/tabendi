import axios from "axios";
import URLS from "./urls";
import { checkResponse } from "@/utils/commonFunc";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getHomePageData() {
  try {
    const response = await axios.get(`${API_BASE_URL}${URLS.HOME_PAGE_DATA}`);
    if (checkResponse({ res: response })) {
      return response.data;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching home page data:", error);
    return null;
  }
}

export async function getTestimonialsData() {
  try {
    const response = await axios.get(`${API_BASE_URL}${URLS.TESTIMONIALS_DATA}`);
    if (checkResponse({ res: response })) {
      return response.data;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching testimonials data:", error);
    return null;
  }
}


